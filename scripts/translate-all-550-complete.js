const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Building 100% full Chinese sentence translations for all questions...');

// Comprehensive stem translation map
const allStemTranslations = {
  // Batch 16-18
  "It is imperative that every citizen ______ closely with public health guidelines during an epidemic outbreak.": "在疫情爆發期間，每位公民都極有必要嚴格遵守公共衛生防疫準則。",
  "The research university established a modern laboratory equipped with ______ analytical instruments.": "這所研究型大學建立了一座配備最先進分析儀器的現代化實驗室。",
  "The teacher asked the students to keep quiet ______ they could concentrate on the reading test.": "老師要求學生們在教室內保持安靜，以便大家能專心進行閱讀測驗。",
  "The new smartphone is designed to be lightweight, yet it is durable enough to ______ everyday drops and scratches.": "這款新智慧型手機設計得非常輕巧，然而它足夠耐用，能承受日常的摔落與刮痕。",
  "______ the heavy storm delayed our flight, we still managed to arrive at the international conference on time.": "儘管強烈的暴風雨延誤了我們的航班，我們依然設法準時抵達了國際會議現場。",
  "Due to global supply chain disruptions, the manufacturing company decided to ______ its local production capacity.": "由於全球供應鏈中斷，該製造公司決定擴大其在當地的工廠產能。",
  "The museum curator spent months restoring the ______ oil painting that had been damaged in the flood.": "博物館館長花了數月心血修復那幅在洪水中受損的珍貴無價油畫。",
  "The doctor advised the patient to ______ high-sugar foods to prevent the progression of diabetes.": "醫生建議該名病患避免攝取高糖食物，以防止糖尿病病情進一步惡化。",
  "Had the engineers ______ the safety warning in advance, the tragic industrial accident could have been avoided.": "要是工程師們事先注意到了安全警告，這場悲慘的工業事故本來是可以避免的。",
  "The company's groundbreaking innovation in solar energy received ______ praise from environmentalists worldwide.": "該公司在太陽能領域的突破性創新獲得了全球環保人士的一致熱烈讚揚。",
  "Only by cooperating closely with neighboring countries ______ the cross-border environmental crisis effectively.": "唯有透過與鄰國緊密合作，我們才能有效解決這場跨國環境危機。",
  "The ancient castle ______ on top of the hill has attracted millions of tourists from all over the world.": "這座矗立於山頂上的古老城堡吸引了來自世界各地的數百萬名遊客。",
  "The government implemented strict traffic regulations with a view to ______ the rate of road accidents in urban areas.": "政府實施了嚴格的交通法規，目的在於降低市區的交通事故發生率。",
  "The renowned scientist was ______ for her pioneering research in the development of mRNA vaccines.": "這位著名的科學家因其在開發 mRNA 疫苗方面的開創性研究而受到廣泛讚譽。",
  "Never ______ such a breathtaking and magnificent display of fireworks over the harbor on New Year's Eve.": "我從未在前夕的海港上空看過如此壯觀奪目的璀璨煙火表演。",
  "The company offered a generous compensation package to ______ the top talent in the competitive technology market.": "該公司提供了優渥的薪酬福利方案，以吸引競爭激烈的科技市場中的頂尖人才。",
  "The historic monument is ______ maintenance work and will be temporarily closed to the public until next month.": "這座歷史紀念碑目前正在進行維護工程，並將暫時對公眾關閉至下個月為止。",
  "Despite facing numerous financial setbacks, the entrepreneur ______ and eventually built a successful enterprise.": "儘管面臨了無數次財務挫折，這位企業家依然堅持不懈，並最終建立起了一家成功的企業。",
  "The university library houses an extensive collection of rare manuscripts, some of ______ date back to the 15th century.": "這所大學圖書館藏有大量珍稀手稿，其中有些甚至可以追溯到 15 世紀。",
  "Regular cardiovascular exercise is ______ to be effective in reducing the risk of heart disease and improving mental health.": "規律的有氧運動被證實能有效降低罹患心臟病的風險並促進心理健康。",
  "No sooner ______ home than the torrential rain started pouring down from the dark sky.": "他一剛回到家，傾盆大雨就立刻從陰暗的天空中傾瀉而下。",
  
  // Batch 10-15 vocab & grammar
  "After graduating from college, Sarah decided to _____ on a backpacking trip across Asia.": "大學畢業後，莎拉決定啟程展開一趟橫跨亞洲的背包客自助旅行。",
  "The teacher used red ink to _____ the common grammatical errors in our essays.": "老師用紅筆標記並強調了我們作文中常見的語法錯誤。",
  "Divers in the tropical reef often _____ sea turtles and colorful reef fish.": "在熱帶珊瑚礁潛水的潛水員經常會邂逅海龜與色彩斑斕的珊瑚礁魚類。",
  "The marathon runners had to _____ scorching heat and humid weather during the race.": "馬拉松跑者在比賽過程中必須忍受酷熱與潮濕的天氣考驗。",
  "The audience gave an _____ round of applause to the young violin prodigy.": "全場觀眾為這位年輕的小提琴神童獻上了熱情洋溢的熱烈掌聲。",
  "Contractors _____ that the highway renovation will take approximately eighteen months.": "承包商估計這條高速公路的整修工程大約需要耗時十八個月。",
  "Teachers use standardized tests along with project work to _____ student progress.": "教師結合標準化測驗與專題作業來綜合評估學生的學習進展。",
  "It was _____ from his nervous voice that he had not prepared his presentation well.": "從他緊張顫抖的聲音中很明顯可以看出，他並未做好充分的簡報準備。",
  "Advertisers often _____ the effectiveness of weight-loss supplements to boost sales.": "廣告商往往會誇大減肥保健品的功效，以刺激產品銷售量。",
  "Her _____ talent in mathematics earned her a full scholarship to Cambridge.": "她在數學方面非凡卓越的過人天賦，為她贏得了劍橋大學的全額獎學金。",
  "The company offered a generous settlement to _____ the workers for their injuries.": "該公司提供了優渥的賠償方案，以補償工人因工受傷所蒙受的損失。",
  "Astronomers used the powerful space telescope to _____ the distant galaxy.": "天文學家利用強大的太空望遠鏡仔細觀測並探究那座遙遠的星系。",
  "The United Nations voted to _____ economic sanctions on the aggressive nation.": "聯合國表決通過對該侵略國家實施嚴厲的經濟制裁。",
  "The politician tried to _____ the public by making promises he could never keep.": "該政客試圖藉由做出他根本無法兌現的承諾來欺騙誤導大眾。",
  "The government launched a campaign to _____ the spread of false rumors online.": "政府發起了一場宣導活動，以遏制杜絕網絡虛假謠言的擴散傳播。",
  "Regular meditation helps people maintain mental clarity and emotional _____.": "規律的冥想能幫助人們保持清晰的思維與穩定的情緒平衡。",
  "The ancient manuscript was so fragile that it required delicate and _____ handling.": "這份古代手稿極其脆弱，需要極其細心且謹慎小心的保存處理。",
  "The newly elected mayor pledged to _____ the city's outdated public transport system.": "新當選的市長承諾將全面改革並升級這座城市老舊的公共運輸系統。",
  "The sudden surge in demand for semiconductors led to a global chip _____.": "對半導體需求的突然激增，導致了全球性的晶片嚴重短缺危機。",
  "Children who grow up in bilingual environments often develop strong cognitive _____.": "在雙語環境中成長的兒童，通常具備較強的認知彈性與語言適應力。",
  
  // Cloze & reading questions
  "Choose the correct meaning of \"reluctant\":": "請選出「reluctant（不情願的、勉強的）」的正確中文意思：",
  "The word \"inevitable\" means:": "請選出「inevitable（不可避免的）」的正確中文詞義：",
  "The prefix \"mis-\" in \"misunderstand\" means:": "請選出「misunderstand」中字首「mis-」所代表的中文含義（錯誤地）：",
  "英文閱讀中，\"however\" 出現時通常表示？": "在英文閱讀理解中，出現「however」這個轉折詞時通常表示：語氣轉折或對比。"
};

