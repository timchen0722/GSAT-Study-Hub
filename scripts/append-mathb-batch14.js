const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 14: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch14 = [
  {
    category: "數與式",
    question: "在實數數系理論中，關於有理數與無理數的四則運算封閉性質，下列敘述何者完全正確？",
    options: ["「一個非零有理數與一個無理數的乘積，必然仍為無理數」", "兩個無理數相加必然仍為無理數", "兩個無理數相乘必然仍為無理數", "有理數加無理數可能為有理數"],
    answer: 0,
    explanation: "反證法：設非零有理數 $r = a/b$，若 $r \\times x = q$（有理數），則 $x = q/r$ 必為有理數，矛盾。故非零有理數乘無理數必為無理數；而兩個無理數相加（如 $\\sqrt{2} + (-\\sqrt{2}) = 0$）或相乘（如 $\\sqrt{2} \\times \\sqrt{2} = 2$）皆可能為有理數。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "在實數數線上，點 $A$ 坐標為 2，點 $B$ 坐標為 12。若點 $P$ 落在線段 $\\overline{AB}$ 上，且滿足線段長度比 $\\overline{AP} : \\overline{PB} = 2 : 3$。利用一維分點公式計算，點 $P$ 的坐標為？",
    options: ["6（公式：$P = \\frac{3 \\times 2 + 2 \\times 12}{2 + 3} = \\frac{6 + 24}{5} = \\frac{30}{5} = 6$）", "7", "5", "8"],
    answer: 0,
    explanation: "分點公式交叉相乘：$P = \\frac{n x_1 + m x_2}{m + n} = \\frac{3(2) + 2(12)}{2 + 3} = \\frac{30}{5} = 6$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在金融投資理財中，估算資產在固定複合年化增長率 $r\\%$ 下「翻倍所需年數」的著名經驗法則稱為「72 法則（Rule of 72）」。若某檔基金的年化複合報酬率為 $6\\%$，依 72 法則估算，該筆投資本金翻倍大約需要多少年？",
    options: ["約 12 年（公式：$T \\approx \\frac{72}{r} = \\frac{72}{6} = 12\\text{ 年}$）", "約 6 年", "約 18 年", "約 72 年"],
    answer: 0,
    explanation: "72 法則基於對數近似：$\\ln 2 \\approx 0.693$，考慮每年複利修正取 72。翻倍年限 $T \\approx \\frac{72}{r} = \\frac{72}{6} = 12$ 年。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在平面直角坐標系中，鉛直直線方程式 $x = 5$ 的「直線斜率」在數學上的定義為？",
    options: ["「斜率未定義（斜率不存在）」", "斜率為 0", "斜率為 5", "斜率為 1"],
    answer: 0,
    explanation: "斜率公式 $m = \\frac{\\Delta y}{\\Delta x}$。鉛直線上所有點的橫坐標變化量 $\\Delta x = 0$，分母為 0 無意義，故鉛直線斜率不存在（水平線斜率則為 0）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "地震學中，芮氏地震規模（Richter magnitude scale）與地震所釋放的能量 $E$ 滿足對數關係式：$\\log_{10} E = 4.8 + 1.5 M$。依此公式計算，芮氏規模 7.0 級地震所釋放的能量，大約約為規模 5.0 級地震釋放能量的多少倍？",
    options: ["1,000 倍（規模差 2 級，$\\Delta \\log_{10} E = 1.5 \\times 2 = 3.0 \\implies 10^3 = 1000$ 倍）", "2 倍", "20 倍", "100 倍"],
    answer: 0,
    explanation: "$\\log_{10}(E_7 / E_5) = 1.5(7 - 5) = 1.5 \\times 2 = 3$。因此能量比值為 $10^3 = 1000$ 倍（每增加 1 級能量差約 31.6 倍，增加 2 級能量差 1000 倍）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算對數值：$\\log_{10} 100$ 之數值為何？",
    options: ["2（因 $10^2 = 100$）", "10", "1", "100"],
    answer: 0,
    explanation: "$100 = 10^2 \\implies \\log_{10}(10^2) = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，兩股長度分別為 $a = 3$ 與 $b = 4$，斜邊長度為 $c = 5$。由面積相等原理（$\\frac{1}{2} a b = \\frac{1}{2} c h$），求從直角頂點向斜邊所作的「高 $h$」之長度為何？",
    options: ["2.4（公式：$h = \\frac{a b}{c} = \\frac{3 \\times 4}{5} = \\frac{12}{5} = 2.4$）", "2.5", "3.0", "1.2"],
    answer: 0,
    explanation: "直角三角形面積二等表示法：$\\text{Area} = \\frac{3 \\times 4}{2} = \\frac{5 \\times h}{2} \\implies 12 = 5h \\implies h = \\frac{12}{5} = 2.4$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "平面幾何中，若一個四邊形 $ABCD$ 的四個頂點皆落在同一個圓周上（圓內接四邊形），則該四邊形任意一組「對角（如 $\\angle A$ 與 $\\angle C$）」之間必然滿足何種角度關係？",
    options: ["「兩對角互補（$\\angle A + \\angle C = 180^\\circ$）」", "兩對角必然相等", "兩對角之和為 90 度", "兩對角之和為 360 度"],
    answer: 0,
    explanation: "圓周角定理：對角所對應的兩段圓弧剛好拼接成整個圓周（360°），圓周角等於圓心角一半，故對角和恆為 $360^\\circ / 2 = 180^\\circ$（互補）。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由 5 位男生與 3 位女生排成一列。若要求「3 位女生彼此之間完全互不相鄰」，利用「插空法」，合法的排隊方法共有多少種？",
    options: ["14,400 種（男生先排 $5! = 120$ 種，產生 6 個空隙供 3 位女生插入 $P^6_3 = 120$ 種，總排法為 $120 \\times 120 = 14,400$）", "720 種", "40,320 種", "2,880 種"],
    answer: 0,
    explanation: "不相鄰插空法：(1) 先排 5 位男生有 $5! = 120$ 種；(2) 5 位男生兩側與中間共有 $5 + 1 = 6$ 個空隙；(3) 3 位女生選 3 個空隙排列有 $P^6_3 = 6 \\times 5 \\times 4 = 120$ 種。總排法 $120 \\times 120 = 14,400$ 種。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "求代數方程式 $x + y + z = 10$ 的「非負整數解（$x, y, z \\ge 0$）」共有多少組？",
    options: ["66 組（重複組合 $H^3_{10} = C^{3+10-1}_{10} = C^{12}_{10} = C^{12}_2 = 66$）", "55 組", "78 組", "120 組"],
    answer: 0,
    explanation: "$H^3_{10} = C^{12}_{10} = \\frac{12 \\times 11}{2} = 66$ 組。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩顆公正的六面骰子，兩顆骰子出現的「點數之和等於 7」的機率為何？",
    options: ["1/6（點數和為 7 的情況共有 6 種：(1,6),(2,5),(3,4),(4,3),(5,2),(6,1)，機率為 6/36 = 1/6）", "1/12", "7/36", "1/7"],
    answer: 0,
    explanation: "兩骰點數總可能數為 36。和為 7 之組合有 $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ 共 6 種，機率為 $\\frac{6}{36} = \\frac{1}{6}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚公正的硬幣連續 3 次，恰好出現「3 次皆為正面」的機率為何？",
    options: ["1/8（$(1/2)^3 = 1/8$）", "1/4", "1/2", "1/16"],
    answer: 0,
    explanation: "每次正面機率 1/2，獨立相乘得 $(1/2)^3 = 1/8$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計數據分析中，四分位距（$\\text{IQR} = Q_3 - Q_1$）相較於全距（$\\text{Range} = \\text{Max} - \\text{Min}$），最顯著的統計優點為？",
    options: ["四分位距「完全不受極端離群值（Outliers）的干擾與極端扭曲」，能客觀穩健地反映中段 50% 核心數據的集中與離散趨勢", "四分位距計算結果永遠為 0", "四分位距必須使用微積分才能計算", "四分位距會隨著所有數據平移而改變"],
    answer: 0,
    explanation: "全距只看最大最小兩極端點極易受異常離群值破壞（如億萬富翁進入班級全距暴增）；四分位距排除前後各 25% 數據，為高度穩健（Robust）之離散指標。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若兩變數 $x$ 與 $y$ 的皮爾森相關係數為 $r = 0.8$。若將變數 $x$ 的每筆數據皆乘以 2，變數 $y$ 的每筆數據皆加上 10（即線性變換 $x' = 2x, y' = y + 10$），則新變數 $x'$ 與 $y'$ 之間的「相關係數 $r'$」為多少？",
    options: ["依然為 0.8（相關係數具有線性不變性，乘以正數與加上常數皆不改變相關係數數值）", "1.6", "0.4", "0.88"],
    answer: 0,
    explanation: "相關係數性質：若 $x' = a x + b, y' = c y + d$，當 $a c > 0$ 時相關係數完全不變，$r' = r = 0.8$；當 $a c < 0$ 時變號 $r' = -r$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在三維地球球面上，地球的「北極點」與「南極點」所對應的地理緯度分別為？",
    options: ["北極點為「北緯 90°（90°N）」，南極點為「南緯 90°（90°S）」", "北極點為 0°，南極點為 180°", "北極點為東經 90°", "北極點為北緯 45°"],
    answer: 0,
    explanation: "赤道緯度為 0°，向北至北極點為 90°N，向南至南極點為 90°S，為球面緯度極限。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "長途跨洋國際航班（如臺北直飛舊金山或紐約）通常在飛行地圖上呈現一條向北凸起的弧線而非平面直線。這是因為在地球球面上，連接球面上任意兩點之間的「最短飛行路徑」在球面幾何學上必然是通過這兩點的？",
    options: ["「大圓航線（Great Circle Route，球心與兩點所構成的大圓劣弧）」", "緯線圈平行線", "經線直線", "螺旋線"],
    answer: 0,
    explanation: "球面最短距離為大圓劣弧：過球面上兩點與球心之大圓平面與球面相交的大圓弧為球面測地線，比沿相同緯線飛行大幅縮短飛行距離與航空油耗。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在矩陣代數運算中，對於任意同階二階方陣 $A, B, C$，下列哪一項矩陣分配律運算恆成立？",
    options: ["$A(B + C) = AB + AC$（矩陣乘法對加法滿足左分配律）", "$AB = BA$（矩陣乘法一般不滿足交換律）", "$(AB)^2 = A^2 B^2$", "$A + B = AB$"],
    answer: 0,
    explanation: "矩陣乘法性質：滿足結合律 $A(BC)=(AB)C$ 與分配律 $A(B+C)=AB+AC$，但一般情況下乘法不滿足交換律（即 $AB \\ne BA$）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "二階轉移矩陣 $P = \\begin{pmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{pmatrix}$。該馬可夫鏈系統在長期轉移達到穩定狀態時，其「穩定狀態機率向量 $X = \\begin{pmatrix} x \\\\ y \\end{pmatrix}$（滿足 $PX = X$ 且 $x + y = 1$）」之解為？",
    options: ["$x = 0.6, y = 0.4$（即 $\\begin{pmatrix} 0.6 \\\\ 0.4 \\end{pmatrix}$，方程 $0.8x + 0.3y = x \\implies 0.3y = 0.2x \\implies 2x = 3y$）", "$x = 0.5, y = 0.5$", "$x = 0.8, y = 0.2$", "$x = 0.7, y = 0.3$"],
    answer: 0,
    explanation: "由 $PX = X$ 展開第一式：$0.8x + 0.3y = x \\implies 0.3y = 0.2x \\implies 2x = 3y$。配合全機率 $x + y = 1$，解得 $x = \\frac{3}{5} = 0.6, y = \\frac{2}{5} = 0.4$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "大型核能發電廠與火力發電廠巨大的冷卻塔外型，通常設計為向上收窄、頂部再度張開的「單葉雙曲面（Hyperboloid of one sheet）」造型。這種雙曲面結構在建築工程上的最核心優點為？",
    options: ["外型幾何具備優良的「煙囪通風散熱熱對流拔風效果」，且為直紋曲面，能以直線鋼筋高抗風阻極大節省建築混凝土材料", "為了讓雨水全部匯聚在塔頂", "為了防止鳥類飛過", "純粹為了外觀美觀沒有任何工程功能"],
    answer: 0,
    explanation: "雙曲面冷卻塔工程奇蹟：下大上敞中間收腰產生文丘里效應加速冷卻空氣自然對流；雙曲面為雙重直紋曲面可用直線鋼筋網搭建，薄殼厚度僅十餘公分抗風抗震極強。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "若非零實數 $x$ 為負數（$x < 0$），則其倒數 $1/x$ 的正負符號必然為？",
    options: ["「負數（$1/x < 0$）」", "正數", "0", "無法判斷"],
    answer: 0,
    explanation: "正數的倒數為正數，負數的倒數必然仍為負數，兩者符號恆相同（乘積為正數 1）。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若一次函數 $y = 2x - 5$，當自變數 $x$ 每增加 1 個單位時，函數值 $y$ 的變化量為？",
    options: ["「增加 2 個單位」", "減少 2 個單位", "增加 5 個單位", "保持不變"],
    answer: 0,
    explanation: "斜率 $m = 2 = \\frac{\\Delta y}{\\Delta x}$。當 $\\Delta x = 1$ 時，$\\Delta y = 2 \\times 1 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，若 $\\angle C = 90^\\circ$，銳角 $\\angle A = 45^\\circ$。則銳角 $\\angle B$ 的度數為多少？",
    options: ["$45^\\circ$（等腰直角三角形：$180^\\circ - 90^\\circ - 45^\\circ = 45^\\circ$）", "$30^\\circ$", "$60^\\circ$", "$90^\\circ$"],
    answer: 0,
    explanation: "三角形內角和 180°：$\\angle B = 180^\circ - 90^\circ - 45^\circ = 45^\circ$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 8 個人中選出 2 個人組成雙打搭檔，共有多少種不同的選拔組合數？",
    options: ["28 種（$C^8_2 = \\frac{8 \\times 7}{2 \\times 1} = 28$）", "16 種", "56 種", "64 種"],
    answer: 0,
    explanation: "$C^8_2 = \\frac{8 \\times 7}{2 \\times 1} = 28$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "丟擲一顆公正的六面骰子，出現點數為「大於 4（即 5 點或 6 點）」的機率為何？",
    options: ["1/3（2/6 = 1/3）", "1/2", "2/3", "1/6"],
    answer: 0,
    explanation: "符合條件的點數為 5, 6 共 2 種，機率為 $\\frac{2}{6} = \\frac{1}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位學生的數學小考成績分別為 60, 70, 80, 90, 100 分。這組成績的「算術平均數」為多少分？",
    options: ["80 分（$\\frac{60+70+80+90+100}{5} = \\frac{400}{5} = 80$）", "75 分", "85 分", "90 分"],
    answer: 0,
    explanation: "五數等差對稱，平均數為中項 80 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "邊長為 $a = 2$ 的正方體，其「幾何體積 $V$」為多少？",
    options: ["8（$V = a^3 = 2^3 = 8$）", "4", "12", "24"],
    answer: 0,
    explanation: "正方體體積公式 $V = a^3 = 2^3 = 8$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$，在矩陣代數中稱為？",
    options: ["二階「單位方陣（Identity Matrix，記為 $I$）」", "二階零方陣", "奇異方陣", "轉移方陣"],
    answer: 0,
    explanation: "主對角線元素為 1、其餘為 0 的方陣稱為單位矩陣 $I$，其乘法性質滿足 $AI = IA = A$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "圓的標準方程式為 $x^2 + y^2 = 25$，該圓在平面直角坐標系中的「半徑 $r$」為多少？",
    options: ["5（$r = \\sqrt{25} = 5$）", "25", "10", "12.5"],
    answer: 0,
    explanation: "$r^2 = 25 \\implies r = 5$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算代數除法：$(-18) \\div (-3)$ 之結果為何？",
    options: ["6（同號相除得正數）", "-6", "54", "-54"],
    answer: 0,
    explanation: "$(-18) \\div (-3) = +6$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = 2x^2$ 的圖形頂點坐標為？",
    options: ["(0, 0)（坐標原點）", "(0, 2)", "(2, 0)", "(1, 2)"],
    answer: 0,
    explanation: "標準二次式 $y = ax^2$ 的頂點必在坐標原點 $(0, 0)$。",
    difficulty: "基礎"
  }
];

batch14.forEach((q, idx) => {
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

console.log(`New Math B count after batch 14: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
