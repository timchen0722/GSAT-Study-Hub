const fs = require('fs');

['subjects/chinese.html', 'subjects/science.html', 'subjects/social.html', 'subjects/english.html'].forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/\$\r?ightarrow\$/g, '→');
  c = c.replace(/\\rightarrow/g, '→');
  c = c.replace(/•\s*人心，不同各如其面[\s\S]*?人心（如）其面/g, '• 人心，不同各如其面 → <strong>人心（如）其面</strong>');
  fs.writeFileSync(f, c, 'utf8');
  console.log('Fixed:', f);
});
