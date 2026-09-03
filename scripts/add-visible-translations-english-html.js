const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Adding clear, visible Chinese translations to every English sentence and table in subjects/english.html...');

// 1. Chapter 1 Word Roots examples (add visible Chinese translation)
content = content.replace(
  `<td><span class="en-assist" data-tw="運輸">transport<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="進口">import<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="出口">export<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="可攜帶的">portable<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="報告">report<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="運輸">transport<span class="speak-icon">🔊</span></span>（運輸）, <span class="en-assist" data-tw="進口">import<span class="speak-icon">🔊</span></span>（進口）, <span class="en-assist" data-tw="出口">export<span class="speak-icon">🔊</span></span>（出口）, <span class="en-assist" data-tw="可攜帶的">portable<span class="speak-icon">🔊</span></span>（便攜的）, <span class="en-assist" data-tw="報告">report<span class="speak-icon">🔊</span></span>（報告）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="執行/引導">conduct<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="生產">produce<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="教育">educate<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="介紹">introduce<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="減少">reduce<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="執行/引導">conduct<span class="speak-icon">🔊</span></span>（引導/實施）, <span class="en-assist" data-tw="生產">produce<span class="speak-icon">🔊</span></span>（生產）, <span class="en-assist" data-tw="教育">educate<span class="speak-icon">🔊</span></span>（教育）, <span class="en-assist" data-tw="介紹">introduce<span class="speak-icon">🔊</span></span>（介紹）, <span class="en-assist" data-tw="減少">reduce<span class="speak-icon">🔊</span></span>（減少）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="尊重">respect<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="檢查">inspect<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="期待">expect<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="奇觀/眼鏡">spectacle<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="前景">prospect<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="尊重">respect<span class="speak-icon">🔊</span></span>（尊敬）, <span class="en-assist" data-tw="檢查">inspect<span class="speak-icon">🔊</span></span>（視察）, <span class="en-assist" data-tw="期待">expect<span class="speak-icon">🔊</span></span>（期待）, <span class="en-assist" data-tw="奇觀/眼鏡">spectacle<span class="speak-icon">🔊</span></span>（奇觀）, <span class="en-assist" data-tw="前景">prospect<span class="speak-icon">🔊</span></span>（前景）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="拒絕">reject<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="專案/投射">project<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="注射">inject<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="反對/物體">object<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="主題/科目">subject<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="拒絕">reject<span class="speak-icon">🔊</span></span>（拒絕）, <span class="en-assist" data-tw="專案/投射">project<span class="speak-icon">🔊</span></span>（專案/投射）, <span class="en-assist" data-tw="注射">inject<span class="speak-icon">🔊</span></span>（注射）, <span class="en-assist" data-tw="反對/物體">object<span class="speak-icon">🔊</span></span>（物體/反對）, <span class="en-assist" data-tw="主題/科目">subject<span class="speak-icon">🔊</span></span>（主題/科目）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="提交">submit<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="允許">permit<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="任務">mission<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="承諾">promise<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="解散/駁回">dismiss<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="提交">submit<span class="speak-icon">🔊</span></span>（提交）, <span class="en-assist" data-tw="允許">permit<span class="speak-icon">🔊</span></span>（准許）, <span class="en-assist" data-tw="任務">mission<span class="speak-icon">🔊</span></span>（任務）, <span class="en-assist" data-tw="承諾">promise<span class="speak-icon">🔊</span></span>（承諾）, <span class="en-assist" data-tw="解散/駁回">dismiss<span class="speak-icon">🔊</span></span>（解散/駁回）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="描述">describe<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="訂閱">subscribe<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="腳本">script<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="手稿">manuscript<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="描述">describe<span class="speak-icon">🔊</span></span>（描述）, <span class="en-assist" data-tw="訂閱">subscribe<span class="speak-icon">🔊</span></span>（訂閱）, <span class="en-assist" data-tw="腳本">script<span class="speak-icon">🔊</span></span>（劇本）, <span class="en-assist" data-tw="手稿">manuscript<span class="speak-icon">🔊</span></span>（手稿）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="影片">video<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="可見的">visible<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="訪問">visit<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="願景/視力">vision<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="提供">provide<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="影片">video<span class="speak-icon">🔊</span></span>（影片）, <span class="en-assist" data-tw="可見的">visible<span class="speak-icon">🔊</span></span>（可見的）, <span class="en-assist" data-tw="訪問">visit<span class="speak-icon">🔊</span></span>（拜訪）, <span class="en-assist" data-tw="願景/視力">vision<span class="speak-icon">🔊</span></span>（視野/願景）, <span class="en-assist" data-tw="提供">provide<span class="speak-icon">🔊</span></span>（提供）</td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="建造">construct<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="結構">structure<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="指導">instruct<span class="speak-icon">🔊</span></span>, <span class="en-assist" data-tw="摧毀">destroy<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="建造">construct<span class="speak-icon">🔊</span></span>（建造）, <span class="en-assist" data-tw="結構">structure<span class="speak-icon">🔊</span></span>（結構）, <span class="en-assist" data-tw="指導">instruct<span class="speak-icon">🔊</span></span>（指導）, <span class="en-assist" data-tw="摧毀">destroy<span class="speak-icon">🔊</span></span>（摧毀）</td>`
);

