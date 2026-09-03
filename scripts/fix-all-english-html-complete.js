const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(filePath, 'utf8');

console.log('Applying 100% full visible Chinese translations and pure audio buttons across all sections of subjects/english.html...');

// 1. Chapter 6 Transition Words Table (Screenshot 1)
const oldCh6Table = `          <table class="data-table">
            <thead><tr><th>功能</th><th>轉折語 Transitions</th></tr></thead>
            <tbody>
              <tr><td>補充 <span class="en-assist" data-tw="補充">Addition<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="此外, 而且, 還有">moreover, furthermore, in addition, besides, also<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td>對比 <span class="en-assist" data-tw="對比">Contrast<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="然而, 儘管如此, 相反地">however, nevertheless, on the contrary, whereas, yet<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td>因果 <span class="en-assist" data-tw="因果">Cause/Effect<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="因此, 所以, 結果, 因此, 故">therefore, consequently, as a result, thus, hence<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td>舉例 <span class="en-assist" data-tw="舉例">Example<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="例如, 像是, 也就是說">for instance, for example, such as, namely<span class="speak-icon">🔊</span></span></td></tr>
              <tr><td>總結 <span class="en-assist" data-tw="總結">Summary<span class="speak-icon">🔊</span></span></td><td><span class="en-assist" data-tw="總而言之, 簡言之">in conclusion, to sum up, in short, overall, all in all<span class="speak-icon">🔊</span></span></td></tr>
            </tbody>
          </table>`;

const newCh6Table = `          <table class="data-table">
            <thead><tr><th>邏輯功能 Function</th><th>常用轉折詞 Transitions 與中文對照</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>補充遞進</strong><br>Addition</td>
                <td>
                  <span class="en-assist" data-tw="此外/而且">moreover<span class="speak-icon">🔊</span></span>（此外）, 
                  <span class="en-assist" data-tw="而且/再者">furthermore<span class="speak-icon">🔊</span></span>（而且）, 
                  <span class="en-assist" data-tw="再加上/除此之外">in addition<span class="speak-icon">🔊</span></span>（再加上）, 
                  <span class="en-assist" data-tw="此外">besides<span class="speak-icon">🔊</span></span>（此外）, 
                  <span class="en-assist" data-tw="也">also<span class="speak-icon">🔊</span></span>（也）
                </td>
              </tr>
              <tr>
                <td><strong>對比轉折</strong><br>Contrast</td>
                <td>
                  <span class="en-assist" data-tw="然而">however<span class="speak-icon">🔊</span></span>（然而）, 
                  <span class="en-assist" data-tw="儘管如此">nevertheless<span class="speak-icon">🔊</span></span>（儘管如此）, 
                  <span class="en-assist" data-tw="相反地/恰恰相反">on the contrary<span class="speak-icon">🔊</span></span>（相反地）, 
                  <span class="en-assist" data-tw="然而/反之">whereas<span class="speak-icon">🔊</span></span>（反之）, 
                  <span class="en-assist" data-tw="然而/尚且">yet<span class="speak-icon">🔊</span></span>（然而）
                </td>
              </tr>
              <tr>
                <td><strong>因果關聯</strong><br>Cause / Effect</td>
                <td>
                  <span class="en-assist" data-tw="因此">therefore<span class="speak-icon">🔊</span></span>（因此）, 
                  <span class="en-assist" data-tw="結果/因此">consequently<span class="speak-icon">🔊</span></span>（結果導致）, 
                  <span class="en-assist" data-tw="結果">as a result<span class="speak-icon">🔊</span></span>（結果）, 
                  <span class="en-assist" data-tw="因此/從而">thus<span class="speak-icon">🔊</span></span>（從而）, 
                  <span class="en-assist" data-tw="由此/因此">hence<span class="speak-icon">🔊</span></span>（由此）
                </td>
              </tr>
              <tr>
                <td><strong>舉例說明</strong><br>Example</td>
                <td>
                  <span class="en-assist" data-tw="例如">for instance<span class="speak-icon">🔊</span></span>（例如）, 
                  <span class="en-assist" data-tw="例如">for example<span class="speak-icon">🔊</span></span>（比如）, 
                  <span class="en-assist" data-tw="像是/例如">such as<span class="speak-icon">🔊</span></span>（像是）, 
                  <span class="en-assist" data-tw="也就是說/即">namely<span class="speak-icon">🔊</span></span>（即/也就是說）
                </td>
              </tr>
              <tr>
                <td><strong>總結昇華</strong><br>Summary</td>
                <td>
                  <span class="en-assist" data-tw="總而言之/結論是">in conclusion<span class="speak-icon">🔊</span></span>（結論是）, 
                  <span class="en-assist" data-tw="總結來說">to sum up<span class="speak-icon">🔊</span></span>（總括來說）, 
                  <span class="en-assist" data-tw="簡言之">in short<span class="speak-icon">🔊</span></span>（簡而言之）, 
                  <span class="en-assist" data-tw="總體而言">overall<span class="speak-icon">🔊</span></span>（總體而言）, 
                  <span class="en-assist" data-tw="總的來說">all in all<span class="speak-icon">🔊</span></span>（總的來說）
                </td>
              </tr>
            </tbody>
          </table>`;

