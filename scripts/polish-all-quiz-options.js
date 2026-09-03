const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Polishing all option texts in english-quiz.js...');

quiz.forEach(q => {
  if (q.options) {
    q.options = q.options.map(opt => {
      let cleaned = opt
        .replace(/（[^）]*（([^）]+)）[^）]*）/g, '（$1）')
        .replace(/（[^）]*Weather permitting[^）]*）/g, '（天氣許可的話）')
        .replace(/（選項：/g, '（')
        .replace(/（[A-Za-z\s-]+\/by 為常見獨立分詞片語）/g, '（從……來判斷）')
        .replace(/（It is imperative that \+ S \+ \(should\) \+ 原形動詞，/g, '（')
        .replace(/（take \.\.\. for granted /g, '（')
        .replace(/（in accordance with /g, '（')
        .replace(/（with regard to /g, '（')
        .replace(/（see to it that\.\.\. /g, '（')
        .replace(/（pave the way for /g, '（')
        .replace(/（cast a shadow over /g, '（')
        .replace(/（strike a balance between /g, '（')
        .replace(/（take the initiative to /g, '（')
        .replace(/（It makes no difference whether\.\.\. /g, '（')
        .replace(/（under the weather /g, '（')
        .replace(/（It goes without saying that\.\.\. /g, '（')
        .replace(/（play a crucial \/ vital role in /g, '（')
        .replace(/（prevent \/ stop \/ discourage sb from \+ V-ing /g, '（')
        .replace(/（複合關係代名詞，無論誰 \/ 凡是……的人，等於 Anyone who）/g, '（凡是……的人 / 無論誰）')
        .replace(/（跟上……的最新發展 \/ 保持了解）/g, '（跟上……的最新發展）')
        .replace(/（逐漸接受 \/ 與……妥協和解）/g, '（逐漸接受現實 / 妥協和解）');
      return cleaned;
    });
  }
});

const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Options polished cleanly!');
