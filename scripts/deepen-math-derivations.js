const fs = require('fs');
const path = require('path');

const maPath = path.join(__dirname, '..', 'subjects', 'math-a.html');
const mbPath = path.join(__dirname, '..', 'subjects', 'math-b.html');

let htmlA = fs.readFileSync(maPath, 'utf8');
let htmlB = fs.readFileSync(mbPath, 'utf8');

// =========================================================================
// 1. MATH A: Injections of Detailed Derivations
// =========================================================================

// Derivation 1: 算幾不等式 (AM-GM Inequality) & 柯西不等式 in Math A ch1
const amGmAndCauchyDerivation = `
          <h3>五、算幾不等式與柯西不等式嚴密推導</h3>
          
          <div class="formula-block">
            <div class="formula-title">📐 算幾不等式（AM-GM Inequality）詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">\\( a > 0, \\; b > 0 \\implies (\\sqrt{a} - \\sqrt{b})^2 \\geq 0 \\)</span>
              <span class="formula-explain">出發點：任何實數的平方必大於或等於零</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( (\\sqrt{a})^2 - 2\\sqrt{a}\\sqrt{b} + (\\sqrt{b})^2 \\geq 0 \\implies a - 2\\sqrt{ab} + b \\geq 0 \\)</span>
              <span class="formula-explain">展開差的平方公式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">\\( a + b \\geq 2\\sqrt{ab} \\implies \\frac{a+b}{2} \\geq \\sqrt{ab} \\)</span>
              <span class="formula-explain">兩邊同加 \(2\\sqrt{ab}\)，再同除以 2，得算術平均數 ≥ 幾何平均數</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">等號成立條件：\\( \\sqrt{a} - \\sqrt{b} = 0 \\iff a = b \\)</span>
              <span class="formula-explain">唯有兩數相等時，平方項才為零，算術平均數恰好等於幾何平均數</span>
            </div>
          </div>

          <div class="formula-block">
            <div class="formula-title">📐 二維柯西不等式（Cauchy-Schwarz Inequality）拉格朗日恆等式推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">\\( (a_1^2 + a_2^2)(b_1^2 + b_2^2) = a_1^2b_1^2 + a_1^2b_2^2 + a_2^2b_1^2 + a_2^2b_2^2 \\)</span>
              <span class="formula-explain">左邊完全展開</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( (a_1b_1 + a_2b_2)^2 = a_1^2b_1^2 + 2a_1b_1a_2b_2 + a_2^2b_2^2 \\)</span>
              <span class="formula-explain">右邊平方完全展開</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">\\( (a_1^2 + a_2^2)(b_1^2 + b_2^2) - (a_1b_1 + a_2b_2)^2 = a_1^2b_2^2 - 2a_1b_2a_2b_1 + a_2^2b_1^2 \\)</span>
              <span class="formula-explain">兩式相減，消去相同的 \(a_1^2b_1^2\) 與 \(a_2^2b_2^2\) 項</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( = (a_1b_2 - a_2b_1)^2 \\geq 0 \\)</span>
              <span class="formula-explain">配成完全平方式（拉格朗日恆等式），實數平方恆 ≥ 0</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( \\therefore (a_1^2 + a_2^2)(b_1^2 + b_2^2) \\geq (a_1b_1 + a_2b_2)^2 \\)</span>
              <span class="formula-explain">移項即證得柯西不等式。等號成立於 \(a_1b_2 - a_2b_1 = 0 \\iff \\frac{a_1}{b_1} = \\frac{a_2}{b_2}\)</span>
            </div>
          </div>
`;

// Derivation 2: 點到直線距離公式推導 in Math A ch1/ch2
const pointToLineDistanceDerivation = `
          <div class="formula-block">
            <div class="formula-title">📐 點到直線距離公式：向量正射影法詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">直線 \\( L: ax + by + c = 0 \\)，其法向量為 \\( \\vec{n} = (a, b) \\)</span>
              <span class="formula-explain">直線一般式中的係數 \((a, b)\) 必為直線的垂直法向量</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">在直線 \\( L \\) 上任取一點 \\( Q(x_0, y_0) \\)，滿足 \\( ax_0 + by_0 + c = 0 \\iff ax_0 + by_0 = -c \\)</span>
              <span class="formula-explain">點 \(Q\) 位於直線上，滿足直線方程式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">點 \\( P(x_1, y_1) \\) 到直線的距離 \\( d \\)，等於向量 \\( \\vec{QP} \\) 在法向量 \\( \\vec{n} \\) 上的正射影長度</span>
              <span class="formula-explain">幾何關係：點到線最短距離即為沿著垂直方向（法向量）的投影長度</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( d = \\frac{|\\vec{QP} \\cdot \\vec{n}|}{|\\vec{n}|} = \\frac{|(x_1 - x_0)a + (y_1 - y_0)b|}{\\sqrt{a^2 + b^2}} \\)</span>
              <span class="formula-explain">代入正射影長度公式：\(|\\vec{u} \\cdot \\vec{v}| / |\\vec{v}|\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( = \\frac{|ax_1 + by_1 - (ax_0 + by_0)|}{\\sqrt{a^2 + b^2}} = \\frac{|ax_1 + by_1 - (-c)|}{\\sqrt{a^2 + b^2}} = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}} \\)</span>
              <span class="formula-explain">將 \(ax_0 + by_0 = -c\) 代回，完美證得點到直線距離公式！</span>
            </div>
          </div>
`;