html = html.replace(oldCh6Table, newCh6Table);

// 2. Chapter 13 Transition Words Matrix (Screenshot 2)
const oldCh13Table = `        <table class="data-table">
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
        </table>`;

const newCh13Table = `        <table class="data-table">
          <thead>
            <tr>
              <th>邏輯關聯</th>
              <th>初階詞彙（建議升級）</th>
              <th>頂標升級詞彙（高級替換 附發音與中文）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>強烈對比 / 轉折</strong></td>
              <td>
                <span class="en-assist" data-tw="但是">but<span class="speak-icon">🔊</span></span>（但是）, 
                <span class="en-assist" data-tw="然而">however<span class="speak-icon">🔊</span></span>（然而）
              </td>
              <td>
                • <span class="en-assist" data-tw="形成強烈對比"><strong>In sharp contrast</strong><span class="speak-icon">🔊</span></span>（形成鮮明強烈對比）<br>
                • <span class="en-assist" data-tw="恰恰相反"><strong>On the contrary</strong><span class="speak-icon">🔊</span></span>（恰恰相反）<br>
                • <span class="en-assist" data-tw="儘管如此"><strong>Nevertheless</strong><span class="speak-icon">🔊</span></span>（儘管如此）<br>
                • <span class="en-assist" data-tw="反之/反過來說"><strong>Conversely</strong><span class="speak-icon">🔊</span></span>（反過來說/反之）
              </td>
            </tr>
            <tr>
              <td><strong>補充論述 / 遞進</strong></td>
              <td>
                <span class="en-assist" data-tw="和">and<span class="speak-icon">🔊</span></span>（和）, 
                <span class="en-assist" data-tw="也">also<span class="speak-icon">🔊</span></span>（也）, 
                <span class="en-assist" data-tw="此外">besides<span class="speak-icon">🔊</span></span>（此外）
              </td>
              <td>
                • <span class="en-assist" data-tw="此外"><strong>Furthermore</strong><span class="speak-icon">🔊</span></span>（此外、再者）<br>
                • <span class="en-assist" data-tw="而且"><strong>Moreover</strong><span class="speak-icon">🔊</span></span>（而且、更有甚者）<br>
                • <span class="en-assist" data-tw="除此之外"><strong>In addition to this</strong><span class="speak-icon">🔊</span></span>（除此之外）<br>
                • <span class="en-assist" data-tw="更有甚者"><strong>What is more</strong><span class="speak-icon">🔊</span></span>（更重要的是）
              </td>
            </tr>
            <tr>
              <td><strong>因果關聯</strong></td>
              <td>
                <span class="en-assist" data-tw="所以">so<span class="speak-icon">🔊</span></span>（所以）, 
                <span class="en-assist" data-tw="因為">because<span class="speak-icon">🔊</span></span>（因為）
              </td>
              <td>
                • <span class="en-assist" data-tw="結果導致"><strong>Consequently</strong><span class="speak-icon">🔊</span></span>（結果導致/因此）<br>
                • <span class="en-assist" data-tw="因此"><strong>Therefore</strong><span class="speak-icon">🔊</span></span>（因此）<br>
                • <span class="en-assist" data-tw="必然的結果是"><strong>As an inevitable result</strong><span class="speak-icon">🔊</span></span>（作為必然的結果）<br>
                • <span class="en-assist" data-tw="相應地/照著"><strong>Accordingly</strong><span class="speak-icon">🔊</span></span>（相應地/因此）
              </td>
            </tr>
            <tr>
              <td><strong>總結 / 昇華</strong></td>
              <td>
                <span class="en-assist" data-tw="最後">in the end<span class="speak-icon">🔊</span></span>（最後）, 
                <span class="en-assist" data-tw="終於">finally<span class="speak-icon">🔊</span></span>（終於）
              </td>
              <td>
                • <span class="en-assist" data-tw="總結而言"><strong>In conclusion</strong><span class="speak-icon">🔊</span></span>（總括而言）<br>
                • <span class="en-assist" data-tw="概括地說"><strong>To summarize</strong><span class="speak-icon">🔊</span></span>（概括地說）<br>
                • <span class="en-assist" data-tw="綜上所述"><strong>All things considered</strong><span class="speak-icon">🔊</span></span>（綜合考量一切）<br>
                • <span class="en-assist" data-tw="簡言之"><strong>In a nutshell</strong><span class="speak-icon">🔊</span></span>（一言以蔽之/簡言之）
              </td>
            </tr>
          </tbody>
        </table>`;

