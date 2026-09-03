const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 17: ${quiz.length}`);

// 25 Handcrafted, non-templated questions for Math A to hit 550!
const batch17 = [
  {
    category: "數與式",
    question: "設實數 $x, y$ 滿足柯西不等式 $(x^2 + y^2)(3^2 + 4^2) \\ge (3x + 4y)^2$。若已知 $x^2 + y^2 = 4$，則線性代數式 $3x + 4y$ 的「最大值」為多少？",
    options: ["10（由柯西不等式 $(4)(25) \\ge (3x+4y)^2 \\implies (3x+4y)^2 \\le 100 \\implies -10 \\le 3x+4y \\le 10$）", "20", "5", "100"],
    answer: 0,
    explanation: "柯西不等式求極值：$(x^2+y^2)(3^2+4^2) \\ge (3x+4y)^2 \\implies 4 \\times 25 = 100 \\ge (3x+4y)^2 \\implies -10 \\le 3x+4y \\le 10$，最大值為 10（當且僅當 $x/3 = y/4$ 且同號時等號成立）。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式函數 $f(x) = (x - 2)^3 + 4(x - 2) + 5$ 在坐標平面上的圖形「對稱中心（反曲點）」坐標為？",
    options: ["$(2, 5)$（標準三次中心對稱式 $f(x) = a(x-h)^3 + p(x-h) + k$，對稱中心即為 $(h, k) = (2, 5)$）", "$(2, 4)$", "$(0, 5)$", "(-2, 5)"],
    answer: 0,
    explanation: "三次單項配方式：$f(x) - k = a(x - h)^3 + p(x - h)$ 為奇函數繞原點對稱平移之結果，圖形必以 $(h, k) = (2, 5)$ 為點對稱中心。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解對數不等式：$\\log_{1/3}(x - 2) > -1$。在滿足真數 $x - 2 > 0$（即 $x > 2$）的前提下，該不等式的實數解為？",
    options: ["$2 < x < 5$（真數 $x > 2$；底數 $1/3 < 1$ 去對數方向反轉：$x - 2 < (1/3)^{-1} = 3 \\implies x < 5$）", "$x > 5$", "$x < 5$", "$2 < x < 3$"],
    answer: 0,
    explanation: "底數小於 1 對數不等式：真數條件 $x > 2$。$\\log_{1/3}(x - 2) > \\log_{1/3} 3 \\iff x - 2 < 3 \\implies x < 5$。綜合得 $2 < x < 5$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "利用半角公式求值：已知銳角 $\\theta$ 滿足 $\\cos\\theta = 7/25$，則 $\\sin(\\theta/2)$ 之數值為？",
    options: ["$3/5$（公式 $\\sin(\\theta/2) = \\sqrt{\\frac{1 - \\cos\\theta}{2}} = \\sqrt{\\frac{1 - 7/25}{2}} = \\sqrt{\\frac{18/25}{2}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$）", "$4/5$", "$7/25$", "$1/5$"],
    answer: 0,
    explanation: "正弦半角公式：$\\sin(\\theta/2) = \\sqrt{\\frac{1 - 7/25}{2}} = \\sqrt{\\frac{18}{50}} = \\sqrt{\\frac{9}{25}} = \\frac{3}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (1, 2)$ 與 $\\vec{v} = (k, -3)$。若此兩向量「互相垂直（$\\vec{u} \\perp \\vec{v}$）」，則實數 $k$ 之值為？",
    options: ["6（垂直條件內積為零：$\\vec{u} \\cdot \\vec{v} = 1(k) + 2(-3) = 0 \\implies k - 6 = 0 \\implies k = 6$）", "-6", "3", "0"],
    answer: 0,
    explanation: "向量垂直內積為 0：$k - 6 = 0 \\implies k = 6$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "空間中兩向量 $\\vec{u} = (1, 0, 0)$ 與 $\\vec{v} = (0, 1, 0)$，計算其外積 $\\vec{u} \\times \\vec{v}$ 之結果為？",
    options: ["$(0, 0, 1)$（即標準基底向量 $\\hat{i} \\times \\hat{j} = \\hat{k}$）", "$(0, 0, -1)$", "$(1, 1, 0)$", "$(0, 0, 0)$"],
    answer: 0,
    explanation: "右手定則標準基底外積：$\\hat{i} \\times \\hat{j} = \\hat{k} = (0, 0, 1)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，直線 $L: \\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$ 的「方向向量 $\\vec{v}$」可取為？",
    options: ["$(2, 3, 4)$", "$(1, 2, 3)$", "(-1, -2, -3)", "$(4, 3, 2)$"],
    answer: 0,
    explanation: "空間對稱比例式分母即為直線的方向向量：$\\vec{v} = (2, 3, 4)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若二階方陣 $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$，計算其逆矩陣 $A^{-1}$ 為何？",
    options: ["$\\begin{pmatrix} 1/2 & 0 \\\\ 0 & 1/3 \\end{pmatrix}$（對角矩陣逆矩陣即對角元素取倒數）", "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 0 \\\\ 0 & -3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"],
    answer: 0,
    explanation: "對角方陣逆矩陣：$\\det(A) = 6$，$A^{-1} = \\frac{1}{6}\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 1/2 & 0 \\\\ 0 & 1/3 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 5 本完全不同的書籍全部分給甲、乙、丙、丁、戊 5 個人，每人恰得 1 本，共有多少種分法？",
    options: ["120 種（即 $5! = 5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$）", "24 種", "720 種", "25 種"],
    answer: 0,
    explanation: "$P^5_5 = 5! = 120$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "袋中有 3 顆紅球與 2 顆白球（球皆可區分）。從袋中隨機一次取出 2 顆球，取出的 2 顆球「皆為紅球」的機率為何？",
    options: ["3/10（$C^3_2 / C^5_2 = 3 / 10 = 0.3$）", "1/5", "3/5", "1/2"],
    answer: 0,
    explanation: "樣本空間 $C^5_2 = 10$，兩紅球事件數 $C^3_2 = 3$，機率為 $\\frac{3}{10}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$ 的「焦點坐標」為？",
    options: ["$(\\pm\\sqrt{7}, 0)$（$c^2 = a^2 - b^2 = 16 - 9 = 7 \\implies c = \\sqrt{7}$，焦點在 $x$ 軸上）", "$(0, \\pm\\sqrt{7})$", "$(\\pm 5, 0)$", "$(\\pm 7, 0)$"],
    answer: 0,
    explanation: "橢圓 $c = \\sqrt{a^2 - b^2} = \\sqrt{16 - 9} = \\sqrt{7}$。長軸在 $x$ 軸，焦點坐標為 $(\\sqrt{7}, 0)$ 與 $(-\\sqrt{7}, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求多項式函數 $f(x) = x^3 - 3x$ 在哪個點具有「相對極小值（局部極小值）」？",
    options: ["在 $x = 1$ 處有極小值 -2（$f'(x) = 3(x^2 - 1) = 0 \\implies x=1$ 處一階導數由負變正）", "在 $x = -1$ 處（此處為極大值 2）", "在 $x = 0$ 處", "在 $x = 3$ 處"],
    answer: 0,
    explanation: "$f'(x) = 3(x-1)(x+1)$。當 $x = 1$ 時一階導函數由負變正，函數由減轉增，故在 $x = 1$ 處取得局部極小值 $f(1) = 1 - 3 = -2$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數：$(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3})$ 之值為何？",
    options: ["4（$(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$）", "10", "2", "1"],
    answer: 0,
    explanation: "平方差公式：$(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 - 25$ 完全因式分解後的結果為？",
    options: ["$(x - 5)(x + 5)$", "$(x - 5)^2$", "$(x + 5)^2$", "$x(x - 25)$"],
    answer: 0,
    explanation: "$x^2 - 5^2 = (x - 5)(x + 5)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算對數值：$\\log_3 81$ 之數值為何？",
    options: ["4（因 $3^4 = 81$）", "27", "3", "1"],
    answer: 0,
    explanation: "$81 = 3^4 \\implies \\log_3(3^4) = 4$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 90^\\circ$ 的餘弦值 $\\cos 90^\\circ$ 為何？",
    options: ["0", "1", "-1", "不存在"],
    answer: 0,
    explanation: "$\\cos 90^\\circ = 0$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (4, 1)$ 與 $\\vec{v} = (2, 3)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 為多少？",
    options: ["11（$4(2) + 1(3) = 8 + 3 = 11$）", "14", "8", "5"],
    answer: 0,
    explanation: "$\\vec{u} \\cdot \\vec{v} = 4(2) + 1(3) = 8 + 3 = 11$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，點 $P(3, 4, 5)$ 到 $z$ 軸的垂直距離為多少？",
    options: ["5（公式 $\\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$）", "3", "4", "$\\sqrt{50}$"],
    answer: 0,
    explanation: "點到 $z$ 軸距離公式：$d = \\sqrt{x^2 + y^2} = \\sqrt{9 + 16} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式：$\\begin{vmatrix} 8 & 3 \\\\ 2 & 1 \\end{vmatrix}$ 之值為何？",
    options: ["2（$8 \\times 1 - 3 \\times 2 = 8 - 6 = 2$）", "14", "8", "0"],
    answer: 0,
    explanation: "$8(1) - 3(2) = 8 - 6 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^9_2$ 之值為何？",
    options: ["36（$\\frac{9 \\times 8}{2 \\times 1} = 36$）", "72", "18", "81"],
    answer: 0,
    explanation: "$C^9_2 = \\frac{9 \\times 8}{2 \\times 1} = 36$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "丟擲一顆公正的六面骰子，出現點數為「質數（2, 3, 5）」的機率為何？",
    options: ["1/2（3/6 = 1/2）", "1/3", "1/6", "2/3"],
    answer: 0,
    explanation: "質數點數為 2, 3, 5 共 3 種，機率為 $\\frac{3}{6} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的漸近線方程式為？",
    options: ["$y = \\pm \\frac{3}{4} x$（公式 $y = \\pm \\frac{b}{a} x$）", "$y = \\pm \\frac{4}{3} x$", "$y = \\pm x$", "$y = \\pm \\frac{9}{16} x$"],
    answer: 0,
    explanation: "雙曲線漸近線：令右端為 0 得 $\\frac{x^2}{16} - \\frac{y^2}{9} = 0 \\implies y = \\pm \\frac{3}{4} x$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 4x^3$ 的導函數 $f'(x)$ 為何？",
    options: ["$12x^2$", "$4x^2$", "$12x^3$", "$3x^2$"],
    answer: 0,
    explanation: "$f'(x) = 4(3x^2) = 12x^2$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數：$| -15 | - | -6 |$ 之結果為何？",
    options: ["9（$15 - 6 = 9$）", "21", "-21", "-9"],
    answer: 0,
    explanation: "$|-15| - |-6| = 15 - 6 = 9$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^4$ 在 $x = 1$ 處的切線斜率為何？",
    options: ["4（導函數 $f'(x) = 4x^3 \\implies f'(1) = 4(1)^3 = 4$）", "1", "3", "12"],
    answer: 0,
    explanation: "$f'(x) = 4x^3 \\implies f'(1) = 4$。",
    difficulty: "基礎"
  }
];

batch17.forEach((q, idx) => {
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

console.log(`New Math A count after batch 17: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
