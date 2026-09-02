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
  },
  {
    "category": "數與式",
    "question": "[題號 29] 已知等差數列首項 $a_1 = 3$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "30",
      "33",
      "27",
      "21"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 3 + 9 \\times 3 = 30$。",
    "difficulty": "基礎",
    "id": "mb29"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 30] 二次函數 $y = (x - 2)^2 + 3$ 之圖形頂點坐標為何？",
    "options": [
      "(2, 3)",
      "(-2, 3)",
      "(2, -3)",
      "(3, 2)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (2, 3)$。",
    "difficulty": "基礎",
    "id": "mb30"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 31] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb31"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 32] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb32"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 33] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb33"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 34] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(2, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{12}",
      "\\sqrt{8}",
      "6",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(2-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{12}$。",
    "difficulty": "基礎",
    "id": "mb34"
  },
  {
    "category": "數與式",
    "question": "[題號 35] 已知等差數列首項 $a_1 = 4$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "40",
      "44",
      "36",
      "31"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 4 + 9 \\times 4 = 40$。",
    "difficulty": "基礎",
    "id": "mb35"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 36] 二次函數 $y = (x - 3)^2 + 5$ 之圖形頂點坐標為何？",
    "options": [
      "(3, 5)",
      "(-3, 5)",
      "(3, -5)",
      "(5, 3)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (3, 5)$。",
    "difficulty": "基礎",
    "id": "mb36"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 37] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb37"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 38] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb38"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 39] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb39"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 40] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(3, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{17}",
      "\\sqrt{13}",
      "7",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(3-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{17}$。",
    "difficulty": "基礎",
    "id": "mb40"
  },
  {
    "category": "數與式",
    "question": "[題號 41] 已知等差數列首項 $a_1 = 5$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "23",
      "25",
      "21",
      "14"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 5 + 9 \\times 2 = 23$。",
    "difficulty": "基礎",
    "id": "mb41"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 42] 二次函數 $y = (x - 4)^2 + 7$ 之圖形頂點坐標為何？",
    "options": [
      "(4, 7)",
      "(-4, 7)",
      "(4, -7)",
      "(7, 4)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (4, 7)$。",
    "difficulty": "基礎",
    "id": "mb42"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 43] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb43"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 44] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb44"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 45] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb45"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 46] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(4, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{24}",
      "\\sqrt{20}",
      "8",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(4-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{24}$。",
    "difficulty": "基礎",
    "id": "mb46"
  },
  {
    "category": "數與式",
    "question": "[題號 47] 已知等差數列首項 $a_1 = 6$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "33",
      "36",
      "30",
      "24"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 6 + 9 \\times 3 = 33$。",
    "difficulty": "基礎",
    "id": "mb47"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 48] 二次函數 $y = (x - 5)^2 + 9$ 之圖形頂點坐標為何？",
    "options": [
      "(5, 9)",
      "(-5, 9)",
      "(5, -9)",
      "(9, 5)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (5, 9)$。",
    "difficulty": "基礎",
    "id": "mb48"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 49] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb49"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 50] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb50"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 51] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb51"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 52] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(5, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{33}",
      "\\sqrt{29}",
      "9",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(5-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{33}$。",
    "difficulty": "基礎",
    "id": "mb52"
  },
  {
    "category": "數與式",
    "question": "[題號 53] 已知等差數列首項 $a_1 = 7$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "43",
      "47",
      "39",
      "34"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 7 + 9 \\times 4 = 43$。",
    "difficulty": "基礎",
    "id": "mb53"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 54] 二次函數 $y = (x - 6)^2 + 11$ 之圖形頂點坐標為何？",
    "options": [
      "(6, 11)",
      "(-6, 11)",
      "(6, -11)",
      "(11, 6)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (6, 11)$。",
    "difficulty": "基礎",
    "id": "mb54"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 55] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb55"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 56] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb56"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 57] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb57"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 58] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(6, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{44}",
      "\\sqrt{40}",
      "10",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(6-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{44}$。",
    "difficulty": "基礎",
    "id": "mb58"
  },
  {
    "category": "數與式",
    "question": "[題號 59] 已知等差數列首項 $a_1 = 8$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "26",
      "28",
      "24",
      "17"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 8 + 9 \\times 2 = 26$。",
    "difficulty": "基礎",
    "id": "mb59"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 60] 二次函數 $y = (x - 7)^2 + 13$ 之圖形頂點坐標為何？",
    "options": [
      "(7, 13)",
      "(-7, 13)",
      "(7, -13)",
      "(13, 7)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (7, 13)$。",
    "difficulty": "基礎",
    "id": "mb60"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 61] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb61"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 62] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb62"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 63] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb63"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 64] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(7, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{57}",
      "\\sqrt{53}",
      "11",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(7-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{57}$。",
    "difficulty": "基礎",
    "id": "mb64"
  },
  {
    "category": "數與式",
    "question": "[題號 65] 已知等差數列首項 $a_1 = 9$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "36",
      "39",
      "33",
      "27"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 9 + 9 \\times 3 = 36$。",
    "difficulty": "基礎",
    "id": "mb65"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 66] 二次函數 $y = (x - 8)^2 + 15$ 之圖形頂點坐標為何？",
    "options": [
      "(8, 15)",
      "(-8, 15)",
      "(8, -15)",
      "(15, 8)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (8, 15)$。",
    "difficulty": "基礎",
    "id": "mb66"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 67] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb67"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 68] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb68"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 69] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb69"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 70] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(8, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{72}",
      "\\sqrt{68}",
      "12",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(8-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{72}$。",
    "difficulty": "基礎",
    "id": "mb70"
  },
  {
    "category": "數與式",
    "question": "[題號 71] 已知等差數列首項 $a_1 = 10$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "46",
      "50",
      "42",
      "37"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 10 + 9 \\times 4 = 46$。",
    "difficulty": "基礎",
    "id": "mb71"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 72] 二次函數 $y = (x - 9)^2 + 17$ 之圖形頂點坐標為何？",
    "options": [
      "(9, 17)",
      "(-9, 17)",
      "(9, -17)",
      "(17, 9)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (9, 17)$。",
    "difficulty": "基礎",
    "id": "mb72"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 73] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb73"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 74] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb74"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 75] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb75"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 76] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(9, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{89}",
      "\\sqrt{85}",
      "13",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(9-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{89}$。",
    "difficulty": "基礎",
    "id": "mb76"
  },
  {
    "category": "數與式",
    "question": "[題號 77] 已知等差數列首項 $a_1 = 11$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "29",
      "31",
      "27",
      "20"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 11 + 9 \\times 2 = 29$。",
    "difficulty": "基礎",
    "id": "mb77"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 78] 二次函數 $y = (x - 10)^2 + 19$ 之圖形頂點坐標為何？",
    "options": [
      "(10, 19)",
      "(-10, 19)",
      "(10, -19)",
      "(19, 10)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (10, 19)$。",
    "difficulty": "基礎",
    "id": "mb78"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 79] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb79"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 80] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb80"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 81] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb81"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 82] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(10, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{108}",
      "\\sqrt{104}",
      "14",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(10-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{108}$。",
    "difficulty": "基礎",
    "id": "mb82"
  },
  {
    "category": "數與式",
    "question": "[題號 83] 已知等差數列首項 $a_1 = 12$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "39",
      "42",
      "36",
      "30"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 12 + 9 \\times 3 = 39$。",
    "difficulty": "基礎",
    "id": "mb83"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 84] 二次函數 $y = (x - 11)^2 + 21$ 之圖形頂點坐標為何？",
    "options": [
      "(11, 21)",
      "(-11, 21)",
      "(11, -21)",
      "(21, 11)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (11, 21)$。",
    "difficulty": "基礎",
    "id": "mb84"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 85] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb85"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 86] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb86"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 87] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb87"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 88] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(11, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{129}",
      "\\sqrt{125}",
      "15",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(11-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{129}$。",
    "difficulty": "基礎",
    "id": "mb88"
  },
  {
    "category": "數與式",
    "question": "[題號 89] 已知等差數列首項 $a_1 = 13$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "49",
      "53",
      "45",
      "40"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 13 + 9 \\times 4 = 49$。",
    "difficulty": "基礎",
    "id": "mb89"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 90] 二次函數 $y = (x - 12)^2 + 23$ 之圖形頂點坐標為何？",
    "options": [
      "(12, 23)",
      "(-12, 23)",
      "(12, -23)",
      "(23, 12)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (12, 23)$。",
    "difficulty": "基礎",
    "id": "mb90"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 91] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb91"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 92] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb92"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 93] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb93"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 94] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(12, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{152}",
      "\\sqrt{148}",
      "16",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(12-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{152}$。",
    "difficulty": "基礎",
    "id": "mb94"
  },
  {
    "category": "數與式",
    "question": "[題號 95] 已知等差數列首項 $a_1 = 14$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "32",
      "34",
      "30",
      "23"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 14 + 9 \\times 2 = 32$。",
    "difficulty": "基礎",
    "id": "mb95"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 96] 二次函數 $y = (x - 13)^2 + 25$ 之圖形頂點坐標為何？",
    "options": [
      "(13, 25)",
      "(-13, 25)",
      "(13, -25)",
      "(25, 13)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (13, 25)$。",
    "difficulty": "基礎",
    "id": "mb96"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 97] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb97"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 98] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb98"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 99] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb99"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 100] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(13, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{177}",
      "\\sqrt{173}",
      "17",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(13-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{177}$。",
    "difficulty": "基礎",
    "id": "mb100"
  },
  {
    "category": "數與式",
    "question": "[題號 101] 已知等差數列首項 $a_1 = 15$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "42",
      "45",
      "39",
      "33"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 15 + 9 \\times 3 = 42$。",
    "difficulty": "基礎",
    "id": "mb101"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 102] 二次函數 $y = (x - 14)^2 + 27$ 之圖形頂點坐標為何？",
    "options": [
      "(14, 27)",
      "(-14, 27)",
      "(14, -27)",
      "(27, 14)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (14, 27)$。",
    "difficulty": "基礎",
    "id": "mb102"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 103] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb103"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 104] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb104"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 105] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb105"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 106] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(14, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{204}",
      "\\sqrt{200}",
      "18",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(14-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{204}$。",
    "difficulty": "基礎",
    "id": "mb106"
  },
  {
    "category": "數與式",
    "question": "[題號 107] 已知等差數列首項 $a_1 = 16$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "52",
      "56",
      "48",
      "43"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 16 + 9 \\times 4 = 52$。",
    "difficulty": "基礎",
    "id": "mb107"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 108] 二次函數 $y = (x - 15)^2 + 29$ 之圖形頂點坐標為何？",
    "options": [
      "(15, 29)",
      "(-15, 29)",
      "(15, -29)",
      "(29, 15)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (15, 29)$。",
    "difficulty": "基礎",
    "id": "mb108"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 109] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb109"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 110] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb110"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 111] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb111"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 112] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(15, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{233}",
      "\\sqrt{229}",
      "19",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(15-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{233}$。",
    "difficulty": "基礎",
    "id": "mb112"
  },
  {
    "category": "數與式",
    "question": "[題號 113] 已知等差數列首項 $a_1 = 17$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "35",
      "37",
      "33",
      "26"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 17 + 9 \\times 2 = 35$。",
    "difficulty": "基礎",
    "id": "mb113"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 114] 二次函數 $y = (x - 16)^2 + 31$ 之圖形頂點坐標為何？",
    "options": [
      "(16, 31)",
      "(-16, 31)",
      "(16, -31)",
      "(31, 16)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (16, 31)$。",
    "difficulty": "基礎",
    "id": "mb114"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 115] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb115"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 116] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb116"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 117] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb117"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 118] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(16, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{264}",
      "\\sqrt{260}",
      "20",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(16-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{264}$。",
    "difficulty": "基礎",
    "id": "mb118"
  },
  {
    "category": "數與式",
    "question": "[題號 119] 已知等差數列首項 $a_1 = 18$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "45",
      "48",
      "42",
      "36"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 18 + 9 \\times 3 = 45$。",
    "difficulty": "基礎",
    "id": "mb119"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 120] 二次函數 $y = (x - 17)^2 + 33$ 之圖形頂點坐標為何？",
    "options": [
      "(17, 33)",
      "(-17, 33)",
      "(17, -33)",
      "(33, 17)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (17, 33)$。",
    "difficulty": "基礎",
    "id": "mb120"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 121] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb121"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 122] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb122"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 123] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb123"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 124] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(17, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{297}",
      "\\sqrt{293}",
      "21",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(17-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{297}$。",
    "difficulty": "基礎",
    "id": "mb124"
  },
  {
    "category": "數與式",
    "question": "[題號 125] 已知等差數列首項 $a_1 = 19$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "55",
      "59",
      "51",
      "46"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 19 + 9 \\times 4 = 55$。",
    "difficulty": "基礎",
    "id": "mb125"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 126] 二次函數 $y = (x - 18)^2 + 35$ 之圖形頂點坐標為何？",
    "options": [
      "(18, 35)",
      "(-18, 35)",
      "(18, -35)",
      "(35, 18)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (18, 35)$。",
    "difficulty": "基礎",
    "id": "mb126"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 127] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb127"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 128] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb128"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 129] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb129"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 130] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(18, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{332}",
      "\\sqrt{328}",
      "22",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(18-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{332}$。",
    "difficulty": "基礎",
    "id": "mb130"
  },
  {
    "category": "數與式",
    "question": "[題號 131] 已知等差數列首項 $a_1 = 20$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "38",
      "40",
      "36",
      "29"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 20 + 9 \\times 2 = 38$。",
    "difficulty": "基礎",
    "id": "mb131"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 132] 二次函數 $y = (x - 19)^2 + 37$ 之圖形頂點坐標為何？",
    "options": [
      "(19, 37)",
      "(-19, 37)",
      "(19, -37)",
      "(37, 19)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (19, 37)$。",
    "difficulty": "基礎",
    "id": "mb132"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 133] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb133"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 134] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb134"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 135] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb135"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 136] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(19, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{369}",
      "\\sqrt{365}",
      "23",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(19-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{369}$。",
    "difficulty": "基礎",
    "id": "mb136"
  },
  {
    "category": "數與式",
    "question": "[題號 137] 已知等差數列首項 $a_1 = 21$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "48",
      "51",
      "45",
      "39"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 21 + 9 \\times 3 = 48$。",
    "difficulty": "基礎",
    "id": "mb137"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 138] 二次函數 $y = (x - 20)^2 + 39$ 之圖形頂點坐標為何？",
    "options": [
      "(20, 39)",
      "(-20, 39)",
      "(20, -39)",
      "(39, 20)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (20, 39)$。",
    "difficulty": "基礎",
    "id": "mb138"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 139] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb139"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 140] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb140"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 141] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb141"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 142] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(20, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{408}",
      "\\sqrt{404}",
      "24",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(20-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{408}$。",
    "difficulty": "基礎",
    "id": "mb142"
  },
  {
    "category": "數與式",
    "question": "[題號 143] 已知等差數列首項 $a_1 = 22$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "58",
      "62",
      "54",
      "49"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 22 + 9 \\times 4 = 58$。",
    "difficulty": "基礎",
    "id": "mb143"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 144] 二次函數 $y = (x - 21)^2 + 41$ 之圖形頂點坐標為何？",
    "options": [
      "(21, 41)",
      "(-21, 41)",
      "(21, -41)",
      "(41, 21)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (21, 41)$。",
    "difficulty": "基礎",
    "id": "mb144"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 145] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb145"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 146] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb146"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 147] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb147"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 148] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(21, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{449}",
      "\\sqrt{445}",
      "25",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(21-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{449}$。",
    "difficulty": "基礎",
    "id": "mb148"
  },
  {
    "category": "數與式",
    "question": "[題號 149] 已知等差數列首項 $a_1 = 23$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "41",
      "43",
      "39",
      "32"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 23 + 9 \\times 2 = 41$。",
    "difficulty": "基礎",
    "id": "mb149"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 150] 二次函數 $y = (x - 22)^2 + 43$ 之圖形頂點坐標為何？",
    "options": [
      "(22, 43)",
      "(-22, 43)",
      "(22, -43)",
      "(43, 22)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (22, 43)$。",
    "difficulty": "基礎",
    "id": "mb150"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 151] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb151"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 152] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb152"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 153] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb153"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 154] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(22, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{492}",
      "\\sqrt{488}",
      "26",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(22-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{492}$。",
    "difficulty": "基礎",
    "id": "mb154"
  },
  {
    "category": "數與式",
    "question": "[題號 155] 已知等差數列首項 $a_1 = 24$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "51",
      "54",
      "48",
      "42"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 24 + 9 \\times 3 = 51$。",
    "difficulty": "基礎",
    "id": "mb155"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 156] 二次函數 $y = (x - 23)^2 + 45$ 之圖形頂點坐標為何？",
    "options": [
      "(23, 45)",
      "(-23, 45)",
      "(23, -45)",
      "(45, 23)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (23, 45)$。",
    "difficulty": "基礎",
    "id": "mb156"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 157] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb157"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 158] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb158"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 159] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb159"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 160] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(23, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{537}",
      "\\sqrt{533}",
      "27",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(23-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{537}$。",
    "difficulty": "基礎",
    "id": "mb160"
  },
  {
    "category": "數與式",
    "question": "[題號 161] 已知等差數列首項 $a_1 = 25$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "61",
      "65",
      "57",
      "52"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 25 + 9 \\times 4 = 61$。",
    "difficulty": "基礎",
    "id": "mb161"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 162] 二次函數 $y = (x - 24)^2 + 47$ 之圖形頂點坐標為何？",
    "options": [
      "(24, 47)",
      "(-24, 47)",
      "(24, -47)",
      "(47, 24)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (24, 47)$。",
    "difficulty": "基礎",
    "id": "mb162"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 163] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb163"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 164] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb164"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 165] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb165"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 166] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(24, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{584}",
      "\\sqrt{580}",
      "28",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(24-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{584}$。",
    "difficulty": "基礎",
    "id": "mb166"
  },
  {
    "category": "數與式",
    "question": "[題號 167] 已知等差數列首項 $a_1 = 26$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "44",
      "46",
      "42",
      "35"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 26 + 9 \\times 2 = 44$。",
    "difficulty": "基礎",
    "id": "mb167"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 168] 二次函數 $y = (x - 25)^2 + 49$ 之圖形頂點坐標為何？",
    "options": [
      "(25, 49)",
      "(-25, 49)",
      "(25, -49)",
      "(49, 25)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (25, 49)$。",
    "difficulty": "基礎",
    "id": "mb168"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 169] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb169"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 170] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb170"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 171] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb171"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 172] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(25, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{633}",
      "\\sqrt{629}",
      "29",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(25-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{633}$。",
    "difficulty": "基礎",
    "id": "mb172"
  },
  {
    "category": "數與式",
    "question": "[題號 173] 已知等差數列首項 $a_1 = 27$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "54",
      "57",
      "51",
      "45"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 27 + 9 \\times 3 = 54$。",
    "difficulty": "基礎",
    "id": "mb173"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 174] 二次函數 $y = (x - 26)^2 + 51$ 之圖形頂點坐標為何？",
    "options": [
      "(26, 51)",
      "(-26, 51)",
      "(26, -51)",
      "(51, 26)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (26, 51)$。",
    "difficulty": "基礎",
    "id": "mb174"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 175] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb175"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 176] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb176"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 177] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb177"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 178] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(26, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{684}",
      "\\sqrt{680}",
      "30",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(26-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{684}$。",
    "difficulty": "基礎",
    "id": "mb178"
  },
  {
    "category": "數與式",
    "question": "[題號 179] 已知等差數列首項 $a_1 = 28$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "64",
      "68",
      "60",
      "55"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 28 + 9 \\times 4 = 64$。",
    "difficulty": "基礎",
    "id": "mb179"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 180] 二次函數 $y = (x - 27)^2 + 53$ 之圖形頂點坐標為何？",
    "options": [
      "(27, 53)",
      "(-27, 53)",
      "(27, -53)",
      "(53, 27)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (27, 53)$。",
    "difficulty": "基礎",
    "id": "mb180"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 181] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb181"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 182] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb182"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 183] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb183"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 184] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(27, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{737}",
      "\\sqrt{733}",
      "31",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(27-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{737}$。",
    "difficulty": "基礎",
    "id": "mb184"
  },
  {
    "category": "數與式",
    "question": "[題號 185] 已知等差數列首項 $a_1 = 29$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "47",
      "49",
      "45",
      "38"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 29 + 9 \\times 2 = 47$。",
    "difficulty": "基礎",
    "id": "mb185"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 186] 二次函數 $y = (x - 28)^2 + 55$ 之圖形頂點坐標為何？",
    "options": [
      "(28, 55)",
      "(-28, 55)",
      "(28, -55)",
      "(55, 28)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (28, 55)$。",
    "difficulty": "基礎",
    "id": "mb186"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 187] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb187"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 188] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb188"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 189] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb189"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 190] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(28, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{792}",
      "\\sqrt{788}",
      "32",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(28-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{792}$。",
    "difficulty": "基礎",
    "id": "mb190"
  },
  {
    "category": "數與式",
    "question": "[題號 191] 已知等差數列首項 $a_1 = 30$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "57",
      "60",
      "54",
      "48"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 30 + 9 \\times 3 = 57$。",
    "difficulty": "基礎",
    "id": "mb191"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 192] 二次函數 $y = (x - 29)^2 + 57$ 之圖形頂點坐標為何？",
    "options": [
      "(29, 57)",
      "(-29, 57)",
      "(29, -57)",
      "(57, 29)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (29, 57)$。",
    "difficulty": "基礎",
    "id": "mb192"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 193] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb193"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 194] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb194"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 195] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb195"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 196] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(29, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{849}",
      "\\sqrt{845}",
      "33",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(29-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{849}$。",
    "difficulty": "基礎",
    "id": "mb196"
  },
  {
    "category": "數與式",
    "question": "[題號 197] 已知等差數列首項 $a_1 = 31$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "67",
      "71",
      "63",
      "58"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 31 + 9 \\times 4 = 67$。",
    "difficulty": "基礎",
    "id": "mb197"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 198] 二次函數 $y = (x - 30)^2 + 59$ 之圖形頂點坐標為何？",
    "options": [
      "(30, 59)",
      "(-30, 59)",
      "(30, -59)",
      "(59, 30)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (30, 59)$。",
    "difficulty": "基礎",
    "id": "mb198"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 199] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb199"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 200] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb200"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 201] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb201"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 202] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(30, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{908}",
      "\\sqrt{904}",
      "34",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(30-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{908}$。",
    "difficulty": "基礎",
    "id": "mb202"
  },
  {
    "category": "數與式",
    "question": "[題號 203] 已知等差數列首項 $a_1 = 32$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "50",
      "52",
      "48",
      "41"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 32 + 9 \\times 2 = 50$。",
    "difficulty": "基礎",
    "id": "mb203"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 204] 二次函數 $y = (x - 31)^2 + 61$ 之圖形頂點坐標為何？",
    "options": [
      "(31, 61)",
      "(-31, 61)",
      "(31, -61)",
      "(61, 31)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (31, 61)$。",
    "difficulty": "基礎",
    "id": "mb204"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 205] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb205"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 206] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb206"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 207] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb207"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 208] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(31, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{969}",
      "\\sqrt{965}",
      "35",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(31-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{969}$。",
    "difficulty": "基礎",
    "id": "mb208"
  },
  {
    "category": "數與式",
    "question": "[題號 209] 已知等差數列首項 $a_1 = 33$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "60",
      "63",
      "57",
      "51"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 33 + 9 \\times 3 = 60$。",
    "difficulty": "基礎",
    "id": "mb209"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 210] 二次函數 $y = (x - 32)^2 + 63$ 之圖形頂點坐標為何？",
    "options": [
      "(32, 63)",
      "(-32, 63)",
      "(32, -63)",
      "(63, 32)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (32, 63)$。",
    "difficulty": "基礎",
    "id": "mb210"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 211] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb211"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 212] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb212"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 213] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb213"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 214] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(32, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1032}",
      "\\sqrt{1028}",
      "36",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(32-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1032}$。",
    "difficulty": "基礎",
    "id": "mb214"
  },
  {
    "category": "數與式",
    "question": "[題號 215] 已知等差數列首項 $a_1 = 34$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "70",
      "74",
      "66",
      "61"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 34 + 9 \\times 4 = 70$。",
    "difficulty": "基礎",
    "id": "mb215"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 216] 二次函數 $y = (x - 33)^2 + 65$ 之圖形頂點坐標為何？",
    "options": [
      "(33, 65)",
      "(-33, 65)",
      "(33, -65)",
      "(65, 33)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (33, 65)$。",
    "difficulty": "基礎",
    "id": "mb216"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 217] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb217"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 218] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb218"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 219] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb219"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 220] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(33, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1097}",
      "\\sqrt{1093}",
      "37",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(33-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1097}$。",
    "difficulty": "基礎",
    "id": "mb220"
  },
  {
    "category": "數與式",
    "question": "[題號 221] 已知等差數列首項 $a_1 = 35$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "53",
      "55",
      "51",
      "44"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 35 + 9 \\times 2 = 53$。",
    "difficulty": "基礎",
    "id": "mb221"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 222] 二次函數 $y = (x - 34)^2 + 67$ 之圖形頂點坐標為何？",
    "options": [
      "(34, 67)",
      "(-34, 67)",
      "(34, -67)",
      "(67, 34)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (34, 67)$。",
    "difficulty": "基礎",
    "id": "mb222"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 223] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb223"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 224] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb224"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 225] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb225"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 226] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(34, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1164}",
      "\\sqrt{1160}",
      "38",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(34-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1164}$。",
    "difficulty": "基礎",
    "id": "mb226"
  },
  {
    "category": "數與式",
    "question": "[題號 227] 已知等差數列首項 $a_1 = 36$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "63",
      "66",
      "60",
      "54"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 36 + 9 \\times 3 = 63$。",
    "difficulty": "基礎",
    "id": "mb227"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 228] 二次函數 $y = (x - 35)^2 + 69$ 之圖形頂點坐標為何？",
    "options": [
      "(35, 69)",
      "(-35, 69)",
      "(35, -69)",
      "(69, 35)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (35, 69)$。",
    "difficulty": "基礎",
    "id": "mb228"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 229] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb229"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 230] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb230"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 231] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb231"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 232] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(35, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1233}",
      "\\sqrt{1229}",
      "39",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(35-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1233}$。",
    "difficulty": "基礎",
    "id": "mb232"
  },
  {
    "category": "數與式",
    "question": "[題號 233] 已知等差數列首項 $a_1 = 37$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "73",
      "77",
      "69",
      "64"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 37 + 9 \\times 4 = 73$。",
    "difficulty": "基礎",
    "id": "mb233"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 234] 二次函數 $y = (x - 36)^2 + 71$ 之圖形頂點坐標為何？",
    "options": [
      "(36, 71)",
      "(-36, 71)",
      "(36, -71)",
      "(71, 36)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (36, 71)$。",
    "difficulty": "基礎",
    "id": "mb234"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 235] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb235"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 236] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb236"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 237] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb237"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 238] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(36, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1304}",
      "\\sqrt{1300}",
      "40",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(36-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1304}$。",
    "difficulty": "基礎",
    "id": "mb238"
  },
  {
    "category": "數與式",
    "question": "[題號 239] 已知等差數列首項 $a_1 = 38$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "56",
      "58",
      "54",
      "47"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 38 + 9 \\times 2 = 56$。",
    "difficulty": "基礎",
    "id": "mb239"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 240] 二次函數 $y = (x - 37)^2 + 73$ 之圖形頂點坐標為何？",
    "options": [
      "(37, 73)",
      "(-37, 73)",
      "(37, -73)",
      "(73, 37)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (37, 73)$。",
    "difficulty": "基礎",
    "id": "mb240"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 241] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb241"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 242] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb242"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 243] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb243"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 244] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(37, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1377}",
      "\\sqrt{1373}",
      "41",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(37-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1377}$。",
    "difficulty": "基礎",
    "id": "mb244"
  },
  {
    "category": "數與式",
    "question": "[題號 245] 已知等差數列首項 $a_1 = 39$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "66",
      "69",
      "63",
      "57"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 39 + 9 \\times 3 = 66$。",
    "difficulty": "基礎",
    "id": "mb245"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 246] 二次函數 $y = (x - 38)^2 + 75$ 之圖形頂點坐標為何？",
    "options": [
      "(38, 75)",
      "(-38, 75)",
      "(38, -75)",
      "(75, 38)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (38, 75)$。",
    "difficulty": "基礎",
    "id": "mb246"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 247] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb247"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 248] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb248"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 249] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb249"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 250] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(38, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1452}",
      "\\sqrt{1448}",
      "42",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(38-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1452}$。",
    "difficulty": "基礎",
    "id": "mb250"
  },
  {
    "category": "數與式",
    "question": "[題號 251] 已知等差數列首項 $a_1 = 40$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "76",
      "80",
      "72",
      "67"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 40 + 9 \\times 4 = 76$。",
    "difficulty": "基礎",
    "id": "mb251"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 252] 二次函數 $y = (x - 39)^2 + 77$ 之圖形頂點坐標為何？",
    "options": [
      "(39, 77)",
      "(-39, 77)",
      "(39, -77)",
      "(77, 39)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (39, 77)$。",
    "difficulty": "基礎",
    "id": "mb252"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 253] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb253"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 254] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb254"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 255] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb255"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 256] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(39, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1529}",
      "\\sqrt{1525}",
      "43",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(39-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1529}$。",
    "difficulty": "基礎",
    "id": "mb256"
  },
  {
    "category": "數與式",
    "question": "[題號 257] 已知等差數列首項 $a_1 = 41$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "59",
      "61",
      "57",
      "50"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 41 + 9 \\times 2 = 59$。",
    "difficulty": "基礎",
    "id": "mb257"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 258] 二次函數 $y = (x - 40)^2 + 79$ 之圖形頂點坐標為何？",
    "options": [
      "(40, 79)",
      "(-40, 79)",
      "(40, -79)",
      "(79, 40)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (40, 79)$。",
    "difficulty": "基礎",
    "id": "mb258"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 259] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb259"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 260] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb260"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 261] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb261"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 262] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(40, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1608}",
      "\\sqrt{1604}",
      "44",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(40-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1608}$。",
    "difficulty": "基礎",
    "id": "mb262"
  },
  {
    "category": "數與式",
    "question": "[題號 263] 已知等差數列首項 $a_1 = 42$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "69",
      "72",
      "66",
      "60"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 42 + 9 \\times 3 = 69$。",
    "difficulty": "基礎",
    "id": "mb263"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 264] 二次函數 $y = (x - 41)^2 + 81$ 之圖形頂點坐標為何？",
    "options": [
      "(41, 81)",
      "(-41, 81)",
      "(41, -81)",
      "(81, 41)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (41, 81)$。",
    "difficulty": "基礎",
    "id": "mb264"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 265] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb265"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 266] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb266"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 267] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb267"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 268] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(41, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1689}",
      "\\sqrt{1685}",
      "45",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(41-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1689}$。",
    "difficulty": "基礎",
    "id": "mb268"
  },
  {
    "category": "數與式",
    "question": "[題號 269] 已知等差數列首項 $a_1 = 43$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "79",
      "83",
      "75",
      "70"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 43 + 9 \\times 4 = 79$。",
    "difficulty": "基礎",
    "id": "mb269"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 270] 二次函數 $y = (x - 42)^2 + 83$ 之圖形頂點坐標為何？",
    "options": [
      "(42, 83)",
      "(-42, 83)",
      "(42, -83)",
      "(83, 42)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (42, 83)$。",
    "difficulty": "基礎",
    "id": "mb270"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 271] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb271"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 272] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb272"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 273] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb273"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 274] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(42, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1772}",
      "\\sqrt{1768}",
      "46",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(42-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1772}$。",
    "difficulty": "基礎",
    "id": "mb274"
  },
  {
    "category": "數與式",
    "question": "[題號 275] 已知等差數列首項 $a_1 = 44$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "62",
      "64",
      "60",
      "53"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 44 + 9 \\times 2 = 62$。",
    "difficulty": "基礎",
    "id": "mb275"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 276] 二次函數 $y = (x - 43)^2 + 85$ 之圖形頂點坐標為何？",
    "options": [
      "(43, 85)",
      "(-43, 85)",
      "(43, -85)",
      "(85, 43)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (43, 85)$。",
    "difficulty": "基礎",
    "id": "mb276"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 277] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb277"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 278] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb278"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 279] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb279"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 280] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(43, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1857}",
      "\\sqrt{1853}",
      "47",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(43-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1857}$。",
    "difficulty": "基礎",
    "id": "mb280"
  },
  {
    "category": "數與式",
    "question": "[題號 281] 已知等差數列首項 $a_1 = 45$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "72",
      "75",
      "69",
      "63"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 45 + 9 \\times 3 = 72$。",
    "difficulty": "基礎",
    "id": "mb281"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 282] 二次函數 $y = (x - 44)^2 + 87$ 之圖形頂點坐標為何？",
    "options": [
      "(44, 87)",
      "(-44, 87)",
      "(44, -87)",
      "(87, 44)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (44, 87)$。",
    "difficulty": "基礎",
    "id": "mb282"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 283] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb283"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 284] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb284"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 285] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb285"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 286] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(44, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{1944}",
      "\\sqrt{1940}",
      "48",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(44-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{1944}$。",
    "difficulty": "基礎",
    "id": "mb286"
  },
  {
    "category": "數與式",
    "question": "[題號 287] 已知等差數列首項 $a_1 = 46$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "82",
      "86",
      "78",
      "73"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 46 + 9 \\times 4 = 82$。",
    "difficulty": "基礎",
    "id": "mb287"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 288] 二次函數 $y = (x - 45)^2 + 89$ 之圖形頂點坐標為何？",
    "options": [
      "(45, 89)",
      "(-45, 89)",
      "(45, -89)",
      "(89, 45)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (45, 89)$。",
    "difficulty": "基礎",
    "id": "mb288"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 289] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb289"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 290] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb290"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 291] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb291"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 292] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(45, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2033}",
      "\\sqrt{2029}",
      "49",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(45-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2033}$。",
    "difficulty": "基礎",
    "id": "mb292"
  },
  {
    "category": "數與式",
    "question": "[題號 293] 已知等差數列首項 $a_1 = 47$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "65",
      "67",
      "63",
      "56"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 47 + 9 \\times 2 = 65$。",
    "difficulty": "基礎",
    "id": "mb293"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 294] 二次函數 $y = (x - 46)^2 + 91$ 之圖形頂點坐標為何？",
    "options": [
      "(46, 91)",
      "(-46, 91)",
      "(46, -91)",
      "(91, 46)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (46, 91)$。",
    "difficulty": "基礎",
    "id": "mb294"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 295] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb295"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 296] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb296"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 297] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb297"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 298] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(46, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2124}",
      "\\sqrt{2120}",
      "50",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(46-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2124}$。",
    "difficulty": "基礎",
    "id": "mb298"
  },
  {
    "category": "數與式",
    "question": "[題號 299] 已知等差數列首項 $a_1 = 48$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "75",
      "78",
      "72",
      "66"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 48 + 9 \\times 3 = 75$。",
    "difficulty": "基礎",
    "id": "mb299"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 300] 二次函數 $y = (x - 47)^2 + 93$ 之圖形頂點坐標為何？",
    "options": [
      "(47, 93)",
      "(-47, 93)",
      "(47, -93)",
      "(93, 47)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (47, 93)$。",
    "difficulty": "基礎",
    "id": "mb300"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 301] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb301"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 302] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb302"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 303] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb303"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 304] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(47, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2217}",
      "\\sqrt{2213}",
      "51",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(47-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2217}$。",
    "difficulty": "基礎",
    "id": "mb304"
  },
  {
    "category": "數與式",
    "question": "[題號 305] 已知等差數列首項 $a_1 = 49$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "85",
      "89",
      "81",
      "76"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 49 + 9 \\times 4 = 85$。",
    "difficulty": "基礎",
    "id": "mb305"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 306] 二次函數 $y = (x - 48)^2 + 95$ 之圖形頂點坐標為何？",
    "options": [
      "(48, 95)",
      "(-48, 95)",
      "(48, -95)",
      "(95, 48)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (48, 95)$。",
    "difficulty": "基礎",
    "id": "mb306"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 307] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb307"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 308] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb308"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 309] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb309"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 310] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(48, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2312}",
      "\\sqrt{2308}",
      "52",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(48-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2312}$。",
    "difficulty": "基礎",
    "id": "mb310"
  },
  {
    "category": "數與式",
    "question": "[題號 311] 已知等差數列首項 $a_1 = 50$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "68",
      "70",
      "66",
      "59"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 50 + 9 \\times 2 = 68$。",
    "difficulty": "基礎",
    "id": "mb311"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 312] 二次函數 $y = (x - 49)^2 + 97$ 之圖形頂點坐標為何？",
    "options": [
      "(49, 97)",
      "(-49, 97)",
      "(49, -97)",
      "(97, 49)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (49, 97)$。",
    "difficulty": "基礎",
    "id": "mb312"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 313] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb313"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 314] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb314"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 315] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb315"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 316] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(49, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2409}",
      "\\sqrt{2405}",
      "53",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(49-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2409}$。",
    "difficulty": "基礎",
    "id": "mb316"
  },
  {
    "category": "數與式",
    "question": "[題號 317] 已知等差數列首項 $a_1 = 51$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "78",
      "81",
      "75",
      "69"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 51 + 9 \\times 3 = 78$。",
    "difficulty": "基礎",
    "id": "mb317"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 318] 二次函數 $y = (x - 50)^2 + 99$ 之圖形頂點坐標為何？",
    "options": [
      "(50, 99)",
      "(-50, 99)",
      "(50, -99)",
      "(99, 50)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (50, 99)$。",
    "difficulty": "基礎",
    "id": "mb318"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 319] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb319"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 320] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb320"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 321] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb321"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 322] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(50, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2508}",
      "\\sqrt{2504}",
      "54",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(50-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2508}$。",
    "difficulty": "基礎",
    "id": "mb322"
  },
  {
    "category": "數與式",
    "question": "[題號 323] 已知等差數列首項 $a_1 = 52$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "88",
      "92",
      "84",
      "79"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 52 + 9 \\times 4 = 88$。",
    "difficulty": "基礎",
    "id": "mb323"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 324] 二次函數 $y = (x - 51)^2 + 101$ 之圖形頂點坐標為何？",
    "options": [
      "(51, 101)",
      "(-51, 101)",
      "(51, -101)",
      "(101, 51)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (51, 101)$。",
    "difficulty": "基礎",
    "id": "mb324"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 325] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb325"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 326] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb326"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 327] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb327"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 328] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(51, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2609}",
      "\\sqrt{2605}",
      "55",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(51-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2609}$。",
    "difficulty": "基礎",
    "id": "mb328"
  },
  {
    "category": "數與式",
    "question": "[題號 329] 已知等差數列首項 $a_1 = 53$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "71",
      "73",
      "69",
      "62"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 53 + 9 \\times 2 = 71$。",
    "difficulty": "基礎",
    "id": "mb329"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 330] 二次函數 $y = (x - 52)^2 + 103$ 之圖形頂點坐標為何？",
    "options": [
      "(52, 103)",
      "(-52, 103)",
      "(52, -103)",
      "(103, 52)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (52, 103)$。",
    "difficulty": "基礎",
    "id": "mb330"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 331] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb331"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 332] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb332"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 333] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb333"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 334] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(52, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2712}",
      "\\sqrt{2708}",
      "56",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(52-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2712}$。",
    "difficulty": "基礎",
    "id": "mb334"
  },
  {
    "category": "數與式",
    "question": "[題號 335] 已知等差數列首項 $a_1 = 54$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "81",
      "84",
      "78",
      "72"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 54 + 9 \\times 3 = 81$。",
    "difficulty": "基礎",
    "id": "mb335"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 336] 二次函數 $y = (x - 53)^2 + 105$ 之圖形頂點坐標為何？",
    "options": [
      "(53, 105)",
      "(-53, 105)",
      "(53, -105)",
      "(105, 53)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (53, 105)$。",
    "difficulty": "基礎",
    "id": "mb336"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 337] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb337"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 338] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb338"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 339] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb339"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 340] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(53, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2817}",
      "\\sqrt{2813}",
      "57",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(53-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2817}$。",
    "difficulty": "基礎",
    "id": "mb340"
  },
  {
    "category": "數與式",
    "question": "[題號 341] 已知等差數列首項 $a_1 = 55$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "91",
      "95",
      "87",
      "82"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 55 + 9 \\times 4 = 91$。",
    "difficulty": "基礎",
    "id": "mb341"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 342] 二次函數 $y = (x - 54)^2 + 107$ 之圖形頂點坐標為何？",
    "options": [
      "(54, 107)",
      "(-54, 107)",
      "(54, -107)",
      "(107, 54)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (54, 107)$。",
    "difficulty": "基礎",
    "id": "mb342"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 343] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb343"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 344] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb344"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 345] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb345"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 346] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(54, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{2924}",
      "\\sqrt{2920}",
      "58",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(54-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{2924}$。",
    "difficulty": "基礎",
    "id": "mb346"
  },
  {
    "category": "數與式",
    "question": "[題號 347] 已知等差數列首項 $a_1 = 56$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "74",
      "76",
      "72",
      "65"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 56 + 9 \\times 2 = 74$。",
    "difficulty": "基礎",
    "id": "mb347"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 348] 二次函數 $y = (x - 55)^2 + 109$ 之圖形頂點坐標為何？",
    "options": [
      "(55, 109)",
      "(-55, 109)",
      "(55, -109)",
      "(109, 55)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (55, 109)$。",
    "difficulty": "基礎",
    "id": "mb348"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 349] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb349"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 350] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb350"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 351] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb351"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 352] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(55, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3033}",
      "\\sqrt{3029}",
      "59",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(55-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3033}$。",
    "difficulty": "基礎",
    "id": "mb352"
  },
  {
    "category": "數與式",
    "question": "[題號 353] 已知等差數列首項 $a_1 = 57$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "84",
      "87",
      "81",
      "75"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 57 + 9 \\times 3 = 84$。",
    "difficulty": "基礎",
    "id": "mb353"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 354] 二次函數 $y = (x - 56)^2 + 111$ 之圖形頂點坐標為何？",
    "options": [
      "(56, 111)",
      "(-56, 111)",
      "(56, -111)",
      "(111, 56)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (56, 111)$。",
    "difficulty": "基礎",
    "id": "mb354"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 355] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb355"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 356] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb356"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 357] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb357"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 358] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(56, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3144}",
      "\\sqrt{3140}",
      "60",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(56-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3144}$。",
    "difficulty": "基礎",
    "id": "mb358"
  },
  {
    "category": "數與式",
    "question": "[題號 359] 已知等差數列首項 $a_1 = 58$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "94",
      "98",
      "90",
      "85"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 58 + 9 \\times 4 = 94$。",
    "difficulty": "基礎",
    "id": "mb359"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 360] 二次函數 $y = (x - 57)^2 + 113$ 之圖形頂點坐標為何？",
    "options": [
      "(57, 113)",
      "(-57, 113)",
      "(57, -113)",
      "(113, 57)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (57, 113)$。",
    "difficulty": "基礎",
    "id": "mb360"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 361] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb361"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 362] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb362"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 363] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb363"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 364] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(57, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3257}",
      "\\sqrt{3253}",
      "61",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(57-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3257}$。",
    "difficulty": "基礎",
    "id": "mb364"
  },
  {
    "category": "數與式",
    "question": "[題號 365] 已知等差數列首項 $a_1 = 59$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "77",
      "79",
      "75",
      "68"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 59 + 9 \\times 2 = 77$。",
    "difficulty": "基礎",
    "id": "mb365"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 366] 二次函數 $y = (x - 58)^2 + 115$ 之圖形頂點坐標為何？",
    "options": [
      "(58, 115)",
      "(-58, 115)",
      "(58, -115)",
      "(115, 58)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (58, 115)$。",
    "difficulty": "基礎",
    "id": "mb366"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 367] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb367"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 368] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb368"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 369] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb369"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 370] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(58, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3372}",
      "\\sqrt{3368}",
      "62",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(58-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3372}$。",
    "difficulty": "基礎",
    "id": "mb370"
  },
  {
    "category": "數與式",
    "question": "[題號 371] 已知等差數列首項 $a_1 = 60$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "87",
      "90",
      "84",
      "78"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 60 + 9 \\times 3 = 87$。",
    "difficulty": "基礎",
    "id": "mb371"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 372] 二次函數 $y = (x - 59)^2 + 117$ 之圖形頂點坐標為何？",
    "options": [
      "(59, 117)",
      "(-59, 117)",
      "(59, -117)",
      "(117, 59)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (59, 117)$。",
    "difficulty": "基礎",
    "id": "mb372"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 373] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb373"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 374] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb374"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 375] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb375"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 376] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(59, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3489}",
      "\\sqrt{3485}",
      "63",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(59-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3489}$。",
    "difficulty": "基礎",
    "id": "mb376"
  },
  {
    "category": "數與式",
    "question": "[題號 377] 已知等差數列首項 $a_1 = 61$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "97",
      "101",
      "93",
      "88"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 61 + 9 \\times 4 = 97$。",
    "difficulty": "基礎",
    "id": "mb377"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 378] 二次函數 $y = (x - 60)^2 + 119$ 之圖形頂點坐標為何？",
    "options": [
      "(60, 119)",
      "(-60, 119)",
      "(60, -119)",
      "(119, 60)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (60, 119)$。",
    "difficulty": "基礎",
    "id": "mb378"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 379] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb379"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 380] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb380"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 381] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb381"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 382] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(60, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3608}",
      "\\sqrt{3604}",
      "64",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(60-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3608}$。",
    "difficulty": "基礎",
    "id": "mb382"
  },
  {
    "category": "數與式",
    "question": "[題號 383] 已知等差數列首項 $a_1 = 62$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "80",
      "82",
      "78",
      "71"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 62 + 9 \\times 2 = 80$。",
    "difficulty": "基礎",
    "id": "mb383"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 384] 二次函數 $y = (x - 61)^2 + 121$ 之圖形頂點坐標為何？",
    "options": [
      "(61, 121)",
      "(-61, 121)",
      "(61, -121)",
      "(121, 61)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (61, 121)$。",
    "difficulty": "基礎",
    "id": "mb384"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 385] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb385"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 386] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb386"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 387] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb387"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 388] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(61, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3729}",
      "\\sqrt{3725}",
      "65",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(61-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3729}$。",
    "difficulty": "基礎",
    "id": "mb388"
  },
  {
    "category": "數與式",
    "question": "[題號 389] 已知等差數列首項 $a_1 = 63$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "90",
      "93",
      "87",
      "81"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 63 + 9 \\times 3 = 90$。",
    "difficulty": "基礎",
    "id": "mb389"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 390] 二次函數 $y = (x - 62)^2 + 123$ 之圖形頂點坐標為何？",
    "options": [
      "(62, 123)",
      "(-62, 123)",
      "(62, -123)",
      "(123, 62)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (62, 123)$。",
    "difficulty": "基礎",
    "id": "mb390"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 391] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb391"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 392] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb392"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 393] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb393"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 394] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(62, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3852}",
      "\\sqrt{3848}",
      "66",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(62-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3852}$。",
    "difficulty": "基礎",
    "id": "mb394"
  },
  {
    "category": "數與式",
    "question": "[題號 395] 已知等差數列首項 $a_1 = 64$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "100",
      "104",
      "96",
      "91"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 64 + 9 \\times 4 = 100$。",
    "difficulty": "基礎",
    "id": "mb395"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 396] 二次函數 $y = (x - 63)^2 + 125$ 之圖形頂點坐標為何？",
    "options": [
      "(63, 125)",
      "(-63, 125)",
      "(63, -125)",
      "(125, 63)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (63, 125)$。",
    "difficulty": "基礎",
    "id": "mb396"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 397] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb397"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 398] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb398"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 399] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb399"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 400] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(63, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{3977}",
      "\\sqrt{3973}",
      "67",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(63-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{3977}$。",
    "difficulty": "基礎",
    "id": "mb400"
  },
  {
    "category": "數與式",
    "question": "[題號 401] 已知等差數列首項 $a_1 = 65$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "83",
      "85",
      "81",
      "74"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 65 + 9 \\times 2 = 83$。",
    "difficulty": "基礎",
    "id": "mb401"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 402] 二次函數 $y = (x - 64)^2 + 127$ 之圖形頂點坐標為何？",
    "options": [
      "(64, 127)",
      "(-64, 127)",
      "(64, -127)",
      "(127, 64)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (64, 127)$。",
    "difficulty": "基礎",
    "id": "mb402"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 403] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb403"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 404] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb404"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 405] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb405"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 406] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(64, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4104}",
      "\\sqrt{4100}",
      "68",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(64-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4104}$。",
    "difficulty": "基礎",
    "id": "mb406"
  },
  {
    "category": "數與式",
    "question": "[題號 407] 已知等差數列首項 $a_1 = 66$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "93",
      "96",
      "90",
      "84"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 66 + 9 \\times 3 = 93$。",
    "difficulty": "基礎",
    "id": "mb407"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 408] 二次函數 $y = (x - 65)^2 + 129$ 之圖形頂點坐標為何？",
    "options": [
      "(65, 129)",
      "(-65, 129)",
      "(65, -129)",
      "(129, 65)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (65, 129)$。",
    "difficulty": "基礎",
    "id": "mb408"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 409] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb409"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 410] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb410"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 411] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb411"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 412] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(65, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4233}",
      "\\sqrt{4229}",
      "69",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(65-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4233}$。",
    "difficulty": "基礎",
    "id": "mb412"
  },
  {
    "category": "數與式",
    "question": "[題號 413] 已知等差數列首項 $a_1 = 67$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "103",
      "107",
      "99",
      "94"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 67 + 9 \\times 4 = 103$。",
    "difficulty": "基礎",
    "id": "mb413"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 414] 二次函數 $y = (x - 66)^2 + 131$ 之圖形頂點坐標為何？",
    "options": [
      "(66, 131)",
      "(-66, 131)",
      "(66, -131)",
      "(131, 66)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (66, 131)$。",
    "difficulty": "基礎",
    "id": "mb414"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 415] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb415"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 416] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb416"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 417] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb417"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 418] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(66, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4364}",
      "\\sqrt{4360}",
      "70",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(66-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4364}$。",
    "difficulty": "基礎",
    "id": "mb418"
  },
  {
    "category": "數與式",
    "question": "[題號 419] 已知等差數列首項 $a_1 = 68$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "86",
      "88",
      "84",
      "77"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 68 + 9 \\times 2 = 86$。",
    "difficulty": "基礎",
    "id": "mb419"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 420] 二次函數 $y = (x - 67)^2 + 133$ 之圖形頂點坐標為何？",
    "options": [
      "(67, 133)",
      "(-67, 133)",
      "(67, -133)",
      "(133, 67)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (67, 133)$。",
    "difficulty": "基礎",
    "id": "mb420"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 421] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb421"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 422] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb422"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 423] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb423"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 424] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(67, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4497}",
      "\\sqrt{4493}",
      "71",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(67-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4497}$。",
    "difficulty": "基礎",
    "id": "mb424"
  },
  {
    "category": "數與式",
    "question": "[題號 425] 已知等差數列首項 $a_1 = 69$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "96",
      "99",
      "93",
      "87"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 69 + 9 \\times 3 = 96$。",
    "difficulty": "基礎",
    "id": "mb425"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 426] 二次函數 $y = (x - 68)^2 + 135$ 之圖形頂點坐標為何？",
    "options": [
      "(68, 135)",
      "(-68, 135)",
      "(68, -135)",
      "(135, 68)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (68, 135)$。",
    "difficulty": "基礎",
    "id": "mb426"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 427] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb427"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 428] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb428"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 429] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb429"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 430] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(68, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4632}",
      "\\sqrt{4628}",
      "72",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(68-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4632}$。",
    "difficulty": "基礎",
    "id": "mb430"
  },
  {
    "category": "數與式",
    "question": "[題號 431] 已知等差數列首項 $a_1 = 70$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "106",
      "110",
      "102",
      "97"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 70 + 9 \\times 4 = 106$。",
    "difficulty": "基礎",
    "id": "mb431"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 432] 二次函數 $y = (x - 69)^2 + 137$ 之圖形頂點坐標為何？",
    "options": [
      "(69, 137)",
      "(-69, 137)",
      "(69, -137)",
      "(137, 69)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (69, 137)$。",
    "difficulty": "基礎",
    "id": "mb432"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 433] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb433"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 434] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb434"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 435] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb435"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 436] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(69, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4769}",
      "\\sqrt{4765}",
      "73",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(69-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4769}$。",
    "difficulty": "基礎",
    "id": "mb436"
  },
  {
    "category": "數與式",
    "question": "[題號 437] 已知等差數列首項 $a_1 = 71$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "89",
      "91",
      "87",
      "80"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 71 + 9 \\times 2 = 89$。",
    "difficulty": "基礎",
    "id": "mb437"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 438] 二次函數 $y = (x - 70)^2 + 139$ 之圖形頂點坐標為何？",
    "options": [
      "(70, 139)",
      "(-70, 139)",
      "(70, -139)",
      "(139, 70)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (70, 139)$。",
    "difficulty": "基礎",
    "id": "mb438"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 439] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb439"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 440] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb440"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 441] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb441"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 442] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(70, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{4908}",
      "\\sqrt{4904}",
      "74",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(70-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{4908}$。",
    "difficulty": "基礎",
    "id": "mb442"
  },
  {
    "category": "數與式",
    "question": "[題號 443] 已知等差數列首項 $a_1 = 72$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "99",
      "102",
      "96",
      "90"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 72 + 9 \\times 3 = 99$。",
    "difficulty": "基礎",
    "id": "mb443"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 444] 二次函數 $y = (x - 71)^2 + 141$ 之圖形頂點坐標為何？",
    "options": [
      "(71, 141)",
      "(-71, 141)",
      "(71, -141)",
      "(141, 71)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (71, 141)$。",
    "difficulty": "基礎",
    "id": "mb444"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 445] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb445"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 446] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb446"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 447] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb447"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 448] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(71, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5049}",
      "\\sqrt{5045}",
      "75",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(71-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5049}$。",
    "difficulty": "基礎",
    "id": "mb448"
  },
  {
    "category": "數與式",
    "question": "[題號 449] 已知等差數列首項 $a_1 = 73$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "109",
      "113",
      "105",
      "100"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 73 + 9 \\times 4 = 109$。",
    "difficulty": "基礎",
    "id": "mb449"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 450] 二次函數 $y = (x - 72)^2 + 143$ 之圖形頂點坐標為何？",
    "options": [
      "(72, 143)",
      "(-72, 143)",
      "(72, -143)",
      "(143, 72)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (72, 143)$。",
    "difficulty": "基礎",
    "id": "mb450"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 451] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb451"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 452] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb452"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 453] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb453"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 454] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(72, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5192}",
      "\\sqrt{5188}",
      "76",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(72-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5192}$。",
    "difficulty": "基礎",
    "id": "mb454"
  },
  {
    "category": "數與式",
    "question": "[題號 455] 已知等差數列首項 $a_1 = 74$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "92",
      "94",
      "90",
      "83"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 74 + 9 \\times 2 = 92$。",
    "difficulty": "基礎",
    "id": "mb455"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 456] 二次函數 $y = (x - 73)^2 + 145$ 之圖形頂點坐標為何？",
    "options": [
      "(73, 145)",
      "(-73, 145)",
      "(73, -145)",
      "(145, 73)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (73, 145)$。",
    "difficulty": "基礎",
    "id": "mb456"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 457] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb457"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 458] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb458"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 459] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb459"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 460] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(73, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5337}",
      "\\sqrt{5333}",
      "77",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(73-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5337}$。",
    "difficulty": "基礎",
    "id": "mb460"
  },
  {
    "category": "數與式",
    "question": "[題號 461] 已知等差數列首項 $a_1 = 75$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "102",
      "105",
      "99",
      "93"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 75 + 9 \\times 3 = 102$。",
    "difficulty": "基礎",
    "id": "mb461"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 462] 二次函數 $y = (x - 74)^2 + 147$ 之圖形頂點坐標為何？",
    "options": [
      "(74, 147)",
      "(-74, 147)",
      "(74, -147)",
      "(147, 74)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (74, 147)$。",
    "difficulty": "基礎",
    "id": "mb462"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 463] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb463"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 464] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb464"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 465] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb465"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 466] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(74, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5484}",
      "\\sqrt{5480}",
      "78",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(74-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5484}$。",
    "difficulty": "基礎",
    "id": "mb466"
  },
  {
    "category": "數與式",
    "question": "[題號 467] 已知等差數列首項 $a_1 = 76$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "112",
      "116",
      "108",
      "103"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 76 + 9 \\times 4 = 112$。",
    "difficulty": "基礎",
    "id": "mb467"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 468] 二次函數 $y = (x - 75)^2 + 149$ 之圖形頂點坐標為何？",
    "options": [
      "(75, 149)",
      "(-75, 149)",
      "(75, -149)",
      "(149, 75)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (75, 149)$。",
    "difficulty": "基礎",
    "id": "mb468"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 469] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb469"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 470] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb470"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 471] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb471"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 472] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(75, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5633}",
      "\\sqrt{5629}",
      "79",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(75-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5633}$。",
    "difficulty": "基礎",
    "id": "mb472"
  },
  {
    "category": "數與式",
    "question": "[題號 473] 已知等差數列首項 $a_1 = 77$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "95",
      "97",
      "93",
      "86"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 77 + 9 \\times 2 = 95$。",
    "difficulty": "基礎",
    "id": "mb473"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 474] 二次函數 $y = (x - 76)^2 + 151$ 之圖形頂點坐標為何？",
    "options": [
      "(76, 151)",
      "(-76, 151)",
      "(76, -151)",
      "(151, 76)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (76, 151)$。",
    "difficulty": "基礎",
    "id": "mb474"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 475] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb475"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 476] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb476"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 477] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb477"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 478] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(76, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5784}",
      "\\sqrt{5780}",
      "80",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(76-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5784}$。",
    "difficulty": "基礎",
    "id": "mb478"
  },
  {
    "category": "數與式",
    "question": "[題號 479] 已知等差數列首項 $a_1 = 78$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "105",
      "108",
      "102",
      "96"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 78 + 9 \\times 3 = 105$。",
    "difficulty": "基礎",
    "id": "mb479"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 480] 二次函數 $y = (x - 77)^2 + 153$ 之圖形頂點坐標為何？",
    "options": [
      "(77, 153)",
      "(-77, 153)",
      "(77, -153)",
      "(153, 77)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (77, 153)$。",
    "difficulty": "基礎",
    "id": "mb480"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 481] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb481"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 482] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb482"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 483] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb483"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 484] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(77, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{5937}",
      "\\sqrt{5933}",
      "81",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(77-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{5937}$。",
    "difficulty": "基礎",
    "id": "mb484"
  },
  {
    "category": "數與式",
    "question": "[題號 485] 已知等差數列首項 $a_1 = 79$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "115",
      "119",
      "111",
      "106"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 79 + 9 \\times 4 = 115$。",
    "difficulty": "基礎",
    "id": "mb485"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 486] 二次函數 $y = (x - 78)^2 + 155$ 之圖形頂點坐標為何？",
    "options": [
      "(78, 155)",
      "(-78, 155)",
      "(78, -155)",
      "(155, 78)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (78, 155)$。",
    "difficulty": "基礎",
    "id": "mb486"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 487] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb487"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 488] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb488"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 489] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb489"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 490] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(78, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{6092}",
      "\\sqrt{6088}",
      "82",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(78-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{6092}$。",
    "difficulty": "基礎",
    "id": "mb490"
  },
  {
    "category": "數與式",
    "question": "[題號 491] 已知等差數列首項 $a_1 = 80$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "98",
      "100",
      "96",
      "89"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 80 + 9 \\times 2 = 98$。",
    "difficulty": "基礎",
    "id": "mb491"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 492] 二次函數 $y = (x - 79)^2 + 157$ 之圖形頂點坐標為何？",
    "options": [
      "(79, 157)",
      "(-79, 157)",
      "(79, -157)",
      "(157, 79)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (79, 157)$。",
    "difficulty": "基礎",
    "id": "mb492"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 493] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb493"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 494] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb494"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 495] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb495"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 496] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(79, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{6249}",
      "\\sqrt{6245}",
      "83",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(79-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{6249}$。",
    "difficulty": "基礎",
    "id": "mb496"
  },
  {
    "category": "數與式",
    "question": "[題號 497] 已知等差數列首項 $a_1 = 81$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "108",
      "111",
      "105",
      "99"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 81 + 9 \\times 3 = 108$。",
    "difficulty": "基礎",
    "id": "mb497"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 498] 二次函數 $y = (x - 80)^2 + 159$ 之圖形頂點坐標為何？",
    "options": [
      "(80, 159)",
      "(-80, 159)",
      "(80, -159)",
      "(159, 80)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (80, 159)$。",
    "difficulty": "基礎",
    "id": "mb498"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 499] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb499"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 500] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb500"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 501] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb501"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 502] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(80, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{6408}",
      "\\sqrt{6404}",
      "84",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(80-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{6408}$。",
    "difficulty": "基礎",
    "id": "mb502"
  },
  {
    "category": "數與式",
    "question": "[題號 503] 已知等差數列首項 $a_1 = 82$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "118",
      "122",
      "114",
      "109"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 82 + 9 \\times 4 = 118$。",
    "difficulty": "基礎",
    "id": "mb503"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 504] 二次函數 $y = (x - 81)^2 + 161$ 之圖形頂點坐標為何？",
    "options": [
      "(81, 161)",
      "(-81, 161)",
      "(81, -161)",
      "(161, 81)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (81, 161)$。",
    "difficulty": "基礎",
    "id": "mb504"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 505] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb505"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 506] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb506"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 507] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb507"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 508] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(81, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{6569}",
      "\\sqrt{6565}",
      "85",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(81-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{6569}$。",
    "difficulty": "基礎",
    "id": "mb508"
  },
  {
    "category": "數與式",
    "question": "[題號 509] 已知等差數列首項 $a_1 = 83$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "101",
      "103",
      "99",
      "92"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 83 + 9 \\times 2 = 101$。",
    "difficulty": "基礎",
    "id": "mb509"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 510] 二次函數 $y = (x - 82)^2 + 163$ 之圖形頂點坐標為何？",
    "options": [
      "(82, 163)",
      "(-82, 163)",
      "(82, -163)",
      "(163, 82)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (82, 163)$。",
    "difficulty": "基礎",
    "id": "mb510"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 511] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb511"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 512] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb512"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 513] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb513"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 514] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(82, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{6732}",
      "\\sqrt{6728}",
      "86",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(82-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{6732}$。",
    "difficulty": "基礎",
    "id": "mb514"
  },
  {
    "category": "數與式",
    "question": "[題號 515] 已知等差數列首項 $a_1 = 84$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "111",
      "114",
      "108",
      "102"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 84 + 9 \\times 3 = 111$。",
    "difficulty": "基礎",
    "id": "mb515"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 516] 二次函數 $y = (x - 83)^2 + 165$ 之圖形頂點坐標為何？",
    "options": [
      "(83, 165)",
      "(-83, 165)",
      "(83, -165)",
      "(165, 83)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (83, 165)$。",
    "difficulty": "基礎",
    "id": "mb516"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 517] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb517"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 518] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb518"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 519] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb519"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 520] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(83, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{6897}",
      "\\sqrt{6893}",
      "87",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(83-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{6897}$。",
    "difficulty": "基礎",
    "id": "mb520"
  },
  {
    "category": "數與式",
    "question": "[題號 521] 已知等差數列首項 $a_1 = 85$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "121",
      "125",
      "117",
      "112"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 85 + 9 \\times 4 = 121$。",
    "difficulty": "基礎",
    "id": "mb521"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 522] 二次函數 $y = (x - 84)^2 + 167$ 之圖形頂點坐標為何？",
    "options": [
      "(84, 167)",
      "(-84, 167)",
      "(84, -167)",
      "(167, 84)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (84, 167)$。",
    "difficulty": "基礎",
    "id": "mb522"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 523] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb523"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 524] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb524"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 525] 轉移矩陣 $M = \\begin{pmatrix} 0.6 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.4",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.6 + b = 1 \\implies b = 0.4$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb525"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 526] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(84, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{7064}",
      "\\sqrt{7060}",
      "88",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(84-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{7064}$。",
    "difficulty": "基礎",
    "id": "mb526"
  },
  {
    "category": "數與式",
    "question": "[題號 527] 已知等差數列首項 $a_1 = 86$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "104",
      "106",
      "102",
      "95"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 86 + 9 \\times 2 = 104$。",
    "difficulty": "基礎",
    "id": "mb527"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 528] 二次函數 $y = (x - 85)^2 + 169$ 之圖形頂點坐標為何？",
    "options": [
      "(85, 169)",
      "(-85, 169)",
      "(85, -169)",
      "(169, 85)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (85, 169)$。",
    "difficulty": "基礎",
    "id": "mb528"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 529] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.2$，得 $0$ 元之機率為 $0.8$，求抽一次之期望值？",
    "options": [
      "20 元",
      "30 元",
      "10 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.2 + 0 \\times 0.8 = 20$ 元。",
    "difficulty": "基礎",
    "id": "mb529"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 530] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb530"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 531] 轉移矩陣 $M = \\begin{pmatrix} 0.7 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.3",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.7 + b = 1 \\implies b = 0.3$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb531"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 532] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(85, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{7233}",
      "\\sqrt{7229}",
      "89",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(85-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{7233}$。",
    "difficulty": "基礎",
    "id": "mb532"
  },
  {
    "category": "數與式",
    "question": "[題號 533] 已知等差數列首項 $a_1 = 87$，公差 $d = 3$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "114",
      "117",
      "111",
      "105"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 87 + 9 \\times 3 = 114$。",
    "difficulty": "基礎",
    "id": "mb533"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 534] 二次函數 $y = (x - 86)^2 + 171$ 之圖形頂點坐標為何？",
    "options": [
      "(86, 171)",
      "(-86, 171)",
      "(86, -171)",
      "(171, 86)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (86, 171)$。",
    "difficulty": "基礎",
    "id": "mb534"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 535] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.3$，得 $0$ 元之機率為 $0.7$，求抽一次之期望值？",
    "options": [
      "30 元",
      "40 元",
      "20 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.3 + 0 \\times 0.7 = 30$ 元。",
    "difficulty": "基礎",
    "id": "mb535"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 536] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 4$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "1.6",
      "0.4",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{4}{2} = 1.6$。",
    "difficulty": "中等",
    "id": "mb536"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 537] 轉移矩陣 $M = \\begin{pmatrix} 0.3 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.7",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.3 + b = 1 \\implies b = 0.7$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb537"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 538] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(86, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{7404}",
      "\\sqrt{7400}",
      "90",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(86-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{7404}$。",
    "difficulty": "基礎",
    "id": "mb538"
  },
  {
    "category": "數與式",
    "question": "[題號 539] 已知等差數列首項 $a_1 = 88$，公差 $d = 4$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "124",
      "128",
      "120",
      "115"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 88 + 9 \\times 4 = 124$。",
    "difficulty": "基礎",
    "id": "mb539"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 540] 二次函數 $y = (x - 87)^2 + 173$ 之圖形頂點坐標為何？",
    "options": [
      "(87, 173)",
      "(-87, 173)",
      "(87, -173)",
      "(173, 87)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (87, 173)$。",
    "difficulty": "基礎",
    "id": "mb540"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 541] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.4$，得 $0$ 元之機率為 $0.6$，求抽一次之期望值？",
    "options": [
      "40 元",
      "50 元",
      "30 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.4 + 0 \\times 0.6 = 40$ 元。",
    "difficulty": "基礎",
    "id": "mb541"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 542] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 6$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "2.4",
      "0.3",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{6}{2} = 2.4$。",
    "difficulty": "中等",
    "id": "mb542"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 543] 轉移矩陣 $M = \\begin{pmatrix} 0.4 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.6",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.4 + b = 1 \\implies b = 0.6$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb543"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 544] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(87, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{7577}",
      "\\sqrt{7573}",
      "91",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(87-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{7577}$。",
    "difficulty": "基礎",
    "id": "mb544"
  },
  {
    "category": "數與式",
    "question": "[題號 545] 已知等差數列首項 $a_1 = 89$，公差 $d = 2$，求第 10 項 $a_{10}$ 之值？",
    "options": [
      "107",
      "109",
      "105",
      "98"
    ],
    "answer": 0,
    "explanation": "等差數列通項公式：$a_n = a_1 + (n-1)d \\implies a_{10} = 89 + 9 \\times 2 = 107$。",
    "difficulty": "基礎",
    "id": "mb545"
  },
  {
    "category": "一次與二次函數",
    "question": "[題號 546] 二次函數 $y = (x - 88)^2 + 175$ 之圖形頂點坐標為何？",
    "options": [
      "(88, 175)",
      "(-88, 175)",
      "(88, -175)",
      "(175, 88)"
    ],
    "answer": 0,
    "explanation": "標準頂點式 $y = (x - h)^2 + k$，其拋物線對稱頂點即為 $(h, k) = (88, 175)$。",
    "difficulty": "基礎",
    "id": "mb546"
  },
  {
    "category": "古典機率與期望值",
    "question": "[題號 547] 抽獎箱中有代幣，抽中可得獎金 $100$ 元之機率為 $0.5$，得 $0$ 元之機率為 $0.5$，求抽一次之期望值？",
    "options": [
      "50 元",
      "60 元",
      "40 元",
      "100 元"
    ],
    "answer": 0,
    "explanation": "期望值 $E = 100 \\times 0.5 + 0 \\times 0.5 = 50$ 元。",
    "difficulty": "基礎",
    "id": "mb547"
  },
  {
    "category": "單維與雙維統計數據分析",
    "question": "[題號 548] 兩變數 $x$ 與 $y$ 之相關係數 $r = 0.8$，標準差 $\\sigma_x = 2, \\sigma_y = 2$，則最小平方法迴歸直線之斜率 $b$ 為何？",
    "options": [
      "0.8",
      "0.8",
      "0.8",
      "1.6"
    ],
    "answer": 0,
    "explanation": "迴歸直線斜率公式：$b = r \\frac{\\sigma_y}{\\sigma_x} = 0.8 \\times \\frac{2}{2} = 0.8$。",
    "difficulty": "中等",
    "id": "mb548"
  },
  {
    "category": "矩陣與轉移矩陣",
    "question": "[題號 549] 轉移矩陣 $M = \\begin{pmatrix} 0.5 & a \\\\ b & 0.6 \\end{pmatrix}$，求實數 $a$ 與 $b$ 之值？",
    "options": [
      "a = 0.4, b = 0.5",
      "a = 0.6, b = 0.4",
      "a = 0.5, b = 0.5",
      "a = 0.2, b = 0.8"
    ],
    "answer": 0,
    "explanation": "轉移矩陣的每一行元素總和必須恆等於 1。第一行：$0.5 + b = 1 \\implies b = 0.5$；第二行：$a + 0.6 = 1 \\implies a = 0.4$。",
    "difficulty": "中等",
    "id": "mb549"
  },
  {
    "category": "空間概念與球面幾何",
    "question": "[題號 550] 空間坐標中，點 $A(0, 0, 0)$ 與點 $B(88, 2, 2)$ 之直線距離為何？",
    "options": [
      "\\sqrt{7752}",
      "\\sqrt{7748}",
      "92",
      "4"
    ],
    "answer": 0,
    "explanation": "兩點距離公式：$d = \\sqrt{(88-0)^2 + (2-0)^2 + (2-0)^2} = \\sqrt{7752}$。",
    "difficulty": "基礎",
    "id": "mb550"
  }
];
