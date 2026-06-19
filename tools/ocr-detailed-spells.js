const fs = require("node:fs");
const path = require("node:path");
const { recognize } = require("tesseract.js");

const root = path.resolve(__dirname, "..");
const inputDir = path.join(root, "wiki image et texte", "dofus sorts", "crâ");
const outputDir = path.join(root, "data", "ocr-spells-detailed", "cra");
const langPath = path.join(root, "node_modules", "@tesseract.js-data", "fra", "4.0.0");

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const files = fs.readdirSync(inputDir).filter((file) => /\.png$/i.test(file)).sort();

  for (const file of files) {
    const target = path.join(outputDir, file.replace(/\.png$/i, ".txt"));
    if (fs.existsSync(target)) continue;
    console.log(`OCR ${file}`);
    const result = await recognize(path.join(inputDir, file), "fra", { langPath });
    fs.writeFileSync(target, result.data.text.replace(/\r\n/g, "\n").trim(), "utf8");
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
