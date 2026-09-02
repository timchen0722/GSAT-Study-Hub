const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'math-b-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Math B count before batch 8: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Math B
const batch8 = [
  {
    category: "數與式",
    question: "在比例尺為 $1 : 25,000$ 的臺灣經建版地形圖上，若測得某座高山湖泊在圖上的投影面積為 4 平方公分。請問該湖泊在地面上的「實際真實面積」相當於多少平方公尺？",
    options: ["250,000 平方公尺（即 0.25 平方公里，25 公頃）", "100,000 平方公尺", "1,000,000 平方公尺", "50,000 平方公尺"],
    answer: 0,
    explanation: "面積比為長度比的平方：實際面積 $=$ 圖上面積 $\\times 25000^2 = 4 \\times (2.5 \\times 10^4)^2 = 4 \\times 6.25 \\times 10^8 = 2.5 \\times 10^9$ 平方公分。換算成平方公尺（除以 $10^4$）：$2.5 \\times 10^9 \\div 10^4 = 250,000$ 平方公尺。",
    difficulty: "中等"
  },
  {
    category: "數與式",
    question: "計算階乘乘積 $25! = 1 \\times 2 \\times 3 \\times \\dots \\times 25$。當 $25!$ 展開計算完畢寫成十進位整數時，其最末尾連續出現的「0」共有幾個？",
    options: ["6 個 0（質因數 5 的個數為 $\\lfloor 25/5 \\rfloor + \\lfloor 25/25 \\rfloor = 5 + 1 = 6$）", "5 個", "4 個", "7 個"],
    answer: 0,
    explanation: "末尾 0 的個數由質因數分解中 $10 = 2 \\times 5$ 的個數決定（2 的數量遠多於 5，取決於 5 的個數）。在 1 到 25 中，5 的倍數有 5 個（5, 10, 15, 20, 25），其中 25 含有 2 個 5。總共 $5 + 1 = 6$ 個質因數 5，故末尾有 6 個 0。",
    difficulty: "中等"
  },
  {
    category: "一次與二次函數",
    question: "某文創工廠製造紀念馬克杯，固定每月的廠房租金等固定成本為 60,000 元，每製造一個馬克杯的原料變動成本為 40 元。若每個馬克杯的市場批發售價為 100 元，該工廠每月至少需生產並售出多少個馬克杯，才能達到「損益兩平（Break-even，總收入等於總成本）」不虧本？",
    options: ["1,000 個", "600 個", "1,500 個", "800 個"],
    answer: 0,
    explanation: "總收入 $R(x) = 100x$，總成本 $C(x) = 60000 + 40x$。損益兩平：$100x = 60000 + 40x \\implies 60x = 60000 \\implies x = 1,000$ 個。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "在平面直角坐標系中，水平直線方程式 $y = 5$ 的圖形「斜率 $m$」為多少？",
    options: ["0（水平線垂直變化量為 0，斜率恆為 0）", "5", "不存在", "1"],
    answer: 0,
    explanation: "斜率公式 $m = \\frac{\\Delta y}{\\Delta x}$。水平線上任意兩點縱坐標差 $\\Delta y = 0$，故斜率恆為 0；鉛直線斜率則為未定義（不存在）。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "培養皿中的大腸桿菌在理想營養環境下，每隔 20 分鐘細胞數量就會分裂「倍增一次（倍增時間 20 分鐘）」。若初始放入 1,000 隻大腸桿菌，經過 2 小時（120 分鐘，共倍增 6 次）後，培養皿中的細菌總數將增殖為多少隻？",
    options: ["64,000 隻（$1000 \\times 2^6 = 1000 \\times 64$）", "32,000 隻", "12,000 隻", "128,000 隻"],
    answer: 0,
    explanation: "2 小時為 120 分鐘，倍增次數 $n = 120 / 20 = 6$ 次。增殖總數 $N = N_0 \\times 2^6 = 1000 \\times 64 = 64,000$ 隻。",
    difficulty: "基礎"
  },
  {
    category: "指數與對數模型",
    question: "地震學中古登堡-芮克特經驗公式指出：芮氏地震規模每增加 1 級（例如由規模 5.0 增加至規模 6.0），地震所釋放的能量將暴增為原來的約多少倍？",
    options: ["約 31.6 倍（$10^{1.5} = \\sqrt{1000} \\approx 31.6$ 倍；每差 2 級能量差 1000 倍）", "約 10 倍", "約 2 倍", "約 100 倍"],
    answer: 0,
    explanation: "能量公式 $\\log_{10} E = 4.8 + 1.5 M$。當規模增加 $\\Delta M = 1$ 時，$\\Delta \\log_{10} E = 1.5 \\implies E'/E = 10^{1.5} = 10\\sqrt{10} \\approx 31.62$ 倍。規模差 2 級能量相差 $10^3 = 1000$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在陽光照射下，垂直立於平地的一根長度為 2 公尺的旗桿，測得其在地面上的影子長度恰為 $2\\sqrt{3}$ 公尺。請問此時太陽的仰角角度為多少度？",
    options: ["30°（因為 $\\tan\\theta = \\frac{2}{2\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$）", "60°", "45°", "15°"],
    answer: 0,
    explanation: "太陽仰角 $\\theta$ 滿足正切比值：$\\tan\\theta = \\frac{\\text{桿高}}{\\text{影長}} = \\frac{2}{2\\sqrt{3}} = \\frac{1}{\\sqrt{3}}$。因此太陽仰角為 $30^\\circ$。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在 $\\Delta ABC$ 中，已知邊長 $b = 5, c = 7$，且內角 $\\angle A = 60^\\circ$。由餘弦定理計算對邊邊長 $a = \\overline{BC}$ 之值為何？",
    options: ["$\\sqrt{39}$", "$\\sqrt{74}$", "6", "8"],
    answer: 0,
    explanation: "餘弦定理：$a^2 = b^2 + c^2 - 2bc\\cos A = 5^2 + 7^2 - 2(5)(7)\\cos 60^\\circ = 25 + 49 - 70(1/2) = 74 - 35 = 39$。開平方得 $a = \\sqrt{39}$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "從 6 位男同學與 4 位女同學中，隨機選出 4 位同學組成學校競賽代表隊。若規定選出的人選中「至少必須包含 1 位女同學」，共有多少種不同的選拔方式？",
    options: ["195 種（反面扣除法：$C^{10}_4 - C^6_4 = 210 - 15 = 195$）", "210 種", "120 種", "180 種"],
    answer: 0,
    explanation: "任意選 4 人的總方法數為 $C^{10}_4 = \\frac{10 \\times 9 \\times 8 \\times 7}{4 \\times 3 \\times 2 \\times 1} = 210$ 種。完全沒有女同學（即全選男生）的選法為 $C^6_4 = 15$ 種。因此至少 1 女的方法數為 $210 - 15 = 195$ 種。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "求方程式 $x + y + z + w = 5$ 的「非負整數解（$x, y, z, w \\ge 0$）」共有多少組？",
    options: ["56 組（重複組合 $H^4_5 = C^{4+5-1}_5 = C^8_5 = 56$）", "126 組", "35 組", "70 組"],
    answer: 0,
    explanation: "非負整數解問題為重複組合：$H^n_k = H^4_5 = C^{4+5-1}_5 = C^8_5 = C^8_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$ 組。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "著名機率學「生日問題（Birthday Paradox）」指出：若一個班級或聚會中有 23 個人，在完全不考慮閏年且假設每天出生機率均等的前提下，該群人中「至少有兩個人在同一天生日」的機率約為？",
    options: ["大於 50%（約 50.7%，反直覺高機率）", "約 23/365（約 6%）", "小於 10%", "約 1%"],
    answer: 0,
    explanation: "23 個人任兩人組合共有 $C^{23}_2 = 253$ 對可能配對。反面計算 23 人生日全不同的機率為 $\\frac{365}{365} \\times \\frac{364}{365} \\times \\dots \\times \\frac{343}{365} \\approx 0.493$。因此至少有兩人同天生日的機率高達 $1 - 0.493 = 50.7\\%$。",
    difficulty: "中等"
  },
  {
    category: "古典機率與期望值",
    question: "擲兩枚公正的六面骰子，出現的點數和「等於 7」的機率為何？",
    options: ["1/6（共有 (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) 共 6 種可能，即 6/36）", "1/12", "7/36", "1/7"],
    answer: 0,
    explanation: "總樣本空間為 $6 \\times 6 = 36$。點數和為 7 的事件有 6 種，機率為 $\\frac{6}{36} = \\frac{1}{6}$（為兩骰點數和中最可能出現的數值）。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "在統計學單峰偏態分佈中，若數據分佈呈現右側拖著長長尾巴的「右偏態（正偏態，Positive Skewness，例如社會國民年所得薪資分佈）」，其平均數（Mean）、中位數（Median）與眾數（Mode）三者的數值大小順序關係通常為？",
    options: ["$\\text{平均數} > \\text{中位數} > \\text{眾數}$（平均數被少數極端高收入富豪拉高）", "$\\text{眾數} > \\text{中位數} > \\text{平均數}$", "三者完全相等", "$\\text{中位數} > \\text{平均數} > \\text{眾數}$"],
    answer: 0,
    explanation: "右偏分佈中極端大值將平均數向右拉扯最遠，眾數位於最高峰偏左，中位數居中穩定。因此常規大小為：$\\text{Mean} > \\text{Median} > \\text{Mode}$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "統計學常態分佈「68-95-99.7 經驗法則（Empirical Rule）」指出：在鐘形常態分佈 $N(\\mu, \\sigma^2)$ 下，約有多少百分比的數據資料會落在「平均數正負兩個標準差區間內（$[\\mu - 2\\sigma, \\mu + 2\\sigma]$）」？",
    options: ["約 95%（精確約 95.45%）", "約 68%", "約 99.7%", "約 50%"],
    answer: 0,
    explanation: "常態分佈對稱面積：$[\\mu - \\sigma, \\mu + \\sigma]$ 約佔 68.27%；$[\\mu - 2\\sigma, \\mu + 2\\sigma]$ 約佔 95.45%；$[\\mu - 3\\sigma, \\mu + 3\\sigma]$ 約佔 99.73%。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "正多面體「正八面體（Regular Octahedron）」由 8 個全等的正三角形拼合而成。該立體幾何圖形的「頂點數 $V$」與「稜邊數 $E$」分別為多少？",
    options: ["頂點數 $V = 6$，稜邊數 $E = 12$（滿足尤拉公式 $6 - 12 + 8 = 2$）", "頂點數 8，稜邊數 12", "頂點數 6，稜邊數 8", "頂點數 12，稜邊數 24"],
    answer: 0,
    explanation: "正八面體相當於兩個金字塔底對底拼接，上下各 1 頂點、中間赤道 4 頂點，共 $V = 6$ 頂點；稜邊赤道 4 條、上下各 4 條共 $E = 12$ 邊，滿足 $V - E + F = 6 - 12 + 8 = 2$。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "飛機自臺北飛往美國舊金山或洛杉磯時，航空公司導航地圖所選擇的最短航程飛行路徑，在平面地圖上看並非直線，而是向北彎曲掠過阿留申群島與阿拉斯加海域。這條在三維地球球面上距離最短的導航航線稱為？",
    options: ["大圓航線（Great Circle Route，通過球心的平面與球面相交所截出的大圓劣弧）", "等角恆向線", "平行緯線航線", "麥卡托直線"],
    answer: 0,
    explanation: "球面上兩點之間的最短幾何路徑恆為過該兩點及球心所形成「大圓（Great Circle）」的劣弧長度，故高緯度航線向北極偏折的大圓航線比沿緯線直飛節省大量燃油與飛行時間。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "已知方陣 $A$ 與 $B$ 為同階二階方陣，且行列式分別為 $\\det(A) = 3$ 與 $\\det(B) = 4$。由行列式乘法性質計算兩矩陣乘積的行列式值 $\\det(AB)$ 為何？",
    options: ["12（因 $\\det(AB) = \\det(A) \\times \\det(B) = 3 \\times 4 = 12$）", "7", "1", "24"],
    answer: 0,
    explanation: "矩陣乘積行列式定理：對任何方陣皆滿足 $\\det(AB) = \\det(A) \\det(B) = 3 \\times 4 = 12$。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "某地區長期天氣模擬為馬可夫鏈：若今天晴天，明天有 80% 機率晴天、20% 機率雨天；若今天雨天，明天有 40% 機率晴天、60% 機率雨天。轉移矩陣為 $P = \\begin{pmatrix} 0.8 & 0.4 \\\\ 0.2 & 0.6 \\end{pmatrix}$。求解該地區長期穩態（Stationary State）的晴天機率為何？",
    options: ["2/3（約 66.7%）", "1/2", "3/4", "4/5"],
    answer: 0,
    explanation: "設穩態向量 $X = \\begin{pmatrix} x \\\\ 1-x \\end{pmatrix}$。方程式 $P X = X \\implies 0.8x + 0.4(1-x) = x \\implies 0.8x + 0.4 - 0.4x = x \\implies 0.4x + 0.4 = x \\implies 0.6x = 0.4 \\implies x = 4/6 = 2/3$。",
    difficulty: "中等"
  },
  {
    category: "圓錐曲線生活應用",
    question: "火力發電廠與核能電廠常見高聳巨大的「冷卻塔（Cooling Tower）」，其腰部向內收窄、頂部與底部擴展的圓形建築外觀，在幾何學上屬於何種旋轉曲面？",
    options: ["單葉雙曲面（旋轉雙曲面，具有極高結構抗風強度且能產生煙囪自然通風對流效應）", "旋轉拋物面", "旋轉橢球面", "圓柱面"],
    answer: 0,
    explanation: "雙曲面冷卻塔是由雙曲線繞對稱軸旋轉而成的直紋曲面，幾何結構剛性極強抗風震且施工方便，內部形成喉部收縮噴嘴效應，大幅強化自然抽力加速冷卻蒸發散熱。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "因式分解提公因式：代數式 $3x(a + b) - 2y(a + b)$ 化簡之結果為何？",
    options: ["$(a + b)(3x - 2y)$", "$(a - b)(3x + 2y)$", "$(a + b)(3x + 2y)$", "$6xy(a + b)$"],
    answer: 0,
    explanation: "提出共同公因式 $(a + b)$：$(a + b)(3x - 2y)$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "已知二次函數 $y = -x^2 + 4x + 1$。求該二次函數的最大值為何？",
    options: ["5", "1", "4", "9"],
    answer: 0,
    explanation: "配方法：$y = -(x^2 - 4x + 4) + 1 + 4 = -(x - 2)^2 + 5$。開口向下，當 $x = 2$ 時有最大值 5。",
    difficulty: "基礎"
  },
  {
    category: "三角函數與生活測量",
    question: "在直角 $\\Delta ABC$ 中，$\\angle C = 90^\\circ$，已知兩股長度分別為 $a = 3, b = 4$。求斜邊 $c$ 的長度為何？",
    options: ["5", "7", "$\\sqrt{7}$", "25"],
    answer: 0,
    explanation: "畢氏定理：$c = \\sqrt{a^2 + b^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$。",
    difficulty: "基礎"
  },
  {
    category: "排列組合",
    question: "由數字 1, 2, 3 三個數字「允許重複選取」排成一個三位數，共有多少個不同的三位數？",
    options: ["27 個（即 $3^3$）", "6 個", "9 個", "18 個"],
    answer: 0,
    explanation: "百位、十位、個位各有 3 種選法，重複排列數為 $3 \\times 3 \\times 3 = 3^3 = 27$ 個。",
    difficulty: "基礎"
  },
  {
    category: "古典機率與期望值",
    question: "投擲一枚公正的硬幣 3 次，恰好出現「3 次皆為正面」的機率為何？",
    options: ["1/8", "1/4", "3/8", "1/2"],
    answer: 0,
    explanation: "每次出現正面的機率為 $1/2$。連續 3 次皆為正面的機率為 $(1/2)^3 = 1/8$。",
    difficulty: "基礎"
  },
  {
    category: "單維與雙維統計數據分析",
    question: "若五位同學的數學成績分別為 60, 70, 80, 90, 100。這五位同學成績的「算術平均數」為多少分？",
    options: ["80 分", "75 分", "85 分", "70 分"],
    answer: 0,
    explanation: "等差數列平均數即為正中間數值：$\\frac{60+70+80+90+100}{5} = \\frac{400}{5} = 80$ 分。",
    difficulty: "基礎"
  },
  {
    category: "空間概念與球面幾何",
    question: "正方體共有幾個頂點、幾條稜邊與幾個平面？",
    options: ["8 個頂點、12 條稜邊、6 個面", "6 個頂點、12 條稜邊、8 個面", "8 個頂點、6 條稜邊、12 個面", "4 個頂點、6 條稜邊、4 個面"],
    answer: 0,
    explanation: "正方體（立方體）有 8 個頂點、12 條等長稜邊與 6 個全等正方形面。",
    difficulty: "基礎"
  },
  {
    category: "矩陣與轉移矩陣",
    question: "計算二階方陣 $\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$ 與列向量 $\\begin{pmatrix} 1 & 1 \\end{pmatrix}$ 相乘是否合法？",
    options: ["不合法（維度不匹配，二階方陣 $2\\times 2$ 無法直接右乘 $1\\times 2$ 列向量）", "合法且結果為 $\\begin{pmatrix} 2 & 3 \\end{pmatrix}$", "結果為零矩陣", "結果為純量 5"],
    answer: 0,
    explanation: "矩陣乘法條件：左矩陣行數必須等於右矩陣列數。二階方陣為 $2\\times 2$，右乘向量必須為 $2\\times 1$ 行向量，不能為 $1\\times 2$ 列向量。",
    difficulty: "基礎"
  },
  {
    category: "圓錐曲線生活應用",
    question: "衛星電視接收「小耳朵天線」通常做成拋物碟形。若將高感度接收器（LNB）精準安裝於該拋物面的「焦點」處，其優點為？",
    options: ["將遠方同步衛星傳來的微弱平行電磁波全數反射匯聚於焦點，信號強度大幅增強放大數百倍", "使衛星天線重量減輕", "防止雨水沉積", "自動向太空發射雷射"],
    answer: 0,
    explanation: "拋物面將大面積天線接收到的平行微波聚焦匯聚於焦點接收頭，產生巨大天線增益（Gain），使家庭小天線得以清晰解碼微弱衛星信號。",
    difficulty: "基礎"
  },
  {
    category: "數與式",
    question: "計算整數運算：$(-3) \\times (-4) + (-5)$ 之結果為何？",
    options: ["7", "-17", "17", "-7"],
    answer: 0,
    explanation: "$(-3) \\times (-4) = 12$。$12 + (-5) = 7$。",
    difficulty: "基礎"
  },
  {
    category: "一次與二次函數",
    question: "若直線 $y = 2x + b$ 通過點 $(1, 5)$，則常數 $b$ 之值為何？",
    options: ["3", "7", "-3", "5"],
    answer: 0,
    explanation: "代入點 $(1, 5)$：$5 = 2(1) + b \\implies 5 = 2 + b \\implies b = 3$。",
    difficulty: "基礎"
  }
];

batch8.forEach((q, idx) => {
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

console.log(`New Math B count after batch 8: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Math B questions: ${s.size}`);

fs.writeFileSync(quizFile, `const mathBQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated math-b-quiz.js!');
