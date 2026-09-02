const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 15: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch15 = [
  {
    category: "數與式",
    question: "在實數不等式中，絕對值三角不等式指出：對於任意兩實數 $a$ 與 $b$，恆有 $|a + b| \\le |a| + |b|$。該不等式等號成立（即 $|a + b| = |a| + |b|$）的「充分必要條件」為？",
    options: ["「兩數同號或至少一數為 0（即 $a b \\ge 0$）」", "$a = b$", "$a > 0$ 且 $b < 0$", "$a + b = 0$"],
    answer: 0,
    explanation: "絕對值三角不等式等號條件：平方展開 $(a+b)^2 = a^2 + 2ab + b^2$ 與 $(|a|+|b|)^2 = a^2 + 2|ab| + b^2$。兩者相等當且僅當 $ab = |ab| \\iff ab \\ge 0$（同號或有零）。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次實係數多項式函數 $f(x) = ax^3 + bx^2 + cx + d$（$a \\ne 0$）的圖形必具有點對稱幾何性質。其「對稱中心（反曲點）」的橫坐標 $x$ 精確公式為？",
    options: ["$x = -\\frac{b}{3a}$（由二階導函數 $f''(x) = 6ax + 2b = 0$ 求得）", "$x = -\\frac{b}{2a}$（此為二次函數頂點坐標）", "$x = -\\frac{c}{3a}$", "$x = 0$"],
    answer: 0,
    explanation: "三次函數對稱中心：求二階導數為零點 $f''(x) = 6ax + 2b = 0 \\implies x = -\\frac{2b}{6a} = -\\frac{b}{3a}$，三次曲線必以此點為幾何中心點對稱。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解對數方程式：$\\log_2(x - 1) + \\log_2(x + 1) = 3$。在確保真數大於 0 的嚴格定義域限制下，該方程式的「唯一實數解」為？",
    options: ["$x = 3$（真數條件 $x > 1$；合併 $\\log_2(x^2 - 1) = 3 \\implies x^2 - 1 = 2^3 = 8 \\implies x^2 = 9 \\implies x = 3$，負根 $x = -3$ 不合捨去）", "$x = 3$ 或 $x = -3$", "$x = 9$", "$x = 4$"],
    answer: 0,
    explanation: "大考對數陷阱（真數必為正）：$x - 1 > 0$ 且 $x + 1 > 0 \\implies x > 1$。$\\log_2(x^2 - 1) = 3 \\implies x^2 - 1 = 8 \\implies x^2 = 9$。因 $x > 1$，唯一正解為 $x = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "利用二倍角公式 $\\cos 2\\theta = 2\\cos^2\\theta - 1$，若銳角 $\\theta$ 滿足 $\\cos\\theta = 4/5$。求 $\\cos 2\\theta$ 之數值為何？",
    options: ["7/25（$2(4/5)^2 - 1 = 2(16/25) - 1 = \\frac{32}{25} - 1 = \\frac{7}{25}$）", "24/25", "16/25", "1/5"],
    answer: 0,
    explanation: "二倍角餘弦公式：$\\cos 2\\theta = 2\\cos^2\\theta - 1 = 2(16/25) - 1 = 32/25 - 25/25 = 7/25$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "在平面向量代數中，柯西不等式（Cauchy-Schwarz Inequality）指出：對於任意實數 $x_1, x_2, y_1, y_2$，恆有 $(x_1^2 + x_2^2)(y_1^2 + y_2^2) \\ge (x_1 y_1 + x_2 y_2)^2$ 成立。該不等式等號成立的充要條件為？",
    options: ["向量 $(x_1, x_2)$ 與向量 $(y_1, y_2)$「平行（分量成比例：$x_1 y_2 = x_2 y_1$）」", "兩向量垂直", "兩向量模長相等", "$x_1 + x_2 = y_1 + y_2$"],
    answer: 0,
    explanation: "柯西幾何意義：$|\\vec{u}|^2 |\\vec{v}|^2 \\ge (\\vec{u} \\cdot \\vec{v})^2 = |\\vec{u}|^2 |\\vec{v}|^2 \\cos^2\\theta$。等號成立當且僅當 $\\cos^2\\theta = 1 \\iff \\theta = 0^\\circ$ 或 $180^\\circ$（兩向量共線平行）。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "空間中兩條互不平行且不相交的「歪斜直線 $L_1$ 與 $L_2$」，其方向向量分別為 $\\vec{v}_1$ 與 $\\vec{v}_2$。要找到同時垂直於這兩條歪斜線的「公垂向量 $\\vec{n}$」，在向量運算上最直接的計算法為？",
    options: ["計算兩方向向量的外積：$\\vec{n} = \\vec{v}_1 \\times \\vec{v}_2$", "計算兩向量的內積", "將兩向量相加", "計算兩向量長度乘積"],
    answer: 0,
    explanation: "外積垂直性質：外積向量 $\\vec{v}_1 \\times \\vec{v}_2$ 同時垂直於 $\\vec{v}_1$ 與 $\\vec{v}_2$，故直接作為兩歪斜直線的公垂向量，進而利用投影求得兩歪斜線間最短公垂距離。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，平面 $E_1: x + y = 0$ 的法向量為 $\\vec{n}_1 = (1, 1, 0)$，平面 $E_2: y + z = 0$ 的法向量為 $\\vec{n}_2 = (0, 1, 1)$。這兩平面法向量夾角的餘弦值絕對值 $|\\cos\\theta|$（即兩平面銳夾角之餘弦值）為？",
    options: ["1/2（$|\\cos\\theta| = \\frac{|(1,1,0) \\cdot (0,1,1)|}{\\sqrt{1^2+1^2+0} \\sqrt{0+1^2+1^2}} = \\frac{1}{\\sqrt{2} \\sqrt{2}} = \\frac{1}{2} \\implies \\theta = 60^\\circ$）", "$\\sqrt{3}/2$", "$\\sqrt{2}/2$", "1"],
    answer: 0,
    explanation: "面面夾角公式：$\\cos\\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{|\\vec{n}_1| |\\vec{n}_2|} = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$。兩平面夾角為 60°。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "在平面線性變換中，將平面上所有點繞坐標原點依逆時針方向旋轉角度 $\\theta$ 的「旋轉矩陣 $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$」。該旋轉矩陣的「行列式值 $\\det(R_\\theta)$」恆等於？",
    options: ["1（$\\det(R_\\theta) = \\cos^2\\theta - (-\\sin^2\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$，保面積、保長度、保角度之正交變換）", "0", "-1", "隨旋轉角度 $\\theta$ 改變"],
    answer: 0,
    explanation: "旋轉矩陣基本性質：$\\det(R_\\theta) = \\cos^2\\theta + \\sin^2\\theta = 1$。行列式為 1 代表剛體旋轉變換前後幾何圖形面積絕對不變，且旋轉矩陣之逆矩陣為順時針旋轉 $R_{-\\theta} = R_\\theta^T$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "利用二項式定理 $(a + b)^4 = \\sum_{k=0}^4 C^4_k a^{4-k} b^k$，求二項式 $(x + 2)^4$ 展開式中「$x^3$ 項的係數」為何？",
    options: ["8（項為 $C^4_1 x^3 (2)^1 = 4 \\times x^3 \\times 2 = 8x^3$）", "4", "16", "24"],
    answer: 0,
    explanation: "$x^3$ 項為 $C^4_1 x^3 (2)^1 = 4 \\times 2 \\times x^3 = 8x^3$，係數為 8。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "在統計學中，若隨機變數 $X$ 服從常態分佈 $N(\\mu, \\sigma^2)$。依據著名常態分佈經驗法則（68-95-99.7 法則），數據落在平均數正負一個標準差區間 $[\\mu - \\sigma, \\mu + \\sigma]$ 內的機率約為多少？",
    options: ["約 68.3%（約 68%）", "約 95.4%", "約 99.7%", "約 50.0%"],
    answer: 0,
    explanation: "常態分佈 3-Sigma 經驗法則：$\\pm 1\\sigma$ 涵蓋約 68.3%；$\\pm 2\\sigma$ 涵蓋約 95.4%；$\\pm 3\\sigma$ 涵蓋約 99.7%。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "標準拋物線方程式 $y^2 = 8x$（標準式 $y^2 = 4cx$，其中 $c = 2$ 為頂點到焦點距離）。該拋物線通過焦點且垂直於對稱軸的「正焦弦長度（Latus Rectum）」為多少？",
    options: ["8（正焦弦長公式為 $4c = 8$）", "4", "2", "16"],
    answer: 0,
    explanation: "拋物線正焦弦長幾何公式：長度為 $4c = 8$（焦點在 $(2, 0)$，令 $x = 2$ 代入得 $y^2 = 16 \\implies y = \\pm 4$，正焦弦端點 $(2, 4)$ 與 $(2, -4)$ 距離為 8）。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^3 - 6x^2 + 9x$ 在哪個點具有「相對極大值（局部極大值）」？",
    options: ["在 $x = 1$ 處有極大值 4（$f'(x) = 3(x-1)(x-3) = 0 \\implies x=1$ 處一階導數由正變負）", "在 $x = 3$ 處（此處為極小值 0）", "在 $x = 0$ 處", "在 $x = 2$ 處"],
    answer: 0,
    explanation: "$f'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$。當 $x = 1$ 時一階導函數由正變負，函數由增轉減，故在 $x = 1$ 處有局部極大值 $f(1) = 1 - 6 + 9 = 4$。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "計算實數代數運算：$(\\sqrt{5} + 2)(\\sqrt{5} - 2)$ 之結果為何？",
    options: ["1（$(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$）", "3", "9", "0"],
    answer: 0,
    explanation: "平方差公式：$(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 - 9$ 完全因式分解後的結果為？",
    options: ["$(x - 3)(x + 3)$", "$(x - 3)^2$", "$(x + 3)^2$", "$x(x - 9)$"],
    answer: 0,
    explanation: "平方差公式 $x^2 - 3^2 = (x - 3)(x + 3)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算對數值：$\\log_5 125$ 之數值為何？",
    options: ["3（因 $5^3 = 125$）", "25", "5", "1"],
    answer: 0,
    explanation: "$125 = 5^3 \\implies \\log_5(5^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 0^\\circ$ 的正弦值 $\\sin 0^\\circ$ 為何？",
    options: ["0", "1", "-1", "不存在"],
    answer: 0,
    explanation: "$\\sin 0^\\circ = 0$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (3, 4)$，求其向量長度（模長）$|\\vec{u}|$ 為多少？",
    options: ["5（$\\sqrt{3^2 + 4^2} = \\sqrt{25} = 5$）", "7", "25", "1"],
    answer: 0,
    explanation: "$|\\vec{u}| = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，坐標原點 $(0, 0, 0)$ 到平面 $E: 2x + 2y - z = 6$ 的垂直距離為？",
    options: ["2（公式：$d = \\frac{|2(0)+2(0)-1(0)-6|}{\\sqrt{2^2+2^2+(-1)^2}} = \\frac{6}{\\sqrt{9}} = \\frac{6}{3} = 2$）", "6", "3", "1"],
    answer: 0,
    explanation: "點到平面距離公式：$d = \\frac{|-6|}{\\sqrt{4+4+1}} = \\frac{6}{3} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式：$\\begin{vmatrix} 6 & 2 \\\\ 3 & 2 \\end{vmatrix}$ 之值為何？",
    options: ["6（$6 \\times 2 - 2 \\times 3 = 12 - 6 = 6$）", "12", "0", "18"],
    answer: 0,
    explanation: "$6(2) - 2(3) = 12 - 6 = 6$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^6_2$ 之值為何？",
    options: ["15（$\\frac{6 \\times 5}{2 \\times 1} = 15$）", "30", "12", "6"],
    answer: 0,
    explanation: "$C^6_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "丟擲一顆均勻的六面骰子，出現點數為「偶數（2, 4, 6）」的機率為何？",
    options: ["1/2（3/6 = 1/2）", "1/3", "1/6", "2/3"],
    answer: 0,
    explanation: "偶數點數共 3 種，機率為 $\\frac{3}{6} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的長軸長度 $2a$ 為多少？",
    options: ["10（$a^2 = 25 \\implies a = 5 \\implies 2a = 10$）", "5", "8", "4"],
    answer: 0,
    explanation: "$a = \\sqrt{25} = 5$，長軸長度為 $2a = 10$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求常數函數 $f(x) = 10$ 的導函數 $f'(x)$ 為何？",
    options: ["0（常數函數的導數恆為 0）", "10", "1", "$10x$"],
    answer: 0,
    explanation: "常數無任何變化率，導函數恆為 0：$f'(x) = 0$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數：$| -12 | + | 5 |$ 之結果為何？",
    options: ["17（$12 + 5 = 17$）", "7", "-7", "-17"],
    answer: 0,
    explanation: "$|-12| + |5| = 12 + 5 = 17$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "若多項式 $f(x) = x^2 - 4x + 4$，求代數方程 $f(x) = 0$ 的重根為何？",
    options: ["$x = 2$（重根，$(x - 2)^2 = 0$）", "$x = -2$", "$x = 4$", "$x = 0$"],
    answer: 0,
    explanation: "$(x - 2)^2 = 0 \\implies x = 2$（二重根）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $25^{1/2}$ 之數值為何？",
    options: ["5（即 $\\sqrt{25} = 5$）", "25", "12.5", "1"],
    answer: 0,
    explanation: "$25^{1/2} = \\sqrt{25} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 0^\\circ$ 的餘弦值 $\\cos 0^\\circ$ 為何？",
    options: ["1", "0", "-1", "1/2"],
    answer: 0,
    explanation: "$\\cos 0^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (5, 0)$，求其單位向量 $\\hat{u}$ 為？",
    options: ["(1, 0)", "(5, 0)", "(0, 1)", "(-1, 0)"],
    answer: 0,
    explanation: "單位向量 $\\hat{u} = \\frac{\\vec{u}}{|\\vec{u}|} = \\frac{(5, 0)}{5} = (1, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，$z$ 軸上所有點的坐標方程式特徵為？",
    options: ["$x = 0$ 且 $y = 0$", "$z = 0$", "$x + y = 0$", "$x = y = z$"],
    answer: 0,
    explanation: "$z$ 軸方程式為聯立方程 $x = 0$ 且 $y = 0$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^3$ 在 $x = 2$ 處的切線斜率為何？",
    options: ["12（導函數 $f'(x) = 3x^2 \\implies f'(2) = 3(4) = 12$）", "8", "6", "4"],
    answer: 0,
    explanation: "$f'(x) = 3x^2 \\implies f'(2) = 3(2^2) = 12$。",
    difficulty: "基礎"
  }
];

batch15.forEach((q, idx) => {
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

console.log(`New Math A count after batch 15: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
