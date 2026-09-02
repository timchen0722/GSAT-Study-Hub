const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 4: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch4 = [
  {
    category: "數與式",
    question: "關於實數系統中「有理數」與「無理數」的四則運算性質，下列敘述何者恆成立？",
    options: ["任意兩有理數相加、相減、相乘、或除以非零有理數，其結果恆為有理數（有理數具四則運算封閉性）", "任意兩無理數相加必為無理數", "任意兩無理數相乘必為無理數", "有理數與無理數相乘必為無理數"],
    answer: 0,
    explanation: "有理數集在加減乘除（除數不為0）下具有封閉性。而兩無理數相加如 $\\sqrt{2} + (-\\sqrt{2}) = 0$ 為有理數；兩無理數相乘如 $\\sqrt{2} \\times \\sqrt{2} = 2$ 為有理數；有理數 0 乘無理數等於 0 為有理數。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算 $(\\sqrt{3} + \\sqrt{2})^2 + (\\sqrt{3} - \\sqrt{2})^2$ 之值為何？",
    options: ["10", "12", "5", "$4\\sqrt{6}$"],
    answer: 0,
    explanation: "$(a+b)^2 + (a-b)^2 = 2(a^2 + b^2)$。代入計算：$2((\\sqrt{3})^2 + (\\sqrt{2})^2) = 2(3 + 2) = 2(5) = 10$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "小明前往日本旅遊，在銀行以新臺幣兌換日圓。已知日圓與新臺幣的換算公式為 $y = 4.8 x - 100$（其中 $x$ 為新臺幣金額，$y$ 為實領日圓金額，100 日圓為手續費）。若小明支付了新臺幣 10,000 元，他可以領到多少日圓？",
    options: ["47,900 日圓", "48,000 日圓", "48,100 日圓", "47,000 日圓"],
    answer: 0,
    explanation: "代入一次函數：$y = 4.8(10000) - 100 = 48000 - 100 = 47,900$ 日圓。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "周長固定為 36 公尺的矩形花圃，當其長與寬分別為多少公尺時，能擁有最大的花圃面積？",
    options: ["長 9 公尺、寬 9 公尺（正方形時面積最大為 81 平方公尺）", "長 10 公尺、寬 8 公尺", "長 12 公尺、寬 6 公尺", "長 14 公尺、寬 4 公尺"],
    answer: 0,
    explanation: "設長為 $x$，寬為 $18 - x$。面積 $A(x) = x(18 - x) = -x^2 + 18x = -(x - 9)^2 + 81$。當 $x = 9$ 公尺（即正方形）時，有最大面積 81 平方公尺。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "某抗生素在人體血液中的濃度隨時間呈指數衰減，其半衰期為 4 小時。若患者服藥後初始血液藥物濃度為 $80 \\text{ mg/L}$，經過 12 小時後，血液中的藥物殘留濃度變為多少？",
    options: ["10 mg/L", "20 mg/L", "5 mg/L", "40 mg/L"],
    answer: 0,
    explanation: "時間經過 12 小時，相當於經歷了 $12 / 4 = 3$ 次半衰期。殘留濃度為 $80 \\times \\left(\\frac{1}{2}\\right)^3 = 80 \\times \\frac{1}{8} = 10$ mg/L。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "已知 $\\log_{10} 2 \\approx 0.3010$，利用對數性質計算 $\\log_{10} 5$ 之近似值為何？",
    options: ["0.6990", "0.7500", "0.6020", "0.4771"],
    answer: 0,
    explanation: "因為 $5 = \\frac{10}{2}$，所以 $\\log_{10} 5 = \\log_{10}\\left(\\frac{10}{2}\\right) = \\log_{10} 10 - \\log_{10} 2 = 1 - 0.3010 = 0.6990$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "利用差角公式計算 $\\cos 15^\\circ = \\cos(45^\\circ - 30^\\circ)$ 的精確值為何？",
    options: ["$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\frac{\\sqrt{3} + 1}{2\\sqrt{2}}$", "$\\frac{\\sqrt{2} + 1}{4}$"],
    answer: 0,
    explanation: "$\\cos(45^\\circ - 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ + \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} + \\frac{\\sqrt{2}}{2}\\frac{1}{2} = \\frac{\\sqrt{6} + \\sqrt{2}}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在 $\\Delta ABC$ 中，三邊長分別為 $a = 5, b = 6, c = 7$。已知該三角形面積為 $6\\sqrt{6}$，求其內切圓半徑 $r$ 為何？",
    options: ["$\\frac{2\\sqrt{6}}{3}$", "$\\sqrt{6}$", "$\\frac{\\sqrt{6}}{2}$", "$2\\sqrt{6}$"],
    answer: 0,
    explanation: "三角形面積與內切圓半徑關係式：$A = r s$，其中半周長 $s = \\frac{5+6+7}{2} = 9$。代入得 $6\\sqrt{6} = r(9) \\implies r = \\frac{6\\sqrt{6}}{9} = \\frac{2\\sqrt{6}}{3}$。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "在一個圓周上有 8 個相異的點，任取其中 3 個點作為頂點，一共可以連成多少個不同的三角形？",
    options: ["56 個", "336 個", "24 個", "28 個"],
    answer: 0,
    explanation: "圓周上任意三點皆不共線，任選三點必能構成一個三角形。組合數為 $C^8_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$ 個。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "平面上有 10 條直線，已知其中任意兩條直線皆不平行，且任意三條直線皆不共點。請問這 10 條直線在平面上一共有多少個交點？",
    options: ["45 個", "90 個", "10 個", "55 個"],
    answer: 0,
    explanation: "每一對相交直線決定一個獨立交點。任意兩直線不平行且無三線共點，交點總數即為自 10 條線任選 2 條的組合數：$C^{10}_2 = \\frac{10 \\times 9}{2} = 45$ 個。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩枚公正的六面骰子一次，兩顆骰子出現的「點數總和為偶數」的機率為何？",
    options: ["1/2", "1/4", "5/12", "7/18"],
    answer: 0,
    explanation: "兩數之和為偶數有兩種情況：(1) 奇數+奇數：$3 \\times 3 = 9$ 種；(2) 偶數+偶數：$3 \\times 3 = 9$ 種。共 $9 + 9 = 18$ 種。機率為 $\\frac{18}{36} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "從一副 52 張標準撲克牌中隨機抽取 1 張，已知抽中的牌為「紅心（Heart）」，則該張牌為「人頭牌（J, Q, K）」的條件機率為何？",
    options: ["3/13", "1/4", "12/52", "3/52"],
    answer: 0,
    explanation: "在已知為紅心的條件下（樣本空間縮小為紅心共 13 張），紅心中的人頭牌有紅心 J、紅心 Q、紅心 K 共 3 張。條件機率為 $\\frac{3}{13}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "某夜市射飛鏢遊戲規則：射中紅心機率為 0.1 可得獎金 500 元；射中內圈機率為 0.3 可得 100 元；其餘脫靶（機率 0.6）得 0 元。請問投擲一次飛鏢的獎金期望值為多少元？",
    options: ["80 元", "100 元", "60 元", "120 元"],
    answer: 0,
    explanation: "期望值 $E = 500(0.1) + 100(0.3) + 0(0.6) = 50 + 30 + 0 = 80$ 元。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "評估一組數值資料的「離散分散程度」時，下列哪一項統計量「不屬於」衡量數據離散程度的指標？",
    options: ["中位數（Median，屬於集中趨勢指標）", "標準差（Standard Deviation）", "四分位距（IQR）", "全距（Range）"],
    answer: 0,
    explanation: "集中趨勢指標包含平均數、中位數、眾數；離散程度指標包含全距、四分位距（IQR）、變異數與標準差。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "小明期末考國文考了 80 分（全校國文平均 70 分，標準差 5 分）；英文考了 85 分（全校英文平均 75 分，標準差 10 分）。利用標準化分數（Z-score）客觀比較，小明在哪一科目的全校相對表現較為優異？",
    options: ["國文表現較優（國文 $Z = 2.0$，高於英文 $Z = 1.0$）", "英文表現較優", "兩科相對表現完全相同", "無法比較"],
    answer: 0,
    explanation: "國文 $Z_{\\text{國}} = \\frac{80 - 70}{5} = \\frac{10}{5} = +2.0$；英文 $Z_{\\text{英}} = \\frac{85 - 75}{10} = \\frac{10}{10} = +1.0$。$Z$ 分數越高代表在常態分佈中的相對百分排名越頂尖，故國文相對表現更佳。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在雙變數數據分析中，若兩變數 $X$ 與 $Y$ 的線性相關係數為 $r = 0.8$。則其最小平方法迴歸直線 $\\hat{y} = bx + a$ 的斜率 $b$ 必定滿足？",
    options: ["$b > 0$（斜率必為正數，因為 $b = r \\frac{\\sigma_y}{\\sigma_x}$，標準差恆為正）", "$b = 0.8$", "$b < 0$", "無法判定斜率正負"],
    answer: 0,
    explanation: "迴歸直線斜率公式為 $b = r \\frac{\\sigma_y}{\\sigma_x}$。因為標準差 $\\sigma_x, \\sigma_y > 0$，所以斜率 $b$ 的正負符號與相關係數 $r$ 的正負號完全一致。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一個長方體的長、寬、高分別為 2 公分、3 公分、6 公分，則該長方體最長的「空間對角線」長度為多少公分？",
    options: ["7 公分", "11 公分", "$\\sqrt{13}$ 公分", "6.5 公分"],
    answer: 0,
    explanation: "空間對角線長度公式：$d = \\sqrt{l^2 + w^2 + h^2} = \\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$ 公分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在空間直角坐標系中，點 $P(3, 4, 5)$ 到鉛直坐標軸「$z$ 軸」的最短垂直距離為何？",
    options: ["5", "3", "4", "$\\sqrt{34}$"],
    answer: 0,
    explanation: "點 $(x, y, z)$ 到 $z$ 軸的垂足為 $(0, 0, z)$。距離為 $\\sqrt{(x - 0)^2 + (y - 0)^2} = \\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "地球自轉軸相對於黃道面傾斜約 23.5°。在北半球「北極圈（66.5°N）」以北的高緯度地區，在夏至當天太陽終日不落，此一天文地理現象稱為？",
    options: ["永晝（白夜，極晝現象）", "永夜（極夜現象）", "日全蝕", "日冕現象"],
    answer: 0,
    explanation: "夏至太陽直射北回歸線（23.5°N），北極圈 66.5°N 以北整日處於陽光照射的晨昏圈內，24 小時太陽皆在地平線以上，形成永晝。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A$ 與 $B$ 的行列式分別為 $\\det(A) = 3$ 且 $\\det(B) = -2$。則兩矩陣乘積 $AB$ 的行列式 $\\det(AB)$ 之值為何？",
    options: ["-6", "1", "5", "6"],
    answer: 0,
    explanation: "行列式乘法定理：方陣乘積的行列式等於各方陣行列式的乘積，即 $\\det(AB) = \\det(A) \\times \\det(B) = 3 \\times (-2) = -6$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "轉移矩陣 $P = \\begin{pmatrix} 0.7 & 0.4 \\\\ 0.3 & 0.6 \\end{pmatrix}$，若其長期穩定狀態機率向量為 $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$（滿足 $x + y = 1$），則 $x$ 之值為何？",
    options: ["4/7", "3/7", "1/2", "0.6"],
    answer: 0,
    explanation: "穩態方程：$0.7x + 0.4y = x \\implies 0.4y = 0.3x \\implies 3x = 4y$。又 $x + y = 1 \\implies y = 1 - x$。代入得 $3x = 4(1 - x) = 4 - 4x \\implies 7x = 4 \\implies x = \\frac{4}{7}$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "現代醫院使用的「體外震波碎石機（ESWL）」，病患躺臥在治療床上無須開刀即可將腎結石擊碎。這項醫療技術是利用下列哪種圓錐曲線的幾何反射性質？",
    options: ["橢圓的雙焦點聚焦性質（將高能震波發射源置於橢圓第一焦點，患部結石置於第二焦點，反射後能量高度匯聚擊碎結石）", "拋物線的反射性質", "雙曲線的反射性質", "正圓形的圓心反射性質"],
    answer: 0,
    explanation: "橢圓反射定理：自一焦點發出的聲波經半橢球反射罩反射後，必定全數集中匯聚至另一焦點，將高能衝擊波聚焦於體內結石而不傷及周圍正常組織。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "多項式乘法公式 $(x + 3)(x - 3)$ 展開後的結果為？",
    options: ["$x^2 - 9$", "$x^2 - 6x + 9$", "$x^2 + 9$", "$x^2 - 6$"],
    answer: 0,
    explanation: "平方差公式：$(a + b)(a - b) = a^2 - b^2$。此處 $(x + 3)(x - 3) = x^2 - 3^2 = x^2 - 9$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "直線方程式 $3x + 4y = 12$ 在 $x$ 軸上的截距與在 $y$ 軸上的截距分別為何？",
    options: ["$x$ 截距為 4，$y$ 截距為 3", "$x$ 截距為 3，$y$ 截距為 4", "$x$ 截距為 -4，$y$ 截距為 -3", "$x$ 截距為 12，$y$ 截距為 12"],
    answer: 0,
    explanation: "令 $y = 0$ 得 $3x = 12 \\implies x = 4$（$x$ 截距）；令 $x = 0$ 得 $4y = 12 \\implies y = 3$（$y$ 截距）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "某自強號列車有 6 節車廂，小明與小華兩人在不同車廂上車，共有多少種不同的車廂選擇分配方式？",
    options: ["30 種", "36 種", "12 種", "15 種"],
    answer: 0,
    explanation: "小明有 6 種車廂選擇；小華不能與小明同車廂，有剩下的 5 種選擇。乘法原理：$6 \\times 5 = 30$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚均勻的硬幣 4 次，恰好出現 2 次正面與 2 次反面的機率為何？",
    options: ["3/8", "1/2", "1/4", "5/16"],
    answer: 0,
    explanation: "總可能結果數為 $2^4 = 16$。恰好 2 正面的組合數為 $C^4_2 = \\frac{4 \\times 3}{2} = 6$ 種。機率為 $\\frac{6}{16} = \\frac{3}{8}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某班級 5 位同學的數學小考成績為：60, 70, 80, 90, 100。這 5 筆成績的算術平均數為多少分？",
    options: ["80 分", "75 分", "85 分", "70 分"],
    answer: 0,
    explanation: "平均數 $\\mu = \\frac{60 + 70 + 80 + 90 + 100}{5} = \\frac{400}{5} = 80$ 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "長方體一共有幾個頂點、幾條稜線與幾個面？",
    options: ["8 個頂點，12 條稜線，6 個面", "6 個頂點，8 條稜線，12 個面", "8 個頂點，8 條稜線，6 個面", "12 個頂點，8 條稜線，6 個面"],
    answer: 0,
    explanation: "長方體具有 8 個頂點、12 條邊（稜）、6 個矩形面。滿足歐拉多面體公式 $8 - 12 + 6 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若方陣 $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$，求矩陣平方 $A^2$ 為何？",
    options: ["$\\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 9 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 3 \\end{pmatrix}$"],
    answer: 0,
    explanation: "對角矩陣自乘，主對角線元素直接平方：$\\begin{pmatrix} 2^2 & 0 \\\\ 0 & 3^2 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "若將一個直立圓錐體以「平行於其底面」的平面橫切截開，所形成的截面邊界形狀必為？",
    options: ["正圓形", "橢圓形", "拋物線", "雙曲線"],
    answer: 0,
    explanation: "平行底面截切圓錐體截面必為圓；傾斜截切且不穿過底面為橢圓；平行母線截切為拋物線；垂直底面截切兩對頂圓錐為雙曲線。",
    difficulty: "基礎"
  }
];

batch4.forEach((q, idx) => {
  quiz.push({
    id: `mb${quiz.length + 1}`,
    category: q.category,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    difficulty: q.difficulty
  });
});

console.log(`New Math B count after batch 4: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
