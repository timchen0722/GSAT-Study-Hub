const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'science-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Science count before batch 4: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Science
const batch4 = [
  {
    category: "物理-力學",
    question: "在質點直線運動的「速度-時間圖（$v-t$ 圖）」中，圖線與時間軸（$t$ 軸）所包圍的封閉區域幾何「面積」，在物理學上代表該質點的？",
    options: ["位移大小（Displacement）", "瞬時加速度", "平均速度", "作用力合力"],
    answer: 0,
    explanation: "速度定義為 $v = \\frac{dx}{dt} \\implies dx = v dt$。對時間積分得位移 $\\Delta x = \\int v dt$，故 $v-t$ 圖曲線下面積直接代表該時段內的總位移（$t$ 軸上方為正位移，$t$ 軸下方為負位移）。",
    difficulty: "基礎"
  },
  {
    category: "物理-力學",
    question: "質量為 $m$ 的物體置於傾角為 $\\theta$ 的固定光滑斜面上。該物體沿斜面下滑時所受到的下滑合力大小為何？（重力加速度為 $g$）",
    options: ["$m g \\sin\\theta$", "$m g \\cos\\theta$", "$m g$", "$m g \\tan\\theta$"],
    answer: 0,
    explanation: "重力分解：垂直斜面方向之分力為 $m g \\cos\\theta$（與斜面正向力平衡）；沿斜面向下之重力分力為 $m g \\sin\\theta$，因斜面光滑無摩擦力，此分力即為物體下滑之合力，產生加速度 $a = g \\sin\\theta$。",
    difficulty: "基礎"
  },
  {
    category: "物理-力學與流體",
    question: "飛機機翼設計成「上方隆起弧形、下方平直」的特殊流線形狀，當飛機高速前進時，機翼上方空氣流速大於下方，產生向上的舉力使客機升空。這項航空力學現象主要是應用下列哪一個物理原理？",
    options: ["白努力定律（Bernoulli's Principle，流速越大處流體內部壓力越小）", "帕斯卡原理", "阿基米德浮力定律", "虎克定律"],
    answer: 0,
    explanation: "白努力方程揭示流體流速與壓強的動態平衡：機翼上方空氣流速高、動壓大，靜壓因而降低；機翼下方空氣流速慢、靜壓較大。上下翼面形成巨大壓力差產生向上垂直升力。",
    difficulty: "基礎"
  },
  {
    category: "物理-電磁學",
    question: "發電機發電的核心物理機轉遵循「法拉第電磁感應定律」。當穿過一個封閉金屬線圈的磁通量發生變化時，線圈中所產生的感應電動勢（Induced EMF）大小與下列何者成正比？",
    options: ["穿過線圈的「磁通量隨時間的變化率（$\\frac{\\Delta\\Phi}{\\Delta t}$）」", "線圈的總電阻大小", "線圈所處的環境溫度", "永久磁鐵的重量"],
    answer: 0,
    explanation: "法拉第定律：感應電動勢 $\\mathcal{E} = -N \\frac{d\\Phi}{dt}$。感應電動勢強度直接由單位時間內磁通量變化的快慢決定，磁通量變化越劇烈，產生的感應電壓越高。",
    difficulty: "基礎"
  },
  {
    category: "物理-近代物理",
    question: "愛因斯坦因成功解釋「光電效應」而榮獲諾貝爾物理學獎。在光電效應實驗中，當入射光頻率高於金屬的底限頻率時，下列關於逸出光電子的敘述何者完全正確？",
    options: ["金屬表面所逸出光電子的「最大初動能」，僅取決於入射光的「頻率（能量）」，而與入射光的「強度（亮度）」完全無關", "入射光強度越大，光電子的最大動能越大", "光照射在金屬表面需要數分鐘蓄積能量才能逸出光電子", "頻率低於底限頻率的光只要照射時間夠長也能產生光電子"],
    answer: 0,
    explanation: "光子說：單個電子吸收單個光子能量 $h\\nu$。逸出功為 $W$，光電子最大動能 $K_{\\text{max}} = h\\nu - W$ 僅由光子頻率 $\\nu$ 決定；光強度只代表單位時間的光子數目，僅影響溢出的光電子數目（光電流大小）。",
    difficulty: "中等"
  },
  {
    category: "化學-氣體與計量",
    question: "在標準大氣條件（STP：溫度 0°C 即 273 K，壓力 1.0 atm）下，1 莫耳（mol）的任何理想氣體，其所佔據的體積大小約為多少公升？",
    options: ["22.4 公升（L）", "24.5 公升", "1.0 公升", "11.2 公升"],
    answer: 0,
    explanation: "由理想氣體方程式 $PV = nRT$：$V = \\frac{nRT}{P} = \\frac{1 \\times 0.082 \\times 273}{1.0} \\approx 22.4$ 公升。而在常溫常壓（NTP：25°C, 1 atm）下則約為 24.5 公升。",
    difficulty: "基礎"
  },
  {
    category: "化學-物質構造",
    question: "水（$\\text{H}_2\\text{O}$，沸點 100°C）相較於同族氫化物（硫化氫 $\\text{H}_2\\text{S}$ 沸點 -60°C、硒化氫 $\\text{H}_2\\text{Se}$）具有反常奇高的沸點與比熱容量，其最主要的化學本質原因為？",
    options: ["水分子之間能形成強固的「氫鍵（Hydrogen Bond）」分子間作用力", "水分子內部具有極強的三重共價鍵", "水分子是完全非極性分子", "水分子在常溫下會自發核聚變"],
    answer: 0,
    explanation: "氧原子電負度極大且半徑極小，水分子具有極高偶極矩，分子間形成強烈的網狀氫鍵，破壞氫鍵汽化需要吸收巨大能量，致使水具備反常極高的沸點與巨大比熱容。",
    difficulty: "基礎"
  },
  {
    category: "化學-化學平衡",
    question: "對於一個已經達到動態平衡的化學反應體系，下列各項外部操作條件中，哪一項是「唯一能夠改變該反應化學平衡常數 $K$ 數值」的因素？",
    options: ["改變反應體系的「溫度」", "在體系中加入高效化學催化劑", "壓縮反應容器改變體積與總壓", "成倍增加反應物的初始起始濃度"],
    answer: 0,
    explanation: "平衡常數 $K$ 是溫度的單值函數，數值僅隨溫度改變（吸熱反應升溫 $K$ 增大，放熱反應升溫 $K$ 減小）；催化劑、壓力與濃度改變只會暫時改變反應商 $Q$ 使平衡移動，不能改變 $K$ 值本身。",
    difficulty: "中等"
  },
  {
    category: "化學-有機",
    question: "在有機化學反應中，乙烯（$\\text{C}_2\\text{H}_4$，含有碳-碳雙鍵）通入紅棕色的溴水（$\\text{Br}_2$ 溶液）中，能使溴水迅速褪色變為無色，這種特徵反應屬於何種反應類型？",
    options: ["加成反應（Addition Reaction，生成無色的 1,2-二溴乙烷）", "取代反應", "酯化反應", "縮聚反應"],
    answer: 0,
    explanation: "乙烯中碳-碳雙鍵的 $\\pi$ 鍵較脆弱易斷裂，與鹵素單質 $\\text{Br}_2$ 發生親電加成反應：$\\text{CH}_2=\\text{CH}_2 + \\text{Br}_2 \\rightarrow \\text{CH}_2\\text{Br}-\\text{CH}_2\\text{Br}$，使溴水迅速褪色，常用於檢驗不飽和烴雙鍵。",
    difficulty: "基礎"
  },
  {
    category: "生物-細胞分裂",
    question: "真核生物在形成精子或卵細胞等配子的過程中所進行的細胞分裂方式為「減數分裂（Meiosis）」。經過減數分裂連續兩次細胞分裂後，單個生殖母細胞所產生的子細胞特徵為？",
    options: ["產生 4 個子細胞，每個子細胞中的染色體數目減半（$2n \\rightarrow n$）", "產生 2 個子細胞，染色體數目保持不變（$2n \\rightarrow 2n$）", "產生 2 個子細胞，染色體數目加倍", "產生 8 個子細胞"],
    answer: 0,
    explanation: "減數分裂 DNA 複製 1 次，細胞連續分裂 2 次（減數分裂 I 同源染色體分離，減數分裂 II 姊妹染色分體分離），最終產生 4 個染色體減半（單倍體 $n$）且基因重組的配子。",
    difficulty: "基礎"
  },
  {
    category: "生物-細胞與分子",
    question: "在分子生物學中心法則（Central Dogma）中，以細胞核中的 DNA 模板股為藍本，在 RNA 聚合酶催化下合成單股前驅 mRNA 的生化過程稱為？",
    options: ["轉錄作用（Transcription）", "轉譯作用（Translation）", "逆轉錄作用", "DNA 複製"],
    answer: 0,
    explanation: "遺傳訊息流動：DNA $\\xrightarrow{\\text{轉錄}}$ mRNA $\\xrightarrow{\\text{轉譯}}$ 蛋白質。在細胞核內以 DNA 一股為模板合成 mRNA 之過程稱為轉錄。",
    difficulty: "基礎"
  },
  {
    category: "生物-遺傳與演化",
    question: "孟德爾利用豌豆雜交實驗提出「遺傳第二定律（自由配合律/獨立分配律）」。若將基因型為黃色圓粒純合子（$YYRR$）與綠色皺粒純合子（$yyrr$）親代雜交，所得子一代（$YyRr$）自交產生子二代（$F_2$），其四種表現型的分離比例預期為？",
    options: ["黃圓 : 黃皺 : 綠圓 : 綠皺 $= 9 : 3 : 3 : 1$", "3 : 1", "1 : 1 : 1 : 1", "1 : 2 : 1"],
    answer: 0,
    explanation: "兩對控制不同性狀的等位基因位於非同源染色體上時，減數分裂中彼此獨立分配。兩對雜合子雜交（$(3:1)(3:1)$）展開即為經典的 9:3:3:1 表現型比例。",
    difficulty: "基礎"
  },
  {
    category: "生物-動物生理",
    question: "在神經系統調節的「反射弧（Reflex Arc）」傳導路徑中，神經衝動在體內依序傳導的標準生理解剖路徑為？",
    options: ["受器 $\\rightarrow$ 感覺神經元（傳入神經） $\\rightarrow$ 神經中樞（聯絡神經元） $\\rightarrow$ 運動神經元（傳出神經） $\\rightarrow$ 動器（肌肉或腺體）", "動器 $\\rightarrow$ 運動神經元 $\\rightarrow$ 中樞 $\\rightarrow$ 感覺神經元 $\\rightarrow$ 受器", "中樞 $\\rightarrow$ 受器 $\\rightarrow$ 動器", "受器 $\\rightarrow$ 運動神經元 $\\rightarrow$ 感覺神經元 $\\rightarrow$ 動器"],
    answer: 0,
    explanation: "反射弧五大構成要件：感受器感受外界刺激 $\\rightarrow$ 傳入感覺神經元將信號輸入脊髓/腦中樞 $\\rightarrow$ 聯絡神經元整合 $\\rightarrow$ 傳出運動神經元發出指令 $\\rightarrow$ 效應器（動器）產生肌肉收縮或分泌反應。",
    difficulty: "基礎"
  },
  {
    category: "生物-植物生理",
    question: "高聳達數十甚至上百公尺的巨木（如紅檜、美洲紅杉），能夠將地下根部吸收的水分源源不絕向上輸送至頂端樹葉，其最主要的長程水分向上運輸驅動力為？",
    options: ["葉片氣孔的「蒸散作用拉力（Transpiration pull）」，配合水分子之間的內聚力與附著力", "根部細胞的主動逆滲透壓力", "大氣重力下沉擠壓", "植物心臟的機械跳動泵送"],
    answer: 0,
    explanation: "「內聚力-張力學說（Cohesion-Tension Theory）」：葉肉細胞水分自氣孔蒸發產生巨大負壓張力（蒸散拉力），藉由水分子間強大的氫鍵內聚力，在木質部導管內形成連續不中斷的水柱被抽吸至樹冠百米高空。",
    difficulty: "基礎"
  },
  {
    category: "生物-生態與環境",
    question: "在地球生物圈的碳循環（Carbon Cycle）中，下列哪一生理代謝作用是「自大氣中吸收固定二氧化碳、將無機碳轉化為儲存在生物體內的有機碳」的核心生化途徑？",
    options: ["綠色植物、藻類與光合細菌的「光合作用（Photosynthesis）」", "動物的呼吸作用", "土壤真菌與細菌的腐生分解作用", "化石燃料的燃燒"],
    answer: 0,
    explanation: "光合作用是地球大氣碳循環唯一的龐大碳匯（Carbon sink），藉由卡爾文循環將大氣中游離的 $\\text{CO}_2$ 固定合成葡萄糖有機物；而呼吸作用與燃燒則將有機碳重新釋放為二氧化碳。",
    difficulty: "基礎"
  },
  {
    category: "地科-固體地球與板塊",
    question: "地震發生時，地下震源會向外輻射出體積地震波，包括 P 波（初波/縱波）與 S 波（次波/橫波）。下列關於兩者傳播特性的比較何者完全正確？",
    options: ["P 波為縱波傳播速度較快，能在固體、液體與氣體中傳播；S 波為橫波速度較慢，只能在「固體」介質中傳播", "S 波傳播速度快於 P 波", "S 波可以穿過液態的地球外核", "P 波無法在岩石固體中傳播"],
    answer: 0,
    explanation: "P 波（質點震動平行波傳播方向）為疏密波，速度最快最先到達測站；S 波（質點震動垂直波傳播方向）為剪切波，液體與氣體無法承受剪切應變，故 S 波無法穿過液態的「地球外地核」，這一現象直接證實了地球外核為液態金屬。",
    difficulty: "中等"
  },
  {
    category: "地科-固體地球與板塊",
    question: "在地質學判定地層相對形成年代時，若觀察到一條火成岩脈「截切穿透」了數層水平沉積岩層，依據地質學「截切定律（Law of Cross-Cutting Relationships）」，下列年代先後判定何者正確？",
    options: ["被截切的沉積岩層形成年代較老，而截切穿透它們的火成岩脈形成年代較新", "火成岩脈年代必定較老", "兩者必定在同一瞬間同時形成", "無法判斷年代"],
    answer: 0,
    explanation: "截切定律基本法則：侵入體或斷層的年代必然年輕於被其切穿、破壞的既有周圍圍岩岩層（必須先有既成岩石存在，岩漿才能切穿侵入其中）。",
    difficulty: "基礎"
  },
  {
    category: "地科-大氣與氣候",
    question: "地球大氣垂直分層中，大氣平流層（Stratosphere，高度約 10~50 公里）中氣溫隨高度升高而上升，且能有效吸收絕大部分致命太陽短波紫外輻射（UV-B）的大氣特殊成分是？",
    options: ["臭氧層（Ozone Layer，最高濃度在 20~25 公里處）", "水氣對流層", "二氧化碳溫室層", "電離層"],
    answer: 0,
    explanation: "平流層中的臭氧分子（$\\text{O}_3$）強烈吸收太陽波長 200~300 nm 的高能紫外光分解並重組，將輻射能轉化為熱能，使平流層上部增溫，同時為地表生命提供無可替代的天然防護遮陽傘。",
    difficulty: "基礎"
  },
  {
    category: "地科-海洋與水文",
    question: "沿岸風力驅使表層海水離岸流動時，底層低溫、高密度且富含大量硝酸鹽、磷酸鹽等營養鹽的深層海水會向上流動補充，這種海洋現象稱為「湧升流（Upwelling）」。湧升流海域對海洋生態與經濟的最大影響為？",
    options: ["浮游植物爆發性繁衍，吸引大量魚群聚集，形成全球產量極其豐饒的著名大漁場（如南美祕魯漁場）", "導致海水完全缺氧魚類集體死亡", "引發沿岸海嘯災害", "使沿岸海水變成淡水"],
    answer: 0,
    explanation: "深層營養鹽被帶至透光表層，浮游植物進行旺盛光合作用，支撐起極度龐大的海洋食物鏈金字塔底座，全球湧升流海區面積僅佔海洋 0.5%，卻貢獻了全球近半數的海洋漁獲捕撈量。",
    difficulty: "基礎"
  },
  {
    category: "地科-天文與宇宙",
    question: "太陽系八大行星中，金星（Venus）距離太陽並非最近（水星更近），但金星表面平均溫度卻高達 460°C 以上、為全太陽系最熾熱的行星地獄。金星擁有極端極高表面溫度的主要原因為？",
    options: ["金星大氣層極其濃密厚重（地表大氣壓約 90 個地球大氣壓），且大氣成分高達 96% 為二氧化碳，引發了極端失控的「暴衝溫室效應（Runaway Greenhouse Effect）」", "金星內部進行熱核融合反應", "金星表面覆蓋厚厚的液態金屬汞", "金星自轉速度過快摩擦生熱"],
    answer: 0,
    explanation: "金星大氣壓高達地球的 92 倍且幾乎全為超臨界 $\\text{CO}_2$，強烈的紅外線長波吸收使熱量完全無法輻射散逸至外太空，失控的溫室效應使表面鉛錫皆融化，成為太陽系最熱行星。",
    difficulty: "中等"
  },
  {
    category: "地科-天文與宇宙",
    question: "近代宇宙學確立「大爆炸宇宙論（Big Bang Theory）」為現代宇宙起源標準模型，其中在 1965 年由彭齊亞斯與威爾遜無意中探測到、充斥在整個宇宙中各向同性的 2.725 K 微弱微波熱輻射，天文學上稱為？",
    options: ["宇宙微波背景輻射（CMBR，宇宙大爆炸時遺留下來的「第一道太初曙光餘溫」）", "太陽風粒子流", "仙女座大星系射電暴", "地球磁層反彈波"],
    answer: 0,
    explanation: "大爆炸後約 38 萬年宇宙降溫至 3000 K，電子與質子復合成中性原子，光子從此自由穿行（退耦）。隨宇宙膨脹紅移至今，此太初黑體輻射被拉長至毫米微波波段（對應溫度約 2.73 K）。",
    difficulty: "基礎"
  },
  {
    category: "物理-電磁學",
    question: "將三個阻值皆為 $6\\,\\Omega$ 的相同電阻進行「並聯」，該並聯電路系統的等效總電阻大小為多少歐姆？",
    options: ["2 歐姆（$2\\,\\Omega$）", "18 歐姆", "6 歐姆", "3 歐姆"],
    answer: 0,
    explanation: "並聯總電阻公式：$\\frac{1}{R_{\\text{總}}} = \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} = \\frac{3}{6} = \\frac{1}{2} \\implies R_{\\text{總}} = 2\\,\\Omega$。",
    difficulty: "基礎"
  },
  {
    category: "化學-酸鹼與環境",
    question: "在環境科學中，因燃燒化石燃料排放二氧化硫（$\\text{SO}_2$）與氮氧化物（$\\text{NO}_x$）在大氣中氧化溶於水滴形成稀硫酸與硝酸降落。國際上通常將降水之 pH 值低於多少定義為「酸雨」？",
    options: ["pH < 5.0", "pH < 7.0", "pH < 6.5", "pH < 2.0"],
    answer: 0,
    explanation: "正常未受污染雨水因溶解大氣中自然二氧化碳形成弱碳酸（$\\text{H}_2\\text{CO}_3$），其飽和平衡 pH 值約為 5.6。因此環境監測普遍以 pH 值小於 5.0（或 5.6）作為判定人為酸雨之界線。",
    difficulty: "基礎"
  },
  {
    category: "生物-人體生理",
    question: "在人體體溫恆定維持機制中，負責整合體表冷熱感受器信號，並調控骨骼肌發抖產熱、汗腺排汗散熱及皮膚微血管舒縮的體溫調節「最高神經中樞」為？",
    options: ["下視丘（Hypothalamus）", "小腦", "脊髓", "大腦顳葉"],
    answer: 0,
    explanation: "下視丘是自主神經系統與內分泌調節的最高整合中樞，其內含有體溫調節中樞，宛如人體內建恆溫器（Thermostat），精確將核心體溫鎖定在約 37°C 狹小範圍內。",
    difficulty: "基礎"
  },
  {
    category: "生物-動物生理",
    question: "在人體血液循環系統中，負責將富含氧氣的「鮮紅充氧血」以極高壓力泵入「主動脈」送往全身各器官組織（體循環）的心臟腔室為？",
    options: ["左心室（心室壁肌肉層最為肥厚發達）", "右心室", "左心房", "右心房"],
    answer: 0,
    explanation: "體循環路程遍布全身阻力龐大，因此左心室肌肉壁最厚、收縮收縮壓最高（正常收縮壓約 120 mmHg），負責將充氧血打入主動脈供應全身各組織。",
    difficulty: "基礎"
  },
  {
    category: "物理-力學",
    question: "一臺起重機施加 2000 牛頓的鉛直向上拉力，在 10 秒內將貨物以等速鉛直抬升了 5 公尺。這臺起重機拉力對貨物做功的「平均功率」為多少瓦特（W）？",
    options: ["1000 瓦特（1000 W）", "10,000 瓦特", "2000 瓦特", "500 瓦特"],
    answer: 0,
    explanation: "做功 $W = F \\times s = 2000 \\times 5 = 10,000$ 焦耳。功率 $P = \\frac{W}{t} = \\frac{10000}{10} = 1000$ 瓦特（W）。",
    difficulty: "基礎"
  },
  {
    category: "地科-天文與宇宙",
    question: "太陽系八大行星分為「類地行星（水、金、地、火）」與「類木行星（木、土、天王、海王）」。相較於類木行星，類地行星普遍具有的共同特徵為？",
    options: ["主要由金屬與岩石構成，平均密度較大、具有堅硬固體表面且無行星光環", "體積龐大", "主要由氫和氦氣體組成", "衛星數量極多且有複雜光環"],
    answer: 0,
    explanation: "類地行星接近太陽熱源，輕揮發分逸散，由耐高溫岩石金屬構成，半徑小、質量小但平均密度大（約 3.9~5.5 g/cm³），無光環且衛星極少。",
    difficulty: "基礎"
  },
  {
    category: "化學-有機",
    question: "天然氣（瓦斯）與家用液化石油氣（桶裝瓦斯）的主要碳氫化合物成分分別為？",
    options: ["天然氣主要為「甲烷（$\\text{CH}_4$）」；桶裝瓦斯主要為「丙烷（$\\text{C}_3\\text{H}_8$）」與丁烷", "天然氣主要為乙烯", "桶裝瓦斯主要為乙炔", "兩者皆為純氫氣"],
    answer: 0,
    explanation: "管道天然氣（LNG）主成分為最輕的烷類甲烷（$\\text{CH}_4$）；鋼瓶加壓液化的石油氣（LPG）主成分為丙烷（$\\text{C}_3\\text{H}_8$）及丁烷（$\\text{C}_4\\text{H}_{10}$）。",
    difficulty: "基礎"
  },
  {
    category: "地科-大氣與氣候",
    question: "每年深秋與冬季，源自西伯利亞與蒙古高壓的強烈乾燥寒冷氣團向南侵襲臺灣與東亞地區，氣象上將這類導致氣溫在 24 小時內急降甚至降至 10°C 以下的劇烈降溫天氣系統稱為？",
    options: ["寒潮（寒流，Cold Surge）", "熱島效應", "西南氣流", "熱帶低壓"],
    answer: 0,
    explanation: "蒙古-西伯利亞大陸冷高壓強烈發展南下，東北季風大幅增強爆發，冷空氣長驅直入華南與臺灣，造成氣溫驟降引發農漁業寒害，即為寒流。",
    difficulty: "基礎"
  },
  {
    category: "物理-力學",
    question: "關於功（Work）與動能（Kinetic Energy）的關係，物理學「功能定理（Work-Energy Theorem）」的核心敘述為？",
    options: ["合外力對物體所做的總功，必精確等於該物體動能的變化量（$W_{\\text{合}} = \\Delta K$）", "重力位能的變化量等於總功", "動量變化量等於合外力所做的功", "若做功為正則物體質量必增加"],
    answer: 0,
    explanation: "功能定理：$\\Sigma W = \\int F_{\\text{合}} dx = \\int m \\frac{dv}{dt} v dt = \\int m v dv = \\frac{1}{2} m v_f^2 - \\frac{1}{2} m v_i^2 = \\Delta K$。合外力對質點做的功完全轉化為其瞬時動能之增減。",
    difficulty: "基礎"
  }
];

batch4.forEach((q, idx) => {
  quiz.push({
    id: `sci${quiz.length + 1}`,
    category: q.category,
    question: q.question,
    options: q.options,
    answer: q.answer,
    explanation: q.explanation,
    difficulty: q.difficulty
  });
});

console.log(`New Science count after batch 4: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Science questions: ${s.size}`);

fs.writeFileSync(quizFile, `const scienceQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated science-quiz.js!');
