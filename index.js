// file: index.js
// Minimal static HTTP server (no dependencies) to serve the portfolio (HTML/CSS/JS)

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = Number(process.env.PORT || 19164);
const HOST = "0.0.0.0";
const DEFAULT_LANG = "en";
const DEFAULT_PAGE = "index.html";

const PUBLIC_DIR = path.join(__dirname, "public");
const ROOT = fs.existsSync(PUBLIC_DIR) ? PUBLIC_DIR : __dirname;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".eot": "application/vnd.ms-fontobject",
  ".webp": "image/webp"
};

let uptime = 0;
setInterval(() => {
  uptime += 1;
  if (uptime % 30 === 0) {
    console.log("⏳ Uptime:", uptime, "seconds");
  }
}, 1000);

function safeUrlToPath(urlPath) {
  // 1. Clean and normalize the path
  const clean = decodeURIComponent((urlPath || "/").split("?")[0]).replace(/\/+/g, "/");
  let norm = path.posix.normalize(clean);
  
  if (norm.includes("..")) return "/404.__block__";

  // 2. Handle root request: Redirect to default language index page
  if (norm === "/") {
    // Note: Client-side JS (i18n.js) handles cookie-based language redirect
    return `/${DEFAULT_LANG}/${DEFAULT_PAGE}`;
  }

  // 3. If the path ends with a slash (e.g., /fr/ or /fr), append the default page
  if (norm.endsWith("/")) {
    norm += DEFAULT_PAGE;
  }
  
  // 4. Check for top-level file request (e.g., /js/main.js, /favicon.ico)
  // These files are outside the language folders, so they don't need the language prefix.
  const parts = norm.split("/").filter(p => p.length > 0);
  if (parts.length === 1 && !parts[0].includes(".")) {
    // This looks like a request for a language folder (e.g., /fr) without the index.html
    return norm + "/" + DEFAULT_PAGE;
  } else if (parts.length > 0 && parts[0].length === 2 && MIME[path.extname(parts[parts.length - 1]).toLowerCase()]) {
    // This is a request for a file inside a language folder (e.g., /fr/index.html)
    // The path is already correct.
    return norm;
  } else if (MIME[path.extname(norm).toLowerCase()] || norm.includes("404")) {
    // This is a direct request for a root asset (e.g., /css/main.css or /index.html if we kept it)
    // Since we now assume all HTML is in /lang/, this should primarily catch assets.
    return norm;
  }
  
  // Final fallback (e.g. for /en/index.html)
  return norm;
}

function send(res, status, headers, body) {
  res.writeHead(status, headers);
  if (body && body.pipe) return body.pipe(res);
  res.end(body);
}

const server = http.createServer((req, res) => {
  const reqPath = safeUrlToPath(req.url);
  let filePath = path.join(ROOT, reqPath);

  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) {
      filePath = path.join(filePath, DEFAULT_PAGE); // Should be redundant due to safeUrlToPath
    }

    fs.stat(filePath, (err2, stat2) => {
      if (err2 || !stat2.isFile()) {
        send(res, 404, { "content-type": "text/plain; charset=utf-8" }, "404 Not Found");
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      const type = MIME[ext] || "application/octet-stream";
      const cache = ext === ".html" ? "no-cache" : "public, max-age=3600, immutable";

      res.writeHead(200, {
        "content-type": type,
        "cache-control": cache
      });
      fs.createReadStream(filePath).pipe(res);
    });
  });
});

server.listen(PORT, HOST, () => {
  console.log("✅ Oreo Studios portfolio server started (Node.js, no deps)");
  console.log(`🌐 Listening on http://${HOST}:${PORT}`);
  console.log(`📂 Serving from: ${ROOT}`);
  console.log("👉 Put your files in ./public (or root, but use /lang/ structure).");
});