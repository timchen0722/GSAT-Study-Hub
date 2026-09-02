const fs = require('fs');
const path = require('path');

const maPath = path.join(__dirname, '..', 'subjects', 'math-a.html');
const mbPath = path.join(__dirname, '..', 'subjects', 'math-b.html');

let htmlA = fs.readFileSync(maPath, 'utf8');
let htmlB = fs.readFileSync(mbPath, 'utf8');

// =========================================================================
// 1. MATH A: Comprehensive Upgrades
// =========================================================================

// A1: 柯西不等式推導 (The exact block in the user's screenshot!)
const oldCauchyRegex = /<h4>柯西-施瓦茨不等式<\/h4>\s*<div class="formula-block">\s*<div class="formula-title">📐 柯西不等式推導<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepCauchyBlock = `<h4>柯西-施瓦茨不等式（幾何與代數完整嚴密推導）</h4>
          <div class="formula-block">
            <div class="formula-title">📐 柯西不等式：向量內積法詳細逐步推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">\\( \\vec{a} = (a_1, a_2), \\; \\vec{b} = (b_1, b_2) \\)</span>
              <span class="formula-explain">定義平面兩非零向量，其長度分別為 \\( |\\vec{a}| = \\sqrt{a_1^2 + a_2^2} \\)，\\( |\\vec{b}| = \\sqrt{b_1^2 + b_2^2} \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( \\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2 \\) 且 \\( \\vec{a} \\cdot \\vec{b} = |\\vec{a}||\\vec{b}|\\cos\\theta \\)</span>
              <span class="formula-explain">內積同時具備坐標計算形式與幾何夾角定義（\\( \\theta \\) 為夾角，\\( 0^\\circ \\le \\theta \\le 180^\\circ \\)）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">\\( |\\cos\\theta| \\leq 1 \\)</span>
              <span class="formula-explain">餘弦函數的實數值域必然落在 \\([-1, 1]\\) 區間內</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( |\\vec{a} \\cdot \\vec{b}| = |\\vec{a}||\\vec{b}||\\cos\\theta| \\leq |\\vec{a}||\\vec{b}| \\cdot 1 = |\\vec{a}||\\vec{b}| \\)</span>
              <span class="formula-explain">兩邊取絕對值，利用 \\( |\\cos\\theta| \\le 1 \\) 放大右式，得內積絕對值不超過長度乘積</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( |\\vec{a} \\cdot \\vec{b}|^2 \\leq (|\\vec{a}||\\vec{b}|)^2 = |\\vec{a}|^2|\\vec{b}|^2 \\)</span>
              <span class="formula-explain">因為不等式兩端皆為非負實數，同時平方後不等號方向維持不變</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">\\( (a_1b_1 + a_2b_2)^2 \\leq (a_1^2 + a_2^2)(b_1^2 + b_2^2) \\)</span>
              <span class="formula-explain">將坐標代入：\\( |\\vec{a}\\cdot\\vec{b}|^2 = (a_1b_1+a_2b_2)^2 \\)，\\( |\\vec{a}|^2 = a_1^2+a_2^2 \\)，\\( |\\vec{b}|^2 = b_1^2+b_2^2 \\)，證得柯西不等式！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">等號成立條件：\\( |\\cos\\theta| = 1 \\iff \\theta = 0^\\circ \\text{ 或 } 180^\\circ \\iff \\vec{a} \\parallel \\vec{b} \\iff \\frac{a_1}{b_1} = \\frac{a_2}{b_2} \\)</span>
              <span class="formula-explain">唯有兩向量平行（共線成比例）時，夾角餘弦才能取到邊界 ±1，此時等號成立</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">8</span>
              <span class="formula-math">空間三維推廣：\\( (a_1b_1 + a_2b_2 + a_3b_3)^2 \\leq (a_1^2 + a_2^2 + a_3^2)(b_1^2 + b_2^2 + b_3^2) \\)</span>
              <span class="formula-explain">設 \\( \\vec{a} = (a_1, a_2, a_3), \\vec{b} = (b_1, b_2, b_3) \\)，長度與內積幾何意義完全相同，等號成立於 \\( \\frac{a_1}{b_1} = \\frac{a_2}{b_2} = \\frac{a_3}{b_3} \\)</span>
            </div>
          </div>`;

