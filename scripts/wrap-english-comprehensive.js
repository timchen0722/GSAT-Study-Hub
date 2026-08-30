const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// 1. Auto-wrap words with format: word（translation）
// e.g. return（回來） -> <span class="en-assist" data-tw="回來">return<span class="speak-icon">🔊</span></span>（回來）
// We use a regex that matches english letters optionally followed by a dash, then full-width parenthesis.
html = html.replace(/([a-zA-Z\-]+)（([^）]+)）/g, (match, word, translation) => {
  // Prevent double wrapping if already wrapped
  if (html.includes(`data-tw="${translation}">${word}<span`)) return match;
  return `<span class="en-assist" data-tw="${translation}">${word}<span class="speak-icon">🔊</span></span>（${translation}）`;
});

// 2. Sentences with <em>...</em>.（translation）
// e.g. <em>The baby cried</em>.（嬰兒哭了）
html = html.replace(/<em>([^<]+)<\/em>([^（<]*)（([^）]+)）/g, (match, eng, punctuation, translation) => {
  return `<em><span class="en-assist" data-tw="${translation}">${eng}</span></em>${punctuation}（${translation}）`;
});

// 3. Fix the "Common Roots" examples which lack translations, and wrap them.
const rootsReplacements = [
  { search: 'transport, import, export, portable, report', replace: '<span class="en-assist" data-tw="運輸">transport<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="進口">import<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="出口">export<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="可攜帶的">portable<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="報告">report<span class="speak-icon">🔊</span></span>' },
  { search: 'conduct, produce, educate, introduce, reduce', replace: '<span class="en-assist" data-tw="執行/引導">conduct<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="生產">produce<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="教育">educate<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="介紹">introduce<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="減少">reduce<span class="speak-icon">🔊</span></span>' },
  { search: 'respect, inspect, expect, spectacle, prospect', replace: '<span class="en-assist" data-tw="尊重">respect<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="檢查">inspect<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="期待">expect<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="奇觀/眼鏡">spectacle<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="前景">prospect<span class="speak-icon">🔊</span></span>' },
  { search: 'reject, project, inject, object, subject', replace: '<span class="en-assist" data-tw="拒絕">reject<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="專案/投射">project<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="注射">inject<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="反對/物體">object<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="主題/科目">subject<span class="speak-icon">🔊</span></span>' },
  { search: 'submit, permit, mission, promise, dismiss', replace: '<span class="en-assist" data-tw="提交">submit<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="允許">permit<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="任務">mission<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="承諾">promise<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="解散/駁回">dismiss<span class="speak-icon">🔊</span></span>' },
  { search: 'describe, subscribe, script, manuscript', replace: '<span class="en-assist" data-tw="描述">describe<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="訂閱">subscribe<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="腳本">script<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="手稿">manuscript<span class="speak-icon">🔊</span></span>' },
  { search: 'video, visible, visit, vision, provide', replace: '<span class="en-assist" data-tw="影片">video<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="可見的">visible<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="訪問">visit<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="願景/視力">vision<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="提供">provide<span class="speak-icon">🔊</span></span>' },
  { search: 'construct, structure, instruct, destroy', replace: '<span class="en-assist" data-tw="建造">construct<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="結構">structure<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="指導">instruct<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="摧毀">destroy<span class="speak-icon">🔊</span></span>' },
];

rootsReplacements.forEach(({search, replace}) => {
  html = html.replace(search, replace);
});

// 4. Fix Tense Sentences which lack translation in the text (they are just in a <td>)
const tenseReplacements = [
  { search: 'She <em>speaks</em> English fluently.', replace: '<span class="en-assist" data-tw="她說英文很流利。">She <em>speaks</em> English fluently.<span class="speak-icon">🔊</span></span>' },
  { search: 'She <em>is studying</em> for the exam.', replace: '<span class="en-assist" data-tw="她正在為考試讀書。">She <em>is studying</em> for the exam.<span class="speak-icon">🔊</span></span>' },
  { search: 'I <em>have visited</em> Japan twice.', replace: '<span class="en-assist" data-tw="我已經去過日本兩次了。">I <em>have visited</em> Japan twice.<span class="speak-icon">🔊</span></span>' },
  { search: 'He <em>has been waiting</em> for two hours.', replace: '<span class="en-assist" data-tw="他已經等了兩個小時。">He <em>has been waiting</em> for two hours.<span class="speak-icon">🔊</span></span>' },
  { search: 'They <em>arrived</em> yesterday.', replace: '<span class="en-assist" data-tw="他們昨天抵達了。">They <em>arrived</em> yesterday.<span class="speak-icon">🔊</span></span>' },
  { search: 'I <em>was reading</em> when she called.', replace: '<span class="en-assist" data-tw="她打來時我正在看書。">I <em>was reading</em> when she called.<span class="speak-icon">🔊</span></span>' },
  { search: 'He <em>had left</em> before I arrived.', replace: '<span class="en-assist" data-tw="在我抵達之前他就已經離開了。">He <em>had left</em> before I arrived.<span class="speak-icon">🔊</span></span>' },
  { search: 'She <em>had been working</em> all day.', replace: '<span class="en-assist" data-tw="她當時已經工作了一整天。">She <em>had been working</em> all day.<span class="speak-icon">🔊</span></span>' },
  { search: 'It <em>will rain</em> tomorrow.', replace: '<span class="en-assist" data-tw="明天將會下雨。">It <em>will rain</em> tomorrow.<span class="speak-icon">🔊</span></span>' },
  { search: 'I <em>will be sleeping</em> at midnight.', replace: '<span class="en-assist" data-tw="午夜時我將正在睡覺。">I <em>will be sleeping</em> at midnight.<span class="speak-icon">🔊</span></span>' },
  { search: 'By June, I <em>will have graduated</em>.', replace: '<span class="en-assist" data-tw="到了六月，我就已經畢業了。">By June, I <em>will have graduated</em>.<span class="speak-icon">🔊</span></span>' },
  { search: 'By 2027, I <em>will have been studying</em> for 3 years.', replace: '<span class="en-assist" data-tw="到了2027年，我就已經持續學習三年了。">By 2027, I <em>will have been studying</em> for 3 years.<span class="speak-icon">🔊</span></span>' },
];

