const tasks = [];
const form = document.querySelector('#task-form');
const input = document.querySelector('#task');
const list = document.querySelector('#tasks');
const summary = document.querySelector('#summary');

function updateSummary() {
    const completed = tasks.filter((task) => task.done).length;
    summary.textContent = `${completed} of ${tasks.length} completed`;
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const text = input.value.trim();
    if (!text) {
        summary.textContent = 'Enter a task first.';
        return;
    }
    const task = { text, done: false };
    tasks.push(task);
    const item = document.createElement('li');
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const title = document.createElement('span');
    title.textContent = ` ${text} `; // Text is displayed literally, never interpreted as HTML.
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.textContent = 'Remove';
    remove.setAttribute('aria-label', `Remove ${text}`);
    checkbox.addEventListener('change', () => {
        task.done = checkbox.checked;
        title.classList.toggle('done', task.done);
        updateSummary();
    });
    remove.addEventListener('click', () => {
        tasks.splice(tasks.indexOf(task), 1);
        item.remove();
        updateSummary();
        input.focus();
    });
    label.append(checkbox, title);
    item.append(label, remove);
    list.append(item);
    input.value = '';
    updateSummary();
    input.focus();
});
