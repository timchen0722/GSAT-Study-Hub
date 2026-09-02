const fs = require('fs');
const path = require('path');

const chPath = path.join(__dirname, '..', 'subjects', 'chinese.html');
let html = fs.readFileSync(chPath, 'utf8');

// 1. CH2 (字音字形)
const newCh2 = `
        <section class="content-section" id="ch2">
          <h2>📌 貳、字音字形深層精析與大考防坑大全</h2>
          <p>學測第 1 題與第 2 題歷年必考字音與字形。大考出題原則：不考罕見怪僻字，專考「日常頻繁使用卻極易讀錯」與「形近音異易混淆」之高頻字。</p>

          <h3>一、歷屆大考最高頻易錯讀音 30 選</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 15%;">字詞</th>
                <th style="width: 15%;">教育部審定音</th>
                <th style="width: 20%;">常見口語誤讀（陷阱）</th>
                <th style="width: 50%;">詞義與典故例句</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>暴殄天物</strong></td>
                <td>ㄅㄠˋ <strong>ㄊㄧㄢˇ</strong> ㄊㄧㄢ ㄨˋ</td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄓㄣˇ</td>
                <td>殄，殘害滅絕。比喻糟蹋浪費自然物資或物品。</td>
              </tr>
              <tr>
                <td><strong>虛與委蛇</strong></td>
                <td>ㄒㄩ ㄩˇ <strong>ㄨㄟ ㄧˊ</strong></td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄨㄟˇ ㄕㄜˊ</td>
                <td>出自《莊子》。形容假意敷衍應酬，心不誠敬。</td>
              </tr>
              <tr>
                <td><strong>拾級而上</strong></td>
                <td><strong>ㄕㄜˋ</strong> ㄐㄧˊ ㄦˊ ㄕㄤˋ</td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄕˊ</td>
                <td>拾，躡足逐級登階。順著石階一步步往上走。</td>
              </tr>
              <tr>
                <td><strong>怙惡不悛</strong></td>
                <td>ㄏㄨˋ ㄜˋ ㄅㄨˋ <strong>ㄑㄩㄢ</strong></td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄐㄩㄣˋ / ㄑㄩㄢˊ</td>
                <td>怙，依仗；悛，悔改。堅持作惡，至死不改悔。</td>
              </tr>
              <tr>
                <td><strong>自怨自艾</strong></td>
                <td>ㄗˋ ㄩㄢˋ ㄗˋ <strong>ㄧˋ</strong></td>
                <td><span style="color:var(--color-accent-red討);">❌ 誤讀：</span>ㄞˋ</td>
                <td>艾，割除改正。原指悔恨自身錯誤並改正；現多指悔恨自責。</td>
              </tr>
              <tr>
                <td><strong>越俎代庖</strong></td>
                <td>ㄩㄝˋ <strong>ㄗㄨˇ</strong> ㄉㄞˋ <strong>ㄆㄠˊ</strong></td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄓㄨˇ / ㄅㄠ</td>
                <td>俎，祭器；庖，廚師。比喻逾越本分代人任事。</td>
              </tr>
              <tr>
                <td><strong>羽扇綸巾</strong></td>
                <td>ㄩˇ ㄕㄢˋ <strong>ㄍㄨㄢ</strong> ㄐㄧㄣ</td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄌㄨㄣˊ</td>
                <td>綸巾，青絲帶編成的頭巾。形容諸葛亮（或周瑜）從容儒雅之風采。</td>
              </tr>
              <tr>
                <td><strong>令人咋舌</strong></td>
                <td>ㄌㄧㄥˋ ㄖㄣˊ <strong>ㄓㄚˊ</strong> ㄕㄜˊ</td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄗㄜˊ</td>
                <td>咋，咬。咬住舌頭說不出話，形容驚訝、害怕或說不出話的樣子。</td>
              </tr>
              <tr>
                <td><strong>提綱挈領</strong></td>
                <td>ㄊㄧˊ ㄍㄤ <strong>ㄑㄧㄝˋ</strong> ㄌㄧㄥˇ</td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄑㄧˋ</td>
                <td>挈，提拉。比喻抓住事物的關鍵核心與綱要。</td>
              </tr>
              <tr>
                <td><strong>風聲鶴唳</strong></td>
                <td>ㄈㄥ ㄕㄥ ㄏㄜˋ <strong>ㄌㄧˋ</strong></td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄌㄟˋ</td>
                <td>唳，鳥鳴。形容極度疑懼驚慌、草木皆兵之狀。</td>
              </tr>
              <tr>
                <td><strong>同仇敵愾</strong></td>
                <td>ㄊㄨㄥˊ ㄔㄡˊ ㄉㄧˊ <strong>ㄎㄞˋ</strong></td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄑㄧˋ</td>
                <td>愾，憤恨。共同抱著對敵人的憤恨團結禦敵。</td>
              </tr>
              <tr>
                <td><strong>追本溯源</strong></td>
                <td>ㄓㄨㄟ ㄅㄣˇ <strong>ㄙㄨˋ</strong> ㄩㄢˊ</td>
                <td><span style="color:var(--color-accent-red);">❌ 誤讀：</span>ㄕㄨㄛˋ</td>
                <td>溯，逆流而上。追尋事情的根本與源頭。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、一字多音多義辨析寶典</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>多音字</th>
                <th>字音</th>
                <th>語境義項與教材經典例句</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="3"><strong>差</strong></td>
                <td>ㄔㄚ</td>
                <td>• 差別、差距：陰錯陽<strong>差</strong>、<strong>差</strong>強人意</td>
              </tr>
              <tr>
                <td>ㄔㄞ</td>
                <td>• 派遣、差使：欽<strong>差</strong>大臣、聽候<strong>差</strong>遣</td>
              </tr>
              <tr>
                <td>ㄘ</td>
                <td>• 參差不齊（長短不一）：參<strong>差</strong>荇菜，左右流之（《詩經》）</td>
              </tr>
              <tr>
                <td rowspan="3"><strong>屬</strong></td>
                <td>ㄕㄨˇ</td>
                <td>• 歸屬、類別：有情人終成眷<strong>屬</strong>、忠實部<strong>屬</strong></td>
              </tr>
              <tr>
                <td>ㄓㄨˇ</td>
                <td>• 綴輯寫作：屈平疾王聽之不聰也，故憂愁思而<strong>屬</strong>文（《史記》）</td>
              </tr>
              <tr>
                <td>ㄓㄨˇ</td>
                <td>• 勸請注酒：舉酒<strong>屬</strong>客，誦明月之詩（蘇軾〈赤壁賦〉）</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>識</strong></td>
                <td>ㄕˋ</td>
                <td>• 認識、見識：博聞強<strong>識</strong>、遠見卓<strong>識</strong></td>
              </tr>
              <tr>
                <td>ㄓˋ</td>
                <td>• 標記、記誦（通「誌」）：默而<strong>識</strong>之，學而不厭（《論語》）</td>
              </tr>
            </tbody>
          </table>

          <h3>三、大考最高頻「同音形近易錯字」對照</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>易錯詞彙組</th>
                <th>正確字形</th>
                <th>常見錯字（陷阱）</th>
                <th>字義辨析口訣</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>趨之若鶩 vs 心無旁騖</strong></td>
                <td>趨之若<strong>鶩</strong><br>心無旁<strong>騖</strong></td>
                <td>❌ 趨之若騖<br>❌ 心無旁鶩</td>
                <td>• <strong>鶩</strong>（鳥部）：野鴨。像群鴨爭食般湧上。<br>• <strong>騖</strong>（馬部）：奔馳。心思專一不奔馳分心。</td>
              </tr>
              <tr>
                <td><strong>按部就班</strong></td>
                <td>按<strong>部</strong>就班</td>
                <td>❌ 按「步」就班</td>
                <td>部，門類門次；班，行列。按照次序步驟行事。</td>
              </tr>
              <tr>
                <td><strong>不脛而走</strong></td>
                <td>不<strong>脛</strong>而走</td>
                <td>❌ 不「徑」而走</td>
                <td>脛，小腿。沒有腿卻能跑，比喻消息傳播極為迅速。</td>
              </tr>
              <tr>
                <td><strong>甘拜下風</strong></td>
                <td>甘<strong>拜</strong>下風</td>
                <td>❌ 甘「敗」下風</td>
                <td>拜，臣服行禮。指真心佩服認輸，非失敗之「敗」。</td>
              </tr>
              <tr>
                <td><strong>再接再厲</strong></td>
                <td>再接再<strong>厲</strong></td>
                <td>❌ 再接再「勵」</td>
                <td>厲，通「礪」，磨礪砥石。比喻公雞相鬥前磨嘴振奮，繼續努力。</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

// 2. CH7 (修辭與文法)
const newCh7 = `
        <section class="content-section" id="ch7">
          <h2>📌 柒、學測修辭與語法精髓（十二大修辭系統解構）</h2>
          <p>學測不再考死板名詞填空，而是考「修辭對文意表達的效果」與「文句間修辭手法的異同判定」。</p>

          <h3>一、譬喻四大家族層級比較表</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>譬喻類型</th>
                <th>本體（被比者）</th>
                <th>喻詞（比喻詞）</th>
                <th>喻體（借比事物）</th>
                <th>教材代表經典句</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>明喻</strong></td>
                <td>✅ 出現</td>
                <td>✅ 像、如、似、猶若</td>
                <td>✅ 出現</td>
                <td>• 人生<strong>如</strong>逆旅，我亦是行人。（蘇軾）<br>• 那河畔的金柳，是夕陽中的新娘。（徐志摩）</td>
              </tr>
              <tr>
                <td><strong>暗喻（隱喻）</strong></td>
                <td>✅ 出現</td>
                <td>✅ <strong>是、為、成了、等於</strong></td>
                <td>✅ 出現</td>
                <td>• 兒童<strong>是</strong>國家的幼苗。<br>• 露從今夜白，月<strong>是</strong>故鄉明。（杜甫）</td>
              </tr>
              <tr>
                <td><strong>略喻</strong></td>
                <td>✅ 出現</td>
                <td>❌ <strong>省略喻詞</strong></td>
                <td>✅ 出現</td>
                <td>• 人心，不同各如其面 $\rightarrow$ <strong>人心（如）其面</strong>。<br>• 菊，花之隱逸者也。（周敦頤）</td>
              </tr>
              <tr>
                <td><strong>借喻（最高階）</strong></td>
                <td>❌ <strong>隱沒不現</strong></td>
                <td>❌ <strong>省略喻詞</strong></td>
                <td>✅ <strong>只現喻體</strong></td>
                <td>• <strong>松柏後凋於歲寒</strong>（本體「君子品德」與喻詞皆隱去，直接以松柏借喻君子之堅毅）。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、轉化三種型態深度判讀</h3>
          <div class="step-box">
            <div class="step-box-title">🌿 轉化修辭三種變體</div>
            <div class="step-row">
              <div class="step-num">1. 人性化（擬人）</div>
              <div class="step-math">將物賦予人類的動作、情感與意志</div>
              <div class="step-desc">例句：<em>「感時花濺淚，恨別鳥驚心。」</em>（花會流淚、鳥有驚懼之心，杜甫以此抒發國破離亂之悲痛）。</div>
            </div>
            <div class="step-row">
              <div class="step-num">2. 物性化（擬物）</div>
              <div class="step-math">將人當建物體描寫，或將甲物當作乙物描寫</div>
              <div class="step-desc">例句：<em>「我銜著這條長街，像銜著一根骨頭。」</em>（將詩人擬物為犬狗，展現都市流浪的卑微感）。</div>
            </div>
            <div class="step-row">
              <div class="step-num">3. 形象化（虛擬實）</div>
              <div class="step-math">將抽象虛無的情感、時間，具象化為看得到、摸得著的實體</div>
              <div class="step-desc">例句：<em>「問君能有幾多愁？恰似一江春水向東流。」</em>（李煜將無形的愁緒，化為奔流不息、滿江傾瀉的江水）。</div>
            </div>
          </div>

          <h3>三、倒裝句還原技巧（古文閱讀必備）</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>倒裝類型</th>
                <th>原文倒裝句式</th>
                <th>語法正常順序還原</th>
                <th>還原依據與解讀意義</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>否定句賓語提前</strong></td>
                <td>莫我知也夫！</td>
                <td>莫知我也夫！</td>
                <td>否定詞「莫」後面，代名詞受詞「我」必須提前至動詞「知」前面。</td>
              </tr>
              <tr>
                <td><strong>疑問句代名詞受詞提前</strong></td>
                <td>沛公安在？</td>
                <td>沛在何安（沛公在何處）？</td>
                <td>疑問代詞「安（哪裡）」作介詞或動詞「在」之受詞，提前置於首位。</td>
              </tr>
              <tr>
                <td><strong>主謂倒裝（強調謂語）</strong></td>
                <td>甚矣，汝之不惠！</td>
                <td>汝之不惠，甚矣！</td>
                <td>愚公移山中智叟的話，先喊出「太嚴重了！」，強調責備語氣。</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

