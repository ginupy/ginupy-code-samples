const form = document.querySelector('#guess-form');
const input = document.querySelector('#guess');
const message = document.querySelector('#message');
const history = document.querySelector('#history');
const submit = document.querySelector('#submit');
const maxNumber = 20;
const maxAttempts = 5;
let secret;
let guesses;
let finished;

function reset() {
    secret = Math.floor(Math.random() * maxNumber) + 1;
    guesses = [];
    finished = false;
    input.value = '';
    input.disabled = false;
    submit.disabled = false;
    message.textContent = 'Ready when you are.';
    history.textContent = 'Guesses: none';
}

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Keep this page open instead of submitting to a server.
    if (finished) {
        return;
    }
    const number = Number(input.value);
    if (input.value.trim() === '' || !Number.isInteger(number) || number < 1 || number > maxNumber) {
        message.textContent = `Enter a whole number from 1 to ${maxNumber}.`;
        return;
    }
    if (guesses.includes(number)) {
        message.textContent = 'Already tried! Choose a different number.';
        return;
    }
    guesses.push(number);
    finished = number === secret || guesses.length === maxAttempts;
    if (number === secret) {
        message.textContent = `You found it in ${guesses.length} attempt(s)!`;
    } else if (finished) {
        message.textContent = `Out of attempts. The number was ${secret}.`;
    } else {
        const hint = number < secret ? 'Too low' : 'Too high';
        message.textContent = `${hint}. ${maxAttempts - guesses.length} attempt(s) left.`;
    }
    history.textContent = `Guesses: ${guesses.join(', ')}`;
    input.disabled = finished;
    submit.disabled = finished;
    if (!finished) {
        input.select();
    }
});
document.querySelector('#restart').addEventListener('click', () => {
    reset();
    input.focus();
});
reset();
