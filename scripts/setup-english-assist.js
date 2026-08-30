const fs = require('fs');
const path = require('path');

// 1. Update style.css
const cssPath = path.join(__dirname, '..', 'css', 'style.css');
let css = fs.readFileSync(cssPath, 'utf8');

const englishAssistCSS = `
/* English Assist Styles */
.en-assist {
  position: relative;
  display: inline-block;
  cursor: help;
  border-bottom: 1px dashed var(--color-accent-teal);
  transition: background 0.2s;
  padding: 0 2px;
}
.en-assist:hover {
  background: rgba(124, 149, 147, 0.1);
}
.en-assist::after {
  content: attr(data-tw);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-5px);
  background: var(--color-text-primary);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.85rem;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
  z-index: var(--z-tooltip, 1000);
  box-shadow: var(--shadow-sm);
}
.en-assist:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.speak-icon {
  cursor: pointer;
  margin-left: 4px;
  font-size: 0.9em;
  opacity: 0.6;
  transition: all 0.2s;
  display: inline-block;
}
.speak-icon:hover {
  opacity: 1;
  transform: scale(1.1);
}
`;

if (!css.includes('.en-assist {')) {
  fs.appendFileSync(cssPath, '\n' + englishAssistCSS);
}

// 2. Create english-assist.js
const jsPath = path.join(__dirname, '..', 'js', 'english-assist.js');
const jsContent = `
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
`;
fs.writeFileSync(jsPath, jsContent);

console.log('CSS and JS infrastructure for English Assist created.');
