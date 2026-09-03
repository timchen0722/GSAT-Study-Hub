const fs = require('fs');
const path = require('path');

const quizPath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
let quizCode = fs.readFileSync(quizPath, 'utf8');
let quiz = JSON.parse(quizCode.substring(quizCode.indexOf('['), quizCode.lastIndexOf(']') + 1));

console.log(`Deep parsing all explanations for option translations...`);

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let fixedCount = 0;

quiz.forEach((q, qIdx) => {
  if (q.type === 'writing' || !q.options) return;

  const exp = q.explanation || '';
  // Split explanation into segments by semicolon, dot, or break
  const segments = exp.split(/[；;。\n<br>]/);

  q.options = q.options.map(opt => {
    let trimmed = opt.trim();
    if (/[\u4e00-\u9fa5]/.test(trimmed)) return trimmed;

    // Check each segment
    for (let seg of segments) {
      let cleanSeg = seg.replace(/<[^>]+>/g, '').trim();
      if (!cleanSeg) continue;

      // Pattern 1: opt 意為「meaning」 or opt 意為 "meaning"
      let p1 = new RegExp(`(?:^|\\s)${escapeRegex(trimmed)}\\s*(?:意為|為|表示|指)?\\s*[「"“]([^"”」]+)[」"”]`);
      let m1 = cleanSeg.match(p1);
      if (m1 && m1[1] && /[\u4e00-\u9fa5]/.test(m1[1])) {
        fixedCount++;
        return `${trimmed}（${m1[1].trim()}）`;
      }

      // Pattern 2: opt meaning (e.g. "autonomous 自治的" or "aggravate 惡化")
      let p2 = new RegExp(`(?:^|\\s)${escapeRegex(trimmed)}\\s+([\\u4e00-\\u9fa5][\\u4e00-\\u9fa5、，/\\s]{1,15})`);
      let m2 = cleanSeg.match(p2);
      if (m2 && m2[1]) {
        let meaning = m2[1].trim();
        // Avoid matching common words like 的, 是
        if (meaning.length >= 2) {
          fixedCount++;
          return `${trimmed}（${meaning}）`;
        }
      }
    }
    return trimmed;
  });
});

console.log(`Parsed and fixed ${fixedCount} option translations!`);

// Check remaining
let totalMissing = 0;
const stillMissing = [];
quiz.forEach((q, idx) => {
  if (q.type !== 'writing' && q.options) {
    q.options.forEach(opt => {
      if (!/[\u4e00-\u9fa5]/.test(opt)) {
        totalMissing++;
        stillMissing.push({ id: q.id, opt, exp: q.explanation });
      }
    });
  }
});

console.log(`Total options still without Chinese: ${totalMissing}`);
if (stillMissing.length > 0) {
  console.log('Sample still missing:', stillMissing.slice(0, 15));
}

fs.writeFileSync(quizPath, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Updated quiz/data/english-quiz.js successfully!');
