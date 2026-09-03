const quiz = require('../quiz/data/english-quiz.js');

let bad = 0;
quiz.forEach((q, idx) => {
  const match = q.question.match(/data-tw="([^"]+)"/);
  if (!match) {
    console.log(`[Q${idx+1}] Missing data-tw: ${q.id}`);
    bad++;
  } else {
    const tw = match[1];
    if (tw.includes('本句文意') || tw.includes('本題考查') || tw.includes('核心概念') || tw.includes('最恰當之選項') || tw.includes('【題目完整句意】') || tw.includes('【完整題目中文句意】')) {
      console.log(`[Q${idx+1}] Bad translation: ${q.id} -> ${tw}`);
      bad++;
    }
  }
});

console.log(`Total questions checked: ${quiz.length}`);
console.log(`Total bad/meta translation questions: ${bad}`);
