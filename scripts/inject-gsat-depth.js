const fs = require('fs');
const path = require('path');

// 1. Inject CSS for .step-box
const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const stepBoxCSS = `
/* Step-by-Step Derivation Box for Math/Science */
.step-box {
  background: var(--color-bg-card);
  border-left: 4px solid var(--color-accent-teal);
  border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
  padding: var(--space-4) var(--space-6);
  margin: var(--space-4) 0;
  box-shadow: var(--shadow-sm);
}
.step-box-title {
  font-weight: 700;
  color: var(--color-accent-teal);
  margin-bottom: var(--space-2);
  display: flex;
  align-items: center;
  gap: var(--space-2);
}
.step-row {
  display: flex;
  align-items: baseline;
  border-bottom: 1px solid var(--color-bg-tertiary);
  padding: var(--space-2) 0;
}
.step-row:last-child {
  border-bottom: none;
}
.step-num {
  font-family: var(--font-mono);
  font-weight: 700;
  color: var(--color-text-muted);
  width: 30px;
  flex-shrink: 0;
}
.step-math {
  flex-grow: 1;
  padding: 0 var(--space-4);
}
.step-desc {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  width: 35%;
  border-left: 1px dashed var(--color-bg-tertiary);
  padding-left: var(--space-4);
}
`;
if (!css.includes('.step-box {')) {
  fs.appendFileSync(cssPath, '\n' + stepBoxCSS);
}

