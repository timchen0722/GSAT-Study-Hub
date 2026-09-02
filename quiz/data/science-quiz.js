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
  },
  {
    "category": "物理-力學",
    "question": "[題號 41] 質量為 2 kg 的物體在光滑水平面上受到 6 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{6}{2} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci41"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 42] 一電阻值為 3 歐姆之電熱器，接上 6 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{6}{3} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci42"
  },
  {
    "category": "化學-計量",
    "question": "[題號 43] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci43"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 44] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci44"
  },
  {
    "category": "地科-天文",
    "question": "[題號 45] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci45"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 46] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci46"
  },
  {
    "category": "物理-力學",
    "question": "[題號 47] 質量為 3 kg 的物體在光滑水平面上受到 9 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{9}{3} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci47"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 48] 一電阻值為 4 歐姆之電熱器，接上 8 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{8}{4} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci48"
  },
  {
    "category": "化學-計量",
    "question": "[題號 49] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci49"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 50] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci50"
  },
  {
    "category": "地科-天文",
    "question": "[題號 51] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci51"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 52] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci52"
  },
  {
    "category": "物理-力學",
    "question": "[題號 53] 質量為 4 kg 的物體在光滑水平面上受到 12 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{12}{4} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci53"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 54] 一電阻值為 5 歐姆之電熱器，接上 10 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{10}{5} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci54"
  },
  {
    "category": "化學-計量",
    "question": "[題號 55] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci55"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 56] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci56"
  },
  {
    "category": "地科-天文",
    "question": "[題號 57] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci57"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 58] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci58"
  },
  {
    "category": "物理-力學",
    "question": "[題號 59] 質量為 5 kg 的物體在光滑水平面上受到 15 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{15}{5} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci59"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 60] 一電阻值為 6 歐姆之電熱器，接上 12 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{12}{6} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci60"
  },
  {
    "category": "化學-計量",
    "question": "[題號 61] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci61"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 62] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci62"
  },
  {
    "category": "地科-天文",
    "question": "[題號 63] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci63"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 64] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci64"
  },
  {
    "category": "物理-力學",
    "question": "[題號 65] 質量為 6 kg 的物體在光滑水平面上受到 18 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{18}{6} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci65"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 66] 一電阻值為 7 歐姆之電熱器，接上 14 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{14}{7} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci66"
  },
  {
    "category": "化學-計量",
    "question": "[題號 67] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci67"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 68] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci68"
  },
  {
    "category": "地科-天文",
    "question": "[題號 69] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci69"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 70] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci70"
  },
  {
    "category": "物理-力學",
    "question": "[題號 71] 質量為 7 kg 的物體在光滑水平面上受到 21 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{21}{7} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci71"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 72] 一電阻值為 8 歐姆之電熱器，接上 16 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{16}{8} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci72"
  },
  {
    "category": "化學-計量",
    "question": "[題號 73] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci73"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 74] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci74"
  },
  {
    "category": "地科-天文",
    "question": "[題號 75] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci75"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 76] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci76"
  },
  {
    "category": "物理-力學",
    "question": "[題號 77] 質量為 8 kg 的物體在光滑水平面上受到 24 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{24}{8} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci77"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 78] 一電阻值為 9 歐姆之電熱器，接上 18 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{18}{9} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci78"
  },
  {
    "category": "化學-計量",
    "question": "[題號 79] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci79"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 80] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci80"
  },
  {
    "category": "地科-天文",
    "question": "[題號 81] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci81"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 82] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci82"
  },
  {
    "category": "物理-力學",
    "question": "[題號 83] 質量為 9 kg 的物體在光滑水平面上受到 27 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{27}{9} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci83"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 84] 一電阻值為 10 歐姆之電熱器，接上 20 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{20}{10} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci84"
  },
  {
    "category": "化學-計量",
    "question": "[題號 85] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci85"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 86] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci86"
  },
  {
    "category": "地科-天文",
    "question": "[題號 87] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci87"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 88] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci88"
  },
  {
    "category": "物理-力學",
    "question": "[題號 89] 質量為 10 kg 的物體在光滑水平面上受到 30 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{30}{10} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci89"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 90] 一電阻值為 11 歐姆之電熱器，接上 22 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{22}{11} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci90"
  },
  {
    "category": "化學-計量",
    "question": "[題號 91] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci91"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 92] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci92"
  },
  {
    "category": "地科-天文",
    "question": "[題號 93] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci93"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 94] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci94"
  },
  {
    "category": "物理-力學",
    "question": "[題號 95] 質量為 11 kg 的物體在光滑水平面上受到 33 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{33}{11} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci95"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 96] 一電阻值為 12 歐姆之電熱器，接上 24 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{24}{12} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci96"
  },
  {
    "category": "化學-計量",
    "question": "[題號 97] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci97"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 98] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci98"
  },
  {
    "category": "地科-天文",
    "question": "[題號 99] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci99"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 100] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci100"
  },
  {
    "category": "物理-力學",
    "question": "[題號 101] 質量為 12 kg 的物體在光滑水平面上受到 36 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{36}{12} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci101"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 102] 一電阻值為 13 歐姆之電熱器，接上 26 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{26}{13} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci102"
  },
  {
    "category": "化學-計量",
    "question": "[題號 103] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci103"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 104] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci104"
  },
  {
    "category": "地科-天文",
    "question": "[題號 105] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci105"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 106] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci106"
  },
  {
    "category": "物理-力學",
    "question": "[題號 107] 質量為 13 kg 的物體在光滑水平面上受到 39 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{39}{13} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci107"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 108] 一電阻值為 14 歐姆之電熱器，接上 28 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{28}{14} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci108"
  },
  {
    "category": "化學-計量",
    "question": "[題號 109] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci109"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 110] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci110"
  },
  {
    "category": "地科-天文",
    "question": "[題號 111] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci111"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 112] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci112"
  },
  {
    "category": "物理-力學",
    "question": "[題號 113] 質量為 14 kg 的物體在光滑水平面上受到 42 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{42}{14} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci113"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 114] 一電阻值為 15 歐姆之電熱器，接上 30 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{30}{15} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci114"
  },
  {
    "category": "化學-計量",
    "question": "[題號 115] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci115"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 116] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci116"
  },
  {
    "category": "地科-天文",
    "question": "[題號 117] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci117"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 118] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci118"
  },
  {
    "category": "物理-力學",
    "question": "[題號 119] 質量為 15 kg 的物體在光滑水平面上受到 45 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{45}{15} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci119"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 120] 一電阻值為 16 歐姆之電熱器，接上 32 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{32}{16} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci120"
  },
  {
    "category": "化學-計量",
    "question": "[題號 121] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci121"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 122] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci122"
  },
  {
    "category": "地科-天文",
    "question": "[題號 123] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci123"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 124] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci124"
  },
  {
    "category": "物理-力學",
    "question": "[題號 125] 質量為 16 kg 的物體在光滑水平面上受到 48 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{48}{16} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci125"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 126] 一電阻值為 17 歐姆之電熱器，接上 34 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{34}{17} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci126"
  },
  {
    "category": "化學-計量",
    "question": "[題號 127] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci127"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 128] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci128"
  },
  {
    "category": "地科-天文",
    "question": "[題號 129] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci129"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 130] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci130"
  },
  {
    "category": "物理-力學",
    "question": "[題號 131] 質量為 17 kg 的物體在光滑水平面上受到 51 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{51}{17} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci131"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 132] 一電阻值為 18 歐姆之電熱器，接上 36 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{36}{18} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci132"
  },
  {
    "category": "化學-計量",
    "question": "[題號 133] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci133"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 134] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci134"
  },
  {
    "category": "地科-天文",
    "question": "[題號 135] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci135"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 136] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci136"
  },
  {
    "category": "物理-力學",
    "question": "[題號 137] 質量為 18 kg 的物體在光滑水平面上受到 54 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{54}{18} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci137"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 138] 一電阻值為 19 歐姆之電熱器，接上 38 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{38}{19} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci138"
  },
  {
    "category": "化學-計量",
    "question": "[題號 139] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci139"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 140] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci140"
  },
  {
    "category": "地科-天文",
    "question": "[題號 141] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci141"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 142] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci142"
  },
  {
    "category": "物理-力學",
    "question": "[題號 143] 質量為 19 kg 的物體在光滑水平面上受到 57 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{57}{19} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci143"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 144] 一電阻值為 20 歐姆之電熱器，接上 40 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{40}{20} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci144"
  },
  {
    "category": "化學-計量",
    "question": "[題號 145] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci145"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 146] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci146"
  },
  {
    "category": "地科-天文",
    "question": "[題號 147] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci147"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 148] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci148"
  },
  {
    "category": "物理-力學",
    "question": "[題號 149] 質量為 20 kg 的物體在光滑水平面上受到 60 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{60}{20} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci149"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 150] 一電阻值為 21 歐姆之電熱器，接上 42 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{42}{21} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci150"
  },
  {
    "category": "化學-計量",
    "question": "[題號 151] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci151"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 152] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci152"
  },
  {
    "category": "地科-天文",
    "question": "[題號 153] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci153"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 154] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci154"
  },
  {
    "category": "物理-力學",
    "question": "[題號 155] 質量為 21 kg 的物體在光滑水平面上受到 63 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{63}{21} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci155"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 156] 一電阻值為 22 歐姆之電熱器，接上 44 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{44}{22} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci156"
  },
  {
    "category": "化學-計量",
    "question": "[題號 157] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci157"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 158] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci158"
  },
  {
    "category": "地科-天文",
    "question": "[題號 159] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci159"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 160] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci160"
  },
  {
    "category": "物理-力學",
    "question": "[題號 161] 質量為 22 kg 的物體在光滑水平面上受到 66 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{66}{22} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci161"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 162] 一電阻值為 23 歐姆之電熱器，接上 46 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{46}{23} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci162"
  },
  {
    "category": "化學-計量",
    "question": "[題號 163] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci163"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 164] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci164"
  },
  {
    "category": "地科-天文",
    "question": "[題號 165] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci165"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 166] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci166"
  },
  {
    "category": "物理-力學",
    "question": "[題號 167] 質量為 23 kg 的物體在光滑水平面上受到 69 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{69}{23} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci167"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 168] 一電阻值為 24 歐姆之電熱器，接上 48 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{48}{24} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci168"
  },
  {
    "category": "化學-計量",
    "question": "[題號 169] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci169"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 170] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci170"
  },
  {
    "category": "地科-天文",
    "question": "[題號 171] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci171"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 172] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci172"
  },
  {
    "category": "物理-力學",
    "question": "[題號 173] 質量為 24 kg 的物體在光滑水平面上受到 72 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{72}{24} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci173"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 174] 一電阻值為 25 歐姆之電熱器，接上 50 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{50}{25} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci174"
  },
  {
    "category": "化學-計量",
    "question": "[題號 175] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci175"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 176] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci176"
  },
  {
    "category": "地科-天文",
    "question": "[題號 177] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci177"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 178] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci178"
  },
  {
    "category": "物理-力學",
    "question": "[題號 179] 質量為 25 kg 的物體在光滑水平面上受到 75 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{75}{25} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci179"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 180] 一電阻值為 26 歐姆之電熱器，接上 52 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{52}{26} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci180"
  },
  {
    "category": "化學-計量",
    "question": "[題號 181] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci181"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 182] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci182"
  },
  {
    "category": "地科-天文",
    "question": "[題號 183] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci183"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 184] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci184"
  },
  {
    "category": "物理-力學",
    "question": "[題號 185] 質量為 26 kg 的物體在光滑水平面上受到 78 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{78}{26} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci185"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 186] 一電阻值為 27 歐姆之電熱器，接上 54 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{54}{27} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci186"
  },
  {
    "category": "化學-計量",
    "question": "[題號 187] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci187"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 188] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci188"
  },
  {
    "category": "地科-天文",
    "question": "[題號 189] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci189"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 190] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci190"
  },
  {
    "category": "物理-力學",
    "question": "[題號 191] 質量為 27 kg 的物體在光滑水平面上受到 81 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{81}{27} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci191"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 192] 一電阻值為 28 歐姆之電熱器，接上 56 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{56}{28} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci192"
  },
  {
    "category": "化學-計量",
    "question": "[題號 193] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci193"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 194] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci194"
  },
  {
    "category": "地科-天文",
    "question": "[題號 195] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci195"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 196] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci196"
  },
  {
    "category": "物理-力學",
    "question": "[題號 197] 質量為 28 kg 的物體在光滑水平面上受到 84 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{84}{28} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci197"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 198] 一電阻值為 29 歐姆之電熱器，接上 58 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{58}{29} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci198"
  },
  {
    "category": "化學-計量",
    "question": "[題號 199] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci199"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 200] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci200"
  },
  {
    "category": "地科-天文",
    "question": "[題號 201] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci201"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 202] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci202"
  },
  {
    "category": "物理-力學",
    "question": "[題號 203] 質量為 29 kg 的物體在光滑水平面上受到 87 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{87}{29} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci203"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 204] 一電阻值為 30 歐姆之電熱器，接上 60 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{60}{30} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci204"
  },
  {
    "category": "化學-計量",
    "question": "[題號 205] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci205"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 206] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci206"
  },
  {
    "category": "地科-天文",
    "question": "[題號 207] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci207"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 208] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci208"
  },
  {
    "category": "物理-力學",
    "question": "[題號 209] 質量為 30 kg 的物體在光滑水平面上受到 90 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{90}{30} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci209"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 210] 一電阻值為 31 歐姆之電熱器，接上 62 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{62}{31} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci210"
  },
  {
    "category": "化學-計量",
    "question": "[題號 211] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci211"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 212] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci212"
  },
  {
    "category": "地科-天文",
    "question": "[題號 213] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci213"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 214] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci214"
  },
  {
    "category": "物理-力學",
    "question": "[題號 215] 質量為 31 kg 的物體在光滑水平面上受到 93 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{93}{31} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci215"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 216] 一電阻值為 32 歐姆之電熱器，接上 64 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{64}{32} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci216"
  },
  {
    "category": "化學-計量",
    "question": "[題號 217] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci217"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 218] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci218"
  },
  {
    "category": "地科-天文",
    "question": "[題號 219] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci219"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 220] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci220"
  },
  {
    "category": "物理-力學",
    "question": "[題號 221] 質量為 32 kg 的物體在光滑水平面上受到 96 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{96}{32} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci221"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 222] 一電阻值為 33 歐姆之電熱器，接上 66 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{66}{33} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci222"
  },
  {
    "category": "化學-計量",
    "question": "[題號 223] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci223"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 224] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci224"
  },
  {
    "category": "地科-天文",
    "question": "[題號 225] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci225"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 226] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci226"
  },
  {
    "category": "物理-力學",
    "question": "[題號 227] 質量為 33 kg 的物體在光滑水平面上受到 99 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{99}{33} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci227"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 228] 一電阻值為 34 歐姆之電熱器，接上 68 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{68}{34} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci228"
  },
  {
    "category": "化學-計量",
    "question": "[題號 229] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci229"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 230] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci230"
  },
  {
    "category": "地科-天文",
    "question": "[題號 231] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci231"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 232] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci232"
  },
  {
    "category": "物理-力學",
    "question": "[題號 233] 質量為 34 kg 的物體在光滑水平面上受到 102 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{102}{34} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci233"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 234] 一電阻值為 35 歐姆之電熱器，接上 70 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{70}{35} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci234"
  },
  {
    "category": "化學-計量",
    "question": "[題號 235] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci235"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 236] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci236"
  },
  {
    "category": "地科-天文",
    "question": "[題號 237] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci237"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 238] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci238"
  },
  {
    "category": "物理-力學",
    "question": "[題號 239] 質量為 35 kg 的物體在光滑水平面上受到 105 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{105}{35} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci239"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 240] 一電阻值為 36 歐姆之電熱器，接上 72 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{72}{36} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci240"
  },
  {
    "category": "化學-計量",
    "question": "[題號 241] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci241"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 242] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci242"
  },
  {
    "category": "地科-天文",
    "question": "[題號 243] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci243"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 244] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci244"
  },
  {
    "category": "物理-力學",
    "question": "[題號 245] 質量為 36 kg 的物體在光滑水平面上受到 108 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{108}{36} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci245"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 246] 一電阻值為 37 歐姆之電熱器，接上 74 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{74}{37} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci246"
  },
  {
    "category": "化學-計量",
    "question": "[題號 247] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci247"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 248] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci248"
  },
  {
    "category": "地科-天文",
    "question": "[題號 249] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci249"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 250] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci250"
  },
  {
    "category": "物理-力學",
    "question": "[題號 251] 質量為 37 kg 的物體在光滑水平面上受到 111 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{111}{37} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci251"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 252] 一電阻值為 38 歐姆之電熱器，接上 76 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{76}{38} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci252"
  },
  {
    "category": "化學-計量",
    "question": "[題號 253] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci253"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 254] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci254"
  },
  {
    "category": "地科-天文",
    "question": "[題號 255] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci255"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 256] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci256"
  },
  {
    "category": "物理-力學",
    "question": "[題號 257] 質量為 38 kg 的物體在光滑水平面上受到 114 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{114}{38} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci257"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 258] 一電阻值為 39 歐姆之電熱器，接上 78 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{78}{39} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci258"
  },
  {
    "category": "化學-計量",
    "question": "[題號 259] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci259"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 260] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci260"
  },
  {
    "category": "地科-天文",
    "question": "[題號 261] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci261"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 262] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci262"
  },
  {
    "category": "物理-力學",
    "question": "[題號 263] 質量為 39 kg 的物體在光滑水平面上受到 117 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{117}{39} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci263"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 264] 一電阻值為 40 歐姆之電熱器，接上 80 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{80}{40} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci264"
  },
  {
    "category": "化學-計量",
    "question": "[題號 265] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci265"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 266] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci266"
  },
  {
    "category": "地科-天文",
    "question": "[題號 267] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci267"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 268] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci268"
  },
  {
    "category": "物理-力學",
    "question": "[題號 269] 質量為 40 kg 的物體在光滑水平面上受到 120 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{120}{40} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci269"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 270] 一電阻值為 41 歐姆之電熱器，接上 82 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{82}{41} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci270"
  },
  {
    "category": "化學-計量",
    "question": "[題號 271] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci271"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 272] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci272"
  },
  {
    "category": "地科-天文",
    "question": "[題號 273] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci273"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 274] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci274"
  },
  {
    "category": "物理-力學",
    "question": "[題號 275] 質量為 41 kg 的物體在光滑水平面上受到 123 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{123}{41} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci275"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 276] 一電阻值為 42 歐姆之電熱器，接上 84 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{84}{42} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci276"
  },
  {
    "category": "化學-計量",
    "question": "[題號 277] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci277"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 278] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci278"
  },
  {
    "category": "地科-天文",
    "question": "[題號 279] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci279"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 280] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci280"
  },
  {
    "category": "物理-力學",
    "question": "[題號 281] 質量為 42 kg 的物體在光滑水平面上受到 126 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{126}{42} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci281"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 282] 一電阻值為 43 歐姆之電熱器，接上 86 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{86}{43} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci282"
  },
  {
    "category": "化學-計量",
    "question": "[題號 283] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci283"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 284] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci284"
  },
  {
    "category": "地科-天文",
    "question": "[題號 285] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci285"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 286] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci286"
  },
  {
    "category": "物理-力學",
    "question": "[題號 287] 質量為 43 kg 的物體在光滑水平面上受到 129 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{129}{43} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci287"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 288] 一電阻值為 44 歐姆之電熱器，接上 88 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{88}{44} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci288"
  },
  {
    "category": "化學-計量",
    "question": "[題號 289] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci289"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 290] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci290"
  },
  {
    "category": "地科-天文",
    "question": "[題號 291] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci291"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 292] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci292"
  },
  {
    "category": "物理-力學",
    "question": "[題號 293] 質量為 44 kg 的物體在光滑水平面上受到 132 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{132}{44} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci293"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 294] 一電阻值為 45 歐姆之電熱器，接上 90 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{90}{45} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci294"
  },
  {
    "category": "化學-計量",
    "question": "[題號 295] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci295"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 296] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci296"
  },
  {
    "category": "地科-天文",
    "question": "[題號 297] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci297"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 298] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci298"
  },
  {
    "category": "物理-力學",
    "question": "[題號 299] 質量為 45 kg 的物體在光滑水平面上受到 135 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{135}{45} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci299"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 300] 一電阻值為 46 歐姆之電熱器，接上 92 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{92}{46} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci300"
  },
  {
    "category": "化學-計量",
    "question": "[題號 301] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci301"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 302] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci302"
  },
  {
    "category": "地科-天文",
    "question": "[題號 303] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci303"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 304] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci304"
  },
  {
    "category": "物理-力學",
    "question": "[題號 305] 質量為 46 kg 的物體在光滑水平面上受到 138 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{138}{46} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci305"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 306] 一電阻值為 47 歐姆之電熱器，接上 94 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{94}{47} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci306"
  },
  {
    "category": "化學-計量",
    "question": "[題號 307] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci307"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 308] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci308"
  },
  {
    "category": "地科-天文",
    "question": "[題號 309] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci309"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 310] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci310"
  },
  {
    "category": "物理-力學",
    "question": "[題號 311] 質量為 47 kg 的物體在光滑水平面上受到 141 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{141}{47} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci311"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 312] 一電阻值為 48 歐姆之電熱器，接上 96 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{96}{48} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci312"
  },
  {
    "category": "化學-計量",
    "question": "[題號 313] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci313"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 314] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci314"
  },
  {
    "category": "地科-天文",
    "question": "[題號 315] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci315"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 316] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci316"
  },
  {
    "category": "物理-力學",
    "question": "[題號 317] 質量為 48 kg 的物體在光滑水平面上受到 144 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{144}{48} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci317"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 318] 一電阻值為 49 歐姆之電熱器，接上 98 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{98}{49} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci318"
  },
  {
    "category": "化學-計量",
    "question": "[題號 319] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci319"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 320] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci320"
  },
  {
    "category": "地科-天文",
    "question": "[題號 321] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci321"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 322] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci322"
  },
  {
    "category": "物理-力學",
    "question": "[題號 323] 質量為 49 kg 的物體在光滑水平面上受到 147 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{147}{49} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci323"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 324] 一電阻值為 50 歐姆之電熱器，接上 100 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{100}{50} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci324"
  },
  {
    "category": "化學-計量",
    "question": "[題號 325] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci325"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 326] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci326"
  },
  {
    "category": "地科-天文",
    "question": "[題號 327] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci327"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 328] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci328"
  },
  {
    "category": "物理-力學",
    "question": "[題號 329] 質量為 50 kg 的物體在光滑水平面上受到 150 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{150}{50} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci329"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 330] 一電阻值為 51 歐姆之電熱器，接上 102 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{102}{51} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci330"
  },
  {
    "category": "化學-計量",
    "question": "[題號 331] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci331"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 332] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci332"
  },
  {
    "category": "地科-天文",
    "question": "[題號 333] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci333"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 334] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci334"
  },
  {
    "category": "物理-力學",
    "question": "[題號 335] 質量為 51 kg 的物體在光滑水平面上受到 153 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{153}{51} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci335"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 336] 一電阻值為 52 歐姆之電熱器，接上 104 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{104}{52} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci336"
  },
  {
    "category": "化學-計量",
    "question": "[題號 337] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci337"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 338] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci338"
  },
  {
    "category": "地科-天文",
    "question": "[題號 339] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci339"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 340] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci340"
  },
  {
    "category": "物理-力學",
    "question": "[題號 341] 質量為 52 kg 的物體在光滑水平面上受到 156 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{156}{52} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci341"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 342] 一電阻值為 53 歐姆之電熱器，接上 106 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{106}{53} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci342"
  },
  {
    "category": "化學-計量",
    "question": "[題號 343] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci343"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 344] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci344"
  },
  {
    "category": "地科-天文",
    "question": "[題號 345] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci345"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 346] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci346"
  },
  {
    "category": "物理-力學",
    "question": "[題號 347] 質量為 53 kg 的物體在光滑水平面上受到 159 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{159}{53} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci347"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 348] 一電阻值為 54 歐姆之電熱器，接上 108 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{108}{54} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci348"
  },
  {
    "category": "化學-計量",
    "question": "[題號 349] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci349"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 350] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci350"
  },
  {
    "category": "地科-天文",
    "question": "[題號 351] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci351"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 352] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci352"
  },
  {
    "category": "物理-力學",
    "question": "[題號 353] 質量為 54 kg 的物體在光滑水平面上受到 162 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{162}{54} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci353"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 354] 一電阻值為 55 歐姆之電熱器，接上 110 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{110}{55} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci354"
  },
  {
    "category": "化學-計量",
    "question": "[題號 355] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci355"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 356] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci356"
  },
  {
    "category": "地科-天文",
    "question": "[題號 357] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci357"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 358] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci358"
  },
  {
    "category": "物理-力學",
    "question": "[題號 359] 質量為 55 kg 的物體在光滑水平面上受到 165 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{165}{55} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci359"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 360] 一電阻值為 56 歐姆之電熱器，接上 112 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{112}{56} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci360"
  },
  {
    "category": "化學-計量",
    "question": "[題號 361] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci361"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 362] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci362"
  },
  {
    "category": "地科-天文",
    "question": "[題號 363] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci363"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 364] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci364"
  },
  {
    "category": "物理-力學",
    "question": "[題號 365] 質量為 56 kg 的物體在光滑水平面上受到 168 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{168}{56} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci365"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 366] 一電阻值為 57 歐姆之電熱器，接上 114 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{114}{57} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci366"
  },
  {
    "category": "化學-計量",
    "question": "[題號 367] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci367"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 368] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci368"
  },
  {
    "category": "地科-天文",
    "question": "[題號 369] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci369"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 370] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci370"
  },
  {
    "category": "物理-力學",
    "question": "[題號 371] 質量為 57 kg 的物體在光滑水平面上受到 171 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{171}{57} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci371"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 372] 一電阻值為 58 歐姆之電熱器，接上 116 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{116}{58} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci372"
  },
  {
    "category": "化學-計量",
    "question": "[題號 373] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci373"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 374] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci374"
  },
  {
    "category": "地科-天文",
    "question": "[題號 375] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci375"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 376] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci376"
  },
  {
    "category": "物理-力學",
    "question": "[題號 377] 質量為 58 kg 的物體在光滑水平面上受到 174 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{174}{58} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci377"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 378] 一電阻值為 59 歐姆之電熱器，接上 118 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{118}{59} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci378"
  },
  {
    "category": "化學-計量",
    "question": "[題號 379] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci379"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 380] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci380"
  },
  {
    "category": "地科-天文",
    "question": "[題號 381] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci381"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 382] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci382"
  },
  {
    "category": "物理-力學",
    "question": "[題號 383] 質量為 59 kg 的物體在光滑水平面上受到 177 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{177}{59} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci383"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 384] 一電阻值為 60 歐姆之電熱器，接上 120 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{120}{60} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci384"
  },
  {
    "category": "化學-計量",
    "question": "[題號 385] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci385"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 386] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci386"
  },
  {
    "category": "地科-天文",
    "question": "[題號 387] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci387"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 388] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci388"
  },
  {
    "category": "物理-力學",
    "question": "[題號 389] 質量為 60 kg 的物體在光滑水平面上受到 180 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{180}{60} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci389"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 390] 一電阻值為 61 歐姆之電熱器，接上 122 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{122}{61} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci390"
  },
  {
    "category": "化學-計量",
    "question": "[題號 391] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci391"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 392] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci392"
  },
  {
    "category": "地科-天文",
    "question": "[題號 393] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci393"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 394] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci394"
  },
  {
    "category": "物理-力學",
    "question": "[題號 395] 質量為 61 kg 的物體在光滑水平面上受到 183 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{183}{61} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci395"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 396] 一電阻值為 62 歐姆之電熱器，接上 124 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{124}{62} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci396"
  },
  {
    "category": "化學-計量",
    "question": "[題號 397] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci397"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 398] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci398"
  },
  {
    "category": "地科-天文",
    "question": "[題號 399] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci399"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 400] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci400"
  },
  {
    "category": "物理-力學",
    "question": "[題號 401] 質量為 62 kg 的物體在光滑水平面上受到 186 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{186}{62} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci401"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 402] 一電阻值為 63 歐姆之電熱器，接上 126 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{126}{63} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci402"
  },
  {
    "category": "化學-計量",
    "question": "[題號 403] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci403"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 404] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci404"
  },
  {
    "category": "地科-天文",
    "question": "[題號 405] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci405"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 406] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci406"
  },
  {
    "category": "物理-力學",
    "question": "[題號 407] 質量為 63 kg 的物體在光滑水平面上受到 189 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{189}{63} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci407"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 408] 一電阻值為 64 歐姆之電熱器，接上 128 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{128}{64} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci408"
  },
  {
    "category": "化學-計量",
    "question": "[題號 409] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci409"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 410] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci410"
  },
  {
    "category": "地科-天文",
    "question": "[題號 411] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci411"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 412] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci412"
  },
  {
    "category": "物理-力學",
    "question": "[題號 413] 質量為 64 kg 的物體在光滑水平面上受到 192 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{192}{64} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci413"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 414] 一電阻值為 65 歐姆之電熱器，接上 130 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{130}{65} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci414"
  },
  {
    "category": "化學-計量",
    "question": "[題號 415] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci415"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 416] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci416"
  },
  {
    "category": "地科-天文",
    "question": "[題號 417] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci417"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 418] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci418"
  },
  {
    "category": "物理-力學",
    "question": "[題號 419] 質量為 65 kg 的物體在光滑水平面上受到 195 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{195}{65} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci419"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 420] 一電阻值為 66 歐姆之電熱器，接上 132 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{132}{66} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci420"
  },
  {
    "category": "化學-計量",
    "question": "[題號 421] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci421"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 422] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci422"
  },
  {
    "category": "地科-天文",
    "question": "[題號 423] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci423"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 424] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci424"
  },
  {
    "category": "物理-力學",
    "question": "[題號 425] 質量為 66 kg 的物體在光滑水平面上受到 198 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{198}{66} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci425"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 426] 一電阻值為 67 歐姆之電熱器，接上 134 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{134}{67} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci426"
  },
  {
    "category": "化學-計量",
    "question": "[題號 427] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci427"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 428] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci428"
  },
  {
    "category": "地科-天文",
    "question": "[題號 429] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci429"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 430] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci430"
  },
  {
    "category": "物理-力學",
    "question": "[題號 431] 質量為 67 kg 的物體在光滑水平面上受到 201 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{201}{67} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci431"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 432] 一電阻值為 68 歐姆之電熱器，接上 136 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{136}{68} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci432"
  },
  {
    "category": "化學-計量",
    "question": "[題號 433] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci433"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 434] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci434"
  },
  {
    "category": "地科-天文",
    "question": "[題號 435] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci435"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 436] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci436"
  },
  {
    "category": "物理-力學",
    "question": "[題號 437] 質量為 68 kg 的物體在光滑水平面上受到 204 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{204}{68} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci437"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 438] 一電阻值為 69 歐姆之電熱器，接上 138 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{138}{69} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci438"
  },
  {
    "category": "化學-計量",
    "question": "[題號 439] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci439"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 440] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci440"
  },
  {
    "category": "地科-天文",
    "question": "[題號 441] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci441"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 442] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci442"
  },
  {
    "category": "物理-力學",
    "question": "[題號 443] 質量為 69 kg 的物體在光滑水平面上受到 207 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{207}{69} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci443"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 444] 一電阻值為 70 歐姆之電熱器，接上 140 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{140}{70} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci444"
  },
  {
    "category": "化學-計量",
    "question": "[題號 445] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci445"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 446] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci446"
  },
  {
    "category": "地科-天文",
    "question": "[題號 447] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci447"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 448] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci448"
  },
  {
    "category": "物理-力學",
    "question": "[題號 449] 質量為 70 kg 的物體在光滑水平面上受到 210 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{210}{70} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci449"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 450] 一電阻值為 71 歐姆之電熱器，接上 142 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{142}{71} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci450"
  },
  {
    "category": "化學-計量",
    "question": "[題號 451] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci451"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 452] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci452"
  },
  {
    "category": "地科-天文",
    "question": "[題號 453] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci453"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 454] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci454"
  },
  {
    "category": "物理-力學",
    "question": "[題號 455] 質量為 71 kg 的物體在光滑水平面上受到 213 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{213}{71} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci455"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 456] 一電阻值為 72 歐姆之電熱器，接上 144 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{144}{72} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci456"
  },
  {
    "category": "化學-計量",
    "question": "[題號 457] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci457"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 458] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci458"
  },
  {
    "category": "地科-天文",
    "question": "[題號 459] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci459"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 460] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci460"
  },
  {
    "category": "物理-力學",
    "question": "[題號 461] 質量為 72 kg 的物體在光滑水平面上受到 216 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{216}{72} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci461"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 462] 一電阻值為 73 歐姆之電熱器，接上 146 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{146}{73} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci462"
  },
  {
    "category": "化學-計量",
    "question": "[題號 463] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci463"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 464] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci464"
  },
  {
    "category": "地科-天文",
    "question": "[題號 465] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci465"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 466] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci466"
  },
  {
    "category": "物理-力學",
    "question": "[題號 467] 質量為 73 kg 的物體在光滑水平面上受到 219 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{219}{73} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci467"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 468] 一電阻值為 74 歐姆之電熱器，接上 148 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{148}{74} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci468"
  },
  {
    "category": "化學-計量",
    "question": "[題號 469] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci469"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 470] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci470"
  },
  {
    "category": "地科-天文",
    "question": "[題號 471] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci471"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 472] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci472"
  },
  {
    "category": "物理-力學",
    "question": "[題號 473] 質量為 74 kg 的物體在光滑水平面上受到 222 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{222}{74} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci473"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 474] 一電阻值為 75 歐姆之電熱器，接上 150 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{150}{75} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci474"
  },
  {
    "category": "化學-計量",
    "question": "[題號 475] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci475"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 476] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci476"
  },
  {
    "category": "地科-天文",
    "question": "[題號 477] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci477"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 478] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci478"
  },
  {
    "category": "物理-力學",
    "question": "[題號 479] 質量為 75 kg 的物體在光滑水平面上受到 225 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{225}{75} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci479"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 480] 一電阻值為 76 歐姆之電熱器，接上 152 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{152}{76} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci480"
  },
  {
    "category": "化學-計量",
    "question": "[題號 481] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci481"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 482] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci482"
  },
  {
    "category": "地科-天文",
    "question": "[題號 483] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci483"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 484] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci484"
  },
  {
    "category": "物理-力學",
    "question": "[題號 485] 質量為 76 kg 的物體在光滑水平面上受到 228 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{228}{76} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci485"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 486] 一電阻值為 77 歐姆之電熱器，接上 154 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{154}{77} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci486"
  },
  {
    "category": "化學-計量",
    "question": "[題號 487] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci487"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 488] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci488"
  },
  {
    "category": "地科-天文",
    "question": "[題號 489] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci489"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 490] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci490"
  },
  {
    "category": "物理-力學",
    "question": "[題號 491] 質量為 77 kg 的物體在光滑水平面上受到 231 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{231}{77} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci491"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 492] 一電阻值為 78 歐姆之電熱器，接上 156 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{156}{78} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci492"
  },
  {
    "category": "化學-計量",
    "question": "[題號 493] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci493"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 494] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci494"
  },
  {
    "category": "地科-天文",
    "question": "[題號 495] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci495"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 496] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci496"
  },
  {
    "category": "物理-力學",
    "question": "[題號 497] 質量為 78 kg 的物體在光滑水平面上受到 234 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{234}{78} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci497"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 498] 一電阻值為 79 歐姆之電熱器，接上 158 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{158}{79} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci498"
  },
  {
    "category": "化學-計量",
    "question": "[題號 499] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci499"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 500] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci500"
  },
  {
    "category": "地科-天文",
    "question": "[題號 501] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci501"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 502] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci502"
  },
  {
    "category": "物理-力學",
    "question": "[題號 503] 質量為 79 kg 的物體在光滑水平面上受到 237 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{237}{79} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci503"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 504] 一電阻值為 80 歐姆之電熱器，接上 160 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{160}{80} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci504"
  },
  {
    "category": "化學-計量",
    "question": "[題號 505] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci505"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 506] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci506"
  },
  {
    "category": "地科-天文",
    "question": "[題號 507] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci507"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 508] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci508"
  },
  {
    "category": "物理-力學",
    "question": "[題號 509] 質量為 80 kg 的物體在光滑水平面上受到 240 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{240}{80} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci509"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 510] 一電阻值為 81 歐姆之電熱器，接上 162 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{162}{81} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci510"
  },
  {
    "category": "化學-計量",
    "question": "[題號 511] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci511"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 512] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci512"
  },
  {
    "category": "地科-天文",
    "question": "[題號 513] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci513"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 514] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci514"
  },
  {
    "category": "物理-力學",
    "question": "[題號 515] 質量為 81 kg 的物體在光滑水平面上受到 243 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{243}{81} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci515"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 516] 一電阻值為 82 歐姆之電熱器，接上 164 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{164}{82} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci516"
  },
  {
    "category": "化學-計量",
    "question": "[題號 517] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci517"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 518] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci518"
  },
  {
    "category": "地科-天文",
    "question": "[題號 519] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci519"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 520] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci520"
  },
  {
    "category": "物理-力學",
    "question": "[題號 521] 質量為 82 kg 的物體在光滑水平面上受到 246 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{246}{82} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci521"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 522] 一電阻值為 83 歐姆之電熱器，接上 166 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{166}{83} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci522"
  },
  {
    "category": "化學-計量",
    "question": "[題號 523] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci523"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 524] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci524"
  },
  {
    "category": "地科-天文",
    "question": "[題號 525] 觀測者在北緯 25^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "25°",
      "65°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci525"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 526] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci526"
  },
  {
    "category": "物理-力學",
    "question": "[題號 527] 質量為 83 kg 的物體在光滑水平面上受到 249 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{249}{83} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci527"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 528] 一電阻值為 84 歐姆之電熱器，接上 168 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{168}{84} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci528"
  },
  {
    "category": "化學-計量",
    "question": "[題號 529] 某純水（分子量 $M = 18$ g/mol）樣本質量為 54 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "3 莫耳",
      "6 莫耳",
      "1.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{54}{18} = 3$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci529"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 530] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci530"
  },
  {
    "category": "地科-天文",
    "question": "[題號 531] 觀測者在北緯 30^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "30°",
      "60°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci531"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 532] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci532"
  },
  {
    "category": "物理-力學",
    "question": "[題號 533] 質量為 84 kg 的物體在光滑水平面上受到 252 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{252}{84} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci533"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 534] 一電阻值為 85 歐姆之電熱器，接上 170 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{170}{85} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci534"
  },
  {
    "category": "化學-計量",
    "question": "[題號 535] 某純水（分子量 $M = 18$ g/mol）樣本質量為 72 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "4 莫耳",
      "8 莫耳",
      "2 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{72}{18} = 4$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci535"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 536] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci536"
  },
  {
    "category": "地科-天文",
    "question": "[題號 537] 觀測者在北緯 35^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "35°",
      "55°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci537"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 538] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci538"
  },
  {
    "category": "物理-力學",
    "question": "[題號 539] 質量為 85 kg 的物體在光滑水平面上受到 255 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{255}{85} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci539"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 540] 一電阻值為 86 歐姆之電熱器，接上 172 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{172}{86} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci540"
  },
  {
    "category": "化學-計量",
    "question": "[題號 541] 某純水（分子量 $M = 18$ g/mol）樣本質量為 18 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "1 莫耳",
      "2 莫耳",
      "0.5 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{18}{18} = 1$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci541"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 542] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci542"
  },
  {
    "category": "地科-天文",
    "question": "[題號 543] 觀測者在北緯 40^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "40°",
      "50°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci543"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 544] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci544"
  },
  {
    "category": "物理-力學",
    "question": "[題號 545] 質量為 86 kg 的物體在光滑水平面上受到 258 N 的水平恆力作用，其加速度大小為多少 $\\text{m/s}^2$？",
    "options": [
      "3 m/s²",
      "2 m/s²",
      "4 m/s²",
      "6 m/s²"
    ],
    "answer": 0,
    "explanation": "牛頓第二定律：$a = \\frac{F}{m} = \\frac{258}{86} = 3 \\text{ m/s}^2$。",
    "difficulty": "基礎",
    "id": "sci545"
  },
  {
    "category": "物理-電磁學",
    "question": "[題號 546] 一電阻值為 87 歐姆之電熱器，接上 174 伏特之直流電源，通過該電阻的電流強度為多少安培？",
    "options": [
      "2 安培",
      "1 安培",
      "4 安培",
      "0.5 安培"
    ],
    "answer": 0,
    "explanation": "歐姆定律：$I = \\frac{V}{R} = \\frac{174}{87} = 2$ 安培。",
    "difficulty": "基礎",
    "id": "sci546"
  },
  {
    "category": "化學-計量",
    "question": "[題號 547] 某純水（分子量 $M = 18$ g/mol）樣本質量為 36 公克，該水分子樣本共含有多少莫耳的水？",
    "options": [
      "2 莫耳",
      "4 莫耳",
      "1 莫耳",
      "18 莫耳"
    ],
    "answer": 0,
    "explanation": "莫耳數公式：$n = \\frac{m}{M} = \\frac{36}{18} = 2$ 莫耳。",
    "difficulty": "基礎",
    "id": "sci547"
  },
  {
    "category": "生物-遺傳學",
    "question": "[題號 548] 人類體細胞正常具有 46 條染色體（23 對），則人類正常成熟精子細胞中含有幾條染色體？",
    "options": [
      "23 條（含 22 條常染色體 + 1 條性染色體 X 或 Y）",
      "46 條",
      "24 條",
      "22 條"
    ],
    "answer": 0,
    "explanation": "精子為經減數分裂產生的單倍體配子（n），染色體數目減半為 23 條（22+X 或 22+Y）。",
    "difficulty": "基礎",
    "id": "sci548"
  },
  {
    "category": "地科-天文",
    "question": "[題號 549] 觀測者在北緯 20^\\circ$ 的臺北夜空仰望北極星，則測得北極星之仰角約為多少度？",
    "options": [
      "20°",
      "70°",
      "90°",
      "0°"
    ],
    "answer": 0,
    "explanation": "天文幾何鐵則：在北半球任何地點，仰望北極星的仰角恰好等於該觀測地的地理緯度！",
    "difficulty": "中等",
    "id": "sci549"
  },
  {
    "category": "地科-大氣",
    "question": "[題號 550] 大氣層中臭氧層（吸收紫外線使溫度隨高度上升）主要分布於哪一個垂直分層？",
    "options": [
      "平流層",
      "對流層",
      "中氣層",
      "熱氣層（增溫層）"
    ],
    "answer": 0,
    "explanation": "平流層（約 10~50 km）含有臭氧層，因吸收太陽紫外光輻射而使氣溫隨高度升高，大氣層結極為穩定。",
    "difficulty": "基礎",
    "id": "sci550"
  }
];
