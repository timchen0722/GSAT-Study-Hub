const fs = require('fs');
const path = require('path');

const scriptPath = path.join(__dirname, '..', 'scripts', 'generate-quiz.js');
let scriptContent = fs.readFileSync(scriptPath, 'utf8');

// 1. Change 500 to 550 in generate calls
scriptContent = scriptContent.replace(/, 500,/g, ', 550,');

// 2. Add advanced questions to the bases
const additions = [
  {
    regex: /(\/\/ =============================================\n\/\/ Generate all quiz files)/,
    content: `
// ADD ADVANCED QUESTIONS
chBase.push(
  {cat:'古文閱讀',q:'〈出師表〉中「以光先帝遺德」的「光」字，詞性與意義為何？',o:['動詞，發揚光大','名詞，光榮','形容詞，光明的','副詞，光亮地'],a:0,e:'此處「光」作動詞用，意為發揚光大先帝遺留的美德。',d:'進階'},
  {cat:'閱讀理解',q:'「雙文本比較」題型中，若兩篇文章論點相悖，應如何作答？',o:['整理各自立場與論據','只依據較長的文章','憑自身常識判斷','選擇折衷選項'],a:0,e:'應客觀梳理兩篇文章各自的立場與支持論據，不可加入主觀判斷。',d:'進階'}
);
enBase.push(
  {cat:'文法',q:'_____ he known the truth, he would not have made such a mistake.',o:['Had','If','Has','Were'],a:0,e:'與過去事實相反的假設，If he had known... 省略 If 後倒裝為 Had he known...',d:'進階'},
  {cat:'詞彙',q:'The new policy will _____ the economic growth of the country.',o:['facilitate','fabricate','fascinate','fluctuate'],a:0,e:'facilitate = 促進、使便利。fabricate = 捏造。',d:'進階'}
);
maBase.push(
  {cat:'向量',q:'若平面向量 $\\vec{u}$ 與 $\\vec{v}$ 滿足 $|\\vec{u}|=3, |\\vec{v}|=4, \\vec{u} \\cdot \\vec{v} = 6$，求 $|\\vec{u} + \\vec{v}|$ = ？',o:['$\\sqrt{37}$','$\\sqrt{25}$','$7$','$5$'],a:0,e:'$|\\vec{u}+\\vec{v}|^2 = |\\vec{u}|^2 + |\\vec{v}|^2 + 2\\vec{u}\\cdot\\vec{v} = 9+16+12 = 37$。',d:'進階'}
);
mbBase.push(
  {cat:'統計與數據分析',q:'若將全班成績 $X$ 調整為 $Y = 1.2X + 5$，則相關係數 $r_{X,Y}$ 為何？',o:['$1$','$1.2$','$0$','$-1$'],a:0,e:'線性變換 $Y = aX+b$，若 $a>0$，則自身與變換後的相關係數必為 1。',d:'進階'}
);
soBase.push(
  {cat:'公民',q:'當政府實施「碳稅」以解決污染問題時，是為了解決下列哪種市場失靈？',o:['外部成本','外部效益','公共財','資訊不對稱'],a:0,e:'污染屬於外部成本（負的外部性），課徵碳稅是將外部成本內部化。',d:'進階'}
);
scBase.push(
  {cat:'物理',q:'依據克卜勒第三定律，若某行星繞日週期為 8 年，其軌道半長軸為多少天文單位 (AU)？',o:['4','2','8','16'],a:0,e:'$T^2 / R^3 = 1$ (對太陽系行星)，$8^2 = 64 = R^3$，故 $R=4$ AU。',d:'進階'}
);

$1`
  }
];

additions.forEach(({ regex, content }) => {
  scriptContent = scriptContent.replace(regex, content);
});

fs.writeFileSync(scriptPath, scriptContent, 'utf8');
console.log('generate-quiz.js updated for 550 questions and advanced content.');