html = html.replace(oldCh13Table, newCh13Table);

// 3. Chapter 13 Writing Templates (Screenshot 3)
const oldCh13Templates = `        <div class="formula-block">
          <div class="formula-title">💡 否定倒裝句（強調堅定語氣）</div>
          <p>• <span class="en-assist" data-tw="在任何情況下，我們都不應為了課業成就而犧牲健康。"><strong>Under no circumstances should we</strong> sacrifice our health for academic achievements.<span class="speak-icon">🔊</span></span><br>
             （在任何情況下，我們都不應為了課業成就而犧牲健康。）<br>
             • <span class="en-assist" data-tw="體育運動不僅能增強體力，還能緩解心理壓力。"><strong>Not only does</strong> physical exercise build physical stamina, <strong>but it also</strong> relieves psychological pressure.<span class="speak-icon">🔊</span></span></p>
        </div>

        <div class="formula-block">
          <div class="formula-title">💡 分詞結構（提升行文緊湊度）</div>
          <p>• <span class="en-assist" data-tw="具備先進技術技能與批判性思維，現代學生已準備好迎接未來挑戰。"><strong>Equipped with</strong> advanced technological skills and critical thinking, modern students are ready to embrace future challenges.<span class="speak-icon">🔊</span></span><br>
             • <span class="en-assist" data-tw="在旅途中面對重重阻礙，她拒絕認輸放棄。"><strong>Facing</strong> numerous obstacles along the journey, she refused to throw in the towel.<span class="speak-icon">🔊</span></span></p>
        </div>`;

const newCh13Templates = `        <div class="formula-block">
          <div class="formula-title">💡 否定倒裝句（強調堅定語氣）</div>
          <p>• <span class="en-assist" data-tw="在任何情況下，我們都不應為了課業成就而犧牲健康。"><strong>Under no circumstances should we</strong> sacrifice our health for academic achievements.<span class="speak-icon">🔊</span></span><br>
             <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（在任何情況下，我們都不應為了課業成就而犧牲健康。）</span><br>
             • <span class="en-assist" data-tw="體育運動不僅能增強體力，還能緩解心理壓力。"><strong>Not only does</strong> physical exercise build physical stamina, <strong>but it also</strong> relieves psychological pressure.<span class="speak-icon">🔊</span></span><br>
             <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（體育運動不僅能增強體能耐力，還能有效緩解心理壓力。）</span></p>
        </div>

        <div class="formula-block">
          <div class="formula-title">💡 分詞結構（提升行文緊湊度）</div>
          <p>• <span class="en-assist" data-tw="具備先進技術技能與批判性思維，現代學生已準備好迎接未來挑戰。"><strong>Equipped with</strong> advanced technological skills and critical thinking, modern students are ready to embrace future challenges.<span class="speak-icon">🔊</span></span><br>
             <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（具備了先進科技技能與批判性思維，現代學生已準備好迎接未來的各項挑戰。）</span><br>
             • <span class="en-assist" data-tw="在旅途中面對重重阻礙，她拒絕認輸放棄。"><strong>Facing</strong> numerous obstacles along the journey, she refused to throw in the towel.<span class="speak-icon">🔊</span></span><br>
             <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（在人生旅途中面對重重阻礙，她依然堅定拒絕認輸放棄。）</span></p>
        </div>`;

