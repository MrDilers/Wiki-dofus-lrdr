const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const DATA_ROOT = path.join(ROOT, "infos récupération", "données serveur extraites");
const OUTPUT_ROOT = path.join(ROOT, "infos récupération", "sorts serveur utilisés");

const SOURCE_FILES = {
  spells: path.join(DATA_ROOT, "spells_fr_441.as"),
  classes: path.join(DATA_ROOT, "classes_fr_184.as"),
  effects: path.join(DATA_ROOT, "effects_fr_273.as"),
};

function parseAssignments(filename, variableName) {
  const source = fs.readFileSync(filename, "utf8");
  const version = Number(source.match(/\bVERSION\s*=\s*(\d+)\s*;/)?.[1] || 0);
  const entries = new Map();
  const pattern = new RegExp(`^${variableName}\\[(\\d+)\\] = (\\{.*\\});$`, "gm");

  for (const match of source.matchAll(pattern)) {
    const value = vm.runInNewContext(`(${match[2]})`, Object.create(null), {
      timeout: 1_000,
    });
    entries.set(Number(match[1]), value);
  }
  return { version, entries };
}

function formatEffectTemplate(template, params) {
  let text = String(template || "Effet non documenté");
  text = text.replace(/\{~1~2([^}]*)\}/g, params[1] != null && params[1] !== params[0] ? "$1" : "");
  text = text.replace(/\{~1~3([^}]*)\}/g, params[2] != null && params[2] !== params[0] ? "$1" : "");
  text = text.replace(/#([1-3])/g, (_, index) => {
    const value = params[Number(index) - 1];
    return value == null ? "" : String(value);
  });
  return text.replace(/\{[^}]*\}/g, "").replace(/\s+/g, " ").trim();
}

function decodeEffect(raw, effects) {
  const [effectId, param1, param2, param3, duration, probability, dice] = raw;
  const definition = effects.get(effectId);
  return {
    effectId,
    text: formatEffectTemplate(definition?.d, [param1, param2, param3]),
    template: definition?.d || null,
    params: { param1, param2, param3, duration, probability, dice },
    raw,
  };
}

function decodeLevel(levelNumber, raw, effects) {
  return {
    spellLevel: levelNumber,
    requiredPlayerLevel: raw[18],
    apCost: raw[2],
    range: { min: raw[3], max: raw[4], boostable: raw[10] },
    criticalHit: raw[5] > 0 ? `1/${raw[5]}` : null,
    criticalFailure: raw[6] > 0 ? `1/${raw[6]}` : null,
    lineOnly: raw[7],
    lineOfSight: raw[8],
    freeCell: raw[9],
    classId: raw[11],
    castsPerTurn: raw[12],
    castsPerTarget: raw[13],
    cooldown: raw[14],
    effectZones: raw[15],
    requiredStates: raw[16],
    forbiddenStates: raw[17],
    criticalFailureEndsTurn: raw[19],
    normalEffects: (raw[0] || []).map((effect) => decodeEffect(effect, effects)),
    criticalEffects: (raw[1] || []).map((effect) => decodeEffect(effect, effects)),
    raw,
  };
}

function yesNo(value) {
  return value ? "Oui" : "Non";
}

function formatLimit(value) {
  return value > 0 ? String(value) : "Illimité";
}

function formatEffects(title, effects) {
  if (!effects.length) return [`  ${title} : aucun`];
  return [`  ${title} :`, ...effects.map((effect) => `    - ${effect.text} [effet ${effect.effectId}]`)];
}

