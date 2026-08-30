const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const safeReplace = require('./safe-replace');

// 1. Match: ChineseText (EnglishText)
// Examples: 搬運 (carry), 不、相反 (not, opposite), 時間 (Time) -> wait, "時間 Time" is without parens.
html = html.replace(/([^\x00-\x7F、，\s]+)\s*\(([a-zA-Z\s,\-]+)\)/g, (match, chinese, english) => {
  if (match.includes('en-assist')) return match; // Already wrapped
  return `${chinese} (<span class="en-assist" data-tw="${chinese.trim()}">${english.trim()}<span class="speak-icon">🔊</span></span>)`;
});

// 2. Match: ChineseText EnglishText (in headings or table cells where they are separated by space or <br>)
// Example: 簡單現在式<br>Simple Present
html = html.replace(/([^\x00-\x7F]+)\s*<br>\s*([a-zA-Z\s]+)(?=<\/td>)/g, (match, chinese, english) => {
  if (match.includes('en-assist')) return match;
  return `${chinese}<br><span class="en-assist" data-tw="${chinese.trim()}">${english.trim()}<span class="speak-icon">🔊</span></span>`;
});

// Example: 📌 壹、核心詞彙 Core Vocabulary</h2>
html = html.replace(/([^\x00-\x7F、\s]+)\s+([a-zA-Z\s]+)(?=<\/h)/g, (match, chinese, english) => {
  if (match.includes('en-assist')) return match;
  return `${chinese} <span class="en-assist" data-tw="${chinese.trim()}">${english.trim()}<span class="speak-icon">🔊</span></span>`;
});

// Example: 時間 Time</td>
html = html.replace(/([^\x00-\x7F]+)\s+([a-zA-Z\s]+)(?=<\/td>)/g, (match, chinese, english) => {
  if (match.includes('en-assist')) return match;
  return `${chinese} <span class="en-assist" data-tw="${chinese.trim()}">${english.trim()}<span class="speak-icon">🔊</span></span>`;
});

