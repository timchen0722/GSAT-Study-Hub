
/**
 * English Assist - Handles TTS (Text-to-Speech) for English learning
 */
document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('click', (e) => {
    // Check if clicked element or its parent is the speak icon
    const speakIcon = e.target.closest('.speak-icon');
    if (speakIcon) {
      e.preventDefault();
      e.stopPropagation(); // Prevent quiz option selection if clicked on icon inside option
      
      const parent = speakIcon.closest('.en-assist');
      if (parent) {
        // Extract English text, removing the icon itself
        const textToSpeak = parent.getAttribute('data-en') || Array.from(parent.childNodes)
          .filter(node => node !== speakIcon && !speakIcon.contains(node))
          .map(node => node.textContent)
          .join('')
          .replace(/🔊/g, '')
          .trim();
          
        if (textToSpeak && 'speechSynthesis' in window) {
          // Cancel any ongoing speech
          window.speechSynthesis.cancel();
          
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          utterance.lang = 'en-US';
          utterance.rate = 0.9; // Slightly slower for learning
          
          // Add simple visual feedback
          speakIcon.style.opacity = '1';
          speakIcon.style.transform = 'scale(1.2)';
          
          utterance.onend = () => {
            speakIcon.style.opacity = '';
            speakIcon.style.transform = '';
          };
          
          window.speechSynthesis.speak(utterance);
        }
      }
    }
  });
});
