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
  }
];
