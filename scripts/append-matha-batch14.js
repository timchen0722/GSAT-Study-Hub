const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 14: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch14 = [
  {
    category: "數與式",
    question: "利用雙重根號減法化簡公式 $\\sqrt{a + b - 2\\sqrt{ab}} = \\sqrt{a} - \\sqrt{b}$（其中 $a > b > 0$），化簡 $\\sqrt{8 - 2\\sqrt{15}}$ 之最簡結果為何？",
    options: ["$\\sqrt{5} - \\sqrt{3}$（因 $5 + 3 = 8$ 且 $5 \\times 3 = 15$）", "$\\sqrt{6} - \\sqrt{2}$", "$\\sqrt{5} + \\sqrt{3}$", "2"],
    answer: 0,
    explanation: "找兩數和為 8 且乘積為 15，得 5 與 3。$\\sqrt{8 - 2\\sqrt{15}} = \\sqrt{(\\sqrt{5} - \\sqrt{3})^2} = \\sqrt{5} - \\sqrt{3}$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次多項式函數 $f(x) = x^3 - 3x^2 + 4$ 的圖形在反曲點處的「二階導函數值 $f''(x)$」精確等於？",
    options: ["0（一階導函數 $f'(x) = 3x^2 - 6x$，二階導函數 $f''(x) = 6x - 6 = 0 \\implies x = 1$）", "6", "-6", "3"],
    answer: 0,
    explanation: "三次多項式圖形對稱中心（反曲點）處，凹向改變，其二階導數必等於 0：$f''(x) = 6x - 6 = 0 \\implies x = 1$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 2 \\approx 0.3010, \\log_{10} 3 \\approx 0.4771$。求常用對數值 $\\log_{10} 1.5$ 之數值約為多少？",
    options: ["0.1761（$\\log_{10}(3/2) = \\log_{10} 3 - \\log_{10} 2 = 0.4771 - 0.3010 = 0.1761$）", "0.7781", "0.1500", "0.3229"],
    answer: 0,
    explanation: "對數除法相減公式：$\\log_{10} 1.5 = \\log_{10}(3/2) = \\log_{10} 3 - \\log_{10} 2 = 0.4771 - 0.3010 = 0.1761$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知兩銳角 $\\alpha$ 與 $\\beta$ 分別滿足 $\\tan\\alpha = 1/2, \\tan\\beta = 1/3$。利用正切和角公式 $\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta}$ 計算，角 $\\alpha + \\beta$ 的度數為多少？",
    options: ["$45^\\circ$（$\\tan(\\alpha + \\beta) = \\frac{1/2 + 1/3}{1 - (1/2)(1/3)} = \\frac{5/6}{5/6} = 1 \\implies \\alpha + \\beta = 45^\\circ$）", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"],
    answer: 0,
    explanation: "經典三角和角：$\\tan(\\alpha + \\beta) = \\frac{5/6}{1 - 1/6} = \\frac{5/6}{5/6} = 1$。因 $\\alpha, \\beta$ 皆為銳角且正切和為 1，故 $\\alpha + \\beta = 45^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "在平面直角坐標系中，由坐標原點 $O(0, 0)$ 與兩點 $A(x_1, y_1), B(x_2, y_2)$ 所圍成的 $\\Delta OAB$ 之「幾何面積公式」為？",
    options: ["$\\frac{1}{2} |x_1 y_2 - x_2 y_1|$（即由向量 $\\vec{OA}$ 與 $\\vec{OB}$ 所組成的二階行列式絕對值之一半）", "$|x_1 y_2 - x_2 y_1|$", "$\\frac{1}{2} (x_1 x_2 + y_1 y_2)$", "$\\frac{1}{2} \\sqrt{x_1^2 + y_1^2} \\sqrt{x_2^2 + y_2^2}$"],
    answer: 0,
    explanation: "三角形向量面積公式：$\\text{Area} = \\frac{1}{2} |\\det(\\vec{OA}, \\vec{OB})| = \\frac{1}{2} |x_1 y_2 - x_2 y_1|$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "在三維空間向量代數中，關於空間向量外積（Cross Product）的代數運算性質，下列敘述何者完全正確？",
    options: ["外積滿足「反交換律（Anti-commutative）」：$\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$", "外積滿足交換律 $\\vec{u} \\times \\vec{v} = \\vec{v} \\times \\vec{u}$", "兩相同向量的外積等於模長的平方", "外積的結果為一個純量數值"],
    answer: 0,
    explanation: "由右手定則：將 $\\vec{u}$ 轉向 $\\vec{v}$ 的大拇指朝向，與由 $\\vec{v}$ 轉向 $\\vec{u}$ 的大拇指朝向剛好相反，故 $\\vec{u} \\times \\vec{v} = -(\\vec{v} \\times \\vec{u})$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中一個半徑為 $R = 5$ 的球體，被一個與球心距離為 $d = 3$ 的平面所截。該平面在球體表面所截出的「圓形截面半徑 $r$」為多少？",
    options: ["4（畢氏定理直角三角形：$r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = 4$）", "2", "3", "$\\sqrt{34}$"],
    answer: 0,
    explanation: "球心、截面圓心與截面上任一點構成直角三角形：斜邊為球半徑 $R$，一股為球心到平面距離 $d$，另一股即為截面圓半徑 $r = \\sqrt{R^2 - d^2} = \\sqrt{25 - 9} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "求二階方陣 $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 5 \\end{pmatrix}$ 的「特徵值（Eigenvalues，滿足特徵多項式 $\\det(\\lambda I - A) = 0$）」為？",
    options: ["$\\lambda = 2$ 與 $\\lambda = 5$（對角方陣的特徵值即為其主對角線上的元素）", "$\\lambda = 0$ 與 $\\lambda = 7$", "$\\lambda = 10$", "$\\lambda = 3$ 與 $\\lambda = 7$"],
    answer: 0,
    explanation: "特徵多項式 $\\det \\begin{pmatrix} \\lambda - 2 & 0 \\\\ 0 & \\lambda - 5 \\end{pmatrix} = (\\lambda - 2)(\\lambda - 5) = 0 \\implies \\lambda = 2, 5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 7 顆完全相同的蘋果分給甲、乙、丙 3 位小朋友，若規定「每位小朋友至少都要分到 1 顆蘋果（正整數解）」。共有多少種不同的分配方法？",
    options: ["15 種（先每人發 1 顆剩 4 顆分給 3 人：$H^3_4 = C^{3+4-1}_4 = C^6_4 = C^6_2 = 15$）", "36 種", "21 種", "28 種"],
    answer: 0,
    explanation: "正整數解隔板法或代換法：令 $x' = x-1, y' = y-1, z' = z-1$，則 $x' + y' + z' = 4$，重複組合 $H^3_4 = C^6_4 = 15$ 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "若隨機變數 $X$ 與 $Y$ 為「相互獨立」的隨機變數，已知 $\\text{Var}(X) = 3, \\text{Var}(Y) = 4$。則隨機變數和 $(X + Y)$ 的「變異數 $\\text{Var}(X + Y)$」為多少？",
    options: ["7（獨立變數變異數具可加性：$\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) = 3 + 4 = 7$）", "1", "12", "25"],
    answer: 0,
    explanation: "變異數運算性質：當兩變數相互獨立時協方差 $\\text{Cov}(X, Y) = 0$，故 $\\text{Var}(X + Y) = \\text{Var}(X) + \\text{Var}(Y) = 3 + 4 = 7$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的兩條「漸近線（Asymptotes）方程式」為？",
    options: ["$y = \\pm \\frac{3}{4} x$（令常數項為 0：$\\frac{x^2}{16} - \\frac{y^2}{9} = 0 \\implies y^2 = \\frac{9}{16} x^2 \\implies y = \\pm \\frac{3}{4} x$）", "$y = \\pm \\frac{4}{3} x$", "$y = \\pm \\frac{9}{16} x$", "$x = \\pm 4$"],
    answer: 0,
    explanation: "雙曲線漸近線求解訣竅：將標準式等號右側常數改為 0，因式分解 $(\\frac{x}{4} - \\frac{y}{3})(\\frac{x}{4} + \\frac{y}{3}) = 0 \\implies y = \\pm \\frac{3}{4} x$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "三次多項式函數 $f(x) = x^3 - 3x^2 + 2$ 在區間 $(-\\infty, 1)$ 上的圖形「凹向」為？",
    options: ["「凹口向下」（因二階導函數 $f''(x) = 6x - 6 < 0$）", "凹口向上", "水平直線", "不存在凹向"],
    answer: 0,
    explanation: "二階導數判別凹向：$f'(x) = 3x^2 - 6x \\implies f''(x) = 6(x - 1)$。當 $x < 1$ 時，$f''(x) < 0$，切線在曲面上方，圖形凹口向下。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "計算實數運算：$(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3})$ 之結果為何？",
    options: ["4（平方差公式：$(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$）", "10", "2", "$\\sqrt{21}$"],
    answer: 0,
    explanation: "$(\\sqrt{7})^2 - (\\sqrt{3})^2 = 7 - 3 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^3 + 1$ 可利用立方和公式因式分解為？",
    options: ["$(x + 1)(x^2 - x + 1)$", "$(x + 1)^3$", "$(x + 1)(x^2 + x + 1)$", "$(x - 1)(x^2 + x + 1)$"],
    answer: 0,
    explanation: "$a^3 + b^3 = (a + b)(a^2 - ab + b^2) \\implies x^3 + 1 = (x + 1)(x^2 - x + 1)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算對數值：$\\log_3 27$ 之數值為何？",
    options: ["3（因 $3^3 = 27$）", "9", "1", "27"],
    answer: 0,
    explanation: "$27 = 3^3 \\implies \\log_3(3^3) = 3$。",
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
    question: "已知兩向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (4, 6)$。這兩向量的幾何關係為？",
    options: ["互相平行且同向（$\\vec{v} = 2\\vec{u}$）", "互相垂直", "長度相等", "夾角為 90 度"],
    answer: 0,
    explanation: "分量成比例 $\\frac{4}{2} = \\frac{6}{3} = 2 > 0$，故兩向量互相平行且同向。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，點 $P(4, 5, 6)$ 到 $z$ 軸的垂直正射影點坐標為？",
    options: ["(0, 0, 6)", "(4, 5, 0)", "(4, 0, 0)", "(0, 5, 0)"],
    answer: 0,
    explanation: "投影至 $z$ 軸將橫坐標與縱坐標置 0，保留豎坐標，坐標為 $(0, 0, 6)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式 $\\begin{vmatrix} 4 & 2 \\\\ 1 & 3 \\end{vmatrix}$ 之值為何？",
    options: ["10（$4 \\times 3 - 2 \\times 1 = 12 - 2 = 10$）", "14", "8", "6"],
    answer: 0,
    explanation: "$4(3) - 2(1) = 12 - 2 = 10$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^5_1$ 之值為何？",
    options: ["5", "1", "10", "20"],
    answer: 0,
    explanation: "$C^5_1 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "投擲一枚公正的骰子，出現的點數為「質數（2, 3, 5）」的機率為何？",
    options: ["1/2（3/6 = 1/2）", "1/3", "1/6", "2/3"],
    answer: 0,
    explanation: "質數點數有 2, 3, 5 共 3 個，機率為 $\\frac{3}{6} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$ 的焦點位於哪一條坐標軸上？",
    options: ["$x$ 軸上（因 $x^2$ 前為正號，貫軸在 $x$ 軸上）", "$y$ 軸上", "直線 $y = x$ 上", "不存在焦點"],
    answer: 0,
    explanation: "雙曲線正號項決定開口方向：$x^2$ 為正號代表貫軸在 $x$ 軸上，兩焦點位於 $(\\pm c, 0)$ 處。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 4x^3$ 的導函數 $f'(x)$ 為何？",
    options: ["$12x^2$", "$4x^2$", "$12x$", "$x^2$"],
    answer: 0,
    explanation: "$f'(x) = 4(3x^2) = 12x^2$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算絕對值方程式 $|x| = 5$ 的所有實數解為？",
    options: ["$x = 5$ 或 $x = -5$", "只有 $x = 5$", "只有 $x = -5$", "無解"],
    answer: 0,
    explanation: "絕對值定義到原點距離為 5 的點有 $x = \\pm 5$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "二次多項式 $f(x) = x^2 - 1$ 與 $x$ 軸相交的兩交點坐標為？",
    options: ["(1, 0) 與 (-1, 0)", "(0, 1) 與 (0, -1)", "(0, 0)", "(2, 0) 與 (-2, 0)"],
    answer: 0,
    explanation: "$x^2 - 1 = 0 \\implies x = \\pm 1$，故交點為 $(1, 0)$ 與 $(-1, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $16^{1/4}$ 之數值為何？",
    options: ["2（因 $2^4 = 16$）", "4", "1", "8"],
    answer: 0,
    explanation: "$16^{1/4} = (2^4)^{1/4} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 60^\\circ$ 的正弦值 $\\sin 60^\\circ$ 為何？",
    options: ["$\\frac{\\sqrt{3}}{2}$", "$1/2$", "$\\frac{\\sqrt{2}}{2}$", "1"],
    answer: 0,
    explanation: "$\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (1, 3)$ 與 $\\vec{v} = (3, -1)$，計算其內積 $\\vec{u} \\cdot \\vec{v}$ 為何？",
    options: ["0（$1(3) + 3(-1) = 3 - 3 = 0$）", "6", "10", "-3"],
    answer: 0,
    explanation: "$\\vec{u} \\cdot \\vec{v} = 1(3) + 3(-1) = 0$（兩向量互相垂直）。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，過點 $P(1, 2, 3)$ 且平行於 $z$ 軸的直線方程式為？",
    options: ["$x = 1$ 且 $y = 2$", "$z = 3$", "$x + y = 3$", "$x = 0$"],
    answer: 0,
    explanation: "平行於 $z$ 軸的直線橫坐標與縱坐標恆為常數：$x = 1$ 且 $y = 2$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 6x$ 在 $x = 3$ 處的切線斜率為何？",
    options: ["6（常數斜率導函數 $f'(x) = 6$）", "3", "18", "0"],
    answer: 0,
    explanation: "一次函數導數為其斜率：$f'(x) = 6$。",
    difficulty: "基礎"
  }
];

batch14.forEach((q, idx) => {
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

console.log(`New Math A count after batch 14: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
