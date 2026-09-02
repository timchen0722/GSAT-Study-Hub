const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 13: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch13 = [
  {
    category: "數與式",
    question: "將混循環小數 $0.2\\overline{3}$（即 $0.2333\\dots$）化為最簡分數的結果為何？",
    options: ["7/30（公式：$\\frac{23 - 2}{90} = \\frac{21}{90} = \\frac{7}{30}$）", "23/100", "23/99", "1/4"],
    answer: 0,
    explanation: "混循環小數化分數規則：分母一個循環節一個非循環節為 90，分子為全部數字減去不循環部分 $23 - 2 = 21$。得 $\\frac{21}{90} = \\frac{7}{30}$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "已知三正實數 $a, b, c$ 滿足連比例 $a : b : c = 2 : 3 : 5$，且三數之和 $a + b + c = 50$。求 $c$ 之數值為何？",
    options: ["25（設 $a=2k, b=3k, c=5k$，則 $10k = 50 \\implies k = 5 \\implies c = 25$）", "15", "10", "30"],
    answer: 0,
    explanation: "設比例參數 $k$：$2k + 3k + 5k = 10k = 50 \\implies k = 5$。因此 $c = 5k = 25$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在會計財務管理中，「直線折舊法（Straight-Line Depreciation）」是指固定資產在耐用年限內每年提列等額的折舊費用。某工廠購入一臺新機器原價 100 萬元，預估耐用年限為 10 年，10 年後報廢殘值為 10 萬元。依直線折舊法計算，該機器平均每年應提列的折舊費用為多少？",
    options: ["9 萬元（公式：$\\frac{\\text{原價} - \\text{殘值}}{\\text{耐用年限}} = \\frac{100 - 10}{10} = 9\\text{ 萬元}$）", "10 萬元", "8 萬元", "1 萬元"],
    answer: 0,
    explanation: "每年折舊額為一次函數斜率：$\\frac{100 - 10}{10} = \\frac{90}{10} = 9$ 萬元/年。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若二次函數圖形為拋物線，且與水平直線 $y = 5$ 相交於兩點 $(1, 5)$ 與 $(7, 5)$。由拋物線的軸對稱幾何性質，該拋物線的「對稱軸方程式」為？",
    options: ["$x = 4$（兩交點橫坐標之中點：$\\frac{1 + 7}{2} = 4$）", "$x = 5$", "$x = 3$", "$y = 4$"],
    answer: 0,
    explanation: "拋物線任一條水平割線的兩交點中點，必落在其鉛直對稱軸上：$x = \\frac{1 + 7}{2} = 4$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "天文學中恆星「星等（Magnitude）」與「觀測亮度 $I$」滿足波格森公式（Pogson's Relation）：星等每相差 5 等，其物理亮度相差剛好「100 倍」。由此推算，1 等星的亮度約為 6 等星亮度的多少倍？",
    options: ["100 倍（星等相差 $6 - 1 = 5$ 等，亮度精確相差 100 倍）", "5 倍", "50 倍", "1,000 倍"],
    answer: 0,
    explanation: "大考天文常識：星等數值越小代表越亮。星等每相差 1 等亮度相差約 $2.512$ 倍；相差 5 等亮度相差 $2.512^5 = 100$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "培養皿中某種細菌每隔 20 分鐘分裂倍增一次（由 1 隻分裂成 2 隻）。若初始放入 10 隻細菌，經過 1 小時（60 分鐘，相當於經歷 3 次分裂）後，培養皿中共有多少隻細菌？",
    options: ["80 隻（$10 \\times 2^3 = 10 \\times 8 = 80$）", "60 隻", "160 隻", "30 隻"],
    answer: 0,
    explanation: "60 分鐘內經歷 $60 / 20 = 3$ 次分裂週期。細菌總數為 $10 \\times 2^3 = 80$ 隻。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "交通工程中道路「坡度百分比（Grade percentage）」定義為：鉛直爬升垂直高度與水平前進距離的比值百分比（即 $\\tan\\theta \\times 100\\%$）。若某山區公路行車前進水平距離 500 公尺，鉛直垂直高度爬升了 40 公尺，則該路段的道路坡度百分比標示為？",
    options: ["8%（$\\frac{40}{500} \\times 100\\% = 8\\%$）", "4%", "12.5%", "20%"],
    answer: 0,
    explanation: "坡度百分比即正切值百分化：$\\frac{40}{500} \\times 100\\% = 0.08 \\times 100\\% = 8\\%$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "三角形的幾何「外心（Circumcenter）」在幾何學上的定義及其到頂點的距離性質為？",
    options: ["三角形「三邊中垂線的交點」，且外心到「三個頂點的距離皆相等」（皆等於外接圓半徑 $R$）", "三角形三內角平分線的交點", "三角形三高的交點", "三角形三中線的交點"],
    answer: 0,
    explanation: "外心為外接圓之圓心，位於三邊中垂線交點上，故到三角形三頂點距離皆等於外接圓半徑 $R$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 3 封不同的信件隨機投進 4 個不同的郵筒中，每封信皆可投入任一郵筒，共有多少種不同的投遞方法？",
    options: ["64 種（每封信皆有 4 種郵筒可選：$4^3 = 64$）", "12 種", "81 種", "24 種"],
    answer: 0,
    explanation: "重複排列乘法原理：第 1 封信有 4 種選擇，第 2 封信有 4 種選擇，第 3 封信有 4 種選擇，共有 $4 \\times 4 \\times 4 = 4^3 = 64$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "求代數方程式 $x + y + z = 9$ 的「非負整數解（$x, y, z \\ge 0$）」共有多少組？",
    options: ["55 組（重複組合 $H^3_9 = C^{3+9-1}_9 = C^{11}_9 = C^{11}_2 = 55$）", "45 組", "66 組", "90 組"],
    answer: 0,
    explanation: "$H^3_9 = C^{11}_9 = \\frac{11 \\times 10}{2} = 55$ 組。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "若事件 $A$ 與事件 $B$ 為「相互獨立事件」（即事件 $A$ 的發生與否完全不影響事件 $B$ 的發生機率）。已知 $P(A) = 0.4, P(B) = 0.5$。則兩事件同時發生的交集機率 $P(A \\cap B)$ 為？",
    options: ["0.2（獨立事件乘法定理：$P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$）", "0.9", "0.1", "0.45"],
    answer: 0,
    explanation: "獨立事件判定充要條件：$P(A \\cap B) = P(A) P(B) = 0.4 \\times 0.5 = 0.2$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚均勻的四面體骰子（四個面分別標記 1, 2, 3, 4 點），朝底面的點數「小於或等於 2」的機率為何？",
    options: ["1/2（2/4 = 1/2）", "1/4", "3/4", "1"],
    answer: 0,
    explanation: "點數為 1 或 2，共有 2 種情況，機率為 $\\frac{2}{4} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "已知某班全體學生的身高數據標準差為 $\\sigma_x = 6$ 公分。若老師將全班每位同學的身高皆「加上 5 公分」，則調整後全班新身高的「標準差 $\\sigma_y$」將變為多少？",
    options: ["仍然為 6 公分（數據全體平移加上常數 $b$，離散程度不變，標準差維持不變）", "11 公分", "1 公分", "30 公分"],
    answer: 0,
    explanation: "統計變換性質：若 $y = ax + b$，新標準差為 $\\sigma_y = |a|\\sigma_x$。此處 $a = 1, b = 5$，平移不改變各數據間的相對差距，故標準差仍為 6 公分。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在雙變數迴歸分析中，利用最小平方法所求得的「最適迴歸直線（Regression Line）」，在二維坐標散佈圖上必然會通過下列哪一個代表性的幾何數據點？",
    options: ["兩變數的平均數中心點 $(\\bar{x}, \\bar{y})$", "坐標原點 $(0, 0)$", "數據中的最大值點", "數據中的中位數點"],
    answer: 0,
    explanation: "最適迴歸直線方程式 $y - \\bar{y} = b(x - \\bar{x})$。當 $x = \\bar{x}$ 時 $y = \\bar{y}$，因此迴歸直線恆過中心點 $(\\bar{x}, \\bar{y})$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在地球球面上，沿著同一條子午線（經線）南北航行，緯度每相差「$1^\\circ$（度）」，在地表所對應的大圓弧長地面距離大約約為多少公里？",
    options: ["約 111 公里（地球大圓周長約 40,000 公里，除以 360 度約為 111.1 公里）", "約 1,000 公里", "約 11 公里", "約 400 公里"],
    answer: 0,
    explanation: "地球平均半徑約 6371 km，大圓周長約 $2\\pi R \\approx 40,000\\text{ km}$。每度經線弧長為 $\\frac{40,000}{360} \\approx 111.1\\text{ km}$（即 60 海里）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "全球航海與航空旅行所遵循的「國際換日線（International Date Line）」，在地球表面大致沿著哪一條經線穿行？",
    options: ["「180° 經線」（東經/西經 180°）", "本初子午線（0° 經線）", "東經 120° 經線", "西經 90° 經線"],
    answer: 0,
    explanation: "國際換日線大致依循 180° 經線，自西向東越過該線日期減一天，自東向西越過該線日期加一天。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若二階方陣 $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ 的行列式值等於 0（即 $\\det(A) = ad - bc = 0$）。在矩陣代數上這意味著該方陣？",
    options: ["「不存在反矩陣（不可逆矩陣 / 奇異矩陣 Singular Matrix）」", "必然為零矩陣", "必然為單位矩陣", "所有元素全數為 0"],
    answer: 0,
    explanation: "反矩陣公式 $A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$。若行列式 $\\det(A) = 0$，分母為 0 無法求逆，故該矩陣不可逆。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在馬可夫鏈狀態轉移模型中，轉移矩陣 $P$ 的「每一行（Column）各元素數值之和」恆等於？",
    options: ["1（全機率公式：某狀態轉移至所有可能狀態的機率總和必然為 100%）", "0", "2", "隨機任意數值"],
    answer: 0,
    explanation: "轉移矩陣的行向量代表條件機率分佈，所有可能出路機率和為 1，故每行之和恆等於 1。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "許多宏偉的石造拱橋與鋼結構大橋採用「拋物線拱橋（Parabolic Arch）」設計。工程結構力學證實，在承受水平均勻荷載（如平坦橋面重力）時，拋物線拱橋的最顯著優點為？",
    options: ["拱肋內部各截面幾乎「只承受純軸向壓力，彎矩幾乎為零」，能充分發揮石材與混凝土耐壓不耐拉的材料特性", "外型比圓形更加耗費鋼材", "橋面會隨風劇烈搖晃", "橋墩不需要任何地基支撐"],
    answer: 0,
    explanation: "拋物線拱在水平均勻荷載下的壓力線恰為拋物線，使材料內部完全處於受壓狀態無彎曲拉應力，結構強度與經濟性最佳。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "在實數乘法運算中，若兩實數 $a$ 與 $b$ 互為「倒數」，則兩數相乘之積 $a \\times b$ 必等於？",
    options: ["1", "0", "-1", "2"],
    answer: 0,
    explanation: "倒數的定義即為乘積為 1 的兩數：$a \\times \\frac{1}{a} = 1$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "水平直線方程式 $y = -3$ 的圖形在直角坐標系中，其「斜率 $m$」之值為多少？",
    options: ["0（水平直線斜率為 0）", "-3", "1", "不存在"],
    answer: 0,
    explanation: "水平直線縱坐標變化量 $\\Delta y = 0$，故斜率 $m = \\frac{\\Delta y}{\\Delta x} = 0$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "平面幾何中，三角形的「外角定理」指出：三角形任意一個外角的度數，恆等於？",
    options: ["與它「不相鄰的兩個內角之和」", "與它相鄰的內角度數", "180 度", "90 度"],
    answer: 0,
    explanation: "三角形外角等於不相鄰兩內角和：因內角和為 180°，外角與鄰角互補（和為 180°），故外角必等於另外兩內角之和。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 7 個人中選出 2 個人組成搭檔，共有多少種不同的選拔組合數？",
    options: ["21 種（$C^7_2 = \\frac{7 \\times 6}{2} = 21$）", "14 種", "42 種", "35 種"],
    answer: 0,
    explanation: "$C^7_2 = \\frac{7 \\times 6}{2 \\times 1} = 21$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "袋中有 3 顆黑球與 2 顆白球。隨機自袋中取出一顆球，取出的球為「白球」的機率為何？",
    options: ["2/5（0.4）", "3/5", "1/2", "1/5"],
    answer: 0,
    explanation: "總球數為 5 顆，白球有 2 顆，機率為 $\\frac{2}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位學生的數學隨堂測驗成績分別為 80, 80, 85, 90, 95。這組數據的「眾數（Mode）」為多少分？",
    options: ["80 分（出現頻率最高，共出現 2 次）", "85 分", "90 分", "88 分"],
    answer: 0,
    explanation: "眾數定義為出現次數最多的數據數值，80 分出現兩次最多，故眾數為 80 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，點 $P(2, 3, 4)$ 到「$x$ 軸」的垂直距離為多少？",
    options: ["5（$\\sqrt{y^2 + z^2} = \\sqrt{3^2 + 4^2} = 5$）", "2", "3", "4"],
    answer: 0,
    explanation: "點到 $x$ 軸的垂直距離為縱坐標與豎坐標的平方和開根號：$\\sqrt{y^2 + z^2} = \\sqrt{3^2 + 4^2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算純量乘以矩陣：$3 \\begin{pmatrix} 1 & 2 \\\\ -1 & 0 \\end{pmatrix}$ 之結果為何？",
    options: ["$\\begin{pmatrix} 3 & 6 \\\\ -3 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 2 \\\\ -1 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 6 \\\\ -3 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 5 \\\\ 2 & 3 \\end{pmatrix}$"],
    answer: 0,
    explanation: "純量乘法即矩陣內每個元素皆乘以 3：$\\begin{pmatrix} 3 & 6 \\\\ -3 & 0 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "在重力場中，砲彈以一定仰角發射後的理想飛行軌跡是一條向下開口的二次函數曲線。這條曲線在幾何學上屬於？",
    options: ["拋物線", "雙曲線", "正圓", "正弦波"],
    answer: 0,
    explanation: "拋射體運動在水平方向等速直線、鉛直方向等加速度，消去時間參數後軌跡為標準二次拋物線。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算絕對值運算：$| 3 - 8 |$ 之數值為何？",
    options: ["5（$| -5 | = 5$）", "-5", "11", "0"],
    answer: 0,
    explanation: "$|3 - 8| = |-5| = 5$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = (x - 4)^2 + 1$ 的圖形「對稱軸方程式」為？",
    options: ["$x = 4$", "$x = 1$", "$y = 4$", "$y = 1$"],
    answer: 0,
    explanation: "頂點在 $(4, 1)$，對稱軸為通過頂點的鉛直線 $x = 4$。",
    difficulty: "基礎"
  }
];

batch13.forEach((q, idx) => {
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

console.log(`New Math B count after batch 13: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