// 2. Chapter 2 Twelve Tenses examples
const tenseReplacements = [
  {
    find: `<td><span class="en-assist" data-tw="她說英文很流利。">She <em>speaks</em> English fluently.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="她說英文很流利。">She <em>speaks</em> English fluently.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她說英文很流利。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="她正在為考試讀書。">She <em>is studying</em> for the exam.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="她正在為考試讀書。">She <em>is studying</em> for the exam.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她正在為考試讀書。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="我已經去過日本兩次了。">I <em>have visited</em> Japan twice.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="我已經去過日本兩次了。">I <em>have visited</em> Japan twice.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我已經去過日本兩次了。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="他已經等了兩個小時。">He <em>has been waiting</em> for two hours.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="他已經等了兩個小時。">He <em>has been waiting</em> for two hours.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他已經等了兩個小時。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="他們昨天抵達了。">They <em>arrived</em> yesterday.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="他們昨天抵達了。">They <em>arrived</em> yesterday.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他們昨天抵達了。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="她打來時我正在看書。">I <em>was reading</em> when she called.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="她打來時我正在看書。">I <em>was reading</em> when she called.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她打電話來時我正在看書。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="在我抵達之前他就已經離開了。">He <em>had left</em> before I arrived.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="在我抵達之前他就已經離開了。">He <em>had left</em> before I arrived.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（在我抵達前他就已經離開了。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="她當時已經工作了一整天。">She <em>had been working</em> all day.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="她當時已經工作了一整天。">She <em>had been working</em> all day.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她當時已經連續工作了一整天。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="明天將會下雨。">It <em>will rain</em> tomorrow.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="明天將會下雨。">It <em>will rain</em> tomorrow.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（明天將會下雨。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="午夜時我將正在睡覺。">I <em>will be sleeping</em> at midnight.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="午夜時我將正在睡覺。">I <em>will be sleeping</em> at midnight.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（午夜時我將正在睡覺。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="到了六月，我就已經畢業了。">By June, I <em>will have graduated</em>.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="到了六月，我就已經畢業了。">By June, I <em>will have graduated</em>.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（到了六月，我就已經畢業了。）</span></td>`
  },
  {
    find: `<td><span class="en-assist" data-tw="到了2027年，我就已經持續學習三年了。">By 2027, I <em>will have been studying</em> for 3 years.<span class="speak-icon">🔊</span></span></td>`,
    replace: `<td><span class="en-assist" data-tw="到了2027年，我就已經持續學習三年了。">By 2027, I <em>will have been studying</em> for 3 years.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（到了2027年，我將已經持續學習3年了。）</span></td>`
  }
];

tenseReplacements.forEach(tr => {
  content = content.replace(tr.find, tr.replace);
});

// 3. Chapter 3 Passive Voice Table (User Screenshot!)
const passiveTableOld = `          <table class="data-table">
            <thead><tr><th>時態</th><th>主動 <span class="en-assist" data-tw="主動">Active<span class="speak-icon">🔊</span></span></th><th>被動 <span class="en-assist" data-tw="被動">Passive<span class="speak-icon">🔊</span></span></th></tr></thead>
            <tbody>
              <tr><td><span class="en-assist" data-tw="簡單現在式">Simple Present<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他寫了這封信。">He writes the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="信被他寫了。">The letter <em>is written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><span class="en-assist" data-tw="簡單過去式">Simple Past<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他(過去)寫了這封信。">He wrote the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="信(過去)被他寫了。">The letter <em>was written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><span class="en-assist" data-tw="現在完成式">Present Perfect<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他已經寫了這封信。">He has written the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="信已經被他寫了。">The letter <em>has been written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><span class="en-assist" data-tw="助動詞">Modals<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他能寫這封信。">He can write the letter.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="這封信能被他寫。">The letter <em>can be written</em> by him.<span class="speak-icon">🔊</span></span></td></tr>
            </tbody>
          </table>`;

