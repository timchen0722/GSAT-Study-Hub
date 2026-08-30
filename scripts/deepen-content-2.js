const fs = require('fs');
const path = require('path');

const subjects = [
  {
    file: 'chinese.html',
    sidebarLabel: '拾、國寫（作文）高分指南',
    sidebarId: 'ch-adv2',
    content: `
      <section id="ch-adv2" class="content-section animate-fade-in-up">
        <h2>拾、國寫（作文）高分指南 ✍️</h2>
        <h3>1. 知性題的雙刀流：客觀分析與主觀評價</h3>
        <p>近年學測知性題常要求考生從圖表、數據或兩派論點中提出自己的看法。高分關鍵在於「不偏廢任何一方」。寫作架構建議：</p>
        <ul>
          <li><strong>第一段：</strong>精確概述雙方觀點或圖表核心數據（佔分 20%）。</li>
          <li><strong>第二段：</strong>提出自己的立場，並用具體例子佐證。切忌只寫空泛道理，必須要有生活經驗或社會觀察（佔分 80%）。</li>
        </ul>
        <h3>2. 情意題的共鳴感：以小見大</h3>
        <p>情意題（如〈冰箱〉、〈花草樹木的氣味記憶〉）最忌諱無病呻吟。要拿到 A 級分，必須從微小的生活細節切入，最終昇華到對生命的體悟。使用「感官摹寫（視覺、聽覺、嗅覺）」來增加畫面的立體感，是讓閱卷老師眼睛一亮的秘訣。</p>
      </section>`
  },
  {
    file: 'english.html',
    sidebarLabel: '拾壹、素養題型破解：混合題與圖表',
    sidebarId: 'ch-adv2',
    content: `
      <section id="ch-adv2" class="content-section animate-fade-in-up">
        <h2>拾壹、素養題型破解：混合題與圖表 📊</h2>
        <h3>1. 混合題的答題邏輯</h3>
        <p>108課綱最大的變革就是加入了「混合題型」。混合題通常包含簡答題與表格填空。解題關鍵在於<strong>「精準抓取關鍵字」</strong>，因為這類題目要求的是「資訊的擷取與統整」，而非逐字翻譯。作答時，請務必<strong>「照抄原文關鍵字」</strong>，除非題目特別要求用自己的話寫。</p>
        <h3>2. 圖表分析（Graphic Organizers）的判讀技巧</h3>
        <p>遇到文氏圖、流程圖或長條圖，先看圖表的「標題（Title）」與「座標軸/分類標籤（Labels）」。文章中出現 <em>increase, decrease, fluctuate, remain stable, peak</em> 等趨勢動詞時，請立刻對應圖表的起伏。當文章出現 <em>by contrast, on the other hand</em>，通常是對應圖表中的極端值或對比項目。</p>
      </section>`
  },
  {
    file: 'math-a.html',
    sidebarLabel: '拾貳、素養題型：跨領域與真實情境',
    sidebarId: 'ch-adv2',
    content: `
      <section id="ch-adv2" class="content-section animate-fade-in-up">
        <h2>拾貳、素養題型：跨領域與真實情境 📊</h2>
        <h3>1. 數學與科學的結合：指對數與半衰期</h3>
        <p>學測數A常出現跨領域考題。例如利用「對數」來處理細菌培養、放射性物質半衰期，或是地震芮氏規模的問題。遇到這類題目，先將文字敘述轉換為指數函數 $f(t) = k \cdot a^{rt}$，再利用對數進行運算。記住，對數的核心精神就是「將乘除降級為加減」。</p>
        <h3>2. 空間迷向：立體圖形的投影與截面</h3>
        <p>在處理空間幾何時，學生常會發生「空間迷向」。最穩定的破解法是「坐標化」。將圖形放入空間坐標系中，利用向量的外積求法向量，進而求出平面方程式或兩平面的夾角。這比單純用幾何直觀去想，出錯率低非常多。</p>
      </section>`
  },
  {
    file: 'math-b.html',
    sidebarLabel: '拾壹、生活情境與素養導向',
    sidebarId: 'ch-adv2',
    content: `
      <section id="ch-adv2" class="content-section animate-fade-in-up">
        <h2>拾壹、生活情境與素養導向 🛒</h2>
        <h3>1. 金融數學：單利、複利與年金</h3>
        <p>數B的重點之一在於生活應用，特別是理財相關的計算。遇到「分期付款」或「定期定額」的問題，一定要畫出「時間軸（Time Line）」，將每一期的本金與利息對齊計算。這是等比級數求和公式 $S_n = \frac{a_1(r^n - 1)}{r - 1}$ 的標準應用情境。</p>
        <h3>2. 比例與圖形：黃金比例與地圖縮放</h3>
        <p>數B常考圖形的相似與比例尺。當地圖的長度放大 $k$ 倍時，面積會放大 $k^2$ 倍。在藝術與建築的跨領域題中，常會出現黃金比例 $\frac{1+\sqrt{5}}{2}$ 的相關計算，理解其背後的二次方程式 $x^2 - x - 1 = 0$ 會有助於快速解題。</p>
      </section>`
  },
  {
    file: 'social.html',
    sidebarLabel: '拾壹、探究與實作：史料與圖表判讀',
    sidebarId: 'ch-adv2',
    content: `
      <section id="ch-adv2" class="content-section animate-fade-in-up">
        <h2>拾壹、探究與實作：史料與圖表判讀 🔍</h2>
        <h3>1. 史料分析：找出文本的「弦外之音」</h3>
        <p>歷史科的素養題往往提供一段史料。解題的第一步是看「出處」與「年代」。同一件事，不同立場的人會有不同的敘述（例如：清朝官方檔案與民間筆記對林爽文事件的記載）。判斷作者的「立場」與「意圖」，是作答的最高指導原則。</p>
        <h3>2. 地理資訊系統 (GIS) 與地圖判讀</h3>
        <p>地理科非常喜歡考 GIS 分析。必須熟練掌握「疊圖分析（適合尋找同時滿足多個條件的地點，如避難所選址）」與「環域分析（適合處理影響範圍，如工廠汙染半徑、捷運站步行範圍）」。看到等高線圖，先找最高點與最低點，並判斷河谷與山脊（V字型尖端指向高處為河谷）。</p>
      </section>`
  },
  {
    file: 'science.html',
    sidebarLabel: '拾玖、科學素養：實驗設計與數據分析',
    sidebarId: 'ch-adv2',
    content: `
      <section id="ch-adv2" class="content-section animate-fade-in-up">
        <h2>拾玖、科學素養：實驗設計與數據分析 🧪</h2>
        <h3>1. 變因的控制與尋找</h3>
        <p>自然科的探究與實作題，核心永遠是「尋找變因」。閱讀實驗步驟時，立刻圈出：</p>
        <ul>
          <li><strong>操作變因：</strong>實驗中唯一改變的條件（通常是 X 軸）。</li>
          <li><strong>應變變因：</strong>實驗量測的結果（通常是 Y 軸）。</li>
          <li><strong>控制變因：</strong>必須保持不變的條件。</li>
        </ul>
        <p>任何結論都必須基於「控制變因不變」的前提下才能成立。選項中如果出現實驗沒有探討的變因，那就是過度推論，絕對不能選。</p>
        <h3>2. 趨勢圖的解讀：正相關、負相關與極值</h3>
        <p>看到折線圖或散佈圖，先看橫縱坐標的單位。接著觀察趨勢：是線性增加、指數增加，還是有極值（最高點/最低點）？如果圖表有多條線，找出它們的「交叉點」，那通常是題目最喜歡考的轉折條件。</p>
      </section>`
  }
];

subjects.forEach(subj => {
  const filePath = path.join(__dirname, '..', 'subjects', subj.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Insert sidebar nav
  // Find where to insert (before </ul> in the sidebar)
  const navItem = `<li><a href="#${subj.sidebarId}">${subj.sidebarLabel}</a></li>\n        `;
  if (!html.includes(subj.sidebarId)) {
    html = html.replace(/(<\/ul>\s*<div[^>]*><a[^>]*>🎯)/i, navItem + '$1');
  }

  // Insert content
  if (!html.includes(subj.sidebarId + '"')) {
    html = html.replace(/(<\/main>)/i, subj.content + '\n      $1');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Deepened content for ${subj.file}`);
});
