const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

data.forEach(q => {
    if (q.category === '翻譯寫作' && q.type === 'writing' && q.question.includes('data-en=')) {
        // Extract the hint from data-en
        let match = q.question.match(/data-en="([^"]+)"/);
        if (match) {
            let hint = match[1];
            // Extract the Chinese sentence
            let sentenceMatch = q.question.match(/>([^<]+)<span class="speak-icon">/);
            if (sentenceMatch) {
                let twSentence = sentenceMatch[1];
                q.question = `<div style="margin-bottom: 0.5rem;"><span class="en-assist" data-tw="點擊朗讀提示詞" data-en="${hint}">${twSentence}<span class="speak-icon">🔊</span></span></div><div style="font-size: 0.9em; color: var(--color-text-light); background: rgba(0,0,0,0.05); padding: 0.5rem 0.8rem; border-left: 3px solid var(--color-primary); border-radius: 4px;"><strong>💡 寫作提示詞：</strong><br>${hint.replace(/ ; /g, ' <span style="color:#ccc;">|</span> ')}</div>`;
            }
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully made hints visible in translation questions.`);
