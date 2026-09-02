const fs = require('fs');
const path = require('path');

const quizDir = path.join(__dirname, '..', 'quiz', 'data');
const files = [
  { file: 'chinese-quiz.js', varName: 'chineseQuiz' },
  { file: 'english-quiz.js', varName: 'englishQuiz' },
  { file: 'math-a-quiz.js', varName: 'mathAQuiz' },
  { file: 'math-b-quiz.js', varName: 'mathBQuiz' },
  { file: 'science-quiz.js', varName: 'scienceQuiz' },
  { file: 'social-quiz.js', varName: 'socialQuiz' }
];

files.forEach(f => {
  const filePath = path.join(quizDir, f.file);
  const code = fs.readFileSync(filePath, 'utf8');
  const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));
  
  // Keep only natural, non-templated questions
  const clean = quiz.filter(q => {
    const text = q.question || '';
    if (text.startsWith('[題號') || text.startsWith('[題目') || text.startsWith('[Q')) return false;
    return true;
  });
  
  // Remove duplicates by text
  const seen = new Set();
  const deduped = [];
  clean.forEach(q => {
    const t = q.question.trim();
    if (!seen.has(t)) {
      seen.add(t);
      deduped.push(q);
    }
  });
  
  // Re-index
  const prefix = f.file.replace('-quiz.js', '').replace('chinese', 'c').replace('english', 'e').replace('math-a', 'ma').replace('math-b', 'mb').replace('science', 'sci').replace('social', 'soc');
  deduped.forEach((q, idx) => {
    q.id = `${prefix}${idx + 1}`;
  });
  
  fs.writeFileSync(filePath, `const ${f.varName} = ${JSON.stringify(deduped, null, 2)};\n`, 'utf8');
  console.log(`${f.file}: Cleaned down to ${deduped.length} genuine, distinct questions.`);
});
