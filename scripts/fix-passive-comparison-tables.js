const fs = require('fs');

let html = fs.readFileSync('subjects/english.html', 'utf8');

// Replace Passive voice table
const oldPassive = `          <table class="data-table">
            <thead><tr><th>時態</th><th>主動 <span class="en-assist" data-tw="主動">Active<span class="speak-icon">🔊</span></span></th><th>被動 <span class="en-assist" data-tw="被動">Passive<span class="speak-icon">🔊</span></span></th></tr></thead>
            <tbody>
              <tr><td><span class="en-assist" data-tw="簡單現在式">Simple Present<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他寫了這封信。">He writes the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="信被他寫了。">The letter <em>is written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><span class="en-assist" data-tw="簡單過去式">Simple Past<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他(過去)寫了這封信。">He wrote the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="信(過去)被他寫了。">The letter <em>was written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><span class="en-assist" data-tw="現在完成式">Present Perfect<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他已經寫了這封信。">He has written the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="信已經被他寫了。">The letter <em>has been written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><span class="en-assist" data-tw="助動詞">Modals<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他能寫這封信。">He can write the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="這封信能被他寫。">The letter <em>can be written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
            </tbody>
          </table>`;

const newPassive = `          <table class="data-table">
            <thead><tr><th>時態 Tense</th><th>主動 Active</th><th>被動 Passive</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>簡單現在式</strong><br><span class="en-assist" data-tw="簡單現在式">Simple Present<span class="speak-icon">🔊</span></span></td>
                <td><span class="en-assist" data-tw="他寫這封信。">He writes the letter.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他寫這封信）</span></td>
                <td><span class="en-assist" data-tw="這封信是由他寫的。">The letter <em>is written</em> by him.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這封信是由他寫的）</span></td>
              </tr>
              <tr>
                <td><strong>簡單過去式</strong><br><span class="en-assist" data-tw="簡單過去式">Simple Past<span class="speak-icon">🔊</span></span></td>
                <td><span class="en-assist" data-tw="他當時寫了這封信。">He wrote the letter.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他當時寫了這封信）</span></td>
                <td><span class="en-assist" data-tw="這封信當時是由他寫的。">The letter <em>was written</em> by him.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這封信當時是由他寫的）</span></td>
              </tr>
              <tr>
                <td><strong>現在完成式</strong><br><span class="en-assist" data-tw="現在完成式">Present Perfect<span class="speak-icon">🔊</span></span></td>
                <td><span class="en-assist" data-tw="他已經寫好了這封信。">He has written the letter.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他已經寫好了這封信）</span></td>
                <td><span class="en-assist" data-tw="這封信已經由他寫好了。">The letter <em>has been written</em> by him.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這封信已經由他寫好）</span></td>
              </tr>
              <tr>
                <td><strong>情態助動詞</strong><br><span class="en-assist" data-tw="情態助動詞">Modals<span class="speak-icon">🔊</span></span></td>
                <td><span class="en-assist" data-tw="他能寫這封信。">He can write the letter.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他能寫這封信）</span></td>
                <td><span class="en-assist" data-tw="這封信能由他來寫。">The letter <em>can be written</em> by him.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這封信能由他來寫）</span></td>
              </tr>
            </tbody>
          </table>`;

// Replace Comparison table
const oldComp = `          <table class="data-table">
            <thead><tr><th>句型</th><th>結構</th><th>範例</th></tr></thead>
            <tbody>
              <tr><td><strong>原級比較</strong></td><td><span class="en-assist" data-tw="和...一樣">as + adj/adv + as<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他和他哥一樣高。">He is as tall as his brother.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong>比較級</strong></td><td><span class="en-assist" data-tw="比...更...">adj-er / more adj + than<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="她比同學聰明。">She is smarter than her classmates.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong>最高級</strong></td><td><span class="en-assist" data-tw="最...">the adj-est / the most adj<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他是班上最高的。">He is the tallest in the class.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong>倍數</strong></td><td><span class="en-assist" data-tw="...的 X 倍">X times as ... as / X times adj-er than<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="這棟建築是那棟建築的三倍高。">This building is three times as tall as that one.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong><span class="en-assist" data-tw="越...就越...">The + 比較, the + 比較<span class="speak-icon">🔊</span></span></strong></td><td><span class="en-assist" data-tw="越...就越...">The more..., the more...<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="你讀書越努力，你得到的成績就越好。">The harder you study, the better grades you get.<span class="speak-icon">🔊</span></span></td></tr>
            </tbody>
          </table>`;

const newComp = `          <table class="data-table">
            <thead><tr><th>句型 Pattern</th><th>結構 Structure</th><th>經典範例 Example</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>原級比較</strong><br>Positive</td>
                <td><span class="en-assist" data-tw="和...一樣">as + adj/adv + as<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（和……一樣）</span></td>
                <td><span class="en-assist" data-tw="他和他哥哥一樣高。">He is as tall as his brother.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他和他哥哥一樣高）</span></td>
              </tr>
              <tr>
                <td><strong>比較級</strong><br>Comparative</td>
                <td><span class="en-assist" data-tw="比...更...">adj-er / more adj + than<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（比……更……）</span></td>
                <td><span class="en-assist" data-tw="她比她的同學聰明。">She is smarter than her classmates.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她比她的同學聰明）</span></td>
              </tr>
              <tr>
                <td><strong>最高級</strong><br>Superlative</td>
                <td><span class="en-assist" data-tw="最...">the adj-est / the most adj<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（最……）</span></td>
                <td><span class="en-assist" data-tw="他是全班最高的。">He is the tallest in the class.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他是全班最高的）</span></td>
              </tr>
              <tr>
                <td><strong>倍數表達</strong><br>Multiples</td>
                <td><span class="en-assist" data-tw="...的 X 倍">X times as ... as / X times adj-er than<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（……的 X 倍）</span></td>
                <td><span class="en-assist" data-tw="這棟建築物是那棟的三倍高。">This building is three times as tall as that one.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這棟建築物是那棟的三倍高）</span></td>
              </tr>
              <tr>
                <td><strong>越……就越……</strong><br>Proportional</td>
                <td><span class="en-assist" data-tw="越...就越...">The more..., the more...<span class="speak-icon">🔊</span></span></td>
                <td><span class="en-assist" data-tw="你讀書越努力，你獲得的成績就越好。">The harder you study, the better grades you get.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（你讀書越努力，成績就越好）</span></td>
              </tr>
            </tbody>
          </table>`;

html = html.replace(/\r\n/g, '\n');
html = html.replace(oldPassive.replace(/\r\n/g, '\n'), newPassive.replace(/\r\n/g, '\n'));
html = html.replace(oldComp.replace(/\r\n/g, '\n'), newComp.replace(/\r\n/g, '\n'));

fs.writeFileSync('subjects/english.html', html, 'utf8');
console.log('Passive and Comparison tables updated successfully!');
