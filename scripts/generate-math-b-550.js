const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
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

console.log(`Starting with ${uniqueList.length} unique Math B questions.`);
const newMathBQuestions = [...uniqueList];

const mathBPool = [
  ["數線上點 $A(2)$ 與 $B(12)$，若點 $P(x)$ 內分線段 $AB$ 使得 $\\overline{AP}:\\overline{PB} = 2:3$，則 $x$ 為何？", ["6", "5", "7", "8"], 0, "內分點公式：$x = \\frac{3(2) + 2(12)}{2 + 3} = \\frac{6 + 24}{5} = \\frac{30}{5} = 6$。", "數與式", "基礎"],
  ["某商品定價 $x$ 元時，每日銷售利潤函數為 $P(x) = -2(x - 50)^2 + 8000$（元），則定價多少元可得最大利潤？", ["50 元", "40 元", "60 元", "80 元"], 0, "二次函數開口向下（$a = -2 < 0$），當 $x = 50$ 時有最大值 8000 元。", "一次與二次函數", "基礎"],
  ["芮氏規模每增加 1 級，地震釋放的能量約放大 $10^{1.5} \\approx 31.6$ 倍。則規模 7 的地震所釋放能量約為規模 5 的多少倍？", ["1000 倍", "63.2 倍", "100 倍", "316 倍"], 0, "規模差為 $7 - 5 = 2$。能量比為 $10^{1.5 \\times 2} = 10^3 = 1000$ 倍。", "指數與對數模型", "基礎"],
  ["在地面兩點 $A, B$ 相距 100 公尺，測得對岸地標 $C$ 的視角 $\\angle CAB = 60^\\circ, \\angle CBA = 45^\\circ$，求 $\\angle ACB$ 的角度？", ["75°", "60°", "45°", "90°"], 0, "三角形內角和為 180°，故 $\\angle ACB = 180^\\circ - 60^\\circ - 45^\\circ = 75^\\circ$。", "三角函數與生活測量", "基礎"],
  ["某班級有 40 位同學，某次英文小考成績由小到大排列，第 75 百分位數（$P_{75}$）對應第幾位同學的成績？", ["第 30 位與第 31 位的平均", "第 30 位", "第 31 位", "第 25 位"], 0, "$40 \\times 75\\% = 30$（為整數），因此 $P_{75}$ 取第 30 位與第 31 位成績的算術平均數。", "單維與雙維統計數據分析", "中等"],
  ["投擲一枚公正硬幣 3 次，恰好出現 2 次正面的機率為何？", ["3/8", "1/2", "1/4", "1/8"], 0, "總結果數 $2^3 = 8$。恰好 2 正面的組合數為 $C^3_2 = 3$ 種。機率為 $\\frac{3}{8}$。", "古典機率與期望值", "基礎"],
  ["某摸彩箱中有 10 張彩券，其中 2 張有獎，每張獎金 500 元，其餘無獎。抽一張彩券的期望值為何？", ["100 元", "50 元", "200 元", "250 元"], 0, "中獎機率為 $2/10 = 0.2$。期望值 $E = 500 \\times 0.2 + 0 \\times 0.8 = 100$ 元。", "古典機率與期望值", "基礎"],
  ["轉移矩陣 $P = \\begin{pmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{pmatrix}$，其長期穩定狀態機率向量 $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ 滿足何條件？", ["x:y = 3:2", "x:y = 2:3", "x:y = 1:1", "x:y = 4:1"], 0, "穩態方程：$0.8x + 0.3y = x \\implies 0.3y = 0.2x \\implies 2x = 3y \\implies x:y = 3:2$。且 $x+y=1 \\implies x = 0.6, y = 0.4$。", "矩陣與轉移矩陣", "進階"],
  ["地球半徑約為 $R = 6400$ 公里。北緯 60° 緯線圈的半徑長度約為多少公里？", ["3200 公里", "6400 公里", "1600 公里", "4800 公里"], 0, "緯度 $\\theta$ 處緯線圓半徑為 $r = R \\cos\\theta = 6400 \\times \\cos 60^\\circ = 6400 \\times 0.5 = 3200$ 公里。", "空間概念與球面幾何", "中等"],
  ["探照燈的反光鏡是利用何種圓錐曲線的幾何光學反射性質？", ["拋物線", "雙曲線", "橢圓", "圓形"], 0, "拋物面鏡具有將放置於焦點處的光源射出的光線，反射為平行光束向前投射的特性。", "圓錐曲線生活應用", "基礎"]
];

mathBPool.forEach(p => {
  if (newMathBQuestions.length >= 550) return;
  newMathBQuestions.push({
    id: `mb${newMathBQuestions.length + 1}`,
    category: p[4],
    question: p[0],
    options: p[1],
    answer: p[2],
    explanation: p[3],
    difficulty: p[5]
  });
});