html = html.replace(oldCh13Templates, newCh13Templates);

// 4. Chapter 14 Confusing Words Examples (Screenshot 4)
const oldCh14Table = `        <table class="data-table">
          <thead>
            <tr>
              <th>單字組</th>
              <th>詞性與中文意涵</th>
              <th>大考語意區分關鍵與實戰例句</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong><span class="en-assist" data-tw="適應/改編">adapt<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="採納/領養">adopt<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="熟練內行的">adept<span class="speak-icon">🔊</span></span></strong></td>
              <td>v. 適應；改編<br>v. 採納；領養<br>adj. 熟練的、內行的</td>
              <td>• <span class="en-assist" data-tw="你必須快速適應新的高中環境。">You must quickly <strong>adapt</strong> to the new high school environment.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="市政府決定採納綠能政策。">The municipal government decided to <strong>adopt</strong> a green energy policy.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="她非常擅長談判國際貿易合約。">She is highly <strong>adept</strong> at negotiating international trade contracts.<span class="speak-icon">🔊</span></span></td>
            </tr>
            <tr>
              <td><strong><span class="en-assist" data-tw="經濟上的">economic<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="節儉划算的">economical<span class="speak-icon">🔊</span></span></strong></td>
              <td>adj. 經濟上的（與經濟學、國家產業相關）<br>adj. 節儉的、省錢划算的</td>
              <td>• <span class="en-assist" data-tw="該國正在經歷嚴重的經濟衰退。">The country is undergoing a severe <strong>economic</strong> recession.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="長遠來看，購買高效率LED燈泡要划算得多。">Buying high-efficiency LED lightbulbs is much more <strong>economical</strong> in the long run.<span class="speak-icon">🔊</span></span></td>
            </tr>
            <tr>
              <td><strong><span class="en-assist" data-tw="具劃時代歷史意義的">historic<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="有關歷史的/史料的">historical<span class="speak-icon">🔊</span></span></strong></td>
              <td>adj. 歷史上著名的、具劃時代重大意義的<br>adj. 歷史的、有關歷史記載的</td>
              <td>• <span class="en-assist" data-tw="阿波羅11號登月對人類而言是真正具有歷史意義的時刻。">The Apollo 11 moon landing was a truly <strong>historic</strong> moment for mankind.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="這位教授花了數十年研究古代歷史文獻。">The professor spent decades doing research on ancient <strong>historical</strong> documents.<span class="speak-icon">🔊</span></span></td>
            </tr>
            <tr>
              <td><strong><span class="en-assist" data-tw="各自的">respective<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="體面受尊敬的">respectable<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="恭敬有禮的">respectful<span class="speak-icon">🔊</span></span></strong></td>
              <td>adj. 各自的、個別的<br>adj. 值得尊敬的、體面的<br>adj. 恭敬的、尊重的</td>
              <td>• <span class="en-assist" data-tw="學生們收拾書包回到各自的教室。">The students packed their bags and returned to their <strong>respective</strong> classrooms.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="作為一名有醫德的醫生，他建立了極受尊敬的聲譽。">He has established a very <strong>respectable</strong> reputation as an ethical doctor.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="我們對待長者應始終保持禮貌與尊重。">We should always remain polite and <strong>respectful</strong> toward senior citizens.<span class="speak-icon">🔊</span></span></td>
            </tr>
            <tr>
              <td><strong><span class="en-assist" data-tw="明智通情達理的">sensible<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="敏感的/敏銳的">sensitive<span class="speak-icon">🔊</span></span></strong></td>
              <td>adj. 明智的、通情達理的<br>adj. 敏感的、易受傷的</td>
              <td>• <span class="en-assist" data-tw="存一筆緊急備用金以備不時之需是明智的。">It is <strong>sensible</strong> to save an emergency fund for unexpected expenses.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="皮膚敏感的人應避免使用刺激性化學肥皂。">People with <strong>sensitive</strong> skin should avoid harsh chemical soaps.<span class="speak-icon">🔊</span></span></td>
            </tr>
            <tr>
              <td><strong><span class="en-assist" data-tw="稱讚/讚美">compliment<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="補充/相得益彰">complement<span class="speak-icon">🔊</span></span></strong></td>
              <td>n./v. 稱讚、讚美<br>n./v. 補充；與...相得益彰</td>
              <td>• <span class="en-assist" data-tw="老師對他富有創意的文章給予了熱情讚揚。">The teacher paid him a warm <strong>compliment</strong> on his creative essay.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="這款紅酒與美味的烤牛排相得益彰。">The red wine perfectly <strong>complements</strong> the flavorful roasted steak.<span class="speak-icon">🔊</span></span></td>
            </tr>
            <tr>
              <td><strong><span class="en-assist" data-tw="可理解的/清楚的">comprehensible<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="全面詳盡的">comprehensive<span class="speak-icon">🔊</span></span></strong></td>
              <td>adj. 可理解的、清楚明白的<br>adj. 全面的、詳盡廣泛的</td>
              <td>• <span class="en-assist" data-tw="這堂講座是用簡單且易於理解的措辭解釋的。">The lecture was explained in simple and easily <strong>comprehensible</strong> terms.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="該指南提供了學測備考策略的全面概述。">The guidebook provides a <strong>comprehensive</strong> overview of GSAT study tactics.<span class="speak-icon">🔊</span></span></td>
            </tr>
          </tbody>
        </table>`;

