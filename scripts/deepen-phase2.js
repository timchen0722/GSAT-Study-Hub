const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, '..', 'subjects');

// ==========================================
// 1. CHINESE (國文) - Add 拾伍, 拾陸
// ==========================================
const chinesePhase2 = {
  file: 'chinese.html',
  newNav: [
    { id: 'ch-culture-knowledge', label: '拾伍、傳統文化常識精要（干支・節慶・年齡）' },
    { id: 'ch-rhetoric-particles', label: '拾陸、大考修辭精析與高頻文言虛詞總表' }
  ],
  content: `
      <!-- 拾伍、傳統文化常識精要 -->
      <section id="ch-culture-knowledge" class="content-section animate-fade-in-up">
        <h2>拾伍、傳統文化常識精要（天干地支・傳統節慶・年齡借代）🏮</h2>
        <p>學測國文常將傳統文化常識融入古典詩詞判讀與現代情境題。以下彙整歷屆出題頻率最高的三大主題：</p>

        <h3>1. 天干地支與干支紀年法</h3>
        <p>十天干（甲乙丙丁戊己庚辛壬癸）與十二地支（子丑寅卯辰巳午未申酉戌亥）依序相配，60 年一輪迴（一甲子）。</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>地支</th>
              <th>生肖</th>
              <th>對應月份（農曆）</th>
              <th>對應時辰（24小時制）</th>
              <th>大考詩詞意象關鍵字</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>子</strong></td>
              <td>鼠</td>
              <td>十一月（建子）</td>
              <td>23:00 - 01:00（半夜子時）</td>
              <td>夜半、子夜、三更（午夜寒霜）</td>
            </tr>
            <tr>
              <td><strong>丑</strong></td>
              <td>牛</td>
              <td>十二月（建丑）</td>
              <td>01:00 - 03:00（四更）</td>
              <td>雞鳴、荒雞（起舞）</td>
            </tr>
            <tr>
              <td><strong>寅</strong></td>
              <td>虎</td>
              <td>正月（建寅）</td>
              <td>03:00 - 05:00（五更）</td>
              <td>平旦、拂曉、破曉</td>
            </tr>
            <tr>
              <td><strong>卯</strong></td>
              <td>兔</td>
              <td>二月（建卯）</td>
              <td>05:00 - 07:00</td>
              <td>日出、晨曦、旭日初升</td>
            </tr>
            <tr>
              <td><strong>辰</strong></td>
              <td>龍</td>
              <td>三月（建辰）</td>
              <td>07:00 - 09:00</td>
              <td>食時（早飯時間）</td>
            </tr>
            <tr>
              <td><strong>巳</strong></td>
              <td>蛇</td>
              <td>四月（建巳）</td>
              <td>09:00 - 11:00</td>
              <td>隅中（臨近中午）</td>
            </tr>
            <tr>
              <td><strong>午</strong></td>
              <td>馬</td>
              <td>五月（建午）</td>
              <td>11:00 - 13:00（日正當中）</td>
              <td>正午、亭午、日中</td>
            </tr>
            <tr>
              <td><strong>未</strong></td>
              <td>羊</td>
              <td>六月（建未）</td>
              <td>13:00 - 15:00</td>
              <td>日昳、日斜（太陽偏西）</td>
            </tr>
            <tr>
              <td><strong>申</strong></td>
              <td>猴</td>
              <td>七月（建申）</td>
              <td>15:00 - 17:00</td>
              <td>晡時（午後黃昏前）</td>
            </tr>
            <tr>
              <td><strong>酉</strong></td>
              <td>雞</td>
              <td>八月（建酉）</td>
              <td>17:00 - 19:00</td>
              <td>日入、傍晚、薄暮、黃昏</td>
            </tr>
            <tr>
              <td><strong>戌</strong></td>
              <td>狗</td>
              <td>九月（建戌）</td>
              <td>19:00 - 21:00（一更）</td>
              <td>黃昏、初更、人定</td>
            </tr>
            <tr>
              <td><strong>亥</strong></td>
              <td>豬</td>
              <td>十月（建亥）</td>
              <td>21:00 - 23:00（二更）</td>
              <td>人定、夜闌、深夜</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 傳統四大節慶與古典詩詞對應</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>節日</th>
              <th>農曆日期</th>
              <th>習俗與特色景物</th>
              <th>經典名句與考題辨識</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>春節 / 元宵</strong></td>
              <td>正月初一 / 正月十五</td>
              <td>屠蘇酒、桃符、爆竹；賞花燈、湯圓、東風夜放花千樹</td>
              <td>• 「千門萬戶曈曈日，總把新桃換舊符。」（王安石）<br>• 「月上柳梢頭，人約黃昏後。」（歐陽脩·生查子）</td>
            </tr>
            <tr>
              <td><strong>清明 / 寒食</strong></td>
              <td>春分後15日 / 清明前一二日</td>
              <td>禁火冷食、掃墓踏青、楊柳插門、杏花微雨</td>
              <td>• 「清明時節雨紛紛，路上行人欲斷魂。」（杜牧）<br>• 「春城無處不飛花，寒食東風御柳斜。」（韓翃）</td>
            </tr>
            <tr>
              <td><strong>端午節</strong></td>
              <td>五月初五</td>
              <td>包粽子、划龍舟、掛艾草菖蒲、飲雄黃酒、佩香包</td>
              <td>• 「節分端午自誰言，萬古傳聞為屈原。」（文天祥）<br>• 「彩線輕纏紅玉臂，小符斜挂綠雲鬟。」（蘇軾）</td>
            </tr>
            <tr>
              <td><strong>七夕節</strong></td>
              <td>七月初七</td>
              <td>牛郎織女相會、乞巧、穿針引線、銀河鵲橋</td>
              <td>• 「迢迢牽牛星，皎皎河漢女。」（古詩十九首）<br>• 「金風玉露一相逢，便勝卻人間無數。」（秦觀·鵲橋仙）</td>
            </tr>
            <tr>
              <td><strong>中秋節</strong></td>
              <td>八月十五</td>
              <td>賞月、吃月餅、桂花飄香、玉兔嫦娥蟾蜍</td>
              <td>• 「但願人長久，千里共嬋娟。」（蘇軾·水調歌頭）<br>• 「西北望鄉何處是，東南見月幾回圓。」（白居易）</td>
            </tr>
            <tr>
              <td><strong>重陽節</strong></td>
              <td>九月初九</td>
              <td>登高望遠、賞菊、飲菊花酒、佩戴茱萸</td>
              <td>• 「遙知兄弟登高處，遍插茱萸少一人。」（王維）<br>• 「滿地黃花堆積，憔悴損，如今有誰堪摘？」（李清照）</td>
            </tr>
          </tbody>
        </table>

        <h3>3. 年齡借代稱謂大全</h3>
        <div class="formula-block">
          <div class="formula-title">👶 年齡代稱速記年表</div>
          <p>• <strong>襁褓</strong>：未滿周歲嬰兒<br>
             • <strong>孩提</strong>：2 ~ 3 歲幼兒（能提抱、有笑意）<br>
             • <strong>總角 / 垂髫</strong>：童年時期（8 ~ 14 歲）<br>
             • <strong>豆蔻年華</strong>：女子 13 ~ 14 歲（杜牧：「娉娉嫋嫋十三餘，豆蔻梢頭二月初」）<br>
             • <strong>及笄之年</strong>：女子 15 歲（結髮加笄，成年可婚嫁）<br>
             • <strong>破瓜 / 二八年華</strong>：女子 16 歲（瓜字拆為兩個八；$2 \\times 8 = 16$）<br>
             • <strong>弱冠之年</strong>：男子 20 歲（行冠禮成年，體猶未壯故曰弱）<br>
             • <strong>而立之年</strong>：30 歲（孔子：「三十而立」）<br>
             • <strong>不惑之年</strong>：40 歲（孔子：「四十而不惑」）<br>
             • <strong>知命之年 / 半百</strong>：50 歲（孔子：「五十而知天命」）<br>
             • <strong>花甲 / 耳順之年</strong>：60 歲（六十干支循環一周；孔子：「六十而耳順」）<br>
             • <strong>古稀之年 / 懸車之年</strong>：70 歲（杜甫：「人生七十古來稀」；致仕退休之年）<br>
             • <strong>耄耋之年</strong>：80 ~ 90 歲（耄，八九十歲；耋，七八十歲）<br>
             • <strong>期頤之年</strong>：100 歲（期，頤養天年）</p>
        </div>
      </section>

      <!-- 拾陸、大考修辭精析與高頻文言虛詞總表 -->
      <section id="ch-rhetoric-particles" class="content-section animate-fade-in-up">
        <h2>拾陸、大考修辭精析與高頻文言虛詞總表 ✒️</h2>

        <h3>1. 歷屆大考最高頻易混淆修辭辨析</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>修辭法</th>
              <th>定義特質</th>
              <th>經典考題範例</th>
              <th>常混淆對比</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>借代</strong></td>
              <td>不直接說出本體，而借與本體密切相關之事物代替。</td>
              <td>• 「無<strong>絲竹</strong>之亂耳」（借代音樂）<br>• 「巾幗不讓<strong>鬚眉</strong>」（借代男子）<br>• 「臣本<strong>布衣</strong>」（借代平民）</td>
              <td><strong>vs. 借喻</strong>：借代著重「相關性」（如以特徵代全體）；借喻著重「相似性」（完全省略本體與喻詞）。</td>
            </tr>
            <tr>
              <td><strong>互文（互文足義）</strong></td>
              <td>上下文語意互相補充，單看一句不完整，合看方得全貌。</td>
              <td>• 「<strong>秦時明月漢時關</strong>」（秦漢時的明月與關隘）<br>• 「<strong>主人下馬客上船</strong>」（主人與客人一同下馬並登船）<br>• 「<strong>不以物喜，不以己悲</strong>」（不因外物或自己處境而悲喜）</td>
              <td>常被誤認為對偶排比，其實是語意雙向滲透交融。</td>
            </tr>
            <tr>
              <td><strong>雙關（諧音 / 詞義）</strong></td>
              <td>一語同時關涉兩種事物或意義。</td>
              <td>• <strong>諧音雙關</strong>：「春蠶到死<strong>絲</strong>方盡」（絲諧音「思念」）；「東邊日出西邊雨，道是無<strong>晴</strong>還有晴」（晴諧音「情」）。<br>• <strong>詞義雙關</strong>：「向晚意不適，驅車登古原。夕陽無限好，只是近<strong>黃昏</strong>」（表面指傍晚，深層寓意李唐王朝之沒落）。</td>
              <td>大考極常出現在樂府民歌或隱含政治諷諭的詩篇中。</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 文言文核心「六大虛詞」義項速查</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>虛詞</th>
              <th>常見詞性與義項</th>
              <th>經典教材例句</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>之</strong></td>
              <td>1. 代名詞（他/它）<br>2. 介詞/助詞（的）<br>3. 動詞（前往、到）<br>4. 賓語提前助詞（無義）<br>5. 取消句子獨立性（主謂間無義）</td>
              <td>• 具告以事，欲呼與俱<strong>走</strong>（無） / 齊人固善盜<strong>乎</strong>？<br>• 吾資<strong>之</strong>昏，不逮人也（助詞：的）<br>• 輟耕<strong>之</strong>壟上（動詞：往）<br>• 何陋<strong>之</strong>有？ / 唯利<strong>是</strong>圖（賓語提前）<br>• 師道<strong>之</strong>不傳也久矣（取消獨立性）</td>
            </tr>
            <tr>
              <td><strong>以</strong></td>
              <td>1. 介詞（用、拿、憑藉）<br>2. 介詞（因為、由於）<br>3. 連詞（因而、來，表目的或結果）<br>4. 動詞（認為）</td>
              <td>• <strong>以</strong>子之矛，陷子之盾（用）<br>• 不<strong>以</strong>物喜，不<strong>以</strong>己悲（因為）<br>• 作《師說》<strong>以</strong>貽之（連詞：來）<br>• 皆<strong>以</strong>美於徐公（動詞：認為）</td>
            </tr>
            <tr>
              <td><strong>其</strong></td>
              <td>1. 代名詞（他的、它的）<br>2. 副詞（難道、豈，表反詰）<br>3. 副詞（大概、恐怕，表推測）<br>4. 副詞（應當，表期望勉勵）</td>
              <td>• 工欲善<strong>其</strong>事，必先利<strong>其</strong>器（他的）<br>• <strong>其</strong>孰能譏之乎？（難道）<br>• 聖人之所以為聖...<strong>其</strong>皆出於此乎？（大概）<br>• 爾<strong>其</strong>無忘乃父之志！（應當、務必）</td>
            </tr>
            <tr>
              <td><strong>乃</strong></td>
              <td>1. 副詞（竟然、居然）<br>2. 副詞（於是、就）<br>3. 動詞（是）<br>4. 代名詞（你的、你們的）</td>
              <td>• 今其智<strong>乃</strong>反不能及（竟然）<br>• 蒙衝巨艦...<strong>乃</strong>以千數（於是）<br>• 若事之不濟，此<strong>乃</strong>天也（是）<br>• 家祭無忘告<strong>乃</strong>翁（你的）</td>
            </tr>
          </tbody>
        </table>
      </section>
  `
};

