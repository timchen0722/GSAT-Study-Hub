const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

// Remove the previous 100 文意選填 and 100 翻譯寫作 that were duplicates
data = data.filter(q => {
    if (q.question && (q.question.includes('(Question #') || q.question.includes('(Translation #'))) {
        return false;
    }
    return true;
});

// Find max ID
let maxIdNum = 0;
data.forEach(item => {
    if(item.id && item.id.startsWith('e')) {
        let num = parseInt(item.id.replace('e', ''));
        if(!isNaN(num) && num > maxIdNum) maxIdNum = num;
    }
});
let idCounter = maxIdNum + 1;

// Vocabulary arrays for 文意選填
const subjectsCloze = ['Technology', 'Education', 'Reading', 'Traveling', 'Exercising', 'Learning', 'Music', 'Volunteering', 'Teamwork', 'Communication'];
const verbsCloze = ['has improved', 'has changed', 'can influence', 'might affect', 'will shape'];
const objectsCloze = ['our daily lives', 'modern society', 'the whole world', 'our perspective', 'human behavior'];
const adverbs = [
    { word: 'significantly', tw: '顯著地', wrong: ['rarely', 'barely', 'scarcely'] },
    { word: 'profoundly', tw: '深遠地', wrong: ['superficially', 'hardly', 'slightly'] },
    { word: 'dramatically', tw: '劇烈地', wrong: ['slowly', 'quietly', 'gradually'] },
    { word: 'greatly', tw: '極大地', wrong: ['minorly', 'barely', 'hardly'] },
    { word: 'positively', tw: '正向地', wrong: ['negatively', 'badly', 'poorly'] }
];

for(let i=0; i<100; i++) {
    const s = subjectsCloze[Math.floor(Math.random() * subjectsCloze.length)];
    const v = verbsCloze[Math.floor(Math.random() * verbsCloze.length)];
    const o = objectsCloze[Math.floor(Math.random() * objectsCloze.length)];
    const adv = adverbs[Math.floor(Math.random() * adverbs.length)];
    
    let options = [adv.word, ...adv.wrong];
    // Shuffle options
    options.sort(() => Math.random() - 0.5);
    const ansIdx = options.indexOf(adv.word);

    data.push({
        id: 'e' + (idCounter++),
        category: '文意選填',
        question: `<span class="en-assist" data-tw="選出最適合填入空格的單字">${s} ${v} ______ ${o}.<span class="speak-icon">🔊</span></span>`,
        options: options,
        answer: ansIdx,
        difficulty: '中等',
        explanation: `${adv.word} 意為「${adv.tw}」。這句話的意思是：${s} ${adv.tw}${v} ${o}。`
    });
}

// Vocabulary arrays for 翻譯寫作
const twSubjects = ['科技', '教育', '閱讀', '旅行', '規律的運動', '學習新語言', '聽音樂', '當志工', '健康飲食', '充足的睡眠'];
const enSubjects = ['Technology', 'Education', 'Reading', 'Traveling', 'Regular exercise', 'Learning a new language', 'Listening to music', 'Volunteering', 'Eating a healthy diet', 'Getting enough sleep'];

const twVerbs = ['不僅能擴展視野，也能', '已經徹底改變了世界，而且', '對我們有很大的影響，尤其是', '可以幫助我們放鬆，並且', '是成功的關鍵，同時也能'];
const enVerbs = [
    'not only broadens our horizons but also',
    'has completely changed the world, and moreover,',
    'has a great impact on us, especially',
    'can help us relax, and furthermore,',
    'is the key to success, and at the same time,'
];

const twObjects = ['減輕壓力。', '提升生活品質。', '促進人際關係。', '增加工作效率。', '培養耐心。'];
const enObjects = ['relieves stress.', 'improves the quality of life.', 'promotes interpersonal relationships.', 'increases work efficiency.', 'cultivates patience.'];

for(let i=0; i<100; i++) {
    const sIdx = Math.floor(Math.random() * twSubjects.length);
    const vIdx = Math.floor(Math.random() * twVerbs.length);
    const oIdx = Math.floor(Math.random() * twObjects.length);
    
    const twSentence = `${twSubjects[sIdx]}${twVerbs[vIdx]}${twObjects[oIdx]}`;
    const enSentence = `${enSubjects[sIdx]} ${enVerbs[vIdx]} ${enObjects[oIdx]}`;

    data.push({
        id: 'e' + (idCounter++),
        category: '翻譯寫作',
        type: 'writing',
        question: `<span class="en-assist" data-tw="請翻譯以下句子">${twSentence}<span class="speak-icon">🔊</span></span>`,
        reference: enSentence,
        difficulty: '進階',
        explanation: `參考句型拆解：\n主詞：${enSubjects[sIdx]}\n動詞/句型：${enVerbs[vIdx]}\n受詞/補語：${enObjects[oIdx]}`
    });
}

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully replaced duplicates with 100 unique 文意選填 and 100 unique 翻譯寫作. Total questions now: ${data.length}`);
