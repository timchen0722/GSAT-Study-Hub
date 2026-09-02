const fs = require('fs');
const path = require('path');

['math-a.html', 'math-b.html'].forEach(f => {
  const filePath = path.join(__dirname, '..', 'subjects', f);
  const html = fs.readFileSync(filePath, 'utf8');
  const matches = [...html.matchAll(/<div class="formula-title">([\s\S]*?)<\/div>/g)];
  console.log(`\n================ ${f} (${matches.length} blocks) ================`);
  matches.forEach((m, idx) => {
    // Find the lines in this block
    const blockStart = m.index;
    const blockEnd = html.indexOf('</div>\n          </div>', blockStart) !== -1 ? html.indexOf('</div>\n          </div>', blockStart) : html.indexOf('</div>', blockStart + 50);
    const blockContent = html.substring(blockStart, blockStart + 600);
    const stepCount = (blockContent.match(/class="formula-step"/g) || []).length;
    console.log(`${idx + 1}. [Steps: ${stepCount}] ${m[1].trim()}`);
  });
});