// ==========================================
// 2. ENGLISH (英文) - Add 拾肆, 拾伍
// ==========================================
const englishPhase2 = {
  file: 'english.html',
  newNav: [
    { id: 'en-confusing-words', label: '拾肆、高頻易混淆形近字與同義詞辨析' },
    { id: 'en-subjunctive-clauses', label: '拾伍、頂標進階句型：假設語氣與三大子句' }
  ],
  content: `
      <!-- 拾肆、高頻易混淆形近字與同義詞辨析 -->
      <section id="en-confusing-words" class="content-section animate-fade-in-up">
        <h2>拾肆、歷屆學測高頻易混淆形近字與詞義辨析 🔤</h2>
        <p>學測第 1 大題詞彙題最常出現「拼法極度相似但語意截然不同」的干擾選項。以下精選歷年鑑別度最高的十組代表：</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>單字組</th>
              <th>詞性與中文意涵</th>
              <th>大考語意區分關鍵與實戰例句</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>adapt<br>adopt<br>adept</strong></td>
              <td>v. 適應；改編<br>v. 採納；領養<br>adj. 熟練的、內行的</td>
              <td>• You must quickly <strong>adapt</strong> to the new high school environment.<br>• The municipal government decided to <strong>adopt</strong> a green energy policy.<br>• She is highly <strong>adept</strong> at negotiating international trade contracts.</td>
            </tr>
            <tr>
              <td><strong>economic<br>economical</strong></td>
              <td>adj. 經濟上的（與經濟學、國家產業相關）<br>adj. 節儉的、省錢划算的</td>
              <td>• The country is undergoing a severe <strong>economic</strong> recession.<br>• Buying high-efficiency LED lightbulbs is much more <strong>economical</strong> in the long run.</td>
            </tr>
            <tr>
              <td><strong>historic<br>historical</strong></td>
              <td>adj. 歷史上著名的、具劃時代重大意義的<br>adj. 歷史的、有關歷史記載的</td>
              <td>• The Apollo 11 moon landing was a truly <strong>historic</strong> moment for mankind.<br>• The professor spent decades doing research on ancient <strong>historical</strong> documents.</td>
            </tr>
            <tr>
              <td><strong>respective<br>respectable<br>respectful</strong></td>
              <td>adj. 各自的、個別的<br>adj. 值得尊敬的、體面的<br>adj. 恭敬的、尊重的</td>
              <td>• The students packed their bags and returned to their <strong>respective</strong> classrooms.<br>• He has established a very <strong>respectable</strong> reputation as an ethical doctor.<br>• We should always remain polite and <strong>respectful</strong> toward senior citizens.</td>
            </tr>
            <tr>
              <td><strong>sensible<br>sensitive</strong></td>
              <td>adj. 明智的、通情達理的<br>adj. 敏感的、易受傷的</td>
              <td>• It is <strong>sensible</strong> to save an emergency fund for unexpected expenses.<br>• People with <strong>sensitive</strong> skin should avoid harsh chemical soaps.</td>
            </tr>
            <tr>
              <td><strong>compliment<br>complement</strong></td>
              <td>n./v. 稱讚、讚美<br>n./v. 補充；與...相得益彰</td>
              <td>• The teacher paid him a warm <strong>compliment</strong> on his creative essay.<br>• The red wine perfectly <strong>complements</strong> the flavorful roasted steak.</td>
            </tr>
            <tr>
              <td><strong>comprehensible<br>comprehensive</strong></td>
              <td>adj. 可理解的、清楚明白的<br>adj. 全面的、詳盡廣泛的</td>
              <td>• The lecture was explained in simple and easily <strong>comprehensible</strong> terms.<br>• The guidebook provides a <strong>comprehensive</strong> overview of GSAT study tactics.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 拾伍、頂標進階句型：假設語氣與三大子句 -->
      <section id="en-subjunctive-clauses" class="content-section animate-fade-in-up">
        <h2>拾伍、頂標進階文法攻堅：假設語氣與三大子句實戰 🧩</h2>

        <h3>1. 假設語氣三大經典時態公式</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>條件情境</th>
              <th>If 條件子句動詞形式</th>
              <th>主要子句動詞形式</th>
              <th>經典例句</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>與現在事實相反</strong></td>
              <td>過去式動詞（be 動詞一律用 <strong>were</strong>）</td>
              <td><strong>would / could / should / might + V</strong></td>
              <td>If I <strong>were</strong> you, I <strong>would seize</strong> this rare opportunity.</td>
            </tr>
            <tr>
              <td><strong>與過去事實相反</strong></td>
              <td>過去完成式 <strong>had + V-pp</strong></td>
              <td><strong>would / could / should / might + have + V-pp</strong></td>
              <td>If he <strong>had listened</strong> to the doctor, he <strong>would not have fallen</strong> ill.</td>
            </tr>
            <tr>
              <td><strong>與未來事實相反<br>（絕不可能發生）</strong></td>
              <td><strong>were to + V</strong> 或 <strong>should + V</strong></td>
              <td>would / could + V 或 祈使句</td>
              <td>If the sun <strong>were to rise</strong> in the west, I would still never change my mind.</td>
            </tr>
          </tbody>
        </table>

        <div class="formula-block mt-4">
          <div class="formula-title">💡 假設語氣「省略 if 之倒裝」秒殺公式</div>
          <p>• If I were you... $\rightarrow$ <strong>Were I you</strong>, I would accept the offer.<br>
             • If he had studied harder... $\rightarrow$ <strong>Had he studied</strong> harder, he would have passed.<br>
             • If it should rain tomorrow... $\rightarrow$ <strong>Should it rain</strong> tomorrow, the picnic will be cancelled.</p>
        </div>

        <h3>2. 三大子句在長難句中的快速辨析</h3>
        <div class="step-box">
          <div class="step-box-title">🔍 子句判別三步走</div>
          <div class="step-row">
            <div class="step-num">名詞子句</div>
            <div class="step-math">在句中扮演<strong>主詞、受詞或同位語</strong>（that, whether, wh- 疑問詞引導）</div>
            <div class="step-desc">例：<em>That regular exercise prevents diseases</em> is a well-known medical fact.（整句作主詞）</div>
          </div>
          <div class="step-row">
            <div class="step-num">形容詞子句</div>
            <div class="step-math"><strong>修飾前方先行詞</strong>（關係代名詞 who, which, that 或關係副詞 where, when）</div>
            <div class="step-desc">注意非限定用法（逗號後面不可用 that！）：<em>My smartphone, <strong>which</strong> I bought last week, is already broken.</em></div>
          </div>
          <div class="step-row">
            <div class="step-num">副詞子句</div>
            <div class="step-math">修飾整句動詞，表<strong>時間、原因、條件、讓步或目的</strong></div>
            <div class="step-desc">例：<em>Although the weather was harsh</em>, they continued their mountain expedition.（表讓步）</div>
          </div>
        </div>
      </section>
  `
};

