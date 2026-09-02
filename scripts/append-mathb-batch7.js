const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 7: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch7 = [
  {
    category: "數與式",
    question: "已知連比關係：若 $a : b = 2 : 3$ 且 $b : c = 4 : 5$。將中間項 $b$ 通分化簡後，求連比 $a : b : c$ 為何？",
    options: ["8 : 12 : 15", "2 : 4 : 5", "8 : 15 : 12", "6 : 12 : 15"],
    answer: 0,
    explanation: "取 3 與 4 的最小公倍數 12：$a : b = 8 : 12$；$b : c = 12 : 15$。因此連比為 $a : b : c = 8 : 12 : 15$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "將 100 公克濃度為 10% 的食鹽水，與 200 公克濃度為 25% 的食鹽水充分混合在一起。混合後所得新食鹽水的重量百分濃度為多少？",
    options: ["20%", "15%", "17.5%", "22.5%"],
    answer: 0,
    explanation: "總溶質食鹽量為 $100 \\times 0.10 + 200 \\times 0.25 = 10 + 50 = 60$ 克。總溶液重量為 $100 + 200 = 300$ 克。新濃度為 $\\frac{60}{300} \\times 100\\% = 20\\%$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某手搖飲店每杯黑糖珍珠奶茶定價 $x$ 元，每日銷售量為 $120 - 2x$ 杯。若不計其他成本，該店欲獲得最大的單日銷售營業額，每杯珍奶的最佳定價應定為多少元？",
    options: ["30 元", "25 元", "35 元", "60 元"],
    answer: 0,
    explanation: "單日營業額函數 $R(x) = x(120 - 2x) = -2x^2 + 120x$。配方法：$R(x) = -2(x^2 - 60x + 900) + 1800 = -2(x - 30)^2 + 1800$。當 $x = 30$ 元時，營業額有最大值 1,800 元。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在平面直角坐標系中，若一條直線 $L: y = mx + k$ 的圖形「僅通過第二、三、四象限，完全不經過第一象限」。則其斜率 $m$ 與 $y$ 軸截距 $k$ 的正負符號分別為？",
    options: ["$m < 0$ 且 $k < 0$", "$m > 0$ 且 $k > 0$", "$m < 0$ 且 $k > 0$", "$m > 0$ 且 $k < 0$"],
    answer: 0,
    explanation: "直線通過二、三、四象限：圖形由左上向右下傾斜，故斜率 $m < 0$；與 $y$ 軸交於負半軸（原點下方），故 $y$ 截距 $k < 0$。此時當 $x>0$ 時 $y$ 恆負，絕不可能進入第一象限。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "溶液的酸鹼值定義為 $\\text{pH} = -\\log_{10}[\\text{H}^+]$。若某酸性溶液經濃縮後，其氫離子濃度 $[\\text{H}^+]$ 提高為原來的 1,000 倍，則該溶液的 pH 值將會發生何種數值變化？",
    options: ["pH 值「減少 3」", "pH 值增加 3", "pH 值減少 1000", "pH 值除以 3"],
    answer: 0,
    explanation: "$\\text{pH}' = -\\log_{10}(1000 [\\text{H}^+]) = -(\\log_{10} 1000 + \\log_{10}[\\text{H}^+]) = -3 - \\log_{10}[\\text{H}^+] = \\text{pH} - 3$。氫離子濃度增大 $10^3$ 倍，pH 值恰好下降 3 個單位。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "放射性碳十四（C-14）的半衰期約為 5,730 年。考古學家在一具出土古代獨木舟中檢測其殘留的碳十四放射活性，發現其活性恰為現代活木材的 $\\frac{1}{4}$。該獨木舟距今約有多少年的歷史？",
    options: ["11,460 年（經歷了 2 個半衰期，即 $2 \\times 5730$）", "5,730 年", "22,920 年", "2,865 年"],
    answer: 0,
    explanation: "殘留比例 $\\frac{1}{4} = (1/2)^2$，表示該木材經歷了 2 次半衰期。歷史年齡為 $2 \\times 5,730 = 11,460$ 年。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "土木工程在標示公路或鐵路的坡度時，常使用「坡度百分比（Grade %）」，其定義為「每前進 100 公尺水平距離所上升或下降的垂直高度」。若某山區公路路標標示坡度為 $100\\%$（即上升 100 公尺需前進 100 公尺水平距離），則該路段與水平面的夾角坡度角度為多少度？",
    options: ["45°（因為 $\\tan 45^\\circ = \\frac{100}{100} = 1$）", "90°", "30°", "60°"],
    answer: 0,
    explanation: "坡度定義為直線正切值：$\\tan\\theta = \\frac{\\text{垂直升降}}{\\text{水平距離}} = \\frac{100}{100} = 1$。因此坡度角為 $\\theta = 45^\\circ$（而非 100% 等於 90 度）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在 $\\Delta ABC$ 中，已知兩鄰邊長度分別為 $a = 6, b = 8$，且兩邊的夾角為 $\\angle C = 30^\\circ$。由三角形正弦面積公式計算，該 $\\Delta ABC$ 的面積為何？",
    options: ["12", "24", "$12\\sqrt{3}$", "48"],
    answer: 0,
    explanation: "面積公式：$\\text{Area} = \\frac{1}{2} a b \\sin C = \\frac{1}{2} \\times 6 \\times 8 \\times \\sin 30^\\circ = 24 \\times \\frac{1}{2} = 12$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "某班級欲從 8 位候選幹部中，不分職位選出 3 位同學擔任畢業旅行籌備委員。共有多少種不同的選法？",
    options: ["56 種", "336 種", "24 種", "120 種"],
    answer: 0,
    explanation: "不分順序職位的選代表問題為組合數：$C^8_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "書架上有 4 本不同的國文書與 3 本不同的數學書。若要求「3 本數學書在排列時互不相鄰」，採用「插空法」，共有多少種不同的排法？",
    options: ["1,440 種（即 $4! \\times P^5_3 = 24 \\times 60$）", "720 種", "5,040 種", "120 種"],
    answer: 0,
    explanation: "先排 4 本國文書有 $4! = 24$ 種，國文書兩端及中間形成 5 個間隙。將 3 本數學書插入這 5 個空隙中，方法數為 $P^5_3 = 5 \\times 4 \\times 3 = 60$。總排法為 $24 \\times 60 = 1,440$ 種。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "連續投擲一枚均勻的公正硬幣 4 次，至少出現一次「正面」的機率為何？",
    options: ["15/16", "1/16", "1/2", "3/4"],
    answer: 0,
    explanation: "反面思考（扣除餘事件法）：4 次投擲總可能數為 $2^4 = 16$。「完全沒有正面（全為反面）」的可能僅有 1 種。因此「至少一次正面」的機率為 $1 - \\frac{1}{16} = \\frac{15}{16}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "公益彩券發行一款每張售價 100 元的刮刮樂。統計顯示：每張彩券有 50% 機率獲得 0 元，40% 機率刮中 100 元，10% 機率刮中 500 元。買一張此款刮刮樂的「獎金期望值」與「期望報酬」分別為？",
    options: ["獎金期望值為 90 元（期望淨損失 10 元，返還率 90%）", "獎金期望值為 100 元", "獎金期望值為 120 元", "獎金期望值為 50 元"],
    answer: 0,
    explanation: "獎金期望值 $E = 0 \\times 0.50 + 100 \\times 0.40 + 500 \\times 0.10 = 0 + 40 + 50 = 90$ 元。扣除購買成本 100 元，平均每張期望虧損 10 元。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "學校評定學期總成績採「加權平均數」：平時作業佔權重 20%、期中考佔 30%、期末考佔 50%。小明的各項得分為：平時 90 分、期中考 80 分、期末考 70 分。小明的學期加權總成績為多少分？",
    options: ["77 分", "80 分", "75 分", "82 分"],
    answer: 0,
    explanation: "加權平均公式：$\\bar{X}_w = 90(0.20) + 80(0.30) + 70(0.50) = 18 + 24 + 35 = 77$ 分。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學散佈圖中，最小平方法求得的「最佳最適迴歸直線 $\\hat{y} = b x + a$」，必定會通過雙變數數據的哪一個特殊幾何點？",
    options: ["兩變數的「算術平均數中心點 $(\\bar{x}, \\bar{y})$」", "坐標原點 $(0, 0)$", "數據點的中位數點", "最大值數據點"],
    answer: 0,
    explanation: "最小平方法迴歸線性質：迴歸直線方程式必可寫為 $\\hat{y} - \\bar{y} = b(x - \\bar{x})$，因此迴歸直線恆過質心 $(\\bar{x}, \\bar{y})$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "地球自轉一周為 360 度，耗時 24 小時。國際時區劃分以格林威治本初子午線（0° 經線）為基準。依據經度與時間換算關係，全球經度每相差多少度，地方時恰好相差 1 小時？",
    options: ["經度每差 15 度（$360^\\circ / 24 = 15^\\circ$）相差 1 小時", "經度每差 10 度", "經度每差 30 度", "經度每差 1 度"],
    answer: 0,
    explanation: "地球由西向東自轉，24 小時旋轉 360°，每小時自轉角速度為 $360^\\circ / 24 = 15^\\circ$。東邊時間早於西邊，每隔經度 15° 劃分為一個標準時區。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，點 $A(1, 3, 5)$ 與點 $B(5, 7, 9)$。線段 $AB$ 的「中點坐標」為？",
    options: ["(3, 5, 7)", "(6, 10, 14)", "(2, 2, 2)", "(4, 5, 6)"],
    answer: 0,
    explanation: "中點坐標為各分量算術平均數：$\\left(\\frac{1+5}{2}, \\frac{3+7}{2}, \\frac{5+9}{2}\\right) = (3, 5, 7)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在馬可夫鏈（Markov Chain）模型中，若一個方陣為合法的「轉移矩陣（行隨機矩陣）」，則其矩陣內部各元素必須皆大於等於 0，且必須滿足下列哪一項核心代數條件？",
    options: ["每一個「行向量（Column）」內部所有元素相加之總和恆等於 1", "所有元素總和等於 1", "對角線元素相加等於 1", "每一個列向量相加等於 0"],
    answer: 0,
    explanation: "行隨機轉移矩陣定義：狀態轉移由現態（各行）轉移至各次態，由於所有可能次態機率之和必為 1，因此轉移矩陣的「每一行（Column）元素之和」恆嚴格等於 1。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 3 & 4 \\end{pmatrix}$。計算該方陣的行列式值 $\\det(A)$ 為何？",
    options: ["5", "8", "11", "2"],
    answer: 0,
    explanation: "二階行列式公式：$\\det(A) = ad - bc = 2(4) - 1(3) = 8 - 3 = 5$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "GPS 衛星導航接收器或聲納測距系統，利用接收到兩個固定發射台訊號的「抵達時間差（距離差恆定）」，在平面上所繪製出的定位幾何軌跡曲線屬於？",
    options: ["雙曲線（到兩固定焦點距離之差為定值的點軌跡）", "拋物線", "橢圓", "阿基米德螺旋線"],
    answer: 0,
    explanation: "時間差乘光速即為距離差。到兩定點（焦點）距離差恆定為定值的幾何軌跡正是雙曲線的一支，雙曲線定位系統（LORAN）即基於此原理確立航海坐標。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "連續兩正整數之平方差 $(n + 1)^2 - n^2$ 展開化簡之結果為何？",
    options: ["$2n + 1$（恆為奇數）", "$2n$", "1", "$n^2 + 1$"],
    answer: 0,
    explanation: "$(n+1)^2 - n^2 = (n^2 + 2n + 1) - n^2 = 2n + 1$。此結果恆為兩相鄰數之和，必為奇數（如 $5^2 - 4^2 = 25 - 16 = 9 = 4+5$）。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某城市計程車起跳價為 70 元（可乘 1.25 公里），之後每續行 0.25 公里加收 5 元。若某乘客乘車行駛了 3.25 公里（續行了 2.0 公里，即 8 次加價），該乘客應支付的車資為多少元？",
    options: ["110 元", "100 元", "120 元", "95 元"],
    answer: 0,
    explanation: "車資計算：$70 + 8 \\times 5 = 70 + 40 = 110$ 元。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，$\\angle C = 90^\\circ$，斜邊 $c = 10$，銳角 $\\angle A = 30^\\circ$。求對邊 $a$ 的長度為何？",
    options: ["5", "$5\\sqrt{3}$", "10", "$10/\\sqrt{3}$"],
    answer: 0,
    explanation: "$a = c \\sin A = 10 \\times \\sin 30^\\circ = 10 \\times \\frac{1}{2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 4 顆完全相同的紅球任意放入 3 個編號不同的箱子中，允許有箱子為空。共有多少種不同的分配方法？",
    options: ["15 種（重複組合 $H^3_4 = C^{3+4-1}_4 = C^6_4 = 15$）", "64 種", "12 種", "81 種"],
    answer: 0,
    explanation: "相同物放入不同箱問題為重複組合：$H^n_k = H^3_4 = C^{3+4-1}_4 = C^6_4 = \\frac{6 \\times 5}{2 \\times 1} = 15$ 種。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一顆公正六面骰子，出現「偶數點（2, 4, 6）」的機率為何？",
    options: ["1/2", "1/3", "1/6", "2/3"],
    answer: 0,
    explanation: "偶數點有 2, 4, 6 共 3 種情況。機率為 $\\frac{3}{6} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計分佈中，若一組數據出現頻率最高的數值恰有兩個截然不同的波峰，這種統計分布形態在統計學上稱為？",
    options: ["雙峰分佈（Bimodal Distribution）", "常態分佈", "均勻分佈", "偏態分佈"],
    answer: 0,
    explanation: "若直方圖呈現兩個明顯獨立的高峰眾數，稱為雙峰分佈，常代表樣本內部混合了兩組不同母體特徵（如男女性別身高混合數據）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間多面體滿足尤拉公式（Euler's Polyhedron Formula）：頂點數 $V$ - 稜邊數 $E$ + 面數 $F$ 恆等於？",
    options: ["2（即 $V - E + F = 2$）", "0", "1", "4"],
    answer: 0,
    explanation: "對任何簡單凸多面體（如立方體 $8 - 12 + 6 = 2$；四面體 $4 - 6 + 4 = 2$），尤拉示性數恆為 2。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若方陣 $A$ 為二階方陣，且其行列式 $|A| = 3$。則方陣乘純量 $2A$ 的行列式 $|2A|$ 之值為何？",
    options: ["12（因 $|kA| = k^2 |A| = 2^2 \\times 3 = 12$）", "6", "3", "24"],
    answer: 0,
    explanation: "矩陣純量乘法行列式性質：對於 $n$ 階方陣，$|kA| = k^n |A|$。此題為二階方陣（$n=2$），故 $|2A| = 2^2 |A| = 4 \\times 3 = 12$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "許多體育館與天文台建築採用「橢圓形天花板（迴音壁 Whispering Gallery）」。若一個人在橢圓的一個焦點處輕聲細語，其聲音經天花板反射後，必會清晰匯聚在何處被清楚聽見？",
    options: ["橢圓的「另一個焦點」處", "橢圓的正中心", "全體天花板邊緣", "隨機消散無聲"],
    answer: 0,
    explanation: "橢圓光學/聲學反射定律：自一個焦點發出的任何聲波或光線，經橢圓內壁反射後，反射線必定全數聚焦於另一個焦點處。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算 $|-7| - |3|$ 之值為何？",
    options: ["4", "10", "-4", "-10"],
    answer: 0,
    explanation: "$|-7| - |3| = 7 - 3 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = (x - 2)^2 + 3$ 的圖形頂點坐標為何？",
    options: ["(2, 3)", "(-2, 3)", "(2, -3)", "(-2, -3)"],
    answer: 0,
    explanation: "頂點式 $y = a(x - h)^2 + k$，頂點坐標即為 $(h, k) = (2, 3)$。",
    difficulty: "基礎"
  }
];

batch7.forEach((q, idx) => {
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

console.log(`New Math B count after batch 7: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
