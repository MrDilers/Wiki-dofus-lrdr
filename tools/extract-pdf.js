const fs = require("fs");
const path = require("path");
const { PDFParse } = require("pdf-parse");

const pdfPath = process.argv[2] || "C:/Users/Shadow/Downloads/Wiki-Classe-LRDR.pdf";
const outDir = process.argv[3] || "assets/pages";

async function main() {
  fs.mkdirSync(outDir, { recursive: true });

  const data = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data });

  const info = await parser.getInfo({ parsePageInfo: true });
  const text = await parser.getText();
  fs.mkdirSync("data/raw", { recursive: true });
  fs.writeFileSync(
    path.join("data/raw", "classes-text.txt"),
    text.text,
    "utf8"
  );

  const screenshots = await parser.getScreenshot({ scale: 2 });
  await parser.destroy();

  for (const page of screenshots.pages) {
    const pageNumber = page.pageNumber || page.page || screenshots.pages.indexOf(page) + 1;
    const fileName = `classe-page-${String(pageNumber).padStart(2, "0")}.png`;
    fs.writeFileSync(path.join(outDir, fileName), page.data);
  }

  console.log(
    JSON.stringify(
      {
        source: pdfPath,
        pages: info.total,
        textChars: text.text.length,
        renderedPages: screenshots.pages.length,
        outDir,
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
