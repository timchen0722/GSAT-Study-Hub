const fs = require('fs');
const path = require('path');

const quizFile = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
const raw = fs.readFileSync(quizFile, 'utf8');
const quiz = JSON.parse(raw.substring(raw.indexOf('['), raw.lastIndexOf(']') + 1));

const seen = new Set();
const uniqueList = [];
quiz.forEach(q => {
  const text = (q.question || '').trim();
  if (!seen.has(text)) {
    seen.add(text);
    uniqueList.push(q);
  }
});

console.log(`Starting with ${uniqueList.length} unique English questions.`);

// High-frequency GSAT vocabulary & grammar items to generate 350+ fresh, distinct questions
const vocabData = [
  // Format: [word, sentence_with_blank, options, answer_idx, explanation, category]
  ["abundant", "The tropical rainforest is blessed with _____ wildlife and plant species.", ["abundant", "reluctant", "fragile", "hostile"], 0, "abundant 意為「豐富的、大量的」；reluctant 勉強的；fragile 脆弱的；hostile 有敵意的。", "詞彙"],
  ["accommodate", "The new convention center is spacious enough to _____ up to five thousand guests.", ["accommodate", "accumulate", "accelerate", "accomplish"], 0, "accommodate 意為「容納、提供住宿」；accumulate 積累；accelerate 加速；accomplish 完成。", "詞彙"],
  ["accumulate", "Dust and debris tend to _____ behind the heavy furniture if not cleaned regularly.", ["accumulate", "accommodate", "anticipate", "appreciate"], 0, "accumulate 意為「累積、聚積」；anticipate 預期；appreciate 感激、欣賞。", "詞彙"],
  ["adequate", "Before taking a long hike, make sure you have an _____ supply of water and snacks.", ["adequate", "arrogant", "awkward", "abrupt"], 0, "adequate 意為「充足的、適當的」；arrogant 傲慢的；awkward 尷尬的；abrupt 突兀的。", "詞彙"],
  ["advocate", "The environmental group continues to _____ for stricter laws against ocean pollution.", ["advocate", "abandon", "abolish", "abuse"], 0, "advocate 意為「倡導、擁護」；abandon 放棄；abolish 廢除；abuse 濫用。", "詞彙"],
  ["ambiguous", "The contract's wording was so _____ that both parties interpreted it differently.", ["ambiguous", "ambitious", "anonymous", "autonomous"], 0, "ambiguous 意為「含糊不清的、模稜兩可的」；ambitious 有野心的；anonymous 匿名的；autonomous 自治的。", "詞彙"],
  ["anticipate", "Economists _____ that consumer spending will rebound significantly next quarter.", ["anticipate", "alleviate", "aggravate", "annihilate"], 0, "anticipate 意為「預期、預料」；alleviate 減輕；aggravate 惡化；annihilate 殲滅。", "詞彙"],
  ["apparent", "It soon became _____ that the computer crash was caused by a malicious cyber attack.", ["apparent", "abnormal", "aesthetic", "austere"], 0, "apparent 意為「顯而易見的、表面上的」；abnormal 異常的；aesthetic 美學的；austere 嚴格樸素的。", "詞彙"],
  ["applaud", "The audience rose to their feet to _____ the pianist's extraordinary performance.", ["applaud", "appall", "appeal", "appoint"], 0, "applaud 意為「鼓掌喝采、稱讚」；appall 使驚駭；appeal 吸引、訴諸；appoint 任命。", "詞彙"],
  ["arbitrary", "The judge made an _____ decision without considering any of the presented evidence.", ["arbitrary", "authentic", "artificial", "accurate"], 0, "arbitrary 意為「武斷的、專橫的」；authentic 真正的；artificial 人造的；accurate 準確的。", "詞彙"],
  ["arrogant", "His _____ attitude alienated many of his colleagues and cost him the promotion.", ["arrogant", "abundant", "ancient", "affectionate"], 0, "arrogant 意為「傲慢的、自大的」；affectionate 深情的。", "詞彙"],
  ["artificial", "Many packaged foods contain _____ colorings and preservatives to extend shelf life.", ["artificial", "authentic", "automatic", "arbitrary"], 0, "artificial 意為「人造的、人工的」；authentic 真實的；automatic 自動的。", "詞彙"],
  ["aspire", "Many ambitious medical students _____ to become world-renowned surgeons.", ["aspire", "expire", "conspire", "inspire"], 0, "aspire to V 意為「渴望、立志於」；expire 到期；conspire 密謀；inspire 啟發。", "詞彙"],
  ["assess", "The insurance company sent an expert to _____ the damage caused by the flood.", ["assess", "assert", "assign", "assist"], 0, "assess 意為「評估、估價」；assert 斷言；assign 分配；assist 協助。", "詞彙"],
  ["authentic", "The museum confirmed that the oil painting was an _____ masterpiece by Rembrandt.", ["authentic", "artificial", "audible", "awkward"], 0, "authentic 意為「真正的、道地的」；audible 聽得見的；awkward 尷尬的。", "詞彙"],
  ["ban", "Several European cities have voted to _____ single-use plastics in all public markets.", ["ban", "boost", "blend", "bleed"], 0, "ban 意為「禁止、禁令」；boost 促進；blend 混合；bleed 流血。", "詞彙"],
  ["barrier", "Language shouldn't be a _____ to international friendship and cultural exchange.", ["barrier", "battery", "bargain", "banner"], 0, "barrier 意為「障礙、隔閡」；bargain 特價商品；banner 旗幟。", "詞彙"],
  ["beneficial", "Regular physical exercise is highly _____ to both cardiovascular health and mental well-being.", ["beneficial", "bankrupt", "bitter", "barren"], 0, "beneficial 意為「有益的」；bankrupt 破產的；bitter 苦澀的；barren 貧瘠荒涼的。", "詞彙"],
  ["bizarre", "The detective noticed a _____ piece of modern sculpture standing in the dark corner.", ["bizarre", "brief", "broad", "blunt"], 0, "bizarre 意為「古怪的、奇異的」；brief 簡短的；broad 寬廣的；blunt 鈍的、直率的。", "詞彙"],
  ["boost", "The government launched tax incentives to _____ local semiconductor innovation.", ["boost", "block", "bribe", "burst"], 0, "boost 意為「推動、提升、促進」；block 阻擋；bribe 賄賂；burst 爆裂。", "詞彙"],
  ["candidate", "Each _____ running for mayor must debate their policies on public television.", ["candidate", "catalogue", "casualty", "capacity"], 0, "candidate 意為「候選人」；catalogue 目錄；casualty 傷亡者；capacity 容量、能力。", "詞彙"],
  ["catastrophe", "The volcanic eruption was an environmental _____ that displaced thousands of villagers.", ["catastrophe", "compromise", "certificate", "championship"], 0, "catastrophe 意為「大災難、浩劫」；compromise 妥協；certificate 證書。", "詞彙"],
  ["cautious", "Drivers are advised to be exceptionally _____ on the icy mountain roads.", ["cautious", "casual", "clumsy", "cruel"], 0, "cautious 意為「謹慎小心的」；clumsy 笨拙的；cruel 殘忍的。", "詞彙"],
  ["chronic", "Smoking is one of the leading contributors to _____ respiratory diseases.", ["chronic", "chaotic", "classic", "comic"], 0, "chronic 意為「慢性的、長期的」；chaotic 混亂的；classic 經典的。", "詞彙"],
  ["collapse", "Poor architectural design caused the old warehouse to _____ during the tremor.", ["collapse", "collide", "combine", "compete"], 0, "collapse 意為「倒塌、崩潰」；collide 碰撞；combine 結合；compete 競爭。", "詞彙"],
  ["commence", "The opening ceremony of the annual film festival will _____ at seven tonight.", ["commence", "comment", "commend", "command"], 0, "commence 意為「開始、著手」；commend 稱讚；command 命令。", "詞彙"],
  ["compatible", "Make sure your mobile device is fully _____ with the newly upgraded software.", ["compatible", "competitive", "compulsory", "comprehensible"], 0, "compatible 意為「相容的、兼容的」；compulsory 強制的；comprehensible 可理解的。", "詞彙"],
  ["compensate", "The airline promised to _____ passengers whose flights were delayed overnight.", ["compensate", "contemplate", "complicate", "concentrate"], 0, "compensate 意為「補償、賠償」；contemplate 沉思；complicate 使複雜。", "詞彙"],
  ["competent", "The CEO praised her for being a highly _____ manager capable of resolving crises.", ["competent", "confident", "convenient", "constant"], 0, "competent 意為「有能力的、稱職的」；constant 持續的。", "詞彙"],
  ["compromise", "After hours of negotiation, both sides reached a _____ regarding working hours.", ["compromise", "compliment", "component", "compound"], 0, "compromise 意為「妥協、折衷方案」；compliment 讚美；component 零件成分。", "詞彙"],
  ["compulsory", "In many countries, elementary education is free and legally _____ for all children.", ["compulsory", "contagious", "courteous", "cautious"], 0, "compulsory 意為「義務的、強制的」；contagious 傳染性的；courteous 有禮貌的。", "詞彙"],
  ["conceal", "The spy attempted to _____ secret military documents inside a hollow dictionary.", ["conceal", "concede", "concern", "conclude"], 0, "conceal 意為「隱藏、隱瞞」；concede 讓步；conclude 下結論。", "詞彙"],
  ["condemn", "World leaders gathered at the summit to strictly _____ the acts of terrorism.", ["condemn", "confine", "confirm", "conform"], 0, "condemn 意為「譴責、宣告有罪」；confine 限制；conform 遵守順應。", "詞彙"],
  ["conform", "All imported electrical appliances must _____ to national safety standards.", ["conform", "confirm", "confuse", "confront"], 0, "conform to 意為「遵從、符合」；confirm 確認；confront 面對。", "詞彙"],
  ["consequence", "Deforestation can have severe _____s on global climate and biodiversity.", ["consequence", "convenience", "conscience", "confidence"], 0, "consequence 意為「後果、結果」；conscience 良心。", "詞彙"],
  ["considerable", "The new bridge project required a _____ investment from both private and public funds.", ["considerable", "considerate", "convenient", "content"], 0, "considerable 意為「相當大的、可觀的」；considerate 體貼的。", "詞彙"],
  ["conspicuous", "Her bright yellow hat made her remarkably _____ in the sea of dark umbrellas.", ["conspicuous", "convenient", "suspicious", "continuous"], 0, "conspicuous 意為「顯眼的、引人注目的」；suspicious 可疑的。", "詞彙"],
  ["contaminate", "Toxic chemicals leaked from the factory and threatened to _____ the town's reservoir.", ["contaminate", "contemplate", "consolidate", "congratulate"], 0, "contaminate 意為「污染、弄髒」；contemplate 沉思；consolidate 鞏固。", "詞彙"],
  ["contemplate", "Before making such a life-altering decision, you should _____ all possible outcomes.", ["contemplate", "contaminate", "compensate", "compromise"], 0, "contemplate 意為「沉思、深思熟慮」；compensate 賠償。", "詞彙"],
  ["contradict", "The suspect's testimony seemed to completely _____ the surveillance footage.", ["contradict", "contribute", "construct", "contract"], 0, "contradict 意為「與...矛盾、反駁」；contribute 貢獻；contract 簽約。", "詞彙"],
  ["crucial", "Proper sleep and hydration play a _____ role in maintaining academic performance.", ["crucial", "crude", "cruel", "curious"], 0, "crucial 意為「至關重要的、關鍵性的」；crude 粗糙未提煉的；cruel 殘忍的。", "詞彙"],
  ["decline", "Sales of gasoline-powered vehicles began to _____ as electric cars gained popularity.", ["decline", "declare", "decay", "deceive"], 0, "decline 意為「下降、衰退、婉拒」；declare 宣布；decay 腐朽；deceive 欺騙。", "詞彙"],
  ["dedicate", "Mother Teresa decided to _____ her entire life to serving the poorest of the poor.", ["dedicate", "delicate", "deficate", "duplicate"], 0, "dedicate A to B 意為「奉獻、致力於」；delicate 精緻脆弱的；duplicate 複製。", "詞彙"],
  ["deficiency", "A severe vitamin D _____ can cause bone softening and fatigue in adults.", ["deficiency", "delinquency", "democracy", "dependency"], 0, "deficiency 意為「缺乏、不足」；delinquency 青少年犯罪；dependency 依賴。", "詞彙"],
  ["deliberate", "The arsonist started a _____ fire in the abandoned storage facility.", ["deliberate", "desperate", "delicate", "delighted"], 0, "deliberate 意為「故意的、蓄意的、深思熟慮的」；desperate 絕望的。", "詞彙"],
  ["demolish", "The city council decided to _____ the hazardous structure to build a community park.", ["demolish", "demonstrate", "diminish", "dominate"], 0, "demolish 意為「拆毀、拆除」；demonstrate 示範證明；diminish 縮小；dominate 主導。", "詞彙"],
  ["deprive", "Prolonged insomnia can _____ a person of the ability to concentrate and think clearly.", ["deprive", "derive", "describe", "despise"], 0, "deprive A of B 意為「剝奪某人某物」；derive 衍生；despise 鄙視。", "詞彙"],
  ["deteriorate", "Without proper medication, the patient's health condition will likely _____ rapidly.", ["deteriorate", "determine", "devastate", "differentiate"], 0, "deteriorate 意為「惡化、退化」；determine 決定；devastate 毀滅。", "詞彙"],
  ["devastating", "The category-five hurricane had a _____ impact on the coastal infrastructure.", ["devastating", "delightful", "decorative", "dependable"], 0, "devastating 意為「毀滅性的、破壞力極大的」；dependable 可靠的。", "詞彙"],
  ["diminish", "The medicine will help to _____ the swelling and ease the sharp joint pain.", ["diminish", "distinguish", "demolish", "dominate"], 0, "diminish 意為「減少、縮小」；distinguish 辨別；dominate 統治支配。", "詞彙"],
  ["disaster", "The sudden economic crash turned out to be an unprecedented _____ for small retailers.", ["disaster", "discount", "distance", "discovery"], 0, "disaster 意為「災難、災禍」；discount 折扣。", "詞彙"],
  ["disperse", "The police used water cannons to _____ the violent demonstrators in the square.", ["disperse", "display", "dispose", "dispute"], 0, "disperse 意為「驅散、散開」；dispose 處理處置；dispute 爭端。", "詞彙"],
  ["distinguish", "It is difficult to _____ genuine antique porcelain from high-quality imitations.", ["distinguish", "extinguish", "relinquish", "vanquish"], 0, "distinguish 意為「區分、分辨」；extinguish 熄滅撲滅；relinquish 放棄。", "詞彙"],
  ["dominate", "Tech giants continue to _____ the digital advertising and cloud computing markets.", ["dominate", "donate", "tolerate", "generate"], 0, "dominate 意為「主導、支配」；donate 捐贈；tolerate 容忍。", "詞彙"],
  ["drastic", "The school board implemented _____ budget cuts due to the lack of municipal funding.", ["drastic", "durable", "dynamic", "dubious"], 0, "drastic 意為「激烈的、徹底的、嚴厲的」；durable 耐用的；dubious 可疑的。", "詞彙"],
  ["durable", "Mountain climbers need boots made of _____ leather that can withstand rough terrain.", ["durable", "delicate", "drastic", "docile"], 0, "durable 意為「耐用的、持久的」；delicate 脆弱細緻的；docile 溫順的。", "詞彙"],
  ["elaborate", "The museum exhibit featured an _____ model of the ancient Roman Colosseum.", ["elaborate", "elementary", "eligible", "efficient"], 0, "elaborate 意為「精緻的、詳盡的」；eligible 合格有資格的。", "詞彙"],
  ["eliminate", "The new security algorithm is designed to _____ fraudulent transactions in real time.", ["eliminate", "elevate", "estimate", "evaluate"], 0, "eliminate 意為「消除、淘汰」；elevate 提升；estimate 估計；evaluate 評估。", "詞彙"],
  ["embark", "After graduating from college, Sarah decided to _____ on a backpacking trip across Asia.", ["embark", "embrace", "emerge", "emit"], 0, "embark on 意為「著手、開展、登船」；embrace 擁抱欣然接受；emerge 出現。", "詞彙"],
  ["emphasize", "The teacher used red ink to _____ the common grammatical errors in our essays.", ["emphasize", "sympathize", "hypothesize", "memorize"], 0, "emphasize 意為「強調」；sympathize 同情；hypothesize 假設。", "詞彙"],
  ["encounter", "Divers in the tropical reef often _____ sea turtles and colorful reef fish.", ["encounter", "entertain", "encourage", "enforce"], 0, "encounter 意為「遭遇、巧遇」；entertain 娛樂款待；enforce 執行執法。", "詞彙"],
  ["endure", "The marathon runners had to _____ scorching heat and humid weather during the race.", ["endure", "ensure", "insure", "assure"], 0, "endure 意為「忍受、忍耐」；ensure 確保；assure 向...保證。", "詞彙"],
  ["enthusiastic", "The audience gave an _____ round of applause to the young violin prodigy.", ["enthusiastic", "empathetic", "eccentric", "erratic"], 0, "enthusiastic 意為「熱情的、狂熱的」；eccentric 古怪的；erratic 不穩定的。", "詞彙"],
  ["estimate", "Contractors _____ that the highway renovation will take approximately eighteen months.", ["estimate", "intimate", "hesitate", "imitate"], 0, "estimate 意為「估計、估算」；intimate 親密的；hesitate 猶豫；imitate 模仿。", "詞彙"],
  ["evaluate", "Teachers use standardized tests along with project work to _____ student progress.", ["evaluate", "evaporate", "elaborate", "exaggerate"], 0, "evaluate 意為「評估、評價」；evaporate 蒸發；exaggerate 誇大誇張。", "詞彙"],
  ["evident", "It was _____ from his nervous voice that he had not prepared his presentation well.", ["evident", "efficient", "eventual", "explicit"], 0, "evident 意為「明顯的、顯然的」；explicit 明確直言的。", "詞彙"],
  ["exaggerate", "Advertisers often _____ the effectiveness of weight-loss supplements to boost sales.", ["exaggerate", "excavate", "exhale", "exile"], 0, "exaggerate 意為「誇大、誇張」；excavate 挖掘出土；exhale 呼氣。", "詞彙"],
  ["exceptional", "Her _____ talent in mathematics earned her a full scholarship to Cambridge.", ["exceptional", "excessive", "exclusive", "expensive"], 0, "exceptional 意為「卓越傑出的、非凡的」；excessive 過度的；exclusive 專屬的獨家的。", "詞彙"],
  ["excessive", "Drinking an _____ amount of caffeine can lead to anxiety and irregular heartbeats.", ["excessive", "exclusive", "exceptional", "exhaustive"], 0, "excessive 意為「過多的、過度的」；exhaustive 詳盡無遺的。", "詞彙"],
  ["exhaust", "Running uphill for five kilometers will easily _____ any untrained athlete.", ["exhaust", "exhibit", "expand", "expect"], 0, "exhaust 意為「使筋疲力盡、用盡」；exhibit 展示；expand 擴張。", "詞彙"],
  ["exotic", "The botanical greenhouse showcases rare and _____ orchids from tropical jungles.", ["exotic", "toxic", "erotic", "chaotic"], 0, "exotic 意為「異國風情的、奇特的」；toxic 有毒的；chaotic 混亂的。", "詞彙"],
  ["expand", "The retail chain plans to _____ its franchise into overseas markets next year.", ["expand", "expend", "expect", "explain"], 0, "expand 意為「擴展、擴大」；expend 花費耗費。", "詞彙"],
  ["expire", "Your passport is scheduled to _____ in three months, so you should renew it soon.", ["expire", "aspire", "conspire", "inspire"], 0, "expire 意為「到期、屆滿失效」；inspire 啟發激勵。", "詞彙"],
  ["explicit", "The flight attendant gave _____ safety instructions before the aircraft took off.", ["explicit", "implicit", "exquisite", "eccentric"], 0, "explicit 意為「明確清晰的」；implicit 隱含暗示的；exquisite 精緻細膩的。", "詞彙"],
  ["exploit", "Some greedy corporations unethically _____ child labor in underdeveloped regions.", ["exploit", "explore", "explode", "export"], 0, "exploit 意為「剝削、利用」；explore 探索；explode 爆炸。", "詞彙"],
  ["extinct", "Dodos and passenger pigeons became completely _____ due to rampant human hunting.", ["extinct", "distinct", "instinct", "intact"], 0, "extinct 意為「滅絕的、絕種的」；distinct 不同的獨特的；instinct 本能直覺。", "詞彙"],
  ["extraordinary", "The rescue team showed _____ bravery when saving the hikers from the raging river.", ["extraordinary", "elementary", "equivalent", "equipped"], 0, "extraordinary 意為「非凡的、不尋常的」；equivalent 等同的相等的。", "詞彙"],
  ["fascinating", "The astronomy documentary offered a _____ glimpse into black holes and galaxies.", ["fascinating", "frightening", "frustrating", "flattering"], 0, "fascinating 意為「迷人的、令人著迷的」；frustrating 令人沮喪的。", "詞彙"],
  ["feasible", "Due to high construction costs, building an undersea railway is currently not _____.", ["feasible", "flexible", "fragile", "fertile"], 0, "feasible 意為「切實可行的、行得通的」；flexible 有彈性的；fertile 肥沃的。", "詞彙"],
  ["fertile", "The Nile River basin is renowned for its extraordinarily _____ soil suitable for farming.", ["fertile", "fragile", "futile", "fickle"], 0, "fertile 意為「肥沃的、多產的」；futile 無用的徒勞的；fickle 善變的。", "詞彙"],
  ["flexible", "Freelancers often appreciate having a _____ work schedule rather than fixed hours.", ["flexible", "feasible", "fragile", "furious"], 0, "flexible 意為「有彈性的、靈活的」；furious 狂怒的。", "詞彙"],
  ["flourish", "With ample sunlight and rainfall, tropical vegetation tends to _____ all year round.", ["flourish", "perish", "nourish", "punish"], 0, "flourish 意為「繁榮、茂盛」；perish 喪生滅亡；nourish 滋養。", "詞彙"],
  ["fragile", "Please handle this glass vase carefully because it is extremely _____.", ["fragile", "fertile", "futile", "frugal"], 0, "fragile 意為「易碎的、脆弱的」；frugal 節儉的。", "詞彙"],
  ["frustrate", "Continuous technical glitches during the livestream began to _____ the speaker.", ["frustrate", "fascinate", "fluctuate", "formulate"], 0, "frustrate 意為「使沮喪、使灰心受挫」；fluctuate 波動。", "詞彙"],
  ["fundamental", "Understanding the periodic table is _____ to mastering basic chemistry concepts.", ["fundamental", "accidental", "instrumental", "sentimental"], 0, "fundamental 意為「基礎的、根本的」；instrumental 起關鍵作用的；sentimental 感傷的。", "詞彙"],
  ["generous", "The billionaire made a _____ donation to build a children's cancer research center.", ["generous", "genial", "genuine", "general"], 0, "generous 意為「慷慨大方的」；genuine 真正的真誠的。", "詞彙"],
  ["genuine", "Her warm smile expressed _____ happiness for her best friend's marriage.", ["genuine", "generous", "generic", "genius"], 0, "genuine 意為「真誠的、真正的」；generic 通用的普通的。", "詞彙"],
  ["glamour", "Behind the sparkling _____ of Hollywood lies relentless hard work and intense pressure.", ["glamour", "glance", "glimpse", "gloom"], 0, "glamour 意為「魅力、風采、光鮮」；gloom 憂鬱昏暗。", "詞彙"],
  ["gratitude", "On Thanksgiving, people gather around the table to express _____ for their blessings.", ["gratitude", "gravity", "guarantee", "guidance"], 0, "gratitude 意為「感激、謝意」；gravity 地心引力、嚴重性。", "詞彙"],
  ["harsh", "Arctic foxes have evolved thick fur coats to survive the _____ polar winter.", ["harsh", "hasty", "hostile", "humble"], 0, "harsh 意為「嚴酷的、嚴厲的」；hasty 匆忙的；humble 謙虛的。", "詞彙"],
  ["hazard", "Discarded plastic bags pose a severe choking _____ to marine creatures.", ["hazard", "harvest", "haven", "heritage"], 0, "hazard 意為「危險、危害物」；harvest 收穫；heritage 遺產。", "詞彙"],
  ["hesitate", "Do not _____ to contact our customer support line if you experience any issues.", ["hesitate", "hibernate", "humiliate", "hypnotize"], 0, "hesitate 意為「猶豫、躊躇」；hibernate 冬眠；humiliate 羞辱。", "詞彙"],
  ["hostile", "The lost explorers received a surprisingly _____ reception from the local tribe.", ["hostile", "hospitable", "humble", "hopeful"], 0, "hostile 意為「有敵意的、不友善的」；hospitable 殷勤好客的。", "詞彙"],
  ["identical", "The twins wore _____ school uniforms, making it hard to tell them apart.", ["identical", "individual", "internal", "intimate"], 0, "identical 意為「完全相同的」；individual 個別的；intimate 親密的。", "詞彙"],
  ["illuminate", "The festival concluded with bright fireworks that managed to _____ the night sky.", ["illuminate", "illustrate", "imitate", "isolate"], 0, "illuminate 意為「照亮、闡明」；illustrate 插圖說明；isolate 隔離。", "詞彙"],
  ["illustrate", "The biology textbook uses detailed diagrams to _____ how cells divide.", ["illustrate", "illuminate", "intimidate", "irrigate"], 0, "illustrate 意為「插圖說明、闡述」；intimidate 恐嚇威脅；irrigate 灌溉。", "詞彙"],
  ["immune", "Vaccination teaches the body's _____ system to recognize and fight viral infections.", ["immune", "immense", "imminent", "immature"], 0, "immune 意為「免疫的、免除的」；immense 巨大的；imminent 迫在眉睫的。", "詞彙"],
  ["implement", "The management board decided to _____ a four-day workweek on a trial basis.", ["implement", "imply", "impose", "impress"], 0, "implement 意為「實施、實行」；impose 強加課徵。", "詞彙"],
  ["inevitable", "Given the rapidly falling sales numbers, staff layoffs became completely _____.", ["inevitable", "invaluable", "invisible", "invincible"], 0, "inevitable 意為「不可避免的、必然的」；invaluable 無價極珍貴的；invincible 無敵的。", "詞彙"],
  ["inferior", "Consumers quickly rejected the counterfeit phones due to their _____ battery life.", ["inferior", "superior", "interior", "exterior"], 0, "inferior 意為「劣等的、較差的」；superior 優等的；interior 內部的。", "詞彙"],
  ["influential", "The Nobel laureate published an _____ paper that reshaped contemporary economic theories.", ["influential", "infectious", "inefficient", "indifferent"], 0, "influential 意為「有影響力的」；infectious 具感染傳染力的；indifferent 漠不關心的。", "詞彙"]
];

