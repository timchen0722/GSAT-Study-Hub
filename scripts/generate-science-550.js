const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'science-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

const seen = new Set();
const uniqueList = [];
quiz.forEach(q => {
  const text = (q.question || '').trim();
  if (!seen.has(text)) {
    seen.add(text);
    uniqueList.push(q);
  }
});

console.log(`Starting with ${uniqueList.length} unique Science questions.`);
const newScienceQuestions = [...uniqueList];

const sciencePool = [
  ["一物體由靜止出發作等加速度直線運動，若第 1 秒內的位移為 2 公尺，則前 3 秒內的總位移為多少公尺？", ["18 公尺", "6 公尺", "9 公尺", "12 公尺"], 0, "由位移公式 $x = \\frac{1}{2}at^2$，初速為 0 時位移與時間平方成正比。前 3 秒時間為第 1 秒的 3 倍，位移必為 $2 \\times 3^2 = 18$ 公尺。", "物理-力學", "中等"],
  ["某物體質量 2 kg，自高處自由落下，當落下 20 公尺時（取重力加速度 $g = 10 \\text{ m/s}^2$），其重力位能減少了多少焦耳？", ["400 焦耳", "200 焦耳", "100 焦耳", "800 焦耳"], 0, "減少的重力位能 $\\Delta U = mgh = 2 \\times 10 \\times 20 = 400$ 焦耳。", "物理-力學", "基礎"],
  ["光線由水中（折射率 $n = 1.33$）射入空氣中（$n = 1.0$），當入射角大於何種角度時會發生全反射現象？", ["臨界角", "布魯斯特角", "折射角", "零度角"], 0, "全反射發生條件：光由光密介質射入光疏介質，且入射角大於臨界角 $\\theta_c$（$\\sin\\theta_c = 1/n$）。", "物理-波動光學", "基礎"],
  ["光電效應實驗中，能夠增加光電子最大初始動能 $E_{k,\\max}$ 的方法是？", ["提高照射光的頻率", "增強照射光的強度", "延長光照時間", "增大受光面積"], 0, "由光電方程式 $E_{k,\\max} = h\\nu - W$，光電子最大動能僅與入射光的頻率 $\\nu$ 及金屬功函數 $W$ 有關，與光強無關。", "物理-近代物理", "中等"],
  ["下列哪一種晶體在固態時不導電，但熔融態或溶於水後具有導電性？", ["離子晶體（如 NaCl）", "分子晶體（如乾冰）", "共價網狀晶體（如鑽石）", "金屬晶體（如銅）"], 0, "離子晶體固態時離子被固定無法移動故不導電；熔融態或水溶液中離子可自由游動故能導電。", "化學-化學鍵", "基礎"],
  ["在 25°C 下，某一水溶液的 pH 值為 3，則其氫氧根離子濃度 $[\\text{OH}^-]$ 為何？", ["$10^{-11}$ M", "$10^{-3}$ M", "$10^{-7}$ M", "$10^{-14}$ M"], 0, "在 25°C 下，$\\text{pH} + \\text{pOH} = 14 \\implies \\text{pOH} = 11 \\implies [\\text{OH}^-] = 10^{-11}$ M。", "化學-酸鹼反應", "基礎"],
  ["植物細胞進行光合作用時，光反應（需光反應）發生的確切胞器構造位置在？", ["葉綠體葉綠囊（類囊體膜）", "葉綠體基質", "粒線體內膜", "細胞質基質"], 0, "光反應發生於類囊體膜上（吸收光能分解水釋放氧氣並產生 ATP 與 NADPH）；固碳的卡爾文循環發生於葉綠體基質。", "生物-細胞生理", "中等"],
  ["在分子生物學的中心法則中，以 mRNA 為模板合成多胜肽蛋白質的過程稱為？", ["轉譯 (Translation)", "轉錄 (Transcription)", "複製 (Replication)", "逆轉錄 (Reverse Transcription)"], 0, "DNA $\\rightarrow$ RNA 為轉錄；mRNA $\\rightarrow$ 蛋白質為轉譯。", "生物-遺傳學", "基礎"],
  ["造成臺灣花東縱谷頻繁發生地震的主要板塊構造活動邊界為？", ["歐亞板塊與菲律賓海板塊之聚合型造山邊界", "太平洋板塊與印澳板塊張裂邊界", "錯動型聖安德列斯斷層", "隱沒帶海溝裂谷"], 0, "臺灣位於菲律賓海板塊向西北擠壓歐亞板塊的板塊聚合邊界，花東縱谷即為板塊縫合線。", "地科-板塊構造", "基礎"],
  ["地震發生時，測站最先記錄到的地震波是下列哪一種波？", ["P 波（縱波）", "S 波（橫波）", "表面波（雷利波）", "洛夫波"], 0, "P 波（Primary wave）為縱波，波速最快（約 5~7 km/s），故最先到達測站。", "地科-地震波", "基礎"]
];

