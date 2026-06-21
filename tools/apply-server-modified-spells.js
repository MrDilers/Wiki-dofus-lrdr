const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const RECOVERY_ROOT = path.join(ROOT, "infos récupération", "sorts serveur utilisés");
const LIST_FILE = path.join(ROOT, "sorts modifiés.txt");

const CLASS_KEYS = {
  "CRÂ": "cra",
  SADIDA: "sadida",
  SACRIEUR: "sacrieur",
  PANDAWA: "pandawa",
  "FÉCA": "feca",
  OSAMODAS: "osamodas",
  ENUTROF: "enutrof",
  SRAM: "sram",
  "XÉLOR": "xelor",
  ECAFLIP: "ecaflip",
  ENIRIPSA: "eniripsa",
  IOP: "iop",
};

const PANEL_SOURCE_INDICES = {
  enutrof: [0, 1, 2, 3],
  xelor: [0, 1, 2, 3, 4, 5],
  eniripsa: [0, 1, 2],
  iop: [0, 2, 3, 4],
};

function normalize(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "");
}

function slugify(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function loadWindowData(filename, property) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(filename, "utf8"), context, { timeout: 2_000 });
  return JSON.parse(JSON.stringify(context.window[property]));
}

function parseModifiedSpellIds() {
  const result = {};
  let currentClass = null;
  for (const line of fs.readFileSync(LIST_FILE, "utf8").split(/\r?\n/)) {
    const heading = CLASS_KEYS[line.trim()];
    if (heading) {
      currentClass = heading;
      result[currentClass] = [];
      continue;
    }
    const match = line.match(/^\[(\d+)\]\s+(.+)$/);
    if (currentClass && match) result[currentClass].push(Number(match[1]));
  }
  return result;
}

function findServerClassDirectory(classKey) {
  return fs
    .readdirSync(RECOVERY_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => path.join(RECOVERY_ROOT, entry.name))
    .find((directory) => {
      const filename = path.join(directory, "sorts.json");
      if (!fs.existsSync(filename)) return false;
      const data = JSON.parse(fs.readFileSync(filename, "utf8"));
      return normalize(data.className) === normalize(classKey);
    });
}

function effectElement(text, fallback = "Neutre") {
  const match = String(text).match(/\((terre|feu|eau|air|neutre)\)/i);
  if (!match) return fallback;
  return match[1].charAt(0).toUpperCase() + match[1].slice(1).toLowerCase();
}

function spellElement(serverSpell, fallback) {
  for (const level of serverSpell.levels) {
    for (const effect of [...level.normalEffects, ...level.criticalEffects]) {
      const element = effectElement(effect.text, "");
      if (element) return element;
    }
  }
  return fallback || "Neutre";
}

function zoneFor(effectZones, index) {
  const code = String(effectZones || "").slice(index * 2, index * 2 + 2);
  if (code.length !== 2 || code[0] === "P") return {};
  if (code[0] === "C") {
    const area = Math.max(0, code.charCodeAt(1) - 97);
    return area ? { area } : {};
  }
  const names = { L: "ligne", X: "croix", T: "T", R: "anneau" };
  return { zone: names[code[0]] || code };
}

function formatEffect(effect, element, zone = {}) {
  const probability = Number(effect.params.probability) || 0;
  const duration = Number(effect.params.duration) || 0;
  const text = probability > 0 ? `Dans ${probability}% des cas : ${effect.text}` : effect.text;
  const details = [];
  if (duration > 0) details.push(`${duration} tour${duration > 1 ? "s" : ""}`);
  if (zone.zone) details.push(`Zone : ${zone.zone}`);
  return {
    element: effectElement(effect.text, element),
    text,
    ...(zone.area ? { area: zone.area } : {}),
    ...(details.length ? { meta: details.join(" · ") } : {}),
  };
}

function formatLimit(value) {
  return Number(value) > 0 ? String(value) : "-";
}

function levelData(level, element) {
  const normalCount = level.normalEffects.length;
  const normalEffects = level.normalEffects.map((effect, index) =>
    formatEffect(effect, element, zoneFor(level.effectZones, index)),
  );
  const criticalEffects = level.criticalEffects.map((effect, index) =>
    formatEffect(effect, element, zoneFor(level.effectZones, normalCount + index)),
  );
  return {
    requiredLevel: level.requiredPlayerLevel,
    range: `${level.range.min} à ${level.range.max} PO`,
    ap: `${level.apCost} PA`,
    tabs: [
      { label: "Normaux", effects: normalEffects },
      { label: "Critiques", effects: criticalEffects },
    ],
    characteristics: [
      ["Probabilité de coup critique", level.criticalHit || "-"],
      ["Probabilité d'échec", level.criticalFailure || "-"],
      ["Nb. de lancers par tour", formatLimit(level.castsPerTurn)],
      ["Nb. de lancers par cible", formatLimit(level.castsPerTarget)],
      ["Nb. de tours entre deux lancers", formatLimit(level.cooldown)],
      ["États requis", level.requiredStates.length ? level.requiredStates.join(", ") : "-"],
      ["États interdits", level.forbiddenStates.length ? level.forbiddenStates.join(", ") : "-"],
    ],
    rules: [
      ["Portée modifiable", level.range.boostable],
      ["Ligne de vue", level.lineOfSight],
      ["Lancer en ligne", level.lineOnly],
      ["Cellule libre", level.freeCell],
      ["EC finit le tour", level.criticalFailureEndsTurn],
      ["CC actuel", level.criticalHit || "-"],
    ],
  };
}

