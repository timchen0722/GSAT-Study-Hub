const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 15: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch15 = [
  {
    category: "數與式",
    question: "在實數不等式中，著名的「算幾不等式（AM-GM 不等式）」指出：對於任意兩正實數 $a > 0$ 與 $b > 0$，恆有 $\\frac{a + b}{2} \\ge \\sqrt{ab}$ 成立。該不等式等號成立（即 $\\frac{a+b}{2} = \\sqrt{ab}$）的「充分必要條件」為？",
    options: ["「兩數相等（$a = b$）」", "$a > b$", "$a + b = 1$", "$a b = 1$"],
    answer: 0,
    explanation: "算幾不等式本質：$\\frac{a+b}{2} - \\sqrt{ab} = \\frac{(\\sqrt{a} - \\sqrt{b})^2}{2} \\ge 0$。平方項大於等於 0，唯有 $\\sqrt{a} = \\sqrt{b} \\iff a = b$ 時等號精確成立。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "在實數乘法運算中，對於任意非負實數 $a \\ge 0$ 與 $b \\ge 0$，化簡根式乘積：$\\sqrt{2} \\times \\sqrt{8}$ 之結果數值為何？",
    options: ["4（$\\sqrt{2 \\times 8} = \\sqrt{16} = 4$）", "16", "2", "8"],
    answer: 0,
    explanation: "根式乘法公式：$\\sqrt{a} \\times \\sqrt{b} = \\sqrt{ab} = \\sqrt{16} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "將二次函數 $y = x^2$ 的拋物線圖形「向右水平平移 3 個單位，再向上鉛直平移 2 個單位」，平移後所得的新二次函數方程式為？",
    options: ["$y = (x - 3)^2 + 2$", "$y = (x + 3)^2 + 2$", "$y = (x - 3)^2 - 2$", "$y = (x + 3)^2 - 2$"],
    answer: 0,
    explanation: "圖形平移口訣（左加右減，上加下減）：橫坐標向右平移 3 代入 $(x - 3)$，縱坐標向上平移 2 加上 2，方程式為 $y = (x - 3)^2 + 2$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在直角坐標系中，一次直線方程式 $2x + 3y = 6$ 與 $x$ 軸相交的「$x$ 軸截距（水平截距）」坐標為？",
    options: ["(3, 0)（令 $y = 0 \\implies 2x = 6 \\implies x = 3$）", "(0, 2)", "(2, 0)", "(0, 3)"],
    answer: 0,
    explanation: "求 $x$ 軸交點令 $y = 0$：$2x + 3(0) = 6 \\implies 2x = 6 \\implies x = 3$，交點坐標為 $(3, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "指數函數 $y = a^x$（底數 $a > 0$ 且 $a \\ne 1$）在實數域上的單調性特徵為：當底數「$a > 1$（如 $y = 2^x$）」時，其圖形呈現？",
    options: ["「嚴格遞增（隨自變數 $x$ 增大，函數值 $y$ 嚴格持續增大）」", "嚴格遞減", "常數水平線", "先增後減拋物線"],
    answer: 0,
    explanation: "底數大於 1 時，指數函數為嚴格遞增凹向上曲線；當 $0 < a < 1$ 時（如 $y = (1/2)^x$），指數函數為嚴格遞減曲線。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "在對數函數 $y = \\log_a x$ 的嚴格數學定義中，其自變數「真數 $x$」的取值範圍（定義域）必須滿足的條件為？",
    options: ["「真數必須嚴格大於 0（$x > 0$）」", "真數可以為任意實數", "真數可以為 0", "真數必須小於 0"],
    answer: 0,
    explanation: "對數定義來自指數反函數：因正數的任何次冪皆恆為正數（$a^y > 0$），故真數 $x$ 必須嚴格大於 0，零與負數無對數值。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在幾何測量中，三角形的「重心（Centroid，記為 $G$）」在幾何學上的定義及其分中線的線段比例性質為？",
    options: ["三角形「三條中線的交點」，且重心將每一條中線分割為「$2 : 1$」的比例長度（頂點到重心比重心到對邊中點為 2:1）", "三邊中垂線的交點", "三內角平分線的交點", "三高的交點"],
    answer: 0,
    explanation: "重心幾何定理：三中線共點於重心 $G$。重心為均勻三角形薄板之物理平衡中心，將每條中線分成 $2:1$（$\\overline{AG} : \\overline{GM} = 2:1$）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在歐氏幾何平面上，任意一個三角形三個內角的度數之和，恆精確等於多少度？",
    options: ["$180^\\circ$（度）", "$360^\\circ$", "$90^\\circ$", "$270^\\circ$"],
    answer: 0,
    explanation: "三角形內角和定理：過一頂點作對邊平行線，利用內錯角相等可直接證明三內角和恆等於平角 180°。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將甲、乙、丙、丁、戊 5 個人排成一列。若規定「甲與乙兩人必須相鄰」，利用「綑綁法」，合法的排隊排列方法共有多少種？",
    options: ["48 種（將甲乙綑綁為一體與其餘 3 人共 4 體排列 $4! = 24$，甲乙內部可互換 $2! = 2$，總排法為 $24 \\times 2 = 48$）", "120 種", "24 種", "72 種"],
    answer: 0,
    explanation: "相鄰綑綁法：(1) 甲乙綁在一起視為一個大元素，與丙丁戊共 4 個元素全排列有 $4! = 24$ 種；(2) 甲乙兩人內部互換位置有 $2! = 2$ 種。乘法原理得 $24 \\times 2 = 48$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "在數學階乘與排列組合約定中，數字 0 的階乘「$0!$」的數值定義為？",
    options: ["1（數學約定 $0! = 1$ 以確保排列組合公式 $P^n_n = \\frac{n!}{0!} = n!$ 邏輯自洽）", "0", "未定義", "-1"],
    answer: 0,
    explanation: "由階乘遞迴公式 $n! = n \\times (n-1)!$。令 $n=1$ 得 $1! = 1 \\times 0! \\implies 0! = 1$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "同時拋擲兩枚均勻對稱的公正硬幣，兩枚硬幣「皆出現正面（正，正）」的機率為何？",
    options: ["1/4（0.25）", "1/2", "3/4", "1/8"],
    answer: 0,
    explanation: "樣本空間為 $\{(\\text{正},\\text{正}), (\\text{正},\\text{反}), (\\text{反},\\text{正}), (\\text{反},\\text{反})\}$ 共 4 種等可能結果，皆正面的機率為 $\\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "若某種公益彩券每張售價 100 元，經數學計算每張彩券中獎金額的「數學期望值」恰好也等於 100 元。在博弈機率論中，這種期望獲利等於投入成本的賭局稱為？",
    options: ["「公平賭局（Fair Game）」", "暴利賭局", "詐欺賭局", "零和賭局"],
    answer: 0,
    explanation: "公平賭局定義：淨期望值為 0（即總收益期望值等於參與成本），長期參與平均不賺不賠。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在單維統計數據分析中，若五個數據分別為 1, 2, 3, 4, 5，其算術平均數 $\\bar{x} = 3$。這組數據的「變異數（$\\sigma^2 = \\frac{1}{N}\\sum (x_i - \\bar{x})^2$）」為多少？",
    options: ["2（離均差平方和：$(-2)^2 + (-1)^2 + 0^2 + 1^2 + 2^2 = 4 + 1 + 0 + 1 + 4 = 10$，除以 5 得 2）", "10", "4", "1.414"],
    answer: 0,
    explanation: "母體變異數公式：$\\sigma^2 = \\frac{(1-3)^2 + (2-3)^2 + (3-3)^2 + (4-3)^2 + (5-3)^2}{5} = \\frac{4+1+0+1+4}{5} = \\frac{10}{5} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若兩變數 $x$ 與 $y$ 的皮爾森相關係數高達「$r = +1.0$」。這在雙變數散佈圖上代表的幾何特徵為？",
    options: ["「所有數據點完全、精確地落在同一條斜率為正的直線上（完全正相關）」", "數據點隨機均勻散佈成一個圓形", "所有數據點落在水平直線上", "數據點散佈在拋物線上"],
    answer: 0,
    explanation: "相關係數 $r = +1$ 為完全正線性相關之充要條件：所有二維數據點無任何離散偏差，百分之百嚴格共線於一條正斜率直線上。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在三維地球球面上，國際公認通過英國倫敦格林威治皇家天文台舊址的子午線，被指定為全球經度的起算基準線。這條經線在地理學上稱為？",
    options: ["「本初子午線（Prime Meridian，0° 經線）」", "赤道", "國際換日線", "北回歸線"],
    answer: 0,
    explanation: "1884 年國際子午線會議確立格林威治子午線為 0° 本初子午線，向東為東經 0°~180°，向西為西經 0°~180°，作為世界協調時間（UTC）基準。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "地球表面上最大的一個緯線圈，將地球精確平分為北半球與南半球，其地理緯度為 0°，全長約 40,000 公里。這條重要的地理緯線稱為？",
    options: ["「赤道（Equator）」", "北極圈", "南極圈", "本初子午線"],
    answer: 0,
    explanation: "赤道是地球表面唯一與地軸垂直且過球心的大圓緯線圈，緯度為 0°，周長約 40,075 公里。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在矩陣代數運算中，若二階方陣 $O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$ 為零矩陣。對於任意二階方陣 $A$，方陣加法運算 $A + O$ 之結果必等於？",
    options: ["矩陣自身 $A$（零矩陣為矩陣加法的單位元素 / 加法恆等元）", "零矩陣 $O$", "單位矩陣 $I$", "$-A$"],
    answer: 0,
    explanation: "零矩陣性質：矩陣每個元素加上 0 保持不變，故 $A + O = O + A = A$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階方陣行列式：$\\begin{vmatrix} 2 & 4 \\\\ 1 & 2 \\end{vmatrix}$ 之值為何？",
    options: ["0（兩列成比例：$2 \\times 2 - 4 \\times 1 = 4 - 4 = 0$）", "4", "8", "2"],
    answer: 0,
    explanation: "交叉相乘相減：$2(2) - 4(1) = 4 - 4 = 0$。兩列成比例時行列式值恆為 0。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "手電筒反光碗、汽車前大燈以及大型天文反射望遠鏡的鏡面，通常設計為「旋轉拋物面（Paraboloid）」。當將燈泡光源精確放置在拋物面的哪一個幾何特殊點時，發出的光線經拋物面反射後將會匯聚成一道「平行光束」射向遠方？",
    options: ["拋物面的「焦點（Focus）」", "拋物面的頂點", "準線上任意點", "坐標原點"],
    answer: 0,
    explanation: "拋物線光學反射性質：自焦點發出的所有光線經拋物線反射後皆平行於對稱軸射出（探照燈原理）；反之平行入射光反射後全數匯聚於焦點（太陽能聚熱器原理）。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "天文學史上，克卜勒第一定律（軌道定律）推翻了古希臘托勒密的完美正圓軌道學說，確立了太陽系所有行星繞太陽公轉的真實幾何軌道為？",
    options: ["「橢圓軌道（太陽位於橢圓的其中一個焦點上）」", "正圓軌道（太陽位於圓心）", "拋物線逃逸軌道", "雙曲線軌道"],
    answer: 0,
    explanation: "克卜勒第一定律（1609年）：所有行星繞日運行的軌道都是橢圓，太陽不在中心而在兩個焦點之一，開創現代行星天文學新紀元。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "在實數數系中，對於任意實數 $x$，其平方值 $x^2$ 的取值範圍恆滿足？",
    options: ["$x^2 \\ge 0$（非負實數）", "$x^2 > 0$", "$x^2 \\le 0$", "可以為任意負數"],
    answer: 0,
    explanation: "實數平方非負性：正數平方為正，負數平方為正，0 的平方為 0，故對任意實數 $x$ 恆有 $x^2 \\ge 0$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "一次函數 $y = 3$ 的直線圖形在直角坐標系中是一條？",
    options: ["平行於 $x$ 軸的「水平直線」（斜率為 0）", "平行於 $y$ 軸的鉛直線", "通過原點的斜直線", "向下彎曲的曲線"],
    answer: 0,
    explanation: "$y = 3$ 上所有點的縱坐標恆為 3，圖形為一條通過 $(0, 3)$ 的水平直線，斜率為 0。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "直角 $\\Delta ABC$ 中，若兩股長度分別為 6 與 8，則其斜邊長度為多少？",
    options: ["10（畢氏定理：$\\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$）", "14", "12", "7"],
    answer: 0,
    explanation: "畢氏定理 $3:4:5$ 放大兩倍：$6:8:10$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 9 個人中選出 2 個人組成小組，共有多少種不同的選拔組合數？",
    options: ["36 種（$C^9_2 = \\frac{9 \\times 8}{2 \\times 1} = 36$）", "18 種", "72 種", "81 種"],
    answer: 0,
    explanation: "$C^9_2 = \\frac{9 \\times 8}{2 \\times 1} = 36$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "從一副洗勻的 52 張標準撲克牌（不含鬼牌）中隨機抽取一張，抽到的牌為「黑桃（Spade）」的機率為何？",
    options: ["1/4（13/52 = 1/4）", "1/2", "1/13", "1/52"],
    answer: 0,
    explanation: "撲克牌四種花色均等，黑桃有 13 張，機率為 $\\frac{13}{52} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若一組數據中的每個數值皆完全相同（例如 7, 7, 7, 7, 7），則這組數據的「標準差 $\\sigma$」之值為多少？",
    options: ["0（數據完全沒有任何離散與波動）", "7", "1", "35"],
    answer: 0,
    explanation: "所有數據等於平均數 7，離均差全數為 0，故標準差精確等於 0。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，點 $P(3, 4, 5)$ 到「$xy$ 坐標平面」的垂直距離為多少？",
    options: ["5（等於豎坐標絕對值 $|z| = |5| = 5$）", "3", "4", "$\\sqrt{3^2+4^2}=5$"],
    answer: 0,
    explanation: "點到 $xy$ 平面的距離即為豎坐標 $z$ 的絕對值：$|z| = |5| = 5$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算矩陣加法：$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$ 之結果為何？",
    options: ["$\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 5 & 12 \\\\ 21 & 32 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 4 \\\\ 4 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 6 & 6 \\\\ 10 & 10 \\end{pmatrix}$"],
    answer: 0,
    explanation: "矩陣加法對應元素相加：$\\begin{pmatrix} 1+5 & 2+6 \\\\ 3+7 & 4+8 \\end{pmatrix} = \\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "圓方程式為 $(x - 1)^2 + (y + 2)^2 = 16$，該圓的「圓心坐標」為？",
    options: ["(1, -2)", "(-1, 2)", "(1, 2)", "(-1, -2)"],
    answer: 0,
    explanation: "標準形式 $(x - h)^2 + (y - k)^2 = r^2$，圓心為 $(h, k) = (1, -2)$，半徑為 4。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算乘法：$(-4) \\times (-5)$ 之結果為何？",
    options: ["20（同號相乘為正數）", "-20", "9", "-9"],
    answer: 0,
    explanation: "$(-4) \\times (-5) = +20$。",
    difficulty: "基礎"
  }
];

batch15.forEach((q, idx) => {
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

console.log(`New Math B count after batch 15: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
