const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 17: ${quiz.length}`);

// 42 Handcrafted, non-templated questions for Math B to hit 550!
const batch17 = [
  {
    category: "數與式",
    question: "已知實數 $x > 0$。利用算幾不等式 $\\frac{x + 9/x}{2} \\ge \\sqrt{x \\cdot \\frac{9}{x}} = 3$，代數式 $x + \\frac{9}{x}$ 的「最小值」為多少？",
    options: ["6（$x + \\frac{9}{x} \\ge 2 \\sqrt{9} = 6$，當且僅當 $x = 3$ 時等號成立）", "3", "9", "18"],
    answer: 0,
    explanation: "算幾不等式求極小值：$x + \\frac{9}{x} \\ge 2\\sqrt{x \\times \\frac{9}{x}} = 2\\sqrt{9} = 6$。等號成立於 $x = 9/x \\implies x^2 = 9 \\implies x = 3$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "化簡雙重根號代數式：$\\sqrt{4 + 2\\sqrt{3}}$ 之最簡結果為？",
    options: ["$\\sqrt{3} + 1$（因 $(\\sqrt{3} + 1)^2 = 3 + 2\\sqrt{3} + 1 = 4 + 2\\sqrt{3}$）", "$\\sqrt{3} - 1$", "$2 + \\sqrt{3}$", "$\\sqrt{6}$"],
    answer: 0,
    explanation: "雙重根號化簡：找兩數和為 4、積為 3，即 3 與 1。故 $\\sqrt{4 + 2\\sqrt{3}} = \\sqrt{3} + \\sqrt{1} = \\sqrt{3} + 1$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某農場規劃用長度為 40 公尺的圍籬沿著一面平直圍牆圍出一座「矩形菜園」（靠牆那一面不需圍籬，即圍籬總長 $2x + y = 40$ 公尺，其中 $x$ 為寬度，$y$ 為長度）。這座矩形菜園所能圍出的「最大面積」為多少平方公尺？",
    options: ["200 平方公尺（面積 $A(x) = x(40 - 2x) = -2(x - 10)^2 + 200$，當寬度 $x = 10$ 公尺時取得最大面積 200 平方公尺）", "400 平方公尺", "100 平方公尺", "150 平方公尺"],
    answer: 0,
    explanation: "二次函數配方求極值：$y = 40 - 2x$。面積 $A(x) = x(40 - 2x) = -2x^2 + 40x = -2(x^2 - 20x + 100) + 200 = -2(x - 10)^2 + 200$。當 $x = 10$ 時有最大值 200 平方公尺。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "地震學中，芮氏地震規模（Richter Scale）$M$ 與地震釋放的能量 $E$（焦耳）滿足古騰堡—芮克特對數公式：$\\log_{10} E = 4.8 + 1.5 M$。依此公式計算，芮氏規模每增加「2 級（例如規模從 5.0 級上升至 7.0 級）」，地震釋放的能量 $E$ 擴大了多少倍？",
    options: ["1,000 倍（$\\Delta \\log_{10} E = 1.5 \\times 2 = 3 \\implies E_2 / E_1 = 10^3 = 1000$ 倍）", "2 倍", "100 倍", "31.6 倍（此為規模增加 1 級之倍數 $10^{1.5}$）"],
    answer: 0,
    explanation: "芮氏地震能量對數尺度：規模每增加 1 級，能量增大 $10^{1.5} \\approx 31.6$ 倍；規模每增加 2 級，能量擴大 $10^{1.5 \\times 2} = 10^3 = 1000$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "在生物培養皿中，某種細菌每隔 20 分鐘便會進行一次二分裂（數量翻倍）。若最初培養皿中放入 100 隻細菌，經過 1 小時（即經過 3 次分裂週期）後，培養皿中的細菌總數將會達到多少隻？",
    options: ["800 隻（$100 \\times 2^3 = 100 \\times 8 = 800$ 隻）", "600 隻", "300 隻", "1600 隻"],
    answer: 0,
    explanation: "指數分裂模型：1 小時為 60 分鐘，經歷 $60 / 20 = 3$ 次分裂。細菌總數為 $100 \\times 2^3 = 800$ 隻。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "小明站在平坦地面上，測得遠處高聳大樓頂端的仰角為 45°。已知小明所在位置距離大樓底部水平距離為 50 公尺（忽略小明身高）。該大樓的「建築高度」為多少公尺？",
    options: ["50 公尺（高度 $h = 50 \\times \\tan 45^\\circ = 50 \\times 1 = 50$ 公尺）", "25 公尺", "$50\\sqrt{3}$ 公尺", "100 公尺"],
    answer: 0,
    explanation: "等腰直角三角形仰角測量：仰角為 45° 時，對邊（樓高）等於鄰邊（水平距離），故高度為 50 公尺。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在平面幾何中，三角形內部「三條內角平分線的共同交點」，恰為該三角形「內切圓的圓心」。這個交點在幾何學上被稱為？",
    options: ["「內心（Incenter）」", "外心（三邊中垂線交點，外接圓圓心）", "重心（三中線交點）", "垂心（三高線交點）"],
    answer: 0,
    explanation: "三角形四心幾何定義：內角平分線交點為內心（到三邊等距）；中垂線交點為外心（到三頂點等距）；中線交點為重心（2:1 分點）；高線交點為垂心。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "甲、乙、丙、丁 4 位同學排成一列照相。若「甲與乙兩人絕對不能相鄰（排在相鄰位置）」，合法的排法共有多少種？",
    options: ["12 種（全排列 $4! = 24$ 種減去甲乙相鄰 $3! \\times 2! = 12$ 種，得 $24 - 12 = 12$ 種，或插空法：丙丁先排 $2! = 2$ 種，3 個空位選 2 個排甲乙 $P^3_2 = 6$，乘法得 $2 \\times 6 = 12$）", "24 種", "6 種", "18 種"],
    answer: 0,
    explanation: "不相鄰插空法：(1) 先排丙、丁共 $2! = 2$ 種；(2) 產生 3 個空位（_ 丙 _ 丁 _），將甲、乙插入 3 空位有 $P^3_2 = 6$ 種。總計 $2 \\times 6 = 12$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "平面上有 6 個點，其中任意三點皆不共線。由這 6 個點總共可以連接出多少條不同的「直線」？",
    options: ["15 條（$C^6_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$）", "30 條", "12 條", "20 條"],
    answer: 0,
    explanation: "兩點決定一條直線：$C^6_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$ 條直線。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "設事件 $A$ 與事件 $B$ 為「互斥事件（Mutually Exclusive，兩事件絕不可能同時發生，即 $P(A \\cap B) = 0$）」。若已知 $P(A) = 0.3$ 且 $P(B) = 0.4$。則事件 $A$ 或事件 $B$ 發生的機率 $P(A \\cup B)$ 為？",
    options: ["0.7（互斥事件加法公式 $P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$）", "0.12", "0.1", "0.5"],
    answer: 0,
    explanation: "互斥事件機率可加性：$P(A \\cap B) = 0 \\implies P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學盒狀圖（Box Plot）中，一組數據的第 25 百分位數為 $Q_1 = 40$，第 75 百分位數為 $Q_3 = 70$。則這組數據的「四分位距（Interquartile Range，IQR）」大小為多少？",
    options: ["30（公式 $\\text{IQR} = Q_3 - Q_1 = 70 - 40 = 30$）", "110", "55", "15"],
    answer: 0,
    explanation: "四分位距定義：$\\text{IQR} = Q_3 - Q_1 = 70 - 40 = 30$（反映中間 50% 核心數據之離散跨度，抗極端值干擾）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一個長方體的長、寬、高分別為 3 公分、4 公分與 12 公分。該長方體最長的「空間內部對角線長度」為多少公分？",
    options: ["13 公分（空間三維畢氏定理 $\\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$ 公分）", "19 公分", "12 公分", "15 公分"],
    answer: 0,
    explanation: "長方體空間對角線公式：$d = \\sqrt{a^2 + b^2 + c^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$ 公分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在三維地球球面上，由球面中心（地心）截球體所得的圓稱為「大圓（Great Circle）」。飛機在進行跨大洋洲際遠程飛行時，航線規劃通常沿著連接起降兩地的大圓弧線飛行（大圓航線）。採用大圓航線的最根本導航效益為？",
    options: ["在地球球面上兩點之間「大圓劣弧是距離最短的航程路徑」，能最大程度節省飛行時間與燃油", "因為大圓航線完全沒有任何風阻", "因為飛機無法在平坦緯線飛行", "因為大圓航線永遠不需要無線電通訊"],
    answer: 0,
    explanation: "球面幾何最短測地線：球面上任意兩點間的最短路徑必為通過該兩點的大圓劣弧（如臺北飛洛杉磯航線往北彎經阿留申群島而非沿緯線平飛）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階矩陣加法：$\\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 1 \\\\ 2 & 3 \\end{pmatrix}$ 之結果為？",
    options: ["$\\begin{pmatrix} 7 & 4 \\\\ 3 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 10 & 3 \\\\ 2 & 12 \\end{pmatrix}$", "$\\begin{pmatrix} 7 & 3 \\\\ 1 & 7 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "矩陣加法對應元素相加：$\\begin{pmatrix} 2+5 & 3+1 \\\\ 1+2 & 4+3 \\end{pmatrix} = \\begin{pmatrix} 7 & 4 \\\\ 3 & 7 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "在現代天文學中，大型光學天文望遠鏡（如著名的哈伯太空望遠鏡、凱克天文臺）的凹面反射主鏡，通常採用何種幾何曲面形狀，以便將來自遙遠星系的平行星光精確反射聚焦於單一焦點？",
    options: ["「旋轉拋物面鏡（拋物面）」", "球面鏡", "平面鏡", "雙曲面柱鏡"],
    answer: 0,
    explanation: "拋物面鏡消除球差：平行於對稱軸入射的所有平行光線經拋物面反射後百分之百完美匯聚於唯一焦點，徹底消除普通球面鏡產生的像差。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數運算：$(\\sqrt{10} + 3)(\\sqrt{10} - 3)$ 之結果為何？",
    options: ["1（$(\\sqrt{10})^2 - 3^2 = 10 - 9 = 1$）", "7", "19", "0"],
    answer: 0,
    explanation: "平方差公式：$(\\sqrt{10})^2 - 3^2 = 10 - 9 = 1$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "求一次函數直線 $y = 2x - 6$ 與 $x$ 軸的交點坐標為何？",
    options: ["$(3, 0)$（令 $y = 0 \\implies 2x - 6 = 0 \\implies x = 3$）", "$(0, -6)$（此為與 $y$ 軸交點）", "(-3, 0)", "$(6, 0)$"],
    answer: 0,
    explanation: "令 $y = 0$ 解得 $2x = 6 \\implies x = 3$，交點坐標為 $(3, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "直角坐標系中，角 $\\theta = 45^\\circ$ 的正切值 $\\tan 45^\\circ$ 為何？",
    options: ["1", "0", "$\\sqrt{3}$", "$\\sqrt{3}/3$"],
    answer: 0,
    explanation: "$\\tan 45^\\circ = 1$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^8_2$ 之值為何？",
    options: ["28（$\\frac{8 \\times 7}{2 \\times 1} = 28$）", "56", "16", "64"],
    answer: 0,
    explanation: "$C^8_2 = \\frac{8 \\times 7}{2 \\times 1} = 28$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "丟擲一枚均勻的硬幣，出現「反面」的機率為何？",
    options: ["1/2（0.5）", "1", "0", "1/4"],
    answer: 0,
    explanation: "均勻硬幣反面機率為 1/2。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位同學的統計成績分別為 80, 80, 80, 80, 80 分（五人成績完全相同）。這組數據的「算術平均數」為多少分？",
    options: ["80 分", "0 分", "400 分", "16 分"],
    answer: 0,
    explanation: "全體相同數值其平均數必等於該數值 80 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一個「正方體」總共有多少個頂點？",
    options: ["8 個頂點", "6 個頂點", "12 個頂點", "4 個頂點"],
    answer: 0,
    explanation: "正方體幾何特徵：6 個面、12 條稜、8 個頂點。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階方陣與行向量乘法：$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$ 之結果為？",
    options: ["$\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$（單位矩陣乘任何向量等於自身）", "$\\begin{pmatrix} 7 \\\\ 5 \\end{pmatrix}$", "$\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$", "$\\begin{pmatrix} 12 \\\\ 12 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$I \\vec{v} = \\vec{v}$，結果為 $\\begin{pmatrix} 5 \\\\ 7 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "圓方程式為 $(x - 4)^2 + y^2 = 9$，該圓在坐標平面上的「圓心坐標」為？",
    options: ["$(4, 0)$", "$(0, 4)$", "(-4, 0)", "$(4, 3)$"],
    answer: 0,
    explanation: "圓心坐標為 $(4, 0)$，半徑為 3。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算代數乘法：$(-6) \\times (-7)$ 之結果為何？",
    options: ["42（負負得正）", "-42", "-13", "13"],
    answer: 0,
    explanation: "$(-6) \\times (-7) = 42$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = (x - 5)^2 + 3$ 圖形的「頂點坐標」為？",
    options: ["$(5, 3)$", "(-5, 3)", "$(5, -3)$", "$(0, 3)$"],
    answer: 0,
    explanation: "標準頂點式 $y = a(x-h)^2 + k$，頂點為 $(h, k) = (5, 3)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算對數值：$\\log_{10} 1000$ 之數值為何？",
    options: ["3（因 $10^3 = 1000$）", "100", "10", "1"],
    answer: 0,
    explanation: "$\\log_{10}(10^3) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "直角坐標系中，角 $\\theta = 90^\\circ$ 的正切值 $\\tan 90^\\circ$ 為何？",
    options: ["「無意義 / 不存在」（分母 $\\cos 90^\\circ = 0$）", "0", "1", "-1"],
    answer: 0,
    explanation: "$\\tan 90^\\circ = \\frac{\\sin 90^\\circ}{\\cos 90^\\circ} = \\frac{1}{0}$（分母為零，無定義不存在）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 5 個人中選出 3 個人排成一列，共有多少種排列數 $P^5_3$？",
    options: ["60 種（$5 \\times 4 \\times 3 = 60$）", "10 種", "120 種", "20 種"],
    answer: 0,
    explanation: "$P^5_3 = 5 \\times 4 \\times 3 = 60$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一顆公正的六面骰子，出現的點數「大於 4（即 5 點或 6 點）」的機率為何？",
    options: ["1/3（2/6 = 1/3）", "1/2", "1/6", "2/3"],
    answer: 0,
    explanation: "點數為 5, 6 共 2 種，機率為 $\\frac{2}{6} = \\frac{1}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位同學的數學成績分別為 60, 70, 80, 90, 100 分。這組成績的「全距（Range）」為多少分？",
    options: ["40 分（最大值 100 減最小值 60：$100 - 60 = 40$ 分）", "80 分", "20 分", "50 分"],
    answer: 0,
    explanation: "全距 $\\text{Range} = \\text{Max} - \\text{Min} = 100 - 60 = 40$ 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一個「正方體」總共有多少條稜邊？",
    options: ["12 條稜", "6 條", "8 條", "4 條"],
    answer: 0,
    explanation: "正方體有 12 條長度相等的稜邊。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階矩陣乘法：$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$ 之結果為？",
    options: ["$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$A I = A$，乘單位矩陣等於自身。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "雙曲線方程式 $\\frac{x^2}{25} - \\frac{y^2}{16} = 1$ 的中心坐標為？",
    options: ["$(0, 0)$（坐標原點）", "$(5, 4)$", "$(0, 5)$", "$(4, 0)$"],
    answer: 0,
    explanation: "標準雙曲線中心位於坐標原點 $(0, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數：$| -30 | \\div 6$ 之結果為何？",
    options: ["5（$30 \\div 6 = 5$）", "-5", "6", "30"],
    answer: 0,
    explanation: "$|-30| \\div 6 = 30 \\div 6 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "一次函數直線 $y = 5$ 在坐標平面上的幾何特徵為？",
    options: ["一條「平行於 $x$ 軸且通過 $(0, 5)$ 的水平直線」", "一條鉛直直線", "一條通過原點的斜直線", "一條雙曲線"],
    answer: 0,
    explanation: "$y = 5$ 為常數函數水平直線，斜率為 0。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算 $16^{1/4}$ 之數值為何？",
    options: ["2（因 $2^4 = 16$）", "4", "8", "1"],
    answer: 0,
    explanation: "$16^{1/4} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "直角 $\\Delta ABC$ 中，若斜邊長度 $c = 8$，銳角 $\\angle A = 30^\\circ$。求其對邊長度 $a$ 為多少？",
    options: ["4（$a = 8 \\times \\sin 30^\\circ = 8 \\times 0.5 = 4$）", "8", "$4\\sqrt{3}$", "2"],
    answer: 0,
    explanation: "$a = c \\sin 30^\\circ = 8 \\times 1/2 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "計算組合數 $C^{10}_1$ 之值為何？",
    options: ["10", "1", "45", "100"],
    answer: 0,
    explanation: "$C^{10}_1 = 10$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "在標準 52 張撲克牌（不含鬼牌）中隨機抽取 1 張，抽中「紅色牌（紅心或方塊）」的機率為何？",
    options: ["1/2（26/52 = 1/2）", "1/4", "1/13", "3/4"],
    answer: 0,
    explanation: "紅色牌共 26 張，機率為 $\\frac{26}{52} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "五位同學的測驗分數分別為 50, 60, 70, 80, 90 分。這組分數的「中位數」為多少分？",
    options: ["70 分", "60 分", "80 分", "75 分"],
    answer: 0,
    explanation: "奇數項中間第 3 項即為中位數 70 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "正方體一個面由 4 條邊組成，其每個面的幾何形狀都是全等的？",
    options: ["「正方形」", "長方形", "正三角形", "圓形"],
    answer: 0,
    explanation: "正方體 6 個面全數為全等的正方形。",
    difficulty: "基礎"
  }
];

batch17.forEach((q, idx) => {
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

console.log(`New Math B count after batch 17: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