// Derivation 3: 三角函數和差角公式推導 in Math A ch4
const trigAdditionDerivation = `
          <div class="formula-block">
            <div class="formula-title">📐 餘弦差角公式 \\( \\cos(\\alpha - \\beta) \\)：單位圓向量內積推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">在坐標平面單位圓上，取兩點 \\( A(\\cos\\alpha, \\sin\\alpha) \\) 與 \\( B(\\cos\\beta, \\sin\\beta) \\)</span>
              <span class="formula-explain">定義兩向徑向量 \(\\vec{OA}\) 與 \(\\vec{OB}\)，其長度皆為 \(|\\vec{OA}| = |\\vec{OB}| = 1\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">兩向量的夾角為 \\( \\theta = \\alpha - \\beta \\)</span>
              <span class="formula-explain">有向角之差即為兩向徑向量的幾何夾角</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">幾何定義內積：\\( \\vec{OA} \\cdot \\vec{OB} = |\\vec{OA}||\\vec{OB}|\\cos(\\alpha - \\beta) = 1 \\cdot 1 \\cdot \\cos(\\alpha - \\beta) = \\cos(\\alpha - \\beta) \\)</span>
              <span class="formula-explain">依照內積的幾何定義計算</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">代數坐標內積：\\( \\vec{OA} \\cdot \\vec{OB} = (\\cos\\alpha)(\\cos\\beta) + (\\sin\\alpha)(\\sin\\beta) \\)</span>
              <span class="formula-explain">依照坐標對應相乘相加計算</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( \\therefore \\cos(\\alpha - \\beta) = \\cos\\alpha\\cos\\beta + \\sin\\alpha\\sin\\beta \\)</span>
              <span class="formula-explain">兩式相等即證得基本差角公式！以此為基石可迅速推導所有和差角與倍角公式。</span>
            </div>
          </div>

          <div class="formula-block">
            <div class="formula-title">📐 正弦和角公式 \\( \\sin(\\alpha + \\beta) \\) 衍生推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">利用餘角關係：\\( \\sin(\\alpha + \\beta) = \\cos\\left[90^\\circ - (\\alpha + \\beta)\\right] = \\cos\\left[(90^\\circ - \\alpha) - \\beta\\right] \\)</span>
              <span class="formula-explain">將正弦轉化為餘弦差角</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( = \\cos(90^\\circ - \\alpha)\\cos\\beta + \\sin(90^\\circ - \\alpha)\\sin\\beta \\)</span>
              <span class="formula-explain">套用剛剛證出的餘弦差角公式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">\\( = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta \\)</span>
              <span class="formula-explain">利用 \(\\cos(90^\\circ - \\alpha) = \\sin\\alpha\) 與 \(\\sin(90^\\circ - \\alpha) = \\cos\\alpha\) 還原，證畢！</span>
            </div>
          </div>
`;

// Derivation 4: 餘弦定理在 Math A ch4 的推導
const lawOfCosinesDerivation = `
          <div class="formula-block">
            <div class="formula-title">📐 餘弦定理（Law of Cosines）：平面幾何直角三角形推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">在 \\( \\Delta ABC \\) 中，自頂點 \\( A \\) 向對邊 \\( BC \\) 做高線 \\( AH \\)，長度設為 \\( h \\)</span>
              <span class="formula-explain">將任意三角形分割為兩個直角三角形 \(\\Delta ABH\) 與 \(\\Delta ACH\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">在 \\( \\Delta ACH \\) 中：高 \\( h = b\\sin C \\)，底邊 \\( \\overline{CH} = b\\cos C \\)</span>
              <span class="formula-explain">利用銳角三角比表示直角三角形兩股長</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">底邊剩餘部分：\\( \\overline{BH} = a - \\overline{CH} = a - b\\cos C \\)</span>
              <span class="formula-explain">邊長相減得到另一個直角三角形的底邊</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">在直角 \\( \\Delta ABH \\) 中套用畢氏定理：\\( c^2 = h^2 + \\overline{BH}^2 \\)</span>
              <span class="formula-explain">斜邊平方等於兩股平方和</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( c^2 = (b\\sin C)^2 + (a - b\\cos C)^2 = b^2\\sin^2 C + a^2 - 2ab\\cos C + b^2\\cos^2 C \\)</span>
              <span class="formula-explain">完全展開平方項</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">\\( c^2 = a^2 + b^2(\\sin^2 C + \\cos^2 C) - 2ab\\cos C = a^2 + b^2 - 2ab\\cos C \\)</span>
              <span class="formula-explain">利用 \(\\sin^2 C + \\cos^2 C = 1\)，順利推得餘弦定理！</span>
            </div>
          </div>
`;