tenseReplacements.forEach(({search, replace}) => {
  html = html.replace(search, replace);
});

// 5. Fix newly injected GSAT templates
const gsatReplacements = [
  { search: 'If + S + had + V.p.p, S + would have + V.p.p', replace: '<span class="en-assist" data-tw="如果當時...，就會...">If + S + had + V.p.p, S + would have + V.p.p<span class="speak-icon">🔊</span></span>' },
  { search: 'Had + S + V.p.p, S + would have + V.p.p', replace: '<span class="en-assist" data-tw="如果當時...，就會... (倒裝)">Had + S + V.p.p, S + would have + V.p.p<span class="speak-icon">🔊</span></span>' },
  { search: 'Never / Seldom / Not until... + 助動詞/be動詞 + S + V', replace: '<span class="en-assist" data-tw="絕不/很少/直到...才...">Never / Seldom / Not until... + 助動詞/be動詞 + S + V<span class="speak-icon">🔊</span></span>' },
  { search: '<em>Not until he came back <strong>did I realize</strong> the truth.</em>', replace: '<span class="en-assist" data-tw="直到他回來，我才發現真相。"><em>Not until he came back <strong>did I realize</strong> the truth.</em><span class="speak-icon">🔊</span></span>' },
  { search: '<em>It was a typical sunny Sunday afternoon when [主角] decided to...</em>', replace: '<span class="en-assist" data-tw="在一個典型晴朗的週日午後，當主角決定去..."><em>It was a typical sunny Sunday afternoon when [主角] decided to...</em><span class="speak-icon">🔊</span></span>' },
  { search: '<em>Out of nowhere, / To his astonishment, / Unexpectedly, ...</em>', replace: '<span class="en-assist" data-tw="不知從何處 / 令他驚訝的是 / 出乎意料地"><em>Out of nowhere, / To his astonishment, / Unexpectedly, ...</em><span class="speak-icon">🔊</span></span>' },
  { search: '<em>This incident taught him a valuable lesson: ...</em>', replace: '<span class="en-assist" data-tw="這個事件給了他一個寶貴的教訓：..."><em>This incident taught him a valuable lesson: ...</em><span class="speak-icon">🔊</span></span>' },
  { search: '<em>In recent years, the issue of [主題] has sparked widespread debate. Personally, I firmly believe that...</em>', replace: '<span class="en-assist" data-tw="近年來，這個主題引發了廣泛的爭論。就個人而言，我堅信..."><em>In recent years, the issue of [主題] has sparked widespread debate. Personally, I firmly believe that...</em><span class="speak-icon">🔊</span></span>' },
  { search: '<em>Take [例子] for instance, ... / A prime example of this is...</em>', replace: '<span class="en-assist" data-tw="以...為例 / 這最好的一個例子是..."><em>Take [例子] for instance, ... / A prime example of this is...</em><span class="speak-icon">🔊</span></span>' },
  { search: '<em>In conclusion, weighing the pros and cons, it is evident that...</em>', replace: '<span class="en-assist" data-tw="總結來說，權衡利弊後，很明顯地..."><em>In conclusion, weighing the pros and cons, it is evident that...</em><span class="speak-icon">🔊</span></span>' }
];

gsatReplacements.forEach(({search, replace}) => {
  html = html.replace(search, replace);
});

// Also make sure to add the icon for the regex replacements we did in step 2 (sentences)
html = html.replace(/<\/em>(。|，)?（([^）]+)）/g, (match, p1, p2) => {
  // If it doesn't already have the speak icon, add it
  if (!match.includes('speak-icon')) {
    return `</em>${p1 || ''}<span class="speak-icon">🔊</span>（${p2}）`;
  }
  return match;
});


fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Finished comprehensive english wrapper generation!');
