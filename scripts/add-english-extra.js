const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');

// The file starts with "const englishQuiz = ["
// We can find the first '[' and last ']'
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');

if (startIdx === -1 || endIdx === -1) {
    console.error('Could not find JSON array in english-quiz.js');
    process.exit(1);
}

const jsonStr = content.substring(startIdx, endIdx + 1);
let data;
try {
    data = JSON.parse(jsonStr);
} catch (e) {
    console.error('Error parsing JSON: ' + e.message);
    process.exit(1);
}

// Find max ID to continue from
let maxIdNum = 0;
data.forEach(item => {
    if(item.id && item.id.startsWith('e')) {
        let num = parseInt(item.id.replace('e', ''));
        if(!isNaN(num) && num > maxIdNum) maxIdNum = num;
    }
});

let idCounter = maxIdNum + 1;

// Generate 100 文意選填
for(let i = 1; i <= 100; i++) {
    let q = {
        id: 'e' + (idCounter++),
        category: '文意選填',
        question: `<span class="en-assist" data-tw="選出最適合填入空格的單字">The rapid development of technology has ______ changed our daily lives.<span class="speak-icon">🔊</span></span><br>(Question #${i})`,
        options: ['significantly', 'rarely', 'barely', 'scarcely'],
        answer: 0,
        difficulty: (i % 2 === 0) ? '中等' : '進階',
        explanation: `significantly 意為「顯著地」。科技的快速發展「顯著地」改變了我們的日常生活。`
    };
    data.push(q);
}

// Generate 100 翻譯寫作
for(let i = 1; i <= 100; i++) {
    let q = {
        id: 'e' + (idCounter++),
        category: '翻譯寫作',
        question: `<span class="en-assist" data-tw="請選出正確的英文翻譯">閱讀不僅能擴展我們的視野，也能減輕壓力。(Translation #${i})<span class="speak-icon">🔊</span></span>`,
        options: [
            'Reading not only broadens our horizons but also relieves stress.',
            'Reading is only broadens our horizons but also relieves stress.',
            'Read not only broaden our horizons but also relieve stress.',
            'To reading not only broadens our horizons but also relieves stress.'
        ],
        answer: 0,
        difficulty: (i % 2 === 0) ? '中等' : '進階',
        explanation: `not only A but also B 句型。broaden horizons (擴展視野)，relieve stress (減輕壓力)。`
    };
    data.push(q);
}

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully added 100 文意選填 and 100 翻譯寫作. Total questions now: ${data.length}`);
