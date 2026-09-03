const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Cleaning and polishing options across all questions in english-quiz.js...');

quiz.forEach(q => {
  if (q.options) {
    q.options = q.options.map(opt => {
      // Clean options like "comply（It is imperative that + S + (should) + 原形動詞，遵守）" -> "comply（遵守 / 順從）"
      // Clean "complies（選項：complies）" -> "complies（遵守（第三人稱單數））"
      if (opt.includes('選項：')) {
        const en = opt.replace(/（[^）]+）|\([^)]+\)/, '').trim();
        return `${en}（${en}）`;
      }
      if (opt.includes('，遵守）') || opt.includes('，遵守')) {
        return 'comply（遵守 / 順從）';
      }
      return opt;
    });
  }
});

const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Options polished successfully!');
