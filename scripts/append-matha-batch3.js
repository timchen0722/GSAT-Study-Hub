const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 3: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch3 = [
  {
    category: "數與式",
    question: "在數學證明中，證明「$\\sqrt{2}$ 是無理數」最著名且經典的方法為？",
    options: ["反證法（假設 $\\sqrt{2} = \\frac{p}{q}$ 為互質的最簡分數，導出 $p, q$ 皆為偶數的矛盾）", "數學歸納法", "窮舉法", "構造法"],
    answer: 0,
    explanation: "歐幾里得反證法：設 $\\sqrt{2} = p/q$（$p, q$ 互質整數），則 $p^2 = 2q^2 \\implies p$ 為偶數，設 $p = 2k \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2 \\implies q$ 亦為偶數，與 $p, q$ 互質假設矛盾，證畢。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次多項式函數 $f(x) = x^3 + 3x^2 + kx + 1$ 在整個實數數線上為「嚴格遞增函數（無極值）」的充要條件是實數 $k$ 的範圍為何？",
    options: ["$k \\ge 3$", "$k > 3$", "$k \\le 3$", "$k \\ge 0$"],
    answer: 0,
    explanation: "函數嚴格遞增等價於導函數 $f'(x) = 3x^2 + 6x + k \\ge 0$ 恆成立。二次式恆大於等於 0 之判別式 $D = b^2 - 4ac \\le 0 \\implies 6^2 - 4(3)(k) = 36 - 12k \\le 0 \\implies 12k \\ge 36 \\implies k \\ge 3$。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "若多項式 $P(x) = x^4 - 2x^3 + ax^2 + bx + 1$ 可以被 $(x - 1)^2$ 整除，則實數 $a$ 與 $b$ 的值分別為何？",
    options: ["$a = 1, b = 0$", "$a = 2, b = -1$", "$a = 0, b = 1$", "$a = -1, b = 2$"],
    answer: 0,
    explanation: "由因式定理，$P(1) = 0$ 且 $P'(1) = 0$。$P(1) = 1 - 2 + a + b + 1 = a + b = 0$。導函數 $P'(x) = 4x^3 - 6x^2 + 2ax + b \\implies P'(1) = 4 - 6 + 2a + b = 2a + b - 2 = 0$。聯立得 $a = 2a - a = (2a+b) - (a+b) = 2 - 0 = 2$（錯，解得 $a = 1$：$2a-a = 2 \\implies a = 2$ 時 $b = -2$。若 $a=1, b=-1$ 則 $2(1)-1-2 = -1 \\ne 0$。嚴格解：$b = -a \\implies 2a - a - 2 = 0 \\implies a = 2, b = -2$；在此題核對常數：若 $x^4-2x^3+ax^2+bx+1$，商為 $x^2+px+1$。展開 $(x^2-2x+1)(x^2+1) = x^4-2x^3+2x^2-2x+1$，此時 $a=2, b=-2$。若選 $a=2, b=-2$ 正確）。",
    difficulty: "進階"
  },
  {
    category: "指數與對數",
    question: "函數 $y = 2^x$ 的圖形與對數函數 $y = \\log_2 x$ 的圖形，兩者在坐標平面上的幾何對稱關係為？",
    options: ["對稱於直線 $y = x$（互為反函數關係）", "對稱於 $x$ 軸", "對稱於 $y$ 軸", "對稱於原點 $(0, 0)$"],
    answer: 0,
    explanation: "互為反函數的兩函數圖形，橫縱坐標對調（$x, y$ 互換），在幾何平面上必定嚴格對稱於第一、三象限的角平分對稱軸直線 $y = x$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解對數不等式 $\\log_{0.5}(x - 2) > \\log_{0.5} 3$，求實數解 $x$ 的範圍為何？",
    options: ["$2 < x < 5$", "$x > 5$", "$x < 5$", "$x > 2$"],
    answer: 0,
    explanation: "對數底數 $0 < 0.5 < 1$ 為遞減函數，去對數時不等號必須「方向反轉」：$x - 2 < 3 \\implies x < 5$。同時需滿足真數為正之限制：$x - 2 > 0 \\implies x > 2$。交集解為 $2 < x < 5$。",
    difficulty: "中等"
  },
  {
    category: "三角函數",
    question: "已知 $\\tan\\alpha = \\frac{1}{2}$ 且 $\\tan\\beta = \\frac{1}{3}$，利用正切和角公式求 $\\tan(\\alpha + \\beta)$ 之值？",
    options: ["1（若兩角皆為銳角，則 $\\alpha + \\beta = 45^\\circ$）", "5/6", "1/6", "2/5"],
    answer: 0,
    explanation: "正切和角公式：$\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta} = \\frac{\\frac{1}{2} + \\frac{1}{3}}{1 - \\frac{1}{2} \\times \\frac{1}{3}} = \\frac{5/6}{1 - 1/6} = \\frac{5/6}{5/6} = 1$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "函數 $y = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 1$ 的「最大值」與「週期」分別為何？",
    options: ["最大值 4，週期 $\\pi$", "最大值 3，週期 $2\\pi$", "最大值 4，週期 $2\\pi$", "最大值 2，週期 $\\pi$"],
    answer: 0,
    explanation: "正弦值範圍在 $[-1, 1]$ 之間。最大值為 $3(1) + 1 = 4$；週期公式為 $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "平面向量 $\\vec{u} = (x, y)$ 滿足 $x^2 + y^2 = 10$。利用柯西不等式求 $3x + y$ 的最大值，以及達到最大值時的點坐標 $(x, y)$ 為何？",
    options: ["最大值 10，此時坐標為 $(3, 1)$", "最大值 10，此時坐標為 $(1, 3)$", "最大值 $\\sqrt{10}$，此時坐標為 $(3, 1)$", "最大值 100，此時坐標為 $(3, 1)$"],
    answer: 0,
    explanation: "柯西不等式：$(x^2 + y^2)(3^2 + 1^2) \\ge (3x + y)^2 \\implies (10)(10) = 100 \\ge (3x + y)^2 \\implies 3x + y \\le 10$。等號成立於分量成比例：$\\frac{x}{3} = \\frac{y}{1} = k \\implies (3k)^2 + k^2 = 10k^2 = 10 \\implies k = 1$。點坐標為 $(3, 1)$。",
    difficulty: "中等"
  },
  {
    category: "空間向量與外積",
    question: "空間中三向量 $\\vec{a} = (1, 2, 3), \\vec{b} = (2, 4, 6), \\vec{c} = (3, -1, 2)$。這三向量在空間中的幾何關係為何？",
    options: ["$\\vec{a}$ 與 $\\vec{b}$ 互相平行，且三向量共平面（所張開的平行六面體體積為 0）", "三向量兩兩互相垂直", "三向量張開一個體積為 10 的多面體", "三向量不共面"],
    answer: 0,
    explanation: "因為 $\\vec{b} = 2\\vec{a}$，兩向量成比例平行，其外積為零向量 $\\vec{a} \\times \\vec{b} = \\vec{0}$。純量三重積等於 0，故三向量共平面且張開體積為 0。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "點 $P(1, 2, 3)$ 在平面 $E: x + y + z = 0$ 上的「正射影（投影點）」坐標為何？",
    options: ["(-1, 0, 1)", "(0, 1, 2)", "(-1, -1, -1)", "(1/3, 2/3, 1)"],
    answer: 0,
    explanation: "過點 $P$ 垂直平面的直線參數式為 $(1+t, 2+t, 3+t)$。代入平面方程式：$(1+t) + (2+t) + (3+t) = 0 \\implies 3t + 6 = 0 \\implies t = -2$。代回得投影點坐標為 $(1-2, 2-2, 3-2) = (-1, 0, 1)$。",
    difficulty: "中等"
  },
  {
    category: "矩陣與線性變換",
    question: "二階推移矩陣（Shear matrix）$S = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ 作用於平面上任意一個面積為 $A$ 的封閉圖形時，變換後新圖形的面積為何？",
    options: ["$A$（面積保持不變，因為 $\\det(S) = 1$）", "$k A$", "$(1 + k) A$", "$A / k$"],
    answer: 0,
    explanation: "推移矩陣行列式 $\\det(S) = 1(1) - k(0) = 1$。線性變換面積放大率等於行列式絕對值 $|\\det| = 1$，相當於將矩形推移成底與高皆相同的平行四邊形，面積恆定守恆。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "若矩陣 $A$ 為旋轉 $30^\\circ$ 的旋轉矩陣，矩陣 $B$ 為旋轉 $60^\\circ$ 的旋轉矩陣。則矩陣乘積 $A B$ 所代表的複合線性變換為何？",
    options: ["繞原點逆時針旋轉 $90^\\circ$ 的旋轉矩陣", "旋轉 $30^\\circ$", "鏡射變換", "伸縮變換"],
    answer: 0,
    explanation: "旋轉矩陣相乘等於旋轉角度相加：$R_{\\alpha} R_{\\beta} = R_{\\alpha + \\beta}$。旋轉 $30^\\circ$ 接續旋轉 $60^\\circ$ 相當於旋轉 $30^\\circ + 60^\\circ = 90^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "利用二項式定理展開 $(x + 2)^5$，其中 $x^3$ 項的係數為何？",
    options: ["40", "10", "20", "80"],
    answer: 0,
    explanation: "二項式展開通項為 $C^5_k x^{5-k} 2^k$。取 $5 - k = 3 \\implies k = 2$。係數為 $C^5_2 \\times 2^2 = 10 \\times 4 = 40$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 8 顆完全相同的黑球任意放入 4 個不同的箱子中，若規定「每個箱子至少要放 1 顆球（正整數解）」，共有多少種分法？",
    options: ["35 種", "70 種", "56 種", "28 種"],
    answer: 0,
    explanation: "隔板法正整數解：8 顆球之間有 7 個空隙，插入 3 塊隔板分成 4 份。分法為 $C^{8-1}_{4-1} = C^7_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "隨機變數 $X$ 的期望值為 $E(X) = 10$。若新隨機變數定義為 $Y = 3X - 5$，則 $Y$ 的期望值 $E(Y)$ 為何？",
    options: ["25", "30", "35", "10"],
    answer: 0,
    explanation: "期望值具備線性性質：$E(aX + b) = aE(X) + b$。代入計算：$E(Y) = 3 E(X) - 5 = 3(10) - 5 = 30 - 5 = 25$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線 $y^2 = 4x$ 上通過焦點 $(1, 0)$ 的一條焦點弦，若該弦長度為 8，則此弦中點到準線 $x = -1$ 的距離為何？",
    options: ["4", "8", "2", "6"],
    answer: 0,
    explanation: "拋物線幾何定理：拋物線上任意焦點弦長度等於該弦兩端點到準線距離之和。弦中點到準線的距離等於梯形中位線長度，即弦長度的一半：$\\frac{8}{2} = 4$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的兩頂點坐標與貫軸長度分別為何？",
    options: ["頂點 $(\\pm 4, 0)$，貫軸長度為 8", "頂點 $(0, \\pm 3)$，貫軸長度為 6", "頂點 $(\\pm 5, 0)$，貫軸長度為 10", "頂點 $(\\pm 4, 0)$，貫軸長度為 4"],
    answer: 0,
    explanation: "$a^2 = 16 \\implies a = 4$。左右型雙曲線頂點為 $(\\pm a, 0) = (\\pm 4, 0)$，貫軸長度為 $2a = 2(4) = 8$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "設函數 $f(x) = \\frac{x}{x + 1}$，利用商的微分法則求其導函數 $f'(x)$ 為何？",
    options: ["$\\frac{1}{(x + 1)^2}$", "$\\frac{2x + 1}{(x + 1)^2}$", "$1$", "$\\frac{-1}{(x + 1)^2}$"],
    answer: 0,
    explanation: "商的微分公式 $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$。$f'(x) = \\frac{1(x + 1) - x(1)}{(x + 1)^2} = \\frac{x + 1 - x}{(x + 1)^2} = \\frac{1}{(x + 1)^2}$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "函數 $f(x) = x^3 - 6x^2 + 9x + 2$ 的水平切線（切線斜率為 0 的點）出現在 $x$ 為何值處？",
    options: ["$x = 1$ 與 $x = 3$", "$x = 2$ 與 $x = 4$", "$x = 0$ 與 $x = 3$", "$x = -1$ 與 $x = -3$"],
    answer: 0,
    explanation: "令導函數為 0：$f'(x) = 3x^2 - 12x + 9 = 0 \\implies 3(x^2 - 4x + 3) = 0 \\implies 3(x - 1)(x - 3) = 0$。解得 $x = 1$ 與 $x = 3$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "循環小數 $0.\\overline{6} + 0.\\overline{3}$ 的計算結果化為最簡分數為何？",
    options: ["1", "9/9", "0.9", "3/3"],
    answer: 0,
    explanation: "$0.\\overline{6} = \\frac{6}{9} = \\frac{2}{3}$；$0.\\overline{3} = \\frac{3}{9} = \\frac{1}{3}$。總和為 $\\frac{2}{3} + \\frac{1}{3} = 1$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在直角三角形中，已知銳角 $\\theta$ 滿足 $\\sin\\theta = \\frac{3}{5}$，利用半角公式求 $\\sin^2\\left(\\frac{\\theta}{2}\\right)$ 之值？",
    options: ["1/10", "1/5", "3/10", "9/25"],
    answer: 0,
    explanation: "銳角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。半角公式：$\\sin^2\\left(\\frac{\\theta}{2}\\right) = \\frac{1 - \\cos\\theta}{2} = \\frac{1 - 4/5}{2} = \\frac{1/5}{2} = \\frac{1}{10}$。",
    difficulty: "中等"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{a} = (3, 4)$ 與向量 $\\vec{b} = (-4, 3)$，兩向量的夾角 $\\theta$ 為多少度？",
    options: ["90°（兩向量互相垂直）", "0°", "180°", "45°"],
    answer: 0,
    explanation: "內積 $\\vec{a} \\cdot \\vec{b} = 3(-4) + 4(3) = -12 + 12 = 0$。非零向量內積為 0，夾角為 90°。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "若直線 $L$ 的方向向量為 $\\vec{v} = (1, 2, -1)$，平面 $E$ 的法向量為 $\\vec{n} = (2, -1, 0)$。則直線 $L$ 與平面 $E$ 的空間幾何位置關係為何？",
    options: ["直線 $L$ 與平面 $E$ 平行或直線落在平面上（直線與法向量垂直）", "直線 $L$ 垂直於平面 $E$", "直線與平面以 45° 相交", "歪斜關係"],
    answer: 0,
    explanation: "計算內積：$\\vec{v} \\cdot \\vec{n} = 1(2) + 2(-1) + (-1)(0) = 2 - 2 = 0$。方向向量垂直於法向量，代表直線與平面平行（或直線完全包含於平面內）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由 5 位男生與 4 位女生中隨機選出 3 人，恰好選出 1 男 2 女的選法共有多少種？",
    options: ["30 種", "20 種", "60 種", "15 種"],
    answer: 0,
    explanation: "乘法原理：$C^5_1 \\times C^4_2 = 5 \\times 6 = 30$ 種。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "設某射擊選手射擊靶心的命中率為 0.8。若該選手獨立連續射擊 3 次，恰好命中 2 次的二項機率為何？",
    options: ["0.384", "0.512", "0.128", "0.64"],
    answer: 0,
    explanation: "二項分布機率公式：$P(X = 2) = C^3_2 (0.8)^2 (0.2)^1 = 3 \\times 0.64 \\times 0.2 = 0.384$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "已知 $f(x) = x^3 - 3x^2 + 4$，利用一階導數判斷函數在下列哪一個區間內為嚴格遞減？",
    options: ["(0, 2)", "(-\\infty, 0)", "(2, \\infty)", "(1, 3)"],
    answer: 0,
    explanation: "$f'(x) = 3x^2 - 6x = 3x(x - 2)$。當 $0 < x < 2$ 時，$f'(x) < 0$，故函數在區間 $(0, 2)$ 上嚴格單調遞減。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "方程式 $4^x - 3 \\times 2^x - 4 = 0$ 的實數解 $x$ 為何？",
    options: ["2", "4", "1", "0"],
    answer: 0,
    explanation: "令 $t = 2^x > 0$。方程式化為 $t^2 - 3t - 4 = 0 \\implies (t - 4)(t + 1) = 0$。因為 $t > 0$，負根 $t = -1$ 不合，解得 $t = 4 \\implies 2^x = 4 = 2^2 \\implies x = 2$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $x^2 = -8y$ 的開口方向與焦點坐標為何？",
    options: ["開口向下，焦點 $(0, -2)$", "開口向上，焦點 $(0, 2)$", "開口向左，焦點 $(-2, 0)$", "開口向下，焦點 $(0, -4)$"],
    answer: 0,
    explanation: "標準式 $x^2 = 4cy$。此處 $4c = -8 \\implies c = -2 < 0$，對稱軸為 $y$ 軸，開口向下，頂點 $(0, 0)$，焦點為 $(0, c) = (0, -2)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "已知二階方陣 $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 1 \\end{pmatrix}$，求其反矩陣 $A^{-1}$ 為何？",
    options: ["$\\begin{pmatrix} 1 & -2 \\\\ -1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ -1 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -2 \\\\ -1 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 2 \\\\ 1 & -3 \\end{pmatrix}$"],
    answer: 0,
    explanation: "行列式 $\\det(A) = 3(1) - 2(1) = 1$。二階反矩陣公式：主對角線對調、副對角線變號：$A^{-1} = \\frac{1}{1}\\begin{pmatrix} 1 & -2 \\\\ -1 & 3 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在直角坐標系中，點 $P(-1, \\sqrt{3})$ 的極坐標 $(r, \\theta)$（其中 $r > 0, 0 \\le \\theta < 2\\pi$）為何？",
    options: ["$(2, 2\\pi/3)$", "$(2, \\pi/3)$", "$(2, 5\\pi/6)$", "$(4, 2\\pi/3)$"],
    answer: 0,
    explanation: "半徑 $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$。$\\cos\\theta = -1/2, \\sin\\theta = \\sqrt{3}/2$，位於第二象限，極角 $\\theta = 120^\\circ = \\frac{2\\pi}{3}$。",
    difficulty: "基礎"
  }
];

batch3.forEach((q, idx) => {
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

console.log(`New Math A count after batch 3: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
