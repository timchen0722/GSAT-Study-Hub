const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'subjects', 'english.html');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Enriching subjects/english.html with 100% pronunciation & translation tags...');

// 1. Suffixes & Word families (lines 108-140)
content = content.replace(
  `• rely $\\rightarrow$ <strong>reliable</strong>（可靠的）<br>• flex $\\rightarrow$ <strong>flexible</strong>（有彈性的、可變通的）<br>• access $\\rightarrow$ <strong>accessible</strong>（可獲取的、易到達的）`,
  `• <span class="en-assist" data-tw="依靠">rely<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="可靠的">reliable<span class="speak-icon">🔊</span></span></strong>（可靠的）<br>• <span class="en-assist" data-tw="彎曲">flex<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="有彈性可變通的">flexible<span class="speak-icon">🔊</span></span></strong>（有彈性的、可變通的）<br>• <span class="en-assist" data-tw="接近">access<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="可獲取易到達的">accessible<span class="speak-icon">🔊</span></span></strong>（可獲取的、易到達的）`
);

content = content.replace(
  `• simple $\\rightarrow$ <strong>simplify</strong>（簡化）<br>• sharp $\\rightarrow$ <strong>sharpen</strong>（磨利、使敏銳）<br>• memory $\\rightarrow$ <strong>memorize</strong>（記住、熟背）`,
  `• <span class="en-assist" data-tw="簡單的">simple<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="簡化">simplify<span class="speak-icon">🔊</span></span></strong>（簡化）<br>• <span class="en-assist" data-tw="鋒利的">sharp<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="磨利/使敏銳">sharpen<span class="speak-icon">🔊</span></span></strong>（磨利、使敏銳）<br>• <span class="en-assist" data-tw="記憶">memory<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="記住/熟背">memorize<span class="speak-icon">🔊</span></span></strong>（記住、熟背）`
);

content = content.replace(
  `• pollute $\\rightarrow$ <strong>pollution</strong>（污染）<br>• conclude $\\rightarrow$ <strong>conclusion</strong>（結論）<br>• achieve $\\rightarrow$ <strong>achievement</strong>（成就）`,
  `• <span class="en-assist" data-tw="污染">pollute<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="污染">pollution<span class="speak-icon">🔊</span></span></strong>（污染）<br>• <span class="en-assist" data-tw="總結">conclude<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="結論">conclusion<span class="speak-icon">🔊</span></span></strong>（結論）<br>• <span class="en-assist" data-tw="達成">achieve<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="成就">achievement<span class="speak-icon">🔊</span></span></strong>（成就）`
);

content = content.replace(
  `• aware $\\rightarrow$ <strong>awareness</strong>（意識、警覺）<br>• diverse $\\rightarrow$ <strong>diversity</strong>（多樣性）<br>• complex $\\rightarrow$ <strong>complexity</strong>（複雜度）`,
  `• <span class="en-assist" data-tw="有意識的">aware<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="意識/警覺">awareness<span class="speak-icon">🔊</span></span></strong>（意識、警覺）<br>• <span class="en-assist" data-tw="多元的">diverse<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="多樣性">diversity<span class="speak-icon">🔊</span></span></strong>（多樣性）<br>• <span class="en-assist" data-tw="複雜的">complex<span class="speak-icon">🔊</span></span> $\\rightarrow$ <strong><span class="en-assist" data-tw="複雜度">complexity<span class="speak-icon">🔊</span></span></strong>（複雜度）`
);

// 2. Causative & Perception verbs (lines 231, 238, 245)
content = content.replace(
  `• The coach <strong>made him run</strong> five laps.（主動）<br>• She <strong>had her car repaired</strong> yesterday.（被動：車被修）`,
  `• <span class="en-assist" data-tw="教練叫他跑五圈。">The coach <strong>made him run</strong> five laps.<span class="speak-icon">🔊</span></span>（主動）<br>• <span class="en-assist" data-tw="她昨天送修了她的車。">She <strong>had her car repaired</strong> yesterday.<span class="speak-icon">🔊</span></span>（被動：車被修）`
);

