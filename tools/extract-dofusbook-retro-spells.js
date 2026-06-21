const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const OUTPUT_ROOT = path.join(ROOT, "infos récupération");
const BASE_URL = "https://retro.dofusbook.net";
const EXTRACTION_DATE = "2026-06-21";

const CLASSES = [
  { id: 1, name: "Féca" },
  { id: 2, name: "Osamodas" },
  { id: 3, name: "Enutrof" },
  { id: 4, name: "Sram" },
  { id: 5, name: "Xélor" },
  { id: 6, name: "Ecaflip" },
  { id: 7, name: "Eniripsa" },
  { id: 8, name: "Iop" },
  { id: 9, name: "Crâ" },
  { id: 10, name: "Sadida" },
  { id: 11, name: "Sacrieur" },
  { id: 12, name: "Pandawa" },
];

const SPELL_NAME_CORRECTIONS = new Map([
  ["9-1", "Flèche Empoisonnée"],
  ["9-21", "Invocation de Dopeul Crâ"],
]);

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
  "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36";
const cookieFile = path.join(os.tmpdir(), `dofusbook-${process.pid}.cookies`);

function curl(url, options = {}) {
  const args = [
    "-sS",
    "-L",
    "--compressed",
    "--fail-with-body",
    "-c",
    cookieFile,
    "-b",
    cookieFile,
    "-A",
    USER_AGENT,
    "-H",
    options.accept || "Accept: application/json, text/plain, */*",
    "-H",
    "Referer: https://retro.dofusbook.net/fr/encyclopedie/sorts/9",
    "-H",
    "Origin: https://retro.dofusbook.net",
    "-H",
    "x-lang: fr",
    "-H",
    "sec-fetch-site: same-origin",
    "-H",
    "sec-fetch-mode: cors",
    "-H",
    "sec-fetch-dest: empty",
    url,
  ];
  const result = spawnSync("curl.exe", args, {
    encoding: options.binary ? null : "utf8",
    maxBuffer: 50 * 1024 * 1024,
  });
  if (result.status !== 0) {
    const details = Buffer.isBuffer(result.stderr)
      ? result.stderr.toString("utf8")
      : result.stderr;
    throw new Error(`Téléchargement impossible (${url}) : ${details}`);
  }
  return result.stdout;
}

function fetchJson(url) {
  return JSON.parse(curl(url));
}

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function yesNo(value) {
  if (value === 1 || value === true) return "oui";
  if (value === 0 || value === false) return "non";
  return String(value ?? "non renseigné");
}

function displayValue(value) {
  if (value === null || value === undefined || value === "") return "non renseigné";
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}

function replaceTemplate(template, value) {
  return template.replaceAll("{value}", displayValue(value));
}

function loadTranslations() {
  const page = curl(`${BASE_URL}/fr/encyclopedie/sorts/9`, {
    accept: "Accept: text/html,application/xhtml+xml",
  });
  const indexAsset = page.match(/\/assets\/index-[A-Za-z0-9_-]+\.js/)?.[0];
  if (!indexAsset) throw new Error("Le fichier JavaScript principal est introuvable.");

  const indexSource = curl(`${BASE_URL}${indexAsset}`, {
    accept: "Accept: application/javascript,*/*;q=0.8",
  });
  const localeAsset = indexSource.match(/\.\/fr-[A-Za-z0-9_-]+\.js/)?.[0];
  if (!localeAsset) throw new Error("Le fichier de traduction française est introuvable.");

  const localeSource = curl(`${BASE_URL}/assets/${localeAsset.slice(2)}`, {
    accept: "Accept: application/javascript,*/*;q=0.8",
  });
  const executable = localeSource.replace(/;export\{[^}]+\};?\s*$/, "");
  return Function(`"use strict"; ${executable}; return e;`)();
}

