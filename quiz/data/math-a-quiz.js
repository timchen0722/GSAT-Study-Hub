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
    "category": "平面向量",
    "question": "[題號 46] 已知向量 $\\vec{u} = (2, 3)$ 與 $\\vec{v} = (4, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "14",
      "2",
      "16",
      "8"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (2)(4) + (3)(2) = 14$。",
    "difficulty": "基礎",
    "id": "ma46"
  },
  {
    "category": "多項式函數",
    "question": "[題號 47] 若多項式 $P(x) = x^3 - 2x + 5$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "17",
      "-7",
      "4"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 2(2) + 5 = 8 - 4 + 5 = 9$。",
    "difficulty": "基礎",
    "id": "ma47"
  },
  {
    "category": "指數與對數",
    "question": "[題號 48] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma48"
  },
  {
    "category": "三角函數",
    "question": "[題號 49] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma49"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 50] 通過點 $P(1, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 7",
      "2x + y + 3z = 9",
      "x - 2y + 3z = 5",
      "2x - y - 3z = -5"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 1) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 7$。",
    "difficulty": "基礎",
    "id": "ma50"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 51] 計算二階行列式 $\\begin{vmatrix} 3 & 2 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "0",
      "12",
      "0",
      "0"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (3)(2) - (2)(3) = 6 - 6 = 0$。",
    "difficulty": "基礎",
    "id": "ma51"
  },
  {
    "category": "平面向量",
    "question": "[題號 52] 已知向量 $\\vec{u} = (3, 4)$ 與 $\\vec{v} = (5, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "23",
      "7",
      "26",
      "14"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (3)(5) + (4)(2) = 23$。",
    "difficulty": "基礎",
    "id": "ma52"
  },
  {
    "category": "多項式函數",
    "question": "[題號 53] 若多項式 $P(x) = x^3 - 3x + 7$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "21",
      "-7",
      "6"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 3(2) + 7 = 8 - 6 + 7 = 9$。",
    "difficulty": "基礎",
    "id": "ma53"
  },
  {
    "category": "指數與對數",
    "question": "[題號 54] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma54"
  },
  {
    "category": "三角函數",
    "question": "[題號 55] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma55"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 56] 通過點 $P(2, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 9",
      "2x + y + 3z = 11",
      "x - 2y + 3z = 6",
      "2x - y - 3z = -3"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 2) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 9$。",
    "difficulty": "基礎",
    "id": "ma56"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 57] 計算二階行列式 $\\begin{vmatrix} 4 & 3 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-1",
      "17",
      "6",
      "-2"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (4)(2) - (3)(3) = 8 - 9 = -1$。",
    "difficulty": "基礎",
    "id": "ma57"
  },
  {
    "category": "平面向量",
    "question": "[題號 58] 已知向量 $\\vec{u} = (4, 5)$ 與 $\\vec{v} = (6, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "34",
      "14",
      "38",
      "22"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (4)(6) + (5)(2) = 34$。",
    "difficulty": "基礎",
    "id": "ma58"
  },
  {
    "category": "多項式函數",
    "question": "[題號 59] 若多項式 $P(x) = x^3 - 4x + 9$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "25",
      "-7",
      "8"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 4(2) + 9 = 8 - 8 + 9 = 9$。",
    "difficulty": "基礎",
    "id": "ma59"
  },
  {
    "category": "指數與對數",
    "question": "[題號 60] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma60"
  },
  {
    "category": "三角函數",
    "question": "[題號 61] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma61"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 62] 通過點 $P(3, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 11",
      "2x + y + 3z = 13",
      "x - 2y + 3z = 7",
      "2x - y - 3z = -1"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 3) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 11$。",
    "difficulty": "基礎",
    "id": "ma62"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 63] 計算二階行列式 $\\begin{vmatrix} 5 & 4 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-2",
      "22",
      "14",
      "-4"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (5)(2) - (4)(3) = 10 - 12 = -2$。",
    "difficulty": "基礎",
    "id": "ma63"
  },
  {
    "category": "平面向量",
    "question": "[題號 64] 已知向量 $\\vec{u} = (5, 6)$ 與 $\\vec{v} = (7, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "47",
      "23",
      "52",
      "32"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (5)(7) + (6)(2) = 47$。",
    "difficulty": "基礎",
    "id": "ma64"
  },
  {
    "category": "多項式函數",
    "question": "[題號 65] 若多項式 $P(x) = x^3 - 5x + 11$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "29",
      "-7",
      "10"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 5(2) + 11 = 8 - 10 + 11 = 9$。",
    "difficulty": "基礎",
    "id": "ma65"
  },
  {
    "category": "指數與對數",
    "question": "[題號 66] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma66"
  },
  {
    "category": "三角函數",
    "question": "[題號 67] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma67"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 68] 通過點 $P(4, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 13",
      "2x + y + 3z = 15",
      "x - 2y + 3z = 8",
      "2x - y - 3z = 1"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 4) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 13$。",
    "difficulty": "基礎",
    "id": "ma68"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 69] 計算二階行列式 $\\begin{vmatrix} 6 & 5 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-3",
      "27",
      "24",
      "-6"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (6)(2) - (5)(3) = 12 - 15 = -3$。",
    "difficulty": "基礎",
    "id": "ma69"
  },
  {
    "category": "平面向量",
    "question": "[題號 70] 已知向量 $\\vec{u} = (6, 7)$ 與 $\\vec{v} = (8, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "62",
      "34",
      "68",
      "44"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (6)(8) + (7)(2) = 62$。",
    "difficulty": "基礎",
    "id": "ma70"
  },
  {
    "category": "多項式函數",
    "question": "[題號 71] 若多項式 $P(x) = x^3 - 6x + 13$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "33",
      "-7",
      "12"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 6(2) + 13 = 8 - 12 + 13 = 9$。",
    "difficulty": "基礎",
    "id": "ma71"
  },
  {
    "category": "指數與對數",
    "question": "[題號 72] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma72"
  },
  {
    "category": "三角函數",
    "question": "[題號 73] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma73"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 74] 通過點 $P(5, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 15",
      "2x + y + 3z = 17",
      "x - 2y + 3z = 9",
      "2x - y - 3z = 3"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 5) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 15$。",
    "difficulty": "基礎",
    "id": "ma74"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 75] 計算二階行列式 $\\begin{vmatrix} 7 & 6 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-4",
      "32",
      "36",
      "-8"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (7)(2) - (6)(3) = 14 - 18 = -4$。",
    "difficulty": "基礎",
    "id": "ma75"
  },
  {
    "category": "平面向量",
    "question": "[題號 76] 已知向量 $\\vec{u} = (7, 8)$ 與 $\\vec{v} = (9, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "79",
      "47",
      "86",
      "58"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (7)(9) + (8)(2) = 79$。",
    "difficulty": "基礎",
    "id": "ma76"
  },
  {
    "category": "多項式函數",
    "question": "[題號 77] 若多項式 $P(x) = x^3 - 7x + 15$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "37",
      "-7",
      "14"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 7(2) + 15 = 8 - 14 + 15 = 9$。",
    "difficulty": "基礎",
    "id": "ma77"
  },
  {
    "category": "指數與對數",
    "question": "[題號 78] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma78"
  },
  {
    "category": "三角函數",
    "question": "[題號 79] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma79"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 80] 通過點 $P(6, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 17",
      "2x + y + 3z = 19",
      "x - 2y + 3z = 10",
      "2x - y - 3z = 5"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 6) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 17$。",
    "difficulty": "基礎",
    "id": "ma80"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 81] 計算二階行列式 $\\begin{vmatrix} 8 & 7 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-5",
      "37",
      "50",
      "-10"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (8)(2) - (7)(3) = 16 - 21 = -5$。",
    "difficulty": "基礎",
    "id": "ma81"
  },
  {
    "category": "平面向量",
    "question": "[題號 82] 已知向量 $\\vec{u} = (8, 9)$ 與 $\\vec{v} = (10, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "98",
      "62",
      "106",
      "74"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (8)(10) + (9)(2) = 98$。",
    "difficulty": "基礎",
    "id": "ma82"
  },
  {
    "category": "多項式函數",
    "question": "[題號 83] 若多項式 $P(x) = x^3 - 8x + 17$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "41",
      "-7",
      "16"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 8(2) + 17 = 8 - 16 + 17 = 9$。",
    "difficulty": "基礎",
    "id": "ma83"
  },
  {
    "category": "指數與對數",
    "question": "[題號 84] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma84"
  },
  {
    "category": "三角函數",
    "question": "[題號 85] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma85"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 86] 通過點 $P(7, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 19",
      "2x + y + 3z = 21",
      "x - 2y + 3z = 11",
      "2x - y - 3z = 7"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 7) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 19$。",
    "difficulty": "基礎",
    "id": "ma86"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 87] 計算二階行列式 $\\begin{vmatrix} 9 & 8 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-6",
      "42",
      "66",
      "-12"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (9)(2) - (8)(3) = 18 - 24 = -6$。",
    "difficulty": "基礎",
    "id": "ma87"
  },
  {
    "category": "平面向量",
    "question": "[題號 88] 已知向量 $\\vec{u} = (9, 10)$ 與 $\\vec{v} = (11, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "119",
      "79",
      "128",
      "92"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (9)(11) + (10)(2) = 119$。",
    "difficulty": "基礎",
    "id": "ma88"
  },
  {
    "category": "多項式函數",
    "question": "[題號 89] 若多項式 $P(x) = x^3 - 9x + 19$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "45",
      "-7",
      "18"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 9(2) + 19 = 8 - 18 + 19 = 9$。",
    "difficulty": "基礎",
    "id": "ma89"
  },
  {
    "category": "指數與對數",
    "question": "[題號 90] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma90"
  },
  {
    "category": "三角函數",
    "question": "[題號 91] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma91"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 92] 通過點 $P(8, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 21",
      "2x + y + 3z = 23",
      "x - 2y + 3z = 12",
      "2x - y - 3z = 9"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 8) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 21$。",
    "difficulty": "基礎",
    "id": "ma92"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 93] 計算二階行列式 $\\begin{vmatrix} 10 & 9 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-7",
      "47",
      "84",
      "-14"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (10)(2) - (9)(3) = 20 - 27 = -7$。",
    "difficulty": "基礎",
    "id": "ma93"
  },
  {
    "category": "平面向量",
    "question": "[題號 94] 已知向量 $\\vec{u} = (10, 11)$ 與 $\\vec{v} = (12, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "142",
      "98",
      "152",
      "112"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (10)(12) + (11)(2) = 142$。",
    "difficulty": "基礎",
    "id": "ma94"
  },
  {
    "category": "多項式函數",
    "question": "[題號 95] 若多項式 $P(x) = x^3 - 10x + 21$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "49",
      "-7",
      "20"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 10(2) + 21 = 8 - 20 + 21 = 9$。",
    "difficulty": "基礎",
    "id": "ma95"
  },
  {
    "category": "指數與對數",
    "question": "[題號 96] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma96"
  },
  {
    "category": "三角函數",
    "question": "[題號 97] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma97"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 98] 通過點 $P(9, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 23",
      "2x + y + 3z = 25",
      "x - 2y + 3z = 13",
      "2x - y - 3z = 11"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 9) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 23$。",
    "difficulty": "基礎",
    "id": "ma98"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 99] 計算二階行列式 $\\begin{vmatrix} 11 & 10 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-8",
      "52",
      "104",
      "-16"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (11)(2) - (10)(3) = 22 - 30 = -8$。",
    "difficulty": "基礎",
    "id": "ma99"
  },
  {
    "category": "平面向量",
    "question": "[題號 100] 已知向量 $\\vec{u} = (11, 12)$ 與 $\\vec{v} = (13, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "167",
      "119",
      "178",
      "134"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (11)(13) + (12)(2) = 167$。",
    "difficulty": "基礎",
    "id": "ma100"
  },
  {
    "category": "多項式函數",
    "question": "[題號 101] 若多項式 $P(x) = x^3 - 11x + 23$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "53",
      "-7",
      "22"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 11(2) + 23 = 8 - 22 + 23 = 9$。",
    "difficulty": "基礎",
    "id": "ma101"
  },
  {
    "category": "指數與對數",
    "question": "[題號 102] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma102"
  },
  {
    "category": "三角函數",
    "question": "[題號 103] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma103"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 104] 通過點 $P(10, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 25",
      "2x + y + 3z = 27",
      "x - 2y + 3z = 14",
      "2x - y - 3z = 13"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 10) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 25$。",
    "difficulty": "基礎",
    "id": "ma104"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 105] 計算二階行列式 $\\begin{vmatrix} 12 & 11 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-9",
      "57",
      "126",
      "-18"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (12)(2) - (11)(3) = 24 - 33 = -9$。",
    "difficulty": "基礎",
    "id": "ma105"
  },
  {
    "category": "平面向量",
    "question": "[題號 106] 已知向量 $\\vec{u} = (12, 13)$ 與 $\\vec{v} = (14, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "194",
      "142",
      "206",
      "158"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (12)(14) + (13)(2) = 194$。",
    "difficulty": "基礎",
    "id": "ma106"
  },
  {
    "category": "多項式函數",
    "question": "[題號 107] 若多項式 $P(x) = x^3 - 12x + 25$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "57",
      "-7",
      "24"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 12(2) + 25 = 8 - 24 + 25 = 9$。",
    "difficulty": "基礎",
    "id": "ma107"
  },
  {
    "category": "指數與對數",
    "question": "[題號 108] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma108"
  },
  {
    "category": "三角函數",
    "question": "[題號 109] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma109"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 110] 通過點 $P(11, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 27",
      "2x + y + 3z = 29",
      "x - 2y + 3z = 15",
      "2x - y - 3z = 15"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 11) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 27$。",
    "difficulty": "基礎",
    "id": "ma110"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 111] 計算二階行列式 $\\begin{vmatrix} 13 & 12 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-10",
      "62",
      "150",
      "-20"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (13)(2) - (12)(3) = 26 - 36 = -10$。",
    "difficulty": "基礎",
    "id": "ma111"
  },
  {
    "category": "平面向量",
    "question": "[題號 112] 已知向量 $\\vec{u} = (13, 14)$ 與 $\\vec{v} = (15, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "223",
      "167",
      "236",
      "184"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (13)(15) + (14)(2) = 223$。",
    "difficulty": "基礎",
    "id": "ma112"
  },
  {
    "category": "多項式函數",
    "question": "[題號 113] 若多項式 $P(x) = x^3 - 13x + 27$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "61",
      "-7",
      "26"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 13(2) + 27 = 8 - 26 + 27 = 9$。",
    "difficulty": "基礎",
    "id": "ma113"
  },
  {
    "category": "指數與對數",
    "question": "[題號 114] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma114"
  },
  {
    "category": "三角函數",
    "question": "[題號 115] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma115"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 116] 通過點 $P(12, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 29",
      "2x + y + 3z = 31",
      "x - 2y + 3z = 16",
      "2x - y - 3z = 17"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 12) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 29$。",
    "difficulty": "基礎",
    "id": "ma116"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 117] 計算二階行列式 $\\begin{vmatrix} 14 & 13 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-11",
      "67",
      "176",
      "-22"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (14)(2) - (13)(3) = 28 - 39 = -11$。",
    "difficulty": "基礎",
    "id": "ma117"
  },
  {
    "category": "平面向量",
    "question": "[題號 118] 已知向量 $\\vec{u} = (14, 15)$ 與 $\\vec{v} = (16, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "254",
      "194",
      "268",
      "212"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (14)(16) + (15)(2) = 254$。",
    "difficulty": "基礎",
    "id": "ma118"
  },
  {
    "category": "多項式函數",
    "question": "[題號 119] 若多項式 $P(x) = x^3 - 14x + 29$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "65",
      "-7",
      "28"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 14(2) + 29 = 8 - 28 + 29 = 9$。",
    "difficulty": "基礎",
    "id": "ma119"
  },
  {
    "category": "指數與對數",
    "question": "[題號 120] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma120"
  },
  {
    "category": "三角函數",
    "question": "[題號 121] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma121"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 122] 通過點 $P(13, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 31",
      "2x + y + 3z = 33",
      "x - 2y + 3z = 17",
      "2x - y - 3z = 19"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 13) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 31$。",
    "difficulty": "基礎",
    "id": "ma122"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 123] 計算二階行列式 $\\begin{vmatrix} 15 & 14 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-12",
      "72",
      "204",
      "-24"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (15)(2) - (14)(3) = 30 - 42 = -12$。",
    "difficulty": "基礎",
    "id": "ma123"
  },
  {
    "category": "平面向量",
    "question": "[題號 124] 已知向量 $\\vec{u} = (15, 16)$ 與 $\\vec{v} = (17, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "287",
      "223",
      "302",
      "242"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (15)(17) + (16)(2) = 287$。",
    "difficulty": "基礎",
    "id": "ma124"
  },
  {
    "category": "多項式函數",
    "question": "[題號 125] 若多項式 $P(x) = x^3 - 15x + 31$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "69",
      "-7",
      "30"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 15(2) + 31 = 8 - 30 + 31 = 9$。",
    "difficulty": "基礎",
    "id": "ma125"
  },
  {
    "category": "指數與對數",
    "question": "[題號 126] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma126"
  },
  {
    "category": "三角函數",
    "question": "[題號 127] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma127"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 128] 通過點 $P(14, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 33",
      "2x + y + 3z = 35",
      "x - 2y + 3z = 18",
      "2x - y - 3z = 21"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 14) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 33$。",
    "difficulty": "基礎",
    "id": "ma128"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 129] 計算二階行列式 $\\begin{vmatrix} 16 & 15 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-13",
      "77",
      "234",
      "-26"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (16)(2) - (15)(3) = 32 - 45 = -13$。",
    "difficulty": "基礎",
    "id": "ma129"
  },
  {
    "category": "平面向量",
    "question": "[題號 130] 已知向量 $\\vec{u} = (16, 17)$ 與 $\\vec{v} = (18, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "322",
      "254",
      "338",
      "274"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (16)(18) + (17)(2) = 322$。",
    "difficulty": "基礎",
    "id": "ma130"
  },
  {
    "category": "多項式函數",
    "question": "[題號 131] 若多項式 $P(x) = x^3 - 16x + 33$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "73",
      "-7",
      "32"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 16(2) + 33 = 8 - 32 + 33 = 9$。",
    "difficulty": "基礎",
    "id": "ma131"
  },
  {
    "category": "指數與對數",
    "question": "[題號 132] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma132"
  },
  {
    "category": "三角函數",
    "question": "[題號 133] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma133"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 134] 通過點 $P(15, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 35",
      "2x + y + 3z = 37",
      "x - 2y + 3z = 19",
      "2x - y - 3z = 23"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 15) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 35$。",
    "difficulty": "基礎",
    "id": "ma134"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 135] 計算二階行列式 $\\begin{vmatrix} 17 & 16 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-14",
      "82",
      "266",
      "-28"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (17)(2) - (16)(3) = 34 - 48 = -14$。",
    "difficulty": "基礎",
    "id": "ma135"
  },
  {
    "category": "平面向量",
    "question": "[題號 136] 已知向量 $\\vec{u} = (17, 18)$ 與 $\\vec{v} = (19, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "359",
      "287",
      "376",
      "308"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (17)(19) + (18)(2) = 359$。",
    "difficulty": "基礎",
    "id": "ma136"
  },
  {
    "category": "多項式函數",
    "question": "[題號 137] 若多項式 $P(x) = x^3 - 17x + 35$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "77",
      "-7",
      "34"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 17(2) + 35 = 8 - 34 + 35 = 9$。",
    "difficulty": "基礎",
    "id": "ma137"
  },
  {
    "category": "指數與對數",
    "question": "[題號 138] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma138"
  },
  {
    "category": "三角函數",
    "question": "[題號 139] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma139"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 140] 通過點 $P(16, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 37",
      "2x + y + 3z = 39",
      "x - 2y + 3z = 20",
      "2x - y - 3z = 25"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 16) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 37$。",
    "difficulty": "基礎",
    "id": "ma140"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 141] 計算二階行列式 $\\begin{vmatrix} 18 & 17 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-15",
      "87",
      "300",
      "-30"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (18)(2) - (17)(3) = 36 - 51 = -15$。",
    "difficulty": "基礎",
    "id": "ma141"
  },
  {
    "category": "平面向量",
    "question": "[題號 142] 已知向量 $\\vec{u} = (18, 19)$ 與 $\\vec{v} = (20, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "398",
      "322",
      "416",
      "344"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (18)(20) + (19)(2) = 398$。",
    "difficulty": "基礎",
    "id": "ma142"
  },
  {
    "category": "多項式函數",
    "question": "[題號 143] 若多項式 $P(x) = x^3 - 18x + 37$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "81",
      "-7",
      "36"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 18(2) + 37 = 8 - 36 + 37 = 9$。",
    "difficulty": "基礎",
    "id": "ma143"
  },
  {
    "category": "指數與對數",
    "question": "[題號 144] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma144"
  },
  {
    "category": "三角函數",
    "question": "[題號 145] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma145"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 146] 通過點 $P(17, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 39",
      "2x + y + 3z = 41",
      "x - 2y + 3z = 21",
      "2x - y - 3z = 27"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 17) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 39$。",
    "difficulty": "基礎",
    "id": "ma146"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 147] 計算二階行列式 $\\begin{vmatrix} 19 & 18 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-16",
      "92",
      "336",
      "-32"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (19)(2) - (18)(3) = 38 - 54 = -16$。",
    "difficulty": "基礎",
    "id": "ma147"
  },
  {
    "category": "平面向量",
    "question": "[題號 148] 已知向量 $\\vec{u} = (19, 20)$ 與 $\\vec{v} = (21, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "439",
      "359",
      "458",
      "382"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (19)(21) + (20)(2) = 439$。",
    "difficulty": "基礎",
    "id": "ma148"
  },
  {
    "category": "多項式函數",
    "question": "[題號 149] 若多項式 $P(x) = x^3 - 19x + 39$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "85",
      "-7",
      "38"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 19(2) + 39 = 8 - 38 + 39 = 9$。",
    "difficulty": "基礎",
    "id": "ma149"
  },
  {
    "category": "指數與對數",
    "question": "[題號 150] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma150"
  },
  {
    "category": "三角函數",
    "question": "[題號 151] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma151"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 152] 通過點 $P(18, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 41",
      "2x + y + 3z = 43",
      "x - 2y + 3z = 22",
      "2x - y - 3z = 29"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 18) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 41$。",
    "difficulty": "基礎",
    "id": "ma152"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 153] 計算二階行列式 $\\begin{vmatrix} 20 & 19 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-17",
      "97",
      "374",
      "-34"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (20)(2) - (19)(3) = 40 - 57 = -17$。",
    "difficulty": "基礎",
    "id": "ma153"
  },
  {
    "category": "平面向量",
    "question": "[題號 154] 已知向量 $\\vec{u} = (20, 21)$ 與 $\\vec{v} = (22, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "482",
      "398",
      "502",
      "422"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (20)(22) + (21)(2) = 482$。",
    "difficulty": "基礎",
    "id": "ma154"
  },
  {
    "category": "多項式函數",
    "question": "[題號 155] 若多項式 $P(x) = x^3 - 20x + 41$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "89",
      "-7",
      "40"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 20(2) + 41 = 8 - 40 + 41 = 9$。",
    "difficulty": "基礎",
    "id": "ma155"
  },
  {
    "category": "指數與對數",
    "question": "[題號 156] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma156"
  },
  {
    "category": "三角函數",
    "question": "[題號 157] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma157"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 158] 通過點 $P(19, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 43",
      "2x + y + 3z = 45",
      "x - 2y + 3z = 23",
      "2x - y - 3z = 31"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 19) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 43$。",
    "difficulty": "基礎",
    "id": "ma158"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 159] 計算二階行列式 $\\begin{vmatrix} 21 & 20 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-18",
      "102",
      "414",
      "-36"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (21)(2) - (20)(3) = 42 - 60 = -18$。",
    "difficulty": "基礎",
    "id": "ma159"
  },
  {
    "category": "平面向量",
    "question": "[題號 160] 已知向量 $\\vec{u} = (21, 22)$ 與 $\\vec{v} = (23, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "527",
      "439",
      "548",
      "464"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (21)(23) + (22)(2) = 527$。",
    "difficulty": "基礎",
    "id": "ma160"
  },
  {
    "category": "多項式函數",
    "question": "[題號 161] 若多項式 $P(x) = x^3 - 21x + 43$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "93",
      "-7",
      "42"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 21(2) + 43 = 8 - 42 + 43 = 9$。",
    "difficulty": "基礎",
    "id": "ma161"
  },
  {
    "category": "指數與對數",
    "question": "[題號 162] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma162"
  },
  {
    "category": "三角函數",
    "question": "[題號 163] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma163"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 164] 通過點 $P(20, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 45",
      "2x + y + 3z = 47",
      "x - 2y + 3z = 24",
      "2x - y - 3z = 33"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 20) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 45$。",
    "difficulty": "基礎",
    "id": "ma164"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 165] 計算二階行列式 $\\begin{vmatrix} 22 & 21 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-19",
      "107",
      "456",
      "-38"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (22)(2) - (21)(3) = 44 - 63 = -19$。",
    "difficulty": "基礎",
    "id": "ma165"
  },
  {
    "category": "平面向量",
    "question": "[題號 166] 已知向量 $\\vec{u} = (22, 23)$ 與 $\\vec{v} = (24, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "574",
      "482",
      "596",
      "508"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (22)(24) + (23)(2) = 574$。",
    "difficulty": "基礎",
    "id": "ma166"
  },
  {
    "category": "多項式函數",
    "question": "[題號 167] 若多項式 $P(x) = x^3 - 22x + 45$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "97",
      "-7",
      "44"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 22(2) + 45 = 8 - 44 + 45 = 9$。",
    "difficulty": "基礎",
    "id": "ma167"
  },
  {
    "category": "指數與對數",
    "question": "[題號 168] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma168"
  },
  {
    "category": "三角函數",
    "question": "[題號 169] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma169"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 170] 通過點 $P(21, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 47",
      "2x + y + 3z = 49",
      "x - 2y + 3z = 25",
      "2x - y - 3z = 35"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 21) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 47$。",
    "difficulty": "基礎",
    "id": "ma170"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 171] 計算二階行列式 $\\begin{vmatrix} 23 & 22 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-20",
      "112",
      "500",
      "-40"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (23)(2) - (22)(3) = 46 - 66 = -20$。",
    "difficulty": "基礎",
    "id": "ma171"
  },
  {
    "category": "平面向量",
    "question": "[題號 172] 已知向量 $\\vec{u} = (23, 24)$ 與 $\\vec{v} = (25, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "623",
      "527",
      "646",
      "554"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (23)(25) + (24)(2) = 623$。",
    "difficulty": "基礎",
    "id": "ma172"
  },
  {
    "category": "多項式函數",
    "question": "[題號 173] 若多項式 $P(x) = x^3 - 23x + 47$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "101",
      "-7",
      "46"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 23(2) + 47 = 8 - 46 + 47 = 9$。",
    "difficulty": "基礎",
    "id": "ma173"
  },
  {
    "category": "指數與對數",
    "question": "[題號 174] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma174"
  },
  {
    "category": "三角函數",
    "question": "[題號 175] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma175"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 176] 通過點 $P(22, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 49",
      "2x + y + 3z = 51",
      "x - 2y + 3z = 26",
      "2x - y - 3z = 37"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 22) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 49$。",
    "difficulty": "基礎",
    "id": "ma176"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 177] 計算二階行列式 $\\begin{vmatrix} 24 & 23 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-21",
      "117",
      "546",
      "-42"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (24)(2) - (23)(3) = 48 - 69 = -21$。",
    "difficulty": "基礎",
    "id": "ma177"
  },
  {
    "category": "平面向量",
    "question": "[題號 178] 已知向量 $\\vec{u} = (24, 25)$ 與 $\\vec{v} = (26, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "674",
      "574",
      "698",
      "602"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (24)(26) + (25)(2) = 674$。",
    "difficulty": "基礎",
    "id": "ma178"
  },
  {
    "category": "多項式函數",
    "question": "[題號 179] 若多項式 $P(x) = x^3 - 24x + 49$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "105",
      "-7",
      "48"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 24(2) + 49 = 8 - 48 + 49 = 9$。",
    "difficulty": "基礎",
    "id": "ma179"
  },
  {
    "category": "指數與對數",
    "question": "[題號 180] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma180"
  },
  {
    "category": "三角函數",
    "question": "[題號 181] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma181"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 182] 通過點 $P(23, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 51",
      "2x + y + 3z = 53",
      "x - 2y + 3z = 27",
      "2x - y - 3z = 39"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 23) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 51$。",
    "difficulty": "基礎",
    "id": "ma182"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 183] 計算二階行列式 $\\begin{vmatrix} 25 & 24 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-22",
      "122",
      "594",
      "-44"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (25)(2) - (24)(3) = 50 - 72 = -22$。",
    "difficulty": "基礎",
    "id": "ma183"
  },
  {
    "category": "平面向量",
    "question": "[題號 184] 已知向量 $\\vec{u} = (25, 26)$ 與 $\\vec{v} = (27, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "727",
      "623",
      "752",
      "652"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (25)(27) + (26)(2) = 727$。",
    "difficulty": "基礎",
    "id": "ma184"
  },
  {
    "category": "多項式函數",
    "question": "[題號 185] 若多項式 $P(x) = x^3 - 25x + 51$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "109",
      "-7",
      "50"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 25(2) + 51 = 8 - 50 + 51 = 9$。",
    "difficulty": "基礎",
    "id": "ma185"
  },
  {
    "category": "指數與對數",
    "question": "[題號 186] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma186"
  },
  {
    "category": "三角函數",
    "question": "[題號 187] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma187"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 188] 通過點 $P(24, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 53",
      "2x + y + 3z = 55",
      "x - 2y + 3z = 28",
      "2x - y - 3z = 41"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 24) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 53$。",
    "difficulty": "基礎",
    "id": "ma188"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 189] 計算二階行列式 $\\begin{vmatrix} 26 & 25 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-23",
      "127",
      "644",
      "-46"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (26)(2) - (25)(3) = 52 - 75 = -23$。",
    "difficulty": "基礎",
    "id": "ma189"
  },
  {
    "category": "平面向量",
    "question": "[題號 190] 已知向量 $\\vec{u} = (26, 27)$ 與 $\\vec{v} = (28, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "782",
      "674",
      "808",
      "704"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (26)(28) + (27)(2) = 782$。",
    "difficulty": "基礎",
    "id": "ma190"
  },
  {
    "category": "多項式函數",
    "question": "[題號 191] 若多項式 $P(x) = x^3 - 26x + 53$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "113",
      "-7",
      "52"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 26(2) + 53 = 8 - 52 + 53 = 9$。",
    "difficulty": "基礎",
    "id": "ma191"
  },
  {
    "category": "指數與對數",
    "question": "[題號 192] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma192"
  },
  {
    "category": "三角函數",
    "question": "[題號 193] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma193"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 194] 通過點 $P(25, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 55",
      "2x + y + 3z = 57",
      "x - 2y + 3z = 29",
      "2x - y - 3z = 43"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 25) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 55$。",
    "difficulty": "基礎",
    "id": "ma194"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 195] 計算二階行列式 $\\begin{vmatrix} 27 & 26 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-24",
      "132",
      "696",
      "-48"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (27)(2) - (26)(3) = 54 - 78 = -24$。",
    "difficulty": "基礎",
    "id": "ma195"
  },
  {
    "category": "平面向量",
    "question": "[題號 196] 已知向量 $\\vec{u} = (27, 28)$ 與 $\\vec{v} = (29, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "839",
      "727",
      "866",
      "758"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (27)(29) + (28)(2) = 839$。",
    "difficulty": "基礎",
    "id": "ma196"
  },
  {
    "category": "多項式函數",
    "question": "[題號 197] 若多項式 $P(x) = x^3 - 27x + 55$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "117",
      "-7",
      "54"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 27(2) + 55 = 8 - 54 + 55 = 9$。",
    "difficulty": "基礎",
    "id": "ma197"
  },
  {
    "category": "指數與對數",
    "question": "[題號 198] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma198"
  },
  {
    "category": "三角函數",
    "question": "[題號 199] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma199"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 200] 通過點 $P(26, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 57",
      "2x + y + 3z = 59",
      "x - 2y + 3z = 30",
      "2x - y - 3z = 45"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 26) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 57$。",
    "difficulty": "基礎",
    "id": "ma200"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 201] 計算二階行列式 $\\begin{vmatrix} 28 & 27 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-25",
      "137",
      "750",
      "-50"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (28)(2) - (27)(3) = 56 - 81 = -25$。",
    "difficulty": "基礎",
    "id": "ma201"
  },
  {
    "category": "平面向量",
    "question": "[題號 202] 已知向量 $\\vec{u} = (28, 29)$ 與 $\\vec{v} = (30, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "898",
      "782",
      "926",
      "814"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (28)(30) + (29)(2) = 898$。",
    "difficulty": "基礎",
    "id": "ma202"
  },
  {
    "category": "多項式函數",
    "question": "[題號 203] 若多項式 $P(x) = x^3 - 28x + 57$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "121",
      "-7",
      "56"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 28(2) + 57 = 8 - 56 + 57 = 9$。",
    "difficulty": "基礎",
    "id": "ma203"
  },
  {
    "category": "指數與對數",
    "question": "[題號 204] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma204"
  },
  {
    "category": "三角函數",
    "question": "[題號 205] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma205"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 206] 通過點 $P(27, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 59",
      "2x + y + 3z = 61",
      "x - 2y + 3z = 31",
      "2x - y - 3z = 47"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 27) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 59$。",
    "difficulty": "基礎",
    "id": "ma206"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 207] 計算二階行列式 $\\begin{vmatrix} 29 & 28 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-26",
      "142",
      "806",
      "-52"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (29)(2) - (28)(3) = 58 - 84 = -26$。",
    "difficulty": "基礎",
    "id": "ma207"
  },
  {
    "category": "平面向量",
    "question": "[題號 208] 已知向量 $\\vec{u} = (29, 30)$ 與 $\\vec{v} = (31, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "959",
      "839",
      "988",
      "872"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (29)(31) + (30)(2) = 959$。",
    "difficulty": "基礎",
    "id": "ma208"
  },
  {
    "category": "多項式函數",
    "question": "[題號 209] 若多項式 $P(x) = x^3 - 29x + 59$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "125",
      "-7",
      "58"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 29(2) + 59 = 8 - 58 + 59 = 9$。",
    "difficulty": "基礎",
    "id": "ma209"
  },
  {
    "category": "指數與對數",
    "question": "[題號 210] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma210"
  },
  {
    "category": "三角函數",
    "question": "[題號 211] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma211"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 212] 通過點 $P(28, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 61",
      "2x + y + 3z = 63",
      "x - 2y + 3z = 32",
      "2x - y - 3z = 49"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 28) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 61$。",
    "difficulty": "基礎",
    "id": "ma212"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 213] 計算二階行列式 $\\begin{vmatrix} 30 & 29 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-27",
      "147",
      "864",
      "-54"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (30)(2) - (29)(3) = 60 - 87 = -27$。",
    "difficulty": "基礎",
    "id": "ma213"
  },
  {
    "category": "平面向量",
    "question": "[題號 214] 已知向量 $\\vec{u} = (30, 31)$ 與 $\\vec{v} = (32, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1022",
      "898",
      "1052",
      "932"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (30)(32) + (31)(2) = 1022$。",
    "difficulty": "基礎",
    "id": "ma214"
  },
  {
    "category": "多項式函數",
    "question": "[題號 215] 若多項式 $P(x) = x^3 - 30x + 61$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "129",
      "-7",
      "60"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 30(2) + 61 = 8 - 60 + 61 = 9$。",
    "difficulty": "基礎",
    "id": "ma215"
  },
  {
    "category": "指數與對數",
    "question": "[題號 216] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma216"
  },
  {
    "category": "三角函數",
    "question": "[題號 217] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma217"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 218] 通過點 $P(29, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 63",
      "2x + y + 3z = 65",
      "x - 2y + 3z = 33",
      "2x - y - 3z = 51"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 29) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 63$。",
    "difficulty": "基礎",
    "id": "ma218"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 219] 計算二階行列式 $\\begin{vmatrix} 31 & 30 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-28",
      "152",
      "924",
      "-56"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (31)(2) - (30)(3) = 62 - 90 = -28$。",
    "difficulty": "基礎",
    "id": "ma219"
  },
  {
    "category": "平面向量",
    "question": "[題號 220] 已知向量 $\\vec{u} = (31, 32)$ 與 $\\vec{v} = (33, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1087",
      "959",
      "1118",
      "994"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (31)(33) + (32)(2) = 1087$。",
    "difficulty": "基礎",
    "id": "ma220"
  },
  {
    "category": "多項式函數",
    "question": "[題號 221] 若多項式 $P(x) = x^3 - 31x + 63$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "133",
      "-7",
      "62"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 31(2) + 63 = 8 - 62 + 63 = 9$。",
    "difficulty": "基礎",
    "id": "ma221"
  },
  {
    "category": "指數與對數",
    "question": "[題號 222] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma222"
  },
  {
    "category": "三角函數",
    "question": "[題號 223] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma223"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 224] 通過點 $P(30, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 65",
      "2x + y + 3z = 67",
      "x - 2y + 3z = 34",
      "2x - y - 3z = 53"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 30) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 65$。",
    "difficulty": "基礎",
    "id": "ma224"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 225] 計算二階行列式 $\\begin{vmatrix} 32 & 31 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-29",
      "157",
      "986",
      "-58"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (32)(2) - (31)(3) = 64 - 93 = -29$。",
    "difficulty": "基礎",
    "id": "ma225"
  },
  {
    "category": "平面向量",
    "question": "[題號 226] 已知向量 $\\vec{u} = (32, 33)$ 與 $\\vec{v} = (34, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1154",
      "1022",
      "1186",
      "1058"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (32)(34) + (33)(2) = 1154$。",
    "difficulty": "基礎",
    "id": "ma226"
  },
  {
    "category": "多項式函數",
    "question": "[題號 227] 若多項式 $P(x) = x^3 - 32x + 65$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "137",
      "-7",
      "64"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 32(2) + 65 = 8 - 64 + 65 = 9$。",
    "difficulty": "基礎",
    "id": "ma227"
  },
  {
    "category": "指數與對數",
    "question": "[題號 228] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma228"
  },
  {
    "category": "三角函數",
    "question": "[題號 229] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma229"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 230] 通過點 $P(31, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 67",
      "2x + y + 3z = 69",
      "x - 2y + 3z = 35",
      "2x - y - 3z = 55"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 31) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 67$。",
    "difficulty": "基礎",
    "id": "ma230"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 231] 計算二階行列式 $\\begin{vmatrix} 33 & 32 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-30",
      "162",
      "1050",
      "-60"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (33)(2) - (32)(3) = 66 - 96 = -30$。",
    "difficulty": "基礎",
    "id": "ma231"
  },
  {
    "category": "平面向量",
    "question": "[題號 232] 已知向量 $\\vec{u} = (33, 34)$ 與 $\\vec{v} = (35, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1223",
      "1087",
      "1256",
      "1124"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (33)(35) + (34)(2) = 1223$。",
    "difficulty": "基礎",
    "id": "ma232"
  },
  {
    "category": "多項式函數",
    "question": "[題號 233] 若多項式 $P(x) = x^3 - 33x + 67$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "141",
      "-7",
      "66"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 33(2) + 67 = 8 - 66 + 67 = 9$。",
    "difficulty": "基礎",
    "id": "ma233"
  },
  {
    "category": "指數與對數",
    "question": "[題號 234] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma234"
  },
  {
    "category": "三角函數",
    "question": "[題號 235] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma235"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 236] 通過點 $P(32, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 69",
      "2x + y + 3z = 71",
      "x - 2y + 3z = 36",
      "2x - y - 3z = 57"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 32) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 69$。",
    "difficulty": "基礎",
    "id": "ma236"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 237] 計算二階行列式 $\\begin{vmatrix} 34 & 33 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-31",
      "167",
      "1116",
      "-62"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (34)(2) - (33)(3) = 68 - 99 = -31$。",
    "difficulty": "基礎",
    "id": "ma237"
  },
  {
    "category": "平面向量",
    "question": "[題號 238] 已知向量 $\\vec{u} = (34, 35)$ 與 $\\vec{v} = (36, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1294",
      "1154",
      "1328",
      "1192"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (34)(36) + (35)(2) = 1294$。",
    "difficulty": "基礎",
    "id": "ma238"
  },
  {
    "category": "多項式函數",
    "question": "[題號 239] 若多項式 $P(x) = x^3 - 34x + 69$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "145",
      "-7",
      "68"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 34(2) + 69 = 8 - 68 + 69 = 9$。",
    "difficulty": "基礎",
    "id": "ma239"
  },
  {
    "category": "指數與對數",
    "question": "[題號 240] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma240"
  },
  {
    "category": "三角函數",
    "question": "[題號 241] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma241"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 242] 通過點 $P(33, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 71",
      "2x + y + 3z = 73",
      "x - 2y + 3z = 37",
      "2x - y - 3z = 59"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 33) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 71$。",
    "difficulty": "基礎",
    "id": "ma242"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 243] 計算二階行列式 $\\begin{vmatrix} 35 & 34 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-32",
      "172",
      "1184",
      "-64"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (35)(2) - (34)(3) = 70 - 102 = -32$。",
    "difficulty": "基礎",
    "id": "ma243"
  },
  {
    "category": "平面向量",
    "question": "[題號 244] 已知向量 $\\vec{u} = (35, 36)$ 與 $\\vec{v} = (37, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1367",
      "1223",
      "1402",
      "1262"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (35)(37) + (36)(2) = 1367$。",
    "difficulty": "基礎",
    "id": "ma244"
  },
  {
    "category": "多項式函數",
    "question": "[題號 245] 若多項式 $P(x) = x^3 - 35x + 71$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "149",
      "-7",
      "70"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 35(2) + 71 = 8 - 70 + 71 = 9$。",
    "difficulty": "基礎",
    "id": "ma245"
  },
  {
    "category": "指數與對數",
    "question": "[題號 246] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma246"
  },
  {
    "category": "三角函數",
    "question": "[題號 247] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma247"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 248] 通過點 $P(34, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 73",
      "2x + y + 3z = 75",
      "x - 2y + 3z = 38",
      "2x - y - 3z = 61"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 34) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 73$。",
    "difficulty": "基礎",
    "id": "ma248"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 249] 計算二階行列式 $\\begin{vmatrix} 36 & 35 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-33",
      "177",
      "1254",
      "-66"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (36)(2) - (35)(3) = 72 - 105 = -33$。",
    "difficulty": "基礎",
    "id": "ma249"
  },
  {
    "category": "平面向量",
    "question": "[題號 250] 已知向量 $\\vec{u} = (36, 37)$ 與 $\\vec{v} = (38, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1442",
      "1294",
      "1478",
      "1334"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (36)(38) + (37)(2) = 1442$。",
    "difficulty": "基礎",
    "id": "ma250"
  },
  {
    "category": "多項式函數",
    "question": "[題號 251] 若多項式 $P(x) = x^3 - 36x + 73$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "153",
      "-7",
      "72"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 36(2) + 73 = 8 - 72 + 73 = 9$。",
    "difficulty": "基礎",
    "id": "ma251"
  },
  {
    "category": "指數與對數",
    "question": "[題號 252] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma252"
  },
  {
    "category": "三角函數",
    "question": "[題號 253] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma253"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 254] 通過點 $P(35, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 75",
      "2x + y + 3z = 77",
      "x - 2y + 3z = 39",
      "2x - y - 3z = 63"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 35) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 75$。",
    "difficulty": "基礎",
    "id": "ma254"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 255] 計算二階行列式 $\\begin{vmatrix} 37 & 36 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-34",
      "182",
      "1326",
      "-68"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (37)(2) - (36)(3) = 74 - 108 = -34$。",
    "difficulty": "基礎",
    "id": "ma255"
  },
  {
    "category": "平面向量",
    "question": "[題號 256] 已知向量 $\\vec{u} = (37, 38)$ 與 $\\vec{v} = (39, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1519",
      "1367",
      "1556",
      "1408"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (37)(39) + (38)(2) = 1519$。",
    "difficulty": "基礎",
    "id": "ma256"
  },
  {
    "category": "多項式函數",
    "question": "[題號 257] 若多項式 $P(x) = x^3 - 37x + 75$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "157",
      "-7",
      "74"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 37(2) + 75 = 8 - 74 + 75 = 9$。",
    "difficulty": "基礎",
    "id": "ma257"
  },
  {
    "category": "指數與對數",
    "question": "[題號 258] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma258"
  },
  {
    "category": "三角函數",
    "question": "[題號 259] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma259"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 260] 通過點 $P(36, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 77",
      "2x + y + 3z = 79",
      "x - 2y + 3z = 40",
      "2x - y - 3z = 65"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 36) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 77$。",
    "difficulty": "基礎",
    "id": "ma260"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 261] 計算二階行列式 $\\begin{vmatrix} 38 & 37 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-35",
      "187",
      "1400",
      "-70"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (38)(2) - (37)(3) = 76 - 111 = -35$。",
    "difficulty": "基礎",
    "id": "ma261"
  },
  {
    "category": "平面向量",
    "question": "[題號 262] 已知向量 $\\vec{u} = (38, 39)$ 與 $\\vec{v} = (40, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1598",
      "1442",
      "1636",
      "1484"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (38)(40) + (39)(2) = 1598$。",
    "difficulty": "基礎",
    "id": "ma262"
  },
  {
    "category": "多項式函數",
    "question": "[題號 263] 若多項式 $P(x) = x^3 - 38x + 77$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "161",
      "-7",
      "76"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 38(2) + 77 = 8 - 76 + 77 = 9$。",
    "difficulty": "基礎",
    "id": "ma263"
  },
  {
    "category": "指數與對數",
    "question": "[題號 264] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma264"
  },
  {
    "category": "三角函數",
    "question": "[題號 265] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma265"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 266] 通過點 $P(37, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 79",
      "2x + y + 3z = 81",
      "x - 2y + 3z = 41",
      "2x - y - 3z = 67"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 37) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 79$。",
    "difficulty": "基礎",
    "id": "ma266"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 267] 計算二階行列式 $\\begin{vmatrix} 39 & 38 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-36",
      "192",
      "1476",
      "-72"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (39)(2) - (38)(3) = 78 - 114 = -36$。",
    "difficulty": "基礎",
    "id": "ma267"
  },
  {
    "category": "平面向量",
    "question": "[題號 268] 已知向量 $\\vec{u} = (39, 40)$ 與 $\\vec{v} = (41, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1679",
      "1519",
      "1718",
      "1562"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (39)(41) + (40)(2) = 1679$。",
    "difficulty": "基礎",
    "id": "ma268"
  },
  {
    "category": "多項式函數",
    "question": "[題號 269] 若多項式 $P(x) = x^3 - 39x + 79$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "165",
      "-7",
      "78"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 39(2) + 79 = 8 - 78 + 79 = 9$。",
    "difficulty": "基礎",
    "id": "ma269"
  },
  {
    "category": "指數與對數",
    "question": "[題號 270] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma270"
  },
  {
    "category": "三角函數",
    "question": "[題號 271] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma271"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 272] 通過點 $P(38, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 81",
      "2x + y + 3z = 83",
      "x - 2y + 3z = 42",
      "2x - y - 3z = 69"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 38) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 81$。",
    "difficulty": "基礎",
    "id": "ma272"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 273] 計算二階行列式 $\\begin{vmatrix} 40 & 39 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-37",
      "197",
      "1554",
      "-74"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (40)(2) - (39)(3) = 80 - 117 = -37$。",
    "difficulty": "基礎",
    "id": "ma273"
  },
  {
    "category": "平面向量",
    "question": "[題號 274] 已知向量 $\\vec{u} = (40, 41)$ 與 $\\vec{v} = (42, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1762",
      "1598",
      "1802",
      "1642"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (40)(42) + (41)(2) = 1762$。",
    "difficulty": "基礎",
    "id": "ma274"
  },
  {
    "category": "多項式函數",
    "question": "[題號 275] 若多項式 $P(x) = x^3 - 40x + 81$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "169",
      "-7",
      "80"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 40(2) + 81 = 8 - 80 + 81 = 9$。",
    "difficulty": "基礎",
    "id": "ma275"
  },
  {
    "category": "指數與對數",
    "question": "[題號 276] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma276"
  },
  {
    "category": "三角函數",
    "question": "[題號 277] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma277"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 278] 通過點 $P(39, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 83",
      "2x + y + 3z = 85",
      "x - 2y + 3z = 43",
      "2x - y - 3z = 71"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 39) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 83$。",
    "difficulty": "基礎",
    "id": "ma278"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 279] 計算二階行列式 $\\begin{vmatrix} 41 & 40 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-38",
      "202",
      "1634",
      "-76"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (41)(2) - (40)(3) = 82 - 120 = -38$。",
    "difficulty": "基礎",
    "id": "ma279"
  },
  {
    "category": "平面向量",
    "question": "[題號 280] 已知向量 $\\vec{u} = (41, 42)$ 與 $\\vec{v} = (43, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1847",
      "1679",
      "1888",
      "1724"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (41)(43) + (42)(2) = 1847$。",
    "difficulty": "基礎",
    "id": "ma280"
  },
  {
    "category": "多項式函數",
    "question": "[題號 281] 若多項式 $P(x) = x^3 - 41x + 83$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "173",
      "-7",
      "82"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 41(2) + 83 = 8 - 82 + 83 = 9$。",
    "difficulty": "基礎",
    "id": "ma281"
  },
  {
    "category": "指數與對數",
    "question": "[題號 282] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma282"
  },
  {
    "category": "三角函數",
    "question": "[題號 283] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma283"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 284] 通過點 $P(40, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 85",
      "2x + y + 3z = 87",
      "x - 2y + 3z = 44",
      "2x - y - 3z = 73"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 40) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 85$。",
    "difficulty": "基礎",
    "id": "ma284"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 285] 計算二階行列式 $\\begin{vmatrix} 42 & 41 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-39",
      "207",
      "1716",
      "-78"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (42)(2) - (41)(3) = 84 - 123 = -39$。",
    "difficulty": "基礎",
    "id": "ma285"
  },
  {
    "category": "平面向量",
    "question": "[題號 286] 已知向量 $\\vec{u} = (42, 43)$ 與 $\\vec{v} = (44, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "1934",
      "1762",
      "1976",
      "1808"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (42)(44) + (43)(2) = 1934$。",
    "difficulty": "基礎",
    "id": "ma286"
  },
  {
    "category": "多項式函數",
    "question": "[題號 287] 若多項式 $P(x) = x^3 - 42x + 85$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "177",
      "-7",
      "84"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 42(2) + 85 = 8 - 84 + 85 = 9$。",
    "difficulty": "基礎",
    "id": "ma287"
  },
  {
    "category": "指數與對數",
    "question": "[題號 288] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma288"
  },
  {
    "category": "三角函數",
    "question": "[題號 289] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma289"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 290] 通過點 $P(41, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 87",
      "2x + y + 3z = 89",
      "x - 2y + 3z = 45",
      "2x - y - 3z = 75"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 41) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 87$。",
    "difficulty": "基礎",
    "id": "ma290"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 291] 計算二階行列式 $\\begin{vmatrix} 43 & 42 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-40",
      "212",
      "1800",
      "-80"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (43)(2) - (42)(3) = 86 - 126 = -40$。",
    "difficulty": "基礎",
    "id": "ma291"
  },
  {
    "category": "平面向量",
    "question": "[題號 292] 已知向量 $\\vec{u} = (43, 44)$ 與 $\\vec{v} = (45, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2023",
      "1847",
      "2066",
      "1894"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (43)(45) + (44)(2) = 2023$。",
    "difficulty": "基礎",
    "id": "ma292"
  },
  {
    "category": "多項式函數",
    "question": "[題號 293] 若多項式 $P(x) = x^3 - 43x + 87$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "181",
      "-7",
      "86"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 43(2) + 87 = 8 - 86 + 87 = 9$。",
    "difficulty": "基礎",
    "id": "ma293"
  },
  {
    "category": "指數與對數",
    "question": "[題號 294] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma294"
  },
  {
    "category": "三角函數",
    "question": "[題號 295] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma295"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 296] 通過點 $P(42, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 89",
      "2x + y + 3z = 91",
      "x - 2y + 3z = 46",
      "2x - y - 3z = 77"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 42) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 89$。",
    "difficulty": "基礎",
    "id": "ma296"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 297] 計算二階行列式 $\\begin{vmatrix} 44 & 43 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-41",
      "217",
      "1886",
      "-82"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (44)(2) - (43)(3) = 88 - 129 = -41$。",
    "difficulty": "基礎",
    "id": "ma297"
  },
  {
    "category": "平面向量",
    "question": "[題號 298] 已知向量 $\\vec{u} = (44, 45)$ 與 $\\vec{v} = (46, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2114",
      "1934",
      "2158",
      "1982"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (44)(46) + (45)(2) = 2114$。",
    "difficulty": "基礎",
    "id": "ma298"
  },
  {
    "category": "多項式函數",
    "question": "[題號 299] 若多項式 $P(x) = x^3 - 44x + 89$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "185",
      "-7",
      "88"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 44(2) + 89 = 8 - 88 + 89 = 9$。",
    "difficulty": "基礎",
    "id": "ma299"
  },
  {
    "category": "指數與對數",
    "question": "[題號 300] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma300"
  },
  {
    "category": "三角函數",
    "question": "[題號 301] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma301"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 302] 通過點 $P(43, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 91",
      "2x + y + 3z = 93",
      "x - 2y + 3z = 47",
      "2x - y - 3z = 79"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 43) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 91$。",
    "difficulty": "基礎",
    "id": "ma302"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 303] 計算二階行列式 $\\begin{vmatrix} 45 & 44 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-42",
      "222",
      "1974",
      "-84"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (45)(2) - (44)(3) = 90 - 132 = -42$。",
    "difficulty": "基礎",
    "id": "ma303"
  },
  {
    "category": "平面向量",
    "question": "[題號 304] 已知向量 $\\vec{u} = (45, 46)$ 與 $\\vec{v} = (47, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2207",
      "2023",
      "2252",
      "2072"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (45)(47) + (46)(2) = 2207$。",
    "difficulty": "基礎",
    "id": "ma304"
  },
  {
    "category": "多項式函數",
    "question": "[題號 305] 若多項式 $P(x) = x^3 - 45x + 91$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "189",
      "-7",
      "90"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 45(2) + 91 = 8 - 90 + 91 = 9$。",
    "difficulty": "基礎",
    "id": "ma305"
  },
  {
    "category": "指數與對數",
    "question": "[題號 306] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma306"
  },
  {
    "category": "三角函數",
    "question": "[題號 307] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma307"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 308] 通過點 $P(44, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 93",
      "2x + y + 3z = 95",
      "x - 2y + 3z = 48",
      "2x - y - 3z = 81"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 44) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 93$。",
    "difficulty": "基礎",
    "id": "ma308"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 309] 計算二階行列式 $\\begin{vmatrix} 46 & 45 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-43",
      "227",
      "2064",
      "-86"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (46)(2) - (45)(3) = 92 - 135 = -43$。",
    "difficulty": "基礎",
    "id": "ma309"
  },
  {
    "category": "平面向量",
    "question": "[題號 310] 已知向量 $\\vec{u} = (46, 47)$ 與 $\\vec{v} = (48, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2302",
      "2114",
      "2348",
      "2164"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (46)(48) + (47)(2) = 2302$。",
    "difficulty": "基礎",
    "id": "ma310"
  },
  {
    "category": "多項式函數",
    "question": "[題號 311] 若多項式 $P(x) = x^3 - 46x + 93$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "193",
      "-7",
      "92"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 46(2) + 93 = 8 - 92 + 93 = 9$。",
    "difficulty": "基礎",
    "id": "ma311"
  },
  {
    "category": "指數與對數",
    "question": "[題號 312] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma312"
  },
  {
    "category": "三角函數",
    "question": "[題號 313] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma313"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 314] 通過點 $P(45, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 95",
      "2x + y + 3z = 97",
      "x - 2y + 3z = 49",
      "2x - y - 3z = 83"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 45) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 95$。",
    "difficulty": "基礎",
    "id": "ma314"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 315] 計算二階行列式 $\\begin{vmatrix} 47 & 46 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-44",
      "232",
      "2156",
      "-88"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (47)(2) - (46)(3) = 94 - 138 = -44$。",
    "difficulty": "基礎",
    "id": "ma315"
  },
  {
    "category": "平面向量",
    "question": "[題號 316] 已知向量 $\\vec{u} = (47, 48)$ 與 $\\vec{v} = (49, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2399",
      "2207",
      "2446",
      "2258"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (47)(49) + (48)(2) = 2399$。",
    "difficulty": "基礎",
    "id": "ma316"
  },
  {
    "category": "多項式函數",
    "question": "[題號 317] 若多項式 $P(x) = x^3 - 47x + 95$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "197",
      "-7",
      "94"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 47(2) + 95 = 8 - 94 + 95 = 9$。",
    "difficulty": "基礎",
    "id": "ma317"
  },
  {
    "category": "指數與對數",
    "question": "[題號 318] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma318"
  },
  {
    "category": "三角函數",
    "question": "[題號 319] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma319"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 320] 通過點 $P(46, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 97",
      "2x + y + 3z = 99",
      "x - 2y + 3z = 50",
      "2x - y - 3z = 85"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 46) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 97$。",
    "difficulty": "基礎",
    "id": "ma320"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 321] 計算二階行列式 $\\begin{vmatrix} 48 & 47 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-45",
      "237",
      "2250",
      "-90"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (48)(2) - (47)(3) = 96 - 141 = -45$。",
    "difficulty": "基礎",
    "id": "ma321"
  },
  {
    "category": "平面向量",
    "question": "[題號 322] 已知向量 $\\vec{u} = (48, 49)$ 與 $\\vec{v} = (50, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2498",
      "2302",
      "2546",
      "2354"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (48)(50) + (49)(2) = 2498$。",
    "difficulty": "基礎",
    "id": "ma322"
  },
  {
    "category": "多項式函數",
    "question": "[題號 323] 若多項式 $P(x) = x^3 - 48x + 97$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "201",
      "-7",
      "96"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 48(2) + 97 = 8 - 96 + 97 = 9$。",
    "difficulty": "基礎",
    "id": "ma323"
  },
  {
    "category": "指數與對數",
    "question": "[題號 324] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma324"
  },
  {
    "category": "三角函數",
    "question": "[題號 325] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma325"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 326] 通過點 $P(47, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 99",
      "2x + y + 3z = 101",
      "x - 2y + 3z = 51",
      "2x - y - 3z = 87"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 47) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 99$。",
    "difficulty": "基礎",
    "id": "ma326"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 327] 計算二階行列式 $\\begin{vmatrix} 49 & 48 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-46",
      "242",
      "2346",
      "-92"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (49)(2) - (48)(3) = 98 - 144 = -46$。",
    "difficulty": "基礎",
    "id": "ma327"
  },
  {
    "category": "平面向量",
    "question": "[題號 328] 已知向量 $\\vec{u} = (49, 50)$ 與 $\\vec{v} = (51, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2599",
      "2399",
      "2648",
      "2452"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (49)(51) + (50)(2) = 2599$。",
    "difficulty": "基礎",
    "id": "ma328"
  },
  {
    "category": "多項式函數",
    "question": "[題號 329] 若多項式 $P(x) = x^3 - 49x + 99$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "205",
      "-7",
      "98"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 49(2) + 99 = 8 - 98 + 99 = 9$。",
    "difficulty": "基礎",
    "id": "ma329"
  },
  {
    "category": "指數與對數",
    "question": "[題號 330] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma330"
  },
  {
    "category": "三角函數",
    "question": "[題號 331] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma331"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 332] 通過點 $P(48, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 101",
      "2x + y + 3z = 103",
      "x - 2y + 3z = 52",
      "2x - y - 3z = 89"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 48) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 101$。",
    "difficulty": "基礎",
    "id": "ma332"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 333] 計算二階行列式 $\\begin{vmatrix} 50 & 49 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-47",
      "247",
      "2444",
      "-94"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (50)(2) - (49)(3) = 100 - 147 = -47$。",
    "difficulty": "基礎",
    "id": "ma333"
  },
  {
    "category": "平面向量",
    "question": "[題號 334] 已知向量 $\\vec{u} = (50, 51)$ 與 $\\vec{v} = (52, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2702",
      "2498",
      "2752",
      "2552"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (50)(52) + (51)(2) = 2702$。",
    "difficulty": "基礎",
    "id": "ma334"
  },
  {
    "category": "多項式函數",
    "question": "[題號 335] 若多項式 $P(x) = x^3 - 50x + 101$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "209",
      "-7",
      "100"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 50(2) + 101 = 8 - 100 + 101 = 9$。",
    "difficulty": "基礎",
    "id": "ma335"
  },
  {
    "category": "指數與對數",
    "question": "[題號 336] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma336"
  },
  {
    "category": "三角函數",
    "question": "[題號 337] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma337"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 338] 通過點 $P(49, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 103",
      "2x + y + 3z = 105",
      "x - 2y + 3z = 53",
      "2x - y - 3z = 91"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 49) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 103$。",
    "difficulty": "基礎",
    "id": "ma338"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 339] 計算二階行列式 $\\begin{vmatrix} 51 & 50 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-48",
      "252",
      "2544",
      "-96"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (51)(2) - (50)(3) = 102 - 150 = -48$。",
    "difficulty": "基礎",
    "id": "ma339"
  },
  {
    "category": "平面向量",
    "question": "[題號 340] 已知向量 $\\vec{u} = (51, 52)$ 與 $\\vec{v} = (53, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2807",
      "2599",
      "2858",
      "2654"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (51)(53) + (52)(2) = 2807$。",
    "difficulty": "基礎",
    "id": "ma340"
  },
  {
    "category": "多項式函數",
    "question": "[題號 341] 若多項式 $P(x) = x^3 - 51x + 103$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "213",
      "-7",
      "102"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 51(2) + 103 = 8 - 102 + 103 = 9$。",
    "difficulty": "基礎",
    "id": "ma341"
  },
  {
    "category": "指數與對數",
    "question": "[題號 342] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma342"
  },
  {
    "category": "三角函數",
    "question": "[題號 343] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma343"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 344] 通過點 $P(50, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 105",
      "2x + y + 3z = 107",
      "x - 2y + 3z = 54",
      "2x - y - 3z = 93"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 50) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 105$。",
    "difficulty": "基礎",
    "id": "ma344"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 345] 計算二階行列式 $\\begin{vmatrix} 52 & 51 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-49",
      "257",
      "2646",
      "-98"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (52)(2) - (51)(3) = 104 - 153 = -49$。",
    "difficulty": "基礎",
    "id": "ma345"
  },
  {
    "category": "平面向量",
    "question": "[題號 346] 已知向量 $\\vec{u} = (52, 53)$ 與 $\\vec{v} = (54, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "2914",
      "2702",
      "2966",
      "2758"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (52)(54) + (53)(2) = 2914$。",
    "difficulty": "基礎",
    "id": "ma346"
  },
  {
    "category": "多項式函數",
    "question": "[題號 347] 若多項式 $P(x) = x^3 - 52x + 105$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "217",
      "-7",
      "104"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 52(2) + 105 = 8 - 104 + 105 = 9$。",
    "difficulty": "基礎",
    "id": "ma347"
  },
  {
    "category": "指數與對數",
    "question": "[題號 348] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma348"
  },
  {
    "category": "三角函數",
    "question": "[題號 349] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma349"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 350] 通過點 $P(51, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 107",
      "2x + y + 3z = 109",
      "x - 2y + 3z = 55",
      "2x - y - 3z = 95"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 51) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 107$。",
    "difficulty": "基礎",
    "id": "ma350"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 351] 計算二階行列式 $\\begin{vmatrix} 53 & 52 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-50",
      "262",
      "2750",
      "-100"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (53)(2) - (52)(3) = 106 - 156 = -50$。",
    "difficulty": "基礎",
    "id": "ma351"
  },
  {
    "category": "平面向量",
    "question": "[題號 352] 已知向量 $\\vec{u} = (53, 54)$ 與 $\\vec{v} = (55, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3023",
      "2807",
      "3076",
      "2864"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (53)(55) + (54)(2) = 3023$。",
    "difficulty": "基礎",
    "id": "ma352"
  },
  {
    "category": "多項式函數",
    "question": "[題號 353] 若多項式 $P(x) = x^3 - 53x + 107$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "221",
      "-7",
      "106"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 53(2) + 107 = 8 - 106 + 107 = 9$。",
    "difficulty": "基礎",
    "id": "ma353"
  },
  {
    "category": "指數與對數",
    "question": "[題號 354] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma354"
  },
  {
    "category": "三角函數",
    "question": "[題號 355] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma355"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 356] 通過點 $P(52, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 109",
      "2x + y + 3z = 111",
      "x - 2y + 3z = 56",
      "2x - y - 3z = 97"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 52) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 109$。",
    "difficulty": "基礎",
    "id": "ma356"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 357] 計算二階行列式 $\\begin{vmatrix} 54 & 53 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-51",
      "267",
      "2856",
      "-102"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (54)(2) - (53)(3) = 108 - 159 = -51$。",
    "difficulty": "基礎",
    "id": "ma357"
  },
  {
    "category": "平面向量",
    "question": "[題號 358] 已知向量 $\\vec{u} = (54, 55)$ 與 $\\vec{v} = (56, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3134",
      "2914",
      "3188",
      "2972"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (54)(56) + (55)(2) = 3134$。",
    "difficulty": "基礎",
    "id": "ma358"
  },
  {
    "category": "多項式函數",
    "question": "[題號 359] 若多項式 $P(x) = x^3 - 54x + 109$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "225",
      "-7",
      "108"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 54(2) + 109 = 8 - 108 + 109 = 9$。",
    "difficulty": "基礎",
    "id": "ma359"
  },
  {
    "category": "指數與對數",
    "question": "[題號 360] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma360"
  },
  {
    "category": "三角函數",
    "question": "[題號 361] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma361"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 362] 通過點 $P(53, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 111",
      "2x + y + 3z = 113",
      "x - 2y + 3z = 57",
      "2x - y - 3z = 99"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 53) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 111$。",
    "difficulty": "基礎",
    "id": "ma362"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 363] 計算二階行列式 $\\begin{vmatrix} 55 & 54 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-52",
      "272",
      "2964",
      "-104"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (55)(2) - (54)(3) = 110 - 162 = -52$。",
    "difficulty": "基礎",
    "id": "ma363"
  },
  {
    "category": "平面向量",
    "question": "[題號 364] 已知向量 $\\vec{u} = (55, 56)$ 與 $\\vec{v} = (57, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3247",
      "3023",
      "3302",
      "3082"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (55)(57) + (56)(2) = 3247$。",
    "difficulty": "基礎",
    "id": "ma364"
  },
  {
    "category": "多項式函數",
    "question": "[題號 365] 若多項式 $P(x) = x^3 - 55x + 111$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "229",
      "-7",
      "110"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 55(2) + 111 = 8 - 110 + 111 = 9$。",
    "difficulty": "基礎",
    "id": "ma365"
  },
  {
    "category": "指數與對數",
    "question": "[題號 366] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma366"
  },
  {
    "category": "三角函數",
    "question": "[題號 367] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma367"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 368] 通過點 $P(54, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 113",
      "2x + y + 3z = 115",
      "x - 2y + 3z = 58",
      "2x - y - 3z = 101"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 54) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 113$。",
    "difficulty": "基礎",
    "id": "ma368"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 369] 計算二階行列式 $\\begin{vmatrix} 56 & 55 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-53",
      "277",
      "3074",
      "-106"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (56)(2) - (55)(3) = 112 - 165 = -53$。",
    "difficulty": "基礎",
    "id": "ma369"
  },
  {
    "category": "平面向量",
    "question": "[題號 370] 已知向量 $\\vec{u} = (56, 57)$ 與 $\\vec{v} = (58, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3362",
      "3134",
      "3418",
      "3194"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (56)(58) + (57)(2) = 3362$。",
    "difficulty": "基礎",
    "id": "ma370"
  },
  {
    "category": "多項式函數",
    "question": "[題號 371] 若多項式 $P(x) = x^3 - 56x + 113$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "233",
      "-7",
      "112"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 56(2) + 113 = 8 - 112 + 113 = 9$。",
    "difficulty": "基礎",
    "id": "ma371"
  },
  {
    "category": "指數與對數",
    "question": "[題號 372] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma372"
  },
  {
    "category": "三角函數",
    "question": "[題號 373] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma373"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 374] 通過點 $P(55, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 115",
      "2x + y + 3z = 117",
      "x - 2y + 3z = 59",
      "2x - y - 3z = 103"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 55) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 115$。",
    "difficulty": "基礎",
    "id": "ma374"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 375] 計算二階行列式 $\\begin{vmatrix} 57 & 56 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-54",
      "282",
      "3186",
      "-108"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (57)(2) - (56)(3) = 114 - 168 = -54$。",
    "difficulty": "基礎",
    "id": "ma375"
  },
  {
    "category": "平面向量",
    "question": "[題號 376] 已知向量 $\\vec{u} = (57, 58)$ 與 $\\vec{v} = (59, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3479",
      "3247",
      "3536",
      "3308"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (57)(59) + (58)(2) = 3479$。",
    "difficulty": "基礎",
    "id": "ma376"
  },
  {
    "category": "多項式函數",
    "question": "[題號 377] 若多項式 $P(x) = x^3 - 57x + 115$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "237",
      "-7",
      "114"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 57(2) + 115 = 8 - 114 + 115 = 9$。",
    "difficulty": "基礎",
    "id": "ma377"
  },
  {
    "category": "指數與對數",
    "question": "[題號 378] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma378"
  },
  {
    "category": "三角函數",
    "question": "[題號 379] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma379"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 380] 通過點 $P(56, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 117",
      "2x + y + 3z = 119",
      "x - 2y + 3z = 60",
      "2x - y - 3z = 105"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 56) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 117$。",
    "difficulty": "基礎",
    "id": "ma380"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 381] 計算二階行列式 $\\begin{vmatrix} 58 & 57 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-55",
      "287",
      "3300",
      "-110"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (58)(2) - (57)(3) = 116 - 171 = -55$。",
    "difficulty": "基礎",
    "id": "ma381"
  },
  {
    "category": "平面向量",
    "question": "[題號 382] 已知向量 $\\vec{u} = (58, 59)$ 與 $\\vec{v} = (60, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3598",
      "3362",
      "3656",
      "3424"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (58)(60) + (59)(2) = 3598$。",
    "difficulty": "基礎",
    "id": "ma382"
  },
  {
    "category": "多項式函數",
    "question": "[題號 383] 若多項式 $P(x) = x^3 - 58x + 117$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "241",
      "-7",
      "116"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 58(2) + 117 = 8 - 116 + 117 = 9$。",
    "difficulty": "基礎",
    "id": "ma383"
  },
  {
    "category": "指數與對數",
    "question": "[題號 384] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma384"
  },
  {
    "category": "三角函數",
    "question": "[題號 385] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma385"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 386] 通過點 $P(57, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 119",
      "2x + y + 3z = 121",
      "x - 2y + 3z = 61",
      "2x - y - 3z = 107"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 57) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 119$。",
    "difficulty": "基礎",
    "id": "ma386"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 387] 計算二階行列式 $\\begin{vmatrix} 59 & 58 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-56",
      "292",
      "3416",
      "-112"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (59)(2) - (58)(3) = 118 - 174 = -56$。",
    "difficulty": "基礎",
    "id": "ma387"
  },
  {
    "category": "平面向量",
    "question": "[題號 388] 已知向量 $\\vec{u} = (59, 60)$ 與 $\\vec{v} = (61, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3719",
      "3479",
      "3778",
      "3542"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (59)(61) + (60)(2) = 3719$。",
    "difficulty": "基礎",
    "id": "ma388"
  },
  {
    "category": "多項式函數",
    "question": "[題號 389] 若多項式 $P(x) = x^3 - 59x + 119$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "245",
      "-7",
      "118"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 59(2) + 119 = 8 - 118 + 119 = 9$。",
    "difficulty": "基礎",
    "id": "ma389"
  },
  {
    "category": "指數與對數",
    "question": "[題號 390] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma390"
  },
  {
    "category": "三角函數",
    "question": "[題號 391] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma391"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 392] 通過點 $P(58, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 121",
      "2x + y + 3z = 123",
      "x - 2y + 3z = 62",
      "2x - y - 3z = 109"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 58) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 121$。",
    "difficulty": "基礎",
    "id": "ma392"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 393] 計算二階行列式 $\\begin{vmatrix} 60 & 59 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-57",
      "297",
      "3534",
      "-114"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (60)(2) - (59)(3) = 120 - 177 = -57$。",
    "difficulty": "基礎",
    "id": "ma393"
  },
  {
    "category": "平面向量",
    "question": "[題號 394] 已知向量 $\\vec{u} = (60, 61)$ 與 $\\vec{v} = (62, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3842",
      "3598",
      "3902",
      "3662"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (60)(62) + (61)(2) = 3842$。",
    "difficulty": "基礎",
    "id": "ma394"
  },
  {
    "category": "多項式函數",
    "question": "[題號 395] 若多項式 $P(x) = x^3 - 60x + 121$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "249",
      "-7",
      "120"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 60(2) + 121 = 8 - 120 + 121 = 9$。",
    "difficulty": "基礎",
    "id": "ma395"
  },
  {
    "category": "指數與對數",
    "question": "[題號 396] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma396"
  },
  {
    "category": "三角函數",
    "question": "[題號 397] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma397"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 398] 通過點 $P(59, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 123",
      "2x + y + 3z = 125",
      "x - 2y + 3z = 63",
      "2x - y - 3z = 111"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 59) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 123$。",
    "difficulty": "基礎",
    "id": "ma398"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 399] 計算二階行列式 $\\begin{vmatrix} 61 & 60 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-58",
      "302",
      "3654",
      "-116"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (61)(2) - (60)(3) = 122 - 180 = -58$。",
    "difficulty": "基礎",
    "id": "ma399"
  },
  {
    "category": "平面向量",
    "question": "[題號 400] 已知向量 $\\vec{u} = (61, 62)$ 與 $\\vec{v} = (63, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "3967",
      "3719",
      "4028",
      "3784"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (61)(63) + (62)(2) = 3967$。",
    "difficulty": "基礎",
    "id": "ma400"
  },
  {
    "category": "多項式函數",
    "question": "[題號 401] 若多項式 $P(x) = x^3 - 61x + 123$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "253",
      "-7",
      "122"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 61(2) + 123 = 8 - 122 + 123 = 9$。",
    "difficulty": "基礎",
    "id": "ma401"
  },
  {
    "category": "指數與對數",
    "question": "[題號 402] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma402"
  },
  {
    "category": "三角函數",
    "question": "[題號 403] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma403"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 404] 通過點 $P(60, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 125",
      "2x + y + 3z = 127",
      "x - 2y + 3z = 64",
      "2x - y - 3z = 113"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 60) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 125$。",
    "difficulty": "基礎",
    "id": "ma404"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 405] 計算二階行列式 $\\begin{vmatrix} 62 & 61 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-59",
      "307",
      "3776",
      "-118"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (62)(2) - (61)(3) = 124 - 183 = -59$。",
    "difficulty": "基礎",
    "id": "ma405"
  },
  {
    "category": "平面向量",
    "question": "[題號 406] 已知向量 $\\vec{u} = (62, 63)$ 與 $\\vec{v} = (64, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4094",
      "3842",
      "4156",
      "3908"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (62)(64) + (63)(2) = 4094$。",
    "difficulty": "基礎",
    "id": "ma406"
  },
  {
    "category": "多項式函數",
    "question": "[題號 407] 若多項式 $P(x) = x^3 - 62x + 125$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "257",
      "-7",
      "124"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 62(2) + 125 = 8 - 124 + 125 = 9$。",
    "difficulty": "基礎",
    "id": "ma407"
  },
  {
    "category": "指數與對數",
    "question": "[題號 408] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma408"
  },
  {
    "category": "三角函數",
    "question": "[題號 409] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma409"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 410] 通過點 $P(61, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 127",
      "2x + y + 3z = 129",
      "x - 2y + 3z = 65",
      "2x - y - 3z = 115"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 61) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 127$。",
    "difficulty": "基礎",
    "id": "ma410"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 411] 計算二階行列式 $\\begin{vmatrix} 63 & 62 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-60",
      "312",
      "3900",
      "-120"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (63)(2) - (62)(3) = 126 - 186 = -60$。",
    "difficulty": "基礎",
    "id": "ma411"
  },
  {
    "category": "平面向量",
    "question": "[題號 412] 已知向量 $\\vec{u} = (63, 64)$ 與 $\\vec{v} = (65, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4223",
      "3967",
      "4286",
      "4034"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (63)(65) + (64)(2) = 4223$。",
    "difficulty": "基礎",
    "id": "ma412"
  },
  {
    "category": "多項式函數",
    "question": "[題號 413] 若多項式 $P(x) = x^3 - 63x + 127$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "261",
      "-7",
      "126"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 63(2) + 127 = 8 - 126 + 127 = 9$。",
    "difficulty": "基礎",
    "id": "ma413"
  },
  {
    "category": "指數與對數",
    "question": "[題號 414] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma414"
  },
  {
    "category": "三角函數",
    "question": "[題號 415] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma415"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 416] 通過點 $P(62, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 129",
      "2x + y + 3z = 131",
      "x - 2y + 3z = 66",
      "2x - y - 3z = 117"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 62) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 129$。",
    "difficulty": "基礎",
    "id": "ma416"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 417] 計算二階行列式 $\\begin{vmatrix} 64 & 63 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-61",
      "317",
      "4026",
      "-122"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (64)(2) - (63)(3) = 128 - 189 = -61$。",
    "difficulty": "基礎",
    "id": "ma417"
  },
  {
    "category": "平面向量",
    "question": "[題號 418] 已知向量 $\\vec{u} = (64, 65)$ 與 $\\vec{v} = (66, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4354",
      "4094",
      "4418",
      "4162"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (64)(66) + (65)(2) = 4354$。",
    "difficulty": "基礎",
    "id": "ma418"
  },
  {
    "category": "多項式函數",
    "question": "[題號 419] 若多項式 $P(x) = x^3 - 64x + 129$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "265",
      "-7",
      "128"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 64(2) + 129 = 8 - 128 + 129 = 9$。",
    "difficulty": "基礎",
    "id": "ma419"
  },
  {
    "category": "指數與對數",
    "question": "[題號 420] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma420"
  },
  {
    "category": "三角函數",
    "question": "[題號 421] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma421"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 422] 通過點 $P(63, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 131",
      "2x + y + 3z = 133",
      "x - 2y + 3z = 67",
      "2x - y - 3z = 119"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 63) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 131$。",
    "difficulty": "基礎",
    "id": "ma422"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 423] 計算二階行列式 $\\begin{vmatrix} 65 & 64 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-62",
      "322",
      "4154",
      "-124"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (65)(2) - (64)(3) = 130 - 192 = -62$。",
    "difficulty": "基礎",
    "id": "ma423"
  },
  {
    "category": "平面向量",
    "question": "[題號 424] 已知向量 $\\vec{u} = (65, 66)$ 與 $\\vec{v} = (67, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4487",
      "4223",
      "4552",
      "4292"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (65)(67) + (66)(2) = 4487$。",
    "difficulty": "基礎",
    "id": "ma424"
  },
  {
    "category": "多項式函數",
    "question": "[題號 425] 若多項式 $P(x) = x^3 - 65x + 131$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "269",
      "-7",
      "130"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 65(2) + 131 = 8 - 130 + 131 = 9$。",
    "difficulty": "基礎",
    "id": "ma425"
  },
  {
    "category": "指數與對數",
    "question": "[題號 426] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma426"
  },
  {
    "category": "三角函數",
    "question": "[題號 427] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma427"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 428] 通過點 $P(64, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 133",
      "2x + y + 3z = 135",
      "x - 2y + 3z = 68",
      "2x - y - 3z = 121"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 64) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 133$。",
    "difficulty": "基礎",
    "id": "ma428"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 429] 計算二階行列式 $\\begin{vmatrix} 66 & 65 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-63",
      "327",
      "4284",
      "-126"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (66)(2) - (65)(3) = 132 - 195 = -63$。",
    "difficulty": "基礎",
    "id": "ma429"
  },
  {
    "category": "平面向量",
    "question": "[題號 430] 已知向量 $\\vec{u} = (66, 67)$ 與 $\\vec{v} = (68, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4622",
      "4354",
      "4688",
      "4424"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (66)(68) + (67)(2) = 4622$。",
    "difficulty": "基礎",
    "id": "ma430"
  },
  {
    "category": "多項式函數",
    "question": "[題號 431] 若多項式 $P(x) = x^3 - 66x + 133$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "273",
      "-7",
      "132"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 66(2) + 133 = 8 - 132 + 133 = 9$。",
    "difficulty": "基礎",
    "id": "ma431"
  },
  {
    "category": "指數與對數",
    "question": "[題號 432] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma432"
  },
  {
    "category": "三角函數",
    "question": "[題號 433] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma433"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 434] 通過點 $P(65, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 135",
      "2x + y + 3z = 137",
      "x - 2y + 3z = 69",
      "2x - y - 3z = 123"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 65) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 135$。",
    "difficulty": "基礎",
    "id": "ma434"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 435] 計算二階行列式 $\\begin{vmatrix} 67 & 66 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-64",
      "332",
      "4416",
      "-128"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (67)(2) - (66)(3) = 134 - 198 = -64$。",
    "difficulty": "基礎",
    "id": "ma435"
  },
  {
    "category": "平面向量",
    "question": "[題號 436] 已知向量 $\\vec{u} = (67, 68)$ 與 $\\vec{v} = (69, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4759",
      "4487",
      "4826",
      "4558"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (67)(69) + (68)(2) = 4759$。",
    "difficulty": "基礎",
    "id": "ma436"
  },
  {
    "category": "多項式函數",
    "question": "[題號 437] 若多項式 $P(x) = x^3 - 67x + 135$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "277",
      "-7",
      "134"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 67(2) + 135 = 8 - 134 + 135 = 9$。",
    "difficulty": "基礎",
    "id": "ma437"
  },
  {
    "category": "指數與對數",
    "question": "[題號 438] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma438"
  },
  {
    "category": "三角函數",
    "question": "[題號 439] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma439"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 440] 通過點 $P(66, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 137",
      "2x + y + 3z = 139",
      "x - 2y + 3z = 70",
      "2x - y - 3z = 125"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 66) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 137$。",
    "difficulty": "基礎",
    "id": "ma440"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 441] 計算二階行列式 $\\begin{vmatrix} 68 & 67 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-65",
      "337",
      "4550",
      "-130"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (68)(2) - (67)(3) = 136 - 201 = -65$。",
    "difficulty": "基礎",
    "id": "ma441"
  },
  {
    "category": "平面向量",
    "question": "[題號 442] 已知向量 $\\vec{u} = (68, 69)$ 與 $\\vec{v} = (70, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "4898",
      "4622",
      "4966",
      "4694"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (68)(70) + (69)(2) = 4898$。",
    "difficulty": "基礎",
    "id": "ma442"
  },
  {
    "category": "多項式函數",
    "question": "[題號 443] 若多項式 $P(x) = x^3 - 68x + 137$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "281",
      "-7",
      "136"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 68(2) + 137 = 8 - 136 + 137 = 9$。",
    "difficulty": "基礎",
    "id": "ma443"
  },
  {
    "category": "指數與對數",
    "question": "[題號 444] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma444"
  },
  {
    "category": "三角函數",
    "question": "[題號 445] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma445"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 446] 通過點 $P(67, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 139",
      "2x + y + 3z = 141",
      "x - 2y + 3z = 71",
      "2x - y - 3z = 127"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 67) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 139$。",
    "difficulty": "基礎",
    "id": "ma446"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 447] 計算二階行列式 $\\begin{vmatrix} 69 & 68 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-66",
      "342",
      "4686",
      "-132"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (69)(2) - (68)(3) = 138 - 204 = -66$。",
    "difficulty": "基礎",
    "id": "ma447"
  },
  {
    "category": "平面向量",
    "question": "[題號 448] 已知向量 $\\vec{u} = (69, 70)$ 與 $\\vec{v} = (71, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5039",
      "4759",
      "5108",
      "4832"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (69)(71) + (70)(2) = 5039$。",
    "difficulty": "基礎",
    "id": "ma448"
  },
  {
    "category": "多項式函數",
    "question": "[題號 449] 若多項式 $P(x) = x^3 - 69x + 139$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "285",
      "-7",
      "138"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 69(2) + 139 = 8 - 138 + 139 = 9$。",
    "difficulty": "基礎",
    "id": "ma449"
  },
  {
    "category": "指數與對數",
    "question": "[題號 450] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma450"
  },
  {
    "category": "三角函數",
    "question": "[題號 451] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma451"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 452] 通過點 $P(68, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 141",
      "2x + y + 3z = 143",
      "x - 2y + 3z = 72",
      "2x - y - 3z = 129"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 68) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 141$。",
    "difficulty": "基礎",
    "id": "ma452"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 453] 計算二階行列式 $\\begin{vmatrix} 70 & 69 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-67",
      "347",
      "4824",
      "-134"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (70)(2) - (69)(3) = 140 - 207 = -67$。",
    "difficulty": "基礎",
    "id": "ma453"
  },
  {
    "category": "平面向量",
    "question": "[題號 454] 已知向量 $\\vec{u} = (70, 71)$ 與 $\\vec{v} = (72, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5182",
      "4898",
      "5252",
      "4972"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (70)(72) + (71)(2) = 5182$。",
    "difficulty": "基礎",
    "id": "ma454"
  },
  {
    "category": "多項式函數",
    "question": "[題號 455] 若多項式 $P(x) = x^3 - 70x + 141$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "289",
      "-7",
      "140"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 70(2) + 141 = 8 - 140 + 141 = 9$。",
    "difficulty": "基礎",
    "id": "ma455"
  },
  {
    "category": "指數與對數",
    "question": "[題號 456] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma456"
  },
  {
    "category": "三角函數",
    "question": "[題號 457] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma457"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 458] 通過點 $P(69, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 143",
      "2x + y + 3z = 145",
      "x - 2y + 3z = 73",
      "2x - y - 3z = 131"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 69) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 143$。",
    "difficulty": "基礎",
    "id": "ma458"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 459] 計算二階行列式 $\\begin{vmatrix} 71 & 70 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-68",
      "352",
      "4964",
      "-136"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (71)(2) - (70)(3) = 142 - 210 = -68$。",
    "difficulty": "基礎",
    "id": "ma459"
  },
  {
    "category": "平面向量",
    "question": "[題號 460] 已知向量 $\\vec{u} = (71, 72)$ 與 $\\vec{v} = (73, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5327",
      "5039",
      "5398",
      "5114"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (71)(73) + (72)(2) = 5327$。",
    "difficulty": "基礎",
    "id": "ma460"
  },
  {
    "category": "多項式函數",
    "question": "[題號 461] 若多項式 $P(x) = x^3 - 71x + 143$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "293",
      "-7",
      "142"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 71(2) + 143 = 8 - 142 + 143 = 9$。",
    "difficulty": "基礎",
    "id": "ma461"
  },
  {
    "category": "指數與對數",
    "question": "[題號 462] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma462"
  },
  {
    "category": "三角函數",
    "question": "[題號 463] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma463"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 464] 通過點 $P(70, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 145",
      "2x + y + 3z = 147",
      "x - 2y + 3z = 74",
      "2x - y - 3z = 133"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 70) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 145$。",
    "difficulty": "基礎",
    "id": "ma464"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 465] 計算二階行列式 $\\begin{vmatrix} 72 & 71 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-69",
      "357",
      "5106",
      "-138"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (72)(2) - (71)(3) = 144 - 213 = -69$。",
    "difficulty": "基礎",
    "id": "ma465"
  },
  {
    "category": "平面向量",
    "question": "[題號 466] 已知向量 $\\vec{u} = (72, 73)$ 與 $\\vec{v} = (74, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5474",
      "5182",
      "5546",
      "5258"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (72)(74) + (73)(2) = 5474$。",
    "difficulty": "基礎",
    "id": "ma466"
  },
  {
    "category": "多項式函數",
    "question": "[題號 467] 若多項式 $P(x) = x^3 - 72x + 145$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "297",
      "-7",
      "144"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 72(2) + 145 = 8 - 144 + 145 = 9$。",
    "difficulty": "基礎",
    "id": "ma467"
  },
  {
    "category": "指數與對數",
    "question": "[題號 468] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma468"
  },
  {
    "category": "三角函數",
    "question": "[題號 469] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma469"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 470] 通過點 $P(71, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 147",
      "2x + y + 3z = 149",
      "x - 2y + 3z = 75",
      "2x - y - 3z = 135"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 71) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 147$。",
    "difficulty": "基礎",
    "id": "ma470"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 471] 計算二階行列式 $\\begin{vmatrix} 73 & 72 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-70",
      "362",
      "5250",
      "-140"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (73)(2) - (72)(3) = 146 - 216 = -70$。",
    "difficulty": "基礎",
    "id": "ma471"
  },
  {
    "category": "平面向量",
    "question": "[題號 472] 已知向量 $\\vec{u} = (73, 74)$ 與 $\\vec{v} = (75, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5623",
      "5327",
      "5696",
      "5404"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (73)(75) + (74)(2) = 5623$。",
    "difficulty": "基礎",
    "id": "ma472"
  },
  {
    "category": "多項式函數",
    "question": "[題號 473] 若多項式 $P(x) = x^3 - 73x + 147$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "301",
      "-7",
      "146"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 73(2) + 147 = 8 - 146 + 147 = 9$。",
    "difficulty": "基礎",
    "id": "ma473"
  },
  {
    "category": "指數與對數",
    "question": "[題號 474] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma474"
  },
  {
    "category": "三角函數",
    "question": "[題號 475] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma475"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 476] 通過點 $P(72, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 149",
      "2x + y + 3z = 151",
      "x - 2y + 3z = 76",
      "2x - y - 3z = 137"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 72) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 149$。",
    "difficulty": "基礎",
    "id": "ma476"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 477] 計算二階行列式 $\\begin{vmatrix} 74 & 73 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-71",
      "367",
      "5396",
      "-142"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (74)(2) - (73)(3) = 148 - 219 = -71$。",
    "difficulty": "基礎",
    "id": "ma477"
  },
  {
    "category": "平面向量",
    "question": "[題號 478] 已知向量 $\\vec{u} = (74, 75)$ 與 $\\vec{v} = (76, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5774",
      "5474",
      "5848",
      "5552"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (74)(76) + (75)(2) = 5774$。",
    "difficulty": "基礎",
    "id": "ma478"
  },
  {
    "category": "多項式函數",
    "question": "[題號 479] 若多項式 $P(x) = x^3 - 74x + 149$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "305",
      "-7",
      "148"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 74(2) + 149 = 8 - 148 + 149 = 9$。",
    "difficulty": "基礎",
    "id": "ma479"
  },
  {
    "category": "指數與對數",
    "question": "[題號 480] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma480"
  },
  {
    "category": "三角函數",
    "question": "[題號 481] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma481"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 482] 通過點 $P(73, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 151",
      "2x + y + 3z = 153",
      "x - 2y + 3z = 77",
      "2x - y - 3z = 139"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 73) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 151$。",
    "difficulty": "基礎",
    "id": "ma482"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 483] 計算二階行列式 $\\begin{vmatrix} 75 & 74 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-72",
      "372",
      "5544",
      "-144"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (75)(2) - (74)(3) = 150 - 222 = -72$。",
    "difficulty": "基礎",
    "id": "ma483"
  },
  {
    "category": "平面向量",
    "question": "[題號 484] 已知向量 $\\vec{u} = (75, 76)$ 與 $\\vec{v} = (77, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "5927",
      "5623",
      "6002",
      "5702"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (75)(77) + (76)(2) = 5927$。",
    "difficulty": "基礎",
    "id": "ma484"
  },
  {
    "category": "多項式函數",
    "question": "[題號 485] 若多項式 $P(x) = x^3 - 75x + 151$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "309",
      "-7",
      "150"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 75(2) + 151 = 8 - 150 + 151 = 9$。",
    "difficulty": "基礎",
    "id": "ma485"
  },
  {
    "category": "指數與對數",
    "question": "[題號 486] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma486"
  },
  {
    "category": "三角函數",
    "question": "[題號 487] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma487"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 488] 通過點 $P(74, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 153",
      "2x + y + 3z = 155",
      "x - 2y + 3z = 78",
      "2x - y - 3z = 141"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 74) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 153$。",
    "difficulty": "基礎",
    "id": "ma488"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 489] 計算二階行列式 $\\begin{vmatrix} 76 & 75 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-73",
      "377",
      "5694",
      "-146"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (76)(2) - (75)(3) = 152 - 225 = -73$。",
    "difficulty": "基礎",
    "id": "ma489"
  },
  {
    "category": "平面向量",
    "question": "[題號 490] 已知向量 $\\vec{u} = (76, 77)$ 與 $\\vec{v} = (78, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "6082",
      "5774",
      "6158",
      "5854"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (76)(78) + (77)(2) = 6082$。",
    "difficulty": "基礎",
    "id": "ma490"
  },
  {
    "category": "多項式函數",
    "question": "[題號 491] 若多項式 $P(x) = x^3 - 76x + 153$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "313",
      "-7",
      "152"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 76(2) + 153 = 8 - 152 + 153 = 9$。",
    "difficulty": "基礎",
    "id": "ma491"
  },
  {
    "category": "指數與對數",
    "question": "[題號 492] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma492"
  },
  {
    "category": "三角函數",
    "question": "[題號 493] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma493"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 494] 通過點 $P(75, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 155",
      "2x + y + 3z = 157",
      "x - 2y + 3z = 79",
      "2x - y - 3z = 143"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 75) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 155$。",
    "difficulty": "基礎",
    "id": "ma494"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 495] 計算二階行列式 $\\begin{vmatrix} 77 & 76 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-74",
      "382",
      "5846",
      "-148"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (77)(2) - (76)(3) = 154 - 228 = -74$。",
    "difficulty": "基礎",
    "id": "ma495"
  },
  {
    "category": "平面向量",
    "question": "[題號 496] 已知向量 $\\vec{u} = (77, 78)$ 與 $\\vec{v} = (79, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "6239",
      "5927",
      "6316",
      "6008"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (77)(79) + (78)(2) = 6239$。",
    "difficulty": "基礎",
    "id": "ma496"
  },
  {
    "category": "多項式函數",
    "question": "[題號 497] 若多項式 $P(x) = x^3 - 77x + 155$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "317",
      "-7",
      "154"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 77(2) + 155 = 8 - 154 + 155 = 9$。",
    "difficulty": "基礎",
    "id": "ma497"
  },
  {
    "category": "指數與對數",
    "question": "[題號 498] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma498"
  },
  {
    "category": "三角函數",
    "question": "[題號 499] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma499"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 500] 通過點 $P(76, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 157",
      "2x + y + 3z = 159",
      "x - 2y + 3z = 80",
      "2x - y - 3z = 145"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 76) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 157$。",
    "difficulty": "基礎",
    "id": "ma500"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 501] 計算二階行列式 $\\begin{vmatrix} 78 & 77 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-75",
      "387",
      "6000",
      "-150"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (78)(2) - (77)(3) = 156 - 231 = -75$。",
    "difficulty": "基礎",
    "id": "ma501"
  },
  {
    "category": "平面向量",
    "question": "[題號 502] 已知向量 $\\vec{u} = (78, 79)$ 與 $\\vec{v} = (80, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "6398",
      "6082",
      "6476",
      "6164"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (78)(80) + (79)(2) = 6398$。",
    "difficulty": "基礎",
    "id": "ma502"
  },
  {
    "category": "多項式函數",
    "question": "[題號 503] 若多項式 $P(x) = x^3 - 78x + 157$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "321",
      "-7",
      "156"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 78(2) + 157 = 8 - 156 + 157 = 9$。",
    "difficulty": "基礎",
    "id": "ma503"
  },
  {
    "category": "指數與對數",
    "question": "[題號 504] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma504"
  },
  {
    "category": "三角函數",
    "question": "[題號 505] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma505"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 506] 通過點 $P(77, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 159",
      "2x + y + 3z = 161",
      "x - 2y + 3z = 81",
      "2x - y - 3z = 147"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 77) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 159$。",
    "difficulty": "基礎",
    "id": "ma506"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 507] 計算二階行列式 $\\begin{vmatrix} 79 & 78 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-76",
      "392",
      "6156",
      "-152"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (79)(2) - (78)(3) = 158 - 234 = -76$。",
    "difficulty": "基礎",
    "id": "ma507"
  },
  {
    "category": "平面向量",
    "question": "[題號 508] 已知向量 $\\vec{u} = (79, 80)$ 與 $\\vec{v} = (81, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "6559",
      "6239",
      "6638",
      "6322"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (79)(81) + (80)(2) = 6559$。",
    "difficulty": "基礎",
    "id": "ma508"
  },
  {
    "category": "多項式函數",
    "question": "[題號 509] 若多項式 $P(x) = x^3 - 79x + 159$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "325",
      "-7",
      "158"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 79(2) + 159 = 8 - 158 + 159 = 9$。",
    "difficulty": "基礎",
    "id": "ma509"
  },
  {
    "category": "指數與對數",
    "question": "[題號 510] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma510"
  },
  {
    "category": "三角函數",
    "question": "[題號 511] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma511"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 512] 通過點 $P(78, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 161",
      "2x + y + 3z = 163",
      "x - 2y + 3z = 82",
      "2x - y - 3z = 149"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 78) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 161$。",
    "difficulty": "基礎",
    "id": "ma512"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 513] 計算二階行列式 $\\begin{vmatrix} 80 & 79 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-77",
      "397",
      "6314",
      "-154"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (80)(2) - (79)(3) = 160 - 237 = -77$。",
    "difficulty": "基礎",
    "id": "ma513"
  },
  {
    "category": "平面向量",
    "question": "[題號 514] 已知向量 $\\vec{u} = (80, 81)$ 與 $\\vec{v} = (82, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "6722",
      "6398",
      "6802",
      "6482"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (80)(82) + (81)(2) = 6722$。",
    "difficulty": "基礎",
    "id": "ma514"
  },
  {
    "category": "多項式函數",
    "question": "[題號 515] 若多項式 $P(x) = x^3 - 80x + 161$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "329",
      "-7",
      "160"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 80(2) + 161 = 8 - 160 + 161 = 9$。",
    "difficulty": "基礎",
    "id": "ma515"
  },
  {
    "category": "指數與對數",
    "question": "[題號 516] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma516"
  },
  {
    "category": "三角函數",
    "question": "[題號 517] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma517"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 518] 通過點 $P(79, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 163",
      "2x + y + 3z = 165",
      "x - 2y + 3z = 83",
      "2x - y - 3z = 151"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 79) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 163$。",
    "difficulty": "基礎",
    "id": "ma518"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 519] 計算二階行列式 $\\begin{vmatrix} 81 & 80 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-78",
      "402",
      "6474",
      "-156"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (81)(2) - (80)(3) = 162 - 240 = -78$。",
    "difficulty": "基礎",
    "id": "ma519"
  },
  {
    "category": "平面向量",
    "question": "[題號 520] 已知向量 $\\vec{u} = (81, 82)$ 與 $\\vec{v} = (83, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "6887",
      "6559",
      "6968",
      "6644"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (81)(83) + (82)(2) = 6887$。",
    "difficulty": "基礎",
    "id": "ma520"
  },
  {
    "category": "多項式函數",
    "question": "[題號 521] 若多項式 $P(x) = x^3 - 81x + 163$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "333",
      "-7",
      "162"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 81(2) + 163 = 8 - 162 + 163 = 9$。",
    "difficulty": "基礎",
    "id": "ma521"
  },
  {
    "category": "指數與對數",
    "question": "[題號 522] 計算方程式 $2^{2x - 1} = 4$，求實數解 $x$？",
    "options": [
      "1.5",
      "2",
      "0.5",
      "3"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 2 \\implies 2x = 3 \\implies x = 1.5$。",
    "difficulty": "中等",
    "id": "ma522"
  },
  {
    "category": "三角函數",
    "question": "[題號 523] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma523"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 524] 通過點 $P(80, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 165",
      "2x + y + 3z = 167",
      "x - 2y + 3z = 84",
      "2x - y - 3z = 153"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 80) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 165$。",
    "difficulty": "基礎",
    "id": "ma524"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 525] 計算二階行列式 $\\begin{vmatrix} 82 & 81 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-79",
      "407",
      "6636",
      "-158"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (82)(2) - (81)(3) = 164 - 243 = -79$。",
    "difficulty": "基礎",
    "id": "ma525"
  },
  {
    "category": "平面向量",
    "question": "[題號 526] 已知向量 $\\vec{u} = (82, 83)$ 與 $\\vec{v} = (84, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "7054",
      "6722",
      "7136",
      "6808"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (82)(84) + (83)(2) = 7054$。",
    "difficulty": "基礎",
    "id": "ma526"
  },
  {
    "category": "多項式函數",
    "question": "[題號 527] 若多項式 $P(x) = x^3 - 82x + 165$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "337",
      "-7",
      "164"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 82(2) + 165 = 8 - 164 + 165 = 9$。",
    "difficulty": "基礎",
    "id": "ma527"
  },
  {
    "category": "指數與對數",
    "question": "[題號 528] 計算方程式 $2^{2x - 1} = 8$，求實數解 $x$？",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 3 \\implies 2x = 4 \\implies x = 2$。",
    "difficulty": "中等",
    "id": "ma528"
  },
  {
    "category": "三角函數",
    "question": "[題號 529] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma529"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 530] 通過點 $P(81, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 167",
      "2x + y + 3z = 169",
      "x - 2y + 3z = 85",
      "2x - y - 3z = 155"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 81) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 167$。",
    "difficulty": "基礎",
    "id": "ma530"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 531] 計算二階行列式 $\\begin{vmatrix} 83 & 82 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-80",
      "412",
      "6800",
      "-160"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (83)(2) - (82)(3) = 166 - 246 = -80$。",
    "difficulty": "基礎",
    "id": "ma531"
  },
  {
    "category": "平面向量",
    "question": "[題號 532] 已知向量 $\\vec{u} = (83, 84)$ 與 $\\vec{v} = (85, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "7223",
      "6887",
      "7306",
      "6974"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (83)(85) + (84)(2) = 7223$。",
    "difficulty": "基礎",
    "id": "ma532"
  },
  {
    "category": "多項式函數",
    "question": "[題號 533] 若多項式 $P(x) = x^3 - 83x + 167$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "341",
      "-7",
      "166"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 83(2) + 167 = 8 - 166 + 167 = 9$。",
    "difficulty": "基礎",
    "id": "ma533"
  },
  {
    "category": "指數與對數",
    "question": "[題號 534] 計算方程式 $2^{2x - 1} = 16$，求實數解 $x$？",
    "options": [
      "2.5",
      "4",
      "1.5",
      "5"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 4 \\implies 2x = 5 \\implies x = 2.5$。",
    "difficulty": "中等",
    "id": "ma534"
  },
  {
    "category": "三角函數",
    "question": "[題號 535] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma535"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 536] 通過點 $P(82, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 169",
      "2x + y + 3z = 171",
      "x - 2y + 3z = 86",
      "2x - y - 3z = 157"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 82) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 169$。",
    "difficulty": "基礎",
    "id": "ma536"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 537] 計算二階行列式 $\\begin{vmatrix} 84 & 83 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-81",
      "417",
      "6966",
      "-162"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (84)(2) - (83)(3) = 168 - 249 = -81$。",
    "difficulty": "基礎",
    "id": "ma537"
  },
  {
    "category": "平面向量",
    "question": "[題號 538] 已知向量 $\\vec{u} = (84, 85)$ 與 $\\vec{v} = (86, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "7394",
      "7054",
      "7478",
      "7142"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (84)(86) + (85)(2) = 7394$。",
    "difficulty": "基礎",
    "id": "ma538"
  },
  {
    "category": "多項式函數",
    "question": "[題號 539] 若多項式 $P(x) = x^3 - 84x + 169$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "345",
      "-7",
      "168"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 84(2) + 169 = 8 - 168 + 169 = 9$。",
    "difficulty": "基礎",
    "id": "ma539"
  },
  {
    "category": "指數與對數",
    "question": "[題號 540] 計算方程式 $2^{2x - 1} = 32$，求實數解 $x$？",
    "options": [
      "3",
      "5",
      "2",
      "6"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 5 \\implies 2x = 6 \\implies x = 3$。",
    "difficulty": "中等",
    "id": "ma540"
  },
  {
    "category": "三角函數",
    "question": "[題號 541] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma541"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 542] 通過點 $P(83, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 171",
      "2x + y + 3z = 173",
      "x - 2y + 3z = 87",
      "2x - y - 3z = 159"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 83) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 171$。",
    "difficulty": "基礎",
    "id": "ma542"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 543] 計算二階行列式 $\\begin{vmatrix} 85 & 84 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-82",
      "422",
      "7134",
      "-164"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (85)(2) - (84)(3) = 170 - 252 = -82$。",
    "difficulty": "基礎",
    "id": "ma543"
  },
  {
    "category": "平面向量",
    "question": "[題號 544] 已知向量 $\\vec{u} = (85, 86)$ 與 $\\vec{v} = (87, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "7567",
      "7223",
      "7652",
      "7312"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (85)(87) + (86)(2) = 7567$。",
    "difficulty": "基礎",
    "id": "ma544"
  },
  {
    "category": "多項式函數",
    "question": "[題號 545] 若多項式 $P(x) = x^3 - 85x + 171$ 除以 $x - 2$ 之餘數為多少？",
    "options": [
      "9",
      "349",
      "-7",
      "170"
    ],
    "answer": 0,
    "explanation": "由餘式定理，餘數為 $P(2) = 2^3 - 85(2) + 171 = 8 - 170 + 171 = 9$。",
    "difficulty": "基礎",
    "id": "ma545"
  },
  {
    "category": "指數與對數",
    "question": "[題號 546] 計算方程式 $2^{2x - 1} = 64$，求實數解 $x$？",
    "options": [
      "3.5",
      "6",
      "2.5",
      "7"
    ],
    "answer": 0,
    "explanation": "底數相同指數相等：$2x - 1 = 6 \\implies 2x = 7 \\implies x = 3.5$。",
    "difficulty": "中等",
    "id": "ma546"
  },
  {
    "category": "三角函數",
    "question": "[題號 547] 設 $\\sin\\theta = \\frac{3}{5}$ 且 $\\theta$ 為第一象限角，求 $\\sin 2\\theta$ 之值？",
    "options": [
      "24/25",
      "7/25",
      "12/25",
      "16/25"
    ],
    "answer": 0,
    "explanation": "第一象限角 $\\cos\\theta = \\sqrt{1 - (3/5)^2} = \\frac{4}{5}$。由二倍角公式：$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta = 2(3/5)(4/5) = \\frac{24}{25}$。",
    "difficulty": "中等",
    "id": "ma547"
  },
  {
    "category": "空間直線與平面",
    "question": "[題號 548] 通過點 $P(84, 1, 2)$ 且以 $\\vec{n} = (2, -1, 3)$ 為法向量之平面方程式為何？",
    "options": [
      "2x - y + 3z = 173",
      "2x + y + 3z = 175",
      "x - 2y + 3z = 88",
      "2x - y - 3z = 161"
    ],
    "answer": 0,
    "explanation": "平面點法式：$2(x - 84) - 1(y - 1) + 3(z - 2) = 0 \\implies 2x - y + 3z = 173$。",
    "difficulty": "基礎",
    "id": "ma548"
  },
  {
    "category": "矩陣與線性變換",
    "question": "[題號 549] 計算二階行列式 $\\begin{vmatrix} 86 & 85 \\\\ 3 & 2 \\end{vmatrix}$ 之值？",
    "options": [
      "-83",
      "427",
      "7304",
      "-166"
    ],
    "answer": 0,
    "explanation": "二階行列式公式 $ad - bc = (86)(2) - (85)(3) = 172 - 255 = -83$。",
    "difficulty": "基礎",
    "id": "ma549"
  },
  {
    "category": "平面向量",
    "question": "[題號 550] 已知向量 $\\vec{u} = (86, 87)$ 與 $\\vec{v} = (88, 2)$，求其內積 $\\vec{u} \\cdot \\vec{v}$ 之值？",
    "options": [
      "7742",
      "7394",
      "7828",
      "7484"
    ],
    "answer": 0,
    "explanation": "內積計算公式：$\\vec{u} \\cdot \\vec{v} = u_1 v_1 + u_2 v_2 = (86)(88) + (87)(2) = 7742$。",
    "difficulty": "基礎",
    "id": "ma550"
  }
];
