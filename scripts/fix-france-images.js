const fs = require('fs');
const path = require('path');

const workspaceRoot = path.join(__dirname, '..');
const pagePath = path.join(workspaceRoot, 'src/app/france/page.js');
const publicRoot = path.join(workspaceRoot, 'public', 'France');

const normalize = (value = '') =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]/g, '');

const actualPaths = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else actualPaths.push('/' + path.relative(path.join(workspaceRoot, 'public'), full).replace(/\\/g, '/'));
  }
}

if (!fs.existsSync(publicRoot)) {
  throw new Error(`France public folder not found: ${publicRoot}`);
}
walk(publicRoot);

const text = fs.readFileSync(pagePath, 'utf8');
const regex = /(name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"[\s\S]*?style:\s*"([^"]+)"/g;
let lastIndex = 0;
let updated = text;

for (const match of text.matchAll(regex)) {
  const [, , name, imageValue, style] = match;
  const value = imageValue.trim();
  const normalizedValue = normalize(path.basename(value));

  let replacement = value;
  const direct = actualPaths.includes(value) || actualPaths.includes('/' + value.replace(/^\//, ''));
  if (!direct) {
    let candidates = actualPaths.filter((p) => {
      const base = normalize(path.basename(p));
      const folder = normalize(path.dirname(p));
      const nameNorm = normalize(name);
      const styleNorm = normalize(style);

      return (
        base === normalizedValue ||
        base.includes(normalizedValue) ||
        normalizedValue.includes(base) ||
        base.includes(nameNorm) ||
        nameNorm.includes(base) ||
        folder.includes(styleNorm) && (base.includes(nameNorm) || nameNorm.includes(base)) ||
        folder.includes(nameNorm) ||
        (base.includes(styleNorm) && (base.includes(nameNorm) || nameNorm.includes(base)))
      );
    });

    if (candidates.length === 0) {
      candidates = actualPaths.filter((p) => {
        const base = normalize(path.basename(p));
        const styleNorm = normalize(style);
        const nameNorm = normalize(name);
        return base.includes(styleNorm) || styleNorm.includes(base) || base.includes(nameNorm) || nameNorm.includes(base);
      });
    }

    if (candidates.length === 0) {
      candidates = actualPaths.filter((p) => normalize(path.basename(p)).includes(normalizedValue) || normalizedValue.includes(normalize(path.basename(p))));
    }

    if (candidates.length > 0) {
      replacement = candidates[0];
    }
  }

  const fullMatch = match[0];
  const prefix = text.slice(lastIndex, match.index);
  updated = updated.replace(fullMatch, fullMatch.replace(value, replacement));
  lastIndex = match.index + fullMatch.length;
}

fs.writeFileSync(pagePath, updated);
console.log(`Updated France image references in ${pagePath}`);
console.log(`Total France asset paths: ${actualPaths.length}`);
