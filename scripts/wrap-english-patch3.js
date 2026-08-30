const fs = require('fs');
const path = require('path');
const { safeReplace } = require('./safe-replace');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(filePath, 'utf8');

// The passive voice table sentences
const passiveReplacements = [
  {
    target: /The letter <em>is written<\/em> by him\./g,
    replace: '<span class="en-assist" data-tw="信被他寫了。">The letter <em>is written</em> by him.<span class="speak-icon">🔊</span></span>'
  },
  {
    target: /The letter <em><span class="en-assist" data-tw="\(過去\)被寫了">was written<span class="speak-icon">🔊<\/span><\/span><\/em> by him\./g,
    replace: '<span class="en-assist" data-tw="信(過去)被他寫了。">The letter <em>was written</em> by him.<span class="speak-icon">🔊</span></span>'
  },
  {
    target: /The letter <em><span class="en-assist" data-tw="已經被寫了">has been written<span class="speak-icon">🔊<\/span><\/span><\/em> by him\./g,
    replace: '<span class="en-assist" data-tw="信已經被他寫了。">The letter <em>has been written</em> by him.<span class="speak-icon">🔊</span></span>'
  },
  {
    target: /The letter <em><span class="en-assist" data-tw="能被寫">can be written<span class="speak-icon">🔊<\/span><\/span><\/em> by him\./g,
    replace: '<span class="en-assist" data-tw="這封信能被他寫。">The letter <em>can be written</em> by him.<span class="speak-icon">🔊</span></span>'
  }
];

passiveReplacements.forEach(r => {
  html = html.replace(r.target, r.replace);
});

// Other specific missed sentences
const otherReplacements = [
  {
    target: /<p>Passive voice structure: <strong>be \+ past participle<\/strong>, emphasizing the receiver of the action\.<\/p>/g,
    replace: '<p><span class="en-assist" data-tw="被動語態的結構：be + 過去分詞 (p.p.)，強調「承受動作者」而非「執行者」。">Passive voice structure: <strong>be + past participle</strong>, emphasizing the receiver of the action.<span class="speak-icon">🔊</span></span></p>'
  },
  {
    target: /<td>that 引導的名詞子句當主詞（他通過考試令大家驚訝）<\/td>/g,
    replace: '<td><span class="en-assist" data-tw="that 引導的名詞子句當主詞">that noun clause as subject</span>（他通過考試令大家驚訝）</td>'
  },
  {
    target: /<td>習慣、事實、真理<br>Habits, facts, universal truths<\/td>/g,
    replace: '<td>習慣、事實、真理<br><span class="en-assist" data-tw="習慣、事實、普遍真理">Habits, facts, universal truths<span class="speak-icon">🔊</span></span></td>'
  },
  {
    target: /<td>從過去持續到現在且仍在進行<br>Action started in past, continuing now<\/td>/g,
    replace: '<td>從過去持續到現在且仍在進行<br><span class="en-assist" data-tw="從過去持續到現在且仍在進行">Action started in past, continuing now<span class="speak-icon">🔊</span></span></td>'
  },
  {
    target: /<td>在過去某時點之前一直持續的動作<\/td>/g,
    replace: '<td>在過去某時點之前一直持續的動作<br><span class="en-assist" data-tw="在過去某時點之前一直持續的動作">Action continuing up to a past time<span class="speak-icon">🔊</span></span></td>'
  },
  {
    target: /<td>到未來某時一直持續的動作<\/td>/g,
    replace: '<td>到未來某時一直持續的動作<br><span class="en-assist" data-tw="到未來某時一直持續的動作">Action continuing up to a future time<span class="speak-icon">🔊</span></span></td>'
  }
];

otherReplacements.forEach(r => {
  html = html.replace(r.target, r.replace);
});

// Also fix the simple tense headers
const tenseHeaders = [
  'Simple Present', 'Present Progressive', 'Present Perfect', 'Present Perfect Progressive',
  'Simple Past', 'Past Progressive', 'Past Perfect', 'Past Perfect Progressive',
  'Simple Future', 'Future Progressive', 'Future Perfect', 'Future Perfect Progressive'
];

tenseHeaders.forEach(tense => {
  const regex = new RegExp(`(<br>)${tense}(<\\/td>)`, 'g');
  html = html.replace(regex, `$1<span class="en-assist" data-tw="${tense}">${tense}<span class="speak-icon">🔊</span></span>$2`);
});

fs.writeFileSync(filePath, html, 'utf8');
console.log('Patch 3 complete.');