// ==========================================
// 3. MATH A (數學A) - Add 拾伍, 拾陸
// ==========================================
const mathAPhase2 = {
  file: 'math-a.html',
  newNav: [
    { id: 'ma-space-line-plane', label: '拾伍、空間直線與平面方程式及距離' },
    { id: 'ma-bayes-independent', label: '拾陸、條件機率、貝氏定理與獨立事件' }
  ],
  content: `
      <!-- 拾伍、空間直線與平面方程式及距離 -->
      <section id="ma-space-line-plane" class="content-section animate-fade-in-up">
        <h2>拾伍、空間幾何深入：空間直線、平面方程式與距離公式 📐</h2>

        <h3>1. 空間平面方程式與點面距離</h3>
        <p>若平面 $E$ 的法向量為 $\\vec{n} = (A, B, C)$ 且過點 $P_0(x_0, y_0, z_0)$，則平面方程式為：</p>
        <div class="formula-block">
          <div class="formula-title">📏 平面點法式與點到平面距離</div>
          <p>$$A(x - x_0) + B(y - y_0) + C(z - z_0) = 0 \\iff Ax + By + Cz + D = 0$$<br>
             • <strong>點 $P(x_1, y_1, z_1)$ 到平面 $E$ 的距離公式</strong>：<br>
             $$d(P, E) = \\frac{|Ax_1 + By_1 + Cz_1 + D|}{\\sqrt{A^2 + B^2 + C^2}}$$</p>
        </div>

        <h3>2. 空間直線方程式的三種標準表示法</h3>
        <p>空間中通過點 $P_0(x_0, y_0, z_0)$ 且方向向量為 $\\vec{v} = (l, m, n)$ 的直線 $L$：</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>形式</th>
              <th>數學表達式</th>
              <th>大考解題使用情境</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>參數式 (Parametric)</strong></td>
              <td>$$\\begin{cases} x = x_0 + lt \\\\ y = y_0 + mt \\\\ z = z_0 + nt \\end{cases} \\quad (t \\in \\mathbb{R})$$</td>
              <td><strong>求交點或線外一點到直線距離的王牌工具！</strong>將直線上任意動點表為 $P(t)$，代入平面方程式或求垂直向量內積為 0。</td>
            </tr>
            <tr>
              <td><strong>比例對稱式 (Symmetric)</strong></td>
              <td>$$\\frac{x - x_0}{l} = \\frac{y - y_0}{m} = \\frac{z - z_0}{n}$$<br>（若分母為 0，如 $n=0$，寫作 $\\frac{x-x_0}{l} = \\frac{y-y_0}{m}, z = z_0$）</td>
              <td>判斷直線方向向量、求兩直線之交角（由兩方向向量之內積求 $\\cos\\theta$）。</td>
            </tr>
            <tr>
              <td><strong>兩面式 (Two-plane)</strong></td>
              <td>$$\\begin{cases} A_1x + B_1y + C_1z + D_1 = 0 \\\\ A_2x + B_2y + C_2z + D_2 = 0 \\end{cases}$$</td>
              <td>空間兩相交平面之交線。其方向向量為兩法向量的外積：$$\\vec{v} = \\vec{n}_1 \\times \\vec{n}_2$$</td>
            </tr>
          </tbody>
        </table>

        <div class="step-box mt-4">
          <div class="step-box-title">💡 歪斜線（Skew Lines）公垂線與最短距離求法</div>
          <div class="step-row">
            <div class="step-num">Step 1</div>
            <div class="step-math"><strong>求公垂向量</strong>：$\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2$</div>
            <div class="step-desc">同時垂直兩直線方向向量的外積向量，即為公垂線的方向。</div>
          </div>
          <div class="step-row">
            <div class="step-num">Step 2</div>
            <div class="step-math"><strong>向量正射影長求最短距離</strong>：$$d(L_1, L_2) = \\frac{|\\vec{P_1P_2} \\cdot \\vec{n}|}{|\\vec{n}|}$$</div>
            <div class="step-desc">任取兩直線上一點 $P_1 \\in L_1, P_2 \\in L_2$，連線向量在公垂向量上的投影長度即為兩歪斜線的最短距離。</div>
          </div>
        </div>
      </section>

      <!-- 拾陸、條件機率、貝氏定理與獨立事件 -->
      <section id="ma-bayes-independent" class="content-section animate-fade-in-up">
        <h2>拾陸、機率進階：條件機率、貝氏定理與獨立事件 🎲</h2>

        <h3>1. 條件機率與獨立事件的精準判準</h3>
        <p>在已知事件 $B$ 發生的前提下，事件 $A$ 發生的條件機率定義為：</p>
        <div class="formula-block">
          <div class="formula-title">🎲 條件機率與獨立判定式</div>
          <p>$$P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)$$<br>
             • <strong>獨立事件定義</strong>：$A$ 與 $B$ 互為獨立 $\\iff P(A \\cap B) = P(A) \\cdot P(B)$。<br>
             • <strong>常見觀念陷阱</strong>：<strong>「互斥」絕非「獨立」！</strong>若 $A, B$ 互斥（$A \\cap B = \\emptyset$ 且機率皆大於 0），則 $P(A \\cap B) = 0 \\ne P(A)P(B)$，故互斥事件必定「不獨立（相依）」。</p>
        </div>

        <h3>2. 貝氏定理（Bayes' Theorem）與醫療偽陽性模型</h3>
        <p>學測最愛考疾病檢測的「偽陽性（False Positive）」問題：</p>
        <div class="step-box">
          <div class="step-box-title">🧪 檢驗結果陽性，真正患病的機率推導</div>
          <div class="step-row">
            <div class="step-num">分母</div>
            <div class="step-math"><strong>全機率定理（所有檢驗為陽性的總機率）</strong>：<br>$$P(\\text{陽性}) = P(\\text{患病})P(\\text{陽性}|\\text{患病}) + P(\\text{健康})P(\\text{陽性}|\\text{健康})$$</div>
            <div class="step-desc">包含「真正生病且驗出陽性（真陽性）」與「健康但誤驗出陽性（偽陽性）」兩支樹狀圖總和。</div>
          </div>
          <div class="step-row">
            <div class="step-num">分子</div>
            <div class="step-math"><strong>真正患病且檢驗為陽性之機率</strong>：<br>$$P(\\text{患病} \\cap \\text{陽性}) = P(\\text{患病})P(\\text{陽性}|\\text{患病})$$</div>
            <div class="step-desc">符合目標條件的那條單一路徑。</div>
          </div>
          <div class="step-row">
            <div class="step-num">貝氏比值</div>
            <div class="step-math">$$P(\\text{患病}|\\text{陽性}) = \\frac{P(\\text{患病})P(\\text{陽性}|\\text{患病})}{P(\\text{陽性})}$$</div>
            <div class="step-desc">若疾病盛行率 $P(\\text{患病})$ 極低（例如 $0.1\\%$），即使儀器準確度高達 $99\\%$，檢驗出陽性者真正得病的機率往往依然不到 $10\\%$！</div>
          </div>
        </div>
      </section>
  `
};

