const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 7: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch7 = [
  {
    category: "數與式",
    question: "將純循環小數 $0.\\overline{27}$（即 $0.272727\\dots$）化為最簡分數的形式為何？",
    options: ["3/11", "27/100", "9/33", "27/90"],
    answer: 0,
    explanation: "循環小數化分數公式：$0.\\overline{27} = \\frac{27}{99} = \\frac{27 \\div 9}{99 \\div 9} = \\frac{3}{11}$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知三次方程式 $x^3 - 5x^2 + 2x - 8 = 0$ 的三根分別為 $\\alpha, \\beta, \\gamma$。求其三根的倒數和 $\\frac{1}{\\alpha} + \\frac{1}{\\beta} + \\frac{1}{\\gamma}$ 之值為何？",
    options: ["1/4", "-1/4", "5/8", "2/5"],
    answer: 0,
    explanation: "通分得 $\\frac{1}{\\alpha} + \\frac{1}{\\beta} + \\frac{1}{\\gamma} = \\frac{\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha}{\\alpha\\beta\\gamma}$。由根與係數關係：兩兩乘積和為 2，三根之積為 8。因此倒數和為 $\\frac{2}{8} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解對數不等式 $\\log_{1/2}(x - 1) > 2$。該不等式的實數解 $x$ 的完整範圍為何？",
    options: ["$1 < x < \\frac{5}{4}$", "$x > \\frac{5}{4}$", "$x < \\frac{5}{4}$", "$1 < x < 5$"],
    answer: 0,
    explanation: "底數為 $1/2 < 1$，對數函數單調遞減，去對數時不等號方向反轉：$x - 1 < (1/2)^2 = \\frac{1}{4} \\implies x < 1 + \\frac{1}{4} = \\frac{5}{4}$。同時真數必須大於 0：$x - 1 > 0 \\implies x > 1$。綜合得 $1 < x < 5/4$。",
    difficulty: "中等"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，已知內角 $A = 30^\\circ$，其對邊長度為 $a = 5$。由正弦定理求此三角形的「外接圓半徑 $R$」為多少？",
    options: ["5", "10", "2.5", "$5\\sqrt{3}$"],
    answer: 0,
    explanation: "正弦定理外接圓直徑公式：$2R = \\frac{a}{\\sin A} = \\frac{5}{\\sin 30^\\circ} = \\frac{5}{1/2} = 10 \\implies R = 5$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (k, 4)$ 與向量 $\\vec{v} = (2, -3)$。若兩向量在幾何上互相「垂直」，則實數 $k$ 之值為何？",
    options: ["6", "-6", "8", "3/2"],
    answer: 0,
    explanation: "兩向量垂直等價於內積為 0：$\\vec{u} \\cdot \\vec{v} = k(2) + 4(-3) = 2k - 12 = 0 \\implies 2k = 12 \\implies k = 6$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "空間中有三個不共線點 $A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)$。由外積向量求 $\\Delta ABC$ 的幾何面積為何？",
    options: ["$\\frac{\\sqrt{3}}{2}$", "$\\sqrt{3}$", "1/2", "3/2"],
    answer: 0,
    explanation: "$\\vec{AB} = (-1, 1, 0)$，$\\vec{AC} = (-1, 0, 1)$。外積 $\\vec{AB} \\times \\vec{AC} = (1(1)-0, 0-(-1), 0-(-1)) = (1, 1, 1)$。三角形面積為外積模長之一半：$\\frac{1}{2} |\\vec{AB} \\times \\vec{AC}| = \\frac{1}{2} \\sqrt{1^2+1^2+1^2} = \\frac{\\sqrt{3}}{2}$。",
    difficulty: "中等"
  },
  {
    category: "空間直線與平面",
    question: "在空間直角坐標系中，求點 $P(1, 2, 2)$ 到平面 $E: 2x - 2y + z + 5 = 0$ 的垂直距離為何？",
    options: ["5/3", "5", "1", "3/5"],
    answer: 0,
    explanation: "點到平面距離公式：$d = \\frac{|2(1) - 2(2) + 1(2) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 + 2 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{5}{\\sqrt{9}} = \\frac{5}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知二階方陣 $A = \\begin{pmatrix} 3 & k \\\\ 2 & 4 \\end{pmatrix}$。若方陣 $A$ 的「反矩陣不存在（不可逆）」，則實數 $k$ 之值為何？",
    options: ["6", "12", "-6", "0"],
    answer: 0,
    explanation: "方陣不可逆充要條件為行列式為 0：$\\det(A) = 3(4) - k(2) = 12 - 2k = 0 \\implies 2k = 12 \\implies k = 6$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 4 封相異的信件任意投入 3 個不同的郵筒中，每封信皆可投進任意郵筒，共有多少種不同的投法？",
    options: ["81 種（即 $3^4$）", "64 種（$4^3$）", "24 種", "12 種"],
    answer: 0,
    explanation: "每封信皆有 3 個郵筒可供選擇，4 封信連續決策，由乘法原理投法數為 $3 \\times 3 \\times 3 \\times 3 = 3^4 = 81$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "設事件 $A$ 與事件 $B$ 為兩個「獨立事件」，已知 $P(A) = 0.4$ 且 $P(B) = 0.5$。則兩事件同時發生的交集機率 $P(A \\cap B)$ 為何？",
    options: ["0.2", "0.9", "0.1", "0"],
    answer: 0,
    explanation: "獨立事件乘法定律：$P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $y^2 = 8x$ 的焦點坐標與「正焦弦長」分別為何？",
    options: ["焦點為 $(2, 0)$，正焦弦長為 8", "焦點為 $(4, 0)$，正焦弦長為 16", "焦點為 $(0, 2)$，正焦弦長為 8", "焦點為 $(2, 0)$，正焦弦長為 4"],
    answer: 0,
    explanation: "標準式 $y^2 = 4cx$。對比係數得 $4c = 8 \\implies c = 2$。頂點在原點，開口向右，焦點坐標為 $(c, 0) = (2, 0)$；正焦弦長恆等於 $|4c| = 8$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求曲線 $y = x^2 - 3x + 4$ 在點 $(2, 2)$ 處的切線方程式為何？",
    options: ["$y = x$", "$y = 2x - 2$", "$y = -x + 4$", "$y = x + 2$"],
    answer: 0,
    explanation: "導函數 $y' = 2x - 3$。在 $x = 2$ 處的切線斜率為 $m = 2(2) - 3 = 1$。點斜式切線方程：$y - 2 = 1(x - 2) \\implies y = x$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "化簡絕對值不等式 $|x - 3| < 5$ 的實數解範圍為何？",
    options: ["$-2 < x < 8$", "$x < 8$", "$x > -2$", "$-8 < x < 2$"],
    answer: 0,
    explanation: "$|x - 3| < 5 \\implies -5 < x - 3 < 5$。同加 3 得 $-2 < x < 8$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 - 4x + 4$ 的判別式 $\\Delta$ 之值為何？",
    options: ["0（有重根 $x = 2$）", "16", "-16", "4"],
    answer: 0,
    explanation: "$\\Delta = b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $\\log_3 1$ 之值為何？",
    options: ["0", "1", "3", "無意義"],
    answer: 0,
    explanation: "任何大於 0 且不等於 1 的底數，1 的對數恆等於 0（因為 $3^0 = 1$）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在直角三角形中，已知 $\\cos\\theta = 3/5$，且 $\\theta$ 為銳角，則 $\\tan\\theta$ 之值為何？",
    options: ["4/3", "3/4", "4/5", "5/3"],
    answer: 0,
    explanation: "由商數與平方關係：$\\sin\\theta = \\sqrt{1 - (3/5)^2} = 4/5$。$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{4/5}{3/5} = \\frac{4}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "若向量 $\\vec{a} = (3, -1)$，則其長度（模長）$|\\vec{a}|$ 為何？",
    options: ["$\\sqrt{10}$", "10", "4", "$\\sqrt{8}$"],
    answer: 0,
    explanation: "$|\\vec{a}| = \\sqrt{3^2 + (-1)^2} = \\sqrt{9 + 1} = \\sqrt{10}$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "平面 $x = 0$ 在空間直角坐標系中代表的是哪一個坐標平面？",
    options: ["$yz$ 平面", "$xy$ 平面", "$xz$ 平面", "與所有軸平行的平面"],
    answer: 0,
    explanation: "當 $x = 0$ 時，點的坐標為 $(0, y, z)$，此為 $yz$ 平面方程式。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若二階方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，求其「轉置矩陣 $A^T$」為何？",
    options: ["$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"],
    answer: 0,
    explanation: "轉置矩陣為行列互換：第一列 (1, 2) 變第一行，第二列 (3, 4) 變第二行，得 $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^6_2$ 之值為何？",
    options: ["15", "30", "12", "36"],
    answer: 0,
    explanation: "$C^6_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "袋中有 5 顆球，其中 2 顆白球、3 顆黑球。隨機抽取 1 顆，抽中「白球」的機率為何？",
    options: ["2/5", "3/5", "1/2", "1/5"],
    answer: 0,
    explanation: "白球佔總數的比例為 $2/5$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "圓方程式 $(x - 1)^2 + (y + 2)^2 = 16$ 的圓心坐標與半徑分別為何？",
    options: ["圓心為 $(1, -2)$，半徑為 4", "圓心為 $(-1, 2)$，半徑為 16", "圓心為 $(1, -2)$，半徑為 16", "圓心為 $(1, 2)$，半徑為 4"],
    answer: 0,
    explanation: "標準式 $(x-h)^2 + (y-k)^2 = r^2$。圓心為 $(h, k) = (1, -2)$，半徑 $r = \\sqrt{16} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 5x + 3$ 的導數 $f'(x)$ 之值為何？",
    options: ["5", "3", "0", "5x"],
    answer: 0,
    explanation: "一次函數的導數即為其直線斜率：$(5x+3)' = 5$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "計算多項式除法 $(x^2 - 1) \\div (x - 1)$ 所得的商式為何？",
    options: ["$x + 1$", "$x - 1$", "$x$", "1"],
    answer: 0,
    explanation: "平方差公式因式分解：$x^2 - 1 = (x - 1)(x + 1)$。除以 $(x - 1)$ 商式為 $x + 1$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $2^3 \\times 2^4$ 之結果為何？",
    options: ["$2^7 = 128$", "$2^{12}$", "$4^7$", "64"],
    answer: 0,
    explanation: "同底相乘指數相加：$2^{3+4} = 2^7 = 128$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "求銳角三角比 $\\sin^2 30^\\circ + \\cos^2 30^\\circ$ 之值為何？",
    options: ["1", "0", "1/2", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "同角三角函數平方關係恆等式：$\\sin^2\\theta + \\cos^2\\theta = 1$ 恆成立。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "若向量 $\\vec{u} = (2, 3)$ 與純量 $k = 4$，計算純量乘積 $k\\vec{u}$ 為何？",
    options: ["(8, 12)", "(6, 7)", "(8, 3)", "(2, 12)"],
    answer: 0,
    explanation: "$4(2, 3) = (4\\times 2, 4\\times 3) = (8, 12)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，原點 $O$ 的坐標為下列何者？",
    options: ["(0, 0, 0)", "(1, 1, 1)", "(0, 0)", "(0, 0, 1)"],
    answer: 0,
    explanation: "三維立體坐標系的原點為 $(0, 0, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階零矩陣 $\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$ 與任意同階矩陣 $A$ 相乘之結果為何？",
    options: ["零矩陣 $O$", "矩陣 $A$", "單位矩陣 $I$", "純量 0"],
    answer: 0,
    explanation: "零矩陣相當於實數中的 0，任何矩陣乘零矩陣結果必為零矩陣。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算 $0!$（零的階乘）依數學規定的數值為何？",
    options: ["1", "0", "無定義", "-1"],
    answer: 0,
    explanation: "在組合數學與伽瑪函數中，為滿足遞迴式 $n! = n(n-1)!$，數學嚴格定義 $0! = 1$。",
    difficulty: "基礎"
  }
];

batch7.forEach((q, idx) => {
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

console.log(`New Math A count after batch 7: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
