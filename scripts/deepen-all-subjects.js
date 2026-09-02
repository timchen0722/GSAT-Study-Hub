const fs = require('fs');
const path = require('path');

const subjectsDir = path.join(__dirname, '..', 'subjects');

// ==========================================
// 1. CHINESE (國文)
// ==========================================
const chineseDeepen = {
  file: 'chinese.html',
  newNav: [
    { id: 'ch-selected15', label: '拾壹、108課綱選文（古文十五篇）精粹' },
    { id: 'ch-idioms-trap', label: '拾貳、學測高頻成語與望文生義陷阱' },
    { id: 'ch-reading-essay', label: '拾參、現代文學閱讀與情意寫作昇華' }
  ],
  content: `
      <!-- 拾壹、108課綱選文（古文十五篇）精粹 -->
      <section id="ch-selected15" class="content-section animate-fade-in-up">
        <h2>拾壹、108課綱推薦選文（古文十五篇）核心考點總整理 📜</h2>
        <p>108課綱推薦選文縮減為 15 篇，每篇都是大考出題率極高的核心題源。學測不僅考字詞義，更重視「主題跨文本比較」與「寫作動機」。</p>

        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 15%;">篇名 / 作者</th>
              <th style="width: 12%;">時代 / 文類</th>
              <th style="width: 35%;">核心思想與文眼</th>
              <th style="width: 38%;">大考關鍵字詞與易錯修辭</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>〈燭之武退秦師〉</strong><br>左丘明</td>
              <td>先秦<br>編年體史傳</td>
              <td>外交辭令之典範。以「存鄭對秦有利，亡鄭對秦有害」利誘秦穆公，瓦解秦晉聯盟。</td>
              <td>
                • <strong>微</strong>夫人之力不及此（無、非）<br>
                • 焉用亡鄭以<strong>陪</strong>鄰（增加）<br>
                • 肆其西<strong>封</strong>（疆界，此作動詞開拓疆界）
              </td>
            </tr>
            <tr>
              <td><strong>〈諫逐客書〉</strong><br>李斯</td>
              <td>秦代<br>奏議（應用文）</td>
              <td>駢散結合，鋪陳四方珍寶以襯托人才重要性。主旨：「泰山不讓土壤，故能成其大；河海不擇細流，故能就其深。」</td>
              <td>
                • <strong>逐客</strong>以資敵國，<strong>損民</strong>以益讎（排比、對偶、映襯）<br>
                • 藉寇<strong>兵</strong>而齎盜<strong>糧</strong>（兵器；給予糧食）<br>
                • <strong>不問可否，不論曲直</strong>之排比修辭
              </td>
            </tr>
            <tr>
              <td><strong>〈大同與小康〉</strong><br>《禮記》</td>
              <td>先秦<br>儒家經典</td>
              <td>透過孔子與言偃對話，對比「天下為公（大同）」與「天下為家（小康）」之社會組織與道德制度。</td>
              <td>
                • 選賢與<strong>能</strong>（通「舉」）<br>
                • 貨惡其棄於地也，不必藏於<strong>己</strong>（大公無私）<br>
                • 謀閉而不<strong>興</strong>，盜竊亂賊而不<strong>作</strong>
              </td>
            </tr>
            <tr>
              <td><strong>〈鴻門宴〉</strong><br>司馬遷</td>
              <td>西漢<br>紀傳體史傳</td>
              <td>楚漢相爭之轉捩點。透過生動人物言行刻劃項羽之自矜寡斷與劉邦之隱忍圓滑。</td>
              <td>
                • 沛公不勝<strong>桮杓</strong>（音ㄅㄟ ㄕㄠˊ，酒力不支）<br>
                • <strong>范增數目</strong>項王（使眼色，名詞作動詞）<br>
                • 勞苦而功高如此，未有封侯之賞，而<strong>聽細說</strong>（小人讒言）
              </td>
            </tr>
            <tr>
              <td><strong>〈出師表〉</strong><br>諸葛亮</td>
              <td>三國<br>奏表</td>
              <td>臨危受命之忠悃。前段析陳局勢、勉勵後主「開張聖聽、賞罰分明、親賢遠佞」；後段自述志向。</td>
              <td>
                • 此誠<strong>危急存亡之秋</strong>也（關鍵時刻）<br>
                • <strong>陟罰臧否</strong>，不宜異同（善惡，偏義複詞在「善」與「惡」）<br>
                • 庶竭<strong>駑鈍</strong>，攘除姦凶（謙詞）
              </td>
            </tr>
            <tr>
              <td><strong>〈桃花源記〉</strong><br>陶淵明</td>
              <td>魏晉<br>記敘寓言</td>
              <td>烏托邦理想社會。描繪無賦稅、無戰亂、自足和睦之世外桃源，寓含對現實專制之批判。</td>
              <td>
                • 芳草<strong>鮮美</strong>，落英<strong>繽紛</strong>（視覺摹寫）<br>
                • <strong>黃髮垂髫</strong>，並怡然自樂（借代：老人與小孩）<br>
                • <strong>阡陌</strong>交通，雞犬相聞（東西田道曰阡，南北曰陌）
              </td>
            </tr>
            <tr>
              <td><strong>〈師說〉</strong><br>韓愈</td>
              <td>唐代<br>古文運動（論說）</td>
              <td>倡導從師問道。「師者，所以傳道、受業、解惑也。」批判當時士大夫階級「恥學於師」之浮誇風氣。</td>
              <td>
                • <strong>句讀</strong>之不知，惑之不解（音ㄉㄡˋ，文章斷句）<br>
                • <strong>位卑則足羞，官盛則近諛</strong>（對比批判心態）<br>
                • <strong>六藝經傳</strong>皆通習之（傳記註疏，音ㄓㄨㄢˋ）
              </td>
            </tr>
            <tr>
              <td><strong>〈赤壁賦〉</strong><br>蘇軾</td>
              <td>宋代<br>文賦</td>
              <td>借赤壁之景抒發人生短暫感嘆，透過主客對話悟出「變與不變」之哲理，達到物我兩忘、超然灑脫境界。</td>
              <td>
                • <strong>白露橫江，水光接天</strong>（秋景對仗）<br>
                • <strong>自其變者而觀之，則天地曾不能以一瞬；自其不變者而觀之，則物與我皆無盡也</strong>（哲理名句）<br>
                • <strong>寄蜉蝣於天地，渺滄海之一粟</strong>（譬喻人生渺小）
              </td>
            </tr>
            <tr>
              <td><strong>〈項脊軒志〉</strong><br>歸有光</td>
              <td>明代<br>抒情散文</td>
              <td>以書齋「項脊軒」之興廢為主軸，細膩回憶祖母、母親、亡妻之深厚親情，感人至深。</td>
              <td>
                • 借書滿架，<strong>偃仰嘯歌</strong>，冥然兀坐（安適自在貌）<br>
                • <strong>庭有枇杷樹，吾妻死之年所手植也，今已亭亭如蓋矣</strong>（借景抒情名句）<br>
                • 娘以指<strong>叩</strong>門扉曰：「兒寒乎？」（輕敲）
              </td>
            </tr>
            <tr>
              <td><strong>〈勞山道士〉</strong><br>蒲松齡</td>
              <td>清代<br>文言短篇小說</td>
              <td>諷刺心浮氣躁、貪慕捷徑之人。王生慕仙術卻不能耐苦，學穿牆術終因炫耀與心術不正而碰壁。</td>
              <td>
                • 俛首驟入，<strong>勿逡巡</strong>（不要猶豫退縮）<br>
                • 歸而自矜，<strong>頭觸硬壁，驀然而踣</strong>（跌倒）<br>
                • 宣旨「分謗」之虛榮盲目心態
              </td>
            </tr>
            <tr>
              <td><strong>〈勸和論〉</strong><br>鄭用錫</td>
              <td>清代臺灣<br>論說文</td>
              <td>針對臺灣清治時期漳泉、閩粵械鬥，呼籲「人同此心，心同此理」，強調「朋黨比周，各為其黨」之危害。</td>
              <td>
                • <strong>忘其祖若父之所自來</strong>（追本溯源）<br>
                • <strong>顧此則失彼，同此則異彼</strong>（對比論述族群融合）
              </td>
            </tr>
            <tr>
              <td><strong>〈鹿港乘桴記〉</strong><br>洪繻</td>
              <td>日治初臺灣<br>雜記</td>
              <td>描繪鹿港由繁華港口衰退為荒涼孤鎮之過程，字裡行間流露遺民對日本殖民統治與市區改正摧折歷史之悲憤。</td>
              <td>
                • <strong>滄海桑田</strong>之歷史滄桑感<br>
                • 市井樓閣變為廢墟之感傷
              </td>
            </tr>
            <tr>
              <td><strong>〈畫菊自序〉</strong><br>張李德和</td>
              <td>日治現代臺灣<br>序文</td>
              <td>臺灣女性知識分子自覺代表作。借菊之「傲霜特立」寄託女性堅貞不阿之情操與藝術追求。</td>
              <td>
                • <strong>花之隱逸者也</strong>之精神傳承<br>
                • 女子不甘困於閨閣、兼善詩書畫三絕
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 拾貳、學測高頻成語與望文生義陷阱 -->
      <section id="ch-idioms-trap" class="content-section animate-fade-in-up">
        <h2>拾貳、大考超高頻易混淆成語與望文生義陷阱 ⚠️</h2>
        <p>學測第 1 大題與第 2 大題常出現「看似褒義實為貶義」或「望文生義」的成語陷阱。以下為歷屆大考最高頻精選：</p>

        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 20%;">成語</th>
              <th style="width: 40%;">正確意涵</th>
              <th style="width: 40%;">常見望文生義誤用（陷阱）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>差強人意</strong></td>
              <td>大體上還能使人滿意。出自《後漢書·吳漢傳》。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「令人非常不滿意」或「差勁」。</td>
            </tr>
            <tr>
              <td><strong>首當其衝</strong></td>
              <td>比喻最先受到攻擊或遭遇災難。衝，交通要道。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「帶頭衝鋒」或「名列第一」。</td>
            </tr>
            <tr>
              <td><strong>目無全牛</strong></td>
              <td>比喻技藝純熟到了出神入化的境界。出自《莊子·養生主》。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「看不到全貌、眼光狹隘」或「目中無人」。</td>
            </tr>
            <tr>
              <td><strong>登堂入室</strong></td>
              <td>比喻學問、技藝由淺入深，達到高深境界。出自《論語》。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「非法入侵住宅」或「進入房間」。</td>
            </tr>
            <tr>
              <td><strong>明日黃花</strong></td>
              <td>比喻過時的事物。黃花指菊花，重陽節過後菊花凋零。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「明日之星」或「未來的希望」；切勿寫成「昨日黃花」。</td>
            </tr>
            <tr>
              <td><strong>不瘟不火</strong></td>
              <td>指戲曲表演既不沉悶也不過火，恰到好處。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「商品賣不出去」或「生意平淡冷清」。</td>
            </tr>
            <tr>
              <td><strong>付之闕如</strong></td>
              <td>闕如，缺漏不齊。指事物欠缺不備或未曾記載。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「付之一炬（燒毀）」或「置之不理」。</td>
            </tr>
            <tr>
              <td><strong>文不加點</strong></td>
              <td>文章一氣呵成，無須修改。點，塗改刪改。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「文章寫得連標點符號都沒加」。</td>
            </tr>
            <tr>
              <td><strong>空穴來風</strong></td>
              <td>比喻事出有因、消息並非全無根據。出自宋玉《風賦》。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>常被誤用為「毫無根據的謠言」。大考常考其本義。</td>
            </tr>
            <tr>
              <td><strong>罪不容誅</strong></td>
              <td>罪大惡極，即使處死也不能抵償其罪孽。誅，殺。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「罪行輕微，不需要判處死刑」。</td>
            </tr>
            <tr>
              <td><strong>瓜田李下</strong></td>
              <td>比喻容易引起懷疑的場合（瓜田不納履，李下不正冠）。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「田園風光優美」或「農家收成豐碩」。</td>
            </tr>
            <tr>
              <td><strong>甚囂塵上</strong></td>
              <td>原指軍營喧鬧準備出戰，現多指議論紛紛或謠言四起。</td>
              <td><span style="color:var(--color-accent-red);">❌ 誤用：</span>以為是「沙塵暴肆虐」或「環境灰塵髒亂」。</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 拾參、現代文學閱讀與情意寫作昇華 -->
      <section id="ch-reading-essay" class="content-section animate-fade-in-up">
        <h2>拾參、現代文學閱讀策略與國寫文采昇華 💎</h2>
        
        <h3>1. 現代詩與白話散文深度解讀策略</h3>
        <p>學測白話文閱讀佔分超過 50%，破解長篇素養題的關鍵思維：</p>
        <div class="step-box">
          <div class="step-box-title">🔍 白話文本三層次拆解心法</div>
          <div class="step-row">
            <div class="step-num">Step 1</div>
            <div class="step-math"><strong>定位「客觀事實」與「主觀意圖」</strong></div>
            <div class="step-desc">畫出文中出現的「轉折副詞」（如：然而、其實、反觀），作者通常把真正的核心主張藏在轉折詞後面，前段多半只是鋪墊或欲揚先抑。</div>
          </div>
          <div class="step-row">
            <div class="step-num">Step 2</div>
            <div class="step-math"><strong>破譯「象徵與意象（Image）」</strong></div>
            <div class="step-desc">現代詩中的物件必有象徵意義。例如：<strong>鳥 / 翅膀</strong>（自由、追尋或被囚禁的靈魂）；<strong>鐘錶 / 影子</strong>（時間流逝、死亡的威脅）；<strong>河流 / 旅途</strong>（人生的漂泊與成長）。</div>
          </div>
          <div class="step-row">
            <div class="step-num">Step 3</div>
            <div class="step-math"><strong>防範「過度推論」與「無中生有」</strong></div>
            <div class="step-desc">大考閱讀陷阱最愛將「可能」說成「必然」，將「局部特徵」擴大為「全體現象」。作答時務必在原文找到<strong>一對一的語意支撐點</strong>。</div>
          </div>
        </div>

        <h3>2. 國寫高分金句庫（主題式速背）</h3>
        <p>在情意題或知性題的昇華段落，引用具深刻思辨的名言能顯著拉高立意高度：</p>
        <div class="formula-block">
          <div class="formula-title">💡 主題一：時間、記憶與生命的沉澱</div>
          <p>• 「記憶不是盛滿的容器，而是一團燃燒的火焰；它點亮過去，也烘暖了前行的路途。」<br>
             • 木心：「歲月不饒人，我亦未曾饒過歲月。」<br>
             • 蔣勳：「孤獨是生命圓滿的開始，只有面對孤獨，才能真正看清自己靈魂的輪廓。」</p>
        </div>

        <div class="formula-block">
          <div class="formula-title">💡 主題二：科技、人性與當代思辨</div>
          <p>• 「演算法或許能計算出最高機率的偏好，卻永遠無法丈量人類靈魂深處的微光與慈悲。」<br>
             • 尼采：「凡殺不死我的，必使我更強大。」<br>
             • 愛因斯坦：「關心人的本身，應當始終成為一切技術奮鬥的主要目標。」</p>
        </div>
      </section>
  `
};

