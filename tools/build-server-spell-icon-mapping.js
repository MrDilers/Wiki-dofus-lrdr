const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const ROOT = path.resolve(__dirname, "..");
const DATA_ROOT = path.join(ROOT, "infos récupération", "données serveur extraites");
const ICON_ROOT = path.join(ROOT, "infos récupération", "icônes sorts serveur");
const OUTPUT_ROOT = path.join(ROOT, "infos récupération", "sorts serveur utilisés");

const SOURCE_FILES = {
  spells: path.join(DATA_ROOT, "spells_fr_441.as"),
  classes: path.join(DATA_ROOT, "classes_fr_184.as"),
};

function parseAssignments(filename, variableName) {
  const source = fs.readFileSync(filename, "utf8");
  const version = Number(source.match(/\bVERSION\s*=\s*(\d+)\s*;/)?.[1] || 0);
  const entries = new Map();
  const pattern = new RegExp(`^${variableName}\\[(\\d+)\\] = (\\{.*\\});$`);

  for (const line of source.split(/\r?\n/)) {
    const match = line.match(pattern);
    if (!match) continue;
    const value = vm.runInNewContext(`(${match[2]})`, Object.create(null), {
      timeout: 1_000,
    });
    entries.set(Number(match[1]), value);
  }
  return { version, entries };
}

function slugify(value) {
  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/œ/g, "oe")
    .replace(/æ/g, "ae")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function copyIcon(source, destination) {
  if (!fs.existsSync(source)) {
    throw new Error(`Icône introuvable : ${source}`);
  }
  fs.copyFileSync(source, destination);
}

function buildClass(classId, classData, spells, sourceVersions) {
  const classDirectory = path.join(OUTPUT_ROOT, classData.sn);
  const iconDirectory = path.join(classDirectory, "images sort");
  const variantDirectory = path.join(iconDirectory, "variantes");
  fs.mkdirSync(variantDirectory, { recursive: true });

  const associations = classData.s.map((spellId, index) => {
    const spell = spells.get(spellId);
    if (!spell) throw new Error(`Sort ${spellId} introuvable pour ${classData.sn}.`);

    const basename = `${String(index + 1).padStart(2, "0")}-${spellId}-${slugify(spell.n)}`;
    const primaryFilename = `${basename}.png`;
    copyIcon(
      path.join(ICON_ROOT, "principales", `${spellId}.png`),
      path.join(iconDirectory, primaryFilename),
    );

    const variants = [];
    for (let state = 2; state <= 10; state += 1) {
      const source = path.join(ICON_ROOT, "variantes", `${spellId}-etat-${state}.png`);
      if (!fs.existsSync(source)) continue;
      const filename = `${basename}-etat-${state}.png`;
      fs.copyFileSync(source, path.join(variantDirectory, filename));
      variants.push(`images sort/variantes/${filename}`);
    }

    return {
      order: index + 1,
      spellId,
      name: spell.n.trim(),
      description: spell.d,
      iconId: spellId,
      icon: `images sort/${primaryFilename}`,
      variants,
      availableLevels: [1, 2, 3, 4, 5, 6].filter((level) => Boolean(spell[`l${level}`])),
    };
  });

  const mapping = {
    classId,
    className: classData.sn,
    sourceVersions,
    spellCount: associations.length,
    spells: associations,
  };
  fs.writeFileSync(
    path.join(classDirectory, "associations.json"),
    `${JSON.stringify(mapping, null, 2)}\n`,
    "utf8",
  );

  const text = [
    `CLASSE : ${classData.sn.toUpperCase()}`,
    "=".repeat(80),
    `Table des classes : classes_fr_${sourceVersions.classes}.swf`,
    `Table des sorts : spells_fr_${sourceVersions.spells}.swf`,
    `Nombre de sorts utilisés : ${associations.length}`,
    "",
    ...associations.map(
      (item) =>
        `${String(item.order).padStart(2, "0")}. [sort ${item.spellId} / icône ${item.iconId}] ` +
        `${item.name}\r\n    ${item.icon}`,
    ),
    "",
  ].join("\r\n");
  fs.writeFileSync(path.join(classDirectory, "associations.txt"), text, "utf8");
  return mapping;
}

function main() {
  const spellsSource = parseAssignments(SOURCE_FILES.spells, "S");
  const classesSource = parseAssignments(SOURCE_FILES.classes, "G");
  const sourceVersions = {
    classes: classesSource.version,
    spells: spellsSource.version,
  };

  fs.rmSync(OUTPUT_ROOT, { recursive: true, force: true });
  fs.mkdirSync(OUTPUT_ROOT, { recursive: true });

  const mappings = [];
  for (const [classId, classData] of classesSource.entries) {
    mappings.push(buildClass(classId, classData, spellsSource.entries, sourceVersions));
  }

  const total = mappings.reduce((sum, item) => sum + item.spellCount, 0);
  fs.writeFileSync(
    path.join(OUTPUT_ROOT, "associations-globales.json"),
    `${JSON.stringify({ sourceVersions, classCount: mappings.length, spellCount: total, classes: mappings }, null, 2)}\n`,
    "utf8",
  );
  const readme = [
    "SORTS ET ICÔNES UTILISÉS PAR LE SERVEUR",
    "========================================",
    "",
    `Source : classes_fr_${sourceVersions.classes}.swf et spells_fr_${sourceVersions.spells}.swf`,
    `Classes : ${mappings.length}`,
    `Sorts associés : ${total}`,
    "",
    "Chaque dossier de classe contient :",
    "- associations.txt : liste lisible des sorts et identifiants d'icônes ;",
    "- associations.json : données structurées utilisables par le wiki ;",
    "- images sort : icônes principales renommées avec le nom du sort ;",
    "- images sort/variantes : états secondaires disponibles dans le client.",
    "",
    "L'identifiant du fichier d'icône correspond directement à l'identifiant du sort",
    "dans les tables utilisées par le client La Revanche de Rétro.",
    "",
  ].join("\r\n");
  fs.writeFileSync(path.join(OUTPUT_ROOT, "README.txt"), readme, "utf8");
  console.log(`${mappings.length} classes, ${total} sorts et icônes associés.`);
}

main();