// Derivation 5: 向量內積幾何坐標展開推導 in Math A ch5
const dotProductDerivation = `
          <div class="formula-block">
            <div class="formula-title">📐 平面向量內積公式 \\( \\vec{u} \\cdot \\vec{v} = u_1v_1 + u_2v_2 \\)：餘弦定理推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">設 \\( \\vec{u} = (u_1, u_2) \\)，\\( \\vec{v} = (v_1, v_2) \\)，夾角為 \\( \\theta \\)</span>
              <span class="formula-explain">兩向量起點皆置於原點，形成三角形，第三邊向量為 \(\\vec{w} = \\vec{u} - \\vec{v} = (u_1 - v_1, u_2 - v_2)\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">對此三角形套用餘弦定理：\\( |\\vec{u} - \\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 - 2|\\vec{u}||\\vec{v}|\\cos\\theta \\)</span>
              <span class="formula-explain">三角形三邊長度分別為 \(|\\vec{u}|, |\\vec{v}|, |\\vec{u} - \\vec{v}|\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">\\( (u_1 - v_1)^2 + (u_2 - v_2)^2 = (u_1^2 + u_2^2) + (v_1^2 + v_2^2) - 2|\\vec{u}||\\vec{v}|\\cos\\theta \\)</span>
              <span class="formula-explain">將左邊向量長度平方依坐標展開</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( u_1^2 - 2u_1v_1 + v_1^2 + u_2^2 - 2u_2v_2 + v_2^2 = u_1^2 + u_2^2 + v_1^2 + v_2^2 - 2|\\vec{u}||\\vec{v}|\\cos\\theta \\)</span>
              <span class="formula-explain">兩邊消去相同的平方項 \(u_1^2, u_2^2, v_1^2, v_2^2\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( -2(u_1v_1 + u_2v_2) = -2|\\vec{u}||\\vec{v}|\\cos\\theta \\implies |\\vec{u}||\\vec{v}|\\cos\\theta = u_1v_1 + u_2v_2 \\)</span>
              <span class="formula-explain">兩邊同除以 \(-2\)，幾何內積與坐標內積公式完美等價！</span>
            </div>
          </div>
`;

// Insert into Math A ch1 before </section>
if (!htmlA.includes('算幾不等式（AM-GM Inequality）詳細推導')) {
  htmlA = htmlA.replace(/(<section class="content-section" id="ch1">[\s\S]*?)(<\/section>)/i, '$1' + amGmAndCauchyDerivation + '\n        $2');
}

// Insert into Math A ch2 before </section>
if (!htmlA.includes('點到直線距離公式：向量正射影法詳細推導')) {
  htmlA = htmlA.replace(/(<section class="content-section" id="ch2">[\s\S]*?)(<\/section>)/i, '$1' + pointToLineDistanceDerivation + '\n        $2');
}

// Insert into Math A ch4 before </section>
if (!htmlA.includes('餘弦差角公式')) {
  htmlA = htmlA.replace(/(<section class="content-section" id="ch4">[\s\S]*?)(<\/section>)/i, '$1' + trigAdditionDerivation + '\n' + lawOfCosinesDerivation + '\n        $2');
}

// Insert into Math A ch5 before </section>
if (!htmlA.includes('平面向量內積公式')) {
  htmlA = htmlA.replace(/(<section class="content-section" id="ch5">[\s\S]*?)(<\/section>)/i, '$1' + dotProductDerivation + '\n        $2');
}

fs.writeFileSync(maPath, htmlA, 'utf8');
console.log('math-a.html successfully deepened with formula derivations! New size: ' + Buffer.byteLength(htmlA, 'utf8'));

// =========================================================================
// 2. MATH B: Injections of Detailed Derivations
// =========================================================================

