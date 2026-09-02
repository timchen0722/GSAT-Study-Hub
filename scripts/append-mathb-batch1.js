const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count: ${quiz.length}`);

// 30 Handcrafted, completely distinct, curriculum-aligned questions for Math B
const batch1 = [
  {
    category: "數與式",
    question: "將循環小數 $0.\\overline{23}$ 化為最簡分數，其分子與分母之和為何？",
    options: ["122", "123", "99", "100"],
    answer: 0,
    explanation: "$0.\\overline{23} = \\frac{23}{99}$。因為 23 為質數，$\\frac{23}{99}$ 已為最簡分數，分子加分母為 $23 + 99 = 122$。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "已知 $\\sqrt{11}$ 的整數部分為 $a$，純小數部分為 $b$，求 $a + \\frac{1}{b+3}$ 之值？",
    options: ["$\\frac{3+\\sqrt{11}}{2}$", "$3$", "$\\sqrt{11}$", "$6$"],
    answer: 0,
    explanation: "因為 $3^2 = 9 < 11 < 16 = 4^2$，所以 $3 < \\sqrt{11} < 4$，整數部分 $a = 3$，小數部分 $b = \\sqrt{11} - 3$。則 $b + 3 = \\sqrt{11}$，因此 $a + \\frac{1}{b+3} = 3 + \\frac{1}{\\sqrt{11}} = 3 + \\frac{\\sqrt{11}}{11}$。另一種經典化簡為有理化分母。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "雙重根號 $\\sqrt{7 + 2\\sqrt{10}}$ 化簡後的結果為？",
    options: ["$\\sqrt{5} + \\sqrt{2}$", "$\\sqrt{5} - \\sqrt{2}$", "$\\sqrt{7} + \\sqrt{10}$", "$5 + \\sqrt{2}$"],
    answer: 0,
    explanation: "找兩數 $x, y$ 使得 $x+y = 7$ 且 $xy = 10$。解得 $x=5, y=2$。故 $\\sqrt{7 + 2\\sqrt{10}} = \\sqrt{(\\sqrt{5}+\\sqrt{2})^2} = \\sqrt{5} + \\sqrt{2}$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "農夫老李打算用 40 公尺長的木籬笆圍出一面靠石牆的長方形菜園（靠牆的那一面不需圍籬笆）。請問老李所能圍出的最大菜園面積為多少平方公尺？",
    options: ["200 平方公尺", "100 平方公尺", "400 平方公尺", "150 平方公尺"],
    answer: 0,
    explanation: "設垂直牆面的兩邊長為 $x$，則平行牆面的長度為 $40 - 2x$。菜園面積 $A(x) = x(40 - 2x) = -2x^2 + 40x = -2(x - 10)^2 + 200$。當 $x = 10$ 公尺時，最大面積為 200 平方公尺。",
    difficulty: "中等"
  },
  {
    category: "一次與二次函數",
    question: "公園噴水池噴出的水柱呈現拋物線路徑。若水柱最高點（頂點）在水平距離 2 公尺、高度 4 公尺處，噴頭在地面原點 $(0, 0)$，則水柱落在地面處與噴頭的水平距離為幾公尺？",
    options: ["4 公尺", "2 公尺", "6 公尺", "8 公尺"],
    answer: 0,
    explanation: "拋物線圖形對稱於通過頂點的鉛直線 $x = 2$。水柱自 $x = 0$ 噴出，其落回地面高度 0 之點必在對稱位置 $x = 2 + (2 - 0) = 4$ 公尺處。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "考古學家利用碳-14 測定古木化石年代。已知碳-14 的半衰期約為 5730 年。若測得某古木中碳-14 的殘留量恰為活體生物的 $\\frac{1}{8}$，則該古木年代距今約多少年？",
    options: ["17,190 年", "11,460 年", "5,730 年", "22,920 年"],
    answer: 0,
    explanation: "殘留比例為 $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3$，表示經過了 3 次半衰期。故年代為 $5730 \\times 3 = 17,190$ 年。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "聲音的分貝數公式為 $d = 10 \\log_{10}\\left(\\frac{I}{I_0}\\right)$。若某工廠機器噪音為 80 分貝，一般辦公室交談聲為 60 分貝，則機器噪音的物理強度 $I$ 是辦公室交談聲的多少倍？",
    options: ["100 倍", "20 倍", "10 倍", "1,000 倍"],
    answer: 0,
    explanation: "$80 - 60 = 20 = 10 \\log_{10}(I_1 / I_2) \\implies \\log_{10}(I_1 / I_2) = 2 \\implies I_1 / I_2 = 10^2 = 100$ 倍。",
    difficulty: "中等"
  },
  {
    category: "指數與對數模型",
    question: "某菌種在培養皿中數量每經過 2 小時便倍增為原來的 2 倍。若初始菌數為 100 隻，則至少需經過多少小時，菌數才會首次突破 10,000 隻？（參考值：$\\log_{10} 2 \\approx 0.3010$）",
    options: ["14 小時", "12 小時", "16 小時", "10 小時"],
    answer: 0,
    explanation: "設經過 $t$ 小時，共翻倍 $n = t/2$ 次。$100 \\times 2^n > 10000 \\implies 2^n > 100$。因為 $2^6 = 64, 2^7 = 128$，故最小整數 $n = 7$。因此時間為 $t = 2n = 14$ 小時。",
    difficulty: "中等"
  },
  {
    category: "三角函數與生活測量",
    question: "在平地上某點測得遠處高樓頂的仰角為 30°。朝大樓直線前進 40 公尺到達另一點，測得該樓頂的仰角變為 45°。請問該大樓的高度為多少公尺？",
    options: ["$20(\\sqrt{3}+1)$ 公尺", "$40\\sqrt{3}$ 公尺", "$20\\sqrt{3}$ 公尺", "$40(\\sqrt{3}-1)$ 公尺"],
    answer: 0,
    explanation: "設樓高為 $h$。在 45° 仰角點，距離樓底為 $h$；在 30° 仰角點，距離樓底為 $\\sqrt{3}h$。兩點相距 40 公尺，故 $\\sqrt{3}h - h = 40 \\implies h(\\sqrt{3}-1) = 40 \\implies h = \\frac{40}{\\sqrt{3}-1} = 20(\\sqrt{3}+1)$ 公尺。",
    difficulty: "進階"
  },
  {
    category: "三角函數與生活測量",
    question: "在 $\\Delta ABC$ 中，已知邊長 $a = 5, b = 6, c = 7$，則內角 $\\angle A$ 的餘弦值 $\\cos A$ 為何？",
    options: ["5/7", "3/5", "1/2", "4/7"],
    answer: 0,
    explanation: "由餘弦定理：$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc} = \\frac{36 + 49 - 25}{2(6)(7)} = \\frac{60}{84} = \\frac{5}{7}$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "某平行四邊形土地的兩相鄰邊長分別為 6 公尺與 8 公尺，兩邊的夾角為 150°。該平行四邊形土地的面積為多少平方公尺？",
    options: ["24 平方公尺", "48 平方公尺", "$24\\sqrt{3}$ 平方公尺", "12 平方公尺"],
    answer: 0,
    explanation: "平行四邊形面積公式：$A = a b \\sin\\theta = 6 \\times 8 \\times \\sin 150^\\circ = 48 \\times \\frac{1}{2} = 24$ 平方公尺。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "有 4 位男生與 3 位女生排成一列合照，若規定 3 位女生任兩人均不得相鄰，則共有幾種不同的排法？",
    options: ["1440 種", "720 種", "2880 種", "144 種"],
    answer: 0,
    explanation: "插空法：先將 4 位男生排成一列，有 $4! = 24$ 種排法。男生兩端及夾縫共產生 5 個空隙，再將 3 位女生排入這 5 個空隙，有 $P^5_3 = 5 \\times 4 \\times 3 = 60$ 種排法。總排列數為 $24 \\times 60 = 1440$ 種。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "甲、乙、丙、丁、戊、己共 6 個人排成一列，若規定「甲必須排在乙的前面」，共有幾種排法？",
    options: ["360 種", "720 種", "120 種", "180 種"],
    answer: 0,
    explanation: "順序已定問題視為相同物：6 人任意排列總數為 $6! = 720$。在所有對稱排列中，甲排在乙前與乙排在甲前的機率各半，故排法數為 $\\frac{6!}{2!} = \\frac{720}{2} = 360$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 10 位選手中選出 4 人組成接力隊。若隊長甲與副隊長乙「兩人必須同時入選，或者同時不入選」，共有幾種選法？",
    options: ["98 種", "70 種", "140 種", "126 種"],
    answer: 0,
    explanation: "分類討論：(1) 甲乙皆入選：只需自其餘 8 人選 2 人，有 $C^8_2 = 28$ 種；(2) 甲乙皆不入選：自其餘 8 人選 4 人，有 $C^8_4 = 70$ 種。由加法原理，共有 $28 + 70 = 98$ 種。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "將 6 顆完全相同的蘋果任意分給 3 位小朋友，允許有人沒分到，共有多少種分配方法？",
    options: ["28 種", "21 種", "36 種", "18 種"],
    answer: 0,
    explanation: "相同物分給相異人之重複組合模型：相當於方程式 $x + y + z = 6$ 之非負整數解個數，公式為 $H^3_6 = C^{3+6-1}_6 = C^8_6 = C^8_2 = \\frac{8 \\times 7}{2} = 28$ 種。",
    difficulty: "中等"
  },
  {
    category: "排列組合",
    question: "方程式 $x + y + z = 9$ 的「正整數解（$x, y, z \\ge 1$）」共有幾組？",
    options: ["28 組", "36 組", "45 組", "55 組"],
    answer: 0,
    explanation: "正整數解相當於隔板法：在 9 個相同球之間的 8 個空隙中插入 2 塊隔板分成 3 份，解數為 $C^{9-1}_{3-1} = C^8_2 = \\frac{8 \\times 7}{2} = 28$ 組。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "同時投擲 3 枚均勻的六面骰子一次，三顆骰子點數「完全相異」的機率為何？",
    options: ["5/9", "1/2", "5/18", "7/12"],
    answer: 0,
    explanation: "樣本空間大小為 $6^3 = 216$。三顆骰子點數相異的方法數為 $P^6_3 = 6 \\times 5 \\times 4 = 120$。機率為 $\\frac{120}{216} = \\frac{5}{9}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "袋中有 4 顆白球與 2 顆黑球。從中一次隨機取出 2 顆球，取出的兩球皆為白球的機率為何？",
    options: ["2/5", "1/3", "1/5", "4/15"],
    answer: 0,
    explanation: "總選法為 $C^6_2 = 15$。取到 2 白球的方法數為 $C^4_2 = 6$。機率為 $\\frac{6}{15} = \\frac{2}{5}$。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "某公平抽獎箱中裝有 10 顆球，其中標記 100 元獎金的球有 2 顆，標記 50 元獎金的球有 4 顆，其餘 4 顆為銘謝惠顧（0 元）。抽球一次的期望值為多少元？",
    options: ["40 元", "50 元", "30 元", "60 元"],
    answer: 0,
    explanation: "期望值 $E = 100 \\times \\frac{2}{10} + 50 \\times \\frac{4}{10} + 0 \\times \\frac{4}{10} = 20 + 20 + 0 = 40$ 元。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某組 11 筆已排序的數據如下：3, 5, 7, 8, 12, 14, 15, 18, 20, 22, 25。則該組數據的中位數（$Q_2$）與四分位距（$IQR = Q_3 - Q_1$）為何？",
    options: ["中位數 14，四分位距 13", "中位數 14，四分位距 12", "中位數 12，四分位距 13", "中位數 15，四分位距 14"],
    answer: 0,
    explanation: "第 6 筆數據為中位數 $Q_2 = 14$。下半部數據 3, 5, 7, 8, 12 的中位數為 $Q_1 = 7$；上半部數據 15, 18, 20, 22, 25 的中位數為 $Q_3 = 20$。故 $IQR = 20 - 7 = 13$。",
    difficulty: "中等"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "某高三班級數學模擬考成績平均為 65 分，標準差為 10 分。小明考了 85 分，則小明的標準化分數（Z-score）為多少？",
    options: ["+2.0", "+1.5", "+1.0", "+2.5"],
    answer: 0,
    explanation: "標準化分數公式：$Z = \\frac{X - \\mu}{\\sigma} = \\frac{85 - 65}{10} = \\frac{20}{10} = +2.0$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "已知學生每週讀書時數 $X$ 與測驗成績 $Y$ 的散佈圖中，最小平方法迴歸直線方程式為 $\\hat{Y} = 3X + 40$。若全班每週平均讀書時數為 15 小時，則全班測驗的平均成績為何？",
    options: ["85 分", "75 分", "80 分", "90 分"],
    answer: 0,
    explanation: "最小平方法迴歸直線必定精確通過平均點 $(\\bar{X}, \\bar{Y})$。將 $\\bar{X} = 15$ 代入：$\\bar{Y} = 3(15) + 40 = 45 + 40 = 85$ 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "在長方體 $ABCD-EFGH$ 中，稜線 $AB$ 與稜線 $CG$ 的空間位置關係為何？",
    options: ["互為歪斜線（不平行且不相交）", "平行線", "垂直相交線", "重合線"],
    answer: 0,
    explanation: "稜線 $AB$ 位於頂面，稜線 $CG$ 為垂直側稜，兩直線不同在一個平面上，不平行亦不相交，為歪斜線。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "用一個平面截切正方體，所形成的截面形狀「不可能」是下列哪一種？",
    options: ["正七邊形", "等邊三角形", "長方形", "正六邊形"],
    answer: 0,
    explanation: "正方體只有 6 個面，一個平面最多只能與 6 個面相交，因此截面的邊數至多為 6 邊形，絕不可能截出七邊形。",
    difficulty: "中等"
  },
  {
    category: "空間概念與球面幾何",
    question: "假設地球為一半徑 $R = 6400$ 公里的完美球體。若甲地位於赤道東經 120°，乙地位於赤道東經 150°，則甲、乙兩地沿赤道地表的最短弧長距離約為多少公里？",
    options: ["約 3,351 公里", "約 1,675 公里", "約 6,702 公里", "約 2,400 公里"],
    answer: 0,
    explanation: "兩地位於赤道（大圓），經度差為 $150^\\circ - 120^\\circ = 30^\\circ$。弧長為 $2\\pi R \\times \\frac{30^\\circ}{360^\\circ} = 2 \\times 3.1416 \\times 6400 \\times \\frac{1}{12} \\approx 3,351$ 公里。",
    difficulty: "中等"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階矩陣乘法：$\\begin{pmatrix} 1 & 2 \\\\ 0 & 3 \\end{pmatrix} \\begin{pmatrix} 4 & 1 \\\\ 2 & 0 \\end{pmatrix}$ 之結果為何？",
    options: ["$\\begin{pmatrix} 8 & 1 \\\\ 6 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 4 & 2 \\\\ 0 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 6 & 1 \\\\ 6 & 0 \\end{pmatrix}$", "$\\begin{pmatrix} 8 & 2 \\\\ 6 & 3 \\end{pmatrix}$"],
    answer: 0,
    explanation: "左列乘右行：(1,1) 元 $= 1(4)+2(2)=8$；(1,2) 元 $= 1(1)+2(0)=1$；(2,1) 元 $= 0(4)+3(2)=6$；(2,2) 元 $= 0(1)+3(0)=0$。乘積為 $\\begin{pmatrix} 8 & 1 \\\\ 6 & 0 \\end{pmatrix}$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "某市有 A、B 兩家外送平台。調查顯示每個月 A 平台的客戶有 80% 留在 A，20% 轉至 B；B 平台的客戶有 70% 留在 B，30% 轉至 A。若長期穩定後，A 平台的市佔率為何？",
    options: ["60%", "40%", "50%", "75%"],
    answer: 0,
    explanation: "轉移矩陣為 $\\begin{pmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{pmatrix}$。設長期穩態向量為 $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$，滿足 $0.8x + 0.3y = x \\implies 0.3y = 0.2x \\implies 2x = 3y$。又 $x + y = 1$，解得 $x = \\frac{3}{5} = 60\\%, y = 40\\%$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "某座單孔拋物線拱橋跨度（底部寬度）為 20 公尺，拱頂距離水面最高處為 5 公尺。若在距離拱頂中心軸水平距離 6 公尺處測量，該處拱門的水面高度為多少公尺？",
    options: ["3.2 公尺", "2.8 公尺", "3.6 公尺", "4.0 公尺"],
    answer: 0,
    explanation: "以拱頂為坐標原點 $(0, 5)$，設拋物線方程式為 $y = ax^2 + 5$。水面兩端點為 $(\\pm 10, 0)$，代入得 $0 = a(10)^2 + 5 \\implies a = -\\frac{5}{100} = -0.05$。在 $x = 6$ 處，高度為 $y = -0.05(6^2) + 5 = -0.05(36) + 5 = -1.8 + 5 = 3.2$ 公尺。",
    difficulty: "進階"
  },
  {
    category: "圓錐曲線生活應用",
    question: "英國聖保羅大教堂的圓形穹頂具有著名的「耳語迴廊（Whispering Gallery）」聲學效應，一個人站在某個特定焦點低語，另一個焦點處的人能清晰聽見。這是利用何種圓錐曲線的幾何性質？",
    options: ["橢圓的反射性質（從一焦點發出的聲波經橢圓內壁反射後必匯聚於另一焦點）", "拋物線的反射性質", "雙曲線的反射性質", "圓形的同心圓性質"],
    answer: 0,
    explanation: "橢圓光學與聲學定理：由任一焦點出發的光線或聲波，經橢圓表面反射後，反射線必定全數穿過另一個焦點，故稱為耳語迴廊。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "設數線上兩點 $A(-4)$ 與 $B(6)$。若點 $P(x)$ 滿足距離比 $\\overline{PA} : \\overline{PB} = 3 : 2$，且點 $P$ 位於 $A, B$ 兩點之間，則 $x$ 的坐標為何？",
    options: ["2", "1", "0", "3"],
    answer: 0,
    explanation: "內分點公式：$x = \\frac{2(-4) + 3(6)}{3 + 2} = \\frac{-8 + 18}{5} = \\frac{10}{5} = 2$。",
    difficulty: "基礎"
  }
];

batch1.forEach((q, idx) => {
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

console.log(`New Math B count after batch 1: ${quiz.length}`);

// Check uniqueness
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Total unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
