const fs = require('fs');
const path = require('path');

const sciPath = path.join(__dirname, '..', 'subjects', 'science.html');
let html = fs.readFileSync(sciPath, 'utf8');

// 1. PHYS-EM (電磁學)
const newPhysEm = `
        <section class="content-section" id="phys-em">
          <h2>📌 電磁學深入精析：磁場、電磁感應與高壓輸電</h2>

          <h3>一、右手三大定則完整對照</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>定則名稱</th>
                <th>手勢操作方式</th>
                <th>大考判定物理量</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>安培右手定則<br>（長直導線）</strong></td>
                <td>右手大拇指指向<strong>「電流方向 $I$」</strong>，四指自然彎曲所指方向即為<strong>「磁場環繞方向 $B$」</strong>。</td>
                <td>載流導線周圍產生的同心圓磁場，距離導線愈近磁場愈強（$B \\propto \\frac{I}{r}$）。</td>
              </tr>
              <tr>
                <td><strong>右手開掌定則<br>（載流導線受磁力）</strong></td>
                <td>四指指向<strong>磁場方向 $B$</strong>，大拇指指向<strong>電流方向 $I$</strong>，<strong>掌心推出的方向即為磁力方向 $\\vec{F}$</strong>。</td>
                <td>磁場對載流導線的作用力：$$F = ILB\\sin\\theta$$（導線與磁場垂直時磁力最大；平行時受力為 0）。</td>
              </tr>
              <tr>
                <td><strong>冷次定律（右手螺旋）<br>（感應電流方向）</strong></td>
                <td>感應電流所建立的磁場，<strong>永遠抵消或阻礙原磁通量的變化</strong>（「來拒去留、增反減同」）。</td>
                <td>磁鐵 N 極靠近線圈時，線圈頂端產生 N 極排斥；磁鐵遠離時，頂端產生 S 極吸引。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、變壓器原理與遠距離高壓輸電物理模型</h3>
          <div class="step-box">
            <div class="step-box-title">⚡ 為什麼電廠發電後必須以超高壓輸電？</div>
            <div class="step-row">
              <div class="step-num">變壓器關係</div>
              <div class="step-math">$$\\frac{V_1}{V_2} = \\frac{N_1}{N_2} = \\frac{I_2}{I_1} \\quad (P_1 = P_2 = VI)$$</div>
              <div class="step-desc">理想變壓器功率不變。將電壓升高 $k$ 倍，輸電線路上的電流強度必然縮小為原來的 $\\frac{1}{k}$ 倍！</div>
            </div>
            <div class="step-row">
              <div class="step-num">輸電線熱耗損</div>
              <div class="step-math">$$P_{\\text{loss}} = I^2 R$$</div>
              <div class="step-desc">輸電線路本身電阻 $R$ 固定。電流降低為 $\\frac{1}{k}$，線路上損耗的焦耳熱功率將<strong>驟降為原來的 $\\frac{1}{k^2}$</strong>！這也是台電使用 345 kV 超高壓輸電的根本原因。</div>
            </div>
          </div>
        </section>
`;

// 2. PHYS-WAVE (波動與光學)
const newPhysWave = `
        <section class="content-section" id="phys-wave">
          <h2>📌 波動與光學核心：幾何光學與全反射</h2>

          <h3>一、光學折射定律與全反射臨界角</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>光學現象</th>
                <th>物理發生條件</th>
                <th>關鍵定量公式</th>
                <th>生活與科技實例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>折射（司乃耳定律）</strong></td>
                <td>光由光疏介質進入光密介質（如空氣 $\\rightarrow$ 水）</td>
                <td>$$n_1 \\sin\\theta_1 = n_2 \\sin\\theta_2$$</td>
                <td>
                  • 光由空氣入水：光速減慢，<strong>折射線偏向法線</strong>（折射角小於入射角）。<br>
                  • 水中筷子看起來折斷、水底魚看起來比實際位置淺。
                </td>
              </tr>
              <tr>
                <td><strong>全反射 (Total Reflection)</strong></td>
                <td>
                  1. 必須由<strong>光密介質射向光疏介質</strong>（$n_1 > n_2$）。<br>
                  2. <strong>入射角大於臨界角</strong>（$\\theta_1 > \\theta_c$）。
                </td>
                <td>$$\\sin\\theta_c = \\frac{n_2}{n_1}$$</td>
                <td>
                  • <strong>光纖通訊（Optical Fiber）</strong>：光在纖核中不斷全反射前進，無光能散射外洩。<br>
                  • <strong>鑽石璀璨切工</strong>：鑽石折射率高達 2.42，臨界角僅約 $24.4^\\circ$，極易發生全反射產生璀璨火光。
                </td>
              </tr>
            </tbody>
          </table>

          <h3>二、聲波都卜勒效應（Doppler Effect）直觀速記</h3>
          <div class="formula-block">
            <div class="formula-title">🚑 都卜勒效應頻率變化法則</div>
            <p>• <strong>觀察者與波源「互相接近」</strong>：單位時間內接收到的波前數目增多，<strong>聽到的頻率變高（音調變尖銳）</strong>。<br>
               • <strong>觀察者與波源「互相遠離」</strong>：單位時間內接收到的波前數目減少，<strong>聽到的頻率變低（音調變低沉）</strong>。<br>
               • <strong>大考天文學應用</strong>：遠方星系光譜呈現<strong>「紅移（Redshift，波長變長、頻率降低）」</strong>，證明宇宙正在加速膨脹！</p>
          </div>
        </section>
`;