// ==========================================
// 2. MATH B (數學B)
// ==========================================
const mathBDeepen = {
  file: 'math-b.html',
  newNav: [
    { id: 'mb-conic-real', label: '拾貳、生活中的圓錐曲線精華' },
    { id: 'mb-matrix-life', label: '拾參、轉移矩陣與生活密碼學' },
    { id: 'mb-sphere-earth', label: '拾肆、地球經緯度與球面幾何測量' }
  ],
  content: `
      <!-- 拾貳、生活中的圓錐曲線精華 -->
      <section id="mb-conic-real" class="content-section animate-fade-in-up">
        <h2>拾貳、生活中的圓錐曲線（拋物線・橢圓・雙曲線）🪞</h2>
        <p>108 課綱數 B 強調圓錐曲線在生活、建築與科技中的直觀應用。數 B 不考繁雜的代數平移旋轉，但極為重視「光學反射幾何特質」與「幾何定義」。</p>

        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 15%;">曲線類型</th>
              <th style="width: 25%;">幾何定義</th>
              <th style="width: 25%;">光學幾何特質</th>
              <th style="width: 35%;">大考生活應用題型</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>拋物線<br>(Parabola)</strong></td>
              <td>平面上到<strong>定點（焦點 $F$）</strong>與到<strong>定直線（準線 $L$）</strong>等距離之所有點軌跡：<br>$$\\overline{PF} = d(P, L)$$</td>
              <td>從焦點 $F$ 發出的光線，經拋物線反射後會形成<strong>平行對稱軸的光束</strong>；反之，平行光射入後會<strong>匯聚於焦點</strong>。</td>
              <td>
                • <strong>汽車探照燈 / 手電筒</strong>：燈絲置於焦點，光線射向遠方。<br>
                • <strong>碟型衛星天線 / 太陽能集熱器</strong>：將遠方平行訊號匯聚於受光器。<br>
                • <strong>懸索橋鋼纜 / 噴泉拋物線</strong>：受重力與張力平衡自然呈現。
              </td>
            </tr>
            <tr>
              <td><strong>橢圓<br>(Ellipse)</strong></td>
              <td>平面上到兩定點（焦點 $F_1, F_2$）<strong>距離和為常數 $2a$</strong>（$2a > 2c$）之所有點軌跡：<br>$$\\overline{PF_1} + \\overline{PF_2} = 2a$$</td>
              <td>從其中一個焦點 $F_1$ 發出的光線或聲波，經橢圓內壁反射後，<strong>必然通過另一個焦點 $F_2$</strong>。</td>
              <td>
                • <strong>耳語長廊（Whispering Gallery）</strong>：在焦點處低語，另一個焦點處聽得極清晰。<br>
                • <strong>體外震波碎石機</strong>：在焦點發出震波，匯聚於病患體內結石處（第二焦點）。<br>
                • <strong>克卜勒行星軌道第一定律</strong>：太陽位於太陽系所有行星軌道的一個焦點上。
              </td>
            </tr>
            <tr>
              <td><strong>雙曲線<br>(Hyperbola)</strong></td>
              <td>平面上到兩定點（焦點 $F_1, F_2$）<strong>距離差之絕對值為常數 $2a$</strong>（$0 < 2a < 2c$）：<br>$$|\\overline{PF_1} - \\overline{PF_2}| = 2a$$</td>
              <td>朝向一個焦點射入的光線，經雙曲面鏡反射後，反射線的反向延長線會<strong>通過另一個焦點</strong>。</td>
              <td>
                • <strong>雙曲導航系統（Loran）</strong>：利用兩個電臺訊號的時間差（距離差），定位船隻所在之雙曲線支。<br>
                • <strong>核電廠冷卻塔</strong>：雙曲旋轉面結構，材料最省且結構對流強度最高。
              </td>
            </tr>
          </tbody>
        </table>

        <div class="formula-block mt-4">
          <div class="formula-title">💡 數B高頻解題口訣：離心率 $e$</div>
          <p>• 圓：$e = 0$（兩焦點重合）<br>
             • 橢圓：$0 < e < 1$（長軸 $2a$ 大於焦距 $2c$）<br>
             • 拋物線：$e = 1$（到焦點與到準線距離相等）<br>
             • 雙曲線：$e > 1$（焦距 $2c$ 大於貫軸 $2a$）</p>
        </div>
      </section>

      <!-- 拾參、轉移矩陣與生活密碼學 -->
      <section id="mb-matrix-life" class="content-section animate-fade-in-up">
        <h2>拾參、轉移矩陣（馬可夫鏈）與矩陣密碼學 🔐</h2>
        
        <h3>1. 轉移矩陣的判定與穩態分布</h3>
        <p>轉移矩陣（Transition Matrix）是數 B 處理機率演化的王牌工具。矩陣 $P = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ 必須滿足兩大條件：</p>
        <ul>
          <li>所有元素非負：$0 \\le a, b, c, d \\le 1$</li>
          <li><strong>每一「行（Column）」的總和必須為 1</strong>：$a + c = 1$，$b + d = 1$。</li>
        </ul>

        <div class="step-box">
          <div class="step-box-title">📊 穩定狀態向量（Steady-state Vector）三步驟求法</div>
          <div class="step-row">
            <div class="step-num">Step 1</div>
            <div class="step-math"><strong>設定穩態條件方程式</strong>：$PX = X$</div>
            <div class="step-desc">經過無數次轉移後，狀態不再隨時間改變。設穩態向量 $X = \\begin{bmatrix} x \\\\ y \\end{bmatrix}$。</div>
          </div>
          <div class="step-row">
            <div class="step-num">Step 2</div>
            <div class="step-math"><strong>引入機率總和為 1</strong>：$x + y = 1$</div>
            <div class="step-desc">由於 $(P - I)X = 0$ 的兩條方程式互為相依，必須搭配 $x + y = 1$ 聯立求解。</div>
          </div>
          <div class="step-row">
            <div class="step-num">Step 3</div>
            <div class="step-math"><strong>解出長期市佔率或平衡機率</strong></div>
            <div class="step-desc">不論初始狀態 $X_0$ 為何，只要轉移矩陣元素皆大於 0（正轉移矩陣），長期狀態必然趨向此唯一穩態 $X$。</div>
          </div>
        </div>

        <h3>2. 二階方陣在文字密碼學的應用（希爾密碼 Hill Cipher）</h3>
        <p>設英文字母 A=1, B=2, ..., Z=26。若將明文雙字編碼向量設為 $M = \\begin{bmatrix} m_1 \\\\ m_2 \\end{bmatrix}$，利用可逆密鑰矩陣 $A = \\begin{bmatrix} a & b \\\\ c & d \\end{bmatrix}$ 進行加密：</p>
        <div class="formula-block">
          <div class="formula-title">🔐 加密與解密運算式</div>
          <p>• <strong>加密運算</strong>：$C = A M$（$C$ 為密文向量）<br>
             • <strong>解密運算</strong>：$M = A^{-1} C$（接收方只要將密文乘上逆矩陣 $A^{-1}$ 即可完美還原明文）<br>
             • <strong>反矩陣存在條件</strong>：$\\det(A) = ad - bc \\ne 0$，此時 $A^{-1} = \\frac{1}{ad - bc}\\begin{bmatrix} d & -b \\\\ -c & a \\end{bmatrix}$。</p>
        </div>
      </section>

      <!-- 拾肆、地球經緯度與球面幾何測量 -->
      <section id="mb-sphere-earth" class="content-section animate-fade-in-up">
        <h2>拾肆、地球經緯度與球面幾何測量 🌐</h2>
        <p>數 B 大考最愛結合地理情境的立體空間測量。設地球半徑為 $R \\approx 6400\\text{ km}$：</p>

        <table class="data-table">
          <thead>
            <tr>
              <th>項目</th>
              <th>幾何模型公式</th>
              <th>大考計算陷阱與解題關鍵</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>緯線圓半徑</strong></td>
              <td>$$r_\\theta = R \\cos\\theta$$<br>（$\\theta$ 為該地的緯度）</td>
              <td>赤道緯度 $0^\\circ$，半徑最大為 $R$；緯度 $60^\\circ$ 處，緯度圈半徑縮小為 $R \\cos 60^\\circ = \\frac{1}{2}R$。</td>
            </tr>
            <tr>
              <td><strong>同緯度兩點直線與弧長</strong></td>
              <td>緯線弧長：$$S = r_\\theta \\cdot \\Delta\\lambda$$<br>（$\\Delta\\lambda$ 為經度差弧度）</td>
              <td>沿著緯線飛行並非「最短距離」！最短航線為通過兩點與球心的<strong>大圓航線（Great Circle Route）</strong>。</td>
            </tr>
            <tr>
              <td><strong>時區與經度換算</strong></td>
              <td>經度每差 $15^\\circ$ 相差 1 小時<br>（經度每差 $1^\\circ$ 差 4 分鐘）</td>
              <td>向東時間增加（東加），向西時間減少（西減）。跨越國際換日線（經度 $180^\\circ$）時，由西向東需減一天。</td>
            </tr>
            <tr>
              <td><strong>方位角與仰角測量</strong></td>
              <td>仰角：視線與水平面的夾角<br>方位角：由正北或正南順時針/逆時針偏轉</td>
              <td>看到「在某地測得山頂仰角 $30^\\circ$，向東走 $d$ 公尺後測得仰角 $45^\\circ$」，解題時先在地面投影面畫出三角形，再利用<strong>餘弦定理</strong>解出未知邊長。</td>
            </tr>
          </tbody>
        </table>
      </section>
  `
};