// 2. Deep Content HTML
const subjects = [
  {
    file: 'chinese.html',
    id: 'gsat-deep-ch',
    label: '拾、學測專武：混合題與國寫',
    content: `
      <section id="gsat-deep-ch" class="content-section animate-fade-in-up mt-8">
        <h2>拾、學測專武：歷屆大考趨勢與深度剖析 🎯</h2>
        
        <h3>1. 混合題型破解法 (Mixed Questions)</h3>
        <p>108課綱最大的變革就是「混合題型」。大考中心設計混合題的目的是測驗「擷取訊息」與「統整解釋」的能力。</p>
        <div class="step-box">
          <div class="step-box-title">💡 混合題手寫不扣分三法則</div>
          <div class="step-row">
            <div class="step-num">01</div>
            <div class="step-math"><strong>緊扣文本，原句直抄</strong></div>
            <div class="step-desc">學測閱卷標準極嚴，若題目要求「依據引文」，請務必直接抄錄原文關鍵字，切勿自行換句話說，以免失去「給分關鍵字」。</div>
          </div>
          <div class="step-row">
            <div class="step-num">02</div>
            <div class="step-math"><strong>精準字數，標點算字</strong></div>
            <div class="step-desc">若規定「限20字以內」，標點符號一律計入。請先在試題本上打草稿，刪除冗言贅字（如：的、了、其實）。</div>
          </div>
          <div class="step-row">
            <div class="step-num">03</div>
            <div class="step-math"><strong>因果句型包裝</strong></div>
            <div class="step-desc">回答原因時，統一使用「因為（文本事實），所以作者認為（題目所問）」的結構，確保邏輯嚴密。</div>
          </div>
        </div>

        <h3>2. 國寫（寫作）高分模板：知性題 vs 情意題</h3>
        <p>國寫佔國文總分的一半，是頂標的決戰關鍵。請背誦並熟悉以下兩套大考通用模板：</p>
        
        <h4>A. 知性題（圖表判讀、雙文本論辯）</h4>
        <ul>
          <li><strong>第一段（破題與立場）</strong>：兩句話總結圖表或文章核心，並在最後一句<strong>明確表態</strong>（我贊成 / 我反對 / 我認為應折衷）。絕不可模稜兩可。</li>
          <li><strong>第二段（正反論證）</strong>：舉出兩個支持你立場的理由（可引述文本）。接著使用「退步法」：<em>「無可否認，反對方或許會認為...，然而...」</em>，以此展現批判性思考。</li>
          <li><strong>第三段（結論）</strong>：重申立場，並提出一個具體可行的微型建議作結。</li>
        </ul>

        <h4>B. 情意題（個人經驗、情感抒發）</h4>
        <ul>
          <li><strong>起（畫面切入）</strong>：放棄老套的「記得小時候...」，改用「感官細節」開場。例如：<em>「那個悶熱的午後，蟬鳴聲交織著粉筆敲擊黑板的清脆聲響...」</em>。</li>
          <li><strong>承（事件敘述）</strong>：挑選一個具體的「微小事件」放大描寫，避免流水帳。</li>
          <li><strong>轉（內心轉折）</strong>：這段是得分關鍵。描述該事件如何引發你內心的矛盾、頓悟或成長。</li>
          <li><strong>合（昇華）</strong>：將個人情感提升至普世價值或未來期許，留下餘韻。</li>
        </ul>
      </section>`
  },
  {
    file: 'english.html',
    id: 'gsat-deep-en',
    label: '拾、學測專武：文法與作文',
    content: `
      <section id="gsat-deep-en" class="content-section animate-fade-in-up mt-8">
        <h2>拾、學測專武：歷屆大考趨勢與深度剖析 🎯</h2>
        
        <h3>1. 學測文法必殺技：三大魔王公式化</h3>
        <p>學測克漏字與文法題中最常出現的三大句型，只要套用公式即可秒殺：</p>
        
        <div class="step-box">
          <div class="step-box-title">🔥 必殺技 1：與過去事實相反的假設語氣</div>
          <div class="step-row">
            <div class="step-num">Step</div>
            <div class="step-math"><strong>If + S + had + V.p.p, S + would have + V.p.p</strong></div>
            <div class="step-desc">這是最常考的句型。若看到 would have，前面必找 had V.p.p。</div>
          </div>
          <div class="step-row">
            <div class="step-num">進階</div>
            <div class="step-math"><strong>Had + S + V.p.p, S + would have + V.p.p</strong></div>
            <div class="step-desc">學測超愛考「省略 If」的倒裝！只要看到 Had 在句首，99% 是這個句型。</div>
          </div>
        </div>

        <div class="step-box">
          <div class="step-box-title">🔥 必殺技 2：否定副詞放句首（倒裝句）</div>
          <div class="step-row">
            <div class="step-num">公式</div>
            <div class="step-math"><strong>Never / Seldom / Not until... + 助動詞/be動詞 + S + V</strong></div>
            <div class="step-desc">一看到否定詞在句首，立刻將選項中「沒有倒裝」的刪除。</div>
          </div>
          <div class="step-row">
            <div class="step-num">範例</div>
            <div class="step-math"><em>Not until he came back <strong>did I realize</strong> the truth.</em></div>
            <div class="step-desc">注意助動詞 did 後面必須接原形動詞 realize。</div>
          </div>
        </div>

        <h3>2. 英文作文滿分模板 (English Essay Templates)</h3>
        <p>學測英文作文最重要的是「邏輯連貫」與「亮點句型」。</p>
        <ul>
          <li><strong>看圖說故事 (Picture Story)</strong>：
            <ul>
              <li>開頭必備時間與人物設定：<em>It was a typical sunny Sunday afternoon when [主角] decided to...</em></li>
              <li>轉折語氣（引發衝突）：<em>Out of nowhere, / To his astonishment, / Unexpectedly, ...</em></li>
              <li>結尾感想：<em>This incident taught him a valuable lesson: ...</em></li>
            </ul>
          </li>
          <li><strong>論說文 (Opinion Essay)</strong>：
            <ul>
              <li>開頭引入背景（Topic Sentence）：<em>In recent years, the issue of [主題] has sparked widespread debate. Personally, I firmly believe that...</em></li>
              <li>舉例說明：<em>Take [例子] for instance, ... / A prime example of this is...</em></li>
              <li>結尾重申：<em>In conclusion, weighing the pros and cons, it is evident that...</em></li>
            </ul>
          </li>
        </ul>
      </section>`
  },
  {
    file: 'math-a.html',
    id: 'gsat-deep-ma',
    label: '拾貳、學測專武：核心推導',
    content: `
      <section id="gsat-deep-ma" class="content-section animate-fade-in-up mt-8">
        <h2>拾貳、學測專武：歷屆大考趨勢與深度推導 🎯</h2>
        
        <h3>1. 大考中心精選：正餘弦定理推導與應用</h3>
        <p>學測數 A 必定會有一題綜合圖形題，通常結合正弦定理與餘弦定理。死背公式不夠，理解推導過程能幫助你在遇到變形題時畫出輔助線。</p>
        
        <div class="step-box">
          <div class="step-box-title">📐 餘弦定理推導 (Cosine Rule)</div>
          <div class="step-row">
            <div class="step-num">01</div>
            <div class="step-math">在 $\\triangle ABC$ 中，從頂點 $A$ 作高 $h$ 交 $\\overline{BC}$ 於 $D$ 點。</div>
            <div class="step-desc">將一般三角形切分為兩個直角三角形，這是幾何解題的核心思想。</div>
          </div>
          <div class="step-row">
            <div class="step-num">02</div>
            <div class="step-math">令 $\\overline{CD} = x$，則 $\\overline{BD} = a - x$。<br>由畢氏定理：$h^2 = b^2 - x^2$ 且 $h^2 = c^2 - (a - x)^2$。</div>
            <div class="step-desc">利用共用的「高」建立等式。</div>
          </div>
          <div class="step-row">
            <div class="step-num">03</div>
            <div class="step-math">展開：$b^2 - x^2 = c^2 - (a^2 - 2ax + x^2)$<br>化簡得：$b^2 = c^2 - a^2 + 2ax$</div>
            <div class="step-desc">代數展開。</div>
          </div>
          <div class="step-row">
            <div class="step-num">04</div>
            <div class="step-math">在 $\\triangle ACD$ 中，$\\cos C = \\frac{x}{b} \\implies x = b \\cos C$。</div>
            <div class="step-desc">引入三角函數連結邊與角。</div>
          </div>
          <div class="step-row">
            <div class="step-num">05</div>
            <div class="step-math">代回：$b^2 = c^2 - a^2 + 2a(b \\cos C)$<br>移項得終極公式：<strong>$c^2 = a^2 + b^2 - 2ab \\cos C$</strong></div>
            <div class="step-desc">這就是餘弦定理。學測常考：當已知三邊長，必用此公式求角度。</div>
          </div>
        </div>

        <h3>2. 必考考點：三角函數疊合 (Superposition)</h3>
        <p>求 $y = a\\sin\\theta + b\\cos\\theta$ 的極值是數 A 的超高頻考點。</p>
        <div class="step-box">
          <div class="step-box-title">🌊 疊合公式推導</div>
          <div class="step-row">
            <div class="step-num">01</div>
            <div class="step-math">提取常數 $\\sqrt{a^2+b^2}$：<br>$y = \\sqrt{a^2+b^2} \\left( \\frac{a}{\\sqrt{a^2+b^2}}\\sin\\theta + \\frac{b}{\\sqrt{a^2+b^2}}\\cos\\theta \\right)$</div>
            <div class="step-desc">構造出斜邊為 $\\sqrt{a^2+b^2}$ 的直角三角形。</div>
          </div>
          <div class="step-row">
            <div class="step-num">02</div>
            <div class="step-math">令 $\\cos\\phi = \\frac{a}{\\sqrt{a^2+b^2}}, \\sin\\phi = \\frac{b}{\\sqrt{a^2+b^2}}$。</div>
            <div class="step-desc">定義輔助角 $\\phi$。</div>
          </div>
          <div class="step-row">
            <div class="step-math">代入：$y = \\sqrt{a^2+b^2} (\\sin\\theta\\cos\\phi + \\cos\\theta\\sin\\phi)$<br>由和角公式得：<strong>$y = \\sqrt{a^2+b^2} \\sin(\\theta + \\phi)$</strong></div>
            <div class="step-desc">因為 $\\sin$ 的最大值為 1，故極值為 $\\pm\\sqrt{a^2+b^2}$。學測常配合限制角度範圍考局部極值。</div>
          </div>
        </div>
      </section>`
  },
  {
    file: 'math-b.html',
    id: 'gsat-deep-mb',
    label: '拾壹、學測專武：生活應用',
    content: `
      <section id="gsat-deep-mb" class="content-section animate-fade-in-up mt-8">
        <h2>拾壹、學測專武：歷屆大考趨勢與生活應用剖析 🎯</h2>
        
        <h3>1. 期望值與保險/賭局模型</h3>
        <p>數 B 高度聚焦於「生活情境題」。期望值的概念幾乎每年必考，尤其是「保險公司如何定價」或「賭局是否公平」。</p>
        <div class="step-box">
          <div class="step-box-title">💰 保費計算模型</div>
          <div class="step-row">
            <div class="step-num">情境</div>
            <div class="step-math">某保險公司推出一年期意外險，保額 100 萬元。已知該年齡層意外死亡機率為 0.002。若公司期望每份保單能獲利 500 元，保費應訂為多少？</div>
            <div class="step-desc">這是學測經典題型，考驗期望值列式。</div>
          </div>
          <div class="step-row">
            <div class="step-num">01</div>
            <div class="step-math">令保費為 $x$ 元。</div>
            <div class="step-desc">設立未知數。</div>
          </div>
          <div class="step-row">
            <div class="step-num">02</div>
            <div class="step-math">列出保險公司的收益期望值方程式：<br>$E(X) = (x) \\times (1 - 0.002) + (x - 1000000) \\times 0.002$</div>
            <div class="step-desc">（沒出事的保費收入）＋（出事的理賠虧損）。</div>
          </div>
          <div class="step-row">
            <div class="step-num">03</div>
            <div class="step-math">展開化簡：$E(X) = x - 2000$。</div>
            <div class="step-desc">注意 $x$ 項的係數剛好會是 1。這是一個速算技巧。</div>
          </div>
          <div class="step-row">
            <div class="step-num">04</div>
            <div class="step-math">令 $E(X) = 500 \\implies x - 2000 = 500 \\implies x = 2500$。</div>
            <div class="step-desc">得解。保費為 2500 元。</div>
          </div>
        </div>

        <h3>2. 迴歸直線的實務應用</h3>
        <p>給定一組數據求迴歸直線 $y = mx + k$。學測通常不會考繁雜的數字，而是考「觀念」。</p>
        <ul>
          <li><strong>必考觀念 1：必定過平均數點</strong>。迴歸直線一定會通過 $(\\mu_X, \\mu_Y)$。解題時把平均數代入即可秒殺許多選項。</li>
          <li><strong>必考觀念 2：斜率公式</strong>。斜率 $m = r \\frac{\\sigma_Y}{\\sigma_X}$。這代表如果 $X$ 和 $Y$ 相關性 $r$ 很低，迴歸直線會趨近於水平（無預測力）。</li>
        </ul>
      </section>`
  },
  {
    file: 'social.html',
    id: 'gsat-deep-so',
    label: '拾壹、學測專武：跨科素養題',
    content: `
      <section id="gsat-deep-so" class="content-section animate-fade-in-up mt-8">
        <h2>拾壹、學測專武：歷屆大考趨勢與跨科素養解析 🎯</h2>
        
        <p>108課綱社會科最大的特色是「合科考題（素養題）」。你不能再單獨把歷史、地理、公民分開讀，必須學會「融會貫通」。</p>

        <h3>1. 歷史 × 地理：氣候與大航海時代的貿易網</h3>
        <p>學測極常出現一張「古代航海圖」，要求你利用季風知識來判斷歷史事件的時間或航向。</p>
        <div class="step-box">
          <div class="step-box-title">🚢 季風貿易破解法</div>
          <div class="step-row">
            <div class="step-num">地理</div>
            <div class="step-math"><strong>季風機制</strong>：亞洲東部冬季吹「東北季風」，夏季吹「西南季風」。</div>
            <div class="step-desc">這是由於海陸比熱差異與行星風系季移造成。</div>
          </div>
          <div class="step-row">
            <div class="step-num">歷史</div>
            <div class="step-math"><strong>明清帆船貿易</strong>：中國商船若要前往東南亞（南洋）貿易，必須順風航行。</div>
            <div class="step-desc">結合歷史背景，當時動力僅靠風帆。</div>
          </div>
          <div class="step-row">
            <div class="step-num">考點</div>
            <div class="step-math"><strong>結論推導</strong>：商船必然在「冬季（東北季風）」從中國出發南下，並在「夏季（西南季風）」從東南亞滿載香料返回中國。</div>
            <div class="step-desc">學測常問：「某商人記錄他正順風返回泉州，請問此時最可能為幾月？」答案選夏季月份。</div>
          </div>
        </div>

        <h3>2. 公民 × 地理：環境外部性與碳權交易</h3>
        <p>全球暖化與永續發展（SDGs）是公民與地理必考的交集。</p>
        <ul>
          <li><strong>地理觀點</strong>：溫室氣體增加導致極端氣候，影響農業區位與海岸線。重點在「空間分佈的變遷」。</li>
          <li><strong>公民觀點</strong>：工廠排放廢氣是「外部成本（負的外部性）」，導致市場生產過多。解決方法是將其「內部化」，例如：
            <ul>
              <li><strong>皮古稅（碳稅）</strong>：政府直接定價，圖形上表現為供給曲線左移。</li>
              <li><strong>碳排放交易機制（Cap and Trade）</strong>：政府訂定總量，讓市場決定價格（寇斯定理的應用，釐清財產權）。</li>
            </ul>
          </li>
        </ul>
      </section>`
  },
  {
    file: 'science.html',
    id: 'gsat-deep-sc',
    label: '拾玖、學測專武：推導與實驗',
    content: `
      <section id="gsat-deep-sc" class="content-section animate-fade-in-up mt-8">
        <h2>拾玖、學測專武：歷屆大考趨勢與深度推導 🎯</h2>
        
        <h3>1. 探究與實作：實驗數據的精準判讀</h3>
        <p>自然科混合題必定會考一篇長篇實驗文章。得分關鍵在於分辨三種變因：</p>
        <ul>
          <li><strong>操縱變因（自變數）</strong>：實驗中唯一改變的條件（通常是圖表的 X 軸）。</li>
          <li><strong>應變變因（依變數）</strong>：隨著操縱變因改變而產生的結果（通常是圖表的 Y 軸）。</li>
          <li><strong>控制變因</strong>：實驗中必須保持不變的條件。學測常考：「為了證明 A 影響 B，必須將哪幾個選項設為控制變因？」</li>
        </ul>

        <h3>2. 核心物理定律推導：克卜勒第三定律</h3>
        <p>學測不會考死背克卜勒常數，但會考其「物理機制」（萬有引力提供向心力）。</p>
        <div class="step-box">
          <div class="step-box-title">🪐 克卜勒第三定律推導</div>
          <div class="step-row">
            <div class="step-num">01</div>
            <div class="step-math">假設行星以圓軌道繞太陽運行，半徑為 $R$，週期為 $T$。<br>向心加速度公式：$a_c = \\frac{4\\pi^2 R}{T^2}$</div>
            <div class="step-desc">圓周運動的基礎公式，必背。</div>
          </div>
          <div class="step-row">
            <div class="step-num">02</div>
            <div class="step-math">牛頓萬有引力定律：$F_g = G \\frac{Mm}{R^2}$</div>
            <div class="step-desc">$M$ 為太陽質量，$m$ 為行星質量。</div>
          </div>
          <div class="step-row">
            <div class="step-num">03</div>
            <div class="step-math">萬有引力提供向心力（牛頓第二定律 $F=ma$）：<br>$G \\frac{Mm}{R^2} = m \\left( \\frac{4\\pi^2 R}{T^2} \\right)$</div>
            <div class="step-desc">注意：行星質量 $m$ 兩邊消去。這代表週期與行星本身質量無關！學測常考此觀念陷阱。</div>
          </div>
          <div class="step-row">
            <div class="step-num">04</div>
            <div class="step-math">移項整理得：<strong>$\\frac{R^3}{T^2} = \\frac{GM}{4\\pi^2} = \\text{定值}$</strong></div>
            <div class="step-desc">這就是克卜勒第三定律。該定值只和「中心星體（太陽）質量 $M$」有關。</div>
          </div>
        </div>

        <h3>3. 核心化學定律：理想氣體方程式</h3>
        <div class="step-box">
          <div class="step-box-title">🧪 理想氣體 $PV=nRT$ 的微觀與宏觀</div>
          <div class="step-row">
            <div class="step-num">宏觀</div>
            <div class="step-math">$PV = nRT$</div>
            <div class="step-desc">波以耳定律（$T$ 不變時 $P \\propto 1/V$）、查理定律（$P$ 不變時 $V \\propto T$）的統整。</div>
          </div>
          <div class="step-row">
            <div class="step-num">微觀</div>
            <div class="step-math">氣體動能：$E_k = \\frac{3}{2}kT = \\frac{1}{2}mv^2$</div>
            <div class="step-desc">學測超高頻考點：「氣體的平均動能只與絕對溫度 $T$ 成正比」。溫度越高，分子運動速率 $v$ 越快。不同氣體若溫度相同，平均動能必定相同，但質量大的氣體速率較慢。</div>
          </div>
        </div>
      </section>`
  }
];

subjects.forEach(subj => {
  const filePath = path.join(__dirname, '..', 'subjects', subj.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // Inject sidebar nav item before </ul>
  const navItem = `<li><a href="#${subj.id}">${subj.label}</a></li>\n        `;
  html = html.replace(/(<\/ul>\s*<div[^>]*><a[^>]*>🎯)/i, navItem + '$1');

  // Inject content section before </main>
  html = html.replace(/(<\/main>)/i, subj.content + '\n      $1');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Injected GSAT Deep Content into ${subj.file}`);
});
