const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

data.forEach(q => {
    if (q.category === '文意選填' && q.explanation && q.explanation.includes('整句翻譯：')) {
        // Only modify if it doesn't already have 答案解析
        if (!q.explanation.includes('答案解析：')) {
            const correctEn = q.options[q.answer];
            
            // Extract the Chinese translation for this option from the explanation
            // The explanation looks like: 「significantly」：顯著地<br>
            const regex = new RegExp(`「${correctEn}」：([^<]+)`);
            const match = q.explanation.match(regex);
            
            if (match) {
                const correctTw = match[1];
                const originalExpl = `💡 <strong>答案解析：</strong><br>${correctEn} 意為「${correctTw}」。<br><br>`;
                q.explanation = originalExpl + q.explanation;
            }
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully restored original explanations.`);
