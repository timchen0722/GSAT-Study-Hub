const fs = require('fs');
const path = require('path');

const socialPath = path.join(__dirname, '..', 'subjects', 'social.html');
let html = fs.readFileSync(socialPath, 'utf8');

// 1. HIST-CN (中國與東亞史)
const newHistCn = `
        <section class="content-section" id="hist-cn">
          <h2>📌 中國與東亞史核心架構深度解析</h2>
          <p>聚焦制度演變（官制、選才、土地賦稅）與近現代條約變局，是掌握大考情境題與文本因果的核心支柱。</p>

          <h3>一、歷代選才任官制度流變</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>制度名稱</th>
                <th>實施時代</th>
                <th>選拔標準與運作方式</th>
                <th>歷史評價與社會階級流動</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>世卿世祿制</strong></td>
                <td>先秦（西周封建）</td>
                <td>憑藉貴族<strong>血緣宗法</strong>世代相承，父死子繼。</td>
                <td>階級完全固化，「刑不上大夫，禮不下庶人」，平民無晉升政治管道。</td>
              </tr>
              <tr>
                <td><strong>察舉制與徵辟制</strong></td>
                <td>兩漢（漢武帝確立）</td>
                <td>由地方長官查訪民間優秀人才向朝廷「鄉舉里選」，以<strong>「孝、廉」</strong>為核心標準。</td>
                <td>漢初促進平民入仕，東漢後期評選權被世家大族壟斷，演變為「舉秀才不知書，察孝廉父別居」之弊端。</td>
              </tr>
              <tr>
                <td><strong>九品官人法（九品中正制）</strong></td>
                <td>魏晉南北朝（曹魏陳群創立）</td>
                <td>由中正官依據家世、道德、才能評定為九等，朝廷按品授官。</td>
                <td>司馬氏篡魏後中正官多由世族壟斷，徹底淪為<strong>「上品無寒門，下品無世族」</strong>的門閥世族政治工具。</td>
              </tr>
              <tr>
                <td><strong>科舉制度</strong></td>
                <td>隋唐至清末<br>(587-1905)</td>
                <td>• <strong>隋唐創制</strong>：分科考試，打破世家壟斷。<br>• <strong>宋代完備</strong>：實施殿試、糊名（彌封）、謄錄制度，嚴防作弊。<br>• <strong>明清僵化</strong>：八股文取士，限定以朱熹《四書章句集注》為標準。</td>
                <td>極大促進社會流動與儒學普及，宋代文官政治確立；明清八股嚴重禁錮士人思想，1905 年清末新政廢除。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、土地制度與賦稅變革演進</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>賦稅田制</th>
                <th>實施時代 / 改革者</th>
                <th>徵稅原則與內容</th>
                <th>大考深層歷史意義</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>均田制與租庸調</strong></td>
                <td>北魏至唐中葉</td>
                <td>朝廷授田給農民，向成丁徵收<strong>「租（粟米）」、「庸（勞役，得以絹布代役）」、「調（絲織品麻布）」</strong>。</td>
                <td>以「人頭（丁）」為徵稅本位，前提是朝廷必須有足夠土地可供分配（土地國有化）。安史之亂後土地兼併嚴重，均田制崩潰。</td>
              </tr>
              <tr>
                <td><strong>兩稅法</strong></td>
                <td>唐德宗建中元年 (780)<br>宰相楊炎改革</td>
                <td><strong>「量出以制入」</strong>。取消租庸調，改依<strong>「資產與田畝」</strong>徵稅，每年分<strong>夏、秋兩季</strong>徵收。</td>
                <td>中國賦稅史的重大分水嶺：由<strong>「以人丁為本」轉向「以財產田地為本」</strong>，戶籍不分主客皆須納稅，大幅擴大稅基。</td>
              </tr>
              <tr>
                <td><strong>一條鞭法</strong></td>
                <td>明神宗萬曆年間<br>首輔張居正</td>
                <td><strong>賦役合一</strong>，將各項雜役與田賦合併為一，<strong>按畝折徵「白銀」</strong>。</td>
                <td>簡化繁複稅目，降低官吏貪瀆空間；反映明中後期美洲與日本白銀大量流入中國的<strong>「白銀貨幣化」</strong>經濟現實。</td>
              </tr>
              <tr>
                <td><strong>攤丁入畝</strong></td>
                <td>清世宗雍正年間</td>
                <td><strong>「地丁合一」</strong>。將人頭丁銀全數攤入田畝地糧中徵收，無田地者不再承擔人丁稅。</td>
                <td><strong>徹底廢除延續兩千餘年的「人頭稅」！</strong>隱匿人口之誘因消失，刺激清中葉乾隆時期中國人口出現「爆發性增長」（破三億）。</td>
              </tr>
            </tbody>
          </table>

          <h3>三、近代救亡圖存三大改革運動深度比較</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>比較維度</th>
                <th>洋務自強運動 (1860-1895)</th>
                <th>戊戌百日維新 (1898)</th>
                <th>辛亥革命 (1911)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>刺激背景</strong></td>
                <td>英法聯軍之役、太平天國動亂</td>
                <td>甲午戰爭慘敗於日本、《馬關條約》割地賠款引發亡國滅種危機</td>
                <td>八國聯軍《辛丑和約》、清廷假立憲（皇族內閣）徹底喪失民心</td>
              </tr>
              <tr>
                <td><strong>主事代表</strong></td>
                <td>恭親王奕訢、曾國藩、李鴻章、左宗棠</td>
                <td>光緒帝、康有為、梁啟超、譚嗣同</td>
                <td>孫中山、黃興、宋教仁、同盟會志士</td>
              </tr>
              <tr>
                <td><strong>核心思維</strong></td>
                <td><strong>「中學為體，西學為用」</strong>（器物層面，僅學船堅炮利）</td>
                <td><strong>君主立憲</strong>（制度層面，學習日本明治維新變法改制）</td>
                <td><strong>民主共和</strong>（推翻帝制，創立民國，實踐三民主義）</td>
              </tr>
              <tr>
                <td><strong>代表建設與成果</strong></td>
                <td>江南機器製造總局、福州船政局、北洋水師、輪船招商局、同文館。</td>
                <td>廢八股改試策論、設京師大學堂（今北京大學前身）、裁撤冗官。</td>
                <td>武昌起義成功，推翻兩千餘年專制帝制，建立亞洲第一個民主共和國。</td>
              </tr>
              <tr>
                <td><strong>歷史局限與成敗</strong></td>
                <td>甲午海戰北洋艦隊全軍覆沒，宣告「器物救國」破產。</td>
                <td>僅歷時 103 天，遭慈禧太后發動戊戌政變幽禁皇帝、處死六君子而告終。</td>
                <td>推翻帝制但未徹底瓦解封建社會基礎，政權隨後落入北洋軍閥袁世凱手中。</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

// 2. HIST-WORLD (世界史)
const newHistWorld = `
        <section class="content-section" id="hist-world">
          <h2>📌 世界史核心思想演進與地緣變局</h2>
          <p>世界史聚焦於「自由人權民主思潮之擴展」、「資本主義工業轉型」與「兩次世界大戰至冷戰之全球地緣格局」。</p>

          <h3>一、西方古典政治制度與思想基礎</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>政治文明體制</th>
                <th>代表核心制度</th>
                <th>大考關鍵概念與現代遺產</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>古希臘雅典民主</strong></td>
                <td><strong>公民大會</strong>、五百人會議、陪審法庭、<strong>陶片放逐法（防範僭主專政）</strong>。</td>
                <td>直接民主體制之典範。公民直接參與政策表決，但政治權利僅限於成年自由男性公民（排除女性、奴隸、外邦人）。</td>
              </tr>
              <tr>
                <td><strong>古羅馬共和國</strong></td>
                <td><strong>元老院</strong>（貴族掌舵）、執政官（行政長官）、<strong>保民官（享有否決權保障平民權益）</strong>、《十二表法》。</td>
                <td>確立<strong>權力互相制衡</strong>思想；成文法典奠定現代歐陸法系基礎。</td>
              </tr>
              <tr>
                <td><strong>歐洲中世紀封建體制</strong></td>
                <td><strong>采邑封建制度</strong>（雙向契約、封臣效忠領主以獲封地）、<strong>莊園經濟</strong>（自給自足、農奴身份束縛）、天主教會大一統精神權威。</td>
                <td>「我的封臣的封臣，不是我的封臣」，政治權力高度破碎分散，國王權力受制於封建諸侯與教會教宗。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、近代三大思想躍進運動</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>思想運動</th>
                <th>時代與發源地</th>
                <th>核心哲學倡導</th>
                <th>歷史分水嶺意義</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>文藝復興<br>(Renaissance)</strong></td>
                <td>14-16 世紀<br>義大利佛羅倫斯</td>
                <td><strong>人文主義 (Humanism)</strong>：以「人」為中心取代以「神」為中心，讚美世俗現世生活之美好與理性探索。</td>
                <td>薄伽丘《十日談》諷刺教會腐敗、達文西、米開朗基羅以寫實解剖展現人體力與美，衝破中世紀神學禁錮。</td>
              </tr>
              <tr>
                <td><strong>宗教改革<br>(Reformation)</strong></td>
                <td>16 世紀<br>神聖羅馬帝國（德意志）</td>
                <td>• <strong>馬丁路德</strong>：反對販賣贖罪券，倡導<strong>「因信稱義（Sola Fide）」</strong>與<strong>「信徒皆祭司」</strong>，唯有《聖經》為最高權威。<br>• <strong>喀爾文</strong>：<strong>「預選說（Predestination）」</strong>，勤奮工作榮耀上帝，助長資本主義倫理。</td>
                <td>瓦解天主教會大一統教權，促成近代主權民族國家（Nation-state）崛起與歐洲宗教戰爭（三十年戰爭 $\rightarrow$ 1648 西發里亞條約奠定國際法準則）。</td>
              </tr>
              <tr>
                <td><strong>科學革命<br>(Scientific Revolution)</strong></td>
                <td>16-17 世紀<br>西歐</td>
                <td><strong>經驗觀察與理性驗證</strong>：培根倡導「歸納法」、笛卡兒倡導「演繹法（我思故我在）」、牛頓《自然哲學的數學原理》確立萬有引力三大定律。</td>
                <td>建立「宇宙如同精密機械鐘錶」的機械論世界觀，徹底擺脫迷信盲從，直接催生 18 世紀啟蒙運動。</td>
              </tr>
            </tbody>
          </table>

          <h3>三、兩次世界大戰因果鏈與戰後秩序</h3>
          <div class="step-box">
            <div class="step-box-title">⚔️ 兩次世界大戰歷史轉折脈絡</div>
            <div class="step-row">
              <div class="step-num">一次大戰<br>(1914-1918)</div>
              <div class="step-math"><strong>同盟體系連鎖引爆（三國同盟 vs 三國協約）</strong></div>
              <div class="step-desc">
                • 導火線：塞拉耶佛暗殺事件（奧匈王儲遇刺）。<br>
                • 戰後秩序：《凡爾賽條約》對德國施加極為嚴苛的賠款割地限制與非軍事化，深種日後德國復仇主義惡果；威爾遜倡導成立「國際聯盟 (LN)」，但因缺乏軍事制裁手段與美國未加入而軟弱無力。
              </div>
            </div>
            <div class="step-row">
              <div class="step-num">二次大戰<br>(1939-1945)</div>
              <div class="step-math"><strong>極權法西斯侵略與軸心國崩潰（德意日 vs 同盟國美英蘇中）</strong></div>
              <div class="step-desc">
                • 綏靖政策破產（慕尼黑協定割讓蘇台德區無法滿足希特勒胃口）。<br>
                • 1939 德軍閃擊波蘭引爆二戰；1941 日本偷襲珍珠港使美國正式參戰。<br>
                • 雅爾達會議 (1945) 劃定戰後美蘇勢力範圍，促成聯合國 (UN) 創立與美蘇「冷戰兩極對峙」架構。
              </div>
            </div>
          </div>
        </section>