content = content.replace(
  `• I will <strong>get my brother to help</strong> me.（主動用 to V！）<br>• He <strong>got his tooth pulled</strong> out.（被動用 p.p.）`,
  `• <span class="en-assist" data-tw="我會叫我弟弟幫我。">I will <strong>get my brother to help</strong> me.<span class="speak-icon">🔊</span></span>（主動用 to V！）<br>• <span class="en-assist" data-tw="他把牙齒拔掉了。">He <strong>got his tooth pulled</strong> out.<span class="speak-icon">🔊</span></span>（被動用 p.p.）`
);

content = content.replace(
  `• I <strong>heard someone calling</strong> my name.（正在叫）<br>• We <strong>watched the thief arrested</strong> by police.（小偷被捕）`,
  `• <span class="en-assist" data-tw="我聽到有人在叫我的名字。">I <strong>heard someone calling</strong> my name.<span class="speak-icon">🔊</span></span>（正在叫）<br>• <span class="en-assist" data-tw="我們看著小偷被警察逮捕。">We <strong>watched the thief arrested</strong> by police.<span class="speak-icon">🔊</span></span>（小偷被捕）`
);

// 3. Core Collocations table (lines 542-590)
const collocations = [
  {
    find: `<td><strong>attribute A to B</strong></td>\n              <td>將 A 歸因於 B</td>\n              <td>He <em>attributes</em> his remarkable success <em>to</em> hard work and perseverance.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="將 A 歸因於 B">attribute A to B<span class="speak-icon">🔊</span></span></strong></td>\n              <td>將 A 歸因於 B</td>\n              <td><span class="en-assist" data-tw="他將他的卓越成功歸因於勤奮與毅力。">He <em>attributes</em> his remarkable success <em>to</em> hard work and perseverance.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>contribute to + N/V-ing</strong></td>\n              <td>促成；導致；有助於</td>\n              <td>Excessive emission of greenhouse gases directly <em>contributes to</em> global climate change.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="促成/導致/有助於">contribute to + N/V-ing<span class="speak-icon">🔊</span></span></strong></td>\n              <td>促成；導致；有助於</td>\n              <td><span class="en-assist" data-tw="溫室氣體的過量排放直接導致了全球氣候變遷。">Excessive emission of greenhouse gases directly <em>contributes to</em> global climate change.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>account for</strong></td>\n              <td>解釋說明；佔（比例）</td>\n              <td>Renewable energy currently <em>accounts for</em> nearly 30% of total electricity production.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="解釋說明 / 佔比例">account for<span class="speak-icon">🔊</span></span></strong></td>\n              <td>解釋說明；佔（比例）</td>\n              <td><span class="en-assist" data-tw="再生能源目前佔總發電量的近 30%。">Renewable energy currently <em>accounts for</em> nearly 30% of total electricity production.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>result in vs. result from</strong></td>\n              <td>導致（接結果）vs. 起因於（接原因）</td>\n              <td>Carelessness <em>results in</em> accidents. / Accidents <em>result from</em> carelessness.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="導致 vs 起因於">result in vs. result from<span class="speak-icon">🔊</span></span></strong></td>\n              <td>導致（接結果）vs. 起因於（接原因）</td>\n              <td><span class="en-assist" data-tw="粗心導致事故。/ 事故起因於粗心。">Carelessness <em>results in</em> accidents. / Accidents <em>result from</em> carelessness.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>deprive A of B</strong></td>\n              <td>剝奪 A 的 B 權利或事物</td>\n              <td>Prolonged sleep deprivation can <em>deprive</em> individuals <em>of</em> their mental sharpness.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="剝奪 A 的 B 權利">deprive A of B<span class="speak-icon">🔊</span></span></strong></td>\n              <td>剝奪 A 的 B 權利或事物</td>\n              <td><span class="en-assist" data-tw="長期睡眠剝奪會使人失去敏銳的心智。">Prolonged sleep deprivation can <em>deprive</em> individuals <em>of</em> their mental sharpness.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>conform to</strong></td>\n              <td>遵守（規則）；符合（標準）</td>\n              <td>All manufactured products must strictly <em>conform to</em> international safety standards.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="遵守規則 / 符合標準">conform to<span class="speak-icon">🔊</span></span></strong></td>\n              <td>遵守（規則）；符合（標準）</td>\n              <td><span class="en-assist" data-tw="所有製造產品都必須嚴格遵守國際安全標準。">All manufactured products must strictly <em>conform to</em> international safety standards.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>cope with / grapple with</strong></td>\n              <td>應付；處理（棘手問題）</td>\n              <td>Governments worldwide are trying their best to <em>cope with</em> rising inflation.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="應付/處理棘手問題">cope with / grapple with<span class="speak-icon">🔊</span></span></strong></td>\n              <td>應付；處理（棘手問題）</td>\n              <td><span class="en-assist" data-tw="世界各國政府正竭盡全力應對日益嚴重的通膨。">Governments worldwide are trying their best to <em>cope with</em> rising inflation.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>compensate for</strong></td>\n              <td>彌補；補償</td>\n              <td>Nothing can truly <em>compensate for</em> the tragic loss of human lives.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="彌補 / 補償">compensate for<span class="speak-icon">🔊</span></span></strong></td>\n              <td>彌補；補償</td>\n              <td><span class="en-assist" data-tw="沒有任何東西能真正彌補生命的慘痛損失。">Nothing can truly <em>compensate for</em> the tragic loss of human lives.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>subscribe to</strong></td>\n              <td>訂閱；同意/支持（觀點）</td>\n              <td>I do not completely <em>subscribe to</em> the idea that money brings absolute happiness.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="訂閱 / 同意支持觀點">subscribe to<span class="speak-icon">🔊</span></span></strong></td>\n              <td>訂閱；同意/支持（觀點）</td>\n              <td><span class="en-assist" data-tw="我並不完全認同金錢能帶來絕對幸福的觀點。">I do not completely <em>subscribe to</em> the idea that money brings absolute happiness.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>stem from</strong></td>\n              <td>起源於；源自</td>\n              <td>Most psychological anxieties often <em>stem from</em> unexpressed childhood trauma.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="起源於 / 源自">stem from<span class="speak-icon">🔊</span></span></strong></td>\n              <td>起源於；源自</td>\n              <td><span class="en-assist" data-tw="大多數心理焦慮往往源自未表達的童年創傷。">Most psychological anxieties often <em>stem from</em> unexpressed childhood trauma.<span class="speak-icon">🔊</span></span></td>`
  }
];

