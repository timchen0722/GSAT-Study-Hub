const fs = require('fs');
const path = require('path');
const safeReplace = require('./safe-replace');

const htmlPath = path.join(__dirname, '..', 'subjects', 'english.html');
let html = fs.readFileSync(htmlPath, 'utf8');

const replacements = [
  { search: '<em>has been written</em>', replace: '<em><span class="en-assist" data-tw="已經被寫了">has been written<span class="speak-icon">🔊</span></span></em>' },
  { search: '<em>can be written</em>', replace: '<em><span class="en-assist" data-tw="能被寫">can be written<span class="speak-icon">🔊</span></span></em>' },
  { search: '<em>was written</em>', replace: '<em><span class="en-assist" data-tw="(過去)被寫了">was written<span class="speak-icon">🔊</span></span></em>' },
  { search: 'He is <em><span class="en-assist" data-tw="他和他哥一樣高">as tall as</span></em> his brother.（他和他哥一樣高）', replace: '<span class="en-assist" data-tw="他和他哥一樣高。">He is as tall as his brother.<span class="speak-icon">🔊</span></span>' },
  { search: 'She is <em><span class="en-assist" data-tw="她比同學聰明">smarter than</span></em> her classmates.（她比同學聰明）', replace: '<span class="en-assist" data-tw="她比同學聰明。">She is smarter than her classmates.<span class="speak-icon">🔊</span></span>' },
  { search: 'He is <em><span class="en-assist" data-tw="他是班上最高的">the tallest</span></em> in the class.（他是班上最高的）', replace: '<span class="en-assist" data-tw="他是班上最高的。">He is the tallest in the class.<span class="speak-icon">🔊</span></span>' },
  { search: 'This building is <em>three times as tall as</em> that one.', replace: '<span class="en-assist" data-tw="這棟建築是那棟建築的三倍高。">This building is three times as tall as that one.<span class="speak-icon">🔊</span></span>' },
  { search: '<em>The harder</em> you study, <em>the better</em> grades you get.', replace: '<span class="en-assist" data-tw="你讀書越努力，你得到的成績就越好。">The harder you study, the better grades you get.<span class="speak-icon">🔊</span></span>' },
  
  { search: '<em>That he passed the exam</em> surprised everyone.', replace: '<span class="en-assist" data-tw="他通過了考試這件事讓大家很驚訝。">That he passed the exam surprised everyone.<span class="speak-icon">🔊</span></span>' },
  { search: "I don't know <em>whether he will come</em>.", replace: '<span class="en-assist" data-tw="我不知道他是否會來。">I don\'t know whether he will come.<span class="speak-icon">🔊</span></span>' },
  { search: 'Tell me <em>what you need</em>.', replace: '<span class="en-assist" data-tw="告訴我你需要什麼。">Tell me what you need.<span class="speak-icon">🔊</span></span>' },
  
  { search: 'The girl <em><span class="en-assist" data-tw="坐我旁邊的女孩是我朋友">who sits next to me</span></em> is my friend.（坐我旁邊的女孩是我朋友）', replace: '<span class="en-assist" data-tw="坐在我旁邊的女孩是我的朋友。">The girl who sits next to me is my friend.<span class="speak-icon">🔊</span></span>' },
  { search: 'The teacher <em><span class="en-assist" data-tw="我最尊敬的老師退休了">whom I respect most</span></em> retired.（我最尊敬的老師退休了）', replace: '<span class="en-assist" data-tw="我最尊敬的老師退休了。">The teacher whom I respect most retired.<span class="speak-icon">🔊</span></span>' },
  { search: 'The man <em><span class="en-assist" data-tw="車被偷的人報警了">whose car was stolen</span></em> called the police.（車被偷的人報警了）', replace: '<span class="en-assist" data-tw="車子被偷的那個男人報了警。">The man whose car was stolen called the police.<span class="speak-icon">🔊</span></span>' },
  { search: 'The book <em><span class="en-assist" data-tw="我買的書很有趣">which I bought</span></em> is interesting.（我買的書很有趣）', replace: '<span class="en-assist" data-tw="我買的那本書很有趣。">The book which I bought is interesting.<span class="speak-icon">🔊</span></span>' },
  { search: 'This is the best movie <em><span class="en-assist" data-tw="這是我看過最好的電影">that I have ever seen</span></em>.（這是我看過最好的電影）', replace: '<span class="en-assist" data-tw="這是我看過最好的電影。">This is the best movie that I have ever seen.<span class="speak-icon">🔊</span></span>' },

  { search: 'Non-restrictive clauses use commas and provide extra info.', replace: '<span class="en-assist" data-tw="非限定子句使用逗號並提供額外資訊。">Non-restrictive clauses use commas and provide extra info.<span class="speak-icon">🔊</span></span>' },

  { search: '<em><span class="en-assist" data-tw="做完功課後我會出門">After I finish</span></em> my homework, I will go out.（做完功課後我會出門）', replace: '<span class="en-assist" data-tw="做完功課後我會出門。">After I finish my homework, I will go out.<span class="speak-icon">🔊</span></span>' },
  { search: '<em><span class="en-assist" data-tw="因為下雨，我們待在家">Because it rained</span></em>, we stayed home.（因為下雨，我們待在家）', replace: '<span class="en-assist" data-tw="因為下雨，所以我們待在家。">Because it rained, we stayed home.<span class="speak-icon">🔊</span></span>' },
  { search: '<em><span class="en-assist" data-tw="如果你努力，就會通過">If you study hard</span></em>, you will pass.（如果你努力，就會通過）', replace: '<span class="en-assist" data-tw="如果你努力讀書，你就會通過。">If you study hard, you will pass.<span class="speak-icon">🔊</span></span>' },
  { search: '<em><span class="en-assist" data-tw="雖然他年輕，但很成熟">Although he is young</span></em>, he is very mature.（雖然他年輕，但很成熟）', replace: '<span class="en-assist" data-tw="雖然他很年輕，但他非常成熟。">Although he is young, he is very mature.<span class="speak-icon">🔊</span></span>' },
  { search: 'He studied hard <em><span class="en-assist" data-tw="他努力讀書以便通過">so that he could pass</span></em>.（他努力讀書以便通過）', replace: '<span class="en-assist" data-tw="他努力讀書以便能夠通過。">He studied hard so that he could pass.<span class="speak-icon">🔊</span></span>' },
  { search: 'She was <em><span class="en-assist" data-tw="她太累了以至於睡著了">so tired that</span></em> she fell asleep.（她太累了以至於睡著了）', replace: '<span class="en-assist" data-tw="她太累了以至於睡著了。">She was so tired that she fell asleep.<span class="speak-icon">🔊</span></span>' },

  { search: 'If I <em>were</em> you, I <em><span class="en-assist" data-tw="如果我是你，我會更努力">would</span></em> study harder.（如果我是你，我會更努力）', replace: '<span class="en-assist" data-tw="如果我是你，我就會更努力讀書。">If I were you, I would study harder.<span class="speak-icon">🔊</span></span>' },
  { search: 'If he <em>had studied</em>, he <em><span class="en-assist" data-tw="如果他有讀書，他就會通過了">would have passed</span></em>.（如果他有讀書，他就會通過了）', replace: '<span class="en-assist" data-tw="如果他當時有讀書，他就會通過了。">If he had studied, he would have passed.<span class="speak-icon">🔊</span></span>' },
  { search: 'If it <em>should rain</em>, we <em><span class="en-assist" data-tw="萬一下雨，我們就取消旅行">would</span></em> cancel the trip.（萬一下雨，我們就取消旅行）', replace: '<span class="en-assist" data-tw="萬一下雨，我們就取消旅行。">If it should rain, we would cancel the trip.<span class="speak-icon">🔊</span></span>' },

  { search: 'Because she felt tired, she went to bed early.', replace: '<span class="en-assist" data-tw="因為她覺得累，所以她提早就寢。">Because she felt tired, she went to bed early.<span class="speak-icon">🔊</span></span>' },
  { search: '<em>Feeling tired</em>, she went to bed early.', replace: '<span class="en-assist" data-tw="覺得累，她提早就寢。">Feeling tired, she went to bed early.<span class="speak-icon">🔊</span></span>' },
  
  { search: '<em><span class="en-assist" data-tw="我從未見過如此美麗的日落">Never have I seen</span></em> such a beautiful sunset.（我從未見過如此美麗的日落）', replace: '<span class="en-assist" data-tw="我從未見過如此美麗的日落。">Never have I seen such a beautiful sunset.<span class="speak-icon">🔊</span></span>' },
  { search: '<em><span class="en-assist" data-tw="直到那時我才意識到真相">Only then did I realize</span></em> the truth.（直到那時我才意識到真相）', replace: '<span class="en-assist" data-tw="直到那時我才意識到真相。">Only then did I realize the truth.<span class="speak-icon">🔊</span></span>' },
  { search: 'I like coffee. — <em><span class="en-assist" data-tw="我也是">So do I</span></em>.（我也是）', replace: '<span class="en-assist" data-tw="我喜歡咖啡。—— 我也是。">I like coffee. — So do I.<span class="speak-icon">🔊</span></span>' },

  { search: 'She <em><span class="en-assist" data-tw="她決定去">decided to go</span></em>.（她決定去）', replace: '<span class="en-assist" data-tw="她決定去。">She decided to go.<span class="speak-icon">🔊</span></span>' },
  { search: 'I <em><span class="en-assist" data-tw="我喜歡閱讀">enjoy reading</span></em>.（我喜歡閱讀）', replace: '<span class="en-assist" data-tw="我喜歡閱讀。">I enjoy reading.<span class="speak-icon">🔊</span></span>' },

  { search: 'moreover, furthermore, in addition, besides, also', replace: '<span class="en-assist" data-tw="此外, 而且, 還有">moreover, furthermore, in addition, besides, also<span class="speak-icon">🔊</span></span>' },
  { search: 'however, nevertheless, on the contrary, whereas, yet', replace: '<span class="en-assist" data-tw="然而, 儘管如此, 相反地">however, nevertheless, on the contrary, whereas, yet<span class="speak-icon">🔊</span></span>' },
  { search: 'for instance, for example, such as, namely', replace: '<span class="en-assist" data-tw="例如, 像是, 也就是說">for instance, for example, such as, namely<span class="speak-icon">🔊</span></span>' },
  { search: 'in conclusion, to sum up, in short, overall, all in all', replace: '<span class="en-assist" data-tw="總而言之, 簡言之">in conclusion, to sum up, in short, overall, all in all<span class="speak-icon">🔊</span></span>' },

  { search: '<th>Introduction 引言</th>', replace: '<th>Introduction <span class="en-assist" data-tw="引言">Introduction<span class="speak-icon">🔊</span></span></th>' },
  { search: '<th>Body 主體</th>', replace: '<th>Body <span class="en-assist" data-tw="主體">Body<span class="speak-icon">🔊</span></span></th>' },
  { search: '<th>Conclusion 結論</th>', replace: '<th>Conclusion <span class="en-assist" data-tw="結論">Conclusion<span class="speak-icon">🔊</span></span></th>' },
  
  { search: 'Topic Sentence', replace: '<span class="en-assist" data-tw="主題句">Topic Sentence<span class="speak-icon">🔊</span></span>' },

  { search: 'Common Deductions', replace: '<span class="en-assist" data-tw="常見扣分點">Common Deductions<span class="speak-icon">🔊</span></span>' },
  { search: 'would have', replace: '<span class="en-assist" data-tw="將會已經">would have<span class="speak-icon">🔊</span></span>' },
  { search: 'Had', replace: '<span class="en-assist" data-tw="已經(倒裝)">Had<span class="speak-icon">🔊</span></span>' },
  { search: 'did', replace: '<span class="en-assist" data-tw="確實(助動詞)">did<span class="speak-icon">🔊</span></span>' },
  { search: 'realize', replace: '<span class="en-assist" data-tw="意識到">realize<span class="speak-icon">🔊</span></span>' },
  { search: 'Parsing Complex Sentences', replace: '<span class="en-assist" data-tw="解析複雜句子">Parsing Complex Sentences<span class="speak-icon">🔊</span></span>' }
];

replacements.forEach(({search, replace}) => {
  if (html.includes(search) && !html.includes(replace)) {
    html = html.split(search).join(replace);
  }
});

html = html.split('<em>Bitten by a dog</em>, he went to the hospital.').join('<span class="en-assist" data-tw="被狗咬了，他去了醫院。">Bitten by a dog, he went to the hospital.<span class="speak-icon">🔊</span></span>');

fs.writeFileSync(htmlPath, html, 'utf8');
console.log('Patch complete.');
