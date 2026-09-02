const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 11: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch11 = [
  {
    category: "數與式",
    question: "利用立方差因式分解公式 $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ 進行分母有理化：化簡 $\\frac{1}{\\sqrt[3]{3} - 1}$ 之結果為何？",
    options: ["$\\frac{\\sqrt[3]{9} + \\sqrt[3]{3} + 1}{2}$", "$\\frac{\\sqrt[3]{9} - \\sqrt[3]{3} + 1}{2}$", "$\\sqrt[3]{9} + 1$", "$\\frac{\\sqrt[3]{3} + 1}{2}$"],
    answer: 0,
    explanation: "分子分母同乘 $(\\sqrt[3]{3})^2 + \\sqrt[3]{3}(1) + 1^2 = \\sqrt[3]{9} + \\sqrt[3]{3} + 1$。分母化為 $(\\sqrt[3]{3})^3 - 1^3 = 3 - 1 = 2$。故結果為 $\\frac{\\sqrt[3]{9} + \\sqrt[3]{3} + 1}{2}$。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "三次多項式函數 $f(x) = x^3 - 6x^2 + 11x - 6$ 的圖形具有點對稱性。該三次曲線的「對稱中心（反曲點）」的坐標為？",
    options: ["(2, 0)（橫坐標公式 $h = -\\frac{b}{3a} = -\\frac{-6}{3(1)} = 2$，代入得 $f(2) = 8 - 24 + 22 - 6 = 0$）", "(1, 0)", "(3, 0)", "(2, 4)"],
    answer: 0,
    explanation: "三次多項式 $f(x) = ax^3 + bx^2 + cx + d$ 的對稱中心坐標公式為 $h = -\\frac{b}{3a} = \\frac{6}{3} = 2$。代入計算 $f(2) = 2^3 - 6(2^2) + 11(2) - 6 = 8 - 24 + 22 - 6 = 0$。對稱中心為 $(2, 0)$。",
    difficulty: "中等"
  },
  {
    category: "指數與對數",
    question: "已知常用對數 $\\log_{10} x = -3.4$。將實數 $x$ 寫成純小數表示法時，$x$ 的小數點後「第幾位」開始出現第一個不為 0 的有效數字？",
    options: ["小數點後「第 4 位」（拆解為首數與尾數：$\\log_{10} x = -4 + 0.6$，首數為 -4 代表小數點後第 4 位開始非零）", "小數點後第 3 位", "小數點後第 5 位", "小數點後第 1 位"],
    answer: 0,
    explanation: "大考對數首數尾數基本概念：尾數必須為非負小數（$0 \\le \\alpha < 1$）。$-3.4 = -4 + 0.6$。首數為 $-4$，因此其小數點後連續有 3 個 0，在第 4 位開始出現第一個非零數字。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知銳角 $\\theta$ 滿足 $\\tan\\theta = 1/2$。利用正切二倍角公式計算 $\\tan 2\\theta$ 之值為何？",
    options: ["4/3（公式：$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$）", "1", "3/4", "2/3"],
    answer: 0,
    explanation: "正切二倍角公式：$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{2(1/2)}{1 - (1/2)^2} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "設實數 $x, y, z$ 滿足 $x^2 + y^2 + z^2 = 9$。利用三維柯西不等式求代數式 $2x + y - 2z$ 的「最大值」為何？",
    options: ["9（柯西不等式：$(x^2 + y^2 + z^2)(2^2 + 1^2 + (-2)^2) \\ge (2x + y - 2z)^2 \\implies 9 \\times 9 = 81 \\ge (2x + y - 2z)^2$）", "18", "3", "81"],
    answer: 0,
    explanation: "三維柯西不等式：$(x^2+y^2+z^2)(2^2+1^2+(-2)^2) \\ge (2x+y-2z)^2 \\implies 9 \\times (4+1+4) = 81 \\ge (2x+y-2z)^2$。開平方得最大值為 9。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，通過點 $P(1, 2, 3)$ 且方向向量為 $\\vec{v} = (2, 3, 4)$ 的空間直線「對稱比例式方程式」為？",
    options: ["$\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$", "$\\frac{x - 2}{1} = \\frac{y - 3}{2} = \\frac{z - 4}{3}$", "$2(x - 1) + 3(y - 2) + 4(z - 3) = 0$", "$x + y + z = 6$"],
    answer: 0,
    explanation: "空間直線對稱比例式公式：分子為點坐標平移 $(x - x_0)$，分母為方向向量分量 $(v_x, v_y, v_z)$。故為 $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "平面線性變換中，將平面上所有向量繞坐標原點 $(0, 0)$「逆時針旋轉 $90^\\circ$」的二階旋轉矩陣 $R(90^\\circ)$ 為？",
    options: ["$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$（$\\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix}$）", "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"],
    answer: 0,
    explanation: "旋轉矩陣公式 $R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$。代入 $\\theta = 90^\\circ$：$\\cos 90^\\circ = 0, \\sin 90^\\circ = 1$，得 $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "巴斯卡定理（Pascal's Identity）指出組合數滿足恆等式：$C^n_k + C^n_{k-1} = C^{n+1}_k$。由此恆等式計算 $C^5_3 + C^5_2$ 之值為多少？",
    options: ["20（$C^6_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$）", "10", "15", "30"],
    answer: 0,
    explanation: "依巴斯卡恆等式：$C^5_3 + C^5_2 = C^{5+1}_3 = C^6_3 = 20$（亦可由 $10 + 10 = 20$ 驗證）。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "袋中有 5 顆白球與 3 顆紅球，自袋中「不放回」連續隨機取出 2 顆球。取出的 2 顆球「恰好皆為白球」的機率為何？",
    options: ["5/14（$C^5_2 / C^8_2 = 10 / 28 = 5/14$）", "25/64", "5/8", "1/2"],
    answer: 0,
    explanation: "總選法數為 $C^8_2 = 28$。取出 2 顆皆為白球的方法數為 $C^5_2 = 10$。機率為 $\\frac{10}{28} = \\frac{5}{14}$（或乘法原理 $\\frac{5}{8} \\times \\frac{4}{7} = \\frac{5}{14}$）。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ 的貫軸長度 $2a$ 與「正焦弦長 $\\frac{2b^2}{a}$」分別為多少？",
    options: ["貫軸長為 6，正焦弦長為 32/3（$a = 3, b = 4$，正焦弦長 $\\frac{2 \\times 16}{3} = \\frac{32}{3}$）", "貫軸長為 8，正焦弦長為 18/4", "貫軸長為 6，正焦弦長為 16/3", "貫軸長為 3，正焦弦長為 32"],
    answer: 0,
    explanation: "$a^2 = 9 \\implies a = 3$（貫軸長 $2a = 6$）；$b^2 = 16$。正焦弦長公式為 $\\frac{2b^2}{a} = \\frac{2(16)}{3} = \\frac{32}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "利用商的微分法則 $(\\frac{u}{v})' = \\frac{u' v - u v'}{v^2}$，求函數 $f(x) = \\frac{x}{x + 1}$ 的導函數 $f'(x)$ 之展開結果為何？",
    options: ["$\\frac{1}{(x + 1)^2}$", "$\\frac{2x + 1}{(x + 1)^2}$", "$\\frac{1}{x + 1}$", "$1$"],
    answer: 0,
    explanation: "$f'(x) = \\frac{(x)'(x + 1) - x(x + 1)'}{(x + 1)^2} = \\frac{1(x + 1) - x(1)}{(x + 1)^2} = \\frac{x + 1 - x}{(x + 1)^2} = \\frac{1}{(x + 1)^2}$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "若實數 $x$ 滿足 $x + \\frac{1}{x} = 3$，則代數式 $x^2 + \\frac{1}{x^2}$ 之數值為何？",
    options: ["7（$(x + 1/x)^2 - 2 = 3^2 - 2 = 7$）", "9", "11", "5"],
    answer: 0,
    explanation: "乘法公式展開：$(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} \\implies x^2 + \\frac{1}{x^2} = 3^2 - 2 = 7$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^4 - 1$ 可完全因式分解為？",
    options: ["$(x - 1)(x + 1)(x^2 + 1)$", "$(x - 1)^4$", "$(x^2 - 1)^2$", "$(x - 1)(x + 1)^3$"],
    answer: 0,
    explanation: "連續平方差分解：$x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "化簡對數表達式：$\\log_5 25$ 之數值為何？",
    options: ["2", "5", "10", "1"],
    answer: 0,
    explanation: "$25 = 5^2 \\implies \\log_5(5^2) = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta$ 的頂點在原點，始邊在正 $x$ 軸，終邊通過點 $P(-3, 4)$。求 $\\sin\\theta$ 之值為何？",
    options: ["4/5（$r = \\sqrt{(-3)^2 + 4^2} = 5$，$\\sin\\theta = y/r = 4/5$）", "-3/5", "-4/3", "3/5"],
    answer: 0,
    explanation: "半徑 $r = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = 5$。廣義角正弦 $\\sin\\theta = \\frac{y}{r} = \\frac{4}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (4, -3)$，求其向量長度（模長）$|\\vec{u}|$ 為何？",
    options: ["5", "7", "1", "25"],
    answer: 0,
    explanation: "$|\\vec{u}| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中通過點 $P(0, 0, 1)$ 且法向量為 $\\vec{n} = (0, 0, 1)$ 的平面方程式為？",
    options: ["$z = 1$", "$x + y + z = 1$", "$x = 0$", "$y = 0$"],
    answer: 0,
    explanation: "法向量決定係數：$0(x-0) + 0(y-0) + 1(z-1) = 0 \\implies z - 1 = 0 \\implies z = 1$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式 $\\begin{vmatrix} 5 & 0 \\\\ 0 & 5 \\end{vmatrix}$ 之值為何？",
    options: ["25", "10", "5", "0"],
    answer: 0,
    explanation: "$5(5) - 0(0) = 25$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^6_1$ 之值為何？",
    options: ["6", "1", "12", "30"],
    answer: 0,
    explanation: "$C^6_1 = 6$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "若事件 $A$ 與事件 $B$ 為互斥事件（兩者不可同時發生，即 $A \\cap B = \\emptyset$），已知 $P(A) = 0.3, P(B) = 0.4$。則其聯集機率 $P(A \\cup B)$ 為何？",
    options: ["0.7（$P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$）", "0.12", "0.1", "1.0"],
    answer: 0,
    explanation: "互斥事件加法公理：$P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$ 的焦點位於哪一條坐標軸上？",
    options: ["$y$ 軸上（因 $y^2$ 下方分母 $25 > 16$，長軸在 $y$ 軸上）", "$x$ 軸上", "直線 $y = x$ 上", "不存在焦點"],
    answer: 0,
    explanation: "分母較大者為長軸所在方向：$a^2 = 25$ 在 $y^2$ 下方，故長軸在 $y$ 軸上，兩焦點坐標為 $(0, \\pm c) = (0, \\pm 3)$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求三次函數 $f(x) = x^3$ 在 $x = 2$ 處的「切線斜率」為多少？",
    options: ["12（導函數 $f'(x) = 3x^2 \\implies f'(2) = 3(2^2) = 12$）", "8", "6", "4"],
    answer: 0,
    explanation: "切線斜率即導函數值：$f'(x) = 3x^2 \\implies f'(2) = 3(4) = 12$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "二次函數 $f(x) = (x - 2)^2 + 3$ 的最小值為何？",
    options: ["3（當 $x = 2$ 時）", "2", "-3", "0"],
    answer: 0,
    explanation: "開口向上，頂點在 $(2, 3)$，最小值為 3。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $10^{\\log_{10} 7}$ 之值為何？",
    options: ["7", "10", "1", "70"],
    answer: 0,
    explanation: "對數與指數互逆恆等式：$a^{\\log_a x} = x$。因此 $10^{\\log_{10} 7} = 7$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\tan 0^\\circ$ 之值為何？",
    options: ["0", "1", "不存在", "-1"],
    answer: 0,
    explanation: "$\\tan 0^\\circ = \\frac{\\sin 0^\\circ}{\\cos 0^\\circ} = \\frac{0}{1} = 0$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (1, 1)$，求向量差 $\\vec{u} - \\vec{v}$ 為何？",
    options: ["(1, 2)", "(3, 4)", "(-1, -2)", "(1, -2)"],
    answer: 0,
    explanation: "$\\vec{u} - \\vec{v} = (2-1, 3-1) = (1, 2)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，原點 $O$ 的坐標為？",
    options: ["(0, 0, 0)", "(1, 1, 1)", "(0, 0)", "(0, 1, 0)"],
    answer: 0,
    explanation: "三維空間原點橫、縱、豎坐標皆為 0，即 $(0, 0, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知二階方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$，其「跡數（Trace，主對角線元素之和）」$\\text{tr}(A)$ 為多少？",
    options: ["4（$2 + 2 = 4$）", "2", "0", "1"],
    answer: 0,
    explanation: "方陣跡數定義為主對角線元素之和：$\\text{tr}(A) = 2 + 2 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算排列數 $P^3_3$ 之值為何？",
    options: ["6（$3! = 6$）", "3", "9", "1"],
    answer: 0,
    explanation: "$P^3_3 = 3 \\times 2 \\times 1 = 6$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 3x$ 的導函數 $f'(x)$ 為何？",
    options: ["3", "$3x$", "0", "$x$"],
    answer: 0,
    explanation: "$f'(x) = 3$。",
    difficulty: "基礎"
  }
];

batch11.forEach((q, idx) => {
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

console.log(`New Math A count after batch 11: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