collocations.forEach(c => {
  content = content.replace(c.find, c.replace);
});

// 4. Confusing words table (lines 660-697)
const confusingWords = [
  {
    find: `<td><strong>adapt<br>adopt<br>adept</strong></td>\n              <td>v. 適應；改編<br>v. 採納；領養<br>adj. 熟練的、內行的</td>\n              <td>• You must quickly <strong>adapt</strong> to the new high school environment.<br>• The municipal government decided to <strong>adopt</strong> a green energy policy.<br>• She is highly <strong>adept</strong> at negotiating international trade contracts.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="適應/改編">adapt<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="採納/領養">adopt<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="熟練內行的">adept<span class="speak-icon">🔊</span></span></strong></td>\n              <td>v. 適應；改編<br>v. 採納；領養<br>adj. 熟練的、內行的</td>\n              <td>• <span class="en-assist" data-tw="你必須快速適應新的高中環境。">You must quickly <strong>adapt</strong> to the new high school environment.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="市政府決定採納綠能政策。">The municipal government decided to <strong>adopt</strong> a green energy policy.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="她非常擅長談判國際貿易合約。">She is highly <strong>adept</strong> at negotiating international trade contracts.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>economic<br>economical</strong></td>\n              <td>adj. 經濟上的（與經濟學、國家產業相關）<br>adj. 節儉的、省錢划算的</td>\n              <td>• The country is undergoing a severe <strong>economic</strong> recession.<br>• Buying high-efficiency LED lightbulbs is much more <strong>economical</strong> in the long run.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="經濟上的">economic<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="節儉划算的">economical<span class="speak-icon">🔊</span></span></strong></td>\n              <td>adj. 經濟上的（與經濟學、國家產業相關）<br>adj. 節儉的、省錢划算的</td>\n              <td>• <span class="en-assist" data-tw="該國正在經歷嚴重的經濟衰退。">The country is undergoing a severe <strong>economic</strong> recession.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="長遠來看，購買高效率LED燈泡要划算得多。">Buying high-efficiency LED lightbulbs is much more <strong>economical</strong> in the long run.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>historic<br>historical</strong></td>\n              <td>adj. 歷史上著名的、具劃時代重大意義的<br>adj. 歷史的、有關歷史記載的</td>\n              <td>• The Apollo 11 moon landing was a truly <strong>historic</strong> moment for mankind.<br>• The professor spent decades doing research on ancient <strong>historical</strong> documents.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="具劃時代歷史意義的">historic<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="有關歷史的/史料的">historical<span class="speak-icon">🔊</span></span></strong></td>\n              <td>adj. 歷史上著名的、具劃時代重大意義的<br>adj. 歷史的、有關歷史記載的</td>\n              <td>• <span class="en-assist" data-tw="阿波羅11號登月對人類而言是真正具有歷史意義的時刻。">The Apollo 11 moon landing was a truly <strong>historic</strong> moment for mankind.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="這位教授花了數十年研究古代歷史文獻。">The professor spent decades doing research on ancient <strong>historical</strong> documents.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>respective<br>respectable<br>respectful</strong></td>\n              <td>adj. 各自的、個別的<br>adj. 值得尊敬的、體面的<br>adj. 恭敬的、尊重的</td>\n              <td>• The students packed their bags and returned to their <strong>respective</strong> classrooms.<br>• He has established a very <strong>respectable</strong> reputation as an ethical doctor.<br>• We should always remain polite and <strong>respectful</strong> toward senior citizens.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="各自的">respective<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="體面受尊敬的">respectable<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="恭敬有禮的">respectful<span class="speak-icon">🔊</span></span></strong></td>\n              <td>adj. 各自的、個別的<br>adj. 值得尊敬的、體面的<br>adj. 恭敬的、尊重的</td>\n              <td>• <span class="en-assist" data-tw="學生們收拾書包回到各自的教室。">The students packed their bags and returned to their <strong>respective</strong> classrooms.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="作為一名有醫德的醫生，他建立了極受尊敬的聲譽。">He has established a very <strong>respectable</strong> reputation as an ethical doctor.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="我們對待長者應始終保持禮貌與尊重。">We should always remain polite and <strong>respectful</strong> toward senior citizens.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>sensible<br>sensitive</strong></td>\n              <td>adj. 明智的、通情達理的<br>adj. 敏感的、易受傷的</td>\n              <td>• It is <strong>sensible</strong> to save an emergency fund for unexpected expenses.<br>• People with <strong>sensitive</strong> skin should avoid harsh chemical soaps.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="明智通情達理的">sensible<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="敏感的/敏銳的">sensitive<span class="speak-icon">🔊</span></span></strong></td>\n              <td>adj. 明智的、通情達理的<br>adj. 敏感的、易受傷的</td>\n              <td>• <span class="en-assist" data-tw="存一筆緊急備用金以備不時之需是明智的。">It is <strong>sensible</strong> to save an emergency fund for unexpected expenses.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="皮膚敏感的人應避免使用刺激性化學肥皂。">People with <strong>sensitive</strong> skin should avoid harsh chemical soaps.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>compliment<br>complement</strong></td>\n              <td>n./v. 稱讚、讚美<br>n./v. 補充；與...相得益彰</td>\n              <td>• The teacher paid him a warm <strong>compliment</strong> on his creative essay.<br>• The red wine perfectly <strong>complements</strong> the flavorful roasted steak.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="稱讚/讚美">compliment<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="補充/相得益彰">complement<span class="speak-icon">🔊</span></span></strong></td>\n              <td>n./v. 稱讚、讚美<br>n./v. 補充；與...相得益彰</td>\n              <td>• <span class="en-assist" data-tw="老師對他富有創意的文章給予了熱情讚揚。">The teacher paid him a warm <strong>compliment</strong> on his creative essay.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="這款紅酒與美味的烤牛排相得益彰。">The red wine perfectly <strong>complements</strong> the flavorful roasted steak.<span class="speak-icon">🔊</span></span></td>`
  },
  {
    find: `<td><strong>comprehensible<br>comprehensive</strong></td>\n              <td>adj. 可理解的、清楚明白的<br>adj. 全面的、詳盡廣泛的</td>\n              <td>• The lecture was explained in simple and easily <strong>comprehensible</strong> terms.<br>• The guidebook provides a <strong>comprehensive</strong> overview of GSAT study tactics.</td>`,
    replace: `<td><strong><span class="en-assist" data-tw="可理解的/清楚的">comprehensible<span class="speak-icon">🔊</span></span><br><span class="en-assist" data-tw="全面詳盡的">comprehensive<span class="speak-icon">🔊</span></span></strong></td>\n              <td>adj. 可理解的、清楚明白的<br>adj. 全面的、詳盡廣泛的</td>\n              <td>• <span class="en-assist" data-tw="這堂講座是用簡單且易於理解的措辭解釋的。">The lecture was explained in simple and easily <strong>comprehensible</strong> terms.<span class="speak-icon">🔊</span></span><br>• <span class="en-assist" data-tw="該指南提供了學測備考策略的全面概述。">The guidebook provides a <strong>comprehensive</strong> overview of GSAT study tactics.<span class="speak-icon">🔊</span></span></td>`
  }
];

