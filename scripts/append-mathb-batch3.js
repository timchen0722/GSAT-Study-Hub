const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 3: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch3 = [
  {
    category: "數與式",
    question: "設 $x$ 為正實數，由算幾不等式求 $x + \\frac{9}{x}$ 的最小值為何？",
    options: ["6", "9", "3", "10"],
    answer: 0,
    explanation: "因為 $x > 0$，由算幾不等式：$\\frac{x + \\frac{9}{x}}{2} \\ge \\sqrt{x \\times \\frac{9}{x}} = \\sqrt{9} = 3 \\implies x + \\frac{9}{x} \\ge 6$。當 $x = \\frac{9}{x} \\implies x = 3$ 時等號成立，最小值為 6。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "數線上三點 $A(-3), B(7), P(x)$。若點 $P$ 在線段 $AB$ 上，且滿足 $\\overline{AP} : \\overline{PB} = 3 : 2$，求 $x$ 之值？",
    options: ["3", "2", "1", "4"],
    answer: 0,
    explanation: "內分點公式：$x = \\frac{2(-3) + 3(7)}{3 + 2} = \\frac{-6 + 21}{5} = \\frac{15}{5} = 3$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某市計程車收費標準為：起跳 1.25 公里內收費 85 元，超過 1.25 公里後，每行駛 200 公尺加收 5 元（即每公里加收 25 元）。若小華搭乘該計程車行駛了 5.25 公里，應支付車資多少元？",
    options: ["185 元", "175 元", "195 元", "165 元"],
    answer: 0,
    explanation: "超過起跳之里程為 $5.25 - 1.25 = 4.0$ 公里。每 200 公尺（0.2 公里）加收 5 元，增加次數為 $4.0 / 0.2 = 20$ 次。加收車資為 $20 \\times 5 = 100$ 元。總車資為 $85 + 100 = 185$ 元。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "拋物線 $y = -(x - 3)^2 + 9$ 與 $x$ 軸的兩個交點坐標為何？",
    options: ["(0, 0) 與 (6, 0)", "(3, 0) 與 (-3, 0)", "(0, 0) 與 (3, 0)", "(1, 0) 與 (5, 0)"],
    answer: 0,
    explanation: "令 $y = 0 \\implies -(x - 3)^2 + 9 = 0 \\implies (x - 3)^2 = 9 \\implies x - 3 = \\pm 3 \\implies x = 0$ 或 $x = 6$。兩交點即為 $(0, 0)$ 與 $(6, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "一杯檸檬汁的 pH 值為 2，一杯純水的 pH 值為 7。請問檸檬汁中的氫離子濃度 $[\\text{H}^+]$ 是純水的多少倍？",
    options: ["100,000 倍（$10^5$ 倍）", "5 倍", "50 倍", "10,000 倍"],
    answer: 0,
    explanation: "$\\text{pH} = -\\log_{10}[\\text{H}^+] \\implies [\\text{H}^+] = 10^{-\\text{pH}}$。檸檬汁 $[\\text{H}^+] = 10^{-2}$ M，純水 $[\\text{H}^+] = 10^{-7}$ M。濃度比值為 $\\frac{10^{-2}}{10^{-7}} = 10^5 = 100,000$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "地震釋放的能量 $E$ 與芮氏規模 $M$ 滿足公式 $\\log_{10} E = 4.8 + 1.5M$。請問規模 8.0 的強震所釋放的能量，是規模 6.0 地震的多少倍？",
    options: ["1,000 倍", "2 倍", "20 倍", "100 倍"],
    answer: 0,
    explanation: "能量比值為 $10^{1.5 \\times \\Delta M} = 10^{1.5 \\times (8.0 - 6.0)} = 10^{1.5 \\times 2} = 10^3 = 1000$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "某無障礙斜坡道每水平前進 12 公尺，高度上升 1 公尺。該斜坡仰角 $\\theta$ 的正切值 $\\tan\\theta$ 為何？",
    options: ["1/12", "12/1", "1/13", "12/13"],
    answer: 0,
    explanation: "正切函數定義為 $\\tan\\theta = \\frac{\\text{對邊（鉛直高）}}{\\text{鄰邊（水平長）}} = \\frac{1}{12}$（相當於坡度約 8.33%）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "計算廣義角三角比 $\\sin 150^\\circ + \\cos 120^\\circ$ 之值為何？",
    options: ["0", "1", "-1", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "$\\sin 150^\\circ = \\sin(180^\\circ - 30^\\circ) = \\sin 30^\\circ = \\frac{1}{2}$；$\\cos 120^\\circ = -\\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$。總和為 $\\frac{1}{2} + \\left(-\\frac{1}{2}\\right) = 0$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在 $\\Delta ABC$ 中，已知邊長 $a = 4, b = 5$，且夾角 $\\angle C = 45^\\circ$。求 $\\Delta ABC$ 的面積？",
    options: ["$5\\sqrt{2}$", "$10\\sqrt{2}$", "10", "$5\\sqrt{3}$"],
    answer: 0,
    explanation: "面積公式：$A = \\frac{1}{2} a b \\sin C = \\frac{1}{2}(4)(5)\\sin 45^\\circ = 10 \\times \\frac{\\sqrt{2}}{2} = 5\\sqrt{2}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "甲、乙、丙、丁、戊 5 人排成一列合照，若規定「甲與乙兩人必須相鄰」，共有多少種排法？",
    options: ["48 種", "24 種", "120 種", "60 種"],
    answer: 0,
    explanation: "相鄰綑綁法：將甲、乙綁成一個大元素，與丙、丁、戊共 4 個元素作全排列，有 $4! = 24$ 種排法；甲與乙內部可互換位置有 $2! = 2$ 種。總排法為 $24 \\times 2 = 48$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 12 名學生志工中選出 5 人組成服務隊。已知隊長小美「必定入選」，而副隊長小明因事「必定不能入選」。請問共有多少種選人方法？",
    options: ["210 種", "252 種", "120 種", "462 種"],
    answer: 0,
    explanation: "小美必入選需佔 1 名額，小明不選予以剔除。因此只需自剩下的 $12 - 2 = 10$ 人中選出剩下的 $5 - 1 = 4$ 人。組合數為 $C^{10}_4 = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$ 種。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩枚公正的硬幣一次，至少出現一次「正面」的機率為何？",
    options: ["3/4", "1/2", "1/4", "2/3"],
    answer: 0,
    explanation: "樣本空間有 (正,正)、(正,反)、(反,正)、(反,反) 共 4 種。反面事件「兩次皆為反面」僅 1 種。因此至少一正面的機率為 $1 - \\frac{1}{4} = \\frac{3}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "某公益彩券每張售價 100 元，發行 1,000 張。獎項如下：特獎 1 名得 30,000 元，頭獎 2 名各得 10,000 元，二獎 10 名各得 1,000 元，其餘無獎。購買一張彩券的「獎金期望值」與「期望淨收益」分別為何？",
    options: ["獎金期望值 60 元，期望淨收益 -40 元", "獎金期望值 100 元，期望淨收益 0 元", "獎金期望值 50 元，期望淨收益 -50 元", "獎金期望值 40 元，期望淨收益 -60 元"],
    answer: 0,
    explanation: "總獎金 $= 30000(1) + 10000(2) + 1000(10) = 30000 + 20000 + 10000 = 60,000$ 元。每張獎金期望值 $E = \\frac{60000}{1000} = 60$ 元。扣除成本 100 元，期望淨收益為 $60 - 100 = -40$ 元。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在敘述統計學中，相較於算術平均數，中位數（Median）所具有的最大優點為何？",
    options: ["具有高度穩健性（Robustness），極不易受到少數極端極大值或極小值的扭曲影響", "計算過程絕對比平均數快速", "中位數恆等於眾數", "中位數可以用於進行線性代數矩陣運算"],
    answer: 0,
    explanation: "平均數極易被單一離群極值拉偏（如少數富豪大幅推高人均所得），中位數僅由位置排序決定，對極端值不敏感，故官方薪資統計常用中位數衡量中產生活水平。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某組數據 10 個數值計算得標準差為 $\\sigma = 4$。若將該組數據的「每一個數值都加上 10」，則新數據的標準差變為多少？",
    options: ["4（標準差保持不變）", "14", "40", "10"],
    answer: 0,
    explanation: "標準差衡量的是數據相對於平均數的離散分散程度。所有數據平移加減同一常數，整體散佈形狀與跨度完全不變，故標準差恆定為 4。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "已知兩變數 $X$ 與 $Y$ 的線性相關係數為 $r = -0.92$。下列關於兩變數關係的解讀何者正確？",
    options: ["$X$ 與 $Y$ 之間存在強烈的負相關（當 $X$ 增加時，$Y$ 有高度趨勢減少）", "$X$ 與 $Y$ 完全沒有相關性", "$X$ 的增加會導致 $Y$ 增加", "相關係數計算錯誤，因為不可能為負值"],
    answer: 0,
    explanation: "相關係數範圍在 $[-1, 1]$ 之間。負值表示反向變動（負相關），絕對值 $|-0.92| = 0.92 > 0.7$ 屬於高度強負相關。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一隻螞蟻在長 4 公分、寬 3 公分、高 2 公分的長方體表面上，欲從頂點 $A$ 爬行到最遠的對角頂點 $G$。若只能沿長方體表面爬行，最短路徑的長度為何？",
    options: ["$\\sqrt{41}$ 公分（即 $\\sqrt{(4+3)^2 + 2^2} = \\sqrt{53}$ 或 $\\sqrt{4^2 + (3+2)^2} = \\sqrt{41}$）", "$\\sqrt{29}$ 公分", "9 公分", "$\\sqrt{30}$ 公分"],
    answer: 0,
    explanation: "將長方體相鄰兩面展開成平面矩形：三種展開路線的兩股分別為 (4+3, 2)、(4+2, 3)、(3+2, 4)。斜邊平方分別為 $7^2+2^2 = 53$、$6^2+3^2 = 45$、$5^2+4^2 = 41$。最短表面距離為 $\\sqrt{41}$ 公分。",
    difficulty: "進階"
  },
  {
    category: "空間概念與球面幾何",
    question: "在空間坐標系中，點 $A(1, 4, -2)$ 與點 $B(5, -2, 6)$ 的中點 $M$ 坐標為何？",
    options: ["(3, 1, 2)", "(6, 2, 4)", "(2, -3, 4)", "(4, -6, 8)"],
    answer: 0,
    explanation: "中點坐標公式：$M = \\left(\\frac{1+5}{2}, \\frac{4+(-2)}{2}, \\frac{-2+6}{2}\\right) = (3, 1, 2)$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "遠洋輪船航行或民航客機進行跨洋長途飛行時，導航系統規劃的最短航線通常不是地圖上的直線，而是沿著地球表面上通過出發地與目的地的哪種幾何曲線？",
    options: ["大圓航線（Great Circle Route，通過球心的平面與球面相交的大圓劣弧）", "小圓航線", "等角恆向線", "正弦曲線"],
    answer: 0,
    explanation: "球面上任意兩點之間的最短地表距離，恆為通過該兩點及球心的「大圓（Great circle）」之劣弧長度，故長途越洋飛行皆採大圓航線以節省航時與燃油。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} a & 2 \\\\ 3 & 6 \\end{pmatrix}$。若方陣 $A$「不存在反矩陣（不可逆）」，則實數 $a$ 之值為何？",
    options: ["1", "4", "0", "-1"],
    answer: 0,
    explanation: "二階方陣不可逆等價於行列式為 0：$\\det(A) = a(6) - 2(3) = 6a - 6 = 0 \\implies 6a = 6 \\implies a = 1$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "下列哪一個矩陣「符合」轉移矩陣（Transition Matrix）的定義條件？",
    options: ["$\\begin{pmatrix} 0.6 & 0.4 \\\\ 0.4 & 0.6 \\end{pmatrix}$（每行元素和為 1 且皆非負）", "$\\begin{pmatrix} 0.7 & 0.5 \\\\ 0.3 & 0.8 \\end{pmatrix}$", "$\\begin{pmatrix} 1.2 & -0.2 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0.5 & 0.5 \\\\ 0.2 & 0.2 \\end{pmatrix}$"],
    answer: 0,
    explanation: "轉移矩陣定義：矩陣中每個元素均滿足 $0 \\le p_{ij} \\le 1$，且每一行（column）的元素總和必須恆等於 1。選項 A 第一行 $0.6+0.4=1$，第二行 $0.4+0.6=1$，完全符合。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "傳統手電筒反光杯將燈泡發出的光線轉化為向前射出的平行光束，其反光杯內壁的截面曲線形狀必須是？",
    options: ["拋物線（將燈泡置於拋物線焦點處）", "橢圓", "雙曲線", "圓形"],
    answer: 0,
    explanation: "拋物線反射幾何性質：由焦點發出的光線經拋物面反射後，反射光線方向平行於對稱軸向前射出，形成集中的探照強光。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "現代全球衛星定位（GPS）與早期長程無線電導航系統（Loran）中，船隻接收來自兩處已知固定發射台的無線電訊號，根據兩訊號「到達的時間差（距離差恆定）」，船隻所在的位置軌跡屬於哪種圓錐曲線？",
    options: ["雙曲線（到兩固定焦點之距離差為定值的點之軌跡）", "橢圓（距離和為定值）", "拋物線", "圓形"],
    answer: 0,
    explanation: "訊號以光速傳播，時間差恆定代表船隻至兩電台（焦點）的距離差恆定。平面上到兩定點距離差為非零定值的軌跡即為雙曲線的一支。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "若整數 $x$ 滿足不等式 $|x - 2| \\le 3$，則滿足條件的整數解 $x$ 共有幾個？",
    options: ["7 個", "6 個", "5 個", "8 個"],
    answer: 0,
    explanation: "$-3 \\le x - 2 \\le 3 \\implies -1 \\le x \\le 5$。整數解為 $-1, 0, 1, 2, 3, 4, 5$ 共 $5 - (-1) + 1 = 7$ 個。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "已知二次函數 $y = 2(x + 1)^2 - 5$，則該函數圖形的對稱軸方程式為何？",
    options: ["$x = -1$", "$x = 1$", "$y = -5$", "$x = -5$"],
    answer: 0,
    explanation: "頂點式 $y = a(x - h)^2 + k$ 的對稱軸為鉛直線 $x = h$。此處 $h = -1$，故對稱軸為 $x = -1$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "某排球隊共有 10 名球員，教練欲從中選出 6 人上場比賽，共有多少種不同的選拔組合？",
    options: ["210 種", "120 種", "5040 種", "420 種"],
    answer: 0,
    explanation: "組合公式：$C^{10}_6 = C^{10}_4 = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "從一副撲克牌 52 張中隨機抽取 1 張，抽中「K」或「Q」的機率為何？",
    options: ["2/13", "1/13", "4/13", "8/52（即 2/13）"],
    answer: 0,
    explanation: "全副牌中 K 有 4 張，Q 有 4 張，兩者互斥。總有利結果為 $4 + 4 = 8$ 張。機率為 $\\frac{8}{52} = \\frac{2}{13}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階矩陣加法：$\\begin{pmatrix} 2 & -1 \\\\ 3 & 5 \\end{pmatrix} + \\begin{pmatrix} 1 & 4 \\\\ -2 & 0 \\end{pmatrix}$ 之結果為何？",
    options: ["$\\begin{pmatrix} 3 & 3 \\\\ 1 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & -3 \\\\ 1 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 5 \\\\ 5 & 5 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 3 \\\\ -1 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "矩陣加法對應元素相加：$(2+1, -1+4; 3+(-2), 5+0) = \\begin{pmatrix} 3 & 3 \\\\ 1 & 5 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角三角形中，已知銳角 $\\angle A$ 的對邊長為 3，斜邊長為 5，則 $\\cos A$ 之值為何？",
    options: ["4/5", "3/5", "3/4", "4/3"],
    answer: 0,
    explanation: "由畢氏定理，鄰邊長為 $\\sqrt{5^2 - 3^2} = \\sqrt{16} = 4$。由定義 $\\cos A = \\frac{\\text{鄰邊}}{\\text{斜邊}} = \\frac{4}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "在橢圓軌道上運行的彗星，當其運行至軌道上距離太陽最近的點時，天文學上將該位置稱為？",
    options: ["近日點（Perihelion）", "遠日點", "焦點點", "春分點"],
    answer: 0,
    explanation: "行星或彗星橢圓軌道上距離中心天體（太陽）最近之點稱為近日點（速率最大）；距離最遠之點稱為遠日點（速率最小）。",
    difficulty: "基礎"
  }
];

batch3.forEach((q, idx) => {
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

console.log(`New Math B count after batch 3: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
