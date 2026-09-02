const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 2: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch2 = [
  {
    category: "數與式",
    question: "已知 $a + b = 5$ 且 $ab = 3$，利用立方和公式求 $a^3 + b^3$ 之值為何？",
    options: ["80", "110", "95", "125"],
    answer: 0,
    explanation: "$a^3 + b^3 = (a + b)^3 - 3ab(a + b) = 5^3 - 3(3)(5) = 125 - 45 = 80$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "數線上兩點 $A(-2)$ 與 $B(4)$。若點 $P(x)$ 為線段 $AB$ 外的一點（外分點），且滿足 $\\overline{PA} : \\overline{PB} = 1 : 2$，則點 $P$ 的坐標 $x$ 為何？",
    options: ["-8", "-6", "10", "-4"],
    answer: 0,
    explanation: "外分點公式：$x = \\frac{2(-2) - 1(4)}{2 - 1} = \\frac{-4 - 4}{1} = -8$。檢驗：$PA = |-8 - (-2)| = 6$，$PB = |-8 - 4| = 12$，$PA:PB = 1:2$ 符合。",
    difficulty: "中等"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $f(x) = ax^2 + bx + c$ 的圖形頂點在第四象限，且拋物線開口向上。則下列各係數符號判斷何者正確？",
    options: ["$a > 0$ 且 $c > 0$ 不一定，但頂點縱坐標必小於 0", "$a < 0$", "對稱軸 $x = -b/(2a) < 0$", "$b^2 - 4ac < 0$"],
    answer: 0,
    explanation: "開口向上 $\\implies a > 0$。頂點在第四象限 $\\implies$ 頂點橫坐標 $h > 0$ 且縱坐標 $k < 0$。因為頂點縱坐標小於 0 且開口向上，拋物線與 $x$ 軸必有兩相異交點（$b^2 - 4ac > 0$）。",
    difficulty: "中等"
  },
  {
    category: "一次與二次函數",
    question: "在坐標平面上，兩直線 $L_1: 2x - y = 4$ 與 $L_2: x + 2y = 7$ 的交點坐標為何？",
    options: ["(3, 2)", "(2, 3)", "(1, -2)", "(5, 1)"],
    answer: 0,
    explanation: "由 $L_1$ 得 $y = 2x - 4$，代入 $L_2$：$x + 2(2x - 4) = 7 \\implies x + 4x - 8 = 7 \\implies 5x = 15 \\implies x = 3$。代回得 $y = 2(3) - 4 = 2$。交點為 $(3, 2)$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "比較三個指數數值 $A = 2^{30}, B = 3^{20}, C = 5^{10}$ 的大小關係，下列何者正確？",
    options: ["$B > A > C$", "$A > B > C$", "$C > B > A$", "$B > C > A$"],
    answer: 0,
    explanation: "取指數的最大公因數 10：$A = (2^3)^{10} = 8^{10}$；$B = (3^2)^{10} = 9^{10}$；$C = 5^{10}$。因為底數 $9 > 8 > 5$，所以 $9^{10} > 8^{10} > 5^{10}$，即 $B > A > C$。",
    difficulty: "中等"
  },
  {
    category: "指數與對數模型",
    question: "天文學中恆星的視星等（Apparent magnitude）與亮度成對數反比關係。定義「星等每相差 5 等，亮度恰好相差 100 倍」。請問 1 等星的亮度是 6 等星的多少倍？",
    options: ["100 倍", "5 倍", "50 倍", "1,000 倍"],
    answer: 0,
    explanation: "星等差為 $6 - 1 = 5$ 等。依據定義，星等相差 5 等時，較亮之星體（星等數字較小者）亮度恰好為較暗者的 $100$ 倍（每差 1 等約差 $100^{1/5} \\approx 2.512$ 倍）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "地震芮氏規模每增加 1，地震儀所記錄到的地震波最大振幅放大 10 倍。請問規模 6.5 的地震，其最大振幅是規模 4.5 地震的多少倍？",
    options: ["100 倍", "2 倍", "20 倍", "1,000 倍"],
    answer: 0,
    explanation: "振幅比為 $10^{\\Delta M}$。規模差 $\\Delta M = 6.5 - 4.5 = 2.0$。因此振幅放大倍數為 $10^2 = 100$ 倍。（注意：釋放能量才是約 $10^{1.5 \\times 2} = 1000$ 倍）。",
    difficulty: "中等"
  },
  {
    category: "三角函數與生活測量",
    question: "航海員在燈塔頂部觀測海面上一艘遇難小船，測得俯角為 30°。若燈塔頂距離海平面的垂直高度為 60 公尺，則小船與燈塔底部的水平直線距離為多少公尺？",
    options: ["$60\\sqrt{3}$ 公尺", "$60$ 公尺", "$20\\sqrt{3}$ 公尺", "$120$ 公尺"],
    answer: 0,
    explanation: "俯角等於小船仰望燈塔頂的仰角 30°。由三角比定義：$\\tan 30^\\circ = \\frac{\\text{高}}{\\text{底}} = \\frac{60}{d} = \\frac{1}{\\sqrt{3}} \\implies d = 60\\sqrt{3}$ 公尺。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "當角度 $\\theta$ 在第一象限（$0^\\circ < \\theta < 90^\\circ$）由小逐漸變大時，下列關於三角比的變化敘述何者完全正確？",
    options: ["$\\sin\\theta$ 隨之遞增，$\\cos\\theta$ 隨之遞減", "$\\sin\\theta$ 與 $\\cos\\theta$ 皆隨之遞增", "$\\sin\\theta$ 與 $\\cos\\theta$ 皆隨之遞減", "$\\tan\\theta$ 隨之遞減"],
    answer: 0,
    explanation: "在第一象限單位圓中，隨角度增大，對邊（高）增長故 $\\sin\\theta$ 遞增；鄰邊（底）縮短故 $\\cos\\theta$ 遞減；斜率 $\\tan\\theta$ 亦遞增。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在 $\\Delta ABC$ 中，已知邊長 $a = 6, b = 10$，且內角 $\\angle C = 30^\\circ$。求 $\\Delta ABC$ 的面積為何？",
    options: ["15", "30", "$15\\sqrt{3}$", "$30\\sqrt{3}$"],
    answer: 0,
    explanation: "三角形面積公式：$A = \\frac{1}{2} a b \\sin C = \\frac{1}{2}(6)(10)\\sin 30^\\circ = 30 \\times \\frac{1}{2} = 15$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將紅、黃、藍、綠 4 種不同顏色塗在相鄰的 A、B、C 3 個區域，規定相鄰區域顏色不得相同，顏色可重複使用，共有幾種塗色方法？",
    options: ["36 種", "24 種", "64 種", "12 種"],
    answer: 0,
    explanation: "A 區域有 4 種選色；與 A 相鄰的 B 區域有 3 種選色；與 B 相鄰但與 A 不相鄰的 C 區域有 3 種選色（可與 A 同色）。乘法原理：$4 \\times 3 \\times 3 = 36$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由數字 1, 2, 3, 4, 5 組成沒有重複數字的四位數，其中「奇數」共有多少個？",
    options: ["72 個", "120 個", "48 個", "36 個"],
    answer: 0,
    explanation: "四位數要是奇數，個位數必須是奇數（1, 3, 5 共 3 種選擇）。個位定好後，前三位自剩下的 4 個數字中任選 3 個排列，有 $P^4_3 = 4 \\times 3 \\times 2 = 24$ 種。總計 $3 \\times 24 = 72$ 個。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "醫院某科別有 8 名男醫師與 6 名女醫師。現欲選拔 3 名醫師代表出國考察，規定名單中「至少要包含 1 名女醫師」，共有多少種選法？",
    options: ["308 種", "364 種", "280 種", "224 種"],
    answer: 0,
    explanation: "反面扣除法：總選法為自全體 14 人選 3 人，共 $C^{14}_3 = \\frac{14 \\times 13 \\times 12}{3 \\times 2 \\times 1} = 364$ 種。全為男醫師的選法為 $C^8_3 = \\frac{8 \\times 7 \\times 6}{6} = 56$ 種。至少 1 女的選法為 $364 - 56 = 308$ 種。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "某手搖飲店提供紅茶、綠茶、烏龍茶、奶茶 4 種飲品。小明欲購買 5 杯飲料，每種飲料數量不拘，共有多少種不同的選購組合？",
    options: ["56 種", "70 種", "20 種", "120 種"],
    answer: 0,
    explanation: "4 種相異飲料選 5 杯之重複組合：相當於 $x_1 + x_2 + x_3 + x_4 = 5$ 的非負整數解。公式 $H^4_5 = C^{4+5-1}_5 = C^8_5 = C^8_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$ 種。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "一副標準 52 張撲克牌（不含鬼牌）中隨機抽取一張，抽中「黑桃（Spade）」或「紅心 A」的機率為何？",
    options: ["14/52（即 7/26）", "13/52", "1/4", "15/52"],
    answer: 0,
    explanation: "黑桃共有 13 張（包含黑桃 A）。紅心 A 為單獨一張牌，兩者為互斥事件。抽中機率為 $\\frac{13 + 1}{52} = \\frac{14}{52} = \\frac{7}{26}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "已知某家庭有兩名小孩（假設生男生女機率各為 1/2），若已知「其中至少有一名是男孩」，則「兩名小孩皆為男孩」的條件機率為何？",
    options: ["1/3", "1/2", "1/4", "2/3"],
    answer: 0,
    explanation: "兩名小孩的樣本空間為 (男,男)、(男,女)、(女,男)、(女,女) 四種等可能結果。「至少有一男」的條件事件包含 3 種可能：(男,男)、(男,女)、(女,男)。其中「兩者皆男」僅 1 種。故條件機率為 1/3。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚公正的六面骰子一次，骰子出現的點數即為獲得的獎金金額（如擲出 1 點得 1 元，擲出 6 點得 6 元）。請問投擲一次的獎金期望值為多少元？",
    options: ["3.5 元", "3.0 元", "4.0 元", "21 元"],
    answer: 0,
    explanation: "期望值 $E = 1(\\frac{1}{6}) + 2(\\frac{1}{6}) + 3(\\frac{1}{6}) + 4(\\frac{1}{6}) + 5(\\frac{1}{6}) + 6(\\frac{1}{6}) = \\frac{1+2+3+4+5+6}{6} = \\frac{21}{6} = 3.5$ 元。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "當一組統計數據呈現「右偏（正偏態，右側有少數極端高分拖長尾巴）」時，算術平均數、中位數與眾數三者的大小關係通常為？",
    options: ["平均數 > 中位數 > 眾數", "眾數 > 中位數 > 平均數", "平均數 = 中位數 = 眾數", "中位數 > 平均數 > 眾數"],
    answer: 0,
    explanation: "右偏分布中，少數極端大值將易受極值影響的算術平均數向右拉高，而眾數集中在波峰左側，中位數居中，故關係為：平均數 > 中位數 > 眾數。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某班級段考數學原始成績平均數為 $\\mu_X = 50$ 分，標準差為 $\\sigma_X = 8$ 分。老師決定將每位學生的成績依線性公式 $Y = 1.2 X + 10$ 進行調整。調整後的新成績平均數 $\\mu_Y$ 與新標準差 $\\sigma_Y$ 分別為多少？",
    options: ["平均數 70 分，標準差 9.6 分", "平均數 70 分，標準差 19.6 分", "平均數 60 分，標準差 9.6 分", "平均數 70 分，標準差 8 分"],
    answer: 0,
    explanation: "線性調整性質：平均數 $\\mu_Y = 1.2\\mu_X + 10 = 1.2(50) + 10 = 60 + 10 = 70$ 分；標準差僅受乘法放大影響，加常數不變：$\\sigma_Y = |1.2|\\sigma_X = 1.2 \\times 8 = 9.6$ 分。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "兩變數 $X$ 與 $Y$ 的散佈圖中，所有數據點呈現一個完美的圓形均勻散布，則其皮爾森相關係數 $r$ 最接近下列何值？",
    options: ["0（零相關）", "+1", "-1", "+0.5"],
    answer: 0,
    explanation: "數據點呈均勻圓形或對稱橢圓散佈時，無任何線性遞增或遞減關聯，協方差為 0，其線性相關係數 $r = 0$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "正四面體（四面皆為正三角形的正多面體）具有幾個頂點（V）、幾條稜線（E）與幾個面（F）？",
    options: ["頂點 4 個，稜線 6 條，面 4 個", "頂點 4 個，稜線 4 條，面 4 個", "頂點 6 個，稜線 8 條，面 4 個", "頂點 8 個，稜線 12 條，面 6 個"],
    answer: 0,
    explanation: "正四面體有 4 個頂點、6 條邊（稜）、4 個面。滿足歐拉多面體公式：$V - E + F = 4 - 6 + 4 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在空間直角坐標系中，點 $P(3, -4, 5)$ 到 $xy$ 平面的垂直距離為何？",
    options: ["5", "3", "4", "$\\sqrt{41}$"],
    answer: 0,
    explanation: "空間中任一點 $(x, y, z)$ 到 $xy$ 平面之垂足為 $(x, y, 0)$，距離即為 $|z| = |5| = 5$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "國際標準時區以英國格林威治天文台（經度 0°）為本初子午線（UTC+0）。已知臺北市位於東經 120°（UTC+8）。當格林威治時間為上午 08:00 時，臺北市的當地標準時間為幾點？",
    options: ["當日下午 16:00", "當日上午 10:00", "當日晚間 20:00", "當日凌晨 00:00"],
    answer: 0,
    explanation: "經度每 15° 相差 1 小時。東經在東側時間較早：$120^\\circ / 15^\\circ = 8$ 小時。上午 8:00 加上 8 小時為當日下午 16:00（4:00 PM）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "假設地球為圓球體，赤道周長約為 40,000 公里。在南緯 60° 緯線圈處，該緯線圓周長約為多少公里？",
    options: ["約 20,000 公里", "約 40,000 公里", "約 34,640 公里", "約 10,000 公里"],
    answer: 0,
    explanation: "緯度 $\\theta$ 處的緯線圈半徑為 $r = R \\cos\\theta$。因此緯線圈周長為赤道周長乘以 $\\cos\\theta$。在緯度 60° 處，$\\cos 60^\\circ = 0.5$。周長約為 $40,000 \\times 0.5 = 20,000$ 公里。",
    difficulty: "中等"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若二階方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$，且二階單位矩陣 $I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$。則矩陣乘積 $A \\times I$ 之結果為何？",
    options: ["$\\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 1 \\\\ 3 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "單位矩陣 $I$ 在矩陣乘法中扮演如乘法中的數字 1 的角色，任何方陣乘以同階單位矩陣恆等於其自身，即 $A I = I A = A$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "轉移矩陣 $P = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$。若初始狀態機率向量為 $X_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$，則經過 2 次轉移後的狀態向量 $X_2 = P^2 X_0$ 為何？",
    options: ["$\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$", "$\\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$", "$\\begin{pmatrix} 0.5 \\\\ 0.5 \\end{pmatrix}$", "$\\begin{pmatrix} 0 \\\\ 0 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$P^2 = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = I$。因此 $X_2 = I X_0 = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "太陽能聚熱發電廠利用拋物面反光鏡將太陽入射之平行光線聚焦於一點以加熱管路中的液體。這個集熱管路在幾何構造上應該精確放置於拋物面鏡的何處？",
    options: ["焦點處（Focus）", "頂點處（Vertex）", "準線上", "對稱軸上的任意點"],
    answer: 0,
    explanation: "拋物線光學性質：平行於拋物線對稱軸的入射光線，經拋物面反射後必定全部匯聚於焦點（Focus），故集熱裝置必須放置於焦點以獲得最高溫度。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "依據德國天文學家克卜勒第一定律（橢圓軌道定律），太陽系八大行星繞日公轉的軌道形狀，以及太陽所在的位置為何？",
    options: ["軌道為橢圓形，太陽位於橢圓的其中一個焦點上", "軌道為正圓形，太陽位於圓心", "軌道為拋物線，太陽位於焦點", "軌道為雙曲線的一支"],
    answer: 0,
    explanation: "克卜勒第一定律：所有行星繞太陽運動的軌道都是橢圓，太陽處在橢圓的一個焦點上，並非在橢圓的幾何中心。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算二階行列式 $\\begin{vmatrix} \\cos 15^\\circ & -\\sin 15^\\circ \\\\ \\sin 15^\\circ & \\cos 15^\\circ \\end{vmatrix}$ 之值為何？",
    options: ["1", "0", "1/2", "\\sqrt{3}/2"],
    answer: 0,
    explanation: "$ad - bc = (\\cos 15^\\circ)(\\cos 15^\\circ) - (-\\sin 15^\\circ)(\\sin 15^\\circ) = \\cos^2 15^\\circ + \\sin^2 15^\\circ = 1$。此亦為旋轉矩陣行列式恆等於 1 的幾何體現。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某文具店銷售原子筆，定價每支 20 元時每日可賣出 100 支。市場調查發現定價每調高 1 元，每日銷量就減少 2 支。設每支原子筆成本 10 元，若欲獲取每日最大利潤，定價應訂為多少元？",
    options: ["30 元", "25 元", "35 元", "40 元"],
    answer: 0,
    explanation: "設提價 $x$ 元，定價為 $20 + x$ 元，每支獲利 $(20 + x - 10) = 10 + x$ 元；銷量為 $100 - 2x$ 支。每日利潤 $P(x) = (10 + x)(100 - 2x) = -2x^2 + 80x + 1000 = -2(x - 20)^2 + 1800$。當 $x = 20$ 時利潤最大，定價為 $20 + 20 = 30$ 元。",
    difficulty: "進階"
  }
];

batch2.forEach((q, idx) => {
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

console.log(`New Math B count after batch 2: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
