const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

const twSubjects = ['科技', '教育', '閱讀', '旅行', '規律的運動', '學習新語言', '聽音樂', '當志工', '健康飲食', '充足的睡眠'];
const hintSubjects = ['technology', 'education', 'reading', 'traveling', 'regular exercise', 'learning a new language', 'listening to music', 'volunteering', 'eating a healthy diet', 'getting enough sleep'];

const twVerbs = ['不僅能擴展視野，也能', '已經徹底改變了世界，而且', '對我們有很大的影響，尤其是', '可以幫助我們放鬆，並且', '是成功的關鍵，同時也能'];
const hintVerbs = [
    'not only broaden horizons but also',
    'completely change the world, moreover',
    'great impact, especially',
    'help relax, furthermore',
    'key to success, at the same time'
];

const twObjects = ['減輕壓力。', '提升生活品質。', '促進人際關係。', '增加工作效率。', '培養耐心。'];
const hintObjects = ['relieve stress', 'improve quality of life', 'promote interpersonal relationships', 'increase work efficiency', 'cultivate patience'];

data.forEach(q => {
    if (q.category === '翻譯寫作' && q.type === 'writing') {
        // Extract the Chinese sentence
        let m = q.question.match(/>([^<]+)<span class="speak-icon">/);
        if (m) {
            let twSentence = m[1];
            
            // Find which parts match to construct the hint
            let hintParts = [];
            
            for(let i=0; i<twSubjects.length; i++) {
                if (twSentence.includes(twSubjects[i])) {
                    hintParts.push(hintSubjects[i]);
                    break;
                }
            }
            
            for(let i=0; i<twVerbs.length; i++) {
                if (twSentence.includes(twVerbs[i].replace('。',''))) {
                    hintParts.push(hintVerbs[i]);
                    break;
                }
            }
            
            for(let i=0; i<twObjects.length; i++) {
                if (twSentence.includes(twObjects[i].replace('。',''))) {
                    hintParts.push(hintObjects[i]);
                    break;
                }
            }
            
            let hint = hintParts.join(' ; ');
            
            q.question = `<span class="en-assist" data-tw="提示詞：${hint}" data-en="${hint}">${twSentence}<span class="speak-icon">🔊</span></span>`;
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully added hints to translation questions.`);
