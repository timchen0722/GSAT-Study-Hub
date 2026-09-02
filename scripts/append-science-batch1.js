const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'science-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Science count: ${quiz.length}`);

// 30 Handcrafted, distinct, curriculum-aligned questions for Science
const batch1 = [
  {
    category: "物理-力學",
    question: "靜置在粗糙水平桌面上的木塊質量 5 kg，其與桌面之最大靜摩擦力為 20 N。若對木塊施加 12 N 的水平向右推力而木塊保持靜止，此時木塊所受的靜摩擦力大小與方向為何？",
    options: ["12 N，方向水平向左", "20 N，方向水平向左", "8 N，方向水平向左", "0 N"],
    answer: 0,
    explanation: "當物體受外力但仍保持靜止時，處於靜力平衡狀態，靜摩擦力大小必恆等於施加的外力大小，即 $f_s = F = 12$ N，方向與相對運動趨勢相反（向左）。",
    difficulty: "基礎"
  },
  {
    category: "物理-力學",
    question: "將一顆小石子自地面以初速度 $v_0$ 鉛直向上拋出（忽略空氣阻力，重力加速度為 $g$ 向下），當石子到達最高點的瞬間，其速度與加速度分別為何？",
    options: ["速度為 0，加速度為 $g$ 向下", "速度為 0，加速度為 0", "速度為 $v_0$，加速度為 $g$ 向下", "速度為 0，加速度為 $g$ 向上"],
    answer: 0,
    explanation: "在最高點瞬間，石子短暫停止故瞬時速度為 0；但小石子自始至終僅受重力作用，由牛頓第二定律 $F=ma$，加速度仍恆為重力加速度 $g$ 向下。",
    difficulty: "基礎"
  },
  {
    category: "物理-波動與光學",
    question: "單擺在擺角小於 5° 的小角度條件下作簡諧運動，其擺動週期 $T = 2\\pi\\sqrt{\\frac{L}{g}}$。若將單擺的擺長 $L$ 增加為原來的 4 倍，且將擺錘質量增加為 2 倍，則該單擺的週期變為原來的幾倍？",
    options: ["2 倍", "4 倍", "8 倍", "$\\sqrt{2}$ 倍"],
    answer: 0,
    explanation: "單擺週期僅與擺長 $L$ 的平方根成正比，與擺錘質量完全無關。擺長變為 4 倍，週期 $T \\propto \\sqrt{4} = 2$ 倍。",
    difficulty: "基礎"
  },
  {
    category: "物理-波動與光學",
    question: "近視眼患者是由於眼球前後徑過長或水晶體折光力過強，導致遠處景物成像在視網膜前方。配戴下列哪一種透鏡可以使光線發散，讓焦點後移精準落在視網膜上？",
    options: ["凹透鏡", "凸透鏡", "雙凸透鏡", "平面鏡"],
    answer: 0,
    explanation: "近視眼鏡使用凹透鏡（發散透鏡），先將平行光線適度發散，使其經眼球水晶體折射後恰好匯聚於視網膜上；遠視則配戴凸透鏡矯正。",
    difficulty: "基礎"
  },
  {
    category: "物理-電磁學",
    question: "冷次定律（Lenz's Law）指出感應電流在迴路中所產生的磁場，其主要作用永遠是？",
    options: ["阻礙穿過該封閉迴路的原磁通量之變化", "加強原磁場的強度", "維持迴路中的電流恆定不變", "使迴路溫度上升"],
    answer: 0,
    explanation: "冷次定律體現能量守恆定律：當穿過線圈的磁通量增加時，感應磁場方向反向抵抗增加；當磁通量減少時，感應磁場方向同向抵抗減少。",
    difficulty: "基礎"
  },
  {
    category: "物理-近代物理",
    question: "法國物理學家德布羅意（De Broglie）提出物質波假說，認為動量為 $p = mv$ 的運動微觀粒子亦具有波動性，其物質波波長公式為？",
    options: ["$\\lambda = \\frac{h}{p}$（$h$ 為普朗克常數）", "$\\lambda = \\frac{p}{h}$", "$\\lambda = \\frac{h}{mc^2}$", "$\\lambda = \\frac{E}{c}$"],
    answer: 0,
    explanation: "德布羅意物質波關係式 $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$，統一了輻射與物質的波粒二象性，隨後被電子繞射實驗所證實。",
    difficulty: "中等"
  },
  {
    category: "化學-物質構造",
    question: "根據亞佛加厥定律，在標準狀態（STP：0°C, 1 atm）下，任何 1 莫耳（mol）的理想氣體所佔有的體積約為多少公升？",
    options: ["22.4 公升", "24.5 公升", "11.2 公升", "1.0 公升"],
    answer: 0,
    explanation: "在 STP（0°C, 1 atm）下，$V = \\frac{nRT}{P} = \\frac{1 \\times 0.082 \\times 273.15}{1} \\approx 22.4$ 公升。（常溫常壓 NTP 25°C 下約為 24.5 L）。",
    difficulty: "基礎"
  },
  {
    category: "化學-物質構造",
    question: "週期表中第一族鹼金屬元素（如鋰 Li、鈉 Na、鉀 K）化學性質極為活潑，當其金屬單質投入水中時，會發生劇烈反應並釋放出何種易燃氣體？",
    options: ["氫氣（$\\text{H}_2$）", "氧氣（$\\text{O}_2$）", "二氧化碳（$\\text{CO}_2$）", "氯氣（$\\text{Cl}_2$）"],
    answer: 0,
    explanation: "反應方程式：$2\\text{Na} + 2\\text{H}_2\\text{O} \\rightarrow 2\\text{NaOH} + \\text{H}_2\\uparrow$。反應劇烈放熱，使產生的強鹼溶液變紅（酚酞試劑），且氫氣易燃甚至爆炸。",
    difficulty: "基礎"
  },
  {
    category: "化學-物質構造",
    question: "乾冰（固態 $\\text{CO}_2$）和水冰（固態 $\\text{H}_2\\text{O}$）在受熱熔化或昇華時，所破壞的化學作用力主要是下列哪一種？",
    options: ["分子間作用力（凡得瓦力或氫鍵）", "分子內的共價鍵", "陰陽離子間的離子鍵", "自由電子與金屬陽離子的金屬鍵"],
    answer: 0,
    explanation: "分子晶體熔化或昇華時僅克服分子與分子之間的微弱凡得瓦力（水冰兼有氫鍵），分子內部強大的共價鍵並未斷裂。",
    difficulty: "中等"
  },
  {
    category: "化學-化學平衡",
    question: "哈伯法合成氨為一放熱可逆反應：$\\text{N}_2(g) + 3\\text{H}_2(g) \\rightleftharpoons 2\\text{NH}_3(g) + \\text{熱量}$。若要使化學平衡向右移動以增加氨氣產量，下列哪項操作最為有效？",
    options: ["降低反應溫度同時提高系統總壓力", "升高反應溫度同時降低壓力", "加入催化劑", "擴大容器體積"],
    answer: 0,
    explanation: "由勒沙特列原理：(1) 放熱反應降低溫度促使平衡向右放熱；(2) 反應前 4 莫耳氣體、反應後 2 莫耳氣體，增大壓力促使平衡向氣體莫耳數少的一方（右）移動。",
    difficulty: "中等"
  },
  {
    category: "化學-酸鹼與氧化還原",
    question: "在強氧化劑過錳酸鉀（$\\text{KMnO}_4$）化合物中，錳（Mn）元素的氧化數為何？",
    options: ["+7", "+6", "+4", "+2"],
    answer: 0,
    explanation: "化合物中各元素氧化數代數和為 0。鉀為鹼金屬 $+1$，氧一般為 $-2$。設錳為 $x$：$(+1) + x + 4(-2) = 0 \\implies 1 + x - 8 = 0 \\implies x = +7$。",
    difficulty: "基礎"
  },
  {
    category: "化學-酸鹼與氧化還原",
    question: "肥皂分子具有一端為親水性的極性羧酸根（$-\\text{COO}^-$），另一端為長鏈非極性的疏水性親油烴基，能將油脂乳化分散於水中帶走，這種化學結構特性稱為？",
    options: ["界面活性劑（兩極性分子）", "高分子聚合物", "螯合劑", "同分異構物"],
    answer: 0,
    explanation: "界面活性劑分子親油端深入油滴內部，親水端朝外與水分子水合，形成微胞（Micelle）將油污分散洗淨。",
    difficulty: "基礎"
  },
  {
    category: "生物-細胞與分子",
    question: "真核細胞中的粒線體被譽為「細胞的能量工廠」，根據「內共生學說」，下列哪一項特徵最強烈支持粒線體起源於遠古共生於宿主細胞的原核細菌？",
    options: ["粒線體擁有雙層膜構造、具有獨立的環狀 DNA 分子與類似原核生物的核糖體", "粒線體表面有核孔", "粒線體由高基氏體合成", "粒線體含有葉綠素"],
    answer: 0,
    explanation: "內共生學說證據：粒線體與葉綠體皆擁有環狀雙股 DNA、70S 核糖體、且以類似細菌的二分分裂方式增殖，外膜為宿主吞噬膜、內膜為古細菌自體膜。",
    difficulty: "中等"
  },
  {
    category: "生物-細胞與分子",
    question: "若將正常的人類紅血球細胞放入盛有「0.1% 濃度的低張食鹽水」燒杯中，紅血球會發生下列何種生理變化？",
    options: ["水分大量滲透進入細胞內，導致細胞膨脹並破裂溶血", "水分大量滲出細胞，導致細胞皺縮", "細胞維持正常雙凹圓盤狀不變", "細胞壁破裂"],
    answer: 0,
    explanation: "人體血液正常生理食鹽水濃度為 0.9%（等張）。在 0.1% 低張溶液中，外界水分子位能高於細胞內，水大量湧入使缺乏細胞壁的紅血球膨脹破裂（溶血現象）。",
    difficulty: "基礎"
  },
  {
    category: "生物-細胞生理",
    question: "植物光合作用中的碳反應（卡爾文循環）不需要光照直接驅動，其主要在葉綠體的基質中利用光反應所提供的哪兩種高能物質來固定二氧化碳合成醣類？",
    options: ["ATP 與 NADPH", "ADP 與 NADP+", "葡萄糖與氧氣", "DNA 與 RNA"],
    answer: 0,
    explanation: "光反應在類囊體膜吸收光能分解水，產生氧氣、ATP（化學能）與 NADPH（還原力），隨後供給葉綠體基質的卡爾文循環進行二氧化碳固碳還原反應。",
    difficulty: "中等"
  },
  {
    category: "生物-細胞生理",
    question: "高溫會使多數人體酵素（如唾液澱粉酶）完全失去催化活性的最根本原因是？",
    options: ["高溫破壞維持蛋白質三級結構的氫鍵與離子鍵，導致酵素變性變形而失去活性位點", "高溫消耗了反應受質", "高溫改變了酵素的胺基酸初級序列", "高溫降低了分子的運動速率"],
    answer: 0,
    explanation: "酵素為蛋白質，高溫使分子熱運動加劇，瓦解維持立體構型的弱化學鍵（蛋白質變性 Denaturation），活性中心形狀改變無法與受質結合。",
    difficulty: "基礎"
  },
  {
    category: "生物-遺傳與演化",
    question: "一對夫婦血型分別為 A 型（基因型 $I^A i$）與 B 型（基因型 $I^B i$），則他們所生育的孩子在遺傳學上可能出現的血型為何？",
    options: ["A 型、B 型、AB 型、O 型四種血型皆有可能", "僅有 AB 型", "僅有 A 型或 B 型", "僅有 O 型"],
    answer: 0,
    explanation: "配子組合：父方可能提供 $I^A$ 或 $i$，母方可能提供 $I^B$ 或 $i$。子代基因型：$I^A I^B$ (AB型)、$I^A i$ (A型)、$I^B i$ (B型)、$ii$ (O型)，四種表現型機率各為 1/4 (25%)。",
    difficulty: "基礎"
  },
  {
    category: "生物-生態與環境",
    question: "在生態系食物網的能量流動過程中，能量自前一個營養階層傳遞至下一個營養階層時，能量轉換效率通常大約只有？",
    options: ["約 10%（十分之一能量流動法則）", "約 50%", "約 90%", "100% 完全守恆"],
    answer: 0,
    explanation: "大部分能量（約 90%）在呼吸作用代謝、維持體溫、未被攝食或未消化的排泄物中作為熱能散失，僅約 10% 轉化為下一個營養階層的生物量。",
    difficulty: "基礎"
  },
  {
    category: "生物-動物生理與免疫",
    question: "在人體體循環與肺循環中，下列哪一條血管雖然名為「動脈」，但其管腔內部流動的卻是低含氧量、暗紅色的「缺氧血」？",
    options: ["肺動脈", "主動脈", "頸動脈", "腎動脈"],
    answer: 0,
    explanation: "動脈定義為「將血液從心臟導出」的血管。右心室將全身收集回來的缺氧血經由肺動脈壓送至肺臟進行氣體交換，因此肺動脈流的是缺氧血。",
    difficulty: "基礎"
  },
  {
    category: "生物-動物生理與免疫",
    question: "當健康人剛吃完一頓豐盛正餐後，血液中血糖濃度升高，胰臟蘭氏小島的 $\\beta$ 細胞會立刻分泌哪一種激素以促進肝細胞與肌肉細胞將葡萄糖轉化為肝醣儲存？",
    options: ["胰島素（Insulin）", "升糖素（Glucagon）", "腎上腺素", "甲狀腺素"],
    answer: 0,
    explanation: "胰島素為體內唯一具有降血糖功能的激素，能促進細胞攝入葡萄糖氧化利用或合成肝醣；升糖素則在飢餓時由 $\\alpha$ 細胞分泌分解肝醣升血糖。",
    difficulty: "基礎"
  },
  {
    category: "地科-固體地球與板塊",
    question: "大洋底部的「中洋脊（Mid-ocean ridge）」在板塊構造學說中屬於下列哪一種板塊邊界？",
    options: ["張裂型板塊邊界（板塊分離，地函熱對流岩漿湧出冷卻形成新海洋地殼）", "聚合型板塊邊界", "錯動型轉形斷層邊界", "大陸地盾穩定期"],
    answer: 0,
    explanation: "中洋脊處於地函岩漿熱對流上升帶，兩側板塊持續背道張裂拉開，玄武岩熔岩湧出固化形成新鮮海洋地殼與海底擴張磁條帶。",
    difficulty: "基礎"
  },
  {
    category: "地科-地質與定年",
    question: "在未受強烈地殼變動倒轉的沉積岩層中，位在下方的地層年齡必定比位在上方的新沉積地層古老，這條地質學基本判讀原理稱為？",
    options: ["地層疊置定律（Law of Superposition）", "截切定律", "化石層序律", "原始水平律"],
    answer: 0,
    explanation: "地層疊置定律指出老地層先沉積於下方，年輕地層後沉積於上方；被岩脈穿透截切者老於截切者的原理則稱為截切定律。",
    difficulty: "基礎"
  },
  {
    category: "地科-大氣與氣候",
    question: "大氣垂直分層中，我們日常經歷的風、雲、雨、雪等天氣現象絕大多數都發生在哪一個垂直分層？",
    options: ["對流層（Troposphere）", "平流層", "中氣層", "熱氣層"],
    answer: 0,
    explanation: "對流層集中了全大氣層約 80% 的質量與幾乎全部的水氣，且氣溫隨高度升高而急劇下降（每公里降 6.5°C），垂直對流劇烈，各類天氣現象皆發生於此。",
    difficulty: "基礎"
  },
  {
    category: "地科-海洋與潮汐",
    question: "在秘魯西岸或臺灣東北角海域，當強風吹拂推開表層海水時，下層低溫且富含硝酸鹽、磷酸鹽等無機營養鹽的海水上升補充，這種現象稱為？",
    options: ["湧升流（Upwelling）", "黑潮暖流", "赤道逆流", "潮汐大潮"],
    answer: 0,
    explanation: "湧升流將富含無機鹽的深層冷水帶到陽光照射的表層，促使浮游植物爆發性繁衍，吸引魚群聚集形成全球極具商業價值的優質漁場。",
    difficulty: "中等"
  },
  {
    category: "地科-天文與宇宙",
    question: "太陽系八大行星中，水星、金星、地球、火星被歸類為「類地行星」，相較於類木行星，類地行星共同的物理特徵為？",
    options: ["體積小、質量小、但平均密度大（富含金屬與矽酸鹽岩石），衛星數量極少或無", "體積龐大、以氫氦氣體為主", "表面具有壯觀的光環系統", "自轉週期極快"],
    answer: 0,
    explanation: "類地行星密度大（約 3.9~5.5 g/cm³），由重元素金屬核心與岩石地函構成；類木行星（木星、土星、天王星、海王星）為低密度氣體巨行星。",
    difficulty: "基礎"
  },
  {
    category: "地科-天文與宇宙",
    question: "1965 年彭齊亞斯與威爾遜意外探測到的「宇宙微波背景輻射（CMBR）」，其對應的黑體輻射溫度約為 2.7 K，這項觀測成為支持下列哪一個現代宇宙學理論的核心證據？",
    options: ["大霹靂宇宙論（Big Bang Theory，宇宙始於高溫高密度的熾熱創生並持續膨脹冷卻）", "恆定狀態宇宙論", "托勒密地心說", "哥白尼日心說"],
    answer: 0,
    explanation: "宇宙微波背景輻射是大霹靂約 38 萬年後電子與質子復合為中性氫原子時，光子脫耦自由穿行於宇宙留下的熱輻射餘溫，經宇宙膨脹紅移至微波波段。",
    difficulty: "中等"
  },
  {
    category: "物理-力學",
    question: "一臺質量為 1000 kg 的汽車以 20 m/s 的速率在水平公路上行駛，駕駛踩下煞車後滑行一段距離停止。在煞車過程中，阻力對汽車所做的總功為多少焦耳？",
    options: ["$-200,000$ 焦耳（-200 kJ）", "$-400,000$ 焦耳", "$-100,000$ 焦耳", "$200,000$ 焦耳"],
    answer: 0,
    explanation: "由功能定理：合力作功等於動能變化量。$W = \\Delta E_k = 0 - \\frac{1}{2} m v^2 = -\\frac{1}{2}(1000)(20^2) = -\\frac{1}{2}(1000)(400) = -200,000$ 焦耳。",
    difficulty: "基礎"
  },
  {
    category: "化學-酸鹼與氧化還原",
    question: "在 25°C 下，取 0.1 M 的鹽酸（$\\text{HCl}$）水溶液 10 mL，加純水稀釋至總體積為 1000 mL（稀釋 100 倍），稀釋後該鹽酸溶液的 pH 值變為多少？",
    options: ["pH = 3", "pH = 1", "pH = 7", "pH = 5"],
    answer: 0,
    explanation: "初濃度為 $0.1$ M（pH=1）。體積擴大 100 倍，濃度變為 $[\\text{H}^+] = \\frac{0.1}{100} = 10^{-3}$ M。$\\text{pH} = -\\log_{10}(10^{-3}) = 3$。",
    difficulty: "基礎"
  },
  {
    category: "地科-大氣與氣候",
    question: "在北半球，若地面有一低氣壓中心（颱風或溫帶氣旋），受氣壓梯度力與向右偏轉的科氏力（地轉偏向力）及地面摩擦力共同作用，其近地面的空氣流動方向為何？",
    options: ["逆時針方向向中心旋入（輻合）", "順時針方向向中心旋入", "逆時針方向向外旋出", "順時針方向向外旋出"],
    answer: 0,
    explanation: "北半球氣壓梯度力指向低壓中心，科氏力使風向右偏，地面摩擦力使風跨越等壓線吹向低壓，形成「逆時針輻合流入」；高氣壓則為順時針輻散流出。",
    difficulty: "基礎"
  },
  {
    category: "生物-細胞與分子",
    question: "雙股 DNA 分子中，含氮鹼基遵循查加夫（Chargaff）配對法則，腺嘌呤（A）與胸腺嘧啶（T）配對，鳥嘌呤（G）與胞嘧啶（C）配對。若測得某雙股 DNA 片段中含胞嘧啶（C）佔 30%，則該片段中腺嘌呤（A）所佔的百分比為何？",
    options: ["20%", "30%", "40%", "25%"],
    answer: 0,
    explanation: "雙股 DNA 中 $C = G = 30\\%$，故 $C + G = 60\\%$。剩餘 $A + T = 100\\% - 60\\% = 40\\%$。又 $A = T$，故 $A = 20\\%$。",
    difficulty: "基礎"
  }
];

batch1.forEach((q, idx) => {
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

console.log(`New Science count after batch 1: ${quiz.length}`);

// Check uniqueness
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Total unique Science questions: ${s.size}`);

fs.writeFileSync(quizFile, `const scienceQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated science-quiz.js!');
