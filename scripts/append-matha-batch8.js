const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 8: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch8 = [
  {
    category: "數與式",
    question: "計算三項根號的分母有理化：化簡 $\\frac{2}{1 + \\sqrt{2} + \\sqrt{3}}$ 之最簡結果為何？",
    options: ["$\\frac{2 + \\sqrt{2} - \\sqrt{6}}{2}$", "$\\sqrt{2} + \\sqrt{3} - 1$", "$1 + \\sqrt{2} - \\sqrt{3}$", "$\\frac{\\sqrt{2} + \\sqrt{6} - 2}{4}$"],
    answer: 0,
    explanation: "分組有理化：將分母視為 $((1+\\sqrt{2}) + \\sqrt{3})$。同乘 $((1+\\sqrt{2}) - \\sqrt{3})$：分母得 $(1+\\sqrt{2})^2 - 3 = 1 + 2\\sqrt{2} + 2 - 3 = 2\\sqrt{2}$。分子為 $2(1 + \\sqrt{2} - \\sqrt{3})$。約分得 $\\frac{1 + \\sqrt{2} - \\sqrt{3}}{\\sqrt{2}} = \\frac{\\sqrt{2} + 2 - \\sqrt{6}}{2} = \\frac{2 + \\sqrt{2} - \\sqrt{6}}{2}$。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "在數值分析與多項式理論中，通過平面上任意 $n+1$ 個橫坐標互異的點 $(x_0, y_0), (x_1, y_1), \\dots, (x_n, y_n)$，次數不超過 $n$ 次的唯一多項式可由何種著名的插值公式精確建構？",
    options: ["拉格朗日插值多項式（Lagrange Interpolating Polynomial）", "牛頓二項式展開", "泰勒級數", "尤拉公式"],
    answer: 0,
    explanation: "拉格朗日插值公式：$P(x) = \\sum_{i=0}^n y_i \\ell_i(x)$，基底多項式 $\\ell_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$。在 $x = x_i$ 處恰好等於 $y_i$，為大考高頻核心多項式定理。",
    difficulty: "中等"
  },
  {
    category: "指數與對數",
    question: "已知兩正實數 $A$ 與 $B$ 的常用對數 $\\log_{10} A$ 與 $\\log_{10} B$，其數值拆解為首數與尾數後發現其「尾數（Mantissa）完全相同」。這代表實數 $A$ 與 $B$ 在十進位表示法中具有何種特徵？",
    options: ["$A$ 與 $B$ 的「有效數字排列順序完全相同」，僅差在小數點位置（即 $A/B = 10^k$ 為 10 的整數次方倍）", "$A$ 與 $B$ 必定完全相等", "$A$ 與 $B$ 的整數位數必定完全相同", "$A$ 與 $B$ 的總和為整數"],
    answer: 0,
    explanation: "對數尾數決定有效數字：$\\log_{10} A - \\log_{10} B = k$（整數）$\\implies \\log_{10}(A/B) = k \\implies A = B \\times 10^k$。因此兩數十進位有效數字完全一致，僅小數點平移。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，已知三邊長分別為 $a = 5, b = 6, c = 7$。由餘弦定理求最大內角 $\\angle C$ 的餘弦值 $\\cos C$ 為何？",
    options: ["1/5", "2/5", "1/2", "3/5"],
    answer: 0,
    explanation: "餘弦定理：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{5^2 + 6^2 - 7^2}{2(5)(6)} = \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = \\frac{1}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "設實數 $x, y$ 滿足方程式 $x^2 + y^2 = 4$。由二維柯西不等式求代數式 $3x + 4y$ 的最大值為何？",
    options: ["10", "20", "5", "25"],
    answer: 0,
    explanation: "柯西不等式：$(x^2 + y^2)(3^2 + 4^2) \\ge (3x + 4y)^2 \\implies 4 \\times (9 + 16) = 4 \\times 25 = 100 \\ge (3x + 4y)^2$。開平方得最大值為 $\\sqrt{100} = 10$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "空間中由三向量 $\\vec{a} = (1, 0, 0), \\vec{b} = (0, 2, 0), \\vec{c} = (0, 0, 3)$ 所張開的「四面體體積」大小為多少？",
    options: ["1（四面體體積為平行六面體體積的 $1/6$，即 $\\frac{1}{6} |(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}| = \\frac{1}{6} \\times 6 = 1$）", "6", "3", "2"],
    answer: 0,
    explanation: "三向量張成平行六面體體積為三階行列式三向量混合積絕對值：$|\\det| = 1 \\times 2 \\times 3 = 6$。所對應頂點四面體體積為其六分之一：$\\frac{1}{6} \\times 6 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中有兩平行平面 $E_1: 2x - y + 2z = 4$ 與 $E_2: 2x - y + 2z = 10$。兩平行平面間的垂直距離 $d$ 為多少？",
    options: ["2", "6", "1", "3"],
    answer: 0,
    explanation: "兩平行平面距離公式：$d = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|10 - 4|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "平面線性變換中，二階方陣 $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ 所代表的幾何線性變換為？",
    options: ["對直線 $y = x$ 的「鏡射（反射）變換」", "繞原點逆時針旋轉 90°", "對 $x$ 軸的鏡射變換", "對原點的對稱變換"],
    answer: 0,
    explanation: "將點 $(x, y)$ 代入：$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} y \\\\ x \\end{pmatrix}$。橫縱坐標互換，幾何上對應關於對稱軸直線 $y = x$ 的鏡射變換。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "在二項式定理 $(x + 2)^5$ 的展開式中，$x^3$ 項的係數為多少？",
    options: ["40（即 $C^5_2 \\times 2^2 = 10 \\times 4$）", "10", "20", "80"],
    answer: 0,
    explanation: "通項公式為 $T_{r+1} = C^5_r x^{5-r} 2^r$。令 $5 - r = 3 \\implies r = 2$。係數為 $C^5_2 \\times 2^2 = 10 \\times 4 = 40$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "某罕見疾病在人口中的罹患率為 1%（即 $P(D) = 0.01$）。某檢驗試劑對患病者的陽性檢出率（真陽性）為 90%，對未患病者的誤判率（假陽性）為 10%。若某人檢驗結果呈現「陽性」，利用貝氏定理計算該人「真正患病」的後驗機率約為？",
    options: ["約 8.3%（反直覺偽陽性多：$\\frac{0.01 \\times 0.90}{0.01 \\times 0.90 + 0.99 \\times 0.10} = \\frac{0.009}{0.108} = \\frac{1}{12} \\approx 8.3\\%$）", "90%", "50%", "1%"],
    answer: 0,
    explanation: "大考經典貝氏定理題：分母總陽性率為真陽性加假陽性 $0.009 + 0.099 = 0.108$。真正患病機率為 $\\frac{0.009}{0.108} = \\frac{1}{12} \\approx 8.33\\%$（大多數陽性為假陽性）。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的兩條漸近線方程式為？",
    options: ["$y = \\pm \\frac{3}{4} x$", "$y = \\pm \\frac{4}{3} x$", "$y = \\pm \\frac{9}{16} x$", "$y = \\pm \\frac{16}{9} x$"],
    answer: 0,
    explanation: "雙曲線漸近線令常數項為 0：$\\frac{x^2}{16} - \\frac{y^2}{9} = 0 \\implies \\frac{y^2}{9} = \\frac{x^2}{16} \\implies y = \\pm \\frac{3}{4} x$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求三次函數 $f(x) = x^3 - 3x$ 的相對極小值為何？",
    options: ["-2（發生在 $x = 1$ 處）", "2", "0", "-1"],
    answer: 0,
    explanation: "求導：$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0 \\implies x = 1$ 或 $x = -1$。二階導數 $f''(x) = 6x$。$f''(1) = 6 > 0$，故在 $x = 1$ 處有相對極小值 $f(1) = 1^3 - 3(1) = -2$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "設 $x$ 為實數，解絕對值方程式 $|2x - 1| = 5$ 的所有解？",
    options: ["$x = 3$ 或 $x = -2$", "$x = 3$ 或 $x = 2$", "$x = -3$ 或 $x = 2$", "$x = 5$"],
    answer: 0,
    explanation: "$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$；或 $2x - 1 = -5 \\implies 2x = -4 \\implies x = -2$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "若多項式 $f(x) = x^3 + ax + b$ 能被 $(x - 1)^2$ 整除，則係數 $a$ 之值為何？",
    options: ["-3", "3", "-2", "1"],
    answer: 0,
    explanation: "能被 $(x-1)^2$ 整除代表 $x = 1$ 處 $f(1) = 0$ 且 $f'(1) = 0$。$f'(x) = 3x^2 + a \\implies f'(1) = 3(1) + a = 0 \\implies a = -3$（且 $b = 2$）。",
    difficulty: "中等"
  },
  {
    category: "指數與對數",
    question: "解指數方程式 $4^x - 3 \\cdot 2^x + 2 = 0$，求實數解 $x$？",
    options: ["$x = 0$ 或 $x = 1$", "$x = 1$ 或 $x = 2$", "$x = 0$ 或 $x = -1$", "$x = 2$"],
    answer: 0,
    explanation: "令 $t = 2^x > 0$：$t^2 - 3t + 2 = (t - 1)(t - 2) = 0 \\implies t = 1$ 或 $t = 2$。因此 $2^x = 1 \\implies x = 0$；$2^x = 2 \\implies x = 1$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\cos 120^\\circ$ 之精確值為何？",
    options: ["-1/2", "1/2", "-\\sqrt{3}/2", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "廣義角餘弦：$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "若兩向量 $\\vec{u} = (2, 1)$ 與 $\\vec{v} = (4, 2)$，則兩向量在幾何上的關係為？",
    options: ["互相平行且同方向（$\\vec{v} = 2\\vec{u}$）", "互相垂直", "反方向", "夾角 45°"],
    answer: 0,
    explanation: "分量成比例：$\\frac{4}{2} = \\frac{2}{1} = 2 > 0$。兩向量同向平行。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中點 $P(3, -4, 5)$ 到「$xy$ 平面」的垂直距離為何？",
    options: ["5（等於豎坐標絕對值 $|z|$）", "3", "4", "$\\sqrt{34}$"],
    answer: 0,
    explanation: "點 $(x, y, z)$ 到 $xy$ 平面的距離公式為 $|z| = |5| = 5$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "二階方陣 $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$，求其二次方 $A^2$ 為何？",
    options: ["$\\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"],
    answer: 0,
    explanation: "對角矩陣自乘等於各對角線元素平方：$\\begin{pmatrix} 2^2 & 0 \\\\ 0 & 3^2 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算排列數 $P^5_2$ 之值為何？",
    options: ["20", "10", "25", "120"],
    answer: 0,
    explanation: "$P^5_2 = 5 \\times 4 = 20$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "連續投擲一枚公正硬幣兩次，恰好出現「一正一反」的機率為何？",
    options: ["1/2（有 正反、反正 兩種，即 2/4）", "1/4", "3/4", "1"],
    answer: 0,
    explanation: "樣本空間有 正正、正反、反正、反反 共 4 種。一正一反有 2 種，機率為 $\\frac{2}{4} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $x^2 = 12y$ 的開口方向為何？",
    options: ["開口向上", "開口向下", "開口向右", "開口向左"],
    answer: 0,
    explanation: "標準式 $x^2 = 4cy$。因為 $4c = 12 > 0$，所以頂點在原點且拋物線開口向上。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 4x^2$ 的導函數 $f'(x)$ 為何？",
    options: ["$8x$", "$4x$", "$8x^2$", "8"],
    answer: 0,
    explanation: "$f'(x) = 4(2x) = 8x$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "二次方程式 $x^2 - 6x + 9 = 0$ 的判別式 $\\Delta$ 為何？",
    options: ["0（有二重根 $x = 3$）", "18", "36", "-36"],
    answer: 0,
    explanation: "$\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "化簡 $\\log_2 16$ 之數值為何？",
    options: ["4", "8", "2", "16"],
    answer: 0,
    explanation: "$16 = 2^4 \\implies \\log_2(2^4) = 4$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\tan 45^\\circ + \\sin 90^\\circ$ 之值為何？",
    options: ["2", "1", "0", "1/2"],
    answer: 0,
    explanation: "$\\tan 45^\\circ = 1$ 且 $\\sin 90^\\circ = 1$。總和為 $1 + 1 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{a} = (1, 2)$ 與 $\\vec{b} = (3, -1)$，計算向量和 $\\vec{a} + \\vec{b}$ 為何？",
    options: ["(4, 1)", "(2, -3)", "(4, 3)", "(-2, 3)"],
    answer: 0,
    explanation: "$\\vec{a} + \\vec{b} = (1+3, 2+(-1)) = (4, 1)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中通過原點 $(0, 0, 0)$ 且法向量為 $\\vec{n} = (1, 2, 3)$ 的平面方程式為？",
    options: ["$x + 2y + 3z = 0$", "$x + 2y + 3z = 6$", "$x + y + z = 0$", "$3x + 2y + z = 0$"],
    answer: 0,
    explanation: "法向量決定係數：$1(x-0) + 2(y-0) + 3(z-0) = 0 \\implies x + 2y + 3z = 0$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知方陣 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$，其行列式值 $|A|$ 為何？",
    options: ["1", "0", "2", "-1"],
    answer: 0,
    explanation: "$|A| = 1(1) - 0(0) = 1$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 4 個人排成一列照相，共有多少種不同的排法？",
    options: ["24 種（$4! = 24$）", "12 種", "16 種", "6 種"],
    answer: 0,
    explanation: "全排列 $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ 種。",
    difficulty: "基礎"
  }
];

batch8.forEach((q, idx) => {
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

console.log(`New Math A count after batch 8: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
