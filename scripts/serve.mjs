// Dependency-free file server for reviewing the static export, with no application backend.
import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat, access } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
const root = resolve(fileURLToPath(new URL('../out/', import.meta.url)));
const args = process.argv.slice(2),
  portIndex = args.indexOf('--port');
const port = Number(portIndex >= 0 ? args[portIndex + 1] : process.env.PORT || 3000);
const mime = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.pdf': 'application/pdf',
};
try {
  await access(resolve(root, 'index.html'));
} catch {
  console.error('Static export is missing. Run npm run build first.');
  process.exit(1);
}
async function serveFile(path, response, method, status = 200) {
  const info = await stat(path);
  response.writeHead(status, {
    'Content-Type': mime[extname(path)] || 'application/octet-stream',
    'Content-Length': info.size,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': path.includes(sep + '_next' + sep)
      ? 'public, max-age=31536000, immutable'
      : 'no-cache',
  });
  if (method === 'HEAD') response.end();
  else
    createReadStream(path)
      .on('error', () => response.destroy())
      .pipe(response);
}
http
  .createServer(async (req, res) => {
    if (!['GET', 'HEAD'].includes(req.method || '')) {
      res.writeHead(405, { Allow: 'GET, HEAD' }).end();
      return;
    }
    try {
      const pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
      let path = resolve(root, '.' + pathname);
      if (path !== root && !path.startsWith(root + sep)) {
        res.writeHead(403).end();
        return;
      }
      try {
        if ((await stat(path)).isDirectory()) path = resolve(path, 'index.html');
        await serveFile(path, res, req.method);
        return;
      } catch {}
      await serveFile(resolve(root, '404.html'), res, req.method, 404);
    } catch {
      res.writeHead(400).end('Bad request');
    }
  })
  .listen(port, process.env.HOST || '0.0.0.0', () =>
    console.log('Vividuss static export: http://localhost:' + port),
  );
