const fs = require('fs');
const path = require('path');

const sciPath = path.join(__dirname, '..', 'subjects', 'science.html');
let html = fs.readFileSync(sciPath, 'utf8');

// 1. 等加速度運動四大公式推導
const oldKinematicsRegex = /<div class="formula-block">\s*<div class="formula-title">📐 等加速度運動公式推導<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepKinematicsBlock = `<div class="formula-block">
            <div class="formula-title">📐 等加速度直線運動四大公式：幾何面積與代數嚴密推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">加速度定義：\\( a = \\frac{\\Delta v}{\\Delta t} = \\frac{v - v_0}{t} \\)</span>
              <span class="formula-explain">等加速度運動中，平均加速度等於瞬時加速度。\\( v_0 \\) 為初速，\\( v \\) 為時間 \\( t \\) 後的末速</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">【第一公式】兩邊同乘 \\( t \\) 移項：\\( v - v_0 = at \\implies v = v_0 + at \\)</span>
              <span class="formula-explain">速度隨時間線性增加。\\( at \\) 為增加的速度量</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">\\( v-t \\) 圖幾何意義：位移 \\( x \\) 等於速度-時間曲線下方的梯形面積</span>
              <span class="formula-explain">梯形上底為初速 \\( v_0 \\)，下底為末速 \\( v \\)，高為時間 \\( t \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">【第二公式】\\( x = \\frac{(v_0 + v) \\cdot t}{2} = \\bar{v} \\cdot t \\)</span>
              <span class="formula-explain">梯形面積公式：位移等於平均速度 \\( \\bar{v} = \\frac{v_0 + v}{2} \\) 乘以時間 \\( t \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">將第一公式 \\( v = v_0 + at \\) 代入第二公式：\\( x = \\frac{v_0 + (v_0 + at)}{2} \\cdot t \\)</span>
              <span class="formula-explain">代換消去末速 \\( v \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">【第三公式】\\( x = \\frac{2v_0 + at}{2} \\cdot t = v_0 t + \\frac{1}{2}at^2 \\)</span>
              <span class="formula-explain">幾何上等同於拆解為下方長方形面積 \\( v_0 t \\) 加上上方三角形面積 \\( \\frac{1}{2} t (at) \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">由第一公式解出時間：\\( t = \\frac{v - v_0}{a} \\)，代入第二公式</span>
              <span class="formula-explain">目標消去時間 \\( t \\)，推導無時間變數的關聯式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">8</span>
              <span class="formula-math">\\( x = \\left(\\frac{v + v_0}{2}\\right) \\left(\\frac{v - v_0}{a}\\right) = \\frac{v^2 - v_0^2}{2a} \\)</span>
              <span class="formula-explain">利用平方差公式 \\( (v+v_0)(v-v_0) = v^2 - v_0^2 \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">9</span>
              <span class="formula-math">【第四公式】兩邊同乘 \\( 2a \\) 移項：\\( v^2 = v_0^2 + 2ax \\)</span>
              <span class="formula-explain">大考無時間已知時的解題利器！此式本質即為機械能守恆定理。</span>
            </div>
          </div>`;

html = html.replace(oldKinematicsRegex, deepKinematicsBlock);

// 2. 功與動能定理推導
const oldWorkRegex = /<div class="formula-block">\s*<div class="formula-title">📐 功與能量公式<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepWorkBlock = `<div class="formula-block">
            <div class="formula-title">📐 功能定理（Work-Energy Theorem）與動能公式詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">牛頓第二運動定律：物體受合力 \\( F_{\\text{net}} = ma \\)</span>
              <span class="formula-explain">質量為 \\( m \\) 的物體在合外力作用下產生加速度 \\( a \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">物體沿力的方向移動位移 \\( x \\)，合力所做的功定義為：\\( W_{\\text{net}} = F_{\\text{net}} \\cdot x = (ma) \\cdot x \\)</span>
              <span class="formula-explain">依功的定義：力與位移的乘積</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">由等加速度第四公式：\\( v^2 = v_0^2 + 2ax \\implies ax = \\frac{v^2 - v_0^2}{2} \\)</span>
              <span class="formula-explain">將運動學中的加速度與位移乘積 \\( ax \\) 用初末速度代換</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">\\( W_{\\text{net}} = m(ax) = m \\left(\\frac{v^2 - v_0^2}{2}\\right) = \\frac{1}{2}mv^2 - \\frac{1}{2}mv_0^2 \\)</span>
              <span class="formula-explain">代入展開，得到初末狀態的物理量之差</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">定義動能：\\( E_k = \\frac{1}{2}mv^2 \\)，則 \\( W_{\\text{net}} = \\Delta E_k = E_{k,\\text{末}} - E_{k,\\text{初}} \\)</span>
              <span class="formula-explain">嚴密證得功能定理：合外力對物體所做的總功，恰等於物體動能的增加量！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">若只有保守力（重力）做功：\\( W_{\\text{重力}} = -\\Delta U \\implies -\\Delta U = \\Delta E_k \\implies \\Delta(E_k + U) = 0 \\)</span>
              <span class="formula-explain">重力作正功位能減少，動能與位能總和保持定值，證得力學能守恆定律！</span>
            </div>
          </div>`;