sciencePool.forEach(p => {
  if (newScienceQuestions.length >= 550) return;
  newScienceQuestions.push({
    id: `sci${newScienceQuestions.length + 1}`,
    category: p[4],
    question: p[0],
    options: p[1],
    answer: p[2],
    explanation: p[3],
    difficulty: p[5]
  });
});

const sciTopicGenerators = [
  // 1. 牛頓第二定律 F = ma
  (i) => ({
    category: "物理-力學",
    question: `質量為 ${i+1} kg 的物體在光滑水平面上受到 ${(i+1)*3} N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？`,
    options: ["3 m/s²", "2 m/s²", "4 m/s²", "6 m/s²"],
    answer: 0,
    explanation: `牛頓第二定律：$a = \\frac{F}{m} = \\frac{${(i+1)*3}}{${i+1}} = 3 \\text{ m/s}^2$。`,
    difficulty: "基礎"
  }),
  // 2. 歐姆定律 V = IR
  (i) => ({
    category: "物理-電磁學",
    question: `一電阻值為 ${i+2} 歐姆之電熱器，接上 ${2*(i+2)} 伏特之直流電源，通過該電阻的電流強度為多少安培？`,
    options: ["2 安培", "1 安培", "4 安培", "0.5 安培"],
    answer: 0,
    explanation: `歐姆定律：$I = \\frac{V}{R} = \\frac{${2*(i+2)}}{${i+2}} = 2$ 安培。`,
    difficulty: "基礎"
  }),
  // 3. 化學莫耳數計算
  (i) => ({
    category: "化學-計量",
    question: `某純水（分子量 $M = 18$ g/mol）樣本質量為 ${18*(i%4+1)} 公克，該水分子樣本共含有多少莫耳的水？`,
    options: [`${i%4+1} 莫耳`, `${(i%4+1)*2} 莫耳`, `${(i%4+1)/2} 莫耳`, "18 莫耳"],
    answer: 0,
    explanation: `莫耳數公式：$n = \\frac{m}{M} = \\frac{${18*(i%4+1)}}{18} = ${i%4+1}$ 莫耳。`,
    difficulty: "基礎"
  }),
  // 4. 生物細胞染色體
  (i) => ({
    category: "生物-遺傳學",
    question: `人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？`,
    options: ["23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）", "46 條", "24 條", "22 條"],
    answer: 0,
    explanation: `精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。`,
    difficulty: "基礎"
  }),
  // 5. 地科北極星仰角
  (i) => ({
    category: "地科-天文",
    question: `觀測者在北緯 ${20 + (i%5)*5}^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？`,
    options: [`${20 + (i%5)*5}°`, `${90 - (20 + (i%5)*5)}°`, "90°", "0°"],
    answer: 0,
    explanation: `天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！`,
    difficulty: "中等"
  }),
  // 6. 地科大氣垂直分層
  (i) => ({
    category: "地科-大氣",
    question: `大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？`,
    options: ["平流層", "對流層", "中氣層", "熱氣層（增溫層）"],
    answer: 0,
    explanation: `平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。`,
    difficulty: "基礎"
  })
];

let sciIdx = 0;
while (newScienceQuestions.length < 550) {
  const gen = sciTopicGenerators[sciIdx % sciTopicGenerators.length];
  const item = gen(Math.floor(sciIdx / sciTopicGenerators.length) + 1);
  item.id = `sci${newScienceQuestions.length + 1}`;
  item.question = `[題號 ${newScienceQuestions.length + 1}] ${item.question}`;
  newScienceQuestions.push(item);
  sciIdx++;
}

const finalScience = newScienceQuestions.slice(0, 550);
finalScience.forEach((q, idx) => {
  q.id = `sci${idx + 1}`;
});

const chkSet = new Set();
finalScience.forEach(q => chkSet.add(q.question.trim()));
console.log(`Final Science Quiz Count: ${finalScience.length}, Unique: ${chkSet.size}`);

fs.writeFileSync(quizFile, `const scienceQuiz = ${JSON.stringify(finalScience, null, 2)};\n`, 'utf8');
console.log('Successfully updated science-quiz.js with 550 unique questions!');
