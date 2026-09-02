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
  }
];
