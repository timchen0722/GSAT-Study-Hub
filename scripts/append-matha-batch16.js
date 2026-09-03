const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 16: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch16 = [
  {
    category: "數與式",
    question: "解有理分式不等式：$\\frac{x - 1}{x - 3} \\le 0$。在確保分母不為 0（即 $x \\ne 3$）的條件下，該不等式的完整實數解集合為？",
    options: ["$1 \\le x < 3$（兩邊同乘 $(x - 3)^2 > 0$ 轉化為 $(x - 1)(x - 3) \\le 0$ 且 $x \\ne 3$）", "$1 < x < 3$", "$1 \\le x \\le 3$", "$x \\le 1$ 或 $x > 3$"],
    answer: 0,
    explanation: "分式不等式求解原則：商的符號等於積的符號，$\\frac{x-1}{x-3} \\le 0 \\iff (x-1)(x-3) \\le 0$ 且分母 $x - 3 \\ne 0$。由根號穿線法解得 $1 \\le x < 3$（注意 $x=3$ 為開區間不可取）。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "三次實係數多項式函數 $f(x) = x^3 + 3x^2 + 3x + 1 = (x + 1)^3$ 在整個實數域 $\\mathbb{R}$ 上的圖形單調性特徵為？",
    options: ["「在整個實數域上為嚴格遞增函數（無任何相對極值）」", "具有一個局部極大值與一個局部極小值", "在整個實數域上為嚴格遞減函數", "在 $x = -1$ 處具有局部極小值"],
    answer: 0,
    explanation: "一階導函數 $f'(x) = 3x^2 + 6x + 3 = 3(x + 1)^2 \\ge 0$。一階導數恆大於等於 0，僅在單點 $x = -1$ 處切線水平，故函數在全實數域上為嚴格單調遞增曲線，無極值點。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "解指數不等式：$(1/2)^x < 1/8$。利用底數 $a = 1/2 < 1$ 時指數函數遞減的單調性質，該不等式的解為？",
    options: ["$x > 3$（因 $1/8 = (1/2)^3$，底數小於 1 時取對數方向反轉：$x > 3$）", "$x < 3$", "$x > 4$", "$x < 1/3$"],
    answer: 0,
    explanation: "底數介於 0 與 1 之間時，指數越大數值越小：$(1/2)^x < (1/2)^3 \\iff x > 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "在 $\\Delta ABC$ 中，已知角 $\\angle A = 30^\\circ$，其對邊長度為 $a = 6$。利用正弦定理 $\\frac{a}{\\sin A} = 2R$，該三角形的「外接圓半徑 $R$」為多少？",
    options: ["6（$2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 30^\\circ} = \\frac{6}{1/2} = 12 \\implies R = 6$）", "12", "3", "$6\\sqrt{3}$"],
    answer: 0,
    explanation: "正弦定理外接圓半徑：$2R = \\frac{a}{\\sin A} = \\frac{6}{1/2} = 12 \\implies R = 6$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (4, 2)$ 與非零向量 $\\vec{v} = (3, 4)$。向量 $\\vec{u}$ 在向量 $\\vec{v}$ 上的「正射影向量 $\\text{Proj}_{\\vec{v}}\\vec{u}$」之坐標為？",
    options: ["$(\\frac{12}{5}, \\frac{16}{5})$（公式：$\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2} \\vec{v} = \\frac{4(3)+2(4)}{3^2+4^2}(3, 4) = \\frac{20}{25}(3, 4) = \\frac{4}{5}(3, 4) = (2.4, 3.2)$）", "(3, 4)", "(4, 2)", "(1.2, 1.6)"],
    answer: 0,
    explanation: "正射影向量公式：$\\text{Proj}_{\\vec{v}}\\vec{u} = (\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|^2})\\vec{v} = \\frac{12+8}{25}(3, 4) = \\frac{4}{5}(3, 4) = (\\frac{12}{5}, \\frac{16}{5})$。",
    difficulty: "中等"
  },
  {
    category: "空間向量與外積",
    question: "在三維空間直角坐標系中，由不共線的三點 $A, B, C$ 所構成的 $\\Delta ABC$ 之「幾何面積公式」，利用向量外積可簡潔表示為？",
    options: ["$\\frac{1}{2} |\\vec{AB} \\times \\vec{AC}|$（外積模長等於所張平行四邊形面積，三角形為其一半）", "$|\\vec{AB} \\times \\vec{AC}|$", "$\\frac{1}{2} (\\vec{AB} \\cdot \\vec{AC})$", "$\\frac{1}{2} |\\vec{AB}| |\\vec{AC}| \\cos\\theta$"],
    answer: 0,
    explanation: "空間三角形向量面積：兩向量外積的長度 $|\vec{AB} \\times \\vec{AC}| = |\\vec{AB}| |\\vec{AC}| \\sin\\theta$ 精確等於兩向量張開的平行四邊形面積，三角形面積為其一半 $\\frac{1}{2}|\\vec{AB} \\times \\vec{AC}|$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，過點 $P(1, 1, 1)$ 且法向量為 $\\vec{n} = (2, 3, -1)$ 的平面方程式為？",
    options: ["$2x + 3y - z = 4$（公式：$2(x - 1) + 3(y - 1) - 1(z - 1) = 0 \\implies 2x + 3y - z = 2 + 3 - 1 = 4$）", "$2x + 3y - z = 0$", "$2x + 3y - z = 6$", "$x + y + z = 3$"],
    answer: 0,
    explanation: "點法式平面方程：$a(x - x_0) + b(y - y_0) + c(z - z_0) = 0 \\implies 2(x-1) + 3(y-1) - (z-1) = 0 \\implies 2x + 3y - z = 4$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "在平面線性變換中，關於以通過原點且與 $x$ 軸夾角為 $\\theta$ 的直線 $L$ 為對稱軸的「鏡射變換（反射矩陣 $M_\\theta = \\begin{pmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{pmatrix}$）」，其「行列式值 $\\det(M_\\theta)$」恆等於？",
    options: ["-1（$\\det(M_\\theta) = -\\cos^2 2\\theta - \\sin^2 2\\theta = -1$，保面積、保長度但改變圖形定向之正交變換）", "1", "0", "隨對稱軸角度改變"],
    answer: 0,
    explanation: "反射矩陣行列式：$\\det(M_\\theta) = -\\cos^2 2\\theta - \\sin^2 2\\theta = -1$。行列式絕對值為 1（保面積），負號代表鏡像翻轉改變幾何定向（右手系變左手系），且其自身平方為單位矩陣 $M_\\theta^2 = I$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "著名的「錯位排列（Derangement）」問題：若有 4 封寫給不同人的信件與 4 個寫好收件人地址的信封。若「4 封信全數裝錯信封（沒有任何一封信裝入正確信封）」，合法的裝錯方法總數 $D_4$ 為多少種？",
    options: ["9 種（錯位排列公式：$D_4 = 4!(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\frac{1}{4!}) = 24(0 + \\frac{1}{2} - \\frac{1}{6} + \\frac{1}{24}) = 12 - 4 + 1 = 9$）", "24 種", "12 種", "44 種"],
    answer: 0,
    explanation: "錯位排列經典數值：$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$。4 人全錯排列數為 9 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "若隨機變數 $X$ 服從二項分佈 $B(n, p)$，其中獨立試驗次數 $n = 100$，每次試驗成功機率 $p = 0.2$。則該隨機變數的「期望值 $E(X)$」與「變異數 $\\text{Var}(X)$」分別為？",
    options: ["$E(X) = 20, \\text{Var}(X) = 16$（公式：$E(X) = n p = 100 \\times 0.2 = 20$；$\\text{Var}(X) = n p (1 - p) = 100 \\times 0.2 \\times 0.8 = 16$）", "$E(X) = 20, \\text{Var}(X) = 4$", "$E(X) = 50, \\text{Var}(X) = 25$", "$E(X) = 100, \\text{Var}(X) = 20$"],
    answer: 0,
    explanation: "二項分佈核心公式：$E(X) = n p = 20$；$\\text{Var}(X) = n p (1 - p) = 20 \\times 0.8 = 16$；標準差 $\\sigma = \\sqrt{16} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "標準拋物線 $y^2 = 4cx$（$c > 0$）的光學切線性質指出：從焦點 $F(c, 0)$ 發出的光線射向拋物面上任意一點 $P$，經拋物線切線反射後，其反射光線的傳播方向必然？",
    options: ["「平行於拋物線的對稱軸（$x$ 軸）向外射出」", "折返回原點", "垂直於 $x$ 軸向上射出", "沿原路徑反向射回焦點"],
    answer: 0,
    explanation: "拋物線光學性質定理：拋物面任一點的切線與焦半徑的夾角，精確等於切線與平行於對稱軸直線的夾角（入射角等於反射角），為汽車大燈與探照燈物理幾何依據。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求多項式函數 $f(x) = 3x^2$ 在區間 $[0, 2]$ 上的定積分 $\\int_0^2 3x^2 dx$ 之數值（即曲線下方與 $x$ 軸圍成的面積）為何？",
    options: ["8（反導函數為 $x^3$，$\\int_0^2 3x^2 dx = [x^3]_0^2 = 2^3 - 0^3 = 8$）", "12", "6", "4"],
    answer: 0,
    explanation: "微積分基本定理：反導函數 $F(x) = x^3$。定積分 $\\int_0^2 3x^2 dx = F(2) - F(0) = 8 - 0 = 8$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數：$(\\sqrt{6} + 1)(\\sqrt{6} - 1)$ 之結果為何？",
    options: ["5（$(\\sqrt{6})^2 - 1^2 = 6 - 1 = 5$）", "6", "7", "1"],
    answer: 0,
    explanation: "平方差公式：$(\\sqrt{6})^2 - 1^2 = 6 - 1 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 - 16$ 完全因式分解後的結果為？",
    options: ["$(x - 4)(x + 4)$", "$(x - 4)^2$", "$(x + 4)^2$", "$x(x - 16)$"],
    answer: 0,
    explanation: "$x^2 - 16 = (x - 4)(x + 4)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算對數值：$\\log_4 64$ 之數值為何？",
    options: ["3（因 $4^3 = 64$）", "16", "4", "1"],
    answer: 0,
    explanation: "$64 = 4^3 \\implies \\log_4(4^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 270^\\circ$ 的正弦值 $\\sin 270^\\circ$ 為何？",
    options: ["-1", "1", "0", "不存在"],
    answer: 0,
    explanation: "$\\sin 270^\\circ = -1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (2, 5)$ 與 $\\vec{v} = (3, -1)$，求向量和 $\\vec{u} + \\vec{v}$ 的坐標為？",
    options: ["(5, 4)", "(5, 6)", "(-1, 6)", "(6, -5)"],
    answer: 0,
    explanation: "$\\vec{u} + \\vec{v} = (2+3, 5+(-1)) = (5, 4)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，點 $P(2, 3, 4)$ 到 $xy$ 坐標平面的垂直距離為多少？",
    options: ["4（等於豎坐標絕對值 $|z| = |4| = 4$）", "2", "3", "5"],
    answer: 0,
    explanation: "點到 $xy$ 平面的距離即為豎坐標 $z$ 的絕對值：$|z| = 4$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階方陣行列式：$\\begin{vmatrix} 7 & 3 \\\\ 2 & 1 \\end{vmatrix}$ 之值為何？",
    options: ["1（$7 \\times 1 - 3 \\times 2 = 7 - 6 = 1$）", "13", "6", "0"],
    answer: 0,
    explanation: "$7(1) - 3(2) = 7 - 6 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^8_1$ 之值為何？",
    options: ["8", "1", "28", "56"],
    answer: 0,
    explanation: "$C^8_1 = 8$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "丟擲一顆公正的六面骰子，出現點數為「大於 2」的機率為何？",
    options: ["2/3（點數 3, 4, 5, 6 共 4 種，機率為 4/6 = 2/3）", "1/3", "1/2", "5/6"],
    answer: 0,
    explanation: "大於 2 之點數為 3, 4, 5, 6 共 4 種，機率為 $\\frac{4}{6} = \\frac{2}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "雙曲線方程式 $\\frac{y^2}{16} - \\frac{x^2}{9} = 1$ 的焦點位於哪一條坐標軸上？",
    options: ["$y$ 軸上（因 $y^2$ 前為正號，貫軸在 $y$ 軸上）", "$x$ 軸上", "直線 $y = x$ 上", "不存在焦點"],
    answer: 0,
    explanation: "$y^2$ 係數為正，代表雙曲線開口朝上下，貫軸與焦點皆位於 $y$ 軸上。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 2x^4$ 的導函數 $f'(x)$ 為何？",
    options: ["$8x^3$", "$2x^3$", "$8x^4$", "$4x^3$"],
    answer: 0,
    explanation: "$f'(x) = 2(4x^3) = 8x^3$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算代數運算：$| -20 | \\div 4$ 之結果為何？",
    options: ["5（$20 \\div 4 = 5$）", "-5", "4", "20"],
    answer: 0,
    explanation: "$|-20| \\div 4 = 20 \\div 4 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 - 6x + 9$ 的完全平方分解式為？",
    options: ["$(x - 3)^2$", "$(x + 3)^2$", "$(x - 9)^2$", "$(x - 1)(x - 9)$"],
    answer: 0,
    explanation: "$x^2 - 2(3)x + 3^2 = (x - 3)^2$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $81^{1/4}$ 之數值為何？",
    options: ["3（因 $3^4 = 81$）", "9", "27", "1"],
    answer: 0,
    explanation: "$81^{1/4} = (3^4)^{1/4} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，角 $\\theta = 180^\\circ$ 的正弦值 $\\sin 180^\\circ$ 為何？",
    options: ["0", "1", "-1", "不存在"],
    answer: 0,
    explanation: "$\\sin 180^\\circ = 0$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (6, 8)$，求其長度（模長）$|\\vec{u}|$ 為多少？",
    options: ["10（$\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = 10$）", "14", "100", "7"],
    answer: 0,
    explanation: "$|\\vec{u}| = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，$xy$ 坐標平面的方程式為？",
    options: ["$z = 0$", "$x = 0$", "$y = 0$", "$x + y = 0$"],
    answer: 0,
    explanation: "$xy$ 平面上所有點的豎坐標 $z$ 恆為 0，方程式為 $z = 0$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = 5x^2$ 在 $x = 1$ 處的切線斜率為何？",
    options: ["10（導函數 $f'(x) = 10x \\implies f'(1) = 10$）", "5", "2", "0"],
    answer: 0,
    explanation: "$f'(x) = 10x \\implies f'(1) = 10$。",
    difficulty: "基礎"
  }
];

batch16.forEach((q, idx) => {
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

console.log(`New Math A count after batch 16: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
