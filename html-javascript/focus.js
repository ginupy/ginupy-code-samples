// A deadline-based timer stays accurate when a browser throttles background tabs.
const clock = document.querySelector('#clock');
const ring = document.querySelector('#ring');
const state = document.querySelector('#state');
const note = document.querySelector('#timer-note');
const status = document.querySelector('#session-status');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const presets = document.querySelectorAll('[data-minutes]');
const tasks = document.querySelectorAll('.focus-tasks input');
const taskCount = document.querySelector('#task-count');
const taskProgress = document.querySelector('#task-progress');
const sessionCount = document.querySelector('#session-count');

let duration = 25 * 60 * 1000;
let remaining = duration;
let deadline = 0;
let running = false;
let completed = 0;
let interval = null;

function render() {
    const seconds = Math.ceil(remaining / 1000);
    const minutesPart = String(Math.floor(seconds / 60)).padStart(2, '0');
    const secondsPart = String(seconds % 60).padStart(2, '0');
    clock.textContent = `${minutesPart}:${secondsPart}`;
    ring.style.setProperty('--sweep', `${remaining / duration * 360}deg`);
    start.textContent = running ? 'Pause focus' : remaining === 0 ? 'Start again ↗' : 'Start focus ↗';
}

function stopInterval() {
    clearInterval(interval);
    interval = null;
    running = false;
}

function tick() {
    if (!running) {
        return;
    }
    remaining = Math.max(0, deadline - Date.now());
    if (remaining === 0) {
        stopInterval();
        completed += 1;
        sessionCount.textContent = String(completed).padStart(2, '0');
        state.textContent = 'COMPLETE';
        note.textContent = 'A little progress, made.';
        status.textContent = 'Session complete. Stretch, breathe, and enjoy your small win.';
    }
    render();
}

function resetSession() {
    stopInterval();
    remaining = duration;
    state.textContent = 'READY';
    note.textContent = 'A fresh start awaits';
    status.textContent = 'Pick a duration and settle into your next idea.';
    render();
}

start.addEventListener('click', () => {
    if (running) {
        tick(); // Account for elapsed time before pausing, including a late callback.
        if (remaining === 0) {
            return;
        }
        stopInterval();
        state.textContent = 'PAUSED';
        note.textContent = 'Take a breath. Come back ready.';
        status.textContent = 'Paused. Start focus to continue this session.';
    } else {
        if (remaining === 0) {
            remaining = duration;
        }
        deadline = Date.now() + remaining;
        running = true;
        state.textContent = 'FOCUSING';
        note.textContent = 'One thing at a time';
        status.textContent = 'Your focus session is running.';
        interval = setInterval(tick, 250);
    }
    render();
});

reset.addEventListener('click', resetSession);
presets.forEach((button) => {
    button.addEventListener('click', () => {
        duration = Number(button.dataset.minutes) * 60 * 1000;
        presets.forEach((preset) => {
            preset.setAttribute('aria-pressed', String(preset === button));
        });
        resetSession();
        status.textContent = `Ready for ${button.dataset.minutes} minutes. Changing duration resets the timer.`;
    });
});

function updateTasks() {
    const done = [...tasks].filter((task) => task.checked).length;
    taskCount.textContent = `${done} / ${tasks.length}`;
    taskProgress.max = tasks.length;
    taskProgress.value = done;
    taskProgress.textContent = `${done} of ${tasks.length}`;
}
tasks.forEach((task) => task.addEventListener('change', updateTasks));
document.addEventListener('visibilitychange', tick);
window.addEventListener('pageshow', tick);
updateTasks();
render();
