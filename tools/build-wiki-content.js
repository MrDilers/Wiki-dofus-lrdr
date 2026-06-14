const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const panopliesDir = path.join(root, "assets", "wiki", "panoplies");

function slugify(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function cleanSetName(fileName) {
  const base = fileName.replace(/_1\.webp$/i, ".webp").replace(/\.webp$/i, "");
  if (/^Panoplarbre$/i.test(base)) return "Panopl'Arbre";
  if (/^PanoplOignon$/i.test(base)) return "Panopl'Oignon";
  const spaced = base
    .replace(/^Panoplie_/i, "Panoplie ")
    .replace(/^Panopl/i, "Panopl")
    .replace(/_/g, " ")
    .replace(/dElya/i, "d'Elya")
    .replace(/CHelium/i, "C'Helium")
    .replace(/QuTan/i, "Qu'Tan")
    .replace(/CochonCho/i, "Cochon Cho");

  return spaced
    .replace(/\bDu\b/g, "du")
    .replace(/\bDes\b/g, "des")
    .replace(/\bDe\b/g, "de")
    .replace(/\bLEgendaire\b/g, "Legendaire")
    .trim();
}

function guessFamily(name) {
  const value = name.toLowerCase();
  if (/(akwadawa|airdawa|feudawa|terdawa)/.test(value)) return "Dawa";
  if (/dofus/.test(value)) return "Dofus";
  if (/(gladiateur|samourai|illyzaelle|legendaire|ventouse|ougah|qu'tan)/.test(value)) return "Tres haut niveau";
  if (/(blop|craqueleur|kitsou|pecheur|oignon|arbre)/.test(value)) return "Progression";
  return "Panoplie serveur";
}

function guessStats(name) {
  const value = name.toLowerCase();
  const stats = [];
  if (/(airdawa|air|agil|samourai|guepe)/.test(value)) stats.push("Agilite");
  if (/(feudawa|feu|intell|elya|chene|illyzaelle)/.test(value)) stats.push("Intelligence");
  if (/(akwadawa|eau|chance|roissingue|rouassingue)/.test(value)) stats.push("Chance");
  if (/(terdawa|terre|force|meulou|ancestral|craqueleur|rat|qu'tan)/.test(value)) stats.push("Force");
  if (/(dofus|legendaire|ventouse|gladiateur|ougah|minotot)/.test(value)) stats.push("Multi-elements");
  return stats.length ? stats : ["Stats visibles sur capture"];
}

const files = fs.readdirSync(panopliesDir).filter((file) => file.endsWith(".webp"));
const grouped = new Map();

for (const file of files) {
  const name = cleanSetName(file);
  const id = slugify(name);
  if (!grouped.has(id)) {
    grouped.set(id, {
      id,
      name,
      family: guessFamily(name),
      tags: guessStats(name),
      summary:
        "Panoplie ajoutee sur La Revanche de Retro. Les captures affichent les bonus de set et les objets requis pour l'equiper.",
      images: [],
    });
  }
  grouped.get(id).images.push(`assets/wiki/panoplies/${file}`);
}

const panoplies = [...grouped.values()]
  .map((item) => ({
    ...item,
    images: item.images.sort((a, b) => {
      const aAlt = /_1\.webp$/i.test(a);
      const bAlt = /_1\.webp$/i.test(b);
      if (aAlt !== bAlt) return aAlt ? 1 : -1;
      return a.localeCompare(b, "fr");
    }),
  }))
  .sort((a, b) => a.name.localeCompare(b.name, "fr"));

const content = {
  panoplies,
  guides: [
    {
      id: "bonus-guilde",
      category: "Bonus",
      title: "Bonus de guilde",
      intro:
        "Les bonus de guilde recompensent la progression collective. Tous les 25 niveaux de guilde, les membres passent au palier suivant et profitent d'effets supplementaires visibles dans l'onglet Bonus de la guilde.",
      details: [
        "Le systeme est lie au niveau de la guilde, pas au personnage seul.",
        "Chaque palier debloque un ou plusieurs bonus permanents pour les joueurs de la guilde.",
        "Les captures montrent des exemples de bonus: prospection, sagesse, vitalite, dommages, caracteristiques, portee, PM et PA selon le palier atteint.",
      ],
      images: ["assets/wiki/bonus/image.webp", "assets/wiki/bonus/image1.webp"],
    },
    {
      id: "maitre-hasard",
      category: "PNJ",
      title: "Maitre Hasard",
      intro:
        "Le Maitre Hasard est un PNJ de loterie situe sur la Map Start. Il sert a tenter sa chance contre des kamas pour obtenir un objet aleatoire de haut niveau.",
      details: [
        "Cout d'une tentative: 2 500 000 kamas.",
        "La recompense est un item aleatoire superieur au niveau 120.",
        "La table de gains peut contenir des objets rares, dont un Dofus Unique et une panoplie exceptionnelle autour du niveau 190.",
        "Ce PNJ est utile quand vous avez des kamas a investir et que vous acceptez une part de hasard.",
      ],
      images: ["assets/wiki/pnj/image.webp"],
    },
    {
      id: "metarias",
      category: "PNJ",
      title: "Marchand de Metarias",
      intro:
        "Le Marchand de Metarias permet de transformer des ressources de monstres en Metarias. Il se trouve dans les ateliers de forgemagie et vend les objets necessaires aux echanges.",
      details: [
        "Le marchand vend la Sphere a Metarias et la Fiole a element.",
        "Chaque fabrication consomme 1 Sphere a Metarias en plus des ressources demandees.",
        "Pensez a racheter des spheres avant de lancer plusieurs echanges a la suite.",
      ],
      recipes: [
        ["Metaria rouge", "4 Plumes du Kwak de Flamme + 1 Bec du Kwak de Flamme"],
        ["Metaria bleue", "4 Plumes du Kwak de Glace + 1 Bec du Kwak de Glace"],
        ["Metaria jaune", "4 Plumes du Kwak de Terre + 1 Bec du Kwak de Terre"],
        ["Metaria verte", "4 Plumes du Kwak de Vent + 1 Bec du Kwak de Vent"],
        ["Metaria Triame rouge", "4 Antennes de Scarafeuille rouge + 1 Ailes de Scarafeuille rouge"],
        ["Metaria Triame bleue", "4 Antennes de Scarafeuille bleu + 1 Ailes de Scarafeuille bleu"],
        ["Metaria Triame verte", "4 Antennes de Scarafeuille vert + 1 Ailes de Scarafeuille vert"],
        ["Metaria Triame jaune", "4 Antennes de Scarafeuille blanc + 1 Ailes de Scarafeuille blanc"],
        ["Metaria Mage rouge", "4 Coquilles de Dragoeuf Noir + 1 Oeuf de Dragoeuf Noir"],
        ["Metaria Mage bleue", "4 Coquilles de Dragoeuf Saphir + 1 Oeuf de Dragoeuf Saphir"],
        ["Metaria Mage verte", "4 Coquilles de Dragoeuf Dore + 1 Oeuf de Dragoeuf Dore"],
        ["Metaria Mage jaune", "4 Coquilles de Dragoeuf Blanc + 1 Oeuf de Dragoeuf Blanc"],
      ],
    },
    {
      id: "bouclier-evolutif",
      category: "Equipements evolutifs",
      title: "Bouclier evolutif",
      intro:
        "Le Bouclier evolutif est recu automatiquement a la creation du personnage. Au depart, il ne donne aucune statistique; il progresse ensuite en etant nourri avec des boucliers elementaires.",
      details: [
        "Boucliers utilises pour l'evolution: Akwadawa, Airdawa, Feudawa et Terdawa.",
        "Plus le bouclier est nourri, plus il gagne en puissance et en statistiques.",
        "Le systeme sert de progression longue duree: on ameliore l'objet petit a petit pendant l'aventure.",
      ],
      video: "assets/wiki/evolutifs/20260516-2210-52.9973606.mp4",
    },
    {
      id: "dofus-evolutif",
      category: "Equipements evolutifs",
      title: "Dofus evolutif",
      intro:
        "Le Dofus evolutif est lui aussi donne a la creation du personnage. Il commence sans bonus, puis gagne des statistiques lorsque vous le nourrissez avec differents Dofus.",
      details: [
        "Le principe est volontairement simple: recuperer des Dofus, les utiliser pour faire progresser l'objet, puis profiter de ses nouveaux bonus.",
        "Ce Dofus accompagne la progression du personnage et donne un objectif clair sur la duree.",
      ],
    },
    {
      id: "streak-donjons",
      category: "Donjons",
      title: "Streak Donjons",
      intro:
        "Le Streak Donjons recompense les equipes qui enchainent des donjons differents sans wipe complet. Chaque boss vaincu dans un donjon different ajoute +1 au compteur.",
      details: [
        "Refaire le meme donjon deux fois de suite ne donne pas de point, mais ne remet pas le compteur a zero.",
        "Un wipe complet de la team remet le streak a zero tant que le palier 25 n'est pas atteint.",
        "Si un membre meurt mais que la team gagne le combat, le streak est valide.",
        "En mode heros ou multicompte, chaque personnage possede son propre streak.",
      ],
      rewards: [
        ["3", "25 000 kamas"],
        ["6", "50 000 kamas"],
        ["9", "100 000 kamas"],
        ["12", "200 000 kamas"],
        ["15", "400 000 kamas"],
        ["20", "50 ogrines"],
        ["25", "Bouclier des 25 Victoires + annonce globale"],
      ],
      note:
        "Au palier 25, le personnage devient Indestructible: son streak ne se remet plus a zero apres un wipe. Il n'y a plus de nouvelle recompense apres ce palier.",
    },
  ],
};

const output = `window.LRDR_WIKI = ${JSON.stringify(content, null, 2)};\n`;
fs.writeFileSync(path.join(root, "data", "wiki-content.js"), output);
console.log(`Generated ${panoplies.length} panoplies and ${content.guides.length} guides.`);