// 3. Match specific prefixes/roots inside <strong> that missed translations
const missedStrongPatterns = [
  'un-', 're-', 'pre-', 'dis-', 'mis-', 'over-', 'inter-', 'trans-', 'sub-', 'super-',
  '-port-', '-duct-/-duc-', '-spect-', '-ject-', '-mit-/-mis-', '-scrib-/-script-', '-vid-/-vis-', '-struct-'
];
missedStrongPatterns.forEach(pattern => {
  const safePattern = pattern.replace(/\//g, '\\/');
  const regex = new RegExp(`<strong>(${safePattern})<\\/strong>`, 'g');
  html = html.replace(regex, (match, word) => {
    // If we want translation, we'd need to extract it from the next td, which is hard with simple regex.
    // But we can at least add the speak-icon!
    return `<strong><span class="en-assist" data-tw="字首/字根">${word}<span class="speak-icon">🔊</span></span></strong>`;
  });
});

// 4. Grammar patterns in table
const grammarPatterns = [
  { search: '<td>V / V-s</td>', replace: '<td><span class="en-assist" data-tw="動詞 / 動詞加s">V / V-s<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>am/is/are + V-ing</td>', replace: '<td><span class="en-assist" data-tw="be動詞 + 現在分詞">am/is/are + V-ing<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>have/has + p.p.</td>', replace: '<td><span class="en-assist" data-tw="have/has + 過去分詞">have/has + p.p.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>have/has been + V-ing</td>', replace: '<td><span class="en-assist" data-tw="have/has been + 現在分詞">have/has been + V-ing<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>V-ed / V₂</td>', replace: '<td><span class="en-assist" data-tw="過去式動詞">V-ed / V₂<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>was/were + V-ing</td>', replace: '<td><span class="en-assist" data-tw="was/were + 現在分詞">was/were + V-ing<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>had + p.p.</td>', replace: '<td><span class="en-assist" data-tw="had + 過去分詞">had + p.p.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>had been + V-ing</td>', replace: '<td><span class="en-assist" data-tw="had been + 現在分詞">had been + V-ing<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>will + V</td>', replace: '<td><span class="en-assist" data-tw="will + 原形動詞">will + V<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>will be + V-ing</td>', replace: '<td><span class="en-assist" data-tw="will be + 現在分詞">will be + V-ing<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>will have + p.p.</td>', replace: '<td><span class="en-assist" data-tw="will have + 過去分詞">will have + p.p.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>will have been + V-ing</td>', replace: '<td><span class="en-assist" data-tw="will have been + 現在分詞">will have been + V-ing<span class="speak-icon">🔊</span></span></td>' },
  { search: '<strong>S + V</strong>', replace: '<strong><span class="en-assist" data-tw="主詞 + 動詞">S + V<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>S + V + C</strong>', replace: '<strong><span class="en-assist" data-tw="主詞 + 動詞 + 補語">S + V + C<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>S + V + O</strong>', replace: '<strong><span class="en-assist" data-tw="主詞 + 動詞 + 受詞">S + V + O<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>S + V + O + O</strong>', replace: '<strong><span class="en-assist" data-tw="主詞 + 動詞 + 受詞 + 受詞">S + V + O + O<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>S + V + O + C</strong>', replace: '<strong><span class="en-assist" data-tw="主詞 + 動詞 + 受詞 + 補語">S + V + O + C<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<td>as + adj/adv + as</td>', replace: '<td><span class="en-assist" data-tw="和...一樣">as + adj/adv + as<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>adj-er / more adj + than</td>', replace: '<td><span class="en-assist" data-tw="比...更...">adj-er / more adj + than<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>the adj-est / the most adj</td>', replace: '<td><span class="en-assist" data-tw="最...">the adj-est / the most adj<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>X times as ... as / X times adj-er than</td>', replace: '<td><span class="en-assist" data-tw="...的 X 倍">X times as ... as / X times adj-er than<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>The more..., the more...</td>', replace: '<td><span class="en-assist" data-tw="越...就越...">The more..., the more...<span class="speak-icon">🔊</span></span></td>' },
  { search: '<strong>The + 比較, the + 比較</strong>', replace: '<strong><span class="en-assist" data-tw="越...就越...">The + 比較, the + 比較<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>that</strong>', replace: '<strong><span class="en-assist" data-tw="關係代名詞 / 連接詞">that<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>whether/if</strong>', replace: '<strong><span class="en-assist" data-tw="是否">whether/if<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>wh- 疑問詞</strong>', replace: '<strong><span class="en-assist" data-tw="疑問詞">wh- 疑問詞<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>who</strong>', replace: '<strong><span class="en-assist" data-tw="誰 (主格)">who<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>whom</strong>', replace: '<strong><span class="en-assist" data-tw="誰 (受格)">whom<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>whose</strong>', replace: '<strong><span class="en-assist" data-tw="誰的 (所有格)">whose<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<strong>which</strong>', replace: '<strong><span class="en-assist" data-tw="哪一個 (事物)">which<span class="speak-icon">🔊</span></span></strong>' },
  { search: '<td>when, while, before, after, since, until, as soon as</td>', replace: '<td><span class="en-assist" data-tw="時間連接詞">when, while, before, after, since, until, as soon as<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>because, since, as, now that</td>', replace: '<td><span class="en-assist" data-tw="原因連接詞">because, since, as, now that<span class="speak-icon">🔊</span></span></td>' },
];

grammarPatterns.forEach(({search, replace}) => {
  html = safeReplace(html, search, replace);
});

// Final cleanup: just in case there are some bare english words in some table cells
const miscellaneous = [
  { search: '<td>positive, negative, neutral, critical 等。</td>', replace: '<td><span class="en-assist" data-tw="正向的">positive<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="負向的">negative<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="中立的">neutral<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="批判的">critical<span class="speak-icon">🔊</span></span> 等。</td>' }
];

miscellaneous.forEach(({search, replace}) => {
  html = safeReplace(html, search, replace);
});

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Final sweep of english.html completed.');
