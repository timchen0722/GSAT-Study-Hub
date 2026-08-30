/**
 * GSAT Study Hub - Countdown Timer
 * 116年學測倒數計時器
 * 學測日期：民國116年1月22日 = 西元2027年1月22日
 */

(function() {
  'use strict';

  // 學測第一天日期：2027年1月22日 08:20 (台灣時間 UTC+8)
  const EXAM_DATE = new Date('2027-01-22T08:20:00+08:00');

  const elements = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds')
  };

  function updateCountdown() {
    const now = new Date();
    const diff = EXAM_DATE - now;

    if (diff <= 0) {
      // 考試已開始或已結束
      elements.days.textContent = '0';
      elements.hours.textContent = '00';
      elements.minutes.textContent = '00';
      elements.seconds.textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    elements.days.textContent = days;
    elements.hours.textContent = String(hours).padStart(2, '0');
    elements.minutes.textContent = String(minutes).padStart(2, '0');
    elements.seconds.textContent = String(seconds).padStart(2, '0');
  }

  // Initial update
  updateCountdown();

  // Update every second
  setInterval(updateCountdown, 1000);
})();