const newCh14Table = `        <table class="data-table">
          <thead>
            <tr>
              <th>單字組</th>
              <th>詞性與中文意涵</th>
              <th>大考語意區分關鍵與實戰例句（含發音與中文對照）</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="適應/改編">adapt<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="採納/領養">adopt<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="熟練內行的">adept<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                v. 適應；改編<br>
                v. 採納；領養<br>
                adj. 熟練的、內行的
              </td>
              <td>
                • <span class="en-assist" data-tw="你必須快速適應新的高中環境。">You must quickly <strong>adapt</strong> to the new high school environment.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（你必須迅速適應新的高中學習環境。）</span><br>
                • <span class="en-assist" data-tw="市政府決定採納綠能政策。">The municipal government decided to <strong>adopt</strong> a green energy policy.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（市政府決定採納實施一項綠色能源政策。）</span><br>
                • <span class="en-assist" data-tw="她非常擅長談判國際貿易合約。">She is highly <strong>adept</strong> at negotiating international trade contracts.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（她非常擅長談判國際貿易合約。）</span>
              </td>
            </tr>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="經濟上的">economic<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="節儉划算的">economical<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                adj. 經濟上的（國家產業）<br>
                adj. 節儉的、省錢划算的
              </td>
              <td>
                • <span class="en-assist" data-tw="該國正在經歷嚴重的經濟衰退。">The country is undergoing a severe <strong>economic</strong> recession.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（該國目前正經歷嚴重的經濟衰退。）</span><br>
                • <span class="en-assist" data-tw="長遠來看，購買高效率LED燈泡要划算得多。">Buying high-efficiency LED lightbulbs is much more <strong>economical</strong> in the long run.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（長期而言，購買高效率LED燈泡要划算得多。）</span>
              </td>
            </tr>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="具劃時代歷史意義的">historic<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="有關歷史的/史料的">historical<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                adj. 歷史上著名的、劃時代的<br>
                adj. 歷史的、史料文獻的
              </td>
              <td>
                • <span class="en-assist" data-tw="阿波羅11號登月對人類而言是真正具有歷史意義的時刻。">The Apollo 11 moon landing was a truly <strong>historic</strong> moment for mankind.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（阿波羅11號登月對全人類而言是具劃時代歷史意義的時刻。）</span><br>
                • <span class="en-assist" data-tw="這位教授花了數十年研究古代歷史文獻。">The professor spent decades doing research on ancient <strong>historical</strong> documents.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（這位教授花了數十年時間研究古代歷史文獻檔案。）</span>
              </td>
            </tr>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="各自的">respective<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="體面受尊敬的">respectable<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="恭敬有禮的">respectful<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                adj. 各自的、個別的<br>
                adj. 值得尊敬的、體面的<br>
                adj. 恭敬的、尊重的
              </td>
              <td>
                • <span class="en-assist" data-tw="學生們收拾書包回到各自的教室。">The students packed their bags and returned to their <strong>respective</strong> classrooms.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（學生們收拾書包，各自回到了各自的教室。）</span><br>
                • <span class="en-assist" data-tw="作為一名有醫德的醫生，他建立了極受尊敬的聲譽。">He has established a very <strong>respectable</strong> reputation as an ethical doctor.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（作為一名有醫德的醫師，他建立了受人尊敬的聲譽。）</span><br>
                • <span class="en-assist" data-tw="我們對待長者應始終保持禮貌與尊重。">We should always remain polite and <strong>respectful</strong> toward senior citizens.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（我們對待年長者應始終保持禮貌與恭敬。）</span>
              </td>
            </tr>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="明智通情達理的">sensible<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="敏感的/敏銳的">sensitive<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                adj. 明智的、通情達理的<br>
                adj. 敏感的、易受傷的
              </td>
              <td>
                • <span class="en-assist" data-tw="存一筆緊急備用金以備不時之需是明智的。">It is <strong>sensible</strong> to save an emergency fund for unexpected expenses.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（存一筆應急基金以備突發支出是明智之舉。）</span><br>
                • <span class="en-assist" data-tw="皮膚敏感的人應避免使用刺激性化學肥皂。">People with <strong>sensitive</strong> skin should avoid harsh chemical soaps.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（皮膚敏感的人應避免使用刺激性化學肥皂。）</span>
              </td>
            </tr>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="稱讚/讚美">compliment<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="補充/相得益彰">complement<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                n./v. 稱讚、讚美<br>
                n./v. 補充；相得益彰
              </td>
              <td>
                • <span class="en-assist" data-tw="老師對他富有創意的文章給予了熱情讚揚。">The teacher paid him a warm <strong>compliment</strong> on his creative essay.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（老師對他富有創意的作文給予了熱情稱讚。）</span><br>
                • <span class="en-assist" data-tw="這款紅酒與美味的烤牛排相得益彰。">The red wine perfectly <strong>complements</strong> the flavorful roasted steak.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（這款紅酒與美味的烤牛排相得益彰、完美搭配。）</span>
              </td>
            </tr>
            <tr>
              <td>
                • <strong><span class="en-assist" data-tw="可理解的/清楚的">comprehensible<span class="speak-icon">🔊</span></span></strong><br>
                • <strong><span class="en-assist" data-tw="全面詳盡的">comprehensive<span class="speak-icon">🔊</span></span></strong>
              </td>
              <td>
                adj. 可理解的、清楚明白的<br>
                adj. 全面的、詳盡廣泛的
              </td>
              <td>
                • <span class="en-assist" data-tw="這堂講座是用簡單且易於理解的措辭解釋的。">The lecture was explained in simple and easily <strong>comprehensible</strong> terms.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（該講座是以簡單易懂的措辭進行解說的。）</span><br>
                • <span class="en-assist" data-tw="該指南提供了學測備考策略的全面概述。">The guidebook provides a <strong>comprehensive</strong> overview of GSAT study tactics.<span class="speak-icon">🔊</span></span><br>
                <span style="color:var(--color-text-muted,#718096); font-size:0.88em;">（該指南提供了學測備考策略的全面詳盡概述。）</span>
              </td>
            </tr>
          </tbody>
        </table>`;