`;

// 3. GEO-PHYS & GEO-HUMAN (地理)
const newGeoPhys = `
        <section class="content-section" id="geo-phys">
          <h2>📌 自然地理核心營力與氣候水文機制</h2>

          <h3>一、板塊構造學說與地形景觀</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>板塊邊界類型</th>
                <th>板塊相對運動方向</th>
                <th>代表地質構造與作用</th>
                <th>全球經典地理實例</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>聚合型邊界<br>(Convergent)</strong></td>
                <td>板塊互相碰撞擠壓</td>
                <td>
                  • <strong>大洋-大陸板塊</strong>：隱沒帶、海溝、火山弧。<br>
                  • <strong>大陸-大陸板塊</strong>：巨大褶皺造山帶、強烈逆斷層、淺源至中源地震。
                </td>
                <td>
                  • 喜馬拉雅山脈（印澳板塊撞擊歐亞板塊）。<br>
                  • 安地斯山脈與智利海溝（納斯卡板塊隱沒）。<br>
                  • <strong>臺灣島造山運動</strong>（菲律賓海板塊向西北擠壓歐亞板塊）。
                </td>
              </tr>
              <tr>
                <td><strong>張裂型邊界<br>(Divergent)</strong></td>
                <td>板塊互相背離拉扯</td>
                <td>地函熱對流上升、地殼張裂形成裂谷、玄武岩岩漿噴發冷卻形成新洋殼。</td>
                <td>
                  • 大西洋中洋脊（冰島剛好跨越其上）。<br>
                  • 東非大裂谷（形成一系列狹長地塹湖）。
                </td>
              </tr>
              <tr>
                <td><strong>錯動型邊界<br>(Transform)</strong></td>
                <td>板塊沿斷層水平平移剪切</td>
                <td>不產生也不破壞地殼，摩擦積蓄能量易引發強烈<strong>淺源地震</strong>。</td>
                <td>美國加州<strong>聖安德列斯斷層 (San Andreas Fault)</strong>。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、河流地形侵蝕與堆積完整生命週期</h3>
          <div class="step-box">
            <div class="step-box-title">🏞️ 河流由上游至河口的地貌演化階梯</div>
            <div class="step-row">
              <div class="step-num">上游（侵蝕為主）</div>
              <div class="step-math"><strong>下切侵蝕與向源侵蝕旺盛</strong>：形成 V 型谷、瀑布、急流、峽谷（如太魯閣峽谷）、壺穴。</div>
              <div class="step-desc">河流落差大、流速湍急，侵蝕力最強。若支流向源侵蝕切穿分水嶺，會奪取另一條河流的水道，發生「河流襲奪（River Capture）」，形成改向河、斷頭河與風口。</div>
            </div>
            <div class="step-row">
              <div class="step-num">中游（搬運與沉積）</div>
              <div class="step-math"><strong>河谷開闊、曲流發育</strong>：形成河階、沖積扇、氾濫平原。</div>
              <div class="step-desc">當河流由山區驟然流出平原，坡度驟降流速銳減，大量礫石沙土堆積在谷口形成「沖積扇」。在平原上河流側蝕強烈，形成迂迴「曲流」；洪水切穿曲流頸部形成「牛軛湖」。</div>
            </div>
            <div class="step-row">
              <div class="step-num">下游至河口</div>
              <div class="step-math"><strong>沉積堆積形成三角洲與潟湖</strong></div>
              <div class="step-desc">流速降至最低，細緻泥沙沉積形成三角洲（如尼羅河三角洲、恆河三角洲）；海岸波浪與沿岸流堆積沙洲，沙洲與陸地間圍成「潟湖」。</div>
            </div>
          </div>
        </section>
