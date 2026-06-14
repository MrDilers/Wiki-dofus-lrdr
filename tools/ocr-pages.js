const fs = require("fs");
const path = require("path");
const { recognize } = require("tesseract.js");

const pagesDir = process.argv[2] || "assets/pages";
const outDir = process.argv[3] || "data/ocr";
const langPath = "node_modules/@tesseract.js-data/fra/4.0.0";

async function main() {
  fs.mkdirSync(outDir, { recursive: true });
  const files = fs
    .readdirSync(pagesDir)
    .filter((file) => file.toLowerCase().endsWith(".png"))
    .sort();

  const pages = [];
  for (const file of files) {
    const imagePath = path.join(pagesDir, file);
    console.log(`OCR ${file}`);
    const result = await recognize(imagePath, "fra", { langPath });
    const page = Number(file.match(/(\d+)/)?.[1] || pages.length + 1);
    const text = result.data.text.replace(/\r\n/g, "\n").trim();
    pages.push({ page, image: `assets/pages/${file}`, text });
    fs.writeFileSync(
      path.join(outDir, file.replace(/\.png$/i, ".txt")),
      text,
      "utf8"
    );
  }

  fs.writeFileSync(
    path.join(outDir, "classes-pages.json"),
    JSON.stringify(pages, null, 2),
    "utf8"
  );
  console.log(`OCR complete: ${pages.length} pages`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
