const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Comprehensively upgrading Adverb Clauses and all Grammar tables in subjects/english.html...');

// 1. Upgrade Adverb Clauses Table (User Screenshot!)
const oldAdverbTable = `          <table class="data-table">
            <thead><tr><th>類型</th><th>常用連接詞</th><th>範例</th></tr></thead>
            <tbody>
              <tr><td><strong>時間</strong> Time</td><td><span class="en-assist" data-tw="時間連接詞">when, while, before, after, since, until, as soon as<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="做完功課後我會出門。">After I finish my homework, I will go out.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（做完功課後我會出門）</span></td></tr>
              <tr><td><strong>原因</strong> Reason</td><td><span class="en-assist" data-tw="原因連接詞">because, since, as, now that<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="因為下雨，所以我們待在家。">Because it rained, we stayed home.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（因為下雨，所以我們待在家）</span></td></tr>
              <tr><td><strong>條件</strong> Condition</td><td>if, unless, as long as, provided that</td><td><span class="en-assist" data-tw="如果你努力讀書，你就會通過。">If you study hard, you will pass.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果你努力讀書，你就會通過考試）</span></td></tr>
              <tr><td><strong>讓步</strong> Concession</td><td>although, though, even though, while</td><td><span class="en-assist" data-tw="雖然他很年輕，但他非常成熟。">Although he is young, he is very mature.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（雖然他很年輕，但他非常成熟）</span></td></tr>
              <tr><td><strong>目的</strong> Purpose</td><td>so that, in order that</td><td><span class="en-assist" data-tw="他努力讀書以便能夠通過。">He studied hard so that he could pass.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他努力讀書以便能夠及格）</span></td></tr>
              <tr><td><strong>結果</strong> Result</td><td>so...that, such...that</td><td><span class="en-assist" data-tw="她太累了以至於睡著了。">She was so tired that she fell asleep.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她太累了以至於睡著了）</span></td></tr>
            </tbody>
          </table>`;