htmlA = htmlA.replace(oldCauchyRegex, deepCauchyBlock);

// A2: 正弦定理詳細推導
const oldSineRegex = /<div class="formula-block">\s*<div class="formula-title">📐 正弦定理<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepSineBlock = `<div class="formula-block">
            <div class="formula-title">📐 正弦定理（Law of Sines）：外接圓直徑幾何法詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">作 \\( \\triangle ABC \\) 的外接圓，圓心設為 \\( O \\)，半徑設為 \\( R \\)</span>
              <span class="formula-explain">目標證明三角形任意邊長與其對角正弦之比皆等於外接圓直徑 \\( 2R \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">情況一（直角）：若 \\( \\angle A = 90^\\circ \\)，則對邊 \\( a \\) 為直徑 \\( 2R \\)</span>
              <span class="formula-explain">因為 \\( \\sin 90^\\circ = 1 \\)，所以 \\( \\frac{a}{\\sin A} = \\frac{2R}{1} = 2R \\)，定理自然成立</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">情況二（銳角）：過頂點 \\( B \\) 作直徑 \\( BD = 2R \\)，連接 \\( CD \\)</span>
              <span class="formula-explain">構造出包含邊 \\( a \\)（即線段 \\( BC \\)）的輔助直角三角形 \\( \\triangle BCD \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( \\angle BCD = 90^\\circ \\) 且 \\( \\angle D = \\angle A \\)</span>
              <span class="formula-explain">直徑 \\( BD \\) 所對的圓周角為直角（\\( \\angle BCD = 90^\\circ \\)）；同弧 \\( BC \\) 所對的圓周角相等（\\( \\angle D = \\angle A \\)）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">在直角 \\( \\triangle BCD \\) 中：\\( \\sin D = \\frac{\\text{對邊}}{\\text{斜邊}} = \\frac{a}{BD} = \\frac{a}{2R} \\)</span>
              <span class="formula-explain">由銳角三角比正弦的定義直接計算</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">\\( \\sin A = \\frac{a}{2R} \\implies \\frac{a}{\\sin A} = 2R \\)</span>
              <span class="formula-explain">將 \\( \\angle D = \\angle A \\) 代入，十字相乘移項得到對邊與正弦之比等於 \\( 2R \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">情況三（鈍角）：同理可得 \\( \\angle D = 180^\\circ - \\angle A \\implies \\sin D = \\sin(180^\\circ - A) = \\sin A \\)</span>
              <span class="formula-explain">圓內接四邊形對角互補，正弦值完全相等，鈍角情況依然成立</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">8</span>
              <span class="formula-math">\\( \\therefore \\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R \\)</span>
              <span class="formula-explain">對頂點 \\( B \\) 與 \\( C \\) 重複相同構造，同理可證全等式，得證正弦定理！</span>
            </div>
          </div>`;

htmlA = htmlA.replace(oldSineRegex, deepSineBlock);