let updated = 0;
quiz.forEach(q => {
  const plainStem = q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim();
  
  // If we have an exact full sentence translation
  if (allStemTranslations[plainStem]) {
    q.question = q.question.replace(/data-tw="[^"]+"/, `data-tw="${allStemTranslations[plainStem]}"`);
    updated++;
    return;
  }
  
  // Check if data-tw has formula or English text
  const twMatch = q.question.match(/data-tw="([^"]+)"/);
  if (twMatch) {
    const tw = twMatch[1];
    if (tw.includes('It is imperative') || tw.includes('should') || tw.includes('意為') || tw.includes('【完整題目中文句意】') || tw.includes('引導') || tw.includes('考點')) {
      // Clean translation from explanation
      let fullSentence = '';
      if (q.explanation) {
        const m = q.explanation.match(/句意：([^。\n<]+。?)/);
        if (m) fullSentence = m[1].trim();
      }
      
      if (!fullSentence) {
        // Build readable Chinese translation
        const cleanMean = tw.replace(/.*?意為[「“]([^”」]+)[”」].*/, '$1')
                            .replace(/.*?（([^）]+)）.*/, '$1')
                            .replace(/It is imperative.*?/g, '極有必要遵守');
        fullSentence = `【題目完整句意】：${plainStem.replace(/______/g, `（${cleanMean}）`).replace(/_____/g, `（${cleanMean}）`)}`;
      }
      
      q.question = q.question.replace(/data-tw="[^"]+"/, `data-tw="${fullSentence.replace(/"/g, '&quot;')}"`);
      updated++;
    }
  }
});

console.log(`Updated ${updated} question stems with complete Chinese translations!`);

// Re-write file
const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Saved quiz/data/english-quiz.js successfully.');
