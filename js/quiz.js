/**
 * GSAT Study Hub - Quiz System
 * 題庫系統核心邏輯
 */

class QuizSystem {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.questions = [];
    this.filteredQuestions = [];
    this.currentIndex = 0;
    this.answers = {};
    this.score = 0;
    this.quizMode = 'practice'; // 'practice' | 'exam'
    this.selectedSubject = '';
    this.selectedCategory = '';
    this.questionsPerSession = 25;
    this.isSubmitted = false;
  }

  /**
   * Load questions from quiz data files
   */
  loadQuestions(subject) {
    this.selectedSubject = subject;
    const dataMap = {
      'chinese': typeof chineseQuiz !== 'undefined' ? chineseQuiz : [],
      'english': typeof englishQuiz !== 'undefined' ? englishQuiz : [],
      'math-a': typeof mathAQuiz !== 'undefined' ? mathAQuiz : [],
      'math-b': typeof mathBQuiz !== 'undefined' ? mathBQuiz : [],
      'social': typeof socialQuiz !== 'undefined' ? socialQuiz : [],
      'science': typeof scienceQuiz !== 'undefined' ? scienceQuiz : []
    };

    this.questions = dataMap[subject] || [];
    this.filteredQuestions = [...this.questions];
    this.currentIndex = 0;
    this.answers = {};
    this.score = 0;
    this.isSubmitted = false;
  }

  /**
   * Filter questions by category
   */
  filterByCategory(category) {
    this.selectedCategory = category;
    if (category === 'all' || !category) {
      this.filteredQuestions = [...this.questions];
    } else {
      this.filteredQuestions = this.questions.filter(q => q.category === category);
    }
    this.currentIndex = 0;
    this.answers = {};
    this.score = 0;
    this.isSubmitted = false;
  }

  /**
   * Shuffle questions randomly
   */
  shuffle() {
    for (let i = this.filteredQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.filteredQuestions[i], this.filteredQuestions[j]] = 
        [this.filteredQuestions[j], this.filteredQuestions[i]];
    }
    this.currentIndex = 0;
  }

  /**
   * Start a quiz session
   */
  startSession(numQuestions) {
    this.questionsPerSession = numQuestions || 25;
    this.shuffle();
    this.filteredQuestions = this.filteredQuestions.slice(0, this.questionsPerSession);
    this.currentIndex = 0;
    this.answers = {};
    this.score = 0;
    this.isSubmitted = false;
    this.renderQuestion();
  }

  /**
   * Get current question
   */
  getCurrentQuestion() {
    return this.filteredQuestions[this.currentIndex];
  }

  /**
   * Select an answer
   */
  selectAnswer(questionId, answerIndex) {
    this.answers[questionId] = answerIndex;
    this.renderQuestion();
  }

  /**
   * Submit answer for current question (practice mode)
   */
  submitCurrentAnswer() {
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
  }

  /**
   * Go to next question
   */
  nextQuestion() {
    if (this.currentIndex < this.filteredQuestions.length - 1) {
      this.currentIndex++;
      this.isSubmitted = false;
      this.renderQuestion();
    } else {
      this.renderResults();
    }
  }

  /**
   * Abort quiz early and show results
   */
  abortQuiz() {
    // Only calculate score based on answered questions
    this.filteredQuestions = this.filteredQuestions.slice(0, this.currentIndex + (this.isSubmitted ? 1 : 0));
    this.renderResults();
  }

  /**
   * Go to previous question
   */
  prevQuestion() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.isSubmitted = this.answers[this.getCurrentQuestion()?.id] !== undefined;
      this.renderQuestion();
    }
  }

  /**
   * Render the current question
   */
  renderQuestion() {
    const question = this.getCurrentQuestion();
    if (!question || !this.container) return;

    const total = this.filteredQuestions.length;
    const current = this.currentIndex + 1;
    const progress = (current / total) * 100;
    const userAnswer = this.answers[question.id];
    const letters = ['A', 'B', 'C', 'D', 'E'];

    let optionsHtml = '';
    if (question.type === 'writing') {
      optionsHtml = `
        <div class="writing-area" style="margin: 1rem 0;">
          <textarea id="writing-answer" rows="4" style="width: 100%; padding: 0.5rem; border: 1px solid var(--border-color); border-radius: var(--radius-md); font-family: inherit; font-size: inherit;" placeholder="請輸入您的答案..." ${this.isSubmitted ? 'disabled' : ''}>${userAnswer || ''}</textarea>
        </div>
      `;
      if (this.isSubmitted && question.reference) {
        optionsHtml += `
          <div class="reference-answer" style="margin-top: 1rem; padding: 1rem; background: rgba(0, 210, 211, 0.1); border-left: 4px solid var(--color-accent-green); border-radius: var(--radius-md);">
            <strong>✅ 參考答案：</strong><br><span class="en-assist" data-en="${question.reference.replace(/"/g, '&quot;')}">${question.reference} <span class="speak-icon" style="cursor:pointer;" title="朗讀參考答案">🔊</span></span>
          </div>
        `;
      }
    } else {
      question.options.forEach((opt, i) => {
        let optClass = 'option-item';
        if (userAnswer === i) optClass += ' selected';
        if (this.isSubmitted) {
          if (i === question.answer) optClass += ' correct';
          else if (userAnswer === i && i !== question.answer) optClass += ' incorrect';
        }

        let optContent = opt;
        if (this.selectedSubject === 'english') {
          // Avoid double-wrapping if the option already contains a speak-icon
          if (!opt.includes('speak-icon')) {
            const enOnly = opt.replace(/（[^）]*）|\([^)]*\)|🔊/g, '').trim();
            const matchTw = opt.match(/（([^）]+)）|\(([^)]+)\)/);
            const twOnly = matchTw ? (matchTw[1] || matchTw[2]) : '點擊朗讀';
            optContent = `<span class="en-assist" data-en="${enOnly.replace(/"/g, '&quot;')}" data-tw="${twOnly.replace(/"/g, '&quot;')}" style="display:flex; align-items:center; justify-content:space-between; width:100%;">
              <span class="opt-label">${opt}</span>
              <span class="speak-icon" style="margin-left:8px; font-size:1.1em; cursor:pointer;" title="朗讀發音">🔊</span>
            </span>`;
          }
        }

        optionsHtml += `
          <li class="${optClass}" onclick="quiz.selectAnswer('${question.id}', ${i})" ${this.isSubmitted ? 'style="pointer-events:none;"' : ''}>
            <span class="option-letter">${letters[i]}</span>
            <span class="option-text" style="flex-grow:1;">${optContent}</span>
          </li>
        `;
      });
    }

    let explanationHtml = '';
    if (this.isSubmitted && (question.explanation || question.question)) {
      let stemTransHtml = '';
      if (question.question) {
        const twMatch = question.question.match(/data-tw="([^"]+)"/);
        if (twMatch && twMatch[1]) {
          const twText = twMatch[1];
          stemTransHtml = `
            <div class="explanation-stem-translation" style="margin-bottom: 0.85rem; padding: 0.75rem 1rem; background: rgba(74, 144, 226, 0.08); border-left: 4px solid var(--color-primary, #3182ce); border-radius: var(--radius-sm, 6px); font-size: 0.95em; line-height: 1.6; color: var(--color-text-primary);">
              <div style="font-weight: 700; margin-bottom: 4px; color: var(--color-primary, #2b6cb0); display: flex; align-items: center; gap: 6px;">
                <span>📖 題目中文翻譯：</span>
              </div>
              <div style="color: var(--color-text-primary); font-size: 1.02em;">${twText}</div>
            </div>
          `;
        }
      }

      explanationHtml = `
        <div class="explanation-box show" style="margin-top: 1.5rem; padding: 1.2rem; background: var(--color-bg-card, #ffffff); border: 1px solid rgba(74, 144, 226, 0.2); border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
          <div class="explanation-title" style="display: flex; align-items: center; gap: 6px; font-weight: 700; font-size: 1.1em; margin-bottom: 0.85rem; color: var(--color-text-primary);">
            <span>💡 詳解與中文解析</span>
          </div>
          ${stemTransHtml}
          <div class="explanation-text" style="line-height: 1.6; color: var(--color-text-primary);">
            ${question.explanation ? `<div style="font-weight: 600; color: var(--color-text-secondary, #4a5568); margin-bottom: 4px;">📝 考點與題目解析：</div><div>${question.explanation}</div>` : ''}
          </div>
        </div>
      `;
    }

    let stemAssistHtml = '';
    if (this.selectedSubject === 'english' && question.question) {
      const twMatch = question.question.match(/data-tw="([^"]+)"/);
      if (twMatch && twMatch[1]) {
        const twText = twMatch[1];
        stemAssistHtml = `
          <div class="stem-translation-toggle" style="margin-top: 8px;">
            <button type="button" class="btn-translation-hint" onclick="this.nextElementSibling.classList.toggle('hidden');" style="background: rgba(109, 134, 154, 0.12); border: 1px dashed var(--color-accent-teal, #4a90e2); color: var(--color-text-secondary); border-radius: 6px; padding: 3px 10px; font-size: 0.85em; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
              <span>🔤 顯示/隱藏題目中文翻譯</span>
            </button>
            <div class="stem-translation-box hidden" style="margin-top: 6px; padding: 8px 12px; background: rgba(109, 134, 154, 0.08); border-left: 3px solid #6d869a; border-radius: 4px; font-size: 0.9em; color: var(--color-text-primary); line-height: 1.5;">
              💡 <strong>中文句意：</strong>${twText}
            </div>
          </div>
        `;
      }
    }

    const html = `
      <div class="quiz-header">
        <div class="quiz-progress">
          <div class="progress-bar-wrapper">
            <div class="progress-bar-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${current} / ${total}</span>
        </div>
        <div class="progress-text">得分：${this.score}</div>
      </div>

      <div class="quiz-question-card">
        <div class="question-number">第 ${current} 題</div>
        <span class="question-category">${question.category || ''}</span>
        <div class="question-text">${question.question}</div>
        ${stemAssistHtml}
        <ul class="options-list">${optionsHtml}</ul>
        ${explanationHtml}
      </div>

      <div class="quiz-controls">
        <button class="btn btn-secondary" onclick="quiz.prevQuestion()" ${current <= 1 ? 'disabled style="opacity:0.5"' : ''}>
          ← 上一題
        </button>
        ${!this.isSubmitted ? `
          <button class="btn btn-primary" onclick="quiz.submitCurrentAnswer()" ${(question.type !== 'writing' && userAnswer === undefined) ? 'disabled style="opacity:0.5"' : ''}>
            確認答案
          </button>
        ` : `
          <button class="btn btn-teal" onclick="quiz.nextQuestion()">
            ${current >= total ? '查看結果 →' : '下一題 →'}
          </button>
        `}
        <button class="btn" style="background: #ef4444; color: white;" onclick="if(confirm('確定要提前中斷測驗並查看結果嗎？')) quiz.abortQuiz()">
          🛑 中斷測驗
        </button>
      </div>
    `;

    this.container.innerHTML = html;

    // Re-render KaTeX if available
    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(this.container, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false},
          {left: '\\(', right: '\\)', display: false},
          {left: '\\[', right: '\\]', display: true}
        ],
        throwOnError: false
      });
    }
  }

  /**
   * Render quiz results
   */
  renderResults() {
    if (!this.container) return;

    const total = this.filteredQuestions.length;
    const percentage = Math.round((this.score / total) * 100);
    let grade = '';
    let gradeColor = '';

    if (percentage >= 90) { grade = '🏆 優秀！'; gradeColor = '#22c55e'; }
    else if (percentage >= 80) { grade = '🌟 很好！'; gradeColor = '#3b82f6'; }
    else if (percentage >= 70) { grade = '👍 不錯！'; gradeColor = '#00d2d3'; }
    else if (percentage >= 60) { grade = '💪 及格！'; gradeColor = '#e2b714'; }
    else { grade = '📖 需加強'; gradeColor = '#ef4444'; }

    // Build wrong answers review
    let reviewHtml = '';
    this.filteredQuestions.forEach((q, idx) => {
      const userAns = this.answers[q.id];
      if (q.type === 'writing') {
        reviewHtml += `
          <div class="content-section" style="margin-bottom: var(--space-4);">
            <div class="question-number">第 ${idx + 1} 題 <span class="question-category">${q.category}</span></div>
            <div class="question-text" style="font-size: var(--font-size-base);">${q.question}</div>
            <p style="color: var(--color-accent-blue);">✍️ 你的作答：<br>${userAns || '未作答'}</p>
            <p style="color: var(--color-accent-green); margin-top: 0.5rem;">✅ 參考答案：<br>${q.reference || ''}</p>
            ${q.explanation ? `<div class="explanation-box show"><div class="explanation-title">💡 詳解</div><div class="explanation-text">${q.explanation}</div></div>` : ''}
          </div>
        `;
      } else {
        const isCorrect = userAns === q.answer;
        if (!isCorrect) {
          const letters = ['A', 'B', 'C', 'D', 'E'];
          reviewHtml += `
            <div class="content-section" style="margin-bottom: var(--space-4);">
              <div class="question-number">第 ${idx + 1} 題 <span class="question-category">${q.category}</span></div>
              <div class="question-text" style="font-size: var(--font-size-base);">${q.question}</div>
              <p style="color: var(--color-accent-red);">❌ 你的答案：${userAns !== undefined ? letters[userAns] + '. ' + q.options[userAns] : '未作答'}</p>
              <p style="color: var(--color-accent-green);">✅ 正確答案：${letters[q.answer]}. ${q.options[q.answer]}</p>
              ${q.explanation ? `<div class="explanation-box show"><div class="explanation-title">💡 詳解</div><div class="explanation-text">${q.explanation}</div></div>` : ''}
            </div>
          `;
        }
      }
    });

    const html = `
      <div class="quiz-results">
        <div style="font-size: 4rem; margin-bottom: var(--space-4);">${percentage >= 60 ? '🎉' : '📚'}</div>
        <div class="results-score">${this.score} / ${total}</div>
        <div class="results-detail" style="color: ${gradeColor};">${grade}（正確率 ${percentage}%）</div>
        <div style="display: flex; gap: var(--space-4); justify-content: center; margin-top: var(--space-8);">
          <button class="btn btn-primary btn-lg" onclick="quiz.startSession(${total})">🔄 再測一次</button>
          <a href="quiz.html" class="btn btn-secondary btn-lg">📋 回題庫選單</a>
        </div>
      </div>

      ${reviewHtml ? `
        <div style="margin-top: var(--space-8);">
          <h3 style="font-size: var(--font-size-2xl); margin-bottom: var(--space-6);">📝 錯題回顧</h3>
          ${reviewHtml}
        </div>
      ` : ''}
    `;

    this.container.innerHTML = html;

    if (typeof renderMathInElement !== 'undefined') {
      renderMathInElement(this.container, {
        delimiters: [
          {left: '$$', right: '$$', display: true},
          {left: '$', right: '$', display: false}
        ],
        throwOnError: false
      });
    }
  }

  /**
   * Get categories for current subject
   */
  getCategories() {
    const categories = new Set();
    this.questions.forEach(q => {
      if (q.category) categories.add(q.category);
    });
    return Array.from(categories);
  }
}

// Global quiz instance
let quiz = new QuizSystem('quizContainer');
