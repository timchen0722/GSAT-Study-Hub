const fs = require('fs');
const file = 'quiz/data/math-a-quiz.js';
const code = fs.readFileSync(file, 'utf8');
const quiz = JSON.parse(code.substring(code.indexOf('['), code.lastIndexOf(']') + 1));
quiz[540].question = '直角坐標系中，角 $\\theta = 90^\\circ$ 的正弦值 $\\sin 90^\\circ$ 為何？';
quiz[540].options = ['1', '0', '-1', '不存在'];
quiz[540].answer = 0;
quiz[540].explanation = '$\\sin 90^\\circ = 1$。';

quiz[547].question = "求多項式函數 $f(x) = 6x^3$ 的導函數 $f'(x)$ 為何？";
quiz[547].options = ["$18x^2$", "$6x^2$", "$18x^3$", "$2x^2$"];
quiz[547].answer = 0;
quiz[547].explanation = "$f'(x) = 6(3x^2) = 18x^2$。";

fs.writeFileSync(file, 'const mathAQuiz = ' + JSON.stringify(quiz, null, 2) + ';\n', 'utf8');
const s = new Set();
quiz.forEach(q => s.add(q.question.trim()));
console.log('Total Math A: ' + quiz.length + ', Unique: ' + s.size);