// ==========================================
// 4. MATH B (數學B) - Add 拾陸, 拾柒
// ==========================================
const mathBPhase2 = {
  file: 'math-b.html',
  newNav: [
    { id: 'mb-regression-stats', label: '拾陸、統計推論進階：散佈圖與迴歸直線' },
    { id: 'mb-finance-expected', label: '拾柒、理財數學年金現值與期望值精算' }
  ],
  content: `
      <!-- 拾陸、統計推論進階：散佈圖與迴歸直線 -->
      <section id="mb-regression-stats" class="content-section animate-fade-in-up">
        <h2>拾陸、統計推論進階：散佈圖、相關係數與迴歸直線 📊</h2>

        <h3>1. 相關係數 $r$ 的幾何意義與不變性</h3>
        <p>兩組二維數據 $(x_i, y_i)$ 的皮爾森相關係數 $r$ 數值介於 $-1$ 與 $+1$ 之間（$-1 \\le r \\le 1$）：</p>
        <div class="formula-block">
          <div class="formula-title">📈 相關係數平移與伸縮法則（必考觀念）</div>
          <p>若將原始數據進行線性變換：$x' = ax + b$，$y' = cy + d$：<br>
             • 若 $a, c$ <strong>同號</strong>（$ac > 0$）：相關係數<strong>完全不變</strong>！$r_{x'y'} = r_{xy}$。<br>
             • 若 $a, c$ <strong>異號</strong>（$ac < 0$）：相關係數<strong>差一個負號</strong>！$r_{x'y'} = -r_{xy}$。<br>
             • 平移常數 $b, d$ 對相關係數 $r$ 完全沒有任何影響！</p>
        </div>

        <h3>2. 最適合直線（最小平方法迴歸直線）</h3>
        <p>迴歸直線方程式 $\\hat{y} - \\mu_y = m(x - \\mu_x)$ 滿足兩大不可撼動的鐵則：</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>迴歸直線性質</th>
              <th>公式表達式</th>
              <th>解題關鍵直觀</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>必過平均點</strong></td>
              <td>$$(\\mu_x, \\mu_y)$$</td>
              <td>題目若給定迴歸直線方程式與 $\\mu_x$，直接代入方程式即可求得 $\\mu_y$！</td>
            </tr>
            <tr>
              <td><strong>斜率計算公式</strong></td>
              <td>$$m = r \\cdot \\frac{\\sigma_y}{\\sigma_x}$$</td>
              <td>斜率 $m$ 的正負符號<strong>永遠與相關係數 $r$ 的正負相同</strong>（因為標準差 $\\sigma_x, \\sigma_y > 0$）。</td>
            </tr>
            <tr>
              <td><strong>標準化後的迴歸線</strong></td>
              <td>$$Z_y = r Z_x$$</td>
              <td>當兩變數皆化為標準化分數（平均 0、標準差 1）時，迴歸直線的斜率恰好就是相關係數 $r$！</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 拾柒、理財數學年金現值與期望值精算 -->
      <section id="mb-finance-expected" class="content-section animate-fade-in-up">
        <h2>拾柒、理財數學與生活期望值精算模型 💰</h2>

        <h3>1. 複利與分期付款攤還公式（時間軸解題法）</h3>
        <p>理財情境題切忌死背公式，請依「時間軸」將每一筆款項折現或計算終值：</p>
        <div class="step-box">
          <div class="step-box-title">🏦 定期定額存錢本利和計算</div>
          <div class="step-row">
            <div class="step-num">情境</div>
            <div class="step-math">每年年初存入本金 $P$ 元，年利率 $r$，採複利計息，連續存入 $n$ 年。</div>
            <div class="step-desc">第一期存入的本金經過 $n$ 年利息滾動；最後一年年初存入的本金滾動 1 年。</div>
          </div>
          <div class="step-row">
            <div class="step-num">數列展式</div>
            <div class="step-math">$$S = P(1+r)^n + P(1+r)^{n-1} + \\dots + P(1+r)^1$$</div>
            <div class="step-desc">此為首項 $a_1 = P(1+r)$、公比 $q = (1+r)$、項數為 $n$ 的等比級數。</div>
          </div>
          <div class="step-row">
            <div class="step-num">總額求和</div>
            <div class="step-math">$$S = \\frac{P(1+r)[(1+r)^n - 1]}{r}$$</div>
            <div class="step-desc">考試時題目通常會給定 $(1+r)^n$ 的近似值，直接套入計算。</div>
          </div>
        </div>

        <h3>2. 離散型隨機變數的期望值 $E(X)$</h3>
        <p>設隨機變數 $X$ 的取值為 $x_1, x_2, \\dots, x_k$，對應機率為 $p_1, p_2, \\dots, p_k$（$\\sum p_i = 1$）：</p>
        <div class="formula-block">
          <div class="formula-title">🎯 期望值與公平賭局定義</div>
          <p>• <strong>數學期望值</strong>：$$E(X) = x_1p_1 + x_2p_2 + \\dots + x_kp_k$$<br>
             • <strong>公平賭局 (Fair Game)</strong>：扣除參與成本（購買彩券金額）後，<strong>淨收益期望值等於 0</strong>。<br>
             • <strong>期望值的線性性質</strong>：$$E(aX + b) = aE(X) + b$$（平均值的線性縮放特性）。</p>
        </div>
      </section>
  `
};

