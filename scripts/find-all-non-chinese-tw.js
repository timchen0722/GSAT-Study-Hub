const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

const nonChineseStems = [];
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (!match) {
    nonChineseStems.push({ id: q.id, idx: idx+1, reason: 'missing data-tw' });
  } else {
    const tw = match[1];
    // Check if tw contains English grammar terms or English sentences
    if (/[a-zA-Z]{3,}/.test(tw) && !tw.startsWith('請選出「')) {
      nonChineseStems.push({ id: q.id, idx: idx+1, tw, stem: q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim(), exp: q.explanation });
    }
  }
});

console.log(`Total questions with English or grammar formulas in data-tw: ${nonChineseStems.length}`);
nonChineseStems.slice(0, 20).forEach(item => {
  console.log(`[${item.id}] Stem: ${item.stem}`);
  console.log(`      data-tw: ${item.tw}`);
});
