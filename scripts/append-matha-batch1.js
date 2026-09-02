const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count: ${quiz.length}`);

// 30 Handcrafted, distinct, curriculum-aligned questions for Math A
const batch1 = [
  {
    category: "數與式",
    question: "設 $x, y, z$ 為實數且滿足 $x^2 + y^2 + z^2 = 14$。由柯西不等式，求 $x + 2y + 3z$ 的最大值為何？",
    options: ["14", "$\\sqrt{14}$", "28", "196"],
    answer: 0,
    explanation: "三維柯西不等式：$(x^2 + y^2 + z^2)(1^2 + 2^2 + 3^2) \\ge (x + 2y + 3z)^2 \\implies (14)(1 + 4 + 9) = (14)(14) = 196 \\ge (x + 2y + 3z)^2$。因此 $-14 \\le x + 2y + 3z \\le 14$。最大值為 14。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "三次多項式 $f(x) = 2(x - 1)^3 + 5(x - 1)^2 + 3(x - 1) + 4$，若在 $x = 1$ 附近的局部一次近似直線方程式為何？",
    options: ["$y = 3(x - 1) + 4$", "$y = 5(x - 1) + 4$", "$y = 2x + 4$", "$y = 3x + 4$"],
    answer: 0,
    explanation: "當 $x$ 充分接近 1 時，高次項 $(x-1)^3$ 與 $(x-1)^2$ 微小可忽略，局部一次近似線（切線）即保留一次項與常數項：$y = 3(x - 1) + 4$（即 $y = 3x + 1$）。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "已知多項式 $P(x)$ 除以 $x - 2$ 餘 5，除以 $x + 1$ 餘 -1，則 $P(x)$ 除以 $(x - 2)(x + 1)$ 的餘式為何？",
    options: ["$2x + 1$", "$x + 3$", "$2x - 1$", "$3x - 1$"],
    answer: 0,
    explanation: "設餘式為 $ax + b$。由餘式定理：$P(2) = 2a + b = 5$ 且 $P(-1) = -a + b = -1$。兩式相減得 $3a = 6 \\implies a = 2$，代入得 $b = 1$。餘式為 $2x + 1$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 2 \\approx 0.3010$，請問 $2^{50}$ 展開後為幾位數？",
    options: ["16 位數", "15 位數", "17 位數", "50 位數"],
    answer: 0,
    explanation: "取常用對數：$\\log_{10}(2^{50}) = 50 \\times \\log_{10} 2 \\approx 50 \\times 0.3010 = 15.05$。首數為 15，因此 $2^{50}$ 為 $15 + 1 = 16$ 位數。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解方程式 $\\log_2(x + 3) + \\log_2(x - 1) = 5$，求實數解 $x$ 之值？",
    options: ["5", "-7", "5 或 -7", "7"],
    answer: 0,
    explanation: "$\\log_2[(x+3)(x-1)] = 5 \\implies x^2 + 2x - 3 = 2^5 = 32 \\implies x^2 + 2x - 35 = 0 \\implies (x+7)(x-5) = 0$。真數限制 $x > 1$，故負根 $x = -7$ 不合，解為 $x = 5$。",
    difficulty: "中等"
  },
  {
    category: "三角函數",
    question: "利用和差角公式計算 $\\cos 75^\\circ$ 的精確值為何？",
    options: ["$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$", "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$", "$\\frac{\\sqrt{3}-1}{2\\sqrt{2}}$", "$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$"],
    answer: 0,
    explanation: "$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\frac{1}{2} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，已知三邊長分別為 $a = 7, b = 8, c = 9$。求 $\\Delta ABC$ 的面積為何？",
    options: ["$12\\sqrt{5}$", "$24\\sqrt{5}$", "$36$", "$18\\sqrt{3}$"],
    answer: 0,
    explanation: "海龍公式：半周長 $s = \\frac{7+8+9}{2} = 12$。面積 $A = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{12(12-7)(12-8)(12-9)} = \\sqrt{12 \\times 5 \\times 4 \\times 3} = \\sqrt{720} = 12\\sqrt{5}$。",
    difficulty: "中等"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (4, 3)$ 與向量 $\\vec{v} = (1, 2)$，求向量 $\\vec{u}$ 在向量 $\\vec{v}$ 上的「正射影（向量）」為何？",
    options: ["(2, 4)", "(4, 2)", "(10, 20)", "(1, 2)"],
    answer: 0,
    explanation: "內積 $\\vec{u}\\cdot\\vec{v} = 4(1)+3(2) = 10$。模長平方 $|\\vec{v}|^2 = 1^2 + 2^2 = 5$。正射影公式為 $\\left(\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\right)\\vec{v} = \\frac{10}{5}(1, 2) = 2(1, 2) = (2, 4)$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "設兩向量 $\\vec{a} = (3, -1)$ 與 $\\vec{b} = (k, 6)$ 平行，則實數 $k$ 之值為何？",
    options: ["-18", "18", "-2", "2"],
    answer: 0,
    explanation: "兩向量平行等價於分量成比例：$\\frac{3}{k} = \\frac{-1}{6} \\implies -k = 18 \\implies k = -18$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "空間中兩向量 $\\vec{a} = (2, 1, -1)$ 與 $\\vec{b} = (1, -2, 3)$，其所張開的平行四邊形面積為何？",
    options: ["$\\sqrt{75} = 5\\sqrt{3}$", "$5$", "$\\sqrt{35}$", "15"],
    answer: 0,
    explanation: "平行四邊形面積等於外積模長 $|\\vec{a}\\times\\vec{b}|$。外積分量：$(1(3)-(-1)(-2), -1(1)-2(3), 2(-2)-1(1)) = (3-2, -1-6, -4-1) = (1, -7, -5)$。模長為 $\\sqrt{1^2 + (-7)^2 + (-5)^2} = \\sqrt{1 + 49 + 25} = \\sqrt{75} = 5\\sqrt{3}$。",
    difficulty: "進階"
  },
  {
    category: "空間向量與外積",
    question: "由空間中三向量 $\\vec{u} = (1, 0, 0), \\vec{v} = (0, 2, 0), \\vec{w} = (1, 1, 3)$ 所張開的平行六面體體積為何？",
    options: ["6", "5", "12", "3"],
    answer: 0,
    explanation: "平行六面體體積為三向量之純量三重積（三階行列式絕對值）：$|\\det(\\vec{u}, \\vec{v}, \\vec{w})| = \\left| \\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 1 & 3 \\end{vmatrix} \\right| = |1(2\\times 3 - 0)| = 6$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中兩平行平面 $E_1: 2x - 2y + z = 4$ 與 $E_2: 2x - 2y + z = 13$ 之間的垂直距離為何？",
    options: ["3", "9", "$\\sqrt{3}$", "1"],
    answer: 0,
    explanation: "平行平面距離公式：$d = \\frac{|d_2 - d_1|}{\\sqrt{a^2 + b^2 + c^2}} = \\frac{|13 - 4|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{9}{\\sqrt{4 + 4 + 1}} = \\frac{9}{3} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "將平面上點 $P(1, 0)$ 以原點為中心，逆時針方向旋轉 60°，旋轉後的坐標為何？",
    options: ["$(1/2, \\sqrt{3}/2)$", "$(\\sqrt{3}/2, 1/2)$", "$(-1/2, \\sqrt{3}/2)$", "$(1/2, -\\sqrt{3}/2)$"],
    answer: 0,
    explanation: "旋轉矩陣 $R_{60^\\circ} = \\begin{pmatrix} \\cos 60^\\circ & -\\sin 60^\\circ \\\\ \\sin 60^\\circ & \\cos 60^\\circ \\end{pmatrix} = \\begin{pmatrix} 1/2 & -\\sqrt{3}/2 \\\\ \\sqrt{3}/2 & 1/2 \\end{pmatrix}$。作用於 $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ 得到 $\\begin{pmatrix} 1/2 \\\\ \\sqrt{3}/2 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "二階方陣 $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ 的行列式 $\\det(A)$ 之值為何？",
    options: ["5", "11", "8", "3"],
    answer: 0,
    explanation: "$\\det(A) = ad - bc = 2(4) - 3(1) = 8 - 3 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "有 4 封寫好收件人的信件與 4 個對應的信封。若將信件隨機裝入信封，每封信恰好都「裝錯信封（錯位排列）」的方法數有幾種？",
    options: ["9 種", "6 種", "12 種", "24 種"],
    answer: 0,
    explanation: "錯位排列數公式：$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$。四封信全錯裝的方法數為 $D_4 = 9$ 種。",
    difficulty: "中等"
  },
  {
    category: "機率與貝氏定理",
    question: "某種罕見疾病在人口中的盛行率為 1%。某篩檢試劑對患者呈陽性反應的準確率（真陽性率）為 99%，對健康者呈陰性反應的準確率（特異度）為 95%（即偽陽性率為 5%）。若某人篩檢結果呈陽性，則他真正患病的機率為何？",
    options: ["約 16.6%（$\\frac{99}{594} = \\frac{1}{6}$）", "99%", "95%", "50%"],
    answer: 0,
    explanation: "由貝氏定理：總陽性機率 $P(+) = 0.01 \\times 0.99 + 0.99 \\times 0.05 = 0.0099 + 0.0495 = 0.0594$。真陽性機率 $P(\\text{病}|+) = \\frac{0.0099}{0.0594} = \\frac{99}{594} = \\frac{1}{6} \\approx 16.6\\%$。因為基底人口多為健康人，偽陽性人數遠多於真患者。",
    difficulty: "進階"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $y^2 = 8x$ 的焦點坐標與準線方程式分別為何？",
    options: ["焦點 $(2, 0)$，準線 $x = -2$", "焦點 $(0, 2)$，準線 $y = -2$", "焦點 $(4, 0)$，準線 $x = -4$", "焦點 $(2, 0)$，準線 $y = -2$"],
    answer: 0,
    explanation: "標準式 $y^2 = 4cx$。此處 $4c = 8 \\implies c = 2$。開口向右，頂點 $(0, 0)$，故焦點為 $(c, 0) = (2, 0)$，準線為 $x = -c = -2$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{16} + \\frac{y^2}{7} = 1$ 的離心率 $e = \\frac{c}{a}$ 為何？",
    options: ["3/4", "9/16", "\\sqrt{7}/4", "1/2"],
    answer: 0,
    explanation: "$a^2 = 16 \\implies a = 4, b^2 = 7$。由 $c^2 = a^2 - b^2 = 16 - 7 = 9 \\implies c = 3$。離心率 $e = \\frac{c}{a} = \\frac{3}{4}$。",
    difficulty: "中等"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^3 - 3x + 2$ 在 $x = 2$ 處的導數（切線斜率）$f'(2)$ 為何？",
    options: ["9", "6", "12", "3"],
    answer: 0,
    explanation: "導函數 $f'(x) = 3x^2 - 3$。代入 $x = 2$ 得 $f'(2) = 3(2^2) - 3 = 3(4) - 3 = 12 - 3 = 9$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "若函數 $f(x) = x^3 - 3x$ 在區間 $[-2, 2]$ 上的極大值為何？",
    options: ["2", "0", "-2", "4"],
    answer: 0,
    explanation: "$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$。檢查端點與臨界點：$f(-2) = -8+6 = -2$；$f(-1) = -1+3 = 2$；$f(1) = 1-3 = -2$；$f(2) = 8-6 = 2$。最大值為 2。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "若實數 $x$ 滿足不等式 $|2x - 3| < 5$，則 $x$ 的解範圍為何？",
    options: ["$-1 < x < 4$", "$-4 < x < 1$", "$1 < x < 4$", "$x > 4$ 或 $x < -1$"],
    answer: 0,
    explanation: "$-5 < 2x - 3 < 5 \\implies -2 < 2x < 8 \\implies -1 < x < 4$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\sin^2 20^\\circ + \\sin^2 70^\\circ$ 之值為何？",
    options: ["1", "0", "1/2", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "由餘角關係 $\\sin 70^\\circ = \\cos(90^\\circ - 70^\\circ) = \\cos 20^\\circ$。因此 $\\sin^2 20^\\circ + \\cos^2 20^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩點 $A(1, 2)$ 與 $B(4, 6)$，求線段 $AB$ 的長度為何？",
    options: ["5", "7", "25", "\\sqrt{7}"],
    answer: 0,
    explanation: "向量 $\\vec{AB} = (4-1, 6-2) = (3, 4)$。長度為 $|\\vec{AB}| = \\sqrt{3^2 + 4^2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間坐標中，通過點 $P(1, 2, 3)$ 且方向向量為 $\\vec{v} = (2, -1, 4)$ 的直線對稱比例式為何？",
    options: ["$\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z - 3}{4}$", "$\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 4}{3}$", "$\\frac{x + 1}{2} = \\frac{y + 2}{-1} = \\frac{z + 3}{4}$", "$2(x-1) - (y-2) + 4(z-3) = 0$"],
    answer: 0,
    explanation: "直線對稱比例式：$\\frac{x - x_0}{v_1} = \\frac{y - y_0}{v_2} = \\frac{z - z_0}{v_3} \\implies \\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z - 3}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從數字 1, 2, 3, 4, 5 中任選 3 個不重複的數字排成三位數，共有多少個三位數？",
    options: ["60 個", "125 個", "10 個", "20 個"],
    answer: 0,
    explanation: "排列數 $P^5_3 = 5 \\times 4 \\times 3 = 60$ 個。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "某銅板出現正面的機率為 $p = \\frac{1}{2}$，連續投擲該銅板 100 次，其出現正面次數的期望值與變異數分別為何？",
    options: ["期望值 50，變異數 25", "期望值 50，變異數 50", "期望值 25，變異數 25", "期望值 50，變異數 5"],
    answer: 0,
    explanation: "二項分布 $B(n, p)$：期望值 $E = np = 100 \\times 0.5 = 50$；變異數 $Var = np(1-p) = 100 \\times 0.5 \\times 0.5 = 25$（標準差為 5）。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知二次函數 $f(x) = x^2 - 4x + 7$ 在區間 $[0, 3]$ 上的最小值為何？",
    options: ["3", "7", "4", "0"],
    answer: 0,
    explanation: "配方 $f(x) = (x - 2)^2 + 3$。頂點 $x = 2$ 落在區間 $[0, 3]$ 內，開口向上，故當 $x = 2$ 時有最小值 3。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ 的兩焦點坐標為何？",
    options: ["$(\\pm 5, 0)$", "$(0, \\pm 5)$", "$(\\pm 4, 0)$", "$(\\pm \\sqrt{7}, 0)$"],
    answer: 0,
    explanation: "$a^2 = 9, b^2 = 16$。雙曲線焦點關係 $c^2 = a^2 + b^2 = 9 + 16 = 25 \\implies c = 5$。左右型雙曲線，焦點為 $(\\pm 5, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，求 $A$ 的轉置矩陣 $A^T$ 為何？",
    options: ["$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"],
    answer: 0,
    explanation: "轉置矩陣將矩陣的行列互換，第一列 (1, 2) 變為第一行，第二列 (3, 4) 變為第二行，得 $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，若 $\\sin A : \\sin B : \\sin C = 3 : 5 : 7$，則最大角 $\\angle C$ 為何？",
    options: ["120°", "150°", "135°", "60°"],
    answer: 0,
    explanation: "由正弦定理，邊長比等於對角正弦比：$a : b : c = 3 : 5 : 7$。由餘弦定理：$\\cos C = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{9 + 25 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2} \\implies \\angle C = 120^\\circ$。",
    difficulty: "中等"
  }
];

batch1.forEach((q, idx) => {
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

console.log(`New Math A count after batch 1: ${quiz.length}`);

// Check uniqueness
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Total unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
