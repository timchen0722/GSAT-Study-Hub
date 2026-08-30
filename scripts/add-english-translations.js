const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

const transMap = {
    "What is the main topic of this passage?": {
        q: "這篇文章的主題是什麼？",
        o: {
            "The overview of the subject": "該主題的概述",
            "The future predictions": "對未來的預測",
            "A specific historical event": "一個特定的歷史事件",
            "Personal opinions of the author": "作者的個人觀點"
        }
    },
    "According to the passage, which of the following is true?": {
        q: "根據文章，下列哪一項是正確的？",
        o: {
            "It has a significant impact on our world.": "它對我們的世界有重大影響。",
            "It is mostly ignored by modern scientists.": "它大多被現代科學家忽略。",
            "It only appeared in the last 10 years.": "它只在過去10年中出現。",
            "It is harmful to all human beings.": "它對所有人類都有害。"
        }
    },
    "What can be inferred from the text?": {
        q: "從文本中可以推論出什麼？",
        o: {
            "The subject is complex and multifaceted.": "該主題是複雜且多面向的。",
            "Nobody understands this topic.": "沒有人了解這個話題。",
            "It is a completely natural phenomenon.": "這是一個完全自然的現象。",
            "It is a fictional concept.": "這是一個虛構的概念。"
        }
    },
    "Which word best describes the tone of the passage?": {
        q: "哪個詞最能描述這篇文章的語氣？",
        o: {
            "Informative": "提供資訊的",
            "Humorous": "幽默的",
            "Angry": "憤怒的",
            "Sarcastic": "諷刺的"
        }
    },
    "The new policy will ______ the economy.": {
        q: "新政策將會 ______ 經濟。",
        o: {
            "boost": "促進",
            "decline": "下降",
            "shrink": "縮小",
            "ignore": "忽略"
        }
    },
    "If I ______ you, I would take that job.": {
        q: "如果我 ______ 你，我就會接受那份工作。",
        o: {
            "were": "是 (假設語氣)",
            "was": "是",
            "am": "是",
            "be": "是 (原形)"
        }
    },
    "Choose the best word for the blank:": {
        q: "短文：許多人喜歡在空閒時間看書。這是一個能 ______ 我們心靈並減輕壓力的好習慣。<br>題目：選出空格中最適合的字：",
        o: {
            "enriches": "充實",
            "damages": "損害",
            "forgets": "忘記",
            "avoids": "避免"
        }
    }
};

data.forEach(q => {
    // Only apply to the ones we just generated that don't already have 題目與選項翻譯
    if (q.explanation && !q.explanation.includes('題目與選項翻譯')) {
        let qText = q.question.replace(/<[^>]+>/g, '').replace('🔊', '').trim();
        
        let matchKey = null;
        for (let key in transMap) {
            if (q.question.includes(key)) {
                matchKey = key;
                break;
            }
        }
        
        if (matchKey) {
            let map = transMap[matchKey];
            let optsHtml = q.options.map(opt => `「${opt}」：${map.o[opt] || ''}`).join('<br>');
            
            let transBlock = `💡 <strong>題目與選項翻譯：</strong><br>題目：${map.q}<br><br>${optsHtml}<br><br>`;
            
            // Insert after 答案解析 if exists, or just prepend
            if (q.explanation.includes('💡 <strong>答案解析：')) {
                q.explanation = q.explanation.replace('💡 <strong>答案解析：', transBlock + '💡 <strong>答案解析：');
            } else {
                q.explanation = transBlock + q.explanation;
            }
        }
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully added translations for generated questions.`);
