const fs = require('fs');
const path = require('path');

const socialPath = path.join(__dirname, '..', 'subjects', 'social.html');
let html = fs.readFileSync(socialPath, 'utf8');

// =========================================================================
// Deepen hist-tw (臺灣史)
// =========================================================================
const newHistTw = `
        <section class="content-section" id="hist-tw">
          <h2>📌 臺灣史核心縱深剖析</h2>
          <p>108 課綱臺灣史以「多元族群互動」、「現代化歷程」與「國際局勢交織」為主軸，著重歷史脈絡的因果推論與史料實證。</p>

          <h3>一、史前文化與原住民族脈絡</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>時代階段</th>
                <th>代表文化遺址</th>
                <th>生業型態與器具技術</th>
                <th>大考考古與歷史考點</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>舊石器時代<br>(距今約3萬-5千年前)</strong></td>
                <td><strong>長濱文化</strong>（臺東八仙洞）、網形文化、左鎮人（曾被誤認最早人類化石，後碳十四定年修正為約3000年前）</td>
                <td>已知用火，使用打製石器（礫石砍砸器、刮削器），過著採集與漁獵生活，無農業與陶器。</td>
                <td>臺灣目前已知最古老的文化層，展現海陸獵捕之原始適應。</td>
              </tr>
              <tr>
                <td><strong>新石器時代早期<br>(距今約7千-5千年前)</strong></td>
                <td><strong>大坌坑文化</strong>（新北八里、臺南南科）</td>
                <td>磨製石器、粗繩紋陶器、出現原始根莖作物的種植與農業萌芽。</td>
                <td><strong>「南島語族（Austronesian）」的原鄉之一！</strong>遺址印證臺灣為南島語族擴散源頭的「出臺灣說」。</td>
              </tr>
              <tr>
                <td><strong>新石器時代中晚期<br>(距今約5千-2千年前)</strong></td>
                <td><strong>圓山文化</strong>（貝塚、玉器）、<strong>卑南文化</strong>（臺東，石板棺、精緻玉玦玉耳飾）</td>
                <td>精緻磨製石器、拔齒風俗、發達的稻作農業、巨石文化（石柱）、豐富玉器工藝。</td>
                <td>卑南遺址出土數千座石板棺與玉器，印證當時已具高度社會階層分工與海外跨島貿易。</td>
              </tr>
              <tr>
                <td><strong>金屬器時代<br>(距今約2千-4百年前)</strong></td>
                <td><strong>十三行文化</strong>（新北八里）</td>
                <td>已掌握<strong>煉鐵技術</strong>、幾何印紋陶、出土中國唐宋銅錢與海外玻璃珠。</td>
                <td>證實臺灣原住民族（平埔族凱達格蘭族祖先）很早便與中國沿海及東南亞建立海上貿易網絡。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、十七世紀大航海時代與荷西治臺機制</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>統治政權</th>
                <th>統治據點與範圍</th>
                <th>經濟掠奪與轉口貿易</th>
                <th>族群治理與反抗事件</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>荷蘭聯合東印度公司 (VOC)<br>(1624-1662)</strong></td>
                <td>大員（今臺南安平熱蘭遮城）、赤崁普羅民遮城，勢力延伸至中南部及東部金礦。</td>
                <td>以臺灣為<strong>轉口貿易港</strong>：出口鹿皮至日本、砂糖至波斯與歐洲、轉運中國絲綢與瓷器；引進黃牛、高麗菜、芒果等物種。</td>
                <td>
                  • 召開<strong>「地方日（長老會議）」</strong>進行間接統治。<br>
                  • 實施<strong>「贌社制」</strong>（標賣原住民部落包稅權給漢人商人）。<br>
                  • 創制<strong>「新港文書」</strong>（以羅馬拼音拼寫西拉雅語傳教與立約）。<br>
                  • 1652 年爆發漢人<strong>郭懷一事件</strong>，遭荷軍聯手原住民殘酷鎮壓。
                </td>
              </tr>
              <tr>
                <td><strong>西班牙帝國<br>(1626-1642)</strong></td>
                <td>雞籠（基隆和平島聖薩爾瓦多城）、淡水（聖多明哥城），控制北臺灣。</td>
                <td>保護馬尼拉與澳門之航線安全，並向日本與中國開拓天主教傳教與貿易。</td>
                <td>後因日本鎖國貿易受阻、菲律賓叛亂撤兵，1642 年遭荷蘭人北上驅逐。</td>
              </tr>
            </tbody>
          </table>

          <h3>三、明鄭東寧政權 (1662-1683)</h3>
          <ul>
            <li><strong>陳永華之政略</strong>：被譽為「鄭氏諸葛」。推行屯田軍制（解軍糧之急）、設立孔廟（全臺首學）、引進瓦雀曬鹽法（改煎鹽為日曬）、推展對日對英走私貿易。</li>
            <li><strong>政權更迭</strong>：鄭成功 $\rightarrow$ 鄭經（拓展對英東印度公司貿易、三藩之亂出兵金廈） $\rightarrow$ 鄭克塽。1683 年清朝施琅率水師於澎湖海戰大敗劉國軒，明鄭降清。</li>
          </ul>

          <h3>四、清治時期 (1683-1895) 政策轉型與社會劇變</h3>
          <div class="step-box">
            <div class="step-box-title">⚖️ 清廷對臺治理方針的兩大歷史階段</div>
            <div class="step-row">
              <div class="step-num">消極治臺<br>(1683-1874)</div>
              <div class="step-math"><strong>「防臺重於治臺」：渡臺禁令、劃界封山、班兵三年輪調、官吏不准攜眷</strong></div>
              <div class="step-desc">
                • 社會後果：性別比極端失衡，形成大量單身漢（<strong>羅漢腳</strong>）；社會動盪頻仍。<br>
                • <strong>三大民變</strong>：朱一貴事件（1721，鴨母王建國）、林爽文事件（1786，天地會起事，清設嘉義縣以示褒獎）、戴潮春事件（1862，八卦會）。<br>
                • <strong>族群械鬥</strong>：閩粵械鬥、漳泉械鬥、頂下郊拚（同安人 vs 三邑人爭奪艋舺商埠碼頭）。
              </div>
            </div>
            <div class="step-row">
              <div class="step-num">積極治臺<br>(1874-1895)</div>
              <div class="step-math"><strong>涉外危機刺激：牡丹社事件 (1874) $\rightarrow$ 沈葆楨開山撫番；中法戰爭 (1884) $\rightarrow$ 劉銘傳建省 (1885)</strong></div>
              <div class="step-desc">
                • <strong>沈葆楨</strong>：廢除渡臺禁令，修築北中南三條開山通道，增設恆春縣與臺北府。<br>
                • <strong>劉銘傳（首任巡撫）</strong>：推動現代化事業。修築基隆至新竹鐵路、架設全臺電報線、設立西學堂與郵政總局、清理田賦（減四留六改革大租戶戶口與稅賦）。
              </div>
            </div>
          </div>

          <h3>五、日治時期 (1895-1945) 殖民統治與抗爭運動演變</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>歷史時期</th>
                <th>統治機制與法制</th>
                <th>抗爭模式與代表團體</th>
                <th>經濟與社會現代化建設</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>武裝抗日時期<br>(1895-1915)</strong></td>
                <td><strong>六三法</strong>（賦予臺灣總督行政與立法兼備的律令制定權）、<strong>警察政治</strong>（保甲制度連坐責任）。</td>
                <td>由前期的反割臺義軍（乙未戰爭，丘逢甲、徐驤、劉永福）轉為民間武裝抗日（簡大獅、柯鐵虎、林少貓「抗日三猛」），至 1915 <strong>噍吧哖事件（余清芳，最後一次漢人武裝抗日）</strong>告終。</td>
                <td>後藤新平推動三大基礎調查：<strong>土地調查、人口調查（戶口普查）、舊慣調查</strong>；統一度量衡與貨幣；修築南北縱貫鐵路（1908 全線通車）。</td>
              </tr>
              <tr>
                <td><strong>非暴力政治文化抗爭<br>(1915-1937)</strong></td>
                <td>文官總督時期（內地延長主義、同化政策），受一次大戰後威爾遜<strong>「民族自決」</strong>思潮衝擊。</td>
                <td>
                  • <strong>臺灣議會設置請願運動</strong>（林獻堂、蔡培火，歷時 14 年共 15 次請願）。<br>
                  • <strong>臺灣文化協會</strong>（1921，蔣渭水）：發行會報、辦理巡迴文化演講、讀報社，啟發民智。<br>
                  • <strong>臺灣民眾黨</strong>（1927，臺灣歷史上第一個合法政黨）。
                </td>
                <td>
                  • <strong>「農業臺灣，工業日本」</strong>：新式糖廠設立、磯永吉培育出「蓬萊米」（1926）。<br>
                  • <strong>八田與一</strong>設計興築<strong>嘉南大圳與烏山頭水庫</strong>（1930 完工，使嘉南平原成為沃野穀倉）。<br>
                  • 日月潭水力發電所完工（1934），帶動輕化學工業萌芽。
                </td>
              </tr>
              <tr>
                <td><strong>皇民化運動時期<br>(1937-1945)</strong></td>
                <td>軍事動員、太平洋戰爭爆發、改任武官總督。</td>
                <td>政治抗爭遭嚴厲取締消弭，轉入地下或左翼反法西斯思潮。</td>
                <td>推行「國語（日語）普及」、改日本姓名、參拜神社、廢除寺廟神像；實施物資配給、志願兵制度與徵用臺籍日本兵、慰安婦歷史傷痛。</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

html = html.replace(/<section class="content-section" id="hist-tw">[\s\S]*?<\/section>/i, newHistTw);
fs.writeFileSync(socialPath, html, 'utf8');
console.log('social.html hist-tw successfully deepened!');
