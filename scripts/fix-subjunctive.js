const fs = require('fs');
let html = fs.readFileSync('subjects/english.html', 'utf8');

html = html.replace(
  /<div class="formula-title">💡 假設語氣「省略 if 之倒裝」秒殺公式<\/div>[\s\S]*?<\/div>/,
  `<div class="formula-title">💡 假設語氣「省略 if 之倒裝」秒殺公式</div>\n          <p>• <span class="en-assist" data-tw="如果我是你，我就會接受這份工作提議。">If I were you... → <strong>Were I you</strong>, I would accept the offer.<span class="speak-icon">🔊</span></span><br>\n             • <span class="en-assist" data-tw="如果他當時更努力讀書，他就會通過了。">If he had studied harder... → <strong>Had he studied</strong> harder, he would have passed.<span class="speak-icon">🔊</span></span><br>\n             • <span class="en-assist" data-tw="萬一明天下雨，野餐將會取消。">If it should rain tomorrow... → <strong>Should it rain</strong> tomorrow, the picnic will be cancelled.<span class="speak-icon">🔊</span></span></p>\n        </div>`
);

fs.writeFileSync('subjects/english.html', html, 'utf8');
console.log('Fixed subjunctive section successfully!');
