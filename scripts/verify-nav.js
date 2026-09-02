const fs = require('fs');
const path = require('path');

const subjects = ['chinese.html', 'english.html', 'math-a.html', 'math-b.html', 'science.html', 'social.html'];

subjects.forEach(file => {
  const filePath = path.join(__dirname, '..', 'subjects', file);
  const html = fs.readFileSync(filePath, 'utf8');
  
  const sidebarMatch = html.match(/<aside class="sidebar"[\s\S]*?<\/aside>/i);
  if (!sidebarMatch) {
    console.error(`No sidebar found in ${file}`);
    return;
  }
  
  const links = [...sidebarMatch[0].matchAll(/href="#([^"]+)"/g)].map(m => m[1]);
  const missing = [];
  
  links.forEach(id => {
    const hasSection = html.includes(`id="${id}"`);
    if (!hasSection) {
      missing.push(id);
    }
  });

  console.log(`${file}: total ${links.length} links, missing: ${missing.length === 0 ? 'NONE (ALL OK)' : missing.join(', ')}`);
  const items = [...sidebarMatch[0].matchAll(/<a href="#([^"]+)"[^>]*>(.*?)<\/a>/g)].map(m => m[2].trim());
  items.forEach(it => console.log(`   ${it}`));
});