// 3. CH8 (應用文)
const newCh8 = `
        <section class="content-section" id="ch8">
          <h2>📌 捌、應用文書寫規範與生活實戰全攻略</h2>
          <p>應用文為大考鑑別考生「傳統人際禮儀常識」的核心重點，包含書信格式、信封封文、題辭與柬帖用語。</p>

          <h3>一、書信信封與啟封詞禁忌（歷屆必考大陷阱）</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>收信人關係</th>
                <th>信封啟封詞（信封中路）</th>
                <th>信內提稱語（信件首行）</th>
                <th>結尾敬辭（自稱處）</th>
                <th>大考最致命陷阱</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>祖父母 / 父母</strong></td>
                <td><strong>安啟、福啟</strong></td>
                <td><strong>膝下、膝前</strong></td>
                <td>叩稟、叩上、敬稟</td>
                <td><span style="color:var(--color-accent-red);">❌ 絕對不可用「敬啟」！</span>信封上的字是請收信人「打開」，「敬啟」意為「請您恭敬地打開我的信」，極為大不敬！</td>
              </tr>
              <tr>
                <td><strong>師長</strong></td>
                <td><strong>道啟</strong></td>
                <td><strong>函丈、道鑒</strong></td>
                <td>謹上、敬上、受業某某拜上</td>
                <td>信封切勿用「教啟」，「教」有命人拆閱之嫌。函丈意為請侍立於師長丈席之外聽教。</td>
              </tr>
              <tr>
                <td><strong>長輩（伯叔長官）</strong></td>
                <td><strong>賜啟、崇啟</strong></td>
                <td><strong>尊前、尊鑒</strong></td>
                <td>謹上、敬上</td>
                <td>信封稱長官為某某先生「鈞啟」亦可。</td>
              </tr>
              <tr>
                <td><strong>平輩（朋友同學）</strong></td>
                <td><strong>大啟、台啟</strong></td>
                <td><strong>台鑒、惠鑒、左右</strong></td>
                <td>頓首、敬啟、拜啟、謹啟</td>
                <td>信內文末自稱「敬啟」方為合適（我恭敬地陳述）。</td>
              </tr>
              <tr>
                <td><strong>晚輩</strong></td>
                <td><strong>收啟、啟</strong></td>
                <td><strong>知悉、如晤、青鑒</strong></td>
                <td>示、手書、字</td>
                <td>信封不可對晚輩用「大啟」、「安啟」。</td>
              </tr>
            </tbody>
          </table>

          <h3>二、歷屆大考高頻題辭分類大全</h3>
          <table class="data-table">
            <thead>
              <tr>
                <th>題辭場合</th>
                <th>適用對象</th>
                <th>高頻題辭詞庫</th>
                <th>大考常考混淆辨析</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowspan="2"><strong>婚嫁慶賀</strong></td>
                <td>新婚</td>
                <td><strong>百年好合、珠聯璧合、天作之合、鳳凰于飛、琴瑟和鳴、宜室宜家</strong></td>
                <td>「宜室宜家」出自《詩經·桃夭》，形容女子出嫁家庭美滿。</td>
              </tr>
              <tr>
                <td>嫁女</td>
                <td><strong>之子于歸、跨鳳乘龍、桃灼呈祥</strong></td>
                <td>「于歸」專指<strong>女子出嫁</strong>，不可用於男方娶妻。</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>生育之喜</strong></td>
                <td>生男</td>
                <td><strong>弄璋之喜、螽斯衍慶、麟趾呈祥、夢熊徵祥</strong></td>
                <td>璋，古代美玉，象徵日後為官執玉圭。</td>
              </tr>
              <tr>
                <td>生女</td>
                <td><strong>弄瓦之喜、明珠入掌、輝增彩悅</strong></td>
                <td>瓦，紡車上的陶製紡輪，象徵紡織女紅。</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>壽誕慶賀</strong></td>
                <td>男壽</td>
                <td><strong>天錫純嘏、南山獻頌、齒德俱尊、椿庭日暖</strong></td>
                <td><strong>椿庭</strong>借代父親。莊子：「上古有大椿者，以八千歲為春」。</td>
              </tr>
              <tr>
                <td>女壽</td>
                <td><strong>萱堂日暖、寶婺星輝、慈竹風和、瑤池春永</strong></td>
                <td><strong>萱堂</strong>借代母親。古人植萱草於北堂，借指忘憂之母。</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>哀輓悼詞</strong></td>
                <td>男歿</td>
                <td><strong>哲人其萎、道範長存、騎鯨道山、福壽全歸</strong>（高壽逝世）</td>
                <td>「哲人其萎」多輓德高望重之師長或學者。</td>
              </tr>
              <tr>
                <td>女歿</td>
                <td><strong>母儀足式、女宗共仰、萱萎北堂、寶婺星沉</strong></td>
                <td>「母儀足式」專輓年長女性賢德榜樣。</td>
              </tr>
              <tr>
                <td rowspan="2"><strong>行業專題</strong></td>
                <td>醫界</td>
                <td><strong>杏林春暖、懸壺濟世、仁心仁術、術精岐黃</strong></td>
                <td>杏林出自董奉為人治病不取錢，種杏樹成林之典故。</td>
              </tr>
              <tr>
                <td>教育界</td>
                <td><strong>春風化雨、桃李滿門、立雪神傷</strong>（悼師長）、<strong>百年樹人</strong></td>
                <td>程門立雪典故指尊師重道。</td>
              </tr>
            </tbody>
          </table>
        </section>
`;

html = html.replace(/<section class="content-section" id="ch2">[\s\S]*?<\/section>/i, newCh2);
html = html.replace(/<section class="content-section" id="ch7">[\s\S]*?<\/section>/i, newCh7);
html = html.replace(/<section class="content-section" id="ch8">[\s\S]*?<\/section>/i, newCh8);

fs.writeFileSync(chPath, html, 'utf8');
console.log('chinese.html successfully deepened ch2, ch7, ch8! New size: ' + Buffer.byteLength(html, 'utf8'));