function formatLevel(level) {
  return [
    `NIVEAU DU SORT ${level.spellLevel} - niveau joueur requis : ${level.requiredPlayerLevel}`,
    `  PA : ${level.apCost} | Portée : ${level.range.min} à ${level.range.max} | Portée modifiable : ${yesNo(level.range.boostable)}`,
    `  Coup critique : ${level.criticalHit || "Aucun"} | Échec critique : ${level.criticalFailure || "Aucun"}`,
    `  Ligne uniquement : ${yesNo(level.lineOnly)} | Ligne de vue : ${yesNo(level.lineOfSight)} | Cellule libre : ${yesNo(level.freeCell)}`,
    `  Lancers par tour : ${formatLimit(level.castsPerTurn)} | Par cible : ${formatLimit(level.castsPerTarget)} | Relance : ${level.cooldown || "Aucune"}`,
    `  EC termine le tour : ${yesNo(level.criticalFailureEndsTurn)} | Zone(s) brute(s) : ${level.effectZones || "Aucune"}`,
    `  États requis : ${level.requiredStates.length ? level.requiredStates.join(", ") : "Aucun"} | États interdits : ${level.forbiddenStates.length ? level.forbiddenStates.join(", ") : "Aucun"}`,
    ...formatEffects("Effets normaux", level.normalEffects),
    ...formatEffects("Effets critiques", level.criticalEffects),
  ];
}

function buildClass(classId, classData, spells, effects, sourceVersions) {
  const directory = path.join(OUTPUT_ROOT, classData.sn);
  fs.mkdirSync(directory, { recursive: true });

  const classSpells = classData.s.map((spellId, index) => {
    const source = spells.get(spellId);
    if (!source) throw new Error(`Sort ${spellId} introuvable pour ${classData.sn}.`);
    const levels = [];
    for (let level = 1; level <= 6; level += 1) {
      if (source[`l${level}`]) levels.push(decodeLevel(level, source[`l${level}`], effects));
    }
    return { order: index + 1, spellId, name: source.n.trim(), description: source.d, levels };
  });

  const output = {
    classId,
    className: classData.sn,
    sourceVersions,
    spellCount: classSpells.length,
    spells: classSpells,
  };
  fs.writeFileSync(path.join(directory, "sorts.json"), `${JSON.stringify(output, null, 2)}\n`, "utf8");

  const text = [
    `CLASSE : ${classData.sn.toUpperCase()}`,
    "=".repeat(90),
    `Données du client La Revanche de Rétro : classes ${sourceVersions.classes}, sorts ${sourceVersions.spells}, effets ${sourceVersions.effects}`,
    `Sorts réellement utilisés : ${classSpells.length}`,
    "",
  ];
  for (const spell of classSpells) {
    text.push(`${String(spell.order).padStart(2, "0")}. ${spell.name} [ID ${spell.spellId}]`);
    text.push("-".repeat(90), spell.description || "Aucune description.", "");
    for (const level of spell.levels) text.push(...formatLevel(level), "");
    text.push("=".repeat(90), "");
  }
  fs.writeFileSync(path.join(directory, "sorts.txt"), text.join("\r\n"), "utf8");
  return output;
}

function main() {
  const spells = parseAssignments(SOURCE_FILES.spells, "S");
  const classes = parseAssignments(SOURCE_FILES.classes, "G");
  const effects = parseAssignments(SOURCE_FILES.effects, "E");
  const sourceVersions = {
    classes: classes.version,
    spells: spells.version,
    effects: effects.version,
  };

  const outputs = [];
  for (const [classId, classData] of classes.entries) {
    outputs.push(buildClass(classId, classData, spells.entries, effects.entries, sourceVersions));
  }

  const spellCount = outputs.reduce((sum, entry) => sum + entry.spellCount, 0);
  const levelCount = outputs.reduce(
    (sum, entry) => sum + entry.spells.reduce((subtotal, spell) => subtotal + spell.levels.length, 0),
    0,
  );
  const missingEffectIds = new Set();
  for (const entry of outputs) {
    for (const spell of entry.spells) {
      for (const level of spell.levels) {
        for (const effect of [...level.normalEffects, ...level.criticalEffects]) {
          if (!effect.template) missingEffectIds.add(effect.effectId);
        }
      }
    }
  }
  console.log(`${outputs.length} classes, ${spellCount} sorts et ${levelCount} niveaux extraits.`);
  console.log(`Effets sans libellé : ${missingEffectIds.size ? [...missingEffectIds].join(", ") : "aucun"}.`);
}

main();