confusingWords.forEach(cw => {
  content = content.replace(cw.find, cw.replace);
});

// 5. Subjunctive mood & clauses (lines 715-760)
content = content.replace(
  `<td>If I <strong>were</strong> you, I <strong>would seize</strong> this rare opportunity.</td>`,
  `<td><span class="en-assist" data-tw="如果我是你，我就會抓住這個難得的機會。">If I <strong>were</strong> you, I <strong>would seize</strong> this rare opportunity.<span class="speak-icon">🔊</span></span></td>`
);

content = content.replace(
  `<td>If he <strong>had listened</strong> to the doctor, he <strong>would not have fallen</strong> ill.</td>`,
  `<td><span class="en-assist" data-tw="如果他當時聽了醫生的話，他就不會生病了。">If he <strong>had listened</strong> to the doctor, he <strong>would not have fallen</strong> ill.<span class="speak-icon">🔊</span></span></td>`
);

content = content.replace(
  `<td>If the sun <strong>were to rise</strong> in the west, I would still never change my mind.</td>`,
  `<td><span class="en-assist" data-tw="即使太陽從西邊升起，我也絕不會改變主意。">If the sun <strong>were to rise</strong> in the west, I would still never change my mind.<span class="speak-icon">🔊</span></span></td>`
);

content = content.replace(
  `<p>• If I were you... $\\rightarrow$ <strong>Were I you</strong>, I would accept the offer.<br>\n             • If he had studied harder... $\\rightarrow$ <strong>Had he studied</strong> harder, he would have passed.<br>\n             • If it should rain tomorrow... $\\rightarrow$ <strong>Should it rain</strong> tomorrow, the picnic will be cancelled.</p>`,
  `<p>• <span class="en-assist" data-tw="如果我是你，我就會接受這份工作提議。">If I were you... $\\rightarrow$ <strong>Were I you</strong>, I would accept the offer.<span class="speak-icon">🔊</span></span><br>\n             • <span class="en-assist" data-tw="如果他當時更努力讀書，他就會通過了。">If he had studied harder... $\\rightarrow$ <strong>Had he studied</strong> harder, he would have passed.<span class="speak-icon">🔊</span></span><br>\n             • <span class="en-assist" data-tw="萬一明天下雨，野餐將會取消。">If it should rain tomorrow... $\\rightarrow$ <strong>Should it rain</strong> tomorrow, the picnic will be cancelled.<span class="speak-icon">🔊</span></span></p>`
);

