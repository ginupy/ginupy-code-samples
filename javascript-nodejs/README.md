# JavaScript / Node.js — terminal tools

Requires Node.js 22+. No npm packages or package.json are required. These files
use CommonJS (`require`) and Node.js standard APIs, not browser DOM APIs.
Run from the repository root.

## 1. Code quiz (15 minutes)

```sh
node javascript-nodejs/quiz.js
```

Enter `2`, `1`, then `3` for a perfect `Score: 3/3 (3 answered)`.
Invalid answers prompt again without advancing. Type `q` to quit early;
end-of-input also prints a partial score. Ctrl+C can stop the process.

Read the `questions` array, `showQuestion()`, and the `line` event callback in that
order. A counter records which question is active; another records correct answers.

**Challenge:** add a fourth question with three options. `answer` is a one-based
number: `1` means the first option. Then change the quiz topic.

## 2. Text report (15 minutes)

```sh
node javascript-nodejs/text-report.js
node javascript-nodejs/text-report.js javascript-nodejs/data/story.txt
```

The supplied story produces `Words: 12` and `Unique words: 9`.
Three words occur twice: `grow`, `ideas`, and `small`.

The program reads UTF-8, matches runs of letters, lowercases them, counts them in
a `Map`, then sorts by frequency. It keeps internal apostrophes. It is a simple
word-counting lesson, not a full natural-language tokenizer (for example, it does
not segment unspaced Chinese or Japanese text into linguistic words).

The default file is relative to the script. A custom filename is relative to your
terminal's working directory. Quote filenames that contain spaces.
An empty file has zero words; a missing file prints an error and exits with code 1.

**Challenge:** change `.slice(0, 5)` to show ten words. Add repeated words to the
story and predict their rank before running it.
