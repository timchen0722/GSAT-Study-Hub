const fs = require('fs');
const path = require('path');

const mbPath = path.join(__dirname, '..', 'subjects', 'math-b.html');
let html = fs.readFileSync(mbPath, 'utf8');

// 1. CH1 (數與式)
const newCh1 = `
        <section class="content-section" id="ch1">
          <h2>📌 壹、數與式深入解析與實戰</h2>
          <p>數與式是高中數學的底座。數 B 重點在於「實數的幾何意涵」、「分點公式」與「絕對值不等式的距離解法」。</p>

          <h3>一、實數系架構與小數特徵</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>數的分類</th>
                <th>數學定義特徵</th>
                <th>小數化型態</th>
                <th>大考判定法則與陷阱</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>有理數 $\\mathbb{Q}$</strong></td>
                <td>可化為整數之比 $\\frac{p}{q}$（$p, q \\in \\mathbb{Z}, q \\ne 0$）</td>
                <td><strong>有限小數</strong> 或 <strong>循環小數</strong></td>
                <td>最簡分數 $\\frac{p}{q}$ 能化為有限小數的充要條件：<strong>分母 $q$ 的質因數僅有 2 或 5</strong>。</td>
              </tr>
              <tr>
                <td><strong>無理數</strong></td>
                <td>不可表為兩整數之比的實數（如 $\\sqrt{2}, \\pi$）</td>
                <td><strong>無限不循環小數</strong></td>
                <td>
                  • 有理數具<strong>封閉性</strong>（加減乘除仍為有理數）。<br>
                  • 無理數加無理數<strong>不保證</strong>為無理數（如 $\\sqrt{2} + (-\\sqrt{2}) = 0$）。
                </td>
              </tr>
            </tbody>
          </table>

          <h3>二、數線分點公式與絕對值幾何意義</h3>
          <div class="step-box">
            <div class="step-box-title">📏 數線分點與距離解題心法</div>
            <div class="step-row">
              <div class="step-num">內分點公式</div>
              <div class="step-math">若點 $P(x)$ 內分線段 $AB$ 成比 $m : n$，則：$$x = \\frac{n a + m b}{m + n}$$</div>
              <div class="step-desc">交叉相乘：左邊比例乘右邊坐標，右邊比例乘左邊坐標。</div>
            </div>
            <div class="step-row">
              <div class="step-num">絕對值幾何</div>
              <div class="step-math"><strong>$|x - c| \\le r$ 代表數線上點 $x$ 到中心 $c$ 的距離不超過半徑 $r$</strong></div>
              <div class="step-desc">
                解雙向不等式 $a \\le x \\le b$ 時，取中心點 $c = \\frac{a+b}{2}$，半徑 $r = \\frac{b-a}{2}$，即可立即化為：<br>
                $$|x - c| \\le r$$
              </div>
            </div>
          </div>
        </section>
`;