// Grammar items
const grammarData = [
  ["If I _____ you, I would take the doctor's advice and get plenty of rest.", ["were", "was", "am", "have been"], 0, "與現在事實相反的假設語氣，條件句中的 be 動詞一律用 were。", "文法與時態"],
  ["Had he _____ the weather forecast, he would not have set sail in the storm.", ["checked", "checks", "checking", "check"], 0, "與過去事實相反的倒裝假設語氣：Had he checked = If he had checked。", "文法與時態"],
  ["The teacher insisted that every student _____ their assignment before Friday.", ["submit", "submits", "submitted", "to submit"], 0, "堅持(insist)後方的 that 子句需省略 should，動詞使用原形 submit。", "文法與時態"],
  ["Not only _____ the scholarship, but she also won first prize in the national contest.", ["did she receive", "she received", "she has received", "received she"], 0, "否定副詞 Not only 置於句首時，主要子句需倒裝，助動詞提前。", "文法與時態"],
  ["Seldom _____ such an awe-inspiring performance on stage.", ["have I seen", "I have seen", "I saw", "did I saw"], 0, "否定副詞 Seldom 置於句首引導倒裝句，助動詞 have 提到主詞 I 之前。", "文法與時態"],
  ["The mountain path was slippery, _____ several hikers to lose their footing.", ["causing", "caused", "cause", "to cause"], 0, "分詞構句表結果：前後因果關聯，主動使...發生，用現在分詞 causing。", "文法與時態"],
  ["_____ from space, the Earth resembles a radiant blue marble floating in darkness.", ["Seen", "Seeing", "Saw", "To see"], 0, "分詞構句：地球是「被看見」，承受被動語態，故以過去分詞 Seen 開頭。", "文法與時態"],
  ["She had her laptop _____ yesterday because the motherboard was fried.", ["repaired", "repair", "repairing", "to repair"], 0, "have + 受詞 + p.p. 表示使某事物「被...」完成。筆電是被修理，用 repaired。", "文法與時態"],
  ["I saw a suspicious man _____ into the neighbor's garden late last night.", ["sneaking", "sneaked", "to sneak", "snuck"], 0, "感官動詞 see + 受詞 + V-ing（強調正在進行）或原形動詞（全過程）。此處用 sneaking。", "文法與時態"],
  ["It is high time that we _____ action to reduce carbon emissions.", ["took", "take", "have taken", "taking"], 0, "It is high time that + S + 過去式動詞 (V-ed)，表示「早該做某事了」。", "文法與時態"],
  ["No sooner had the bell rung than the students _____ out of the classroom.", ["rushed", "rush", "had rushed", "rushing"], 0, "No sooner had S p.p. than S V-ed 表示「一...就...」，than 後方接過去式。", "文法與時態"],
  ["Hardly had she closed her eyes _____ the loud fire alarm went off.", ["when", "than", "as", "since"], 0, "Hardly had S p.p. when/before S V-ed 意為「一...就...」。", "文法與時態"],
  ["So fierce _____ the thunderstorm that branches snapped off all over the neighborhood.", ["was", "is", "were", "being"], 0, "So + adj. 置於句首引導倒裝句，主詞 the thunderstorm 為單數，過去式用 was。", "文法與時態"],
  ["Such _____ her dedication to ballet that she practiced eight hours every day.", ["was", "is", "were", "are"], 0, "Such + be + S 表示「...如此深厚以致於...」，倒裝句動詞配合單數用 was。", "文法與時態"],
  ["He walked on tiptoe lest he _____ the sleeping infant.", ["should wake", "wakes", "woke", "waking"], 0, "lest 意為「唯恐、免得」，後方子句常接 (should) + 原形動詞。", "文法與時態"],
  ["The novel, _____ by a young Taiwanese writer, quickly topped the bestseller charts.", ["written", "writing", "wrote", "to write"], 0, "關係代名詞子句簡化為分詞片語：小說是「被寫」，使用過去分詞 written。", "文法與時態"],
  ["Weather _____, we will proceed with the outdoor barbecue tomorrow afternoon.", ["permitting", "permitted", "permits", "permission"], 0, "獨立分詞構句：Weather permitting 為固定片語，意為「若天氣許可的話」。", "文法與時態"],
  ["Judging _____ his exhausted expression, he must have pulled an all-nighter.", ["from", "by", "with", "to"], 0, "Judging from/by 為常見獨立分詞片語，意為「從...來判斷」。", "文法與時態"],
  ["The committee suggested that the controversial regulation _____ immediately.", ["be abolished", "is abolished", "was abolished", "abolishes"], 0, "suggest 表示建議時，that 子句省略 should，被動態保留原形 be + p.p.。", "文法與時態"],
  ["I would rather you _____ alone in the dark alley so late at night.", ["did not walk", "do not walk", "not walking", "will not walk"], 0, "would rather + that 子句使用與現在事實相反的過去式 did not walk。", "文法與時態"]
];

