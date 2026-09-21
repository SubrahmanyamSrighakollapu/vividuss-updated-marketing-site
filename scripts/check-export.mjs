// Verify generated deliverables, including local linked assets and metadata.
import { readFile, stat, readdir } from 'node:fs/promises';
import { resolve, dirname, extname, join } from 'node:path';
const root = resolve('out');
const services = [
  'web-development',
  'mobile-app-development',
  'whatsapp-crm',
  'social-media-marketing',
  'seo-marketing',
  'graphic-design',
  'poster-design',
];
const routes = [
  '/',
  '/about/',
  '/services/',
  '/portfolio/',
  '/franchise/',
  '/contact/',
  '/privacy-policy/',
  '/terms-and-conditions/',
  ...services.map((s) => '/services/' + s + '/'),
];
const failures = [],
  checked = new Set();
async function exists(path) {
  try {
    return await stat(path);
  } catch {
    return null;
  }
}
for (const route of routes) {
  const file = join(root, route, 'index.html'),
    s = await exists(file);
  if (!s) {
    failures.push('Missing route ' + route);
    continue;
  }
  const html = await readFile(file, 'utf8');
  if ((html.match(/<h1[\s>]/g) || []).length !== 1)
    failures.push('Expected one main heading: ' + route);
  if (!/<title>[^<]+Vividuss[^<]*<\/title>/.test(html))
    failures.push('Missing page title: ' + route);
  if (!html.includes('name="description"')) failures.push('Missing description: ' + route);
  if (!html.includes('rel="canonical"')) failures.push('Missing canonical: ' + route);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const link = match[1].replace(/&amp;/g, '&');
    if (!link || link.startsWith('#') || /^(?:https?:|mailto:|tel:|data:)/.test(link)) continue;
    const url = new URL(link, 'https://vividuss.test' + route);
    let target = join(root, decodeURIComponent(url.pathname));
    if (!extname(target)) target = join(target, 'index.html');
    if (checked.has(target)) continue;
    checked.add(target);
    if (!(await exists(target))) failures.push('Broken local link in ' + route + ': ' + link);
  }
}
async function walk(dir) {
  return (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((e) =>
        e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
      ),
    )
  ).flat();
}
const files = await walk(root);
for (const file of files.filter((f) => f.endsWith('.css'))) {
  const css = await readFile(file, 'utf8');
  for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) {
    const link = match[1];
    if (link.startsWith('data:') || link.startsWith('http')) continue;
    const target = link.startsWith('/')
      ? join(root, link)
      : resolve(dirname(file), link.split('?')[0]);
    if (!(await exists(target))) failures.push('Missing CSS asset ' + link);
  }
}
for (const image of [
  'home-hero',
  'about-office',
  'team',
  'building',
  'contact',
  'franchise',
  'founder',
  'mountain-banner',
  'web-hero',
  'mobile-hero',
  'whatsapp-hero',
  'social-hero',
  'seo-hero',
  'graphic-hero',
  'poster-hero',
  'brand-kit',
  'portfolio-hero',
  'project-sheet',
  'industries-sheet',
  'posters-sheet',
  'creative-banner',
  'avatars-sheet',
]) {
  if (!(await exists(join(root, 'images', image + '.webp'))))
    failures.push('Missing generated asset ' + image);
}
for (const file of [
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'favicon.svg',
  'downloads/vividuss-franchise-brochure.html',
])
  if (!(await exists(join(root, file)))) failures.push('Missing ' + file);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(
  'PASS: ' +
    routes.length +
    ' routes, 22 image assets, ' +
    checked.size +
    ' local links/assets, metadata, fonts, sitemap and brochure.',
);
