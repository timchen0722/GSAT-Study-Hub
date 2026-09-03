const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current English count before batch 17: ${quiz.length}`);

// 50 Handcrafted, non-templated questions for English
const batch17 = [
  {
    category: "大考核心字彙",
    question: "Severe legal penalties and heavy fines serve as a powerful ______ against corporate tax evasion and environmental pollution.",
    options: ["deterrent（威懾物 / 遏阻力）", "deterioration（惡化）", "determination（決心）", "destination（目的地）"],
    answer: 0,
    explanation: "deterrent 意為「威懾物 / 遏止力 / 威懾手段」。句意：嚴厲的法律制裁與高額罰款對企業逃漏稅與環境污染起到了強大的威懾遏阻作用。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "With the rapid advent of digital streaming platforms, traditional VHS videotapes and cassette players have become completely ______.",
    options: ["obsolete（過時淘汰的 / 廢棄不用的）", "obligatory（強制的）", "obscure（晦澀模糊的）", "optimistic（樂觀的）"],
    answer: 0,
    explanation: "obsolete 意為「過時淘汰的 / 已廢棄的」（同義詞 outdated）。句意：隨著數位串流平臺的迅速興起，傳統 VHS 錄影帶與錄音帶播放機已完全被時代淘汰。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "After hours of intense debate, the jury reached a ______ verdict that the defendant was not guilty of first-degree murder.",
    options: ["unanimous（全體一致的 / 無異議的）", "unilateral（單方面的）", "anonymous（匿名的）", "monotonous（單調的）"],
    answer: 0,
    explanation: "unanimous 意為「全體一致贊成的 / 毫無異議的」。句意：經過數小時激烈辯論，陪審團達成了全體一致的無罪判決，判定被告一級謀殺罪不成立。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Auditors were summoned to ______ the company's financial balance sheets for any signs of accounting fraud.",
    options: ["scrutinize（仔細審查 / 澈底檢查）", "speculate（推測投機）", "stimulate（刺激激勵）", "substitute（替代）"],
    answer: 0,
    explanation: "scrutinize 意為「仔細嚴格審查 / 澈底檢查」（同義詞 examine closely）。句意：審計師受召對公司的財務資產負債表進行澈底嚴格審查，以查找任何做假帳欺詐跡象。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Even though the champion holds a comfortable lead, he cannot afford to be ______ and must stay focused until the final whistle.",
    options: ["complacent（自滿沾沾自喜的 / 麻痺大意的）", "competent（有能力的）", "compassionate（有同情心的）", "compatible（相容相契的）"],
    answer: 0,
    explanation: "complacent 意為「自滿的 / 盲目樂觀麻痺大意的」。句意：儘管衛冕冠軍保持顯著領先，但他絕不能盲目自滿，必須保持專注直到終場哨聲響起。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Instead of clinging to unrealistic ideals, the mayor adopted a ______ approach to solve the city's urgent housing shortage.",
    options: ["pragmatic（務實求真的 / 重實效的）", "pessimistic（悲觀的）", "pathetic（可憐可悲的）", "peculiar（古怪的）"],
    answer: 0,
    explanation: "pragmatic 意為「務實的 / 重實效的」（同義詞 practical, realistic）。句意：市長沒有執著於不切實際的理想，而是採取了務實求真的做法來解決城市迫切的住房短缺問題。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "In aviation safety and surgical operations, precision and clear communication are of ______ importance.",
    options: ["paramount（首要的 / 至高無上的）", "permanent（永久的）", "parallel（平行的）", "perishable（易腐爛的）"],
    answer: 0,
    explanation: "of paramount importance 意為「至關重要 / 首要關鍵的」（同義詞 of supreme importance）。句意：在航空安全與外科手術中，精確性與清晰溝通具有至高無上的重要性。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "Only by working together collaboratively ______ overcome the unprecedented global challenges posed by climate change.",
    options: ["can we（Only by + V-ing 置於句首之助動詞倒裝）", "we can", "we will", "do we can"],
    answer: 0,
    explanation: "Only + 介系詞片語置於句首時，主要子句必須倒裝（助動詞 can 提至主詞 we 前面：Only by... can we...）。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "So captivating ______ that everyone in the auditorium was completely engrossed from beginning to end.",
    options: ["was the magician's performance（So + adj + be + S + that... 如此……以致於之倒裝）", "the magician's performance was", "the performance of magician was", "had been the performance"],
    answer: 0,
    explanation: "So + 形容詞置於句首倒裝句型：So captivating was the performance that...（表演如此扣人心弦，以致於全體觀眾自始至終沉浸其中）。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The charitable foundation is firmly committed to ______ underprivileged children with quality educational resources.",
    options: ["providing（be committed to + 動名詞 V-ing，致力於做……）", "provide", "provided", "provision"],
    answer: 0,
    explanation: "be committed / dedicated / devoted to + V-ing（其中 to 為介系詞，後接動名詞）。句意：該慈善基金會堅定致力於為弱勢兒童提供優質教育資源。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "Many environmental activists strongly object to ______ nuclear waste near coastal ecological reserves.",
    options: ["dumping（object to + 動名詞 V-ing，反對做……）", "dump", "dumped", "be dumped"],
    answer: 0,
    explanation: "object to + V-ing（to 為介系詞，後接動名詞，表示「強烈反對做某事」）。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "We are all eagerly looking forward to ______ our grandparents in the countryside during the upcoming Lunar New Year.",
    options: ["visiting（look forward to + 動名詞 V-ing，盼望期待……）", "visit", "visited", "visitation"],
    answer: 0,
    explanation: "look forward to + V-ing（大考最高頻片語，to 為介系詞後接動名詞）。句意：我們大家都非常期盼在即將到來的農曆新年去鄉下探望祖父母。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The granting of scholarships is left entirely ______ the academic review committee.",
    options: ["at the discretion of（由……自行裁量決定）", "at the mercy of", "at the expense of", "at the risk of"],
    answer: 0,
    explanation: "at the discretion of sb 意為「由某人自行斟酌裁定 / 自由裁量」。句意：獎學金的核發完全由學術評審委員會自行裁量決定。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "All employees must act in strict ______ the company's code of conduct and safety guidelines.",
    options: ["accordance with（in accordance with 依照 / 根據……準則）", "contrast with", "collision with", "competition with"],
    answer: 0,
    explanation: "in accordance with sth（= in compliance with）意為「依照 / 依循 / 根據（法規規章）」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Investing in renewable green energy may be expensive upfront, but it will definitely pay off ______.",
    options: ["in the long run（從長遠來看 / 終究）", "in the short run", "on the spot", "by the way"],
    answer: 0,
    explanation: "in the long run 意為「從長遠來看 / 終究會有回報」。句意：投資綠色再生能源前期費用可能昂貴，但長遠來看必定會帶來豐厚回報。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The school principal promised to ______ it that every student receives equal attention and psychological counseling.",
    options: ["see to（see to it that... 務必確保……）", "look to", "take to", "turn to"],
    answer: 0,
    explanation: "see to it that... 為大考高頻核心片語，意為「務必確保 / 留心使……做到」。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "During the annual memorial ceremony, citizens gathered at the monument to ______ to the fallen heroes who sacrificed their lives for the nation.",
    options: ["pay tribute（pay tribute to 向……致敬 / 敬悼）", "pay attention", "pay visits", "pay respects"],
    answer: 0,
    explanation: "pay tribute / homage to sb 意為「向……表達由衷敬意 / 悼念致敬」。句意：在年度紀念儀式上，市民聚集在紀念碑前向為國捐軀的陣亡英雄致敬。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "In his inspiring commencement speech, the novelist ______ his own childhood struggles to encourage graduates never to lose hope.",
    options: ["drew on（利用 / 借鑒 / 汲取經驗）", "drew back", "drew up", "drew out"],
    answer: 0,
    explanation: "draw on / upon sth 意為「借鑒 / 汲取 / 利用（經驗、記憶、資源）」。句意：在鼓舞人心的畢業典禮演講中，小說家汲取了自己童年的奮鬥經歷來勉勵畢業生永不放棄希望。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The physics professor delivered a remarkably ______ explanation of quantum mechanics, enabling even beginners to grasp the fundamental concepts.",
    options: ["lucid（清晰易懂的 / 明瞭透徹的）", "ludicrous（荒唐可笑的）", "lethal（致命的）", "lukewarm（微溫冷淡的）"],
    answer: 0,
    explanation: "lucid 意為「（表達、解釋）清晰明白的 / 易懂的」（同義詞 clear, articulate）。句意：物理教授對量子力學進行了極其清晰明瞭的解釋，使初學者也能掌握基本概念。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Tired of the ______ routine of daily office paperwork, the young man resigned to pursue his dream of becoming a wildlife photographer.",
    options: ["mundane（平凡單調的 / 世俗乏味的）", "magnificent（壯麗宏偉的）", "miraculous（奇蹟般的）", "meticulous（細緻嚴謹的）"],
    answer: 0,
    explanation: "mundane 意為「平凡乏味的 / 單調世俗的」（同義詞 dull, ordinary）。句意：厭倦了日常辦公室文書工作的平凡乏味，年輕人辭職去追求成為野生動物攝影師的夢想。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "William Shakespeare was an extraordinarily ______ playwright who authored dozens of timeless plays and hundreds of sonnets during his lifetime.",
    options: ["prolific（多產的 / 作品豐富的）", "profound（深刻的）", "primitive（原始的）", "provisional（臨時的）"],
    answer: 0,
    explanation: "prolific writer / artist 意為「多產的 / 創作豐富的作家/藝術家」。句意：莎士比亞是一位極其多產的劇作家，一生創作了數十部流芳百世的戲劇與數百首十四行詩。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The prime minister warned that if neighboring troops launched a cross-border attack, the nation would ______ with overwhelming military force.",
    options: ["retaliate（報復 / 反擊）", "reconcile（和解調解）", "relinquish（放棄讓出）", "reinforce（加強增援）"],
    answer: 0,
    explanation: "retaliate 意為「報復 / 進行反擊」（同義詞 strike back）。句意：總理警告，若鄰國軍隊發動跨境襲擊，本國將以壓倒性軍事力量進行堅決反擊報復。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Through ______ efforts and continuous experimentation, the medical research team finally discovered a breakthrough cure for the disease.",
    options: ["tenacious（頑強不屈的 / 執著堅韌的）", "tentative（暫時未定的）", "treacherous（險惡背叛的）", "trivial（微不足道的）"],
    answer: 0,
    explanation: "tenacious 意為「堅韌不拔的 / 頑強執著的」（同義詞 persistent, steadfast）。句意：透過頑強不屈的努力與不斷的實驗，醫學研究團隊終於發現了治癒該疾病的突破性療法。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The senior nurse was honored with a national award for her ______ dedication to patient care throughout the pandemic.",
    options: ["exemplary（堪為楷模的 / 典範的）", "excessive（過度的）", "exclusive（排他的）", "exotic（異國風情的）"],
    answer: 0,
    explanation: "exemplary 意為「堪為楷模的 / 值得效仿典範的」。句意：這位資深護理師因在疫情期間對病患照顧的典範級奉獻而榮獲國家大獎。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "It is imperative that every citizen ______ closely with public health guidelines during an epidemic outbreak.",
    options: ["comply（It is imperative that + S + (should) + 原形動詞，遵守）", "complies", "complied", "complying"],
    answer: 0,
    explanation: "It is imperative / crucial / essential that + S + (should) + 原形動詞（意志動詞虛擬語氣，should 常省略直接用原形動詞 comply）。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "No matter how ______ the challenge may seem at first, we will never give up until we achieve our goal.",
    options: ["daunting（No matter how + 形容詞 + S + be/seem，無論多麼令人畏懼）", "daunt", "daunted", "dauntlessly"],
    answer: 0,
    explanation: "No matter how + adj / adv + S + V（= However + adj / adv... 無論多麼……）。句意：無論挑戰起初看起來多麼令人生畏，在達成目標之前我們絕不放棄。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "Having lived in London for over ten years, she is completely accustomed to ______ on the left side of the road.",
    options: ["driving（be accustomed to + 動名詞 V-ing，習慣於……）", "drive", "drove", "be driven"],
    answer: 0,
    explanation: "be accustomed to + V-ing（= be used to + V-ing 習慣於做某事，to 為介系詞後接動名詞）。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The tourists were thrilled when they managed to ______ a rare snow leopard roaming across the rocky mountain ridge.",
    options: ["catch a glimpse of（瞥見 / 看見一眼）", "make sense of", "keep track of", "lose sight of"],
    answer: 0,
    explanation: "catch a glimpse of 意為「瞥見 / 無意中看到一眼」。句意：當遊客們設法瞥見一隻珍稀雪豹漫步在岩石山脊上時，大家都興奮不已。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The catastrophic volcanic eruption ______ with regional air travel, causing thousands of flights to be canceled across the continent.",
    options: ["played havoc（play havoc with 對……造成嚴重破壞 / 擾亂浩劫）", "played tricks", "played roles", "played games"],
    answer: 0,
    explanation: "play havoc with sth 意為「對……造成極大混亂 / 嚴重破壞擾亂」。句意：災難性的火山爆發對區域空中交通造成了嚴重擾亂，導致全歐陸數千架航班被取消。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Detectives promised the grieving family that they would ______ to uncover the truth behind the mysterious disappearance.",
    options: ["leave no stone unturned（竭盡全力 / 想方設法搜查一切）", "turn a deaf ear", "burn the midnight oil", "hit the nail on the head"],
    answer: 0,
    explanation: "leave no stone unturned 為大考最高頻成語，意為「竭盡全力 / 翻箱倒櫃不放過任何蛛絲馬跡」。句意：偵探向悲痛的家屬保證，他們將竭盡一切全力揭開神秘失蹤案背後的真相。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Years of excessive overwork, chronic insomnia, and poor nutrition finally ______ his physical health.",
    options: ["took a heavy toll on（take a toll on 對……造成沉重打擊損害）", "took advantage of", "took charge of", "took pride in"],
    answer: 0,
    explanation: "take a (heavy) toll on sth 意為「對……造成嚴重損害 / 產生不良後果」。句意：多年的過度勞累、慢性失眠與不良飲食最終對他的身體健康造成了沉重打擊。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The patient said she could no longer ______ the constant throbbing pain in her lower back and demanded immediate surgery.",
    options: ["put up with（忍受 / 容忍）", "look up to", "keep up with", "come up with"],
    answer: 0,
    explanation: "put up with（= tolerate, endure）意為「容忍 / 忍受（痛苦、不滿）」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The museum curator verified that the ancient bronze vase was indeed an ______ artifact from the Shang Dynasty.",
    options: ["authentic（真正的 / 正宗真品的）", "artificial（人造的）", "audacious（大膽的）", "autonomous（自治的）"],
    answer: 0,
    explanation: "authentic 意為「正宗真品的 / 真實非偽造的」（同義詞 genuine）。句意：博物館館長證實這尊古青銅花瓶確實是來自商代的正宗真品文物。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Compared to the overall multi-million dollar budget of the project, a minor ten-dollar shipping fee is practically ______.",
    options: ["negligible（微不足道的 / 可忽略不計的）", "notable（顯著的）", "notorious（惡名昭彰的）", "numerous（許多的）"],
    answer: 0,
    explanation: "negligible 意為「微不足道的 / 可忽略不計的」（同義詞 trivial, insignificant）。句意：相較於該專案數百萬美元的總預算，十美元的微小運費實際上微不足道可忽略不計。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The Amazon rainforest is home to thousands of ______ plant and animal species found nowhere else on Earth.",
    options: ["indigenous（當地的 / 本土土生的）", "ingenious（精巧巧妙的）", "indifferent（冷漠的）", "indignant（憤怒不平的）"],
    answer: 0,
    explanation: "indigenous to 意為「土生土長的 / 本地原產的」（同義詞 native to）。句意：亞馬遜雨林是數千種地球上其他任何地方都找不到的本土原生動植物物種的家園。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The scientist delivered a fascinating lecture on how human brain neural ______ process complex sensory information.",
    options: ["circuits（神經迴路 / 電路）", "circles（圓圈）", "circumstances（情況）", "circulations（循環流通）"],
    answer: 0,
    explanation: "neural circuits 意為「大腦神經迴路」。句意：科學家發表了一場精彩演講，闡述人腦神經迴路如何處理複雜的感官資訊。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Excessive consumption of sugary beverages can ______ the risk of developing type 2 diabetes and obesity.",
    options: ["heighten（提高 / 增加）", "hesitate（猶豫）", "hinder（阻礙）", "humiliate（羞辱）"],
    answer: 0,
    explanation: "heighten the risk of 意為「提高……的風險」（同義詞 increase）。句意：過量飲用含糖飲料會增加罹患第二型糖尿病與肥胖症的風險。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The brave rescue team ventured into the collapsed building to ______ trapped earthquake survivors.",
    options: ["rescue（營救 / 救援）", "resist（抵抗）", "resemble（相像）", "resign（辭職）"],
    answer: 0,
    explanation: "rescue trapped survivors 意為「營救受困生還者」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The international summit aimed to foster peaceful dialogue and enhance economic ______ between the two rival nations.",
    options: ["cooperation（合作 / 協作）", "confrontation（對抗）", "contamination（污染）", "consumption（消費）"],
    answer: 0,
    explanation: "enhance economic cooperation 意為「增進經濟合作」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "To prevent food spoilage, dairy products should always be stored in the refrigerator at a low ______.",
    options: ["temperature（溫度）", "temperament（氣質性情）", "temporary（暫時的）", "temptation（誘惑）"],
    answer: 0,
    explanation: "stored at a low temperature 意為「在低溫下保存」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "______ happens in the future, we must remain united and support each other through thick and thin.",
    options: ["Whatever（無論發生什麼，引導讓步子句）", "However", "Whenever", "Wherever"],
    answer: 0,
    explanation: "Whatever happens... 意為「無論發生何事……」。句意：無論未來發生什麼，我們都必須團結一致，患難與共。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "______ complaining about the difficulties, she took immediate action to solve the problem practically.",
    options: ["Instead of（Instead of + V-ing，而不是…… / 代替）", "In spite of", "Because of", "Due to"],
    answer: 0,
    explanation: "Instead of + V-ing 意為「代替…… / 而不是……」。句意：她沒有抱怨困難，而是立即採取切實行動去解決問題。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "In response to the public outcry, the company issued a formal apology and promised to recall all ______ products.",
    options: ["defective（有瑕疵缺陷的）", "decorative（裝飾性的）", "decisive（決定性的）", "defensive（防禦性的）"],
    answer: 0,
    explanation: "recall defective products 意為「召回有瑕疵缺陷的產品」。句意：為回應公眾強烈抗議，該公司發表正式道歉並承諾召回所有瑕疵產品。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The novel's main character demonstrated remarkable ______ by overcoming poverty and achieving academic success.",
    options: ["resilience（韌性 / 復原力）", "reluctance（勉強）", "redundancy（冗餘）", "rebellion（叛亂）"],
    answer: 0,
    explanation: "resilience 意為「復原力 / 心理韌性 / 堅毅抗挫力」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "She walked quietly into the nursery ______ wake the sleeping baby.",
    options: ["so as not to（so as not to + 原形動詞，以便不…… / 免得）", "so that", "in order that", "not to so as"],
    answer: 0,
    explanation: "so as not to + V（= in order not to + V 為了不 / 免得……）。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Regular physical activity can help ______ stress and improve overall cardiovascular health.",
    options: ["reduce（減少 / 減輕）", "refuse（拒絕）", "repeat（重複）", "replace（取代）"],
    answer: 0,
    explanation: "reduce stress 意為「減輕壓力」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The detective searched the suspect's vehicle thoroughly to gather physical ______ for the court trial.",
    options: ["evidence（證據）", "emotion（情緒）", "emergency（緊急情況）", "emphasis（強調）"],
    answer: 0,
    explanation: "gather physical evidence 意為「收集物證」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The scientific breakthrough will ______ for the development of next-generation cancer treatments.",
    options: ["pave the way（pave the way for 為……鋪平道路 / 奠定基礎）", "make a point", "lose the way", "find fault"],
    answer: 0,
    explanation: "pave the way for sth 意為「為……鋪平道路 / 奠定基礎」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Due to the heavy storm, the school announced the ______ of all afternoon classes and outdoor activities.",
    options: ["cancellation（取消）", "celebration（慶祝）", "calculation（計算）", "concentration（專注）"],
    answer: 0,
    explanation: "cancellation of classes 意為「課程取消」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The teacher encouraged her students to ask questions and express their opinions ______ in class discussions.",
    options: ["freely（自由地 / 無拘無束地）", "fiercely（猛烈地）", "formally（正式地）", "fatalistically（宿命論地）"],
    answer: 0,
    explanation: "express opinions freely 意為「自由表達意見」。",
    difficulty: "基礎"
  }
];

batch17.forEach((q, idx) => {
  quiz.push({
    id: `e${quiz.length + 1}`,
    category: q.category,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    difficulty: q.difficulty
  });
});

console.log(`New English count after batch 17: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique English questions: ${s.size}`);

fs.writeFileSync(quizFile, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