const newAdverbTable = `          <table class="data-table">
            <thead><tr><th>類型 Type</th><th>常用連接詞 Conjunctions（附發音與中文）</th><th>實戰範例 Example</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>時間子句</strong><br><span class="en-assist" data-tw="時間">Time<span class="speak-icon">🔊</span></span></td>
                <td>
                  <span class="en-assist" data-tw="當……時">when<span class="speak-icon">🔊</span></span>（當……時）, 
                  <span class="en-assist" data-tw="當……時/然而">while<span class="speak-icon">🔊</span></span>（當……時/然而）, 
                  <span class="en-assist" data-tw="在……之前">before<span class="speak-icon">🔊</span></span>（在……之前）, 
                  <span class="en-assist" data-tw="在……之後">after<span class="speak-icon">🔊</span></span>（在……之後）, 
                  <span class="en-assist" data-tw="自從/既然">since<span class="speak-icon">🔊</span></span>（自從）, 
                  <span class="en-assist" data-tw="直到……為止">until<span class="speak-icon">🔊</span></span>（直到……為止）, 
                  <span class="en-assist" data-tw="一……就……">as soon as<span class="speak-icon">🔊</span></span>（一……就……）
                </td>
                <td><span class="en-assist" data-tw="做完功課後我會出門。">After I finish my homework, I will go out.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（做完功課後我會出門）</span></td>
              </tr>
              <tr>
                <td><strong>原因子句</strong><br><span class="en-assist" data-tw="原因">Reason<span class="speak-icon">🔊</span></span></td>
                <td>
                  <span class="en-assist" data-tw="因為">because<span class="speak-icon">🔊</span></span>（因為）, 
                  <span class="en-assist" data-tw="既然/因為">since<span class="speak-icon">🔊</span></span>（既然/因為）, 
                  <span class="en-assist" data-tw="由於/因為">as<span class="speak-icon">🔊</span></span>（由於/因為）, 
                  <span class="en-assist" data-tw="既然/如今已經">now that<span class="speak-icon">🔊</span></span>（既然/如今已）
                </td>
                <td><span class="en-assist" data-tw="因為下雨，所以我們待在家。">Because it rained, we stayed home.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（因為下雨，所以我們待在家）</span></td>
              </tr>
              <tr>
                <td><strong>條件子句</strong><br><span class="en-assist" data-tw="條件">Condition<span class="speak-icon">🔊</span></span></td>
                <td>
                  <span class="en-assist" data-tw="如果">if<span class="speak-icon">🔊</span></span>（如果）, 
                  <span class="en-assist" data-tw="除非">unless<span class="speak-icon">🔊</span></span>（除非）, 
                  <span class="en-assist" data-tw="只要">as long as<span class="speak-icon">🔊</span></span>（只要）, 
                  <span class="en-assist" data-tw="只要/倘若">provided that<span class="speak-icon">🔊</span></span>（倘若/只要）
                </td>
                <td><span class="en-assist" data-tw="如果你努力讀書，你就會通過。">If you study hard, you will pass.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果你努力讀書，你就會通過考試）</span></td>
              </tr>
              <tr>
                <td><strong>讓步子句</strong><br><span class="en-assist" data-tw="讓步">Concession<span class="speak-icon">🔊</span></span></td>
                <td>
                  <span class="en-assist" data-tw="雖然/儘管">although<span class="speak-icon">🔊</span></span>（雖然）, 
                  <span class="en-assist" data-tw="雖然">though<span class="speak-icon">🔊</span></span>（雖然）, 
                  <span class="en-assist" data-tw="即使/儘管">even though<span class="speak-icon">🔊</span></span>（即使/儘管）, 
                  <span class="en-assist" data-tw="雖然/然而">while<span class="speak-icon">🔊</span></span>（雖然/然而）
                </td>
                <td><span class="en-assist" data-tw="雖然他很年輕，但他非常成熟。">Although he is young, he is very mature.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（雖然他很年輕，但他非常成熟）</span></td>
              </tr>
              <tr>
                <td><strong>目的子句</strong><br><span class="en-assist" data-tw="目的">Purpose<span class="speak-icon">🔊</span></span></td>
                <td>
                  <span class="en-assist" data-tw="以便/為了">so that<span class="speak-icon">🔊</span></span>（以便/為了）, 
                  <span class="en-assist" data-tw="為了使/以便">in order that<span class="speak-icon">🔊</span></span>（為了使/以便）
                </td>
                <td><span class="en-assist" data-tw="他努力讀書以便能夠通過。">He studied hard so that he could pass.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他努力讀書以便能夠及格）</span></td>
              </tr>
              <tr>
                <td><strong>結果子句</strong><br><span class="en-assist" data-tw="結果">Result<span class="speak-icon">🔊</span></span></td>
                <td>
                  <span class="en-assist" data-tw="如此……以至於……">so...that<span class="speak-icon">🔊</span></span>（如此……以至於……）, 
                  <span class="en-assist" data-tw="如此……以至於……">such...that<span class="speak-icon">🔊</span></span>（如此……以至於……）
                </td>
                <td><span class="en-assist" data-tw="她太累了以至於睡著了。">She was so tired that she fell asleep.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她太累了以至於睡著了）</span></td>
              </tr>
            </tbody>
          </table>`;

html = html.replace(oldAdverbTable, newAdverbTable);

// 2. Upgrade Infinitives vs Gerunds Table (Chapter 5)
const oldInfTable = `          <table class="data-table">
            <thead><tr><th>分類</th><th>常見動詞</th><th>說明</th></tr></thead>
            <tbody>
              <tr><td><strong>只接 to V</strong></td><td>want, hope, decide, plan, promise, expect, agree, refuse</td><td><span class="en-assist" data-tw="她決定去。">She decided to go.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她決定要去）</span></td></tr>
              <tr><td><strong>只接 V-ing</strong></td><td>enjoy, finish, mind, avoid, practice, suggest, consider, deny</td><td><span class="en-assist" data-tw="我喜歡閱讀。">I enjoy reading.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我喜愛閱讀）</span></td></tr>
              <tr><td><strong>兩者皆可（意思相同）</strong></td><td><span class="en-assist" data-tw="喜歡, 愛, 討厭, 開始, 開始, 繼續">like, love, hate, begin, start, continue<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="她喜歡游泳。">She likes to swim / likes swimming.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她喜歡游泳）</span></td></tr>
              <tr><td><strong>兩者皆可（意思不同）</strong></td><td>remember, forget, stop, try, regret</td><td>remember to <span class="en-assist" data-tw="記得去做">V<span class="speak-icon">🔊</span></span>（記得去做）vs remember <span class="en-assist" data-tw="記得做過">V-ing<span class="speak-icon">🔊</span></span>（記得做過）</td></tr>
            </tbody>
          </table>`;