html = html.replace(oldCh14Table, newCh14Table);

// 5. Chapter 15 Clauses in Step-box (Screenshot 5)
const oldCh15Steps = `        <div class="step-box">
          <div class="step-box-title">🔍 子句判別三步走</div>
          <div class="step-row">
            <div class="step-num">名詞子句</div>
            <div class="step-math">在句中扮演<strong>主詞、受詞或同位語</strong>（that, whether, wh- 疑問詞引導）</div>
            <div class="step-desc">例：<span class="en-assist" data-tw="規律運動能預防疾病是一個眾所周知的醫學事實。"><em>That regular exercise prevents diseases</em> is a well-known medical fact.<span class="speak-icon">🔊</span></span>（整句作主詞）</div>
          </div>
          <div class="step-row">
            <div class="step-num">形容詞子句</div>
            <div class="step-math"><strong>修飾前方先行詞</strong>（關係代名詞 who, which, that 或關係副詞 where, when）</div>
            <div class="step-desc">注意非限定用法（逗號後面不可用 that！）：<span class="en-assist" data-tw="我的智慧型手機（我上週買的）已經壞了。"><em>My smartphone, <strong>which</strong> I bought last week, is already broken.</em><span class="speak-icon">🔊</span></span></div>
          </div>
          <div class="step-row">
            <div class="step-num">副詞子句</div>
            <div class="step-math">修飾整句動詞，表<strong>時間、原因、條件、讓步或目的</strong></div>
            <div class="step-desc">例：<span class="en-assist" data-tw="雖然天氣惡劣，他們仍然繼續登山探險。"><em>Although the weather was harsh</em>, they continued their mountain expedition.<span class="speak-icon">🔊</span></span>（表讓步）</div>
          </div>
        </div>`;