// ==========================================
// 3. SOCIAL (社會)
// ==========================================
const socialDeepen = {
  file: 'social.html',
  newNav: [
    { id: 'so-tw-history', label: '拾貳、臺灣民主轉型與世界冷戰體系' },
    { id: 'so-geo-climate', label: '拾參、全球氣候機制與空間產業鏈' },
    { id: 'so-civic-law', label: '拾肆、憲法法庭裁判與民刑法精要' }
  ],
  content: `
      <!-- 拾貳、臺灣民主轉型與世界冷戰體系 -->
      <section id="so-tw-history" class="content-section animate-fade-in-up">
        <h2>拾貳、歷史科核心專題：臺灣民主轉型與世界冷戰體系 🏛️</h2>

        <h3>1. 臺灣戰後政治體制變革與民主歷程</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 15%;">年代 / 階段</th>
              <th style="width: 25%;">代表事件與制度</th>
              <th style="width: 30%;">歷史背景與深層意義</th>
              <th style="width: 30%;">大考素養考點連結</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1947 年</strong><br>二二八事件</td>
              <td>查緝私菸衝突爆發全臺抗爭，長官公署請兵鎮壓。</td>
              <td>戰後物價飛漲、接收官員腐敗與文化隔閡積怨引爆。此後臺灣政壇產生族群傷痕與長達數十年的政治噤聲。</td>
              <td>行政院設二二八事件紀念基金會，政府公開道歉、賠償、恢復名譽，當代轉型正義之開端。</td>
            </tr>
            <tr>
              <td><strong>1949-1987 年</strong><br>戒嚴白色恐怖</td>
              <td>頒布《臺灣省戒嚴令》、《動員戡亂時期臨時條款》。</td>
              <td>凍結憲法保障的人身、言論、集會自由，軍事審判平民，國會不改選形成「萬年國會」。</td>
              <td>雷震《自由中國》組黨受挫、美麗島事件（1979）引發國內外人權高度關注，奠定反對黨基礎。</td>
            </tr>
            <tr>
              <td><strong>1987-1996 年</strong><br>民主破繭與憲政改革</td>
              <td>• 1987 宣布<strong>解嚴</strong>、開放黨禁報禁。<br>• 1991 廢止《臨時條款》、萬年國會退職。<br>• 1996 <strong>首次總統公民直選</strong>。</td>
              <td>蔣經國晚期至李登輝時期，推動和平不流血的「寧靜革命」，臺灣確立第三波民主化典範。</td>
              <td>憲法增修條文確立雙首長制框架，原住民族正名運動（1994憲法將山胞修正為「原住民族」）。</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 冷戰架構（Cold War）對東亞與臺灣的命運牽動</h3>
        <div class="step-box">
          <div class="step-box-title">⛓️ 冷戰骨牌效應推演流程</div>
          <div class="step-row">
            <div class="step-num">1947-49</div>
            <div class="step-math"><strong>冷戰全面揭幕</strong>：杜魯門主義與馬歇爾計畫抗衡蘇聯圍堵</div>
            <div class="step-desc">美蘇兩大陣營於歐洲形成鐵幕對峙（北約 NATO vs 華沙公約）。美國初期對國共內戰採取靜觀立場。</div>
          </div>
          <div class="step-row">
            <div class="step-num">1950</div>
            <div class="step-math"><strong>韓戰爆發（大考最常考歷史轉折點）</strong></div>
            <div class="step-desc">北韓南侵，美國杜魯門總統下令第七艦隊巡弋臺灣海峽，阻止中共犯臺，並重啟對臺巨額美援（1951-1965）。</div>
          </div>
          <div class="step-row">
            <div class="step-num">1954</div>
            <div class="step-math"><strong>簽署《中美共同防禦條約》</strong></div>
            <div class="step-desc">臺灣被正式納入美國在西太平洋建立的「第一島鏈」反共防禦體系，奠定臺灣戰後經濟起飛（加工出口區）的外部穩定環境。</div>
          </div>
          <div class="step-row">
            <div class="step-num">1970s</div>
            <div class="step-math"><strong>美中建交與外交頓挫</strong></div>
            <div class="step-desc">美國為「聯中抗蘇」，尼克森訪華、1971年聯合國通過2758號決議、1979美臺斷交；美國國會通過《臺灣關係法》維持實質經貿與軍售。</div>
          </div>
        </div>
      </section>

      <!-- 拾參、全球氣候機制與空間產業鏈 -->
      <section id="so-geo-climate" class="content-section animate-fade-in-up">
        <h2>拾參、地理科系統專題：全球氣候機制與空間產業轉型 🗺️</h2>

        <h3>1. 全球主要氣候類型機制與景觀精華對照表</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 16%;">氣候類型</th>
              <th style="width: 20%;">緯度與地理分布</th>
              <th style="width: 32%;">成因與降水特徵</th>
              <th style="width: 32%;">典型植被與農業特色</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>熱帶雨林氣候</strong></td>
              <td>赤道兩側（亞馬遜盆地、剛果盆地、東南亞島嶼）</td>
              <td>終年受赤道低壓帶籠罩，高溫多雨，對流旺盛（午後雷陣雨）。年溫差極小、日溫差大於年溫差。</td>
              <td>熱帶雨林（板根、附生植物）、熱帶栽培業（橡膠、油棕、可可）、傳統游耕。</td>
            </tr>
            <tr>
              <td><strong>熱帶莽原氣候</strong></td>
              <td>熱帶雨林外圍（非洲中南部、巴西高原）</td>
              <td>赤道低壓帶（夏雨）與副熱帶高壓帶（冬乾）交替籠罩，乾濕分明。</td>
              <td>熱帶稀樹草原（高草疏林）、野生動物大遷徙、游牧或熱帶畜牧業。</td>
            </tr>
            <tr>
              <td><strong>溫帶地中海型氣候</strong></td>
              <td>緯度 $30^\\circ \\sim 40^\\circ$ 大陸西岸（地中海沿岸、加州、智利中部、南非西南角、西南澳）</td>
              <td><strong>「夏乾冬雨」</strong>！夏季受副熱帶高壓下沉氣流控制乾旱少雨；冬季西風帶南移迎風面多雨。</td>
              <td>耐旱灌木林（厚葉、蠟質皮層）、地中海型農業（柑橘、橄欖、葡萄園、耐旱小麥）。</td>
            </tr>
            <tr>
              <td><strong>溫帶海洋性氣候</strong></td>
              <td>緯度 $40^\\circ \\sim 60^\\circ$ 大陸西岸（西歐、北美西北岸、紐西蘭）</td>
              <td>終年盛行<strong>盛行西風</strong>與<strong>暖流</strong>增溫增濕。全年有雨、冬暖夏涼、年溫差小。</td>
              <td>落葉闊葉林、乳酪畜牧業、花卉精緻農業。</td>
            </tr>
            <tr>
              <td><strong>溫帶大陸性氣候</strong></td>
              <td>歐亞大陸與北美大陸中東部深陸地區</td>
              <td>距海遙遠或背風，大陸度高。冬極冷夏炎熱，<strong>年溫差全球最大</strong>，雨量集中夏季。</td>
              <td>溫帶針葉林（泰加林 Taiga）、春小麥帶、機械化穀物農業。</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 產業區位轉移與全球供應鏈「微笑曲線」</h3>
        <p>學測人文地理重視產業的空間重組。宏碁創辦人施振榮提出的<strong>微笑曲線（Smile Curve）</strong>在素養題中屢屢化身圖表：</p>
        <div class="formula-block">
          <div class="formula-title">📈 微笑曲線三大區段與高附加價值分工</div>
          <p>• <strong>左端（高附加價值）</strong>：研發（R&D）、關鍵專利（晶圓設計、演算法）、品牌核心技術。<br>
             • <strong>中端（低附加價值）</strong>：組裝、代工製造（OEM）。毛利率最低（毛三到四），極易因工資上漲而發生「跨國區位轉移」（如從臺灣移往中國，再移往越南、印度）。<br>
             • <strong>右端（高附加價值）</strong>：全球行銷物流、售後服務、自創品牌（OBM）與軟體生態系統。</p>
        </div>
      </section>

      <!-- 拾肆、憲法法庭裁判與民刑法精要 -->
      <section id="so-civic-law" class="content-section animate-fade-in-up">
        <h2>拾肆、公民與社會前線：憲法審查原則與民刑法精要 ⚖️</h2>

        <h3>1. 憲法法庭判決與「比例原則」大考實戰檢驗</h3>
        <p>政府限制人民基本人權時，必須通過《行政程序法》第 7 條所規範的「比例原則」四道檢驗，缺一不可：</p>
        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 25%;">比例原則子原則</th>
              <th style="width: 35%;">法律內涵要求</th>
              <th style="width: 40%;">大考情境素養案例剖析</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. 目的正當性原則</strong></td>
              <td>政府所欲達成的行政目的，必須是追求合法的公共利益。</td>
              <td>如：為維護公共衛生（防範傳染病蔓延）限制出入境，目的具有憲法正當性。</td>
            </tr>
            <tr>
              <td><strong>2. 適合性原則（妥當性）</strong></td>
              <td>所採取的手段必須「有助於」達成行政目的。</td>
              <td>若限制深夜單車騎乘無法降低交通事故率，則該手段不具適合性。</td>
            </tr>
            <tr>
              <td><strong>3. 必要性原則（最小侵害）</strong></td>
              <td>在所有能達成相同目的的手段中，必須選擇<strong>對人民侵害最小</strong>者。</td>
              <td>「殺雞焉用牛刀」。如：取締噪音車輛可先限期改善並開罰，不可直接沒收車輛銷毀。</td>
            </tr>
            <tr>
              <td><strong>4. 狹義比例原則（法益衡平）</strong></td>
              <td>手段所造成的侵害，與所欲達成的公益之間不得顯失均衡（侵害不可大於利益）。</td>
              <td>為追查違規攤販而指派警車高速逆向狂飆造成重大車禍，違反法益衡平。</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 刑法「三階層犯罪論」vs 民法「侵權行為」深度比對</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>項目</th>
              <th>刑法：三階層犯罪論體系</th>
              <th>民法：侵權行為責任（第 184 條）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>目的與本質</strong></td>
              <td>代表國家處罰行為人，維護法秩序與社會防衛（應報與預防）。</td>
              <td>私人對私人的財產與非財產損害填補（填補損害、恢復原狀）。</td>
            </tr>
            <tr>
              <td><strong>構成要件</strong></td>
              <td>
                • <strong>構成要件該當性</strong>：行為符合法條構成要件（客觀因果關係 + 主觀故意或過失）。<br>
                • <strong>違法性</strong>：無阻卻違法事由（正當防衛、緊急避難、依法令之行為）。<br>
                • <strong>罪責</strong>：具責任能力（未滿14歲無責任能力；14-18歲得減輕）與期待可能性。
              </td>
              <td>
                侵權行為七要件：<br>
                1. 加害行為 2. 侵害權利 3. 發生損害<br>
                4. 具有因果關係 5. 具不法性<br>
                6. 行為人具責任能力 7. <strong>故意或過失</strong>。
              </td>
            </tr>
            <tr>
              <td><strong>大考常見盲點</strong></td>
              <td>正當防衛是針對「現在不法之侵害」；若對方已逃跑仍追打，屬於「防衛過當」，不能免除罪責。</td>
              <td>無行為能力人（未滿7歲）侵權，由法定代理人連帶負賠償責任，除非能證明監督並無疏懈。</td>
            </tr>
          </tbody>
        </table>
      </section>
  `
};

