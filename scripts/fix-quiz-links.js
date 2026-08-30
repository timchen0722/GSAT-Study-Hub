const fs = require('fs');
const path = require('path');

// 1. Update quiz.html to parse ?subject= query parameter
const quizHtmlPath = path.join(__dirname, '..', 'quiz', 'quiz.html');
let quizHtml = fs.readFileSync(quizHtmlPath, 'utf8');

if (!quizHtml.includes('URLSearchParams(window.location.search)')) {
    const initScript = `
    window.addEventListener('DOMContentLoaded', () => {
      const urlParams = new URLSearchParams(window.location.search);
      const subject = urlParams.get('subject');
      if (subject) {
        selectSubject(subject);
      }
    });
  `;
    
    // Inject before the closing </script> in the inline script block
    quizHtml = quizHtml.replace(/function backToMenu\(\) \{[\s\S]*?\}\s*<\/script>/, (match) => {
        return match.replace('</script>', initScript + '\n  </script>');
    });
    
    fs.writeFileSync(quizHtmlPath, quizHtml, 'utf8');
    console.log('Updated quiz.html to support ?subject query param.');
}

// 2. Update all subject HTML files to append ?subject= to the quiz links
const subjectsDir = path.join(__dirname, '..', 'subjects');
const files = fs.readdirSync(subjectsDir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const subjectName = path.basename(file, '.html');
    const filePath = path.join(subjectsDir, file);
    
    let content = fs.readFileSync(filePath, 'utf8');
    // Replace exact matches of href="../quiz/quiz.html"
    let newContent = content.replace(/href="\.\.\/quiz\/quiz\.html"/g, `href="../quiz/quiz.html?subject=${subjectName}"`);
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated links in ${file} to point to ?subject=${subjectName}`);
    }
});