const newCh15Steps = `        <div class="step-box">
          <div class="step-box-title">🔍 子句判別三步走（含發音與中文全譯）</div>
          <div class="step-row">
            <div class="step-num">名詞子句</div>
            <div class="step-math">在句中扮演<strong>主詞、受詞或同位語</strong>（that, whether, wh- 疑問詞引導）</div>
            <div class="step-desc">
              例句：<span class="en-assist" data-tw="規律運動能預防疾病是一個眾所周知的醫學事實。"><em>That regular exercise prevents diseases</em> is a well-known medical fact.<span class="speak-icon">🔊</span></span><br>
              <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（中文翻譯：規律運動能預防疾病是一個眾所周知的醫學事實。—— that 子句在句中作主詞）</span>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num">形容詞子句</div>
            <div class="step-math"><strong>修飾前方先行詞</strong>（關係代名詞 who, which, that 或關係副詞 where, when）</div>
            <div class="step-desc">
              例句（注意非限定用法逗號後不可用 that！）：<span class="en-assist" data-tw="我的智慧型手機（我上週買的）已經壞了。"><em>My smartphone, <strong>which</strong> I bought last week, is already broken.</em><span class="speak-icon">🔊</span></span><br>
              <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（中文翻譯：我的智慧型手機——我上週才買的那支——居然已經壞了。）</span>
            </div>
          </div>
          <div class="step-row">
            <div class="step-num">副詞子句</div>
            <div class="step-math">修飾整句動詞，表<strong>時間、原因、條件、讓步或目的</strong></div>
            <div class="step-desc">
              例句：<span class="en-assist" data-tw="雖然天氣惡劣，他們仍然繼續登山探險。"><em>Although the weather was harsh</em>, they continued their mountain expedition.<span class="speak-icon">🔊</span></span><br>
              <span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（中文翻譯：雖然當時天氣十分惡劣，他們依然堅持繼續登山探險。—— Although 子句表讓步）</span>
            </div>
          </div>
        </div>`;

html = html.replace(oldCh15Steps, newCh15Steps);

