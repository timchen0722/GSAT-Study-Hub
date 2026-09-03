const fs = require('fs');
const quiz = require('../quiz/data/english-quiz.js');

const q = quiz.find(item => item.id === 'e318');
if (q) {
  q.question = '<span class="en-assist" data-tw="他踮著腳尖悄悄走著，唯恐吵醒了正在熟睡中的嬰兒。" data-en="He walked on tiptoe lest he _____ the sleeping infant.">He walked on tiptoe lest he _____ the sleeping infant.<span class="speak-icon">🔊</span></span>';
  q.options = [
    'should wake（萬一醒來 / 唯恐吵醒）',
    'wakes（醒來）',
    'woke（醒來（過去式））',
    'waking（醒來（現在分詞））'
  ];
}

fs.writeFileSync('quiz/data/english-quiz.js', 'const englishQuiz = ' + JSON.stringify(quiz, null, 2) + ';\n\nif (typeof module !== "undefined") {\n  module.exports = englishQuiz;\n}\n', 'utf8');
console.log('e318 polished successfully!');
