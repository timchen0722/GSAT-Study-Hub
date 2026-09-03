const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current English count before batch 18 part 2: ${quiz.length}`);

// 42 Handcrafted, non-templated questions for English to reach 550!
const batch18Part2 = [
  {
    category: "大考核心字彙",
    question: "The fans were ______ when their underdog national soccer team scored a last-minute goal to win the championship.",
    options: ["jubilant（歡欣鼓舞的 / 狂喜的）", "jealous（嫉妒的）", "juvenile（青少年的）", "judgmental（批判性的）"],
    answer: 0,
    explanation: "jubilant 意為「歡欣鼓舞的 / 欣喜若狂的」（同義詞 overjoyed）。句意：當不被看好的國家足球隊在最後一分鐘進球贏得冠軍時，球迷們欣喜若狂歡呼慶祝。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Elders in the indigenous village often ______ the gradual decline of their ancestral language and traditional customs.",
    options: ["lament（哀悼 / 痛惜 / 悲嘆）", "launch（發射發起）", "laud（讚揚）", "liberate（解放）"],
    answer: 0,
    explanation: "lament 意為「悲嘆 / 痛惜（某事的衰亡）」。句意：原住民部落的長者們經常痛惜祖先語言與傳統習俗的逐漸衰微。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The director refused to settle for a ______ performance, demanding that the actors rehearse every scene until perfection.",
    options: ["mediocre（平庸中庸的 / 普普通通的）", "meticulous（細緻嚴謹的）", "marvelous（絕妙的）", "modest（謙遜的）"],
    answer: 0,
    explanation: "mediocre 意為「平庸普通的 / 品質一般的」（同義詞 average, ordinary）。句意：導演拒絕接受平庸的演出，要求演員反覆排練每一幕直到完美。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "A supportive family environment helps ______ a child's natural talents and foster emotional resilience.",
    options: ["nurture（培養 / 哺育）", "neglect（疏忽忽視）", "nullify（使作廢）", "neutralize（中和）"],
    answer: 0,
    explanation: "nurture talents 意為「培養天賦 / 哺育成長」（同義詞 cultivate, foster）。句意：充滿支持的家庭環境有助於培養孩子的天賦並建立心理韌性。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Before making a final investment decision, the financial advisor analyzed all the ______ market data carefully.",
    options: ["pertinent（相關的 / 切題中肯的）", "perishable（易腐壞的）", "permanent（永久的）", "primitive（原始的）"],
    answer: 0,
    explanation: "pertinent 意為「切題相關的 / 緊密關聯的」（同義詞 relevant）。句意：在做出最終投資決策前，財務顧問仔細分析了所有相關切題的市場數據。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "After hiking under the scorching desert sun for hours, the travelers were desperate to ______ their intense thirst.",
    options: ["quench（解渴 / 撲滅渴望）", "quantify（量化）", "qualify（取得資格）", "quarrel（爭吵）"],
    answer: 0,
    explanation: "quench one's thirst 意為「解渴 / 止渴」。句意：在炎熱沙漠陽光下徒步數小時後，旅行者極度渴望解渴。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The historical museum received a government grant to ______ its aging exhibition halls and install modern interactive displays.",
    options: ["renovate（翻修整修 / 翻新）", "relocate（遷移搬遷）", "reinforce（加固）", "reproduce（複製）"],
    answer: 0,
    explanation: "renovate 意為「翻新 / 裝修（建築物）」（同義詞 remodel, refurbish）。句意：歷史博物館獲得了政府補助金，用於翻修老化的展廳並安裝現代互動展示設備。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The experienced manager handled the delicate customer complaint in a ______ and professional manner, resolving the dispute smoothly.",
    options: ["tactful（圓融得體的 / 圓滑機智的）", "tactless（不圓融得罪人的）", "tedious（乏味的）", "tense（緊張的）"],
    answer: 0,
    explanation: "tactful 意為「圓滑得體的 / 處事圓融機智的」（同義詞 diplomatic）。句意：經驗豐富的經理以得體且專業的方式處理了棘手的顧客投訴，順利平息了糾紛。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The young entrepreneur worked with boundless ______ and energy to turn her startup vision into a thriving reality.",
    options: ["zeal（熱情 / 熱忱狂熱）", "zenith（頂峰）", "zone（區域）", "zero（零）"],
    answer: 0,
    explanation: "zeal 意為「熱情 / 熱情熱忱」（同義詞 enthusiasm, passion）。句意：這位年輕創業家懷著無比的熱情與精力工作，將她的新創願景化為蓬勃發展的現實。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "I would rather ______ at home reading a good book than go to a noisy, crowded nightclub.",
    options: ["stay（would rather + 原形動詞 + than + 原形動詞，寧可……也不願……）", "staying", "to stay", "stayed"],
    answer: 0,
    explanation: "would rather + V1 + than + V2（固定句型，兩處皆接原形動詞）。句意：我寧可待在家讀一本好書，也不願去吵鬧擁擠的夜店。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "You had better ______ an umbrella with you because the sky is turning dark and rain is imminent.",
    options: ["take（had better + 原形動詞，最好做……）", "taking", "to take", "took"],
    answer: 0,
    explanation: "had better + 原形動詞（表示「最好做某事」，否定句為 had better not + 原形動詞）。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "It is no ______ that she passed the rigorous medical licensing exam; she studied more than twelve hours every day.",
    options: ["wonder（It is no wonder that... 難怪 / 不足為奇）", "doubt", "problem", "secret"],
    answer: 0,
    explanation: "It is no wonder that... 意為「難怪…… / ……不足為奇」。句意：難怪她能通過嚴格的醫師執照考試；她每天苦讀超過十二個小時。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "It makes no ______ whether we take the bus or the subway; both routes take approximately thirty minutes to get there.",
    options: ["difference（It makes no difference whether... 無論……都沒有差別）", "difficulty", "distance", "direction"],
    answer: 0,
    explanation: "It makes no difference whether A or B 意為「無論 A 或 B 都毫無差別」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "______ the severe blizzard that paralyzed airport operations, our scheduled flight had to be canceled indefinitely.",
    options: ["Owing to（Owing to + N，由於 / 因為……）", "Due", "Because", "Despite"],
    answer: 0,
    explanation: "Owing to + N（= Due to + N / Because of + N 由於……，後接名詞）。注意：Because 後接完整子句。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The active student council decided to ______ the initiative to organize a charity campus marathon for the local hospital.",
    options: ["take（take the initiative to 主動採取行動 / 帶頭發起）", "make", "have", "give"],
    answer: 0,
    explanation: "take the initiative to + V 意為「主動帶頭做某事 / 採取主動行動」。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Elderly citizens who live alone are often more likely to ______ online and telephone financial scams.",
    options: ["fall victim to（成為……的受害者 / 蒙受其害）", "take advantage of", "make sense of", "keep track of"],
    answer: 0,
    explanation: "fall victim / prey to sth 意為「成為……的受害者 / 墮入……陷阱」。句意：獨居長者往往更容易成為網路與電話金融詐騙的受害者。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "In the ______ of the catastrophic hurricane, international humanitarian organizations rushed emergency food and medicine to the disaster zone.",
    options: ["wake（in the wake of 在……之後 / 隨之而來）", "view", "light", "face"],
    answer: 0,
    explanation: "in the wake of sth 意為「在……緊接著發生之後 / 作為……的後續結果」。句意：在災難性颶風過後，國際人道組織緊急將食品與藥品運往災區。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "For safety reasons, automated fire alarm systems in the factory are tested at regular ______ by certified engineers.",
    options: ["intervals（at regular intervals 每隔一定間隔時間 / 定期）", "instances", "intentions", "interests"],
    answer: 0,
    explanation: "at regular intervals 意為「每隔一定規律的時間間隔 / 定期」。句意：出於安全考慮，工廠內的自動火災警報系統由持證工程師定期檢測。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "With ______ to your inquiry about our product warranty, the standard coverage is valid for two years from the date of purchase.",
    options: ["regard（with regard to 關於 / 至於……）", "respects", "reference", "relation"],
    answer: 0,
    explanation: "with regard to / in regard to（= regarding, concerning）意為「關於 / 至於……」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The newly built skyscraper bears a striking ______ to the famous architectural landmark in Dubai.",
    options: ["resemblance（bear a resemblance to 與……極為相似相像）", "resistance", "resolution", "responsibility"],
    answer: 0,
    explanation: "bear a (striking) resemblance to sb / sth 意為「與……極其相似」。句意：這座新建成的摩天大樓與杜拜著名的建築地標有著驚人的相似之處。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Due to the sudden electric power outage, the factory's entire automated assembly line came to a ______.",
    options: ["halt（come to a halt 停止運行 / 停擺）", "start", "point", "conclusion"],
    answer: 0,
    explanation: "come to a halt / standstill 意為「停止運轉 / 停頓中斷」。句意：由於突發停電，工廠的整條自動化裝配生產線陷入了全面停擺。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "I am feeling a bit ______ the weather today, so I think I should stay in bed and get some rest.",
    options: ["under（under the weather 身體不適 / 微恙）", "over", "above", "below"],
    answer: 0,
    explanation: "feel under the weather 意為「身體不舒服 / 身體微恙生病」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The airline offered complimentary flight vouchers to passengers in order to make ______ for the twelve-hour flight delay.",
    options: ["amends（make amends for 彌補 / 補償）", "agreements", "accounts", "arrangements"],
    answer: 0,
    explanation: "make amends for sth 意為「為……作出補償/賠償/彌補」（同義詞 compensate for）。句意：航空公司向乘客提供了免費機票折價券，以彌補長達十二小時的航班延誤。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The class representative delivered a heartfelt speech on ______ of all graduating students during the commencement ceremony.",
    options: ["behalf（on behalf of 代表……）", "belief", "benefit", "behavior"],
    answer: 0,
    explanation: "on behalf of sb 意為「代表某人 / 代表全體……」。句意：班級代表在畢業典禮上代表全體畢業生發表了發自肺腑的演說。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Regular health checkups are highly recommended for early ______ of chronic diseases.",
    options: ["detection（偵測發現 / 早期檢出）", "direction", "description", "destruction"],
    answer: 0,
    explanation: "early detection of diseases 意為「疾病的早期發現診斷」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The company will ______ a new eco-friendly product line in the international market next month.",
    options: ["introduce（引進推出）", "interrupt", "interfere", "interpret"],
    answer: 0,
    explanation: "introduce a new product line 意為「推出新產品線」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The teacher emphasized the importance of maintaining good ______ in the school laboratory during chemistry experiments.",
    options: ["discipline（紀律 / 秩序守則）", "dimension", "discovery", "discussion"],
    answer: 0,
    explanation: "maintain good discipline 意為「維持良好紀律」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The government provided financial subsidies to farmers whose crops were damaged by the severe ______.",
    options: ["drought（乾旱災情）", "draft", "drain", "drift"],
    answer: 0,
    explanation: "damaged by severe drought 意為「遭受嚴重乾旱損害」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The new software update aims to enhance the overall ______ of data encryption and protect user privacy.",
    options: ["security（安全防護）", "scenery", "section", "session"],
    answer: 0,
    explanation: "enhance data security 意為「提升數據安全防護」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Volunteering at the community center is a ______ experience that allows students to give back to society.",
    options: ["rewarding（有意義回報豐厚的 / 值得的）", "reckless", "reluctant", "redundant"],
    answer: 0,
    explanation: "rewarding experience 意為「極有意義 / 獲益良多的體驗」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The young musician has an extraordinary ______ for playing the violin and composing classical melodies.",
    options: ["talent（天賦才華）", "target", "temptation", "texture"],
    answer: 0,
    explanation: "have a talent for 意為「在……方面具有天賦才華」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The library provides a quiet ______ where students can focus on preparing for their entrance exams.",
    options: ["atmosphere（氛圍氣氛 / 環境）", "altitude", "attitude", "aptitude"],
    answer: 0,
    explanation: "quiet atmosphere 意為「安靜的氛圍環境」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The doctor prescribed a course of antibiotics to treat the bacterial ______ in the patient's lungs.",
    options: ["infection（感染）", "injection", "inspection", "intention"],
    answer: 0,
    explanation: "bacterial infection 意為「細菌感染」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The company implemented strict quality ______ measures to ensure that zero defective goods leave the factory.",
    options: ["control（品質管制）", "contact", "content", "contest"],
    answer: 0,
    explanation: "quality control measures 意為「品質管制措施」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The team celebrated their ______ after winning the hard-fought championship match in overtime.",
    options: ["victory（勝利）", "variety", "victim", "vision"],
    answer: 0,
    explanation: "celebrate their victory 意為「慶祝勝利」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Drinking clean water and maintaining proper hygiene are vital for the ______ of waterborne diseases.",
    options: ["prevention（預防）", "preparation", "presentation", "preservation"],
    answer: 0,
    explanation: "prevention of diseases 意為「疾病的預防」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The sudden rise in consumer ______ has driven the retail sector's economic expansion this quarter.",
    options: ["demand（需求）", "damage", "danger", "debate"],
    answer: 0,
    explanation: "rise in consumer demand 意為「消費者需求的上升」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The city council approved a budget to expand public ______ such as parks, libraries, and sports centers.",
    options: ["facilities（公共設施機構）", "failures", "fantasies", "factors"],
    answer: 0,
    explanation: "public facilities 意為「公共設施機構」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The chef used fresh seasonal ______ to prepare an exquisite multi-course French banquet.",
    options: ["ingredients（食材原料）", "instruments", "instructions", "institutions"],
    answer: 0,
    explanation: "fresh seasonal ingredients 意為「新鮮當季食材」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Regular exercise and adequate sleep can greatly ______ your mood and overall vitality.",
    options: ["boost（提升增強）", "block", "blame", "borrow"],
    answer: 0,
    explanation: "boost mood and vitality 意為「提升心情與活力」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The documentary highlights the urgent need to protect endangered marine ______ from illegal overfishing.",
    options: ["species（物種種群）", "spaces", "sources", "secrets"],
    answer: 0,
    explanation: "protect endangered marine species 意為「保護瀕危海洋物種」。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Consistent hard work and continuous learning are the true secrets to achieving lifelong ______.",
    options: ["success（成功成就）", "silence", "struggle", "suspicion"],
    answer: 0,
    explanation: "achieving lifelong success 意為「取得終生成功」。",
    difficulty: "基礎"
  }
];

batch18Part2.forEach((q, idx) => {
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

console.log(`New English count after batch 18 part 2: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique English questions: ${s.size}`);

fs.writeFileSync(quizFile, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
