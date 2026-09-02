const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 11: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch11 = [
  {
    category: "數與式",
    question: "在統計學「盒狀圖（Box Plot）」中，用以判定單筆資料是否屬於「離群值（極端異常值 Outlier）」的標準統計籬笆判準為？",
    options: ["數值大於 $Q_3 + 1.5\\,\\text{IQR}$ 或小於 $Q_1 - 1.5\\,\\text{IQR}$（其中 $\\text{IQR} = Q_3 - Q_1$ 為四分位距）", "數值大於平均數加 1 個標準差", "數值大於最大值", "數值大於中位數的兩倍"],
    answer: 0,
    explanation: "盒狀圖離群值判定準則（約翰·圖基 Tukey 準則）：四分位距 $\\text{IQR} = Q_3 - Q_1$。凡落在 $[Q_1 - 1.5\\text{IQR}, Q_3 + 1.5\\text{IQR}]$ 範圍之外的數據皆被標記為離群值。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "某階梯電影院共有 20 排座位。第一排有 15 個座位，往後每一排皆比前一排多出 2 個座位（公差 $d = 2$ 的等差數列）。利用等差級數求和公式 $S_n = \\frac{n(2a_1 + (n-1)d)}{2}$ 計算，該電影院全場共有多少個座位？",
    options: ["680 個座位（$S_{20} = \\frac{20(2 \\times 15 + 19 \\times 2)}{2} = 10(30 + 38) = 10 \\times 68 = 680$）", "600 個座位", "720 個座位", "500 個座位"],
    answer: 0,
    explanation: "首項 $a_1 = 15$，公差 $d = 2$，項數 $n = 20$。末排 $a_{20} = 15 + 19(2) = 53$。總座位數 $S_{20} = \\frac{20(15 + 53)}{2} = 10 \\times 68 = 680$ 個。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在金融理財中，「單利（Simple Interest）」計息的本利和隨時間呈一次線性函數增長（$S = P(1 + r t)$）；而「複利（Compound Interest）」計息的本利和則隨時間呈指數函數增長（$S = P(1 + r)^t$）。愛因斯坦將複利譽為「世界第八大奇蹟」，其最根本的數學幾何原因為？",
    options: ["複利每期的利息皆會滾入下一期本金中繼續生息（利滾利），在長期時間尺度下，指數增長曲線的斜率會以爆炸性速率遠遠超越線性單利直線", "複利每年的利率都會自動翻倍", "複利可以讓本金在一個月內暴增一億倍", "單利計算結果永遠比複利更多"],
    answer: 0,
    explanation: "指數增長前期緩慢平緩，但隨時間延長曲線斜率急劇變陡，產生利滾利的幾何級數放大效應，長期回報遠非等差線性單利可比擬。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "正比例函數 $y = 3x$ 在直角坐標系中的圖形特徵為？",
    options: ["通過原點 $(0, 0)$ 且斜率為 3 的直線", "通過點 $(0, 3)$ 且平行 $x$ 軸的水平線", "開口向上的拋物線", "雙曲線"],
    answer: 0,
    explanation: "當 $x = 0$ 時 $y = 0$，故過原點，其斜率為 3，為典型正比例直線函數。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "在常溫（25°C）水溶液中，溶液的 pH 值與 pOH 值滿足恆等式：$\\text{pH} + \\text{pOH} = 14$。若測得某弱鹼清潔劑水溶液的 $\\text{pOH} = 3$，則該清潔劑水溶液的 pH 值為何？",
    options: ["11（呈鹼性，$\\text{pH} = 14 - 3 = 11$）", "3", "7", "14"],
    answer: 0,
    explanation: "常溫下純水離子積 $K_w = [\\text{H}^+][\\text{OH}^-] = 10^{-14}$，取負對數得 $\\text{pH} + \\text{pOH} = 14$。當 $\\text{pOH} = 3$ 時，$\\text{pH} = 14 - 3 = 11 > 7$，呈強鹼性。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算對數值：$\\log_3 81$ 之數值為何？",
    options: ["4（因 $3^4 = 81$）", "3", "27", "9"],
    answer: 0,
    explanation: "$81 = 3^4 \\implies \\log_3(3^4) = 4$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "三角形的幾何「垂心（Orthocenter）」在幾何學上的定義為？",
    options: ["三角形三條邊上的「高（垂線）」的交點", "三角形三條中線的交點（為重心）", "三角形三邊中垂線的交點（為外心）", "三角形三內角平分線的交點（為內心）"],
    answer: 0,
    explanation: "四心定義：垂心為三高的交點；重心為三中線交點；外心為三中垂線交點；內心為三角平分線交點。鈍角三角形的垂心落在三角形外部。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "三角形基本存在幾何定理指出：任意一個三角形的三邊長度 $a, b, c$ 必須滿足下列哪一項基本邊長不等式？",
    options: ["「任意兩邊之和大於第三邊」（$a + b > c, b + c > a, c + a > b$）", "任意兩邊之和大於第三邊的平方", "三邊長必為整數", "最大邊必等於其他兩邊之和"],
    answer: 0,
    explanation: "三角形兩點間直線段最短，故任意兩邊之長度和大於第三邊（兩邊之差小於第三邊）。若 $a + b \\le c$ 則無法閉合圍成三角形。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 8 位學生中選出 3 位組成代表隊，但學生中的甲與乙兩人因為個人恩怨「絕對不能同時被選中」。滿足此條件的選拔方法共有多少種？",
    options: ["50 種（反面扣除法：任選 3 人 $C^8_3 = 56$ 種，扣除甲乙同時入選 $C^6_1 = 6$ 種，得 $56 - 6 = 50$ 種）", "40 種", "35 種", "48 種"],
    answer: 0,
    explanation: "任意選 3 人的總組合數為 $C^8_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$。甲乙同時被選中的選法相當於甲乙必選再從剩餘 6 人中選 1 人，即 $C^6_1 = 6$。因此合法選法為 $56 - 6 = 50$ 種。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "求代數方程式 $x + y + z = 7$ 的「非負整數解（$x, y, z \\ge 0$）」共有多少組？",
    options: ["36 組（重複組合 $H^3_7 = C^{3+7-1}_7 = C^9_7 = C^9_2 = 36$）", "28 組", "45 組", "84 組"],
    answer: 0,
    explanation: "$H^3_7 = C^{3+7-1}_7 = C^9_7 = \\frac{9 \\times 8}{2} = 36$ 組。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "著名機率謎題「蒙提霍爾問題（三門問題 Monty Hall Problem）」：參賽者面前有三扇緊閉的門，其中一扇門後是一輛全新跑車，另外兩扇門後各是一隻山羊。參賽者選定一扇門後，知曉門後真相的主持人打開剩下兩扇門中的一扇露出山羊，並詢問參賽者是否要「換選剩下的另一扇門」。此時參賽者若選擇「換門」，其贏得跑車的機率為？",
    options: ["2/3（約 66.7%，換門獲勝機率是不換門 1/3 的兩倍）", "1/2（約 50%，常見直覺誤判）", "1/3", "1/6"],
    answer: 0,
    explanation: "初始選擇正確機率僅為 1/3（此時換門必輸）；初始選擇錯誤山羊的機率高達 2/3，主持人幫忙排除另一隻羊後，剩下的門後 100% 是跑車。因此只要換門，獲勝機率就是原本選錯的機率 2/3。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚各面分別標記 1 至 8 點的均勻正八面體骰子，出現的點數為「偶數（2, 4, 6, 8）」的機率為何？",
    options: ["1/2（4/8 = 1/2）", "1/4", "3/8", "5/8"],
    answer: 0,
    explanation: "八面骰中偶數有 2, 4, 6, 8 共 4 個，機率為 $\\frac{4}{8} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學中，為了比較「單位不同（如身高 cm 與體重 kg）」或「平均值差異極大」的兩組不同資料的相對離散波動程度，最適宜採用的無因次無單位統計指標是？",
    options: ["變異係數（Coefficient of Variation，$\\text{CV} = \\frac{\\sigma}{\\mu}$，標準差除以平均數）", "全距", "四分位距", "常態分佈峰度"],
    answer: 0,
    explanation: "標準差帶有原始測量單位且受均值大小影響（大象體重標準差必然遠大於老鼠）。變異係數 $\\text{CV} = \\frac{\\sigma}{\\mu}$ 消除了單位與量綱影響，能公平客觀比較不同母體的相對波動性。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某高中全體學生英語測驗成績呈常態分佈，平均數 $\\mu = 70$ 分，標準差 $\\sigma = 10$ 分。小華的英語成績為 85 分，若將其原始分數轉換為標準化分數（$Z$-score，計算公式 $Z = \\frac{X - \\mu}{\\sigma}$），則小華的 $Z$ 分數為多少？",
    options: ["+1.5（$Z = \\frac{85 - 70}{10} = \\frac{15}{10} = +1.5$）", "+1.0", "+2.0", "+0.85"],
    answer: 0,
    explanation: "$Z$ 分數定義為個別數據偏離平均數幾個標準差：$Z = \\frac{X - \\mu}{\\sigma} = \\frac{85 - 70}{10} = +1.5$。正號代表高於平均數 1.5 個標準差。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "底面半徑為 $r = 3$、高為 $h = 4$ 的直圓錐體，其幾何「體積」為多少？",
    options: ["$12\\pi$（圓錐體積公式 $V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (3^2)(4) = 12\\pi$）", "$36\\pi$", "$24\\pi$", "$6\\pi$"],
    answer: 0,
    explanation: "圓錐體積為等底等高圓柱體的三分之一：$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi (9)(4) = 12\\pi$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "全球經度劃分以通過英國倫敦格林威治天文台舊址的「本初子午線（經度 0°）」為世界基準（世界協調時間 UTC+0）。臺灣所採用的標準時間為「東經 120°」經線之地方平太陽時，臺灣標準時間相較於格林威治 UTC 基準？",
    options: ["「快 8 個小時（UTC+8）」", "慢 8 個小時", "快 12 個小時", "快 5 個小時"],
    answer: 0,
    explanation: "地球自西向東自轉，東邊時間早於西邊。經度差每 15° 相差 1 小時，東經 120° 領先經度 0°：$120 / 15 = 8$ 小時，故臺灣為 UTC+8。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在矩陣代數運算中，方陣 $A$ 與其轉置矩陣 $A^T$ 的行列式值必然滿足下列哪一項恆等關係？",
    options: ["$\\det(A^T) = \\det(A)$（方陣與其轉置矩陣之行列式值完全相等）", "$\\det(A^T) = -\\det(A)$", "$\\det(A^T) = \\frac{1}{\\det(A)}$", "$\\det(A^T) = 0$"],
    answer: 0,
    explanation: "行列式轉置性質：行列互換，行列式值不變，即 $\\det(A^T) = \\det(A)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在二維平面上，由兩平面向量 $\\vec{u} = (a, b)$ 與 $\\vec{v} = (c, d)$ 所張開的「平行四邊形面積」，在代數上等於這兩個向量所組成的二階方陣 $\\begin{pmatrix} a & c \\\\ b & d \\end{pmatrix}$ 的？",
    options: ["「行列式的絕對值（$|ad - bc|$）」", "兩向量的內積", "兩向量模長之和", "兩向量的算術平均數"],
    answer: 0,
    explanation: "二階行列式幾何意義：行列式 $|ad - bc|$ 精確代表兩列（或兩行）向量所張開平行四邊形之有向面積。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "在天體力學中，當一個外來彗星或星際小行星（如著名的星際訪客奧陌陌 'Oumuamua）飛掠太陽系時，若其飛行速度「超過了該處的太陽逃逸速度（離心率 $e > 1$）」，該天體掠過太陽後的公轉飛行幾何軌道為？",
    options: ["以太陽為其中一個焦點的「雙曲線軌道」（僅掠過太陽一次便永遠飛向宇宙深處不再返回）", "正圓形軌道", "橢圓形封閉軌道", "正三角形軌道"],
    answer: 0,
    explanation: "天體軌道離心率：$e = 0$ 為圓；$0 < e < 1$ 為封閉橢圓（週期彗星與行星）；$e = 1$ 為拋物線逃逸臨界；$e > 1$ 為開放雙曲線軌道，能量為正一去不返。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "計算代數乘法：$(-4) \\times (-5)$ 之結果為何？",
    options: ["20（負負得正）", "-20", "-9", "9"],
    answer: 0,
    explanation: "$(-4) \\times (-5) = 20$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = 3(x - 1)^2 - 5$ 圖形的「頂點坐標」為？",
    options: ["(1, -5)", "(-1, -5)", "(1, 5)", "(3, -5)"],
    answer: 0,
    explanation: "頂點式 $y = a(x-h)^2 + k$ 的頂點為 $(h, k)$，此處 $h = 1, k = -5$，故頂點為 $(1, -5)$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，已知斜邊長為 10，銳角 $\\angle A = 30^\\circ$。由正弦比計算銳角 $\\angle A$ 的對邊長度為何？",
    options: ["5（$10 \\times \\sin 30^\\circ = 10 \\times 0.5 = 5$）", "$5\\sqrt{3}$", "10", "2.5"],
    answer: 0,
    explanation: "對邊等於斜邊乘以正弦值：$10 \\times \\sin 30^\\circ = 10 \\times \\frac{1}{2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由 4 個人中選出 3 個人排成一列，共有多少種不同的排法？",
    options: ["24 種（排列數 $P^4_3 = 4 \\times 3 \\times 2 = 24$）", "12 種", "4 種", "6 種"],
    answer: 0,
    explanation: "$P^4_3 = 4 \\times 3 \\times 2 = 24$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚公正的硬幣，出現正面的機率為何？",
    options: ["1/2", "1/4", "1", "0"],
    answer: 0,
    explanation: "公正硬幣正反面各佔一半，出現正面機率為 1/2。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位學生的身高（公分）分別為 160, 165, 170, 175, 180。這組身高數據的「中位數」為多少公分？",
    options: ["170 公分", "165 公分", "175 公分", "180 公分"],
    answer: 0,
    explanation: "5 個數由小到大排列，正中間第 3 個數為 170 公分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，點 $P(3, 4, 5)$ 在「$xy$ 平面」上的垂直正射影點坐標為？",
    options: ["(3, 4, 0)（投影至 $xy$ 平面，$z$ 坐標變為 0）", "(3, 0, 5)", "(0, 4, 5)", "(0, 0, 5)"],
    answer: 0,
    explanation: "投影到 $xy$ 平面即垂直壓至 $z=0$ 平面上，保持 $x, y$ 不變，坐標為 $(3, 4, 0)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算矩陣加法：$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$ 之結果為何？",
    options: ["$\\begin{pmatrix} 3 & 3 \\\\ 3 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 0 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ 3 & 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 3 & 2 \\end{pmatrix}$"],
    answer: 0,
    explanation: "對應元素相加：$\\begin{pmatrix} 1+2 & 2+1 \\\\ 3+0 & 4+2 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 3 & 6 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "在重力場中斜向拋出一顆棒球（忽略空氣阻力），棒球在空中飛行的理想物理運動軌跡是一條？",
    options: ["拋物線（水平方向等速直線運動，鉛直方向等加速度自由落體運動之合成）", "雙曲線", "正圓", "正弦曲線"],
    answer: 0,
    explanation: "拋體運動水平位移 $x = v_x t$，鉛直位移 $y = v_y t - \\frac{1}{2}gt^2$。消去時間 $t$ 得到標準向下開口的二次函數拋物線方程式。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算減法：$15 - (-7)$ 之值為何？",
    options: ["22", "8", "-22", "-8"],
    answer: 0,
    explanation: "$15 - (-7) = 15 + 7 = 22$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若一次函數圖形通過點 $(0, 0)$ 與 $(2, 6)$，則該直線方程式為？",
    options: ["$y = 3x$", "$y = 2x$", "$y = 6x$", "$y = x + 3$"],
    answer: 0,
    explanation: "斜率 $m = \\frac{6 - 0}{2 - 0} = 3$。過原點，方程式為 $y = 3x$。",
    difficulty: "基礎"
  }
];

batch11.forEach((q, idx) => {
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

console.log(`New Math B count after batch 11: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
