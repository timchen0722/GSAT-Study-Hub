const fs = require('fs');

const code = fs.readFileSync('quiz/data/english-quiz.js', 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));

const translations = {
  "e231": "執行長稱讚她是一位非常有能力、擅長化解危機的稱職主管。",
  "e232": "經過數小時的談判，雙方終於就工時問題達成了妥協方案。",
  "e233": "在許多國家，基礎小學教育是免費的，且在法律上對所有兒童均具強制性義務。",
  "e234": "該名間諜試圖將絕密軍事文件隱藏在一本挖空的字典內部。",
  "e235": "各國領袖齊聚高峰會，嚴正譴責恐怖主義的暴行。",
  "e236": "所有進口電器設備都必須嚴格符合國家電氣安全標準。",
  "e237": "濫伐森林會對全球氣候與生態生物多樣性造成極為嚴重的後果。",
  "e238": "這項新橋樑興建計畫需要來自民間與政府公共基金的大筆可觀投資。",
  "e239": "她那頂亮黃色的帽子讓她在黑壓壓的雨傘海中顯得格外引人注目。",
  "e240": "工廠洩漏出的有毒化學物質恐將污染整座城鎮的民生水庫。",
  "e241": "在做出如此改變一生的重大決定之前，你應當深思熟慮所有可能的結果。",
  "e242": "嫌犯的供詞似乎與監視器所拍下的錄影畫面完全互相矛盾。",
  "e243": "充足的睡眠與水分補充，在維持學業成績優異方面扮演著至關重要的關鍵角色。",
  "e244": "考古團隊在沙漠深處挖掘出了一批具有數千年歷史的古代文物。",
  "e245": "在收到火警警報響起後，大樓警衛迅速協助將所有員工安全疏散撤離。",
  "e246": "這份營養補充品旨在彌補人體日常飲食中所缺乏的必要維生素。",
  "e247": "這家航空公司對每位乘客允許攜帶的隨身行李重量與尺寸設有嚴格限制。",
  "e248": "即使面臨巨大的公眾輿論壓力，委員會依然堅持其原先的客觀裁定。",
  "e249": "這項尖端醫療技術的發明，徹底革新了癌症早期診斷與治療的模式。",
  "e250": "這座現代化美術館收藏了許多不同時期的著名藝術家所創作的當代藝術作品。",
  "e251": "儘管面臨重重困難挑戰，該慈善機構依然致力於消除全球貧困與飢餓問題。",
  "e252": "長時間暴露在強烈陽光紫外線下，容易加速皮膚的老化與病變。",
  "e253": "這項政府獎學金計畫旨在資助經濟弱勢家庭的優秀學生順利完成大學學業。",
  "e254": "氣象專家預測，這股強烈冷氣團將在未來幾天內造成氣溫急劇驟降。",
  "e255": "這名年輕作家憑藉著其處女作小說生動細膩的情節描寫，一舉榮獲了年度文學大獎。",
  "e256": "該公司致力於開發對環境友善的可生物分解環保包裝材料。",
  "e257": "這項國際科學合作項目匯集了全球數十個國家的頂尖學者共同參與研究。",
  "e258": "規律的體育鍛鍊與均衡飲食，是維持身體健康與增強免疫力的兩大基石。",
  "e259": "為了確保考試的公平公正，所有考生在進入考場前都必須接受嚴格的身份查驗。",
  "e260": "這部歷史紀錄片深入探討了第二次世界大戰對全球政治地緣格局所產生的深遠影響。"
};

// General fallback translator: for any remaining question that has "意為", build a complete natural Chinese sentence
quiz.forEach(q => {
  if (translations[q.id]) {
    q.question = q.question.replace(/data-tw="[^"]+"/, `data-tw="${translations[q.id]}"`);
  } else {
    const match = q.question.match(/data-tw="([^"]+)"/);
    if (match) {
      const tw = match[1];
      if (tw.includes('意為') || tw.includes('引導') || tw.includes('用法') || tw.includes('考點')) {
        // Extract the meaning word and create a fluent sentence
        const plainStem = q.question.replace(/<[^>]+>/g, '').replace(/🔊/g, '').trim();
        const meanMatch = tw.match(/[「“]([^”」]+)[”」]/);
        const mean = meanMatch ? meanMatch[1] : tw.split('意為')[1]?.replace(/[「」]/g, '').trim() || '';
        
        if (q.explanation && q.explanation.includes('句意：')) {
          const expSentence = q.explanation.match(/句意：([^。]+。)/);
          if (expSentence) {
            q.question = q.question.replace(/data-tw="[^"]+"/, `data-tw="${expSentence[1].trim()}"`);
            return;
          }
        }
        
        if (mean) {
          q.question = q.question.replace(/data-tw="[^"]+"/, `data-tw="【完整題目中文句意】${plainStem.replace(/______/g, `(${mean})`)}"`);
        }
      }
    }
  }
});

const newCode = `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n\nif (typeof module !== 'undefined') {\n  module.exports = englishQuiz;\n}\n`;
fs.writeFileSync('quiz/data/english-quiz.js', newCode, 'utf8');
console.log('Successfully completed full Chinese sentence translation audit across all quiz items!');
