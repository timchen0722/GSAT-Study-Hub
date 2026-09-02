const mathBQuiz = [
  {
    "id": "mb1",
    "category": "數與式",
    "question": "$|-7|$ = ？",
    "options": [
      "$7$",
      "$-7$",
      "$0$",
      "$49$"
    ],
    "answer": 0,
    "explanation": "絕對值取正值，$|-7|=7$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb2",
    "category": "數與式",
    "question": "$(a+b)^2$ 展開為？",
    "options": [
      "$a^2+2ab+b^2$",
      "$a^2+b^2$",
      "$a^2-2ab+b^2$",
      "$2a^2+2b^2$"
    ],
    "answer": 0,
    "explanation": "和的平方公式：$(a+b)^2 = a^2 + 2ab + b^2$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb3",
    "category": "一次與二次函數",
    "question": "直線 $y=2x+3$ 的斜率是？",
    "options": [
      "$2$",
      "$3$",
      "$-2$",
      "$5$"
    ],
    "answer": 0,
    "explanation": "$y=mx+b$ 中 $m$ 為斜率，此處 $m=2$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb4",
    "category": "一次與二次函數",
    "question": "$f(x)=-x^2+4x-3$ 的最大值是？",
    "options": [
      "$1$",
      "$3$",
      "$4$",
      "$-3$"
    ],
    "answer": 0,
    "explanation": "頂點 $x=-b/(2a)=4/2=2$，$f(2)=-4+8-3=1$。$a<0$ 開口向下有最大值。",
    "difficulty": "中等"
  },
  {
    "id": "mb5",
    "category": "指數與對數",
    "question": "$2^{10}$ = ？",
    "options": [
      "$1024$",
      "$512$",
      "$2048$",
      "$256$"
    ],
    "answer": 0,
    "explanation": "$2^{10}=1024$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb6",
    "category": "指數與對數",
    "question": "$\\log_{10}1000$ = ？",
    "options": [
      "$3$",
      "$4$",
      "$2$",
      "$10$"
    ],
    "answer": 0,
    "explanation": "$10^3 = 1000$，所以 $\\log_{10}1000 = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb7",
    "category": "三角函數",
    "question": "$\\cos 60°$ = ？",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$0$"
    ],
    "answer": 0,
    "explanation": "特殊角：$\\cos 60° = 1/2$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb8",
    "category": "排列組合",
    "question": "$P^5_2$ = ？",
    "options": [
      "$20$",
      "$10$",
      "$25$",
      "$60$"
    ],
    "answer": 0,
    "explanation": "$P^5_2 = 5×4 = 20$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb9",
    "category": "機率",
    "question": "同時擲兩枚硬幣，都是正面的機率？",
    "options": [
      "$\\frac{1}{4}$",
      "$\\frac{1}{2}$",
      "$\\frac{3}{4}$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "$P = \\frac{1}{2}×\\frac{1}{2} = \\frac{1}{4}$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb10",
    "category": "統計與數據分析",
    "question": "數據 3,5,7,9,11 的中位數是？",
    "options": [
      "$7$",
      "$5$",
      "$9$",
      "$35$"
    ],
    "answer": 0,
    "explanation": "已排序，中間的值為 $7$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb11",
    "category": "統計與數據分析",
    "question": "相關係數 $r = -0.95$ 代表？",
    "options": [
      "強負相關",
      "強正相關",
      "無相關",
      "弱負相關"
    ],
    "answer": 0,
    "explanation": "$|r|$ 接近 1 為強相關，$r<0$ 為負相關。$r=-0.95$ 為強負相關。",
    "difficulty": "中等"
  },
  {
    "id": "mb12",
    "category": "空間概念",
    "question": "空間中兩點 $(1,0,0)$ 和 $(0,1,0)$ 的距離是？",
    "options": [
      "$\\sqrt{2}$",
      "$1$",
      "$2$",
      "$\\sqrt{3}$"
    ],
    "answer": 0,
    "explanation": "$d=\\sqrt{(1-0)^2+(0-1)^2+(0-0)^2}=\\sqrt{1+1}=\\sqrt{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb13",
    "category": "矩陣基礎",
    "question": "$2\\begin{pmatrix}1&3\\\\2&4\\end{pmatrix}$ = ？",
    "options": [
      "$\\begin{pmatrix}2&6\\\\4&8\\end{pmatrix}$",
      "$\\begin{pmatrix}3&5\\\\4&6\\end{pmatrix}$",
      "$\\begin{pmatrix}2&3\\\\2&4\\end{pmatrix}$",
      "$\\begin{pmatrix}1&6\\\\4&4\\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "係數積：每個元素乘以2。",
    "difficulty": "基礎"
  },
  {
    "id": "mb14",
    "category": "統計與數據分析",
    "question": "若將全班成績 $X$ 調整為 $Y = 1.2X + 5$，則相關係數 $r_{X,Y}$ 為何？",
    "options": [
      "$1$",
      "$1.2$",
      "$0$",
      "$-1$"
    ],
    "answer": 0,
    "explanation": "線性變換 $Y = aX+b$，若 $a>0$，則自身與變換後的相關係數必為 1。",
    "difficulty": "進階"
  },
  {
    "category": "數據分析",
    "options": [
      "16",
      "4",
      "12",
      "24"
    ],
    "answer": 3,
    "difficulty": "進階",
    "question": "甲乙丙丁四人排成一列，共有幾種排法？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：確認題型為「直線排列」</strong><br>\n高中排列組合中，將 $n$ 個不同的物件排成一列（有順序性），我們使用的是階乘（Factorial）的概念，記作 $n!$。<br><br>\n<strong>步驟二：逐步思考排列過程（乘法原理）</strong><br>\n想像有四個空位 `_ _ _ _` 等著這四個人來坐：<br>\n- 第一個位子：四個人都可以坐，有 **4 種**選擇。<br>\n- 第二個位子：剩三個人可以坐，有 **3 種**選擇。<br>\n- 第三個位子：剩兩個人可以坐，有 **2 種**選擇。<br>\n- 第四個位子：只剩最後一個人，只有 **1 種**選擇。<br><br>\n<strong>步驟三：計算總數</strong><br>\n根據乘法原理，將所有選擇相乘：<br>\n排法總數 $= 4 \\times 3 \\times 2 \\times 1 = 4!$<br>\n計算結果：$4 \\times 3 = 12$，$12 \\times 2 = 24$，$24 \\times 1 = 24$。<br>\n故共有 24 種不同的排法。",
    "id": "mb15"
  },
  {
    "category": "空間",
    "options": [
      "80",
      "75",
      "85",
      "70"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "某班 5 人的數學成績分別為 60, 70, 80, 90, 100，求其平均數？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：回憶算術平均數的定義</strong><br>\n平均數（Mean）的算法就是將「所有的數據總和」除以「數據的個數」。<br>\n公式：$\\mu = \\frac{\\sum x_i}{N}$<br><br>\n<strong>步驟二：計算總和</strong><br>\n將 5 人的成績相加：<br>\n總和 $= 60 + 70 + 80 + 90 + 100$<br>\n我們可以利用等差數列的特性，中間值是 80，或者直接加總 $= 400$。<br><br>\n<strong>步驟三：除以資料個數</strong><br>\n共有 5 筆資料，所以：<br>\n平均數 $= 400 \\div 5 = 80$。<br>\n故這 5 人的平均成績為 80。",
    "id": "mb16"
  },
  {
    "category": "空間",
    "options": [
      "4",
      "8",
      "16",
      "256"
    ],
    "answer": 0,
    "difficulty": "中等",
    "question": "若一組數據的變異數為 16，則其標準差為何？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：理解變異數與標準差的關係</strong><br>\n在高中統計學中，「變異數（Variance）」是用來衡量數據分散程度的一種指標，計算方式是（各數據與平均數差的平方和）除以數據個數。符號通常記為 $\\sigma^2$。<br>\n而「標準差（Standard Deviation）」是為了讓單位置回與原數據相同，所設定的指標，定義為「變異數的正平方根」，符號記為 $\\sigma$。<br><br>\n<strong>步驟二：套用關係式計算</strong><br>\n公式：$\\sigma = \\sqrt{\\sigma^2}$<br>\n題目已知變異數 $\\sigma^2 = 16$。<br>\n將其代入：標準差 $= \\sqrt{16}$。<br><br>\n<strong>步驟三：得出答案</strong><br>\n因為標準差必須是大於或等於 0 的正數，所以 $\\sqrt{16} = 4$。<br>\n故標準差為 4。",
    "id": "mb17"
  },
  {
    "category": "數據分析",
    "options": [
      "$3/4$",
      "$1/2$",
      "$1/4$",
      "$1$"
    ],
    "answer": 1,
    "difficulty": "進階",
    "question": "投擲兩枚均勻硬幣，出現一正一反的機率為何？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：列出所有的可能結果（樣本空間）</strong><br>\n投擲兩枚不同的硬幣，我們可以用 (第一枚, 第二枚) 來表示結果。<br>\n所有可能的情形共有 4 種：<br>\n1. (正, 正)<br>\n2. (正, 反)<br>\n3. (反, 正)<br>\n4. (反, 反)<br>\n因此，樣本空間元素個數 $n(S) = 4$。<br><br>\n<strong>步驟二：找出符合條件的事件</strong><br>\n題目要求「出現一正一反」。我們從步驟一中挑選符合的組合：<br>\n- (正, 反)<br>\n- (反, 正)<br>\n共有 2 種情形。因此事件發生次數 $n(E) = 2$。<br><br>\n<strong>步驟三：計算機率</strong><br>\n根據古典機率定義，機率 $P = \\frac{n(E)}{n(S)}$。<br>\n$P = \\frac{2}{4} = \\frac{1}{2}$。<br>\n故機率為 1/2。",
    "id": "mb18"
  },
  {
    "id": "mb19",
    "category": "數與式",
    "question": "數線上點 $A(2)$ 與 $B(12)$，若點 $P(x)$ 內分線段 $AB$ 使得 $\\overline{AP}:\\overline{PB} = 2:3$，則 $x$ 為何？",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "answer": 0,
    "explanation": "內分點公式：$x = \\frac{3(2) + 2(12)}{2 + 3} = \\frac{6 + 24}{5} = \\frac{30}{5} = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb20",
    "category": "一次與二次函數",
    "question": "某商品定價 $x$ 元時，每日銷售利潤函數為 $P(x) = -2(x - 50)^2 + 8000$（元），則定價多少元可得最大利潤？",
    "options": [
      "50 元",
      "40 元",
      "60 元",
      "80 元"
    ],
    "answer": 0,
    "explanation": "二次函數開口向下（$a = -2 < 0$），當 $x = 50$ 時有最大值 8000 元。",
    "difficulty": "基礎"
  },
  {
    "id": "mb21",
    "category": "指數與對數模型",
    "question": "芮氏規模每增加 1 級，地震釋放的能量約放大 $10^{1.5} \\approx 31.6$ 倍。則規模 7 的地震所釋放能量約為規模 5 的多少倍？",
    "options": [
      "1000 倍",
      "63.2 倍",
      "100 倍",
      "316 倍"
    ],
    "answer": 0,
    "explanation": "規模差為 $7 - 5 = 2$。能量比為 $10^{1.5 \\times 2} = 10^3 = 1000$ 倍。",
    "difficulty": "基礎"
  },
  {
    "id": "mb22",
    "category": "三角函數與生活測量",
    "question": "在地面兩點 $A, B$ 相距 100 公尺，測得對岸地標 $C$ 的視角 $\\angle CAB = 60^\\circ, \\angle CBA = 45^\\circ$，求 $\\angle ACB$ 的角度？",
    "options": [
      "75°",
      "60°",
      "45°",
      "90°"
    ],
    "answer": 0,
    "explanation": "三角形內角和為 180°，故 $\\angle ACB = 180^\\circ - 60^\\circ - 45^\\circ = 75^\\circ$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb23",
    "category": "單維與雙維統計數據分析",
    "question": "某班級有 40 位同學，某次英文小考成績由小到大排列，第 75 百分位數（$P_{75}$）對應第幾位同學的成績？",
    "options": [
      "第 30 位與第 31 位的平均",
      "第 30 位",
      "第 31 位",
      "第 25 位"
    ],
    "answer": 0,
    "explanation": "$40 \\times 75\\% = 30$（為整數），因此 $P_{75}$ 取第 30 位與第 31 位成績的算術平均數。",
    "difficulty": "中等"
  },
  {
    "id": "mb24",
    "category": "古典機率與期望值",
    "question": "投擲一枚公正硬幣 3 次，恰好出現 2 次正面的機率為何？",
    "options": [
      "3/8",
      "1/2",
      "1/4",
      "1/8"
    ],
    "answer": 0,
    "explanation": "總結果數 $2^3 = 8$。恰好 2 正面的組合數為 $C^3_2 = 3$ 種。機率為 $\\frac{3}{8}$。",
    "difficulty": "基礎"
  },
  {
    "id": "mb25",
    "category": "古典機率與期望值",
    "question": "某摸彩箱中有 10 張彩券，其中 2 張有獎，每張獎金 500 元，其餘無獎。抽一張彩券的期望值為何？",
    "options": [
      "100 元",
      "50 元",
      "200 元",
      "250 元"
    ],
    "answer": 0,
    "explanation": "中獎機率為 $2/10 = 0.2$。期望值 $E = 500 \\times 0.2 + 0 \\times 0.8 = 100$ 元。",
    "difficulty": "基礎"
  },
  {
    "id": "mb26",
    "category": "矩陣與轉移矩陣",
    "question": "轉移矩陣 $P = \\begin{pmatrix} 0.8 & 0.3 \\\\ 0.2 & 0.7 \\end{pmatrix}$，其長期穩定狀態機率向量 $\\begin{pmatrix} x \\\\ y \\end{pmatrix}$ 滿足何條件？",
    "options": [
      "x:y = 3:2",
      "x:y = 2:3",
      "x:y = 1:1",
      "x:y = 4:1"
    ],
    "answer": 0,
    "explanation": "穩態方程：$0.8x + 0.3y = x \\implies 0.3y = 0.2x \\implies 2x = 3y \\implies x:y = 3:2$。且 $x+y=1 \\implies x = 0.6, y = 0.4$。",
    "difficulty": "進階"
  },
  {
    "id": "mb27",
    "category": "空間概念與球面幾何",
    "question": "地球半徑約為 $R = 6400$ 公里。北緯 60° 緯線圈的半徑長度約為多少公里？",
    "options": [
      "3200 公里",
      "6400 公里",
      "1600 公里",
      "4800 公里"
    ],
    "answer": 0,
    "explanation": "緯度 $\\theta$ 處緯線圓半徑為 $r = R \\cos\\theta = 6400 \\times \\cos 60^\\circ = 6400 \\times 0.5 = 3200$ 公里。",
    "difficulty": "中等"
  },
  {
    "id": "mb28",
    "category": "圓錐曲線生活應用",
    "question": "探照燈的反光鏡是利用何種圓錐曲線的幾何光學反射性質？",
    "options": [
      "拋物線",
      "雙曲線",
      "橢圓",
      "圓形"
    ],
    "answer": 0,
    "explanation": "拋物面鏡具有將放置於焦點處的光源射出的光線，反射為平行光束向前投射的特性。",
    "difficulty": "基礎"
  }
];
