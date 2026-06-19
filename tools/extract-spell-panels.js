const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const pagesDir = path.join(root, "assets", "pages");
const outputDir = path.join(root, "assets", "spells");

const classPages = [
  { id: "cra", name: "Cra", pages: [{ page: 1, panels: [0, 1, 2, 3] }, { page: 2, panels: [0, 1] }] },
  { id: "sadida", name: "Sadida", pages: [{ page: 2, panels: [2, 3] }, { page: 3, panels: [0, 1, 2, 3, 4] }] },
  { id: "sacrieur", name: "Sacrieur", pages: [{ page: 4, panels: [0, 1, 2, 3] }, { page: 5, panels: [0] }] },
  { id: "pandawa", name: "Pandawa", pages: [{ page: 5, panels: [1, 2, 3, 4] }, { page: 6, panels: [0, 1] }] },
  { id: "feca", name: "Feca", pages: [{ page: 6, panels: [2, 3] }, { page: 7, panels: [0, 1, 2, 3] }] },
  { id: "osamodas", name: "Osamodas", pages: [{ page: 8, panels: [0, 1, 2, 3] }, { page: 9, panels: [0, 1, 2, 3] }, { page: 10, panels: [0] }] },
  { id: "enutrof", name: "Enutrof", pages: [{ page: 10, panels: [1, 2, 3, 4] }, { page: 11, panels: [0, 1] }] },
  { id: "sram", name: "Sram", pages: [{ page: 11, panels: [2, 3] }, { page: 12, panels: [0, 1, 2, 3] }] },
  { id: "xelor", name: "Xelor", pages: [{ page: 13, panels: [0, 1, 2, 3, 4, 5] }, { page: 14, panels: [0] }] },
  { id: "ecaflip", name: "Ecaflip", pages: [{ page: 14, panels: [1, 2, 3, 4] }, { page: 15, panels: [0] }] },
  { id: "eniripsa", name: "Eniripsa", pages: [{ page: 15, panels: [1, 2, 3] }, { page: 16, panels: [0, 1, 2] }] },
  { id: "iop", name: "Iop", pages: [{ page: 16, panels: [3] }, { page: 17, panels: [0, 1, 2, 3] }] },
];

const pageNames = {
  1: [
    "Souffle de l'Humus",
    "Fleche des Murmures",
    "Fleche du Revenant",
    "Fleche du Neant",
  ],
  2: [
    "Fleche du Vent Cisaillant",
    "Fleche Explosive",
    "Ronce Aride",
    "Ronce du Chaos",
  ],
  3: [
    "Ronce Reine",
    "Ronce Epineuse",
    "Ronces Multiples du Roi Sadi",
    "Ronces Aerienne",
    "Herbe Folle Ichonne",
  ],
  4: [
    "Pied du Tsunami",
    "Assaut",
    "Dissolution des Enfers",
    "Absorption Terrestre",
  ],
  5: [
    "Punition Sanglante",
    "Poing de Pierre",
    "Uppercut a la McGregor",
    "Tempete Alcoolisee",
    "La Charge Rocailleuse",
  ],
  6: [
    "Flasque Terrestre",
    "Pandatak Enflamme",
    "Armure Brulante",
    "Glyphe Protecteur",
  ],
  7: [
    "Retour du Baton",
    "Glyphe Abyssal",
    "Bulle Tellurique",
    "Glyphe du Jugement",
  ],
  8: [
    "Plume du Corbeau",
    "Griffe Rocheuse",
    "Cri Sauvage",
    "Benediction Bestiale",
  ],
  9: [
    "Apogee de l'Alize",
    "Dernier Souffle",
    "Lien Bestial",
    "Soin Naturel",
  ],
  10: [
    "Rage Primordiale",
    "Flammes Traitresses",
    "Rapine Souterraine",
    "Pelle du Maree-Haut",
    "Pelle Terrifiante",
  ],
  11: [
    "Pelle du Maree-Haut",
    "Pelle Terrifiante",
    "Morsure des Profondeurs",
    "Venin Abyssal",
  ],
  12: [
    "Siphon des Ames",
    "Pillage Funeste",
    "Profanation de Sanctuaire",
    "L'Etreinte des Damnes",
  ],
  13: [
    "Gelure Spectrale",
    "Sablier Enracine",
    "Sablier Abyssal",
    "Engrenage Loyal",
    "Larcin Temporel",
    "Sablier Ardent",
  ],
  14: [
    "Sablier Ardent",
    "Bourrasque du Hasard",
    "Rafale de Poker",
    "Esprit Felin",
    "Vague Celeste",
  ],
  15: [
    "Quitte ou Double Fatal",
    "Le Baiser Incandescent",
    "Impulsion Vitale",
    "Larme d'Ondine",
  ],
  16: [
    "Le Baiser Incandescent",
    "Impulsion Vitale",
    "Larme d'Ondine",
    "Vague du Guerrier",
  ],
  17: [
    "Vague du Guerrier",
    "Couperet Ardent",
    "Poing Epique",
    "Pression Tellurique",
  ],
};

