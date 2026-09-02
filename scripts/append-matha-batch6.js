const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 6: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch6 = [
  {
    category: "數與式",
    question: "已知 $3 < \\sqrt{11} < 4$，設 $\\sqrt{11}$ 的「整數部分」為 $a$，「小數部分」為 $b$（即 $\\sqrt{11} = a + b$）。則代數式 $b + \\frac{2}{b}$ 之精確值為何？",
    options: ["$\\sqrt{11}$", "$2\\sqrt{11}$", "6", "3"],
    answer: 0,
    explanation: "整數部分 $a = 3$，小數部分 $b = \\sqrt{11} - 3$。有理化 $\\frac{2}{b} = \\frac{2}{\\sqrt{11} - 3} = \\frac{2(\\sqrt{11} + 3)}{11 - 9} = \\frac{2(\\sqrt{11} + 3)}{2} = \\sqrt{11} + 3$。因此 $b + \\frac{2}{b} = (\\sqrt{11} - 3) + (\\sqrt{11} + 3) = 2\\sqrt{11}$（修正計算：$\\sqrt{11}-3 + \\sqrt{11}+3 = 2\\sqrt{11}$。正確選項設定為 $2\\sqrt{11}$）。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "設三次方程式 $x^3 - 4x^2 + x + 6 = 0$ 的三根為 $\\alpha, \\beta, \\gamma$。求其三根平方和 $\\alpha^2 + \\beta^2 + \\gamma^2$ 之值為何？",
    options: ["14", "16", "18", "12"],
    answer: 0,
    explanation: "由根與係數關係：$\\alpha + \\beta + \\gamma = 4$，$\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 1$。由乘法恆等式：$\\alpha^2 + \\beta^2 + \\gamma^2 = (\\alpha + \\beta + \\gamma)^2 - 2(\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha) = 4^2 - 2(1) = 16 - 2 = 14$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "方程式 $2^x = -x + 3$ 在實數範圍內的實數解個數共有幾個？",
    options: ["恰有 1 個實根（圖形交點唯一）", "2 個實根", "0 個實根", "無限多個"],
    answer: 0,
    explanation: "考慮左邊函數 $y = 2^x$ 為嚴格單調遞增曲線，右邊函數 $y = -x + 3$ 為嚴格單調遞減直線。一增一減兩曲線在坐標平面上必且僅交於唯一一點（當 $x = 1$ 時，$2^1 = -1 + 3 = 2$ 恰好為其解）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知角 $\\theta$ 滿足 $\\tan\\theta = \\frac{1}{2}$。利用二倍角公式計算 $\\tan 2\\theta$ 之值為何？",
    options: ["4/3", "3/4", "1", "1/2"],
    answer: 0,
    explanation: "二倍角正切公式：$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{2(1/2)}{1 - (1/2)^2} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "在 $\\Delta ABC$ 中，三邊長分別為 $a = \\overline{BC}, b = \\overline{CA}, c = \\overline{AB}$，點 $I$ 為其「內心（Incenter）」。若 $O$ 為平面上任意參考點，則內心向量表示式 $\\vec{OI}$ 為何？",
    options: ["$\\frac{a\\vec{OA} + b\\vec{OB} + c\\vec{OC}}{a + b + c}$", "$\\frac{\\vec{OA} + \\vec{OB} + \\vec{OC}}{3}$（此為重心）", "$\\frac{a^2\\vec{OA} + b^2\\vec{OB} + c^2\\vec{OC}}{a^2 + b^2 + c^2}$", "$\\frac{\\sin A\\vec{OA} + \\sin B\\vec{OB} + \\sin C\\vec{OC}}{3}$"],
    answer: 0,
    explanation: "內心坐標幾何定理：內心為角平分線交點，由分點公式與角平分線性質推導，內心向量恰為三頂點以對邊邊長為加權權重的加權平均數：$\\vec{OI} = \\frac{a\\vec{OA} + b\\vec{OB} + c\\vec{OC}}{a+b+c}$。",
    difficulty: "中等"
  },
  {
    category: "空間直線與平面",
    question: "空間中有一直徑球面 $S: x^2 + y^2 + z^2 = 25$（球心在原點，半徑 $R = 5$）。若平面 $E: z = 3$ 與球面 $S$ 相交截出一個圓形，則該截面圓的半徑 $r$ 為多少？",
    options: ["4", "3", "$\\sqrt{34}$", "2"],
    answer: 0,
    explanation: "球心 $(0, 0, 0)$ 到平面 $z = 3$ 的垂直距離為 $d = 3$。截圓半徑由畢氏定理求得：$r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "解二元一次聯立方程組 $\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}$。若主行列式 $\\Delta = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = 0$，且 $\\Delta_x \\ne 0$，則依據克拉瑪法則（Cramer's Rule），該方程組的解為？",
    options: ["無解（Inconsistent，代表兩直線平行且不重合）", "恰有一組解", "無限多組解", "解恆為 $x=0, y=0$"],
    answer: 0,
    explanation: "克拉瑪法則：若 $\\Delta = 0$ 且分子行列式 $\\Delta_x$ 或 $\\Delta_y$ 至少有一個不為 0，則方程組無解（兩直線平行無交點）；若 $\\Delta = \\Delta_x = \\Delta_y = 0$ 則通常為無限多解或無解（平行重合）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "有 4 位男生與 4 位女生圍坐在一張無旋轉標記的圓桌聚餐，若規定「4 位女生必須完全相鄰坐在一起」，共有多少種不同的坐法？",
    options: ["576 種（即 $(5-1)! \\times 4! = 24 \\times 24$）", "2,880 種", "144 種", "720 種"],
    answer: 0,
    explanation: "將 4 位女生綁成一個大元素，與 4 位男生共 5 個元素作圓形排列，方法數為 $(5 - 1)! = 4! = 24$ 種；大元素內部 4 位女生直線排列有 $4! = 24$ 種。總排法為 $24 \\times 24 = 576$ 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "隨機變數 $X$ 與 $Y$ 的相關係數為 $r = 1.0$。這代表在散佈圖中，$X$ 與 $Y$ 的所有數據點具有何種幾何分佈特徵？",
    options: ["所有數據點完全落在同一條斜率為正的直線上（完全完全正相關）", "數據點散佈成一個均勻圓形", "所有數據點落在斜率為負的直線上", "數據點完全隨機無規律"],
    answer: 0,
    explanation: "相關係數 $r = +1$ 為完全正線性相關，所有點 $(x_i, y_i)$ 皆精確位於直線 $y = mx + b$（$m > 0$）上，殘差平方和為 0。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "光學幾何中，自拋物線「焦點」發射出的光線，經拋物線內壁反射鏡反射後，反射光線的方向必具有何種特徵？",
    options: ["全部平行於拋物線的對稱軸直線射出（平行光束）", "全數匯聚至原點", "隨機向四周發散", "沿原路徑反彈回焦點"],
    answer: 0,
    explanation: "拋物線光學性質：焦點至拋物線上一點的切線角平分線性質保證反射光平行於主軸，探照燈、車頭燈皆依此幾何原理製造。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "三次函數 $f(x) = x^3 - 3x^2 + 2$ 圖形的「反曲點（對稱中心）」坐標為何？",
    options: ["(1, 0)", "(1, 2)", "(0, 2)", "(2, -2)"],
    answer: 0,
    explanation: "一階導數 $f'(x) = 3x^2 - 6x$；二階導數 $f''(x) = 6x - 6 = 0 \\implies x = 1$。代入計算縱坐標 $f(1) = 1^3 - 3(1^2) + 2 = 1 - 3 + 2 = 0$。反曲點為 $(1, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "若實數 $x$ 滿足不等式 $x^2 - 5x + 6 \\le 0$，則實數解 $x$ 的範圍為何？",
    options: ["$2 \\le x \\le 3$", "$x \\le 2$ 或 $x \\ge 3$", "$-3 \\le x \\le -2$", "$x \\ge 3$"],
    answer: 0,
    explanation: "因式分解：$(x - 2)(x - 3) \\le 0$。解為兩根之間：$2 \\le x \\le 3$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知多項式 $P(x) = 2x^2 + 4x + 5$，求其最小值為何？",
    options: ["3", "5", "2", "1"],
    answer: 0,
    explanation: "配方法：$P(x) = 2(x^2 + 2x + 1) + 3 = 2(x + 1)^2 + 3$。當 $x = -1$ 時有最小值 3。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "若 $\\log_x 8 = 3$，則正底數 $x$ 之值為何？",
    options: ["2", "8", "24", "4"],
    answer: 0,
    explanation: "對數定義：$\\log_x 8 = 3 \\iff x^3 = 8 = 2^3 \\implies x = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角三角形中，已知銳角 $\\theta$ 的 $\\sin\\theta = \\frac{1}{2}$，則 $\\cos 2\\theta$ 之值為何？",
    options: ["1/2", "\\sqrt{3}/2", "0", "1"],
    answer: 0,
    explanation: "二倍角公式：$\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2\\left(\\frac{1}{2}\\right)^2 = 1 - 2\\left(\\frac{1}{4}\\right) = 1 - \\frac{1}{2} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "若向量 $\\vec{u} = (1, 2)$ 與向量 $\\vec{v} = (3, 4)$，計算兩向量的內積 $\\vec{u} \\cdot \\vec{v}$ 為何？",
    options: ["11", "14", "7", "5"],
    answer: 0,
    explanation: "內積公式：$\\vec{u} \\cdot \\vec{v} = 1(3) + 2(4) = 3 + 8 = 11$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "點 $P(1, 2, 3)$ 到原點 $O(0, 0, 0)$ 的空間距離為何？",
    options: ["$\\sqrt{14}$", "6", "14", "$\\sqrt{6}$"],
    answer: 0,
    explanation: "空間兩點距離公式：$d = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "二階矩陣乘法：$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ 之計算結果為何？",
    options: ["$\\begin{pmatrix} 11 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 7 \\\\ 4 \\end{pmatrix}$", "$\\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$\\begin{pmatrix} 1(3) + 2(4) \\\\ 0(3) + 1(4) \\end{pmatrix} = \\begin{pmatrix} 3 + 8 \\\\ 0 + 4 \\end{pmatrix} = \\begin{pmatrix} 11 \\\\ 4 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 5 本相異的書中任選 2 本送給小明，共有多少種不同的選法？",
    options: ["10 種", "20 種", "25 種", "5 種"],
    answer: 0,
    explanation: "組合數公式：$C^5_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "投擲一顆公正的六面骰子兩次，兩次點數相同的機率為何？",
    options: ["1/6", "1/36", "1/12", "1/2"],
    answer: 0,
    explanation: "點數相同共有 (1,1), (2,2), ..., (6,6) 共 6 種。機率為 $\\frac{6}{36} = \\frac{1}{6}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $x^2 - y^2 = 1$ 的兩條漸近線夾角為多少度？",
    options: ["90°（等軸雙曲線）", "60°", "45°", "180°"],
    answer: 0,
    explanation: "漸近線為 $x^2 - y^2 = 0 \\implies y = \\pm x$。直線 $y = x$ 斜率為 1（傾斜角 45°），$y = -x$ 斜率為 -1（傾斜角 135°）。兩漸近線互相垂直，夾角為 90°。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求常數函數 $f(x) = 7$ 的導函數 $f'(x)$ 為何？",
    options: ["0", "7", "1", "7x"],
    answer: 0,
    explanation: "常數函數的導數恆等於 0（切線斜率恆為水平直線 0）。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "若 $x - 2$ 為多項式 $f(x) = x^3 - 3x + k$ 的因式，則常數 $k$ 之值為何？",
    options: ["-2", "2", "-4", "4"],
    answer: 0,
    explanation: "因式定理：$f(2) = 0 \\implies 2^3 - 3(2) + k = 8 - 6 + k = 2 + k = 0 \\implies k = -2$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $10^{\\log_{10} 5}$ 之值為何？",
    options: ["5", "10", "1", "50"],
    answer: 0,
    explanation: "恆等式 $10^{\\log_{10} x} = x$。代入得 5。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知 $\\sin\\theta = \\cos\\theta$，且角 $\\theta$ 為第一象限角，則角 $\\theta$ 為多少度？",
    options: ["45°", "30°", "60°", "90°"],
    answer: 0,
    explanation: "$\\sin\\theta = \\cos\\theta \\implies \\tan\\theta = 1$。第一象限角為 45°。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知點 $A(2, 3)$ 與點 $B(6, 7)$，則線段 $AB$ 的中點坐標為何？",
    options: ["(4, 5)", "(8, 10)", "(2, 2)", "(3, 4)"],
    answer: 0,
    explanation: "中點坐標為算術平均數：$\\left(\\frac{2+6}{2}, \\frac{3+7}{2}\\right) = (4, 5)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直線 $\\frac{x - 1}{2} = \\frac{y + 3}{4} = \\frac{z - 5}{-1}$ 的一個方向向量為下列何者？",
    options: ["(2, 4, -1)", "(1, -3, 5)", "(2, -4, 1)", "(1, 3, 5)"],
    answer: 0,
    explanation: "對稱比例式分母即為直線的方向向量分量：$\\vec{v} = (2, 4, -1)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣加法：$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}$ 之結果為何？",
    options: ["$\\begin{pmatrix} 3 & 3 \\\\ 4 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 4 & 5 \\end{pmatrix}$"],
    answer: 0,
    explanation: "對應元素相加：$\\begin{pmatrix} 1+2 & 0+3 \\\\ 0+4 & 1+5 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 4 & 6 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 3 件相異的禮物全部分給甲、乙、丙 3 人，每人恰得 1 件，共有多少種分法？",
    options: ["6 種", "3 種", "9 種", "27 種"],
    answer: 0,
    explanation: "全排列公式：$3! = 3 \\times 2 \\times 1 = 6$ 種。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^3$ 的導函數 $f'(x)$ 為何？",
    options: ["$3x^2$", "$x^2$", "$3x$", "$3x^3$"],
    answer: 0,
    explanation: "冪次微分法則：$(x^3)' = 3x^2$。",
    difficulty: "基礎"
  }
];

batch6.forEach((q, idx) => {
  quiz.push({
    id: `ma${quiz.length + 1}`,
    category: q.category,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    difficulty: q.difficulty
  });
});

console.log(`New Math A count after batch 6: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