html = html.replace(oldWorkRegex, deepWorkBlock);

// 3. 萬有引力與克卜勒第三定律推導
const oldGravityRegex = /<div class="formula-block">\s*<div class="formula-title">📐 萬有引力與克卜勒定律<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepGravityBlock = `<div class="formula-block">
            <div class="formula-title">📐 萬有引力、重力加速度與克卜勒第三定律詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">萬有引力定律：質量為 \\( M \\) 與 \\( m \\) 距離 \\( R \\) 之兩質點受引力 \\( F = G\\frac{Mm}{R^2} \\)</span>
              <span class="formula-explain">引力大小與質量乘積成正比，與距離平方成反比（牛頓反平方律）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">地表重力加速度推導：地表物體重力等於萬有引力 \\( mg = G\\frac{Mm}{R^2} \\)</span>
              <span class="formula-explain">兩邊消去物體質量 \\( m \\)，得 \\( g = \\frac{GM}{R^2} \\approx 9.8 \\text{ m/s}^2 \\)（說明自由落體加速度與物體質量無關！）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">行星公轉軌道向心力：行星受太陽萬有引力提供等速圓周運動之向心力</span>
              <span class="formula-explain">\\( F_{\\text{引力}} = F_{\\text{向心}} \\implies G\\frac{Mm}{R^2} = m \\cdot a_c \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">圓周運動向心加速度以週期表示：\\( a_c = R\\omega^2 = R\\left(\\frac{2\\pi}{T}\\right)^2 = \\frac{4\\pi^2 R}{T^2} \\)</span>
              <span class="formula-explain">角速度 \\( \\omega = \\frac{2\\pi}{T} \\)，\\( T \\) 為公轉週期</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">\\( G\\frac{Mm}{R^2} = m \\left(\\frac{4\\pi^2 R}{T^2}\\right) \\implies G\\frac{M}{R^2} = \\frac{4\\pi^2 R}{T^2} \\)</span>
              <span class="formula-explain">兩邊消去行星自身質量 \\( m \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">交叉相乘移項：\\( \\frac{R^3}{T^2} = \\frac{GM}{4\\pi^2} \\text{（常數）} \\implies T^2 = \\left(\\frac{4\\pi^2}{GM}\\right) R^3 \\)</span>
              <span class="formula-explain">太陽質量 \\( M \\) 與引力常數 \\( G \\) 為定值，完美推導出克卜勒第三定律 \\( T^2 \\propto R^3 \\)！</span>
            </div>
          </div>`;

html = html.replace(oldGravityRegex, deepGravityBlock);

// 4. 酸鹼公式與 pH + pOH = 14 推導
const oldAcidRegex = /<div class="formula-block">\s*<div class="formula-title">📐 酸鹼公式<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepAcidBlock = `<div class="formula-block">
            <div class="formula-title">📐 水的離子積常數與 \\( \\text{pH} + \\text{pOH} = 14 \\) 詳細對數推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">純水自解離平衡：\\( 2\\text{H}_2\\text{O} \\rightleftharpoons \\text{H}_3\\text{O}^+ + \\text{OH}^- \\)（簡寫為 \\( \\text{H}_2\\text{O} \\rightleftharpoons \\text{H}^+ + \\text{OH}^- \\)）</span>
              <span class="formula-explain">在 25°C 下，純水解離極微弱，測得 \\( [\\text{H}^+] = [\\text{OH}^-] = 10^{-7} \\text{ M} \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">水的離子積常數：\\( K_w = [\\text{H}^+][\\text{OH}^-] = (10^{-7})(10^{-7}) = 1.0 \\times 10^{-14} \\)</span>
              <span class="formula-explain">在定溫（25°C）下，不論酸性或鹼性稀薄水溶液，兩離子濃度乘積恆為定值 \\( 10^{-14} \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">等式兩邊同時取常用對數：\\( \\log_{10}([\\text{H}^+][\\text{OH}^-]) = \\log_{10}(10^{-14}) \\)</span>
              <span class="formula-explain">利用對數工具將乘法轉化為加法運算</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">展開左式並化簡右式：\\( \\log_{10}[\\text{H}^+] + \\log_{10}[\\text{OH}^-] = -14 \\)</span>
              <span class="formula-explain">利用對數性質 \\( \\log(AB) = \\log A + \\log B \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">等式兩邊同乘以 \\( -1 \\)：\\( -\\log_{10}[\\text{H}^+] + (-\\log_{10}[\\text{OH}^-]) = 14 \\)</span>
              <span class="formula-explain">全體變號，湊出 pH 與 pOH 的數學定義式</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">定義 \\( \\text{pH} = -\\log_{10}[\\text{H}^+] \\) 與 \\( \\text{pOH} = -\\log_{10}[\\text{OH}^-] \\)</span>
              <span class="formula-explain">丹麥化學家索倫森定義：p 代表 \\( -\\log_{10} \\)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">代回得證：\\( \\text{pH} + \\text{pOH} = 14 \\quad (25^\\circ\\text{C}) \\)</span>
              <span class="formula-explain">若升溫至 60°C，自解離吸熱平衡右移，\\( K_w > 10^{-14} \\)，此時中性水溶液 \\( \\text{pH} < 7 \\)（但依然為中性）！</span>
            </div>
          </div>`;

