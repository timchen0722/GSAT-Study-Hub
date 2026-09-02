const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 5: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch5 = [
  {
    category: "數與式",
    question: "化簡雙重根號 $\\sqrt{7 + 2\\sqrt{10}}$ 之結果為何？",
    options: ["$\\sqrt{5} + \\sqrt{2}$", "$\\sqrt{7} + \\sqrt{2}$", "$5 + \\sqrt{2}$", "$\\sqrt{5} + 2$"],
    answer: 0,
    explanation: "尋找兩正數 $a, b$ 滿足 $a + b = 7$ 且 $a b = 10$。解得 $a = 5, b = 2$。因此 $\\sqrt{7 + 2\\sqrt{10}} = \\sqrt{(\\sqrt{5} + \\sqrt{2})^2} = \\sqrt{5} + \\sqrt{2}$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "實數 $x$ 滿足絕對值函數 $f(x) = |x - 1| + |x - 5|$。在幾何意義上，$f(x)$ 代表數線上動點 $x$ 到 1 與到 5 的距離之和。請問 $f(x)$ 的最小值為何？",
    options: ["4（當 $1 \\le x \\le 5$ 時恆為最小值）", "5", "0", "6"],
    answer: 0,
    explanation: "三角不等式：$|x - 1| + |5 - x| \\ge |(x - 1) + (5 - x)| = |4| = 4$。當點 $x$ 落在線段 $[1, 5]$ 之內時，兩距離之和恰好等於線段總長度 $5 - 1 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $f(x) = -(x - 1)^2 + 4$ 在閉區間 $[0, 3]$ 上的「最大值」與「最小值」分別為何？",
    options: ["最大值為 4，最小值為 0", "最大值為 4，最小值為 3", "最大值為 3，最小值為 0", "最大值為 5，最小值為 -1"],
    answer: 0,
    explanation: "頂點 $x = 1$ 落在區間 $[0, 3]$ 內，頂點處有最大值 $f(1) = 4$。端點值：$f(0) = -(0-1)^2 + 4 = 3$；$f(3) = -(3-1)^2 + 4 = -(4) + 4 = 0$。故最小值為 0。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "一座拋物線形狀的拱橋跨度（橋面兩側橋墩間距）為 20 公尺，拱頂距離橋面的最高垂直高度為 5 公尺。以橋面中央為原點建立直角坐標系，此拋物線拱橋的二次函數方程式為？",
    options: ["$y = -\\frac{1}{20} x^2 + 5$", "$y = -\\frac{1}{4} x^2 + 5$", "$y = -\\frac{1}{10} x^2 + 5$", "$y = -x^2 + 5$"],
    answer: 0,
    explanation: "頂點為 $(0, 5)$，設方程式為 $y = a x^2 + 5$。兩端交於橋面 $(\\pm 10, 0)$。代入點 $(10, 0)$：$0 = a(10^2) + 5 \\implies 100a = -5 \\implies a = -\\frac{5}{100} = -\\frac{1}{20}$。故方程式為 $y = -\\frac{1}{20} x^2 + 5$。",
    difficulty: "中等"
  },
  {
    category: "指數與對數模型",
    question: "聲音的響度分貝（dB）公式定義為 $\\beta = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$。若一般人交談聲為 60 分貝，而安靜圖書館環境為 40 分貝，請問交談聲的聲音物理強度 $I$ 是安靜圖書館的多少倍？",
    options: ["100 倍（$10^2$ 倍）", "20 倍", "1.5 倍", "1,000 倍"],
    answer: 0,
    explanation: "分貝差 $\\Delta\\beta = 60 - 40 = 20 = 10 \\log_{10}\\left(\\frac{I_1}{I_2}\\right) \\implies 2 = \\log_{10}\\left(\\frac{I_1}{I_2}\\right) \\implies \\frac{I_1}{I_2} = 10^2 = 100$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "若 $\\log_{10} x = 3.4771$，已知 $\\log_{10} 3 \\approx 0.4771$，則正數 $x$ 的精確數值為多少？",
    options: ["3,000", "300", "30,000", "30"],
    answer: 0,
    explanation: "$\\log_{10} x = 3 + 0.4771 = \\log_{10}(10^3) + \\log_{10} 3 = \\log_{10}(3 \\times 10^3) = \\log_{10} 3000 \\implies x = 3,000$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "一艘輪船從燈塔 $O$ 點出發，朝向「北偏東 $60^\\circ$」方向航行了 10 浬到達 $A$ 點。則 $A$ 點相對於燈塔 $O$ 的正東方向位移分量為多少浬？",
    options: ["$5\\sqrt{3}$ 浬", "5 浬", "$10\\sqrt{3}$ 浬", "10 浬"],
    answer: 0,
    explanation: "「北偏東 $60^\\circ$」即方位角與正北夾角 $60^\\circ$，與正東方向夾角為 $90^\\circ - 60^\\circ = 30^\\circ$。向東的分位移為 $10 \\times \\sin 60^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$ 浬。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "三角形三邊長分別為 $a = 5, b = 6, c = 7$。半周長 $s = \\frac{5+6+7}{2} = 9$。利用海龍公式（Heron's Formula）計算該三角形面積為？",
    options: ["$6\\sqrt{6}$", "$12\\sqrt{6}$", "30", "$6\\sqrt{3}$"],
    answer: 0,
    explanation: "海龍公式：$A = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{9(9-5)(9-6)(9-7)} = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = 6\\sqrt{6}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 4 顆完全相同的紅球與 3 顆完全相同的白球排成一列，共有多少種不同的排列方式？",
    options: ["35 種", "210 種", "12 種", "70 種"],
    answer: 0,
    explanation: "不盡相異物排列公式：$\\frac{n!}{p! q!} = \\frac{7!}{4! 3!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ 種（等價於從 7 個位置選 4 個放紅球的組合數 $C^7_4$）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "求方程式 $x + y + z = 6$ 的「非負整數解（$x, y, z \\in \\{0, 1, 2, \\dots\\}$）」共有多少組？",
    options: ["28 組", "21 組", "36 組", "18 組"],
    answer: 0,
    explanation: "重複組合公式：$H^3_6 = C^{3+6-1}_6 = C^8_6 = C^8_2 = \\frac{8 \\times 7}{2} = 28$ 組。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲三枚均勻公正的硬幣一次，恰好出現「兩枚正面、一枚反面」的機率為何？",
    options: ["3/8", "1/2", "1/4", "1/8"],
    answer: 0,
    explanation: "樣本空間大小為 $2^3 = 8$。兩正一反的組合數為 $C^3_2 = 3$（分別為正正反、正反正、反正正）。機率為 $\\frac{3}{8}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "擲一枚公正的骰子一次。在已知擲出的「點數小於 5」的條件下，該點數為「奇數」的條件機率為何？",
    options: ["1/2", "1/3", "2/3", "1/4"],
    answer: 0,
    explanation: "在點數小於 5 的條件下，樣本空間縮小為 $\\{1, 2, 3, 4\\}$ 共 4 種。其中奇數有 1 與 3 共 2 種。條件機率為 $\\frac{2}{4} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學盒狀圖（Box Plot）中，箱體的左右兩端（或上下兩端）邊界分別對應數據的哪兩個統計分位數？",
    options: ["第一四分位數（$Q_1$）與 第三四分位數（$Q_3$）", "最小值與最大值", "平均數與標準差", "中位數與眾數"],
    answer: 0,
    explanation: "盒狀圖的箱體中間橫線為中位數 $Q_2$，箱體兩端分別代表第一四分位數 $Q_1$（前 25%）與第三四分位數 $Q_3$（前 75%），箱體跨度長度即為四分位距 $\\text{IQR} = Q_3 - Q_1$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學界定極端「離群值（Outlier）」的 Tukey 判定準則中，若某數據小於哪一個數值，通常會被標示為極端離群值？",
    options: ["$Q_1 - 1.5 \\times \\text{IQR}$", "$Q_1 - \\text{IQR}$", "$\\mu - 2\\sigma$", "$Q_1 - 3\\sigma$"],
    answer: 0,
    explanation: "四分位距離群值準則：小於內籬笆界線 $Q_1 - 1.5 \\times \\text{IQR}$ 或大於外籬笆界線 $Q_3 + 1.5 \\times \\text{IQR}$ 的數據，在盒狀圖中皆視為可疑離群極端點。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若將兩變數 $X$ 與 $Y$ 的所有原始數據分別轉換為標準化變數 $Z_X$ 與 $Z_Y$，則以最小平方法求得的標準化迴歸直線，必定通過平面坐標系上的哪一個特殊點？",
    options: ["原點 $(0, 0)$（因為標準化數據的平均數恆為 0）", "(1, 1)", "(-1, -1)", "(0, 1)"],
    answer: 0,
    explanation: "標準化數據的平均數 $\\bar{Z}_X = 0, \\bar{Z}_Y = 0$。迴歸直線必通過平均數點 $(\\bar{Z}_X, \\bar{Z}_Y) = (0, 0)$，且標準化迴歸直線方程式為 $\\hat{Z}_Y = r Z_X$（斜率恰為相關係數 $r$）。",
    difficulty: "中等"
  },
  {
    category: "空間概念與球面幾何",
    question: "在一個正方體中，如果用一個平面去截切這個正方體，下列哪一種幾何多邊形是「絕對不可能」形成的截面形狀？",
    options: ["正八邊形（正方體只有 6 個面，平面最多只能與 6 個面相交形成六邊形）", "等邊正三角形", "正方形", "正六邊形"],
    answer: 0,
    explanation: "正方體具有 6 個面。平面截切多面體的邊數最多等於多面體的面數，因此正方體截面最多只能是六邊形，絕對不可能截出七邊形或八邊形。",
    difficulty: "中等"
  },
  {
    category: "空間概念與球面幾何",
    question: "在空間坐標系中，點 $P(2, -3, 5)$ 關於「$xy$ 平面」的對稱點坐標為何？",
    options: ["(2, -3, -5)", "(-2, 3, 5)", "(-2, -3, 5)", "(2, 3, -5)"],
    answer: 0,
    explanation: "對稱於 $xy$ 平面時，橫坐標 $x$ 與縱坐標 $y$ 保持不變，豎坐標 $z$ 正負符號反轉（變為相反數），故對稱點為 $(2, -3, -5)$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "地球赤道半徑約為 $R$。在「北緯 $60^\\circ$（$60^\\circ\\text{N}$）」的緯線圈上，該緯線圓周的半徑大小為赤道半徑的多少倍？",
    options: ["1/2 倍（$\\cos 60^\\circ = 1/2$）", "$\\sqrt{3}/2$ 倍", "$\\sqrt{2}/2$ 倍", "1/4 倍"],
    answer: 0,
    explanation: "緯度為 $\\phi$ 的緯線圓半徑公式為 $r = R \\cos\\phi$。北緯 60° 處半徑 $r = R \\cos 60^\\circ = \\frac{1}{2} R$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "關於矩陣乘法的代數運算性質，下列敘述何者恆成立？",
    options: ["矩陣乘法一般情況下「不滿足交換律」（即通常 $AB \\ne BA$）", "任意兩矩陣皆可相乘", "$AB = 0$ 則 $A=0$ 或 $B=0$", "$(A+B)^2 = A^2 + 2AB + B^2$ 恆成立"],
    answer: 0,
    explanation: "矩陣乘法滿足結合律 $(AB)C = A(BC)$ 與分配律，但一般不滿足交換律（$AB \\ne BA$）。因不可交換，$(A+B)^2 = A^2 + AB + BA + B^2$；且存在非零矩陣相乘等於零矩陣（零因子）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "設轉移矩陣 $P = \\begin{pmatrix} 0.8 & 0.1 \\\\ 0.2 & 0.9 \\end{pmatrix}$，初始狀態向量為 $X_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$。經過一次轉移後的新狀態向量 $X_1 = P X_0$ 為何？",
    options: ["$\\begin{pmatrix} 0.8 \\\\ 0.2 \\end{pmatrix}$", "$\\begin{pmatrix} 0.1 \\\\ 0.9 \\end{pmatrix}$", "$\\begin{pmatrix} 0.5 \\\\ 0.5 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$P X_0 = \\begin{pmatrix} 0.8 & 0.1 \\\\ 0.2 & 0.9 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix} = \\begin{pmatrix} 0.8(1) + 0.1(0) \\\\ 0.2(1) + 0.9(0) \\end{pmatrix} = \\begin{pmatrix} 0.8 \\\\ 0.2 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "懸索吊橋（如舊金山金門大橋、高雄高屏溪斜張橋的懸索）在均勻水平自重荷載作用下，主纜鋼纜下垂形成的曲線，在數學力學上最接近下列何種圓錐曲線？",
    options: ["拋物線（Parabola）", "雙曲線", "正圓形", "漸開線"],
    answer: 0,
    explanation: "當吊橋水平橋面重量均勻分佈且鋼纜自重相對可忽略時，主纜承受均勻水平荷載，其力學平衡下的垂線形狀精確為二次拋物線；自由懸掛的無荷載單純電線則為雙曲餘弦懸鏈線。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "求方程式 $|2x - 6| = 4$ 的所有實數解？",
    options: ["$x = 5$ 或 $x = 1$", "$x = 5$ 或 $x = -1$", "$x = 1$ 或 $x = 2$", "$x = 4$ 或 $x = -4$"],
    answer: 0,
    explanation: "$2x - 6 = 4 \\implies 2x = 10 \\implies x = 5$；或 $2x - 6 = -4 \\implies 2x = 2 \\implies x = 1$。兩解為 $x = 5$ 與 $x = 1$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若二次函數 $y = x^2 - 6x + c$ 與 $x$ 軸「恰有一個交點（相切）」，則實數常數 $c$ 之值為何？",
    options: ["9", "36", "-9", "0"],
    answer: 0,
    explanation: "恰有一交點即判別式為 0：$D = b^2 - 4ac = (-6)^2 - 4(1)(c) = 36 - 4c = 0 \\implies 4c = 36 \\implies c = 9$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由 6 位男生與 4 位女生中選出 2 個人，若要求「男女各選 1 人」，共有多少種選法？",
    options: ["24 種", "45 種", "10 種", "12 種"],
    answer: 0,
    explanation: "乘法原理：自 6 男中選 1 人有 $C^6_1 = 6$ 種；自 4 女中選 1 人有 $C^4_1 = 4$ 種。總選法為 $6 \\times 4 = 24$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一顆公正的六面骰子一次，出現「質數點數（2, 3, 5）」的機率為何？",
    options: ["1/2", "1/3", "2/3", "1/6"],
    answer: 0,
    explanation: "1 到 6 的正整數中，質數有 2、3、5 共 3 個（注意：1 不是質數也不是合數）。機率為 $\\frac{3}{6} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "一組數據從小到大排序為：2, 3, 5, 8, 12。這組數據的中位數（Median）為多少？",
    options: ["5", "6", "8", "3"],
    answer: 0,
    explanation: "總共有 5 筆數據，中位數位於正中間第 3 筆數值，即為 5。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "長方體的體積計算公式為長乘寬乘高。若一個長方體的長為 5、寬為 4、高為 3，則其總表面積為多少？",
    options: ["94", "60", "47", "120"],
    answer: 0,
    explanation: "表面積公式 $A = 2(lw + wh + hl) = 2(5 \\times 4 + 4 \\times 3 + 3 \\times 5) = 2(20 + 12 + 15) = 2(47) = 94$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知矩陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$，求 $A$ 的反矩陣 $A^{-1}$ 為何？",
    options: ["$\\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ -2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -2 \\\\ 0 & -1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}$"],
    answer: 0,
    explanation: "行列式 $\\det(A) = 1(1) - 2(0) = 1$。反矩陣公式：$A^{-1} = \\begin{pmatrix} 1 & -2 \\\\ 0 & 1 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "已知銳角 $\\theta$ 滿足 $\\tan\\theta = 1$，則角 $\\theta$ 的度數為多少度？",
    options: ["45°", "30°", "60°", "90°"],
    answer: 0,
    explanation: "在直角三角形中，兩股相等時對邊除以鄰邊等於 1，對應銳角為 45°（$\\pi/4$）。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "在太陽系中，德國天文學家克卜勒提出行星運動第一定律（軌道定律），確立了所有行星繞太陽公轉的真實幾何軌道為？",
    options: ["橢圓軌道，且太陽恆位於橢圓的其中一個焦點上", "以太陽為圓心的正圓形軌道", "拋物線逃逸軌道", "雙曲線軌道"],
    answer: 0,
    explanation: "克卜勒第一定律：太陽系八大行星繞日運行的軌道皆為橢圓，太陽位於橢圓兩焦點之一（非圓心）。",
    difficulty: "基礎"
  }
];

batch5.forEach((q, idx) => {
  quiz.push({
    id: `mb${quiz.length + 1}`,
    category: q.category,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    difficulty: q.difficulty
  });
});

console.log(`New Math B count after batch 5: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
