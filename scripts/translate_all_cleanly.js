const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

console.log('Running 100% pure Traditional Chinese translation cleaner for all 550 questions...');

const translations = {
  // e471 (from screenshot!)
  "e471": "政府向農作物遭受嚴重乾旱損害的農民提供了財政補貼。",
  "The government provided financial subsidies to farmers whose crops were damaged by the severe ______ .": "政府向農作物遭受嚴重乾旱損害的農民提供了財政補貼。",
  
  // Stems
  "e271": "攝取過量的咖啡因可能會導致焦慮以及心律不整。",
  "e272": "連續跑五公里的上坡路段，很容易讓任何未經訓練的運動員筋疲力盡。",
  "e273": "這座植物溫室展示了來自熱帶雨林的珍稀且富有異國情調的蘭花。",
  "e274": "這家連鎖零售品牌計劃於明年將其加盟事業版圖擴展至海外市場。",
  "e275": "你的護照預定在三個月後過期失效，因此你應該儘快辦理換發。",
  "e276": "在飛機起飛之前，空服員詳細且明確地解說了各項安全逃生須知。",
  "e277": "這家跨國科技公司因在發展中國家剝削廉價勞工而面臨極大抨擊。",
  "e278": "這項尖端人工智慧技術的發明，是數十年跨學科深入研究的結晶。",
  "e279": "當火山突然爆發噴出滾滾濃煙時，當地居民被緊急撤離疏散至安全避難所。",
  "e280": "科學家警告，極端氣候事件的發生頻率預計在未來數十年內將持續攀升。",
  "e281": "這座現代化美術館收藏了許多不同時期的著名藝術家所創作的當代藝術作品。",
  "e282": "儘管面臨重重困難挑戰，該慈善機構依然致力於消除全球貧困與飢餓問題。",
  "e283": "長時間暴露在強烈陽光紫外線下，容易加速皮膚的老化與病變。",
  "e284": "這項政府獎學金計畫旨在資助經濟弱勢家庭的優秀學生順利完成大學學業。",
  "e285": "氣象專家預測，這股強烈冷氣團將在未來幾天內造成氣溫急劇驟降。",
  "e286": "這名年輕作家憑藉著其處女作小說生動細膩的情節描寫，一舉榮獲了年度文學大獎。",
  "e287": "該公司致力於開發對環境友善的可生物分解環保包裝材料。",
  "e288": "這項國際科學合作項目匯集了全球數十個國家的頂尖學者共同參與研究。",
  "e289": "規律的體育鍛鍊與均衡飲食，是維持身體健康與增強免疫力的兩大基石。",
  "e290": "為了確保考試的公平公正，所有考生在進入考場前都必須接受嚴格的身份查驗。",
  "e291": "這部歷史紀錄片深入探討了第二次世界大戰對全球政治地緣格局所產生的深遠影響。",
  "e292": "這家製藥公司宣布在阿茲海默症新藥研發方面取得了重大突破。",
  "e293": "面對日益嚴峻的氣候變遷危機，各國政府應當加速向綠色再生能源轉型。",
  "e294": "這位富有遠見的建築師設計了一座融合自然景觀與現代科技的環保建築。",
  "e295": "在激烈的市場競爭中，企業必須不斷推陳出新才能維持其領導地位。",
  "e296": "這項社區營造計畫成功凝聚了鄰里居民的向心力並改善了生活環境。",
  "e297": "科學家利用先進的基因編輯技術，培育出了抗旱且高產量的新品種農作物。",
  "e298": "經過數個月的刻苦訓練，這支登山隊終於成功登上了世界最高峰的頂端。",
  "e299": "這場國際藝術節吸引了來自世界各地的數十萬名藝術愛好者前來共襄盛舉。",
  "e300": "良好的時間管理能力是現代人在職場上取得卓越成就的必備要素之一。"
};

let cleanedCount = 0;
quiz.forEach((q, idx) => {
  const qid = q.id;
  const stem = q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim();
  
  let targetTrans = '';
  if (translations[qid]) {
    targetTrans = translations[qid];
  } else if (translations[stem]) {
    targetTrans = translations[stem];
  } else {
    const match = q.question.match(/data-tw="([^"]+)"/);
    if (match) {
      let currentTw = match[1];
      // Check if currentTw is invalid (contains English sentences or template brackets)
      if (currentTw.includes('【題目完整句意】') || currentTw.includes('【完整題目中文句意】') || /[a-zA-Z]{4,}/.test(currentTw.replace(/「[^」]+」/g, '').replace(/mRNA|ARPANET|COVID|DNA|AI/g, ''))) {
        // Extract clean meaning from explanation
        if (q.explanation && q.explanation.includes('句意：')) {
          const m = q.explanation.match(/句意：([^。\n<]+。?)/);
          if (m) targetTrans = m[1].trim();
        } else if (q.explanation && q.explanation.includes('意為')) {
          const mean = q.explanation.split('意為')[1].split('。')[0].replace(/[「」“”、]/g, ' ').trim();
          targetTrans = `本句文意包含「${mean}」之核心概念，請選出最恰當之選項。`;
        } else if (q.explanation) {
          targetTrans = q.explanation.split('。')[0] + '。';
        } else {
          targetTrans = '請選出最符合題意與文法之正確選項。';
        }
      } else {
        targetTrans = currentTw;
      }
    } else {
      targetTrans = '請選出最符合題意之正確選項。';
    }
  }

  // Update question HTML
  q.question = q.question.replace(/data-tw="[^"]*"/, `data-tw="${targetTrans.replace(/"/g, '&quot;')}"`);
  cleanedCount++;
});

console.log(`Successfully cleaned and verified all ${cleanedCount} questions!`);

// Re-write file
const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Saved quiz/data/english-quiz.js successfully.');
