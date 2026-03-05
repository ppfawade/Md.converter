import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');

function fail(message) {
  console.error(`Validation failed: ${message}`);
  process.exit(1);
}

const requiredMetaFragments = [
  'rel="canonical"',
  'property="og:title"',
  'property="og:description"',
  'property="og:type"',
  'property="og:url"',
  'property="og:image"'
];

for (const fragment of requiredMetaFragments) {
  if (!html.includes(fragment)) fail(`Missing required meta tag fragment: ${fragment}`);
}

const canonical = html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]+)"/i)?.[1];
if (!canonical) fail('Canonical URL missing href value.');
if (!canonical.startsWith('https://')) fail('Canonical URL must use https.');

const ogImage = html.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i)?.[1];
if (!ogImage) fail('OG image content missing.');
if (!ogImage.startsWith('https://')) fail('OG image URL must use https.');

const htmlWithoutCode = html.replace(/<script>[\s\S]*?<\/script>/gi, '').replace(/<style>[\s\S]*?<\/style>/gi, '');
const hrefs = Array.from(htmlWithoutCode.matchAll(/<a[^>]+href=\"([^\"]+)\"/gi), (m) => m[1]);
for (const href of hrefs) {
  if (href.startsWith('javascript:')) fail(`Unsafe javascript: URL found (${href}).`);
  if (!href.startsWith('#') && !href.startsWith('/') && !href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('mailto:')) {
    fail(`Unexpected link format: ${href}`);
  }
}

console.log('Link and meta validation checks passed.');
