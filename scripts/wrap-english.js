const fs = require('fs');
const path = require('path');

// 1. Update english.html
const htmlPath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Add script tag to english.html if not exists
if (!html.includes('english-assist.js')) {
  html = html.replace('</body>', '  <script src="../js/english-assist.js"></script>\n</body>');
}

// Wrap some example English texts in english.html
const htmlReplacements = [
  { search: 'The GSAT English vocabulary is based on the CEEC Reference Word List, Levels 1-5 (approximately 7,000 words).', replace: '<span class="en-assist" data-tw="學測英文詞彙範圍以大考中心公布的「高中英文參考詞彙表」Level 1～5（約 7,000 字）為主。">The GSAT English vocabulary is based on the CEEC Reference Word List, Levels 1-5 (approximately 7,000 words).<span class="speak-icon">🔊</span></span>' },
  { search: 'Vocabulary Learning Strategies', replace: '<span class="en-assist" data-tw="單字學習策略">Vocabulary Learning Strategies<span class="speak-icon">🔊</span></span>' },
  { search: 'Word Roots & Prefixes', replace: '<span class="en-assist" data-tw="字根與字首">Word Roots & Prefixes<span class="speak-icon">🔊</span></span>' },
  { search: 'Contextual Learning', replace: '<span class="en-assist" data-tw="語境學習">Contextual Learning<span class="speak-icon">🔊</span></span>' },
  { search: 'Association', replace: '<span class="en-assist" data-tw="聯想">Association<span class="speak-icon">🔊</span></span>' },
  { search: 'Spaced Repetition', replace: '<span class="en-assist" data-tw="間隔重複">Spaced Repetition<span class="speak-icon">🔊</span></span>' },
  { search: 'Common Prefixes', replace: '<span class="en-assist" data-tw="常見字首">Common Prefixes<span class="speak-icon">🔊</span></span>' },
  { search: 'Common Roots', replace: '<span class="en-assist" data-tw="常見字根">Common Roots<span class="speak-icon">🔊</span></span>' },
  { search: 'unhappy（不快樂）', replace: '<span class="en-assist" data-tw="不快樂">unhappy<span class="speak-icon">🔊</span></span>（不快樂）' },
  { search: 'undo（復原）', replace: '<span class="en-assist" data-tw="復原">undo<span class="speak-icon">🔊</span></span>（復原）' },
  { search: 'unable（無法）', replace: '<span class="en-assist" data-tw="無法">unable<span class="speak-icon">🔊</span></span>（無法）' },
  { search: 'Seeing the dog, he ran away.', replace: '<span class="en-assist" data-tw="看到狗，他就跑走了。">Seeing the dog, he ran away.<span class="speak-icon">🔊</span></span>' },
  { search: 'Having been scolded, the boy cried.', replace: '<span class="en-assist" data-tw="因為被罵了，男孩哭了。">Having been scolded, the boy cried.<span class="speak-icon">🔊</span></span>' },
  { search: 'Not until he came back did I go to bed.', replace: '<span class="en-assist" data-tw="直到他回來我才去睡覺。">Not until he came back did I go to bed.<span class="speak-icon">🔊</span></span>' },
  { search: 'It is... that...', replace: '<span class="en-assist" data-tw="這就是...的那個...">It is... that...<span class="speak-icon">🔊</span></span>' },
  { search: 'If I had studied harder, I would have passed.', replace: '<span class="en-assist" data-tw="如果我當時更努力學習，我就會及格了。">If I had studied harder, I would have passed.<span class="speak-icon">🔊</span></span>' }
];

htmlReplacements.forEach(({search, replace}) => {
  html = html.replace(search, replace);
});
fs.writeFileSync(htmlPath, html, 'utf8');

// 2. Update quiz.html
const quizPath = path.join(__dirname, '..', 'quiz', 'quiz.html');
let quizHtml = fs.readFileSync(quizPath, 'utf8');
if (!quizHtml.includes('english-assist.js')) {
  quizHtml = quizHtml.replace('</body>', '  <script src="../js/english-assist.js"></script>\n</body>');
  fs.writeFileSync(quizPath, quizHtml, 'utf8');
}

// 3. Update generate-quiz.js
const generatePath = path.join(__dirname, '..', 'scripts', 'generate-quiz.js');
let generateJs = fs.readFileSync(generatePath, 'utf8');

