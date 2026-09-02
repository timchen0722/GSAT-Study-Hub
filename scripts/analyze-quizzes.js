const fs = require('fs');
const path = require('path');

const quizDir = path.join(__dirname, '..', 'quiz', 'data');
const files = [
  { name: '國文', file: 'chinese-quiz.js', varName: 'chineseQuiz' },
  { name: '英文', file: 'english-quiz.js', varName: 'englishQuiz' },
  { name: '數學A', file: 'math-a-quiz.js', varName: 'mathAQuiz' },
  { name: '數學B', file: 'math-b-quiz.js', varName: 'mathBQuiz' },
  { name: '自然', file: 'science-quiz.js', varName: 'scienceQuiz' },
  { name: '社會', file: 'social-quiz.js', varName: 'socialQuiz' }
];

console.log('=== QUIZ DUPLICATE ANALYSIS ===');
files.forEach(f => {
  const filePath = path.join(quizDir, f.file);
  let code = fs.readFileSync(filePath, 'utf8');
  // strip 'const xxx =' or 'let xxx =' or 'var xxx ='
  const jsonStart = code.indexOf('[');
  const jsonEnd = code.lastIndexOf(']');
  if (jsonStart === -1 || jsonEnd === -1) {
    console.log(`${f.name}: Could not find JSON array`);
    return;
  }
  const jsonStr = code.substring(jsonStart, jsonEnd + 1);
  const quiz = JSON.parse(jsonStr);
  
  const questionMap = new Map();
  let duplicateCount = 0;
  
  quiz.forEach((q, idx) => {
    const qText = (q.question || '').trim();
    if (questionMap.has(qText)) {
      duplicateCount++;
      questionMap.get(qText).push(idx);
    } else {
      questionMap.set(qText, [idx]);
    }
  });
  
  const uniqueCount = questionMap.size;
  console.log(`${f.name} (${f.file}):`);
  console.log(`  總題數 Total: ${quiz.length}`);
  console.log(`  不重複題數 Unique: ${uniqueCount}`);
  console.log(`  重複題數 Duplicates: ${duplicateCount}`);
  console.log(`  距離 550 題還缺 Needed to reach 550: ${Math.max(0, 550 - uniqueCount)}\n`);
});
