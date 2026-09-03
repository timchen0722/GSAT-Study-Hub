const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
const html = fs.readFileSync(filePath, 'utf8');

console.log('Auditing subjects/english.html for any unassisted English elements...');

const lines = html.split('\n');
let issues = 0;

lines.forEach((line, idx) => {
  // Ignore HTML tags, attributes, comments, doctype, scripts, CSS
  let stripped = line
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;/g, ' ')
    .trim();

  // Check if line contains English letters
  if (/[a-zA-Z]{3,}/.test(stripped)) {
    // Check if line contains speak-icon in original HTML or if it's pure metadata/nav
    const isNavOrMeta = line.includes('nav') || line.includes('meta') || line.includes('title') || line.includes('footer') || line.includes('sidebar') || line.includes('class=') && !line.includes('<td>') && !line.includes('<p>') && !line.includes('<li>') && !line.includes('<div>');
    
    if (!isNavOrMeta) {
      if (!line.includes('speak-icon') && !line.includes('🔊') && !line.includes('btn-primary')) {
        console.log(`Line ${idx + 1}: Might be missing speak icon -> ${line.trim().substring(0, 80)}`);
        issues++;
      }
    }
  }
});

console.log(`Audit complete. Found ${issues} potential items to review.`);