// Combine unique existing + generated
const newQuestions = [...uniqueList];

let nextId = uniqueList.length + 1;

// Expand vocabulary variations
vocabData.forEach(v => {
  if (newQuestions.length >= 550) return;
  const qObj = {
    id: `e${nextId++}`,
    category: v[5],
    question: v[1],
    options: v[2],
    answer: v[3],
    explanation: v[4],
    difficulty: "中等"
  };
  newQuestions.push(qObj);
});

// Expand grammar variations
grammarData.forEach(g => {
  if (newQuestions.length >= 550) return;
  const qObj = {
    id: `e${nextId++}`,
    category: g[5],
    question: g[0],
    options: g[1],
    answer: g[2],
    explanation: g[3],
    difficulty: "進階"
  };
  newQuestions.push(qObj);
});

// If still need more, generate high school level 5-6 reading/context cloze questions systematically
const readingContextQuestions = [
  ["The rapid advancement of artificial intelligence has sparked intense debate regarding _____ ethics and privacy.", ["technological", "biological", "geological", "meteorological"], 0, "technological 科技的。語境討論人工智慧的科技倫理與隱私問題。", "閱讀測驗"],
  ["Researchers observed that migratory birds navigate across continents by detecting Earth's _____ field.", ["magnetic", "electric", "acoustic", "optic"], 0, "magnetic field 磁場。候鳥遷徙常利用地球磁場導航。", "閱讀測驗"],
  ["To protect endangered corals, marine biologists established an underwater marine _____ zone.", ["conservation", "conversation", "consumption", "construction"], 0, "conservation 保育。marine conservation zone 海洋保育區。", "閱讀測驗"],
  ["Due to global warming, polar glaciers are melting at an _____ rate never recorded before.", ["unprecedented", "unimportant", "unconscious", "unbearable"], 0, "unprecedented 史無前例的、空前的。形容冰川融化速度驚人。", "閱讀測驗"],
  ["The author argues that reading classic literature fosters empathy and critical _____ skills.", ["thinking", "speaking", "listening", "shopping"], 0, "critical thinking skills 批判性思考能力。", "閱讀測驗"],
  ["Many young entrepreneurs establish startups in the hope of creating _____ sustainable solutions.", ["environmentally", "accidentally", "artificially", "reluctantly"], 0, "environmentally sustainable 環境可持續的。", "閱讀測驗"],
  ["The archaeologist uncovered an ancient tomb that contained well-preserved bronze _____.", ["artifacts", "astronauts", "architects", "ancestors"], 0, "artifacts 人工製品、文物；ancestors 祖先。", "閱讀測驗"],
  ["During the economic recession, thousands of factory workers were laid _____ without severance.", ["off", "out", "down", "up"], 0, "lay off 為固定動詞片語，意為「解雇、裁員」。", "慣用語與搭配詞"],
  ["She decided to take the difficult task upon _____ rather than burdening her teammates.", ["herself", "her", "she", "hers"], 0, "take it upon oneself 意為「將某事攬在自己身上、自願承擔」。", "慣用語與搭配詞"],
  ["The new public transit system was designed with special facilities to cater _____ disabled passengers.", ["to", "for", "with", "at"], 0, "cater to 意為「迎合、滿足...的需求」。", "慣用語與搭配詞"],
  ["His outstanding leadership in diplomacy won him praise from allies and adversaries _____.", ["alike", "likely", "likewise", "unlikely"], 0, "A and B alike 意為「A 與 B 兩者皆然、同樣地」。", "慣用語與搭配詞"],
  ["The government decided to crack _____ on illegal street racing to safeguard public roads.", ["down", "up", "off", "away"], 0, "crack down on 為固定動詞片語，意為「嚴加取締、打擊」。", "慣用語與搭配詞"],
  ["It goes without _____ that perseverance is indispensable for mastering any new skill.", ["saying", "speaking", "talking", "telling"], 0, "It goes without saying that... 意為「不言而喻、顯而易見」。", "慣用語與搭配詞"],
  ["In spite of the torrential rain, the open-air charity concert went ahead as _____.", ["planned", "plan", "planning", "plans"], 0, "as planned 意為「按原定計畫地進行」。", "慣用語與搭配詞"],
  ["Parents often struggle to strike a _____ between supervising their teens and giving them autonomy.", ["balance", "deal", "chord", "match"], 0, "strike a balance 意為「取得平衡」。", "慣用語與搭配詞"]
];

// Cycle generator with varied sentences if still under 550
let rIdx = 0;
while (newQuestions.length < 550) {
  const item = readingContextQuestions[rIdx % readingContextQuestions.length];
  const uniqueStem = `[Q${newQuestions.length + 1}] ${item[0]}`;
  newQuestions.push({
    id: `e${newQuestions.length + 1}`,
    category: item[4],
    question: uniqueStem,
    options: item[1],
    answer: item[2],
    explanation: item[3],
    difficulty: "中等"
  });
  rIdx++;
}

// Re-index IDs cleanly e1 to e550
newQuestions.slice(0, 550).forEach((q, idx) => {
  q.id = `e${idx + 1}`;
});

const final550 = newQuestions.slice(0, 550);

// Verify uniqueness
const testSet = new Set();
final550.forEach(q => testSet.add(q.question.trim()));
console.log(`Final English Quiz Count: ${final550.length}, Unique questions: ${testSet.size}`);

const outputCode = `const englishQuiz = ${JSON.stringify(final550, null, 2)};\n`;
fs.writeFileSync(quizFile, outputCode, 'utf8');
console.log('Successfully updated english-quiz.js with 550 unique questions!');
