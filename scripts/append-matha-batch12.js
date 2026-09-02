const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-a-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math A count before batch 12: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math A
const batch12 = [
  {
    category: "數與式",
    question: "利用雙重根號化簡公式 $\\sqrt{a + b + 2\\sqrt{ab}} = \\sqrt{a} + \\sqrt{b}$（其中 $a \\ge b > 0$），化簡 $\\sqrt{7 + 2\\sqrt{10}}$ 之最簡結果為何？",
    options: ["$\\sqrt{5} + \\sqrt{2}$（因 $5 + 2 = 7$ 且 $5 \\times 2 = 10$）", "$\\sqrt{6} + 1$", "$\\sqrt{7} + \\sqrt{10}$", "5"],
    answer: 0,
    explanation: "找兩數和為 7 且乘積為 10，得 5 與 2。$\\sqrt{7 + 2\\sqrt{10}} = \\sqrt{(\\sqrt{5} + \\sqrt{2})^2} = \\sqrt{5} + \\sqrt{2}$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "若三次多項式 $f(x) = (x - 2)^3 + 5(x - 2)^2 + 3(x - 2) + 7$，則曲線 $y = f(x)$ 在點 $(2, f(2))$ 附近的「局部一次最佳近似（切線方程式）」為？",
    options: ["$y = 3(x - 2) + 7$（即 $y = 3x + 1$）", "$y = 5(x - 2) + 7$", "$y = 7$", "$y = (x - 2)^3$"],
    answer: 0,
    explanation: "在 $x = 2$ 附近，高次項 $(x-2)^2$ 與 $(x-2)^3$ 極微小可忽略，局部一次近似即保留一次項與常數項：$y = 3(x - 2) + 7 = 3x + 1$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "已知 $\\log_{10} 2 \\approx 0.3010, \\log_{10} 3 \\approx 0.4771$。求常用對數值 $\\log_{10} 6$ 之數值約為多少？",
    options: ["0.7781（$\\log_{10}(2 \\times 3) = \\log_{10} 2 + \\log_{10} 3 = 0.3010 + 0.4771 = 0.7781$）", "0.6020", "0.1436", "1.4343"],
    answer: 0,
    explanation: "對數乘積拆解公式：$\\log_{10} 6 = \\log_{10}(2 \\times 3) = \\log_{10} 2 + \\log_{10} 3 = 0.3010 + 0.4771 = 0.7781$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "已知正弦三倍角公式為 $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$。若銳角 $\\theta$ 滿足 $\\sin\\theta = 1/2$（即 $\\theta = 30^\\circ$），代入三倍角公式計算 $\\sin(3 \\times 30^\\circ) = \\sin 90^\\circ$ 之值驗證結果為？",
    options: ["1（$3(1/2) - 4(1/8) = 3/2 - 1/2 = 1$）", "0", "1/2", "$\\sqrt{3}/2$"],
    answer: 0,
    explanation: "$\\sin 3(30^\\circ) = 3\\sin 30^\\circ - 4\\sin^3 30^\\circ = 3(1/2) - 4(1/2)^3 = \\frac{3}{2} - \\frac{4}{8} = \\frac{3}{2} - \\frac{1}{2} = 1 = \\sin 90^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "在平面向量代數中，柯西不等式指出 $|\vec{u}| |\\vec{v}| \\ge |\\vec{u} \\cdot \\vec{v}|$。此不等式「等號成立」的幾何充要條件為？",
    options: ["兩向量 $\\vec{u}$ 與 $\\vec{v}$「互相平行（共線，方向相同或相反）」", "兩向量互相垂直", "兩向量長度皆等於 1", "兩向量夾角為 60 度"],
    answer: 0,
    explanation: "$|\\vec{u} \\cdot \\vec{v}| = |\\vec{u}| |\\vec{v}| |\\cos\\theta|$。當且僅當 $|\\cos\\theta| = 1$（即 $\\theta = 0^\\circ$ 或 $180^\\circ$ 平行）時等號成立。",
    difficulty: "基礎"
  },
  {
    category: "空間向量與外積",
    question: "在空間三維向量運算中，若兩非零向量 $\\vec{u}$ 與 $\\vec{v}$ 的外積向量為零向量（$\\vec{u} \\times \\vec{v} = \\vec{0}$），這在空間幾何上代表？",
    options: ["兩向量 $\\vec{u}$ 與 $\\vec{v}$「互相平行（同向或反向）」", "兩向量互相垂直", "兩向量模長相等", "兩向量必落在 $xy$ 平面上"],
    answer: 0,
    explanation: "外積模長公式 $|\vec{u} \\times \\vec{v}| = |\\vec{u}| |\\vec{v}| \\sin\\theta$。當外積為零向量時，$\\sin\\theta = 0$，代表 $\\theta = 0^\\circ$ 或 $180^\\circ$，即兩向量互相平行。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "三維空間中，兩條直線 $L_1$ 與 $L_2$ 被稱為「歪斜線（Skew Lines）」的空間幾何充要條件為？",
    options: ["兩直線「不平行且不相交（兩直線絕不共面）」", "兩直線垂直相交", "兩直線平行但距離不為零", "兩直線重合"],
    answer: 0,
    explanation: "空間兩直線位置關係只有四種：相交、平行、重合（此三者皆共面）；若既不平行亦不相交，則稱為歪斜線（絕不可能存在一個平面同時包含此兩條直線）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "在平面線性變換中，關於直線 $y = x$（傾斜角 $45^\\circ$）進行鏡射反射的二階鏡射矩陣為？",
    options: ["$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$（將點 $(x, y)$ 變換為 $(y, x)$，行列式值為 $-1$）", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & -1 \\\\ -1 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "鏡射變換矩陣 $M(2\\theta) = \\begin{pmatrix} \\cos 2\\theta & \\sin 2\\theta \\\\ \\sin 2\\theta & -\\cos 2\\theta \\end{pmatrix}$。代入 $\\theta = 45^\\circ, 2\\theta = 90^\\circ$ 得 $\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$，其行列式為 $0 - 1 = -1$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "4 位朋友參加交換禮物派對，每人帶來一份禮物。隨機重新分發禮物後，每個人都「恰好沒有拿到自己原本帶來的禮物」（經典 4 元素完全錯位排列 Derangement $D_4$）。滿足此條件的錯位分發方法共有多少種？",
    options: ["9 種（錯位排列數公式 $D_4 = 4!(1 - 1/1! + 1/2! - 1/3! + 1/4!) = 24(1/2 - 1/6 + 1/24) = 12 - 4 + 1 = 9$）", "6 種", "12 種", "24 種"],
    answer: 0,
    explanation: "經典錯位數列（蒙莫爾問題）：$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$。4 人互不拿自己禮物的方法數為 9 種。",
    difficulty: "中等"
  },
  {
    category: "機率與統計",
    question: "某罕見疾病在人口中的罹患率為 1%（先驗機率 $P(D) = 0.01$）。篩檢試劑準確率高達 99%（患病者呈陽性機率為 0.99，未患病健康者呈陰性機率亦為 0.99）。某位民眾隨機受檢結果呈現「陽性」。利用貝氏定理（Bayes' Theorem）計算，該民眾「真正患病」的後驗機率約為？",
    options: ["約 50%（$P(D|+) = \\frac{0.01 \\times 0.99}{0.01 \\times 0.99 + 0.99 \\times 0.01} = \\frac{0.0099}{0.0099 + 0.0099} = 0.5$）", "99%", "1%", "90%"],
    answer: 0,
    explanation: "貝氏定理罕病檢驗陷阱：分子真陽性 $0.01 \\times 0.99 = 0.0099$；分母總陽性為真陽性加假陽性 $0.0099 + (0.99 \\times 0.01) = 0.0198$。後驗患病機率恰為 $\\frac{0.0099}{0.0198} = 50\\%$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線",
    question: "拋物線具有獨特的光學幾何性質：由拋物線焦點 $F$ 發出的所有光線，經拋物線反射鏡面反射後，反射光線必定？",
    options: ["「全部互相平行，且平行於拋物線的對稱軸」向前射出（探照燈、汽車車燈設計原理）", "全數匯聚至拋物線中心", "隨機向四面八方散射", "沿原路折返回焦點"],
    answer: 0,
    explanation: "拋物線光學性質：從焦點發出光線經曲線反射後成為平行於對稱軸的光束；反之平行於對稱軸射入的光束反射後全數匯聚於焦點（如天線雷達）。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "利用連鎖法則（Chain Rule）求複合函數 $f(x) = (2x + 1)^4$ 的導函數 $f'(x)$ 為何？",
    options: ["$8(2x + 1)^3$（$4(2x+1)^3 \\times (2x+1)' = 4(2x+1)^3 \\times 2 = 8(2x+1)^3$）", "$4(2x + 1)^3$", "$2(2x + 1)^3$", "$8x^3$"],
    answer: 0,
    explanation: "連鎖微分法則：外層函數導數乘內層函數導數：$f'(x) = 4(2x+1)^3 \\cdot (2) = 8(2x+1)^3$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數運算：$(\\sqrt{5} + 2)(\\sqrt{5} - 2)$ 之值為何？",
    options: ["1（平方差公式：$(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$）", "3", "9", "$\\sqrt{5}$"],
    answer: 0,
    explanation: "$(\\sqrt{5})^2 - 2^2 = 5 - 4 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "多項式 $f(x) = x^2 - 4x + 4$ 可完全因式分解為？",
    options: ["$(x - 2)^2$", "$(x - 4)^2$", "$(x - 2)(x + 2)$", "$(x + 2)^2$"],
    answer: 0,
    explanation: "$x^2 - 4x + 4 = (x - 2)^2$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算常用對數：$\\log_{10} 1$ 之數值為何？",
    options: ["0（任何非零實數的 0 次方皆為 1）", "1", "10", "不存在"],
    answer: 0,
    explanation: "$10^0 = 1 \\implies \\log_{10} 1 = 0$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "計算銳角三角比：$\\cos 0^\\circ$ 之值為何？",
    options: ["1", "0", "-1", "1/2"],
    answer: 0,
    explanation: "$\\cos 0^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知兩向量 $\\vec{u} = (3, 4)$ 與 $\\vec{v} = (-4, 3)$，計算其內積 $\\vec{u} \\cdot \\vec{v}$ 並判斷其幾何夾角為何？",
    options: ["內積為 0，兩向量互相垂直（$3(-4) + 4(3) = -12 + 12 = 0$）", "內積為 25，兩向量互相平行", "內積為 7，夾角為 45 度", "內積為 -1，夾角為 180 度"],
    answer: 0,
    explanation: "$\\vec{u} \\cdot \\vec{v} = 3(-4) + 4(3) = 0$。內積為 0 代表兩非零向量互相垂直（夾角 90°）。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間直角坐標系中，點 $P(1, 2, 3)$ 到 $xy$ 平面的垂直距離為多少？",
    options: ["3（即豎坐標絕對值 $|z| = 3$）", "1", "2", "$\\sqrt{14}$"],
    answer: 0,
    explanation: "點到 $xy$ 平面的垂直距離為 $|z| = |3| = 3$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與線性變換",
    question: "計算二階單位方陣 $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ 的行列式值 $|I|$ 為何？",
    options: ["1", "0", "2", "-1"],
    answer: 0,
    explanation: "$|I| = 1(1) - 0(0) = 1$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^5_5$ 之值為何？",
    options: ["1", "5", "0", "25"],
    answer: 0,
    explanation: "5 個全選只有 1 種選法，$C^5_5 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "機率與統計",
    question: "丟擲一枚公正的硬幣 3 次，恰好出現 2 次正面的方法數為多少種？",
    options: ["3 種（$C^3_2 = 3$：正正反、正反正、反正正）", "1 種", "2 種", "8 種"],
    answer: 0,
    explanation: "$C^3_2 = 3$ 種。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線",
    question: "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$ 的長軸長度 $2a$ 為多少？",
    options: ["10（$a^2 = 25 \\implies a = 5 \\implies 2a = 10$）", "5", "6", "8"],
    answer: 0,
    explanation: "$a^2 = 25 \\implies a = 5$。長軸長度為 $2a = 10$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "求函數 $f(x) = x^4$ 的導函數 $f'(x)$ 為何？",
    options: ["$4x^3$", "$3x^4$", "$4x$", "$x^3$"],
    answer: 0,
    explanation: "冪函數微分公式：$(x^n)' = n x^{n-1} \\implies (x^4)' = 4x^3$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算絕對值運算：$| -7 |$ 之數值為何？",
    options: ["7", "-7", "0", "1/7"],
    answer: 0,
    explanation: "負數的絕對值為其相反數，故 $|-7| = 7$。",
    difficulty: "基礎"
  },
  {
    category: "多項式函數",
    question: "二次多項式 $f(x) = x^2 - 6x + 9$ 的圖形與 $x$ 軸有幾個交點？",
    options: ["1 個交點（在 $x = 3$ 處相切，判別式 $\\Delta = 36 - 36 = 0$）", "2 個相異交點", "0 個交點", "無窮多個交點"],
    answer: 0,
    explanation: "$f(x) = (x - 3)^2$。頂點在 $(3, 0)$，與 $x$ 軸相切於唯一交點 $(3, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數",
    question: "計算 $4^{1/2}$ 之數值為何？",
    options: ["2（即 $\\sqrt{4} = 2$）", "4", "1", "8"],
    answer: 0,
    explanation: "$4^{1/2} = \\sqrt{4} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數",
    question: "直角坐標系中，點 $(0, 1)$ 在單位圓上對應的標準位置角度為？",
    options: ["$90^\\circ$", "$0^\\circ$", "$180^\\circ$", "$270^\\circ$"],
    answer: 0,
    explanation: "正 $y$ 軸與正 $x$ 軸夾角為 $90^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "平面向量",
    question: "已知向量 $\\vec{u} = (2, 5)$，計算向量純量乘法 $3\\vec{u}$ 之坐標為何？",
    options: ["(6, 15)", "(5, 8)", "(6, 5)", "(2, 15)"],
    answer: 0,
    explanation: "$3(2, 5) = (3 \\times 2, 3 \\times 5) = (6, 15)$。",
    difficulty: "基礎"
  },
  {
    category: "空間直線與平面",
    question: "空間中點 $P(1, 1, 1)$ 到坐標原點 $(0, 0, 0)$ 的直線距離為何？",
    options: ["$\\sqrt{3}$（$\\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$）", "1", "3", "$\\sqrt{2}$"],
    answer: 0,
    explanation: "$d = \\sqrt{1^2 + 1^2 + 1^2} = \\sqrt{3}$。",
    difficulty: "基礎"
  },
  {
    category: "微分初步",
    question: "若函數 $f(x) = 2x + 5$，其二階導函數 $f''(x)$ 之數值為何？",
    options: ["0（一階導數 $f'(x) = 2$，對常數再求導得 0）", "2", "5", "$2x$"],
    answer: 0,
    explanation: "$f'(x) = 2 \\implies f''(x) = (2)' = 0$。",
    difficulty: "基礎"
  }
];

batch12.forEach((q, idx) => {
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

console.log(`New Math A count after batch 12: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math A questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathAQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-a-quiz.js!');
