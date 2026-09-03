const fs = require('fs');
const path = require('path');

const quizPath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
let quizCode = fs.readFileSync(quizPath, 'utf8');
let quiz = JSON.parse(quizCode.substring(quizCode.indexOf('['), quizCode.lastIndexOf(']') + 1));

console.log(`Processing ${quiz.length} English quiz questions for 100% full translation & pronunciation...`);

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

let fixedFromExp = 0;

quiz.forEach((q, idx) => {
  if (q.type === 'writing' || !q.options) return;

  const exp = q.explanation || '';

  q.options = q.options.map(opt => {
    let trimmed = opt.trim();
    if (/[\u4e00-\u9fa5]/.test(trimmed)) return trimmed;

    const esc = escapeRegex(trimmed);
    const patterns = [
      new RegExp(`[「“\'"]${esc}[」”\'"][：:]\\s*([^<\\n；。]+)`),
      new RegExp(`${esc}\\s*\\(([^)\\n]+)\\)`),
      new RegExp(`${esc}\\s*[（]([^）\\n]+)[）]`),
      new RegExp(`${esc}\\s*(?:意為|為|是|表示)?\\s*[「“]([^”」\\n]+)[”」]`),
      new RegExp(`${esc}\\s*[=＝]\\s*([^<\\n；。]+)`)
    ];

    for (let p of patterns) {
      const m = exp.match(p);
      if (m && m[1] && /[\u4e00-\u9fa5]/.test(m[1])) {
        fixedFromExp++;
        let trans = m[1].replace(/<[^>]+>/g, '').trim();
        return `${trimmed}（${trans}）`;
      }
    }
    return trimmed;
  });
});

console.log(`Fixed from explanation: ${fixedFromExp}`);

// Now find any remaining options without Chinese and translate them
let remainingMissing = 0;
const dictionary = {
  "is": "是（第三人稱單數現在式）",
  "has been": "已經是 / 一直（現在完成式）",
  "had": "有 / 過去曾是",
  "do": "做 / 助動詞",
  "did": "做過 / 確實（過去助動詞）",
  "was": "是（第一/三人稱過去式）",
  "were": "是（第二人稱/複數過去式）",
  "am": "是（第一人稱現在式）",
  "be": "是（原形動詞）",
  "been": "是 / 處於（過去分詞）",
  "being": "正在處於（現在分詞/動名詞）",
  "have": "有 / 擁有（原形/現在式）",
  "has": "有（第三人稱單數）",
  "having": "擁有（現在分詞）",
  "will": "將會（未來助動詞）",
  "would": "將會 / 願（過去/條件助動詞）",
  "shall": "將會 / 應該",
  "should": "應該（助動詞）",
  "can": "能夠 / 可以",
  "could": "能夠 / 可能（過去/條件）",
  "may": "也許 / 可以",
  "might": "可能 / 也許",
  "must": "必須 / 一定",
  "ought to": "應該",
  "used to": "過去曾經",
  "whose": "誰的（所有格關係代名詞）",
  "whom": "誰（受格關係代名詞）",
  "which": "哪一個 / 關係代名詞（修飾事物）",
  "that": "關係代名詞 / 連接詞",
  "who": "誰 / 關係代名詞（修飾人）",
  "what": "什麼 / 所……的事物",
  "where": "哪裡 / 關係副詞（地點）",
  "when": "何時 / 關係副詞（時間）",
  "why": "為何 / 關係副詞（原因）",
  "how": "如何 / 方式",
  "whether": "是否（連接詞）",
  "if": "如果 / 是否",
  "although": "雖然 / 儘管",
  "because": "因為（原因連接詞）",
  "unless": "除非（條件連接詞）",
  "since": "自從 / 既然",
  "while": "當……時 / 然而",
  "until": "直到……為止",
  "before": "在……之前",
  "after": "在……之後",
  "as": "如同 / 當 / 因為",
  "so": "所以 / 如此",
  "yet": "然而 / 尚且",
  "for": "因為 / 為了",
  "nor": "也不",
  "but": "但是 / 然而",
  "and": "而且 / 和",
  "or": "或者 / 否則"
};

quiz.forEach((q, idx) => {
  if (q.type === 'writing' || !q.options) return;
  q.options = q.options.map(opt => {
    let trimmed = opt.trim();
    if (/[\u4e00-\u9fa5]/.test(trimmed)) return trimmed;

    // Check dict
    let lower = trimmed.toLowerCase();
    if (dictionary[lower]) {
      remainingMissing++;
      return `${trimmed}（${dictionary[lower]}）`;
    }
    return trimmed;
  });
});

console.log(`Remaining missing translated by dictionary: ${remainingMissing}`);

// Check remaining
let totalMissing = 0;
quiz.forEach(q => {
  if (q.type !== 'writing' && q.options) {
    q.options.forEach(opt => {
      if (!/[\u4e00-\u9fa5]/.test(opt)) {
        totalMissing++;
      }
    });
  }
});
console.log(`Total options still without Chinese: ${totalMissing}`);

fs.writeFileSync(quizPath, `const englishQuiz = ${JSON.stringify(quiz, null, 2)};\n`, 'utf8');
console.log('Updated quiz/data/english-quiz.js successfully!');
