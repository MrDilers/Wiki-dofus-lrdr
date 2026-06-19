const fs = require("fs");
const path = require("path");
const { recognize } = require("tesseract.js");

const root = path.resolve(__dirname, "..");
const inputDir = path.join(root, "assets", "spells");
const outputDir = path.join(root, "data", "ocr-spells");
const langPath = path.join(root, "node_modules", "@tesseract.js-data", "fra", "4.0.0");

async function main() {
  fs.mkdirSync(outputDir, { recursive: true });
  const classes = fs.readdirSync(inputDir, { withFileTypes: true }).filter((entry) => entry.isDirectory());

  for (const classEntry of classes) {
    const classInput = path.join(inputDir, classEntry.name);
    const classOutput = path.join(outputDir, classEntry.name);
    fs.mkdirSync(classOutput, { recursive: true });

    const files = fs.readdirSync(classInput).filter((file) => file.endsWith(".png")).sort();
    for (const file of files) {
      const target = path.join(classOutput, file.replace(/\.png$/i, ".txt"));
      if (fs.existsSync(target)) continue;
      console.log(`OCR ${classEntry.name}/${file}`);
      const result = await recognize(path.join(classInput, file), "fra", { langPath });
      fs.writeFileSync(target, result.data.text.replace(/\r\n/g, "\n").trim(), "utf8");
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