html = html.replace(oldAcidRegex, deepAcidBlock);

// 5. 氣體化學計量與理想氣體狀態方程式推導 (在 chem-rxn 內)
const oldChemRxnRegex = /<div class="formula-block">\s*<div class="formula-title">📐 莫耳與計量<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepChemRxnBlock = `<div class="formula-block">
            <div class="formula-title">📐 理想氣體狀態方程式 \\( PV = nRT \\) 與氣體密度詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">波以耳定律（定溫）：\\( V \\propto \\frac{1}{P} \\)（\\( T, n \\) 一定）</span>
              <span class="formula-explain">氣體體積與壓力成反比（壓力增大一倍，體積縮小一半）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">查理定律（定壓）：\\( V \\propto T \\)（\\( P, n \\) 一定）</span>
              <span class="formula-explain">氣體體積與絕對溫度（K）成正比（絕對零度 0 K = -273.15°C）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">亞佛加厥定律（定溫定壓）：\\( V \\propto n \\)（\\( T, P \\) 一定）</span>
              <span class="formula-explain">同溫同壓下，同體積的任何氣體含有相同莫耳數的粒子（STP 下 1 mol = 22.4 L）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">綜合三定律：\\( V \\propto \\frac{nT}{P} \\implies \\frac{PV}{nT} = R \\text{（常數）} \\)</span>
              <span class="formula-explain">\\( R \\) 稱為通用氣體常數（理想氣體常數，\\( R \\approx 0.082 \\text{ atm}\\cdot\\text{L}/(\\text{mol}\\cdot\\text{K}) \\)）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">【狀態方程式】\\( PV = nRT \\)</span>
              <span class="formula-explain">移項即得化學與熱力學最重要的理想氣體方程式！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">氣體密度推導：莫耳數 \\( n = \\frac{m}{M} \\)，代入得 \\( PV = \\left(\\frac{m}{M}\\right)RT \\)</span>
              <span class="formula-explain">\\( m \\) 為氣體總質量(g)，\\( M \\) 為莫耳質量/分子量(g/mol)</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">7</span>
              <span class="formula-math">移項整理：\\( PM = \\left(\\frac{m}{V}\\right)RT = dRT \\implies d = \\frac{PM}{RT} \\)</span>
              <span class="formula-explain">\\( d = \\frac{m}{V} \\) 為氣體密度。證明定溫定壓下，氣體密度與分子量 \\( M \\) 成正比！</span>
            </div>
          </div>`;

html = html.replace(oldChemRxnRegex, deepChemRxnBlock);

