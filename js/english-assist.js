/**
 * English Assist - Comprehensive TTS (Text-to-Speech) & Interactive Translation Engine
 * 專為學測英文設計：全真發音、智慧過濾中文、行動端與桌面端互動翻譯
 */

document.addEventListener('DOMContentLoaded', () => {
  // Global TTS speak function
  function speakEnglish(text, iconElement) {
    if (!text || !('speechSynthesis' in window)) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    // Clean English text for natural speech synthesis
    const cleanText = text
      .replace(/（[^）]*）|\([^)]*\)|\[[^\]]*\]/g, '') // remove parenthetical annotations
      .replace(/[\u4e00-\u9fa5]/g, '')               // remove Chinese characters
      .replace(/_{2,}/g, ' blank ')                   // replace fill-in-the-blank underscores with "blank"
      .replace(/🔊|💡|📖|🎯|📌|⭐|🔥|⚠️|🔍|🔤/g, '') // remove emojis
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) return;

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = 0.92; // Optimized natural pace for learning
    utterance.pitch = 1.0;

    if (iconElement) {
      iconElement.classList.add('speaking-active');
      iconElement.style.transform = 'scale(1.25)';
      iconElement.style.opacity = '1';
      iconElement.style.color = 'var(--color-accent-teal, #4a90e2)';

      utterance.onend = () => {
        iconElement.classList.remove('speaking-active');
        iconElement.style.transform = '';
        iconElement.style.opacity = '';
        iconElement.style.color = '';
      };
      utterance.onerror = () => {
        iconElement.classList.remove('speaking-active');
        iconElement.style.transform = '';
        iconElement.style.opacity = '';
        iconElement.style.color = '';
      };
    }

    window.speechSynthesis.speak(utterance);
  }

  // Event listener for click / tap
  document.addEventListener('click', (e) => {
    // 1. Speak Icon Click
    const speakIcon = e.target.closest('.speak-icon');
    if (speakIcon) {
      e.preventDefault();
      e.stopPropagation(); // Prevent trigger option selection or other events

      const parent = speakIcon.closest('.en-assist');
      if (parent) {
        const textToSpeak = parent.getAttribute('data-en') || Array.from(parent.childNodes)
          .filter(node => node !== speakIcon && !speakIcon.contains(node))
          .map(node => node.textContent)
          .join('')
          .replace(/🔊/g, '')
          .trim();

        speakEnglish(textToSpeak, speakIcon);
      }
      return;
    }

    // 2. Mobile Tap on .en-assist to show translation tooltip
    const enAssist = e.target.closest('.en-assist');
    if (enAssist && window.innerWidth <= 768) {
      // Toggle active tooltip class on mobile
      enAssist.classList.toggle('touch-active');
    }
  });
});
