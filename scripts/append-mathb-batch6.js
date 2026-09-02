const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 6: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch6 = [
  {
    category: "數與式",
    question: "在數論與算術中，求兩正整數 168 與 120 的「最大公因數（GCD）」最有效率的方法是輾轉相除法。計算得其最大公因數為多少？",
    options: ["24", "12", "6", "48"],
    answer: 0,
    explanation: "輾轉相除法：$168 = 120 \\times 1 + 48$；$120 = 48 \\times 2 + 24$；$48 = 24 \\times 2 + 0$。最後不為 0 的餘數為 24，故 $\\gcd(168, 120) = 24$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "有理化分母：計算 $\\frac{6}{\\sqrt{7} - 1}$ 之結果為何？",
    options: ["$\\sqrt{7} + 1$", "$\\sqrt{7} - 1$", "$6(\\sqrt{7} + 1)$", "$\\frac{\\sqrt{7} + 1}{6}$"],
    answer: 0,
    explanation: "分子分母同乘以 $(\\sqrt{7} + 1)$：$\\frac{6(\\sqrt{7} + 1)}{(\\sqrt{7})^2 - 1^2} = \\frac{6(\\sqrt{7} + 1)}{7 - 1} = \\frac{6(\\sqrt{7} + 1)}{6} = \\sqrt{7} + 1$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "將拋物線 $y = 2x^2$ 的圖形向右平移 3 個單位，再向上平移 4 個單位後，所得新拋物線的二次函數方程式為？",
    options: ["$y = 2(x - 3)^2 + 4$", "$y = 2(x + 3)^2 + 4$", "$y = 2(x - 3)^2 - 4$", "$y = 2(x + 3)^2 - 4$"],
    answer: 0,
    explanation: "函數平移法則「左加右減，上加下減」：向右平移 3 單位以 $x - 3$ 取代 $x$；向上平移 4 單位在常數項加 4。新方程式為 $y = 2(x - 3)^2 + 4$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "某工廠生產甲、乙兩種商品，其產量 $x, y \\ge 0$ 受原料限制滿足不等式 $x + 2y \\le 10$。若每件甲商品利潤 3 萬元、乙商品利潤 4 萬元，目標利潤函數為 $P = 3x + 4y$。在限制條件下，工廠所能獲得的最大利潤為多少萬元？",
    options: ["30 萬元（當 $x = 10, y = 0$ 時）", "20 萬元", "25 萬元", "35 萬元"],
    answer: 0,
    explanation: "可行解區域為由 $(0, 0), (10, 0), (0, 5)$ 所圍成的三角形區域。檢驗各頂點利潤：$P(0, 0) = 0$；$P(0, 5) = 4(5) = 20$；$P(10, 0) = 3(10) = 30$ 萬元。最大利潤為 30 萬元。",
    difficulty: "中等"
  },
  {
    category: "指數與對數模型",
    question: "小華在銀行存入本金 100,000 元，年利率為 10%，每年複利計息一次。經過 3 年後，小華可領回的本利和為多少元？",
    options: ["133,100 元", "130,000 元", "121,000 元", "140,000 元"],
    answer: 0,
    explanation: "複利本利和公式：$S = P(1 + r)^n = 100000(1 + 0.10)^3 = 100000(1.10^3) = 100000 \\times 1.331 = 133,100$ 元（單利則為 130,000 元）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算 $\\log_5 125 + \\log_3 81$ 之值為何？",
    options: ["7", "12", "15", "8"],
    answer: 0,
    explanation: "$\\log_5 125 = \\log_5(5^3) = 3$；$\\log_3 81 = \\log_3(3^4) = 4$。總和為 $3 + 4 = 7$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角坐標系中，通過原點且傾斜角為 $60^\\circ$ 的直線，其直線斜率 $m$ 之值為何？",
    options: ["$\\sqrt{3}$", "$1/\\sqrt{3}$", "1", "$1/2$"],
    answer: 0,
    explanation: "直線斜率與傾斜角 $\\theta$ 的關係為 $m = \\tan\\theta$。當 $\\theta = 60^\\circ$ 時，斜率 $m = \\tan 60^\\circ = \\sqrt{3}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "小明在平地測量一座高塔，測得塔頂仰角為 $30^\\circ$。若小明朝向高塔水平直行前進 40 公尺後，測得塔頂仰角變為 $60^\\circ$。請問該高塔的垂直高度為多少公尺？",
    options: ["$20\\sqrt{3}$ 公尺", "20 公尺", "$40\\sqrt{3}$ 公尺", "30 公尺"],
    answer: 0,
    explanation: "設塔高為 $h$。第一次距離塔底為 $\\frac{h}{\\tan 30^\\circ} = \\sqrt{3}h$；第二次距離為 $\\frac{h}{\\tan 60^\\circ} = \\frac{h}{\\sqrt{3}}$。兩者差距：$\\sqrt{3}h - \\frac{h}{\\sqrt{3}} = \\frac{2h}{\\sqrt{3}} = 40 \\implies 2h = 40\\sqrt{3} \\implies h = 20\\sqrt{3}$ 公尺。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "在 $4 \\times 3$ 的方格棋盤街區中，某人欲從左下角頂點 $A$ 沿著街道路線行走至右上角頂點 $B$。若只能向右或向上走，共有多少種不同的「捷徑（最短路徑）」走法？",
    options: ["35 種", "12 種", "210 種", "70 種"],
    answer: 0,
    explanation: "從 $A$ 到 $B$ 共需向右走 4 步、向上走 3 步，共計 7 步。捷徑走法數相當於自 7 步中選 3 步向上的組合數：$C^7_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "某份試卷共有 10 道試題，考生需從中選答 7 題。若試卷規定「前 3 題為必答題」，請問該考生共有多少種選題搭配方式？",
    options: ["35 種", "120 種", "210 種", "21 種"],
    answer: 0,
    explanation: "前 3 題必答，因此考生只需從剩下的 $10 - 3 = 7$ 題中，選答剩下的 $7 - 3 = 4$ 題。選題方法數為 $C^7_4 = C^7_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ 種。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "著名電視猜獎「三門問題（蒙提霍爾問題，Monty Hall Problem）」：三扇門後有 1 輛名車與 2 隻山羊。參賽者選定一門後，知曉門後秘密的主持人打開另一扇有山羊的門，並詢問參賽者是否要「換選剩下的另一扇門」。參賽者若「決定換門」，贏得名車的獲勝機率將提升為？",
    options: ["2/3（不換門獲勝機率為 1/3，換門使勝率倍增至 2/3）", "1/2", "1/3", "3/4"],
    answer: 0,
    explanation: "最初選擇選中名車機率僅 1/3（此時換門必輸）；最初選中山羊機率高達 2/3（主持人排除另一隻羊後，換門必定贏得名車）。因此換門獲勝機率嚴格為 2/3。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "保險公司精算某一年期定期意外險：每位投保人發生理賠事故的機率為 0.002（千分之二），若發生事故保險公司定額賠付保額 1,000,000 元。若不計營業利潤與行政成本，該保單每人的「純保費（理賠支出期望值）」應定價為多少元？",
    options: ["2,000 元", "1,000 元", "5,000 元", "200 元"],
    answer: 0,
    explanation: "理賠支出期望值 $E = 1000000 \\times 0.002 = 2,000$ 元。精算上純保費等於損失期望值，故純保費為 2,000 元。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若將某班全體學生的數學成績 $X$ 與英文成績 $Y$，利用公式 $X' = 2X + 10$ 及 $Y' = -3Y + 5$ 進行線性調整。已知原本兩科成績的線性相關係數為 $r = 0.6$，則調整後兩新變數 $X'$ 與 $Y'$ 的相關係數 $r'$ 為何？",
    options: ["-0.6（因一係數為正、另一係數為負，相關係數方向反轉）", "0.6", "-1.2", "0.3"],
    answer: 0,
    explanation: "相關係數性質：若 $X' = aX + b, Y' = cY + d$，新相關係數為 $r' = \\frac{ac}{|ac|} r$。因為 $a = 2 > 0$ 且 $c = -3 < 0$，乘積 $ac = -6 < 0$，故相關係數變號為 $-0.6$。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某工廠測量兩條生產線零件長度的變異程度。甲產線零件平均長度 10 cm，標準差 1 cm；乙產線零件平均長度 100 cm，標準差 5 cm。利用「變異係數（$CV = \\frac{\\sigma}{\\mu}$）」客觀評估，哪一條產線的相對離散程度較小、品質較為穩定？",
    options: ["乙產線較穩定（乙 $CV = 5/100 = 0.05$，小於甲 $CV = 1/10 = 0.10$）", "甲產線較穩定", "兩產線品質穩定度完全相同", "無法比較"],
    answer: 0,
    explanation: "當平均數差異巨大時，不能直接比較標準差絕對值，應採用無量綱的變異係數。乙產線 $CV = 5\\%$，小於甲產線的 $10\\%$，顯示乙產線相對波動更小、品質更均一。",
    difficulty: "中等"
  },
  {
    category: "空間概念與球面幾何",
    question: "在空間幾何中，兩條相異直線如果「既不平行，也不相交（不在同一個平面上）」，這兩條直線在空間中的幾何相對位置關係稱為？",
    options: ["歪斜線（Skew lines）", "平行線", "垂直線", "重合線"],
    answer: 0,
    explanation: "立體空間中相異兩直線的位置關係有三種：相交於一點（共面）、平行（共面）、歪斜（不共面、無交點且不平行）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "航海導航中著名的「麥卡托地圖投影（Mercator Projection）」，其最核心的地圖學優點與缺點分別為？",
    options: ["優點是「等角投影」，圖上任意兩點連線為等角恆向線；缺點是高緯度地區（如格陵蘭島）面積被極度誇大變形", "優點是面積完全不變形", "缺點是無法繪製赤道地區", "完全沒有任何形變"],
    answer: 0,
    explanation: "麥卡托圓柱投影保持方向角度精確（等角），航海員沿直線航行即可保持固定羅盤方位；但緯線間距隨緯度增高而劇烈放大，使格陵蘭島地圖面積看似與整個非洲相當（實際非洲面積為格陵蘭 14 倍）。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在空間直角坐標系中，點 $P(3, 4, 5)$ 在「$z$ 軸」上的正射影（垂足）坐標為何？",
    options: ["(0, 0, 5)", "(3, 4, 0)", "(0, 4, 5)", "(3, 0, 0)"],
    answer: 0,
    explanation: "投影至坐標軸時，其餘非該軸之坐標分量皆為 0。點 $(x, y, z)$ 投影至 $z$ 軸之坐標即為 $(0, 0, z) = (0, 0, 5)$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "若方陣 $A$ 為任意二階方陣，且 $I$ 為二階單位矩陣。依據矩陣冪次定義，任何方陣的「零次方（$A^0$）」恆規定等於？",
    options: ["$I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$（單位矩陣）", "零矩陣 $O$", "純量 1", "方陣 $A$ 本身"],
    answer: 0,
    explanation: "在線性代數矩陣代數環中，類似於實數非零數的零次方等於乘法單位元素 1，任何非奇異方陣的零次方定義為乘法單位方陣 $A^0 = I$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "密碼學中古典「希爾密碼（Hill Cipher）」利用二階可逆矩陣 $K = \\begin{pmatrix} 3 & 2 \\\\ 5 & 7 \\end{pmatrix}$ 作為加密金鑰。若欲將密文解密還原為明文，解密金鑰必須使用矩陣 $K$ 的？",
    options: ["反矩陣 $K^{-1}$（乘以加密密文向量還原明文向量）", "轉置矩陣 $K^T$", "伴隨矩陣", "負矩陣 $-K$"],
    answer: 0,
    explanation: "加密過程為 $C = K P$。兩邊同乘以反矩陣 $K^{-1}$：$K^{-1} C = K^{-1} K P = I P = P$，故解密金鑰即為加密矩陣之反矩陣（模運算下求逆）。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "太陽灶利用反射鏡面將太陽平行光線匯聚於一點產生極高溫以煮水烹飪。反射鏡面應製作成何種曲面幾何形狀，且烹飪鍋具應放置在何處？",
    options: ["旋轉拋物面，且鍋具應放置在拋物面的「焦點」處", "球面，放置在球心", "平面鏡", "雙曲面"],
    answer: 0,
    explanation: "拋物線光學性質：平行於對稱軸射入的平行射線，經拋物面反射後必定全數匯聚於其唯一的焦點上，使焦點處獲得最高能量密度的光熱焦點。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算整數多項式乘法 $(2x + 1)(x - 3)$ 展開之結果為何？",
    options: ["$2x^2 - 5x - 3$", "$2x^2 + 5x - 3$", "$2x^2 - 6x - 3$", "$2x^2 - 5x + 3$"],
    answer: 0,
    explanation: "展開十字交叉：$(2x)(x) + 2x(-3) + 1(x) + 1(-3) = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "直線方程式 $y = 3x - 6$ 的斜率與 $y$ 截距分別為何？",
    options: ["斜率為 3，$y$ 截距為 -6", "斜率為 -6，$y$ 截距為 3", "斜率為 3，$y$ 截距為 2", "斜率為 1/3，$y$ 截距為 -6"],
    answer: 0,
    explanation: "斜截式 $y = mx + b$。斜率 $m = 3$，$y$ 軸截距（令 $x=0$ 得 $y$）為 $b = -6$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由 5 位男同學與 5 位女同學排成一列，若要求「男女同學必須相間隔排列（男男女女交替）」，共有多少種排法？",
    options: ["28,800 種（即 $2 \\times 5! \\times 5!$）", "14,400 種", "120 種", "3,600 種"],
    answer: 0,
    explanation: "相間排列形式有兩種：「男女男女...」或「女男女男...」。每種形式男女各有 $5!$ 種全排列。總排法為 $2 \\times 5! \\times 5! = 2 \\times 120 \\times 120 = 28,800$ 種。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "從一副洗好的 52 張撲克牌中隨機抽取 1 張，抽中「黑桃（Spade）」的機率為何？",
    options: ["1/4", "1/13", "1/2", "1/52"],
    answer: 0,
    explanation: "一副牌有黑桃、紅心、方塊、梅花共 4 種花色，每種花色各 13 張。抽中黑桃的機率為 $\\frac{13}{52} = \\frac{1}{4}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某學生 4 次段考成績分別為：70, 80, 85, 95。這 4 次成績的「全距（Range）」為多少分？",
    options: ["25 分", "20 分", "82.5 分", "15 分"],
    answer: 0,
    explanation: "全距為最大值減最小值：$\\text{Range} = 95 - 70 = 25$ 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "長方體相對的兩個面在空間中的幾何幾何位置關係必為？",
    options: ["互相平行且全等", "互相垂直", "相交於一條線", "歪斜"],
    answer: 0,
    explanation: "長方體共有 3 對相對矩形面，每一對相對面皆完全平行且幾何尺寸全等。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知二階方陣 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$，則方陣 $A$ 與任何同階方陣 $B$ 相乘，結果必為？",
    options: ["$B$（因為 $A$ 為單位矩陣 $I$，$IB = BI = B$）", "$A$", "零矩陣", "$2B$"],
    answer: 0,
    explanation: "主對角線皆為 1、其餘皆為 0 的矩陣為單位矩陣 $I$，相當於矩陣乘法中的乘法單位元素 1，任何矩陣乘單位矩陣皆等於其本身。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角坐標系中，點 $P(1, 1)$ 與原點 $O$ 的連線，與正 $x$ 軸所夾的銳角角度為何？",
    options: ["45°", "30°", "60°", "90°"],
    answer: 0,
    explanation: "$\\tan\\theta = \\frac{y}{x} = \\frac{1}{1} = 1$。銳角 $\\theta = 45^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "若行星繞太陽運行的橢圓軌道半長軸為 $a$、半短軸為 $b$，則該行星公轉橢圓軌道所包圍的封閉平面「面積」計算公式為？",
    options: ["$\\pi a b$", "$\\pi a^2$", "$2\\pi a b$", "$\\pi(a+b)$"],
    answer: 0,
    explanation: "橢圓面積公式為 $A = \\pi a b$（可由單位圓沿橫縱軸分別放大 $a$ 倍與 $b$ 倍求得：$\\pi \\times a \\times b = \\pi a b$）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "計算 $(\\sqrt{2})^6$ 之值為何？",
    options: ["8", "4", "16", "64"],
    answer: 0,
    explanation: "$(\\sqrt{2})^6 = (2^{1/2})^6 = 2^{6/2} = 2^3 = 8$。",
    difficulty: "基礎"
  }
];

batch6.forEach((q, idx) => {
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

console.log(`New Math B count after batch 6: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
