const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 5: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch5 = [
  {
    category: "數與式",
    question: "設 $a, b$ 皆為正實數，展開化簡後利用算幾不等式求代數式 $\\left(a + \\frac{1}{b}\\right)\\left(b + \\frac{4}{a}\\right)$ 的最小值為何？",
    options: ["9", "8", "10", "12"],
    answer: 0,
    explanation: "展開得 $a b + 4 + 1 + \\frac{4}{a b} = 5 + \\left(a b + \\frac{4}{a b}\\right)$。由算幾不等式：$a b + \\frac{4}{a b} \\ge 2\\sqrt{a b \\times \\frac{4}{a b}} = 2\\sqrt{4} = 4$。因此原式 $\\ge 5 + 4 = 9$。當 $a b = 2$ 時等號成立，最小值為 9。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x)$ 除以 $x - 1$ 的餘式為 3，除以 $x - 2$ 的餘式為 5。則 $f(x)$ 除以 $(x - 1)(x - 2)$ 所得的餘式為何？",
    options: ["$2x + 1$", "$2x - 1$", "$x + 2$", "$3x - 1$"],
    answer: 0,
    explanation: "由餘式定理，$f(1) = 3, f(2) = 5$。設除以二次式的餘式為 $a x + b$。代入得聯立方程：$a(1) + b = 3$ 且 $a(2) + b = 5$。兩式相減得 $a = 2$，代回得 $b = 1$。餘式為 $2x + 1$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知三次方程式 $x^3 - 3x^2 - 4x + 12 = 0$ 的三根分別為 $\\alpha, \\beta, \\gamma$。由根與係數關係求 $\\alpha + \\beta + \\gamma$ 與 $\\alpha\\beta\\gamma$ 之值分別為何？",
    options: ["三根之和為 3，三根之積為 -12", "三根之和為 -3，三根之積為 12", "三根之和為 3，三根之積為 12", "三根之和為 4，三根之積為 -12"],
    answer: 0,
    explanation: "三次方程式根與係數公式：$\\alpha + \\beta + \\gamma = -\\frac{b}{a} = -\\frac{-3}{1} = 3$；三根之積 $\\alpha\\beta\\gamma = -\\frac{d}{a} = -\\frac{12}{1} = -12$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 2 \\approx 0.3010$。求 $2^{50}$ 展開後的整數位數為幾位數？",
    options: ["16 位數", "15 位數", "17 位數", "50 位數"],
    answer: 0,
    explanation: "取常用對數：$\\log_{10}(2^{50}) = 50 \\log_{10} 2 \\approx 50 \\times 0.3010 = 15.05$。首數為 15，位數為首數加 1：$15 + 1 = 16$ 位數。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "化簡 $\\log_2 24 - \\log_2 3$ 之結果為何？",
    options: ["3", "8", "2", "4"],
    answer: 0,
    explanation: "對數減法公式：$\\log_2 24 - \\log_2 3 = \\log_2\\left(\\frac{24}{3}\\right) = \\log_2 8 = \\log_2(2^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "函數 $f(x) = 3\\sin x - 4\\cos x$。利用正餘弦疊合公式化為 $r\\sin(x - \\phi)$ 後，該函數在全實數域上的最大值為何？",
    options: ["5", "7", "1", "$\\sqrt{7}$"],
    answer: 0,
    explanation: "疊合公式振幅為 $r = \\sqrt{a^2 + b^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$。因此最大值為 5。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，已知內角 $A = 45^\\circ, B = 30^\\circ$，且邊長 $a = 4\\sqrt{2}$。由正弦定理求邊長 $b$ 之值為何？",
    options: ["4", "8", "$4\\sqrt{3}$", "2"],
    answer: 0,
    explanation: "正弦定理：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\implies \\frac{4\\sqrt{2}}{\\sin 45^\\circ} = \\frac{b}{\\sin 30^\\circ} \\implies \\frac{4\\sqrt{2}}{\\sqrt{2}/2} = \\frac{b}{1/2} \\implies 8 = 2b \\implies b = 4$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "設實數 $x, y, z$ 滿足 $x^2 + y^2 + z^2 = 9$。由柯西不等式求 $x + 2y + 2z$ 的最大值為何？",
    options: ["9", "3", "27", "81"],
    answer: 0,
    explanation: "三維柯西不等式：$(x^2 + y^2 + z^2)(1^2 + 2^2 + 2^2) \\ge (x + 2y + 2z)^2 \\implies 9 \\times (1 + 4 + 4) = 9 \\times 9 = 81 \\ge (x + 2y + 2z)^2$。開平方得最大值為 9。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "關於空間向量外積與內積的混合幾何代數性質，下列敘述何者恆等於 0？",
    options: ["$\\vec{a} \\cdot (\\vec{a} \\times \\vec{b})$（因為外積向量恆垂直於向量 $\\vec{a}$）", "$|\\vec{a} \\times \\vec{b}| - |\\vec{a}||\\vec{b}|\\cos\\theta$", "$\\vec{a} \\times (\\vec{a} \\times \\vec{b})$", "$|\\vec{a} \\cdot \\vec{b}|$"],
    answer: 0,
    explanation: "依外積定義，向量 $\\vec{a} \\times \\vec{b}$ 同時垂直於 $\\vec{a}$ 與 $\\vec{b}$。兩垂直向量的內積恆等於 0，即 $\\vec{a} \\cdot (\\vec{a} \\times \\vec{b}) = 0$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "若空間直線 $L_1: \\frac{x-1}{2} = \\frac{y-2}{1} = \\frac{z-3}{1}$ 與直線 $L_2: \\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-3}{-4}$，兩直線方向向量的夾角為何？",
    options: ["90°（兩方向向量互相垂直）", "0°", "60°", "45°"],
    answer: 0,
    explanation: "方向向量分別為 $\\vec{v}_1 = (2, 1, 1)$ 與 $\\vec{v}_2 = (1, 2, -4)$。內積 $\\vec{v}_1 \\cdot \\vec{v}_2 = 2(1) + 1(2) + 1(-4) = 2 + 2 - 4 = 0$。內積為 0，夾角為 90°。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "將平面圖形先繞原點逆時針旋轉 $45^\\circ$，再將所有坐標放大為原來的 $\\sqrt{2}$ 倍。所對應的複合變換二階矩陣 $M$ 為何？",
    options: ["$\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} \\sqrt{2} & 0 \\\\ 0 & \\sqrt{2} \\end{pmatrix}$", "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "旋轉矩陣 $R_{45^\\circ} = \\begin{pmatrix} \\frac{\\sqrt{2}}{2} & -\\frac{\\sqrt{2}}{2} \\\\ \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{2}}{2} \\end{pmatrix}$。乘以伸縮矩陣 $\\sqrt{2} I$：$\\sqrt{2} \\begin{pmatrix} \\frac{\\sqrt{2}}{2} & -\\frac{\\sqrt{2}}{2} \\\\ \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{2}}{2} \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "巴斯卡定理（Pascal's Rule）指出組合數遞迴關係：$C^n_k = C^{n-1}_k + C^{n-1}_{k-1}$。若已知 $C^7_3 = 35$ 且 $C^7_4 = 35$，則 $C^8_4$ 之值為何？",
    options: ["70", "35", "140", "105"],
    answer: 0,
    explanation: "由巴斯卡定理：$C^8_4 = C^7_4 + C^7_3 = 35 + 35 = 70$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "隨機變數 $X$ 服從參數為 $n = 100$、成功機率為 $p = 0.2$ 的二項分布 $B(100, 0.2)$。則隨機變數 $X$ 的期望值 $E(X)$ 與變異數 $\\text{Var}(X)$ 分別為何？",
    options: ["期望值為 20，變異數為 16", "期望值為 20，變異數為 20", "期望值為 50，變異數為 25", "期望值為 20，變異數為 4"],
    answer: 0,
    explanation: "二項分布公式：$E(X) = n p = 100 \\times 0.2 = 20$；變異數 $\\text{Var}(X) = n p (1 - p) = 100 \\times 0.2 \\times 0.8 = 16$（標準差 $\\sigma = 4$）。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 的焦點到其漸近線 $bx - ay = 0$ 的垂直距離，恆等於該雙曲線的？",
    options: ["虛軸半軸長 $b$", "實軸半軸長 $a$", "半焦距 $c$", "正焦弦長之半"],
    answer: 0,
    explanation: "焦點為 $(c, 0)$。點到直線距離公式：$d = \\frac{|b(c) - a(0)|}{\\sqrt{b^2 + (-a)^2}} = \\frac{b c}{\\sqrt{a^2 + b^2}} = \\frac{b c}{c} = b$（恆等於虛軸半軸長 $b$）。",
    difficulty: "中等"
  },
  {
    category: "微分初步",
    question: "已知函數 $f(x) = 2x^3 - 3x^2 - 12x + 5$。利用一階導函數檢驗，該函數的相對極大值發生在 $x$ 為何值處？",
    options: ["$x = -1$", "$x = 2$", "$x = 0$", "$x = 1$"],
    answer: 0,
    explanation: "求導：$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1) = 0$。臨界點為 $x = -1$ 與 $x = 2$。二階導數 $f''(x) = 12x - 6$。$f''(-1) = -18 < 0$ 為相對極大；$f''(2) = 18 > 0$ 為相對極小。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "設 $a = \\sqrt{5} + \\sqrt{2}$，$b = \\sqrt{6} + 1$。比較 $a$ 與 $b$ 的大小關係為何？",
    options: ["$a > b$", "$a < b$", "$a = b$", "無法比較"],
    answer: 0,
    explanation: "比較兩正數平方：$a^2 = (\\sqrt{5}+\\sqrt{2})^2 = 7 + 2\\sqrt{10}$；$b^2 = (\\sqrt{6}+1)^2 = 7 + 2\\sqrt{6}$。因為 $\\sqrt{10} > \\sqrt{6}$，所以 $a^2 > b^2 \\implies a > b$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式函數 $f(x) = x^4 - 2x^2 + 1$ 的實數根共有幾個？",
    options: ["2 個（即 1 與 -1，各為二重根）", "4 個相異實根", "0 個", "1 個"],
    answer: 0,
    explanation: "因式分解：$f(x) = (x^2 - 1)^2 = ((x - 1)(x + 1))^2 = (x - 1)^2(x + 1)^2 = 0$。實數根為 $x = 1$ 與 $x = -1$ 兩個相異實根（各為二重根）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解指數方程式 $3^{2x - 1} = 27$，求 $x$ 之值？",
    options: ["2", "3", "1", "4"],
    answer: 0,
    explanation: "$27 = 3^3 \\implies 3^{2x - 1} = 3^3 \\implies 2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\cos^2 15^\\circ - \\sin^2 15^\\circ$ 之值為何？",
    options: ["$\\frac{\\sqrt{3}}{2}$", "1/2", "$\\frac{\\sqrt{2}}{2}$", "1"],
    answer: 0,
    explanation: "二倍角餘弦公式：$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$。令 $\\theta = 15^\\circ$：$\\cos^2 15^\\circ - \\sin^2 15^\\circ = \\cos(2 \\times 15^\\circ) = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "在坐標平面上，點 $A(1, 2)$ 與點 $B(4, 6)$。向量 $\\vec{AB}$ 的長度 $|\\vec{AB}|$ 為何？",
    options: ["5", "25", "7", "$\\sqrt{7}$"],
    answer: 0,
    explanation: "$\\vec{AB} = (4 - 1, 6 - 2) = (3, 4)$。模長 $|\\vec{AB}| = \\sqrt{3^2 + 4^2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "點 $P(2, 1, 4)$ 到 $z$ 軸的距離為何？",
    options: ["$\\sqrt{5}$", "4", "5", "$\\sqrt{21}$"],
    answer: 0,
    explanation: "點 $(x, y, z)$ 到 $z$ 軸距離公式為 $\\sqrt{x^2 + y^2} = \\sqrt{2^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知二階方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$，求其二次方 $A^2$ 為何？",
    options: ["$\\begin{pmatrix} 4 & 4 \\\\ 0 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 0 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 0 & 2 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$A^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 4+0 & 2+2 \\\\ 0+0 & 0+4 \\end{pmatrix} = \\begin{pmatrix} 4 & 4 \\\\ 0 & 4 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 5 個人排成一列，若「甲必須排在首位」，共有多少種不同的排法？",
    options: ["24 種", "120 種", "60 種", "12 種"],
    answer: 0,
    explanation: "甲固定在第一位，剩下 4 個人任意排在後 4 個位置，排列數為 $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "袋中有 3 顆紅球與 2 顆綠球。從中任取 2 顆球，恰好為 1 紅 1 綠的機率為何？",
    options: ["3/5", "2/5", "1/2", "6/25"],
    answer: 0,
    explanation: "總取法為 $C^5_2 = 10$。取 1 紅 1 綠的方法數為 $C^3_1 \\times C^2_1 = 3 \\times 2 = 6$。機率為 $\\frac{6}{10} = \\frac{3}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓 $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$ 的長軸長度與焦點所在的坐標軸分別為何？",
    options: ["長軸長為 10，焦點在 $y$ 軸上", "長軸長為 6，焦點在 $x$ 軸上", "長軸長為 10，焦點在 $x$ 軸上", "長軸長為 5，焦點在 $y$ 軸上"],
    answer: 0,
    explanation: "$b^2 = 9, a^2 = 25 \\implies a = 5$（因為 $y^2$ 下方分母較大，為上下長型橢圓）。焦點在 $y$ 軸上，長軸長度為 $2a = 2(5) = 10$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "函數 $f(x) = x^2$ 在 $x = 3$ 處的導數 $f'(3)$ 之值為何？",
    options: ["6", "9", "3", "0"],
    answer: 0,
    explanation: "$f'(x) = 2x$。代入 $x = 3$ 得 $f'(3) = 2(3) = 6$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次方程式 $x^3 - 1 = 0$ 在複數系中的一個虛根為 $\\omega$。則 $1 + \\omega + \\omega^2$ 之值為何？",
    options: ["0", "1", "-1", "3"],
    answer: 0,
    explanation: "$x^3 - 1 = (x - 1)(x^2 + x + 1) = 0$。虛根 $\\omega$ 滿足方程 $x^2 + x + 1 = 0$，因此 $1 + \\omega + \\omega^2 = 0$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ$ 之值為何？",
    options: ["1", "1/2", "0", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "和角公式：$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$。原式等於 $\\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "若向量 $\\vec{u} = (2, 5)$，則其反方向向量 $-\\vec{u}$ 的坐標表示為何？",
    options: ["(-2, -5)", "(2, -5)", "(-2, 5)", "(5, 2)"],
    answer: 0,
    explanation: "$-\\vec{u} = -(2, 5) = (-2, -5)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "平面 $2x - 3y + 6z = 12$ 的法向量為下列何者？",
    options: ["(2, -3, 6)", "(2, 3, 6)", "(1/2, -1/3, 1/6)", "(12, 12, 12)"],
    answer: 0,
    explanation: "平面 $Ax + By + Cz + D = 0$ 的法向量係數即為 $\\vec{n} = (A, B, C) = (2, -3, 6)$。",
    difficulty: "基礎"
  }
];

batch5.forEach((q, idx) => {
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

console.log(`New Math A count after batch 5: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
