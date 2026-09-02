const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 9: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch9 = [
  {
    category: "數與式",
    question: "在統計圖表中，若將全校學生體育測驗成績依分數由低至高繪製成「累積相對次數折線圖（S形曲線）」。累積相對次數恰好達到「50%」時所對應的橫軸成績數值，在統計學上定義為該組數據的？",
    options: ["中位數（Median / 第 50 百分位數 $P_{50}$）", "眾數", "第一四分位數 $Q_1$", "算術平均數"],
    answer: 0,
    explanation: "累積相對次數折線圖代表小於等於某數值的樣本百分比。累積達 50% 處即為剛好將全體數據平分為前後各半的切分點，精確對應中位數（第 50 百分位數）。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "某投資人每年年初在基金帳戶存入 10,000 元，年複利報酬率為 10%。利用等比級數求和公式 $S_n = \\frac{a_1(1-r^n)}{1-r}$ 計算，第 3 年年底該筆投資的累積本利和為多少元？",
    options: ["36,410 元（$10000 \\times 1.10^3 + 10000 \\times 1.10^2 + 10000 \\times 1.10 = 13310 + 12100 + 11000$）", "33,000 元", "30,000 元", "40,000 元"],
    answer: 0,
    explanation: "第一筆存滿 3 年變 $10000(1.1^3) = 13310$；第二筆存滿 2 年變 $12100$；第三筆存滿 1 年變 $11000$。三筆總和為 $13310 + 12100 + 11000 = 36,410$ 元。",
    difficulty: "中等"
  },
  {
    category: "一次與二次函數",
    question: "農夫欲用總長度為 40 公尺的鐵絲網，沿著筆直的石牆邊圍出一塊矩形菜園（靠牆的一側不需鐵絲網）。設垂直於石牆的兩邊長度皆為 $x$ 公尺，則此矩形菜園所能圍出的「最大面積」為多少平方公尺？",
    options: ["200 平方公尺（當 $x = 10$，平行牆面邊長為 20 公尺時）", "100 平方公尺", "400 平方公尺", "150 平方公尺"],
    answer: 0,
    explanation: "平行牆面長度為 $40 - 2x$。面積函數 $A(x) = x(40 - 2x) = -2x^2 + 40x$。配方法：$A(x) = -2(x - 10)^2 + 200$。當 $x = 10$ 公尺時有最大面積 200 平方公尺。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在平面直角坐標系中，鉛直直線方程式 $x = 3$ 的「斜率 $m$」在數學上的定義為？",
    options: ["不存在（未定義，因為水平變化量 $\\Delta x = 0$，分母為 0 無意義）", "0", "3", "1"],
    answer: 0,
    explanation: "斜率定義為 $m = \\frac{\\Delta y}{\\Delta x}$。鉛直線上任意兩點橫坐標相同 $\\Delta x = 0$，分母為 0 故斜率不存在；水平線斜率則為 0。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "某抗生素注射入人體後，其在血液中的濃度隨時間呈指數衰減，其消除半衰期為 4 小時。若病患接受注射後初始血藥濃度為 $80\\text{ mg/L}$，經過 12 小時（經歷了 3 個半衰期）後，該病患體內的血藥濃度殘留為多少 mg/L？",
    options: ["10 mg/L（$80 \\times (1/2)^3 = 80 / 8 = 10$）", "20 mg/L", "40 mg/L", "5 mg/L"],
    answer: 0,
    explanation: "經過次數 $n = 12 / 4 = 3$ 次半衰期。殘留濃度 $C = 80 \\times (1/2)^3 = 80 \\times \\frac{1}{8} = 10\\text{ mg/L}$。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "天文學中恆星的視星等差 $\\Delta m = m_1 - m_2$ 與兩天體表觀光度比 $I_1 / I_2$ 滿足普格森對數公式：$m_1 - m_2 = -2.5 \\log_{10}\\left(\\frac{I_1}{I_2}\\right)$。若甲恆星的光度為乙恆星的 10,000 倍（$I_1 / I_2 = 10^4$），則甲恆星的視星等比乙恆星小多少個星等？",
    options: ["小 10 個星等（$-2.5 \\times 4 = -10$）", "小 4 個星等", "小 2.5 個星等", "小 100 個星等"],
    answer: 0,
    explanation: "$m_1 - m_2 = -2.5 \\log_{10}(10^4) = -2.5 \\times 4 = -10$。星等差值為 -10，即甲星比乙星小 10 個星等（數值越小亮度越高）。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "無人空拍機在海面上空 300 公尺的高度水平飛行。飛手透過空拍鏡頭測得前方海面上某艘遇險漁船的「俯角」為 $30^\\circ$。此時無人機與該遇險漁船之間的「水平直線地面距離」為多少公尺？",
    options: ["$300\\sqrt{3}$ 公尺（約 519.6 公尺）", "300 公尺", "$100\\sqrt{3}$ 公尺", "600 公尺"],
    answer: 0,
    explanation: "俯角等於仰角為 $30^\\circ$。水平距離 $d = \\frac{\\text{飛行高度}}{\\tan 30^\\circ} = \\frac{300}{1/\\sqrt{3}} = 300\\sqrt{3}$ 公尺。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "三角形的幾何「外心（Circumcenter）」定義為三角形三邊「垂直平分線（中垂線）」的交點。外心在幾何性質上具有下列哪一項核心特徵？",
    options: ["外心到三角形的「三個頂點距離完全相等」（即為外接圓半徑 $R$）", "外心到三邊的垂直距離完全相等", "外心必在三角形內部", "外心是三角形的重心"],
    answer: 0,
    explanation: "中垂線上任意點到兩端點等距，故三中垂線交點外心到三頂點 $A, B, C$ 等距，為外接圓圓心；鈍角三角形的外心落在三角形外部。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "平面上有相異的 6 個點，其中任三點皆不共線。以這 6 個點中的任意 2 點為端點，共可在平面上連成多少條相異的直線？",
    options: ["15 條（組合數 $C^6_2 = \\frac{6 \\times 5}{2} = 15$）", "30 條", "12 條", "20 條"],
    answer: 0,
    explanation: "兩點決定一條直線。任三點不共線時，任取兩點即為一條獨立直線，總直線數為 $C^6_2 = 15$ 條。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "3 位男同學與 2 位女同學排成一列。若要求「2 位女同學在排隊時互不相鄰」，利用插空法，共有多少種排法？",
    options: ["72 種（$3! \\times P^4_2 = 6 \\times 12 = 72$）", "120 種", "48 種", "24 種"],
    answer: 0,
    explanation: "先排 3 位男生有 $3! = 6$ 種排法，男生周圍產生 4 個空位。將 2 位女生插入 4 個空隙中，方法數為 $P^4_2 = 4 \\times 3 = 12$。總排法為 $6 \\times 12 = 72$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲兩顆公正的六面骰子，兩顆骰子出現的點數「皆為質數（即點數皆為 2, 3 或 5）」的機率為何？",
    options: ["1/4（每顆出現質數機率為 3/6 = 1/2，獨立相乘得 1/4）", "1/2", "1/3", "9/36"],
    answer: 0,
    explanation: "六面骰點數中質數為 2, 3, 5 共 3 個，機率為 $3/6 = 1/2$。兩骰獨立投擲，兩者皆為質數的機率為 $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "在賭場輪盤或金融投資賽局中，若一個博弈遊戲的玩家平均「期望報酬（淨獲利期望值）」恰好等於 0，這種賽局在機率統計學上稱為？",
    options: ["公平賽局（Fair Game，長期重複進行下無人佔有統計優勢）", "必勝賽局", "零和賽局", "風險賽局"],
    answer: 0,
    explanation: "公平賽局定義：參與者平均淨收益期望值 $E(X) = 0$。現實商業賭場與彩券期望值皆為負數（莊家優勢），絕非公平賽局。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某班級全體同學期中考數學成績的標準差為 8 分。若數學老師宣布全體同學每人成績皆「額外加 10 分」，則加分調整後全班成績的「新標準差」為多少分？",
    options: ["8 分（全體平移不改變數據離散程度，標準差完全保持不變）", "18 分", "80 分", "0 分"],
    answer: 0,
    explanation: "數據線性變換性質：若 $Y = a X + b$，則新標準差為 $\\sigma_Y = |a| \\sigma_X$。此處 $a = 1, b = 10$，標準差完全不受常數加減影響，仍為 8 分。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學雙變數分析中，若繪製散佈圖發現所有數據點幾乎完美分布在拋物線曲線 $y = x^2$（以原點為對稱中心，正負坐標對稱分佈）上。此時計算這兩變數的皮爾森線性相關係數 $r$，其數值最可能接近？",
    options: ["接近 0（因為相關係數 $r$ 僅能度量「線性相關」，無法捕捉非線性強相關）", "接近 1.0", "接近 -1.0", "無法計算"],
    answer: 0,
    explanation: "大考經典陷阱題：相關係數 $r = 0$ 僅代表「無線性相關」，並不代表兩變數相互獨立或無關係。對稱二次曲線 $y = x^2$ 具有極強決定性關係，但其線性相關係數 $r = 0$。",
    difficulty: "中等"
  },
  {
    category: "空間概念與球面幾何",
    question: "在非歐幾何（球面幾何學）中，在三維地球球面上繪製任意一個由大圓劣弧所圍成的「球面三角形」，其三個內角之和必定？",
    options: ["「恆大於 180°」（球面角盈性質，面積越大內角和超出 180° 越多）", "恆等於 180°", "恆小於 180°", "恆等於 360°"],
    answer: 0,
    explanation: "球面具有正高斯曲率。球面三角形內角和 $\\sum = 180^\\circ + E$，超出 180° 的差值 $E$ 稱為角盈（Spherical Excess），面積公式為 $\\text{Area} = R^2 E$（例如赤道兩點經度相差 90° 與北極連成的球面三角形，三內角皆為 90°，內角和高達 270°）。",
    difficulty: "中等"
  },
  {
    category: "空間概念與球面幾何",
    question: "空間直角坐標系中，點 $P(2, 3, 6)$ 到原點 $O(0, 0, 0)$ 的直線長度距離為何？",
    options: ["7（$\\sqrt{2^2 + 3^2 + 6^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$）", "11", "$\\sqrt{11}$", "49"],
    answer: 0,
    explanation: "空間距離公式：$d = \\sqrt{x^2 + y^2 + z^2} = \\sqrt{4 + 9 + 36} = \\sqrt{49} = 7$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若方陣 $P$ 為馬可夫鏈的合法轉移矩陣（每行元素大於等於 0 且每行和為 1）。依據佩隆-弗羅貝尼烏斯定理（Perron-Frobenius Theorem），轉移矩陣 $P$ 必定擁有下列哪一個特徵值（Eigenvalue）？",
    options: ["必定擁有特徵值 $\\lambda = 1$（對應非零穩態機率向量 $P X = X$）", "特徵值必為 0", "特徵值必為負數", "特徵值必大於 10"],
    answer: 0,
    explanation: "因每行元素和為 1，全 1 的列向量是轉置矩陣 $P^T$ 對應於 $\\lambda = 1$ 的左特徵向量。因此 $P$ 必有模長最大特徵值 $\\lambda = 1$，保證長期穩態分佈存在。",
    difficulty: "中等"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，計算 $2A$ 的結果為何？",
    options: ["$\\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 2 & 2 \\\\ 3 & 4 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 4 \\\\ 3 & 8 \\end{pmatrix}$", "$\\begin{pmatrix} 3 & 4 \\\\ 5 & 6 \\end{pmatrix}$"],
    answer: 0,
    explanation: "矩陣純量乘法：每個元素皆乘以 2，得 $\\begin{pmatrix} 2 & 4 \\\\ 6 & 8 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "超音速噴射客機在空中以超過音速飛行時，機頭激發的壓縮震波在三維空間中形成一個錐形包絡面（馬赫錐 Mach Cone）。當此音爆錐面與平坦地面相交截時，地面上所接收到連續劇烈爆炸聲（音爆 Boom）的幾何截線軌跡為？",
    options: ["雙曲線的一支（圓錐面被與母線相交之平行平面所截）", "圓形", "拋物線", "橢圓"],
    answer: 0,
    explanation: "圓錐體與平行於其軸線方向平面的截交線正是雙曲線。飛機航行時地面受音爆衝擊波震動的等時面在地面投影為標準雙曲線的一支。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "同底數冪次除法法則：計算 $\\frac{2^8}{2^5}$ 之結果為何？",
    options: ["8（即 $2^{8-5} = 2^3 = 8$）", "16", "4", "2"],
    answer: 0,
    explanation: "$\\frac{2^8}{2^5} = 2^{8-5} = 2^3 = 8$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "二次函數 $y = 2x^2 - 8x + 3$ 圖形的「對稱軸方程式」為？",
    options: ["$x = 2$", "$x = -2$", "$x = 4$", "$y = 2$"],
    answer: 0,
    explanation: "對稱軸公式 $x = -\\frac{b}{2a} = -\\frac{-8}{2(2)} = \\frac{8}{4} = 2$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，$\\angle C = 90^\\circ$，已知 $\\sin A = 3/5$，則 $\\cos A$ 之值為何？",
    options: ["4/5", "3/4", "5/3", "1/5"],
    answer: 0,
    explanation: "平方關係：$\\cos A = \\sqrt{1 - \\sin^2 A} = \\sqrt{1 - (3/5)^2} = \\sqrt{16/25} = 4/5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 4 位學生中選出 2 位分別擔任正、副班長，共有多少種不同的選法？",
    options: ["12 種（排列數 $P^4_2 = 4 \\times 3 = 12$）", "6 種", "16 種", "8 種"],
    answer: 0,
    explanation: "職位有順序區別為排列問題：$P^4_2 = 4 \\times 3 = 12$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "袋中有 4 顆球，分別標記為 1, 2, 3, 4 號。隨機取出一球，其號碼為「大於 2」的機率為何？",
    options: ["1/2（有 3, 4 號兩種，即 2/4 = 1/2）", "3/4", "1/4", "2/3"],
    answer: 0,
    explanation: "大於 2 的球有 3, 4 兩顆。機率為 $\\frac{2}{4} = \\frac{1}{2}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在敘述統計中，數列 $2, 4, 4, 4, 5, 8, 9$ 的「眾數（Mode）」為多少？",
    options: ["4（出現次數最多，共出現 3 次）", "5", "2", "4.4"],
    answer: 0,
    explanation: "眾數即出現頻率最高的數值。4 出現了 3 次，其餘皆出現 1 次，故眾數為 4。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "底面半徑為 3、高為 5 的直圓柱體，其幾何「體積」為多少？",
    options: ["$45\\pi$（底面積乘高：$\\pi r^2 h = \\pi \\times 3^2 \\times 5 = 45\\pi$）", "$15\\pi$", "$30\\pi$", "$90\\pi$"],
    answer: 0,
    explanation: "圓柱體積公式 $V = \\pi r^2 h = \\pi (3^2)(5) = 45\\pi$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$，計算其反矩陣 $A^{-1}$ 為何？",
    options: ["$\\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & 1 \\\\ 1 & 2 \\end{pmatrix}$", "$\\begin{pmatrix} -2 & 1 \\\\ 1 & -1 \\end{pmatrix}$", "$\\begin{pmatrix} 1 & -1 \\\\ 1 & 2 \\end{pmatrix}$"],
    answer: 0,
    explanation: "$\\det(A) = 2(1) - 1(1) = 1$。反矩陣公式 $A^{-1} = \\frac{1}{1} \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ -1 & 2 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "手電筒反光杯將燈珠發出的光線反射為平行光柱向前照射，該反光杯內壁的幾何曲面形狀為？",
    options: ["旋轉拋物面（燈珠放置在拋物面焦點處）", "球面", "圓柱面", "雙曲面"],
    answer: 0,
    explanation: "拋物線光學特性保證焦點光源發出的所有光線經拋物面反射後皆平行於對稱軸射出，形成射程極遠的高聚焦光束。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算整數加減法：$-5 + 12 - 3$ 之值為何？",
    options: ["4", "-4", "10", "-10"],
    answer: 0,
    explanation: "$-5 + 12 = 7$。$7 - 3 = 4$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "直線 $y = -2x + 4$ 與 $x$ 軸的交點坐標為何？",
    options: ["(2, 0)", "(0, 4)", "(4, 0)", "(-2, 0)"],
    answer: 0,
    explanation: "與 $x$ 軸相交令 $y = 0$：$0 = -2x + 4 \\implies 2x = 4 \\implies x = 2$。交點為 $(2, 0)$。",
    difficulty: "基礎"
  }
];

batch9.forEach((q, idx) => {
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

console.log(`New Math B count after batch 9: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