`;

const newGeoHuman = `
        <section class="content-section" id="geo-human">
          <h2>📌 人文地理：人口、都市與產業空間架構</h2>

          <h3>一、人口結構與人口金字塔三大基本型態</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>金字塔類型</th>
                <th>年齡結構外觀</th>
                <th>出生率與死亡率特徵</th>
                <th>代表國家與面臨課題</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>增長型（擴張型）</strong></td>
                <td>底部寬大（幼年人口多）、頂部狹窄（老年人口少），呈標準金字塔三角形。</td>
                <td>高出生率、死亡率顯著下降，自然增加率高。</td>
                <td>發展中國家（如撒哈拉以南非洲國家）。課題：幼年撫養比沉重、教育資源匱乏、糧食短缺就業難。</td>
              </tr>
              <tr>
                <td><strong>穩定型（靜止型）</strong></td>
                <td>各年齡層寬度相當，呈現圓頂鐘形（Bell-shaped）。</td>
                <td>出生率與死亡率皆低且相當，人口總量維持穩定。</td>
                <td>歐美成熟已開發國家（如法國、加拿大）。人口成長平緩，世代更替平衡。</td>
              </tr>
              <tr>
                <td><strong>縮減型（負成長型）</strong></td>
                <td>底部縮減狹窄（幼年人口少）、中上部相對膨脹，呈口小腹大的「罈型 / 倒葫蘆形」。</td>
                <td><strong>超低出生率</strong>、平均壽命大幅延長。</td>
                <td><strong>臺灣、日本、南韓、義大利</strong>。課題：<strong>少子化與高齡化（老年撫養比暴增）</strong>、勞動力短缺、健保勞保財政危機。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、都市內部空間結構三大學說</h3>
          <div class="step-box">
            <div class="step-box-title">🏙️ 都市土地利用同心同質理論對比</div>
            <div class="step-row">
              <div class="step-num">同心圓模式<br>(Burgess)</div>
              <div class="step-math">以芝加哥為研究對象：由內向外呈同心圓同心擴展。</div>
              <div class="step-desc">中心商業區 (CBD) $\rightarrow$ 轉型過渡帶 $\rightarrow$ 勞工住宅區 $\rightarrow$ 中產階級住宅區 $\rightarrow$ 通勤高級住宅區。地租負擔能力由中心向外遞減。</div>
            </div>
            <div class="step-row">
              <div class="step-num">扇形模式<br>(Hoyt)</div>
              <div class="step-math">沿著<strong>主要交通幹線（鐵路、運河、公路幹道）</strong>呈放射狀扇形延伸。</div>
              <div class="step-desc">工廠區與批發業緊鄰水陸交通線，高級住宅區往往沿著地勢高、景觀佳、遠離工業廢氣的幹道向外形成獨立扇形區段。</div>
            </div>
            <div class="step-row">
              <div class="step-num">多核心模式<br>(Harris & Ullman)</div>
              <div class="step-math">現代大都市擁有多個相異的功能中心，而非單一 CBD。</div>
              <div class="step-desc">汽車普及促使郊區次中心（衛星城鎮、高科技園區、機場航廈商業區）興起，互不相容的產業（重工業 vs 高級住宅）在空間上相互排斥獨立發展。</div>
            </div>
          </div>
        </section>