// 2. CH3 (指對數)
const newCh3 = `
        <section class="content-section" id="ch3">
          <h2>📌 參、指數與對數生活應用與尺度模型</h2>
          <p>數 B 大考指對數極度重視「對數尺度（Logarithmic Scale）」在生活科學中的轉換，如地震規模、音量分貝與人口指數增長。</p>

          <h3>一、常用對數首數與尾數的數字密碼</h3>
          <p>任意正實數 $N$ 的常用對數可拆解為整數部分 $n$（首數）與純小數部分 $\\alpha$（尾數）：$$\\log_{10} N = n + \\alpha \\quad (n \\in \\mathbb{Z}, 0 \\le \\alpha < 1)$$</p>
          <table class="data-table">
            <thead>
              <tr>
                <th>對數成分</th>
                <th>數學意涵</th>
                <th>解讀與應用技巧</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>首數 $n$</strong></td>
                <td>決定真數 $N$ 的<strong>「位數」或「小數點後第幾位非零」</strong></td>
                <td>
                  • 若 $n \\ge 0$：真數 $N$ 的整數位數為 <strong>$n + 1$ 位數</strong>（例如 $\\log N = 5.3$ $\\rightarrow$ 6 位數）。<br>
                  • 若 $n < 0$：真數 $N$ 在小數點後第 <strong>$|n|$ 位開始出現不為 0 的數字</strong>。
                </td>
              </tr>
              <tr>
                <td><strong>尾數 $\\alpha$</strong></td>
                <td>決定真數 $N$ 的<strong>「最高位數字（Leading Digit）」</strong></td>
                <td>
                  查對數表比較：$\\log 2 \\approx 0.3010$，$\\log 3 \\approx 0.4771$，$\\log 7 \\approx 0.8451$。<br>
                  若尾數 $0.3010 \\le \\alpha < 0.4771$，則真數最高位數字必為 2！
                </td>
              </tr>
            </tbody>
          </table>

          <h3>二、生活中的對數尺度四大經典考題</h3>
          <div class="formula-block">
            <div class="formula-title">🔊 大考四大對數尺度生活模型</div>
            <p>• <strong>地震芮氏規模 $M$</strong>：能量差公式 $\\log E_1 - \\log E_2 = 1.5(M_1 - M_2)$。規模每增加 1，釋放能量約放大 $10^{1.5} \\approx 31.6$ 倍；規模每增加 2，能量放大 $10^3 = 1000$ 倍！<br>
               • <strong>音量分貝 (dB)</strong>：$d = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$。分貝每增加 10 dB，聲音物理強度 $I$ 擴大 10 倍；增加 20 dB 擴大 100 倍。<br>
               • <strong>酸鹼值 (pH)</strong>：$\\text{pH} = -\\log_{10}[\\text{H}^+]$。pH 值每下降 1，氫離子濃度增大 10 倍。<br>
               • <strong>星等公式</strong>：亮度比公式 $m_1 - m_2 = -2.5 \\log_{10}\\left(\\frac{L_1}{L_2}\\right)$。星等差 5 等，亮度恰好相差 100 倍。</p>
          </div>
        </section>
`;

// 3. CH4 (三角函數)
const newCh4 = `
        <section class="content-section" id="ch4">
          <h2>📌 肆、三角函數基礎與生活立體測量</h2>
          <p>數 B 三角函數刪除了繁複的和差化積，轉而強調「正弦與餘弦定理在平面與空間測量中的實境應用」。</p>

          <h3>一、正弦定理與餘弦定理選用指南</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>定理名稱</th>
                <th>數學公式表達式</th>
                <th>適用已知條件</th>
                <th>大考解題直觀</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>正弦定理<br>(Law of Sines)</strong></td>
                <td>$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$<br>（$R$ 為外接圓半徑）</td>
                <td>• <strong>已知兩角及任一邊 (AAS / ASA)</strong><br>• <strong>已知兩邊及其中一邊對角 (SSA)</strong><br>• 題目提及<strong>外接圓半徑 $R$</strong></td>
                <td>「角對邊，找正弦」。若已知一對「對角與對邊」，首選正弦定理。</td>
              </tr>
              <tr>
                <td><strong>餘弦定理<br>(Law of Cosines)</strong></td>
                <td>• 邊長式：$$c^2 = a^2 + b^2 - 2ab\\cos C$$<br>• 角度式：$$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab}$$</td>
                <td>• <strong>已知兩邊及其夾角 (SAS)</strong><br>• <strong>已知三邊長 (SSS)</strong></td>
                <td>求兩目標點間直線距離的殺手鐧。三邊長已知時可直接求任意內角之餘弦值。</td>
              </tr>
              <tr>
                <td><strong>三角形面積公式</strong></td>
                <td>$$\\Delta = \\frac{1}{2}ab\\sin C$$</td>
                <td>已知兩邊長及其夾角 $\\angle C$</td>
                <td>免求高即可直接算面積。若搭配平行四邊形，面積即為 $ab\\sin C$。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、生活立體三角測量經典步驟</h3>
          <div class="step-box">
            <div class="step-box-title">🏔️ 測量山高或對岸不可到達目標三階法</div>
            <div class="step-row">
              <div class="step-num">Step 1：地面平面化</div>
              <div class="step-math">在地面上設立基線 $AB = d$，於 $A, B$ 兩點測量目標在地面投影點 $C$ 的方位角。</div>
              <div class="step-desc">利用地面三角形 $ABC$，透過正弦定理或餘弦定理先解出基點到投影點之地面距離 $\\overline{AC}$。</div>
            </div>
            <div class="step-row">
              <div class="step-num">Step 2：立體垂直化</div>
              <div class="step-math">在 $A$ 點測量山頂 $T$ 的仰角 $\\theta$。</div>
              <div class="step-desc">在鉛直直角三角形 $\\Delta TAC$ 中，山高即為：$$h = \\overline{AC} \\cdot \\tan\\theta$$</div>
            </div>
          </div>
        </section>
`;

