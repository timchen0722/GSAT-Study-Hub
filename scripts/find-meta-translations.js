const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

const metaQuestions = [];
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (match) {
    const tw = match[1];
    if (tw.includes('本句文意') || tw.includes('本題考查') || tw.includes('核心概念') || tw.includes('最恰當之選項') || tw.includes('請選出最符合')) {
      metaQuestions.push({
        id: q.id,
        idx: idx + 1,
        stem: q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim(),
        tw: tw,
        options: q.options,
        explanation: q.explanation
      });
    }
  }
});

console.log(`Found ${metaQuestions.length} questions with meta-text translations instead of actual sentence translations.`);
fs.writeFileSync('scripts/meta-translations.json', JSON.stringify(metaQuestions, null, 2), 'utf8');
console.log('Saved to scripts/meta-translations.json');