`;

// 4. CIVIC-POL & CIVIC-ECON (公民與社會)
const newCivicPol = `
        <section class="content-section" id="civic-pol">
          <h2>📌 政治與法律體系：憲政制度與法治精髓</h2>

          <h3>一、現代民主憲政三大政府體制深層對照</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>比較項目</th>
                <th>內閣制（英國、日本、德國）</th>
                <th>總統制（美國）</th>
                <th>半總統制/雙首長制（法國、臺灣）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>行政首長產生方式</strong></td>
                <td>由國會多數黨領袖出任總理/首相（行政立法融合）。</td>
                <td>總統由公民直接選舉或選舉人團產生，<strong>獨立於國會之外</strong>。</td>
                <td>總統由人民直選；行政院長/總理多由總統任命。</td>
              </tr>
              <tr>
                <td><strong>國家元首與行政首長</strong></td>
                <td><strong>虛位元首</strong>（英王、日皇）無實權；行政首長（首相）掌握實權。</td>
                <td><strong>元首與首長合一</strong>，總統身兼國家元首與最高行政首長。</td>
                <td><strong>雙首長分權</strong>：總統主掌國防、外交、兩岸；行政院長領導內政、綜理國家政務。</td>
              </tr>
              <tr>
                <td><strong>國會不信任案與解散權</strong></td>
                <td>國會可通過<strong>「不信任投票」</strong>倒閣；首相亦有權呈請元首<strong>解散國會</strong>重新大選。</td>
                <td><strong>完全無倒閣權！</strong>總統亦<strong>絕對無權解散國會</strong>。彼此權力分立嚴格制衡。</td>
                <td>立法院可對行政院長提不信任案；若通過，行政院長辭職並得呈請總統<strong>解散立法院</strong>。</td>
              </tr>
              <tr>
                <td><strong>法案覆議與覆決</strong></td>
                <td>無覆議問題（多數黨內閣掌握國會立法多數）。</td>
                <td>總統享有<strong>法案否決權</strong>；國會須以兩院各三分之二超高多數方能推翻否決。</td>
                <td>行政院對窒礙難行之法案得經總統核可移請立法院覆議；立院以全體立委過半數維持原案。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、刑法四大基本指導原則</h3>
          <div class="formula-block">
            <div class="formula-title">⚖️ 刑法法治核心底線</div>
            <p>• <strong>罪刑法定原則</strong>：行為的處罰，以行為時之法律有明文規定者為限（無法律即無犯罪、無法律即無刑罰）。嚴格<strong>禁止類推適用</strong>，且<strong>不溯及既往</strong>。<br>
               • <strong>刑罰謙抑性（最後手段性）</strong>：刑罰是國家剝奪人民生命、自由或財產最嚴厲的手段，唯有在民法、行政法手段不足以填補損害或維護法秩序時，方能動用刑法。<br>
               • <strong>個人責任原則（反對連坐）</strong>：一人做事一人當，罪責僅由行為人自負，嚴禁株連家族親友。<br>
               • <strong>比例原則</strong>：刑罰的嚴厲程度必須與其犯罪行為之惡性及所造成的法益損害相當（罪刑相當原則）。</p>
          </div>
        </section>
