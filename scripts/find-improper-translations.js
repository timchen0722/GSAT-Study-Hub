const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

const issues = [];
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (!match) {
    issues.push({ idx: idx+1, id: q.id, issue: 'No data-tw' });
  } else {
    const tw = match[1];
    if (tw.includes('意為') || tw.includes('引導') || tw.includes('考點') || tw.includes('用法') || tw.includes('表「') || tw.includes('指「') || tw.includes('句型：') || tw.includes('片語：')) {
      issues.push({ idx: idx+1, id: q.id, tw, stem: q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim() });
    }
  }
});

console.log(`Found ${issues.length} questions where data-tw is a grammar note instead of a full sentence translation.`);
issues.slice(0, 15).forEach(i => {
  console.log(`[${i.id}] Stem: ${i.stem}`);
  console.log(`      data-tw: ${i.tw}`);
});
