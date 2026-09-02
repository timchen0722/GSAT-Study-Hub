const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'science-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

console.log(`Current Science count before batch 10: ${quiz.length}`);

// 30 Handcrafted, non-templated questions for Science
const batch10 = [
  {
    category: "物理-力與功",
    question: "起重機馬達以恆定拉力在 10 秒鐘之內，將質量為 500 公斤的鋼材垂直等速吊升 20 公尺的高度（取重力加速度 $g = 10\\text{ m/s}^2$）。該起重機馬達在此過程中輸出的「平均機械功率」為多少瓦特（W）？",
    options: ["10,000 W（即 10 kW，功 $W = mgh = 500 \\times 10 \\times 20 = 100,000\\text{ J}$，功率 $P = 100000 / 10 = 10000\\text{ W}$）", "5,000 W", "20,000 W", "1,000 W"],
    answer: 0,
    explanation: "抗力重力做功 $W = m g h = 500 \\times 10 \\times 20 = 100,000$ 焦耳。功率等於單位時間做的功：$P = \\frac{W}{t} = \\frac{100,000}{10} = 10,000$ 瓦特（10 kW）。",
    difficulty: "基礎"
  },
  {
    category: "物理-熱學",
    question: "雙金屬片（Bimetallic Strip）溫度感應器由兩種線膨脹係數差異顯著的金屬（如銅與鐵）緊密鉚接在一起製成。當雙金屬片「受熱升溫」時，整根金屬片會自發發生彎曲。金屬片彎曲的方向必然朝向哪一側？",
    options: ["彎向「熱膨脹係數較小的一側」（膨脹係數大的金屬伸長量較大，迫使條帶向膨脹較小的一側彎曲）", "彎向熱膨脹係數較大的一側", "完全不彎曲保持筆直", "隨機朝任意方向扭轉"],
    answer: 0,
    explanation: "雙金屬片受熱：膨脹率大的金屬伸長多位於外弧，膨脹率小的金屬伸長少位於內弧，因此條帶彎向膨脹係數小的一側，廣泛應用於烤箱、熨斗的自跳溫控開關。",
    difficulty: "基礎"
  },
  {
    category: "物理-流體",
    question: "汽車維修廠升降機與大貨車液壓煞車系統廣泛應用「帕斯卡原理（Pascal's Principle）」。在密閉液體系統中，帕斯卡原理所闡述的最核心物理規律為？",
    options: ["施加於密閉靜止液體上的任意壓強增量，「將大小不變地傳遞到液體的各個部分與容器壁上的每一點」（$P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2}$，小活塞小力轉換為大活塞巨大頂升力）", "液體內部壓強隨深度變淺而無限激增", "密閉液體只能沿著重力方向傳遞力", "液體會被壓縮至原本體積的一半"],
    answer: 0,
    explanation: "帕斯卡原理：密閉不可壓縮流體受外力壓強時，壓強等值向各方向無損傳遞。因此小活塞面積 $A_1$ 施加小力 $F_1$，在大活塞面積 $A_2$ 上可產生 $F_2 = F_1 \\times \\frac{A_2}{A_1}$ 的數十倍巨大頂升力。",
    difficulty: "基礎"
  },
  {
    category: "物理-光學",
    question: "現代高速網際網路所倚賴的光纖通信（Optical Fiber），能夠將光脈衝信號在透明玻璃纖維核心內部以極低損耗傳輸數千公里。光脈衝信號在光纖芯層內部前進時所依據的最關鍵光學現象為？",
    options: ["「全反射（Total Internal Reflection）」（光由折射率大的光密芯層射向折射率小的光疏包層，且入射角大於臨界角 $\\theta_c$）", "光的漫反射", "光的極化吸收", "光的色散與雙折射"],
    answer: 0,
    explanation: "全反射兩大必備條件：(1) 光必須從光密介質射入光疏介質（$n_{\\text{芯}} > n_{\\text{包}}$）；(2) 入射角必須大於臨界角（$\\theta > \\theta_c = \\arcsin(n_2/n_1)$），光線 100% 反射無折射洩漏。",
    difficulty: "基礎"
  },
  {
    category: "物理-近代物理",
    question: "量子力學之父普朗克（Planck）與愛因斯坦提出光量子假說：頻率為 $f$、波長為 $\\lambda$ 的單一光子，其所攜帶的能量量子 $E$ 計算公式為？（其中 $h$ 為普朗克常數，$c$ 為真空中光速）",
    options: ["$E = h f = \\frac{h c}{\\lambda}$", "$E = \\frac{h \\lambda}{c}$", "$E = \\frac{f}{h}$", "$E = h c \\lambda$"],
    answer: 0,
    explanation: "愛因斯坦光子能量公式：光子能量 $E$ 與振動頻率 $f$ 成正比，$E = h f$。結合波速公式 $c = f \\lambda \\implies f = c/\\lambda$，得 $E = \\frac{h c}{\\lambda}$。高頻短波長光子（如紫外線、X射線）能量極高。",
    difficulty: "基礎"
  },
  {
    category: "化學-氣體",
    question: "在標準狀況（STP，溫度為 0°C 即 273.15 K，氣壓為 1 大氣壓 1 atm）下，任何 1 莫耳（1 mol）的理想氣體，其在空間中所佔有的幾何體積恆約為？",
    options: ["22.4 公升（22.4 L / 即約 22,400 毫升）", "1.0 公升", "100 公升", "24.5 公升（常溫常壓 RTP 下為 24.5 L）"],
    answer: 0,
    explanation: "亞佛加厥定律：由理想氣體方程式 $P V = n R T$，在 STP 下 $V = \\frac{1 \\times 0.082 \\times 273.15}{1} \\approx 22.414$ 公升。任何理想氣體在 STP 下的莫耳體積恆約為 22.4 L/mol。",
    difficulty: "基礎"
  },
  {
    category: "化學-酸鹼與指示劑",
    question: "化學實驗室進行酸鹼中和滴定操作時常用的「酚酞指示劑（Phenolphthalein）」，在酸性水溶液與強鹼性水溶液中，分別呈現的顏色為？",
    options: ["在酸性溶液中呈現「無色透明」；在強鹼性溶液中呈現鮮豔的「粉紅色/紫紅色」", "在酸性中為藍色，鹼性中為紅色", "在酸性中為黃色，鹼性中為無色", "在任何酸鹼度下皆為黑色"],
    answer: 0,
    explanation: "酚酞變色範圍約為 pH 8.2 ~ 10.0。在酸性及弱鹼性（pH < 8.2）環境下呈現無色；當滴定至當量點微鹼性（pH > 8.2）時共軛陰離子顯現粉紅色，常用於強鹼滴定強酸指示終點。",
    difficulty: "基礎"
  },
  {
    category: "化學-溶液與沉澱",
    question: "在無機化學溶解度規則中，下列哪一組陰陽離子所組成的鹽類，在常溫水中「幾乎全數易溶於水、完全不會生成任何白色或彩色固體沉澱」？",
    options: ["硝酸鹽（$\\text{NO}_3^-$）鹽類 與 第一族鹼金屬離子（$\\text{Na}^+, \\text{K}^+$）及銨根離子（$\\text{NH}_4^+$）鹽類", "銀離子（$\\text{Ag}^+$）與氯離子（$\\text{Cl}^-$）", "鋇離子（$\\text{Ba}^{2+}$）與硫酸根離子（$\\text{SO}_4^{2-}$）", "鈣離子（$\\text{Ca}^{2+}$）與碳酸根離子（$\\text{CO}_3^{2-}$）"],
    answer: 0,
    explanation: "溶解度規則鐵律口訣：鉀鈉銨硝皆全溶！所有鹼金屬鹽（$\\text{Li}^+, \\text{Na}^+, \\text{K}^+$）、銨鹽與硝酸鹽全溶無例外沉澱；而 $\\text{AgCl}, \\text{BaSO}_4, \\text{CaCO}_3$ 皆為大考著名難溶沉澱。",
    difficulty: "基礎"
  },
  {
    category: "化學-氧化還原與金屬",
    question: "下列各常見金屬元素中，化學「活性最強、最容易失去外層價電子發生氧化反應（具有最強還原能力）」的金屬是？",
    options: ["金屬鉀（K）或鈉（Na）（鹼金屬活性極高，接觸水即劇烈反應冒煙甚至爆炸）", "金屬銅（Cu）", "金屬鐵（Fe）", "金屬金（Au，活性極小之惰性貴金屬）"],
    answer: 0,
    explanation: "金屬活動性順序表：鉀鋇鍶鈣鈉 > 鎂鋁錳鋅鉻鐵鈷鎳錫鉛 (H) > 銅汞銀鉑金。鉀、鈉活性極大，在空氣中迅速氧化，遇冷水劇烈釋放氫氣引燃爆炸，必須保存於礦物油中。",
    difficulty: "基礎"
  },
  {
    category: "生物-細胞生物學",
    question: "真核細胞中的「粒線體」與「葉綠體」在細胞演化史上極為特殊。內共生學說（Endosymbiotic Theory）指出它們起源於被遠古原始真核細胞吞噬但未消化的原核生物。下列哪一項分子生物學特徵是最強力的內共生支持證據？",
    options: ["粒線體與葉綠體皆「具備雙層膜結構」、擁有自身獨立的「環狀 DNA」與類似細菌的原核型核糖體，且能進行自主分裂複製", "它們能夠完全獨立在真空中生存", "它們內部完全不含有任何蛋白質", "它們的細胞壁由纖維素構成"],
    answer: 0,
    explanation: "內共生四大鐵證：雙層膜（外膜宿主囊泡、內膜原細菌膜）、獨立圓形環狀 DNA（無組蛋白）、70S 顆粒核糖體（受原核抗生素抑制）、二分裂增殖方式，證實其原為好氧菌與光合藍細菌。",
    difficulty: "中等"
  },
  {
    category: "生物-分子遺傳學",
    question: "分子生物學最核心的基石理論——「中心法則（Central Dogma）」，闡述了細胞內部遺傳訊息傳遞與表達的標準單向流向順序為？",
    options: ["$\\text{DNA（遺傳密碼複製）} \\xrightarrow{\\text{轉錄 Transcription}} \\text{mRNA} \\xrightarrow{\\text{轉譯 Translation}} \\text{蛋白質（執行生命生理機能）}$", "$\\text{蛋白質} \\rightarrow \\text{RNA} \\rightarrow \\text{DNA}$", "$\\text{脂肪} \\rightarrow \\text{糖類} \\rightarrow \\text{DNA}$", "$\\text{RNA} \\rightarrow \\text{胺基酸} \\rightarrow \\text{DNA}$"],
    answer: 0,
    explanation: "克里克（Crick）提出中心法則：DNA 透過轉錄（RNA 聚合酶以 DNA 模板鏈合成 mRNA），mRNA 攜帶遺傳密碼移至核糖體進行轉譯（tRNA 搬運胺基酸拼裝胜肽鏈合成蛋白質）。",
    difficulty: "基礎"
  },
  {
    category: "生物-人體呼吸生理",
    question: "人體腦幹內的主導「呼吸中樞（Respiratory Center）」，位於腦幹的「延腦」與橋腦。當我們劇烈跑步運動後呼吸急促深沉，其最根本的體內化學刺激因子是延腦化學受器偵測到了血液中何種物質濃度升高？",
    options: ["血液與腦脊髓液中的「二氧化碳（$\\text{CO}_2$）濃度與氫離子（$\\text{H}^+$）濃度升高 / pH 值下降」", "血液中的氧氣濃度過度飽和", "血液中的血紅素大量消失", "血液中的血糖濃度急劇下降"],
    answer: 0,
    explanation: "大考經典生理陷阱題：延腦中樞化學感受器對 $\\text{CO}_2$ 與 $\\text{H}^+$ 敏感度極高（$\\text{CO}_2$ 穿透血腦屏障水解生成 $\\text{H}^+$ 刺激中樞），血碳酸蓄積促發急促呼吸；而氧氣過低主要由頸動脈體外周偵測。",
    difficulty: "中等"
  },
  {
    category: "生物-植物生理",
    question: "達爾文父子與溫特（Went）在金絲雀虉草胚芽鞘實驗中發現了植物向光生長之謎。當植物幼莖受到「單側單向光源」照射時，幼莖會向著光源方向彎曲生長。造成莖部向光彎曲的最根本植物荷爾蒙機制為？",
    options: ["莖頂合成的「生長素（Auxin / IAA）」受單側光影響橫向運輸至「背光側」，導致背光側生長素濃度高、細胞伸長生長更快，促使莖部向光彎曲", "單側光直接燒焦了向光側的所有細胞", "向光側細胞分裂速度加快一萬倍", "植物為了躲避陽光進行自我防禦"],
    answer: 0,
    explanation: "向光性機制：光敏素引導生長素（IAA）橫向轉運流向背光側，使背光側生長素濃度顯著高於向光側。莖部對生長素最適濃度較高，背光側細胞壁酸性鬆弛伸長加劇，兩側生長速率差致向光彎曲。",
    difficulty: "基礎"
  },
  {
    category: "生物-生態系統",
    question: "生態學之父林德曼（Lindeman）提出著名的能量流動「十分之一定律（10% Law）」。在陸地生態系食物鏈中，當能量從綠色生產者傳遞給初級消費者、再傳遞給次級消費者時，相鄰兩個營養階層之間的平均「能量傳遞效率」大約僅有？",
    options: ["約 10%（約 10%~20%，其餘 90% 能量透過生物呼吸作用散失為熱能或以未同化糞便廢棄物排出）", "約 50%", "約 100% 完全守恆無損失", "約 90%"],
    answer: 0,
    explanation: "能量流動逐級遞減：每個營養階層攝入的能量，大部分用於自身的生命活動維持（細胞呼吸代謝散熱）或分解者分解，僅約 10% 轉化為自身生物量傳遞給下一捕食者，故食物鏈通常不超過 4~5 環。",
    difficulty: "基礎"
  },
  {
    category: "地科-板塊與構造",
    question: "美國加州著名的「聖安德列斯斷層（San Andreas Fault）」是太平洋板塊與北美板塊相交接的邊界。兩大板塊在此處沿著水平方向發生劇烈的「左右相對錯動滑動」，既沒有洋殼張裂亦無強烈隱沒造山。這種類型的板塊邊界在板塊構造學上稱為？",
    options: ["「錯動型（轉形）板塊邊界」（Transform Plate Boundary，伴隨強烈淺源地震，但通常無火山爆發）", "聚合型（隱沒）板塊邊界", "張裂型（中洋脊）板塊邊界", "板塊內部熱柱"],
    answer: 0,
    explanation: "板塊三類邊界：張裂型（如大西洋中洋脊，玄武岩岩漿溢流）；聚合型（如喜馬拉雅造山、臺灣海溝，強震伴隨深源地震與火山）；錯動型（轉形斷層，水平剪切錯動，如加州聖安德列斯斷層，無火山但淺震破壞極大）。",
    difficulty: "基礎"
  },
  {
    category: "地科-大氣與溫室效應",
    question: "地球之所以能夠維持約 15°C 的宜居全球平均地表溫度，而不是如同無大氣月球般的冰冷荒涼（月球平均 -18°C），全賴大氣層的「自然溫室效應（Greenhouse Effect）」。溫室氣體（如水氣、$\\text{CO}_2$、甲烷）保溫的最根本物理光學機制為？",
    options: ["大氣對太陽入射的「可見光短波輻射」幾乎完全透明放行；但大氣中的溫室氣體卻強烈吸收地表向外釋放的「長波紅外線輻射」，並將部分熱量向下「大氣逆輻射」反饋加熱地面", "溫室氣體直接反射太陽所有的紫外線", "大氣層在夜間自發進行化學燃燒產熱", "溫室氣體能夠將地表所有的熱量吸收為零"],
    answer: 0,
    explanation: "溫室效應物理核心：太陽高溫發射短波輻射透射大氣加熱地表；地球低溫地表發射長波紅外輻射。三原子以上分子（$\\text{H}_2\\text{O}, \\text{CO}_2, \\text{CH}_4$）紅外偶極吸收激發，再向四周發射逆輻射截留熱量。",
    difficulty: "基礎"
  },
  {
    category: "地科-氣象與季風",
    question: "東亞與南亞地區之所以形成全世界最典型的「季風氣候（Monsoon）」，冬季吹寒冷乾燥的陸風、夏季吹溫暖濕潤的海風。造成這種大範圍冬夏風向巨大反轉的最根本地理物理動力是？",
    options: ["「海陸熱力性質差異」（陸地比熱容小升溫快降溫快、海洋比熱容大升溫慢降溫慢，造成冬夏巨大氣壓差）", "地球地函岩漿的對流方向在冬夏反轉", "月球引潮力在冬夏完全停止", "太陽直射點在兩極點之間跳躍"],
    answer: 0,
    explanation: "海陸比熱懸殊：夏季陸地強烈升溫形成巨大蒙古熱低壓，海洋偏冷形成高壓，暖濕氣流由太平洋印度洋吹向大陸形成夏季暴雨；冬季大陸極寒形成強大西伯利亞蒙古高壓，乾冷強風吹向海洋。",
    difficulty: "基礎"
  },
  {
    category: "地科-天文與宇宙",
    question: "天文學測量宇宙天體距離時使用的長度單位「光年（Light-year）」，其最本質的物理學定義為？",
    options: ["光在真空中以約每秒三十萬公里的速度，「在一年時間內所行走的直線長度距離」（約 9.46 兆公里），為「天體距離長度單位」而非時間單位", "光子在宇宙中生存的壽命時間", "太陽繞銀河系中心公轉一周的時間", "人類太空船飛到火星所需的時間"],
    answer: 0,
    explanation: "大考高頻概念辨析：光年是長度單位（$d = c \\times 1\\text{ year} \\approx 3 \\times 10^8 \\times 3.15 \\times 10^7 \\approx 9.46 \\times 10^{12}\\text{ km}$），切忌望文生義誤認為時間單位。",
    difficulty: "基礎"
  },
  {
    category: "地科-天文與行星",
    question: "太陽系八大行星中，金星（Venus）距離太陽雖然比水星更遠，但其地表平均溫度卻高達 460°C 以上，成為全太陽系表面溫度最高、環境最嚴酷的地獄行星。造成金星極端高溫的最主要行星大氣原因為？",
    options: ["金星擁有極其濃密厚實、佔其大氣成分高達 96% 以上的高壓「二氧化碳（$\\text{CO}_2$）」，引發了無可遏止的「失控溫室效應」", "金星地表完全由燃燒中的純煤炭覆蓋", "金星自身內部進行著強烈的核分裂反應", "金星的自轉速度是全宇宙最快的"],
    answer: 0,
    explanation: "金星大氣壓高達地球 92 倍，厚重的超臨界二氧化碳與濃硫酸雲層產生失控溫室效應（Runaway Greenhouse），截留幾乎全部行星紅外輻射，地表高溫足以熔化鉛、鋅等金屬。",
    difficulty: "基礎"
  },
  {
    category: "地科-天文與宇宙",
    question: "克卜勒第三定律（行星運動週期定律）指出：所有行星繞太陽公轉軌道的「半長軸 $a$（平均軌道半徑）」的立方，與其「公轉週期 $T$」的平方之比值，對於太陽系內的所有行星而言？",
    options: ["「恆為同一個常數常值」（$\\frac{a^3}{T^2} = K$ 恆定，軌道半長軸越大，公轉週期越長）", "比值隨行星質量大小成正比", "比值隨行星體積大小急劇變化", "比值等於 0"],
    answer: 0,
    explanation: "克卜勒第三定律 $\\frac{a^3}{T^2} = K = \\frac{G M_\\odot}{4\\pi^2}$。常數僅取決於中心天體太陽的質量，因此距離太陽越遠的行星公轉週期大幅延長（如水星 88 天，地球 1 年，海王星 165 年）。",
    difficulty: "基礎"
  },
  {
    category: "物理-電學",
    question: "依據電學基本定律歐姆定律（Ohm's Law）$V = I R$。若一盞檯燈兩端施加 110 V 的家用交流電壓，測得流經檯燈燈絲的電流強度為 0.5 A，則該檯燈燈絲此時的電阻值為多少歐姆（$\\Omega$）？",
    options: ["220 $\\Omega$（$R = V/I = 110 / 0.5 = 220\\,\\Omega$）", "55 $\\Omega$", "110 $\\Omega$", "440 $\\Omega$"],
    answer: 0,
    explanation: "$R = \\frac{V}{I} = \\frac{110}{0.5} = 220\\,\\Omega$。",
    difficulty: "基礎"
  },
  {
    category: "化學-化學反應",
    question: "將稀鹽酸（$\\text{HCl}$）滴加於大理石碎片（主要成分為碳酸鈣 $\\text{CaCO}_3$）上，試管中會立即劇烈產生大量無色無味、能使澄清石灰水變渾濁的氣體。該化學反應產生的氣體是？",
    options: ["二氧化碳（$\\text{CO}_2$）", "氧氣（$\\text{O}_2$）", "氫氣（$\\text{H}_2$）", "氯氣（$\\text{Cl}_2$）"],
    answer: 0,
    explanation: "反應方程式：$\\text{CaCO}_3 + 2\\text{HCl} \\rightarrow \\text{CaCl}_2 + \\text{CO}_2\\uparrow + \\text{H}_2\\text{O}$。生成的二氧化碳與澄清石灰水生成碳酸鈣白色沉澱變渾濁。",
    difficulty: "基礎"
  },
  {
    category: "物理-熱學",
    question: "攝氏溫標（°C）與華氏溫標（°F）的換算關係式為 $F = \\frac{9}{5} C + 32$。當氣象預報某地氣溫為攝氏 20°C 時，相當於華氏多少度？",
    options: ["68°F（$\\frac{9}{5} \\times 20 + 32 = 36 + 32 = 68^\\circ\\text{F}$）", "36°F", "52°F", "72°F"],
    answer: 0,
    explanation: "$F = \\frac{9}{5}(20) + 32 = 36 + 32 = 68^\\circ\\text{F}$。",
    difficulty: "基礎"
  },
  {
    category: "生物-人體循環系統",
    question: "人體血液中的紅血球（Erythrocytes）之所以呈現鮮紅色，是因為其內部含有大量能夠與氧氣可逆結合並專門負責在全身運載輸送氧氣的高分子含鐵蛋白質：",
    options: ["血紅素（血紅蛋白，Hemoglobin）", "白蛋白", "纖維蛋白原", "免疫球蛋白"],
    answer: 0,
    explanation: "血紅素由四條胜肽鏈與四個含二價鐵離子的血基質組成，在肺泡高氧分壓處與氧結合形成鮮紅色氧合血紅素，在組織缺氧處釋放氧氣。",
    difficulty: "基礎"
  },
  {
    category: "化學-溶液濃度",
    question: "在常溫水溶液中，純水的離子積常數 $K_w = [\\text{H}^+][\\text{OH}^-] = 1.0 \\times 10^{-14}$。若在中性純水中，氫離子濃度 $[\\text{H}^+]$ 的數值大小為多少 M？",
    options: ["$1.0 \\times 10^{-7}\\text{ M}$（此時 $\\text{pH} = 7$）", "$1.0 \\times 10^{-14}\\text{ M}$", "$1.0 \\times 10^{-1}\\text{ M}$", "$7.0\\text{ M}$"],
    answer: 0,
    explanation: "中性溶液中 $[\\text{H}^+] = [\\text{OH}^-] = \\sqrt{K_w} = \\sqrt{10^{-14}} = 1.0 \\times 10^{-7}\\text{ M}$。$\\text{pH} = -\\log_{10}(10^{-7}) = 7$。",
    difficulty: "基礎"
  },
  {
    category: "地科-水文與海洋",
    question: "農曆每月的初一（朔）與十五（望）時，太陽、月球與地球幾乎排列在同一直線上，兩者的引潮力疊加共振，造成該時期潮差達到單月最大。這種潮汐現象稱為？",
    options: ["大潮（滿潮與乾潮水位差最大之日）", "小潮（上下弦月時）", "湧浪", "海嘯"],
    answer: 0,
    explanation: "大潮（Spring Tide）發生在朔望日：日月地一線，引潮力向量相加疊加，滿潮位最高乾潮位最低，潮差最大；初七初八與二十二二十三日月夾角 90° 引潮力抵消形成小潮（Neap Tide）。",
    difficulty: "基礎"
  },
  {
    category: "物理-力學",
    question: "一輛質量為 1,000 kg 的休旅車以速度 $v = 20\\text{ m/s}$ 在平直公路上行駛。該車輛所具有的「動能（$K = \\frac{1}{2}mv^2$）」為多少焦耳（J）？",
    options: ["200,000 J（即 200 kJ，$\\frac{1}{2} \\times 1000 \\times 20^2 = 500 \\times 400 = 200,000$）", "20,000 J", "400,000 J", "10,000 J"],
    answer: 0,
    explanation: "動能公式 $K = \\frac{1}{2} m v^2 = \\frac{1}{2}(1000)(20^2) = 500 \\times 400 = 200,000$ 焦耳。",
    difficulty: "基礎"
  },
  {
    category: "生物-生態學",
    question: "在生態系營養結構中，綠色植物（如水稻、浮游藻類、森林樹木）透過光合作用將無機物與太陽光能轉化為有機物化學能，在生態系成分分類中屬於？",
    options: ["生產者（Autotrophs / 自營生物，為整個生物圈提供物質與能量基石）", "初級消費者", "次級消費者", "分解者"],
    answer: 0,
    explanation: "生產者是生態系統能量輸入唯一入口：利用光合作用或化能合成將無機碳固化為有機碳儲存能量，為各級異營消費者與分解者提供能量來源。",
    difficulty: "基礎"
  },
  {
    category: "化學-酸鹼與鹽類",
    question: "食用醋的主要有效酸味成分是「乙酸（醋酸）」，其純物質在化學上的分子式為？",
    options: ["$\\text{CH}_3\\text{COOH}$", "$\\text{HCl}$", "$\\text{H}_2\\text{SO}_4$", "$\\text{C}_2\\text{H}_5\\text{OH}$"],
    answer: 0,
    explanation: "乙酸（醋酸）結構簡式為 $\\text{CH}_3\\text{COOH}$，為弱單元有機羧酸，水溶液呈弱酸性（pH 約 2~3）。",
    difficulty: "基礎"
  },
  {
    category: "地科-地質與地球歷史",
    question: "地質學家透過地層中保存的古代生物遺體或遺跡「化石（Fossil）」來劃分地層時代。若某種生物化石具有「演化速度極快、生存時間短促、地理分佈廣闊、數量豐富特徵鮮明」的特點，可用於精確判定地層年代。這種化石在地質學上稱為？",
    options: ["「指準化石（標準化石 / 指導化石，Index Fossil，如寒武紀三葉蟲、中生代菊石）」", "相化石（如珊瑚指示溫暖淺海相）", "活化石", "微體化石"],
    answer: 0,
    explanation: "指準化石判定年代（三葉蟲定古生代、菊石定中生代、恐龍定中生代）；相化石（Facies Fossil）則指示沉積古環境（如珊瑚指示淺海、煤層指示古代溫暖濕潤沼澤森林）。",
    difficulty: "基礎"
  }
];

batch10.forEach((q, idx) => {
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

console.log(`New Science count after batch 10: ${quiz.length}`);

// Uniqueness check
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log(`Unique Science questions: ${s.size}`);

fs.writeFileSync(quizFile, `const scienceQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Successfully updated science-quiz.js!');