// Derivation B1: 等差數列求和（高斯倒序）與等比數列求和（錯位相減）
const seriesDerivations = `
          <div class="formula-block">
            <div class="formula-title">📐 等差數列前 n 項和公式 \\( S_n = \\frac{n(a_1 + a_n)}{2} \\)：高斯倒序相加法推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">寫出正向總和：\\( S_n = a_1 + (a_1 + d) + (a_1 + 2d) + \\dots + a_n \\)</span>
              <span class="formula-explain">按照由第一項到第 n 項正向排列</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">寫出反向總和：\\( S_n = a_n + (a_n - d) + (a_n - 2d) + \\dots + a_1 \\)</span>
              <span class="formula-explain">倒序排列，公差由加變為減</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">兩式上下對齊相加：\\( 2S_n = (a_1 + a_n) + (a_1 + a_n) + \\dots + (a_1 + a_n) \\)</span>
              <span class="formula-explain">每一對首尾相加，公差 \(+d\) 與 \(-d\) 互相抵消，每組和皆為 \((a_1 + a_n)\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">共 \\( n \\) 組相同項：\\( 2S_n = n(a_1 + a_n) \\implies S_n = \\frac{n(a_1 + a_n)}{2} = \\frac{n[2a_1 + (n-1)d]}{2} \\)</span>
              <span class="formula-explain">兩邊同除以 2，證畢！</span>
            </div>
          </div>

          <div class="formula-block">
            <div class="formula-title">📐 等比數列前 n 項和公式 \\( S_n = \\frac{a_1(1 - r^n)}{1 - r} \\)：錯位相減法推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">設總和式：\\( S_n = a_1 + a_1r + a_1r^2 + \\dots + a_1r^{n-1} \\)</span>
              <span class="formula-explain">公比為 \(r\)（\(r \\neq 1\)）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">等式兩邊同乘公比 \\( r \\)：\\( rS_n = a_1r + a_1r^2 + \\dots + a_1r^{n-1} + a_1r^n \\)</span>
              <span class="formula-explain">各項次冪皆向後錯位推移 1 次</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">兩式相減 \\( (S_n - rS_n) \\)：中間各項全部抵消！只留下首項與末項！</span>
              <span class="formula-explain">中間 \(n-1\) 個項次像骨牌一樣全數抵消</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( (1 - r)S_n = a_1 - a_1r^n = a_1(1 - r^n) \\implies S_n = \\frac{a_1(1 - r^n)}{1 - r} = \\frac{a_1(r^n - 1)}{r - 1} \\)</span>
              <span class="formula-explain">兩邊同除以 \((1 - r)\)，完美推導出等比求和公式！</span>
            </div>
          </div>
`;

// Derivation B2: 拋物線標準式幾何推導
const parabolaDerivation = `
          <div class="formula-block">
            <div class="formula-title">📐 拋物線標準方程式 \\( y^2 = 4cx \\)：幾何定義坐標化推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">設焦點 \\( F(c, 0) \\)，準線方程式 \\( L: x = -c \\)（頂點為原點 \\( (0, 0) \\)）</span>
              <span class="formula-explain">拋物線上的任意動點 \(P(x, y)\) 滿足定義：到焦點距離等於到準線距離</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">\\( d(P, F) = d(P, L) \\implies \\sqrt{(x - c)^2 + y^2} = |x - (-c)| = |x + c| \\)</span>
              <span class="formula-explain">依照兩點距離公式與點到直線距離公式寫出幾何等式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">兩邊同時平方：\\( (x - c)^2 + y^2 = (x + c)^2 \\)</span>
              <span class="formula-explain">去掉根號與絕對值符號</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( x^2 - 2cx + c^2 + y^2 = x^2 + 2cx + c^2 \\)</span>
              <span class="formula-explain">展開兩邊的完全平方項</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">消去相同項 \\( x^2 \\) 與 \\( c^2 \\)：\\( -2cx + y^2 = 2cx \\implies y^2 = 4cx \\)</span>
              <span class="formula-explain">移項即證得左右開口拋物線的標準式！焦距為 \(|c|\)，正焦弦長為 \(|4c|\)。</span>
            </div>
          </div>
`;

// Insert seriesDerivations in math-b ch1
if (!htmlB.includes('高斯倒序相加法推導')) {
  htmlB = htmlB.replace(/(<section class="content-section" id="ch1">[\s\S]*?)(<\/section>)/i, '$1' + seriesDerivations + '\n        $2');
}

// Insert parabolaDerivation in math-b ch2
if (!htmlB.includes('拋物線標準方程式')) {
  htmlB = htmlB.replace(/(<section class="content-section" id="ch2">[\s\S]*?)(<\/section>)/i, '$1' + parabolaDerivation + '\n        $2');
}

fs.writeFileSync(mbPath, htmlB, 'utf8');
console.log('math-b.html successfully deepened with formula derivations! New size: ' + Buffer.byteLength(htmlB, 'utf8'));