function effectText(effect, translations) {
  const label = translations.encyclopedia?.[`spell-${effect.effect}`] || "Effet inconnu";
  const range =
    effect.min === null && effect.max === null
      ? "valeur non renseignée"
      : effect.max !== null && effect.max !== effect.min
        ? `${displayValue(effect.min)} à ${displayValue(effect.max)}`
        : displayValue(effect.min ?? effect.max);
  const details = [
    `${label} [${effect.effect}] : ${range}`,
    effect.duration ? `durée : ${effect.duration} tour${effect.duration > 1 ? "s" : ""}` : null,
    effect.ignore_do_crit ? "ignore les dommages critiques : oui" : null,
    `ID effet : ${effect.id}`,
  ].filter(Boolean);
  return details.join(" ; ");
}

function characteristicText(key, value, translations) {
  const template = translations.encyclopedia?.[`carac-${key}`];
  if (!template) return `${key} : ${displayValue(value)}`;
  const hasPlaceholder = template.includes("{value}");
  return `${replaceTemplate(template, value)} [${key}]${hasPlaceholder ? "" : ` : ${yesNo(value)}`}`;
}

function zoneText(group, translations) {
  if (!group.zone) return "aucune zone renseignée";
  const template = translations[`spell/zone-${group.zone}`];
  if (!template) return `${group.zone} (portée de zone : ${displayValue(group.range)})`;
  return template
    .split("|")[Number(group.range) > 1 ? 1 : 0]
    .replaceAll("{range}", displayValue(group.range))
    .trim();
}

function formatGroup(group, translations, index) {
  const lines = [
    `  GROUPE D'EFFETS ${index + 1}`,
    `  - ID du groupe : ${group.id}`,
    `  - Ordre : ${displayValue(group.group_order)}`,
    `  - Titre : ${displayValue(group.title)}`,
    `  - Cible : ${displayValue(group.target)}`,
    `  - Zone : ${zoneText(group, translations)}`,
    `  - Portée de la zone (valeur brute) : ${displayValue(group.range)}`,
    `  - Effets cumulés : ${yesNo(group.cumulated)}`,
  ];
  const normal = (group.effects || []).filter((effect) => !effect.cc);
  const critical = (group.effects || []).filter((effect) => Boolean(effect.cc));

  lines.push("", "  Effets normaux :");
  lines.push(...(normal.length ? normal.map((effect) => `  - ${effectText(effect, translations)}`) : ["  - Aucun"]));
  lines.push("", "  Effets critiques :");
  lines.push(...(critical.length ? critical.map((effect) => `  - ${effectText(effect, translations)}`) : ["  - Aucun"]));
  return lines;
}

function formatLevel(spell, level, translations) {
  const requiredLevel = spell[`level${level}`];
  const characteristics = spell.caracs?.[level - 1] || {};
  const groups = (spell.groups || []).filter((group) => Number(group.level) === level);
  const lines = [
    "",
    "=".repeat(80),
    `NIVEAU DU SORT ${level}`,
    "=".repeat(80),
    `- Niveau requis du personnage : ${displayValue(requiredLevel)}`,
    "",
    "Caractéristiques :",
  ];

  const entries = Object.entries(characteristics);
  lines.push(...(entries.length
    ? entries.map(([key, value]) => `- ${characteristicText(key, value, translations)}`)
    : ["- Aucune caractéristique renseignée"]));
  lines.push("", "Groupes et effets :");
  if (!groups.length) lines.push("- Aucun effet renseigné pour ce niveau.");
  groups.forEach((group, index) => lines.push("", ...formatGroup(group, translations, index)));
  lines.push(
    "",
    "Données techniques brutes de ce niveau :",
    JSON.stringify({ requiredLevel, characteristics, groups }, null, 2),
  );
  return lines;
}

function formatSpell(spell, displayName, index, total, iconFilename, translations) {
  const lines = [
    "#".repeat(80),
    `SORT ${String(index + 1).padStart(2, "0")}/${total} : ${displayName}`,
    "#".repeat(80),
    "",
    "Identification :",
    `- ID interne : ${spell.id}`,
    `- ID du sort dans la classe : ${spell.spell_id}`,
    `- ID de classe : ${spell.class_id}`,
    `- Icône locale : images sort/${iconFilename}`,
    "",
    "Description :",
    spell.description || "Aucune description renseignée.",
  ];
  if (displayName !== spell.name) {
    lines.splice(10, 0, `- Nom brut fourni par DofusBook : ${spell.name}`);
  }
  if (spell.info) lines.push("", "Information complémentaire :", spell.info);
  lines.push(
    "",
    "Propriétés générales :",
    `- Variante : ${yesNo(spell.is_variante)}`,
    `- Passif : ${yesNo(spell.is_passif)}`,
    `- Invocation : ${yesNo(spell.is_invoc)}`,
  );
  for (let level = 1; level <= 6; level += 1) {
    lines.push(...formatLevel(spell, level, translations));
  }
  lines.push(
    "",
    "Données techniques originales complètes du sort :",
    JSON.stringify(spell, null, 2),
    "",
    "",
  );
  return lines.join("\r\n");
}