const passiveTableNew = `          <table class="data-table">
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

content = content.replace(passiveTableOld, passiveTableNew);

// 4. Chapter 3 Comparison Table
const compTableOld = `          <table class="data-table">
            <thead><tr><th>句型</th><th>結構</th><th>範例</th></tr></thead>
            <tbody>
              <tr><td><strong>原級比較</strong></td><td><span class="en-assist" data-tw="和...一樣">as + adj/adv + as<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他和他哥一樣高。">He is as tall as his brother.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong>比較級</strong></td><td><span class="en-assist" data-tw="比...更...">adj-er / more adj + than<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="她比同學聰明。">She is smarter than her classmates.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong>最高級</strong></td><td><span class="en-assist" data-tw="最...">the adj-est / the most adj<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="他是班上最高的。">He is the tallest in the class.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong>倍數</strong></td><td><span class="en-assist" data-tw="...的 X 倍">X times as ... as / X times adj-er than<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="這棟建築是那棟建築的三倍高。">This building is three times as tall as that one.<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td><strong><span class="en-assist" data-tw="越...就越...">The + 比較, the + 比較<span class="speak-icon">🔊</span></span></strong></td><td><span class="en-assist" data-tw="越...就越...">The more..., the more...<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="你讀書越努力，你得到的成績就越好。">The harder you study, the better grades you get.<span class="speak-icon">🔊</span></span></td></tr>
            </tbody>
          </table>`;

const compTableNew = `          <table class="data-table">
            <thead><tr><th>句型 Pattern</th><th>結構 Structure</th><th>經典範例 Example</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>原級比較</strong><br>Positive Degree</td>
                <td><span class="en-assist" data-tw="和...一樣">as + adj/adv + as<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（和……一樣）</span></td>
                <td><span class="en-assist" data-tw="他和他哥哥一樣高。">He is as tall as his brother.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他和他哥哥一樣高）</span></td>
              </tr>
              <tr>
                <td><strong>比較級</strong><br>Comparative Degree</td>
                <td><span class="en-assist" data-tw="比...更...">adj-er / more adj + than<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（比……更……）</span></td>
                <td><span class="en-assist" data-tw="她比她的同學聰明。">She is smarter than her classmates.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她比她的同學聰明）</span></td>
              </tr>
              <tr>
                <td><strong>最高級</strong><br>Superlative Degree</td>
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

content = content.replace(compTableOld, compTableNew);

// 5. Chapter 4 Clauses Tables
content = content.replace(
  `<td><span class="en-assist" data-tw="坐在我旁邊的女孩是我的朋友。">The girl who sits next to me is my friend.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="坐在我旁邊的女孩是我的朋友。">The girl who sits next to me is my friend.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（坐在我旁邊的女孩是我的朋友）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="我最尊敬的老師退休了。">The teacher whom I respect most retired.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="我最尊敬的老師退休了。">The teacher whom I respect most retired.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我最尊敬的老師退休了）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="車子被偷的那個男人報了警。">The man whose car was stolen called the police.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="車子被偷的那個男人報了警。">The man whose car was stolen called the police.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（車子被偷的那個男人報了警）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="我買的那本書很有趣。">The book which I bought is interesting.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="我買的那本書很有趣。">The book which I bought is interesting.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我買的那本書很有趣）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="這是我看過最好的電影。">This is the best movie that I have ever seen.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="這是我看過最好的電影。">This is the best movie that I have ever seen.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這是我看過最好的電影）</span></td>`
);

