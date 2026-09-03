const fs = require('fs');
const quiz = require('../quiz/data/english-quiz.js');

const e16 = quiz.find(q => q.id === 'e16');
if (e16) e16.question = '<span class="en-assist" data-tw="將中文「運動對健康有益」翻譯為英文">「運動對健康有益」最佳翻譯？</span>';

const e17 = quiz.find(q => q.id === 'e17');
if (e17) e17.question = '<span class="en-assist" data-tw="將中文「科技已經改變了我們的生活方式」翻譯為英文">「科技已經改變了我們的生活方式」翻譯？</span>';

fs.writeFileSync('quiz/data/english-quiz.js', 'const englishQuiz = ' + JSON.stringify(quiz, null, 2) + ';\n\nif (typeof module !== "undefined") {\n  module.exports = englishQuiz;\n}\n', 'utf8');
console.log('e16 and e17 updated successfully!');
