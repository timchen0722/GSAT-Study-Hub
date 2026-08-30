const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

data.forEach(q => {
    if (q.category === '克漏字' && q.question.includes('Choose the best word for the blank:')) {
        q.question = q.question.replace(
            /Choose the best word for the blank:/g,
            '<span class="en-assist" data-tw="選出空格中最適合的字：">Choose the best word for the blank:<span class="speak-icon">🔊</span></span>'
        );
        // Also ensure the article block has pronunciation if it doesn't already
        if (!q.question.includes('點擊朗讀文章')) {
            q.question = q.question.replace(
                /<div class="reading-article"([^>]*)>\s*([\s\S]*?)\s*<\/div>/,
                (match, styleAttrs, articleText) => {
                    let cleanText = articleText.replace(/"/g, '&quot;');
                    return `<div class="reading-article"${styleAttrs}>\n    <span class="en-assist" data-tw="點擊朗讀文章" data-en="${cleanText}" style="display: block;">\n        ${articleText} <span class="speak-icon" style="cursor: pointer; float: right; font-size: 1.2rem;" title="朗讀文章">🔊</span>\n    </span>\n</div>`;
                }
            );
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully fixed missing audio in Cloze questions.`);
