const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

const issues = [];
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (match) {
    const tw = match[1];
    // If tw contains more than 3 consecutive English letters, it's not a pure Chinese sentence
    // (excluding legitimate single terms in quotes like 「reluctant」)
    const cleaned = tw.replace(/「[a-zA-Z\s-]+」/g, '').replace(/ARPANET|mRNA|AI|COVID|DNA/g, '');
    if (/[a-zA-Z]{3,}/.test(cleaned)) {
      issues.push({
        id: q.id,
        idx: idx + 1,
        stem: q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim(),
        tw: tw,
        explanation: q.explanation
      });
    }
  }
});

console.log(`Found ${issues.length} questions that still contain English in data-tw:`);
fs.writeFileSync('scripts/questions-needing-pure-chinese.json', JSON.stringify(issues, null, 2), 'utf8');
console.log('Saved to scripts/questions-needing-pure-chinese.json');
