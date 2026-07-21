import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const root = normalize(join(process.cwd(), "out"));
const port = Number(process.env.PORT ?? 4185);
const basePath = "/rameez-portfolio";

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

createServer(async (request, response) => {
  const url = new URL(request.url ?? "/", "http://localhost");
  let pathname = decodeURIComponent(url.pathname);

  if (pathname === basePath) pathname = "/";
  else if (pathname.startsWith(`${basePath}/`)) pathname = pathname.slice(basePath.length);

  let filePath = normalize(join(root, pathname));
  if (!filePath.startsWith(root)) {
    response.writeHead(403).end("Forbidden");
    return;
  }

  try {
    const info = await stat(filePath);
    if (info.isDirectory()) filePath = join(filePath, "index.html");
    const finalInfo = await stat(filePath);
    response.writeHead(200, {
      "Content-Type": types[extname(filePath)] ?? "application/octet-stream",
      "Content-Length": finalInfo.size,
      "Cache-Control": "no-store",
    });
    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(404).end("Not found");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Previewing ${root} at http://127.0.0.1:${port}${basePath}/`);
});
