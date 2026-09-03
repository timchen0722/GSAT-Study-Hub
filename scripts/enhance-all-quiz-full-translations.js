const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Auditing and perfecting full sentence Chinese translations for all 550 questions...');

let updated = 0;

quiz.forEach((q, idx) => {
  // If the explanation has "💡 題目與選項翻譯：" or "題目："
  if (q.explanation && (q.explanation.includes('題目：') || q.explanation.includes('文章完整翻譯：'))) {
    // Check if data-tw is just "點擊朗讀文章"
    if (q.question.includes('data-tw="點擊朗讀文章"')) {
      // Extract from explanation
      let fullTrans = '';
      const matchPassage = q.explanation.match(/💡 <strong>文章完整翻譯：<\/strong><br>([\s\S]*?)(?:<br><br>|$)/);
      const matchQ = q.explanation.match(/題目：([^\n<]+)/);
      
      if (matchPassage && matchPassage[1]) {
        const pTrans = matchPassage[1].trim().replace(/<br>/g, ' ');
        const qTrans = matchQ ? matchQ[1].trim() : '';
        fullTrans = pTrans + (qTrans ? ` 【題目：${qTrans}】` : '');
      } else if (matchQ && matchQ[1]) {
        fullTrans = matchQ[1].trim();
      }
      
      if (fullTrans) {
        q.question = q.question.replace('data-tw="點擊朗讀文章"', `data-tw="${fullTrans.replace(/"/g, '&quot;')}"`);
        updated++;
      }
    }
  }

  // Check if data-tw is a single word like data-tw="放棄" or data-tw="全面的"
  const twMatch = q.question.match(/data-tw="([^"]+)"/);
  if (twMatch) {
    const currentTw = twMatch[1];
    if (currentTw.length <= 6 && !currentTw.includes('：') && !currentTw.includes('。') && !currentTw.includes('？')) {
      // It's just a raw single word or prompt
      const plainQ = q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim();
      if (plainQ.includes('最接近的意思是') || plainQ.includes('的意思是') || plainQ.includes('means')) {
        const newTw = `請選出「${currentTw}」最接近的正確中文詞義：`;
        q.question = q.question.replace(`data-tw="${currentTw}"`, `data-tw="${newTw}"`);
        updated++;
      }
    }
  }
});

console.log(`Updated ${updated} questions with comprehensive full-sentence translations.`);

// Re-serialize englishQuiz
const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Saved quiz/data/english-quiz.js successfully.');