const newInfTable = `          <table class="data-table">
            <thead><tr><th>分類 Category</th><th>常見動詞 Common Verbs（附發音與中文）</th><th>例句與用法說明 Explanation</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>只接不定詞</strong><br>Followed by <strong>to V</strong></td>
                <td>
                  <span class="en-assist" data-tw="想要">want<span class="speak-icon">🔊</span></span>（想要）, 
                  <span class="en-assist" data-tw="希望">hope<span class="speak-icon">🔊</span></span>（希望）, 
                  <span class="en-assist" data-tw="決定">decide<span class="speak-icon">🔊</span></span>（決定）, 
                  <span class="en-assist" data-tw="計畫">plan<span class="speak-icon">🔊</span></span>（計畫）, 
                  <span class="en-assist" data-tw="承諾">promise<span class="speak-icon">🔊</span></span>（承諾）, 
                  <span class="en-assist" data-tw="期望">expect<span class="speak-icon">🔊</span></span>（期望）, 
                  <span class="en-assist" data-tw="同意">agree<span class="speak-icon">🔊</span></span>（同意）, 
                  <span class="en-assist" data-tw="拒絕">refuse<span class="speak-icon">🔊</span></span>（拒絕）
                </td>
                <td><span class="en-assist" data-tw="她決定去。">She decided to go.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她決定要去）</span></td>
              </tr>
              <tr>
                <td><strong>只接動名詞</strong><br>Followed by <strong>V-ing</strong></td>
                <td>
                  <span class="en-assist" data-tw="享受/喜愛">enjoy<span class="speak-icon">🔊</span></span>（享受/喜愛）, 
                  <span class="en-assist" data-tw="完成">finish<span class="speak-icon">🔊</span></span>（完成）, 
                  <span class="en-assist" data-tw="介意">mind<span class="speak-icon">🔊</span></span>（介意）, 
                  <span class="en-assist" data-tw="避免">avoid<span class="speak-icon">🔊</span></span>（避免）, 
                  <span class="en-assist" data-tw="練習">practice<span class="speak-icon">🔊</span></span>（練習）, 
                  <span class="en-assist" data-tw="建議">suggest<span class="speak-icon">🔊</span></span>（建議）, 
                  <span class="en-assist" data-tw="考慮">consider<span class="speak-icon">🔊</span></span>（考慮）, 
                  <span class="en-assist" data-tw="否認">deny<span class="speak-icon">🔊</span></span>（否認）
                </td>
                <td><span class="en-assist" data-tw="我喜歡閱讀。">I enjoy reading.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我喜愛閱讀）</span></td>
              </tr>
              <tr>
                <td><strong>兩者皆可<br>（意思相同）</strong></td>
                <td>
                  <span class="en-assist" data-tw="喜歡">like<span class="speak-icon">🔊</span></span>（喜歡）, 
                  <span class="en-assist" data-tw="喜愛">love<span class="speak-icon">🔊</span></span>（喜愛）, 
                  <span class="en-assist" data-tw="討厭">hate<span class="speak-icon">🔊</span></span>（討厭）, 
                  <span class="en-assist" data-tw="開始">begin<span class="speak-icon">🔊</span></span>（開始）, 
                  <span class="en-assist" data-tw="開始">start<span class="speak-icon">🔊</span></span>（開始）, 
                  <span class="en-assist" data-tw="繼續">continue<span class="speak-icon">🔊</span></span>（繼續）
                </td>
                <td><span class="en-assist" data-tw="她喜歡游泳。">She likes to swim / likes swimming.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她喜歡游泳）</span></td>
              </tr>
              <tr>
                <td><strong>兩者皆可<br>（意思不同 大考必考）</strong></td>
                <td>
                  <span class="en-assist" data-tw="記得">remember<span class="speak-icon">🔊</span></span>（記得）, 
                  <span class="en-assist" data-tw="忘記">forget<span class="speak-icon">🔊</span></span>（忘記）, 
                  <span class="en-assist" data-tw="停止">stop<span class="speak-icon">🔊</span></span>（停止）, 
                  <span class="en-assist" data-tw="嘗試/努力">try<span class="speak-icon">🔊</span></span>（嘗試/努力）, 
                  <span class="en-assist" data-tw="後悔/遺憾">regret<span class="speak-icon">🔊</span></span>（後悔/遺憾）
                </td>
                <td>
                  • <span class="en-assist" data-tw="記得去做某事">remember to V<span class="speak-icon">🔊</span></span>（記得去做某事）vs <span class="en-assist" data-tw="記得做過某事">remember V-ing<span class="speak-icon">🔊</span></span>（記得曾做過某事）<br>
                  • <span class="en-assist" data-tw="忘記去做某事">forget to V<span class="speak-icon">🔊</span></span>（忘記去做）vs <span class="en-assist" data-tw="忘記做過某事">forget V-ing<span class="speak-icon">🔊</span></span>（忘記曾做過）<br>
                  • <span class="en-assist" data-tw="停下來去進行另一件事">stop to V<span class="speak-icon">🔊</span></span>（停下來去進行……）vs <span class="en-assist" data-tw="停止正在進行的動作">stop V-ing<span class="speak-icon">🔊</span></span>（停止正在做的動作）
                </td>
              </tr>
            </tbody>
          </table>`;

