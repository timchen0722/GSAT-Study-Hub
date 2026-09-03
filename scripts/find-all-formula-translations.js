const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

const formulaQuestions = [];
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (!match) {
    formulaQuestions.push({ idx: idx + 1, id: q.id, reason: 'missing data-tw' });
  } else {
    const tw = match[1];
    // Check if tw looks like an explanation / grammar note / formula rather than a natural translation
    const isFormula = 
      tw.includes('結構：') ||
      tw.includes('原句為') ||
      tw.includes('句型：') ||
      tw.includes('表達法') ||
      tw.includes('分詞構句') ||
      tw.includes('倒裝') ||
      tw.includes('意為') ||
      tw.includes('虛擬語氣') ||
      tw.includes('引導') ||
      tw.includes('子句') ||
      tw.includes('表「') ||
      tw.includes('指「') ||
      tw.includes('用法') ||
      tw.includes('考點') ||
      /[a-zA-Z]{2,}/.test(tw.replace(/「[a-zA-Z\s-]+」/g, '').replace(/ARPANET|mRNA|COVID|DNA|AI/g, ''));
    
    if (isFormula) {
      formulaQuestions.push({
        idx: idx + 1,
        id: q.id,
        stem: q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim(),
        tw: tw,
        options: q.options,
        explanation: q.explanation
      });
    }
  }
});

console.log(`Found ${formulaQuestions.length} questions that still have grammar notes or formula instead of a natural Chinese sentence translation.`);
fs.writeFileSync('scripts/all-formula-questions.json', JSON.stringify(formulaQuestions, null, 2), 'utf8');
console.log('Saved to scripts/all-formula-questions.json');
