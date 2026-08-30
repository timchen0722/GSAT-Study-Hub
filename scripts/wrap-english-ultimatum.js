const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(htmlPath, 'utf8');
const safeReplace = require('./safe-replace');

const explicitReplacements = [
  // Passive voice section
  { search: 'Passive voice structure: be + past participle, emphasizing the receiver of the action.', replace: '<span class="en-assist" data-tw="被動語態結構：be動詞 + 過去分詞，強調動作的承受者。">Passive voice structure: be + past participle, emphasizing the receiver of the action.<span class="speak-icon">🔊</span></span>' },
  { search: '主動 Active', replace: '主動 <span class="en-assist" data-tw="主動">Active<span class="speak-icon">🔊</span></span>' },
  { search: '被動 Passive', replace: '被動 <span class="en-assist" data-tw="被動">Passive<span class="speak-icon">🔊</span></span>' },
  
  // Table rows for Passive Voice
  { search: '<td>Simple Present</td>', replace: '<td><span class="en-assist" data-tw="簡單現在式">Simple Present<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>He writes the letter.</td>', replace: '<td><span class="en-assist" data-tw="他寫了這封信。">He writes the letter.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>The letter is written by him.</td>', replace: '<td><span class="en-assist" data-tw="這封信被他寫了。">The letter is written by him.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>Simple Past</td>', replace: '<td><span class="en-assist" data-tw="簡單過去式">Simple Past<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>He wrote the letter.</td>', replace: '<td><span class="en-assist" data-tw="他(過去)寫了這封信。">He wrote the letter.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>The letter was written by him.</td>', replace: '<td><span class="en-assist" data-tw="這封信(過去)被他寫了。">The letter was written by him.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>Present Perfect</td>', replace: '<td><span class="en-assist" data-tw="現在完成式">Present Perfect<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>He has written the letter.</td>', replace: '<td><span class="en-assist" data-tw="他已經寫了這封信。">He has written the letter.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>The letter has been written by him.</td>', replace: '<td><span class="en-assist" data-tw="這封信已經被他寫了。">The letter has been written by him.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>Modals</td>', replace: '<td><span class="en-assist" data-tw="助動詞">Modals<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>He can write the letter.</td>', replace: '<td><span class="en-assist" data-tw="他能寫這封信。">He can write the letter.<span class="speak-icon">🔊</span></span></td>' },
  { search: '<td>The letter can be written by him.</td>', replace: '<td><span class="en-assist" data-tw="這封信能被他寫。">The letter can be written by him.<span class="speak-icon">🔊</span></span></td>' },

  // Paragraphs
  { search: 'English tenses are formed by combining TIME (past/present/future) with ASPECT (simple/progressive/perfect/perfect progressive).', replace: '<span class="en-assist" data-tw="英文時態由時間(過去/現在/未來)與觀點(簡單/進行/完成/完成進行)組合而成。">English tenses are formed by combining TIME (past/present/future) with ASPECT (simple/progressive/perfect/perfect progressive).<span class="speak-icon">🔊</span></span>' },
  { search: 'A noun clause functions as a noun in the sentence (subject, object, or complement).', replace: '<span class="en-assist" data-tw="名詞子句在句子中作為名詞使用（主詞、受詞或補語）。">A noun clause functions as a noun in the sentence (subject, object, or complement).<span class="speak-icon">🔊</span></span>' },
  { search: 'Adjective Clauses (Relative Clauses)', replace: '<span class="en-assist" data-tw="形容詞子句（關係子句）">Adjective Clauses (Relative Clauses)<span class="speak-icon">🔊</span></span>' },
  { search: 'The subjunctive mood expresses unreal conditions. Verb tenses shift back one step.', replace: '<span class="en-assist" data-tw="假設語氣表達非真實條件。動詞時態倒退一步。">The subjunctive mood expresses unreal conditions. Verb tenses shift back one step.<span class="speak-icon">🔊</span></span>' },
  { search: 'Participial constructions simplify adverb clauses by removing the conjunction and subject.', replace: '<span class="en-assist" data-tw="分詞構句藉由移除連接詞與主詞來簡化副詞子句。">Participial constructions simplify adverb clauses by removing the conjunction and subject.<span class="speak-icon">🔊</span></span>' },
  { search: 'Because he was bitten by a dog, he went to the hospital.', replace: '<span class="en-assist" data-tw="因為他被狗咬了，所以他去了醫院。">Because he was bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span>' },
  { search: 'Bitten by a dog, he went to the hospital.', replace: '<span class="en-assist" data-tw="被狗咬了，他去了醫院。">Bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span>' },
  
  // Mixed strings
  { search: 'like, love, hate, begin, start, continue', replace: '<span class="en-assist" data-tw="喜歡, 愛, 討厭, 開始, 開始, 繼續">like, love, hate, begin, start, continue<span class="speak-icon">🔊</span></span>' },
  { search: 'She likes to swim / likes swimming.', replace: '<span class="en-assist" data-tw="她喜歡游泳。">She likes to swim / likes swimming.<span class="speak-icon">🔊</span></span>' },
  { search: '答題策略 Strategy', replace: '答題策略 <span class="en-assist" data-tw="策略">Strategy<span class="speak-icon">🔊</span></span>' },
  { search: '克漏字 Cloze', replace: '克漏字 <span class="en-assist" data-tw="克漏字">Cloze<span class="speak-icon">🔊</span></span>' },
  { search: '文意選填 Fill-in', replace: '文意選填 <span class="en-assist" data-tw="填空">Fill-in<span class="speak-icon">🔊</span></span>' },
  { search: '閱讀測驗 Reading Comprehension', replace: '閱讀測驗 <span class="en-assist" data-tw="閱讀理解">Reading Comprehension<span class="speak-icon">🔊</span></span>' },
  { search: '因果 Cause & Effect', replace: '因果 <span class="en-assist" data-tw="因果">Cause & Effect<span class="speak-icon">🔊</span></span>' },
  { search: 'because, therefore, as a result, consequently', replace: '<span class="en-assist" data-tw="因為, 所以, 結果, 因此">because, therefore, as a result, consequently<span class="speak-icon">🔊</span></span>' },
  { search: '比較對照 Compare & Contrast', replace: '比較對照 <span class="en-assist" data-tw="比較與對照">Compare & Contrast<span class="speak-icon">🔊</span></span>' },
  { search: 'however, on the other hand, similarly, in contrast', replace: '<span class="en-assist" data-tw="然而, 另一方面, 同樣地, 相對地">however, on the other hand, similarly, in contrast<span class="speak-icon">🔊</span></span>' },
  { search: '時間順序 Chronological', replace: '時間順序 <span class="en-assist" data-tw="按時間順序的">Chronological<span class="speak-icon">🔊</span></span>' },
  { search: 'first, then, next, finally, eventually', replace: '<span class="en-assist" data-tw="首先, 接著, 下一步, 最後, 最終">first, then, next, finally, eventually<span class="speak-icon">🔊</span></span>' },
  { search: '問題與解決 Problem & Solution', replace: '問題與解決 <span class="en-assist" data-tw="問題與解決">Problem & Solution<span class="speak-icon">🔊</span></span>' },
  { search: 'the issue is..., one solution is...', replace: '<span class="en-assist" data-tw="問題是..., 一個解決方案是...">the issue is..., one solution is...<span class="speak-icon">🔊</span></span>' },
  { search: '列舉 Listing', replace: '列舉 <span class="en-assist" data-tw="列舉">Listing<span class="speak-icon">🔊</span></span>' },
  { search: 'for example, such as, including, in addition', replace: '<span class="en-assist" data-tw="例如, 像是, 包括, 此外">for example, such as, including, in addition<span class="speak-icon">🔊</span></span>' },
  { search: '功能轉折語 Transitions', replace: '功能轉折語 <span class="en-assist" data-tw="轉折語">Transitions<span class="speak-icon">🔊</span></span>' },
  { search: '因果 Cause/Effect', replace: '因果 <span class="en-assist" data-tw="因果">Cause/Effect<span class="speak-icon">🔊</span></span>' },
  { search: 'therefore, consequently, as a result, thus, hence', replace: '<span class="en-assist" data-tw="因此, 所以, 結果, 因此, 故">therefore, consequently, as a result, thus, hence<span class="speak-icon">🔊</span></span>' },
  { search: 'The GSAT translation section requires translating two Chinese sentences into English.', replace: '<span class="en-assist" data-tw="學測翻譯大題要求將兩句中文翻譯成英文。">The GSAT translation section requires translating two Chinese sentences into English.<span class="speak-icon">🔊</span></span>' },

  { search: 'It is important for us to...', replace: '<span class="en-assist" data-tw="對我們來說...很重要">It is important for us to...<span class="speak-icon">🔊</span></span>' },
  { search: 'People who live in Taipei...', replace: '<span class="en-assist" data-tw="住在台北的人們...">People who live in Taipei...<span class="speak-icon">🔊</span></span>' },
  { search: 'This bridge was built in 1900.', replace: '<span class="en-assist" data-tw="這座橋建於1900年。">This bridge was built in 1900.<span class="speak-icon">🔊</span></span>' },
  { search: 'The more you exercise, the healthier you become.', replace: '<span class="en-assist" data-tw="你運動越多，就越健康。">The more you exercise, the healthier you become.<span class="speak-icon">🔊</span></span>' },
  { search: 'Technology has changed our lives.', replace: '<span class="en-assist" data-tw="科技已經改變了我們的生活。">Technology has changed our lives.<span class="speak-icon">🔊</span></span>' },

  { search: '<th>功能 Function</th>', replace: '<th>功能 <span class="en-assist" data-tw="功能">Function<span class="speak-icon">🔊</span></span></th>' },
  { search: '<th>寫法 How to Write</th>', replace: '<th>寫法 <span class="en-assist" data-tw="如何撰寫">How to Write<span class="speak-icon">🔊</span></span></th>' },
  { search: 'Body 主體', replace: 'Body <span class="en-assist" data-tw="主體">Body<span class="speak-icon">🔊</span></span>' },
  { search: 'Conclusion 結論', replace: 'Conclusion <span class="en-assist" data-tw="結論">Conclusion<span class="speak-icon">🔊</span></span>' },

  { search: 'V-ing..., S + V...', replace: '<span class="en-assist" data-tw="現在分詞構句">V-ing..., S + V...<span class="speak-icon">🔊</span></span>' },
  { search: 'Not only did... but also...', replace: '<span class="en-assist" data-tw="不僅...而且...">Not only did... but also...<span class="speak-icon">🔊</span></span>' },
  { search: 'If I were..., I would...', replace: '<span class="en-assist" data-tw="如果我是...，我就會...">If I were..., I would...<span class="speak-icon">🔊</span></span>' },
  { search: 'What matters most is...', replace: '<span class="en-assist" data-tw="最重要的是...">What matters most is...<span class="speak-icon">🔊</span></span>' },
  
  { search: 'and, but, so', replace: '<span class="en-assist" data-tw="和，但是，所以">and, but, so<span class="speak-icon">🔊</span></span>' },
  { search: 'Furthermore, Moreover, In addition', replace: '<span class="en-assist" data-tw="此外，而且">Furthermore, Moreover, In addition<span class="speak-icon">🔊</span></span>' },
  { search: 'Nevertheless, However, Conversely', replace: '<span class="en-assist" data-tw="然而，相反地">Nevertheless, However, Conversely<span class="speak-icon">🔊</span></span>' }
];

// Add replacements for 'Step 1' through 'Step 4'
[1, 2, 3, 4].forEach(n => {
  explicitReplacements.push({
    search: `Step ${n}`,
    replace: `<span class="en-assist" data-tw="步驟 ${n}">Step ${n}<span class="speak-icon">🔊</span></span>`
  });
});

explicitReplacements.forEach(({search, replace}) => {
  html = safeReplace(html, search, replace);
});

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Ultimatum sweep of english.html completed.');
