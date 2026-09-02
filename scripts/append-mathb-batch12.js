const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 12: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch12 = [
  {
    category: "數與式",
    question: "在實數數線上，絕對值不等式 $|x - 5| \\le 3$ 所代表的幾何意義與實數解區間為？",
    options: ["實數 $x$ 到定點 5 的「幾何距離小於或等於 3」，解區間為 $[2, 8]$（即 $2 \\le x \\le 8$）", "解區間為 $[3, 5]$", "解區間為 $[-3, 3]$", "$x \\ge 8$ 或 $x \\le 2$"],
    answer: 0,
    explanation: "$|x - a| \\le d$ 代表點 $x$ 與 $a$ 的距離不超過 $d$。展開得 $-3 \\le x - 5 \\le 3 \\implies 2 \\le x \\le 8$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "已知正實數數列 $2, x, 18$ 成等比數列。由等比中項性質 $x^2 = a c$，求正實數 $x$ 之數值為何？",
    options: ["6（$x = \\sqrt{2 \\times 18} = \\sqrt{36} = 6$）", "10", "9", "8"],
    answer: 0,
    explanation: "等比中項性質：$x^2 = 2 \\times 18 = 36$。因 $x > 0$，開平方得 $x = 6$（公比 $r = 3$）。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在平面直角坐標系中，若將函數 $y = f(x)$ 的圖形「向右平移 2 個單位，再向上平移 3 個單位」，所得新圖形的函數解析式為？",
    options: ["$y = f(x - 2) + 3$", "$y = f(x + 2) + 3$", "$y = f(x - 2) - 3$", "$y = f(x + 2) - 3$"],
    answer: 0,
    explanation: "圖形平移法則（左加右減，上加下減）：向右平移 2 單位自變數代入 $(x - 2)$，向上平移 3 單位整體加 3，得 $y = f(x - 2) + 3$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若一次函數 $y = mx + b$ 的斜率 $m < 0$（負斜率），則該函數圖形的變化趨勢為？",
    options: ["隨著自變數 $x$ 的增加，函數值 $y$「嚴格單調遞減」（圖形由左上向右下傾斜）", "隨 $x$ 增加 $y$ 嚴格遞增", "圖形為一條水平線", "圖形為開口向下的拋物線"],
    answer: 0,
    explanation: "斜率 $m = \\frac{\\Delta y}{\\Delta x}$。當 $m < 0$ 時，橫坐標 $\\Delta x > 0$ 必然伴隨縱坐標 $\\Delta y < 0$，故直線由左上朝右下傾斜，呈嚴格單調遞減。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "聲學中音量「分貝（$\\text{dB}$）」的計算公式為 $\\text{dB} = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$（其中 $I_0$ 為人耳可聽聞的基準聲音強度）。若某重型機車引擎運轉時發出的聲音強度 $I$ 暴增為原本安靜環境的 1,000 倍（$I / I_0 = 10^3$），則其分貝數將增加多少 dB？",
    options: ["增加 30 dB（$10 \\times \\log_{10}(10^3) = 10 \\times 3 = 30\\text{ dB}$）", "增加 1,000 dB", "增加 3 dB", "增加 100 dB"],
    answer: 0,
    explanation: "分貝對數公式：$\\text{dB} = 10 \\log_{10}(10^3) = 10 \\times 3 = 30\\text{ dB}$。聲音物理強度每增加 10 倍對應增加 10 分貝；增加 1000 倍對應增加 30 分貝。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算指數運算：$2^4 \\times 2^3$ 之結果為何？",
    options: ["128（同底數相乘指數相加：$2^{4+3} = 2^7 = 128$）", "64", "256", "32"],
    answer: 0,
    explanation: "$2^4 \\times 2^3 = 2^{4+3} = 2^7 = 128$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在幾何形狀上，若一個三角形為「鈍角三角形（有一個內角大於 90°）」，則該三角形的外接圓圓心（外心）位置必然落在？",
    options: ["三角形的「外部」", "三角形的內部", "三角形最長邊的中點上", "鈍角的頂點上"],
    answer: 0,
    explanation: "三角形外心位置特性：銳角三角形外心在內部；直角三角形外心在斜邊中點；鈍角三角形外心必然落在三角形外部。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在任意 $\\Delta ABC$ 中，連接頂點 $A$ 與對邊 $\\overline{BC}$ 中點 $M$ 所得的線段 $\\overline{AM}$（三角形中線），在幾何面積上具有何項恆等性質？",
    options: ["將 $\\Delta ABC$ 的面積「嚴格平分為相等的兩半」（$\\text{Area}(\\Delta ABM) = \\text{Area}(\\Delta ACM)$）", "將頂角 $\\angle A$ 嚴格二等分", "垂直於底邊 $\\overline{BC}$", "長度恆等於底邊的一半"],
    answer: 0,
    explanation: "同高底等長原理：中線將底邊平分為等長的兩段（$BM = MC$），而兩小三角形共享頂點 $A$，高完全相同，故面積嚴格相等。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "將 4 個英文字母 A, A, B, C 排成一列，共有多少種不同的排列方式？",
    options: ["12 種（不盡相異物排列：$\\frac{4!}{2!} = \\frac{24}{2} = 12$）", "24 種", "6 種", "16 種"],
    answer: 0,
    explanation: "4 個字母中有 2 個相同的 A。不盡相異物排列公式：$\\frac{4!}{2! 1! 1!} = \\frac{24}{2} = 12$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "求代數方程式 $x + y + z = 8$ 的「非負整數解（$x, y, z \\ge 0$）」共有多少組？",
    options: ["45 組（重複組合 $H^3_8 = C^{3+8-1}_8 = C^{10}_8 = C^{10}_2 = 45$）", "36 組", "55 組", "120 組"],
    answer: 0,
    explanation: "$H^3_8 = C^{10}_8 = \\frac{10 \\times 9}{2} = 45$ 組。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩顆公正的六面骰子，兩顆骰子出現的點數「皆為奇數（1, 3, 5）」的機率為何？",
    options: ["1/4（每顆出現奇數機率 3/6 = 1/2，獨立相乘得 1/4）", "1/2", "3/8", "1/6"],
    answer: 0,
    explanation: "第一顆為奇數機率 1/2，第二顆為奇數機率 1/2。兩者皆為奇數之機率為 $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "某公益彩券每張售價 100 元。經統計精算，購買一張該彩券所能獲得獎金的「數學期望值」為 60 元。從理性決策觀點分析，長期持續大量購買該彩券的平均統計結果必為？",
    options: ["平均每購買一張虧損 40 元（淨期望值為 $60 - 100 = -40$ 元，長期必虧）", "平均每張賺取 60 元", "平均不賺不賠", "長期必定致富"],
    answer: 0,
    explanation: "彩券發行扣除行政成本與公益盈餘後返還率僅約 60%，每張淨期望值為 $-40$ 元。商業彩券本質為負期望值賽局，長期重複下大數法則保證參與者必然虧損。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在全臺大學學科能力測驗（學測）或大型考試成績單上常標註「百分等級（PR 值，Percentile Rank）」。若某位考生的數學科 PR 值為 92，其在統計學上的精確含義為？",
    options: ["該考生的數學成績「在全體考生中，高於或等於約 92% 的全體考生」（僅約前 8% 考生分數高於他）", "該考生的原始考卷答對率為 92 分", "該考生有 92% 的題目是猜對的", "該考生名列全校第 92 名"],
    answer: 0,
    explanation: "百分等級 PR 衡量相對名次：PR = 92 代表將全體考生平均分為 100 等份時，其分數勝過全體約 92% 的考生，位列最頂尖的前 8% 區間。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在雙變數數據分析中，若求得兩變數 $x$ 與 $y$ 的皮爾森相關係數 $r = +1.0$。這在散佈圖幾何分佈上代表何種極端特徵？",
    options: ["散佈圖上所有的數據點「完全精確落在同一條斜率為正的直線上（完全正線性相關）」", "數據點呈完全隨機混亂分佈", "數據點散佈在一個圓形周圍", "兩變數完全毫無任何關聯"],
    answer: 0,
    explanation: "當相關係數達到理論極限 $r = +1$ 時，代表兩變數存在完全嚴格的完全正線性關係，$y = a x + b$（$a > 0$），所有數據點無一例外全數落在該正斜率直線上。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "一個長、寬、高分別為 $a = 3, b = 4, c = 12$ 的長方體，其貫穿內部兩最遠相對頂點的「空間對角線長度」為多少？",
    options: ["13（$\\sqrt{3^2 + 4^2 + 12^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$）", "19", "$\\sqrt{19}$", "25"],
    answer: 0,
    explanation: "長方體對角線長度公式：$D = \\sqrt{a^2 + b^2 + c^2} = \\sqrt{9 + 16 + 144} = \\sqrt{169} = 13$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在三維地球球面上，地球的「赤道平面」與貫穿南北兩極點的「地軸自轉軸線」之間的空間幾何夾角恆為？",
    options: ["$90^\\circ$（互相垂直）", "$23.5^\\circ$", "$0^\\circ$（互相平行）", "$180^\\circ$"],
    answer: 0,
    explanation: "赤道定義為垂直於地球自轉軸並通過球心之大圓平面，故赤道平面與自轉地軸兩者恆保持嚴格正交垂直（夾角 90°）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "在矩陣代數加法運算中，對於任意兩個同階二階方陣 $A$ 與 $B$，矩陣加法是否滿足交換律？",
    options: ["滿足，恆有 $A + B = B + A$", "不滿足，矩陣加法永遠不可交換", "只有當 $A=B$ 時才成立", "結果為零矩陣"],
    answer: 0,
    explanation: "矩陣加法基於對應實數元素的加法，實數加法具交換律，故矩陣加法恆滿足交換律 $A + B = B + A$（但矩陣乘法一般不滿足交換律）。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "二階轉移矩陣 $P$ 的正整數次方 $P^n$ 經過多次自乘後，矩陣中的每一個元素數值必然滿足下列哪一項數值界限？",
    options: ["每個元素數值 $p_{ij}$ 必然落在 $[0, 1]$ 區間內（皆為合法機率數值）", "元素數值會無限發散至無窮大", "所有元素必然變成負數", "矩陣行列式恆等於 100"],
    answer: 0,
    explanation: "轉移矩陣乘冪仍為轉移矩陣（每行和恆為 1 且元素非負），故各元素本質皆代表狀態轉移機率，必然介於 0 與 1 之間。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "太陽能「槽式拋物面聚光發熱管」將反射鏡面製成拋物柱面。沿著該拋物柱面「焦點軸線」安裝黑色吸熱油管，其工程熱物理目的為？",
    options: ["將入射的平行太陽光線 100% 反射聚焦至吸熱管上，使導熱油瞬間升溫至數百度產生高壓蒸氣發電", "防止鳥類在吸熱管上停留", "使熱水管不會生鏽", "自動旋轉追蹤月亮"],
    answer: 0,
    explanation: "槽式光熱發電利用拋物柱面焦點幾何特性：平行光線全數匯聚於焦線集熱管，光強匯聚數十倍使導熱介質極速升溫，驅動蒸氣渦輪機高效發電。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "在實數四則運算規則中，數學上嚴格禁止下列何種運算操作？",
    options: ["「除以 0（0 不能作除數或分母，否則無意義）」", "負數乘以負數", "0 乘以任何實數", "分數加減法通分"],
    answer: 0,
    explanation: "若除數為 0，商數乘以 0 永遠無法還原非零被除數，或任何數皆為解，破壞數系相容性，故除以 0 在數學上未定義。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "直線方程式 $y = 4$ 的圖形在直角坐標系中是一條？",
    options: ["平行於 $x$ 軸的「水平線」（斜率為 0，截距為 4）", "平行於 $y$ 軸的鉛直線", "通過原點的斜直線", "雙曲線"],
    answer: 0,
    explanation: "所有點的縱坐標皆為 4，與 $x$ 軸平行，為水平直線，其斜率為 0。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "計算銳角三角比：$\\sin 45^\\circ$ 之精確值為何？",
    options: ["$\\frac{\\sqrt{2}}{2}$（即 $\\frac{1}{\\sqrt{2}}$）", "$1/2$", "$\\frac{\\sqrt{3}}{2}$", "1"],
    answer: 0,
    explanation: "等腰直角三角形三邊比為 $1 : 1 : \\sqrt{2}$，$\\sin 45^\\circ = \\frac{1}{\\sqrt{2}} = \\frac{\\sqrt{2}}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 6 個人中選出 3 個人，共有多少種不同的選拔組合數？",
    options: ["20 種（$C^6_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$）", "15 種", "30 種", "120 種"],
    answer: 0,
    explanation: "$C^6_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一顆公正的六面骰子，出現點數為「5 點或 6 點」的機率為何？",
    options: ["1/3（2/6 = 1/3）", "1/6", "1/2", "2/3"],
    answer: 0,
    explanation: "符合條件的點數有 5, 6 兩種，機率為 $\\frac{2}{6} = \\frac{1}{3}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若某組數據由小到大排列為 $3, 5, 7, 9$（共有 4 個數）。這組數據的「中位數」為多少？",
    options: ["6（中間兩數 5 與 7 的算術平均數：$\\frac{5+7}{2} = 6$）", "5", "7", "5.5"],
    answer: 0,
    explanation: "偶數個數據的中位數取正中間兩數的平均值：$\\frac{5 + 7}{2} = 6$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，點 $P(3, 4, 5)$ 到「$z$ 軸」的垂直距離為多少？",
    options: ["5（$\\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = 5$）", "3", "4", "$\\sqrt{50}$"],
    answer: 0,
    explanation: "點 $(x, y, z)$ 到 $z$ 軸的垂直距離為 $\\sqrt{x^2 + y^2} = \\sqrt{3^2 + 4^2} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算矩陣乘積：$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ 之結果行向量為何？",
    options: ["$\\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}$", "$\\begin{pmatrix} 1 \\\\ 6 \\end{pmatrix}$", "$\\begin{pmatrix} 2 \\\\ 3 \\end{pmatrix}$", "$\\begin{pmatrix} 8 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$\\begin{pmatrix} 2(1) + 0(2) \\\\ 0(1) + 3(2) \\end{pmatrix} = \\begin{pmatrix} 2 \\\\ 6 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "人造地球衛星繞地球運行的封閉軌道多為「橢圓形軌道」。依開普勒行星運動規律，地球位於該橢圓軌道的？",
    options: ["其中一個「焦點」上", "橢圓正中心點上", "長軸頂點上", "短軸端點上"],
    answer: 0,
    explanation: "開普勒第一定律推廣至衛星軌道：人造衛星繞地運行的軌道為橢圓，地球質心精確位於該橢圓軌道的其中一個焦點上。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算整數運算：$(-8) \\div 2$ 之結果為何？",
    options: ["-4", "4", "-16", "16"],
    answer: 0,
    explanation: "$(-8) \\div 2 = -4$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = -2(x - 3)^2 + 8$ 的「最大值」為多少？",
    options: ["8（發生在 $x = 3$ 處）", "3", "-2", "-8"],
    answer: 0,
    explanation: "拋物線開口向下（$a = -2 < 0$），頂點在 $(3, 8)$，當 $x = 3$ 時有最大值 8。",
    difficulty: "基礎"
  }
];

batch12.forEach((q, idx) => {
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

console.log(`New Math B count after batch 12: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
