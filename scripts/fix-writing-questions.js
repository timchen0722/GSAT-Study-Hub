const fs = require('fs');
const path = require('path');

// 1. Fix english-quiz.js
const quizPath = path.join(__dirname, '..', 'quiz', 'data', 'english-quiz.js');
let content = fs.readFileSync(quizPath, 'utf8');

const startIdx = content.indexOf('[');
const endIdx = content.lastIndexOf(']');
let data = JSON.parse(content.substring(startIdx, endIdx + 1));

data.forEach(q => {
    if (q.category === '翻譯寫作') {
        q.type = 'writing';
        if (q.options && typeof q.answer === 'number') {
            q.reference = q.options[q.answer];
            delete q.options;
            delete q.answer;
        }
    }
});

fs.writeFileSync(quizPath, 'const englishQuiz = ' + JSON.stringify(data) + ';\n', 'utf8');
console.log('Fixed english-quiz.js');

// 2. Patch quiz.js to support type === 'writing'
const enginePath = path.join(__dirname, '..', 'js', 'quiz.js');
let engineContent = fs.readFileSync(enginePath, 'utf8');

// Replace submitCurrentAnswer
engineContent = engineContent.replace(
    /submitCurrentAnswer\(\) \{\s*const question = this\.getCurrentQuestion\(\);\s*if \(\!question \|\| this\.answers\[question\.id\] === undefined\) return;\s*this\.isSubmitted = true;\s*const isCorrect = this\.answers\[question\.id\] === question\.answer;\s*if \(isCorrect\) this\.score\+\+;\s*this\.renderQuestion\(\);\s*\}/,
    `submitCurrentAnswer() {
    const question = this.getCurrentQuestion();
    if (!question) return;

    if (question.type === 'writing') {
      const textarea = document.getElementById('writing-answer');
      if (textarea) this.answers[question.id] = textarea.value.trim();
      if (!this.answers[question.id]) return; // Require some input
      this.isSubmitted = true;
      this.score++; // Treat writing as correct for score calculation
      this.renderQuestion();
      return;
    }

    if (this.answers[question.id] === undefined) return;
    this.isSubmitted = true;
    const isCorrect = this.answers[question.id] === question.answer;
    if (isCorrect) this.score++;
    this.renderQuestion();
  }`
);

// Replace renderQuestion options generation
engineContent = engineContent.replace(
    /let optionsHtml = '';\s*question\.options\.forEach\(\(opt, i\) => \{[\s\S]*?\}\);\s*let explanationHtml = '';/,
    `let optionsHtml = '';
    if (question.type === 'writing') {
      optionsHtml = \`
        <div class="writing-area" style="margin: 1rem 0;">
          <textarea id="writing-answer" rows="4" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-family: inherit; font-size: inherit;" placeholder="請輸入您的答案..." \${this.isSubmitted ? 'disabled' : ''}>\${userAnswer || ''}</textarea>
        </div>
      \`;
      if (this.isSubmitted && question.reference) {
        optionsHtml += \`
          <div class="reference-answer" style="margin-top: 1rem; padding: 1rem; background: rgba(0, 210, 211, 0.1); border-left: 4px solid var(--color-accent-green); border-radius: var(--radius-md);">
            <strong>✅ 參考答案：</strong><br>\${question.reference}
          </div>
        \`;
      }
    } else {
      question.options.forEach((opt, i) => {
        let optClass = 'option-item';
        if (userAnswer === i) optClass += ' selected';
        if (this.isSubmitted) {
          if (i === question.answer) optClass += ' correct';
          else if (userAnswer === i && i !== question.answer) optClass += ' incorrect';
        }

        optionsHtml += \`
          <li class="\${optClass}" onclick="quiz.selectAnswer('\${question.id}', \${i})" \${this.isSubmitted ? 'style="pointer-events:none;"' : ''}>
            <span class="option-letter">\${letters[i]}</span>
            <span class="option-text">\${opt}</span>
          </li>
        \`;
      });
    }

    let explanationHtml = '';`
);

// Replace renderQuestion submit button logic
engineContent = engineContent.replace(
    /<button class="btn btn-primary" onclick="quiz\.submitCurrentAnswer\(\)" \$\{userAnswer === undefined \? 'disabled style="opacity:0\.5"' : ''\}>/g,
    `<button class="btn btn-primary" onclick="quiz.submitCurrentAnswer()" \${(question.type !== 'writing' && userAnswer === undefined) ? 'disabled style="opacity:0.5"' : ''}>`
);

// Replace renderResults reviewHtml generation
engineContent = engineContent.replace(
    /const userAns = this\.answers\[q\.id\];\s*const isCorrect = userAns === q\.answer;\s*if \(\!isCorrect\) \{[\s\S]*?\}\s*\}\);\s*const html = \`/g,
    `const userAns = this.answers[q.id];
      if (q.type === 'writing') {
        reviewHtml += \`
          <div class="content-section" style="margin-bottom: var(--space-4);">
            <div class="question-number">第 \${idx + 1} 題 <span class="question-category">\${q.category}</span></div>
            <div class="question-text" style="font-size: var(--font-size-base);">\${q.question}</div>
            <p style="color: var(--color-accent-blue);">✍️ 你的作答：<br>\${userAns || '未作答'}</p>
            <p style="color: var(--color-accent-green); margin-top: 0.5rem;">✅ 參考答案：<br>\${q.reference || ''}</p>
            \${q.explanation ? \`<div class="explanation-box show"><div class="explanation-title">💡 詳解</div><div class="explanation-text">\${q.explanation}</div></div>\` : ''}
          </div>
        \`;
      } else {
        const isCorrect = userAns === q.answer;
        if (!isCorrect) {
          const letters = ['A', 'B', 'C', 'D', 'E'];
          reviewHtml += \`
            <div class="content-section" style="margin-bottom: var(--space-4);">
              <div class="question-number">第 \${idx + 1} 題 <span class="question-category">\${q.category}</span></div>
              <div class="question-text" style="font-size: var(--font-size-base);">\${q.question}</div>
              <p style="color: var(--color-accent-red);">❌ 你的答案：\${userAns !== undefined ? letters[userAns] + '. ' + q.options[userAns] : '未作答'}</p>
              <p style="color: var(--color-accent-green);">✅ 正確答案：\${letters[q.answer]}. \${q.options[q.answer]}</p>
              \${q.explanation ? \`<div class="explanation-box show"><div class="explanation-title">💡 詳解</div><div class="explanation-text">\${q.explanation}</div></div>\` : ''}
            </div>
          \`;
        }
      }
    });

    const html = \``
);

fs.writeFileSync(enginePath, engineContent, 'utf8');
console.log('Fixed quiz.js');
