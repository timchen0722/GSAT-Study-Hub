const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 13: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch13 = [
  {
    category: "數與式",
    question: "利用立方和因式分解公式 $a^3 + b^3 = (a + b)(a^2 - ab + b^2)$ 進行分母有理化：化簡 $\\frac{1}{\\sqrt[3]{2} + 1}$ 之結果為何？",
    options: ["$\\frac{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}{3}$", "$\\frac{\\sqrt[3]{4} + \\sqrt[3]{2} + 1}{3}$", "$\\sqrt[3]{4} - 1$", "$\\frac{\\sqrt[3]{2} - 1}{3}$"],
    answer: 0,
    explanation: "分子分母同乘 $(\\sqrt[3]{2})^2 - \\sqrt[3]{2}(1) + 1^2 = \\sqrt[3]{4} - \\sqrt[3]{2} + 1$。分母化為 $(\\sqrt[3]{2})^3 + 1^3 = 2 + 1 = 3$。故結果為 $\\frac{\\sqrt[3]{4} - \\sqrt[3]{2} + 1}{3}$。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "餘式定理（Remainder Theorem）指出：多項式 $f(x)$ 除以一次式 $(x - c)$ 所得的餘式常數，精確等於？",
    options: ["函數值 $f(c)$", "導函數值 $f'(c)$", "0", "$f(0)$"],
    answer: 0,
    explanation: "除法原理：$f(x) = (x - c) Q(x) + r$。令 $x = c$ 代入，得 $f(c) = 0 \\cdot Q(c) + r \\implies r = f(c)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "利用對數換底公式 $\\log_a b = \\frac{\\log_c b}{\\log_c a}$，計算連乘積：$\\log_2 3 \\times \\log_3 4 \\times \\log_4 8$ 之結果數值為何？",
    options: ["3（換底展開：$\\frac{\\log 3}{\\log 2} \\times \\frac{\\log 4}{\\log 3} \\times \\frac{\\log 8}{\\log 4} = \\frac{\\log 8}{\\log 2} = \\log_2 8 = 3$）", "2", "4", "8"],
    answer: 0,
    explanation: "中間項連鎖相消：$\\frac{\\log 3}{\\log 2} \\cdot \\frac{\\log 4}{\\log 3} \\cdot \\frac{\\log 8}{\\log 4} = \\frac{\\log 8}{\\log 2} = \\log_2(2^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "利用正弦疊合公式 $a\\sin\\theta + b\\cos\\theta = \\sqrt{a^2 + b^2}\\sin(\\theta + \\phi)$，求函數 $f(\\theta) = 3\\sin\\theta + 4\\cos\\theta$ 在實數域上的「最大值」為何？",
    options: ["5（振幅 $\\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$）", "7", "1", "25"],
    answer: 0,
    explanation: "正餘弦疊合定理：$3\\sin\\theta + 4\\cos\\theta = 5(\\frac{3}{5}\\sin\\theta + \\frac{4}{5}\\cos\\theta) = 5\\sin(\\theta + \\phi)$。因正弦最大值為 1，故函數最大值為 5。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "在空間三維直角坐標系中，由三個不共面的空間向量 $\\vec{u}, \\vec{v}, \\vec{w}$ 所張開的「平行六面體體積 $V$」，在向量代數上等於這三向量所組成的何種運算絕對值？",
    options: ["「純量三重積的絕對值（$|\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})|$）」", "三向量內積之和", "三向量模長之乘積", "三向量外積長度之和"],
    answer: 0,
    explanation: "底面積為 $|\vec{v} \\times \\vec{w}|$，高為 $\\vec{u}$ 在法向量上的投影長度 $|\vec{u}| |\\cos\\theta|$，底乘以高得體積為純量三重積 $|\\vec{u} \\cdot (\\vec{v} \\times \\vec{w})|$（即三階行列式絕對值）。",
    difficulty: "中等"
  },
  {
    category: "空間直線與平面",
    question: "空間中若兩平面方程式分別為 $E_1: x + 2y - 2z = 3$ 與 $E_2: 2x + 4y - 4z = 9$。這兩平面的法向量分別為 $\\vec{n}_1 = (1, 2, -2)$ 與 $\\vec{n}_2 = (2, 4, -4)$。由法向量平行且常數項不成比例可知，這兩平面的空間位置關係為？",
    options: ["「互相平行（但不重合）」", "垂直相交", "完全重合", "相交於一條直線"],
    answer: 0,
    explanation: "$\\frac{1}{2} = \\frac{2}{4} = \\frac{-2}{-4} \\ne \\frac{3}{9}$。法向量平行但常數項不成比例，故兩平面在空間中互相平行且無交點。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "在平面線性變換中，水平推移矩陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$ 將平面圖形進行水平剪切推移變換。該變換前後，平面圖形的「面積放大倍率（即行列式絕對值 $|\\det(A)|$）」為多少？",
    options: ["1 倍（$\\det(A) = 1(1) - 2(0) = 1$，推移變換保持幾何面積嚴格不變）", "2 倍", "0 倍", "4 倍"],
    answer: 0,
    explanation: "推移變換幾何特性：底長不變、高不變（同底等高），故面積完全守恆；矩陣行列式值 $\\det(A) = 1 - 0 = 1$ 精確驗證了面積放大率為 1。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "若有 5 位好友圍繞一張圓形餐桌就座用餐。若只考慮彼此之間的相對鄰座順序（旋轉後重合視為同一種坐法），共有多少種不同的「圓形排列（環狀排列）」坐法？",
    options: ["24 種（圓形排列公式 $(n - 1)! = (5 - 1)! = 4! = 24$）", "120 種", "60 種", "5 種"],
    answer: 0,
    explanation: "圓形排列消去旋轉對稱性：$n$ 個相異物環狀排列數為 $\\frac{n!}{n} = (n - 1)!$。此處 $(5 - 1)! = 4 \\times 3 \\times 2 \\times 1 = 24$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "設隨機變數 $X$ 服從在區間 $[0, 10]$ 上的「連續型均勻分佈（Continuous Uniform Distribution）」。其機率密度函數在 $[0, 10]$ 內為常數 $f(x) = 1/10$。求隨機變數落在區間 $[2, 6]$ 的機率 $P(2 \\le X \\le 6)$ 為何？",
    options: ["0.4（區間長度比值：$\\frac{6 - 2}{10 - 0} = \\frac{4}{10} = 0.4$）", "0.2", "0.6", "0.5"],
    answer: 0,
    explanation: "連續均勻分佈機率等於長度比（或積分矩形面積）：$P(2 \\le X \\le 6) = \\int_2^6 \\frac{1}{10} dx = \\frac{6 - 2}{10} = 0.4$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓幾何定義指出：平面上動點 $P$ 到兩定焦點 $F_1$ 與 $F_2$ 的「兩焦半徑距離之和（$\\overline{PF_1} + \\overline{PF_2}$）」恆為定值。這個恆定的定值長度等於？",
    options: ["橢圓的「長軸長度 $2a$」", "短軸長度 $2b$", "焦距 $2c$", "正焦弦長"],
    answer: 0,
    explanation: "橢圓嚴格定義：到兩焦點距離和恆為常數 $2a$（且 $2a > 2c$）；若距離差為常數則為雙曲線定義。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求三次函數 $f(x) = x^3 - 3x$ 在哪個點具有「相對極小值（局部極小值）」？",
    options: ["在 $x = 1$ 處有極小值 $-2$（$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$；二階導數 $f''(1) = 6 > 0$ 為極小）", "在 $x = -1$ 處", "在 $x = 0$ 處", "在 $x = 3$ 處"],
    answer: 0,
    explanation: "$f'(x) = 3(x-1)(x+1) = 0$ 臨界點為 $x = \\pm 1$。當 $x = 1$ 時，$f'(x)$ 由負變正，函數由遞減轉為遞增，故在 $x = 1$ 處有極小值 $f(1) = 1 - 3 = -2$。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "多項式展開：計算 $(a + 2b)^2$ 展開後的代數結果為何？",
    options: ["$a^2 + 4ab + 4b^2$", "$a^2 + 2ab + 4b^2$", "$a^2 + 4b^2$", "$a^2 + 4ab + 2b^2$"],
    answer: 0,
    explanation: "完全平方展開公式：$(a + 2b)^2 = a^2 + 2(a)(2b) + (2b)^2 = a^2 + 4ab + 4b^2$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^3 - 8$ 可利用立方差公式完全因式分解為？",
    options: ["$(x - 2)(x^2 + 2x + 4)$", "$(x - 2)^3$", "$(x - 2)(x^2 - 2x + 4)$", "$(x + 2)(x^2 - 2x + 4)$"],
    answer: 0,
    explanation: "立方差公式 $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$。代入 $a = x, b = 2$ 得 $(x - 2)(x^2 + 2x + 4)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算對數運算：$\\log_2 16$ 之數值為何？",
    options: ["4（因 $2^4 = 16$）", "2", "8", "16"],
    answer: 0,
    explanation: "$16 = 2^4 \\implies \\log_2(2^4) = 4$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 45^\\circ$ 的正切值 $\\tan 45^\\circ$ 為何？",
    options: ["1", "0", "$\\sqrt{2}/2$", "$\\sqrt{3}$"],
    answer: 0,
    explanation: "等腰直角三角形對邊等於鄰邊，$\\tan 45^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩平面向量 $\\vec{u} = (2, 1)$ 與 $\\vec{v} = (k, 3)$ 互相垂直。則實數 $k$ 之值為何？",
    options: ["-1.5（垂直內積為 0：$2(k) + 1(3) = 0 \\implies 2k + 3 = 0 \\implies k = -1.5$）", "1.5", "-6", "6"],
    answer: 0,
    explanation: "垂直條件 $\\vec{u} \\cdot \\vec{v} = 2k + 3 = 0 \\implies k = -3/2 = -1.5$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，$y$ 軸上所有點的坐標特徵為？",
    options: ["$x = 0$ 且 $z = 0$（橫坐標與豎坐標皆為 0）", "$y = 0$", "$x = 0$ 且 $y = 0$", "$x + y + z = 0$"],
    answer: 0,
    explanation: "$y$ 軸為 $xy$ 平面與 $yz$ 平面之交線，方程式為聯立方程 $x = 0$ 且 $z = 0$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式 $\\begin{vmatrix} 3 & 1 \\\\ 2 & 4 \\end{vmatrix}$ 之值為何？",
    options: ["10（$3 \\times 4 - 1 \\times 2 = 12 - 2 = 10$）", "14", "-10", "12"],
    answer: 0,
    explanation: "交叉相乘相減：$3(4) - 1(2) = 12 - 2 = 10$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^4_2$ 之值為何？",
    options: ["6（$\\frac{4 \\times 3}{2 \\times 1} = 6$）", "12", "8", "4"],
    answer: 0,
    explanation: "$C^4_2 = \\frac{4 \\times 3}{2 \\times 1} = 6$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "連續投擲一枚公正的硬幣 2 次，至少出現 1 次正面的機率為何？",
    options: ["3/4（反面扣除法：$1 - (1/2)^2 = 1 - 1/4 = 3/4$）", "1/2", "1/4", "1"],
    answer: 0,
    explanation: "全反面機率為 $(1/2)^2 = 1/4$。至少一正面的補集機率為 $1 - 1/4 = 3/4$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "圓方程式 $x^2 + y^2 = 9$ 的圓心坐標為？",
    options: ["(0, 0)（坐標原點）", "(3, 3)", "(0, 3)", "(3, 0)"],
    answer: 0,
    explanation: "標準形式 $(x-h)^2 + (y-k)^2 = r^2$，此處 $h=0, k=0$，圓心為原點 $(0, 0)$，半徑為 3。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 5x^2$ 的導函數 $f'(x)$ 為何？",
    options: ["$10x$", "$5x$", "$10$", "$x$"],
    answer: 0,
    explanation: "$f'(x) = 5(2x) = 10x$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算代數乘法：$(\\sqrt{2} + 1)(\\sqrt{2} - 1)$ 之結果為何？",
    options: ["1（$(\\sqrt{2})^2 - 1^2 = 2 - 1 = 1$）", "2", "3", "0"],
    answer: 0,
    explanation: "平方差公式：$(\\sqrt{2})^2 - 1^2 = 2 - 1 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "若多項式 $f(x) = x^2 - 5x + 6$，求代數方程 $f(x) = 0$ 的兩實根為何？",
    options: ["$x = 2$ 與 $x = 3$（$(x - 2)(x - 3) = 0$）", "$x = -2$ 與 $x = -3$", "$x = 1$ 與 $x = 6$", "$x = -1$ 與 $x = -6$"],
    answer: 0,
    explanation: "十字相乘分解：$(x - 2)(x - 3) = 0 \\implies x = 2, 3$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $8^{1/3}$ 之數值為何？",
    options: ["2（即 $\\sqrt[3]{8} = 2$）", "4", "8/3", "1"],
    answer: 0,
    explanation: "$8^{1/3} = (2^3)^{1/3} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\cos 180^\\circ$ 之值為何？",
    options: ["-1", "1", "0", "1/2"],
    answer: 0,
    explanation: "$\\cos 180^\\circ = -1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (1, 2)$，求其相反向量 $-\\vec{u}$ 的坐標為？",
    options: ["(-1, -2)", "(1, -2)", "(-1, 2)", "(2, 1)"],
    answer: 0,
    explanation: "$-\\vec{u} = -(1, 2) = (-1, -2)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中通過原點 $(0, 0, 0)$ 且垂直於 $x$ 軸的坐標平面方程式為？",
    options: ["$x = 0$（即 $yz$ 平面）", "$y = 0$", "$z = 0$", "$x + y = 0$"],
    answer: 0,
    explanation: "垂直於 $x$ 軸的法向量為 $(1, 0, 0)$，過原點方程式為 $1(x-0) + 0 + 0 = 0 \\implies x = 0$（即 $yz$ 平面）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知二階方陣 $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$，計算其逆矩陣 $A^{-1}$ 為何？",
    options: ["$\\begin{pmatrix} 1/3 & 0 \\\\ 0 & 1/3 \\end{pmatrix}$", "$\\begin{pmatrix} -3 & 0 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1/3 \\\\ 1/3 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "對角方陣的逆矩陣即對角元素各自取倒數：$\\begin{pmatrix} 1/3 & 0 \\\\ 0 & 1/3 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^2 + 4x$ 在 $x = 0$ 處的導函數值 $f'(0)$ 為何？",
    options: ["4（導函數 $f'(x) = 2x + 4 \\implies f'(0) = 4$）", "0", "2", "8"],
    answer: 0,
    explanation: "$f'(x) = 2x + 4 \\implies f'(0) = 2(0) + 4 = 4$。",
    difficulty: "基礎"
  }
];

batch13.forEach((q, idx) => {
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

console.log(`New Math A count after batch 13: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
