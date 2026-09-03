const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current English count before batch 16 part 1: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for English
const batch16Part1 = [
  {
    category: "大考核心字彙",
    question: "The tech entrepreneur signed a highly ______ contract with the multinational corporation, which guaranteed millions of dollars in annual profit.",
    options: ["lucrative（獲利豐厚的 / 賺錢的）", "destructive（破壞性的）", "defective（有缺陷的）", "primitive（原始的）"],
    answer: 0,
    explanation: "lucrative 意為「獲利豐厚的 / 賺大錢的 / 暴利的」。句意：這位科技創業家與跨國企業簽署了一份利潤極其豐厚的合約，保證了數百萬美元的年利潤。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The forensic scientist conducted a ______ examination of the crime scene, ensuring that no tiny fiber or fingerprint was overlooked.",
    options: ["meticulous（細緻嚴謹的 / 一絲不苟的）", "superficial（膚淺粗略的）", "reckless（魯莽草率的）", "monotonous（單調乏味的）"],
    answer: 0,
    explanation: "meticulous 意為「極度仔細嚴謹的 / 一絲不苟的」（同義詞 thorough, painstaking）。句意：法醫科學家對犯罪現場進行了極其細緻入微的檢查，確保沒有任何微小纖維或指紋被遺漏。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Taking painkillers can help ______ the severe headache temporarily, but you should still see a doctor to identify the root cause.",
    options: ["alleviate（減輕 / 緩和 / 緩解）", "aggravate（使惡化加重）", "accelerate（加速）", "accumulate（累積）"],
    answer: 0,
    explanation: "alleviate 意為「減輕 / 緩和（痛苦、負擔、貧困）」（同義詞 relieve, ease）。句意：服用止痛藥有助於暫時緩解劇烈頭痛，但你仍應就醫找出根本病因。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Gasoline prices in the international market continue to ______ unpredictably due to ongoing geopolitical conflicts and supply chain disruptions.",
    options: ["fluctuate（波動 / 上下起伏）", "fascinate（使著迷）", "frustrate（使挫折）", "fabricate（捏造編造）"],
    answer: 0,
    explanation: "fluctuate 意為「（價格、氣溫、數據）波動 / 起伏不定」。句意：由於持續的地緣政治衝突與供應鏈中斷，國際市場上的汽油價格持續不可預測地上下波動。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Success in learning a foreign language does not happen overnight; it requires long-term commitment and unyielding ______.",
    options: ["perseverance（不屈不撓 / 毅力）", "negligence（疏忽怠慢）", "reluctance（勉強不情願）", "tolerance（寬容容忍）"],
    answer: 0,
    explanation: "perseverance 意為「堅持不懈 / 堅忍不拔之毅力」。句意：學習外語的成功絕非一蹴而就；它需要長期的投入與不屈不撓的堅定毅力。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Because the negotiations are still in the preliminary stage, both parties have only reached a ______ agreement subject to further revisions.",
    options: ["tentative（暫時的 / 試探性的 / 未定案的）", "permanent（永久的）", "compulsory（強制的）", "distinctive（獨特的）"],
    answer: 0,
    explanation: "tentative 意為「暫時的 / 試驗性的 / 尚未完全確定的」。句意：因為談判仍處於初步階段，雙方僅達成了一項有待進一步修改的暫行協議。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Unethical media outlets often ______ the politician's original remarks out of context to attract clickbait online traffic.",
    options: ["distort（扭曲 / 曲解）", "distribute（分發散佈）", "distinguish（區分辨識）", "dismiss（解散解僱）"],
    answer: 0,
    explanation: "distort 意為「扭曲 / 曲解（事實、原話、形狀）」。句意：不道德的媒體機構經常斷章取義地曲解該政客的原話，以吸引網路點擊流量。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "Rather than following a rigid travel itinerary, the backpackers preferred a ______ trip, deciding where to explore on the spur of the moment.",
    options: ["spontaneous（自發的 / 隨興由衷的）", "tedious（冗長乏味的）", "rigorous（嚴謹嚴密的）", "suspicious（可疑的）"],
    answer: 0,
    explanation: "spontaneous 意為「自發的 / 隨興自然的 / 未經預先安排的」。句意：背包客們沒有遵循死板的旅遊行程，而是偏好隨興所至的旅行，即興決定探索何處。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "No sooner ______ the stage than the enthusiastic audience erupted into deafening cheers and applause.",
    options: ["had the rock star stepped onto（No sooner had + S + p.p. than... 一……就……之倒裝）", "the rock star had stepped onto", "did the rock star stepped onto", "has the rock star stepped onto"],
    answer: 0,
    explanation: "No sooner 置於句首倒裝句型：No sooner had + S + p.p. + than + S + Ved（一……就……）。句意：搖滾巨星剛一步上舞臺，熱情的觀眾席立刻爆發出震耳欲聾的歡呼與掌聲。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "Hardly had the referee blown the final whistle ______ the jubilant soccer fans rushed onto the pitch to celebrate.",
    options: ["when（Hardly had + S + p.p. when / before... 一……就……）", "than", "until", "after"],
    answer: 0,
    explanation: "Hardly / Scarcely had + S + p.p. + when / before + S + Ved（一……就……）。注意：Hardly 配 when/before；No sooner 配 than。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "It is high time that the municipal government ______ effective measures to resolve the chronic traffic congestion downtown.",
    options: ["took（It is high time that + S + 過去式動詞，該是……的時候了）", "takes", "has taken", "take"],
    answer: 0,
    explanation: "It is (high / about) time that + S + Ved（虛擬語氣表示「早就該做某事而尚未做」），that 子句動詞一律使用「過去式動詞」或「should + 原形動詞」。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The mountaineers walked with extreme caution ______ they slip and tumble down the steep, icy cliff.",
    options: ["lest（lest + S + (should) + 原形動詞，唯恐 / 免得……）", "in case of", "unless", "so that"],
    answer: 0,
    explanation: "lest 引導副詞子句表示「唯恐 / 免得……」，子句動詞慣用「(should) + 原形動詞」。句意：登山隊員們極其小心地行走，唯恐滑倒跌落陡峭結冰的懸崖。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "Not until the professor explained the complex mathematical theory a second time ______ fully understand the equation.",
    options: ["did the students（Not until... 置句首之助動詞倒裝）", "the students did", "the students had", "had the students"],
    answer: 0,
    explanation: "Not until... 置於句首時，主要子句必須倒裝（助動詞 did 提至主詞 the students 前面）。句意：直到教授第二次解釋該複雜數學理論，學生們才完全理解該方程式。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "It goes ______ that regular exercise, a balanced diet, and sufficient sleep are the fundamental cornerstones of good health.",
    options: ["without saying（It goes without saying that... 不言而喻 / 毫無疑問）", "without seeing", "without knowing", "without telling"],
    answer: 0,
    explanation: "It goes without saying that... 意為「不言而喻 / 眾所周知 / 毫無疑問是……」。",
    difficulty: "基礎"
  },
  {
    category: "進階文法與句型",
    question: "Neither the flight captain nor the flight attendants ______ aware of the minor mechanical malfunction until the warning alarm went off.",
    options: ["were（Neither A nor B 動詞與靠近的主詞 flight attendants 一致）", "was", "is", "are"],
    answer: 0,
    explanation: "Neither A nor B / Either A or B / Not only A but also B 主詞動詞一致性遵循「就近原則（Proximity Principle）」，此處動詞與複數 attendants 一致且為過去式，故用 were。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "When purchasing a new family car, safety ratings and fuel efficiency should be ______ by the buyers.",
    options: ["taken into account（take ... into account 考慮在內 / 顧及）", "taken for granted", "taken by surprise", "taken in vain"],
    answer: 0,
    explanation: "take sth into account / consideration 為大考最高頻片語，意為「把……列入考慮」。句意：購買家庭新車時，安全評級與燃油效率應被買家列入考慮。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Teachers and parents should never ______ school bullying; any act of harassment must be dealt with promptly and firmly.",
    options: ["turn a blind eye to（視而不見 / 裝作沒看見）", "keep an eye on", "see eye to eye with", "catch the eye of"],
    answer: 0,
    explanation: "turn a blind eye to sth 意為「對……視而不見 / 故意放任不管」。句意：師長絕不應對校園霸凌視而不見；任何騷擾行為皆必須迅速堅定處理。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Artificial intelligence is expected to ______ a crucial role in modern medical diagnosis and personalized drug discovery.",
    options: ["play（play a crucial / vital role in 在……中扮演關鍵角色）", "make", "take", "bring"],
    answer: 0,
    explanation: "play an important / crucial / pivotal role in sth 意為「在……中扮演舉足輕重之核心角色」。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The rare mountain gorilla species is currently ______ extinction due to rampant deforestation and illegal poaching.",
    options: ["on the verge of（on the verge of / on the brink of 瀕臨……邊緣）", "in the face of", "at the mercy of", "by virtue of"],
    answer: 0,
    explanation: "on the verge of（= on the brink / edge of）意為「瀕臨……邊緣 / 行將……」。句意：由於猖獗的森林砍伐與非法盜獵，珍稀山地大猩猩目前瀕臨滅絕邊緣。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The Industrial Revolution ______ profound transformations in global economic structures, urbanization, and human living standards.",
    options: ["brought about（帶來 / 促成 / 引起）", "brought up", "brought out", "brought in"],
    answer: 0,
    explanation: "bring about（= cause / lead to）意為「引起 / 帶來 / 導致（重大變革）」。句意：工業革命為全球經濟結構、都市化與人類生活水準帶來了深遠變革。",
    difficulty: "基礎"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Chronic work stress and lack of sleep can ______ various health problems, including hypertension and cardiovascular diseases.",
    options: ["give rise to（引起 / 導致 / 造成）", "give way to", "give in to", "give off to"],
    answer: 0,
    explanation: "give rise to（= lead to, cause）意為「引起 / 導致 / 招致（不良後果）」。句意：長期的工作壓力與缺乏睡眠會引發各種健康問題，包括高血壓與心血管疾病。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Please ______ that the deadline for submitting the college application portfolio is strictly midnight this Friday.",
    options: ["bear in mind（牢記在心 / 記住）", "change your mind", "make up your mind", "out of your mind"],
    answer: 0,
    explanation: "bear / keep in mind that... 意為「牢記在心 / 切記……」。句意：請牢記在心，大學申請備審資料的上傳截止時間嚴格為本週五午夜。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "Many developing nations struggle to ______ with the catastrophic impacts of climate change, such as severe droughts and floods.",
    options: ["cope（cope with 應付 / 克服 / 妥善處理）", "compete", "comply", "collide"],
    answer: 0,
    explanation: "cope with（= manage, deal with）意為「應付 / 妥善處理 / 克服（困難逆境）」。句意：許多開發中國家竭力應對氣候變遷帶來的災難性衝擊（如嚴重乾旱與洪澇）。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The old library was demolished because the cost of repairing its damaged infrastructure was ______ high.",
    options: ["prohibitively（昂貴得令人望而卻步地）", "permanently", "prominently", "punctually"],
    answer: 0,
    explanation: "prohibitively expensive / high 意為「價格高昂得令人卻步 / 讓人無法負擔地高」。句意：老圖書館被拆除，是因為修復其受損基礎設施的費用昂貴得令人卻步。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The judge emphasized that the court must remain strictly ______ and deliver a verdict based purely on solid evidence.",
    options: ["impartial（公正無私的 / 不偏不倚的）", "impatient（不耐煩的）", "imperative（迫切緊要的）", "impulsive（衝動的）"],
    answer: 0,
    explanation: "impartial 意為「公正客觀的 / 不偏不倚的」（同義詞 unbiased, objective）。句意：法官強調法院必須保持嚴格公正無私，純粹依據確鑿證據作出判決。",
    difficulty: "中等"
  },
  {
    category: "進階文法與句型",
    question: "The ambitious entrepreneur decided to invest in the green energy project, ______ that it might take years to yield a profitable return.",
    options: ["knowing（現在分詞構句表伴隨狀態）", "knew", "known", "to be known"],
    answer: 0,
    explanation: "分詞構句：原句為 ...although he knew that it might take years...，簡化為主動分詞 knowing...",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "The newly proposed policy was evaluated ______ its potential impact on local employment and environmental sustainability.",
    options: ["in terms of（就……而言 / 從……角度來看）", "in case of", "in spite of", "in search of"],
    answer: 0,
    explanation: "in terms of 意為「從……方面來看 / 就……而言」。句意：這項新提議的政策是從其對當地就業與環境永續性的潛在影響角度進行評估的。",
    difficulty: "基礎"
  },
  {
    category: "大考核心字彙",
    question: "The doctor reassured the anxious parents that their child's high fever was only ______ and would subside by tomorrow.",
    options: ["transient（短暫的 / 轉瞬即逝的）", "transparent（透明的）", "transferable（可轉讓的）", "transactional（交易性的）"],
    answer: 0,
    explanation: "transient 意為「短暫的 / 暫時的」（同義詞 temporary, fleeting）。句意：醫生安慰焦慮的父母，孩子的高燒只是暫時的，明天就會退燒。",
    difficulty: "中等"
  },
  {
    category: "高頻片語與搭配詞",
    question: "Without sufficient preparation and teamwork, our debate team will not ______ winning the championship against the defending champion.",
    options: ["stand a chance of（有……的機會 / 可能性）", "make a difference to", "lose track of", "put an end to"],
    answer: 0,
    explanation: "stand a chance of + V-ing 意為「有……的希望/勝算/可能性」。句意：如果沒有充分準備與團隊合作，我們的辯論隊在對抗衛冕冠軍時毫無獲勝勝算。",
    difficulty: "中等"
  },
  {
    category: "大考核心字彙",
    question: "The famous author wrote a captivating ______ that detailed her personal struggles and triumph over adversity.",
    options: ["memoir（回憶錄 / 自傳）", "memorial（紀念碑）", "memorandum（備忘錄）", "memorization（默記死背）"],
    answer: 0,
    explanation: "memoir 意為「回憶錄 / 自傳散文」。句意：這位著名作家寫了一部引人入勝的回憶錄，詳細記錄了她個人的奮鬥與戰勝逆境的歷程。",
    difficulty: "基礎"
  }
];

batch16Part1.forEach((q, idx) => {
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

console.log(`New English count after batch 16 part 1: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique English questions: ${s.size}`);

fs.writeFileSync(quizFile, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated english-quiz.js!');
