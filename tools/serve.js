const http = require("http");
const fs = require("fs");
const path = require("path");

const root = process.cwd();
const port = Number(process.env.PORT || 4173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
};

function send(response, status, body, type = "text/plain; charset=utf-8") {
  response.writeHead(status, { "Content-Type": type });
  response.end(body);
}

http
  .createServer((request, response) => {
    const url = new URL(request.url, `http://localhost:${port}`);
    const cleanPath = decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const requested = cleanPath || "index.html";
    const filePath = path.resolve(root, requested);

    if (!filePath.startsWith(root)) {
      send(response, 403, "Forbidden");
      return;
    }

    fs.readFile(filePath, (error, data) => {
      if (error) {
        send(response, 404, "Not found");
        return;
      }
      send(response, 200, data, types[path.extname(filePath)] || "application/octet-stream");
    });
  })
  .listen(port, () => {
    console.log(`Wiki LRDR: http://localhost:${port}`);
  });