// Adverb clauses
content = content.replace(
  `<td><span class="en-assist" data-tw="做完功課後我會出門。">After I finish my homework, I will go out.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="做完功課後我會出門。">After I finish my homework, I will go out.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（做完功課後我會出門）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="因為下雨，所以我們待在家。">Because it rained, we stayed home.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="因為下雨，所以我們待在家。">Because it rained, we stayed home.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（因為下雨，所以我們待在家）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="如果你努力讀書，你就會通過。">If you study hard, you will pass.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="如果你努力讀書，你就會通過。">If you study hard, you will pass.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果你努力讀書，你就會通過考試）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="雖然他很年輕，但他非常成熟。">Although he is young, he is very mature.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="雖然他很年輕，但他非常成熟。">Although he is young, he is very mature.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（雖然他很年輕，但他非常成熟）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="他努力讀書以便能夠通過。">He studied hard so that he could pass.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="他努力讀書以便能夠通過。">He studied hard so that he could pass.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（他努力讀書以便能夠及格）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="她太累了以至於睡著了。">She was so tired that she fell asleep.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="她太累了以至於睡著了。">She was so tired that she fell asleep.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她太累了以至於睡著了）</span></td>`
);

// 6. Chapter 5 Special Grammar (Subjunctive, Inversion, Infinitives)
content = content.replace(
  `<td><span class="en-assist" data-tw="如果我是你，我就會更努力讀書。">If I were you, I would study harder.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="如果我是你，我就會更努力讀書。">If I were you, I would study harder.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果我是你，我就會更用功讀書）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="如果他當時有讀書，他就會通過了。">If he had studied, he <span class="en-assist" data-tw="將會已經">would have<span class="speak-icon">🔊</span></span> passed.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="如果他當時有讀書，他就會通過了。">If he had studied, he would have passed.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（如果他當時有讀書，他早就及格了）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="萬一下雨，我們就取消旅行。">If it should rain, we would cancel the trip.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="萬一下雨，我們就取消旅行。">If it should rain, we would cancel the trip.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（萬一下雨，我們就會取消旅行）</span></td>`
);

// Participle
content = content.replace(
  `<tr><td><span class="en-assist" data-tw="因為她覺得累，所以她提早就寢。">Because she felt tired, she went to bed early.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="覺得累，她提早就寢。">Feeling tired, she went to bed early.<span class="speak-icon">🔊</span></span></td><td>主動用 <span class="en-assist" data-tw="主詞相同，省略連接詞和主詞">V-ing<span class="speak-icon">🔊</span></span>（主詞相同，省略連接詞和主詞）</td></tr>`,
  `<tr><td><span class="en-assist" data-tw="因為她覺得累，所以她提早就寢。">Because she felt tired, she went to bed early.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（因為她覺得累，所以提早就寢）</span></td><td><span class="en-assist" data-tw="覺得累，她提早就寢。">Feeling tired, she went to bed early.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（覺得累，她提早就寢）</span></td><td>主動用 <strong>V-ing</strong>（主詞相同，省略連接詞和主詞）</td></tr>`
);

content = content.replace(
  `<tr><td><span class="en-assist" data-tw="因為他被狗咬了，所以他去了醫院。">Because he was bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="被狗咬了，他去了醫院。">Bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span></td><td>被動用 p.p.（省略 being）</td></tr>`,
  `<tr><td><span class="en-assist" data-tw="因為他被狗咬了，所以他去了醫院。">Because he was bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（因為被狗咬了，所以他去了醫院）</span></td><td><span class="en-assist" data-tw="被狗咬了，他去了醫院。">Bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（被狗咬了，他去了醫院）</span></td><td>被動用 <strong>p.p.</strong>（省略 being）</td></tr>`
);

// Inversion
content = content.replace(
  `<td><span class="en-assist" data-tw="我從未見過如此美麗的日落。">Never have I seen such a beautiful sunset.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="我從未見過如此美麗的日落。">Never have I seen such a beautiful sunset.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我從未見過如此美麗的日落）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="直到那時我才意識到真相。">Only then <span class="en-assist" data-tw="確實(助動詞)">did<span class="speak-icon">🔊</span></span> I <span class="en-assist" data-tw="意識到">realize<span class="speak-icon">🔊</span></span> the truth.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="直到那時我才意識到真相。">Only then did I realize the truth.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（直到那時我才意識到真相）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="我喜歡咖啡。—— 我也是。">I like coffee. — So do I.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="我喜歡咖啡。—— 我也是。">I like coffee. — So do I.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我喜歡咖啡。—— 我也是）</span></td>`
);

// Infinitives
content = content.replace(
  `<td><span class="en-assist" data-tw="她決定去。">She decided to go.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="她決定去。">She decided to go.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她決定要去）</span></td>`
);