// ==========================================
// 4. SCIENCE (自然)
// ==========================================
const scienceDeepen = {
  file: 'science.html',
  newNav: [
    { id: 'sci-optics-modern', label: '貳拾、物理：波動光學與近代物理躍遷' },
    { id: 'sci-chem-battery', label: '貳拾壹、化學：化學平衡與先進電化學' },
    { id: 'sci-bio-dogma', label: '貳拾貳、生物：中心法則與免疫防線' },
    { id: 'sci-earth-hr', label: '貳拾參、地科：地震波判讀與恆星演化' }
  ],
  content: `
      <!-- 貳拾、物理：波動光學與近代物理躍遷 -->
      <section id="sci-optics-modern" class="content-section animate-fade-in-up">
        <h2>貳拾、物理高頻聚焦：波動光學與近代物理躍遷 💡</h2>

        <h3>1. 光的波動說驗證：干涉與繞射</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>光學現象</th>
              <th>關鍵物理公式 / 條件</th>
              <th>現象特徵與學測重點</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>楊氏雙狹縫干涉</strong></td>
              <td>$$\\Delta y = \\frac{\\lambda L}{d}$$<br>（$\\lambda$：波長，$L$：狹縫到屏幕距離，$d$：兩狹縫間距）</td>
              <td>
                • 中央為亮紋，亮暗紋<strong>間隔完全相等</strong>。<br>
                • 紅光波長大於紫光（$\\lambda_{\\text{red}} > \\lambda_{\\text{violet}}$），故紅光干涉條紋間距比紫光寬。<br>
                • 雙狹縫間距 $d$ 愈小、屏幕距離 $L$ 愈大，條紋愈寬、愈容易觀察。
              </td>
            </tr>
            <tr>
              <td><strong>單狹縫繞射</strong></td>
              <td>中央亮帶寬度：$$W = \\frac{2\\lambda L}{a}$$<br>（$a$：狹縫寬度）</td>
              <td>
                • <strong>中央亮帶寬度為其他次亮帶的 2 倍</strong>，且中央亮帶最亮，往兩側亮度急遽衰減。<br>
                • 狹縫寬度 $a$ 愈接近光波長 $\\lambda$，繞射現象愈顯著。
              </td>
            </tr>
          </tbody>
        </table>

        <h3>2. 愛因斯坦光電效應（近代物理奠基石）</h3>
        <div class="formula-block">
          <div class="formula-title">🔬 光電效應方程式：$E = h\\nu = W + K_{\\max}$</div>
          <p>• <strong>底限頻率（Cut-off frequency $\\nu_0$）</strong>：當入射光頻率 $\\nu < \\nu_0$ 時，不論光強度多強、照射時間多久，<strong>絕對無法產生光電子</strong>！這徹底推翻了古典波動說，證明光具有「粒子性（光子 Photon）」。<br>
             • <strong>最大動能 $K_{\\max}$</strong>：光電子的最大動能只與「入射光的頻率 $\\nu$」有關，與光強度完全無關。<br>
             • <strong>光電流量</strong>：光強度愈大代表單位時間照射的光子數愈多，激發放出的光電子數目愈多，光電流愈大。</p>
        </div>
      </section>

      <!-- 貳拾壹、化學：化學平衡與先進電化學 -->
      <section id="sci-chem-battery" class="content-section animate-fade-in-up">
        <h2>貳拾壹、化學深層探索：化學平衡與先進電化學 🔋</h2>

        <h3>1. 勒沙特列原理（Le Chatelier's Principle）大考判定寶典</h3>
        <p>當平衡系統受到外部擾動時，系統必然朝向「抵消該擾動」的方向移動：</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>外部條件改變</th>
              <th>平衡移動方向</th>
              <th>平衡常數 $K$ 之改變</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>加入反應物 / 移走生成物</strong></td>
              <td>向右（正反應方向）移動</td>
              <td><strong>不變！</strong>（平衡常數只隨「溫度」改變）</td>
            </tr>
            <tr>
              <td><strong>壓縮容器體積（增加壓力）</strong></td>
              <td>向氣體「莫耳數較少」的方向移動</td>
              <td><strong>不變！</strong></td>
            </tr>
            <tr>
              <td><strong>放熱反應升高溫度</strong>（$\\Delta H < 0$）</td>
              <td>向左（逆反應方向）移動以吸熱</td>
              <td><strong>$K$ 值減小！</strong></td>
            </tr>
            <tr>
              <td><strong>吸熱反應升高溫度</strong>（$\\Delta H > 0$）</td>
              <td>向右（正反應方向）移動以吸熱</td>
              <td><strong>$K$ 值增大！</strong></td>
            </tr>
            <tr>
              <td><strong>加入催化劑</strong></td>
              <td>不移動（同等倍數加速正逆反應速率）</td>
              <td><strong>不變！</strong>（僅縮短抵達平衡所需時間）</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 常見實用電池放電電極反應式</h3>
        <div class="step-box">
          <div class="step-box-title">⚡ 鉛蓄電池（汽車電瓶）充放電必考反應</div>
          <div class="step-row">
            <div class="step-num">負極</div>
            <div class="step-math">$\\text{Pb(s)} + \\text{SO}_4^{2-}\\text{(aq)} \\rightarrow \\text{PbSO}_4\\text{(s)} + 2\\text{e}^-$（鉛氧化，極板質量增加）</div>
            <div class="step-desc">鉛板由鉛轉化為硫酸鉛沈澱，釋出電子。</div>
          </div>
          <div class="step-row">
            <div class="step-num">正極</div>
            <div class="step-math">$\\text{PbO}_2\\text{(s)} + 4\\text{H}^+\\text{(aq)} + \\text{SO}_4^{2-}\\text{(aq)} + 2\\text{e}^- \\rightarrow \\text{PbSO}_4\\text{(s)} + 2\\text{H}_2\\text{O(l)}$</div>
            <div class="step-desc">二氧化鉛還原為硫酸鉛，極板質量亦增加。</div>
          </div>
          <div class="step-row">
            <div class="step-num">總反應</div>
            <div class="step-math">$\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\rightleftharpoons 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O}$</div>
            <div class="step-desc">放電時硫酸被消耗生成水，<strong>電解液硫酸比重與濃度下降</strong>；充電時反向進行，硫酸比重上升。</div>
          </div>
        </div>
      </section>

      <!-- 貳拾貳、生物：中心法則與免疫防線 -->
      <section id="sci-bio-dogma" class="content-section animate-fade-in-up">
        <h2>貳拾貳、生物頂標攻略：分子生物中心法則與專一性免疫 🧬</h2>

        <h3>1. 分子生物學中心法則（Central Dogma）</h3>
        <p>生命遺傳訊息由核酸傳遞至蛋白質的單向流動機制：</p>
        <div class="formula-block">
          <div class="formula-title">🧬 遺傳密碼轉譯流程與方向性</div>
          <p>• <strong>DNA 複製（Replication）</strong>：半保留複製，由 DNA 聚合酶沿模版股 $3' \\rightarrow 5'$ 移動，新生股合成方向必為 <strong>$5' \\rightarrow 3'$</strong>。<br>
             • <strong>轉錄（Transcription）</strong>：RNA 聚合酶以 DNA 一股為模版轉錄出前驅 mRNA（以 U 代替 T），真核生物須經剪接（切除內含子 Intron、保留表現子 Exon）、加 $5'$ 帽與 $3'$ poly-A 尾後方可離開細胞核。<br>
             • <strong>轉譯（Translation）</strong>：在核糖體進行。mRNA 上的三聯體「密碼子（Codon）」與攜帶特定胺基酸的 tRNA 上的「反密碼子（Anticodon）」配對。起始密碼子為 <strong>AUG（甲硫胺酸）</strong>，終止密碼子為 UAA, UAG, UGA。</p>
        </div>

        <h3>2. 人體免疫系統防禦三道防線完整對比</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>防線層次</th>
              <th>防禦機制性質</th>
              <th>參與的主要細胞與分子</th>
              <th>大考高頻判斷點</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>第一道防線</strong></td>
              <td>非專一性物理與化學屏障</td>
              <td>完整皮膚角質層、消化道呼吸道黏膜、胃酸、眼淚中的溶菌酶。</td>
              <td>阻絕病原體入侵體內的第一道實體阻隔。</td>
            </tr>
            <tr>
              <td><strong>第二道防線</strong></td>
              <td>非專一性內部防禦</td>
              <td>嗜中性白血球、巨噬細胞、自然殺手細胞（NK）、干擾素、發炎反應（組織胺引起血管通透性增加）。</td>
              <td>發炎反應特徵「紅、腫、熱、痛」。吞噬細胞可將抗原片段呈現於表面。</td>
            </tr>
            <tr>
              <td><strong>第三道防線</strong></td>
              <td><strong>專一性免疫（適應性）</strong><br>具有記憶性！</td>
              <td>• <strong>B 細胞（體液免疫）</strong>：受抗原刺激後分化為「漿細胞（分泌專一性抗體）」與「記憶 B 細胞」。<br>• <strong>T 細胞（細胞免疫）</strong>：輔助 T 細胞（Th）分泌細胞激素活化整體免疫；胞毒 T 細胞（Tc）直接辨識並裂解被病毒感染的細胞或癌細胞。</td>
              <td>疫苗接種原理是促使體內產生<strong>「記憶細胞」</strong>，當第二次接觸相同抗原時，能產生反應更快、抗體濃度更高的<strong>次級免疫反應</strong>。</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 貳拾參、地科：地震波判讀與恆星演化 -->
      <section id="sci-earth-hr" class="content-section animate-fade-in-up">
        <h2>貳拾參、地球科學精湛解析：地震波判讀與赫羅圖演化 🪐</h2>

        <h3>1. 地震波走時曲線與地球內部構造判讀</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>波形</th>
              <th>振動與傳播方向</th>
              <th>可穿透介質</th>
              <th>地球內部波速特徵與介面</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>P 波（縱波 Primary）</strong></td>
              <td>質點振動方向與波傳播方向<strong>平行</strong>（疏密波）</td>
              <td><strong>固體、液體、氣體</strong>皆可通過（速度較快，最先抵達測站）</td>
              <td>
                • 在<strong>莫氏不連續面</strong>（地殼與地函交界）波速突增。<br>
                • 進入<strong>古氏不連續面</strong>（地函與外地核交界，約 2900 km）時，波速大幅驟降並發生折射，形成 $103^\\circ \\sim 142^\\circ$ 的 P 波影區。
              </td>
            </tr>
            <tr>
              <td><strong>S 波（橫波 Secondary）</strong></td>
              <td>質點振動方向與波傳播方向<strong>垂直</strong>（剪切波）</td>
              <td><strong>僅能穿透固體！</strong>（無法穿透液體與氣體）</td>
              <td>在約 2900 km 深處的外地核交界面<strong>完全消失</strong>！由此鐵證：<strong>地球的「外地核」為液態金屬（鐵鎳）狀態</strong>！</td>
            </tr>
          </tbody>
        </table>

        <h3>2. 天文演化里程碑：赫羅圖（H-R Diagram）</h3>
        <div class="formula-block">
          <div class="formula-title">✨ 赫羅圖坐標軸與恆星家族分佈</div>
          <p>• <strong>橫坐標</strong>：恆星表面溫度（由高到低：左熱右冷）、光譜型（<strong>O $\rightarrow$ B $\rightarrow$ A $\rightarrow$ F $\rightarrow$ G $\rightarrow$ K $\rightarrow$ M</strong>）、顏色（藍 $\rightarrow$ 白 $\rightarrow$ 黃 $\rightarrow$ 紅）。<br>
             • <strong>縱坐標</strong>：恆星的光度（發光能力，上亮下暗）或絕對星等（數值愈小愈亮）。<br>
             • <strong>主序星（Main Sequence）</strong>：橫跨左上至右下的帶狀區域（太陽即位於光譜型 G 的主序星中段），恆星一生約 90% 時間在此階段，核心進行氫融合成氦的核反應。<br>
             • <strong>紅巨星與超巨星</strong>：位於赫羅圖右上角（低溫但體積極龐大，故光度極高）。<br>
             • <strong>白矮星</strong>：位於赫羅圖左下角（高溫但體積極小，光度低，為中小質量恆星演化的終點）。</p>
        </div>
      </section>
  `
};