// A3: 2x2 反矩陣推導 (待定係數聯立嚴密推導)
const oldInvRegex = /<div class="formula-block">\s*<div class="formula-title">📐 2×2 反矩陣推導<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepInvBlock = `<div class="formula-block">
            <div class="formula-title">📐 2×2 反矩陣公式：待定係數聯立方程組詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">設 \\( A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\)，設其反矩陣為 \\( X = \\begin{pmatrix} x & y \\\\ z & w \\end{pmatrix} \\)</span>
              <span class="formula-explain">依反矩陣定義，必須滿足 \\( AX = I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\begin{pmatrix} x & y \\\\ z & w \\end{pmatrix} = \\begin{pmatrix} ax + bz & ay + bw \\\\ cx + dz & cy + dw \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\)</span>
              <span class="formula-explain">依矩陣乘法展開各列各行元素</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">解第 1 行未知數：\\( \\begin{cases} ax + bz = 1 & \\text{--- (1)} \\\\ cx + dz = 0 & \\text{--- (2)} \\end{cases} \\)</span>
              <span class="formula-explain">對應單位矩陣第 1 行 \\( \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">由 (2) 得 \\( z = -\\frac{c}{d}x \\)，代入 (1)：\\( ax - b\\frac{c}{d}x = 1 \\implies \\frac{ad - bc}{d}x = 1 \\)</span>
              <span class="formula-explain">利用代入消去法解聯立方程式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">當 \\( \\det(A) = ad - bc \\neq 0 \\) 時：\\( x = \\frac{d}{ad-bc}, \\; z = -\\frac{c}{ad-bc} \\)</span>
              <span class="formula-explain">解得未知矩陣第 1 行的兩個元素</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">解第 2 行未知數：\\( \\begin{cases} ay + bw = 0 & \\text{--- (3)} \\\\ cy + dw = 1 & \\text{--- (4)} \\end{cases} \\implies y = -\\frac{b}{ad-bc}, \\; w = \\frac{a}{ad-bc} \\)</span>
              <span class="formula-explain">同理消去未知數，解得第 2 行元素</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">\\( A^{-1} = \\begin{pmatrix} \\frac{d}{ad-bc} & -\\frac{b}{ad-bc} \\\\ -\\frac{c}{ad-bc} & \\frac{a}{ad-bc} \\end{pmatrix} = \\frac{1}{ad-bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\)</span>
              <span class="formula-explain">提出公因數 \\( \\frac{1}{ad-bc} \\)，完美推得「主對角交換、副對角變號、除以行列式」的經典公式！</span>
            </div>
          </div>`;

htmlA = htmlA.replace(oldInvRegex, deepInvBlock);

// A4: 克拉瑪公式 (加減消去嚴密推導)
const oldCramerRegex = /<div class="formula-block">\s*<div class="formula-title">📐 克拉瑪公式<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepCramerBlock = `<div class="formula-block">
            <div class="formula-title">📐 克拉瑪公式（Cramer's Rule）：消去法代數嚴密推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">聯立方程式：\\( \\begin{cases} ax + by = e & \\text{--- (1)} \\\\ cx + dy = f & \\text{--- (2)} \\end{cases} \\)</span>
              <span class="formula-explain">二元一次方程組一般式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">消去 \\( y \\)：(1) 式乘 \\( d \\)，(2) 式乘 \\( b \\) 得 \\( \\begin{cases} adx + bdy = ed \\\\ bcx + bdy = bf \\end{cases} \\)</span>
              <span class="formula-explain">將 \\( y \\) 的係數通分統一為 \\( bd \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">兩式相減：\\( (ad - bc)x = ed - bf \\)</span>
              <span class="formula-explain">\\( bdy \\) 互相抵消，留下 \\( x \\) 的係數項與常數項</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( D = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = ad - bc, \\quad D_x = \\begin{vmatrix} e & b \\\\ f & d \\end{vmatrix} = ed - bf \\)</span>
              <span class="formula-explain">將兩側係數對應為二階行列式形式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">當 \\( D \\neq 0 \\) 時：\\( x = \\frac{D_x}{D} = \\frac{ed - bf}{ad - bc} \\)</span>
              <span class="formula-explain">兩邊同除以係數行列式 \\( D \\)，解得 \\( x \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">消去 \\( x \\)：(1) 式乘 \\( c \\)，(2) 式乘 \\( a \\) 得 \\( \\begin{cases} acx + bcy = ec \\\\ acx + ady = af \\end{cases} \\implies (ad - bc)y = af - ec \\)</span>
              <span class="formula-explain">同理消去 \\( x \\)，求得 \\( y \\) 的係數關係</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">\\( D_y = \\begin{vmatrix} a & e \\\\ c & f \\end{vmatrix} = af - ec \\implies y = \\frac{D_y}{D} \\)</span>
              <span class="formula-explain">對應 \\( D_y \\) 行列式，推得克拉瑪公式解！若 \\( D = 0 \\)，則可能無解或無限多組解。</span>
            </div>
          </div>`;

