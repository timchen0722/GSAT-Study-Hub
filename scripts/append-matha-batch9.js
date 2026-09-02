const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 9: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch9 = [
  {
    category: "數與式",
    question: "化簡雙重根號：$\\sqrt{8 - 2\\sqrt{15}}$ 之化簡結果為何？",
    options: ["$\\sqrt{5} - \\sqrt{3}$", "$\\sqrt{5} + \\sqrt{3}$", "$\\sqrt{6} - \\sqrt{2}$", "3 - \\sqrt{5}"],
    answer: 0,
    explanation: "尋找兩正數 $a > b$ 滿足 $a + b = 8$ 且 $a b = 15$。解得 $a = 5, b = 3$。因此 $\\sqrt{8 - 2\\sqrt{15}} = \\sqrt{(\\sqrt{5} - \\sqrt{3})^2} = \\sqrt{5} - \\sqrt{3}$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知實係數三次方程式 $x^3 - 4x^2 + 6x - 4 = 0$ 有一複數虛根為 $1 + i$。由實係數虛根成對定理，該方程式在實數系中的唯一「實數根」為何？",
    options: ["$x = 2$", "$x = 1$", "$x = -2$", "$x = 4$"],
    answer: 0,
    explanation: "實係數多項式虛根必成對出現，另一共軛虛根必為 $1 - i$。三根之和為 $\\alpha + (1+i) + (1-i) = -(-4)/1 = 4 \\implies \\alpha + 2 = 4 \\implies \\alpha = 2$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 2 \\approx 0.3010, \\log_{10} 3 \\approx 0.4771$。求常用對數 $\\log_{10} 6$ 之近似值為何？",
    options: ["0.7781（$\\log_{10}(2 \\times 3) = \\log_{10} 2 + \\log_{10} 3 = 0.3010 + 0.4771$）", "0.1436", "0.6020", "1.7781"],
    answer: 0,
    explanation: "對數乘法性質：$\\log_{10} 6 = \\log_{10}(2 \\times 3) = \\log_{10} 2 + \\log_{10} 3 \\approx 0.3010 + 0.4771 = 0.7781$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知角 $\\theta$ 滿足 $\\sin\\theta = \\frac{3}{5}$ 且 $\\cos\\theta = \\frac{4}{5}$。利用二倍角正弦公式計算 $\\sin 2\\theta$ 之值為何？",
    options: ["24/25", "7/25", "12/25", "1"],
    answer: 0,
    explanation: "二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\times \\frac{3}{5} \\times \\frac{4}{5} = \\frac{24}{25}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "在 $\\Delta ABC$ 中，點 $G$ 為該三角形的「重心（Centroid）」。若平面上有一點 $P$ 滿足向量關係式 $\\vec{PA} + \\vec{PB} + \\vec{PC} = \\vec{0}$，則點 $P$ 在幾何上必為 $\\Delta ABC$ 的？",
    options: ["重心 $G$（重心滿足 $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$）", "外心", "內心", "垂心"],
    answer: 0,
    explanation: "三角形重心坐標定理：$\\vec{OG} = \\frac{\\vec{OA} + \\vec{OB} + \\vec{OC}}{3}$。當以重心為基準原點時，必然滿足 $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "已知空間向量 $\\vec{a} = (1, 2, 3)$ 與 $\\vec{b} = (2, 4, 6)$。計算兩向量的外積 $\\vec{a} \\times \\vec{b}$ 為何？",
    options: ["$\\vec{0} = (0, 0, 0)$（因兩向量互相平行，夾角 0° 外積為零向量）", "(1, 1, 1)", "(2, 4, 6)", "(-1, 2, -1)"],
    answer: 0,
    explanation: "平行向量外積為零向量：$\\vec{b} = 2\\vec{a}$，分量成比例。外積模長 $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin 0^\\circ = 0$，故外積為零向量 $(0, 0, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，平面 $E: x + y + z = 1$ 與三坐標軸所截出的三個截點 $A, B, C$ 與原點 $O(0, 0, 0)$ 所圍成的「四面體 $O-ABC$ 的體積」為多少？",
    options: ["1/6（截距分別為 $a=1, b=1, c=1$，體積為 $\\frac{1}{6}abc = \\frac{1}{6}$）", "1/2", "1/3", "1"],
    answer: 0,
    explanation: "截距式：三截點分別為 $(1, 0, 0), (0, 1, 0), (0, 0, 1)$。三股互相垂直，四面體體積公式 $V = \\frac{1}{6} a b c = \\frac{1}{6}(1)(1)(1) = \\frac{1}{6}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "在線性代數中，若非零行向量 $\\vec{v}$ 滿足矩陣方程 $A \\vec{v} = \\lambda \\vec{v}$（其中 $\\lambda$ 為純量常數），則純量 $\\lambda$ 與向量 $\\vec{v}$ 在矩陣論中分別稱為方陣 $A$ 的？",
    options: ["$\\lambda$ 為「特徵值（Eigenvalue）」，$\\vec{v}$ 為其對應的「特徵向量（Eigenvector）」", "$\\lambda$ 為行列式，$\\vec{v}$ 為反矩陣", "$\\lambda$ 為跡數，$\\vec{v}$ 為伴隨向量", "$\\lambda$ 為秩，$\\vec{v}$ 為核向量"],
    answer: 0,
    explanation: "特徵值與特徵向量定義：向量經過矩陣 $A$ 變換後方向保持在同一直線上（僅長度縮放 $\\lambda$ 倍），滿足方程 $(\\lambda I - A)\\vec{v} = \\vec{0}$。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "古典「錯排問題（Derangement）」：有 4 位朋友參加交換禮物，每人準備一份禮物。若隨機重新分發禮物且要求「每個人皆不能拿到自己準備的禮物」，共有多少種完全錯排的分法？",
    options: ["9 種（4 元素錯排數 $D_4 = 9$）", "24 種", "12 種", "6 種"],
    answer: 0,
    explanation: "錯排數公式：$D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$。$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9$ 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "連續型隨機變數 $X$ 的機率密度函數（PDF）為 $f(x)$。在該隨機變數的全體定義域範圍內，函數曲線與橫軸所圍成的總積分面積必須嚴格等於？",
    options: ["1（代表全事件總機率 $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$）", "0", "期望值 $\\mu$", "100"],
    answer: 0,
    explanation: "機率密度函數公理：$f(x) \\ge 0$ 且全域曲線下面積恆等於 1，任意區間 $[a, b]$ 的發生機率即為該區間之曲線下定積分面積。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的半焦距 $c$ 與「離心率 $e = \\frac{c}{a}$」分別為何？",
    options: ["$c = 3$，離心率 $e = 3/5 = 0.6$", "$c = 9$，離心率 $e = 9/25$", "$c = 3$，離心率 $e = 3/4$", "$c = 5$，離心率 $e = 1$"],
    answer: 0,
    explanation: "$a^2 = 25 \\implies a = 5$；$b^2 = 16 \\implies b = 4$。由幾何關係 $c^2 = a^2 - b^2 = 25 - 16 = 9 \\implies c = 3$。離心率 $e = c/a = 3/5 = 0.6$（滿足 $0 < e < 1$）。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "函數 $f(x) = x^2 - 4x + 7$ 在封閉區間 $[0, 3]$ 上的「絕對最大值」與「絕對最小值」分別為何？",
    options: ["最大值為 7（發生在端點 $x = 0$ 處），最小值為 3（發生在頂點 $x = 2$ 處）", "最大值為 4，最小值為 3", "最大值為 7，最小值為 4", "最大值為 10，最小值為 0"],
    answer: 0,
    explanation: "配方法：$f(x) = (x-2)^2 + 3$。頂點 $x = 2 \\in [0, 3]$，極小值為 $f(2) = 3$。檢驗端點：$f(0) = 7$；$f(3) = (3-2)^2 + 3 = 4$。故最大值為 7、最小值為 3。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "計算整數多項式乘法展開 $(x + 4)(x - 4)$ 之結果為何？",
    options: ["$x^2 - 16$", "$x^2 + 16$", "$x^2 - 8x - 16$", "$x^2 - 8$"],
    answer: 0,
    explanation: "平方差公式：$(x + 4)(x - 4) = x^2 - 4^2 = x^2 - 16$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = 3x^2 + 5x - 2$ 除以 $x$ 的餘式為多少？",
    options: ["-2", "3", "5", "0"],
    answer: 0,
    explanation: "由餘式定理，除以 $x$ 的餘式等於 $f(0) = 3(0)^2 + 5(0) - 2 = -2$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "化簡對數表達式 $\\log_2 8 + \\log_2 4$ 之值為何？",
    options: ["5（$3 + 2 = 5$）", "6", "12", "7"],
    answer: 0,
    explanation: "$\\log_2 8 = 3$；$\\log_2 4 = 2$。總和為 $3 + 2 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在直角坐標平面上，點 $P(-1, 0)$ 與原點的連線所對應的廣義角標準角度為何？",
    options: ["180°（$\\pi$ 弧度）", "90°", "270°", "0°"],
    answer: 0,
    explanation: "點 $(-1, 0)$ 位於負 $x$ 軸上，標準位置角為 180°。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (3, 4)$，則與 $\\vec{u}$ 同方向的「單位向量」坐標為何？",
    options: ["(3/5, 4/5)", "(3, 4)", "(1, 1)", "(4/5, 3/5)"],
    answer: 0,
    explanation: "模長 $|\\vec{u}| = \\sqrt{3^2 + 4^2} = 5$。同向單位向量為 $\\frac{\\vec{u}}{|\\vec{u}|} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中點 $P(1, 2, 3)$ 關於「$xy$ 平面」的對稱點坐標為何？",
    options: ["(1, 2, -3)（僅 $z$ 坐標變號）", "(-1, -2, 3)", "(-1, -2, -3)", "(1, -2, 3)"],
    answer: 0,
    explanation: "關於坐標平面對稱時，垂直於該平面的坐標分量變號。關於 $xy$ 平面對稱僅 $z$ 變號，對稱點為 $(1, 2, -3)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式 $\\begin{vmatrix} 4 & 2 \\\\ 1 & 3 \\end{vmatrix}$ 之值為何？",
    options: ["10（$4 \\times 3 - 2 \\times 1 = 12 - 2 = 10$）", "14", "12", "8"],
    answer: 0,
    explanation: "$ad - bc = 4(3) - 2(1) = 12 - 2 = 10$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^5_5$ 之值為何？",
    options: ["1", "5", "0", "25"],
    answer: 0,
    explanation: "從 5 個相異物全選取的方法數唯一，故 $C^5_5 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "投擲一顆公正六面骰子，出現「小於 3（即 1 或 2）」的機率為何？",
    options: ["1/3（2/6 = 1/3）", "1/2", "1/6", "2/3"],
    answer: 0,
    explanation: "小於 3 的點數為 1, 2 共 2 種，機率為 $\\frac{2}{6} = \\frac{1}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "圓方程式 $x^2 + y^2 = 9$ 的圓心坐標與直徑分別為何？",
    options: ["圓心在原點 $(0, 0)$，直徑為 6", "圓心在 $(0, 0)$，直徑為 9", "圓心在 $(0, 0)$，直徑為 3", "圓心在 $(1, 1)$，直徑為 6"],
    answer: 0,
    explanation: "半徑 $r = \\sqrt{9} = 3$，直徑為 $2r = 6$，圓心為 $(0, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^4$ 的導函數 $f'(x)$ 為何？",
    options: ["$4x^3$", "$x^3$", "$4x$", "$3x^4$"],
    answer: 0,
    explanation: "冪次法則：$(x^4)' = 4x^{4-1} = 4x^3$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "若二次方程式 $x^2 + 2x + 1 = 0$，其兩根之積為何？",
    options: ["1", "-2", "2", "-1"],
    answer: 0,
    explanation: "根與係數關係：兩根之積為 $\\frac{c}{a} = \\frac{1}{1} = 1$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $5^0$ 之值為何？",
    options: ["1", "0", "5", "無意義"],
    answer: 0,
    explanation: "任何非零實數的零次方恆等於 1。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算 $\\cos 0^\\circ$ 之精確值為何？",
    options: ["1", "0", "-1", "1/2"],
    answer: 0,
    explanation: "$\\cos 0^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (2, 0)$，則其模長 $|\\vec{u}|$ 為何？",
    options: ["2", "4", "0", "\\sqrt{2}"],
    answer: 0,
    explanation: "$|\\vec{u}| = \\sqrt{2^2 + 0^2} = \\sqrt{4} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，點 $P(0, 4, 0)$ 位於哪一條坐標軸上？",
    options: ["$y$ 軸上", "$x$ 軸上", "$z$ 軸上", "$xy$ 平面但不在軸上"],
    answer: 0,
    explanation: "橫坐標與豎坐標皆為 0（$x=0, z=0$），點精確位於 $y$ 軸上。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若方陣 $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$，則方陣 $A$ 可表示為純量幾倍的單位矩陣 $I$？",
    options: ["$3I$", "$I$", "$9I$", "$6I$"],
    answer: 0,
    explanation: "$A = 3 \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 3I$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算階乘 $1!$ 之值為何？",
    options: ["1", "0", "2", "無意義"],
    answer: 0,
    explanation: "$1! = 1$。",
    difficulty: "基礎"
  }
];

batch9.forEach((q, idx) => {
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

console.log(`New Math A count after batch 9: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