function writeClass(classInfo, spells, translations) {
  const classDirectory = path.join(OUTPUT_ROOT, classInfo.name);
  const iconDirectory = path.join(classDirectory, "images sort");
  fs.mkdirSync(iconDirectory, { recursive: true });

  const classSpells = spells
    .filter((spell) => Number(spell.class_id) === classInfo.id)
    .sort((left, right) => Number(left.spell_id) - Number(right.spell_id));
  const text = [
    "=".repeat(80),
    `CLASSE : ${classInfo.name.toUpperCase()}`,
    "=".repeat(80),
    `Source : ${BASE_URL}/fr/encyclopedie/sorts/${classInfo.id}`,
    `Date de récupération : ${EXTRACTION_DATE}`,
    `Nombre de sorts de classe : ${classSpells.length}`,
    "",
    "Ce fichier contient uniquement les sorts propres à cette classe.",
    "Chaque sort est détaillé séparément pour ses six niveaux.",
    "Les données techniques originales sont conservées après chaque présentation lisible.",
    "",
    "",
  ];

  classSpells.forEach((spell, index) => {
    const displayName = SPELL_NAME_CORRECTIONS.get(`${classInfo.id}-${spell.spell_id}`) || spell.name;
    const filename = `${String(spell.spell_id).padStart(2, "0")}-${slugify(displayName)}.png`;
    const iconUrl = `${BASE_URL}/static/spells/${classInfo.id}-${spell.spell_id}.png`;
    const icon = curl(iconUrl, { binary: true, accept: "Accept: image/avif,image/webp,image/png,image/*,*/*;q=0.8" });
    fs.writeFileSync(path.join(iconDirectory, filename), icon);
    text.push(formatSpell(spell, displayName, index, classSpells.length, filename, translations));
  });

  fs.writeFileSync(path.join(classDirectory, "sorts.txt"), text.join("\r\n"), "utf8");
  return classSpells.length;
}

function main() {
  fs.rmSync(OUTPUT_ROOT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });
  const translations = loadTranslations();
  const summary = [];

  for (const classInfo of CLASSES) {
    const spells = fetchJson(`${BASE_URL}/api/spells/class/${classInfo.id}`);
    const count = writeClass(classInfo, spells, translations);
    summary.push({ ...classInfo, count });
    console.log(`${classInfo.name}: ${count} sorts et ${count} icônes`);
  }

  const index = [
    "RÉCUPÉRATION DES SORTS DOFUS RETRO",
    "==================================",
    "",
    `Source : ${BASE_URL}/fr/encyclopedie/sorts/`,
    `Date de récupération : ${EXTRACTION_DATE}`,
    "",
    ...summary.map(({ id, name, count }) => `- ${name} (classe ${id}) : ${count} sorts`),
    "",
    `Total : ${summary.reduce((total, item) => total + item.count, 0)} sorts et icônes`,
    "",
    "Organisation de chaque dossier :",
    "- sorts.txt : informations lisibles, niveaux 1 à 6 et données techniques complètes.",
    "- images sort : icônes originales des sorts, nommées et ordonnées.",
    "",
  ].join("\r\n");
  fs.writeFileSync(path.join(OUTPUT_ROOT, "INDEX.txt"), index, "utf8");
  fs.rmSync(cookieFile, { force: true });
}

try {
  main();
} catch (error) {
  fs.rmSync(cookieFile, { force: true });
  console.error(error.stack || error.message);
  process.exitCode = 1;
}