// 6. 光電效應與截止電壓推導 (在 phys-modern 內)
const oldModernRegex = /<div class="formula-block">\s*<div class="formula-title">📐 近代物理重要公式<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepModernBlock = `<div class="formula-block">
            <div class="formula-title">📐 愛因斯坦光電效應方程式與截止電壓斜率詳細推導</div>
            <div class="formula-line">
              <span class="formula-step">1</span>
              <span class="formula-math">光量子假說：頻率為 \\( \\nu \\) 的單一光子所帶能量為 \\( E = h\\nu = \\frac{hc}{\\lambda} \\)</span>
              <span class="formula-explain">愛因斯坦提出光具有粒子性，能量以離散量子形式存在（\\( h \\) 為普朗克常數）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">2</span>
              <span class="formula-math">金屬功函數：使金屬內部電子脫離表面束縛所需之最小能量設為 \\( W = h\\nu_0 \\)</span>
              <span class="formula-explain">\\( \\nu_0 \\) 稱為底限頻率（臨界頻率），取決於金屬材質</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">3</span>
              <span class="formula-math">能量守恆：入射光子能量 = 逸出功 + 溢出電子之最大初始動能</span>
              <span class="formula-explain">一對一碰撞：一個光子被一個電子完全吸收，多餘能量轉化為電子動能</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">4</span>
              <span class="formula-math">【光電方程式】\\( h\\nu = W + E_{k,\\max} \\implies E_{k,\\max} = h\\nu - W = h(\\nu - \\nu_0) \\)</span>
              <span class="formula-explain">若 \\( \\nu < \\nu_0 \\)，即使光照強度再大，也絕無光電子溢出；若 \\( \\nu \\ge \\nu_0 \\)，即使極微弱光也能瞬時激發光電子！</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">5</span>
              <span class="formula-math">截止電壓（阻止電壓）：外加反向電壓 \\( V_s \\)，電場作負功阻止最快電子到達陽極</span>
              <span class="formula-explain">當反向電場作功剛好消耗最大動能時，光電流歸零：\\( e V_s = E_{k,\\max} \\)（\\( e \\) 為基本電荷量）</span>
            </div>
            <div class="formula-line">
              <span class="formula-step">6</span>
              <span class="formula-math">將光電方程式代入：\\( e V_s = h\\nu - W \\implies V_s = \\left(\\frac{h}{e}\\right)\\nu - \\frac{W}{e} \\)</span>
              <span class="formula-explain">大考最高頻圖表題：\\( V_s - \\nu \\) 關係圖為一直線，其斜率為 \\( \\frac{h}{e} \\)（普遍常數，與任何金屬無關！），橫軸截距即為底限頻率 \\( \\nu_0 \\)！</span>
            </div>
          </div>`;

html = html.replace(oldModernRegex, deepModernBlock);

// 7. 高空地轉風推導
const oldWindRegex = /<div class="step-box">\s*<div class="step-box-title">🌀 高空地轉風平衡條件<\/div>[\s\S]*?<\/div>\s*<\/div>/i;

const deepWindBlock = `<div class="step-box">
            <div class="step-box-title">🌀 高空地轉風（Geostrophic Wind）平衡與風速詳細推導</div>
            <div class="step-row">
              <div class="step-num">Step 1：氣壓梯度力</div>
              <div class="step-math">$$F_{pg} = \\frac{1}{\\rho}\\frac{\\Delta P}{\\Delta d}$$</div>
              <div class="step-desc">空氣微團因兩點氣壓差受力，方向垂直於等壓線，由高壓嚴格指向低壓（\\( \\rho \\) 為空氣密度）。</div>
            </div>
            <div class="step-row">
              <div class="step-num">Step 2：地轉偏向力</div>
              <div class="step-math">$$F_{cor} = 2 v \\Omega \\sin\\phi$$</div>
              <div class="step-desc">地球自轉產生的慣性力。北半球垂直於風向偏右，南半球偏左（\\( \\Omega \\) 為自轉角速度，\\( \\phi \\) 為當地緯度）。風速愈快、緯度愈高，偏向力愈大；赤道處 \\( \\sin 0^\\circ = 0 \\) 無科氏力。</div>
            </div>
            <div class="step-row">
              <div class="step-num">Step 3：高空摩擦力為零</div>
              <div class="step-math">$$F_{pg} = F_{cor} \\implies \\frac{1}{\\rho}\\frac{\\Delta P}{\\Delta d} = 2 v_g \\Omega \\sin\\phi$$</div>
              <div class="step-desc">在離地 1 公里以上高空，地面摩擦阻力可忽略。空氣質點受科氏力不斷右偏，最終氣壓梯度力與科氏力大小相等、方向相反（180°）達成動態平衡！</div>
            </div>
            <div class="step-row">
              <div class="step-num">Step 4：地轉風速與風向</div>
              <div class="step-math">$$v_g = \\frac{1}{2\\rho\\Omega\\sin\\phi} \\cdot \\frac{\\Delta P}{\\Delta d}$$</div>
              <div class="step-desc">平衡時風向<strong>完全平行於等壓線</strong>吹拂！北半球背風而立，高壓在右側、低壓在左側（白貝羅定律 Buys Ballot's Law）。等壓線愈密集，氣壓梯度愈大，地轉風速愈強。</div>
            </div>
          </div>`;

html = html.replace(oldWindRegex, deepWindBlock);

fs.writeFileSync(sciPath, html, 'utf8');
console.log('science.html successfully updated with exhaustive line-by-line formula derivations! Size: ' + Buffer.byteLength(html, 'utf8'));
