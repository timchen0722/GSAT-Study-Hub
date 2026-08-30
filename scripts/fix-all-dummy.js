const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');

let content = fs.readFileSync(filePath, 'utf8');
const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

const articles = [
    {
        en: "Climate change is one of the most pressing issues of our time. It refers to long-term shifts in temperatures and weather patterns. These shifts may be natural, but since the 1800s, human activities have been the main driver of climate change, primarily due to the burning of fossil fuels like coal, oil, and gas. Burning fossil fuels generates greenhouse gas emissions that act like a blanket wrapped around the Earth, trapping the sun's heat and raising temperatures. Examples of greenhouse gas emissions that are causing climate change include carbon dioxide and methane.",
        tw: "氣候變遷是我們這個時代最緊迫的問題之一。它指的是溫度和天氣模式的長期轉變。這些轉變可能是自然的，但自1800年代以來，人類活動一直是氣候變遷的主要驅動力，這主要是由於燃燒煤炭、石油和天然氣等化石燃料。燃燒化石燃料會產生溫室氣體排放，這些排放物就像包裹在地球周圍的毯子一樣，困住了太陽的熱量並使溫度升高。導致氣候變遷的溫室氣體排放例子包括二氧化碳和甲烷。"
    },
    {
        en: "Artificial Intelligence (AI) is intelligence demonstrated by machines, as opposed to the natural intelligence displayed by animals including humans. AI research has been defined as the field of study of intelligent agents, which refers to any system that perceives its environment and takes actions that maximize its chance of achieving its goals. The term 'artificial intelligence' had previously been used to describe machines that mimic and display human cognitive skills that are associated with the human mind, such as learning and problem-solving.",
        tw: "人工智慧（AI）是由機器展示的智慧，相對於包括人類在內的動物所展示的自然智慧。AI 研究被定義為對智慧代理的研究領域，這指的是任何感知其環境並採取行動以最大化實現其目標機會的系統。以前，「人工智慧」一詞曾被用來描述模仿並展示與人類思維相關的人類認知技能（如學習和解決問題）的機器。"
    },
    {
        en: "Coffee is a brewed drink prepared from roasted coffee beans, the seeds of berries from certain Coffea species. When coffee berries turn from green to bright red in color – indicating ripeness – they are picked, processed, and dried. Dried coffee seeds are roasted to varying degrees, depending on the desired flavor. Roasted beans are ground and then brewed with near-boiling water to produce the beverage known as coffee.",
        tw: "咖啡是一種用烘焙過的咖啡豆（某些咖啡樹品種的漿果種子）沖泡的飲料。當咖啡漿果從綠色變成鮮紅色（表示成熟）時，它們就會被採摘、加工和乾燥。乾燥的咖啡種子會根據所需的風味被烘焙到不同程度。烘焙過的咖啡豆被研磨，然後用接近沸騰的水沖泡，製成被稱為咖啡的飲料。"
    },
    {
        en: "Space exploration is the use of astronomy and space technology to explore outer space. While the exploration of space is carried out mainly by astronomers with telescopes, its physical exploration though is conducted both by unmanned robotic space probes and human spaceflight. Space exploration, like its classical form astronomy, is one of the main sources for space science.",
        tw: "太空探索是利用天文學和太空科技來探索外太空。雖然太空探索主要由天文學家使用望遠鏡進行，但其物理探索則由無人機器人太空探測器和載人太空飛行共同進行。太空探索與其經典形式的天文學一樣，是太空科學的主要來源之一。"
    },
    {
        en: "The history of the Internet has its origin in the efforts to build and interconnect computer networks that arose from research and development in the United States and involved international collaboration, particularly with researchers in the United Kingdom and France. The Internet's foundation was laid by ARPANET, funded by the US Department of Defense.",
        tw: "網際網路的歷史起源於建立和互連電腦網路的努力，這些努力源於美國的研究與開發，並涉及國際合作，特別是與英國和法國的研究人員。網際網路的基礎是由美國國防部資助的 ARPANET 奠定的。"
    }
];