// 3. CHEM-BOND & CHEM-RXN (化學鍵與反應)
const newChemBond = `
        <section class="content-section" id="chem-bond">
          <h2>📌 化學鍵與晶體結構深層比較</h2>

          <table class="data-table">
            <thead>
              <tr>
                <th>晶體 / 化學鍵類型</th>
                <th>構成微粒與作用力</th>
                <th>熔沸點與硬度</th>
                <th>導電性判別法則（必考陷阱）</th>
                <th>代表物質</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>離子晶體<br>(Ionic)</strong></td>
                <td>陰、陽離子間的<strong>靜電引力（離子鍵）</strong></td>
                <td>熔點高、硬而脆（受外力錯位同性相斥易碎裂）</td>
                <td>
                  • 固態：❌ <strong>不導電</strong>（離子固定無法移動）<br>
                  • 熔融態或水溶液：✅ <strong>可導電</strong>
                </td>
                <td>$\\text{NaCl}, \\text{KNO}_3, \\text{MgO}$</td>
              </tr>
              <tr>
                <td><strong>分子晶體<br>(Molecular)</strong></td>
                <td>中性分子間的<strong>微弱分子間作用力（凡得瓦力、氫鍵）</strong></td>
                <td>熔沸點低、質地柔軟、易昇華</td>
                <td><strong>固態、液態皆不導電</strong>（分子本身呈電中性）</td>
                <td>$\\text{H}_2\\text{O}, \\text{CO}_2$（乾冰）, 蔗糖, 碘 $\\text{I}_2$</td>
              </tr>
              <tr>
                <td><strong>網狀共價晶體<br>(Network Covalent)</strong></td>
                <td>非金屬原子間藉<strong>連續不斷的共價鍵</strong>立體網狀連結</td>
                <td>熔沸點<strong>極高</strong>、硬度極大</td>
                <td><strong>通常不導電</strong>（唯一例外：<strong>石墨具離域自由電子可導電</strong>！）</td>
                <td>鑽石 (C), 二氧化矽 $(\\text{SiO}_2)$, 石墨</td>
              </tr>
              <tr>
                <td><strong>金屬晶體<br>(Metallic)</strong></td>
                <td>金屬陽離子與<strong>自由電子海（金屬鍵）</strong></td>
                <td>熔沸點跨度大、具優良延展性與導熱性</td>
                <td><strong>固態、液態皆能導電</strong>（自由電子可定向移動）</td>
                <td>$\\text{Fe}, \\text{Cu}, \\text{Al}, \\text{Au}, \\text{Hg}$</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

// 4. BIO-GENETICS (遺傳學)
const newBioGenetics = `
        <section class="content-section" id="bio-genetics">
          <h2>📌 遺傳學法則與棋盤方格法實戰</h2>

          <h3>一、孟德爾兩大遺傳定律核心</h3>
          <div class="step-box">
            <div class="step-box-title">🧬 孟德爾遺傳學精華原理</div>
            <div class="step-row">
              <div class="step-num">第一定律：分離律</div>
              <div class="step-math">控制同一性狀的一對等位基因（如 $A$ 與 $a$），在減數分裂形成配子時<strong>彼此分離</strong>進入不同配子。</div>
              <div class="step-desc">雜合子 $Aa \\times Aa$ 自交子代基因型比為 $AA:Aa:aa = 1:2:1$，表現型比為 $3:1$。</div>
            </div>
            <div class="step-row">
              <div class="step-num">第二定律：獨立分配律</div>
              <div class="step-math">位於非同源染色體上的兩對等位基因（如 $AaBb$），形成配子時<strong>互不干擾、自由組合</strong>。</div>
              <div class="step-desc">雙雜合子 $AaBb \\times AaBb$ 產生 4 種配子，子代表現型呈現經典比例：<strong>$9 : 3 : 3 : 1$</strong>。</div>
            </div>
          </div>

          <h3>二、性聯遺傳（Sex-linked Inheritance）大考判讀</h3>
          <p>紅綠色盲與血友病為常見的 <strong>X 染色體隱性遺傳</strong>（基因記作 $X^a$）：</p>
          <table class="data-table">
            <thead>
              <tr>
                <th>性別</th>
                <th>基因型</th>
                <th>表型特徵與大考鐵則</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>男性 (XY)</strong></td>
                <td>$X^A Y$（正常）<br>$X^a Y$（<strong>患病</strong>）</td>
                <td>男性僅有一條 X 染色體，只要得到隱性致病基因 $X^a$ <strong>必然發病</strong>！故男性罹病機率顯著高於女性。</td>
              </tr>
              <tr>
                <td><strong>女性 (XX)</strong></td>
                <td>$X^A X^A$（正常）<br>$X^A X^a$（<strong>帶原者但表型正常</strong>）<br>$X^a X^a$（<strong>患病</strong>）</td>
                <td>女性必須兩條 X 染色體皆帶致病基因方會發病。<br>
                  • <strong>母患子必患</strong>：若母親為患者（$X^a X^a$），其兒子必患病！<br>
                  • <strong>女患父必患</strong>：若女兒為患者（$X^a X^a$），其父親必為患者！
                </td>
              </tr>
            </tbody>
          </table>
        </section>
`;

html = html.replace(/<section class="content-section" id="phys-em">[\s\S]*?<\/section>/i, newPhysEm);
html = html.replace(/<section class="content-section" id="phys-wave">[\s\S]*?<\/section>/i, newPhysWave);
html = html.replace(/<section class="content-section" id="chem-bond">[\s\S]*?<\/section>/i, newChemBond);
html = html.replace(/<section class="content-section" id="bio-genetics">[\s\S]*?<\/section>/i, newBioGenetics);

fs.writeFileSync(sciPath, html, 'utf8');
console.log('science.html successfully deepened phys-em, phys-wave, chem-bond, bio-genetics! New size: ' + Buffer.byteLength(html, 'utf8'));