// ==========================================
// 5. SOCIAL (社會) - Add 拾陸, 拾柒, 拾捌
// ==========================================
const socialPhase2 = {
  file: 'social.html',
  newNav: [
    { id: 'so-modern-world-history', label: '拾陸、世界近現代史：啟蒙・工業革命與危機' },
    { id: 'so-landform-gis', label: '拾柒、自然與人文地理實戰：地形與 GIS' },
    { id: 'so-macro-econ-org', label: '拾捌、總體經濟與全球治理：市場型態與組織' }
  ],
  content: `
      <!-- 拾陸、世界近現代史：啟蒙・工業革命與危機 -->
      <section id="so-modern-world-history" class="content-section animate-fade-in-up">
        <h2>拾陸、世界近現代史深度專題：啟蒙思潮、工業革命與全球大恐慌 🌍</h2>

        <h3>1. 啟蒙運動（Enlightenment）思想家及其當代憲政遺產</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>思想家 / 代表作</th>
              <th>核心哲學主張</th>
              <th>對近代民主政治的實質影響</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>洛克 (John Locke)</strong><br>《政府論次講》</td>
              <td>天賦人權說（生命、自由、財產權不可剝奪）；人民與政府訂立社會契約，若政府暴虐，人民有權推翻。</td>
              <td>成為美國《獨立宣言》（1776）與現代代議民主之根本法理基礎。</td>
            </tr>
            <tr>
              <td><strong>孟德斯鳩 (Montesquieu)</strong><br>《法意》</td>
              <td>權力分立與制衡（Separation of Powers）：行政、立法、司法三權分立，互相牽制以防專制獨裁。</td>
              <td>確立美國憲法三權分立體系與現代法治國權力架構。</td>
            </tr>
            <tr>
              <td><strong>盧梭 (Rousseau)</strong><br>《社會契約論》</td>
              <td>「主權在民」與「普通意志（General Will）」；強調人民主權不可分割與直接民主理想。</td>
              <td>深刻啟發法國大革命《人權宣言》（1789）與現代公民公民投票理念。</td>
            </tr>
            <tr>
              <td><strong>亞當·斯密 (Adam Smith)</strong><br>《國富論》</td>
              <td>古典自由主義經濟學：主張自由放任（Laissez-faire），市場藉由「看不見的手（Invisible Hand）」自然達成最佳資源配置。</td>
              <td>奠定現代市場經濟與資本主義分工貿易體系之基石。</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 1929 世界經濟大恐慌與兩條反思路線</h3>
        <div class="step-box">
          <div class="step-box-title">📉 大蕭條爆發與國家介入角色的重大變革</div>
          <div class="step-row">
            <div class="step-num">危機爆發</div>
            <div class="step-math">1929 年華爾街黑色星期四崩盤，引發全球性銀行倒閉、失業率飆升與產能過剩危機。</div>
            <div class="step-desc">傳統古典經濟學「自由放任」失靈，市場無法自我迅速修復。</div>
          </div>
          <div class="step-row">
            <div class="step-num">民主國解法</div>
            <div class="step-math"><strong>美國羅斯福新政 (New Deal)</strong>：引入<strong>凱因斯主義 (Keynesianism)</strong>。</div>
            <div class="step-desc">由政府擴大公共支出（興建田納西水壩）、加強金融監管（SEC、FDIC）、建立社會安全保障制度，開創現代「福利國家與混合經濟」體制。</div>
          </div>
          <div class="step-row">
            <div class="step-num">極權國轉向</div>
            <div class="step-math">德國（納粹希特勒）、義大利（法西斯墨索里尼）、日本軍國主義興起。</div>
            <div class="step-desc">藉由極端民族主義與對外軍事擴略轉移國內經濟矛盾，最終引爆第二次世界大戰。</div>
          </div>
        </div>
      </section>

      <!-- 拾柒、自然與人文地理實戰：地形與 GIS -->
      <section id="so-landform-gis" class="content-section animate-fade-in-up">
        <h2>拾柒、自然與人文地理實戰：外營力地形判讀與 GIS 分析 🗺️</h2>

        <h3>1. 常見外營力地形特徵速記表</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>營力種類</th>
              <th>侵蝕地形（大考常考地貌）</th>
              <th>堆積地形（大考常考地貌）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>河流營力 (Fluvial)</strong></td>
              <td>峽谷、V 型谷、瀑布、河階、壺穴</td>
              <td>沖積扇（扇頂礫石、扇端湧泉）、氾濫平原、曲流、牛軛湖、三角洲</td>
            </tr>
            <tr>
              <td><strong>海岸營力 (Coastal)</strong></td>
              <td>海蝕崖、海蝕洞、海蝕門、海蝕柱、海蝕平台</td>
              <td>沙灘、沙洲、潟湖（如臺南七股潟湖）、連島沙洲（如野柳岬）</td>
            </tr>
            <tr>
              <td><strong>石灰岩岩溶 (Karst)</strong></td>
              <td>落水洞、石灰岩盆地、塔狀喀斯特（如桂林山水）</td>
              <td>鐘乳石、石筍、石柱、石灰華階梯（如九寨溝）</td>
            </tr>
            <tr>
              <td><strong>冰河營力 (Glacial)</strong></td>
              <td>冰斗、角峰、刃嶺、U 型谷、峽灣（Fjord）</td>
              <td>冰磧丘、外磧平原、鼓丘、蛇形丘</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 地理資訊系統 (GIS) 向量模式 vs 網格模式</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>資料模式</th>
              <th>空間表達方式</th>
              <th>適用對象與優點</th>
              <th>大考代表應用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>向量模式 (Vector)</strong></td>
              <td>以「點（Point）、線（Line）、面（Polygon）」坐標紀錄界線</td>
              <td>邊界清晰明確、圖形縮放不失真、資料儲存量較小。適合「離散型人文現象」。</td>
              <td>自來水管線、道路路網分析、公車路線、行政區界線、便利商店門市分布。</td>
            </tr>
            <tr>
              <td><strong>網格模式 (Raster)</strong></td>
              <td>以正方形像元（Pixel / Grid）陣列填入屬性數值</td>
              <td>空間連續性表現力強、適合多圖層空間重疊矩陣運算。適合「連續型自然現象」。</td>
              <td>衛星遙測影像、數位高程模型 (DEM)、坡度坡向分析、土石流潛勢預警。</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 拾捌、總體經濟與全球治理：市場型態與組織 -->
      <section id="so-macro-econ-org" class="content-section animate-fade-in-up">
        <h2>拾捌、總體經濟與全球治理：市場競爭型態與國際組織 🌐</h2>

        <h3>1. 四大市場結構特徵大比對</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>市場結構類型</th>
              <th>廠商數目</th>
              <th>產品異質性</th>
              <th>進出市場障礙</th>
              <th>現實生活經典案例</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>完全競爭市場</strong></td>
              <td>極多（價格接受者 Price Taker）</td>
              <td><strong>同質（無差異）</strong></td>
              <td>無進出障礙</td>
              <td>農產品市場（如產地稻米、小麥市場）</td>
            </tr>
            <tr>
              <td><strong>獨占性競爭市場</strong></td>
              <td>眾多</td>
              <td><strong>具差異化</strong>（品牌包裝、風格特色）</td>
              <td>進出障礙低</td>
              <td>手搖飲料店、咖啡廳、服飾品牌、餐廳</td>
            </tr>
            <tr>
              <td><strong>寡占市場</strong></td>
              <td>少數幾家大型廠商</td>
              <td>可同質或具差異化</td>
              <td>障礙極高（資本雄厚、技術門檻）</td>
              <td>國內三大電信公司、石化煉油業、汽車製造業</td>
            </tr>
            <tr>
              <td><strong>完全獨占市場</strong></td>
              <td><strong>僅此一家</strong>（價格決定者 Price Maker）</td>
              <td>獨一無二無替代品</td>
              <td>障礙極高（專利、特許、自然獨占）</td>
              <td>自來水公用事業、電力輸配電網、專利保護期新藥</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 核心國際組織與全球治理架構</h3>
        <div class="formula-block">
          <div class="formula-title">🏛️ 學測常考四大國際多邊組織職掌</div>
          <p>• <strong>聯合國安全理事會 (UNSC)</strong>：維持國際和平最高機構。由 5 個常任理事國（美、英、法、中、俄，享有「一票否決權」）與 10 個非常任理事國組成。<br>
             • <strong>世界貿易組織 (WTO)</strong>：總部設於日內瓦，核心原則為「最惠國待遇 (MFN)」與「國民待遇」，致力消除關稅壁壘與非關稅歧視。<br>
             • <strong>國際貨幣基金 (IMF) vs 世界銀行 (World Bank)</strong>：IMF 專注提供短期緊急貸款維持全球金融匯率穩定；世界銀行專注提供中長期貸款協助發展中國家基礎建設與減貧。<br>
             • <strong>世界衛生組織 (WHO)</strong>：協調全球公共衛生、重大傳染病（如 COVID-19）緊急應變與國際衛生條例 (IHR) 執行。</p>
        </div>
      </section>
  `
};