function writeWindowData(filename, property, data) {
  fs.writeFileSync(filename, `window.${property} = ${JSON.stringify(data, null, 2)};\n`, "utf8");
}

function copyServerIcon(serverDirectory, association, classKey, slug) {
  const source = path.join(serverDirectory, ...association.icon.split("/"));
  const relative = path.join("assets", "icons", "spells", classKey, `${slug}.png`);
  for (const root of [ROOT, path.join(ROOT, "dist")]) {
    const destination = path.join(root, relative);
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.copyFileSync(source, destination);
  }
  return relative.replace(/\\/g, "/");
}

function main() {
  const customFile = path.join(ROOT, "data", "spells-custom.js");
  const panelsFile = path.join(ROOT, "data", "spell-panels.js");
  const customSpells = loadWindowData(customFile, "LRDR_CUSTOM_SPELLS");
  const spellPanels = loadWindowData(panelsFile, "LRDR_SPELL_PANELS");
  const modifiedIds = parseModifiedSpellIds();
  let updated = 0;

  for (const [classKey, spellIds] of Object.entries(modifiedIds)) {
    if (classKey === "cra") continue;
    const serverDirectory = findServerClassDirectory(classKey);
    if (!serverDirectory) throw new Error(`Données serveur introuvables pour ${classKey}.`);
    const serverData = JSON.parse(fs.readFileSync(path.join(serverDirectory, "sorts.json"), "utf8"));
    const associations = JSON.parse(fs.readFileSync(path.join(serverDirectory, "associations.json"), "utf8"));
    const oldCustom = customSpells[classKey] || [];
    const oldPanels = spellPanels[classKey] || [];
    const sourceIndices = PANEL_SOURCE_INDICES[classKey] || spellIds.map((_, index) => index);

    customSpells[classKey] = spellIds.map((spellId, index) => {
      const serverSpell = serverData.spells.find((spell) => spell.spellId === spellId);
      const association = associations.spells.find((spell) => spell.spellId === spellId);
      if (!serverSpell || !association) throw new Error(`Sort ${spellId} introuvable pour ${classKey}.`);
      const sourceIndex = sourceIndices[index] ?? index;
      const previous = oldCustom[sourceIndex] || {};
      const panel = oldPanels[sourceIndex] || {};
      const slug = slugify(serverSpell.name);
      const element = spellElement(serverSpell, previous.element);
      const levels = Object.fromEntries(
        serverSpell.levels.map((level) => [String(level.spellLevel), levelData(level, element)]),
      );
      const selectedLevel = 6;
      return {
        id: slug,
        spellId,
        name: serverSpell.name,
        element,
        icon: copyServerIcon(serverDirectory, association, classKey, slug),
        selectedLevel,
        levels: serverSpell.levels.map((level) => level.spellLevel),
        description: serverSpell.description,
        ...levels[String(selectedLevel)],
        sourceImage: previous.sourceImage || panel.image,
        levelData: levels,
      };
    });

    spellPanels[classKey] = spellIds.map((spellId, index) => {
      const sourceIndex = sourceIndices[index] ?? index;
      const previous = oldPanels[sourceIndex] || {};
      const serverSpell = serverData.spells.find((spell) => spell.spellId === spellId);
      return { ...previous, name: serverSpell.name };
    });
    updated += spellIds.length;
  }

  writeWindowData(customFile, "LRDR_CUSTOM_SPELLS", customSpells);
  writeWindowData(panelsFile, "LRDR_SPELL_PANELS", spellPanels);
  writeWindowData(path.join(ROOT, "dist", "data", "spells-custom.js"), "LRDR_CUSTOM_SPELLS", customSpells);
  writeWindowData(path.join(ROOT, "dist", "data", "spell-panels.js"), "LRDR_SPELL_PANELS", spellPanels);
  console.log(`${updated} sorts modifiés intégrés depuis les données du client (Crâ conservé).`);
}

main();
