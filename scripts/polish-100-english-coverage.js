const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Polishing 100% of all remaining English items in subjects/english.html...');

// Table headers
html = html.replace(
  `<thead><tr><th>時態 Tense</th><th>主動 Active</th><th>被動 Passive</th></tr></thead>`,
  `<thead><tr><th>時態 <span class="en-assist" data-tw="時態">Tense<span class="speak-icon">🔊</span></span></th><th>主動 <span class="en-assist" data-tw="主動">Active<span class="speak-icon">🔊</span></span></th><th>被動 <span class="en-assist" data-tw="被動">Passive<span class="speak-icon">🔊</span></span></th></tr></thead>`
);

html = html.replace(
  `<thead><tr><th>句型 Pattern</th><th>結構 Structure</th><th>經典範例 Example</th></tr></thead>`,
  `<thead><tr><th>句型 <span class="en-assist" data-tw="句型">Pattern<span class="speak-icon">🔊</span></span></th><th>結構 <span class="en-assist" data-tw="結構">Structure<span class="speak-icon">🔊</span></span></th><th>經典範例 <span class="en-assist" data-tw="範例">Example<span class="speak-icon">🔊</span></span></th></tr></thead>`
);

html = html.replace(
  `<td><strong>原級比較</strong><br>Positive</td>`,
  `<td><strong>原級比較</strong><br><span class="en-assist" data-tw="原級">Positive<span class="speak-icon">🔊</span></span></td>`
);

html = html.replace(
  `<td><strong>比較級</strong><br>Comparative</td>`,
  `<td><strong>比較級</strong><br><span class="en-assist" data-tw="比較級">Comparative<span class="speak-icon">🔊</span></span></td>`
);

html = html.replace(
  `<td><strong>最高級</strong><br>Superlative</td>`,
  `<td><strong>最高級</strong><br><span class="en-assist" data-tw="最高級">Superlative<span class="speak-icon">🔊</span></span></td>`
);

html = html.replace(
  `<td><strong>倍數表達</strong><br>Multiples</td>`,
  `<td><strong>倍數表達</strong><br><span class="en-assist" data-tw="倍數">Multiples<span class="speak-icon">🔊</span></span></td>`
);

html = html.replace(
  `<td><strong>越……就越……</strong><br>Proportional</td>`,
  `<td><strong>越……就越……</strong><br><span class="en-assist" data-tw="比例/相關句型">Proportional<span class="speak-icon">🔊</span></span></td>`
);

// Suffixes
html = html.replace(
  `<th>字尾 (Suffix)</th>`,
  `<th>字尾 <span class="en-assist" data-tw="字尾">Suffix<span class="speak-icon">🔊</span></span></th>`
);

html = html.replace(
  `<td><strong>-able / -ible</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="可...的字尾">-able / -ible<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>-ify / -ize / -en</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="動詞化字尾">-ify / -ize / -en<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>-tion / -sion / -ment</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="名詞化字尾">-tion / -sion / -ment<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>-ness / -ity</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="名詞化字尾">-ness / -ity<span class="speak-icon">🔊</span></span></strong></td>`
);

// Causative & Perception
html = html.replace(
  `<td><strong>make, have, let</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="使役動詞">make, have, let<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>get</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="使/叫">get<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>see, hear, watch, notice, feel</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="感官動詞">see, hear, watch, notice, feel<span class="speak-icon">🔊</span></span></strong></td>`
);

// Graphic organizers verbs
html = html.replace(
  `<em>increase, decrease, fluctuate, remain stable, peak</em>`,
  `<span class="en-assist" data-tw="增加">increase<span class="speak-icon">🔊</span></span>（增加）, <span class="en-assist" data-tw="減少">decrease<span class="speak-icon">🔊</span></span>（減少）, <span class="en-assist" data-tw="波動">fluctuate<span class="speak-icon">🔊</span></span>（波動）, <span class="en-assist" data-tw="保持穩定">remain stable<span class="speak-icon">🔊</span></span>（保持穩定）, <span class="en-assist" data-tw="達到頂峰">peak<span class="speak-icon">🔊</span></span>（達到頂峰）`
);

html = html.replace(
  `<em>by contrast, on the other hand</em>`,
  `<span class="en-assist" data-tw="相比之下">by contrast<span class="speak-icon">🔊</span></span>（相比之下）, <span class="en-assist" data-tw="另一方面">on the other hand<span class="speak-icon">🔊</span></span>（另一方面）`
);

// Subjunctive table rules
html = html.replace(
  `<td><strong>would / could / should / might + V</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="助動詞過去式 + 原形動詞">would / could / should / might + V<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>would / could / should / might + have + V-pp</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="助動詞過去式 + 完成式">would / could / should / might + have + p.p.<span class="speak-icon">🔊</span></span></strong></td>`
);

html = html.replace(
  `<td><strong>were to + V</strong> 或 <strong>should + V</strong></td>`,
  `<td><strong><span class="en-assist" data-tw="萬一/若要">were to + V / should + V<span class="speak-icon">🔊</span></span></strong></td>`
);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully polished all items in subjects/english.html!');
