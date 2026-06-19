const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "data", "spells-custom.js");
const context = { window: {} };
vm.runInNewContext(fs.readFileSync(sourcePath, "utf8"), context);

const spells = context.window.LRDR_CUSTOM_SPELLS;
const effect = (text, element = "Neutre", meta) => ({ element, text, ...(meta ? { meta } : {}) });

// Values transcribed from the spell panels in Wiki-Classe-LRDR.pdf.
// A dash is kept when the source screenshot itself cuts off the value.
const pdfData = {
  cra: [
    { name: "Souffle de l'Humus", level: 1, range: "2 a 9 PO", ap: "4 PA" },
    { level: 42, range: "1 a 11 PO", ap: "3 PA" },
    { level: 148, range: "1 a 10 PO", ap: "3 PA" },
    { level: 54, range: "5 a 8 PO", ap: "3 PA" },
    { level: 70, range: "-", ap: "4 PA", effects: [effect("Dommages : 31 a 33 (air)", "Air"), effect("Augmente les degats de base du sort Fleche du Vent Cisaillant")] },
    { level: 190, range: "-", ap: "4 PA", effects: [effect("Dommages : 31 a 33 (feu)", "Feu"), effect("Augmente les degats de base du sort Fleche du Phoenix")] }
  ],
  sadida: [
    { level: 101, range: "1 a 8 PO", ap: "3 PA" },
    { level: 101, range: "1 a 7 PO", ap: "3 PA" },
    { level: 103, range: "-", ap: "4 PA", effects: [effect("Dommages : 41 a 45 (feu)", "Feu")] },
    { level: 106, range: "-", ap: "4 PA", effects: [effect("Dommages : 17 a 27 (terre)", "Terre")] },
    { level: 136, range: "7 PO", ap: "3 PA", effects: [effect("Dommages : 7 a 14 (eau)", "Eau"), effect("Dommages : 7 a 14 (air)", "Air"), effect("Dommages : 7 a 14 (feu)", "Feu"), effect("Dommages : 7 a 14 (terre)", "Terre")] },
    { level: 160, range: "1 a 7 PO", ap: "4 PA", effects: [effect("Vole 6 a 65 PDV (air)", "Air")] },
    { level: 170, range: "8 PO", ap: "3 PA", effects: [effect("PM perdus : 2 a 4", "Neutre", "1 tour"), effect("Dommages : 11 a 20 (air)", "Air")] }
  ],
  sacrieur: [
    { level: 101, range: "1 a 7 PO", ap: "4 PA", effects: [effect("Vole 10 a 18 PDV (eau)", "Eau"), effect("20 vol de chance", "Eau", "3 tours")] },
    { name: "Assaut 51", level: 109, range: "1 a 7 PO", ap: "3 PA", effects: [effect("Dommages : 13 a 19 (air)", "Air")] },
    { level: 117, range: "0 PO", ap: "4 PA", effects: [effect("Vole 22 a 26 PDV (feu)", "Feu")] },
    { level: 136, range: "1 a 3 PO", ap: "4 PA", effects: [effect("Dommages : 23 a 27 (terre)", "Terre")] },
    { level: 170, range: "-", ap: "3 PA", effects: [effect("Dommages : 9 a 13 (feu)", "Feu"), effect("+8 de dommages", "Neutre", "4 tours"), effect("Dommages : 1% de la vie de l'attaquant (neutre)", "Neutre", "1 tour")] }
  ],
  pandawa: [
    { level: 101, range: "1 a 1 PO", ap: "3 PA", effects: [effect("Dommages : 12 a 21 (terre)", "Terre"), effect("Vole 7 a 10 PDV (terre)", "Terre")] },
    { level: 101, range: "1 a 1 PO", ap: "3 PA", effects: [effect("Dommages : 16 a 21 (feu)", "Feu")] },
    { level: 106, range: "1 a 6 PO", ap: "3 PA", effects: [effect("Dommages : 13 a 22 (air)", "Air"), effect("Fait reculer de 2 case(s)")] },
    { name: "Charge Rocailleuse", level: 154, range: "1 a 5 PO", ap: "4 PA", effects: [effect("Dommages : 22 a 36 (terre)", "Terre")] },
    { level: 170, range: "2 a 5 PO", ap: "2 PA", effects: [effect("Dommages : 16 a 30 (terre)", "Terre")] },
    { level: 180, range: "1 a 6 PO", ap: "4 PA", effects: [effect("Dommages : 26 a 35 (feu)", "Feu")] }
  ],
  feca: [
    { name: "Attaque Volcanique", level: 101, range: "1 a 8 PO", ap: "4 PA", effects: [effect("Dommages : 7 a 13 (feu)", "Feu"), effect("Vole 7 a 13 PDV (terre)", "Terre")] },
    { name: "Voile des Abysses", level: 106, range: "1 a 8 PO", ap: "3 PA", effects: [effect("PA perdus a la cible : 1 a 3", "Neutre", "1 tour"), effect("Dommages : 10 a 12 (eau)", "Eau")] },
    { name: "Attaque Orageuse", level: 113, range: "1 a 6 PO", ap: "4 PA", effects: [effect("Dommages : 11 a 22 (terre)", "Terre")] },
    { name: "Secousse Lointaine", level: 131, range: "2 a 8 PO", ap: "3 PA", effects: [effect("Dommages : 16 a 24 (terre)", "Terre")] },
    { name: "Poigne Tellurique", level: 148, range: "1 a 3 PO", ap: "3 PA", effects: [effect("Vole 21 a 35 PDV (eau)", "Eau"), effect("20 vol de force", "Terre", "3 tours")] },
    { name: "Glyphe Apocalyptique", level: 170, range: "1 a 5 PO", ap: "4 PA", effects: [effect("Dommages : 9 a 12 (eau)", "Eau"), effect("Dommages : 9 a 12 (terre)", "Terre"), effect("Dommages : 9 a 12 (feu)", "Feu")] }
  ],
  osamodas: [
    { name: "Souffle Zephyr", level: 101, range: "1 a 7 PO", ap: "4 PA", effects: [effect("Dommages : 13 a 22 (air)", "Air")] },
    { name: "Fureur Sauvage", level: 101, range: "1 a 8 PO", ap: "3 PA", effects: [effect("+9 a 16 de dommages", "Neutre", "2 tours")] },
    { name: "Patte Agiles", level: 106, range: "1 a 8 PO", ap: "3 PA", effects: [effect("+4 PM", "Neutre", "3 tours")] },
    { name: "Elan de la Bete", level: 126, range: "1 a 8 PO", ap: "3 PA", effects: [effect("+3 PA", "Neutre", "3 tours")] },
    { name: "Danse du Cyclone", level: 131, range: "-", ap: "3 PA", effects: [effect("Vole 3 a 10 PDV (air)", "Air")] },
    { name: "Fureur Ouragan", level: 136, range: "-", ap: "4 PA", effects: [effect("Dommages : 11 a 14 (air)", "Air")] },
    { name: "Apogee de l'Alize", level: 154, range: "1 a 3 PO", ap: "4 PA", effects: [effect("Dommages : 18 a 37 (air)", "Air")] },
    { name: "Dernier Espoir", level: 160, range: "1 a 8 PO", ap: "3 PA", effects: [effect("+201 a 250 en vitalite", "Neutre", "3 tours")] },
    { name: "Rage Primordiale", level: 170, range: "-", ap: "3 PA", effects: [effect("Augmente les dommages de 100%", "Neutre", "3 tours")] }
  ],
  enutrof: [
    { level: 103, range: "9 PO", ap: "4 PA", effects: [effect("Enleve les envoutements"), effect("Dommages : 20 (neutre)"), effect("Fait avancer de 2 case(s)")] },
    { level: 113, range: "2 a 8 PO", ap: "4 PA", effects: [effect("Dommages : 9 a 15 (terre)", "Terre")] },
    { level: 121, range: "1 a 4 PO", ap: "4 PA", effects: [effect("Dommages : 21 a 25 (eau)", "Eau"), effect("Vole 1 PM")] },
    { level: 170, range: "1 a 7 PO", ap: "5 PA", effects: [effect("Dommages : 50 (eau)", "Eau"), effect("PM perdus : 1", "Neutre", "1 tour")] },
    { level: 121, range: "1 a 4 PO", ap: "4 PA", effects: [effect("Dommages : 21 a 25 (eau)", "Eau"), effect("Vole 1 PM")] },
    { level: 170, range: "1 a 7 PO", ap: "5 PA", effects: [effect("Dommages : 50 (eau)", "Eau"), effect("PM perdus : 1", "Neutre", "1 tour")] }
  ],
  sram: [
    { level: 101, range: "1 a 5 PO", ap: "3 PA", effects: [effect("Vole 20 PDV (eau)", "Eau")] },
    { level: 103, range: "1 a 4 PO", ap: "3 PA", effects: [effect("Dommages : 8 a 9 (eau)", "Eau", "2 tours"), effect("Dommages : 8 a 9 (terre)", "Terre", "2 tours")] },
    { level: 106, range: "0 PO", ap: "4 PA", effects: [effect("Vole 11 a 25 PDV (eau)", "Eau"), effect("25 vol de chance", "Eau", "3 tours"), effect("25 vol de force", "Terre", "3 tours")] },
    { level: 70, range: "1 a 2 PO", ap: "4 PA", effects: [effect("Vole 1 a 250 d'or"), effect("Dommages : 18 a 32 (terre)", "Terre")] },
    { level: 190, range: "1 a 2 PO", ap: "4 PA", effects: [effect("Dommages : 41 a 60 (terre)", "Terre")] },
    { level: 200, range: "1 a 4 PO", ap: "3 PA", effects: [effect("Dommages : 41 a 60 (terre)", "Terre"), effect("Dommages : 41 a 60 (eau)", "Eau")] }
  ],
  xelor: [
    { level: 103, range: "3 a 6 PO", ap: "3 PA", effects: [effect("Dommages : 10 a 15 (eau)", "Eau"), effect("PA perdus a la cible : 2", "Neutre", "1 tour"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA")] },
    { level: 109, range: "1 a 9 PO", ap: "4 PA", effects: [effect("Vole 13 a 29 PDV (terre)", "Terre"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA"), effect("Vole 1 PO", "Neutre", "1 tour")] },
    { level: 117, range: "1 a 8 PO", ap: "3 PA", effects: [effect("Vole 15 a 24 PDV (eau)", "Eau"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA")] },
    { level: 142, range: "0 PO", ap: "2 PA", effects: [effect("+3 PA", "Neutre", "2 tours"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA")] },
    { level: 180, range: "1 a 4 PO", ap: "4 PA", effects: [effect("Dommages : 41 a 45 (eau)", "Eau"), effect("Vole 1 PA"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA")] },
    { level: 190, range: "1 a 5 PO", ap: "4 PA", effects: [effect("Vole 41 a 45 PDV (feu)", "Feu"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA")] },
    { level: 190, range: "1 a 5 PO", ap: "4 PA", effects: [effect("Vole 41 a 45 PDV (feu)", "Feu"), effect("Dans 90% des cas : pas d'effet complementaire"), effect("Dans 10% des cas : ajoute +1 PA")] }
  ],
  ecaflip: [
    { level: 101, range: "7 PO", ap: "3 PA", effects: [effect("Dommages : 6 a 19 (air)", "Air"), effect("PDV rendus : 5 a 12"), effect("PDV rendus : 8 a 22")] },
    { level: 103, range: "1 a 4 PO", ap: "3 PA", effects: [effect("Dans 50% des cas : dommages 1 a 50 (feu)", "Feu"), effect("Dans 50% des cas : dommages 1 a 50 (air)", "Air")] },
    { level: 148, range: "1 a 1 PO", ap: "3 PA", effects: [effect("Dommages : 21 a 45 (terre)", "Terre")] },
    { level: 170, range: "1 a 4 PO", ap: "4 PA", effects: [effect("Dommages : 24 a 29 (air)", "Air")] },
    { level: 190, range: "1 a 4 PO", ap: "5 PA", effects: [effect("Dommages : 8 a 16 (eau)", "Eau"), effect("Dommages : 8 a 16 (terre)", "Terre"), effect("Dommages : 8 a 16 (air)", "Air"), effect("Dommages : 8 a 16 (feu)", "Feu")] }
  ],
  eniripsa: [
    { level: 106, range: "1 a 8 PO", ap: "4 PA", effects: [effect("Dommages : 18 a 22 (feu)", "Feu")] },
    { level: 109, range: "0 PO", ap: "2 PA", effects: [effect("+3 PA", "Neutre", "5 tours"), effect("Dommages : 10% de la vie de l'attaquant (neutre)")] },
    { level: 142, range: "4 PO", ap: "4 PA", effects: [effect("Vole 31 a 40 PDV (eau)", "Eau")] },
    { level: 106, range: "1 a 8 PO", ap: "4 PA", effects: [effect("Dommages : 18 a 22 (feu)", "Feu")] },
    { level: 109, range: "0 PO", ap: "2 PA", effects: [effect("+3 PA", "Neutre", "5 tours"), effect("Dommages : 10% de la vie de l'attaquant (neutre)")] },
    { level: 142, range: "4 PO", ap: "4 PA", effects: [effect("Vole 31 a 40 PDV (eau)", "Eau")] }
  ],
  iop: [
    { level: 109, range: "-", ap: "5 PA", effects: [effect("Dommages : 61 a 65 (eau)", "Eau")] },
    { level: 109, range: "-", ap: "5 PA", effects: [effect("Dommages : 61 a 65 (eau)", "Eau")] },
    { level: 121, range: "-", ap: "4 PA", effects: [effect("Vole 11 a 40 PDV (eau)", "Eau"), effect("-2 a 3 aux coups critiques", "Neutre", "2 tours")] },
    { level: 142, range: "1 a 4 PO", ap: "4 PA", effects: [effect("Dommages : 1 a 20 (eau)", "Eau"), effect("Dommages : 1 a 20 (air)", "Air")] },
    { name: "Geyser du Colosse", level: 180, range: "1 a 1 PO", ap: "3 PA", effects: [effect("Vole 24 a 26 PDV (eau)", "Eau")] }
  ]
};

// crit, failure, casts/turn, casts/target, cooldown, modifiable range,
// line of sight, linear cast, free cells, critical failure ends turn, current crit.
const pdfStats = {
  cra: [
    ["1/30", "1/100", "-", "1", "-", true, true, false, false, false, "1/30"],
    ["1/40", "1/100", "2", "-", "-", true, false, false, false, false, "1/40"],
    ["1/40", "1/100", "2", "1", "-", true, true, false, false, false, "1/40"],
    ["1/40", "1/100", "-", "2", "-", true, false, false, false, false, "1/40"],
    ["1/30", "1/100", "-", "-", "3", true, true, false, false, false, "1/30"],
    ["1/30", "1/100", "-", "-", "2", true, true, false, false, false, "1/30"]
  ],
  sadida: [
    ["1/45", "1/100", "-", "2", "-", true, true, false, false, false, "1/45"],
    ["1/50", "1/100", "-", "-", "-", true, true, false, false, false, "1/50"],
    ["1/50", "1/100", "2", "2", "-", false, true, true, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", true, false, false, false, false, "1/50"],
    ["1/45", "1/100", "1", "-", "-", false, true, true, false, false, "1/45"],
    ["1/45", "1/100", "1", "-", "-", true, true, true, false, false, "1/45"],
    ["1/50", "1/100", "1", "-", "-", true, true, true, false, false, "1/50"]
  ],
  sacrieur: [
    ["1/40", "1/100", "4", "-", "-", true, false, false, false, false, "1/27"],
    ["1/35", "1/100", "3", "-", "-", false, true, true, false, false, "1/23"],
    ["1/40", "1/100", "2", "-", "-", false, true, false, false, false, "1/27"],
    ["1/40", "1/100", "-", "2", "-", false, true, false, false, false, "1/27"],
    ["1/50", "1/100", "-", "-", "-", false, true, false, false, false, "1/34"]
  ],
  pandawa: [
    ["1/50", "1/100", "3", "-", "-", true, true, false, false, false, "1/50"],
    ["1/40", "1/100", "3", "-", "-", true, true, false, false, false, "1/40"],
    ["1/50", "1/100", "2", "-", "-", true, true, true, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", true, true, true, false, false, "1/50"],
    ["1/50", "1/100", "1", "-", "-", true, true, true, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", true, true, true, false, false, "1/50"]
  ],
  feca: [
    ["1/45", "1/100", "-", "-", "-", true, true, false, false, false, "1/45"],
    ["1/50", "1/100", "-", "1", "-", true, true, false, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", true, true, true, false, false, "1/50"],
    ["1/45", "1/100", "-", "2", "-", true, true, false, false, false, "1/45"],
    ["1/35", "1/100", "2", "-", "-", false, true, true, false, false, "1/35"],
    ["-", "1/100", "-", "-", "2", false, false, true, true, false, "-"]
  ],
  osamodas: [
    ["1/45", "1/100", "-", "-", "-", true, false, false, false, false, "1/45"],
    ["1/40", "1/100", "-", "-", "3", true, true, false, false, false, "1/40"],
    ["1/40", "1/100", "-", "-", "3", true, true, false, false, false, "1/40"],
    ["1/45", "1/100", "-", "-", "3", true, true, false, false, false, "1/45"],
    ["1/45", "1/100", "-", "-", "-", true, false, false, false, false, "1/45"],
    ["1/50", "1/100", "2", "-", "-", true, false, false, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", false, true, true, false, false, "1/50"],
    ["1/40", "1/100", "-", "-", "3", true, true, false, false, false, "1/40"],
    ["1/40", "1/100", "-", "-", "3", true, true, false, false, false, "1/40"]
  ],
  enutrof: [
    ["1/10", "1/100", "-", "-", "-", true, true, true, false, false, "1/6"],
    ["1/30", "1/100", "-", "-", "-", true, true, false, false, false, "1/20"],
    ["1/50", "1/100", "-", "1", "-", true, true, true, false, false, "1/34"],
    ["1/50", "1/100", "-", "1", "-", true, true, false, false, false, "1/34"],
    ["1/50", "1/100", "-", "1", "-", true, true, true, false, false, "1/34"],
    ["1/50", "1/100", "-", "1", "-", true, true, false, false, false, "1/34"]
  ],
  sram: [
    ["1/30", "1/100", "-", "-", "-", true, false, false, false, false, "1/30"],
    ["1/40", "1/100", "-", "1", "-", true, false, true, false, false, "1/40"],
    ["1/30", "1/100", "-", "-", "-", false, true, false, false, false, "1/30"],
    ["1/30", "1/100", "-", "2", "-", true, true, true, false, false, "1/30"],
    ["1/90", "1/100", "2", "-", "-", false, true, false, false, false, "1/90"],
    ["-", "1/100", "2", "-", "-", true, false, true, true, false, "-"]
  ],
  xelor: [
    ["1/40", "1/100", "-", "1", "-", true, true, false, false, false, "1/40"],
    ["1/35", "1/100", "-", "-", "-", true, true, false, false, false, "1/35"],
    ["1/40", "1/100", "-", "-", "-", false, true, true, false, false, "1/40"],
    ["-", "1/100", "-", "-", "3", false, true, false, false, false, "-"],
    ["1/45", "1/100", "-", "-", "-", false, true, false, false, false, "1/45"],
    ["1/40", "1/100", "-", "2", "-", false, true, true, false, false, "1/40"],
    ["1/40", "1/100", "-", "2", "-", false, true, true, false, false, "1/40"]
  ],
  ecaflip: [
    ["1/50", "1/100", "-", "-", "-", true, true, false, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", false, true, false, false, false, "1/50"],
    ["1/50", "1/100", "-", "2", "-", false, false, false, false, false, "1/50"],
    ["1/50", "1/100", "2", "-", "-", true, false, true, false, false, "1/50"],
    ["1/50", "1/100", "-", "-", "-", true, true, false, false, false, "1/50"]
  ],
  eniripsa: [
    ["1/45", "1/100", "2", "-", "-", true, true, true, false, false, "1/45"],
    ["1/50", "1/100", "-", "-", "5", false, true, false, false, false, "1/50"],
    ["1/45", "1/100", "-", "2", "-", true, true, false, false, false, "1/45"],
    ["1/45", "1/100", "2", "-", "-", true, true, true, false, false, "1/45"],
    ["1/50", "1/100", "-", "-", "5", false, true, false, false, false, "1/50"],
    ["1/45", "1/100", "-", "2", "-", true, true, false, false, false, "1/45"]
  ],
  iop: [
    ["1/50", "1/100", "2", "-", "-", false, true, true, false, false, "1/50"],
    ["1/50", "1/100", "2", "-", "-", false, true, true, false, false, "1/50"],
    ["1/40", "1/100", "-", "-", "-", false, true, false, false, false, "1/40"],
    ["1/45", "1/100", "-", "-", "-", false, true, false, false, false, "1/45"],
    ["1/45", "1/100", "-", "3", "-", false, true, true, false, false, "1/45"]
  ]
};

for (const [classId, updates] of Object.entries(pdfData)) {
  if (!spells[classId] || spells[classId].length !== updates.length) {
    throw new Error(`Unexpected spell count for ${classId}`);
  }

  updates.forEach((update, index) => {
    const spell = spells[classId][index];
    if (update.name) spell.name = update.name;
    spell.requiredLevel = update.level;
    spell.range = update.range;
    spell.ap = update.ap;
    if (update.effects) spell.tabs[0].effects = update.effects;
    spell.levels = [1, 2, 3, 4, 5, 6];
    spell.levelData = Object.fromEntries(
      spell.levels.map((level) => [String(level), spell.levelData?.[String(level)] || {}])
    );

    const stats = pdfStats[classId][index];
    spell.characteristics = [
      ["Probabilite de coup critique", stats[0]],
      ["Probabilite d'echec", stats[1]],
      ["Nb. de lancers par tour", stats[2]],
      ["Nb. de lancers par tour par joueur", stats[3]],
      ["Nb. de tours entre deux lancers", stats[4]]
    ];
    spell.rules = [
      ["Portee modifiable", stats[5]],
      ["Ligne de vue", stats[6]],
      ["Lancer en ligne", stats[7]],
      ["Cellules libres", stats[8]],
      ["EC fini le tour", stats[9]],
      ["CC actuels", stats[10]]
    ];

    if (spell.description.includes("Informations a recopier depuis le PDF") || spell.description.includes("Effet a completer depuis le PDF")) {
      const effectSummary = spell.tabs[0].effects.map(({ text, meta }) => `${text}${meta ? ` (${meta})` : ""}`).join(" ; ");
      const rangeSummary = spell.range === "-" ? "dont la portee est coupee sur la capture source" : `d'une portee de ${spell.range}`;
      spell.description = `${spell.name} est un sort modifie de niveau ${spell.requiredLevel}, ${rangeSummary}, et coute ${spell.ap}. ${effectSummary}.`;
    }
  });
}

const output = `window.LRDR_CUSTOM_SPELLS = ${JSON.stringify(spells, null, 2)};\n`;
fs.writeFileSync(sourcePath, output, "utf8");
fs.mkdirSync(path.join(root, "dist", "data"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "data", "spells-custom.js"), output, "utf8");

console.log("Spell data updated from Wiki-Classe-LRDR.pdf.");