html = html.replace(oldInfTable, newInfTable);

// 3. Upgrade Text structures in Chapter 6 (lines 400-408)
const oldTextStruct = `          <ul>
            <li><strong>因果 <span class="en-assist" data-tw="因果">Cause & Effect<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="因為, 所以, 結果, 因此">because, therefore, as a result, consequently<span class="speak-icon">🔊</span></span></li>
            <li><strong>比較對照 <span class="en-assist" data-tw="比較與對照">Compare & Contrast<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="然而, 另一方面, 同樣地, 相對地">however, on the other hand, similarly, in contrast<span class="speak-icon">🔊</span></span></li>
            <li><strong>時間順序 <span class="en-assist" data-tw="按時間順序的">Chronological<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="首先, 接著, 下一步, 最後, 最終">first, then, next, finally, eventually<span class="speak-icon">🔊</span></span></li>
            <li><strong>問題與解決 <span class="en-assist" data-tw="問題與解決">Problem & Solution<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="問題是..., 一個解決方案是...">the issue is..., one solution is...<span class="speak-icon">🔊</span></span></li>
            <li><strong>列舉 <span class="en-assist" data-tw="列舉">Listing<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="例如, 像是, 包括, 此外">for example, such as, including, in addition<span class="speak-icon">🔊</span></span></li>
          </ul>`;

const newTextStruct = `          <ul>
            <li><strong>因果關係 <span class="en-assist" data-tw="因果關係">Cause & Effect<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="因為">because<span class="speak-icon">🔊</span></span>（因為）, <span class="en-assist" data-tw="因此">therefore<span class="speak-icon">🔊</span></span>（因此）, <span class="en-assist" data-tw="結果">as a result<span class="speak-icon">🔊</span></span>（結果）, <span class="en-assist" data-tw="結果導致">consequently<span class="speak-icon">🔊</span></span>（結果導致）</li>
            <li><strong>比較對照 <span class="en-assist" data-tw="比較與對照">Compare & Contrast<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="然而">however<span class="speak-icon">🔊</span></span>（然而）, <span class="en-assist" data-tw="另一方面">on the other hand<span class="speak-icon">🔊</span></span>（另一方面）, <span class="en-assist" data-tw="同樣地">similarly<span class="speak-icon">🔊</span></span>（同樣地）, <span class="en-assist" data-tw="相比之下">in contrast<span class="speak-icon">🔊</span></span>（相比之下）</li>
            <li><strong>時間順序 <span class="en-assist" data-tw="按時間順序的">Chronological<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="首先">first<span class="speak-icon">🔊</span></span>（首先）, <span class="en-assist" data-tw="然後">then<span class="speak-icon">🔊</span></span>（然後）, <span class="en-assist" data-tw="接著">next<span class="speak-icon">🔊</span></span>（接著）, <span class="en-assist" data-tw="最後">finally<span class="speak-icon">🔊</span></span>（最後）, <span class="en-assist" data-tw="最終">eventually<span class="speak-icon">🔊</span></span>（最終）</li>
            <li><strong>問題與解決 <span class="en-assist" data-tw="問題與解決">Problem & Solution<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="問題是……">the issue is...<span class="speak-icon">🔊</span></span>（問題是……）, <span class="en-assist" data-tw="一個解決方案是……">one solution is...<span class="speak-icon">🔊</span></span>（一個解決方案是……）</li>
            <li><strong>列舉論述 <span class="en-assist" data-tw="列舉">Listing<span class="speak-icon">🔊</span></span></strong>：<span class="en-assist" data-tw="例如">for example<span class="speak-icon">🔊</span></span>（例如）, <span class="en-assist" data-tw="像是">such as<span class="speak-icon">🔊</span></span>（像是）, <span class="en-assist" data-tw="包括">including<span class="speak-icon">🔊</span></span>（包括）, <span class="en-assist" data-tw="此外">in addition<span class="speak-icon">🔊</span></span>（此外）</li>
          </ul>`;

html = html.replace(oldTextStruct, newTextStruct);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully upgraded Adverb Clauses and all Grammar tables!');