// ==========================================
// 5. ENGLISH (英文)
// ==========================================
const englishDeepen = {
  file: 'english.html',
  newNav: [
    { id: 'en-core-collocations', label: '拾貳、高頻必考動詞片語與搭配詞庫' },
    { id: 'en-rhetoric-writing', label: '拾參、英文寫作文采精進與轉折詞矩陣' }
  ],
  content: `
      <!-- 拾貳、高頻必考動詞片語與搭配詞庫 -->
      <section id="en-core-collocations" class="content-section animate-fade-in-up">
        <h2>拾貳、學測關鍵高頻介系詞動詞片語與慣用語 (Core Collocations) 📚</h2>
        <p>學測綜合測驗（克漏字）與文意選填中，「動詞 + 介系詞」搭配詞是每年決定 14 級分與 15 級分的關鍵分水嶺。以下精選歷屆大考最高頻 20 組片語：</p>

        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 25%;">動詞片語</th>
              <th style="width: 25%;">中文核心意涵</th>
              <th style="width: 50%;">實戰例句與搭配用法</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>attribute A to B</strong></td>
              <td>將 A 歸因於 B</td>
              <td>He <em>attributes</em> his remarkable success <em>to</em> hard work and perseverance.</td>
            </tr>
            <tr>
              <td><strong>contribute to + N/V-ing</strong></td>
              <td>促成；導致；有助於</td>
              <td>Excessive emission of greenhouse gases directly <em>contributes to</em> global climate change.</td>
            </tr>
            <tr>
              <td><strong>account for</strong></td>
              <td>解釋說明；佔（比例）</td>
              <td>Renewable energy currently <em>accounts for</em> nearly 30% of total electricity production.</td>
            </tr>
            <tr>
              <td><strong>result in vs. result from</strong></td>
              <td>導致（接結果）vs. 起因於（接原因）</td>
              <td>Carelessness <em>results in</em> accidents. / Accidents <em>result from</em> carelessness.</td>
            </tr>
            <tr>
              <td><strong>deprive A of B</strong></td>
              <td>剝奪 A 的 B 權利或事物</td>
              <td>Prolonged sleep deprivation can <em>deprive</em> individuals <em>of</em> their mental sharpness.</td>
            </tr>
            <tr>
              <td><strong>conform to</strong></td>
              <td>遵守（規則）；符合（標準）</td>
              <td>All manufactured products must strictly <em>conform to</em> international safety standards.</td>
            </tr>
            <tr>
              <td><strong>cope with / grapple with</strong></td>
              <td>應付；處理（棘手問題）</td>
              <td>Governments worldwide are trying their best to <em>cope with</em> rising inflation.</td>
            </tr>
            <tr>
              <td><strong>compensate for</strong></td>
              <td>彌補；補償</td>
              <td>Nothing can truly <em>compensate for</em> the tragic loss of human lives.</td>
            </tr>
            <tr>
              <td><strong>subscribe to</strong></td>
              <td>訂閱；同意/支持（觀點）</td>
              <td>I do not completely <em>subscribe to</em> the idea that money brings absolute happiness.</td>
            </tr>
            <tr>
              <td><strong>stem from</strong></td>
              <td>起源於；源自</td>
              <td>Most psychological anxieties often <em>stem from</em> unexpressed childhood trauma.</td>
            </tr>
          </tbody>
        </table>
      </section>

      <!-- 拾參、英文寫作文采精進與轉折詞矩陣 -->
      <section id="en-rhetoric-writing" class="content-section animate-fade-in-up">
        <h2>拾參、英文寫作文采精進：轉折詞矩陣與進階亮點句型 🖋️</h2>

        <h3>1. 大考高分轉折詞矩陣（Transition Words Matrix）</h3>
        <table class="data-table">
          <thead>
            <tr>
              <th>邏輯關聯</th>
              <th>初階詞彙（建議替換）</th>
              <th>頂標升級詞彙（高級替換）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>強烈對比 / 轉折</strong></td>
              <td>but, however</td>
              <td><strong>In sharp contrast, On the contrary, Nevertheless, Conversely</strong></td>
            </tr>
            <tr>
              <td><strong>補充論述 / 遞進</strong></td>
              <td>and, also, besides</td>
              <td><strong>Furthermore, Moreover, In addition to this, What is more</strong></td>
            </tr>
            <tr>
              <td><strong>因果關聯</strong></td>
              <td>so, because</td>
              <td><strong>Consequently, Therefore, As an inevitable result, Accordingly</strong></td>
            </tr>
            <tr>
              <td><strong>總結 / 昇華</strong></td>
              <td>in the end, finally</td>
              <td><strong>In conclusion, To summarize, All things considered, In a nutshell</strong></td>
            </tr>
          </tbody>
        </table>

        <h3>2. 寫作閱卷老師最愛句型模板</h3>
        <div class="formula-block">
          <div class="formula-title">💡 否定倒裝句（強調堅定語氣）</div>
          <p>• <strong>Under no circumstances should we</strong> sacrifice our health for academic achievements.<br>
             （在任何情況下，我們都不應為了課業成就而犧牲健康。）<br>
             • <strong>Not only does</strong> physical exercise build physical stamina, <strong>but it also</strong> relieves psychological pressure.</p>
        </div>

        <div class="formula-block">
          <div class="formula-title">💡 分詞結構（提升行文緊湊度）</div>
          <p>• <strong>Equipped with</strong> advanced technological skills and critical thinking, modern students are ready to embrace future challenges.<br>
             • <strong>Facing</strong> numerous obstacles along the journey, she refused to throw in the towel.</p>
        </div>
      </section>
  `
};

