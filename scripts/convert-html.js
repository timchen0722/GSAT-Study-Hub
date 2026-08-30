const fs = require('fs');
const path = require('path');

const files = [
  path.join(__dirname, '..', 'index.html'),
  path.join(__dirname, '..', 'quiz', 'quiz.html')
];

const replacements = [
  { search: /rgba\(239, 68, 68, 0\.15\)/g, replace: 'rgba(194, 105, 105, 0.15)' },
  { search: /rgba\(59, 130, 246, 0\.15\)/g, replace: 'rgba(109, 134, 154, 0.15)' },
  { search: /rgba\(168, 85, 247, 0\.15\)/g, replace: 'rgba(134, 121, 148, 0.15)' },
  { search: /rgba\(139, 92, 246, 0\.15\)/g, replace: 'rgba(163, 145, 120, 0.15)' },
  { search: /rgba\(34, 197, 94, 0\.15\)/g, replace: 'rgba(137, 163, 128, 0.15)' },
  { search: /rgba\(249, 115, 22, 0\.15\)/g, replace: 'rgba(196, 145, 106, 0.15)' }
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });
  fs.writeFileSync(file, content, 'utf8');
});

console.log('HTML files updated.');