htmlA = htmlA.replace(oldCramerRegex, deepCramerBlock);

// A5: 橢圓方程式推導
const oldEllipseRegex = /<div class="formula-block">\s*<div class="formula-title">📐 橢圓方程式<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepEllipseBlock = `<div class="formula-block">
            <div class="formula-title">📐 橢圓標準方程式 \\( \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\)：焦點距離和兩次平方推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">定義：平面上到兩焦點 \\( F_1(-c, 0), F_2(c, 0) \\) 的距離和為定值 \\( 2a \\)（\\( a > c > 0 \\)）</span>
              <span class="formula-explain">設橢圓上任意動點為 \\( P(x, y) \\)，依定義：\\( \\overline{PF_1} + \\overline{PF_2} = 2a \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( \\sqrt{(x + c)^2 + y^2} + \\sqrt{(x - c)^2 + y^2} = 2a \\)</span>
              <span class="formula-explain">套用兩點距離公式寫出幾何方程式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">移項：\\( \\sqrt{(x + c)^2 + y^2} = 2a - \\sqrt{(x - c)^2 + y^2} \\)</span>
              <span class="formula-explain">將其中一個根號移至右邊，準備進行第一次平方</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">第一次平方：\\( (x+c)^2 + y^2 = 4a^2 - 4a\\sqrt{(x-c)^2 + y^2} + (x-c)^2 + y^2 \\)</span>
              <span class="formula-explain">兩邊同時平方，左邊根號去掉，右邊展開乘積</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">展開消去 \\( x^2, c^2, y^2 \\)：\\( 2cx = 4a^2 - 4a\\sqrt{(x-c)^2+y^2} - 2cx \\implies a\\sqrt{(x-c)^2+y^2} = a^2 - cx \\)</span>
              <span class="formula-explain">移項整理並兩邊同除以 4</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">第二次平方：\\( a^2[(x-c)^2 + y^2] = (a^2 - cx)^2 \\implies a^2(x^2 - 2cx + c^2 + y^2) = a^4 - 2a^2cx + c^2x^2 \\)</span>
              <span class="formula-explain">徹底消去根號，展開兩側</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">消去交叉項 \\( -2a^2cx \\)：\\( (a^2 - c^2)x^2 + a^2y^2 = a^2(a^2 - c^2) \\)</span>
              <span class="formula-explain">同類項合併提出公因式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">8</span>
              <span class="formula-math">三角形邊長關係 \\( 2a > 2c \\implies a > c \\implies a^2 - c^2 > 0 \\)。令 \\( b^2 = a^2 - c^2 \\)</span>
              <span class="formula-explain">定義短半軸長度 \\( b \\)，原式化為 \\( b^2x^2 + a^2y^2 = a^2b^2 \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">9</span>
              <span class="formula-math">兩邊同除以 \\( a^2b^2 \\)：\\( \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 \\)</span>
              <span class="formula-explain">證畢！長軸長 \\( 2a \\)，短軸長 \\( 2b \\)，焦點坐標 \\( (\\pm c, 0) \\) 滿足 \\( a^2 = b^2 + c^2 \\)。</span>
            </div>
          </div>`;

htmlA = htmlA.replace(oldEllipseRegex, deepEllipseBlock);

fs.writeFileSync(maPath, htmlA, 'utf8');
console.log('math-a.html successfully upgraded with exhaustive step-by-step derivations! Size: ' + Buffer.byteLength(htmlA, 'utf8'));

// =========================================================================
// 2. MATH B: Comprehensive Upgrades
// =========================================================================

