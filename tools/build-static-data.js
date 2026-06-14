const fs = require("fs");

const classes = JSON.parse(fs.readFileSync("data/classes.json", "utf8"));
const pages = JSON.parse(fs.readFileSync("data/ocr/classes-pages.json", "utf8"));

const source = [
  "window.LRDR_CLASSES = ",
  JSON.stringify(classes, null, 2),
  ";\nwindow.LRDR_PAGES = ",
  JSON.stringify(pages, null, 2),
  ";\n",
].join("");

fs.writeFileSync("data/wiki-data.js", source, "utf8");
console.log("data/wiki-data.js generated");
