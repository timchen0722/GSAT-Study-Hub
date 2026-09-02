const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 10: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch10 = [
  {
    category: "數與式",
    question: "設 $a, b$ 皆為正實數且滿足 $a + b = 10$。利用算幾不等式，求乘積 $a b$ 的最大值為何？",
    options: ["25（當且僅當 $a = b = 5$ 時等號成立）", "20", "50", "100"],
    answer: 0,
    explanation: "算幾不等式：$\\frac{a+b}{2} \\ge \\sqrt{ab} \\implies \\frac{10}{2} = 5 \\ge \\sqrt{ab} \\implies ab \\le 25$。當 $a = b = 5$ 時有最大值 25。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知整係數多項式 $f(x) = 2x^3 - 5x^2 + x + 2$。若 $f(x)$ 有有理根 $\\frac{p}{q}$（其中 $p, q$ 互質），依據有理根檢驗定理（牛頓一次因式檢驗法），分母 $q$ 必須為首項係數 2 的因數，分子 $p$ 必須為常數項 2 的因數。下列何者「絕對不可能是」該多項式的有理根？",
    options: ["$3$（3 不是常數項 2 的因數）", "$1$", "$-1/2$", "$2$"],
    answer: 0,
    explanation: "可能之有理根只可能為 $\\pm 1, \\pm 2, \\pm 1/2$。3 絕非 2 的因數，絕不可能是其有理根。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 2 \\approx 0.3010$。若將 $2^{50}$ 計算展開為十進位整數，則該整數的「最高位首位數字」為何？",
    options: ["1（$\\log_{10} 2^{50} = 50 \\times 0.3010 = 15.05$。尾數 $0.05 < \\log_{10} 2 = 0.3010$，故首位為 1）", "2", "3", "5"],
    answer: 0,
    explanation: "對數拆解：$\\log_{10}(2^{50}) = 50(0.3010) = 15.05$。整數首數為 15（為 16 位數），尾數為 0.05。因為 $\\log_{10} 1 = 0 \\le 0.05 < \\log_{10} 2 = 0.3010$，故首位數字必為 1。",
    difficulty: "中等"
  },
  {
    category: "三角函數",
    question: "計算 $\\cos 75^\\circ$ 的精確值為何？",
    options: ["$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$", "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$", "$\\frac{\\sqrt{3} - 1}{2}$", "$\\frac{1}{2}$"],
    answer: 0,
    explanation: "餘弦和角公式：$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "設 $A, B, P$ 為平面上不共線的三點。若存在實數 $x, y$ 使得 $\\vec{OP} = x\\vec{OA} + y\\vec{OB}$。點 $P$ 落在直線 $AB$ 上的「充要條件」為？",
    options: ["$x + y = 1$（直線共線向量分點公式條件）", "$x + y = 0$", "$x = y$", "$x y = 1$"],
    answer: 0,
    explanation: "平面幾何向量定理：$\\vec{OP} = (1-t)\\vec{OA} + t\\vec{OB}$。令 $x = 1-t, y = t$，則 $x + y = 1$ 為三點共線的充要條件；若 $x, y > 0$ 則 $P$ 落在線段 $AB$ 內部。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "空間直角坐標系中，向量 $\\vec{u} = (2, -1, 2)$ 的向量長度（模長）$|\\vec{u}|$ 為多少？",
    options: ["3（$\\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$）", "5", "$\\sqrt{7}$", "9"],
    answer: 0,
    explanation: "$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，點 $P(1, 2, 3)$ 到平面的方程式 $E: 2x + 2y - z = 9$ 的垂直距離 $d$ 為多少？",
    options: ["2（公式：$d = \\frac{|2(1) + 2(2) - 3 - 9|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{|-6|}{3} = 2$）", "3", "1", "6"],
    answer: 0,
    explanation: "點到平面距離公式：$d = \\frac{|2(1) + 2(2) - (3) - 9|}{\\sqrt{4 + 4 + 1}} = \\frac{|2 + 4 - 3 - 9|}{3} = \\frac{|-6|}{3} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "在線性代數中，凱萊-哈密頓定理（Cayley-Hamilton Theorem）指出任何方陣 $A$ 皆滿足其自身的特徵多項式。對於二階方陣 $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$，其必然滿足的矩陣等式為？",
    options: ["$A^2 - \\text{tr}(A) A + \\det(A) I = O$（其中 $\\text{tr}(A) = a + d$ 為跡數，$\\det(A) = ad - bc$）", "$A^2 + I = O$", "$A^2 - A = O$", "$A^2 = \\det(A) I$"],
    answer: 0,
    explanation: "特徵多項式 $p(\\lambda) = \\det(\\lambda I - A) = \\lambda^2 - (a+d)\\lambda + (ad-bc)$。依 Cayley-Hamilton 定理，$A^2 - \\text{tr}(A) A + \\det(A) I = O$。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "在二項式展開式 $(a + b)^n$ 中，各項係數之和等於多少？",
    options: ["$2^n$（令 $a = 1, b = 1$ 代入即得 $\\sum C^n_k = 2^n$）", "$n^2$", "$2n$", "$n!$"],
    answer: 0,
    explanation: "令 $a = 1, b = 1$ 代入 $(1 + 1)^n = 2^n = C^n_0 + C^n_1 + \\dots + C^n_n$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "若隨機變數 $X$ 服從二項分佈 $B(n=100, p=0.2)$。該二項分佈的期望值 $E(X)$ 與變異數 $\\text{Var}(X)$ 分別為？",
    options: ["期望值 $E(X) = 20$，變異數 $\\text{Var}(X) = 16$（$E = np = 20, \\text{Var} = np(1-p) = 20 \\times 0.8 = 16$）", "期望值 20，變異數 20", "期望值 10，變異數 8", "期望值 20，變異數 4"],
    answer: 0,
    explanation: "二項分佈公式：$E(X) = n p = 100 \\times 0.2 = 20$；$\\text{Var}(X) = n p (1-p) = 100 \\times 0.2 \\times 0.8 = 16$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $y^2 = 16x$ 的焦點坐標與準線方程式分別為何？",
    options: ["焦點為 $(4, 0)$，準線為直線 $x = -4$", "焦點為 $(0, 4)$，準線為 $y = -4$", "焦點為 $(2, 0)$，準線為 $x = -2$", "焦點為 $(8, 0)$，準線為 $x = -8$"],
    answer: 0,
    explanation: "標準式 $y^2 = 4cx$。$4c = 16 \\implies c = 4$。對稱軸為 $x$ 軸，焦點在 $(4, 0)$，準線為 $x = -4$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "若函數 $f(x) = (x^2 + 1)(2x - 3)$，利用乘法微分法則求其導函數 $f'(x)$ 之展開結果為何？",
    options: ["$6x^2 - 6x + 2$", "$4x^2 - 6x$", "$6x^2 + 2$", "$2x^2 - 3x + 1$"],
    answer: 0,
    explanation: "乘法法則 $(u v)' = u' v + u v' = (2x)(2x - 3) + (x^2 + 1)(2) = 4x^2 - 6x + 2x^2 + 2 = 6x^2 - 6x + 2$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數運算：$(\\sqrt{3} + 1)(\\sqrt{3} - 1)$ 之結果為何？",
    options: ["2", "4", "3", "1"],
    answer: 0,
    explanation: "平方差公式：$(\\sqrt{3})^2 - 1^2 = 3 - 1 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次函數 $f(x) = (x - 1)(x - 2)(x - 3)$ 與 $x$ 軸相交截出幾個相異實數交點？",
    options: ["3 個交點（分別在 $x = 1, 2, 3$ 處）", "1 個", "2 個", "0 個"],
    answer: 0,
    explanation: "令 $f(x) = 0$，有三個相異實根 $x = 1, 2, 3$，故在 $x$ 軸上有 3 個交點。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "化簡常用對數 $\\log_{10} 1000$ 之值為何？",
    options: ["3", "10", "100", "30"],
    answer: 0,
    explanation: "$1000 = 10^3 \\implies \\log_{10}(10^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在直角坐標系中，第一象限角的正弦值 $\\sin\\theta$ 與餘弦值 $\\cos\\theta$ 的正負符號分別為？",
    options: ["$\\sin\\theta > 0$ 且 $\\cos\\theta > 0$（皆為正數）", "正弦為正，餘弦為負", "正弦為負，餘弦為正", "皆為負數"],
    answer: 0,
    explanation: "第一象限橫坐標 $x > 0$ 且縱坐標 $y > 0$，故 $\\sin\\theta = y/r > 0$ 且 $\\cos\\theta = x/r > 0$ 皆為正。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (1, 3)$ 與 $\\vec{v} = (2, -1)$，計算其內積 $\\vec{u} \\cdot \\vec{v}$ 為何？",
    options: ["-1（$1 \\times 2 + 3 \\times (-1) = 2 - 3 = -1$）", "5", "1", "-5"],
    answer: 0,
    explanation: "內積坐標公式：$\\vec{u} \\cdot \\vec{v} = 1(2) + 3(-1) = 2 - 3 = -1$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中點 $P(2, 3, 4)$ 到 $z$ 軸的垂直距離為何？",
    options: ["$\\sqrt{13}$（$\\sqrt{x^2 + y^2} = \\sqrt{2^2 + 3^2} = \\sqrt{13}$）", "4", "5", "$\\sqrt{29}$"],
    answer: 0,
    explanation: "點到 $z$ 軸距離為橫坐標與縱坐標的平方和開根號：$d = \\sqrt{x^2 + y^2} = \\sqrt{2^2 + 3^2} = \\sqrt{13}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知二階零方陣 $O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$，則其行列式值 $|O|$ 為何？",
    options: ["0", "1", "不存在", "-1"],
    answer: 0,
    explanation: "$|O| = 0(0) - 0(0) = 0$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由 5 位候選人中選出 1 位隊長，共有多少種不同的選法？",
    options: ["5 種", "1 種", "10 種", "25 種"],
    answer: 0,
    explanation: "$C^5_1 = 5$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "連續投擲一枚公正硬幣 4 次，全數出現反面的機率為何？",
    options: ["1/16（$(1/2)^4 = 1/16$）", "1/8", "1/4", "1/2"],
    answer: 0,
    explanation: "每次反面機率為 1/2，四次獨立皆為反面的機率為 $(1/2)^4 = 1/16$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "圓方程式 $(x - 1)^2 + (y + 2)^2 = 16$ 的半徑為多少？",
    options: ["4", "16", "2", "8"],
    answer: 0,
    explanation: "$r = \\sqrt{16} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "若函數 $f(x) = 5$，其導函數 $f'(x)$ 之值為何？",
    options: ["0（常數函數導數恆為 0）", "5", "1", "不存在"],
    answer: 0,
    explanation: "常數函數的圖形為水平直線，斜率處處為 0，故導數恆為 0。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 + 1$ 在實數範圍內是否有實數根？",
    options: ["無實數根（判別式 $\\Delta = 0 - 4 = -4 < 0$）", "有兩個相異實數根", "有一個二重實數根", "有無窮多個實數根"],
    answer: 0,
    explanation: "$x^2 = -1$ 在實數系中無解，根為共軛純虛數 $\\pm i$，故無實數根。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $2^{-3}$ 之最簡分數結果為何？",
    options: ["1/8", "-8", "-6", "1/6"],
    answer: 0,
    explanation: "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\sin 180^\\circ$ 之值為何？",
    options: ["0", "1", "-1", "1/2"],
    answer: 0,
    explanation: "$\\sin 180^\\circ = 0$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (0, 0)$，在向量代數中稱為？",
    options: ["零向量（模長為 0，方向任意未定義）", "單位向量", "法向量", "特徵向量"],
    answer: 0,
    explanation: "各分量皆為 0 的向量稱為零向量 $\\vec{0}$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中 $z = 0$ 所代表的幾何對象是哪一個坐標平面？",
    options: ["$xy$ 平面", "$yz$ 平面", "$xz$ 平面", "一條直線"],
    answer: 0,
    explanation: "豎坐標 $z = 0$ 的所有點構成 $xy$ 平面。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若方陣 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}$，計算其行列式值 $|A|$ 為何？",
    options: ["2", "1", "0", "3"],
    answer: 0,
    explanation: "$|A| = 1(2) - 0(0) = 2$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^4_1$ 之值為何？",
    options: ["4", "1", "6", "24"],
    answer: 0,
    explanation: "$C^4_1 = 4$。",
    difficulty: "基礎"
  }
];

batch10.forEach((q, idx) => {
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

console.log(`New Math A count after batch 10: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
