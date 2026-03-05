import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');

const requiredIds = [
  'richEditor',
  'markdownPane',
  'syncFromRichBtn',
  'syncFromMarkdownBtn',
  'copyMarkdownBtn',
  'analyticsOptIn'
];

const requiredFunctions = [
  'function syncRichToMarkdown()',
  'function syncMarkdownToRich()',
  "trackAnalytics('conversion')",
  "trackAnalytics('copy_action')"
];

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) {
    console.error(`Smoke check failed: missing element id ${id}`);
    process.exit(1);
  }
}

for (const fn of requiredFunctions) {
  if (!html.includes(fn)) {
    console.error(`Smoke check failed: missing expected behavior marker ${fn}`);
    process.exit(1);
  }
}

console.log('Static smoke checks passed.');