content = content.replace(
  `<td><span class="en-assist" data-tw="我喜歡閱讀。">I enjoy reading.<span class="speak-icon">🔊</span></span></td>`,
  `<td><span class="en-assist" data-tw="我喜歡閱讀。">I enjoy reading.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（我喜愛閱讀）</span></td>`
);

content = content.replace(
  `<td>She <em>likes to swim / likes swimming</em>.</td>`,
  `<td><span class="en-assist" data-tw="她喜歡游泳。">She likes to swim / likes swimming.<span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（她喜歡游泳）</span></td>`
);

// Translation section (Chapter 7)
content = content.replace(
  `<tr><td>it 虛主詞</td><td>對我們來說很重要</td><td><em><span class="en-assist" data-tw="對我們來說...很重要">It is important for us to...<span class="speak-icon">🔊</span></span></em></td></tr>`,
  `<tr><td>it 虛主詞</td><td>對我們來說很重要</td><td><em><span class="en-assist" data-tw="對我們來說做某事很重要">It is important for us to...<span class="speak-icon">🔊</span></span></em><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（對我們而言做……是很重要的）</span></td></tr>`
);

content = content.replace(
  `<tr><td>關係子句</td><td>住在臺北的人們</td><td><em><span class="en-assist" data-tw="住在台北的人們...">People who live in Taipei...<span class="speak-icon">🔊</span></span></em></td></tr>`,
  `<tr><td>關係子句</td><td>住在臺北的人們</td><td><em><span class="en-assist" data-tw="住在臺北的人們...">People who live in Taipei...<span class="speak-icon">🔊</span></span></em><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（住在臺北的人們……）</span></td></tr>`
);

content = content.replace(
  `<tr><td>被動語態</td><td>這座橋是在1900年建造的</td><td><em><span class="en-assist" data-tw="這座橋建於1900年。">This bridge was built in 1900.<span class="speak-icon">🔊</span></span></em></td></tr>`,
  `<tr><td>被動語態</td><td>這座橋是在1900年建造的</td><td><em><span class="en-assist" data-tw="這座橋建於1900年。">This bridge was built in 1900.<span class="speak-icon">🔊</span></span></em><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這座橋建於 1900 年）</span></td></tr>`
);

content = content.replace(
  `<tr><td>比較級</td><td>運動越多，越健康</td><td><em><span class="en-assist" data-tw="你運動越多，就越健康。">The more you exercise, the healthier you become.<span class="speak-icon">🔊</span></span></em></td></tr>`,
  `<tr><td>比較級</td><td>運動越多，越健康</td><td><em><span class="en-assist" data-tw="你運動越多，就越健康。">The more you exercise, the healthier you become.<span class="speak-icon">🔊</span></span></em><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（你運動得越多，你就越健康）</span></td></tr>`
);

content = content.replace(
  `<tr><td>現在完成</td><td>科技已經改變了我們的生活</td><td><em><span class="en-assist" data-tw="科技已經改變了我們的生活。">Technology has changed our lives.<span class="speak-icon">🔊</span></span></em></td></tr>`,
  `<tr><td>現在完成</td><td>科技已經改變了我們的生活</td><td><em><span class="en-assist" data-tw="科技已經改變了我們的生活。">Technology has changed our lives.<span class="speak-icon">🔊</span></span></em><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（科技已經改變了我們的生活）</span></td></tr>`
);

// Advanced sections
content = content.replace(
  `<li><strong>表示遞進</strong>：<em><span class="en-assist" data-tw="此外，而且">Furthermore, Moreover, In addition<span class="speak-icon">🔊</span></span></em></li>`,
  `<li><strong>表示遞進</strong>：<em><span class="en-assist" data-tw="此外，而且">Furthermore, Moreover, In addition<span class="speak-icon">🔊</span></span></em>（此外、而且、再者）</li>`
);

content = content.replace(
  `<li><strong>表示轉折</strong>：<em><span class="en-assist" data-tw="然而，相反地">Nevertheless, However, Conversely<span class="speak-icon">🔊</span></span></em></li>`,
  `<li><strong>表示轉折</strong>：<em><span class="en-assist" data-tw="然而，相反地">Nevertheless, However, Conversely<span class="speak-icon">🔊</span></span></em>（然而、儘管如此、相反地）</li>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully added visible Chinese translations to subjects/english.html!');
