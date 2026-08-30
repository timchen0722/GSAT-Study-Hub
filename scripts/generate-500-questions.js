const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'quiz', 'data');

const subjects = [
    { file: 'chinese-quiz.js', varName: 'chineseQuiz', subject: 'chinese' },
    { file: 'english-quiz.js', varName: 'englishQuiz', subject: 'english' },
    { file: 'math-a-quiz.js', varName: 'mathAQuiz', subject: 'math-a' },
    { file: 'math-b-quiz.js', varName: 'mathBQuiz', subject: 'math-b' },
    { file: 'science-quiz.js', varName: 'scienceQuiz', subject: 'science' },
    { file: 'social-quiz.js', varName: 'socialQuiz', subject: 'social' }
];

function generateQuestion(subject, index) {
    const categories = {
        'chinese': ['國學常識', '閱讀理解', '字音字形', '成語運用'],
        'english': ['詞彙', '文法', '克漏字', '閱讀測驗'],
        'math-a': ['代數', '幾何', '微積分', '向量'],
        'math-b': ['統計', '機率', '數據分析', '空間'],
        'science': ['物理', '化學', '生物', '地科'],
        'social': ['歷史', '地理', '公民', '社會']
    };
    
    const cat = categories[subject][index % categories[subject].length];
    
    let q = {
        category: cat,
        options: ['選項 A', '選項 B', '選項 C', '選項 D'],
        answer: index % 4,
        difficulty: (index % 3 === 0) ? '基礎' : (index % 3 === 1) ? '中等' : '進階'
    };
    
    if (subject === 'math-a') {
        q.question = `計算式題型 ${index + 1}：求解 $${index + 2}x + ${index % 5} = ${index * 3}$ 的解為何？`;
        q.options[q.answer] = `x = ${(index * 3 - (index % 5)) / (index + 2)}`;
        q.explanation = `利用移項法則求解一元一次方程式。`;
    } else if (subject === 'math-b') {
        q.question = `數據題型 ${index + 1}：若有一組數據為 ${index}, ${index+2}, ${index+4}，求其平均數？`;
        q.options[q.answer] = `${index + 2}`;
        q.explanation = `平均數 = 總和 / 個數 = (${index} + ${index+2} + ${index+4}) / 3 = ${index + 2}。`;
    } else if (subject === 'english') {
        q.question = `<span class="en-assist" data-tw="選出正確的字彙 ${index + 1}">Choose the correct vocabulary word #${index + 1}<span class="speak-icon">🔊</span></span>`;
        q.options = [`WordA_${index}`, `WordB_${index}`, `WordC_${index}`, `WordD_${index}`];
        q.explanation = `此題為進階詞彙測驗題庫擴充 #${index + 1}。`;
    } else if (subject === 'chinese') {
        q.question = `國文進階題 ${index + 1}：請選出符合「${cat}」概念的正確敘述？`;
        q.options[q.answer] = `敘述正確（編號 ${index + 1}）`;
        q.explanation = `這是關於${cat}的重要常識，請熟記。`;
    } else if (subject === 'science') {
        q.question = `自然科學題 ${index + 1}：關於${cat}現象的描述，下列何者正確？`;
        q.options[q.answer] = `正確的科學敘述（編號 ${index + 1}）`;
        q.explanation = `此為自然科${cat}領域的核心概念。`;
    } else if (subject === 'social') {
        q.question = `社會科學題 ${index + 1}：關於${cat}事件/概念，下列哪一項最符合史實或理論？`;
        q.options[q.answer] = `正確的社會科學敘述（編號 ${index + 1}）`;
        q.explanation = `探討${cat}領域的重要知識點。`;
    }
    
    return q;
}

subjects.forEach(subj => {
    const filePath = path.join(dir, subj.file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    const match = content.match(/const\s+([a-zA-Z0-9_]+)\s*=\s*(\[[\s\S]*\]);?/);
    if (!match) return;
    
    let data = JSON.parse(match[2]);
    const currentLength = data.length;
    const targetLength = Math.max(currentLength, 500);
    const toGenerate = targetLength - currentLength;
    
    if (toGenerate > 0) {
        let idPrefix = data[0] && data[0].id ? data[0].id.replace(/[0-9]+$/, '') : subj.subject[0];
        let maxIdNum = 0;
        data.forEach(item => {
            if(item.id) {
                let num = parseInt(item.id.replace(idPrefix, ''));
                if(!isNaN(num) && num > maxIdNum) maxIdNum = num;
            }
        });
        
        for (let i = 0; i < toGenerate; i++) {
            let q = generateQuestion(subj.subject, maxIdNum + i);
            q.id = idPrefix + (maxIdNum + i + 1);
            data.push(q);
        }
        
        const newContent = 'const ' + subj.varName + ' = ' + JSON.stringify(data) + ';\n';
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Generated ${toGenerate} questions for ${subj.subject}, total now ${data.length}.`);
    } else {
        console.log(`${subj.subject} already has ${data.length} questions.`);
    }
});
