const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

data.forEach(q => {
    if (q.category === '文意選填' && q.explanation && q.explanation.includes('整句翻譯：')) {
        if (!q.explanation.includes('文法重點：')) {
            let grammarNote = '';
            
            // Check for present perfect
            if (q.question.includes('has improved') || q.question.includes('has changed')) {
                grammarNote = `💡 <strong>文法重點：</strong><br>本句使用了「現在完成式 (has/have + p.p.)」，用來表達過去發生且持續對現在造成影響的動作或狀態。<br><br>`;
            } 
            // Check for modal verbs
            else if (q.question.includes('can influence') || q.question.includes('might affect') || q.question.includes('will shape')) {
                grammarNote = `💡 <strong>文法重點：</strong><br>本句使用了「助動詞 (can/might/will) + 原形動詞」，用來表達未來的可能性、能力或是即將發生的狀況。<br><br>`;
            }
            
            if (grammarNote) {
                // Insert it before "💡 答案解析：" or "💡 整句翻譯："
                if (q.explanation.includes('💡 <strong>答案解析：')) {
                    q.explanation = q.explanation.replace('💡 <strong>答案解析：', grammarNote + '💡 <strong>答案解析：');
                } else {
                    q.explanation = grammarNote + q.explanation;
                }
            }
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully added grammar explanations.`);
