const fs = require('fs');
const path = require('path');

const sciPath = path.join(__dirname, '..', 'subjects', 'science.html');
const html = fs.readFileSync(sciPath, 'utf8');

const matches = [...html.matchAll(/<div class="formula-title">([\s\S]*?)<\/div>/g)];
console.log(`science.html contains ${matches.length} formula blocks:`);
matches.forEach((m, idx) => {
  const start = m.index;
  const snippet = html.substring(start, start + 800);
  const steps = (snippet.match(/class="formula-step"/g) || []).length;
  console.log(`${idx + 1}. [Steps: ${steps}] ${m[1].trim()}`);
});
