const fs = require('fs');
const path = require('path');

const subjects = [
  {
    file: 'chinese.html',
    sidebarLabel: '玖、進階探討與滿分秘笈',
    sidebarId: 'ch-adv',
    content: `
      <section id="ch-adv" class="content-section animate-fade-in-up">
        <h2>玖、進階探討與滿分秘笈 🏆</h2>
        <h3>1. 經典長篇古文深度解析</h3>
        <p>在學測中，如〈出師表〉與〈赤壁賦〉等經典，不僅考驗字義，更重視「情感脈絡」與「作者寫作意圖」。</p>
        <ul>
          <li><strong>〈出師表〉的情感層次</strong>：從「報先帝、忠陛下」的臣子之情，到「臨表涕泣，不知所云」的長輩之愛，諸葛亮巧妙運用「以情動人」與「以理服人」的雙軌敘事。學測常考段落間的情感轉折。</li>
          <li><strong>〈赤壁賦〉的哲理辯證</strong>：蘇軾透過「客」與「蘇子」的對話，呈現從「悲哀」到「超脫」的過程。關鍵句「變與不變」的辯證，常出現在跨文本比較題中。</li>
        </ul>
        <h3>2. 歷屆陷阱題型分析</h3>
        <p>近年學測最常見的陷阱在於「過度推論」。遇到「推論題」時，務必緊扣文本，避免加入過多個人主觀想法。此外，「雙文本比較」常考「兩作者對於同一事物的相異觀點」，請習慣先畫出各自的立場表。</p>
      </section>`
  },
  {
    file: 'english.html',
    sidebarLabel: '玖、進階探討與滿分秘笈',
    sidebarId: 'ch-adv',
    content: `
      <section id="ch-adv" class="content-section animate-fade-in-up">
        <h2>玖、進階探討與滿分秘笈 🏆</h2>
        <h3>1. 長難句結構拆解 (Parsing Complex Sentences)</h3>
        <p>遇到超過三行的長難句時，學會找出句子的「主幹（S+V）」是解題關鍵。</p>
        <ul>
          <li><strong>分詞構句陷阱</strong>：<em>Seeing the dog, he ran away.</em> 學測常考被動或完成式的分詞構句，例如 <em>Having been scolded, the boy cried.</em> (因為被罵了，男孩哭了)。解題時請還原主詞，判斷主動或被動。</li>
          <li><strong>倒裝句型</strong>：<em>Not until he came back did I go to bed.</em> (直到他回來我才去睡覺)。注意助動詞的提前，這在閱讀測驗中常被用來強調語氣。</li>
        </ul>
        <h3>2. 英文寫作實戰：高分轉折詞與亮點句型</h3>
        <p>作文要拿高分，避免通篇使用 <em>and, but, so</em>。建議替換為：</p>
        <ul>
          <li><strong>表示遞進</strong>：<em>Furthermore, Moreover, In addition</em></li>
          <li><strong>表示轉折</strong>：<em>Nevertheless, However, Conversely</em></li>
          <li><strong>亮點句型</strong>：使用強調句 <em>It is... that...</em> 或假設語氣 <em>If I had studied harder, I would have passed.</em> 來增加句型多樣性。</li>
        </ul>
      </section>`
  },
  {
    file: 'math-a.html',
    sidebarLabel: '拾壹、進階探討與滿分秘笈',
    sidebarId: 'ch-adv',
    content: `
      <section id="ch-adv" class="content-section animate-fade-in-up">
        <h2>拾壹、進階探討與滿分秘笈 🏆</h2>
        <h3>1. 跨單元整合：代數與幾何的共舞</h3>
        <p>學測數 A 的壓軸題多為跨單元整合。例如「平面向量與三角函數」的結合：當題目給定向量內積，往往暗示可以使用餘弦定理或投影長度來解題。</p>
        <div class="formula-block">
          <div class="formula-title">💡 滿分觀念：柯西不等式與幾何極值</div>
          <p>解求極值問題時，除了配方法與算幾不等式，當遇到平方和時，應直覺想到柯西不等式：<br>$(a^2 + b^2)(x^2 + y^2) \\ge (ax + by)^2$<br>這不僅是代數工具，在空間中代表 $|\\vec{u}|^2 |\\vec{v}|^2 \\ge (\\vec{u} \\cdot \\vec{v})^2$。</p>
        </div>
        <h3>2. 易錯觀念釐清：機率與貝氏定理</h3>
        <p>學生常混淆「條件機率」與「獨立事件」。記住：獨立代表 $P(A|B) = P(A)$，也就是 B 的發生不影響 A。而貝氏定理常包裝在「檢驗偽陽性」或「抽籤問題」中，畫樹狀圖是最穩定的解題策略。</p>
      </section>`
  },
  {
    file: 'math-b.html',
    sidebarLabel: '拾、進階探討與滿分秘笈',
    sidebarId: 'ch-adv',
    content: `
      <section id="ch-adv" class="content-section animate-fade-in-up">
        <h2>拾、進階探討與滿分秘笈 🏆</h2>
        <h3>1. 數據分析與生活應用</h3>
        <p>學測數 B 非常強調「生活情境題」。在數據分析中，相關係數 $r$ 與迴歸直線是必考重點。</p>
        <div class="formula-block">
          <div class="formula-title">💡 滿分觀念：資料標準化與平移伸縮</div>
          <p>請牢記：將所有數據加上一常數（平移），標準差<strong>不變</strong>；將所有數據乘上一常數（伸縮），標準差變為原來的 $|a|$ 倍。但「相關係數 $r$」只要乘上的常數同號，則完全不變！這在處理單位換算的題目時能秒殺對手。</p>
        </div>
        <h3>2. 排列組合的必考盲點</h3>
        <p>處理「重複組合」與「分配問題」時，先區分「物品是否相同」以及「箱子是否相同」。遇到「至少有一個」的題型，善用「反面作法（全部減去完全沒有）」可以省下大量計算時間。</p>
      </section>`
  },
  {
    file: 'social.html',
    sidebarLabel: '拾、進階探討與滿分秘笈',
    sidebarId: 'ch-adv',
    content: `
      <section id="ch-adv" class="content-section animate-fade-in-up">
        <h2>拾、進階探討與滿分秘笈 🏆</h2>
        <h3>1. 歷史：長時段的因果脈絡</h3>
        <p>學測歷史不再考死記硬背的年代，而是考「時代背景的變遷」。例如：臺灣在日治時期的經濟政策，是如何受到日本國內工業化以及二戰爆發的影響？將歷史事件放在「世界史的格局」下看，是拿高分的關鍵。</p>
        <h3>2. 地理：圖表與機制的綜合判讀</h3>
        <p>氣候圖與地形圖是必考題。不僅要知道「地中海型氣候」是夏乾冬雨，更要理解其背後機制是「行星風系的季移（副熱帶高壓與西風帶交替影響）」。近年常考的 GIS（地理資訊系統），務必熟悉「環域分析」與「疊圖分析」的應用情境。</p>
        <h3>3. 公民：時事與法律的應用</h3>
        <p>學測常將最新大法官釋字、憲法法庭判決或社會議題融入考題。解題時，請緊扣「比例原則」、「法律保留原則」與「基本人權保障」。在經濟學部分，外部成本（如污染）與外部效益的供需圖形平移，是每年必考的圖表題。</p>
      </section>`
  },
  {
    file: 'science.html',
    sidebarLabel: '拾捌、進階探討與滿分秘笈',
    sidebarId: 'ch-adv',
    content: `
      <section id="ch-adv" class="content-section animate-fade-in-up">
        <h2>拾捌、進階探討與滿分秘笈 🏆</h2>
        <h3>1. 物理：力學與電磁學的綜合題型</h3>
        <p>學測自然科越來越喜歡出「物理與地球科學結合」的題目。例如，利用萬有引力公式推導衛星繞行地球的週期（克卜勒第三定律的物理機制）。此外，「電磁感應（冷次定律）」的方向判斷，請務必熟練右手安培定則的逆向思考。</p>
        <h3>2. 化學：反應熱與化學計量</h3>
        <p>在計算限量試劑與反應熱（赫斯定律）時，請將化學方程式視為代數方程式進行加減。易錯點在於「狀態（固液氣）」的不同會影響反應熱，作答時請仔細核對選項中的物質狀態標示。</p>
        <h3>3. 生物與地科：探究與實作</h3>
        <p>近年大考極度重視「探究與實作」題型。這類題目通常篇幅極長，包含圖表與實驗數據。解題口訣：先看題目問什麼，再回文章找答案（「找變因」、「看對照組」）。地科的氣候變遷（聖嬰現象、溫室效應）以及台灣的地質構造，是每年穩定出題的精華區。</p>
      </section>`
  }
];

subjects.forEach(subj => {
  const filePath = path.join(__dirname, '..', 'subjects', subj.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Inject sidebar nav item before </ul>
  const navItem = `<li><a href="#${subj.sidebarId}">${subj.sidebarLabel}</a></li>\n        `;
  html = html.replace(/(<\/ul>\s*<div[^>]*><a[^>]*>🎯)/i, navItem + '$1');

  // Inject content section before </main>
  html = html.replace(/(<\/main>)/i, subj.content + '\n      $1');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Updated ${subj.file}`);
});
