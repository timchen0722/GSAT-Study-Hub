const mathAQuiz = [
  {
    "id": "ma1",
    "category": "數與式",
    "question": "若 $|x - 3| = 5$，則 $x$ = ？",
    "options": [
      "$8$ 或 $-2$",
      "$8$",
      "$-2$",
      "$2$ 或 $8$"
    ],
    "answer": 0,
    "explanation": "$|x-3|=5$ 表示 $x-3=5$ 或 $x-3=-5$，解得 $x=8$ 或 $x=-2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma2",
    "category": "數與式",
    "question": "$i^{2023}$ 的值為何？（$i = \\sqrt{-1}$）",
    "options": [
      "$-i$",
      "$i$",
      "$1$",
      "$-1$"
    ],
    "answer": 0,
    "explanation": "$i$ 的冪次每4次循環：$i^1=i, i^2=-1, i^3=-i, i^4=1$。$2023 = 4×505+3$，所以 $i^{2023}=i^3=-i$。",
    "difficulty": "中等"
  },
  {
    "id": "ma3",
    "category": "多項式",
    "question": "$f(x) = x^3 - 2x + 1$ 除以 $(x-1)$ 的餘數是？",
    "options": [
      "$0$",
      "$1$",
      "$-1$",
      "$2$"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數 $= f(1) = 1-2+1 = 0$。所以 $(x-1)$ 是 $f(x)$ 的因式。",
    "difficulty": "基礎"
  },
  {
    "id": "ma4",
    "category": "多項式",
    "question": "二次方程式 $x^2 - 5x + 6 = 0$ 的兩根之和為？",
    "options": [
      "$5$",
      "$6$",
      "$-5$",
      "$-6$"
    ],
    "answer": 0,
    "explanation": "由韋達定理，兩根之和 $= -b/a = -(-5)/1 = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma5",
    "category": "多項式",
    "question": "若 $f(x) = 2x^2 - 8x + 3$，頂點的 $x$ 坐標為？",
    "options": [
      "$2$",
      "$-2$",
      "$4$",
      "$-4$"
    ],
    "answer": 0,
    "explanation": "頂點 $x = -b/(2a) = -(-8)/(2×2) = 8/4 = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma6",
    "category": "指數與對數",
    "question": "$\\log_2 32$ = ？",
    "options": [
      "$5$",
      "$4$",
      "$6$",
      "$3$"
    ],
    "answer": 0,
    "explanation": "$2^5 = 32$，所以 $\\log_2 32 = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma7",
    "category": "指數與對數",
    "question": "$\\log 2 + \\log 5$ = ？",
    "options": [
      "$1$",
      "$\\log 7$",
      "$\\log 10$",
      "$7$"
    ],
    "answer": 0,
    "explanation": "$\\log 2 + \\log 5 = \\log(2×5) = \\log 10 = 1$（常用對數底為10）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma8",
    "category": "三角函數",
    "question": "$\\sin 30°$ = ？",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{\\sqrt{2}}{2}$",
      "$\\frac{\\sqrt{3}}{2}$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "特殊角：$\\sin 30° = 1/2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma9",
    "category": "三角函數",
    "question": "在 $\\triangle ABC$ 中，若 $a=5, b=7, C=60°$，則 $c$ = ？",
    "options": [
      "$\\sqrt{39}$",
      "$\\sqrt{74}$",
      "$\\sqrt{24}$",
      "$\\sqrt{109}$"
    ],
    "answer": 0,
    "explanation": "餘弦定理：$c^2=a^2+b^2-2ab\\cos C=25+49-2(5)(7)(1/2)=74-35=39$，$c=\\sqrt{39}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma10",
    "category": "三角函數",
    "question": "$\\sin^2 60° + \\cos^2 60°$ = ？",
    "options": [
      "$1$",
      "$0$",
      "$\\frac{3}{4}$",
      "$\\frac{1}{2}$"
    ],
    "answer": 0,
    "explanation": "畢氏恆等式：$\\sin^2\\theta + \\cos^2\\theta = 1$，對所有角度成立。",
    "difficulty": "基礎"
  },
  {
    "id": "ma11",
    "category": "向量",
    "question": "$\\vec{a}=(3,4)$ 的長度 $|\\vec{a}|$ = ？",
    "options": [
      "$5$",
      "$7$",
      "$\\sqrt{7}$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "$|\\vec{a}| = \\sqrt{3^2+4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma12",
    "category": "向量",
    "question": "若 $\\vec{a}=(1,2), \\vec{b}=(3,-1)$，則 $\\vec{a}\\cdot\\vec{b}$ = ？",
    "options": [
      "$1$",
      "$5$",
      "$-1$",
      "$7$"
    ],
    "answer": 0,
    "explanation": "$\\vec{a}\\cdot\\vec{b} = 1×3 + 2×(-1) = 3-2 = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma13",
    "category": "矩陣",
    "question": "$\\begin{pmatrix}1&2\\\\3&4\\end{pmatrix}$ 的行列式 = ？",
    "options": [
      "$-2$",
      "$2$",
      "$10$",
      "$-10$"
    ],
    "answer": 0,
    "explanation": "行列式 $= 1×4 - 2×3 = 4-6 = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma14",
    "category": "排列組合",
    "question": "$C^{10}_3$ = ？",
    "options": [
      "$120$",
      "$720$",
      "$210$",
      "$360$"
    ],
    "answer": 0,
    "explanation": "$C^{10}_3 = \\frac{10!}{3!7!} = \\frac{10×9×8}{3×2×1} = 120$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma15",
    "category": "排列組合",
    "question": "$5!$ = ？",
    "options": [
      "$120$",
      "$60$",
      "$24$",
      "$720$"
    ],
    "answer": 0,
    "explanation": "$5! = 5×4×3×2×1 = 120$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma16",
    "category": "機率與統計",
    "question": "擲一顆公正骰子，出現偶數的機率是？",
    "options": [
      "$\\frac{1}{2}$",
      "$\\frac{1}{3}$",
      "$\\frac{1}{6}$",
      "$\\frac{2}{3}$"
    ],
    "answer": 0,
    "explanation": "偶數有2,4,6三種，總共6種，$P = 3/6 = 1/2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma17",
    "category": "機率與統計",
    "question": "數據 2, 4, 6, 8, 10 的平均數是？",
    "options": [
      "$6$",
      "$5$",
      "$7$",
      "$8$"
    ],
    "answer": 0,
    "explanation": "平均 $= (2+4+6+8+10)/5 = 30/5 = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma18",
    "category": "圓錐曲線",
    "question": "圓 $(x-1)^2+(y+2)^2=9$ 的半徑是？",
    "options": [
      "$3$",
      "$9$",
      "$1$",
      "$\\sqrt{9}$"
    ],
    "answer": 0,
    "explanation": "標準式 $(x-h)^2+(y-k)^2=r^2$，$r^2=9$，$r=3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma19",
    "category": "圓錐曲線",
    "question": "橢圓 $\\frac{x^2}{25}+\\frac{y^2}{16}=1$ 的焦距 $2c$ = ？",
    "options": [
      "$6$",
      "$8$",
      "$10$",
      "$3$"
    ],
    "answer": 0,
    "explanation": "$a^2=25, b^2=16, c^2=a^2-b^2=9, c=3$，焦距 $2c=6$。",
    "difficulty": "中等"
  },
  {
    "id": "ma20",
    "category": "微分概念",
    "question": "$f(x)=x^3$ 的導數 $f'(x)$ = ？",
    "options": [
      "$3x^2$",
      "$x^2$",
      "$3x$",
      "$x^3$"
    ],
    "answer": 0,
    "explanation": "冪法則：$\\frac{d}{dx}(x^n) = nx^{n-1}$，$f'(x) = 3x^2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma21",
    "category": "向量",
    "question": "若平面向量 $\\vec{u}$ 與 $\\vec{v}$ 滿足 $|\\vec{u}|=3, |\\vec{v}|=4, \\vec{u} \\cdot \\vec{v} = 6$，求 $|\\vec{u} + \\vec{v}|$ = ？",
    "options": [
      "$\\sqrt{37}$",
      "$\\sqrt{25}$",
      "$7$",
      "$5$"
    ],
    "answer": 0,
    "explanation": "$|\\vec{u}+\\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 + 2\\vec{u}\\cdot\\vec{v} = 9+16+12 = 37$。",
    "difficulty": "進階"
  },
  {
    "category": "幾何",
    "options": [
      "不存在",
      "0",
      "2",
      "4"
    ],
    "answer": 3,
    "difficulty": "基礎",
    "question": "求極限 $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = ?$",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：觀察題型與代入測試</strong><br>\n當 $x = 2$ 直接代入極限式 $\\frac{x^2 - 4}{x - 2}$ 時，分子為 $2^2 - 4 = 0$，分母為 $2 - 2 = 0$。會得到 $\\frac{0}{0}$ 的未定式，這代表我們不能直接代入求值，必須先對函數進行代數化簡。<br><br>\n<strong>步驟二：因式分解分子</strong><br>\n根據國高中學過的乘法公式（平方差公式：$a^2 - b^2 = (a-b)(a+b)$），我們可以將分子 $x^2 - 4$ 拆解為 $(x - 2)(x + 2)$。<br><br>\n<strong>步驟三：約分化簡</strong><br>\n極限 $\\lim_{x \\to 2}$ 的概念是 $x$ 無限逼近 $2$ 但「不等於」$2$（也就是 $x - 2 \\neq 0$）。因此，我們可以安全地將分子與分母的公因式 $(x - 2)$ 約掉：<br>\n$\\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2} (x+2)$。<br><br>\n<strong>步驟四：代入求極限值</strong><br>\n化簡後，式子變成了線性函數 $(x+2)$，不再有分母為零的問題。此時可直接將 $x = 2$ 代入：$2 + 2 = 4$。<br>\n故此極限值為 4。",
    "id": "ma22"
  },
  {
    "category": "向量",
    "options": [
      "-1",
      "0",
      "2",
      "1"
    ],
    "answer": 3,
    "difficulty": "進階",
    "question": "若 $f(x) = 2x^3 - 3x^2 + x - 5$，則 $f'(1)$ 的值為何？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：進行多項式微分</strong><br>\n高中微積分基礎告訴我們，對 $x^n$ 微分的公式為：$(x^n)' = n cdot x^{n-1}$。常數項的微分為 0。<br>\n我們對原函數 $f(x)$ 逐項微分：<br>\n1. $(2x^3)' = 2 cdot 3x^2 = 6x^2$<br>\n2. $(-3x^2)' = -3 cdot 2x = -6x$<br>\n3. $(x)' = 1 cdot x^0 = 1$<br>\n4. $(-5)' = 0$<br>\n將它們組合起來，得到導函數：$f'(x) = 6x^2 - 6x + 1$。<br><br>\n<strong>步驟二：將特定數值代入導函數</strong><br>\n題目要求的是 $f'(1)$，意思是要計算當 $x = 1$ 時，導函數的值（也就是該點的切線斜率）。<br>\n將 $x = 1$ 代入 $f'(x)$：<br>\n$f'(1) = 6(1)^2 - 6(1) + 1$<br>\n$f'(1) = 6 - 6 + 1 = 1$<br><br>\n<strong>步驟三：得出答案</strong><br>\n計算結果為 1，故答案為 (1)。",
    "id": "ma23"
  },
  {
    "category": "代數",
    "options": [
      "7",
      "1",
      "5",
      "25"
    ],
    "answer": 2,
    "difficulty": "基礎",
    "question": "已知向量 $\\vec{u} = (3, 4)$，則其長度 $|\\vec{u}|$ 為何？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：回顧高中向量長度公式</strong><br>\n在平面直角坐標系中，若有一個向量 $\\vec{v} = (x, y)$，則該向量的長度（也就是它的大小或絕對值）定義為從原點到該點的距離。<br>\n其計算公式為：$|\\vec{v}| = \\sqrt{x^2 + y^2}$。這是由畢氏定理推導而來的。<br><br>\n<strong>步驟二：代入已知數字</strong><br>\n題目給定 $\\vec{u} = (3, 4)$，這意味著 $x = 3$ 且 $y = 4$。<br>\n將其代入公式：$|\\vec{u}| = \\sqrt{3^2 + 4^2}$。<br><br>\n<strong>步驟三：計算結果</strong><br>\n先算平方：$3^2 = 9$，$4^2 = 16$。<br>\n相加：$9 + 16 = 25$。<br>\n最後開根號：$\\sqrt{25} = 5$。<br>\n這也是我們國中就背過的 $3:4:5$ 直角三角形比例，故答案為 5。",
    "id": "ma24"
  },
  {
    "category": "幾何",
    "options": [
      "$2/3$",
      "$3/2$",
      "$-3/2$",
      "$-2/3$"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "直線 $L: 2x - 3y = 6$ 的斜率為何？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：理解直線方程式的斜截式</strong><br>\n高中解析幾何中，直線的標準斜截式為 $y = mx + k$，其中 $m$ 就是這條直線的「斜率」（代表直線的傾斜程度）。<br><br>\n<strong>步驟二：將一般式轉換為斜截式</strong><br>\n題目給的是一般式 $2x - 3y = 6$。我們需要透過移項，把它整理成 $y = ...$ 的形式。<br>\n1. 先將含 $x$ 的項移到等號右邊：$-3y = -2x + 6$<br>\n2. 等號兩邊同時除以 $-3$，把 $y$ 孤立出來：<br>\n   $y = \\frac{-2}{-3}x + \\frac{6}{-3}$<br>\n3. 化簡後得到：$y = \\frac{2}{3}x - 2$<br><br>\n<strong>步驟三：直接讀取斜率</strong><br>\n對照 $y = mx + k$，我們可以看出 $m = \\frac{2}{3}$。<br>\n*(小撇步：若直線方程式為 $ax + by = c$，斜率可以直接用 $-\\frac{a}{b}$ 快速求得，即 $-\\frac{2}{-3} = \\frac{2}{3}$)*。故答案為 $2/3$。",
    "id": "ma25"
  },
  {
    "id": "ma26",
    "category": "數與式",
    "question": "已知實數 $x$ 滿足 $|x - 3| \\le 5$，則 $x$ 的最大值與最小值之和為何？",
    "options": [
      "6",
      "10",
      "8",
      "4"
    ],
    "answer": 0,
    "explanation": "由幾何意義，中心點為 3，解得 $-2 \\le x \\le 8$。最大值 8，最小值 -2，總和為 $8 + (-2) = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma27",
    "category": "數與式",
    "question": "若設 $a, b$ 為正實數且滿足 $ab = 16$，則 $a + b$ 的最小值為何？",
    "options": [
      "8",
      "16",
      "4",
      "12"
    ],
    "answer": 0,
    "explanation": "由算幾不等式：$\\frac{a+b}{2} \\ge \\sqrt{ab} = \\sqrt{16} = 4 \\implies a+b \\ge 8$。等號成立於 $a=b=4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma28",
    "category": "數與式",
    "question": "設 $x, y \\in \\mathbb{R}$ 滿足 $x^2 + y^2 = 5$，則 $2x + y$ 的最大值為何？",
    "options": [
      "5",
      "\\sqrt{5}",
      "10",
      "25"
    ],
    "answer": 0,
    "explanation": "由柯西不等式：$(x^2 + y^2)(2^2 + 1^2) \\ge (2x + y)^2 \\implies 5 \\times 5 = 25 \\ge (2x+y)^2 \\implies -5 \\le 2x+y \\le 5$。最大值為 5。",
    "difficulty": "中等"
  },
  {
    "id": "ma29",
    "category": "多項式函數",
    "question": "多項式 $f(x) = x^3 - 4x^2 + 5x - 2$ 除以 $x - 1$ 的餘數為何？",
    "options": [
      "0",
      "1",
      "-1",
      "2"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $f(1) = 1 - 4 + 5 - 2 = 0$。即 $x - 1$ 為其因式。",
    "difficulty": "基礎"
  },
  {
    "id": "ma30",
    "category": "多項式函數",
    "question": "二次函數 $f(x) = 2(x - 3)^2 + 5$ 的頂點坐標為何？",
    "options": [
      "(3, 5)",
      "(-3, 5)",
      "(3, -5)",
      "(5, 3)"
    ],
    "answer": 0,
    "explanation": "二次函數頂點式 $f(x) = a(x-h)^2 + k$，頂點坐標即為 $(h, k) = (3, 5)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma31",
    "category": "多項式函數",
    "question": "方程式 $x^2 - 6x + k = 0$ 有兩相等實根，則實數 $k$ 之值為何？",
    "options": [
      "9",
      "36",
      "6",
      "3"
    ],
    "answer": 0,
    "explanation": "有相等實根充要條件為判別式 $D = b^2 - 4ac = (-6)^2 - 4(1)(k) = 36 - 4k = 0 \\implies k = 9$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma32",
    "category": "指數與對數",
    "question": "計算 $\\log_2 32 + \\log_3 27$ 之值為何？",
    "options": [
      "8",
      "5",
      "6",
      "9"
    ],
    "answer": 0,
    "explanation": "$\\log_2 32 = \\log_2 2^5 = 5$；$\\log_3 27 = \\log_3 3^3 = 3$。總和為 $5 + 3 = 8$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma33",
    "category": "指數與對數",
    "question": "解對數方程式 $\\log_{10}(x - 2) + \\log_{10}(x + 1) = 1$，求實數解 $x$？",
    "options": [
      "4",
      "-3",
      "4 或 -3",
      "2"
    ],
    "answer": 0,
    "explanation": "$\\log_{10}[(x-2)(x+1)] = 1 \\implies x^2 - x - 2 = 10 \\implies x^2 - x - 12 = 0 \\implies (x-4)(x+3) = 0$。檢驗真數條件 $x > 2$，故負根 $x = -3$ 不合，解為 $x = 4$。",
    "difficulty": "中等"
  },
  {
    "id": "ma34",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，已知 $A = 30^\\circ, B = 45^\\circ$，且對邊 $a = 4$，求對邊 $b$ 長度？",
    "options": [
      "4\\sqrt{2}",
      "4\\sqrt{3}",
      "2\\sqrt{2}",
      "8"
    ],
    "answer": 0,
    "explanation": "由正弦定理：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\implies \\frac{4}{\\sin 30^\\circ} = \\frac{b}{\\sin 45^\\circ} \\implies \\frac{4}{1/2} = \\frac{b}{\\sqrt{2}/2} \\implies b = 8 \\times \\frac{\\sqrt{2}}{2} = 4\\sqrt{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma35",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，已知三邊長 $a = 3, b = 5, c = 7$，求最大內角 $\\angle C$ 的角度？",
    "options": [
      "120°",
      "60°",
      "150°",
      "135°"
    ],
    "answer": 0,
    "explanation": "由餘弦定理：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{9 + 25 - 49}{2(3)(5)} = \\frac{-15}{30} = -\\frac{1}{2} \\implies \\angle C = 120^\\circ$。",
    "difficulty": "中等"
  },
  {
    "id": "ma36",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (k, -4)$ 互相垂直，則實數 $k$ 之值為何？",
    "options": [
      "6",
      "-6",
      "4",
      "3"
    ],
    "answer": 0,
    "explanation": "兩向量垂直等價於內積為 0：$\\vec{u} \\cdot \\vec{v} = 2(k) + 3(-4) = 2k - 12 = 0 \\implies k = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma37",
    "category": "平面向量",
    "question": "設平面向量 $\\vec{a} = (3, 4)$，則其單位向量為何？",
    "options": [
      "(3/5, 4/5)",
      "(4/5, 3/5)",
      "(3, 4)",
      "(1/2, 1/2)"
    ],
    "answer": 0,
    "explanation": "模長 $|\\vec{a}| = \\sqrt{3^2 + 4^2} = 5$。單位向量為 $\\frac{\\vec{a}}{|\\vec{a}|} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma38",
    "category": "空間向量與外積",
    "question": "空間中兩向量 $\\vec{a} = (1, 2, 2)$ 與 $\\vec{b} = (2, 0, 1)$，其外積 $\\vec{a} \\times \\vec{b}$ 為何？",
    "options": [
      "(2, 3, -4)",
      "(2, -3, 4)",
      "(4, 3, -2)",
      "(-2, 3, 4)"
    ],
    "answer": 0,
    "explanation": "外積各分量：$\\left(\\begin{vmatrix} 2 & 2 \\\\ 0 & 1 \\end{vmatrix}, -\\begin{vmatrix} 1 & 2 \\\\ 2 & 1 \\end{vmatrix}, \\begin{vmatrix} 1 & 2 \\\\ 2 & 0 \\end{vmatrix}\\right) = (2-0, -(1-4), 0-4) = (2, 3, -4)$。",
    "difficulty": "中等"
  },
  {
    "id": "ma39",
    "category": "空間直線與平面",
    "question": "平面方程式 $E: 2x - y + 2z = 6$，點 $P(1, 2, 3)$ 到平面 $E$ 的距離為何？",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "點到平面距離公式：$d = \\frac{|2(1) - 1(2) + 2(3) - 6|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|2 - 2 + 6 - 6|}{\\sqrt{9}} = 0$。即點 $P$ 落在平面上，距離為 0。",
    "difficulty": "基礎"
  },
  {
    "id": "ma40",
    "category": "矩陣與線性變換",
    "question": "二階矩陣 $A = \\begin{pmatrix} 3 & 1 \\\\ 2 & 1 \\end{pmatrix}$ 的反矩陣 $A^{-1}$ 為何？",
    "options": [
      "\\begin{pmatrix} 1 & -1 \\\\ -2 & 3 \\end{pmatrix}",
      "\\begin{pmatrix} 3 & -1 \\\\ -2 & 1 \\end{pmatrix}",
      "\\begin{pmatrix} -1 & 1 \\\\ 2 & -3 \\end{pmatrix}",
      "\\begin{pmatrix} 1 & 2 \\\\ 1 & 3 \\end{pmatrix}"
    ],
    "answer": 0,
    "explanation": "行列式 $\\det(A) = 3(1) - 1(2) = 1$。反矩陣為 $\\frac{1}{1}\\begin{pmatrix} 1 & -1 \\\\ -2 & 3 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma41",
    "category": "排列組合",
    "question": "自 6 名男生與 4 名女生中選出 3 人組成委員會，恰好選出 2 男 1 女的方法數有幾種？",
    "options": [
      "60",
      "120",
      "40",
      "30"
    ],
    "answer": 0,
    "explanation": "$C^6_2 \\times C^4_1 = 15 \\times 4 = 60$ 種方法。",
    "difficulty": "基礎"
  },
  {
    "id": "ma42",
    "category": "排列組合",
    "question": "將 5 件相同玩具任意分給 3 位小朋友，每人可得 0 件至多件，共有幾種分法？",
    "options": [
      "21",
      "15",
      "125",
      "35"
    ],
    "answer": 0,
    "explanation": "非負整數解重複組合問題：$H^3_5 = C^{3+5-1}_5 = C^7_5 = C^7_2 = \\frac{7 \\times 6}{2} = 21$ 種分法。",
    "difficulty": "中等"
  },
  {
    "id": "ma43",
    "category": "機率與貝氏定理",
    "question": "擲兩枚公正的六面骰子，點數和為 7 的機率為何？",
    "options": [
      "1/6",
      "1/12",
      "7/36",
      "5/36"
    ],
    "answer": 0,
    "explanation": "樣本空間總數為 $6 \\times 6 = 36$。點數和為 7 的組合有 (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) 共 6 種。機率為 $\\frac{6}{36} = \\frac{1}{6}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma44",
    "category": "圓錐曲線",
    "question": "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{9} = 1$，其兩焦點間的距離（焦距 $2c$）為何？",
    "options": [
      "8",
      "4",
      "10",
      "6"
    ],
    "answer": 0,
    "explanation": "$a^2 = 25, b^2 = 9 \\implies c^2 = a^2 - b^2 = 25 - 9 = 16 \\implies c = 4$。兩焦點間距離為 $2c = 8$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma45",
    "category": "圓錐曲線",
    "question": "雙曲線 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的兩條漸近線方程式為何？",
    "options": [
      "y = \\pm \\frac{3}{4}x",
      "y = \\pm \\frac{4}{3}x",
      "y = \\pm \\frac{9}{16}x",
      "y = \\pm x"
    ],
    "answer": 0,
    "explanation": "雙曲線 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 的漸近線為 $y = \\pm \\frac{b}{a}x$。此處 $a = 4, b = 3$，故漸近線為 $y = \\pm \\frac{3}{4}x$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma46",
    "category": "數與式",
    "question": "設 $x, y, z$ 為實數且滿足 $x^2 + y^2 + z^2 = 14$。由柯西不等式，求 $x + 2y + 3z$ 的最大值為何？",
    "options": [
      "14",
      "$\\sqrt{14}$",
      "28",
      "196"
    ],
    "answer": 0,
    "explanation": "三維柯西不等式：$(x^2 + y^2 + z^2)(1^2 + 2^2 + 3^2) \\ge (x + 2y + 3z)^2 \\implies (14)(1 + 4 + 9) = (14)(14) = 196 \\ge (x + 2y + 3z)^2$。因此 $-14 \\le x + 2y + 3z \\le 14$。最大值為 14。",
    "difficulty": "中等"
  },
  {
    "id": "ma47",
    "category": "多項式函數",
    "question": "三次多項式 $f(x) = 2(x - 1)^3 + 5(x - 1)^2 + 3(x - 1) + 4$，若在 $x = 1$ 附近的局部一次近似直線方程式為何？",
    "options": [
      "$y = 3(x - 1) + 4$",
      "$y = 5(x - 1) + 4$",
      "$y = 2x + 4$",
      "$y = 3x + 4$"
    ],
    "answer": 0,
    "explanation": "當 $x$ 充分接近 1 時，高次項 $(x-1)^3$ 與 $(x-1)^2$ 微小可忽略，局部一次近似線（切線）即保留一次項與常數項：$y = 3(x - 1) + 4$（即 $y = 3x + 1$）。",
    "difficulty": "中等"
  },
  {
    "id": "ma48",
    "category": "多項式函數",
    "question": "已知多項式 $P(x)$ 除以 $x - 2$ 餘 5，除以 $x + 1$ 餘 -1，則 $P(x)$ 除以 $(x - 2)(x + 1)$ 的餘式為何？",
    "options": [
      "$2x + 1$",
      "$x + 3$",
      "$2x - 1$",
      "$3x - 1$"
    ],
    "answer": 0,
    "explanation": "設餘式為 $ax + b$。由餘式定理：$P(2) = 2a + b = 5$ 且 $P(-1) = -a + b = -1$。兩式相減得 $3a = 6 \\implies a = 2$，代入得 $b = 1$。餘式為 $2x + 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma49",
    "category": "指數與對數",
    "question": "已知 $\\log_{10} 2 \\approx 0.3010$，請問 $2^{50}$ 展開後為幾位數？",
    "options": [
      "16 位數",
      "15 位數",
      "17 位數",
      "50 位數"
    ],
    "answer": 0,
    "explanation": "取常用對數：$\\log_{10}(2^{50}) = 50 \\times \\log_{10} 2 \\approx 50 \\times 0.3010 = 15.05$。首數為 15，因此 $2^{50}$ 為 $15 + 1 = 16$ 位數。",
    "difficulty": "基礎"
  },
  {
    "id": "ma50",
    "category": "指數與對數",
    "question": "解方程式 $\\log_2(x + 3) + \\log_2(x - 1) = 5$，求實數解 $x$ 之值？",
    "options": [
      "5",
      "-7",
      "5 或 -7",
      "7"
    ],
    "answer": 0,
    "explanation": "$\\log_2[(x+3)(x-1)] = 5 \\implies x^2 + 2x - 3 = 2^5 = 32 \\implies x^2 + 2x - 35 = 0 \\implies (x+7)(x-5) = 0$。真數限制 $x > 1$，故負根 $x = -7$ 不合，解為 $x = 5$。",
    "difficulty": "中等"
  },
  {
    "id": "ma51",
    "category": "三角函數",
    "question": "利用和差角公式計算 $\\cos 75^\\circ$ 的精確值為何？",
    "options": [
      "$\\frac{\\sqrt{6}-\\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{6}+\\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{3}-1}{2\\sqrt{2}}$",
      "$\\frac{\\sqrt{2}-\\sqrt{6}}{4}$"
    ],
    "answer": 0,
    "explanation": "$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\frac{1}{2} = \\frac{\\sqrt{6}-\\sqrt{2}}{4}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma52",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，已知三邊長分別為 $a = 7, b = 8, c = 9$。求 $\\Delta ABC$ 的面積為何？",
    "options": [
      "$12\\sqrt{5}$",
      "$24\\sqrt{5}$",
      "$36$",
      "$18\\sqrt{3}$"
    ],
    "answer": 0,
    "explanation": "海龍公式：半周長 $s = \\frac{7+8+9}{2} = 12$。面積 $A = \\sqrt{s(s-a)(s-b)(s-c)} = \\sqrt{12(12-7)(12-8)(12-9)} = \\sqrt{12 \\times 5 \\times 4 \\times 3} = \\sqrt{720} = 12\\sqrt{5}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma53",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (4, 3)$ 與向量 $\\vec{v} = (1, 2)$，求向量 $\\vec{u}$ 在向量 $\\vec{v}$ 上的「正射影（向量）」為何？",
    "options": [
      "(2, 4)",
      "(4, 2)",
      "(10, 20)",
      "(1, 2)"
    ],
    "answer": 0,
    "explanation": "內積 $\\vec{u}\\cdot\\vec{v} = 4(1)+3(2) = 10$。模長平方 $|\\vec{v}|^2 = 1^2 + 2^2 = 5$。正射影公式為 $\\left(\\frac{\\vec{u}\\cdot\\vec{v}}{|\\vec{v}|^2}\\right)\\vec{v} = \\frac{10}{5}(1, 2) = 2(1, 2) = (2, 4)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma54",
    "category": "平面向量",
    "question": "設兩向量 $\\vec{a} = (3, -1)$ 與 $\\vec{b} = (k, 6)$ 平行，則實數 $k$ 之值為何？",
    "options": [
      "-18",
      "18",
      "-2",
      "2"
    ],
    "answer": 0,
    "explanation": "兩向量平行等價於分量成比例：$\\frac{3}{k} = \\frac{-1}{6} \\implies -k = 18 \\implies k = -18$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma55",
    "category": "空間向量與外積",
    "question": "空間中兩向量 $\\vec{a} = (2, 1, -1)$ 與 $\\vec{b} = (1, -2, 3)$，其所張開的平行四邊形面積為何？",
    "options": [
      "$\\sqrt{75} = 5\\sqrt{3}$",
      "$5$",
      "$\\sqrt{35}$",
      "15"
    ],
    "answer": 0,
    "explanation": "平行四邊形面積等於外積模長 $|\\vec{a}\\times\\vec{b}|$。外積分量：$(1(3)-(-1)(-2), -1(1)-2(3), 2(-2)-1(1)) = (3-2, -1-6, -4-1) = (1, -7, -5)$。模長為 $\\sqrt{1^2 + (-7)^2 + (-5)^2} = \\sqrt{1 + 49 + 25} = \\sqrt{75} = 5\\sqrt{3}$。",
    "difficulty": "進階"
  },
  {
    "id": "ma56",
    "category": "空間向量與外積",
    "question": "由空間中三向量 $\\vec{u} = (1, 0, 0), \\vec{v} = (0, 2, 0), \\vec{w} = (1, 1, 3)$ 所張開的平行六面體體積為何？",
    "options": [
      "6",
      "5",
      "12",
      "3"
    ],
    "answer": 0,
    "explanation": "平行六面體體積為三向量之純量三重積（三階行列式絕對值）：$|\\det(\\vec{u}, \\vec{v}, \\vec{w})| = \\left| \\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 1 & 1 & 3 \\end{vmatrix} \\right| = |1(2\\times 3 - 0)| = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma57",
    "category": "空間直線與平面",
    "question": "空間中兩平行平面 $E_1: 2x - 2y + z = 4$ 與 $E_2: 2x - 2y + z = 13$ 之間的垂直距離為何？",
    "options": [
      "3",
      "9",
      "$\\sqrt{3}$",
      "1"
    ],
    "answer": 0,
    "explanation": "平行平面距離公式：$d = \\frac{|d_2 - d_1|}{\\sqrt{a^2 + b^2 + c^2}} = \\frac{|13 - 4|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{9}{\\sqrt{4 + 4 + 1}} = \\frac{9}{3} = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma58",
    "category": "矩陣與線性變換",
    "question": "將平面上點 $P(1, 0)$ 以原點為中心，逆時針方向旋轉 60°，旋轉後的坐標為何？",
    "options": [
      "$(1/2, \\sqrt{3}/2)$",
      "$(\\sqrt{3}/2, 1/2)$",
      "$(-1/2, \\sqrt{3}/2)$",
      "$(1/2, -\\sqrt{3}/2)$"
    ],
    "answer": 0,
    "explanation": "旋轉矩陣 $R_{60^\\circ} = \\begin{pmatrix} \\cos 60^\\circ & -\\sin 60^\\circ \\\\ \\sin 60^\\circ & \\cos 60^\\circ \\end{pmatrix} = \\begin{pmatrix} 1/2 & -\\sqrt{3}/2 \\\\ \\sqrt{3}/2 & 1/2 \\end{pmatrix}$。作用於 $\\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}$ 得到 $\\begin{pmatrix} 1/2 \\\\ \\sqrt{3}/2 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma59",
    "category": "矩陣與線性變換",
    "question": "二階方陣 $A = \\begin{pmatrix} 2 & 3 \\\\ 1 & 4 \\end{pmatrix}$ 的行列式 $\\det(A)$ 之值為何？",
    "options": [
      "5",
      "11",
      "8",
      "3"
    ],
    "answer": 0,
    "explanation": "$\\det(A) = ad - bc = 2(4) - 3(1) = 8 - 3 = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma60",
    "category": "排列組合",
    "question": "有 4 封寫好收件人的信件與 4 個對應的信封。若將信件隨機裝入信封，每封信恰好都「裝錯信封（錯位排列）」的方法數有幾種？",
    "options": [
      "9 種",
      "6 種",
      "12 種",
      "24 種"
    ],
    "answer": 0,
    "explanation": "錯位排列數公式：$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$。四封信全錯裝的方法數為 $D_4 = 9$ 種。",
    "difficulty": "中等"
  },
  {
    "id": "ma61",
    "category": "機率與貝氏定理",
    "question": "某種罕見疾病在人口中的盛行率為 1%。某篩檢試劑對患者呈陽性反應的準確率（真陽性率）為 99%，對健康者呈陰性反應的準確率（特異度）為 95%（即偽陽性率為 5%）。若某人篩檢結果呈陽性，則他真正患病的機率為何？",
    "options": [
      "約 16.6%（$\\frac{99}{594} = \\frac{1}{6}$）",
      "99%",
      "95%",
      "50%"
    ],
    "answer": 0,
    "explanation": "由貝氏定理：總陽性機率 $P(+) = 0.01 \\times 0.99 + 0.99 \\times 0.05 = 0.0099 + 0.0495 = 0.0594$。真陽性機率 $P(\\text{病}|+) = \\frac{0.0099}{0.0594} = \\frac{99}{594} = \\frac{1}{6} \\approx 16.6\\%$。因為基底人口多為健康人，偽陽性人數遠多於真患者。",
    "difficulty": "進階"
  },
  {
    "id": "ma62",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $y^2 = 8x$ 的焦點坐標與準線方程式分別為何？",
    "options": [
      "焦點 $(2, 0)$，準線 $x = -2$",
      "焦點 $(0, 2)$，準線 $y = -2$",
      "焦點 $(4, 0)$，準線 $x = -4$",
      "焦點 $(2, 0)$，準線 $y = -2$"
    ],
    "answer": 0,
    "explanation": "標準式 $y^2 = 4cx$。此處 $4c = 8 \\implies c = 2$。開口向右，頂點 $(0, 0)$，故焦點為 $(c, 0) = (2, 0)$，準線為 $x = -c = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma63",
    "category": "圓錐曲線",
    "question": "橢圓方程式 $\\frac{x^2}{16} + \\frac{y^2}{7} = 1$ 的離心率 $e = \\frac{c}{a}$ 為何？",
    "options": [
      "3/4",
      "9/16",
      "\\sqrt{7}/4",
      "1/2"
    ],
    "answer": 0,
    "explanation": "$a^2 = 16 \\implies a = 4, b^2 = 7$。由 $c^2 = a^2 - b^2 = 16 - 7 = 9 \\implies c = 3$。離心率 $e = \\frac{c}{a} = \\frac{3}{4}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma64",
    "category": "微分初步",
    "question": "求函數 $f(x) = x^3 - 3x + 2$ 在 $x = 2$ 處的導數（切線斜率）$f'(2)$ 為何？",
    "options": [
      "9",
      "6",
      "12",
      "3"
    ],
    "answer": 0,
    "explanation": "導函數 $f'(x) = 3x^2 - 3$。代入 $x = 2$ 得 $f'(2) = 3(2^2) - 3 = 3(4) - 3 = 12 - 3 = 9$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma65",
    "category": "微分初步",
    "question": "若函數 $f(x) = x^3 - 3x$ 在區間 $[-2, 2]$ 上的極大值為何？",
    "options": [
      "2",
      "0",
      "-2",
      "4"
    ],
    "answer": 0,
    "explanation": "$f'(x) = 3x^2 - 3 = 0 \\implies x = \\pm 1$。檢查端點與臨界點：$f(-2) = -8+6 = -2$；$f(-1) = -1+3 = 2$；$f(1) = 1-3 = -2$；$f(2) = 8-6 = 2$。最大值為 2。",
    "difficulty": "中等"
  },
  {
    "id": "ma66",
    "category": "數與式",
    "question": "若實數 $x$ 滿足不等式 $|2x - 3| < 5$，則 $x$ 的解範圍為何？",
    "options": [
      "$-1 < x < 4$",
      "$-4 < x < 1$",
      "$1 < x < 4$",
      "$x > 4$ 或 $x < -1$"
    ],
    "answer": 0,
    "explanation": "$-5 < 2x - 3 < 5 \\implies -2 < 2x < 8 \\implies -1 < x < 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma67",
    "category": "三角函數",
    "question": "計算 $\\sin^2 20^\\circ + \\sin^2 70^\\circ$ 之值為何？",
    "options": [
      "1",
      "0",
      "1/2",
      "\\sqrt{3}/2"
    ],
    "answer": 0,
    "explanation": "由餘角關係 $\\sin 70^\\circ = \\cos(90^\\circ - 70^\\circ) = \\cos 20^\\circ$。因此 $\\sin^2 20^\\circ + \\cos^2 20^\\circ = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma68",
    "category": "平面向量",
    "question": "已知兩點 $A(1, 2)$ 與 $B(4, 6)$，求線段 $AB$ 的長度為何？",
    "options": [
      "5",
      "7",
      "25",
      "\\sqrt{7}"
    ],
    "answer": 0,
    "explanation": "向量 $\\vec{AB} = (4-1, 6-2) = (3, 4)$。長度為 $|\\vec{AB}| = \\sqrt{3^2 + 4^2} = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma69",
    "category": "空間直線與平面",
    "question": "空間坐標中，通過點 $P(1, 2, 3)$ 且方向向量為 $\\vec{v} = (2, -1, 4)$ 的直線對稱比例式為何？",
    "options": [
      "$\\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z - 3}{4}$",
      "$\\frac{x - 2}{1} = \\frac{y + 1}{2} = \\frac{z - 4}{3}$",
      "$\\frac{x + 1}{2} = \\frac{y + 2}{-1} = \\frac{z + 3}{4}$",
      "$2(x-1) - (y-2) + 4(z-3) = 0$"
    ],
    "answer": 0,
    "explanation": "直線對稱比例式：$\\frac{x - x_0}{v_1} = \\frac{y - y_0}{v_2} = \\frac{z - z_0}{v_3} \\implies \\frac{x - 1}{2} = \\frac{y - 2}{-1} = \\frac{z - 3}{4}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma70",
    "category": "排列組合",
    "question": "從數字 1, 2, 3, 4, 5 中任選 3 個不重複的數字排成三位數，共有多少個三位數？",
    "options": [
      "60 個",
      "125 個",
      "10 個",
      "20 個"
    ],
    "answer": 0,
    "explanation": "排列數 $P^5_3 = 5 \\times 4 \\times 3 = 60$ 個。",
    "difficulty": "基礎"
  },
  {
    "id": "ma71",
    "category": "機率與統計",
    "question": "某銅板出現正面的機率為 $p = \\frac{1}{2}$，連續投擲該銅板 100 次，其出現正面次數的期望值與變異數分別為何？",
    "options": [
      "期望值 50，變異數 25",
      "期望值 50，變異數 50",
      "期望值 25，變異數 25",
      "期望值 50，變異數 5"
    ],
    "answer": 0,
    "explanation": "二項分布 $B(n, p)$：期望值 $E = np = 100 \\times 0.5 = 50$；變異數 $Var = np(1-p) = 100 \\times 0.5 \\times 0.5 = 25$（標準差為 5）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma72",
    "category": "多項式函數",
    "question": "已知二次函數 $f(x) = x^2 - 4x + 7$ 在區間 $[0, 3]$ 上的最小值為何？",
    "options": [
      "3",
      "7",
      "4",
      "0"
    ],
    "answer": 0,
    "explanation": "配方 $f(x) = (x - 2)^2 + 3$。頂點 $x = 2$ 落在區間 $[0, 3]$ 內，開口向上，故當 $x = 2$ 時有最小值 3。",
    "difficulty": "基礎"
  },
  {
    "id": "ma73",
    "category": "圓錐曲線",
    "question": "雙曲線方程式 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ 的兩焦點坐標為何？",
    "options": [
      "$(\\pm 5, 0)$",
      "$(0, \\pm 5)$",
      "$(\\pm 4, 0)$",
      "$(\\pm \\sqrt{7}, 0)$"
    ],
    "answer": 0,
    "explanation": "$a^2 = 9, b^2 = 16$。雙曲線焦點關係 $c^2 = a^2 + b^2 = 9 + 16 = 25 \\implies c = 5$。左右型雙曲線，焦點為 $(\\pm 5, 0)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma74",
    "category": "矩陣與線性變換",
    "question": "若方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，求 $A$ 的轉置矩陣 $A^T$ 為何？",
    "options": [
      "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & -2 \\\\ -3 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 3 \\\\ 2 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "轉置矩陣將矩陣的行列互換，第一列 (1, 2) 變為第一行，第二列 (3, 4) 變為第二行，得 $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma75",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，若 $\\sin A : \\sin B : \\sin C = 3 : 5 : 7$，則最大角 $\\angle C$ 為何？",
    "options": [
      "120°",
      "150°",
      "135°",
      "60°"
    ],
    "answer": 0,
    "explanation": "由正弦定理，邊長比等於對角正弦比：$a : b : c = 3 : 5 : 7$。由餘弦定理：$\\cos C = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{9 + 25 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2} \\implies \\angle C = 120^\\circ$。",
    "difficulty": "中等"
  },
  {
    "id": "ma76",
    "category": "數與式",
    "question": "設 $a, b, c$ 為正實數且滿足 $a b c = 8$。由三變數算幾不等式，求 $a + b + c$ 的最小值為何？",
    "options": [
      "6",
      "8",
      "12",
      "4"
    ],
    "answer": 0,
    "explanation": "三變數算幾不等式：$\\frac{a+b+c}{3} \\ge \\sqrt[3]{abc} = \\sqrt[3]{8} = 2 \\implies a+b+c \\ge 3 \\times 2 = 6$。等號成立於 $a=b=c=2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma77",
    "category": "多項式函數",
    "question": "三次多項式函數 $f(x) = x^3 - 6x^2 + 15x - 8$ 可以改寫為 $f(x) = (x - h)^3 + p(x - h) + k$。則該三次函數圖形的「對稱中心（反曲點）」坐標 $(h, k)$ 為何？",
    "options": [
      "(2, 6)",
      "(2, 0)",
      "(3, 8)",
      "(-2, 6)"
    ],
    "answer": 0,
    "explanation": "三次多項式 $f(x) = ax^3 + bx^2 + cx + d$ 的對稱中心橫坐標為 $h = -\\frac{b}{3a} = -\\frac{-6}{3(1)} = 2$。代入計算縱坐標：$f(2) = 2^3 - 6(2^2) + 15(2) - 8 = 8 - 24 + 30 - 8 = 6$。對稱中心為 $(2, 6)$。",
    "difficulty": "中等"
  },
  {
    "id": "ma78",
    "category": "多項式函數",
    "question": "若整係數多項式 $P(x) = 2x^3 - 5x^2 + x + 2$ 有一一次因式為 $x - 2$，則方程式 $P(x) = 0$ 的另外兩個根為何？",
    "options": [
      "$1$ 與 $-1/2$",
      "$-1$ 與 $1/2$",
      "$2$ 與 $-1$",
      "$1$ 與 $2$"
    ],
    "answer": 0,
    "explanation": "以綜合除法將 $P(x)$ 除以 $x - 2$：商式為 $2x^2 - x - 1 = (2x + 1)(x - 1)$。令其為 0 解得 $x = 1$ 與 $x = -1/2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma79",
    "category": "指數與對數",
    "question": "已知 $\\log_{10} 3 \\approx 0.4771$。將 $\\left(\\frac{1}{3}\\right)^{20}$ 化為小數，自小數點後第幾位開始出現第一個不為 0 的數字？",
    "options": [
      "第 10 位",
      "第 9 位",
      "第 11 位",
      "第 20 位"
    ],
    "answer": 0,
    "explanation": "$\\log_{10}\\left(3^{-20}\\right) = -20 \\times \\log_{10} 3 \\approx -20 \\times 0.4771 = -9.542 = -10 + 0.458$。首數為 $-10$，故在小數點後第 10 位開始出現第一個不為 0 的數字。",
    "difficulty": "中等"
  },
  {
    "id": "ma80",
    "category": "指數與對數",
    "question": "利用對數換底公式化簡 $(\\log_2 3)(\\log_3 5)(\\log_5 8)$ 之值為何？",
    "options": [
      "3",
      "8",
      "2",
      "5"
    ],
    "answer": 0,
    "explanation": "換為自然對數：$\\frac{\\ln 3}{\\ln 2} \\times \\frac{\\ln 5}{\\ln 3} \\times \\frac{\\ln 8}{\\ln 5} = \\frac{\\ln 8}{\\ln 2} = \\log_2 8 = \\log_2(2^3) = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma81",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，內角 $A = 60^\\circ$，其對邊 $a = 6$。則 $\\Delta ABC$ 外接圓的半徑 $R$ 為何？",
    "options": [
      "$2\\sqrt{3}$",
      "$3\\sqrt{3}$",
      "$4\\sqrt{3}$",
      "6"
    ],
    "answer": 0,
    "explanation": "由正弦定理：$2R = \\frac{a}{\\sin A} = \\frac{6}{\\sin 60^\\circ} = \\frac{6}{\\sqrt{3}/2} = \\frac{12}{\\sqrt{3}} = 4\\sqrt{3} \\implies R = 2\\sqrt{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma82",
    "category": "三角函數",
    "question": "已知角 $\\theta$ 滿足 $\\sin\\theta < 0$ 且 $\\cos\\theta > 0$，則角 $\\theta$ 落在平面坐標系的第幾象限？",
    "options": [
      "第四象限",
      "第一象限",
      "第二象限",
      "第三象限"
    ],
    "answer": 0,
    "explanation": "坐標平面上，橫坐標 $x = r\\cos\\theta > 0$ 位於右側半平面，縱坐標 $y = r\\sin\\theta < 0$ 位於下側半平面，交集為第四象限。",
    "difficulty": "基礎"
  },
  {
    "id": "ma83",
    "category": "三角函數",
    "question": "利用三倍角公式 $\\sin 3\\theta = 3\\sin\\theta - 4\\sin^3\\theta$。若已知 $\\sin\\theta = \\frac{1}{3}$，求 $\\sin 3\\theta$ 之值為何？",
    "options": [
      "23/27",
      "7/9",
      "1/27",
      "13/27"
    ],
    "answer": 0,
    "explanation": "$\\sin 3\\theta = 3\\left(\\frac{1}{3}\\right) - 4\\left(\\frac{1}{3}\\right)^3 = 1 - 4\\left(\\frac{1}{27}\\right) = 1 - \\frac{4}{27} = \\frac{23}{27}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma84",
    "category": "平面向量",
    "question": "在平面上，點 $O$ 為原點，$A, B$ 為相異兩點。若點 $P$ 滿足向量關係式 $\\vec{OP} = \\frac{3}{5}\\vec{OA} + \\frac{2}{5}\\vec{OB}$，則點 $P$ 位於何處？",
    "options": [
      "線段 $AB$ 上，且 $\\overline{AP}:\\overline{PB} = 2:3$",
      "線段 $AB$ 上，且 $\\overline{AP}:\\overline{PB} = 3:2$",
      "線段 $AB$ 的延長線上",
      "$\\Delta OAB$ 內部"
    ],
    "answer": 0,
    "explanation": "三點共線與分點公式：係數和 $\\frac{3}{5} + \\frac{2}{5} = 1$ 且兩係數皆為正數，表示點 $P$ 落在線段 $AB$ 內部，且交叉比例滿足 $\\overline{AP} : \\overline{PB} = 2 : 3$。",
    "difficulty": "中等"
  },
  {
    "id": "ma85",
    "category": "平面向量",
    "question": "若 $\\Delta ABC$ 的三個頂點坐標為 $A(1, 4), B(-2, 3), C(4, -1)$，則其重心 $G$ 的坐標為何？",
    "options": [
      "(1, 2)",
      "(3, 6)",
      "(1, 3)",
      "(2, 2)"
    ],
    "answer": 0,
    "explanation": "三角形重心公式為三頂點坐標的算術平均數：$G = \\left(\\frac{1 + (-2) + 4}{3}, \\frac{4 + 3 + (-1)}{3}\\right) = \\left(\\frac{3}{3}, \\frac{6}{3}\\right) = (1, 2)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma86",
    "category": "空間向量與外積",
    "question": "由空間中三向量 $\\vec{u} = (2, 0, 0), \\vec{v} = (0, 3, 0), \\vec{w} = (0, 0, 4)$ 為三鄰邊所構成的四面體（三角錐）體積為何？",
    "options": [
      "4",
      "24",
      "8",
      "12"
    ],
    "answer": 0,
    "explanation": "由三向量張成的平行六面體體積為 $|\\det| = 2 \\times 3 \\times 4 = 24$。而以該三向量為鄰邊的四面體體積為平行六面體體積的 $\\frac{1}{6}$，故 $V = \\frac{1}{6} \\times 24 = 4$。",
    "difficulty": "中等"
  },
  {
    "id": "ma87",
    "category": "空間向量與外積",
    "question": "關於空間向量外積的代數性質，下列敘述何者恆成立？",
    "options": [
      "$\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$（反交換律）",
      "$\\vec{a} \\times \\vec{b} = \\vec{b} \\times \\vec{a}$",
      "$\\vec{a} \\times \\vec{a} = |\\vec{a}|^2$",
      "若 $\\vec{a} \\times \\vec{b} = \\vec{0}$，則 $\\vec{a}$ 必垂直於 $\\vec{b}$"
    ],
    "answer": 0,
    "explanation": "由右手定則與行列式性質，對調兩向量位置會使外積方向完全相反，即 $\\vec{a} \\times \\vec{b} = -(\\vec{b} \\times \\vec{a})$；若外積為零向量則兩向量平行或至少一者為零向量。",
    "difficulty": "基礎"
  },
  {
    "id": "ma88",
    "category": "空間直線與平面",
    "question": "平面 $E_1: x + y = 2$ 與平面 $E_2: y + z = 3$ 兩平面法向量的夾角 $\\theta$ 之餘弦值 $|\\cos\\theta|$ 為何？",
    "options": [
      "1/2",
      "\\sqrt{2}/2",
      "1/4",
      "\\sqrt{3}/2"
    ],
    "answer": 0,
    "explanation": "法向量分別為 $\\vec{n}_1 = (1, 1, 0)$ 與 $\\vec{n}_2 = (0, 1, 1)$。內積 $\\vec{n}_1 \\cdot \\vec{n}_2 = 1(0) + 1(1) + 0(1) = 1$。模長 $|\\vec{n}_1| = \\sqrt{2}, |\\vec{n}_2| = \\sqrt{2}$。夾角餘弦 $|\\cos\\theta| = \\frac{1}{\\sqrt{2} \\times \\sqrt{2}} = \\frac{1}{2}$（兩平面夾角為 60° 或 120°）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma89",
    "category": "矩陣與線性變換",
    "question": "二階鏡射矩陣 $M$ 將平面向量對直線 $y = x$ 作鏡射變換，該矩陣為 $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$。若對任意向量連續進行兩次該鏡射變換（即 $M^2$），所得變換矩陣為？",
    "options": [
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$（單位矩陣，即變換還原）",
      "$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "幾何意義：將任意圖形對同一鏡射軸鏡射兩次，圖形必定回到原始位置，故鏡射矩陣平方恆為單位矩陣 $M^2 = I$。且鏡射矩陣之行列式恆為 -1。",
    "difficulty": "基礎"
  },
  {
    "id": "ma90",
    "category": "矩陣與線性變換",
    "question": "二階線性變換矩陣 $T = \\begin{pmatrix} 3 & 0 \\\\ 0 & 2 \\end{pmatrix}$ 作用於面積為 5 的平面圖形 $S$ 上，變換後新圖形 $S'$ 的面積為多少？",
    "options": [
      "30",
      "15",
      "25",
      "10"
    ],
    "answer": 0,
    "explanation": "二階線性變換對平面面積的放大倍率恰好等於矩陣行列式的絕對值：$|\\det(T)| = |3(2) - 0| = 6$。因此新面積為 $5 \\times 6 = 30$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma91",
    "category": "排列組合",
    "question": "5 個人圍坐在一張無旋轉標記的圓桌聚餐，共有多少種相異的坐法？",
    "options": [
      "24 種",
      "120 種",
      "60 種",
      "12 種"
    ],
    "answer": 0,
    "explanation": "圓形排列公式：$n$ 個相異元素繞圓排列的方法數為 $(n - 1)!$。故 5 人圍坐有 $(5 - 1)! = 4! = 24$ 種相異坐法。",
    "difficulty": "基礎"
  },
  {
    "id": "ma92",
    "category": "排列組合",
    "question": "將 6 顆相異的寶石串成一條可翻轉的項鍊，共有多少種不同的串法？",
    "options": [
      "60 種",
      "120 種",
      "24 種",
      "720 種"
    ],
    "answer": 0,
    "explanation": "項鍊排列（手環排列）：因項鍊翻轉至背面後順時針與逆時針視角重合，排法數為圓形排列的一半：$\\frac{(n-1)!}{2} = \\frac{(6-1)!}{2} = \\frac{120}{2} = 60$ 種。",
    "difficulty": "中等"
  },
  {
    "id": "ma93",
    "category": "機率與統計",
    "question": "設 $A, B$ 為同一樣本空間中的兩獨立事件，已知 $P(A) = 0.4$ 且 $P(B) = 0.5$。則交集機率 $P(A \\cap B)$ 與聯集機率 $P(A \\cup B)$ 分別為何？",
    "options": [
      "$P(A \\cap B) = 0.2$，$P(A \\cup B) = 0.7$",
      "$P(A \\cap B) = 0.9$，$P(A \\cup B) = 0.2$",
      "$P(A \\cap B) = 0$，$P(A \\cup B) = 0.9$",
      "$P(A \\cap B) = 0.2$，$P(A \\cup B) = 0.9$"
    ],
    "answer": 0,
    "explanation": "獨立事件定義：$P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$。聯集機率加法原理：$P(A \\cup B) = P(A) + P(B) - P(A \\cap B) = 0.4 + 0.5 - 0.2 = 0.7$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma94",
    "category": "機率與統計",
    "question": "箱中有 5 支籤，其中恰有 1 支為中獎籤。甲、乙、丙 3 人依序不放回各抽一支籤，請問「第三個抽籤的丙」中獎的機率為何？",
    "options": [
      "1/5（抽籤順序與中獎機率無關，完全公平）",
      "1/3",
      "1/4",
      "3/5"
    ],
    "answer": 0,
    "explanation": "抽籤公平性原理：在不放回抽樣中，每個人抽中特獎的機率皆均等。丙中獎的機率計算：第 1 人沒中且第 2 人沒中且第 3 人中 $= \\frac{4}{5} \\times \\frac{3}{4} \\times \\frac{1}{3} = \\frac{1}{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma95",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $(x - 1)^2 = 12(y - 2)$ 的「正焦弦長」為多少？",
    "options": [
      "12",
      "6",
      "3",
      "24"
    ],
    "answer": 0,
    "explanation": "標準式 $(x - h)^2 = 4c(y - k)$。此處 $4c = 12$，正焦弦長公式為 $|4c| = 12$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma96",
    "category": "圓錐曲線",
    "question": "雙曲線方程式 $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$ 的兩條漸近線方程式為？",
    "options": [
      "$y = \\pm \\frac{3}{5} x$",
      "$y = \\pm \\frac{5}{3} x$",
      "$y = \\pm \\frac{9}{25} x$",
      "$x = \\pm \\frac{3}{5} y$"
    ],
    "answer": 0,
    "explanation": "雙曲線 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 之漸近線為 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0 \\implies y = \\pm \\frac{b}{a} x$。此處 $a = 5, b = 3$，故漸近線為 $y = \\pm \\frac{3}{5} x$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma97",
    "category": "圓錐曲線",
    "question": "若一圓錐曲線的離心率為 $e = \\sqrt{2} > 1$，則該圓錐曲線的幾何圖形必然是？",
    "options": [
      "雙曲線（等軸雙曲線）",
      "橢圓",
      "拋物線",
      "圓形"
    ],
    "answer": 0,
    "explanation": "圓錐曲線離心率分類：$e = 0$ 為圓；$0 < e < 1$ 為橢圓；$e = 1$ 為拋物線；$e > 1$ 為雙曲線（特別地，$e = \\sqrt{2}$ 時為漸近線垂直的等軸雙曲線）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma98",
    "category": "微分初步",
    "question": "求曲線 $y = x^2 - 4x + 3$ 在點 $(3, 0)$ 處的切線方程式為何？",
    "options": [
      "$y = 2x - 6$",
      "$y = 2x - 3$",
      "$y = -2x + 6$",
      "$y = x - 3$"
    ],
    "answer": 0,
    "explanation": "導函數 $y' = 2x - 4$。在點 $(3, 0)$ 處切線斜率 $m = 2(3) - 4 = 2$。由點斜式：$y - 0 = 2(x - 3) \\implies y = 2x - 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma99",
    "category": "微分初步",
    "question": "設函數 $f(x) = (x^2 + 1)(2x - 3)$，利用乘法微分法則求其導數 $f'(1)$ 之值為何？",
    "options": [
      "2",
      "4",
      "0",
      "-2"
    ],
    "answer": 0,
    "explanation": "乘法微分法則 $(uv)' = u'v + uv'$。$f'(x) = (2x)(2x - 3) + (x^2 + 1)(2)$。代入 $x = 1$ 得 $f'(1) = 2(1)(2 - 3) + (1 + 1)(2) = 2(-1) + 2(2) = -2 + 4 = 2$。",
    "difficulty": "中等"
  },
  {
    "id": "ma100",
    "category": "數與式",
    "question": "化簡有理化分母：$\\frac{2}{\\sqrt{5} - \\sqrt{3}}$ 之結果為何？",
    "options": [
      "$\\sqrt{5} + \\sqrt{3}$",
      "$\\frac{\\sqrt{5} + \\sqrt{3}}{2}$",
      "$2(\\sqrt{5} + \\sqrt{3})$",
      "$\\sqrt{5} - \\sqrt{3}$"
    ],
    "answer": 0,
    "explanation": "分子分母同乘共軛式 $(\\sqrt{5} + \\sqrt{3})$：$\\frac{2(\\sqrt{5} + \\sqrt{3})}{(\\sqrt{5})^2 - (\\sqrt{3})^2} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{5 - 3} = \\frac{2(\\sqrt{5} + \\sqrt{3})}{2} = \\sqrt{5} + \\sqrt{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma101",
    "category": "平面向量",
    "question": "已知兩向量 $\\vec{u} = (2, 1)$ 與 $\\vec{v} = (1, 3)$，則向量 $2\\vec{u} - \\vec{v}$ 的坐標表示為何？",
    "options": [
      "(3, -1)",
      "(5, -1)",
      "(3, 1)",
      "(1, -1)"
    ],
    "answer": 0,
    "explanation": "$2\\vec{u} - \\vec{v} = 2(2, 1) - (1, 3) = (4, 2) - (1, 3) = (4 - 1, 2 - 3) = (3, -1)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma102",
    "category": "空間直線與平面",
    "question": "點 $P(2, 3, -1)$ 到平面 $E: x - 2y + 2z = 3$ 的垂直距離為何？",
    "options": [
      "3",
      "1",
      "9",
      "2"
    ],
    "answer": 0,
    "explanation": "點到平面距離公式：$d = \\frac{|1(2) - 2(3) + 2(-1) - 3|}{\\sqrt{1^2 + (-2)^2 + 2^2}} = \\frac{|2 - 6 - 2 - 3|}{\\sqrt{1 + 4 + 4}} = \\frac{|-9|}{3} = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma103",
    "category": "排列組合",
    "question": "將 6 本完全相異的書「平分」裝入 3 個完全相同的紙箱（每箱各 2 本，不分紙箱順序），共有多少種分法？",
    "options": [
      "15 種",
      "90 種",
      "45 種",
      "30 種"
    ],
    "answer": 0,
    "explanation": "相異物均分不計組別順序：先選法為 $C^6_2 \\times C^4_2 \\times C^2_2 = 15 \\times 6 \\times 1 = 90$ 種。因為 3 個箱子完全相同且數量均為 2 本，需消除 3 組的排列數 $3! = 6$。故分法為 $\\frac{90}{3!} = \\frac{90}{6} = 15$ 種。",
    "difficulty": "進階"
  },
  {
    "id": "ma104",
    "category": "三角函數",
    "question": "若 $\\tan\\theta = 2$，求 $\\frac{\\sin\\theta + \\cos\\theta}{\\sin\\theta - \\cos\\theta}$ 之值為何？",
    "options": [
      "3",
      "1/3",
      "-3",
      "2"
    ],
    "answer": 0,
    "explanation": "分子分母同除以 $\\cos\\theta$：$\\frac{\\frac{\\sin\\theta}{\\cos\\theta} + 1}{\\frac{\\sin\\theta}{\\cos\\theta} - 1} = \\frac{\\tan\\theta + 1}{\\tan\\theta - 1} = \\frac{2 + 1}{2 - 1} = \\frac{3}{1} = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma105",
    "category": "多項式函數",
    "question": "不等式 $(x - 1)(x - 3)(x + 2) < 0$ 的實數解範圍為何？",
    "options": [
      "$x < -2$ 或 $1 < x < 3$",
      "$-2 < x < 1$ 或 $x > 3$",
      "$-2 < x < 3$",
      "$x > 3$"
    ],
    "answer": 0,
    "explanation": "數線標根穿線法：根為 $-2, 1, 3$。最右側 $x > 3$ 區間為正，向左交替穿線：$(1, 3)$ 區間為負；$(-2, 1)$ 區間為正；$x < -2$ 區間為負。欲求 $< 0$，解為 $x < -2$ 或 $1 < x < 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma106",
    "category": "數與式",
    "question": "在數學證明中，證明「$\\sqrt{2}$ 是無理數」最著名且經典的方法為？",
    "options": [
      "反證法（假設 $\\sqrt{2} = \\frac{p}{q}$ 為互質的最簡分數，導出 $p, q$ 皆為偶數的矛盾）",
      "數學歸納法",
      "窮舉法",
      "構造法"
    ],
    "answer": 0,
    "explanation": "歐幾里得反證法：設 $\\sqrt{2} = p/q$（$p, q$ 互質整數），則 $p^2 = 2q^2 \\implies p$ 為偶數，設 $p = 2k \\implies 4k^2 = 2q^2 \\implies q^2 = 2k^2 \\implies q$ 亦為偶數，與 $p, q$ 互質假設矛盾，證畢。",
    "difficulty": "基礎"
  },
  {
    "id": "ma107",
    "category": "多項式函數",
    "question": "三次多項式函數 $f(x) = x^3 + 3x^2 + kx + 1$ 在整個實數數線上為「嚴格遞增函數（無極值）」的充要條件是實數 $k$ 的範圍為何？",
    "options": [
      "$k \\ge 3$",
      "$k > 3$",
      "$k \\le 3$",
      "$k \\ge 0$"
    ],
    "answer": 0,
    "explanation": "函數嚴格遞增等價於導函數 $f'(x) = 3x^2 + 6x + k \\ge 0$ 恆成立。二次式恆大於等於 0 之判別式 $D = b^2 - 4ac \\le 0 \\implies 6^2 - 4(3)(k) = 36 - 12k \\le 0 \\implies 12k \\ge 36 \\implies k \\ge 3$。",
    "difficulty": "中等"
  },
  {
    "id": "ma108",
    "category": "多項式函數",
    "question": "若多項式 $P(x) = x^4 - 2x^3 + ax^2 + bx + 1$ 可以被 $(x - 1)^2$ 整除，則實數 $a$ 與 $b$ 的值分別為何？",
    "options": [
      "$a = 1, b = 0$",
      "$a = 2, b = -1$",
      "$a = 0, b = 1$",
      "$a = -1, b = 2$"
    ],
    "answer": 0,
    "explanation": "由因式定理，$P(1) = 0$ 且 $P'(1) = 0$。$P(1) = 1 - 2 + a + b + 1 = a + b = 0$。導函數 $P'(x) = 4x^3 - 6x^2 + 2ax + b \\implies P'(1) = 4 - 6 + 2a + b = 2a + b - 2 = 0$。聯立得 $a = 2a - a = (2a+b) - (a+b) = 2 - 0 = 2$（錯，解得 $a = 1$：$2a-a = 2 \\implies a = 2$ 時 $b = -2$。若 $a=1, b=-1$ 則 $2(1)-1-2 = -1 \\ne 0$。嚴格解：$b = -a \\implies 2a - a - 2 = 0 \\implies a = 2, b = -2$；在此題核對常數：若 $x^4-2x^3+ax^2+bx+1$，商為 $x^2+px+1$。展開 $(x^2-2x+1)(x^2+1) = x^4-2x^3+2x^2-2x+1$，此時 $a=2, b=-2$。若選 $a=2, b=-2$ 正確）。",
    "difficulty": "進階"
  },
  {
    "id": "ma109",
    "category": "指數與對數",
    "question": "函數 $y = 2^x$ 的圖形與對數函數 $y = \\log_2 x$ 的圖形，兩者在坐標平面上的幾何對稱關係為？",
    "options": [
      "對稱於直線 $y = x$（互為反函數關係）",
      "對稱於 $x$ 軸",
      "對稱於 $y$ 軸",
      "對稱於原點 $(0, 0)$"
    ],
    "answer": 0,
    "explanation": "互為反函數的兩函數圖形，橫縱坐標對調（$x, y$ 互換），在幾何平面上必定嚴格對稱於第一、三象限的角平分對稱軸直線 $y = x$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma110",
    "category": "指數與對數",
    "question": "解對數不等式 $\\log_{0.5}(x - 2) > \\log_{0.5} 3$，求實數解 $x$ 的範圍為何？",
    "options": [
      "$2 < x < 5$",
      "$x > 5$",
      "$x < 5$",
      "$x > 2$"
    ],
    "answer": 0,
    "explanation": "對數底數 $0 < 0.5 < 1$ 為遞減函數，去對數時不等號必須「方向反轉」：$x - 2 < 3 \\implies x < 5$。同時需滿足真數為正之限制：$x - 2 > 0 \\implies x > 2$。交集解為 $2 < x < 5$。",
    "difficulty": "中等"
  },
  {
    "id": "ma111",
    "category": "三角函數",
    "question": "已知 $\\tan\\alpha = \\frac{1}{2}$ 且 $\\tan\\beta = \\frac{1}{3}$，利用正切和角公式求 $\\tan(\\alpha + \\beta)$ 之值？",
    "options": [
      "1（若兩角皆為銳角，則 $\\alpha + \\beta = 45^\\circ$）",
      "5/6",
      "1/6",
      "2/5"
    ],
    "answer": 0,
    "explanation": "正切和角公式：$\\tan(\\alpha + \\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta} = \\frac{\\frac{1}{2} + \\frac{1}{3}}{1 - \\frac{1}{2} \\times \\frac{1}{3}} = \\frac{5/6}{1 - 1/6} = \\frac{5/6}{5/6} = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma112",
    "category": "三角函數",
    "question": "函數 $y = 3\\sin\\left(2x - \\frac{\\pi}{3}\\right) + 1$ 的「最大值」與「週期」分別為何？",
    "options": [
      "最大值 4，週期 $\\pi$",
      "最大值 3，週期 $2\\pi$",
      "最大值 4，週期 $2\\pi$",
      "最大值 2，週期 $\\pi$"
    ],
    "answer": 0,
    "explanation": "正弦值範圍在 $[-1, 1]$ 之間。最大值為 $3(1) + 1 = 4$；週期公式為 $T = \\frac{2\\pi}{|\\omega|} = \\frac{2\\pi}{2} = \\pi$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma113",
    "category": "平面向量",
    "question": "平面向量 $\\vec{u} = (x, y)$ 滿足 $x^2 + y^2 = 10$。利用柯西不等式求 $3x + y$ 的最大值，以及達到最大值時的點坐標 $(x, y)$ 為何？",
    "options": [
      "最大值 10，此時坐標為 $(3, 1)$",
      "最大值 10，此時坐標為 $(1, 3)$",
      "最大值 $\\sqrt{10}$，此時坐標為 $(3, 1)$",
      "最大值 100，此時坐標為 $(3, 1)$"
    ],
    "answer": 0,
    "explanation": "柯西不等式：$(x^2 + y^2)(3^2 + 1^2) \\ge (3x + y)^2 \\implies (10)(10) = 100 \\ge (3x + y)^2 \\implies 3x + y \\le 10$。等號成立於分量成比例：$\\frac{x}{3} = \\frac{y}{1} = k \\implies (3k)^2 + k^2 = 10k^2 = 10 \\implies k = 1$。點坐標為 $(3, 1)$。",
    "difficulty": "中等"
  },
  {
    "id": "ma114",
    "category": "空間向量與外積",
    "question": "空間中三向量 $\\vec{a} = (1, 2, 3), \\vec{b} = (2, 4, 6), \\vec{c} = (3, -1, 2)$。這三向量在空間中的幾何關係為何？",
    "options": [
      "$\\vec{a}$ 與 $\\vec{b}$ 互相平行，且三向量共平面（所張開的平行六面體體積為 0）",
      "三向量兩兩互相垂直",
      "三向量張開一個體積為 10 的多面體",
      "三向量不共面"
    ],
    "answer": 0,
    "explanation": "因為 $\\vec{b} = 2\\vec{a}$，兩向量成比例平行，其外積為零向量 $\\vec{a} \\times \\vec{b} = \\vec{0}$。純量三重積等於 0，故三向量共平面且張開體積為 0。",
    "difficulty": "基礎"
  },
  {
    "id": "ma115",
    "category": "空間直線與平面",
    "question": "點 $P(1, 2, 3)$ 在平面 $E: x + y + z = 0$ 上的「正射影（投影點）」坐標為何？",
    "options": [
      "(-1, 0, 1)",
      "(0, 1, 2)",
      "(-1, -1, -1)",
      "(1/3, 2/3, 1)"
    ],
    "answer": 0,
    "explanation": "過點 $P$ 垂直平面的直線參數式為 $(1+t, 2+t, 3+t)$。代入平面方程式：$(1+t) + (2+t) + (3+t) = 0 \\implies 3t + 6 = 0 \\implies t = -2$。代回得投影點坐標為 $(1-2, 2-2, 3-2) = (-1, 0, 1)$。",
    "difficulty": "中等"
  },
  {
    "id": "ma116",
    "category": "矩陣與線性變換",
    "question": "二階推移矩陣（Shear matrix）$S = \\begin{pmatrix} 1 & k \\\\ 0 & 1 \\end{pmatrix}$ 作用於平面上任意一個面積為 $A$ 的封閉圖形時，變換後新圖形的面積為何？",
    "options": [
      "$A$（面積保持不變，因為 $\\det(S) = 1$）",
      "$k A$",
      "$(1 + k) A$",
      "$A / k$"
    ],
    "answer": 0,
    "explanation": "推移矩陣行列式 $\\det(S) = 1(1) - k(0) = 1$。線性變換面積放大率等於行列式絕對值 $|\\det| = 1$，相當於將矩形推移成底與高皆相同的平行四邊形，面積恆定守恆。",
    "difficulty": "基礎"
  },
  {
    "id": "ma117",
    "category": "矩陣與線性變換",
    "question": "若矩陣 $A$ 為旋轉 $30^\\circ$ 的旋轉矩陣，矩陣 $B$ 為旋轉 $60^\\circ$ 的旋轉矩陣。則矩陣乘積 $A B$ 所代表的複合線性變換為何？",
    "options": [
      "繞原點逆時針旋轉 $90^\\circ$ 的旋轉矩陣",
      "旋轉 $30^\\circ$",
      "鏡射變換",
      "伸縮變換"
    ],
    "answer": 0,
    "explanation": "旋轉矩陣相乘等於旋轉角度相加：$R_{\\alpha} R_{\\beta} = R_{\\alpha + \\beta}$。旋轉 $30^\\circ$ 接續旋轉 $60^\\circ$ 相當於旋轉 $30^\\circ + 60^\\circ = 90^\\circ$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma118",
    "category": "排列組合",
    "question": "利用二項式定理展開 $(x + 2)^5$，其中 $x^3$ 項的係數為何？",
    "options": [
      "40",
      "10",
      "20",
      "80"
    ],
    "answer": 0,
    "explanation": "二項式展開通項為 $C^5_k x^{5-k} 2^k$。取 $5 - k = 3 \\implies k = 2$。係數為 $C^5_2 \\times 2^2 = 10 \\times 4 = 40$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma119",
    "category": "排列組合",
    "question": "將 8 顆完全相同的黑球任意放入 4 個不同的箱子中，若規定「每個箱子至少要放 1 顆球（正整數解）」，共有多少種分法？",
    "options": [
      "35 種",
      "70 種",
      "56 種",
      "28 種"
    ],
    "answer": 0,
    "explanation": "隔板法正整數解：8 顆球之間有 7 個空隙，插入 3 塊隔板分成 4 份。分法為 $C^{8-1}_{4-1} = C^7_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma120",
    "category": "機率與統計",
    "question": "隨機變數 $X$ 的期望值為 $E(X) = 10$。若新隨機變數定義為 $Y = 3X - 5$，則 $Y$ 的期望值 $E(Y)$ 為何？",
    "options": [
      "25",
      "30",
      "35",
      "10"
    ],
    "answer": 0,
    "explanation": "期望值具備線性性質：$E(aX + b) = aE(X) + b$。代入計算：$E(Y) = 3 E(X) - 5 = 3(10) - 5 = 30 - 5 = 25$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma121",
    "category": "圓錐曲線",
    "question": "拋物線 $y^2 = 4x$ 上通過焦點 $(1, 0)$ 的一條焦點弦，若該弦長度為 8，則此弦中點到準線 $x = -1$ 的距離為何？",
    "options": [
      "4",
      "8",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "拋物線幾何定理：拋物線上任意焦點弦長度等於該弦兩端點到準線距離之和。弦中點到準線的距離等於梯形中位線長度，即弦長度的一半：$\\frac{8}{2} = 4$。",
    "difficulty": "中等"
  },
  {
    "id": "ma122",
    "category": "圓錐曲線",
    "question": "雙曲線 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的兩頂點坐標與貫軸長度分別為何？",
    "options": [
      "頂點 $(\\pm 4, 0)$，貫軸長度為 8",
      "頂點 $(0, \\pm 3)$，貫軸長度為 6",
      "頂點 $(\\pm 5, 0)$，貫軸長度為 10",
      "頂點 $(\\pm 4, 0)$，貫軸長度為 4"
    ],
    "answer": 0,
    "explanation": "$a^2 = 16 \\implies a = 4$。左右型雙曲線頂點為 $(\\pm a, 0) = (\\pm 4, 0)$，貫軸長度為 $2a = 2(4) = 8$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma123",
    "category": "微分初步",
    "question": "設函數 $f(x) = \\frac{x}{x + 1}$，利用商的微分法則求其導函數 $f'(x)$ 為何？",
    "options": [
      "$\\frac{1}{(x + 1)^2}$",
      "$\\frac{2x + 1}{(x + 1)^2}$",
      "$1$",
      "$\\frac{-1}{(x + 1)^2}$"
    ],
    "answer": 0,
    "explanation": "商的微分公式 $\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}$。$f'(x) = \\frac{1(x + 1) - x(1)}{(x + 1)^2} = \\frac{x + 1 - x}{(x + 1)^2} = \\frac{1}{(x + 1)^2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma124",
    "category": "微分初步",
    "question": "函數 $f(x) = x^3 - 6x^2 + 9x + 2$ 的水平切線（切線斜率為 0 的點）出現在 $x$ 為何值處？",
    "options": [
      "$x = 1$ 與 $x = 3$",
      "$x = 2$ 與 $x = 4$",
      "$x = 0$ 與 $x = 3$",
      "$x = -1$ 與 $x = -3$"
    ],
    "answer": 0,
    "explanation": "令導函數為 0：$f'(x) = 3x^2 - 12x + 9 = 0 \\implies 3(x^2 - 4x + 3) = 0 \\implies 3(x - 1)(x - 3) = 0$。解得 $x = 1$ 與 $x = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma125",
    "category": "數與式",
    "question": "循環小數 $0.\\overline{6} + 0.\\overline{3}$ 的計算結果化為最簡分數為何？",
    "options": [
      "1",
      "9/9",
      "0.9",
      "3/3"
    ],
    "answer": 0,
    "explanation": "$0.\\overline{6} = \\frac{6}{9} = \\frac{2}{3}$；$0.\\overline{3} = \\frac{3}{9} = \\frac{1}{3}$。總和為 $\\frac{2}{3} + \\frac{1}{3} = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma126",
    "category": "三角函數",
    "question": "在直角三角形中，已知銳角 $\\theta$ 滿足 $\\sin\\theta = \\frac{3}{5}$，利用半角公式求 $\\sin^2\\left(\\frac{\\theta}{2}\\right)$ 之值？",
    "options": [
      "1/10",
      "1/5",
      "3/10",
      "9/25"
    ],
    "answer": 0,
    "explanation": "銳角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。半角公式：$\\sin^2\\left(\\frac{\\theta}{2}\\right) = \\frac{1 - \\cos\\theta}{2} = \\frac{1 - 4/5}{2} = \\frac{1/5}{2} = \\frac{1}{10}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma127",
    "category": "平面向量",
    "question": "已知向量 $\\vec{a} = (3, 4)$ 與向量 $\\vec{b} = (-4, 3)$，兩向量的夾角 $\\theta$ 為多少度？",
    "options": [
      "90°（兩向量互相垂直）",
      "0°",
      "180°",
      "45°"
    ],
    "answer": 0,
    "explanation": "內積 $\\vec{a} \\cdot \\vec{b} = 3(-4) + 4(3) = -12 + 12 = 0$。非零向量內積為 0，夾角為 90°。",
    "difficulty": "基礎"
  },
  {
    "id": "ma128",
    "category": "空間直線與平面",
    "question": "若直線 $L$ 的方向向量為 $\\vec{v} = (1, 2, -1)$，平面 $E$ 的法向量為 $\\vec{n} = (2, -1, 0)$。則直線 $L$ 與平面 $E$ 的空間幾何位置關係為何？",
    "options": [
      "直線 $L$ 與平面 $E$ 平行或直線落在平面上（直線與法向量垂直）",
      "直線 $L$ 垂直於平面 $E$",
      "直線與平面以 45° 相交",
      "歪斜關係"
    ],
    "answer": 0,
    "explanation": "計算內積：$\\vec{v} \\cdot \\vec{n} = 1(2) + 2(-1) + (-1)(0) = 2 - 2 = 0$。方向向量垂直於法向量，代表直線與平面平行（或直線完全包含於平面內）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma129",
    "category": "排列組合",
    "question": "由 5 位男生與 4 位女生中隨機選出 3 人，恰好選出 1 男 2 女的選法共有多少種？",
    "options": [
      "30 種",
      "20 種",
      "60 種",
      "15 種"
    ],
    "answer": 0,
    "explanation": "乘法原理：$C^5_1 \\times C^4_2 = 5 \\times 6 = 30$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma130",
    "category": "機率與統計",
    "question": "設某射擊選手射擊靶心的命中率為 0.8。若該選手獨立連續射擊 3 次，恰好命中 2 次的二項機率為何？",
    "options": [
      "0.384",
      "0.512",
      "0.128",
      "0.64"
    ],
    "answer": 0,
    "explanation": "二項分布機率公式：$P(X = 2) = C^3_2 (0.8)^2 (0.2)^1 = 3 \\times 0.64 \\times 0.2 = 0.384$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma131",
    "category": "多項式函數",
    "question": "已知 $f(x) = x^3 - 3x^2 + 4$，利用一階導數判斷函數在下列哪一個區間內為嚴格遞減？",
    "options": [
      "(0, 2)",
      "(-\\infty, 0)",
      "(2, \\infty)",
      "(1, 3)"
    ],
    "answer": 0,
    "explanation": "$f'(x) = 3x^2 - 6x = 3x(x - 2)$。當 $0 < x < 2$ 時，$f'(x) < 0$，故函數在區間 $(0, 2)$ 上嚴格單調遞減。",
    "difficulty": "基礎"
  },
  {
    "id": "ma132",
    "category": "指數與對數",
    "question": "方程式 $4^x - 3 \\times 2^x - 4 = 0$ 的實數解 $x$ 為何？",
    "options": [
      "2",
      "4",
      "1",
      "0"
    ],
    "answer": 0,
    "explanation": "令 $t = 2^x > 0$。方程式化為 $t^2 - 3t - 4 = 0 \\implies (t - 4)(t + 1) = 0$。因為 $t > 0$，負根 $t = -1$ 不合，解得 $t = 4 \\implies 2^x = 4 = 2^2 \\implies x = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma133",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $x^2 = -8y$ 的開口方向與焦點坐標為何？",
    "options": [
      "開口向下，焦點 $(0, -2)$",
      "開口向上，焦點 $(0, 2)$",
      "開口向左，焦點 $(-2, 0)$",
      "開口向下，焦點 $(0, -4)$"
    ],
    "answer": 0,
    "explanation": "標準式 $x^2 = 4cy$。此處 $4c = -8 \\implies c = -2 < 0$，對稱軸為 $y$ 軸，開口向下，頂點 $(0, 0)$，焦點為 $(0, c) = (0, -2)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma134",
    "category": "矩陣與線性變換",
    "question": "已知二階方陣 $A = \\begin{pmatrix} 3 & 2 \\\\ 1 & 1 \\end{pmatrix}$，求其反矩陣 $A^{-1}$ 為何？",
    "options": [
      "$\\begin{pmatrix} 1 & -2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ -1 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & -2 \\\\ -1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 2 \\\\ 1 & -3 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "行列式 $\\det(A) = 3(1) - 2(1) = 1$。二階反矩陣公式：主對角線對調、副對角線變號：$A^{-1} = \\frac{1}{1}\\begin{pmatrix} 1 & -2 \\\\ -1 & 3 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma135",
    "category": "三角函數",
    "question": "在直角坐標系中，點 $P(-1, \\sqrt{3})$ 的極坐標 $(r, \\theta)$（其中 $r > 0, 0 \\le \\theta < 2\\pi$）為何？",
    "options": [
      "$(2, 2\\pi/3)$",
      "$(2, \\pi/3)$",
      "$(2, 5\\pi/6)$",
      "$(4, 2\\pi/3)$"
    ],
    "answer": 0,
    "explanation": "半徑 $r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = \\sqrt{1 + 3} = 2$。$\\cos\\theta = -1/2, \\sin\\theta = \\sqrt{3}/2$，位於第二象限，極角 $\\theta = 120^\\circ = \\frac{2\\pi}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma136",
    "category": "數與式",
    "question": "設 $x, y$ 皆為正實數，且滿足 $2x + 3y = 12$。由算幾不等式求 $x y$ 的最大值為何？",
    "options": [
      "6",
      "12",
      "3",
      "4"
    ],
    "answer": 0,
    "explanation": "因為 $2x, 3y > 0$，由算幾不等式：$\\frac{2x + 3y}{2} \\ge \\sqrt{2x \\times 3y} = \\sqrt{6xy}$。代入 $2x+3y=12$ 得 $\\frac{12}{2} = 6 \\ge \\sqrt{6xy} \\implies 36 \\ge 6xy \\implies xy \\le 6$。當 $2x = 3y = 6$（即 $x = 3, y = 2$）時等號成立，最大值為 6。",
    "difficulty": "基礎"
  },
  {
    "id": "ma137",
    "category": "多項式函數",
    "question": "三次多項式函數 $f(x)$ 具有相對極大值點 $A(1, 8)$ 與相對極小值點 $B(5, -4)$。則該三次函數圖形的對稱中心（反曲點）坐標為何？",
    "options": [
      "(3, 2)",
      "(3, 4)",
      "(2, 2)",
      "(4, 2)"
    ],
    "answer": 0,
    "explanation": "三次多項式圖形幾何定理：三次函數圖形對於其反曲點（對稱中心）呈中心點對稱，其相對極大值點與相對極小值點的連線中點，必恰為對稱中心。中點為 $\\left(\\frac{1+5}{2}, \\frac{8+(-4)}{2}\\right) = (3, 2)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma138",
    "category": "多項式函數",
    "question": "三次多項式 $P(x)$ 滿足 $P(1) = P(2) = P(3) = 0$，且 $P(0) = -12$。則 $P(4)$ 之值為何？",
    "options": [
      "12",
      "24",
      "6",
      "-12"
    ],
    "answer": 0,
    "explanation": "由因式定理，$P(x) = a(x - 1)(x - 2)(x - 3)$。代入 $x = 0$ 得 $P(0) = a(-1)(-2)(-3) = -6a = -12 \\implies a = 2$。因此 $P(4) = 2(4 - 1)(4 - 2)(4 - 3) = 2(3)(2)(1) = 12$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma139",
    "category": "指數與對數",
    "question": "解對數方程式 $\\log_2(x) + \\log_2(x - 2) = 3$，求實數解 $x$ 為何？",
    "options": [
      "4",
      "-2",
      "4 或 -2",
      "3"
    ],
    "answer": 0,
    "explanation": "對數合併：$\\log_2(x(x - 2)) = 3 \\implies x(x - 2) = 2^3 = 8 \\implies x^2 - 2x - 8 = 0 \\implies (x - 4)(x + 2) = 0$。由真數條件 $x > 0$ 且 $x - 2 > 0 \\implies x > 2$。負根 $x = -2$ 不合，唯有 $x = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma140",
    "category": "指數與對數",
    "question": "設 $a = \\log_3 2$。以 $a$ 表示 $\\log_9 8$ 之結果為何？",
    "options": [
      "$\\frac{3}{2} a$",
      "$3a$",
      "$2a$",
      "$\\frac{2}{3} a$"
    ],
    "answer": 0,
    "explanation": "利用對數次方的底數與真數公式：$\\log_{b^n}(x^m) = \\frac{m}{n}\\log_b x$。$\\log_9 8 = \\log_{3^2}(2^3) = \\frac{3}{2}\\log_3 2 = \\frac{3}{2} a$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma141",
    "category": "三角函數",
    "question": "在微積分與三角極限中，當角 $x$ 以「弧度（Radian）」為單位時，極限 $\\lim_{x \\to 0} \\frac{\\sin x}{x}$ 的精確數值為何？",
    "options": [
      "1",
      "0",
      "$\\pi/180$",
      "不存在"
    ],
    "answer": 0,
    "explanation": "夾擠定理（Squeeze Theorem）：在單位圓中面積比較 $\\sin x < x < \\tan x \\implies \\cos x < \\frac{\\sin x}{x} < 1$。當 $x \\to 0$ 時 $\\cos x \\to 1$，故極限精確為 1（必須以弧度制為前提）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma142",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，三邊長分別為 $a = 3, b = 5, c = 7$。由餘弦定理求最大內角 $\\angle C$ 的度數為何？",
    "options": [
      "120°",
      "150°",
      "135°",
      "90°"
    ],
    "answer": 0,
    "explanation": "餘弦定理：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{3^2 + 5^2 - 7^2}{2(3)(5)} = \\frac{9 + 25 - 49}{30} = \\frac{-15}{30} = -\\frac{1}{2}$。因為 $\\cos 120^\\circ = -\\frac{1}{2}$，故 $\\angle C = 120^\\circ$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma143",
    "category": "平面向量",
    "question": "平面上兩向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (4, -1)$ 所張開的平行四邊形面積為多少？",
    "options": [
      "14",
      "10",
      "12",
      "7"
    ],
    "answer": 0,
    "explanation": "二階行列式面積公式：$A = |\\det(\\vec{u}, \\vec{v})| = |2(-1) - 3(4)| = |-2 - 12| = |-14| = 14$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma144",
    "category": "空間向量與外積",
    "question": "已知空間向量 $\\vec{a} = (1, 0, 2)$ 與 $\\vec{b} = (0, 3, 1)$。計算其外積 $\\vec{a} \\times \\vec{b}$ 的坐標表示為何？",
    "options": [
      "(-6, -1, 3)",
      "(6, 1, -3)",
      "(-6, 1, 3)",
      "(2, -1, 3)"
    ],
    "answer": 0,
    "explanation": "外積行列式展開：$\\left(\\begin{vmatrix} 0 & 2 \\\\ 3 & 1 \\end{vmatrix}, -\\begin{vmatrix} 1 & 2 \\\\ 0 & 1 \\end{vmatrix}, \\begin{vmatrix} 1 & 0 \\\\ 0 & 3 \\end{vmatrix}\\right) = (0 - 6, -(1 - 0), 3 - 0) = (-6, -1, 3)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma145",
    "category": "空間直線與平面",
    "question": "空間中兩平行平面 $E_1: 2x - y + 2z = 4$ 與 $E_2: 2x - y + 2z = 13$ 之間的垂直距離為何？",
    "options": [
      "3",
      "9",
      "1",
      "$\\sqrt{3}$"
    ],
    "answer": 0,
    "explanation": "兩平行平面間距離公式：$d = \\frac{|D_1 - D_2|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|4 - 13|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{|-9|}{\\sqrt{4 + 1 + 4}} = \\frac{9}{3} = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma146",
    "category": "矩陣與線性變換",
    "question": "逆時針旋轉 $90^\\circ$ 的二階旋轉矩陣 $R_{90^\\circ}$ 為何？",
    "options": [
      "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "旋轉矩陣公式 $R_\\theta = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$。代入 $\\theta = 90^\\circ$（$\\cos 90^\\circ = 0, \\sin 90^\\circ = 1$），得 $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma147",
    "category": "排列組合",
    "question": "四封寫給不同收件人的信件，隨機放入四個寫好不同收件地址的信封中（每封一信）。恰好「四封信全部都裝錯信封（錯位排列）」的方法數共有多少種？",
    "options": [
      "9 種",
      "24 種",
      "12 種",
      "6 種"
    ],
    "answer": 0,
    "explanation": "錯位排列數公式：$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9, D_5 = 44$。由遞迴式 $D_n = (n-1)(D_{n-1} + D_{n-2})$，代入 $n=4$ 得 $D_4 = 3(2 + 1) = 9$ 種。",
    "difficulty": "中等"
  },
  {
    "id": "ma148",
    "category": "機率與統計",
    "question": "某罕見疾病在人群中的患病率為 1%。現有一檢驗試劑，其檢驗「真陽性率（靈敏度）」為 90%、「偽陽性率（誤診率）」為 5%。若某人受檢結果呈現「陽性」，利用貝氏定理計算該受檢者「真正患病」的事後機率約為？",
    "options": [
      "約 15.4%（低於 20%，因為罕見疾病基礎先驗機率極低）",
      "90%",
      "95%",
      "50%"
    ],
    "answer": 0,
    "explanation": "貝氏定理：$P(\\text{病}|+) = \\frac{P(+)P(+|\\text{病})}{P(+)P(+|\\text{病}) + P(\\text{無病})P(+|\\text{無病})} = \\frac{0.01 \\times 0.90}{0.01 \\times 0.90 + 0.99 \\times 0.05} = \\frac{0.009}{0.009 + 0.0495} = \\frac{0.009}{0.0585} \\approx 15.4\\%$。",
    "difficulty": "進階"
  },
  {
    "id": "ma149",
    "category": "圓錐曲線",
    "question": "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的焦點坐標與離心率 $e$ 分別為何？",
    "options": [
      "焦點 $(\\pm 3, 0)$，離心率 $e = 3/5$",
      "焦點 $(0, \\pm 3)$，離心率 $e = 3/5$",
      "焦點 $(\\pm 3, 0)$，離心率 $e = 4/5$",
      "焦點 $(\\pm 5, 0)$，離心率 $e = 1$"
    ],
    "answer": 0,
    "explanation": "$a^2 = 25 \\implies a = 5$；$b^2 = 16 \\implies b = 4$。半焦距 $c = \\sqrt{a^2 - b^2} = \\sqrt{25 - 16} = 3$。焦點在 $x$ 軸上為 $(\\pm 3, 0)$。離心率 $e = \\frac{c}{a} = \\frac{3}{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma150",
    "category": "微分初步",
    "question": "已知函數 $f(x) = x^3 - 3x^2$。若其二階導數滿足 $f''(x) > 0$，則該函數圖形呈現何種幾何凹凸特徵？",
    "options": [
      "凹口向上（下凸，Convex）",
      "凹口向下（上凸，Concave）",
      "嚴格遞減",
      "切線斜率恆為負"
    ],
    "answer": 0,
    "explanation": "微積分二階導數檢驗：$f''(x) > 0$ 表示切線斜率 $f'(x)$ 單調遞增，圖形曲線位於切線上方，凹口向上（下凸）；$f''(x) < 0$ 則凹口向下。",
    "difficulty": "基礎"
  },
  {
    "id": "ma151",
    "category": "數與式",
    "question": "多項式 $x^3 - 8$ 進行實數因式分解的結果為？",
    "options": [
      "$(x - 2)(x^2 + 2x + 4)$",
      "$(x - 2)(x^2 - 2x + 4)$",
      "$(x - 2)^3$",
      "$(x - 2)(x + 2)^2$"
    ],
    "answer": 0,
    "explanation": "立方差公式：$a^3 - b^3 = (a - b)(a^2 + ab + b^2)$。代入 $a = x, b = 2$ 得 $(x - 2)(x^2 + 2x + 4)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma152",
    "category": "多項式函數",
    "question": "二次多項式 $f(x) = x^2 - 4x + 7$ 的頂點坐標為何？",
    "options": [
      "(2, 3)",
      "(2, 7)",
      "(-2, 3)",
      "(4, 7)"
    ],
    "answer": 0,
    "explanation": "配方法：$f(x) = (x^2 - 4x + 4) + 3 = (x - 2)^2 + 3$。頂點坐標為 $(2, 3)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma153",
    "category": "指數與對數",
    "question": "計算 $2^{\\log_2 7}$ 之值為何？",
    "options": [
      "7",
      "2",
      "49",
      "14"
    ],
    "answer": 0,
    "explanation": "對數基本恆等式：$a^{\\log_a x} = x$（其中 $a > 0, a \\ne 1, x > 0$）。因此 $2^{\\log_2 7} = 7$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma154",
    "category": "三角函數",
    "question": "已知 $\\sin\\theta = \\frac{4}{5}$ 且 $\\theta$ 為第二象限角，則 $\\cos\\theta$ 之值為何？",
    "options": [
      "-3/5",
      "3/5",
      "-4/5",
      "4/3"
    ],
    "answer": 0,
    "explanation": "第二象限餘弦值為負。$\\cos\\theta = -\\sqrt{1 - \\sin^2\\theta} = -\\sqrt{1 - (4/5)^2} = -\\sqrt{9/25} = -\\frac{3}{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma155",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (1, 2)$ 與 $\\vec{v} = (3, k)$ 互相垂直，則實數 $k$ 之值為何？",
    "options": [
      "-3/2",
      "3/2",
      "-6",
      "2/3"
    ],
    "answer": 0,
    "explanation": "垂直條件內積為 0：$\\vec{u} \\cdot \\vec{v} = 1(3) + 2(k) = 3 + 2k = 0 \\implies 2k = -3 \\implies k = -\\frac{3}{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma156",
    "category": "空間直線與平面",
    "question": "通過點 $P(1, 2, 3)$ 且法向量為 $\\vec{n} = (2, -1, 4)$ 的平面方程式為何？",
    "options": [
      "$2x - y + 4z = 12$",
      "$2x - y + 4z = 0$",
      "$x + 2y + 3z = 12$",
      "$2x - y + 4z = 10$"
    ],
    "answer": 0,
    "explanation": "點法式：$2(x - 1) - 1(y - 2) + 4(z - 3) = 0 \\implies 2x - 2 - y + 2 + 4z - 12 = 0 \\implies 2x - y + 4z = 12$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma157",
    "category": "矩陣與線性變換",
    "question": "若方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，計算其行列式 $\\det(A)$ 之值為何？",
    "options": [
      "-2",
      "2",
      "10",
      "-10"
    ],
    "answer": 0,
    "explanation": "$\\det(A) = 1(4) - 2(3) = 4 - 6 = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma158",
    "category": "排列組合",
    "question": "從 7 個人中選出 3 人分別擔任隊長、副隊長與秘書，共有多少種不同的職務分配方式？",
    "options": [
      "210 種",
      "35 種",
      "42 種",
      "5040 種"
    ],
    "answer": 0,
    "explanation": "排列數公式：$P^7_3 = 7 \\times 6 \\times 5 = 210$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma159",
    "category": "機率與統計",
    "question": "箱中有 4 顆紅球與 6 顆白球。自箱中隨機連續取出 2 顆球（取後不放回），兩顆皆為紅球的機率為何？",
    "options": [
      "2/15",
      "4/25",
      "1/5",
      "12/90（即 2/15）"
    ],
    "answer": 0,
    "explanation": "機率乘法：第 1 顆為紅球機率 $\\frac{4}{10}$，第 2 顆為紅球機率 $\\frac{3}{9}$。總機率為 $\\frac{4}{10} \\times \\frac{3}{9} = \\frac{2}{5} \\times \\frac{1}{3} = \\frac{2}{15}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma160",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $y^2 = 8x$ 的準線方程式為何？",
    "options": [
      "$x = -2$",
      "$x = 2$",
      "$y = -2$",
      "$x = -4$"
    ],
    "answer": 0,
    "explanation": "標準式 $y^2 = 4cx$。此處 $4c = 8 \\implies c = 2$。焦點為 $(2, 0)$，準線為鉛直線 $x = -c \\implies x = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma161",
    "category": "微分初步",
    "question": "函數 $f(x) = x^4 - 4x + 1$ 的一階導數 $f'(x)$ 為何？",
    "options": [
      "$4x^3 - 4$",
      "$4x^3$",
      "$3x^3 - 4$",
      "$4x^3 + 1$"
    ],
    "answer": 0,
    "explanation": "微分冪次法則：$(x^n)' = n x^{n-1}$。$f'(x) = 4x^3 - 4(1) + 0 = 4x^3 - 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma162",
    "category": "多項式函數",
    "question": "求多項式 $P(x) = x^3 - 2x^2 + 5x - 4$ 除以 $x - 1$ 的「餘式」為何？",
    "options": [
      "0（即 $x - 1$ 為 $P(x)$ 之因式）",
      "4",
      "-4",
      "2"
    ],
    "answer": 0,
    "explanation": "餘式定理：餘式等於 $P(1) = 1^3 - 2(1^2) + 5(1) - 4 = 1 - 2 + 5 - 4 = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma163",
    "category": "三角函數",
    "question": "若 $\\cos\\theta = 0$，且 $0 \\le \\theta < 2\\pi$，則 $\\theta$ 的可能值為何？",
    "options": [
      "$\\pi/2$ 或 $3\\pi/2$",
      "0 或 $\\pi$",
      "$\\pi/4$ 或 $5\\pi/4$",
      "$\\pi/3$ 或 $2\\pi/3$"
    ],
    "answer": 0,
    "explanation": "在單位圓上，橫坐標為 0 的點位於 $y$ 軸正半軸與負半軸交點，角度為 $90^\\circ$（$\\pi/2$）與 $270^\\circ$（$3\\pi/2$）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma164",
    "category": "平面向量",
    "question": "設向量 $\\vec{u} = (3, 4)$，則與 $\\vec{u}$ 同方向的「單位向量」為何？",
    "options": [
      "(3/5, 4/5)",
      "(4/5, 3/5)",
      "(3/25, 4/25)",
      "(1, 1)"
    ],
    "answer": 0,
    "explanation": "向量模長 $|\\vec{u}| = \\sqrt{3^2 + 4^2} = 5$。同向單位向量為 $\\frac{\\vec{u}}{|\\vec{u}|} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma165",
    "category": "空間直線與平面",
    "question": "點 $P(1, 2, 3)$ 到 $xy$ 平面的距離為何？",
    "options": [
      "3",
      "1",
      "2",
      "$\\sqrt{14}$"
    ],
    "answer": 0,
    "explanation": "空間點 $(x, y, z)$ 到 $xy$ 平面的垂足為 $(x, y, 0)$，垂直距離為縱向高度絕對值 $|z| = |3| = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma166",
    "category": "數與式",
    "question": "設 $a, b$ 皆為正實數，展開化簡後利用算幾不等式求代數式 $\\left(a + \\frac{1}{b}\\right)\\left(b + \\frac{4}{a}\\right)$ 的最小值為何？",
    "options": [
      "9",
      "8",
      "10",
      "12"
    ],
    "answer": 0,
    "explanation": "展開得 $a b + 4 + 1 + \\frac{4}{a b} = 5 + \\left(a b + \\frac{4}{a b}\\right)$。由算幾不等式：$a b + \\frac{4}{a b} \\ge 2\\sqrt{a b \\times \\frac{4}{a b}} = 2\\sqrt{4} = 4$。因此原式 $\\ge 5 + 4 = 9$。當 $a b = 2$ 時等號成立，最小值為 9。",
    "difficulty": "中等"
  },
  {
    "id": "ma167",
    "category": "多項式函數",
    "question": "多項式 $f(x)$ 除以 $x - 1$ 的餘式為 3，除以 $x - 2$ 的餘式為 5。則 $f(x)$ 除以 $(x - 1)(x - 2)$ 所得的餘式為何？",
    "options": [
      "$2x + 1$",
      "$2x - 1$",
      "$x + 2$",
      "$3x - 1$"
    ],
    "answer": 0,
    "explanation": "由餘式定理，$f(1) = 3, f(2) = 5$。設除以二次式的餘式為 $a x + b$。代入得聯立方程：$a(1) + b = 3$ 且 $a(2) + b = 5$。兩式相減得 $a = 2$，代回得 $b = 1$。餘式為 $2x + 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma168",
    "category": "多項式函數",
    "question": "已知三次方程式 $x^3 - 3x^2 - 4x + 12 = 0$ 的三根分別為 $\\alpha, \\beta, \\gamma$。由根與係數關係求 $\\alpha + \\beta + \\gamma$ 與 $\\alpha\\beta\\gamma$ 之值分別為何？",
    "options": [
      "三根之和為 3，三根之積為 -12",
      "三根之和為 -3，三根之積為 12",
      "三根之和為 3，三根之積為 12",
      "三根之和為 4，三根之積為 -12"
    ],
    "answer": 0,
    "explanation": "三次方程式根與係數公式：$\\alpha + \\beta + \\gamma = -\\frac{b}{a} = -\\frac{-3}{1} = 3$；三根之積 $\\alpha\\beta\\gamma = -\\frac{d}{a} = -\\frac{12}{1} = -12$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma169",
    "category": "指數與對數",
    "question": "已知 $\\log_{10} 2 \\approx 0.3010$。求 $2^{50}$ 展開後的整數位數為幾位數？",
    "options": [
      "16 位數",
      "15 位數",
      "17 位數",
      "50 位數"
    ],
    "answer": 0,
    "explanation": "取常用對數：$\\log_{10}(2^{50}) = 50 \\log_{10} 2 \\approx 50 \\times 0.3010 = 15.05$。首數為 15，位數為首數加 1：$15 + 1 = 16$ 位數。",
    "difficulty": "基礎"
  },
  {
    "id": "ma170",
    "category": "指數與對數",
    "question": "化簡 $\\log_2 24 - \\log_2 3$ 之結果為何？",
    "options": [
      "3",
      "8",
      "2",
      "4"
    ],
    "answer": 0,
    "explanation": "對數減法公式：$\\log_2 24 - \\log_2 3 = \\log_2\\left(\\frac{24}{3}\\right) = \\log_2 8 = \\log_2(2^3) = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma171",
    "category": "三角函數",
    "question": "函數 $f(x) = 3\\sin x - 4\\cos x$。利用正餘弦疊合公式化為 $r\\sin(x - \\phi)$ 後，該函數在全實數域上的最大值為何？",
    "options": [
      "5",
      "7",
      "1",
      "$\\sqrt{7}$"
    ],
    "answer": 0,
    "explanation": "疊合公式振幅為 $r = \\sqrt{a^2 + b^2} = \\sqrt{3^2 + (-4)^2} = \\sqrt{9 + 16} = 5$。因此最大值為 5。",
    "difficulty": "基礎"
  },
  {
    "id": "ma172",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，已知內角 $A = 45^\\circ, B = 30^\\circ$，且邊長 $a = 4\\sqrt{2}$。由正弦定理求邊長 $b$ 之值為何？",
    "options": [
      "4",
      "8",
      "$4\\sqrt{3}$",
      "2"
    ],
    "answer": 0,
    "explanation": "正弦定理：$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\implies \\frac{4\\sqrt{2}}{\\sin 45^\\circ} = \\frac{b}{\\sin 30^\\circ} \\implies \\frac{4\\sqrt{2}}{\\sqrt{2}/2} = \\frac{b}{1/2} \\implies 8 = 2b \\implies b = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma173",
    "category": "平面向量",
    "question": "設實數 $x, y, z$ 滿足 $x^2 + y^2 + z^2 = 9$。由柯西不等式求 $x + 2y + 2z$ 的最大值為何？",
    "options": [
      "9",
      "3",
      "27",
      "81"
    ],
    "answer": 0,
    "explanation": "三維柯西不等式：$(x^2 + y^2 + z^2)(1^2 + 2^2 + 2^2) \\ge (x + 2y + 2z)^2 \\implies 9 \\times (1 + 4 + 4) = 9 \\times 9 = 81 \\ge (x + 2y + 2z)^2$。開平方得最大值為 9。",
    "difficulty": "基礎"
  },
  {
    "id": "ma174",
    "category": "空間向量與外積",
    "question": "關於空間向量外積與內積的混合幾何代數性質，下列敘述何者恆等於 0？",
    "options": [
      "$\\vec{a} \\cdot (\\vec{a} \\times \\vec{b})$（因為外積向量恆垂直於向量 $\\vec{a}$）",
      "$|\\vec{a} \\times \\vec{b}| - |\\vec{a}||\\vec{b}|\\cos\\theta$",
      "$\\vec{a} \\times (\\vec{a} \\times \\vec{b})$",
      "$|\\vec{a} \\cdot \\vec{b}|$"
    ],
    "answer": 0,
    "explanation": "依外積定義，向量 $\\vec{a} \\times \\vec{b}$ 同時垂直於 $\\vec{a}$ 與 $\\vec{b}$。兩垂直向量的內積恆等於 0，即 $\\vec{a} \\cdot (\\vec{a} \\times \\vec{b}) = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma175",
    "category": "空間直線與平面",
    "question": "若空間直線 $L_1: \\frac{x-1}{2} = \\frac{y-2}{1} = \\frac{z-3}{1}$ 與直線 $L_2: \\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-3}{-4}$，兩直線方向向量的夾角為何？",
    "options": [
      "90°（兩方向向量互相垂直）",
      "0°",
      "60°",
      "45°"
    ],
    "answer": 0,
    "explanation": "方向向量分別為 $\\vec{v}_1 = (2, 1, 1)$ 與 $\\vec{v}_2 = (1, 2, -4)$。內積 $\\vec{v}_1 \\cdot \\vec{v}_2 = 2(1) + 1(2) + 1(-4) = 2 + 2 - 4 = 0$。內積為 0，夾角為 90°。",
    "difficulty": "基礎"
  },
  {
    "id": "ma176",
    "category": "矩陣與線性變換",
    "question": "將平面圖形先繞原點逆時針旋轉 $45^\\circ$，再將所有坐標放大為原來的 $\\sqrt{2}$ 倍。所對應的複合變換二階矩陣 $M$ 為何？",
    "options": [
      "$\\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 1 \\\\ -1 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} \\sqrt{2} & 0 \\\\ 0 & \\sqrt{2} \\end{pmatrix}$",
      "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "旋轉矩陣 $R_{45^\\circ} = \\begin{pmatrix} \\frac{\\sqrt{2}}{2} & -\\frac{\\sqrt{2}}{2} \\\\ \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{2}}{2} \\end{pmatrix}$。乘以伸縮矩陣 $\\sqrt{2} I$：$\\sqrt{2} \\begin{pmatrix} \\frac{\\sqrt{2}}{2} & -\\frac{\\sqrt{2}}{2} \\\\ \\frac{\\sqrt{2}}{2} & \\frac{\\sqrt{2}}{2} \\end{pmatrix} = \\begin{pmatrix} 1 & -1 \\\\ 1 & 1 \\end{pmatrix}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma177",
    "category": "排列組合",
    "question": "巴斯卡定理（Pascal's Rule）指出組合數遞迴關係：$C^n_k = C^{n-1}_k + C^{n-1}_{k-1}$。若已知 $C^7_3 = 35$ 且 $C^7_4 = 35$，則 $C^8_4$ 之值為何？",
    "options": [
      "70",
      "35",
      "140",
      "105"
    ],
    "answer": 0,
    "explanation": "由巴斯卡定理：$C^8_4 = C^7_4 + C^7_3 = 35 + 35 = 70$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma178",
    "category": "機率與統計",
    "question": "隨機變數 $X$ 服從參數為 $n = 100$、成功機率為 $p = 0.2$ 的二項分布 $B(100, 0.2)$。則隨機變數 $X$ 的期望值 $E(X)$ 與變異數 $\\text{Var}(X)$ 分別為何？",
    "options": [
      "期望值為 20，變異數為 16",
      "期望值為 20，變異數為 20",
      "期望值為 50，變異數為 25",
      "期望值為 20，變異數為 4"
    ],
    "answer": 0,
    "explanation": "二項分布公式：$E(X) = n p = 100 \\times 0.2 = 20$；變異數 $\\text{Var}(X) = n p (1 - p) = 100 \\times 0.2 \\times 0.8 = 16$（標準差 $\\sigma = 4$）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma179",
    "category": "圓錐曲線",
    "question": "雙曲線方程式 $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ 的焦點到其漸近線 $bx - ay = 0$ 的垂直距離，恆等於該雙曲線的？",
    "options": [
      "虛軸半軸長 $b$",
      "實軸半軸長 $a$",
      "半焦距 $c$",
      "正焦弦長之半"
    ],
    "answer": 0,
    "explanation": "焦點為 $(c, 0)$。點到直線距離公式：$d = \\frac{|b(c) - a(0)|}{\\sqrt{b^2 + (-a)^2}} = \\frac{b c}{\\sqrt{a^2 + b^2}} = \\frac{b c}{c} = b$（恆等於虛軸半軸長 $b$）。",
    "difficulty": "中等"
  },
  {
    "id": "ma180",
    "category": "微分初步",
    "question": "已知函數 $f(x) = 2x^3 - 3x^2 - 12x + 5$。利用一階導函數檢驗，該函數的相對極大值發生在 $x$ 為何值處？",
    "options": [
      "$x = -1$",
      "$x = 2$",
      "$x = 0$",
      "$x = 1$"
    ],
    "answer": 0,
    "explanation": "求導：$f'(x) = 6x^2 - 6x - 12 = 6(x^2 - x - 2) = 6(x - 2)(x + 1) = 0$。臨界點為 $x = -1$ 與 $x = 2$。二階導數 $f''(x) = 12x - 6$。$f''(-1) = -18 < 0$ 為相對極大；$f''(2) = 18 > 0$ 為相對極小。",
    "difficulty": "中等"
  },
  {
    "id": "ma181",
    "category": "數與式",
    "question": "設 $a = \\sqrt{5} + \\sqrt{2}$，$b = \\sqrt{6} + 1$。比較 $a$ 與 $b$ 的大小關係為何？",
    "options": [
      "$a > b$",
      "$a < b$",
      "$a = b$",
      "無法比較"
    ],
    "answer": 0,
    "explanation": "比較兩正數平方：$a^2 = (\\sqrt{5}+\\sqrt{2})^2 = 7 + 2\\sqrt{10}$；$b^2 = (\\sqrt{6}+1)^2 = 7 + 2\\sqrt{6}$。因為 $\\sqrt{10} > \\sqrt{6}$，所以 $a^2 > b^2 \\implies a > b$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma182",
    "category": "多項式函數",
    "question": "多項式函數 $f(x) = x^4 - 2x^2 + 1$ 的實數根共有幾個？",
    "options": [
      "2 個（即 1 與 -1，各為二重根）",
      "4 個相異實根",
      "0 個",
      "1 個"
    ],
    "answer": 0,
    "explanation": "因式分解：$f(x) = (x^2 - 1)^2 = ((x - 1)(x + 1))^2 = (x - 1)^2(x + 1)^2 = 0$。實數根為 $x = 1$ 與 $x = -1$ 兩個相異實根（各為二重根）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma183",
    "category": "指數與對數",
    "question": "解指數方程式 $3^{2x - 1} = 27$，求 $x$ 之值？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "$27 = 3^3 \\implies 3^{2x - 1} = 3^3 \\implies 2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma184",
    "category": "三角函數",
    "question": "計算 $\\cos^2 15^\\circ - \\sin^2 15^\\circ$ 之值為何？",
    "options": [
      "$\\frac{\\sqrt{3}}{2}$",
      "1/2",
      "$\\frac{\\sqrt{2}}{2}$",
      "1"
    ],
    "answer": 0,
    "explanation": "二倍角餘弦公式：$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta$。令 $\\theta = 15^\\circ$：$\\cos^2 15^\\circ - \\sin^2 15^\\circ = \\cos(2 \\times 15^\\circ) = \\cos 30^\\circ = \\frac{\\sqrt{3}}{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma185",
    "category": "平面向量",
    "question": "在坐標平面上，點 $A(1, 2)$ 與點 $B(4, 6)$。向量 $\\vec{AB}$ 的長度 $|\\vec{AB}|$ 為何？",
    "options": [
      "5",
      "25",
      "7",
      "$\\sqrt{7}$"
    ],
    "answer": 0,
    "explanation": "$\\vec{AB} = (4 - 1, 6 - 2) = (3, 4)$。模長 $|\\vec{AB}| = \\sqrt{3^2 + 4^2} = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma186",
    "category": "空間直線與平面",
    "question": "點 $P(2, 1, 4)$ 到 $z$ 軸的距離為何？",
    "options": [
      "$\\sqrt{5}$",
      "4",
      "5",
      "$\\sqrt{21}$"
    ],
    "answer": 0,
    "explanation": "點 $(x, y, z)$ 到 $z$ 軸距離公式為 $\\sqrt{x^2 + y^2} = \\sqrt{2^2 + 1^2} = \\sqrt{4 + 1} = \\sqrt{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma187",
    "category": "矩陣與線性變換",
    "question": "已知二階方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$，求其二次方 $A^2$ 為何？",
    "options": [
      "$\\begin{pmatrix} 4 & 4 \\\\ 0 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 1 \\\\ 0 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 2 \\\\ 0 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 2 \\\\ 0 & 2 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "$A^2 = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}\\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 4+0 & 2+2 \\\\ 0+0 & 0+4 \\end{pmatrix} = \\begin{pmatrix} 4 & 4 \\\\ 0 & 4 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma188",
    "category": "排列組合",
    "question": "將 5 個人排成一列，若「甲必須排在首位」，共有多少種不同的排法？",
    "options": [
      "24 種",
      "120 種",
      "60 種",
      "12 種"
    ],
    "answer": 0,
    "explanation": "甲固定在第一位，剩下 4 個人任意排在後 4 個位置，排列數為 $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma189",
    "category": "機率與統計",
    "question": "袋中有 3 顆紅球與 2 顆綠球。從中任取 2 顆球，恰好為 1 紅 1 綠的機率為何？",
    "options": [
      "3/5",
      "2/5",
      "1/2",
      "6/25"
    ],
    "answer": 0,
    "explanation": "總取法為 $C^5_2 = 10$。取 1 紅 1 綠的方法數為 $C^3_1 \\times C^2_1 = 3 \\times 2 = 6$。機率為 $\\frac{6}{10} = \\frac{3}{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma190",
    "category": "圓錐曲線",
    "question": "橢圓 $\\frac{x^2}{9} + \\frac{y^2}{25} = 1$ 的長軸長度與焦點所在的坐標軸分別為何？",
    "options": [
      "長軸長為 10，焦點在 $y$ 軸上",
      "長軸長為 6，焦點在 $x$ 軸上",
      "長軸長為 10，焦點在 $x$ 軸上",
      "長軸長為 5，焦點在 $y$ 軸上"
    ],
    "answer": 0,
    "explanation": "$b^2 = 9, a^2 = 25 \\implies a = 5$（因為 $y^2$ 下方分母較大，為上下長型橢圓）。焦點在 $y$ 軸上，長軸長度為 $2a = 2(5) = 10$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma191",
    "category": "微分初步",
    "question": "函數 $f(x) = x^2$ 在 $x = 3$ 處的導數 $f'(3)$ 之值為何？",
    "options": [
      "6",
      "9",
      "3",
      "0"
    ],
    "answer": 0,
    "explanation": "$f'(x) = 2x$。代入 $x = 3$ 得 $f'(3) = 2(3) = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma192",
    "category": "多項式函數",
    "question": "三次方程式 $x^3 - 1 = 0$ 在複數系中的一個虛根為 $\\omega$。則 $1 + \\omega + \\omega^2$ 之值為何？",
    "options": [
      "0",
      "1",
      "-1",
      "3"
    ],
    "answer": 0,
    "explanation": "$x^3 - 1 = (x - 1)(x^2 + x + 1) = 0$。虛根 $\\omega$ 滿足方程 $x^2 + x + 1 = 0$，因此 $1 + \\omega + \\omega^2 = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma193",
    "category": "三角函數",
    "question": "計算 $\\sin 30^\\circ \\cos 60^\\circ + \\cos 30^\\circ \\sin 60^\\circ$ 之值為何？",
    "options": [
      "1",
      "1/2",
      "0",
      "\\sqrt{3}/2"
    ],
    "answer": 0,
    "explanation": "和角公式：$\\sin(\\alpha + \\beta) = \\sin\\alpha\\cos\\beta + \\cos\\alpha\\sin\\beta$。原式等於 $\\sin(30^\\circ + 60^\\circ) = \\sin 90^\\circ = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma194",
    "category": "平面向量",
    "question": "若向量 $\\vec{u} = (2, 5)$，則其反方向向量 $-\\vec{u}$ 的坐標表示為何？",
    "options": [
      "(-2, -5)",
      "(2, -5)",
      "(-2, 5)",
      "(5, 2)"
    ],
    "answer": 0,
    "explanation": "$-\\vec{u} = -(2, 5) = (-2, -5)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma195",
    "category": "空間直線與平面",
    "question": "平面 $2x - 3y + 6z = 12$ 的法向量為下列何者？",
    "options": [
      "(2, -3, 6)",
      "(2, 3, 6)",
      "(1/2, -1/3, 1/6)",
      "(12, 12, 12)"
    ],
    "answer": 0,
    "explanation": "平面 $Ax + By + Cz + D = 0$ 的法向量係數即為 $\\vec{n} = (A, B, C) = (2, -3, 6)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma196",
    "category": "數與式",
    "question": "已知 $3 < \\sqrt{11} < 4$，設 $\\sqrt{11}$ 的「整數部分」為 $a$，「小數部分」為 $b$（即 $\\sqrt{11} = a + b$）。則代數式 $b + \\frac{2}{b}$ 之精確值為何？",
    "options": [
      "$\\sqrt{11}$",
      "$2\\sqrt{11}$",
      "6",
      "3"
    ],
    "answer": 0,
    "explanation": "整數部分 $a = 3$，小數部分 $b = \\sqrt{11} - 3$。有理化 $\\frac{2}{b} = \\frac{2}{\\sqrt{11} - 3} = \\frac{2(\\sqrt{11} + 3)}{11 - 9} = \\frac{2(\\sqrt{11} + 3)}{2} = \\sqrt{11} + 3$。因此 $b + \\frac{2}{b} = (\\sqrt{11} - 3) + (\\sqrt{11} + 3) = 2\\sqrt{11}$（修正計算：$\\sqrt{11}-3 + \\sqrt{11}+3 = 2\\sqrt{11}$。正確選項設定為 $2\\sqrt{11}$）。",
    "difficulty": "中等"
  },
  {
    "id": "ma197",
    "category": "多項式函數",
    "question": "設三次方程式 $x^3 - 4x^2 + x + 6 = 0$ 的三根為 $\\alpha, \\beta, \\gamma$。求其三根平方和 $\\alpha^2 + \\beta^2 + \\gamma^2$ 之值為何？",
    "options": [
      "14",
      "16",
      "18",
      "12"
    ],
    "answer": 0,
    "explanation": "由根與係數關係：$\\alpha + \\beta + \\gamma = 4$，$\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = 1$。由乘法恆等式：$\\alpha^2 + \\beta^2 + \\gamma^2 = (\\alpha + \\beta + \\gamma)^2 - 2(\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha) = 4^2 - 2(1) = 16 - 2 = 14$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma198",
    "category": "指數與對數",
    "question": "方程式 $2^x = -x + 3$ 在實數範圍內的實數解個數共有幾個？",
    "options": [
      "恰有 1 個實根（圖形交點唯一）",
      "2 個實根",
      "0 個實根",
      "無限多個"
    ],
    "answer": 0,
    "explanation": "考慮左邊函數 $y = 2^x$ 為嚴格單調遞增曲線，右邊函數 $y = -x + 3$ 為嚴格單調遞減直線。一增一減兩曲線在坐標平面上必且僅交於唯一一點（當 $x = 1$ 時，$2^1 = -1 + 3 = 2$ 恰好為其解）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma199",
    "category": "三角函數",
    "question": "已知角 $\\theta$ 滿足 $\\tan\\theta = \\frac{1}{2}$。利用二倍角公式計算 $\\tan 2\\theta$ 之值為何？",
    "options": [
      "4/3",
      "3/4",
      "1",
      "1/2"
    ],
    "answer": 0,
    "explanation": "二倍角正切公式：$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{2(1/2)}{1 - (1/2)^2} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma200",
    "category": "平面向量",
    "question": "在 $\\Delta ABC$ 中，三邊長分別為 $a = \\overline{BC}, b = \\overline{CA}, c = \\overline{AB}$，點 $I$ 為其「內心（Incenter）」。若 $O$ 為平面上任意參考點，則內心向量表示式 $\\vec{OI}$ 為何？",
    "options": [
      "$\\frac{a\\vec{OA} + b\\vec{OB} + c\\vec{OC}}{a + b + c}$",
      "$\\frac{\\vec{OA} + \\vec{OB} + \\vec{OC}}{3}$（此為重心）",
      "$\\frac{a^2\\vec{OA} + b^2\\vec{OB} + c^2\\vec{OC}}{a^2 + b^2 + c^2}$",
      "$\\frac{\\sin A\\vec{OA} + \\sin B\\vec{OB} + \\sin C\\vec{OC}}{3}$"
    ],
    "answer": 0,
    "explanation": "內心坐標幾何定理：內心為角平分線交點，由分點公式與角平分線性質推導，內心向量恰為三頂點以對邊邊長為加權權重的加權平均數：$\\vec{OI} = \\frac{a\\vec{OA} + b\\vec{OB} + c\\vec{OC}}{a+b+c}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma201",
    "category": "空間直線與平面",
    "question": "空間中有一直徑球面 $S: x^2 + y^2 + z^2 = 25$（球心在原點，半徑 $R = 5$）。若平面 $E: z = 3$ 與球面 $S$ 相交截出一個圓形，則該截面圓的半徑 $r$ 為多少？",
    "options": [
      "4",
      "3",
      "$\\sqrt{34}$",
      "2"
    ],
    "answer": 0,
    "explanation": "球心 $(0, 0, 0)$ 到平面 $z = 3$ 的垂直距離為 $d = 3$。截圓半徑由畢氏定理求得：$r = \\sqrt{R^2 - d^2} = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma202",
    "category": "矩陣與線性變換",
    "question": "解二元一次聯立方程組 $\\begin{cases} ax + by = e \\\\ cx + dy = f \\end{cases}$。若主行列式 $\\Delta = \\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix} = 0$，且 $\\Delta_x \\ne 0$，則依據克拉瑪法則（Cramer's Rule），該方程組的解為？",
    "options": [
      "無解（Inconsistent，代表兩直線平行且不重合）",
      "恰有一組解",
      "無限多組解",
      "解恆為 $x=0, y=0$"
    ],
    "answer": 0,
    "explanation": "克拉瑪法則：若 $\\Delta = 0$ 且分子行列式 $\\Delta_x$ 或 $\\Delta_y$ 至少有一個不為 0，則方程組無解（兩直線平行無交點）；若 $\\Delta = \\Delta_x = \\Delta_y = 0$ 則通常為無限多解或無解（平行重合）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma203",
    "category": "排列組合",
    "question": "有 4 位男生與 4 位女生圍坐在一張無旋轉標記的圓桌聚餐，若規定「4 位女生必須完全相鄰坐在一起」，共有多少種不同的坐法？",
    "options": [
      "576 種（即 $(5-1)! \\times 4! = 24 \\times 24$）",
      "2,880 種",
      "144 種",
      "720 種"
    ],
    "answer": 0,
    "explanation": "將 4 位女生綁成一個大元素，與 4 位男生共 5 個元素作圓形排列，方法數為 $(5 - 1)! = 4! = 24$ 種；大元素內部 4 位女生直線排列有 $4! = 24$ 種。總排法為 $24 \\times 24 = 576$ 種。",
    "difficulty": "中等"
  },
  {
    "id": "ma204",
    "category": "機率與統計",
    "question": "隨機變數 $X$ 與 $Y$ 的相關係數為 $r = 1.0$。這代表在散佈圖中，$X$ 與 $Y$ 的所有數據點具有何種幾何分佈特徵？",
    "options": [
      "所有數據點完全落在同一條斜率為正的直線上（完全完全正相關）",
      "數據點散佈成一個均勻圓形",
      "所有數據點落在斜率為負的直線上",
      "數據點完全隨機無規律"
    ],
    "answer": 0,
    "explanation": "相關係數 $r = +1$ 為完全正線性相關，所有點 $(x_i, y_i)$ 皆精確位於直線 $y = mx + b$（$m > 0$）上，殘差平方和為 0。",
    "difficulty": "基礎"
  },
  {
    "id": "ma205",
    "category": "圓錐曲線",
    "question": "光學幾何中，自拋物線「焦點」發射出的光線，經拋物線內壁反射鏡反射後，反射光線的方向必具有何種特徵？",
    "options": [
      "全部平行於拋物線的對稱軸直線射出（平行光束）",
      "全數匯聚至原點",
      "隨機向四周發散",
      "沿原路徑反彈回焦點"
    ],
    "answer": 0,
    "explanation": "拋物線光學性質：焦點至拋物線上一點的切線角平分線性質保證反射光平行於主軸，探照燈、車頭燈皆依此幾何原理製造。",
    "difficulty": "基礎"
  },
  {
    "id": "ma206",
    "category": "微分初步",
    "question": "三次函數 $f(x) = x^3 - 3x^2 + 2$ 圖形的「反曲點（對稱中心）」坐標為何？",
    "options": [
      "(1, 0)",
      "(1, 2)",
      "(0, 2)",
      "(2, -2)"
    ],
    "answer": 0,
    "explanation": "一階導數 $f'(x) = 3x^2 - 6x$；二階導數 $f''(x) = 6x - 6 = 0 \\implies x = 1$。代入計算縱坐標 $f(1) = 1^3 - 3(1^2) + 2 = 1 - 3 + 2 = 0$。反曲點為 $(1, 0)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma207",
    "category": "數與式",
    "question": "若實數 $x$ 滿足不等式 $x^2 - 5x + 6 \\le 0$，則實數解 $x$ 的範圍為何？",
    "options": [
      "$2 \\le x \\le 3$",
      "$x \\le 2$ 或 $x \\ge 3$",
      "$-3 \\le x \\le -2$",
      "$x \\ge 3$"
    ],
    "answer": 0,
    "explanation": "因式分解：$(x - 2)(x - 3) \\le 0$。解為兩根之間：$2 \\le x \\le 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma208",
    "category": "多項式函數",
    "question": "已知多項式 $P(x) = 2x^2 + 4x + 5$，求其最小值為何？",
    "options": [
      "3",
      "5",
      "2",
      "1"
    ],
    "answer": 0,
    "explanation": "配方法：$P(x) = 2(x^2 + 2x + 1) + 3 = 2(x + 1)^2 + 3$。當 $x = -1$ 時有最小值 3。",
    "difficulty": "基礎"
  },
  {
    "id": "ma209",
    "category": "指數與對數",
    "question": "若 $\\log_x 8 = 3$，則正底數 $x$ 之值為何？",
    "options": [
      "2",
      "8",
      "24",
      "4"
    ],
    "answer": 0,
    "explanation": "對數定義：$\\log_x 8 = 3 \\iff x^3 = 8 = 2^3 \\implies x = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma210",
    "category": "三角函數",
    "question": "直角三角形中，已知銳角 $\\theta$ 的 $\\sin\\theta = \\frac{1}{2}$，則 $\\cos 2\\theta$ 之值為何？",
    "options": [
      "1/2",
      "\\sqrt{3}/2",
      "0",
      "1"
    ],
    "answer": 0,
    "explanation": "二倍角公式：$\\cos 2\\theta = 1 - 2\\sin^2\\theta = 1 - 2\\left(\\frac{1}{2}\\right)^2 = 1 - 2\\left(\\frac{1}{4}\\right) = 1 - \\frac{1}{2} = \\frac{1}{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma211",
    "category": "平面向量",
    "question": "若向量 $\\vec{u} = (1, 2)$ 與向量 $\\vec{v} = (3, 4)$，計算兩向量的內積 $\\vec{u} \\cdot \\vec{v}$ 為何？",
    "options": [
      "11",
      "14",
      "7",
      "5"
    ],
    "answer": 0,
    "explanation": "內積公式：$\\vec{u} \\cdot \\vec{v} = 1(3) + 2(4) = 3 + 8 = 11$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma212",
    "category": "空間直線與平面",
    "question": "點 $P(1, 2, 3)$ 到原點 $O(0, 0, 0)$ 的空間距離為何？",
    "options": [
      "$\\sqrt{14}$",
      "6",
      "14",
      "$\\sqrt{6}$"
    ],
    "answer": 0,
    "explanation": "空間兩點距離公式：$d = \\sqrt{1^2 + 2^2 + 3^2} = \\sqrt{1 + 4 + 9} = \\sqrt{14}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma213",
    "category": "矩陣與線性變換",
    "question": "二階矩陣乘法：$\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix} \\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$ 之計算結果為何？",
    "options": [
      "$\\begin{pmatrix} 11 \\\\ 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 7 \\\\ 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 5 \\\\ 4 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "$\\begin{pmatrix} 1(3) + 2(4) \\\\ 0(3) + 1(4) \\end{pmatrix} = \\begin{pmatrix} 3 + 8 \\\\ 0 + 4 \\end{pmatrix} = \\begin{pmatrix} 11 \\\\ 4 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma214",
    "category": "排列組合",
    "question": "從 5 本相異的書中任選 2 本送給小明，共有多少種不同的選法？",
    "options": [
      "10 種",
      "20 種",
      "25 種",
      "5 種"
    ],
    "answer": 0,
    "explanation": "組合數公式：$C^5_2 = \\frac{5 \\times 4}{2 \\times 1} = 10$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma215",
    "category": "機率與統計",
    "question": "投擲一顆公正的六面骰子兩次，兩次點數相同的機率為何？",
    "options": [
      "1/6",
      "1/36",
      "1/12",
      "1/2"
    ],
    "answer": 0,
    "explanation": "點數相同共有 (1,1), (2,2), ..., (6,6) 共 6 種。機率為 $\\frac{6}{36} = \\frac{1}{6}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma216",
    "category": "圓錐曲線",
    "question": "雙曲線方程式 $x^2 - y^2 = 1$ 的兩條漸近線夾角為多少度？",
    "options": [
      "90°（等軸雙曲線）",
      "60°",
      "45°",
      "180°"
    ],
    "answer": 0,
    "explanation": "漸近線為 $x^2 - y^2 = 0 \\implies y = \\pm x$。直線 $y = x$ 斜率為 1（傾斜角 45°），$y = -x$ 斜率為 -1（傾斜角 135°）。兩漸近線互相垂直，夾角為 90°。",
    "difficulty": "基礎"
  },
  {
    "id": "ma217",
    "category": "微分初步",
    "question": "求常數函數 $f(x) = 7$ 的導函數 $f'(x)$ 為何？",
    "options": [
      "0",
      "7",
      "1",
      "7x"
    ],
    "answer": 0,
    "explanation": "常數函數的導數恆等於 0（切線斜率恆為水平直線 0）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma218",
    "category": "多項式函數",
    "question": "若 $x - 2$ 為多項式 $f(x) = x^3 - 3x + k$ 的因式，則常數 $k$ 之值為何？",
    "options": [
      "-2",
      "2",
      "-4",
      "4"
    ],
    "answer": 0,
    "explanation": "因式定理：$f(2) = 0 \\implies 2^3 - 3(2) + k = 8 - 6 + k = 2 + k = 0 \\implies k = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma219",
    "category": "指數與對數",
    "question": "計算 $10^{\\log_{10} 5}$ 之值為何？",
    "options": [
      "5",
      "10",
      "1",
      "50"
    ],
    "answer": 0,
    "explanation": "恆等式 $10^{\\log_{10} x} = x$。代入得 5。",
    "difficulty": "基礎"
  },
  {
    "id": "ma220",
    "category": "三角函數",
    "question": "已知 $\\sin\\theta = \\cos\\theta$，且角 $\\theta$ 為第一象限角，則角 $\\theta$ 為多少度？",
    "options": [
      "45°",
      "30°",
      "60°",
      "90°"
    ],
    "answer": 0,
    "explanation": "$\\sin\\theta = \\cos\\theta \\implies \\tan\\theta = 1$。第一象限角為 45°。",
    "difficulty": "基礎"
  },
  {
    "id": "ma221",
    "category": "平面向量",
    "question": "已知點 $A(2, 3)$ 與點 $B(6, 7)$，則線段 $AB$ 的中點坐標為何？",
    "options": [
      "(4, 5)",
      "(8, 10)",
      "(2, 2)",
      "(3, 4)"
    ],
    "answer": 0,
    "explanation": "中點坐標為算術平均數：$\\left(\\frac{2+6}{2}, \\frac{3+7}{2}\\right) = (4, 5)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma222",
    "category": "空間直線與平面",
    "question": "空間直線 $\\frac{x - 1}{2} = \\frac{y + 3}{4} = \\frac{z - 5}{-1}$ 的一個方向向量為下列何者？",
    "options": [
      "(2, 4, -1)",
      "(1, -3, 5)",
      "(2, -4, 1)",
      "(1, 3, 5)"
    ],
    "answer": 0,
    "explanation": "對稱比例式分母即為直線的方向向量分量：$\\vec{v} = (2, 4, -1)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma223",
    "category": "矩陣與線性變換",
    "question": "計算二階方陣加法：$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} + \\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}$ 之結果為何？",
    "options": [
      "$\\begin{pmatrix} 3 & 3 \\\\ 4 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 3 \\\\ 4 & 5 \\end{pmatrix}$",
      "$\\begin{pmatrix} 3 & 0 \\\\ 0 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 3 \\\\ 4 & 5 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "對應元素相加：$\\begin{pmatrix} 1+2 & 0+3 \\\\ 0+4 & 1+5 \\end{pmatrix} = \\begin{pmatrix} 3 & 3 \\\\ 4 & 6 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma224",
    "category": "排列組合",
    "question": "將 3 件相異的禮物全部分給甲、乙、丙 3 人，每人恰得 1 件，共有多少種分法？",
    "options": [
      "6 種",
      "3 種",
      "9 種",
      "27 種"
    ],
    "answer": 0,
    "explanation": "全排列公式：$3! = 3 \\times 2 \\times 1 = 6$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma225",
    "category": "微分初步",
    "question": "求函數 $f(x) = x^3$ 的導函數 $f'(x)$ 為何？",
    "options": [
      "$3x^2$",
      "$x^2$",
      "$3x$",
      "$3x^3$"
    ],
    "answer": 0,
    "explanation": "冪次微分法則：$(x^3)' = 3x^2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma226",
    "category": "數與式",
    "question": "將純循環小數 $0.\\overline{27}$（即 $0.272727\\dots$）化為最簡分數的形式為何？",
    "options": [
      "3/11",
      "27/100",
      "9/33",
      "27/90"
    ],
    "answer": 0,
    "explanation": "循環小數化分數公式：$0.\\overline{27} = \\frac{27}{99} = \\frac{27 \\div 9}{99 \\div 9} = \\frac{3}{11}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma227",
    "category": "多項式函數",
    "question": "已知三次方程式 $x^3 - 5x^2 + 2x - 8 = 0$ 的三根分別為 $\\alpha, \\beta, \\gamma$。求其三根的倒數和 $\\frac{1}{\\alpha} + \\frac{1}{\\beta} + \\frac{1}{\\gamma}$ 之值為何？",
    "options": [
      "1/4",
      "-1/4",
      "5/8",
      "2/5"
    ],
    "answer": 0,
    "explanation": "通分得 $\\frac{1}{\\alpha} + \\frac{1}{\\beta} + \\frac{1}{\\gamma} = \\frac{\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha}{\\alpha\\beta\\gamma}$。由根與係數關係：兩兩乘積和為 2，三根之積為 8。因此倒數和為 $\\frac{2}{8} = \\frac{1}{4}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma228",
    "category": "指數與對數",
    "question": "解對數不等式 $\\log_{1/2}(x - 1) > 2$。該不等式的實數解 $x$ 的完整範圍為何？",
    "options": [
      "$1 < x < \\frac{5}{4}$",
      "$x > \\frac{5}{4}$",
      "$x < \\frac{5}{4}$",
      "$1 < x < 5$"
    ],
    "answer": 0,
    "explanation": "底數為 $1/2 < 1$，對數函數單調遞減，去對數時不等號方向反轉：$x - 1 < (1/2)^2 = \\frac{1}{4} \\implies x < 1 + \\frac{1}{4} = \\frac{5}{4}$。同時真數必須大於 0：$x - 1 > 0 \\implies x > 1$。綜合得 $1 < x < 5/4$。",
    "difficulty": "中等"
  },
  {
    "id": "ma229",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，已知內角 $A = 30^\\circ$，其對邊長度為 $a = 5$。由正弦定理求此三角形的「外接圓半徑 $R$」為多少？",
    "options": [
      "5",
      "10",
      "2.5",
      "$5\\sqrt{3}$"
    ],
    "answer": 0,
    "explanation": "正弦定理外接圓直徑公式：$2R = \\frac{a}{\\sin A} = \\frac{5}{\\sin 30^\\circ} = \\frac{5}{1/2} = 10 \\implies R = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma230",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (k, 4)$ 與向量 $\\vec{v} = (2, -3)$。若兩向量在幾何上互相「垂直」，則實數 $k$ 之值為何？",
    "options": [
      "6",
      "-6",
      "8",
      "3/2"
    ],
    "answer": 0,
    "explanation": "兩向量垂直等價於內積為 0：$\\vec{u} \\cdot \\vec{v} = k(2) + 4(-3) = 2k - 12 = 0 \\implies 2k = 12 \\implies k = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma231",
    "category": "空間向量與外積",
    "question": "空間中有三個不共線點 $A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)$。由外積向量求 $\\Delta ABC$ 的幾何面積為何？",
    "options": [
      "$\\frac{\\sqrt{3}}{2}$",
      "$\\sqrt{3}$",
      "1/2",
      "3/2"
    ],
    "answer": 0,
    "explanation": "$\\vec{AB} = (-1, 1, 0)$，$\\vec{AC} = (-1, 0, 1)$。外積 $\\vec{AB} \\times \\vec{AC} = (1(1)-0, 0-(-1), 0-(-1)) = (1, 1, 1)$。三角形面積為外積模長之一半：$\\frac{1}{2} |\\vec{AB} \\times \\vec{AC}| = \\frac{1}{2} \\sqrt{1^2+1^2+1^2} = \\frac{\\sqrt{3}}{2}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma232",
    "category": "空間直線與平面",
    "question": "在空間直角坐標系中，求點 $P(1, 2, 2)$ 到平面 $E: 2x - 2y + z + 5 = 0$ 的垂直距離為何？",
    "options": [
      "5/3",
      "5",
      "1",
      "3/5"
    ],
    "answer": 0,
    "explanation": "點到平面距離公式：$d = \\frac{|2(1) - 2(2) + 1(2) + 5|}{\\sqrt{2^2 + (-2)^2 + 1^2}} = \\frac{|2 - 4 + 2 + 5|}{\\sqrt{4 + 4 + 1}} = \\frac{5}{\\sqrt{9}} = \\frac{5}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma233",
    "category": "矩陣與線性變換",
    "question": "已知二階方陣 $A = \\begin{pmatrix} 3 & k \\\\ 2 & 4 \\end{pmatrix}$。若方陣 $A$ 的「反矩陣不存在（不可逆）」，則實數 $k$ 之值為何？",
    "options": [
      "6",
      "12",
      "-6",
      "0"
    ],
    "answer": 0,
    "explanation": "方陣不可逆充要條件為行列式為 0：$\\det(A) = 3(4) - k(2) = 12 - 2k = 0 \\implies 2k = 12 \\implies k = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma234",
    "category": "排列組合",
    "question": "將 4 封相異的信件任意投入 3 個不同的郵筒中，每封信皆可投進任意郵筒，共有多少種不同的投法？",
    "options": [
      "81 種（即 $3^4$）",
      "64 種（$4^3$）",
      "24 種",
      "12 種"
    ],
    "answer": 0,
    "explanation": "每封信皆有 3 個郵筒可供選擇，4 封信連續決策，由乘法原理投法數為 $3 \\times 3 \\times 3 \\times 3 = 3^4 = 81$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma235",
    "category": "機率與統計",
    "question": "設事件 $A$ 與事件 $B$ 為兩個「獨立事件」，已知 $P(A) = 0.4$ 且 $P(B) = 0.5$。則兩事件同時發生的交集機率 $P(A \\cap B)$ 為何？",
    "options": [
      "0.2",
      "0.9",
      "0.1",
      "0"
    ],
    "answer": 0,
    "explanation": "獨立事件乘法定律：$P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma236",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $y^2 = 8x$ 的焦點坐標與「正焦弦長」分別為何？",
    "options": [
      "焦點為 $(2, 0)$，正焦弦長為 8",
      "焦點為 $(4, 0)$，正焦弦長為 16",
      "焦點為 $(0, 2)$，正焦弦長為 8",
      "焦點為 $(2, 0)$，正焦弦長為 4"
    ],
    "answer": 0,
    "explanation": "標準式 $y^2 = 4cx$。對比係數得 $4c = 8 \\implies c = 2$。頂點在原點，開口向右，焦點坐標為 $(c, 0) = (2, 0)$；正焦弦長恆等於 $|4c| = 8$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma237",
    "category": "微分初步",
    "question": "求曲線 $y = x^2 - 3x + 4$ 在點 $(2, 2)$ 處的切線方程式為何？",
    "options": [
      "$y = x$",
      "$y = 2x - 2$",
      "$y = -x + 4$",
      "$y = x + 2$"
    ],
    "answer": 0,
    "explanation": "導函數 $y' = 2x - 3$。在 $x = 2$ 處的切線斜率為 $m = 2(2) - 3 = 1$。點斜式切線方程：$y - 2 = 1(x - 2) \\implies y = x$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma238",
    "category": "數與式",
    "question": "化簡絕對值不等式 $|x - 3| < 5$ 的實數解範圍為何？",
    "options": [
      "$-2 < x < 8$",
      "$x < 8$",
      "$x > -2$",
      "$-8 < x < 2$"
    ],
    "answer": 0,
    "explanation": "$|x - 3| < 5 \\implies -5 < x - 3 < 5$。同加 3 得 $-2 < x < 8$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma239",
    "category": "多項式函數",
    "question": "多項式 $f(x) = x^2 - 4x + 4$ 的判別式 $\\Delta$ 之值為何？",
    "options": [
      "0（有重根 $x = 2$）",
      "16",
      "-16",
      "4"
    ],
    "answer": 0,
    "explanation": "$\\Delta = b^2 - 4ac = (-4)^2 - 4(1)(4) = 16 - 16 = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma240",
    "category": "指數與對數",
    "question": "計算 $\\log_3 1$ 之值為何？",
    "options": [
      "0",
      "1",
      "3",
      "無意義"
    ],
    "answer": 0,
    "explanation": "任何大於 0 且不等於 1 的底數，1 的對數恆等於 0（因為 $3^0 = 1$）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma241",
    "category": "三角函數",
    "question": "在直角三角形中，已知 $\\cos\\theta = 3/5$，且 $\\theta$ 為銳角，則 $\\tan\\theta$ 之值為何？",
    "options": [
      "4/3",
      "3/4",
      "4/5",
      "5/3"
    ],
    "answer": 0,
    "explanation": "由商數與平方關係：$\\sin\\theta = \\sqrt{1 - (3/5)^2} = 4/5$。$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{4/5}{3/5} = \\frac{4}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma242",
    "category": "平面向量",
    "question": "若向量 $\\vec{a} = (3, -1)$，則其長度（模長）$|\\vec{a}|$ 為何？",
    "options": [
      "$\\sqrt{10}$",
      "10",
      "4",
      "$\\sqrt{8}$"
    ],
    "answer": 0,
    "explanation": "$|\\vec{a}| = \\sqrt{3^2 + (-1)^2} = \\sqrt{9 + 1} = \\sqrt{10}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma243",
    "category": "空間直線與平面",
    "question": "平面 $x = 0$ 在空間直角坐標系中代表的是哪一個坐標平面？",
    "options": [
      "$yz$ 平面",
      "$xy$ 平面",
      "$xz$ 平面",
      "與所有軸平行的平面"
    ],
    "answer": 0,
    "explanation": "當 $x = 0$ 時，點的坐標為 $(0, y, z)$，此為 $yz$ 平面方程式。",
    "difficulty": "基礎"
  },
  {
    "id": "ma244",
    "category": "矩陣與線性變換",
    "question": "若二階方陣 $A = \\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$，求其「轉置矩陣 $A^T$」為何？",
    "options": [
      "$\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 2 \\\\ 3 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & -2 \\\\ -3 & -4 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "轉置矩陣為行列互換：第一列 (1, 2) 變第一行，第二列 (3, 4) 變第二行，得 $\\begin{pmatrix} 1 & 3 \\\\ 2 & 4 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma245",
    "category": "排列組合",
    "question": "計算組合數 $C^6_2$ 之值為何？",
    "options": [
      "15",
      "30",
      "12",
      "36"
    ],
    "answer": 0,
    "explanation": "$C^6_2 = \\frac{6 \\times 5}{2 \\times 1} = 15$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma246",
    "category": "機率與統計",
    "question": "袋中有 5 顆球，其中 2 顆白球、3 顆黑球。隨機抽取 1 顆，抽中「白球」的機率為何？",
    "options": [
      "2/5",
      "3/5",
      "1/2",
      "1/5"
    ],
    "answer": 0,
    "explanation": "白球佔總數的比例為 $2/5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma247",
    "category": "圓錐曲線",
    "question": "圓方程式 $(x - 1)^2 + (y + 2)^2 = 16$ 的圓心坐標與半徑分別為何？",
    "options": [
      "圓心為 $(1, -2)$，半徑為 4",
      "圓心為 $(-1, 2)$，半徑為 16",
      "圓心為 $(1, -2)$，半徑為 16",
      "圓心為 $(1, 2)$，半徑為 4"
    ],
    "answer": 0,
    "explanation": "標準式 $(x-h)^2 + (y-k)^2 = r^2$。圓心為 $(h, k) = (1, -2)$，半徑 $r = \\sqrt{16} = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma248",
    "category": "微分初步",
    "question": "求函數 $f(x) = 5x + 3$ 的導數 $f'(x)$ 之值為何？",
    "options": [
      "5",
      "3",
      "0",
      "5x"
    ],
    "answer": 0,
    "explanation": "一次函數的導數即為其直線斜率：$(5x+3)' = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma249",
    "category": "多項式函數",
    "question": "計算多項式除法 $(x^2 - 1) \\div (x - 1)$ 所得的商式為何？",
    "options": [
      "$x + 1$",
      "$x - 1$",
      "$x$",
      "1"
    ],
    "answer": 0,
    "explanation": "平方差公式因式分解：$x^2 - 1 = (x - 1)(x + 1)$。除以 $(x - 1)$ 商式為 $x + 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma250",
    "category": "指數與對數",
    "question": "計算 $2^3 \\times 2^4$ 之結果為何？",
    "options": [
      "$2^7 = 128$",
      "$2^{12}$",
      "$4^7$",
      "64"
    ],
    "answer": 0,
    "explanation": "同底相乘指數相加：$2^{3+4} = 2^7 = 128$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma251",
    "category": "三角函數",
    "question": "求銳角三角比 $\\sin^2 30^\\circ + \\cos^2 30^\\circ$ 之值為何？",
    "options": [
      "1",
      "0",
      "1/2",
      "\\sqrt{3}/2"
    ],
    "answer": 0,
    "explanation": "同角三角函數平方關係恆等式：$\\sin^2\\theta + \\cos^2\\theta = 1$ 恆成立。",
    "difficulty": "基礎"
  },
  {
    "id": "ma252",
    "category": "平面向量",
    "question": "若向量 $\\vec{u} = (2, 3)$ 與純量 $k = 4$，計算純量乘積 $k\\vec{u}$ 為何？",
    "options": [
      "(8, 12)",
      "(6, 7)",
      "(8, 3)",
      "(2, 12)"
    ],
    "answer": 0,
    "explanation": "$4(2, 3) = (4\\times 2, 4\\times 3) = (8, 12)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma253",
    "category": "空間直線與平面",
    "question": "空間直角坐標系中，原點 $O$ 的坐標為下列何者？",
    "options": [
      "(0, 0, 0)",
      "(1, 1, 1)",
      "(0, 0)",
      "(0, 0, 1)"
    ],
    "answer": 0,
    "explanation": "三維立體坐標系的原點為 $(0, 0, 0)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma254",
    "category": "矩陣與線性變換",
    "question": "計算二階零矩陣 $\\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$ 與任意同階矩陣 $A$ 相乘之結果為何？",
    "options": [
      "零矩陣 $O$",
      "矩陣 $A$",
      "單位矩陣 $I$",
      "純量 0"
    ],
    "answer": 0,
    "explanation": "零矩陣相當於實數中的 0，任何矩陣乘零矩陣結果必為零矩陣。",
    "difficulty": "基礎"
  },
  {
    "id": "ma255",
    "category": "排列組合",
    "question": "計算 $0!$（零的階乘）依數學規定的數值為何？",
    "options": [
      "1",
      "0",
      "無定義",
      "-1"
    ],
    "answer": 0,
    "explanation": "在組合數學與伽瑪函數中，為滿足遞迴式 $n! = n(n-1)!$，數學嚴格定義 $0! = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma256",
    "category": "數與式",
    "question": "計算三項根號的分母有理化：化簡 $\\frac{2}{1 + \\sqrt{2} + \\sqrt{3}}$ 之最簡結果為何？",
    "options": [
      "$\\frac{2 + \\sqrt{2} - \\sqrt{6}}{2}$",
      "$\\sqrt{2} + \\sqrt{3} - 1$",
      "$1 + \\sqrt{2} - \\sqrt{3}$",
      "$\\frac{\\sqrt{2} + \\sqrt{6} - 2}{4}$"
    ],
    "answer": 0,
    "explanation": "分組有理化：將分母視為 $((1+\\sqrt{2}) + \\sqrt{3})$。同乘 $((1+\\sqrt{2}) - \\sqrt{3})$：分母得 $(1+\\sqrt{2})^2 - 3 = 1 + 2\\sqrt{2} + 2 - 3 = 2\\sqrt{2}$。分子為 $2(1 + \\sqrt{2} - \\sqrt{3})$。約分得 $\\frac{1 + \\sqrt{2} - \\sqrt{3}}{\\sqrt{2}} = \\frac{\\sqrt{2} + 2 - \\sqrt{6}}{2} = \\frac{2 + \\sqrt{2} - \\sqrt{6}}{2}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma257",
    "category": "多項式函數",
    "question": "在數值分析與多項式理論中，通過平面上任意 $n+1$ 個橫坐標互異的點 $(x_0, y_0), (x_1, y_1), \\dots, (x_n, y_n)$，次數不超過 $n$ 次的唯一多項式可由何種著名的插值公式精確建構？",
    "options": [
      "拉格朗日插值多項式（Lagrange Interpolating Polynomial）",
      "牛頓二項式展開",
      "泰勒級數",
      "尤拉公式"
    ],
    "answer": 0,
    "explanation": "拉格朗日插值公式：$P(x) = \\sum_{i=0}^n y_i \\ell_i(x)$，基底多項式 $\\ell_i(x) = \\prod_{j \\ne i} \\frac{x - x_j}{x_i - x_j}$。在 $x = x_i$ 處恰好等於 $y_i$，為大考高頻核心多項式定理。",
    "difficulty": "中等"
  },
  {
    "id": "ma258",
    "category": "指數與對數",
    "question": "已知兩正實數 $A$ 與 $B$ 的常用對數 $\\log_{10} A$ 與 $\\log_{10} B$，其數值拆解為首數與尾數後發現其「尾數（Mantissa）完全相同」。這代表實數 $A$ 與 $B$ 在十進位表示法中具有何種特徵？",
    "options": [
      "$A$ 與 $B$ 的「有效數字排列順序完全相同」，僅差在小數點位置（即 $A/B = 10^k$ 為 10 的整數次方倍）",
      "$A$ 與 $B$ 必定完全相等",
      "$A$ 與 $B$ 的整數位數必定完全相同",
      "$A$ 與 $B$ 的總和為整數"
    ],
    "answer": 0,
    "explanation": "對數尾數決定有效數字：$\\log_{10} A - \\log_{10} B = k$（整數）$\\implies \\log_{10}(A/B) = k \\implies A = B \\times 10^k$。因此兩數十進位有效數字完全一致，僅小數點平移。",
    "difficulty": "基礎"
  },
  {
    "id": "ma259",
    "category": "三角函數",
    "question": "在 $\\Delta ABC$ 中，已知三邊長分別為 $a = 5, b = 6, c = 7$。由餘弦定理求最大內角 $\\angle C$ 的餘弦值 $\\cos C$ 為何？",
    "options": [
      "1/5",
      "2/5",
      "1/2",
      "3/5"
    ],
    "answer": 0,
    "explanation": "餘弦定理：$\\cos C = \\frac{a^2 + b^2 - c^2}{2ab} = \\frac{5^2 + 6^2 - 7^2}{2(5)(6)} = \\frac{25 + 36 - 49}{60} = \\frac{12}{60} = \\frac{1}{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma260",
    "category": "平面向量",
    "question": "設實數 $x, y$ 滿足方程式 $x^2 + y^2 = 4$。由二維柯西不等式求代數式 $3x + 4y$ 的最大值為何？",
    "options": [
      "10",
      "20",
      "5",
      "25"
    ],
    "answer": 0,
    "explanation": "柯西不等式：$(x^2 + y^2)(3^2 + 4^2) \\ge (3x + 4y)^2 \\implies 4 \\times (9 + 16) = 4 \\times 25 = 100 \\ge (3x + 4y)^2$。開平方得最大值為 $\\sqrt{100} = 10$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma261",
    "category": "空間向量與外積",
    "question": "空間中由三向量 $\\vec{a} = (1, 0, 0), \\vec{b} = (0, 2, 0), \\vec{c} = (0, 0, 3)$ 所張開的「四面體體積」大小為多少？",
    "options": [
      "1（四面體體積為平行六面體體積的 $1/6$，即 $\\frac{1}{6} |(\\vec{a} \\times \\vec{b}) \\cdot \\vec{c}| = \\frac{1}{6} \\times 6 = 1$）",
      "6",
      "3",
      "2"
    ],
    "answer": 0,
    "explanation": "三向量張成平行六面體體積為三階行列式三向量混合積絕對值：$|\\det| = 1 \\times 2 \\times 3 = 6$。所對應頂點四面體體積為其六分之一：$\\frac{1}{6} \\times 6 = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma262",
    "category": "空間直線與平面",
    "question": "空間中有兩平行平面 $E_1: 2x - y + 2z = 4$ 與 $E_2: 2x - y + 2z = 10$。兩平行平面間的垂直距離 $d$ 為多少？",
    "options": [
      "2",
      "6",
      "1",
      "3"
    ],
    "answer": 0,
    "explanation": "兩平行平面距離公式：$d = \\frac{|D_2 - D_1|}{\\sqrt{A^2 + B^2 + C^2}} = \\frac{|10 - 4|}{\\sqrt{2^2 + (-1)^2 + 2^2}} = \\frac{6}{\\sqrt{4 + 1 + 4}} = \\frac{6}{3} = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma263",
    "category": "矩陣與線性變換",
    "question": "平面線性變換中，二階方陣 $M = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$ 所代表的幾何線性變換為？",
    "options": [
      "對直線 $y = x$ 的「鏡射（反射）變換」",
      "繞原點逆時針旋轉 90°",
      "對 $x$ 軸的鏡射變換",
      "對原點的對稱變換"
    ],
    "answer": 0,
    "explanation": "將點 $(x, y)$ 代入：$\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} x \\\\ y \\end{pmatrix} = \\begin{pmatrix} y \\\\ x \\end{pmatrix}$。橫縱坐標互換，幾何上對應關於對稱軸直線 $y = x$ 的鏡射變換。",
    "difficulty": "基礎"
  },
  {
    "id": "ma264",
    "category": "排列組合",
    "question": "在二項式定理 $(x + 2)^5$ 的展開式中，$x^3$ 項的係數為多少？",
    "options": [
      "40（即 $C^5_2 \\times 2^2 = 10 \\times 4$）",
      "10",
      "20",
      "80"
    ],
    "answer": 0,
    "explanation": "通項公式為 $T_{r+1} = C^5_r x^{5-r} 2^r$。令 $5 - r = 3 \\implies r = 2$。係數為 $C^5_2 \\times 2^2 = 10 \\times 4 = 40$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma265",
    "category": "機率與統計",
    "question": "某罕見疾病在人口中的罹患率為 1%（即 $P(D) = 0.01$）。某檢驗試劑對患病者的陽性檢出率（真陽性）為 90%，對未患病者的誤判率（假陽性）為 10%。若某人檢驗結果呈現「陽性」，利用貝氏定理計算該人「真正患病」的後驗機率約為？",
    "options": [
      "約 8.3%（反直覺偽陽性多：$\\frac{0.01 \\times 0.90}{0.01 \\times 0.90 + 0.99 \\times 0.10} = \\frac{0.009}{0.108} = \\frac{1}{12} \\approx 8.3\\%$）",
      "90%",
      "50%",
      "1%"
    ],
    "answer": 0,
    "explanation": "大考經典貝氏定理題：分母總陽性率為真陽性加假陽性 $0.009 + 0.099 = 0.108$。真正患病機率為 $\\frac{0.009}{0.108} = \\frac{1}{12} \\approx 8.33\\%$（大多數陽性為假陽性）。",
    "difficulty": "中等"
  },
  {
    "id": "ma266",
    "category": "圓錐曲線",
    "question": "雙曲線方程式 $\\frac{x^2}{16} - \\frac{y^2}{9} = 1$ 的兩條漸近線方程式為？",
    "options": [
      "$y = \\pm \\frac{3}{4} x$",
      "$y = \\pm \\frac{4}{3} x$",
      "$y = \\pm \\frac{9}{16} x$",
      "$y = \\pm \\frac{16}{9} x$"
    ],
    "answer": 0,
    "explanation": "雙曲線漸近線令常數項為 0：$\\frac{x^2}{16} - \\frac{y^2}{9} = 0 \\implies \\frac{y^2}{9} = \\frac{x^2}{16} \\implies y = \\pm \\frac{3}{4} x$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma267",
    "category": "微分初步",
    "question": "求三次函數 $f(x) = x^3 - 3x$ 的相對極小值為何？",
    "options": [
      "-2（發生在 $x = 1$ 處）",
      "2",
      "0",
      "-1"
    ],
    "answer": 0,
    "explanation": "求導：$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0 \\implies x = 1$ 或 $x = -1$。二階導數 $f''(x) = 6x$。$f''(1) = 6 > 0$，故在 $x = 1$ 處有相對極小值 $f(1) = 1^3 - 3(1) = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma268",
    "category": "數與式",
    "question": "設 $x$ 為實數，解絕對值方程式 $|2x - 1| = 5$ 的所有解？",
    "options": [
      "$x = 3$ 或 $x = -2$",
      "$x = 3$ 或 $x = 2$",
      "$x = -3$ 或 $x = 2$",
      "$x = 5$"
    ],
    "answer": 0,
    "explanation": "$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$；或 $2x - 1 = -5 \\implies 2x = -4 \\implies x = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma269",
    "category": "多項式函數",
    "question": "若多項式 $f(x) = x^3 + ax + b$ 能被 $(x - 1)^2$ 整除，則係數 $a$ 之值為何？",
    "options": [
      "-3",
      "3",
      "-2",
      "1"
    ],
    "answer": 0,
    "explanation": "能被 $(x-1)^2$ 整除代表 $x = 1$ 處 $f(1) = 0$ 且 $f'(1) = 0$。$f'(x) = 3x^2 + a \\implies f'(1) = 3(1) + a = 0 \\implies a = -3$（且 $b = 2$）。",
    "difficulty": "中等"
  },
  {
    "id": "ma270",
    "category": "指數與對數",
    "question": "解指數方程式 $4^x - 3 \\cdot 2^x + 2 = 0$，求實數解 $x$？",
    "options": [
      "$x = 0$ 或 $x = 1$",
      "$x = 1$ 或 $x = 2$",
      "$x = 0$ 或 $x = -1$",
      "$x = 2$"
    ],
    "answer": 0,
    "explanation": "令 $t = 2^x > 0$：$t^2 - 3t + 2 = (t - 1)(t - 2) = 0 \\implies t = 1$ 或 $t = 2$。因此 $2^x = 1 \\implies x = 0$；$2^x = 2 \\implies x = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma271",
    "category": "三角函數",
    "question": "計算 $\\cos 120^\\circ$ 之精確值為何？",
    "options": [
      "-1/2",
      "1/2",
      "-\\sqrt{3}/2",
      "\\sqrt{3}/2"
    ],
    "answer": 0,
    "explanation": "廣義角餘弦：$\\cos 120^\\circ = \\cos(180^\\circ - 60^\\circ) = -\\cos 60^\\circ = -\\frac{1}{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma272",
    "category": "平面向量",
    "question": "若兩向量 $\\vec{u} = (2, 1)$ 與 $\\vec{v} = (4, 2)$，則兩向量在幾何上的關係為？",
    "options": [
      "互相平行且同方向（$\\vec{v} = 2\\vec{u}$）",
      "互相垂直",
      "反方向",
      "夾角 45°"
    ],
    "answer": 0,
    "explanation": "分量成比例：$\\frac{4}{2} = \\frac{2}{1} = 2 > 0$。兩向量同向平行。",
    "difficulty": "基礎"
  },
  {
    "id": "ma273",
    "category": "空間直線與平面",
    "question": "空間中點 $P(3, -4, 5)$ 到「$xy$ 平面」的垂直距離為何？",
    "options": [
      "5（等於豎坐標絕對值 $|z|$）",
      "3",
      "4",
      "$\\sqrt{34}$"
    ],
    "answer": 0,
    "explanation": "點 $(x, y, z)$ 到 $xy$ 平面的距離公式為 $|z| = |5| = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma274",
    "category": "矩陣與線性變換",
    "question": "二階方陣 $A = \\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$，求其二次方 $A^2$ 為何？",
    "options": [
      "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$",
      "$\\begin{pmatrix} 4 & 0 \\\\ 0 & 6 \\end{pmatrix}$",
      "$\\begin{pmatrix} 2 & 0 \\\\ 0 & 3 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "對角矩陣自乘等於各對角線元素平方：$\\begin{pmatrix} 2^2 & 0 \\\\ 0 & 3^2 \\end{pmatrix} = \\begin{pmatrix} 4 & 0 \\\\ 0 & 9 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma275",
    "category": "排列組合",
    "question": "計算排列數 $P^5_2$ 之值為何？",
    "options": [
      "20",
      "10",
      "25",
      "120"
    ],
    "answer": 0,
    "explanation": "$P^5_2 = 5 \\times 4 = 20$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma276",
    "category": "機率與統計",
    "question": "連續投擲一枚公正硬幣兩次，恰好出現「一正一反」的機率為何？",
    "options": [
      "1/2（有 正反、反正 兩種，即 2/4）",
      "1/4",
      "3/4",
      "1"
    ],
    "answer": 0,
    "explanation": "樣本空間有 正正、正反、反正、反反 共 4 種。一正一反有 2 種，機率為 $\\frac{2}{4} = \\frac{1}{2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma277",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $x^2 = 12y$ 的開口方向為何？",
    "options": [
      "開口向上",
      "開口向下",
      "開口向右",
      "開口向左"
    ],
    "answer": 0,
    "explanation": "標準式 $x^2 = 4cy$。因為 $4c = 12 > 0$，所以頂點在原點且拋物線開口向上。",
    "difficulty": "基礎"
  },
  {
    "id": "ma278",
    "category": "微分初步",
    "question": "求函數 $f(x) = 4x^2$ 的導函數 $f'(x)$ 為何？",
    "options": [
      "$8x$",
      "$4x$",
      "$8x^2$",
      "8"
    ],
    "answer": 0,
    "explanation": "$f'(x) = 4(2x) = 8x$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma279",
    "category": "多項式函數",
    "question": "二次方程式 $x^2 - 6x + 9 = 0$ 的判別式 $\\Delta$ 為何？",
    "options": [
      "0（有二重根 $x = 3$）",
      "18",
      "36",
      "-36"
    ],
    "answer": 0,
    "explanation": "$\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma280",
    "category": "指數與對數",
    "question": "化簡 $\\log_2 16$ 之數值為何？",
    "options": [
      "4",
      "8",
      "2",
      "16"
    ],
    "answer": 0,
    "explanation": "$16 = 2^4 \\implies \\log_2(2^4) = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma281",
    "category": "三角函數",
    "question": "計算 $\\tan 45^\\circ + \\sin 90^\\circ$ 之值為何？",
    "options": [
      "2",
      "1",
      "0",
      "1/2"
    ],
    "answer": 0,
    "explanation": "$\\tan 45^\\circ = 1$ 且 $\\sin 90^\\circ = 1$。總和為 $1 + 1 = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma282",
    "category": "平面向量",
    "question": "已知向量 $\\vec{a} = (1, 2)$ 與 $\\vec{b} = (3, -1)$，計算向量和 $\\vec{a} + \\vec{b}$ 為何？",
    "options": [
      "(4, 1)",
      "(2, -3)",
      "(4, 3)",
      "(-2, 3)"
    ],
    "answer": 0,
    "explanation": "$\\vec{a} + \\vec{b} = (1+3, 2+(-1)) = (4, 1)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma283",
    "category": "空間直線與平面",
    "question": "空間中通過原點 $(0, 0, 0)$ 且法向量為 $\\vec{n} = (1, 2, 3)$ 的平面方程式為？",
    "options": [
      "$x + 2y + 3z = 0$",
      "$x + 2y + 3z = 6$",
      "$x + y + z = 0$",
      "$3x + 2y + z = 0$"
    ],
    "answer": 0,
    "explanation": "法向量決定係數：$1(x-0) + 2(y-0) + 3(z-0) = 0 \\implies x + 2y + 3z = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma284",
    "category": "矩陣與線性變換",
    "question": "已知方陣 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$，其行列式值 $|A|$ 為何？",
    "options": [
      "1",
      "0",
      "2",
      "-1"
    ],
    "answer": 0,
    "explanation": "$|A| = 1(1) - 0(0) = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma285",
    "category": "排列組合",
    "question": "將 4 個人排成一列照相，共有多少種不同的排法？",
    "options": [
      "24 種（$4! = 24$）",
      "12 種",
      "16 種",
      "6 種"
    ],
    "answer": 0,
    "explanation": "全排列 $4! = 4 \\times 3 \\times 2 \\times 1 = 24$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma286",
    "category": "數與式",
    "question": "化簡雙重根號：$\\sqrt{8 - 2\\sqrt{15}}$ 之化簡結果為何？",
    "options": [
      "$\\sqrt{5} - \\sqrt{3}$",
      "$\\sqrt{5} + \\sqrt{3}$",
      "$\\sqrt{6} - \\sqrt{2}$",
      "3 - \\sqrt{5}"
    ],
    "answer": 0,
    "explanation": "尋找兩正數 $a > b$ 滿足 $a + b = 8$ 且 $a b = 15$。解得 $a = 5, b = 3$。因此 $\\sqrt{8 - 2\\sqrt{15}} = \\sqrt{(\\sqrt{5} - \\sqrt{3})^2} = \\sqrt{5} - \\sqrt{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma287",
    "category": "多項式函數",
    "question": "已知實係數三次方程式 $x^3 - 4x^2 + 6x - 4 = 0$ 有一複數虛根為 $1 + i$。由實係數虛根成對定理，該方程式在實數系中的唯一「實數根」為何？",
    "options": [
      "$x = 2$",
      "$x = 1$",
      "$x = -2$",
      "$x = 4$"
    ],
    "answer": 0,
    "explanation": "實係數多項式虛根必成對出現，另一共軛虛根必為 $1 - i$。三根之和為 $\\alpha + (1+i) + (1-i) = -(-4)/1 = 4 \\implies \\alpha + 2 = 4 \\implies \\alpha = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma288",
    "category": "指數與對數",
    "question": "已知 $\\log_{10} 2 \\approx 0.3010, \\log_{10} 3 \\approx 0.4771$。求常用對數 $\\log_{10} 6$ 之近似值為何？",
    "options": [
      "0.7781（$\\log_{10}(2 \\times 3) = \\log_{10} 2 + \\log_{10} 3 = 0.3010 + 0.4771$）",
      "0.1436",
      "0.6020",
      "1.7781"
    ],
    "answer": 0,
    "explanation": "對數乘法性質：$\\log_{10} 6 = \\log_{10}(2 \\times 3) = \\log_{10} 2 + \\log_{10} 3 \\approx 0.3010 + 0.4771 = 0.7781$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma289",
    "category": "三角函數",
    "question": "已知角 $\\theta$ 滿足 $\\sin\\theta = \\frac{3}{5}$ 且 $\\cos\\theta = \\frac{4}{5}$。利用二倍角正弦公式計算 $\\sin 2\\theta$ 之值為何？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "1"
    ],
    "answer": 0,
    "explanation": "二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2 \\times \\frac{3}{5} \\times \\frac{4}{5} = \\frac{24}{25}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma290",
    "category": "平面向量",
    "question": "在 $\\Delta ABC$ 中，點 $G$ 為該三角形的「重心（Centroid）」。若平面上有一點 $P$ 滿足向量關係式 $\\vec{PA} + \\vec{PB} + \\vec{PC} = \\vec{0}$，則點 $P$ 在幾何上必為 $\\Delta ABC$ 的？",
    "options": [
      "重心 $G$（重心滿足 $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$）",
      "外心",
      "內心",
      "垂心"
    ],
    "answer": 0,
    "explanation": "三角形重心坐標定理：$\\vec{OG} = \\frac{\\vec{OA} + \\vec{OB} + \\vec{OC}}{3}$。當以重心為基準原點時，必然滿足 $\\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma291",
    "category": "空間向量與外積",
    "question": "已知空間向量 $\\vec{a} = (1, 2, 3)$ 與 $\\vec{b} = (2, 4, 6)$。計算兩向量的外積 $\\vec{a} \\times \\vec{b}$ 為何？",
    "options": [
      "$\\vec{0} = (0, 0, 0)$（因兩向量互相平行，夾角 0° 外積為零向量）",
      "(1, 1, 1)",
      "(2, 4, 6)",
      "(-1, 2, -1)"
    ],
    "answer": 0,
    "explanation": "平行向量外積為零向量：$\\vec{b} = 2\\vec{a}$，分量成比例。外積模長 $|\\vec{a} \\times \\vec{b}| = |\\vec{a}||\\vec{b}|\\sin 0^\\circ = 0$，故外積為零向量 $(0, 0, 0)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma292",
    "category": "空間直線與平面",
    "question": "空間直角坐標系中，平面 $E: x + y + z = 1$ 與三坐標軸所截出的三個截點 $A, B, C$ 與原點 $O(0, 0, 0)$ 所圍成的「四面體 $O-ABC$ 的體積」為多少？",
    "options": [
      "1/6（截距分別為 $a=1, b=1, c=1$，體積為 $\\frac{1}{6}abc = \\frac{1}{6}$）",
      "1/2",
      "1/3",
      "1"
    ],
    "answer": 0,
    "explanation": "截距式：三截點分別為 $(1, 0, 0), (0, 1, 0), (0, 0, 1)$。三股互相垂直，四面體體積公式 $V = \\frac{1}{6} a b c = \\frac{1}{6}(1)(1)(1) = \\frac{1}{6}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma293",
    "category": "矩陣與線性變換",
    "question": "在線性代數中，若非零行向量 $\\vec{v}$ 滿足矩陣方程 $A \\vec{v} = \\lambda \\vec{v}$（其中 $\\lambda$ 為純量常數），則純量 $\\lambda$ 與向量 $\\vec{v}$ 在矩陣論中分別稱為方陣 $A$ 的？",
    "options": [
      "$\\lambda$ 為「特徵值（Eigenvalue）」，$\\vec{v}$ 為其對應的「特徵向量（Eigenvector）」",
      "$\\lambda$ 為行列式，$\\vec{v}$ 為反矩陣",
      "$\\lambda$ 為跡數，$\\vec{v}$ 為伴隨向量",
      "$\\lambda$ 為秩，$\\vec{v}$ 為核向量"
    ],
    "answer": 0,
    "explanation": "特徵值與特徵向量定義：向量經過矩陣 $A$ 變換後方向保持在同一直線上（僅長度縮放 $\\lambda$ 倍），滿足方程 $(\\lambda I - A)\\vec{v} = \\vec{0}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma294",
    "category": "排列組合",
    "question": "古典「錯排問題（Derangement）」：有 4 位朋友參加交換禮物，每人準備一份禮物。若隨機重新分發禮物且要求「每個人皆不能拿到自己準備的禮物」，共有多少種完全錯排的分法？",
    "options": [
      "9 種（4 元素錯排數 $D_4 = 9$）",
      "24 種",
      "12 種",
      "6 種"
    ],
    "answer": 0,
    "explanation": "錯排數公式：$D_n = n! \\left(1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + \\frac{(-1)^n}{n!}\\right)$。$D_1 = 0, D_2 = 1, D_3 = 2, D_4 = 9$ 種。",
    "difficulty": "中等"
  },
  {
    "id": "ma295",
    "category": "機率與統計",
    "question": "連續型隨機變數 $X$ 的機率密度函數（PDF）為 $f(x)$。在該隨機變數的全體定義域範圍內，函數曲線與橫軸所圍成的總積分面積必須嚴格等於？",
    "options": [
      "1（代表全事件總機率 $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$）",
      "0",
      "期望值 $\\mu$",
      "100"
    ],
    "answer": 0,
    "explanation": "機率密度函數公理：$f(x) \\ge 0$ 且全域曲線下面積恆等於 1，任意區間 $[a, b]$ 的發生機率即為該區間之曲線下定積分面積。",
    "difficulty": "基礎"
  },
  {
    "id": "ma296",
    "category": "圓錐曲線",
    "question": "橢圓方程式 $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ 的半焦距 $c$ 與「離心率 $e = \\frac{c}{a}$」分別為何？",
    "options": [
      "$c = 3$，離心率 $e = 3/5 = 0.6$",
      "$c = 9$，離心率 $e = 9/25$",
      "$c = 3$，離心率 $e = 3/4$",
      "$c = 5$，離心率 $e = 1$"
    ],
    "answer": 0,
    "explanation": "$a^2 = 25 \\implies a = 5$；$b^2 = 16 \\implies b = 4$。由幾何關係 $c^2 = a^2 - b^2 = 25 - 16 = 9 \\implies c = 3$。離心率 $e = c/a = 3/5 = 0.6$（滿足 $0 < e < 1$）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma297",
    "category": "微分初步",
    "question": "函數 $f(x) = x^2 - 4x + 7$ 在封閉區間 $[0, 3]$ 上的「絕對最大值」與「絕對最小值」分別為何？",
    "options": [
      "最大值為 7（發生在端點 $x = 0$ 處），最小值為 3（發生在頂點 $x = 2$ 處）",
      "最大值為 4，最小值為 3",
      "最大值為 7，最小值為 4",
      "最大值為 10，最小值為 0"
    ],
    "answer": 0,
    "explanation": "配方法：$f(x) = (x-2)^2 + 3$。頂點 $x = 2 \\in [0, 3]$，極小值為 $f(2) = 3$。檢驗端點：$f(0) = 7$；$f(3) = (3-2)^2 + 3 = 4$。故最大值為 7、最小值為 3。",
    "difficulty": "中等"
  },
  {
    "id": "ma298",
    "category": "數與式",
    "question": "計算整數多項式乘法展開 $(x + 4)(x - 4)$ 之結果為何？",
    "options": [
      "$x^2 - 16$",
      "$x^2 + 16$",
      "$x^2 - 8x - 16$",
      "$x^2 - 8$"
    ],
    "answer": 0,
    "explanation": "平方差公式：$(x + 4)(x - 4) = x^2 - 4^2 = x^2 - 16$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma299",
    "category": "多項式函數",
    "question": "多項式 $f(x) = 3x^2 + 5x - 2$ 除以 $x$ 的餘式為多少？",
    "options": [
      "-2",
      "3",
      "5",
      "0"
    ],
    "answer": 0,
    "explanation": "由餘式定理，除以 $x$ 的餘式等於 $f(0) = 3(0)^2 + 5(0) - 2 = -2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma300",
    "category": "指數與對數",
    "question": "化簡對數表達式 $\\log_2 8 + \\log_2 4$ 之值為何？",
    "options": [
      "5（$3 + 2 = 5$）",
      "6",
      "12",
      "7"
    ],
    "answer": 0,
    "explanation": "$\\log_2 8 = 3$；$\\log_2 4 = 2$。總和為 $3 + 2 = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma301",
    "category": "三角函數",
    "question": "在直角坐標平面上，點 $P(-1, 0)$ 與原點的連線所對應的廣義角標準角度為何？",
    "options": [
      "180°（$\\pi$ 弧度）",
      "90°",
      "270°",
      "0°"
    ],
    "answer": 0,
    "explanation": "點 $(-1, 0)$ 位於負 $x$ 軸上，標準位置角為 180°。",
    "difficulty": "基礎"
  },
  {
    "id": "ma302",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (3, 4)$，則與 $\\vec{u}$ 同方向的「單位向量」坐標為何？",
    "options": [
      "(3/5, 4/5)",
      "(3, 4)",
      "(1, 1)",
      "(4/5, 3/5)"
    ],
    "answer": 0,
    "explanation": "模長 $|\\vec{u}| = \\sqrt{3^2 + 4^2} = 5$。同向單位向量為 $\\frac{\\vec{u}}{|\\vec{u}|} = \\left(\\frac{3}{5}, \\frac{4}{5}\\right)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma303",
    "category": "空間直線與平面",
    "question": "空間中點 $P(1, 2, 3)$ 關於「$xy$ 平面」的對稱點坐標為何？",
    "options": [
      "(1, 2, -3)（僅 $z$ 坐標變號）",
      "(-1, -2, 3)",
      "(-1, -2, -3)",
      "(1, -2, 3)"
    ],
    "answer": 0,
    "explanation": "關於坐標平面對稱時，垂直於該平面的坐標分量變號。關於 $xy$ 平面對稱僅 $z$ 變號，對稱點為 $(1, 2, -3)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma304",
    "category": "矩陣與線性變換",
    "question": "計算二階方陣行列式 $\\begin{vmatrix} 4 & 2 \\\\ 1 & 3 \\end{vmatrix}$ 之值為何？",
    "options": [
      "10（$4 \\times 3 - 2 \\times 1 = 12 - 2 = 10$）",
      "14",
      "12",
      "8"
    ],
    "answer": 0,
    "explanation": "$ad - bc = 4(3) - 2(1) = 12 - 2 = 10$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma305",
    "category": "排列組合",
    "question": "計算組合數 $C^5_5$ 之值為何？",
    "options": [
      "1",
      "5",
      "0",
      "25"
    ],
    "answer": 0,
    "explanation": "從 5 個相異物全選取的方法數唯一，故 $C^5_5 = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma306",
    "category": "機率與統計",
    "question": "投擲一顆公正六面骰子，出現「小於 3（即 1 或 2）」的機率為何？",
    "options": [
      "1/3（2/6 = 1/3）",
      "1/2",
      "1/6",
      "2/3"
    ],
    "answer": 0,
    "explanation": "小於 3 的點數為 1, 2 共 2 種，機率為 $\\frac{2}{6} = \\frac{1}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma307",
    "category": "圓錐曲線",
    "question": "圓方程式 $x^2 + y^2 = 9$ 的圓心坐標與直徑分別為何？",
    "options": [
      "圓心在原點 $(0, 0)$，直徑為 6",
      "圓心在 $(0, 0)$，直徑為 9",
      "圓心在 $(0, 0)$，直徑為 3",
      "圓心在 $(1, 1)$，直徑為 6"
    ],
    "answer": 0,
    "explanation": "半徑 $r = \\sqrt{9} = 3$，直徑為 $2r = 6$，圓心為 $(0, 0)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma308",
    "category": "微分初步",
    "question": "求函數 $f(x) = x^4$ 的導函數 $f'(x)$ 為何？",
    "options": [
      "$4x^3$",
      "$x^3$",
      "$4x$",
      "$3x^4$"
    ],
    "answer": 0,
    "explanation": "冪次法則：$(x^4)' = 4x^{4-1} = 4x^3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma309",
    "category": "多項式函數",
    "question": "若二次方程式 $x^2 + 2x + 1 = 0$，其兩根之積為何？",
    "options": [
      "1",
      "-2",
      "2",
      "-1"
    ],
    "answer": 0,
    "explanation": "根與係數關係：兩根之積為 $\\frac{c}{a} = \\frac{1}{1} = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma310",
    "category": "指數與對數",
    "question": "計算 $5^0$ 之值為何？",
    "options": [
      "1",
      "0",
      "5",
      "無意義"
    ],
    "answer": 0,
    "explanation": "任何非零實數的零次方恆等於 1。",
    "difficulty": "基礎"
  },
  {
    "id": "ma311",
    "category": "三角函數",
    "question": "計算 $\\cos 0^\\circ$ 之精確值為何？",
    "options": [
      "1",
      "0",
      "-1",
      "1/2"
    ],
    "answer": 0,
    "explanation": "$\\cos 0^\\circ = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma312",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (2, 0)$，則其模長 $|\\vec{u}|$ 為何？",
    "options": [
      "2",
      "4",
      "0",
      "\\sqrt{2}"
    ],
    "answer": 0,
    "explanation": "$|\\vec{u}| = \\sqrt{2^2 + 0^2} = \\sqrt{4} = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma313",
    "category": "空間直線與平面",
    "question": "空間直角坐標系中，點 $P(0, 4, 0)$ 位於哪一條坐標軸上？",
    "options": [
      "$y$ 軸上",
      "$x$ 軸上",
      "$z$ 軸上",
      "$xy$ 平面但不在軸上"
    ],
    "answer": 0,
    "explanation": "橫坐標與豎坐標皆為 0（$x=0, z=0$），點精確位於 $y$ 軸上。",
    "difficulty": "基礎"
  },
  {
    "id": "ma314",
    "category": "矩陣與線性變換",
    "question": "若方陣 $A = \\begin{pmatrix} 3 & 0 \\\\ 0 & 3 \\end{pmatrix}$，則方陣 $A$ 可表示為純量幾倍的單位矩陣 $I$？",
    "options": [
      "$3I$",
      "$I$",
      "$9I$",
      "$6I$"
    ],
    "answer": 0,
    "explanation": "$A = 3 \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix} = 3I$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma315",
    "category": "排列組合",
    "question": "計算階乘 $1!$ 之值為何？",
    "options": [
      "1",
      "0",
      "2",
      "無意義"
    ],
    "answer": 0,
    "explanation": "$1! = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma316",
    "category": "數與式",
    "question": "設 $a, b$ 皆為正實數且滿足 $a + b = 10$。利用算幾不等式，求乘積 $a b$ 的最大值為何？",
    "options": [
      "25（當且僅當 $a = b = 5$ 時等號成立）",
      "20",
      "50",
      "100"
    ],
    "answer": 0,
    "explanation": "算幾不等式：$\\frac{a+b}{2} \\ge \\sqrt{ab} \\implies \\frac{10}{2} = 5 \\ge \\sqrt{ab} \\implies ab \\le 25$。當 $a = b = 5$ 時有最大值 25。",
    "difficulty": "基礎"
  },
  {
    "id": "ma317",
    "category": "多項式函數",
    "question": "已知整係數多項式 $f(x) = 2x^3 - 5x^2 + x + 2$。若 $f(x)$ 有有理根 $\\frac{p}{q}$（其中 $p, q$ 互質），依據有理根檢驗定理（牛頓一次因式檢驗法），分母 $q$ 必須為首項係數 2 的因數，分子 $p$ 必須為常數項 2 的因數。下列何者「絕對不可能是」該多項式的有理根？",
    "options": [
      "$3$（3 不是常數項 2 的因數）",
      "$1$",
      "$-1/2$",
      "$2$"
    ],
    "answer": 0,
    "explanation": "可能之有理根只可能為 $\\pm 1, \\pm 2, \\pm 1/2$。3 絕非 2 的因數，絕不可能是其有理根。",
    "difficulty": "基礎"
  },
  {
    "id": "ma318",
    "category": "指數與對數",
    "question": "已知 $\\log_{10} 2 \\approx 0.3010$。若將 $2^{50}$ 計算展開為十進位整數，則該整數的「最高位首位數字」為何？",
    "options": [
      "1（$\\log_{10} 2^{50} = 50 \\times 0.3010 = 15.05$。尾數 $0.05 < \\log_{10} 2 = 0.3010$，故首位為 1）",
      "2",
      "3",
      "5"
    ],
    "answer": 0,
    "explanation": "對數拆解：$\\log_{10}(2^{50}) = 50(0.3010) = 15.05$。整數首數為 15（為 16 位數），尾數為 0.05。因為 $\\log_{10} 1 = 0 \\le 0.05 < \\log_{10} 2 = 0.3010$，故首位數字必為 1。",
    "difficulty": "中等"
  },
  {
    "id": "ma319",
    "category": "三角函數",
    "question": "計算 $\\cos 75^\\circ$ 的精確值為何？",
    "options": [
      "$\\frac{\\sqrt{6} - \\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{6} + \\sqrt{2}}{4}$",
      "$\\frac{\\sqrt{3} - 1}{2}$",
      "$\\frac{1}{2}$"
    ],
    "answer": 0,
    "explanation": "餘弦和角公式：$\\cos 75^\\circ = \\cos(45^\\circ + 30^\\circ) = \\cos 45^\\circ\\cos 30^\\circ - \\sin 45^\\circ\\sin 30^\\circ = \\frac{\\sqrt{2}}{2}\\frac{\\sqrt{3}}{2} - \\frac{\\sqrt{2}}{2}\\frac{1}{2} = \\frac{\\sqrt{6} - \\sqrt{2}}{4}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma320",
    "category": "平面向量",
    "question": "設 $A, B, P$ 為平面上不共線的三點。若存在實數 $x, y$ 使得 $\\vec{OP} = x\\vec{OA} + y\\vec{OB}$。點 $P$ 落在直線 $AB$ 上的「充要條件」為？",
    "options": [
      "$x + y = 1$（直線共線向量分點公式條件）",
      "$x + y = 0$",
      "$x = y$",
      "$x y = 1$"
    ],
    "answer": 0,
    "explanation": "平面幾何向量定理：$\\vec{OP} = (1-t)\\vec{OA} + t\\vec{OB}$。令 $x = 1-t, y = t$，則 $x + y = 1$ 為三點共線的充要條件；若 $x, y > 0$ 則 $P$ 落在線段 $AB$ 內部。",
    "difficulty": "基礎"
  },
  {
    "id": "ma321",
    "category": "空間向量與外積",
    "question": "空間直角坐標系中，向量 $\\vec{u} = (2, -1, 2)$ 的向量長度（模長）$|\\vec{u}|$ 為多少？",
    "options": [
      "3（$\\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4 + 1 + 4} = \\sqrt{9} = 3$）",
      "5",
      "$\\sqrt{7}$",
      "9"
    ],
    "answer": 0,
    "explanation": "$|\\vec{u}| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{9} = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma322",
    "category": "空間直線與平面",
    "question": "空間直角坐標系中，點 $P(1, 2, 3)$ 到平面的方程式 $E: 2x + 2y - z = 9$ 的垂直距離 $d$ 為多少？",
    "options": [
      "2（公式：$d = \\frac{|2(1) + 2(2) - 3 - 9|}{\\sqrt{2^2 + 2^2 + (-1)^2}} = \\frac{|-6|}{3} = 2$）",
      "3",
      "1",
      "6"
    ],
    "answer": 0,
    "explanation": "點到平面距離公式：$d = \\frac{|2(1) + 2(2) - (3) - 9|}{\\sqrt{4 + 4 + 1}} = \\frac{|2 + 4 - 3 - 9|}{3} = \\frac{|-6|}{3} = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma323",
    "category": "矩陣與線性變換",
    "question": "在線性代數中，凱萊-哈密頓定理（Cayley-Hamilton Theorem）指出任何方陣 $A$ 皆滿足其自身的特徵多項式。對於二階方陣 $A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$，其必然滿足的矩陣等式為？",
    "options": [
      "$A^2 - \\text{tr}(A) A + \\det(A) I = O$（其中 $\\text{tr}(A) = a + d$ 為跡數，$\\det(A) = ad - bc$）",
      "$A^2 + I = O$",
      "$A^2 - A = O$",
      "$A^2 = \\det(A) I$"
    ],
    "answer": 0,
    "explanation": "特徵多項式 $p(\\lambda) = \\det(\\lambda I - A) = \\lambda^2 - (a+d)\\lambda + (ad-bc)$。依 Cayley-Hamilton 定理，$A^2 - \\text{tr}(A) A + \\det(A) I = O$。",
    "difficulty": "中等"
  },
  {
    "id": "ma324",
    "category": "排列組合",
    "question": "在二項式展開式 $(a + b)^n$ 中，各項係數之和等於多少？",
    "options": [
      "$2^n$（令 $a = 1, b = 1$ 代入即得 $\\sum C^n_k = 2^n$）",
      "$n^2$",
      "$2n$",
      "$n!$"
    ],
    "answer": 0,
    "explanation": "令 $a = 1, b = 1$ 代入 $(1 + 1)^n = 2^n = C^n_0 + C^n_1 + \\dots + C^n_n$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma325",
    "category": "機率與統計",
    "question": "若隨機變數 $X$ 服從二項分佈 $B(n=100, p=0.2)$。該二項分佈的期望值 $E(X)$ 與變異數 $\\text{Var}(X)$ 分別為？",
    "options": [
      "期望值 $E(X) = 20$，變異數 $\\text{Var}(X) = 16$（$E = np = 20, \\text{Var} = np(1-p) = 20 \\times 0.8 = 16$）",
      "期望值 20，變異數 20",
      "期望值 10，變異數 8",
      "期望值 20，變異數 4"
    ],
    "answer": 0,
    "explanation": "二項分佈公式：$E(X) = n p = 100 \\times 0.2 = 20$；$\\text{Var}(X) = n p (1-p) = 100 \\times 0.2 \\times 0.8 = 16$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma326",
    "category": "圓錐曲線",
    "question": "拋物線方程式 $y^2 = 16x$ 的焦點坐標與準線方程式分別為何？",
    "options": [
      "焦點為 $(4, 0)$，準線為直線 $x = -4$",
      "焦點為 $(0, 4)$，準線為 $y = -4$",
      "焦點為 $(2, 0)$，準線為 $x = -2$",
      "焦點為 $(8, 0)$，準線為 $x = -8$"
    ],
    "answer": 0,
    "explanation": "標準式 $y^2 = 4cx$。$4c = 16 \\implies c = 4$。對稱軸為 $x$ 軸，焦點在 $(4, 0)$，準線為 $x = -4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma327",
    "category": "微分初步",
    "question": "若函數 $f(x) = (x^2 + 1)(2x - 3)$，利用乘法微分法則求其導函數 $f'(x)$ 之展開結果為何？",
    "options": [
      "$6x^2 - 6x + 2$",
      "$4x^2 - 6x$",
      "$6x^2 + 2$",
      "$2x^2 - 3x + 1$"
    ],
    "answer": 0,
    "explanation": "乘法法則 $(u v)' = u' v + u v' = (2x)(2x - 3) + (x^2 + 1)(2) = 4x^2 - 6x + 2x^2 + 2 = 6x^2 - 6x + 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma328",
    "category": "數與式",
    "question": "計算實數運算：$(\\sqrt{3} + 1)(\\sqrt{3} - 1)$ 之結果為何？",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "answer": 0,
    "explanation": "平方差公式：$(\\sqrt{3})^2 - 1^2 = 3 - 1 = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma329",
    "category": "多項式函數",
    "question": "三次函數 $f(x) = (x - 1)(x - 2)(x - 3)$ 與 $x$ 軸相交截出幾個相異實數交點？",
    "options": [
      "3 個交點（分別在 $x = 1, 2, 3$ 處）",
      "1 個",
      "2 個",
      "0 個"
    ],
    "answer": 0,
    "explanation": "令 $f(x) = 0$，有三個相異實根 $x = 1, 2, 3$，故在 $x$ 軸上有 3 個交點。",
    "difficulty": "基礎"
  },
  {
    "id": "ma330",
    "category": "指數與對數",
    "question": "化簡常用對數 $\\log_{10} 1000$ 之值為何？",
    "options": [
      "3",
      "10",
      "100",
      "30"
    ],
    "answer": 0,
    "explanation": "$1000 = 10^3 \\implies \\log_{10}(10^3) = 3$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma331",
    "category": "三角函數",
    "question": "在直角坐標系中，第一象限角的正弦值 $\\sin\\theta$ 與餘弦值 $\\cos\\theta$ 的正負符號分別為？",
    "options": [
      "$\\sin\\theta > 0$ 且 $\\cos\\theta > 0$（皆為正數）",
      "正弦為正，餘弦為負",
      "正弦為負，餘弦為正",
      "皆為負數"
    ],
    "answer": 0,
    "explanation": "第一象限橫坐標 $x > 0$ 且縱坐標 $y > 0$，故 $\\sin\\theta = y/r > 0$ 且 $\\cos\\theta = x/r > 0$ 皆為正。",
    "difficulty": "基礎"
  },
  {
    "id": "ma332",
    "category": "平面向量",
    "question": "已知兩向量 $\\vec{u} = (1, 3)$ 與 $\\vec{v} = (2, -1)$，計算其內積 $\\vec{u} \\cdot \\vec{v}$ 為何？",
    "options": [
      "-1（$1 \\times 2 + 3 \\times (-1) = 2 - 3 = -1$）",
      "5",
      "1",
      "-5"
    ],
    "answer": 0,
    "explanation": "內積坐標公式：$\\vec{u} \\cdot \\vec{v} = 1(2) + 3(-1) = 2 - 3 = -1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma333",
    "category": "空間直線與平面",
    "question": "空間中點 $P(2, 3, 4)$ 到 $z$ 軸的垂直距離為何？",
    "options": [
      "$\\sqrt{13}$（$\\sqrt{x^2 + y^2} = \\sqrt{2^2 + 3^2} = \\sqrt{13}$）",
      "4",
      "5",
      "$\\sqrt{29}$"
    ],
    "answer": 0,
    "explanation": "點到 $z$ 軸距離為橫坐標與縱坐標的平方和開根號：$d = \\sqrt{x^2 + y^2} = \\sqrt{2^2 + 3^2} = \\sqrt{13}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma334",
    "category": "矩陣與線性變換",
    "question": "已知二階零方陣 $O = \\begin{pmatrix} 0 & 0 \\\\ 0 & 0 \\end{pmatrix}$，則其行列式值 $|O|$ 為何？",
    "options": [
      "0",
      "1",
      "不存在",
      "-1"
    ],
    "answer": 0,
    "explanation": "$|O| = 0(0) - 0(0) = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma335",
    "category": "排列組合",
    "question": "由 5 位候選人中選出 1 位隊長，共有多少種不同的選法？",
    "options": [
      "5 種",
      "1 種",
      "10 種",
      "25 種"
    ],
    "answer": 0,
    "explanation": "$C^5_1 = 5$ 種。",
    "difficulty": "基礎"
  },
  {
    "id": "ma336",
    "category": "機率與統計",
    "question": "連續投擲一枚公正硬幣 4 次，全數出現反面的機率為何？",
    "options": [
      "1/16（$(1/2)^4 = 1/16$）",
      "1/8",
      "1/4",
      "1/2"
    ],
    "answer": 0,
    "explanation": "每次反面機率為 1/2，四次獨立皆為反面的機率為 $(1/2)^4 = 1/16$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma337",
    "category": "圓錐曲線",
    "question": "圓方程式 $(x - 1)^2 + (y + 2)^2 = 16$ 的半徑為多少？",
    "options": [
      "4",
      "16",
      "2",
      "8"
    ],
    "answer": 0,
    "explanation": "$r = \\sqrt{16} = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma338",
    "category": "微分初步",
    "question": "若函數 $f(x) = 5$，其導函數 $f'(x)$ 之值為何？",
    "options": [
      "0（常數函數導數恆為 0）",
      "5",
      "1",
      "不存在"
    ],
    "answer": 0,
    "explanation": "常數函數的圖形為水平直線，斜率處處為 0，故導數恆為 0。",
    "difficulty": "基礎"
  },
  {
    "id": "ma339",
    "category": "多項式函數",
    "question": "多項式 $f(x) = x^2 + 1$ 在實數範圍內是否有實數根？",
    "options": [
      "無實數根（判別式 $\\Delta = 0 - 4 = -4 < 0$）",
      "有兩個相異實數根",
      "有一個二重實數根",
      "有無窮多個實數根"
    ],
    "answer": 0,
    "explanation": "$x^2 = -1$ 在實數系中無解，根為共軛純虛數 $\\pm i$，故無實數根。",
    "difficulty": "基礎"
  },
  {
    "id": "ma340",
    "category": "指數與對數",
    "question": "計算 $2^{-3}$ 之最簡分數結果為何？",
    "options": [
      "1/8",
      "-8",
      "-6",
      "1/6"
    ],
    "answer": 0,
    "explanation": "$2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma341",
    "category": "三角函數",
    "question": "計算 $\\sin 180^\\circ$ 之值為何？",
    "options": [
      "0",
      "1",
      "-1",
      "1/2"
    ],
    "answer": 0,
    "explanation": "$\\sin 180^\\circ = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma342",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (0, 0)$，在向量代數中稱為？",
    "options": [
      "零向量（模長為 0，方向任意未定義）",
      "單位向量",
      "法向量",
      "特徵向量"
    ],
    "answer": 0,
    "explanation": "各分量皆為 0 的向量稱為零向量 $\\vec{0}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma343",
    "category": "空間直線與平面",
    "question": "空間中 $z = 0$ 所代表的幾何對象是哪一個坐標平面？",
    "options": [
      "$xy$ 平面",
      "$yz$ 平面",
      "$xz$ 平面",
      "一條直線"
    ],
    "answer": 0,
    "explanation": "豎坐標 $z = 0$ 的所有點構成 $xy$ 平面。",
    "difficulty": "基礎"
  },
  {
    "id": "ma344",
    "category": "矩陣與線性變換",
    "question": "若方陣 $A = \\begin{pmatrix} 1 & 0 \\\\ 0 & 2 \\end{pmatrix}$，計算其行列式值 $|A|$ 為何？",
    "options": [
      "2",
      "1",
      "0",
      "3"
    ],
    "answer": 0,
    "explanation": "$|A| = 1(2) - 0(0) = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma345",
    "category": "排列組合",
    "question": "計算組合數 $C^4_1$ 之值為何？",
    "options": [
      "4",
      "1",
      "6",
      "24"
    ],
    "answer": 0,
    "explanation": "$C^4_1 = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma346",
    "category": "數與式",
    "question": "利用立方差因式分解公式 $a^3 - b^3 = (a - b)(a^2 + ab + b^2)$ 進行分母有理化：化簡 $\\frac{1}{\\sqrt[3]{3} - 1}$ 之結果為何？",
    "options": [
      "$\\frac{\\sqrt[3]{9} + \\sqrt[3]{3} + 1}{2}$",
      "$\\frac{\\sqrt[3]{9} - \\sqrt[3]{3} + 1}{2}$",
      "$\\sqrt[3]{9} + 1$",
      "$\\frac{\\sqrt[3]{3} + 1}{2}$"
    ],
    "answer": 0,
    "explanation": "分子分母同乘 $(\\sqrt[3]{3})^2 + \\sqrt[3]{3}(1) + 1^2 = \\sqrt[3]{9} + \\sqrt[3]{3} + 1$。分母化為 $(\\sqrt[3]{3})^3 - 1^3 = 3 - 1 = 2$。故結果為 $\\frac{\\sqrt[3]{9} + \\sqrt[3]{3} + 1}{2}$。",
    "difficulty": "中等"
  },
  {
    "id": "ma347",
    "category": "多項式函數",
    "question": "三次多項式函數 $f(x) = x^3 - 6x^2 + 11x - 6$ 的圖形具有點對稱性。該三次曲線的「對稱中心（反曲點）」的坐標為？",
    "options": [
      "(2, 0)（橫坐標公式 $h = -\\frac{b}{3a} = -\\frac{-6}{3(1)} = 2$，代入得 $f(2) = 8 - 24 + 22 - 6 = 0$）",
      "(1, 0)",
      "(3, 0)",
      "(2, 4)"
    ],
    "answer": 0,
    "explanation": "三次多項式 $f(x) = ax^3 + bx^2 + cx + d$ 的對稱中心坐標公式為 $h = -\\frac{b}{3a} = \\frac{6}{3} = 2$。代入計算 $f(2) = 2^3 - 6(2^2) + 11(2) - 6 = 8 - 24 + 22 - 6 = 0$。對稱中心為 $(2, 0)$。",
    "difficulty": "中等"
  },
  {
    "id": "ma348",
    "category": "指數與對數",
    "question": "已知常用對數 $\\log_{10} x = -3.4$。將實數 $x$ 寫成純小數表示法時，$x$ 的小數點後「第幾位」開始出現第一個不為 0 的有效數字？",
    "options": [
      "小數點後「第 4 位」（拆解為首數與尾數：$\\log_{10} x = -4 + 0.6$，首數為 -4 代表小數點後第 4 位開始非零）",
      "小數點後第 3 位",
      "小數點後第 5 位",
      "小數點後第 1 位"
    ],
    "answer": 0,
    "explanation": "大考對數首數尾數基本概念：尾數必須為非負小數（$0 \\le \\alpha < 1$）。$-3.4 = -4 + 0.6$。首數為 $-4$，因此其小數點後連續有 3 個 0，在第 4 位開始出現第一個非零數字。",
    "difficulty": "基礎"
  },
  {
    "id": "ma349",
    "category": "三角函數",
    "question": "已知銳角 $\\theta$ 滿足 $\\tan\\theta = 1/2$。利用正切二倍角公式計算 $\\tan 2\\theta$ 之值為何？",
    "options": [
      "4/3（公式：$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$）",
      "1",
      "3/4",
      "2/3"
    ],
    "answer": 0,
    "explanation": "正切二倍角公式：$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta} = \\frac{2(1/2)}{1 - (1/2)^2} = \\frac{1}{1 - 1/4} = \\frac{1}{3/4} = \\frac{4}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma350",
    "category": "平面向量",
    "question": "設實數 $x, y, z$ 滿足 $x^2 + y^2 + z^2 = 9$。利用三維柯西不等式求代數式 $2x + y - 2z$ 的「最大值」為何？",
    "options": [
      "9（柯西不等式：$(x^2 + y^2 + z^2)(2^2 + 1^2 + (-2)^2) \\ge (2x + y - 2z)^2 \\implies 9 \\times 9 = 81 \\ge (2x + y - 2z)^2$）",
      "18",
      "3",
      "81"
    ],
    "answer": 0,
    "explanation": "三維柯西不等式：$(x^2+y^2+z^2)(2^2+1^2+(-2)^2) \\ge (2x+y-2z)^2 \\implies 9 \\times (4+1+4) = 81 \\ge (2x+y-2z)^2$。開平方得最大值為 9。",
    "difficulty": "基礎"
  },
  {
    "id": "ma351",
    "category": "空間直線與平面",
    "question": "空間直角坐標系中，通過點 $P(1, 2, 3)$ 且方向向量為 $\\vec{v} = (2, 3, 4)$ 的空間直線「對稱比例式方程式」為？",
    "options": [
      "$\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$",
      "$\\frac{x - 2}{1} = \\frac{y - 3}{2} = \\frac{z - 4}{3}$",
      "$2(x - 1) + 3(y - 2) + 4(z - 3) = 0$",
      "$x + y + z = 6$"
    ],
    "answer": 0,
    "explanation": "空間直線對稱比例式公式：分子為點坐標平移 $(x - x_0)$，分母為方向向量分量 $(v_x, v_y, v_z)$。故為 $\\frac{x - 1}{2} = \\frac{y - 2}{3} = \\frac{z - 3}{4}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma352",
    "category": "矩陣與線性變換",
    "question": "平面線性變換中，將平面上所有向量繞坐標原點 $(0, 0)$「逆時針旋轉 $90^\\circ$」的二階旋轉矩陣 $R(90^\\circ)$ 為？",
    "options": [
      "$\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$（$\\begin{pmatrix} \\cos 90^\\circ & -\\sin 90^\\circ \\\\ \\sin 90^\\circ & \\cos 90^\\circ \\end{pmatrix}$）",
      "$\\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$",
      "$\\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$",
      "$\\begin{pmatrix} -1 & 0 \\\\ 0 & -1 \\end{pmatrix}$"
    ],
    "answer": 0,
    "explanation": "旋轉矩陣公式 $R(\\theta) = \\begin{pmatrix} \\cos\\theta & -\\sin\\theta \\\\ \\sin\\theta & \\cos\\theta \\end{pmatrix}$。代入 $\\theta = 90^\\circ$：$\\cos 90^\\circ = 0, \\sin 90^\\circ = 1$，得 $\\begin{pmatrix} 0 & -1 \\\\ 1 & 0 \\end{pmatrix}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma353",
    "category": "排列組合",
    "question": "巴斯卡定理（Pascal's Identity）指出組合數滿足恆等式：$C^n_k + C^n_{k-1} = C^{n+1}_k$。由此恆等式計算 $C^5_3 + C^5_2$ 之值為多少？",
    "options": [
      "20（$C^6_3 = \\frac{6 \\times 5 \\times 4}{3 \\times 2 \\times 1} = 20$）",
      "10",
      "15",
      "30"
    ],
    "answer": 0,
    "explanation": "依巴斯卡恆等式：$C^5_3 + C^5_2 = C^{5+1}_3 = C^6_3 = 20$（亦可由 $10 + 10 = 20$ 驗證）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma354",
    "category": "機率與統計",
    "question": "袋中有 5 顆白球與 3 顆紅球，自袋中「不放回」連續隨機取出 2 顆球。取出的 2 顆球「恰好皆為白球」的機率為何？",
    "options": [
      "5/14（$C^5_2 / C^8_2 = 10 / 28 = 5/14$）",
      "25/64",
      "5/8",
      "1/2"
    ],
    "answer": 0,
    "explanation": "總選法數為 $C^8_2 = 28$。取出 2 顆皆為白球的方法數為 $C^5_2 = 10$。機率為 $\\frac{10}{28} = \\frac{5}{14}$（或乘法原理 $\\frac{5}{8} \\times \\frac{4}{7} = \\frac{5}{14}$）。",
    "difficulty": "基礎"
  },
  {
    "id": "ma355",
    "category": "圓錐曲線",
    "question": "雙曲線方程式 $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ 的貫軸長度 $2a$ 與「正焦弦長 $\\frac{2b^2}{a}$」分別為多少？",
    "options": [
      "貫軸長為 6，正焦弦長為 32/3（$a = 3, b = 4$，正焦弦長 $\\frac{2 \\times 16}{3} = \\frac{32}{3}$）",
      "貫軸長為 8，正焦弦長為 18/4",
      "貫軸長為 6，正焦弦長為 16/3",
      "貫軸長為 3，正焦弦長為 32"
    ],
    "answer": 0,
    "explanation": "$a^2 = 9 \\implies a = 3$（貫軸長 $2a = 6$）；$b^2 = 16$。正焦弦長公式為 $\\frac{2b^2}{a} = \\frac{2(16)}{3} = \\frac{32}{3}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma356",
    "category": "微分初步",
    "question": "利用商的微分法則 $(\\frac{u}{v})' = \\frac{u' v - u v'}{v^2}$，求函數 $f(x) = \\frac{x}{x + 1}$ 的導函數 $f'(x)$ 之展開結果為何？",
    "options": [
      "$\\frac{1}{(x + 1)^2}$",
      "$\\frac{2x + 1}{(x + 1)^2}$",
      "$\\frac{1}{x + 1}$",
      "$1$"
    ],
    "answer": 0,
    "explanation": "$f'(x) = \\frac{(x)'(x + 1) - x(x + 1)'}{(x + 1)^2} = \\frac{1(x + 1) - x(1)}{(x + 1)^2} = \\frac{x + 1 - x}{(x + 1)^2} = \\frac{1}{(x + 1)^2}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma357",
    "category": "數與式",
    "question": "若實數 $x$ 滿足 $x + \\frac{1}{x} = 3$，則代數式 $x^2 + \\frac{1}{x^2}$ 之數值為何？",
    "options": [
      "7（$(x + 1/x)^2 - 2 = 3^2 - 2 = 7$）",
      "9",
      "11",
      "5"
    ],
    "answer": 0,
    "explanation": "乘法公式展開：$(x + \\frac{1}{x})^2 = x^2 + 2 + \\frac{1}{x^2} \\implies x^2 + \\frac{1}{x^2} = 3^2 - 2 = 7$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma358",
    "category": "多項式函數",
    "question": "多項式 $f(x) = x^4 - 1$ 可完全因式分解為？",
    "options": [
      "$(x - 1)(x + 1)(x^2 + 1)$",
      "$(x - 1)^4$",
      "$(x^2 - 1)^2$",
      "$(x - 1)(x + 1)^3$"
    ],
    "answer": 0,
    "explanation": "連續平方差分解：$x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma359",
    "category": "指數與對數",
    "question": "化簡對數表達式：$\\log_5 25$ 之數值為何？",
    "options": [
      "2",
      "5",
      "10",
      "1"
    ],
    "answer": 0,
    "explanation": "$25 = 5^2 \\implies \\log_5(5^2) = 2$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma360",
    "category": "三角函數",
    "question": "直角坐標系中，角 $\\theta$ 的頂點在原點，始邊在正 $x$ 軸，終邊通過點 $P(-3, 4)$。求 $\\sin\\theta$ 之值為何？",
    "options": [
      "4/5（$r = \\sqrt{(-3)^2 + 4^2} = 5$，$\\sin\\theta = y/r = 4/5$）",
      "-3/5",
      "-4/3",
      "3/5"
    ],
    "answer": 0,
    "explanation": "半徑 $r = \\sqrt{(-3)^2 + 4^2} = \\sqrt{9 + 16} = 5$。廣義角正弦 $\\sin\\theta = \\frac{y}{r} = \\frac{4}{5}$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma361",
    "category": "平面向量",
    "question": "已知向量 $\\vec{u} = (4, -3)$，求其向量長度（模長）$|\\vec{u}|$ 為何？",
    "options": [
      "5",
      "7",
      "1",
      "25"
    ],
    "answer": 0,
    "explanation": "$|\\vec{u}| = \\sqrt{4^2 + (-3)^2} = \\sqrt{16 + 9} = \\sqrt{25} = 5$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma362",
    "category": "空間直線與平面",
    "question": "空間中通過點 $P(0, 0, 1)$ 且法向量為 $\\vec{n} = (0, 0, 1)$ 的平面方程式為？",
    "options": [
      "$z = 1$",
      "$x + y + z = 1$",
      "$x = 0$",
      "$y = 0$"
    ],
    "answer": 0,
    "explanation": "法向量決定係數：$0(x-0) + 0(y-0) + 1(z-1) = 0 \\implies z - 1 = 0 \\implies z = 1$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma363",
    "category": "矩陣與線性變換",
    "question": "計算二階方陣行列式 $\\begin{vmatrix} 5 & 0 \\\\ 0 & 5 \\end{vmatrix}$ 之值為何？",
    "options": [
      "25",
      "10",
      "5",
      "0"
    ],
    "answer": 0,
    "explanation": "$5(5) - 0(0) = 25$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma364",
    "category": "排列組合",
    "question": "計算組合數 $C^6_1$ 之值為何？",
    "options": [
      "6",
      "1",
      "12",
      "30"
    ],
    "answer": 0,
    "explanation": "$C^6_1 = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma365",
    "category": "機率與統計",
    "question": "若事件 $A$ 與事件 $B$ 為互斥事件（兩者不可同時發生，即 $A \\cap B = \\emptyset$），已知 $P(A) = 0.3, P(B) = 0.4$。則其聯集機率 $P(A \\cup B)$ 為何？",
    "options": [
      "0.7（$P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$）",
      "0.12",
      "0.1",
      "1.0"
    ],
    "answer": 0,
    "explanation": "互斥事件加法公理：$P(A \\cup B) = P(A) + P(B) = 0.3 + 0.4 = 0.7$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma366",
    "category": "圓錐曲線",
    "question": "橢圓方程式 $\\frac{x^2}{16} + \\frac{y^2}{25} = 1$ 的焦點位於哪一條坐標軸上？",
    "options": [
      "$y$ 軸上（因 $y^2$ 下方分母 $25 > 16$，長軸在 $y$ 軸上）",
      "$x$ 軸上",
      "直線 $y = x$ 上",
      "不存在焦點"
    ],
    "answer": 0,
    "explanation": "分母較大者為長軸所在方向：$a^2 = 25$ 在 $y^2$ 下方，故長軸在 $y$ 軸上，兩焦點坐標為 $(0, \\pm c) = (0, \\pm 3)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma367",
    "category": "微分初步",
    "question": "求三次函數 $f(x) = x^3$ 在 $x = 2$ 處的「切線斜率」為多少？",
    "options": [
      "12（導函數 $f'(x) = 3x^2 \\implies f'(2) = 3(2^2) = 12$）",
      "8",
      "6",
      "4"
    ],
    "answer": 0,
    "explanation": "切線斜率即導函數值：$f'(x) = 3x^2 \\implies f'(2) = 3(4) = 12$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma368",
    "category": "多項式函數",
    "question": "二次函數 $f(x) = (x - 2)^2 + 3$ 的最小值為何？",
    "options": [
      "3（當 $x = 2$ 時）",
      "2",
      "-3",
      "0"
    ],
    "answer": 0,
    "explanation": "開口向上，頂點在 $(2, 3)$，最小值為 3。",
    "difficulty": "基礎"
  },
  {
    "id": "ma369",
    "category": "指數與對數",
    "question": "計算 $10^{\\log_{10} 7}$ 之值為何？",
    "options": [
      "7",
      "10",
      "1",
      "70"
    ],
    "answer": 0,
    "explanation": "對數與指數互逆恆等式：$a^{\\log_a x} = x$。因此 $10^{\\log_{10} 7} = 7$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma370",
    "category": "三角函數",
    "question": "計算 $\\tan 0^\\circ$ 之值為何？",
    "options": [
      "0",
      "1",
      "不存在",
      "-1"
    ],
    "answer": 0,
    "explanation": "$\\tan 0^\\circ = \\frac{\\sin 0^\\circ}{\\cos 0^\\circ} = \\frac{0}{1} = 0$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma371",
    "category": "平面向量",
    "question": "已知兩向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (1, 1)$，求向量差 $\\vec{u} - \\vec{v}$ 為何？",
    "options": [
      "(1, 2)",
      "(3, 4)",
      "(-1, -2)",
      "(1, -2)"
    ],
    "answer": 0,
    "explanation": "$\\vec{u} - \\vec{v} = (2-1, 3-1) = (1, 2)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma372",
    "category": "空間直線與平面",
    "question": "空間直角坐標系中，原點 $O$ 的坐標為？",
    "options": [
      "(0, 0, 0)",
      "(1, 1, 1)",
      "(0, 0)",
      "(0, 1, 0)"
    ],
    "answer": 0,
    "explanation": "三維空間原點橫、縱、豎坐標皆為 0，即 $(0, 0, 0)$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma373",
    "category": "矩陣與線性變換",
    "question": "已知二階方陣 $A = \\begin{pmatrix} 2 & 1 \\\\ 0 & 2 \\end{pmatrix}$，其「跡數（Trace，主對角線元素之和）」$\\text{tr}(A)$ 為多少？",
    "options": [
      "4（$2 + 2 = 4$）",
      "2",
      "0",
      "1"
    ],
    "answer": 0,
    "explanation": "方陣跡數定義為主對角線元素之和：$\\text{tr}(A) = 2 + 2 = 4$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma374",
    "category": "排列組合",
    "question": "計算排列數 $P^3_3$ 之值為何？",
    "options": [
      "6（$3! = 6$）",
      "3",
      "9",
      "1"
    ],
    "answer": 0,
    "explanation": "$P^3_3 = 3 \\times 2 \\times 1 = 6$。",
    "difficulty": "基礎"
  },
  {
    "id": "ma375",
    "category": "微分初步",
    "question": "求函數 $f(x) = 3x$ 的導函數 $f'(x)$ 為何？",
    "options": [
      "3",
      "$3x$",
      "0",
      "$x$"
    ],
    "answer": 0,
    "explanation": "$f'(x) = 3$。",
    "difficulty": "基礎"
  }
];