// ==========================================
// 6. MATH A (數學A)
// ==========================================
const mathADeepen = {
  file: 'math-a.html',
  newNav: [
    { id: 'ma-crossproduct-vol', label: '拾參、外積幾何與空間四面體體積' },
    { id: 'ma-matrix-transform', label: '拾肆、平面線性變換二階幾何矩陣' }
  ],
  content: `
      <!-- 拾參、外積幾何與空間四面體體積 -->
      <section id="ma-crossproduct-vol" class="content-section animate-fade-in-up">
        <h2>拾參、空間幾何高階：向量外積與四面體體積公式 📐</h2>

        <h3>1. 向量外積（Cross Product）之代數與幾何本質</h3>
        <p>若 $\\vec{a} = (a_1, a_2, a_3)$，$\\vec{b} = (b_1, b_2, b_3)$，則外積定義為：</p>
        <div class="formula-block">
          <div class="formula-title">📐 外積座標公式與長度性質</div>
          <p>$$\\vec{a} \\times \\vec{b} = \\left( \\begin{vmatrix} a_2 & a_3 \\\\ b_2 & b_3 \\end{vmatrix}, -\\begin{vmatrix} a_1 & a_3 \\\\ b_1 & b_3 \\end{vmatrix}, \\begin{vmatrix} a_1 & a_2 \\\\ b_1 & b_2 \\end{vmatrix} \\right)$$<br>
             • <strong>幾何方向</strong>：$\\vec{a} \\times \\vec{b}$ 同時垂直於 $\\vec{a}$ 與 $\\vec{b}$，滿足「右手定則」。<br>
             • <strong>幾何長度</strong>：$|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin\\theta$，數值上恰好等於<strong>以 $\\vec{a}, \\vec{b}$ 為鄰邊所張出之平行四邊形面積</strong>！</p>
        </div>

        <h3>2. 純量三重積與平行六面體及四面體體積</h3>
        <div class="step-box">
          <div class="step-box-title">📦 空間體積快速計算階梯</div>
          <div class="step-row">
            <div class="step-num">平行六面體</div>
            <div class="step-math">$$V_{\\text{box}} = |(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}| = \\left| \\det \\begin{bmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{bmatrix} \\right|$$</div>
            <div class="step-desc">以三階行列式絕對值直接秒殺三空間向量所張之六面體體積。</div>
          </div>
          <div class="step-row">
            <div class="step-num">四面體體積</div>
            <div class="step-math">$$V_{\\text{tetra}} = \\frac{1}{6} V_{\\text{box}} = \\frac{1}{6} \\left| \\det \\begin{bmatrix} a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3 \\\\ c_1 & c_2 & c_3 \\end{bmatrix} \\right|$$</div>
            <div class="step-desc">四面體（三角錐）體積必為其對應平行六面體的 $\\frac{1}{6}$。大考若給定四個頂點坐標，先選一點作為起點化為三個向外向量，再代入行列式。</div>
          </div>
        </div>
      </section>

      <!-- 拾肆、平面線性變換二階幾何矩陣 -->
      <section id="ma-matrix-transform" class="content-section animate-fade-in-up">
        <h2>拾肆、二階平面線性變換幾何矩陣全方位解析 🪟</h2>
        <p>學測數 A 最常考二階方陣代表的幾何變換。請牢記四大標準變換矩陣形式與幾何性質：</p>

        <table class="data-table">
          <thead>
            <tr>
              <th style="width: 20%;">幾何變換</th>
              <th style="width: 30%;">標準代表矩陣 $A$</th>
              <th style="width: 20%;">行列式 $\\det(A)$</th>
              <th style="width: 30%;">幾何意義與不變性</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>旋轉變換<br>(Rotation)</strong></td>
              <td>$$\\begin{bmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{bmatrix}$$</td>
              <td>$$\\det(A) = 1$$</td>
              <td>繞原點逆時針旋轉角度 $\\theta$。<strong>保持長度、角度與面積完全不變</strong>（等距剛體變換）。</td>
            </tr>
            <tr>
              <td><strong>鏡射變換<br>(Reflection)</strong></td>
              <td>$$\\begin{bmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{bmatrix}$$</td>
              <td>$$\\det(A) = -1$$</td>
              <td>對稱軸為通過原點斜角為 $\\theta$ 之直線 $y = (\\tan\\theta)x$。<strong>保持長度與面積，但反轉方向性</strong>。$A^2 = I$。</td>
            </tr>
            <tr>
              <td><strong>推移變換<br>(Shearing)</strong></td>
              <td>沿 $x$ 軸推移：$$\\begin{bmatrix} 1 & k \\\\ 0 & 1 \\end{bmatrix}$$<br>沿 $y$ 軸推移：$$\\begin{bmatrix} 1 & 0 \\\\ k & 1 \\end{bmatrix}$$</td>
              <td>$$\\det(A) = 1$$</td>
              <td>圖形平行滑移變形。雖然角度與邊長改變，但<strong>底與高不變，故面積永遠維持不變</strong>！</td>
            </tr>
            <tr>
              <td><strong>伸縮變換<br>(Scaling)</strong></td>
              <td>$$\\begin{bmatrix} h & 0 \\\\ 0 & k \\end{bmatrix}$$</td>
              <td>$$\\det(A) = hk$$</td>
              <td>沿 $x$ 方向伸縮 $h$ 倍，沿 $y$ 方向伸縮 $k$ 倍。變換後<strong>面積變為原面積的 $|hk|$ 倍</strong>。</td>
            </tr>
          </tbody>
        </table>
      </section>
  `
};