// 4. CH5 (排列組合)
const newCh5 = `
        <section class="content-section" id="ch5">
          <h2>📌 伍、排列組合分類與放球模型</h2>

          <h3>一、基本計數原理與常見限制排列</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>排列問題類型</th>
                <th>解題核心策略</th>
                <th>經典題型實例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>相鄰問題</strong></td>
                <td><strong>「綑綁法」</strong>：將必須相鄰之元素視為一個整體，排列後再乘上內部元素之自排數。</td>
                <td>甲、乙兩人必須相鄰排成一列 $\\rightarrow$ 視為一體，再乘 $2!$。</td>
              </tr>
              <tr>
                <td><strong>分開問題（不相鄰）</strong></td>
                <td><strong>「插空法」</strong>：先排其他不受限制之元素，再將不得相鄰者插入元素兩端及夾縫空隙中。</td>
                <td>男生 4 人與女生 3 人排隊，女生任兩人不得相鄰 $\\rightarrow$ 先排男生（$4!$ 種），再將 3 女插入 5 個空隙（$P^5_3$ 種）。</td>
              </tr>
              <tr>
                <td><strong>順序已定問題</strong></td>
                <td>視為<strong>相同物排列</strong>，或直接以組合選位置。</td>
                <td>甲排在乙的前面 $\\rightarrow$ 總排列數除以 $2!$。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、重複組合 $H_n^r$ 與非負整數解模型</h3>
          <div class="formula-block">
            <div class="formula-title">📦 重複組合與隔板法轉換</div>
            <p>從 $n$ 種相異物品中，允許重複選取 $r$ 件之組合數為：<br>
               $$H_n^r = C_{n+r-1}^r$$<br>
               • <strong>非負整數解模型</strong>：方程式 $x_1 + x_2 + \\dots + x_n = r$（$x_i \\ge 0$）之非負整數解個數，恰為 $H_n^r = C_{n+r-1}^r$。<br>
               • <strong>正整數解模型</strong>：若要求 $x_i \\ge 1$，先給每人 1 個，剩餘 $r - n$ 個自由分配，解數為 $H_n^{r-n} = C_{r-1}^{n-1}$（等同於 $r-1$ 個空隙插 $n-1$ 塊隔板）。</p>
          </div>
        </section>
`;

html = html.replace(/<section class="content-section" id="ch1">[\s\S]*?<\/section>/i, newCh1);
html = html.replace(/<section class="content-section" id="ch3">[\s\S]*?<\/section>/i, newCh3);
html = html.replace(/<section class="content-section" id="ch4">[\s\S]*?<\/section>/i, newCh4);
html = html.replace(/<section class="content-section" id="ch5">[\s\S]*?<\/section>/i, newCh5);

fs.writeFileSync(mbPath, html, 'utf8');
console.log('math-b.html successfully deepened ch1, ch3, ch4, ch5! New size: ' + Buffer.byteLength(html, 'utf8'));
