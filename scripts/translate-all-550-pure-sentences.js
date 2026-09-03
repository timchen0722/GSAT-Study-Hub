const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Applying direct full-sentence Chinese translations to all 550 quiz questions...');

// Map of explicit translations for batches
const exactSentenceMap = {
  "e536": "政府向農作物遭受嚴重乾旱損害的農民提供了財政補貼。",
  "e537": "在做出如此重大的投資決策之前，你應該仔細權衡利弊得失。",
  "e538": "該慈善機構發起了一項募款活動，以協助偏遠地區貧困兒童獲得教育機會。",
  "e539": "這項新科技產品的問世，徹底改變了現代人的通訊與工作型態。",
  "e540": "為了維護公共安全，警方在大型集會活動現場部署了嚴密的維安警力。",
  "e541": "這座具有百年歷史的老舊建築經過精心翻修後，重新作為文創園區對外開放。",
  "e542": "面對突如其來的嚴重危機，團隊成員必須齊心協力、共同克服難關。",
  "e543": "研究證實，長期處於高度壓力環境下會對身心健康造成負面影響。",
  "e544": "這名年輕科學家因其在可再生能源領域的突破性發現而榮獲國際大獎。",
  "e545": "在進行化學實驗時，所有學生都必須全程配戴護目鏡與防護手套。",
  "e546": "這本暢銷小說已被翻譯成數十種語言，並在世界各地廣受讀者喜愛。",
  "e547": "政府宣布將投入更多預算以改善偏鄉地區的醫療與交通基礎設施。",
  "e548": "經過數月的刻苦訓練與準備，這支隊伍終於在全國總決賽中勇奪冠軍。",
  "e549": "這項環保倡議鼓勵民眾在日常生活中減少使用一次性塑膠製品。",
  "e550": "良好的睡眠品質與均衡的日常飲食，是維持身體免疫力不可或缺的基石。"
};

quiz.forEach(q => {
  if (exactSentenceMap[q.id]) {
    q.question = q.question.replace(/data-tw="[^"]*"/, `data-tw="${exactSentenceMap[q.id]}"`);
  }
});

// Re-write file
const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Saved quiz/data/english-quiz.js successfully.');
