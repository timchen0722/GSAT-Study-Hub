const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 2: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch2 = [
  {
    category: "數與式",
    question: "設 $a, b, c$ 為正實數且滿足 $a b c = 8$。由三變數算幾不等式，求 $a + b + c$ 的最小值為何？",
    options: ["6", "8", "12", "4"],
    answer: 0,
    explanation: "三變數算幾不等式：$\\frac{a+b+c}{3} \\ge \\sqrt[3]{abc} = \\sqrt[3]{8} = 2 \\implies a+b+c \\ge 3 \\times 2 = 6$。等號成立於 $a=b=c=2$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次多項式函數 $f(x) = x^3 - 6x^2 + 15x - 8$ 可以改寫為 $f(x) = (x - h)^3 + p(x - h) + k$。則該三次函數圖形的「對稱中心（反曲點）」坐標 $(h, k)$ 為何？",
    options: ["(2, 6)", "(2, 0)", "(3, 8)", "(-2, 6)"],
    answer: 0,
    explanation: "三次多項式 $f(x) = ax^3 + bx^2 + cx + d$ 的對稱中心橫坐標為 $h = -\\frac{b}{3a} = -\\frac{-6}{3(1)} = 2$。代入計算縱坐標：$f(2) = 2^3 - 6(2^2) + 15(2) - 8 = 8 - 24 + 30 - 8 = 6$。對稱中心為 $(2, 6)$。",
    difficulty: "中等"
  },
  {
    category: "多項式函數",
    question: "若整係數多項式 $P(x) = 2x^3 - 5x^2 + x + 2$ 有一一次因式為 $x - 2$，則方程式 $P(x) = 0$ 的另外兩個根為何？",
    options: ["$1$ 與 $-1/2$", "$-1$ 與 $1/2$", "$2$ 與 $-1$", "$1$ 與 $2$"],
    answer: 0,
    explanation: "以綜合除法將 $P(x)$ 除以 $x - 2$：商式為 $2x^2 - x - 1 = (2x + 1)(x - 1)$。令其為 0 解得 $x = 1$ 與 $x = -1/2$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 3 \\approx 0.4771$。將 $\\left(\\frac{1}{3}\\right)^{20}$ 化為小數，自小數點後第幾位開始出現第一個不為 0 的數字？",
    options: ["第 10 位", "第 9 位", "第 11 位", "第 20 位"],
    answer: 0,
    explanation: "$\\log_{10}\\left(3^{-20}\\right) = -20 \\times \\log_{10} 3 \\approx -20 \\times 0.4771 = -9.542 = -10 + 0.458$。首數為 $-10$，故在小數點後第 10 位開始出現第一個不為 0 的數字。",
    difficulty: "中等"
  },
  {
    category: "指數與對數",
    question: "利用對數換底公式化簡 $(\\log_2 3)(\\log_3 5)(\\log_5 8)$ 之值為何？",
    options: ["3", "8", "2", "5"],
    answer: 0,
    explanation: "換為自然對數：$\\frac{\\ln 3}{\\ln 2} \\times \\frac{\\ln 5}{\\ln 3} \\times \\frac{\\ln 8}{\\ln 5} = \\frac{\\ln 8}{\\ln 2} = \\log_2 8 = \\log_2(2^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，內角 $A = 60^\\circ$，其對邊 $a = 6$。則 $\\Delta ABC$ 外接圓的半徑 $R$ 為何？",
    options: ["$2\\sqrt{3}$", "$3\\sqrt{3}$", "$4\\sqrt{3}$", "6"],
    answer: 0,
    explanation: "由正弦定理：$2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 60^\\circ} = \\frac{6}{\\sqrt{3}/2} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\implies R = 2\\sqrt{3}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知角 $\\theta$ 滿足 $\\sin\\theta < 0$ 且 $\\cos\\theta > 0$，則角 $\\theta$ 落在平面坐標系的第幾象限？",
    options: ["第四象限", "第一象限", "第二象限", "第三象限"],
    answer: 0,
    explanation: "坐標平面上，橫坐標 $x = r\\cos\\theta > 0$ 位於右側半平面，縱坐標 $y = r\\sin\\theta < 0$ 位於下側半平面，交集為第四象限。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "利用三倍角公式 $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$。若已知 $\\sin\\theta = \\frac{1}{3}$，求 $\\sin 3\\theta$ 之值為何？",
    options: ["23/27", "7/9", "1/27", "13/27"],
    answer: 0,
    explanation: "$\\sin 3\\theta = 3\\left(\\frac{1}{3}\\right) - 4\\left(\\frac{1}{3}\\right)^3 = 1 - 4\\left(\\frac{1}{27}\\right) = 1 - \\frac{4}{27} = \\frac{23}{27}$。",
    difficulty: "中等"
  },
  {
    category: "平面向量",
    question: "在平面上，點 $O$ 為原點，$A, B$ 為相異兩點。若點 $P$ 滿足向量關係式 $\\vec{OP} = \\frac{3}{5}\\vec{OA} + \\frac{2}{5}\\vec{OB}$，則點 $P$ 位於何處？",
    options: ["線段 $AB$ 上，且 $\\overline{AP}:\\overline{PB} = 2:3$", "線段 $AB$ 上，且 $\\overline{AP}:\\overline{PB} = 3:2$", "線段 $AB$ 的延長線上", "$\\Delta OAB$ 內部"],
    answer: 0,
    explanation: "三點共線與分點公式：係數和 $\\frac{3}{5} + \\frac{2}{5} = 1$ 且兩係數皆為正數，表示點 $P$ 落在線段 $AB$ 內部，且交叉比例滿足 $\\overline{AP} : \\overline{PB} = 2 : 3$。",
    difficulty: "中等"
  },
  {
    category: "平面向量",
    question: "若 $\\Delta ABC$ 的三個頂點坐標為 $A(1, 4), B(-2, 3), C(4, -1)$，則其重心 $G$ 的坐標為何？",
    options: ["(1, 2)", "(3, 6)", "(1, 3)", "(2, 2)"],
    answer: 0,
    explanation: "三角形重心公式為三頂點坐標的算術平均數：$G = \\left(\\frac{1 + (-2) + 4}{3}, \\frac{4 + 3 + (-1)}{3}\\right) = \\left(\\frac{3}{3}, \\frac{6}{3}\\right) = (1, 2)$。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "由空間中三向量 $\\vec{u} = (2, 0, 0), \\vec{v} = (0, 3, 0), \\vec{w} = (0, 0, 4)$ 為三鄰邊所構成的四面體（三角錐）體積為何？",
    options: ["4", "24", "8", "12"],
    answer: 0,
    explanation: "由三向量張成的平行六面體體積為 $|\\det| = 2 \\times 3 \\times 4 = 24$。而以該三向量為鄰邊的四面體體積為平行六面體體積的 $\\frac{1}{6}$，故 $V = \\frac{1}{6} \\times 24 = 4$。",
    difficulty: "中等"
  },
  {
    category: "空間向量與外積",
    question: "關於空間向量外積的代數性質，下列敘述何者恆成立？",
    options: ["$\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$（反交換律）", "$\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$", "$\\vec{a} \\times \\vec{a} = |\\vec{a}|^2$", "若 $\\vec{a} \\times \\vec{b} = \\vec{0}$，則 $\\vec{a}$ 必垂直於 $\\vec{b}$"],
    answer: 0,
    explanation: "由右手定則與行列式性質，對調兩向量位置會使外積方向完全相反，即 $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$；若外積為零向量則兩向量平行或至少一者為零向量。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "平面 $E_1: x + y = 2$ 與平面 $E_2: y + z = 3$ 兩平面法向量的夾角 $\\theta$ 之餘弦值 $|\\cos\\theta|$ 為何？",
    options: ["1/2", "\\sqrt{2}/2", "1/4", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "法向量分別為 $\\vec{n}_1 = (1, 1, 0)$ 與 $\\vec{n}_2 = (0, 1, 1)$。內積 $\\vec{n}_1 \\cdot \\vec{n}_2 = 1(0) + 1(1) + 0(1) = 1$。模長 $|\\vec{n}_1| = \\sqrt{2}, |\\vec{n}_2| = \\sqrt{2}$。夾角餘弦 $|\\cos\\theta| = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$（兩平面夾角為 60° 或 120°）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "二階鏡射矩陣 $M$ 將平面向量對直線 $y = x$ 作鏡射變換，該矩陣為 $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$。若對任意向量連續進行兩次該鏡射變換（即 $M^2$），所得變換矩陣為？",
    options: ["$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$（單位矩陣，即變換還原）", "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "幾何意義：將任意圖形對同一鏡射軸鏡射兩次，圖形必定回到原始位置，故鏡射矩陣平方恆為單位矩陣 $M^2 = I$。且鏡射矩陣之行列式恆為 -1。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "二階線性變換矩陣 $T = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$ 作用於面積為 5 的平面圖形 $S$ 上，變換後新圖形 $S'$ 的面積為多少？",
    options: ["30", "15", "25", "10"],
    answer: 0,
    explanation: "二階線性變換對平面面積的放大倍率恰好等於矩陣行列式的絕對值：$|\\det(T)| = |3(2) - 0| = 6$。因此新面積為 $5 \\times 6 = 30$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "5 個人圍坐在一張無旋轉標記的圓桌聚餐，共有多少種相異的坐法？",
    options: ["24 種", "120 種", "60 種", "12 種"],
    answer: 0,
    explanation: "圓形排列公式：$n$ 個相異元素繞圓排列的方法數為 $(n - 1)!$。故 5 人圍坐有 $(5 - 1)! = 4! = 24$ 種相異坐法。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 6 顆相異的寶石串成一條可翻轉的項鍊，共有多少種不同的串法？",
    options: ["60 種", "120 種", "24 種", "720 種"],
    answer: 0,
    explanation: "項鍊排列（手環排列）：因項鍊翻轉至背面後順時針與逆時針視角重合，排法數為圓形排列的一半：$\\frac{(n-1)!}{2} = \\frac{(6-1)!}{2} = \\frac{120}{2} = 60$ 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "設 $A, B$ 為同一樣本空間中的兩獨立事件，已知 $P(A) = 0.4$ 且 $P(B) = 0.5$。則交集機率 $P(A \\cap B)$ 與聯集機率 $P(A \\cup B)$ 分別為何？",
    options: ["$P(A \\cap B) = 0.2$，$P(A \\cup B) = 0.7$", "$P(A \\cap B) = 0.9$，$P(A \\cup B) = 0.2$", "$P(A \\cap B) = 0$，$P(A \\cup B) = 0.9$", "$P(A \\cap B) = 0.2$，$P(A \\cup B) = 0.9$"],
    answer: 0,
    explanation: "獨立事件定義：$P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$。聯集機率加法原理：$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.2 = 0.7$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "箱中有 5 支籤，其中恰有 1 支為中獎籤。甲、乙、丙 3 人依序不放回各抽一支籤，請問「第三個抽籤的丙」中獎的機率為何？",
    options: ["1/5（抽籤順序與中獎機率無關，完全公平）", "1/3", "1/4", "3/5"],
    answer: 0,
    explanation: "抽籤公平性原理：在不放回抽樣中，每個人抽中特獎的機率皆均等。丙中獎的機率計算：第 1 人沒中且第 2 人沒中且第 3 人中 $= \\frac{4}{5} \\times \\frac{3}{4} \\times \\frac{1}{3} = \\frac{1}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "拋物線方程式 $(x - 1)^2 = 12(y - 2)$ 的「正焦弦長」為多少？",
    options: ["12", "6", "3", "24"],
    answer: 0,
    explanation: "標準式 $(x - h)^2 = 4c(y - k)$。此處 $4c = 12$，正焦弦長公式為 $|4c| = 12$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$ 的兩條漸近線方程式為？",
    options: ["$y = \\pm \\frac{3}{5} x$", "$y = \\pm \\frac{5}{3} x$", "$y = \\pm \\frac{9}{25} x$", "$x = \\pm \\frac{3}{5} y$"],
    answer: 0,
    explanation: "雙曲線 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 之漸近線為 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0 \\implies y = \\pm \\frac{b}{a} x$。此處 $a = 5, b = 3$，故漸近線為 $y = \\pm \\frac{3}{5} x$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "若一圓錐曲線的離心率為 $e = \\sqrt{2} > 1$，則該圓錐曲線的幾何圖形必然是？",
    options: ["雙曲線（等軸雙曲線）", "橢圓", "拋物線", "圓形"],
    answer: 0,
    explanation: "圓錐曲線離心率分類：$e = 0$ 為圓；$0 < e < 1$ 為橢圓；$e = 1$ 為拋物線；$e > 1$ 為雙曲線（特別地，$e = \\sqrt{2}$ 時為漸近線垂直的等軸雙曲線）。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求曲線 $y = x^2 - 4x + 3$ 在點 $(3, 0)$ 處的切線方程式為何？",
    options: ["$y = 2x - 6$", "$y = 2x - 3$", "$y = -2x + 6$", "$y = x - 3$"],
    answer: 0,
    explanation: "導函數 $y' = 2x - 4$。在點 $(3, 0)$ 處切線斜率 $m = 2(3) - 4 = 2$。由點斜式：$y - 0 = 2(x - 3) \\implies y = 2x - 6$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "設函數 $f(x) = (x^2 + 1)(2x - 3)$，利用乘法微分法則求其導數 $f'(1)$ 之值為何？",
    options: ["2", "4", "0", "-2"],
    answer: 0,
    explanation: "乘法微分法則 $(uv)' = u'v + uv'$。$f'(x) = (2x)(2x - 3) + (x^2 + 1)(2)$。代入 $x = 1$ 得 $f'(1) = 2(1)(2 - 3) + (1 + 1)(2) = 2(-1) + 2(2) = -2 + 4 = 2$。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "化簡有理化分母：$\\frac{2}{\\sqrt{5} - \\sqrt{3}}$ 之結果為何？",
    options: ["$\\sqrt{5} + \\sqrt{3}$", "$\\frac{\\sqrt{5} + \\sqrt{3}}{2}$", "$2(\\sqrt{5} + \\sqrt{3})$", "$\\sqrt{5} - \\sqrt{3}$"],
    answer: 0,
    explanation: "分子分母同乘共軛式 $(\\sqrt{5} + \\sqrt{3})$：$\\frac{2(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{5 - 3} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{2} = \\sqrt{5} + \\sqrt{3}$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (2, 1)$ 與 $\\vec{v} = (1, 3)$，則向量 $2\\vec{u} - \\vec{v}$ 的坐標表示為何？",
    options: ["(3, -1)", "(5, -1)", "(3, 1)", "(1, -1)"],
    answer: 0,
    explanation: "$2\\vec{u} - \\vec{v} = 2(2, 1) - (1, 3) = (4, 2) - (1, 3) = (4 - 1, 2 - 3) = (3, -1)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "點 $P(2, 3, -1)$ 到平面 $E: x - 2y + 2z = 3$ 的垂直距離為何？",
    options: ["3", "1", "9", "2"],
    answer: 0,
    explanation: "點到平面距離公式：$d = \\frac{|1(2) - 2(3) + 2(-1) - 3|}{\\sqrt{1^2 + (-2)^2 + 2^2}} = \\frac{|2 - 6 - 2 - 3|}{\\sqrt{1 + 4 + 4}} = \\frac{|-9|}{3} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 6 本完全相異的書「平分」裝入 3 個完全相同的紙箱（每箱各 2 本，不分紙箱順序），共有多少種分法？",
    options: ["15 種", "90 種", "45 種", "30 種"],
    answer: 0,
    explanation: "相異物均分不計組別順序：先選法為 $C^6_2 \\times C^4_2 \\times C^2_2 = 15 \\times 6 \\times 1 = 90$ 種。因為 3 個箱子完全相同且數量均為 2 本，需消除 3 組的排列數 $3! = 6$。故分法為 $\\frac{90}{3!} = \\frac{90}{6} = 15$ 種。",
    difficulty: "進階"
  },
  {
    category: "三角函數",
    question: "若 $\\tan\\theta = 2$，求 $\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta}$ 之值為何？",
    options: ["3", "1/3", "-3", "2"],
    answer: 0,
    explanation: "分子分母同除以 $\\cos\\theta$：$\\frac{\\frac{\\sin\\theta}{\\cos\\theta} + 1}{\\frac{\\sin\\theta}{\\cos\\theta} - 1} = \\frac{\\tan\\theta + 1}{\\tan\\theta - 1} = \\frac{2 + 1}{2 - 1} = \\frac{3}{1} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "不等式 $(x - 1)(x - 3)(x + 2) < 0$ 的實數解範圍為何？",
    options: ["$x < -2$ 或 $1 < x < 3$", "$-2 < x < 1$ 或 $x > 3$", "$-2 < x < 3$", "$x > 3$"],
    answer: 0,
    explanation: "數線標根穿線法：根為 $-2, 1, 3$。最右側 $x > 3$ 區間為正，向左交替穿線：$(1, 3)$ 區間為負；$(-2, 1)$ 區間為正；$x < -2$ 區間為負。欲求 $< 0$，解為 $x < -2$ 或 $1 < x < 3$。",
    difficulty: "基礎"
  }
];

batch2.forEach((q, idx) => {
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

console.log(`New Math A count after batch 2: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
