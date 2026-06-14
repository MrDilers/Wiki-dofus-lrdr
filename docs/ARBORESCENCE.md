# Arborescence du projet

Ce fichier sert de repere rapide pour une personne qui decouvre le projet.

```text
Wiki dofus/
  index.html                 Page d'accueil
  classes.html               Page des classes
  wiki.html                  Page des guides serveur
  assets/
    app.js                   JavaScript principal du site
    styles.css               Feuille de style principale
    media/                   Images globales du site
    pages/                   Captures des pages du PDF classes
    wiki/
      bonus/                 Captures des bonus serveur
      evolutifs/             Videos/images des objets evolutifs
      panoplies/             Captures des panoplies
      pnj/                   Captures des PNJ
  data/
    wiki-data.js             Donnees classes + OCR prepare
    wiki-content.js          Donnees guides serveur + panoplies
    ocr/                     Textes OCR bruts des classes
    raw/                     Extractions brutes
  tools/
    build-static-data.js     Genere les donnees classes
    build-wiki-content.js    Genere les donnees guides serveur
    extract-pdf.js           Extrait les pages du PDF classes
    ocr-pages.js             Lance l'OCR sur les pages classes
    serve.js                 Petit serveur local de test
  dist/                      Version servie par Netlify
```

## Regles de rangement

- Les fichiers visibles sur le site vont dans `assets/`.
- Les contenus structures vont dans `data/`.
- Les scripts de generation vont dans `tools/`.
- Les captures de panoplies gardent le nom de la panoplie.
- Les images generiques ne doivent pas s'appeler `image.webp`; utiliser un nom descriptif.
- Le dossier `wiki image et texte/` reste une source locale de travail et n'est pas publie.

## Synchronisation avec Netlify

Netlify publie le dossier `dist/`. Apres modification d'un fichier public, il faut copier la version correspondante dans `dist/`.

Exemples :

- `assets/app.js` -> `dist/assets/app.js`
- `assets/styles.css` -> `dist/assets/styles.css`
- `wiki.html` -> `dist/wiki.html`
- `data/wiki-content.js` -> `dist/data/wiki-content.js`
