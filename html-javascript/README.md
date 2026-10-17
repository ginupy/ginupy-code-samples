# HTML + JavaScript — make the page respond

Open `html-javascript/guess.html`, `html-javascript/todo.html`, or
`html-javascript/focus.html` in a browser.
Keep each `.js` beside its `.html` file. Focus Studio also needs `focus.css` beside it. These are ordinary deferred scripts,
so double-clicking the HTML file works without a server or module loader.

## 1. Hidden number (15 minutes)

Guess a secret number from 1 to 20 in five distinct attempts.

1. Find `reset()` in `guess.js`: it creates the secret and resets page state.
2. Read the submit handler. `preventDefault()` stops browser navigation.
3. Follow the guards for invalid input and repeated guesses. Neither uses an attempt.
4. Follow the success, exhaustion, and higher/lower branches.

**Try it:** submit a number twice, win or lose, then choose **New game**.
The controls lock after the game ends and unlock on reset.

**Challenge:** change the range to 1–50 and allow seven attempts. Update BOTH the
constants in `guess.js` and the instructions / input `max` in `guess.html`.

## 2. Task garden (15 minutes)

Add a task, mark it complete, then remove it. The status shows `1 of 1 completed`
after checking a single task. Reloading clears all tasks; no storage is used.

1. `tasks` holds the data; DOM nodes provide the visible controls.
2. `createElement()` makes nodes. `textContent` displays user input literally.
3. Checkbox events update `task.done`; `filter()` counts completed tasks.
4. Removing a task updates both the array and its visible list item.

**Challenge:** add a button to clear completed tasks. Keep the array, DOM, and
summary in sync. Try entering `<b>hello</b>`: it should appear as text, not markup.

## Check your work

Use Tab and Enter, try blank input, add two identical tasks and remove just one,
then reload. Open your browser's developer console if an edit stops the script.


## 3. Focus Studio (25 minutes)

Open `html-javascript/focus.html`. No installation, server, external fonts, or network
requests are needed. Its dark background, lavender controls, mint progress ring,
and responsive cards make it useful for showing a live sample in Ginupy Code.

- Choose 15, 25, or 45 minutes. Choosing a duration resets the current timer.
- Select **Start focus** to begin; select **Pause focus** to pause, then start again
  to continue from the same remaining time.
- **Reset** stops the current timer without clearing completed-session counts.
- At zero, the timer stops and increments **Sessions completed** exactly once.
- Check and uncheck the three sample tasks to update the progress bar.
- Reload to restore the initial demo plan and clear completed-session counts.

The first task starts checked intentionally: it is illustrative sample data, not a
record of the user's activity. The example does not save data, play an alarm, or
send a background notification.

Read the three files in this order:

1. `focus.html`: semantic cards, duration buttons, checkboxes, and a progress element.
2. `focus.css`: theme variables, CSS Grid, media queries, and a conic-gradient ring.
3. `focus.js`: separate render, tick, reset, and task-update functions.

The timer compares a deadline with `Date.now()` instead of subtracting one each
interval. Browsers can delay callbacks while a tab or app is in the background;
on returning, the timer catches up with elapsed wall-clock time. It does not keep
the device awake. Changing the system clock can affect this small teaching timer.
Only status changes are announced; the clock does not trigger an announcement every
second. The interval is cleared when paused, reset, or completed.

**Challenge:** change `--lavender` and `--mint` in `focus.css`, customize the three
task labels in `focus.html`, then add a 5-minute preset. Keep its `data-minutes`
value numeric. Update the initial HTML time and JavaScript duration together if
you change the default duration.

### Using it in app screenshots

Open `focus.html` in Ginupy Code's HTML preview with `focus.js` and `focus.css`
accessible in the same directory. Reload for a consistent initial `25:00` state.
Capture the actual app preview, optionally with the source editor beside it, to
show editing and execution together. The page uses one column at widths up to
680 CSS pixels and two columns above that. On a phone the task card is below the
timer; scroll to it when you want to show task interaction.

Check the 320–430 CSS-pixel range for phones and a wider tablet/desktop viewport.
These are layout-check suggestions, not store upload dimensions. Keep English text
and sample data visible, and use your actual target device for the final capture.

### Form layout update

The guessing game and ToDo form now use a two-column grid with explicit gaps;
at 420 CSS pixels or below, the input and submit button stack vertically.
Input tracks can shrink, buttons have touch-friendly heights, and ToDo checkbox
styles are separate from text-field styles. Long task text wraps without pushing
the remove button outside the card.
