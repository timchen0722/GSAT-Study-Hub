const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

// We need to find the exact 100 generated cloze questions and 100 translation questions.
// They were all added with id starting from `e...` where the number is higher than the original max.
// Let's just find them by category and the presence of `<span class="en-assist"`
data = data.filter(q => {
    if ((q.category === '文意選填' || q.category === '翻譯寫作') && q.question.includes('en-assist')) {
        return false; // Remove them
    }
    return true;
});

let maxIdNum = 0;
data.forEach(item => {
    if(item.id && item.id.startsWith('e')) {
        let num = parseInt(item.id.replace('e', ''));
        if(!isNaN(num) && num > maxIdNum) maxIdNum = num;
    }
});
let idCounter = maxIdNum + 1;

// Define dictionaries
const subjectsCloze = [
    {en: 'Technology', tw: '科技'},
    {en: 'Education', tw: '教育'},
    {en: 'Reading', tw: '閱讀'},
    {en: 'Traveling', tw: '旅行'},
    {en: 'Exercising', tw: '運動'},
    {en: 'Learning', tw: '學習'},
    {en: 'Music', tw: '音樂'},
    {en: 'Volunteering', tw: '志工服務'},
    {en: 'Teamwork', tw: '團隊合作'},
    {en: 'Communication', tw: '溝通'}
];

const verbsCloze = [
    {en: 'has improved', tw: '改善了'},
    {en: 'has changed', tw: '改變了'},
    {en: 'can influence', tw: '能影響'},
    {en: 'might affect', tw: '可能影響'},
    {en: 'will shape', tw: '將形塑'}
];

const objectsCloze = [
    {en: 'our daily lives', tw: '我們的日常生活'},
    {en: 'modern society', tw: '現代社會'},
    {en: 'the whole world', tw: '整個世界'},
    {en: 'our perspective', tw: '我們的觀點'},
    {en: 'human behavior', tw: '人類行為'}
];

const adverbs = [
    { word: {en: 'significantly', tw: '顯著地'}, wrong: [{en: 'rarely', tw: '很少地'}, {en: 'barely', tw: '幾乎不'}, {en: 'scarcely', tw: '幾乎沒有'}] },
    { word: {en: 'profoundly', tw: '深遠地'}, wrong: [{en: 'superficially', tw: '表面地'}, {en: 'hardly', tw: '幾乎不'}, {en: 'slightly', tw: '稍微地'}] },
    { word: {en: 'dramatically', tw: '劇烈地'}, wrong: [{en: 'slowly', tw: '緩慢地'}, {en: 'quietly', tw: '安靜地'}, {en: 'gradually', tw: '逐漸地'}] },
    { word: {en: 'greatly', tw: '極大地'}, wrong: [{en: 'minorly', tw: '輕微地'}, {en: 'barely', tw: '幾乎不'}, {en: 'hardly', tw: '幾乎沒有'}] },
    { word: {en: 'positively', tw: '正向地'}, wrong: [{en: 'negatively', tw: '負面地'}, {en: 'badly', tw: '糟糕地'}, {en: 'poorly', tw: '差勁地'}] }
];

for(let i=0; i<100; i++) {
    const s = subjectsCloze[Math.floor(Math.random() * subjectsCloze.length)];
    const v = verbsCloze[Math.floor(Math.random() * verbsCloze.length)];
    const o = objectsCloze[Math.floor(Math.random() * objectsCloze.length)];
    const adv = adverbs[Math.floor(Math.random() * adverbs.length)];
    
    let optionsMap = [adv.word, ...adv.wrong];
    optionsMap.sort(() => Math.random() - 0.5);
    
    let optionsStr = optionsMap.map(opt => opt.en);
    const ansIdx = optionsStr.indexOf(adv.word.en);
    
    // Build options explanation
    let optionsExpl = optionsMap.map(opt => `「${opt.en}」：${opt.tw}`).join('<br>');
    
    let fullChinese = `${s.tw}${adv.word.tw}${v.tw}${o.tw}。`;
    
    data.push({
        id: 'e' + (idCounter++),
        category: '文意選填',
        question: `<span class="en-assist" data-tw="選出最適合填入空格的單字">${s.en} ${v.en} ______ ${o.en}.<span class="speak-icon">🔊</span></span>`,
        options: optionsStr,
        answer: ansIdx,
        difficulty: '中等',
        explanation: `💡 <strong>整句翻譯：</strong><br>${fullChinese}<br><br>💡 <strong>選項翻譯：</strong><br>${optionsExpl}`
    });
}

// Re-generate translation writing with hints (the exact same as before, since they were removed by the filter above)
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

for(let i=0; i<100; i++) {
    const sIdx = Math.floor(Math.random() * twSubjects.length);
    const vIdx = Math.floor(Math.random() * twVerbs.length);
    const oIdx = Math.floor(Math.random() * twObjects.length);
    
    const twSentence = `${twSubjects[sIdx]}${twVerbs[vIdx]}${twObjects[oIdx]}`;
    const enSentence = `${hintSubjects[sIdx]} ${hintVerbs[vIdx]} ${hintObjects[oIdx]}`; // Approximate answer

    let hint = `${hintSubjects[sIdx]} ; ${hintVerbs[vIdx]} ; ${hintObjects[oIdx]}`;
    
    data.push({
        id: 'e' + (idCounter++),
        category: '翻譯寫作',
        type: 'writing',
        question: `<span class="en-assist" data-tw="提示詞：${hint}" data-en="${hint}">${twSentence}<span class="speak-icon">🔊</span></span>`,
        reference: enSentence.charAt(0).toUpperCase() + enSentence.slice(1) + '.',
        difficulty: '進階',
        explanation: `💡 <strong>整句翻譯與提示：</strong><br>主詞：${hintSubjects[sIdx]} (${twSubjects[sIdx]})<br>動詞/句型：${hintVerbs[vIdx]} (${twVerbs[vIdx]})<br>受詞/補語：${hintObjects[oIdx]} (${twObjects[oIdx]})`
    });
}

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully re-generated questions with full Chinese translations for options and sentence.`);
