const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');

function replaceInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace $\rightarrow$, $\leftarrow$, $ightarrow$, \rightarrow, etc. in non-math contexts
  content = content.replace(/\$\\rightarrow\$/g, '→');
  content = content.replace(/\\rightarrow/g, '→');
  content = content.replace(/\$ightarrow\$/g, '→');
  content = content.replace(/\\leftrightarrow/g, '↔');
  content = content.replace(/\$\\leftrightarrow\$/g, '↔');
  content = content.replace(/\\Leftarrow/g, '⇐');
  content = content.replace(/\\Rightarrow/g, '⇒');
  content = content.replace(/\\Leftrightarrow/g, '⇔');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated arrows in ${path.relative(rootDir, filePath)}`);
  }
}

// 1. Process all HTML files in subjects/
const subjectsDir = path.join(rootDir, 'subjects');
fs.readdirSync(subjectsDir).forEach(f => {
  if (f.endsWith('.html')) {
    // For english.html, chinese.html, social.html, replace all LaTeX arrows with clean Unicode
    if (f === 'english.html' || f === 'chinese.html' || f === 'social.html') {
      replaceInFile(path.join(subjectsDir, f));
    }
  }
});

// 2. Process all Quiz data files
const quizDataDir = path.join(rootDir, 'quiz', 'data');
fs.readdirSync(quizDataDir).forEach(f => {
  if (f.endsWith('.js')) {
    replaceInFile(path.join(quizDataDir, f));
  }
});

console.log('Arrow cleanup complete!');
