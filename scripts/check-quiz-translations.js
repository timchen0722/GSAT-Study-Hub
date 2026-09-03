const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

let count = 0;
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (match) {
    const tw = match[1];
    // Check if it's like "請選擇 reluctant 的正確意思：" instead of a clean, full sentence
    if (tw.includes('請選擇') || tw.includes('這個字的意思是') || tw.length < 8) {
      if (count < 10) {
        console.log(`[Q${idx+1}] Stem: ${q.question.replace(/<[^>]+>/g, '').trim()}`);
        console.log(`       data-tw: ${tw}`);
        console.log(`       exp: ${q.explanation}`);
      }
      count++;
    }
  }
});

console.log(`Total questions checked: ${quiz.length}`);
console.log(`Questions with meta-prompt translations: ${count}`);