const allDeepenConfigs = [chineseDeepen, mathBDeepen, socialDeepen, scienceDeepen, englishDeepen, mathADeepen];

allDeepenConfigs.forEach(cfg => {
  const filePath = path.join(subjectsDir, cfg.file);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Check & insert sidebar items
  cfg.newNav.forEach(nav => {
    if (!html.includes(`href="#${nav.id}"`)) {
      const navItem = `<li><a href="#${nav.id}">${nav.label}</a></li>\n        `;
      // Insert right before </ul> of sidebar
      html = html.replace(/(<\/ul>\s*<div[^>]*>)/i, navItem + '$1');
    }
  });

  // 2. Check & insert sections
  // Remove existing occurrences if any to avoid duplication
  const sectionIds = cfg.newNav.map(n => n.id);
  sectionIds.forEach(id => {
    const reg = new RegExp(`<section id="${id}"[\\s\\S]*?<\\/section>`, 'gi');
    html = html.replace(reg, '');
  });

  // Insert before the bottom quiz link div or before </main>
  if (html.includes('id="backToTop"') || html.includes('</main>')) {
    html = html.replace(/(\s*<div style="text-align:\s*center[^>]*>[\s\S]*?<\/div>\s*<\/main>)/i, '\n' + cfg.content + '\n$1');
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log(`Successfully deepened ${cfg.file}! New size: ${Buffer.byteLength(html, 'utf8')} bytes.`);
});