const standardPanels = [
  { x: 62, y: 118, w: 430, h: 448 },
  { x: 540, y: 118, w: 430, h: 448 },
  { x: 62, y: 595, w: 430, h: 503 },
  { x: 540, y: 595, w: 430, h: 503 },
  { x: 62, y: 1128, w: 430, h: 480 },
  { x: 540, y: 1128, w: 430, h: 480 },
];

const pagePanels = {
  1: [
    { x: 64, y: 382, w: 424, h: 505 },
    { x: 502, y: 382, w: 424, h: 505 },
    { x: 64, y: 963, w: 424, h: 490 },
    { x: 520, y: 963, w: 424, h: 490 },
  ],
  2: [
    { x: 64, y: 118, w: 424, h: 448 },
    { x: 525, y: 118, w: 424, h: 448 },
    { x: 64, y: 956, w: 424, h: 488 },
    { x: 545, y: 956, w: 424, h: 488 },
  ],
};

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function runPowerShell(script) {
  const { spawnSync } = require("child_process");
  const result = spawnSync("powershell", ["-NoProfile", "-ExecutionPolicy", "Bypass", "-Command", script], {
    cwd: root,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(result.stderr || result.stdout);
  }
}

function cropImage(source, target, rect) {
  const script = `
    Add-Type -AssemblyName System.Drawing
    $source = [System.Drawing.Image]::FromFile('${source.replace(/'/g, "''")}')
    $rect = New-Object System.Drawing.Rectangle(${rect.x}, ${rect.y}, ${rect.w}, ${rect.h})
    $bitmap = New-Object System.Drawing.Bitmap($rect.Width, $rect.Height)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.DrawImage($source, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $bitmap.Save('${target.replace(/'/g, "''")}', [System.Drawing.Imaging.ImageFormat]::Png)
    $graphics.Dispose()
    $bitmap.Dispose()
    $source.Dispose()
  `;
  runPowerShell(script);
}

fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

const spellData = {};

for (const classItem of classPages) {
  const classDir = path.join(outputDir, classItem.id);
  fs.mkdirSync(classDir, { recursive: true });
  spellData[classItem.id] = [];

  for (const pageConfig of classItem.pages) {
    const page = pageConfig.page;
    const source = path.join(pagesDir, `classe-page-${String(page).padStart(2, "0")}.png`);
    const names = pageNames[page] || [];
    const panels = pagePanels[page] || standardPanels;
    pageConfig.panels.forEach((index) => {
      const name = names[index];
      const rect = panels[index];
      if (!rect || !fs.existsSync(source)) return;
      const fileName = `page-${String(page).padStart(2, "0")}-${String(index + 1).padStart(2, "0")}-${slugify(name)}.png`;
      const target = path.join(classDir, fileName);
      cropImage(source, target, rect);
      spellData[classItem.id].push({
        name,
        page,
        image: `assets/spells/${classItem.id}/${fileName}`,
      });
    });
  }
}

const output = `window.LRDR_SPELL_PANELS = ${JSON.stringify(spellData, null, 2)};\n`;
fs.writeFileSync(path.join(root, "data", "spell-panels.js"), output);
console.log(`Generated spell panels for ${Object.keys(spellData).length} classes.`);