const baseReplacements = [
  { search: 'q:\'Choose the correct meaning of "reluctant":\'', replace: 'q:\'<span class="en-assist" data-tw="請選擇 reluctant 的正確意思：">Choose the correct meaning of "reluctant":<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'"Abandon" 最接近的意思是？\'', replace: 'q:\'<span class="en-assist" data-tw="放棄">"Abandon"<span class="speak-icon">🔊</span></span> 最接近的意思是？\'' },
  { search: 'q:\'The word "inevitable" means:\'', replace: 'q:\'<span class="en-assist" data-tw="inevitable 這個字的意思是：">The word "inevitable" means:<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'"Comprehensive" 的意思是？\'', replace: 'q:\'<span class="en-assist" data-tw="全面的">"Comprehensive"<span class="speak-icon">🔊</span></span> 的意思是？\'' },
  { search: 'q:\'The prefix "mis-" in "misunderstand" means:\'', replace: 'q:\'<span class="en-assist" data-tw="misunderstand 中的字首 mis- 意思是：">The prefix "mis-" in "misunderstand" means:<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'She _____ English since she was five.\'', replace: 'q:\'<span class="en-assist" data-tw="自從她五歲起她就在學英文。">She _____ English since she was five.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'If I _____ you, I would study harder.\'', replace: 'q:\'<span class="en-assist" data-tw="如果我是你，我會更認真讀書。">If I _____ you, I would study harder.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'The book _____ by millions of people worldwide.\'', replace: 'q:\'<span class="en-assist" data-tw="這本書被全世界數百萬人閱讀過。">The book _____ by millions of people worldwide.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'_____ she finished her homework, she went out to play.\'', replace: 'q:\'<span class="en-assist" data-tw="她完成功課後，就出去玩了。">_____ she finished her homework, she went out to play.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'He is the tallest student _____ I have ever met.\'', replace: 'q:\'<span class="en-assist" data-tw="他是我遇過最高的學生。">He is the tallest student _____ I have ever met.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'Reading is a good way to _____ your vocabulary.\'', replace: 'q:\'<span class="en-assist" data-tw="閱讀是擴充詞彙量的好方法。">Reading is a good way to _____ your vocabulary.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'He made a great _____ to the success of the project.\'', replace: 'q:\'<span class="en-assist" data-tw="他對這個專案的成功做出了巨大貢獻。">He made a great _____ to the success of the project.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'Exercise is beneficial to health.\'', replace: 'q:\'<span class="en-assist" data-tw="運動對健康有益。">Exercise is beneficial to health.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'Technology has changed our way of life.\'', replace: 'q:\'<span class="en-assist" data-tw="科技改變了我們的生活方式。">Technology has changed our way of life.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'"Sustainable" 的意思是？\'', replace: 'q:\'<span class="en-assist" data-tw="可持續的">"Sustainable"<span class="speak-icon">🔊</span></span> 的意思是？\'' },
  { search: 'q:\'Neither the teacher nor the students _____ aware of the problem.\'', replace: 'q:\'<span class="en-assist" data-tw="老師和學生們都沒有意識到這個問題。">Neither the teacher nor the students _____ aware of the problem.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'Not until she spoke _____ I realize she was foreign.\'', replace: 'q:\'<span class="en-assist" data-tw="直到她開口說話我才發現她是外國人。">Not until she spoke _____ I realize she was foreign.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'_____ he known the truth, he would not have made such a mistake.\'', replace: 'q:\'<span class="en-assist" data-tw="如果他早知道真相，他就不會犯下這種錯了。">_____ he known the truth, he would not have made such a mistake.<span class="speak-icon">🔊</span></span>\'' },
  { search: 'q:\'The new policy will _____ the economic growth of the country.\'', replace: 'q:\'<span class="en-assist" data-tw="新政策將促進國家的經濟成長。">The new policy will _____ the economic growth of the country.<span class="speak-icon">🔊</span></span>\'' }
];

baseReplacements.forEach(({search, replace}) => {
  generateJs = generateJs.replace(search, replace);
});
fs.writeFileSync(generatePath, generateJs, 'utf8');

console.log('HTML and JS updated with english assist wrappers.');