content = content.replace(
  `<div class="step-desc">例：<em>That regular exercise prevents diseases</em> is a well-known medical fact.（整句作主詞）</div>`,
  `<div class="step-desc">例：<span class="en-assist" data-tw="規律運動能預防疾病是一個眾所周知的醫學事實。"><em>That regular exercise prevents diseases</em> is a well-known medical fact.<span class="speak-icon">🔊</span></span>（整句作主詞）</div>`
);

content = content.replace(
  `<div class="step-desc">注意非限定用法（逗號後面不可用 that！）：<em>My smartphone, <strong>which</strong> I bought last week, is already broken.</em></div>`,
  `<div class="step-desc">注意非限定用法（逗號後面不可用 that！）：<span class="en-assist" data-tw="我的智慧型手機（我上週買的）已經壞了。"><em>My smartphone, <strong>which</strong> I bought last week, is already broken.</em><span class="speak-icon">🔊</span></span></div>`
);

content = content.replace(
  `<div class="step-desc">例：<em>Although the weather was harsh</em>, they continued their mountain expedition.（表讓步）</div>`,
  `<div class="step-desc">例：<span class="en-assist" data-tw="雖然天氣惡劣，他們仍然繼續登山探險。"><em>Although the weather was harsh</em>, they continued their mountain expedition.<span class="speak-icon">🔊</span></span>（表讓步）</div>`
);