// ==========================================
// 6. SCIENCE (自然) - Add 貳拾伍, 貳拾陸, 貳拾柒, 貳拾捌
// ==========================================
const sciencePhase2 = {
  file: 'science.html',
  newNav: [
    { id: 'sci-newton-energy', label: '貳拾伍、物理：牛頓運動定律與力學能守恆' },
    { id: 'sci-chem-solutions', label: '貳拾陸、化學：溶液濃度與酸鹼滴定曲線' },
    { id: 'sci-bio-metabolism', label: '貳拾柒、生物：細胞代謝光合與呼吸對比' },
    { id: 'sci-earth-wind-tide', label: '貳拾捌、地科：大氣地轉風與海洋潮汐機制' }
  ],
  content: `
      <!-- 貳拾伍、物理：牛頓運動定律與力學能守恆 -->
      <section id="sci-newton-energy" class="content-section animate-fade-in-up">
        <h2>貳拾伍、物理力學精髓：牛頓運動定律與力學能守恆 🏹</h2>

        <h3>1. 等加速度運動三大基本公式（直線運動基石）</h3>
        <div class="formula-block">
          <div class="formula-title">📐 等加速度三大公式（初速度 $v_0$、末速度 $v$、位移 $\Delta x$、時間 $t$）</div>
          <p>$$1.\\quad v = v_0 + at$$<br>
             $$2.\\quad \\Delta x = v_0 t + \\frac{1}{2}at^2$$<br>
             $$3.\\quad v^2 = v_0^2 + 2a\\Delta x$$<br>
             • 解題直觀：自由落體初速 $v_0 = 0$、加速度 $a = g \\approx 9.8\\text{ m/s}^2$，落下高度 $h = \\frac{1}{2}gt^2$。</p>
        </div>

        <h3>2. 力學能守恆定律與重力位能轉換</h3>
        <p>當物體在運動過程中<strong>僅受保守力（如重力、彈力）作功</strong>時，系統的總力學能保持常數：</p>
        <div class="formula-block">
          <div class="formula-title">⚡ 力學能守恆方程式：$E = K + U = \\text{常數}$</div>
          <p>• <strong>動能</strong>：$K = \\frac{1}{2}mv^2$<br>
             • <strong>近地重力位能</strong>：$U = mgh$（取地面為零位面）<br>
             • <strong>大考過山車 / 單擺擺動分析</strong>：由高處 $h$ 釋放的物體抵達最低點時，重力位能全數轉化為動能，最低點速度必為：<br>
             $$v = \\sqrt{2gh}$$（與物體質量 $m$ 完全無關！）</p>
        </div>
      </section>

      <!-- 貳拾陸、化學：溶液濃度與酸鹼滴定曲線 -->
      <section id="sci-chem-solutions" class="content-section animate-fade-in-up">
        <h2>貳拾陸、化學核心深化：溶液濃度配製與酸鹼滴定曲線 🧪</h2>

        <h3>1. 溶液濃度四大表示法與互換</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>濃度種類</th>
              <th>公式定義</th>
              <th>單位與溫度影響</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>重量百分濃度 (wt%)</strong></td>
              <td>$$\\text{wt}\\% = \\frac{\\text{溶質質量 (g)}}{\\text{溶液總質量 (g)}} \\times 100\\%$$</td>
              <td>無單位。<strong>不受溫度影響</strong>（質量不隨熱脹冷縮改變）。</td>
            </tr>
            <tr>
              <td><strong>體積莫耳濃度 (M)</strong></td>
              <td>$$M = \\frac{\\text{溶質莫耳數 (mol)}}{\\text{溶液總體積 (L)}}$$</td>
              <td>$\\text{mol/L}$。<strong>會隨溫度改變</strong>（液體體積會隨溫度膨脹或收縮）。</td>
            </tr>
            <tr>
              <td><strong>百萬分點 (ppm)</strong></td>
              <td>$$1\\text{ ppm} = \\frac{1\\text{ mg}}{\\text{1 L 稀薄水溶液}} \\approx 10^{-6}$$</td>
              <td>微量檢測（如環境重金屬、大氣二氧化碳、農藥殘留標示）。</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 強酸強鹼 vs 弱酸強鹼滴定曲線大考關鍵判讀</h3>
        <div class="step-box">
          <div class="step-box-title">📉 滴定曲線特徵與指示劑選用原則</div>
          <div class="step-row">
            <div class="step-num">強酸 + 強鹼</div>
            <div class="step-math"><strong>當量點 $\\text{pH} = 7$</strong>（如 $0.1\\text{ M HCl} + 0.1\\text{ M NaOH}$）</div>
            <div class="step-desc">當量點附近 pH 垂直陡升範圍極廣（約 pH 3 到 10）。酚酞（變色範圍 8.2~10.0）或甲基橙（3.1~4.4）皆可精準使用。</div>
          </div>
          <div class="step-row">
            <div class="step-num">弱酸 + 強鹼</div>
            <div class="step-math"><strong>當量點 $\\text{pH} > 7$</strong>（如醋酸 $\\text{CH}_3\\text{COOH}$ 加 $\\text{NaOH}$，生成強鹼弱酸鹽水解呈鹼性）</div>
            <div class="step-desc">當量點呈現弱鹼性，<strong>必須選用「酚酞（Phenolphthalein）」</strong>作為指示劑（溶液由無色突變為粉紅色）；絕不可選甲基橙。</div>
          </div>
        </div>
      </section>

      <!-- 貳拾柒、生物：細胞代謝光合與呼吸對比 -->
      <section id="sci-bio-metabolism" class="content-section animate-fade-in-up">
        <h2>貳拾柒、生物代謝核心：光合作用與細胞呼吸全方位對比 🍃</h2>

        <table class="data-table">
          <thead>
            <tr>
              <th>比較項目</th>
              <th>光合作用 (Photosynthesis)</th>
              <th>有氧細胞呼吸 (Cellular Respiration)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>主要進行場所</strong></td>
              <td>植物葉綠體（類囊體薄膜與基質）</td>
              <td>真核生物細胞質與<strong>粒線體</strong>（基質與內膜摺皺）</td>
            </tr>
            <tr>
              <td><strong>反應總方程式</strong></td>
              <td>$$6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{光能} \\rightarrow \\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2$$</td>
              <td>$$\\text{C}_6\\text{H}_{12}\\text{O}_6 + 6\\text{O}_2 \\rightarrow 6\\text{CO}_2 + 6\\text{H}_2\\text{O} + \\text{ATP (能量)}$$</td>
            </tr>
            <tr>
              <td><strong>主要生化階段</strong></td>
              <td>
                1. <strong>光反應</strong>（類囊體膜）：吸收光能水解產生 $\\text{O}_2$、$\\text{ATP}$ 與 $\\text{NADPH}$。<br>
                2. <strong>碳反應（卡爾文循環）</strong>（基質）：利用 ATP 與 NADPH 固定 $\\text{CO}_2$ 合成三碳糖。
              </td>
              <td>
                1. <strong>糖解作用</strong>（細胞質）：葡萄糖分解為丙酮酸，產生少許 ATP 與 NADH。<br>
                2. <strong>克氏循環（檸檬酸循環）</strong>（粒線體基質）：釋放 $\\text{CO}_2$。<br>
                3. <strong>電子傳遞鏈</strong>（粒線體內膜）：以 $\\text{O}_2$ 為最終電子接收者生成水，產生大量 ATP。
              </td>
            </tr>
            <tr>
              <td><strong>氧氣的角色</strong></td>
              <td><strong>產物</strong>（源自光反應中水分子 $\\text{H}_2\\text{O}$ 的光解）</td>
              <td><strong>反應物</strong>（擔任電子傳遞鏈末端的電子接受者生成水）</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 貳拾捌、地科：大氣地轉風與海洋潮汐機制 -->
      <section id="sci-earth-wind-tide" class="content-section animate-fade-in-up">
        <h2>貳拾捌、地球科學動態系統：大氣地轉風與海洋潮汐機制 🌊</h2>

        <h3>1. 高空地轉風（Geostrophic Wind）平衡機制</h3>
        <p>在大氣自由對流層高空（不考慮地表摩擦力），空氣質點受兩大力量平衡而吹動：</p>
        <div class="formula-block">
          <div class="formula-title">🌀 高空地轉風平衡條件</div>
          <p>• <strong>氣壓梯度力 ($PGF$)</strong>：方向永遠由「高壓指向低壓」，垂直於等壓線。<br>
             • <strong>科氏力 (Coriolis Force)</strong>：因地球自轉產生，<strong>北半球偏右、南半球偏左</strong>；大小與風速成正比，赤道為 0，兩極最大。<br>
             • <strong>平衡結果</strong>：氣壓梯度力與科氏力大小相等、方向相反。高空風向<strong>平行於等壓線</strong>！<br>
             • <strong>北半球背風而立</strong>：高氣壓必在你的右側，低氣壓必在你的左側（白貝羅定律 Buys Ballot's Law）。</p>
        </div>

        <h3>2. 月球引潮力與大潮、小潮之成因</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>潮汐類型</th>
              <th>日、地、月相對幾何位置</th>
              <th>農曆發生日期</th>
              <th>潮差特徵</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>大潮 (Spring Tide)</strong></td>
              <td>太陽、地球、月球<strong>排成一直線</strong>（合朔或對衝）</td>
              <td>農曆<strong>初一（朔）</strong>與<strong>十五、十六（望）</strong></td>
              <td>太陽引力與月球引力疊加同向增強，<strong>滿潮水位最高、乾潮水位最低，潮差最大</strong>！</td>
            </tr>
            <tr>
              <td><strong>小潮 (Neap Tide)</strong></td>
              <td>月球、地球與太陽呈<strong>直角 $90^\\circ$ 夾角</strong></td>
              <td>農曆<strong>初七、初八（上弦月）</strong>與<strong>廿二、廿三（下弦月）</strong></td>
              <td>太陽與月球引潮力互相抵消，<strong>滿潮水位偏低、乾潮水位偏高，潮差最小</strong>！</td>
            </tr>
          </tbody>
        </table>
      </section>
  `
};

const allConfigsPhase2 = [chinesePhase2, englishPhase2, mathAPhase2, mathBPhase2, socialPhase2, sciencePhase2];

allConfigsPhase2.forEach(cfg => {
  const filePath = path.join(subjectsDir, cfg.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Insert Sidebar Labels
  cfg.newNav.forEach(nav => {
    if (!html.includes(`href="#${nav.id}"`)) {
      const navItem = `<li><a href="#${nav.id}">${nav.label}</a></li>\n        `;
      html = html.replace(/(<\/ul>\s*<div[^>]*>)/i, navItem + '$1');
    }
  });

  // 2. Remove duplicates if any
  cfg.newNav.forEach(nav => {
    const reg = new RegExp(`<section id="${nav.id}"[\\s\\S]*?<\\/section>`, 'gi');
    html = html.replace(reg, '');
  });

  // 3. Insert content before bottom quiz link div or </main>
  html = html.replace(/(\s*<div style="text-align:\s*center[^>]*>[\s\S]*?<\/div>\s*<\/main>)/i, '\n' + cfg.content + '\n$1');

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Successfully completed Phase 2 for ${cfg.file}! New size: ${Buffer.byteLength(html, 'utf8')} bytes.`);
});
