const scienceQuiz = [
  {
    "id": "sci1",
    "category": "力學",
    "question": "一物體從靜止開始以 $2 m/s^2$ 加速，5秒後速度為？",
    "options": [
      "$10$ m/s",
      "$5$ m/s",
      "$25$ m/s",
      "$7$ m/s"
    ],
    "answer": 0,
    "explanation": "$v = v_0 + at = 0 + 2×5 = 10$ m/s。",
    "difficulty": "基礎"
  },
  {
    "id": "sci2",
    "category": "力學",
    "question": "牛頓第二運動定律的公式是？",
    "options": [
      "$F = ma$",
      "$F = mv$",
      "$E = mc^2$",
      "$P = mv$"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：合力 = 質量 × 加速度。",
    "difficulty": "基礎"
  },
  {
    "id": "sci3",
    "category": "力學",
    "question": "一個 2 kg 的物體在 10 m 高處的重力位能是？($g=10 m/s^2$)",
    "options": [
      "200 J",
      "20 J",
      "100 J",
      "2000 J"
    ],
    "answer": 0,
    "explanation": "$E_p = mgh = 2×10×10 = 200$ J。",
    "difficulty": "基礎"
  },
  {
    "id": "sci4",
    "category": "力學",
    "question": "萬有引力與距離的關係是？",
    "options": [
      "與距離平方成反比",
      "與距離成正比",
      "與距離成反比",
      "與距離無關"
    ],
    "answer": 0,
    "explanation": "$F = G\\frac{m_1m_2}{r^2}$，引力與距離的平方成反比。",
    "difficulty": "基礎"
  },
  {
    "id": "sci5",
    "category": "電磁學",
    "question": "歐姆定律的公式是？",
    "options": [
      "$V = IR$",
      "$P = IV$",
      "$F = ma$",
      "$E = hf$"
    ],
    "answer": 0,
    "explanation": "歐姆定律：電壓 = 電流 × 電阻。",
    "difficulty": "基礎"
  },
  {
    "id": "sci6",
    "category": "電磁學",
    "question": "兩個 6Ω 電阻並聯後的總電阻是？",
    "options": [
      "3Ω",
      "12Ω",
      "6Ω",
      "36Ω"
    ],
    "answer": 0,
    "explanation": "並聯：$1/R = 1/6 + 1/6 = 2/6$，$R = 3Ω$。",
    "difficulty": "中等"
  },
  {
    "id": "sci7",
    "category": "波動與光學",
    "question": "$v = f\\lambda$ 中，$f$ 代表？",
    "options": [
      "頻率",
      "波長",
      "波速",
      "振幅"
    ],
    "answer": 0,
    "explanation": "$v$(波速) = $f$(頻率) × $\\lambda$(波長)。",
    "difficulty": "基礎"
  },
  {
    "id": "sci8",
    "category": "波動與光學",
    "question": "光從玻璃進入空氣時會？",
    "options": [
      "偏離法線（折射角>入射角）",
      "偏向法線",
      "不改變方向",
      "完全反射"
    ],
    "answer": 0,
    "explanation": "從光密介質到光疏介質，折射角大於入射角，光偏離法線。",
    "difficulty": "中等"
  },
  {
    "id": "sci9",
    "category": "近代物理",
    "question": "光電效應證明了光的什麼性質？",
    "options": [
      "粒子性",
      "波動性",
      "折射性",
      "反射性"
    ],
    "answer": 0,
    "explanation": "光電效應無法用波動理論解釋，愛因斯坦以光量子（光子）理論解釋，證明光的粒子性。",
    "difficulty": "中等"
  },
  {
    "id": "sci10",
    "category": "原子結構與週期表",
    "question": "原子核由什麼組成？",
    "options": [
      "質子和中子",
      "電子和質子",
      "只有質子",
      "只有電子"
    ],
    "answer": 0,
    "explanation": "原子核由帶正電的質子和不帶電的中子組成。電子在核外運動。",
    "difficulty": "基礎"
  },
  {
    "id": "sci11",
    "category": "原子結構與週期表",
    "question": "週期表中同一族元素具有？",
    "options": [
      "相似的化學性質",
      "相同的質量數",
      "相同的電子數",
      "相同的週期"
    ],
    "answer": 0,
    "explanation": "同族元素最外層電子數相同，因此有相似的化學性質。",
    "difficulty": "基礎"
  },
  {
    "id": "sci12",
    "category": "化學鍵與分子",
    "question": "NaCl 中的化學鍵是？",
    "options": [
      "離子鍵",
      "共價鍵",
      "金屬鍵",
      "氫鍵"
    ],
    "answer": 0,
    "explanation": "NaCl 由金屬鈉和非金屬氯組成，Na 失去電子成 Na⁺，Cl 得到電子成 Cl⁻，形成離子鍵。",
    "difficulty": "基礎"
  },
  {
    "id": "sci13",
    "category": "化學反應",
    "question": "1 莫耳等於多少個粒子？",
    "options": [
      "$6.02 \\times 10^{23}$",
      "$3.14 \\times 10^{23}$",
      "$6.02 \\times 10^{20}$",
      "$1.6 \\times 10^{-19}$"
    ],
    "answer": 0,
    "explanation": "亞佛加厥數 $N_A = 6.02 \\times 10^{23}$。",
    "difficulty": "基礎"
  },
  {
    "id": "sci14",
    "category": "化學反應",
    "question": "pH = 3 的溶液是？",
    "options": [
      "酸性",
      "中性",
      "鹼性",
      "無法判斷"
    ],
    "answer": 0,
    "explanation": "pH < 7 為酸性，pH = 7 中性，pH > 7 鹼性。pH=3 為酸性。",
    "difficulty": "基礎"
  },
  {
    "id": "sci15",
    "category": "酸鹼與氧化還原",
    "question": "氧化反應是指？",
    "options": [
      "失去電子",
      "得到電子",
      "失去質子",
      "得到質子"
    ],
    "answer": 0,
    "explanation": "氧化 = 失去電子（LEO: Lose Electrons = Oxidation）。",
    "difficulty": "基礎"
  },
  {
    "id": "sci16",
    "category": "細胞與分子生物",
    "question": "光合作用發生在植物細胞的哪個胞器？",
    "options": [
      "葉綠體",
      "粒線體",
      "細胞核",
      "內質網"
    ],
    "answer": 0,
    "explanation": "葉綠體進行光合作用，將光能轉為化學能。粒線體進行有氧呼吸。",
    "difficulty": "基礎"
  },
  {
    "id": "sci17",
    "category": "細胞與分子生物",
    "question": "DNA 中 A 配對的鹼基是？",
    "options": [
      "T",
      "C",
      "G",
      "U"
    ],
    "answer": 0,
    "explanation": "DNA鹼基配對：A-T（腺嘌呤-胸腺嘧啶），G-C（鳥嘌呤-胞嘧啶）。RNA中A配U。",
    "difficulty": "基礎"
  },
  {
    "id": "sci18",
    "category": "遺傳與演化",
    "question": "Aa × Aa 的子代基因型比為？",
    "options": [
      "AA:Aa:aa = 1:2:1",
      "全部Aa",
      "AA:aa = 1:1",
      "全部AA"
    ],
    "answer": 0,
    "explanation": "Aa × Aa → AA(1/4), Aa(2/4), aa(1/4)，比為 1:2:1。",
    "difficulty": "基礎"
  },
  {
    "id": "sci19",
    "category": "人體生理",
    "question": "人體中氣體交換主要發生在？",
    "options": [
      "肺泡",
      "氣管",
      "支氣管",
      "鼻腔"
    ],
    "answer": 0,
    "explanation": "肺泡是氣體交換的主要場所，O₂進入血液，CO₂排出。",
    "difficulty": "基礎"
  },
  {
    "id": "sci20",
    "category": "生態與環境",
    "question": "能量在食物鏈中每一階層約傳遞多少百分比？",
    "options": [
      "10%",
      "50%",
      "90%",
      "100%"
    ],
    "answer": 0,
    "explanation": "生態學的「十分之一法則」：每一營養階層約只傳遞10%的能量到下一層。",
    "difficulty": "基礎"
  },
  {
    "id": "sci21",
    "category": "地質與板塊",
    "question": "臺灣位於哪兩個板塊的交界？",
    "options": [
      "歐亞板塊與菲律賓海板塊",
      "太平洋板塊與歐亞板塊",
      "印度板塊與歐亞板塊",
      "非洲板塊與歐亞板塊"
    ],
    "answer": 0,
    "explanation": "臺灣位於歐亞板塊與菲律賓海板塊的聚合邊界，地震頻繁。",
    "difficulty": "基礎"
  },
  {
    "id": "sci22",
    "category": "大氣與海洋",
    "question": "對流層的天氣現象最明顯，其厚度約？",
    "options": [
      "10-12公里",
      "50公里",
      "100公里",
      "1公里"
    ],
    "answer": 0,
    "explanation": "對流層從地表到約10-12公里高，幾乎所有天氣現象都發生在此層。",
    "difficulty": "中等"
  },
  {
    "id": "sci23",
    "category": "天文",
    "question": "太陽系八大行星中，最大的是？",
    "options": [
      "木星",
      "土星",
      "天王星",
      "海王星"
    ],
    "answer": 0,
    "explanation": "木星(Jupiter)是太陽系最大的行星，質量約為地球的318倍。",
    "difficulty": "基礎"
  },
  {
    "id": "sci24",
    "category": "環境變遷",
    "question": "造成溫室效應的主要氣體不包括？",
    "options": [
      "氮氣(N₂)",
      "二氧化碳(CO₂)",
      "甲烷(CH₄)",
      "水蒸氣(H₂O)"
    ],
    "answer": 0,
    "explanation": "氮氣不是溫室氣體。主要溫室氣體有CO₂、CH₄、N₂O、水蒸氣。",
    "difficulty": "中等"
  },
  {
    "id": "sci25",
    "category": "天文",
    "question": "恆星演化中，太陽最終會變成？",
    "options": [
      "白矮星",
      "黑洞",
      "中子星",
      "紅矮星"
    ],
    "answer": 0,
    "explanation": "太陽質量不夠大，演化路徑：主序星→紅巨星→行星狀星雲→白矮星。大質量恆星才會變黑洞。",
    "difficulty": "進階"
  },
  {
    "id": "sci26",
    "category": "物理",
    "question": "依據克卜勒第三定律，若某行星繞日週期為 8 年，其軌道半長軸為多少天文單位 (AU)？",
    "options": [
      "4",
      "2",
      "8",
      "16"
    ],
    "answer": 0,
    "explanation": "$T^2 / R^3 = 1$ (對太陽系行星)，$8^2 = 64 = R^3$，故 $R=4$ AU。",
    "difficulty": "進階"
  },
  {
    "category": "生物",
    "options": [
      "高基氏體",
      "核糖體",
      "葉綠體",
      "粒線體"
    ],
    "answer": 3,
    "difficulty": "進階",
    "question": "人體細胞中，負責產生大量 ATP 能量的胞器為何？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：理解 ATP 與能量的關係</strong><br>\n在高中生物中，ATP（三磷酸腺苷）被稱為細胞的「能量貨幣」。細胞內所有的生理反應幾乎都需要消耗 ATP 來提供能量。<br><br>\n<strong>步驟二：逐一檢視各胞器的功能</strong><br>\n- **粒線體 (Mitochondrion)**：細胞進行「有氧呼吸」的主要場所。它能將葡萄糖氧化分解，過程中釋放出大量能量並轉換成 ATP，因此有「細胞的發電廠」之稱。<br>\n- **葉綠體 (Chloroplast)**：存在於植物細胞，負責進行光合作用產生葡萄糖，人體細胞並無此胞器。<br>\n- **核糖體 (Ribosome)**：負責讀取 RNA 訊息，是合成蛋白質的工廠，與能量產生無關。<br>\n- **高基氏體 (Golgi apparatus)**：負責對蛋白質與脂質進行修飾、分類與包裝（像是細胞的郵局）。<br><br>\n<strong>步驟三：得出結論</strong><br>\n根據上述功能分析，人體細胞中負責產生能量的主要胞器就是「粒線體」。",
    "id": "sci27"
  },
  {
    "category": "地科",
    "options": [
      "加倍",
      "減半",
      "不變",
      "變為四倍"
    ],
    "answer": 0,
    "difficulty": "基礎",
    "question": "根據牛頓第二運動定律，若物體質量不變，受力加倍，則加速度會如何變化？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：寫出牛頓第二運動定律公式</strong><br>\n高中物理的核心公式：$\\vec{F} = m \\vec{a}$。<br>\n其中 $\\vec{F}$ 代表物體所受的合力（Net Force），$m$ 代表物體的質量（Mass），$\\vec{a}$ 代表物體產生的加速度（Acceleration）。<br><br>\n<strong>步驟二：分析變數之間的關係</strong><br>\n根據公式，我們可以將加速度寫成：$a = \\frac{F}{m}$。<br>\n題目明確設定「物體質量 $m$ 不變」。在分母固定的情況下，加速度 $a$ 會與外力 $F$ 成「正比」關係。<br><br>\n<strong>步驟三：代入變化進行推論</strong><br>\n既然成正比，當外力 $F$ 變成原來的兩倍（受力加倍）時，分子變成兩倍，計算出來的加速度 $a$ 自然也會變成原來的兩倍。<br>\n因此，加速度會「加倍」。",
    "id": "sci28"
  },
  {
    "category": "物理",
    "options": [
      "為直線型分子",
      "室溫下為氣體",
      "是由離子鍵組成",
      "具有極性"
    ],
    "answer": 3,
    "difficulty": "中等",
    "question": "關於水分子 ($H_2O$) 的結構與特性，下列敘述何者正確？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：分析水分子的化學鍵結</strong><br>\n水分子是由兩個氫原子 (H) 和一個氧原子 (O) 組成的。氫是非金屬，氧也是非金屬。非金屬與非金屬之間，是透過「共用電子對」來結合，這種鍵結稱為「共價鍵」，而不是離子鍵。因此選項「是由離子鍵組成」錯誤。<br><br>\n<strong>步驟二：分析水分子的立體結構</strong><br>\n氧原子最外層有 6 個價電子，其中 2 個分別與氫共用，剩下 2 對「孤對電子（未共用電子對）」。根據 VSEPR（價殼層電子對斥力）理論，這兩對孤對電子的斥力極大，會把原本的直線往下擠壓，使得水分子呈現「角錐形（彎曲型）」，角度約為 104.5 度。因此選項「為直線型分子」錯誤。<br><br>\n<strong>步驟三：分析水分子的極性與狀態</strong><br>\n因為氧的電負度（吸引電子的能力）遠大於氫，且形狀不對稱（彎曲），導致整個分子有正負電極，這使得水分子「具有極性」。這種極性讓水分子間能產生強大的氫鍵，這也是為什麼水在室溫下是液體而不是氣體的原因。<br>\n故正確敘述為「具有極性」。",
    "id": "sci29"
  },
  {
    "category": "化學",
    "options": [
      "太平洋板塊與印澳板塊",
      "歐亞板塊與太平洋板塊",
      "北美板塊與南美板塊",
      "歐亞板塊與菲律賓海板塊"
    ],
    "answer": 3,
    "difficulty": "進階",
    "question": "台灣地震頻繁，主要是因為位在哪兩個板塊交界處？",
    "explanation": "💡 <strong>解題步驟與詳解：</strong><br>\n<strong>步驟一：回憶台灣的地質地理位置</strong><br>\n在高中地球科學中，板塊構造學說是解釋地震與火山活動的核心。台灣正好位於環太平洋火山地震帶上，地質活動極度活躍。<br><br>\n<strong>步驟二：分析台灣周邊的板塊分布</strong><br>\n台灣島的形成與造山運動，主要是由兩大板塊的碰撞擠壓所造成：<br>\n1. 西邊與北邊的**歐亞板塊**（屬於大陸板塊）。<br>\n2. 東南邊的**菲律賓海板塊**（屬於海洋板塊）。<br><br>\n<strong>步驟三：理解交界帶特性與排除錯誤選項</strong><br>\n這兩個板塊不斷互相擠壓（菲律賓海板塊向西北推擠歐亞板塊），這是一種「聚合型」板塊邊界，過程中累積的應力釋放就形成了頻繁的地震。<br>\n- 太平洋板塊雖然在東邊，但並未直接與台灣本島交界（菲律賓海板塊夾在中間）。<br>\n- 印澳、北美、南美板塊更是距離台灣遙遠。<br>\n故答案為「歐亞板塊與菲律賓海板塊」。",
    "id": "sci30"
  },
  {
    "id": "sci31",
    "category": "物理-力學",
    "question": "一物體由靜止出發作等加速度直線運動，若第 1 秒內的位移為 2 公尺，則前 3 秒內的總位移為多少公尺？",
    "options": [
      "18 公尺",
      "6 公尺",
      "9 公尺",
      "12 公尺"
    ],
    "answer": 0,
    "explanation": "由位移公式 $x = \\frac{1}{2}at^2$，初速為 0 時位移與時間平方成正比。前 3 秒時間為第 1 秒的 3 倍，位移必為 $2 \\times 3^2 = 18$ 公尺。",
    "difficulty": "中等"
  },
  {
    "id": "sci32",
    "category": "物理-力學",
    "question": "某物體質量 2 kg，自高處自由落下，當落下 20 公尺時（取重力加速度 $g = 10 \\text{ m/s}^2$），其重力位能減少了多少焦耳？",
    "options": [
      "400 焦耳",
      "200 焦耳",
      "100 焦耳",
      "800 焦耳"
    ],
    "answer": 0,
    "explanation": "減少的重力位能 $\\Delta U = mgh = 2 \\times 10 \\times 20 = 400$ 焦耳。",
    "difficulty": "基礎"
  },
  {
    "id": "sci33",
    "category": "物理-波動光學",
    "question": "光線由水中（折射率 $n = 1.33$）射入空氣中（$n = 1.0$），當入射角大於何種角度時會發生全反射現象？",
    "options": [
      "臨界角",
      "布魯斯特角",
      "折射角",
      "零度角"
    ],
    "answer": 0,
    "explanation": "全反射發生條件：光由光密介質射入光疏介質，且入射角大於臨界角 $\\theta_c$（$\\sin\\theta_c = 1/n$）。",
    "difficulty": "基礎"
  },
  {
    "id": "sci34",
    "category": "物理-近代物理",
    "question": "光電效應實驗中，能夠增加光電子最大初始動能 $E_{k,\\max}$ 的方法是？",
    "options": [
      "提高照射光的頻率",
      "增強照射光的強度",
      "延長光照時間",
      "增大受光面積"
    ],
    "answer": 0,
    "explanation": "由光電方程式 $E_{k,\\max} = h\\nu - W$，光電子最大動能僅與入射光的頻率 $\\nu$ 及金屬功函數 $W$ 有關，與光強無關。",
    "difficulty": "中等"
  },
  {
    "id": "sci35",
    "category": "化學-化學鍵",
    "question": "下列哪一種晶體在固態時不導電，但熔融態或溶於水後具有導電性？",
    "options": [
      "離子晶體（如 NaCl）",
      "分子晶體（如乾冰）",
      "共價網狀晶體（如鑽石）",
      "金屬晶體（如銅）"
    ],
    "answer": 0,
    "explanation": "離子晶體固態時離子被固定無法移動故不導電；熔融態或水溶液中離子可自由游動故能導電。",
    "difficulty": "基礎"
  },
  {
    "id": "sci36",
    "category": "化學-酸鹼反應",
    "question": "在 25°C 下，某一水溶液的 pH 值為 3，則其氫氧根離子濃度 $[\\text{OH}^-]$ 為何？",
    "options": [
      "$10^{-11}$ M",
      "$10^{-3}$ M",
      "$10^{-7}$ M",
      "$10^{-14}$ M"
    ],
    "answer": 0,
    "explanation": "在 25°C 下，$\\text{pH} + \\text{pOH} = 14 \\implies \\text{pOH} = 11 \\implies [\\text{OH}^-] = 10^{-11}$ M。",
    "difficulty": "基礎"
  },
  {
    "id": "sci37",
    "category": "生物-細胞生理",
    "question": "植物細胞進行光合作用時，光反應（需光反應）發生的確切胞器構造位置在？",
    "options": [
      "葉綠體葉綠囊（類囊體膜）",
      "葉綠體基質",
      "粒線體內膜",
      "細胞質基質"
    ],
    "answer": 0,
    "explanation": "光反應發生於類囊體膜上（吸收光能分解水釋放氧氣並產生 ATP 與 NADPH）；固碳的卡爾文循環發生於葉綠體基質。",
    "difficulty": "中等"
  },
  {
    "id": "sci38",
    "category": "生物-遺傳學",
    "question": "在分子生物學的中心法則中，以 mRNA 為模板合成多胜肽蛋白質的過程稱為？",
    "options": [
      "轉譯 (Translation)",
      "轉錄 (Transcription)",
      "複製 (Replication)",
      "逆轉錄 (Reverse Transcription)"
    ],
    "answer": 0,
    "explanation": "DNA $\\rightarrow$ RNA 為轉錄；mRNA $\\rightarrow$ 蛋白質為轉譯。",
    "difficulty": "基礎"
  },
  {
    "id": "sci39",
    "category": "地科-板塊構造",
    "question": "造成臺灣花東縱谷頻繁發生地震的主要板塊構造活動邊界為？",
    "options": [
      "歐亞板塊與菲律賓海板塊之聚合型造山邊界",
      "太平洋板塊與印澳板塊張裂邊界",
      "錯動型聖安德列斯斷層",
      "隱沒帶海溝裂谷"
    ],
    "answer": 0,
    "explanation": "臺灣位於菲律賓海板塊向西北擠壓歐亞板塊的板塊聚合邊界，花東縱谷即為板塊縫合線。",
    "difficulty": "基礎"
  },
  {
    "id": "sci40",
    "category": "地科-地震波",
    "question": "地震發生時，測站最先記錄到的地震波是下列哪一種波？",
    "options": [
      "P 波（縱波）",
      "S 波（橫波）",
      "表面波（雷利波）",
      "洛夫波"
    ],
    "answer": 0,
    "explanation": "P 波（Primary wave）為縱波，波速最快（約 5~7 km/s），故最先到達測站。",
    "difficulty": "基礎"
  }
];
