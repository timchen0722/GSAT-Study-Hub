const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

data.forEach(q => {
    if (q.category === '閱讀測驗' && q.question.includes('<div class="reading-article"')) {
        // Only if it doesn't already have the speaker icon in the article
        if (!q.question.includes('點擊朗讀文章')) {
            // Find the text inside the reading-article div
            q.question = q.question.replace(
                /<div class="reading-article"([^>]*)>\s*([\s\S]*?)\s*<\/div>/,
                (match, styleAttrs, articleText) => {
                    // Make sure we aren't matching something already modified
                    if (articleText.includes('speak-icon')) return match;
                    
                    // Escape quotes for data-en if needed, though articleText shouldn't have double quotes that break html
                    let cleanText = articleText.replace(/"/g, '&quot;');
                    
                    return `<div class="reading-article"${styleAttrs}>
    <span class="en-assist" data-tw="點擊朗讀文章" data-en="${cleanText}" style="display: block;">
        ${articleText} <span class="speak-icon" style="cursor: pointer; float: right; font-size: 1.2rem;" title="朗讀文章">🔊</span>
    </span>
</div>`;
                }
            );
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully added pronunciation icons to reading articles.`);
