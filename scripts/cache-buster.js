const fs = require('fs');
let html = fs.readFileSync('quiz/quiz.html', 'utf8');
const ts = Date.now();
html = html.replace(/src=\"data\/(.*?)-quiz\.js(\?v=\d+)?\"/g, 'src=\"data/$1-quiz.js?v=' + ts + '\"');
html = html.replace(/src=\"\.\.\/js\/quiz\.js(\?v=\d+)?\"/g, 'src=\"../js/quiz.js?v=' + ts + '\"');
fs.writeFileSync('quiz/quiz.html', html, 'utf8');
