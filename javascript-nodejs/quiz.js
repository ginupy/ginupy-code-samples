'use strict';
const readline = require('node:readline');

const questions = [
    { prompt: 'Which value is a boolean?', options: ['42', 'true', 'hello'], answer: 2 },
    { prompt: 'Which structure stores an ordered list?', options: ['Array', 'Number', 'Boolean'], answer: 1 },
    { prompt: 'What does 3 * 4 evaluate to?', options: ['7', '34', '12'], answer: 3 },
];
const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
let index = 0;
let score = 0;
let finished = false;

function showQuestion() {
    const question = questions[index];
    console.log(`\n${index + 1}. ${question.prompt}`);
    question.options.forEach((option, i) => console.log(`  ${i + 1}) ${option}`));
    console.log('Enter 1, 2, or 3 (q to quit):');
}

console.log('Tiny code quiz');
showQuestion();
// A line event works for interactive typing and piped input alike.
input.on('line', (line) => {
    if (finished || index >= questions.length) {
        return;
    }
    const answer = line.trim();
    if (answer.toLowerCase() === 'q') {
        input.close();
        return;
    }
    if (!/^[1-3]$/.test(answer)) {
        console.log('Please enter 1, 2, or 3.');
        return;
    }
    if (Number(answer) === questions[index].answer) {
        score += 1;
        console.log('Correct!');
    } else {
        console.log(`Answer: ${questions[index].options[questions[index].answer - 1]}`);
    }
    index += 1;
    if (index === questions.length) {
        input.close();
    } else {
        showQuestion();
    }
});
input.on('close', () => {
    finished = true;
    console.log(`Score: ${score}/${questions.length} (${index} answered)`);
    process.stdin.pause();
});
