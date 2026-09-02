const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 4: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch4 = [
  {
    category: "數與式",
    question: "設 $x, y$ 皆為正實數，且滿足 $2x + 3y = 12$。由算幾不等式求 $x y$ 的最大值為何？",
    options: ["6", "12", "3", "4"],
    answer: 0,
    explanation: "因為 $2x, 3y > 0$，由算幾不等式：$\\frac{2x + 3y}{2} \\ge \\sqrt{2x \\times 3y} = \\sqrt{6xy}$。代入 $2x+3y=12$ 得 $\\frac{12}{2} = 6 \\ge \\sqrt{6xy} \\implies 36 \\ge 6xy \\implies xy \\le 6$。當 $2x = 3y = 6$（即 $x = 3, y = 2$）時等號成立，最大值為 6。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次多項式函數 $f(x)$ 具有相對極大值點 $A(1, 8)$ 與相對極小值點 $B(5, -4)$。則該三次函數圖形的對稱中心（反曲點）坐標為何？",
    options: ["(3, 2)", "(3, 4)", "(2, 2)", "(4, 2)"],
    answer: 0,
    explanation: "三次多項式圖形幾何定理：三次函數圖形對於其反曲點（對稱中心）呈中心點對稱，其相對極大值點與相對極小值點的連線中點，必恰為對稱中心。中點為 $\\left(\\frac{1+5}{2}, \\frac{8+(-4)}{2}\\right) = (3, 2)$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次多項式 $P(x)$ 滿足 $P(1) = P(2) = P(3) = 0$，且 $P(0) = -12$。則 $P(4)$ 之值為何？",
    options: ["12", "24", "6", "-12"],
    answer: 0,
    explanation: "由因式定理，$P(x) = a(x - 1)(x - 2)(x - 3)$。代入 $x = 0$ 得 $P(0) = a(-1)(-2)(-3) = -6a = -12 \\implies a = 2$。因此 $P(4) = 2(4 - 1)(4 - 2)(4 - 3) = 2(3)(2)(1) = 12$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解對數方程式 $\\log_2(x) + \\log_2(x - 2) = 3$，求實數解 $x$ 為何？",
    options: ["4", "-2", "4 或 -2", "3"],
    answer: 0,
    explanation: "對數合併：$\\log_2(x(x - 2)) = 3 \\implies x(x - 2) = 2^3 = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0$。由真數條件 $x > 0$ 且 $x - 2 > 0 \\implies x > 2$。負根 $x = -2$ 不合，唯有 $x = 4$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "設 $a = \\log_3 2$。以 $a$ 表示 $\\log_9 8$ 之結果為何？",
    options: ["$\\frac{3}{2} a$", "$3a$", "$2a$", "$\\frac{2}{3} a$"],
    answer: 0,
    explanation: "利用對數次方的底數與真數公式：$\\log_{b^n}(x^m) = \\frac{m}{n}\\log_b x$。$\\log_9 8 = \\log_{3^2}(2^3) = \\frac{3}{2}\\log_3 2 = \\frac{3}{2} a$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在微積分與三角極限中，當角 $x$ 以「弧度（Radian）」為單位時，極限 $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ 的精確數值為何？",
    options: ["1", "0", "$\\pi/180$", "不存在"],
    answer: 0,
    explanation: "夾擠定理（Squeeze Theorem）：在單位圓中面積比較 $\\sin x < x < \\tan x \\implies \\cos x < \\frac{\\sin x}{x} < 1$。當 $x \\to 0$ 時 $\\cos x \\to 1$，故極限精確為 1（必須以弧度制為前提）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，三邊長分別為 $a = 3, b = 5, c = 7$。由餘弦定理求最大內角 $\\angle C$ 的度數為何？",
    options: ["120°", "150°", "135°", "90°"],
    answer: 0,
    explanation: "餘弦定理：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{9 + 25 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2}$。因為 $\\cos 120^\\circ = -\\frac{1}{2}$，故 $\\angle C = 120^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "平面上兩向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (4, -1)$ 所張開的平行四邊形面積為多少？",
    options: ["14", "10", "12", "7"],
    answer: 0,
    explanation: "二階行列式面積公式：$A = |\\det(\\vec{u}, \\vec{v})| = |2(-1) - 3(4)| = |-2 - 12| = |-14| = 14$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "已知空間向量 $\\vec{a} = (1, 0, 2)$ 與 $\\vec{b} = (0, 3, 1)$。計算其外積 $\\vec{a} \\times \\vec{b}$ 的坐標表示為何？",
    options: ["(-6, -1, 3)", "(6, 1, -3)", "(-6, 1, 3)", "(2, -1, 3)"],
    answer: 0,
    explanation: "外積行列式展開：$\\left(\\begin{vmatrix} 0 & 2 \\\\ 3 & 1 \\end{vmatrix}, -\\begin{vmatrix} 1 & 2 \\\\ 0 & 1 \\end{vmatrix}, \\begin{vmatrix} 1 & 0 \\\\ 0 & 3 \\end{vmatrix}\\right) = (0 - 6, -(1 - 0), 3 - 0) = (-6, -1, 3)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中兩平行平面 $E_1: 2x - y + 2z = 4$ 與 $E_2: 2x - y + 2z = 13$ 之間的垂直距離為何？",
    options: ["3", "9", "1", "$\\sqrt{3}$"],
    answer: 0,
    explanation: "兩平行平面間距離公式：$d = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|4 - 13|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|-9|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "逆時針旋轉 $90^\\circ$ 的二階旋轉矩陣 $R_{90^\\circ}$ 為何？",
    options: ["$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"],
    answer: 0,
    explanation: "旋轉矩陣公式 $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$。代入 $\\theta = 90^\\circ$（$\\cos 90^\\circ = 0, \\sin 90^\\circ = 1$），得 $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "四封寫給不同收件人的信件，隨機放入四個寫好不同收件地址的信封中（每封一信）。恰好「四封信全部都裝錯信封（錯位排列）」的方法數共有多少種？",
    options: ["9 種", "24 種", "12 種", "6 種"],
    answer: 0,
    explanation: "錯位排列數公式：$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$。由遞迴式 $D_n = (n-1)(D_{n-1} + D_{n-2})$，代入 $n=4$ 得 $D_4 = 3(2 + 1) = 9$ 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "某罕見疾病在人群中的患病率為 1%。現有一檢驗試劑，其檢驗「真陽性率（靈敏度）」為 90%、「偽陽性率（誤診率）」為 5%。若某人受檢結果呈現「陽性」，利用貝氏定理計算該受檢者「真正患病」的事後機率約為？",
    options: ["約 15.4%（低於 20%，因為罕見疾病基礎先驗機率極低）", "90%", "95%", "50%"],
    answer: 0,
    explanation: "貝氏定理：$P(\\text{病}|+) = \\frac{P(+)P(+|\\text{病})}{P(+)P(+|\\text{病}) + P(\\text{無病})P(+|\\text{無病})} = \\frac{0.01 \\times 0.90}{0.01 \\times 0.90 + 0.99 \\times 0.05} = \\frac{0.009}{0.009 + 0.0495} = \\frac{0.009}{0.0585} \\approx 15.4\\%$。",
    difficulty: "進階"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的焦點坐標與離心率 $e$ 分別為何？",
    options: ["焦點 $(\\pm 3, 0)$，離心率 $e = 3/5$", "焦點 $(0, \\pm 3)$，離心率 $e = 3/5$", "焦點 $(\\pm 3, 0)$，離心率 $e = 4/5$", "焦點 $(\\pm 5, 0)$，離心率 $e = 1$"],
    answer: 0,
    explanation: "$a^2 = 25 \\implies a = 5$；$b^2 = 16 \\implies b = 4$。半焦距 $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 16} = 3$。焦點在 $x$ 軸上為 $(\\pm 3, 0)$。離心率 $e = \\frac{c}{a} = \\frac{3}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "已知函數 $f(x) = x^3 - 3x^2$。若其二階導數滿足 $f''(x) > 0$，則該函數圖形呈現何種幾何凹凸特徵？",
    options: ["凹口向上（下凸，Convex）", "凹口向下（上凸，Concave）", "嚴格遞減", "切線斜率恆為負"],
    answer: 0,
    explanation: "微積分二階導數檢驗：$f''(x) > 0$ 表示切線斜率 $f'(x)$ 單調遞增，圖形曲線位於切線上方，凹口向上（下凸）；$f''(x) < 0$ 則凹口向下。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "多項式 $x^3 - 8$ 進行實數因式分解的結果為？",
    options: ["$(x - 2)(x^2 + 2x + 4)$", "$(x - 2)(x^2 - 2x + 4)$", "$(x - 2)^3$", "$(x - 2)(x + 2)^2$"],
    answer: 0,
    explanation: "立方差公式：$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$。代入 $a = x, b = 2$ 得 $(x - 2)(x^2 + 2x + 4)$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "二次多項式 $f(x) = x^2 - 4x + 7$ 的頂點坐標為何？",
    options: ["(2, 3)", "(2, 7)", "(-2, 3)", "(4, 7)"],
    answer: 0,
    explanation: "配方法：$f(x) = (x^2 - 4x + 4) + 3 = (x - 2)^2 + 3$。頂點坐標為 $(2, 3)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $2^{\\log_2 7}$ 之值為何？",
    options: ["7", "2", "49", "14"],
    answer: 0,
    explanation: "對數基本恆等式：$a^{\\log_a x} = x$（其中 $a > 0, a \\ne 1, x > 0$）。因此 $2^{\\log_2 7} = 7$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知 $\\sin\\theta = \\frac{4}{5}$ 且 $\\theta$ 為第二象限角，則 $\\cos\\theta$ 之值為何？",
    options: ["-3/5", "3/5", "-4/5", "4/3"],
    answer: 0,
    explanation: "第二象限餘弦值為負。$\\cos\\theta = -\\sqrt{1 - \\sin^2\\theta} = -\\sqrt{1 - (4/5)^2} = -\\sqrt{9/25} = -\\frac{3}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (1, 2)$ 與 $\\vec{v} = (3, k)$ 互相垂直，則實數 $k$ 之值為何？",
    options: ["-3/2", "3/2", "-6", "2/3"],
    answer: 0,
    explanation: "垂直條件內積為 0：$\\vec{u} \\cdot \\vec{v} = 1(3) + 2(k) = 3 + 2k = 0 \\implies 2k = -3 \\implies k = -\\frac{3}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "通過點 $P(1, 2, 3)$ 且法向量為 $\\vec{n} = (2, -1, 4)$ 的平面方程式為何？",
    options: ["$2x - y + 4z = 12$", "$2x - y + 4z = 0$", "$x + 2y + 3z = 12$", "$2x - y + 4z = 10$"],
    answer: 0,
    explanation: "點法式：$2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\implies 2x - 2 - y + 2 + 4z - 12 = 0 \\implies 2x - y + 4z = 12$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，計算其行列式 $\\det(A)$ 之值為何？",
    options: ["-2", "2", "10", "-10"],
    answer: 0,
    explanation: "$\\det(A) = 1(4) - 2(3) = 4 - 6 = -2$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 7 個人中選出 3 人分別擔任隊長、副隊長與秘書，共有多少種不同的職務分配方式？",
    options: ["210 種", "35 種", "42 種", "5040 種"],
    answer: 0,
    explanation: "排列數公式：$P^7_3 = 7 \\times 6 \\times 5 = 210$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "箱中有 4 顆紅球與 6 顆白球。自箱中隨機連續取出 2 顆球（取後不放回），兩顆皆為紅球的機率為何？",
    options: ["2/15", "4/25", "1/5", "12/90（即 2/15）"],
    answer: 0,
    explanation: "機率乘法：第 1 顆為紅球機率 $\\frac{4}{10}$，第 2 顆為紅球機率 $\\frac{3}{9}$。總機率為 $\\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $y^2 = 8x$ 的準線方程式為何？",
    options: ["$x = -2$", "$x = 2$", "$y = -2$", "$x = -4$"],
    answer: 0,
    explanation: "標準式 $y^2 = 4cx$。此處 $4c = 8 \\implies c = 2$。焦點為 $(2, 0)$，準線為鉛直線 $x = -c \\implies x = -2$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "函數 $f(x) = x^4 - 4x + 1$ 的一階導數 $f'(x)$ 為何？",
    options: ["$4x^3 - 4$", "$4x^3$", "$3x^3 - 4$", "$4x^3 + 1$"],
    answer: 0,
    explanation: "微分冪次法則：$(x^n)' = n x^{n-1}$。$f'(x) = 4x^3 - 4(1) + 0 = 4x^3 - 4$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "求多項式 $P(x) = x^3 - 2x^2 + 5x - 4$ 除以 $x - 1$ 的「餘式」為何？",
    options: ["0（即 $x - 1$ 為 $P(x)$ 之因式）", "4", "-4", "2"],
    answer: 0,
    explanation: "餘式定理：餘式等於 $P(1) = 1^3 - 2(1^2) + 5(1) - 4 = 1 - 2 + 5 - 4 = 0$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "若 $\\cos\\theta = 0$，且 $0 \\le \\theta < 2\\pi$，則 $\\theta$ 的可能值為何？",
    options: ["$\\pi/2$ 或 $3\\pi/2$", "0 或 $\\pi$", "$\\pi/4$ 或 $5\\pi/4$", "$\\pi/3$ 或 $2\\pi/3$"],
    answer: 0,
    explanation: "在單位圓上，橫坐標為 0 的點位於 $y$ 軸正半軸與負半軸交點，角度為 $90^\\circ$（$\\pi/2$）與 $270^\\circ$（$3\\pi/2$）。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "設向量 $\\vec{u} = (3, 4)$，則與 $\\vec{u}$ 同方向的「單位向量」為何？",
    options: ["(3/5, 4/5)", "(4/5, 3/5)", "(3/25, 4/25)", "(1, 1)"],
    answer: 0,
    explanation: "向量模長 $|\\vec{u}| = \\sqrt{3^2 + 4^2} = 5$。同向單位向量為 $\\frac{\\vec{u}}{|\\vec{u}|} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "點 $P(1, 2, 3)$ 到 $xy$ 平面的距離為何？",
    options: ["3", "1", "2", "$\\sqrt{14}$"],
    answer: 0,
    explanation: "空間點 $(x, y, z)$ 到 $xy$ 平面的垂足為 $(x, y, 0)$，垂直距離為縱向高度絕對值 $|z| = |3| = 3$。",
    difficulty: "基礎"
  }
];

batch4.forEach((q, idx) => {
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

console.log(`New Math A count after batch 4: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
