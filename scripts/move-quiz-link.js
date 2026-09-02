const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, '../subjects');
const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
  const filePath = path.join(subjectsDir, file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Regex to match the quiz link div in the content area
  // It usually looks like:
  // <div style="text-align:center;padding:var(--space-12) 0;">
  //   <a href="../quiz/quiz.html" class="btn btn-primary btn-lg">...</a>
  // </div>
  
  const quizDivRegex = /(<div[^>]*text-align:\s*center[^>]*>[\s\S]*?<a[^>]*href="\.\.\/quiz\/quiz\.html"[^>]*btn-lg[^>]*>.*?<\/a>[\s\S]*?<\/div>)/gi;
  
  const matches = [...html.matchAll(quizDivRegex)];
  
  if (matches.length > 0) {
    // Take the first match to keep
    const quizDiv = matches[0][1];
    
    // Remove ALL instances of the quiz div
    html = html.replace(quizDivRegex, '');
    
    // Insert it right before </main>
    html = html.replace(/(<\/main>)/i, '\n      ' + quizDiv + '\n      $1');
    
    fs.writeFileSync(filePath, html, 'utf8');
    console.log(`Moved quiz link to bottom and removed duplicates in ${file}`);
  }
});
