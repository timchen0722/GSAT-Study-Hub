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
    if (!question || this.answers[question.id] === undefined) return;

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
    question.options.forEach((opt, i) => {
      let optClass = 'option-item';
      if (userAnswer === i) optClass += ' selected';
      if (this.isSubmitted) {
        if (i === question.answer) optClass += ' correct';
        else if (userAnswer === i && i !== question.answer) optClass += ' incorrect';
      }

      optionsHtml += `
        <li class="${optClass}" onclick="quiz.selectAnswer('${question.id}', ${i})" ${this.isSubmitted ? 'style="pointer-events:none;"' : ''}>
          <span class="option-letter">${letters[i]}</span>
          <span class="option-text">${opt}</span>
        </li>
      `;
    });

    let explanationHtml = '';
    if (this.isSubmitted && question.explanation) {
      explanationHtml = `
        <div class="explanation-box show">
          <div class="explanation-title">💡 詳解</div>
          <div class="explanation-text">${question.explanation}</div>
        </div>
      `;
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
        <ul class="options-list">${optionsHtml}</ul>
        ${explanationHtml}
      </div>

      <div class="quiz-controls">
        <button class="btn btn-secondary" onclick="quiz.prevQuestion()" ${current <= 1 ? 'disabled style="opacity:0.5"' : ''}>
          ← 上一題
        </button>
        ${!this.isSubmitted ? `
          <button class="btn btn-primary" onclick="quiz.submitCurrentAnswer()" ${userAnswer === undefined ? 'disabled style="opacity:0.5"' : ''}>
            確認答案
          </button>
        ` : `
          <button class="btn btn-teal" onclick="quiz.nextQuestion()">
            ${current >= total ? '查看結果 →' : '下一題 →'}
          </button>
        `}
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
