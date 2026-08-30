const fs = require('fs');
let html = fs.readFileSync('subjects/english.html', 'utf8');
const lines = html.split('\n');
let foundAny = false;
lines.forEach((line, i) => {
  if (line.includes('href=') || line.includes('src=') || line.includes('link') || line.includes('script') || line.includes('DOCTYPE')) return;
  
  let unwrappedLine = line.replace(/<span class="en-assist".*?<\/span><\/span>/g, '');
  unwrappedLine = unwrappedLine.replace(/<span class="speak-icon">🔊<\/span>/g, '');
  let unwrappedText = unwrappedLine.replace(/<[^>]+>/g, ' ').trim();
  
  let match = unwrappedText.match(/[a-zA-Z]{3,}/g);
  if (match) {
    match = match.filter(w => !['html', 'body', 'main', 'section', 'div', 'span', 'class', 'href', 'header', 'nav', 'ul', 'li', 'h1', 'h2', 'h3', 'table', 'thead', 'tbody', 'tr', 'th', 'td', 'br', 'em', 'strong', 'data', 'icon', 'content', 'info', 'box', 'tip', 'animate', 'fade', 'up', 'mt', 'GSAT', 'Study', 'Hub', 'English', 'Level', 'Step', 'nbsp'].includes(w));
    
    if (match.length > 0) {
      console.log('Line ' + (i+1) + ': ' + match.join(' ') + ' ||| ORIGINAL TEXT: ' + unwrappedText);
      foundAny = true;
    }
  }
});
if(!foundAny) console.log('ALL CLEAR!');