// Writing sentences (lines 635-644)
content = content.replace(
  `<p>• <strong>Under no circumstances should we</strong> sacrifice our health for academic achievements.<br>\n             （在任何情況下，我們都不應為了課業成就而犧牲健康。）<br>\n             • <strong>Not only does</strong> physical exercise build physical stamina, <strong>but it also</strong> relieves psychological pressure.</p>`,
  `<p>• <span class="en-assist" data-tw="在任何情況下，我們都不應為了課業成就而犧牲健康。"><strong>Under no circumstances should we</strong> sacrifice our health for academic achievements.<span class="speak-icon">🔊</span></span><br>\n             （在任何情況下，我們都不應為了課業成就而犧牲健康。）<br>\n             • <span class="en-assist" data-tw="體育運動不僅能增強體力，還能緩解心理壓力。"><strong>Not only does</strong> physical exercise build physical stamina, <strong>but it also</strong> relieves psychological pressure.<span class="speak-icon">🔊</span></span></p>`
);

content = content.replace(
  `<p>• <strong>Equipped with</strong> advanced technological skills and critical thinking, modern students are ready to embrace future challenges.<br>\n             • <strong>Facing</strong> numerous obstacles along the journey, she refused to throw in the towel.</p>`,
  `<p>• <span class="en-assist" data-tw="具備先進技術技能與批判性思維，現代學生已準備好迎接未來挑戰。"><strong>Equipped with</strong> advanced technological skills and critical thinking, modern students are ready to embrace future challenges.<span class="speak-icon">🔊</span></span><br>\n             • <span class="en-assist" data-tw="在旅途中面對重重阻礙，她拒絕認輸放棄。"><strong>Facing</strong> numerous obstacles along the journey, she refused to throw in the towel.<span class="speak-icon">🔊</span></span></p>`
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully enriched subjects/english.html with complete pronunciation & translation coverage!');
