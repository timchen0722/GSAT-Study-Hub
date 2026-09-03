const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current English count before batch 16 part 2: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for English
const batch16Part2 = [
  {
    category: "大考核心字彙",
    question: "The essay was praised by the professor for its ______ arguments and clear logical progression from premise to conclusion.",
    options: ["coherent（條理連貫的 / 邏輯通順的）", "ambiguous（含糊不清的）", "contradictory（互相矛盾的）", "arbitrary（隨心所欲武斷的）"],
    answer: 0,
    explanation: "coherent 意為「（論述、文章）條理清晰連貫的 / 前後一致的」。句意：這篇論文因其連貫嚴密的論證以及從前提至結論清晰的邏輯推演而受到教授讚許。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The contract's wording was intentionally ______ so that the company could avoid legal responsibilities if disputes arose.",
    options: ["ambiguous（含糊模稜兩可的）", "articulate（表達清晰的）", "authentic（真實正宗的）", "applicable（適用的）"],
    answer: 0,
    explanation: "ambiguous 意為「模稜兩可的 / 語意含混的」。句意：合約的措辭被刻意寫得含糊不清，以便公司在發生爭議時能夠規避法律責任。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Smartphone addiction has become increasingly ______ among teenagers, prompting educators to restrict device usage during school hours.",
    options: ["prevalent（盛行的 / 普遍存在的）", "primitive（原始簡陋的）", "peculiar（古怪奇特的）", "provisional（臨時暫定的）"],
    answer: 0,
    explanation: "prevalent 意為「普遍盛行的 / 流行的」（同義詞 widespread）。句意：智慧型手機成癮在青少年中日益普遍，促使教育界限制在校期間的裝置使用。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The Swiss Army knife is famous worldwide because it is an extraordinarily ______ tool capable of cutting, opening bottles, and fixing screws.",
    options: ["versatile（多功能的 / 萬能多才多藝的）", "vulnerable（脆弱易受傷的）", "vigorous（精力充沛的）", "voluntary（自願的）"],
    answer: 0,
    explanation: "versatile 意為「多功能的 / 用途廣泛的 / 多才多藝的」。句意：瑞士軍刀聞名全球，因為它是一款能切割、開瓶與鎖螺絲的極其多功能工具。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Aviation safety authorities impose ______ regulations and mandatory regular inspections on all commercial aircraft.",
    options: ["stringent（嚴格嚴厲的 / 嚴格遵守的）", "lenient（寬鬆仁慈的）", "reckless（粗心大意的）", "skeptical（懷疑不信的）"],
    answer: 0,
    explanation: "stringent regulations / standards 意為「嚴格嚴厲的法規/標準」（同義詞 strict, rigorous）。句意：航空安全當局對所有民航飛機實施嚴格的法規與強制性定期檢查。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Albert Einstein's theory of relativity has exerted a ______ and lasting influence on modern physics and our understanding of space-time.",
    options: ["profound（深遠的 / 深刻博大的）", "trivial（微不足道的）", "shallow（淺薄膚淺的）", "passive（被動消極的）"],
    answer: 0,
    explanation: "profound influence / impact 意為「深遠重大的影響」。句意：愛因斯坦的相對論對現代物理學與我們對時空的理解產生了深遠而持久的影響。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The master craftsman carved an ______ floral pattern onto the antique wooden wardrobe, showcasing extraordinary skill.",
    options: ["intricate（錯綜複雜精細的）", "indifferent（漠不關心的）", "inevitable（不可避免的）", "insufficient（不足夠的）"],
    answer: 0,
    explanation: "intricate 意為「錯綜複雜的 / 雕琢精細的」（同義詞 elaborate, complex）。句意：工匠大師在古董木衣櫃上雕刻了錯綜複雜的花卉圖案，展現了非凡技藝。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The young artist talked about the ancient European cathedrals with such vivid passion ______ she had visited them in person.",
    options: ["as though（宛如 / 彷彿，引導假設子句）", "even though", "in case", "so that"],
    answer: 0,
    explanation: "as though / as if 意為「彷彿 / 宛如……一般」，後接假設語氣子句。句意：這位年輕藝術家以如此生動熱情談論歐洲古老教堂，彷彿她曾親自造訪過一般。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "______ we practice speaking English daily, ______ we will become at expressing our complex ideas fluently.",
    options: ["The more; the better（The + 比較級, the + 比較級，越……就越……）", "The most; the best", "More; better", "The better; the more"],
    answer: 0,
    explanation: "The + 比較級..., the + 比較級... 句型表示「越……就越……」。句意：我們每天練習講英語越多，我們在流暢表達複雜想法時就會變得越熟練。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The heart-wrenching scene ended with the tearful mother standing at the train platform, with tears ______ down her cheeks.",
    options: ["streaming（with + 受詞 + 現在分詞受詞補語，表主動進行狀態）", "streamed", "stream", "to stream"],
    answer: 0,
    explanation: "with + O + OC 附帶狀況句型：淚水（tears）與流淌（stream）為主動進行關係，故使用現在分詞 streaming。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "It is no ______ crying over spilt milk; what we need to do right now is find an alternative solution immediately.",
    options: ["use（It is no use + V-ing，做……是無濟於事的 / 徒勞無功的）", "good", "point", "help"],
    answer: 0,
    explanation: "It is no use + V-ing 意為「做……是毫無用處的 / 覆水難收」。句意：為打翻的牛奶哭泣是沒有用的；我們現在需要做的是立刻找到替代解決方案。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "This classic historical novel is definitely well worth ______ multiple times because each reading unveils new philosophical insights.",
    options: ["reading（be well worth + V-ing，值得做……，主動形式表被動意）", "to read", "being read", "to be read"],
    answer: 0,
    explanation: "be (well) worth + V-ing 固定句型：worth 後接動名詞主動形式表達被動意義（值得被閱讀）。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The corrupt politician was formally accused ______ taking massive bribes from real estate developers during his tenure.",
    options: ["of（accuse sb of sth 指控某人犯有……罪）", "with", "for", "against"],
    answer: 0,
    explanation: "accuse sb of sth（指控某人……罪名）；注意對比 charge sb with sth。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "Heavy snowstorms and icy road conditions prevented thousands of stranded passengers ______ boarding their scheduled flights.",
    options: ["from（prevent / stop / discourage sb from + V-ing 阻止某人做……）", "to", "against", "with"],
    answer: 0,
    explanation: "prevent / stop / ban sb from + V-ing 意為「阻止/妨礙某人做某事」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Over the past two decades, Taiwan's high-tech semiconductor industry has grown ______.",
    options: ["by leaps and bounds（突飛猛進地 / 飛速發展地）", "by and large", "little by little", "step by step"],
    answer: 0,
    explanation: "by leaps and bounds 為大考高頻成語，意為「突飛猛進地 / 一日千里地」。句意：在過去二十年中，臺灣的高科技半導體產業突飛猛進地成長發展。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The sudden unexpected scandal ______ over the famous movie star's previously spotless public reputation.",
    options: ["cast a shadow（cast a shadow over 給……蒙上一層陰影）", "cast an eye", "cast a light", "cast a doubt"],
    answer: 0,
    explanation: "cast a shadow over / on sth 意為「給……蒙上一層陰影 / 使……蒙上陰霾」。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "All construction projects must be carried out in strict ______ municipal environmental and safety regulations.",
    options: ["compliance with（in compliance with 符合 / 遵照……法規）", "comparison with", "competition with", "combination with"],
    answer: 0,
    explanation: "in compliance with（= in accordance with）意為「遵照 / 符合（法規、標準）」。句意：所有建築工程皆必須嚴格遵守市政環保與安全法規進行。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Despite spending millions on the marketing campaign, the product's actual sales figures ______ original expectations.",
    options: ["fell short of（fall short of 未達到 / 辜負……期望）", "came up with", "ran out of", "got rid of"],
    answer: 0,
    explanation: "fall short of 意為「未達到（標準、期望）/ 辜負」。句意：儘管在行銷活動上投入了數百萬美元，該產品的實際銷售數據仍未達到最初預期。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Working parents often find it challenging to ______ a balance between demanding career responsibilities and quality family life.",
    options: ["strike（strike a balance between 在……兩者之間取得平衡）", "make", "break", "hit"],
    answer: 0,
    explanation: "strike a balance between A and B 意為「在 A 與 B 之間取得良性平衡 / 兼顧兩者」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Engineers conducted extensive simulations to determine whether building a subsea tunnel across the strait was technically ______.",
    options: ["feasible（切實可行的 / 易實施的）", "fatal（致命的）", "fragile（脆弱的）", "fictional（虛構的）"],
    answer: 0,
    explanation: "feasible 意為「可行的 / 做得到的」（同義詞 practicable, viable）。句意：工程師進行了廣泛模擬，以確定跨海峽興建海底隧道在技術上是否切實可行。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Although the defendant provided a seemingly ______ alibi, the forensic evidence ultimately proved his guilt.",
    options: ["plausible（看似合情合理的 / 貌似有理的）", "painful（痛苦的）", "pessimistic（悲觀的）", "punctual（準時的）"],
    answer: 0,
    explanation: "plausible 意為「貌似有理的 / 說得通的」（同義詞 credible, believable）。句意：儘管被告提供了一個看似合理的缺席不在場證明，但法醫證據最終證實了他有罪。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "There is a ______ difference between constructive criticism aimed at improvement and malicious verbal abuse.",
    options: ["subtle（微妙精細的）", "stubborn（固執的）", "strenuous（費力的）", "subsequent（隨後的）"],
    answer: 0,
    explanation: "subtle difference 意為「微妙細微的差異」。句意：旨在改進的建設性批評與惡意言語謾罵之間，存在著微妙而關鍵的界限區別。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "There is no ______ in worrying about things that are beyond your personal control.",
    options: ["point（There is no point in + V-ing，做……是毫無意義的）", "need", "reason", "purpose"],
    answer: 0,
    explanation: "There is no point in + V-ing 意為「做……是毫無意義的 / 徒勞的」。句意：為超出你個人控制範圍的事情擔憂是毫無意義的。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The newly married couple decided to buy an apartment in the ______ of a quiet public park and a subway station.",
    options: ["vicinity（in the vicinity of 在……附近 / 鄰近地區）", "validity（有效性）", "vanity（虛榮心）", "variety（多樣性）"],
    answer: 0,
    explanation: "in the vicinity of sth 意為「在……附近 / 鄰近地區」。句意：這對新婚夫婦決定在安靜公園與地鐵站附近購買一套公寓。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Philosophers often ______ a clear distinction between moral duties and legal obligations.",
    options: ["draw（draw a distinction between 區分 / 劃定……之間的界線）", "make", "find", "give"],
    answer: 0,
    explanation: "draw a distinction between A and B 意為「在 A 與 B 之間作出明確區分」。句意：哲學家們經常在道德義務與法律義務之間作出明確區分。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The greedy businessman accumulated vast wealth under the ______ of running a charitable non-profit organization.",
    options: ["guise（under the guise of 在……偽裝掩護下）", "glory（光榮）", "guidance（指導）", "gesture（手勢）"],
    answer: 0,
    explanation: "under the guise of 意為「在……的偽裝/藉口掩護下」。句意：這位貪婪的商人以經營慈善非營利組織為偽裝掩護，積累了巨額財富。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The teacher commended the student for his ______ manners and polite behavior toward his classmates.",
    options: ["courteous（彬彬有禮的 / 謙恭的）", "cynical（憤世嫉俗的）", "clumsy（笨拙的）", "crucial（至關重要的）"],
    answer: 0,
    explanation: "courteous 意為「彬彬有禮的 / 謙遜客氣的」（同義詞 polite, respectful）。句意：老師稱讚該學生對同學彬彬有禮的態度與禮貌行為。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "By the time the firefighter squad arrived at the scene, the blazing fire ______ by the torrential rain.",
    options: ["had been extinguished（過去完成式被動語態）", "has been extinguished", "was extinguishing", "extinguished"],
    answer: 0,
    explanation: "By the time + 過去式動詞時，主要子句使用「過去完成式 had + p.p.」。火勢被大雨撲滅，故使用被動語態 had been extinguished。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "In order to survive the harsh polar winter, arctic animals have developed remarkable biological ______ to conserve body heat.",
    options: ["adaptations（生物適應特徵 / 調適）", "adoptions（收養採用）", "addictions（成癮）", "admirations（欽佩）"],
    answer: 0,
    explanation: "adaptation 意為「（生物演化）適應性特徵 / 適應機制」。句意：為了在嚴酷的極地冬季生存，北極動物演化出了顯著的生物適應特徵以保存體溫。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The United Nations was established in 1945 to ______ international peace, security, and friendly cooperation among all nations.",
    options: ["promote（促進 / 倡導 / 推動）", "prohibit（禁止）", "postpone（延期）", "provoke（激怒挑釁）"],
    answer: 0,
    explanation: "promote peace and security 意為「促進和平與安全」。句意：聯合國成立於 1945 年，旨在促進國際和平、安全以及各國間的友好合作。",
    difficulty: "基礎"
  }
];

batch16Part2.forEach((q, idx) => {
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

console.log(`New English count after batch 16 part 2: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique English questions: ${s.size}`);

fs.writeFileSync(quizFile, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
