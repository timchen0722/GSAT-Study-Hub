const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 16: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch16 = [
  {
    category: "數與式",
    question: "利用平方差公式將分母有理化：化簡 $\\frac{1}{\\sqrt{3} - \\sqrt{2}}$ 之最簡結果為何？",
    options: ["$\\sqrt{3} + \\sqrt{2}$（分子分母同乘 $\\sqrt{3} + \\sqrt{2}$，分母 $(\\sqrt{3})^2 - (\\sqrt{2})^2 = 3 - 2 = 1$）", "$\\sqrt{3} - \\sqrt{2}$", "$\\frac{\\sqrt{3} + \\sqrt{2}}{5}$", "1"],
    answer: 0,
    explanation: "分母有理化：$\\frac{1}{\\sqrt{3} - \\sqrt{2}} = \\frac{\\sqrt{3} + \\sqrt{2}}{(\\sqrt{3} - \\sqrt{2})(\\sqrt{3} + \\sqrt{2})} = \\frac{\\sqrt{3} + \\sqrt{2}}{3 - 2} = \\sqrt{3} + \\sqrt{2}$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "在金融理財中，「單利（Simple Interest）」是指僅以最初本金計算利息，本金產生的利息不併入下一期重複計算。某人將本金 10 萬元存入銀行，年單利率為 $3\\%$，存放 3 年後的「本利和總額」為多少？",
    options: ["10.9 萬元（利息 $I = 10 \\times 3\\% \\times 3 = 0.9$ 萬元，本利和為 $10 + 0.9 = 10.9$ 萬元）", "10.3 萬元", "11.0 萬元", "13.0 萬元"],
    answer: 0,
    explanation: "單利公式 $A = P(1 + r t) = 10(1 + 0.03 \\times 3) = 10 \\times 1.09 = 10.9$ 萬元。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某城市計程車日間收費標準為一次線性函數模型：起跳基本價 85 元（含行駛前 1.25 公里），之後每續程行駛 0.2 公里加收 5 元（即每公里收費 25 元）。若乘客搭乘計程車行駛了 5.25 公里（超出起跳里程 4 公里），該乘客應支付的車費為多少元？",
    options: ["185 元（基本起跳 85 元 + 續程費 $\\frac{4}{0.2} \\times 5 = 20 \\times 5 = 100$ 元，總計 $85 + 100 = 185$ 元）", "170 元", "200 元", "160 元"],
    answer: 0,
    explanation: "分段計程車一次函數：超出起跳里程 $5.25 - 1.25 = 4.0$ 公里，續程跳表次數為 $4.0 / 0.2 = 20$ 次，跳表費用為 $20 \\times 5 = 100$ 元，總車資為 $85 + 100 = 185$ 元。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $f(x) = ax^2 + bx + c$（$a > 0$）的圖形為開口向上的拋物線。若該二次多項式的判別式滿足「$D = b^2 - 4ac < 0$」，則該函數在幾何與代數上的特徵為？",
    options: ["拋物線「完全浮在 $x$ 軸上方，與 $x$ 軸無任何交點」，且對任意實數 $x$ 恆有 $f(x) > 0$（恆正）", "拋物線與 $x$ 軸相交於相異兩點", "函數最小值小於 0", "拋物線頂點落在 $x$ 軸上"],
    answer: 0,
    explanation: "二次恆正定理：$a > 0$（開口向上）且判別式 $D < 0$（無實根），拋物線全體位於 $x$ 軸上方，函數值恆為正數。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "考古學家利用碳-14 放射性同位素定年法測定古代生物遺骸年代。已知碳-14 的「半衰期（Half-life）」約為 5,730 年。若從某個古墓中挖掘出的木炭遺骸中，測得其碳-14 的殘留量恰好只剩下現代活植物組織中的「1/4（即經過了 2 個半衰期）」。該木炭遺骸距今大約有多少年？",
    options: ["約 11,460 年（$5730 \\times 2 = 11,460\\text{ 年}$）", "約 5,730 年", "約 22,920 年", "約 2,865 年"],
    answer: 0,
    explanation: "半衰期指數衰減：殘留率 $(1/2)^n = 1/4 = (1/2)^2 \\implies n = 2$ 個半衰期。年代為 $2 \\times 5730 = 11,460$ 年。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "聲學中聲音的「分貝等級（dB）」定義為對數公式：$\\text{dB} = 10 \\log_{10}(I / I_0)$（其中 $I$ 為聲音物理強度，$I_0$ 為人耳聽覺極限基準強度）。依此公式計算，聲音分貝每增加「20 分貝（20 dB）」，其物理聲音強度 $I$ 擴大了多少倍？",
    options: ["100 倍（$\\Delta \\text{dB} = 20 = 10 \\log_{10}(I_2/I_1) \\implies \\log_{10}(I_2/I_1) = 2 \\implies I_2/I_1 = 10^2 = 100$ 倍）", "20 倍", "2 倍", "1,000 倍"],
    answer: 0,
    explanation: "分貝對數尺度：每增加 10 dB 強度擴大 10 倍；增加 20 dB 強度擴大 $10^2 = 100$ 倍；增加 30 dB 強度擴大 1000 倍。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "已知 $\\Delta ABC$ 的三邊長分別為 $a = 5, b = 6, c = 7$。求其半周長 $s = \\frac{a+b+c}{2} = 9$。利用海龍公式（Heron's Formula）$\\text{Area} = \\sqrt{s(s-a)(s-b)(s-c)}$，該三角形的「幾何面積」為？",
    options: ["$6\\sqrt{6}$（$\\sqrt{9 \\times (9-5) \\times (9-6) \\times (9-7)} = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = 6\\sqrt{6}$）", "$12\\sqrt{6}$", "18", "$6\\sqrt{3}$"],
    answer: 0,
    explanation: "海龍公式計算：$\\text{Area} = \\sqrt{9 \\times 4 \\times 3 \\times 2} = \\sqrt{216} = \\sqrt{36 \\times 6} = 6\\sqrt{6}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在特殊直角三角形中，一個三個內角分別為 30°、60°、90° 的直角三角形，其「對應三邊長度的標準比例（30°對邊 : 60°對邊 : 90°斜邊）」為？",
    options: ["$1 : \\sqrt{3} : 2$", "$1 : 1 : \\sqrt{2}$（此為 45°-45°-90° 等腰直角三角形）", "$3 : 4 : 5$", "$1 : 2 : 3$"],
    answer: 0,
    explanation: "經典特殊直角三角形邊長比：30°-60°-90° 比例為 $1 : \\sqrt{3} : 2$（$\\sin 30^\\circ = 1/2, \\cos 30^\\circ = \\sqrt{3}/2$）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "用數字 1, 2, 3, 4, 5 組成沒有重複數字的三位數。其中個位數字為「偶數（即個位數為 2 或 4）」的三位偶數共有多少個？",
    options: ["24 個（個位數有 2 種選法，百位與十位從剩下 4 個數字中選 2 個排列：$P^4_2 \\times 2 = (4 \\times 3) \\times 2 = 12 \\times 2 = 24$）", "12 個", "60 個", "48 個"],
    answer: 0,
    explanation: "條件限制排列：(1) 個位數決定奇偶，選 2 或 4 有 2 種選擇；(2) 百位與十位從其餘 4 數字中選取排列有 $4 \\times 3 = 12$ 種。乘法原理得 $12 \\times 2 = 24$ 個偶數。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "求代數方程式 $x + y = 8$ 的「非負整數解（$x, y \\ge 0$）」共有多少組？",
    options: ["9 組（$x$ 可取 0, 1, 2, ..., 8 共 9 種取值，$y$ 自動確定，或重複組合 $H^2_8 = C^{2+8-1}_8 = C^9_8 = 9$）", "8 組", "10 組", "7 組"],
    answer: 0,
    explanation: "$x$ 從 0 到 8 共有 9 種可能，每確定一個 $x$ 則 $y = 8 - x$ 唯一確定，共有 9 組非負整數解。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩顆公正的六面骰子，兩顆骰子出現的點數「皆為偶數」的機率為何？",
    options: ["1/4（每顆骰子出現偶數機率為 1/2，獨立相乘得 $(1/2) \\times (1/2) = 1/4$）", "1/2", "1/8", "3/4"],
    answer: 0,
    explanation: "第一顆為偶數（2,4,6）機率 3/6 = 1/2，第二顆為偶數機率 1/2，獨立相乘得 $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "設事件 $A$ 與事件 $B$ 中，已知 $P(B) = 0.5$ 且兩事件交集機率 $P(A \\cap B) = 0.2$。利用條件機率公式計算，在事件 $B$ 已經發生的條件下，事件 $A$ 發生的「條件機率 $P(A|B)$」為？",
    options: ["0.4（公式：$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4$）", "0.1", "0.7", "0.25"],
    answer: 0,
    explanation: "條件機率基本定義：$P(A|B) = \\frac{P(A \\cap B)}{P(B)} = \\frac{0.2}{0.5} = 0.4$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若七位同學的英文隨堂測驗成績分別為 65, 70, 75, 80, 85, 90, 95 分（已由小到大排序）。這組成績數據的「中位數（Median，第 50 百分位數）」為多少分？",
    options: ["80 分（奇數項最中間第 4 項：80 分）", "75 分", "85 分", "80.5 分"],
    answer: 0,
    explanation: "中位數判定：樣本數 $N = 7$ 為奇數，中位數為第 $\\frac{7+1}{2} = 4$ 項，即 80 分。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在雙變數散佈圖中，若皮爾森相關係數為負數（$r < 0$，如 $r = -0.75$）。這在幾何上代表兩變數的最適迴歸直線呈現何種傾斜走勢？",
    options: ["「直線向右下方傾斜（斜率為負），代表自變數 $x$ 增加時，應變數 $y$ 呈現整體減少的趨勢」", "直線向右上方傾斜（斜率為正）", "直線呈現完全水平", "直線呈現完全鉛直"],
    answer: 0,
    explanation: "迴歸斜率與相關係數同號：$b = r \\frac{\\sigma_y}{\\sigma_x}$。當 $r < 0$ 時斜率 $b < 0$，直線向右下方傾斜，代表兩變數呈負相關趨勢。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在地球球面上，太陽直射點在一年公轉當中所能到達的最北界限與最南界限緯線圈，分別被命名為「北回歸線」與「南回歸線」。這兩條回歸線所對應的地理緯度分別為？",
    options: ["北回歸線為「北緯 23.5°（23.5°N）」，南回歸線為「南緯 23.5°（23.5°S）」", "北回歸線為 66.5°N，南回歸線為 66.5°S（此為南北極圈）", "北回歸線為 0°，南回歸線為 180°", "北回歸線為 45°N"],
    answer: 0,
    explanation: "黃赤交角 23.5° 決定回歸線：夏至太陽直射北緯 23.5°（北回歸線，穿過臺灣嘉義花蓮）；冬至直射南緯 23.5°（南回歸線）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在三維地球球面上，所有的「經線（子午線）」在幾何學上都具有的共同特徵為？",
    options: ["所有經線皆為「連接北極點與南極點的半大圓弧線，且所有經線的長度皆完全相等」", "所有經線皆互相平行永遠不相交", "經線長度隨著緯度升高而變短", "經線是平行於赤道的圓圈"],
    answer: 0,
    explanation: "經緯線幾何特徵：經線等長且共點於南北兩極（半大圓）；緯線互相平行且緯線圈長度隨緯度升高而縮小（赤道最長，極點縮為一點）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若二階方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，計算純量乘法 $2A$ 之結果為何？",
    options: ["$\\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 6 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$"],
    answer: 0,
    explanation: "矩陣數乘即每個元素皆乘以 2：$\\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在馬可夫鏈系統中，若二階轉移矩陣 $P$ 的所有元素皆為正數（正規轉移矩陣）。當轉移次數 $n$ 趨近於無窮大時，系統狀態機率向量 $X_n = P^n X_0$ 最終所達到的「長期穩定狀態（Stationary Distribution）」特徵為？",
    options: ["長期穩定狀態機率「唯一存在，且與最初的初始狀態機率分佈 $X_0$ 完全無關」", "長期狀態會無規律劇烈震盪永不穩定", "長期狀態完全由初始狀態 $X_0$ 決定", "所有狀態機率最終全數變為 0"],
    answer: 0,
    explanation: "馬可夫鏈平穩收斂定理：正規轉移矩陣具有唯一穩定狀態向量 $X$，滿足 $PX = X$，無論系統初始從何種狀態出發，經多次轉移後必收斂至同一個穩態分佈。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "遠距離無線電導航系統（如第二次世界大戰中發明的羅蘭導航 LORAN）利用飛機或輪船接收兩組固定地面無線電發射臺信號的「時間差」。由於時間差乘以光速等於「到兩定發射臺的距離差恆為定值」，導航儀以此在海圖上所繪製出的定位曲線幾何形狀為？",
    options: ["「雙曲線（Hyperbola，到兩焦點距離差為常數的動點軌跡）」", "拋物線", "橢圓", "正圓"],
    answer: 0,
    explanation: "雙曲線導航定位原理：到兩定點（主臺與副臺）距離差為常數的軌跡為雙曲線；利用兩組不同發射臺生成的兩條雙曲線相交，交點即為船舶飛機的精確地理坐標。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "在指數冪運算中，對於任意非零實數 $a \\ne 0$，其 0 次冪「$a^0$」的數值定義為？",
    options: ["1（數學約定 $a^0 = \\frac{a^n}{a^n} = 1$）", "0", "$a$", "未定義"],
    answer: 0,
    explanation: "由指數除法法則：$a^0 = a^{n-n} = \\frac{a^n}{a^n} = 1$（$a \\ne 0$）。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "一次函數 $y = -3x + 4$ 的圖形在直角坐標系中是一條向哪個方向傾斜的直線？",
    options: ["「向右下方傾斜（斜率 $m = -3 < 0$，函數為嚴格遞減）」", "向右上方傾斜", "水平直線", "鉛直直線"],
    answer: 0,
    explanation: "斜率為負代表直線向右下方傾斜，自變數 $x$ 增大時 $y$ 嚴格減小。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "直角 $\\Delta ABC$ 中，若 $\\angle C = 90^\\circ$，銳角 $\\angle A = 30^\\circ$，斜邊長度 $c = 10$。則 30° 角所對應的「對邊 $a$」長度為多少？",
    options: ["5（$a = c \\sin 30^\\circ = 10 \\times \\frac{1}{2} = 5$）", "$5\\sqrt{3}$", "10", "2.5"],
    answer: 0,
    explanation: "30° 所對直角邊為斜邊的一半：$a = 10 \\times \\sin 30^\circ = 5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 10 個人中選出 2 個人組成代表隊，共有多少種不同的選拔組合數？",
    options: ["45 種（$C^{10}_2 = \\frac{10 \\times 9}{2 \\times 1} = 45$）", "90 種", "20 種", "100 種"],
    answer: 0,
    explanation: "$C^{10}_2 = \\frac{10 \\times 9}{2 \\times 1} = 45$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚公正的骰子，出現的點數「小於 3（即 1 點或 2 點）」的機率為何？",
    options: ["1/3（2/6 = 1/3）", "1/2", "1/6", "2/3"],
    answer: 0,
    explanation: "點數為 1 或 2，機率為 $\\frac{2}{6} = \\frac{1}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位學生的體育測驗成績全距（Range）為 20 分。若老師將全班每位同學的成績皆「加上 10 分」，則調整後全班新成績的「全距」為多少分？",
    options: ["20 分（數據全體加上常數，最大值與最小值同增 10 分，兩者差距全距保持不變）", "30 分", "10 分", "200 分"],
    answer: 0,
    explanation: "全距 $\\text{Range} = (\\text{Max} + 10) - (\\text{Min} + 10) = \\text{Max} - \\text{Min} = 20$ 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一個「正四面體」總共有多少個面？且每個面都是何種幾何形狀？",
    options: ["共有「4 個面」，每個面都是全等的「正三角形」", "共有 6 個面為正方形", "共有 4 個面為直角三角形", "共有 8 個面"],
    answer: 0,
    explanation: "正四面體幾何結構：由 4 個全等正三角形圍成的最簡單正多面體，具 4 個頂點、6 條邊、4 個面。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$，其「轉置矩陣 $A^T$」為？",
    options: ["$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$（行列互換）", "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$", "$\\begin{pmatrix} -1 & -3 \\\\ -2 & -4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$"],
    answer: 0,
    explanation: "轉置矩陣行列互換：第一列變第一行、第二列變第二行，得 $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "圓方程式為 $x^2 + (y - 3)^2 = 4$，該圓在坐標系中的「半徑 $r$」為多少？",
    options: ["2（$r^2 = 4 \\implies r = 2$）", "4", "3", "16"],
    answer: 0,
    explanation: "$r^2 = 4 \\implies r = 2$，圓心在 $(0, 3)$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算實數代數：$(-7) + (-8)$ 之結果為何？",
    options: ["-15", "15", "-1", "56"],
    answer: 0,
    explanation: "$(-7) + (-8) = -15$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = -x^2 + 4$ 的圖形開口方向為？",
    options: ["「向下開口」（二次項係數 $a = -1 < 0$）", "向上開口", "向左開口", "向右開口"],
    answer: 0,
    explanation: "二次項係數為負數，拋物線開口向下，頂點 $(0, 4)$ 為最大值點。",
    difficulty: "基礎"
  }
];

batch16.forEach((q, idx) => {
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

console.log(`New Math B count after batch 16: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
