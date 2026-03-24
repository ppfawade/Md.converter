import fs from 'node:fs';

const html = fs.readFileSync('index.html', 'utf8');

const singletonTagChecks = [
  { label: '<head>', pattern: /<head\b/gi },
  { label: '<body>', pattern: /<body\b/gi },
  { label: '</html>', pattern: /<\/html>/gi },
  { label: '<title>', pattern: /<title\b/gi }
];

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

for (const check of singletonTagChecks) {
  const matches = html.match(check.pattern) || [];
  if (matches.length > 1) {
    console.error(`Smoke check failed: expected at most one ${check.label}, found ${matches.length}`);
    process.exit(1);
  }
}

console.log('Static smoke checks passed.');