// B1: 直線方程式點斜式與斜截式推導
const oldMbLineRegex = /<div class="formula-block">\s*<div class="formula-title">📐 直線方程式<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepMbLineBlock = `<div class="formula-block">
            <div class="formula-title">📐 直線方程式：斜率定義與點斜式嚴密推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">設直線上已知定點 \\( P_0(x_0, y_0) \\)，直線斜率為 \\( m \\)</span>
              <span class="formula-explain">斜率 \\( m = \\frac{\\Delta y}{\\Delta x} \\) 反映直線的傾斜程度</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">設直線上任意動點為 \\( P(x, y) \\quad (x \\neq x_0) \\)</span>
              <span class="formula-explain">直線上的所有點，其任兩點間的割線斜率均恆為定值 \\( m \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">依斜率定義：\\( \\frac{y - y_0}{x - x_0} = m \\)</span>
              <span class="formula-explain">坐標差之比等於斜率</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">兩邊同乘 \\( (x - x_0) \\)：\\( y - y_0 = m(x - x_0) \\)</span>
              <span class="formula-explain">這就是大考最核心的「點斜式」！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">若定點為 y 軸截距點 \\( (0, k) \\)，代入得 \\( y - k = m(x - 0) \\implies y = mx + k \\)</span>
              <span class="formula-explain">推得「斜截式」，其中 \\( m \\) 為斜率，\\( k \\) 為 y 軸截距。</span>
            </div>
          </div>`;

htmlB = htmlB.replace(oldMbLineRegex, deepMbLineBlock);

// B2: 相關係數 -1 <= r <= 1 柯西不等式推導
const oldMbCorrRegex = /<div class="formula-block">\s*<div class="formula-title">📐 相關係數<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepMbCorrBlock = `<div class="formula-block">
            <div class="formula-title">📐 皮爾森相關係數 \\( -1 \\leq r \\leq 1 \\)：柯西不等式嚴密推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">定義離均差：\\( X_i = x_i - \\bar{x}, \\; Y_i = y_i - \\bar{y} \\)</span>
              <span class="formula-explain">將數據平移使得平均值為零，簡化代數符號</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">皮爾森相關係數定義：\\( r = \\frac{\\sum X_i Y_i}{\\sqrt{\\sum X_i^2} \\sqrt{\\sum Y_i^2}} \\)</span>
              <span class="formula-explain">分子為共變異量，分母為兩者標準差乘積（標準化後的共變異數）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">構造兩向量：\\( \\vec{U} = (X_1, X_2, \\dots, X_n) \\)，\\( \\vec{V} = (Y_1, Y_2, \\dots, Y_n) \\)</span>
              <span class="formula-explain">將 n 筆數據的離均差分別視為 n 維空間中的向量</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( \\vec{U} \\cdot \\vec{V} = \\sum X_i Y_i, \\; |\\vec{U}| = \\sqrt{\\sum X_i^2}, \\; |\\vec{V}| = \\sqrt{\\sum Y_i^2} \\)</span>
              <span class="formula-explain">相關係數本質上就是兩離均差向量的夾角餘弦：\\( r = \\frac{\\vec{U} \\cdot \\vec{V}}{|\\vec{U}||\\vec{V}| = \\cos\\theta \\)！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">對 \\( \\vec{U}, \\vec{V} \\) 套用柯西不等式：\\( (\\sum X_i Y_i)^2 \\leq (\\sum X_i^2)(\\sum Y_i^2) \\)</span>
              <span class="formula-explain">由內積絕對值不超過長度乘積保證</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">兩邊除以分母：\\( r^2 = \\left(\\frac{\\sum X_i Y_i}{\\sqrt{\\sum X_i^2}\\sqrt{\\sum Y_i^2}}\\right)^2 \\leq 1 \\implies -1 \\leq r \\leq 1 \\)</span>
              <span class="formula-explain">完美證得相關係數必介於 -1 與 1 之間！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">等號成立條件：\\( r = \\pm 1 \\iff \\vec{V} = c\\vec{U} \\iff y_i - \\bar{y} = c(x_i - \\bar{x}) \\)</span>
              <span class="formula-explain">唯有所有數據點 \\( (x_i, y_i) \\) 嚴格落在同一條直線上時，才能達到完全正相關 (r=1) 或完全負相關 (r=-1)！</span>
            </div>
          </div>`;

htmlB = htmlB.replace(oldMbCorrRegex, deepMbCorrBlock);

fs.writeFileSync(mbPath, htmlB, 'utf8');
console.log('math-b.html successfully upgraded with exhaustive step-by-step derivations! Size: ' + Buffer.byteLength(htmlB, 'utf8'));
