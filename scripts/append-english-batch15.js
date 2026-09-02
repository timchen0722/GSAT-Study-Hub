const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current English count before batch 15: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for English
const batch15 = [
  {
    category: "大考核心字彙",
    question: "Due to rapid global warming, many coastal communities are adopting ______ energy sources, such as solar and wind power, to reduce carbon emissions and achieve long-term ecological balance.",
    options: ["sustainable（永續的 / 可持續的）", "temporary（暫時的）", "fragile（脆弱的）", "hazardous（危險的）"],
    answer: 0,
    explanation: "sustainable energy 指「永續能源 / 可再生能源」。句意：由於全球快速暖化，許多沿海社區正採用永續能源（如太陽能與風力），以減少碳排放並達成長期生態平衡。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Smartphones have become so ______ in modern society that it is nearly impossible to find a young person without one.",
    options: ["ubiquitous（無所不在的 / 普及的）", "obscure（晦暗的 / 鮮為人知的）", "obsolete（過時淘汰的）", "extinct（絕種的）"],
    answer: 0,
    explanation: "ubiquitous 意為「無所不在的 / 隨處可見的」（同義詞 omnipresent）。句意：智慧型手機在現代社會變得如此無所不在，以至於幾乎不可能找到身邊沒有手機的年輕人。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Psychologists define ______ as the mental and emotional capacity to quickly recover from difficulties, trauma, or significant stress.",
    options: ["resilience（復原力 / 韌性）", "reluctance（不情願）", "arrogance（傲慢自大）", "negligence（疏忽大意）"],
    answer: 0,
    explanation: "resilience 意為「心理復原力 / 韌性 / 彈性」。句意：心理學家將復原力定義為從困難、心理創傷或重大壓力中迅速恢復的心智與情緒能力。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Students who habitually ______ often find themselves cramming all night before final exams, which leads to immense stress and poor performance.",
    options: ["procrastinate（拖延 / 遲延）", "collaborate（合作）", "persevere（堅持不懈）", "accelerate（加速）"],
    answer: 0,
    explanation: "procrastinate 意為「習慣性拖延 / 拖拖拉拉」。句意：習慣性拖延的學生常發現自己在期末考前通宵死記硬背，導致巨大的心理壓力與不理想的表現。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The government took ______ measures to combat the unprecedented economic crisis, including handing out cash subsidies to millions of citizens.",
    options: ["unprecedented（史無前例的 / 空前的）", "confidential（機密的）", "monotonous（單調乏味的）", "superficial（膚淺表面的）"],
    answer: 0,
    explanation: "unprecedented 意為「史無前例的 / 前所未有的」。句意：政府採取了史無前例的措施來應對這場空前的經濟危機，包括向數百萬公民發放現金補助。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Clean drinking water and stable electricity are ______ to human survival and daily economic activities in modern urban areas.",
    options: ["indispensable（不可或缺的 / 必需的）", " dispensable（可有可無的）", "incompatible（不相容的）", "irrelevant（不相關的）"],
    answer: 0,
    explanation: "be indispensable to 意為「對……而言是不可或缺的」。句意：乾淨的飲用水與穩定的電力，對於現代都市地區的人類生存與日常經濟活動是不可或缺的。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Without proper medical treatment and rest, the patient's physical health began to ______ rapidly over the weekend.",
    options: ["deteriorate（惡化 / 退化）", "distinguish（區分辨別）", "demonstrate（示範證明）", "disintegrate（瓦解碎裂）"],
    answer: 0,
    explanation: "deteriorate 意為「（病情、情況）惡化 / 變壞」（反義詞 improve）。句意：沒有適當的醫療照顧與休息，該病患的身體健康在週末期間開始迅速惡化。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Elderly people and young children are particularly ______ to severe respiratory infections during the chilly winter months.",
    options: ["vulnerable（易受傷害的 / 脆弱的）", "immune（免疫的）", "resistant（有抵抗力的）", " indifferent（漠不關心的）"],
    answer: 0,
    explanation: "be vulnerable to 意為「易受……傷害/感染的」。句意：在寒冷的冬季月份，老年人與幼童特別容易遭受嚴重的呼吸道感染。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "______ for your timely assistance and valuable advice, our startup company could not have survived the severe financial turmoil last year.",
    options: ["Had it not been（若非有……，與過去事實相反之假設倒裝）", "Were it not", "If it was not", "Without had been"],
    answer: 0,
    explanation: "與過去事實相反的假設句型倒裝：原句為 If it had not been for...，省略 If 後助動詞 Had 提至主詞前倒裝為 Had it not been for...（若非當時有……）。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "Seldom ______ such a breathtaking and magnificent display of fireworks over the harbor on New Year's Eve.",
    options: ["have I witnessed（否定副詞置句首之助動詞倒裝）", "I have witnessed", "did I witnessed", "I witnessed"],
    answer: 0,
    explanation: "否定副詞（Seldom, Rarely, Never, Scarcely）置於句首時，句子必須採倒裝結構：否定副詞 + 助動詞/be動詞 + 主詞 + 本動詞 $\\rightarrow$ Seldom have I witnessed...",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The doctor strongly recommended that the overworked patient ______ a full week off to recuperate from mental exhaustion.",
    options: ["take（意志動詞 recommend 後 that 子句省略 should 接原形動詞）", "takes", "took", "is taking"],
    answer: 0,
    explanation: "表「建議、要求、命令、堅持」之動詞（suggest, recommend, demand, insist, require）後接 that 名詞子句時，子句動詞一律使用「(should) + 原形動詞」之虛擬語氣。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "______ difficult and challenging the research project may be, the dedicated scientists will not give up until they find a cure.",
    options: ["However（無論多麼……，修飾形容詞 difficult）", "Whatever", "Whenever", "Wherever"],
    answer: 0,
    explanation: "However + adj./adv. + S + V（= No matter how + adj./adv.）表示「無論多麼……」。句意：無論該研究計畫多麼困難且具挑戰性，熱忱的科學家們在找到治癒方法前絕不放棄。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The novel was ______ fascinating and gripping that Emily stayed up all night to finish reading the final chapter.",
    options: ["so（so + adj. + that 子句，如此……以至於……）", "such", "very", "too"],
    answer: 0,
    explanation: "so + adj./adv. + that 子句（如此……以致於……）；such 則後接名詞（such + a/an + adj. + N + that）。此處 fascinating 為純形容詞，故選 so。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The newly built stadium is three times ______ the old gymnasium that was torn down last winter.",
    options: ["as large as（倍數詞 + as + adj. + as）", "larger as", "so large than", "as larger as"],
    answer: 0,
    explanation: "倍數表達法結構：倍數詞（twice / three times）+ as + 原級形容詞 + as...，表示「是……的幾倍大/長」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "______ all the assignments ahead of time, Kevin felt completely relaxed and went to the cinema with his friends.",
    options: ["Having finished（完成分詞構句，動作先於主要子句發生）", "Finished", "To finish", "Being finished"],
    answer: 0,
    explanation: "完成式分詞構句：原句為 Because he had finished all the assignments...，因完成作業發生在去電影院之前，簡化為主動完成分詞 Having finished...。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "We should never take our parents' unconditional love and support ______; instead, we must express our gratitude whenever possible.",
    options: ["for granted（take ... for granted 視……為理所當然）", "for sure", "for real", "for good"],
    answer: 0,
    explanation: "take sth for granted 為大考最高頻片語，意為「將……視為理所當然而不懂感激珍惜」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "After years of rigorous training and relentless dedication, the young athlete's hard work finally ______ when she won the Olympic gold medal.",
    options: ["paid off（得到回報 / 取得成功）", "paid back", "paid out", "paid down"],
    answer: 0,
    explanation: "pay off 片語意為「努力得到豐碩回報 / 取得圓滿成功」。句意：經過多年嚴格訓練與不懈奉獻，這位年輕運動員的辛勤付出終於在奪得奧運金牌時得到了回報。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Many developing countries pursue rapid industrial growth ______ the natural environment and public health.",
    options: ["at the expense of（以……為代價 / 犧牲……）", "in terms of", "in favor of", "by means of"],
    answer: 0,
    explanation: "at the expense of（= at the cost of）意為「以……為代價 / 犧牲……」。句意：許多開發中國家以犧牲自然環境與公眾健康為代價，追求快速的工業增長。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "______ the recent cyberattacks on government databases, the authorities decided to enhance their network security protocols immediately.",
    options: ["In light of（鑑於 / 考慮到）", "In spite of", "In contrast to", "In place of"],
    answer: 0,
    explanation: "in light of 意為「鑑於 / 考慮到 / 根據……」。句意：鑑於最近政府資料庫遭受網路攻擊事件，當局決定立即加強其網路安全防護協定。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "As a professional software engineer, it is essential to ______ the latest advancements in artificial intelligence and machine learning.",
    options: ["keep abreast of（跟上……的最新發展 / 保持了解）", "keep away from", "keep track with", "keep down to"],
    answer: 0,
    explanation: "keep abreast of sth 為高階重要片語，意為「跟上……的最新發展 / 與時俱進地了解……」。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The newly discovered archaeological artifacts have ______ the mysterious religious rituals of the ancient Mayan civilization.",
    options: ["shed light on（闡明 / 使……更加明朗清楚）", "taken part in", "made fun of", "kept an eye on"],
    answer: 0,
    explanation: "shed light on 意為「為……提供新線索 / 闡明 / 使……明朗」。句意：新出土的考古文物為古代馬雅文明神秘的宗教儀式提供了新線索與深入了解。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Plastic pollution in the oceans poses a severe ______ to marine wildlife and the entire aquatic ecosystem.",
    options: ["threat to（pose a threat to 對……構成威脅）", "solution to", "benefit to", "praise to"],
    answer: 0,
    explanation: "pose a threat to 意為「對……造成重大威脅」。句意：海洋中的塑膠污染對海洋野生動物及整個水生生態系統構成了嚴重威脅。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Environmentalists strongly ______ the implementation of stricter environmental laws to curb industrial carbon emissions.",
    options: ["advocate（提倡 / 主張）", "abandon（放棄）", "abolish（廢除）", "abbreviate（縮寫）"],
    answer: 0,
    explanation: "advocate 意為「提倡 / 倡導 / 主張」。句意：環保人士強烈提倡實施更嚴格的環保法規，以抑制工業碳排放。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The ancient glass vase is extremely ______; please handle it with utmost care to prevent it from shattering.",
    options: ["fragile（易碎的 / 脆弱的）", "flexible（有彈性的）", "feasible（可行的）", "fertile（肥沃的）"],
    answer: 0,
    explanation: "fragile 意為「易碎的 / 脆弱嬌貴的」。句意：這只古代玻璃花瓶極為易碎，請務必極其小心搬運以防摔碎。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The manager praised Alice for her ______ and outstanding performance in solving the complex client complaint.",
    options: ["competence（勝任能力 / 專業才幹）", "coincidence（巧合）", "consequence（後果）", "compromise（妥協）"],
    answer: 0,
    explanation: "competence 意為「專業勝任能力 / 才幹」。句意：經理讚揚愛麗絲在解決複雜客戶投訴中所展現的專業能力與卓越表現。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "Weather ______, the annual high school sports carnival will take place on the outdoor athletic field tomorrow morning.",
    options: ["permitting（獨立分詞構句，若天氣允許）", "permitted", "permits", "is permitting"],
    answer: 0,
    explanation: "獨立分詞構句慣用語：Weather permitting（= If weather permits），表示「天氣若允許的話」，主詞不同保留名詞 Weather。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "______ wins the national science competition will be awarded a full scholarship to study at the prestigious university.",
    options: ["Whoever（複合關係代名詞，無論誰 / 凡是……的人，等於 Anyone who）", "Whomever", "Whatever", "Whichever"],
    answer: 0,
    explanation: "Whoever 作為主要子句的主詞引導名詞子句，意為 Anyone who（凡是贏得全國科學競賽的人）。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "After years of grief, the widow finally ______ the tragic loss of her husband and began to rebuild her life.",
    options: ["came to terms with（逐漸接受 / 與……妥協和解）", "came up with", "came down with", "came across with"],
    answer: 0,
    explanation: "come to terms with 意為「逐漸接受（殘酷現實）/ 與……達成和解妥協」。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The groundbreaking medical discovery ______ for the development of highly effective vaccines against emerging viral diseases.",
    options: ["paved the way（pave the way for 為……鋪平道路 / 奠定基礎）", "led the way", "lost the way", "made a way"],
    answer: 0,
    explanation: "pave the way for 意為「為……鋪平道路 / 開闢坦途」。句意：這項突破性的醫學發現為開發對抗新興病毒性疾病的高效疫苗奠定了堅實基礎。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The newly launched educational policy aims to ______ the digital divide between urban and rural schools across the country.",
    options: ["bridge（消除 / 縮小差距）", "broaden（擴大）", "block（阻擋）", "burden（負擔）"],
    answer: 0,
    explanation: "bridge the gap / divide 意為「縮小/消除……之間的差距」。句意：新推出的教育政策旨在縮小全國城鄉學校之間的數位落差。",
    difficulty: "基礎"
  }
];

batch15.forEach((q, idx) => {
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

console.log(`New English count after batch 15: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique English questions: ${s.size}`);

fs.writeFileSync(quizFile, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