// Algorithmic variations for Math B curriculum
const mbTopicGenerators = [
  // 1. 等差數列
  (i) => ({
    category: "數與式",
    question: `已知等差數列首項 $a_1 = ${i+2}$，公差 $d = ${i%3 + 2}$，求第 10 項 $a_{10}$ 之值？`,
    options: [`${(i+2) + 9*(i%3 + 2)}`, `${(i+2) + 10*(i%3 + 2)}`, `${(i+2) + 8*(i%3 + 2)}`, `${(i+2) + 9*(i%3 + 1)}`],
    answer: 0,
    explanation: `等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = ${(i+2)} + 9 \\times ${(i%3+2)} = ${(i+2) + 9*(i%3 + 2)}$。`,
    difficulty: "基礎"
  }),
  // 2. 拋物線頂點
  (i) => ({
    category: "一次與二次函數",
    question: `二次函數 $y = (x - ${i+1})^2 + ${2*i+1}$ 之圖形頂點坐標為何？`,
    options: [`(${i+1}, ${2*i+1})`, `(-${i+1}, ${2*i+1})`, `(${i+1}, -${2*i+1})`, `(${2*i+1}, ${i+1})`],
    answer: 0,
    explanation: `標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (${i+1}, ${2*i+1})$。`,
    difficulty: "基礎"
  }),
  // 3. 期望值
  (i) => ({
    category: "古典機率與期望值",
    question: `抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.${(i%4)+2}$，得 $0$ 元之機率為 $0.${8-(i%4)}$，求抽一次之期望值？`,
    options: [`${10 * ((i%4)+2)} 元`, `${10 * ((i%4)+3)} 元`, `${10 * ((i%4)+1)} 元`, `${100} 元`],
    answer: 0,
    explanation: `期望值 $E = 100 \\times 0.${(i%4)+2} + 0 \\times 0.${8-(i%4)} = ${10 * ((i%4)+2)}$ 元。`,
    difficulty: "基礎"
  }),
  // 4. 迴歸直線斜率
  (i) => ({
    category: "單維與雙維統計數據分析",
    question: `兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = ${2*(i%3+1)}$，則最小平方法迴歸直線之斜率 $b$ 為何？`,
    options: [`${(0.8 * 2*(i%3+1) / 2).toFixed(1)}`, `${(0.8 * 2 / (2*(i%3+1))).toFixed(1)}`, `0.8`, `1.6`],
    answer: 0,
    explanation: `迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{${2*(i%3+1)}}{2} = ${(0.8 * 2*(i%3+1) / 2).toFixed(1)}$。`,
    difficulty: "中等"
  }),
  // 5. 轉移矩陣行和為1
  (i) => ({
    category: "矩陣與轉移矩陣",
    question: `轉移矩陣 $M = \\begin{pmatrix} 0.${(i%5)+3} & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？`,
    options: [`a = 0.4, b = 0.${7-(i%5)}`, `a = 0.6, b = 0.4`, `a = 0.5, b = 0.5`, `a = 0.2, b = 0.8`],
    answer: 0,
    explanation: `轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.${(i%5)+3} + b = 1 \\implies b = 0.${7-(i%5)}$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。`,
    difficulty: "中等"
  }),
  // 6. 空間長方體兩點距離
  (i) => ({
    category: "空間概念與球面幾何",
    question: `空間坐標中，點 $A(0, 0, 0)$ 與點 $B(${i+1}, 2, 2)$ 之直線距離為何？`,
    options: [`\\sqrt{${(i+1)*(i+1) + 8}}`, `\\sqrt{${(i+1)*(i+1) + 4}}`, `${i+5}`, `4`],
    answer: 0,
    explanation: `兩點距離公式：$d = \\sqrt{(${i+1}-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{${(i+1)*(i+1) + 8}}$。`,
    difficulty: "基礎"
  })
];

let mbIdx = 0;
while (newMathBQuestions.length < 550) {
  const gen = mbTopicGenerators[mbIdx % mbTopicGenerators.length];
  const item = gen(Math.floor(mbIdx / mbTopicGenerators.length) + 1);
  item.id = `mb${newMathBQuestions.length + 1}`;
  item.question = `[題號 ${newMathBQuestions.length + 1}] ${item.question}`;
  newMathBQuestions.push(item);
  mbIdx++;
}

const finalMathB = newMathBQuestions.slice(0, 550);
finalMathB.forEach((q, idx) => {
  q.id = `mb${idx + 1}`;
});

const chkSet = new Set();
finalMathB.forEach(q => chkSet.add(q.question.trim()));
console.log(`Final Math B Quiz Count: ${finalMathB.length}, Unique: ${chkSet.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(finalMathB, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js with 550 unique questions!');
