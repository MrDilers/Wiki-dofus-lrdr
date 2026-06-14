# Wiki La Revanche de Retro

Site statique du wiki Dofus 1.34 pour le serveur La Revanche de Retro.

## Pages principales

- `index.html` : page d'accueil.
- `classes.html` : page des classes.
- `wiki.html` : guides serveur, panoplies, bonus, PNJ, evolutifs et donjons.

## Dossiers importants

- `assets/app.js` : logique du site, navigation, recherche, filtres et fenetres d'image.
- `assets/styles.css` : design complet du site.
- `assets/media/` : visuels generaux du site, comme l'image d'accueil.
- `assets/pages/` : images extraites du PDF des classes.
- `assets/wiki/` : images et videos utilisees dans les guides serveur.
- `data/wiki-data.js` : donnees des classes et OCR deja preparees.
- `data/wiki-content.js` : contenu des guides serveur et liste des panoplies.
- `tools/` : scripts utilitaires pour generer ou verifier les donnees.
- `dist/` : copie publiee par Netlify. Quand une page, un style, un script ou un media change, il faut garder `dist` synchronise.

## Modifier du contenu

Pour ajouter ou modifier un guide serveur, le plus simple est de modifier `tools/build-wiki-content.js`, puis de lancer :

```bash
npm run build:wiki
```

Sur Windows PowerShell, si `npm` est bloque par la politique d'execution, utiliser :

```bash
npm.cmd run build:wiki
```

Pour les textes de classes, les donnees sont dans `data/wiki-data.js`. Les captures de classes sont dans `assets/pages/`.

## Verifier avant publication

```bash
npm run check
```

Sur Windows PowerShell :

```bash
npm.cmd run check
```

Le site est publie via GitHub puis Netlify. Apres un `git push`, Netlify met la version en ligne automatiquement.
