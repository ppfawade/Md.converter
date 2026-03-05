import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync('index.html', 'utf8');

function fail(message) {
  console.error(`Lint failed: ${message}`);
  process.exit(1);
}

if (!html.toLowerCase().includes('<!doctype html>')) fail('Missing <!DOCTYPE html>.');
if (!html.includes('<html') || !html.includes('</html>')) fail('Missing html root tags.');
if (!html.includes('<head>') || !html.includes('</head>')) fail('Missing head tags.');
if (!html.includes('<body>') || !html.includes('</body>')) fail('Missing body tags.');

const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/i);
if (!styleMatch) fail('Missing <style> block.');
const css = styleMatch[1];
const openBraces = (css.match(/\{/g) || []).length;
const closeBraces = (css.match(/\}/g) || []).length;
if (openBraces !== closeBraces) fail('CSS braces are unbalanced.');

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/i);
if (!scriptMatch) fail('Missing <script> block.');
const js = scriptMatch[1];
try {
  new vm.Script(js);
} catch (error) {
  fail(`JavaScript syntax error: ${error.message}`);
}

console.log('HTML/CSS/JS lint checks passed.');