const readingQuestions = [
    { q: "What is the main topic of this passage?", o: ["The overview of the subject", "The future predictions", "A specific historical event", "Personal opinions of the author"], a: 0, expl: "文章主要在概述該主題的定義與背景。" },
    { q: "According to the passage, which of the following is true?", o: ["It has a significant impact on our world.", "It is mostly ignored by modern scientists.", "It only appeared in the last 10 years.", "It is harmful to all human beings."], a: 0, expl: "文章中清楚提到該主題對世界有重要影響。" },
    { q: "What can be inferred from the text?", o: ["The subject is complex and multifaceted.", "Nobody understands this topic.", "It is a completely natural phenomenon.", "It is a fictional concept."], a: 0, expl: "從文中詳細的描述可以推論，這是一個複雜且多面向的主題。" },
    { q: "Which word best describes the tone of the passage?", o: ["Informative", "Humorous", "Angry", "Sarcastic"], a: 0, expl: "這是一篇客觀提供資訊的文章，因此語氣是 Informative (提供資訊的、增廣見聞的)。" }
];

let rCounter = 0;

data.forEach(q => {
    // Fix Reading Comprehension dummy questions
    if (q.category === '閱讀測驗' && (q.options[0] && q.options[0].startsWith('WordA_') || q.question.includes('Choose the correct vocabulary'))) {
        let articleIdx = rCounter % articles.length;
        let article = articles[articleIdx];
        let rQ = readingQuestions[rCounter % readingQuestions.length];
        
        q.question = `
<div class="reading-article" style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); margin-bottom: 1.5rem; line-height: 1.6; border-left: 4px solid var(--color-primary);">
    ${article.en}
</div>
<div class="question-prompt" style="font-weight: 600; margin-bottom: 1rem;">
    <span class="en-assist" data-tw="選出正確答案">${rQ.q}<span class="speak-icon">🔊</span></span>
</div>`;
        q.options = rQ.o;
        q.answer = rQ.a;
        q.explanation = `
💡 <strong>答案解析：</strong><br>
${rQ.expl}<br><br>
💡 <strong>文章完整翻譯：</strong><br>
${article.tw}`;
        rCounter++;
    }
    
    // Quick fix for dummy Vocabulary questions
    if (q.category === '詞彙' && q.options[0] && q.options[0].startsWith('WordA_')) {
        q.question = `<span class="en-assist" data-tw="新政策將會___經濟。">The new policy will ______ the economy.<span class="speak-icon">🔊</span></span>`;
        q.options = ['boost', 'decline', 'shrink', 'ignore'];
        q.answer = 0;
        q.explanation = `💡 <strong>答案解析：</strong><br>boost 意為「促進、推動」。句意：新政策將會促進經濟。<br>decline (下降) / shrink (縮小) / ignore (忽略) 皆不合句意。`;
    }
    
    // Quick fix for dummy Grammar questions
    if (q.category === '文法' && q.options[0] && q.options[0].startsWith('WordA_')) {
        q.question = `<span class="en-assist" data-tw="如果我是你，我就會...">If I ______ you, I would take that job.<span class="speak-icon">🔊</span></span>`;
        q.options = ['were', 'was', 'am', 'be'];
        q.answer = 0;
        q.explanation = `💡 <strong>答案解析：</strong><br>此為「與現在事實相反的假設語氣」，動詞一律使用 were。句意：如果我是你，我就會接受那份工作。`;
    }
    
    // Quick fix for dummy Cloze questions
    if (q.category === '克漏字' && q.options[0] && q.options[0].startsWith('WordA_')) {
        q.question = `
<div class="reading-article" style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-md); margin-bottom: 1rem; line-height: 1.6;">
    Many people enjoy reading books in their free time. It is a good habit that ______ our minds and reduces stress.
</div>
<div class="question-prompt" style="font-weight: 600; margin-bottom: 1rem;">
    Choose the best word for the blank:
</div>`;
        q.options = ['enriches', 'damages', 'forgets', 'avoids'];
        q.answer = 0;
        q.explanation = `💡 <strong>答案解析：</strong><br>enrich 意為「使豐富、充實」。句意：這是一個能充實我們心靈並減輕壓力的好習慣。<br>damage (損害) / forget (忘記) / avoid (避免) 皆不合句意。`;
    }
});

const newContent = 'const englishQuiz = ' + JSON.stringify(data) + ';\n';
fs.writeFileSync(filePath, newContent, 'utf8');
console.log(`Successfully replaced all dummy WordA_ questions in all categories.`);