`;

const newCivicEcon = `
        <section class="content-section" id="civic-econ">
          <h2>📌 經濟學精要：供需彈性、市場機能與總體經濟</h2>

          <h3>一、「需求量變動」vs「需求變動」大考秒殺圖解</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>變動類型</th>
                <th>誘發變動原因</th>
                <th>圖形上的幾何表現</th>
                <th>大考經典實例辨識</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>需求量的變動<br>(Change in Quantity Demanded)</strong></td>
                <td><strong>「該商品本身價格」</strong>的變動。</td>
                <td>同一條既有需求曲線上<strong>「點與點之間的移動」</strong>。</td>
                <td>珍珠奶茶因店家促銷降價 10 元，導致購買杯數激增。</td>
              </tr>
              <tr>
                <td><strong>需求的變動<br>(Change in Demand)</strong></td>
                <td>該商品價格以外的因素：<strong>消費者所得增減、偏好轉變、替代品或互補品價格、未來價格預期、人口數量</strong>。</td>
                <td><strong>「整條需求曲線向右移（需求增加）或向左移（需求減少）」</strong>。</td>
                <td>• 咖啡豆價格大漲，使得替代品紅茶的「需求整條右移」。<br>• 健康意識抬頭減少糖分攝取，使得含糖飲料需求整條左移。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、需求價格彈性 $E_d$ 與總收益（TR）關係</h3>
          <div class="formula-block">
            <div class="formula-title">📉 廠商訂價策略核心：彈性與薄利多銷</div>
            <p>• <strong>富有彈性（$E_d > 1$）</strong>：需求量變動百分比大於價格變動百分比（消費者對價格敏感，替代品多）。<strong>廠商採「降價策略」能增加總收益（薄利多銷）</strong>！<br>
               • <strong>缺乏彈性（$E_d < 1$）</strong>：需求量變動百分比小於價格變動百分比（如生活必需品、醫療藥物）。<strong>降價只會導致總收益減少；農產品豐收時價格暴跌引發「穀賤傷農」即為典型實例</strong>！<br>
               • <strong>單一彈性（$E_d = 1$）</strong>：價格變動不影響總收益。</p>
          </div>

          <h3>三、市場失靈（Market Failure）四大根源</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>市場失靈原因</th>
                <th>經濟學本質定義</th>
                <th>後果與政府介入對策</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>外部效果 (Externality)</strong></td>
                <td>市場交易對第三方產生未反映在市場價格中的成本（負的外部性）或利益（正的外部性）。</td>
                <td>• <strong>外部成本</strong>（如排污）：私人生產過多 $\rightarrow$ 課徵皮古稅（碳稅）。<br>• <strong>外部效益</strong>（如疫苗、研發）：私人生產過少 $\rightarrow$ 提供政策補貼。</td>
              </tr>
              <tr>
                <td><strong>公共財 (Public Goods)</strong></td>
                <td>同時具備<strong>「無排他性（無法阻止未付費者享受）」</strong>與<strong>「無敵對性（一人消費不減少他人消費）」</strong>。</td>
                <td>市場產生「搭便車（Free Rider）」問題，私人市場不願提供，必須由<strong>政府透過稅收編列預算直接供給</strong>（如國防安全、路燈、燈塔）。</td>
              </tr>
              <tr>
                <td><strong>資訊不對稱 (Information Asymmetry)</strong></td>
                <td>交易一方掌握的資訊遠多於另一方。</td>
                <td>• <strong>逆向選擇（事前）</strong>：如二手車市場劣幣驅逐良幣（檸檬市場）。<br>• <strong>道德風險（事後）</strong>：如購買全額保險後疏於防範火災。政府建立產銷履歷與強制揭露制度。</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

html = html.replace(/<section class="content-section" id="hist-cn">[\s\S]*?<\/section>/i, newHistCn);
html = html.replace(/<section class="content-section" id="hist-world">[\s\S]*?<\/section>/i, newHistWorld);
html = html.replace(/<section class="content-section" id="geo-phys">[\s\S]*?<\/section>/i, newGeoPhys);
html = html.replace(/<section class="content-section" id="geo-human">[\s\S]*?<\/section>/i, newGeoHuman);
html = html.replace(/<section class="content-section" id="civic-pol">[\s\S]*?<\/section>/i, newCivicPol);
html = html.replace(/<section class="content-section" id="civic-econ">[\s\S]*?<\/section>/i, newCivicEcon);

fs.writeFileSync(socialPath, html, 'utf8');
console.log('social.html successfully deepened across all core chapters! New size: ' + Buffer.byteLength(html, 'utf8'));
