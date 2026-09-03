const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Polishing options across all 550 questions in english-quiz.js...');

quiz.forEach(q => {
  if (q.options) {
    q.options = q.options.map(opt => {
      let cleaned = opt;
      // If bracket has repeated english word like "larger as（larger as）" -> "larger as（錯誤形式）"
      const match = cleaned.match(/^([A-Za-z\s-]+)（\1）$/);
      if (match) {
        return `${match[1]}（錯誤形式）`;
      }
      cleaned = cleaned
        .replace(/（倍數詞 \+ as \+ adj\. \+ as）/g, '（一樣大（as...as 原級結構））')
        .replace(/（Hardly had \+ S \+ p\.p\. when \/ before\.\.\. 一……就……）/g, '（一……就……）')
        .replace(/（It is high time that \+ S \+ 過去式動詞，該是……的時候了）/g, '（該是……的時候了）')
        .replace(/（Neither A nor B 動詞與靠近的主詞 flight attendants 一致）/g, '（主詞動詞一致性）')
        .replace(/（with \+ 受詞 \+ 現在分詞受詞補語，表主動進行狀態）/g, '（順著流淌（主動進行））')
        .replace(/（be well worth \+ V-ing，值得做……，主動形式表被動意）/g, '（值得閱讀）')
        .replace(/（accuse sb of sth 指控某人犯有……罪）/g, '（指控……之罪名）')
        .replace(/（過去完成式被動語態）/g, '（已被撲滅（過去完成被動））')
        .replace(/（Only by \+ V-ing 置於句首之助動詞倒裝）/g, '（倒裝助動詞）')
        .replace(/（So \+ adj \+ be \+ S \+ that\.\.\. 如此……以致於之倒裝）/g, '（倒裝句語序）')
        .replace(/（object to \+ 動名詞 V-ing，反對做……）/g, '（傾倒核廢料（動名詞））')
        .replace(/（be accustomed to \+ 動名詞 V-ing，習慣於……）/g, '（習慣駕駛）')
        .replace(/（so as not to \+ 原形動詞，以便不…… \/ 免得）/g, '（以便不…… / 免得）')
        .replace(/（so as to \+ 原形動詞，以便 \/ 為了……）/g, '（為了 / 以便……）')
        .replace(/（so that \+ S \+ can\/could \+ V，以便……）/g, '（以便……）')
        .replace(/（Although \+ S \+ V，雖然儘管）/g, '（雖然 / 儘管）')
        .replace(/（had better \+ 原形動詞，最好做……）/g, '（最好帶上……）')
        .replace(/（Owing to \+ N，由於 \/ 因為……）/g, '（由於 / 因為……）')
        .replace(/（so \+ adj\. \+ that 子句，如此……以至於……）/g, '（如此……以至於……）')
        .replace(/（意志動詞 recommend 後 that 子句省略 should 接原形動詞）/g, '（休假（原形動詞））')
        .replace(/（否定副詞置句首之助動詞倒裝）/g, '（倒裝語序）')
        .replace(/（若非有……，與過去事實相反之假設倒裝）/g, '（若非當時有……（假設倒裝））')
        .replace(/（完成分詞構句，動作先於主要子句發生）/g, '（提前完成（分詞構句））')
        .replace(/（獨立分詞構句，若天氣允許）/g, '（若天氣允許）')
        .replace(/（現在分詞構句表伴隨狀態）/g, '（深知 / 明知）');
      return cleaned;
    });
  }
});

const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('All options polished successfully!');
