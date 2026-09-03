const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current English count before batch 18 part 1: ${quiz.length}`);

// 45 Handcrafted, non-templated questions for English (Batch 18 Part 1)
const batch18Part1 = [
  {
    category: "大考核心字彙",
    question: "The diplomat delivered an ______ speech at the United Nations assembly, moving delegates from across the globe to tears.",
    options: ["eloquent（雄辯口才流利的 / 鏗鏘有力的）", "elusive（難以捉摸的）", "erratic（飄忽不定的）", "exclusive（排他的）"],
    answer: 0,
    explanation: "eloquent 意為「雄辯的 / 有說服力的 / 口才流利的」。句意：這位外交官在聯合國大會上發表了一場鏗鏘有力的演說，感動了全球各國代表落淚。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Due to high inflation and weak consumer spending, the national economy has remained ______ for three consecutive quarters.",
    options: ["stagnant（停滯不前的 / 不景氣的）", "stimulating（令人興奮的）", "subsequent（隨後的）", "spontaneous（隨興自發的）"],
    answer: 0,
    explanation: "stagnant economy 意為「停滯不前 / 呆滯不景氣的經濟」。句意：由於高通膨與疲軟的消費支出，國家經濟已連續三個季度停滯不前。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The championship boxing match pitted two ______ fighters against each other in an intense battle for the world title.",
    options: ["formidable（令人敬畏強大的 / 難以對付的）", "fragile（脆弱的）", "futile（徒勞無功的）", "feasible（可行的）"],
    answer: 0,
    explanation: "formidable opponent / fighter 意為「強大令人敬畏的 / 難以對付的強敵」。句意：這場冠軍爭霸賽讓兩位實力強大令人敬畏的拳手正面對決，爭奪世界冠軍頭銜。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Mountaineers embarked on a ______ journey through treacherous snowstorms to reach the summit of Mount Everest.",
    options: ["perilous（充滿危險險惡的）", "prosperous（繁榮昌盛的）", "promising（有希望前途的）", "plentiful（豐富充足的）"],
    answer: 0,
    explanation: "perilous journey / mission 意為「極度危險險惡的旅程」（同義詞 dangerous, hazardous）。句意：登山隊員們踏上了穿越險惡暴風雪的危險旅程，以登頂珠穆朗瑪峰。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Scientists around the world are working tirelessly to ______ the complex genetic mystery behind Alzheimer's disease.",
    options: ["unravel（解開 / 闡明謎團）", "undertake（承擔承接）", "undermine（暗中破壞削弱）", "underestimate（低估）"],
    answer: 0,
    explanation: "unravel a mystery / secret 意為「解開 / 闡明（謎團、複雜機理）」。句意：全球科學家正孜孜不倦地工作，以解開阿茲海默症背後複雜的基因之謎。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Wearing a bright neon orange jacket in a formal business conference made the eccentric designer extremely ______.",
    options: ["conspicuous（顯眼的 / 惹人注目的）", "cautious（謹慎的）", "confidential（機密的）", "concise（簡潔的）"],
    answer: 0,
    explanation: "conspicuous 意為「顯眼的 / 惹人注目的 / 顯而易見的」（同義詞 noticeable, striking）。句意：在正式商務會議上穿著亮橘色螢光夾克，使這位特立獨行的設計師顯得格外引人注目。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Under immense public pressure, the corrupt CEO was forced to ______ all management control over the company.",
    options: ["relinquish（放棄 / 讓出權力）", "reinforce（增援加強）", "reproduce（繁殖複製）", "reconcile（調解和解）"],
    answer: 0,
    explanation: "relinquish control / power 意為「放棄 / 讓出（權力、控制權、財產）」。句意：在巨大的公眾壓力下，這位貪腐的執行長被迫放棄對公司的所有管理控制權。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The elderly patient's condition began to ______ rapidly overnight, requiring immediate transfer to the intensive care unit.",
    options: ["deteriorate（惡化 / 退化）", "distinguish（區分）", "determine（決定）", "demonstrate（示範）"],
    answer: 0,
    explanation: "deteriorate 意為「（健康、病情、局勢）惡化 / 變差」（同義詞 worsen）。句意：老病患的病情在一夜之間迅速惡化，需要立即轉入加護病房。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "High school seniors often ______ when faced with difficult essay writing, only to find themselves panicking right before the deadline.",
    options: ["procrastinate（拖延 / 遲延拖拉）", "prosecute（起訴檢控）", "proclaim（宣布）", "prosper（繁榮）"],
    answer: 0,
    explanation: "procrastinate 意為「拖延 / 習慣性拖延」。句意：高三生在面對艱難的論文寫作時往往會拖延，結果在截止日前夕才陷入恐慌。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "Now ______ you have graduated from university with top honors, you should start planning your future career trajectory.",
    options: ["that（Now that... 既然 / 如今已經……）", "which", "what", "where"],
    answer: 0,
    explanation: "Now that... 引導原因副詞子句，表示「既然 / 如今既然已經……」。句意：既然你已經以優異成績從大學畢業，你就應該開始規劃未來的職業生涯軌跡。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "You are free to borrow my laptop for the weekend, ______ that you return it undamaged by Monday morning.",
    options: ["provided（provided that / providing that 只要 / 在……條件下）", "lest", "unless", "in case of"],
    answer: 0,
    explanation: "provided that / providing that（= as long as, on condition that）意為「只要 / 在……條件下」。句意：週末你可以隨意借用我的筆記型電腦，只要你在週一早晨前完好無損地歸還。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The hiker walked stealthily through the dense jungle ______ fear of alerting wild predatory animals.",
    options: ["for（for fear of + N / V-ing，唯恐 / 深怕……）", "with", "in", "by"],
    answer: 0,
    explanation: "for fear of + N / V-ing 意為「唯恐 / 深怕 / 以免……」。句意：登山者在茂密叢林中悄悄行走，深怕驚動兇猛的肉食野生動物。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The central bank implemented tight monetary policies to keep soaring consumer inflation ______.",
    options: ["in check（keep ... in check 控制 / 遏止 / 約束）", "in hand", "in mind", "in person"],
    answer: 0,
    explanation: "keep sth in check 意為「控制 / 遏制 / 約束（惡化趨勢、物價）」。句意：中央銀行實施緊縮貨幣政策以遏制急劇飆升的消費者通膨。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Decaying organic matter in the garbage dump began to ______ a foul and pungent odor.",
    options: ["give off（散發出 / 發出氣味光熱）", "give in", "give up", "give away"],
    answer: 0,
    explanation: "give off 意為「散發出 / 釋放出（氣味、氣體、光、熱）」。句意：垃圾場中腐爛的有機物開始散發出一股難聞刺鼻的惡臭。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "After the sudden retirement of the general manager, the young vice president was appointed to ______ the company's daily operations.",
    options: ["take over（接管 / 接任）", "take after", "take off", "take down"],
    answer: 0,
    explanation: "take over 意為「接管 / 接任（職位、業務）」。句意：總經理突然退休後，年輕的副總經理被任命接管公司的日常運營。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The laboratory team successfully ______ a series of complex clinical trials to verify the vaccine's efficacy.",
    options: ["carried out（實施 / 執行臨床試驗）", "carried on", "carried away", "carried off"],
    answer: 0,
    explanation: "carry out an experiment / survey / trial 意為「進行 / 執行 / 實施（實驗、臨床試驗）」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "We should never ______ people based on their social status, wealth, or ethnic background.",
    options: ["look down upon（看不起 / 輕視）", "look up to", "look forward to", "look out for"],
    answer: 0,
    explanation: "look down upon / on sb 意為「輕視 / 瞧不起某人」；對比 look up to（尊敬崇拜某人）。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The newly signed peace treaty officially ______ decades of bloody civil conflict in the war-torn region.",
    options: ["put an end to（終結 / 結束）", "put up with", "put forward to", "put off to"],
    answer: 0,
    explanation: "put an end to sth 意為「終結 / 徹底結束（爭端、痛苦、戰爭）」。句意：新簽署的和平條約正式結束了飽受戰火蹂躪地區長達數十年的血腥內戰衝突。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Parents always ______ their children's hard-earned academic achievements and personal growth.",
    options: ["take pride in（以……為榮 / 為……感到自豪）", "take advantage of", "take part in", "take care of"],
    answer: 0,
    explanation: "take pride in（= be proud of）意為「以……為榮 / 為……自豪」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The newly developed lightweight material is remarkably ______; it can absorb massive shocks without deforming.",
    options: ["resilient（具彈性復原力的 / 堅韌的）", "rigid（死板僵硬的）", "reluctant（勉強的）", "redundant（多餘的）"],
    answer: 0,
    explanation: "resilient material 意為「具彈性復原力的 / 堅韌抗震的材料」。句意：新研發的輕質材料極具韌性與彈性；它能吸收巨大衝擊而不會變形。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The venerable professor was respected by generations of scholars for his profound wisdom and ______ integrity.",
    options: ["impeccable（無可挑剔的 / 完美無瑕的）", "impulsive（衝動的）", "impatient（不耐煩的）", "imperfect（不完美的）"],
    answer: 0,
    explanation: "impeccable integrity / reputation 意為「無可挑剔的 / 完美無暇的品格操守」（同義詞 flawless）。句意：這位德高望重的教授因其深邃智慧與完美無瑕的正直操守而受到數代學者的尊崇。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The judge dismissed the case because the prosecutor failed to present ______ evidence to support the felony charge.",
    options: ["tangible（切實有形的 / 確鑿實質的）", "tedious（冗長乏味的）", "tentative（暫時的）", "trivial（微不足道的）"],
    answer: 0,
    explanation: "tangible evidence 意為「確鑿有實質根據的證據」。句意：法官駁回了起訴，因為檢察官未能提出確鑿實質的證據來支持重罪指控。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The new highway was constructed ______ alleviate the severe traffic congestion between the two neighboring cities.",
    options: ["so as to（so as to + 原形動詞，以便 / 為了……）", "so that", "in order that", "such as to"],
    answer: 0,
    explanation: "so as to + V（= in order to + V 為了 / 以便……，後接原形動詞）。注意：so that 後接完整子句。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The teacher spoke loudly and clearly ______ all the students in the back row could hear her instructions.",
    options: ["so that（so that + S + can/could + V，以便……）", "in case of", "because of", "so as to"],
    answer: 0,
    explanation: "so that 引導目的副詞子句（後接完整子句，常用 can/could/may/might 助動詞）。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The CEO was impressed by the candidate's ______ resume and extensive leadership experience in software development.",
    options: ["stellar（出色的 / 傑出精彩的）", "stale（不新鮮的）", "stubborn（頑固的）", "shallow（膚淺的）"],
    answer: 0,
    explanation: "stellar resume / performance 意為「出色的 / 傑出的（如星光般燦爛的）」。句意：執行長對該候選人出色的履歷以及在軟體開發領域豐富的領導經驗留下了深刻印象。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The government launched a comprehensive public health campaign to ______ the spread of infectious seasonal influenza.",
    options: ["curb（抑制 / 遏止）", "cultivate（培養）", "cure（治癒）", "curse（詛咒）"],
    answer: 0,
    explanation: "curb the spread of 意為「抑制 / 遏止（疾病傳播、通膨、犯罪）」。句意：政府發起了一場全面的公共衛生運動，以遏制季節性傳染性流感的蔓延。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The ancient temple stands as a testament to the extraordinary architectural ______ of the civilization.",
    options: ["ingenuity（獨創性 / 精巧才智）", "indifference（漠不關心）", "ignorance（無知）", "inflation（通貨膨脹）"],
    answer: 0,
    explanation: "architectural ingenuity 意為「建築的精巧才智 / 巧奪天工的智慧」。句意：這座古老廟宇證明了該文明非凡的建築才智與創造力。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The politician's approval ratings plummeted after his ______ remarks regarding minority communities were leaked online.",
    options: ["derogatory（貶損侮辱的 / 誹謗的）", "decorative（裝飾性的）", "decisive（決定性的）", "deliberate（深思熟慮的）"],
    answer: 0,
    explanation: "derogatory remarks 意為「貶低侮辱性的言論」。句意：在該政客針對少數族群社群的貶損侮辱言論在網路上洩露後，其支持率大幅暴跌。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "______ the torrential rain poured down incessantly, the dedicated postal workers delivered all the mail on time.",
    options: ["Although（Although + S + V，雖然儘管）", "Despite", "In spite of", "Regardless of"],
    answer: 0,
    explanation: "Although / Even though 引導讓步副詞子句（後接完整子句）；Despite / In spite of 為介系詞後接名詞或動名詞。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The new environmental protection act will come ______ starting on the first day of next year.",
    options: ["into effect（come into effect 生效 / 開始實施）", "into contact", "into account", "into trouble"],
    answer: 0,
    explanation: "come into effect / force 意為「（法規、條約）生效 / 開始實行」。句意：新環保法案將於明年的第一天起正式生效實施。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The surgeon required absolute ______ in the operating theater to perform the delicate brain surgery successfully.",
    options: ["silence（寂靜 / 肅靜）", "science（科學）", "symptom（症狀）", "substance（物質）"],
    answer: 0,
    explanation: "absolute silence 意為「絕對的安靜」。句意：外科醫生要求手術室內保持絕對肅靜，以便成功進行精細的腦部手術。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Electric vehicles have gained immense popularity as consumers seek more ______ transportation alternatives.",
    options: ["eco-friendly（環保生態友善的）", "extravagant（奢侈浪費的）", "exhausted（精疲力竭的）", "erratic（不穩定的）"],
    answer: 0,
    explanation: "eco-friendly alternatives 意為「生態環保友善的替代選擇」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The sudden earthquake caused widespread ______ across the city, knocking down power lines and damaging bridges.",
    options: ["destruction（破壞毀滅）", "instruction（指示）", "construction（建設）", "distinction（區分）"],
    answer: 0,
    explanation: "widespread destruction 意為「廣泛的破壞毀滅」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The research university established a modern laboratory equipped with ______ analytical instruments.",
    options: ["state-of-the-art（最先進頂尖的）", "out-of-date（過時的）", "short-term（短期的）", "second-hand（二手的）"],
    answer: 0,
    explanation: "state-of-the-art equipment 意為「最先進 / 尖端技術的設備」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The teacher asked the students to keep quiet ______ they could concentrate on the reading test.",
    options: ["in order that（in order that + S + can/could + V，以便……）", "in case of", "in spite of", "so as to"],
    answer: 0,
    explanation: "in order that（= so that）引導目的子句，後接完整子句。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The young athlete trained tirelessly every single day in ______ of her Olympic dream.",
    options: ["pursuit（in pursuit of 追求 / 追尋……）", "praise", "presence", "proportion"],
    answer: 0,
    explanation: "in pursuit of sth 意為「追求 / 追逐（夢想、目標）」。句意：這位年輕運動員每天不知疲倦地訓練，以追尋她的奧運夢想。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The museum guide gave a ______ overview of ancient Egyptian history before leading the tour into the mummy exhibition.",
    options: ["brief（簡短簡要的）", "blind（盲目的）", "bitter（痛苦苦澀的）", "brave（勇敢的）"],
    answer: 0,
    explanation: "brief overview 意為「簡要概述」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Regular hydration and sun protection are ______ when participating in outdoor summer marathon events.",
    options: ["essential（必不可少的 / 極其重要的）", "efficient（高效率的）", "emotional（情緒化的）", "eventual（最終的）"],
    answer: 0,
    explanation: "essential 意為「至關重要的 / 必不可少的」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The company's customer service hotline is available 24 hours a day for customer ______.",
    options: ["convenience（便利方便）", "conflict（衝突）", "confusion（困惑）", "confidence（信心）"],
    answer: 0,
    explanation: "for customer convenience 意為「為了顧客的便利」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "The scientist devoted her entire career ______ finding a cure for rare pediatric genetic diseases.",
    options: ["to（devote sth to + V-ing，奉獻致力於……）", "for", "with", "in"],
    answer: 0,
    explanation: "devote one's life / career to + V-ing（其中 to 為介系詞）。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The international airport has tightened security screenings to ensure passenger ______.",
    options: ["safety（安全）", "salary（薪水）", "sample（樣品）", "scenery（風景）"],
    answer: 0,
    explanation: "passenger safety 意為「乘客安全」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The novel's unpredictable ending took readers completely by ______.",
    options: ["surprise（take sb by surprise 使某人大吃一驚）", "storm", "chance", "force"],
    answer: 0,
    explanation: "take sb by surprise 意為「使某人大感意外 / 出其不意」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The school offers free after-school tutoring programs to help students improve their academic ______.",
    options: ["performance（學業表現 / 成績）", "permission（許可）", "personality（個性）", "persuasion（說服）"],
    answer: 0,
    explanation: "academic performance 意為「學業成績表現」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The local community organized a fundraising charity gala to support the ______ animal shelter.",
    options: ["homeless（無家可歸的 / 流浪的）", "hopeless（絕望的）", "harmless（無害的）", "heartless（無情的）"],
    answer: 0,
    explanation: "homeless animal shelter 意為「流浪動物庇護所」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Good communication skills and empathy are essential when ______ disputes between colleagues.",
    options: ["settling（settle disputes 調解 / 平息爭端）", "starting", "spending", "seeking"],
    answer: 0,
    explanation: "settle disputes / conflicts 意為「調解 / 平息爭端衝突」。",
    difficulty: "基礎"
  }
];

batch18Part1.forEach((q, idx) => {
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

console.log(`New English count after batch 18 part 1: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique English questions: ${s.size}`);

fs.writeFileSync(quizFile, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
