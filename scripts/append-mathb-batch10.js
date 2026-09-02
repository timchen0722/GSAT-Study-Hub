const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 10: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch10 = [
  {
    category: "數與式",
    question: "在敘述統計學中，將全體資料由小到大依序排列後，代表至少有 75% 的資料小於或等於此數值的指標是？",
    options: ["第 75 百分位數（即第三四分位數 $Q_3$ 或 $P_{75}$）", "第 25 百分位數 $Q_1$", "中位數 $P_{50}$", "眾數"],
    answer: 0,
    explanation: "百分位數定義：第 75 百分位數 $P_{75}$ 正好將數據前 75% 與後 25% 劃分開來，亦稱為第三四分位數 $Q_3$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "將純循環小數 $0.\\overline{5} = 0.5555\\dots$ 化為最簡分數，其結果為何？",
    options: ["5/9", "5/10", "1/2", "55/100"],
    answer: 0,
    explanation: "純循環小數化分數公式：分子為循環節 5，分母為一個 9，故 $0.\\overline{5} = \\frac{5}{9}$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若直線的傾斜角為 $45^\\circ$，則該直線的「斜率 $m$」為多少？",
    options: ["1（因斜率 $m = \\tan 45^\\circ = 1$）", "0", "$\\sqrt{3}$", "不存在"],
    answer: 0,
    explanation: "直線斜率即傾斜角的正切值：$m = \\tan 45^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = (x - 3)^2 + 4$ 的對稱軸方程式為何？",
    options: ["$x = 3$", "$x = -3$", "$y = 4$", "$x = 4$"],
    answer: 0,
    explanation: "頂點式 $y = a(x-h)^2 + k$ 的對稱軸為 $x = h$。此處頂點為 $(3, 4)$，故對稱軸為 $x = 3$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "放射性碳十四（$^{14}\\text{C}$）的半衰期約為 5,730 年。某古埃及木乃伊棺木殘留的碳十四放射性活度恰好為原本生前活度的 $1/8$。利用半衰期模型計算，該木乃伊所處的歷史年代距今約多少年？",
    options: ["17,190 年（$1/8 = (1/2)^3$，經歷了 3 個半衰期：$5730 \\times 3 = 17190$ 年）", "11,460 年", "5,730 年", "22,920 年"],
    answer: 0,
    explanation: "活度衰減為原本的 $1/8 = (1/2)^3$，代表歷經了 3 次半衰期。歷史年代 $T = 3 \\times 5730 = 17,190$ 年。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "芮氏地震規模每增加 2 級（例如規模 7.0 相較於規模 5.0），地震所釋放的能量大小相差多少倍？",
    options: ["1,000 倍（每差 1 級差 $10^{1.5} \\approx 31.6$ 倍，差 2 級差 $10^3 = 1000$ 倍）", "20 倍", "100 倍", "2 倍"],
    answer: 0,
    explanation: "古登堡公式 $\\log_{10} E = 4.8 + 1.5 M$。規模差 $\\Delta M = 2 \\implies \\Delta \\log_{10} E = 1.5 \\times 2 = 3 \\implies E'/E = 10^3 = 1000$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "一條長度為 100 公尺的筆直無障礙斜坡步道，其路面與水平地面的夾角為 $30^\\circ$。推著輪椅沿該斜坡自底端登上頂端時，垂直上升的鉛直高度為多少公尺？",
    options: ["50 公尺（$h = L \\sin 30^\\circ = 100 \\times 0.5 = 50$）", "100 公尺", "$50\\sqrt{3}$ 公尺", "25 公尺"],
    answer: 0,
    explanation: "直角三角形中，垂直對邊高度等於斜邊乘以正弦值：$h = 100 \\times \\sin 30^\\circ = 100 \\times \\frac{1}{2} = 50$ 公尺。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "三角形的幾何「內心（Incenter）」為三角形三個內角「角平分線」的交點。內心在幾何性質上具有下列哪一項核心特徵？",
    options: ["內心到三角形的「三條邊的垂直距離完全相等」（即為內切圓半徑 $r$）", "內心到三個頂點的距離完全相等", "內心必定在三角形外部", "內心三邊長之比恆為 1:1:1"],
    answer: 0,
    explanation: "角平分線上任意點到兩邊等距，故三內角平分線交點內心到三邊等距，為內切圓圓心，且任何三角形的內心必恆落在三角形內部。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "5 位同學圍繞著一張圓形餐桌就座，若只考慮彼此之間的「相對排列順序」（旋轉後相同的排法視為同一種），共有多少種不同的圓桌座位排法？",
    options: ["24 種（圓形排列數 $(5 - 1)! = 4! = 24$）", "120 種", "60 種", "12 種"],
    answer: 0,
    explanation: "圓形排列消除旋轉對稱性：$n$ 個相異物圍圓桌排列數為 $(n - 1)! = (5 - 1)! = 4! = 24$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "求方程式 $x + y + z = 6$ 的「非負整數解（$x, y, z \\ge 0$）」共有多少組？",
    options: ["28 組（重複組合 $H^3_6 = C^{3+6-1}_6 = C^8_6 = C^8_2 = 28$）", "56 組", "36 組", "21 組"],
    answer: 0,
    explanation: "非負整數解重複組合公式：$H^n_k = H^3_6 = C^{3+6-1}_6 = C^8_6 = \\frac{8 \\times 7}{2} = 28$ 組。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩顆公正的六面骰子，出現的點數和「小於或等於 4」的機率為何？",
    options: ["1/6（點數和可能為 2, 3, 4，共有 (1,1), (1,2), (2,1), (1,3), (2,2), (3,1) 共 6 種，即 6/36）", "1/12", "1/9", "1/4"],
    answer: 0,
    explanation: "點數和為 2（1種：1,1）；為 3（2種：1,2; 2,1）；為 4（3種：1,3; 2,2; 3,1）。共 6 種可能。機率為 $\\frac{6}{36} = \\frac{1}{6}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "已知某家庭有兩名小孩，在每胎生男生女機率皆為 1/2 且互不影響的前提下。若已知這戶人家「至少有一個小孩是男孩」，則這戶人家的「兩個小孩皆為男孩」的條件機率為何？",
    options: ["1/3（大考經典條件機率陷阱題，樣本空間縮減為 男男、男女、女男 3 種，皆為男孩僅 1 種）", "1/2", "1/4", "2/3"],
    answer: 0,
    explanation: "兩孩總樣本為 男男、男女、女男、女女 4 種。已知「至少一男」排除了女女，剩下 3 種等可能結果，其中「兩男」僅佔 1 種，條件機率為 $\\frac{1}{3}$。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在敘述統計學中，「全距（Range）」定義為一組數據的最大值與最小值之差（$R = \\text{Max} - \\text{Min}$）。全距在統計分析上最顯著的缺點為？",
    options: ["「極容易受到單一極端極大值或極小值（離群值）的嚴重扭曲影響」，無法反映中間大部分數據的分佈狀態", "計算過程過於繁瑣困難", "全距數值永遠等於平均數", "無法用於數值型數據"],
    answer: 0,
    explanation: "全距僅由最大值與最小值兩端決定，中間數據完全不參與計算，只要出現一個離群極端值全距就會劇增，故不如四分位距（IQR）與標準差穩健。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在雙變數數據分析中，若求得 $x$ 與 $y$ 的最適最小平方法迴歸直線斜率 $m = 1.5$，且 $x$ 與 $y$ 的算術平均數分別為 $\\bar{x} = 2, \\bar{y} = 5$。該迴歸直線的方程式為？",
    options: ["$y = 1.5x + 2$（迴歸直線必通過中心點 $(2, 5)$：$5 = 1.5(2) + b \\implies b = 2$）", "$y = 1.5x + 5$", "$y = 2x + 1.5$", "$y = 1.5x - 2$"],
    answer: 0,
    explanation: "最小平方法迴歸直線恆過平均數中心點 $(\\bar{x}, \\bar{y})$。點斜式：$y - 5 = 1.5(x - 2) \\implies y = 1.5x - 3 + 5 = 1.5x + 2$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "地球表面上的「緯線圈」，隨著緯度 $\\phi$ 由赤道向南北極遞增，其圓周長度呈現何種幾何變化規律？",
    options: ["緯線圈長度隨緯度的餘弦值縮小（$L = 2\\pi R \\cos\\phi$），赤道長度最大，至南北極點縮為 0", "所有緯線圈的周長皆完全相等", "緯線圈長度隨緯度增加而變長", "緯線圈皆為大圓"],
    answer: 0,
    explanation: "赤道（$0^\\circ$）為地球大圓周長約 40,000 公里；緯度 $\\phi$ 的緯線圈半徑為 $r = R\\cos\\phi$，周長縮為 $2\\pi R\\cos\\phi$；南北緯 60° 處周長僅為赤道的一半。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，連接兩點 $A(1, 2, 3)$ 與 $B(3, 6, 7)$ 的線段 $AB$，其「中點 $M$」的空間坐標為？",
    options: ["(2, 4, 5)", "(4, 8, 10)", "(2, 3, 4)", "(1, 2, 2)"],
    answer: 0,
    explanation: "中點坐標公式：$M = \\left(\\frac{1+3}{2}, \\frac{2+6}{2}, \\frac{3+7}{2}\\right) = (2, 4, 5)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "二階單位方陣 $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$。對於任何二階方陣 $A$，乘積 $A I$ 的計算結果為何？",
    options: ["$A$（單位矩陣在矩陣乘法中扮演乘法單位元角色）", "零矩陣 $O$", "$2A$", "$A^{-1}$"],
    answer: 0,
    explanation: "單位方陣乘法性質：$A I = I A = A$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$，計算其轉置矩陣 $A^T$ 為何？",
    options: ["$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 3 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -3 \\\\ -2 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & -3 \\\\ -2 & 1 \\end{pmatrix}$"],
    answer: 0,
    explanation: "轉置矩陣行與列元素互換：第一列 (1, 3) 變第一行，第二列 (2, 4) 變第二行，得 $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "太陽能「太陽爐（Solar Furnace）」利用一面面巨大的凹面鏡陣列，將遠處太陽照射過來的平行陽光反射匯聚，可在極小區域內產生高達 3,000°C 以上的超高溫來熔煉耐火高溫材料。這些反射鏡面在幾何學上所採用的曲面為？",
    options: ["旋轉拋物面（將接收端放置於拋物面焦點處）", "旋轉雙曲面", "平面鏡", "圓柱面"],
    answer: 0,
    explanation: "拋物面焦點匯聚性質：所有入射的平行光線經拋物面反射後皆精確交會於焦點，產生極高的能量密度聚焦加熱。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算算術平方根：$\\sqrt{144}$ 之值為何？",
    options: ["12", "14", "16", "72"],
    answer: 0,
    explanation: "因為 $12^2 = 144$ 且 $12 > 0$，故 $\\sqrt{144} = 12$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "直線方程式 $y = 3x - 6$ 與 $y$ 軸的交點坐標為何？",
    options: ["(0, -6)", "(2, 0)", "(0, 6)", "(-6, 0)"],
    answer: 0,
    explanation: "與 $y$ 軸交點令 $x = 0$：$y = 3(0) - 6 = -6$。交點為 $(0, -6)$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，$\\angle C = 90^\\circ$，已知 $\\cos B = 1/2$，則銳角 $\\angle B$ 的角度為多少度？",
    options: ["60°", "30°", "45°", "90°"],
    answer: 0,
    explanation: "因為 $\\cos 60^\\circ = \\frac{1}{2}$，故銳角 $\\angle B = 60^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 5 個人中隨機選出 3 個人組成參訪小組，共有多少種不同的選法？",
    options: ["10 種（組合數 $C^5_3 = C^5_2 = 10$）", "20 種", "60 種", "15 種"],
    answer: 0,
    explanation: "$C^5_3 = \\frac{5 \\times 4 \\times 3}{3 \\times 2 \\times 1} = 10$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "從一副洗好的標準 52 張撲克牌中隨機抽取一張，抽到「黑桃（Spade）」的機率為何？",
    options: ["1/4（四種花色各 13 張，13/52 = 1/4）", "1/13", "1/2", "1/52"],
    answer: 0,
    explanation: "撲克牌有黑桃、紅心、方塊、梅花四種花色各 13 張，抽到黑桃機率為 $\\frac{13}{52} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "數據組 $1, 2, 3, 4, 5$ 的「中位數」為多少？",
    options: ["3", "2.5", "4", "5"],
    answer: 0,
    explanation: "已排序的 5 個數中，正中間第 3 個數為 3，故中位數為 3。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間中通過原點 $(0, 0, 0)$ 且平行於 $z$ 軸的直線，其上的點必然滿足？",
    options: ["$x = 0$ 且 $y = 0$（即為 $z$ 軸本身）", "$z = 0$", "$x = 1$", "$y = 1$"],
    answer: 0,
    explanation: "過原點且平行 $z$ 軸即為 $z$ 軸，其方程式為 $x = 0$ 且 $y = 0$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算矩陣乘積：$\\begin{pmatrix} 1 & 0 \\end{pmatrix} \\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$ 之數值為何？",
    options: ["2（$1 \\times 2 + 0 \\times 3 = 2$）", "3", "5", "0"],
    answer: 0,
    explanation: "$1(2) + 0(3) = 2$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "雙曲線導航系統（如 LORAN）利用兩對固定地面發射站向航行船隻發射同步無線電脈衝信號。船上接收機測量信號到達的「時間差」，由波速換算可得船隻到兩發射站的「距離差為定值」。這條船隻所在的等時差定位線在幾何上屬於？",
    options: ["以兩發射台為焦點的「雙曲線」的一支", "拋物線", "橢圓", "正圓"],
    answer: 0,
    explanation: "雙曲線定義為平面上到兩定點距離之差為定值的點之軌跡。測量時間差乘以光速即為距離差，精確對應雙曲線定位線。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算乘法：$(-6) \\times 7$ 之值為何？",
    options: ["-42", "42", "-13", "1"],
    answer: 0,
    explanation: "$(-6) \\times 7 = -42$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若一次函數 $f(x) = 2x + 1$，則 $f(3)$ 之值為何？",
    options: ["7", "6", "5", "8"],
    answer: 0,
    explanation: "$f(3) = 2(3) + 1 = 6 + 1 = 7$。",
    difficulty: "基礎"
  }
];

batch10.forEach((q, idx) => {
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

console.log(`New Math B count after batch 10: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