// 6. Chapter 10 Essay Templates (Writing prompts)
const oldCh10Templates = `        <ul>
          <li><strong>看圖說故事 (<span class="en-assist" data-tw="看圖說故事">Picture Story<span class="speak-icon">🔊</span></span>)</strong>：
            <ul>
              <li>開頭必備時間與人物設定：<span class="en-assist" data-tw="在一個典型晴朗的週日午後，當主角決定去..."><em>It was a typical sunny Sunday afternoon when [主角] decided to...</em><span class="speak-icon">🔊</span></span></li>
              <li>轉折語氣（引發衝突）：<span class="en-assist" data-tw="不知從何處 / 令他驚訝的是 / 出乎意料地"><em>Out of nowhere, / To his astonishment, / Unexpectedly, ...</em><span class="speak-icon">🔊</span></span></li>
              <li>結尾感想：<span class="en-assist" data-tw="這個事件給了他一個寶貴的教訓：..."><em>This incident taught him a valuable lesson: ...</em><span class="speak-icon">🔊</span></span></li>
            </ul>
          </li>
          <li><strong>論說文 (<span class="en-assist" data-tw="論說文">Opinion Essay<span class="speak-icon">🔊</span></span>)</strong>：
            <ul>
              <li>開頭引入背景（<span class="en-assist" data-tw="主題句">Topic Sentence<span class="speak-icon">🔊</span></span>）：<span class="en-assist" data-tw="近年來，這個主題引發了廣泛的爭論。就個人而言，我堅信..."><em>In recent years, the issue of [主題] has sparked widespread debate. Personally, I firmly believe that...</em><span class="speak-icon">🔊</span></span></li>
              <li>舉例說明：<span class="en-assist" data-tw="以...為例 / 這最好的一個例子是..."><em>Take [例子] for instance, ... / A prime example of this is...</em><span class="speak-icon">🔊</span></span></li>
              <li>結尾重申：<span class="en-assist" data-tw="總結來說，權衡利弊後，很明顯地..."><em>In conclusion, weighing the pros and cons, it is evident that...</em><span class="speak-icon">🔊</span></span></li>
            </ul>
          </li>
        </ul>`;

const newCh10Templates = `        <ul>
          <li><strong>看圖說故事 (<span class="en-assist" data-tw="看圖說故事">Picture Story<span class="speak-icon">🔊</span></span>)</strong>：
            <ul>
              <li>開頭必備時間與人物設定：<span class="en-assist" data-tw="在一個典型晴朗的週日午後，當主角決定去..."><em>It was a typical sunny Sunday afternoon when [主角] decided to...</em><span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（在一個典型晴朗的週日午後，當主角決定去……）</span></li>
              <li>轉折語氣（引發衝突）：<span class="en-assist" data-tw="不知從何處 / 令他驚訝的是 / 出乎意料地"><em>Out of nowhere, / To his astonishment, / Unexpectedly, ...</em><span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（不知從何處突然…… / 令他驚訝的是…… / 出乎意料地……）</span></li>
              <li>結尾感想：<span class="en-assist" data-tw="這個事件給了他一個寶貴的教訓：..."><em>This incident taught him a valuable lesson: ...</em><span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（這個事件給了他一個寶貴的教訓：……）</span></li>
            </ul>
          </li>
          <li><strong>論說文 (<span class="en-assist" data-tw="論說文">Opinion Essay<span class="speak-icon">🔊</span></span>)</strong>：
            <ul>
              <li>開頭引入背景（<span class="en-assist" data-tw="主題句">Topic Sentence<span class="speak-icon">🔊</span></span>）：<span class="en-assist" data-tw="近年來，這個主題引發了廣泛的爭論。就個人而言，我堅信..."><em>In recent years, the issue of [主題] has sparked widespread debate. Personally, I firmly believe that...</em><span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（近年來，關於[主題]的議題引發了廣泛的爭論。就個人而言，我堅信……）</span></li>
              <li>舉例說明：<span class="en-assist" data-tw="以...為例 / 這最好的一個例子是..."><em>Take [例子] for instance, ... / A prime example of this is...</em><span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（以[例子]為例…… / 這最好的一個例證就是……）</span></li>
              <li>結尾重申：<span class="en-assist" data-tw="總結來說，權衡利弊後，很明顯地..."><em>In conclusion, weighing the pros and cons, it is evident that...</em><span class="speak-icon">🔊</span></span><br><span style="color:var(--color-text-muted,#718096); font-size:0.9em;">（總括而言，在權衡利弊得失之後，顯而易見的是……）</span></li>
            </ul>
          </li>
        </ul>`;

html = html.replace(oldCh10Templates, newCh10Templates);

fs.writeFileSync(filePath, html, 'utf8');
console.log('Successfully completed full update of subjects/english.html!');
