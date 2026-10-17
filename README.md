# Ginupy Code Samples & Tutorials

**Read a little. Change one thing. Run it again.**

A beginner-friendly collection of small programs for learning with
[Ginupy Code](https://ginupy.com/products/ginupy-code/). Explore complete web
pages, interactive games, command-line tools, and tiny simulations across
seven language tracks. All lessons, comments, and program messages are in English.

The samples use built-in language features and standard libraries. There are
no runtime package dependencies, accounts, API keys, CDNs, or external assets.
Each sample is independent. You do not need to install every language runtime.

## Sample map

| Track | Sample | What you build and learn |
| --- | --- | --- |
| [HTML](html/README.md) | [Learning garden](html/profile.html) | Profile page; headings, links, lists, image, semantic sections |
| HTML | [Breakfast bowl](html/recipe.html) | Recipe; table, ordered list, labels, native form controls |
| [HTML + JavaScript](html-javascript/README.md) | [Hidden number](html-javascript/guess.html) | Guessing game; events, conditions, random numbers, arrays |
| HTML + JavaScript | [Task garden](html-javascript/todo.html) | ToDo list; DOM creation, state, filtering, removal |
| HTML + JavaScript | [Focus Studio](html-javascript/focus.html) | A polished focus timer; elapsed time, state, task progress, responsive CSS |
| [JavaScript / Node.js](javascript-nodejs/README.md) | [Code quiz](javascript-nodejs/quiz.js) | Terminal quiz; standard input, objects, callbacks, validation |
| JavaScript / Node.js | [Text report](javascript-nodejs/text-report.js) | Read a text file; Map, word counts, sorting |
| [TypeScript](typescript/README.md) | [Inventory](typescript/inventory.ts) | Typed objects; interface, union type, functions, reduce |
| TypeScript | [Scoreboard](typescript/scoreboard.ts) | Class, generic constraint, methods, copied sorting |
| [Python](python/README.md) | [Hidden number](python/guess.py) | Input, loops, set membership, exceptions, randomness |
| Python | [Reading report](python/reading_report.py) | CSV file, Counter, aggregation, text chart |
| [PHP](php/README.md) | [Dice lab](php/dice.php) | Arrays, random integers, loops, formatted histogram |
| [Ruby](ruby/README.md) | [Moonlit garden](ruby/adventure.rb) | Branching story; hashes, state, case expressions |
| Ruby | [Garden simulation](ruby/garden.rb) | Seeded randomness, blocks, hashes, repeatable experiments |

## Using Ginupy Code

Open or import this repository folder into your available Ginupy Code workspace.
Start with a track's README, open the source beside it, and follow the edit/run
cycle. Save your changes before rerunning a command or refreshing a page.

For HTML, use an available HTML preview or open the file in a browser. For CLI
samples, use a terminal backed by an environment that provides the required
runtime. Available execution features depend on your device and setup; these
files do not assume that PHP, Ruby, Python, or Node.js is bundled on every device.
A local computer or a remote development environment with the runtime also works.
If a server runs remotely, `127.0.0.1` refers to that remote machine; use your
environment's port preview or forwarding feature to view it.

Product information: <https://ginupy.com/products/ginupy-code/>

## Repository layout

```text
ginupy-code-samples/
├── README.md
├── LICENSE
├── CONTRIBUTING.md
├── .gitignore
├── .gitattributes
├── .editorconfig
├── .github/workflows/check.yml
├── html/                    # README, two pages, original SVG
├── html-javascript/         # README, three pages, scripts, Focus Studio stylesheet
├── javascript-nodejs/       # README, quiz, text report, sample text
├── typescript/              # README, two typed programs, tsconfig
├── python/                  # README, game, CSV report, sample data
├── php/                     # README, dice lab, web/index.php
├── ruby/                    # README, adventure, simulation
├── tests/                   # Behavior checks; standard libraries only
└── docs/                    # Verification record and publishing guide
```

## License

All source, documentation, and the original SVG illustration are provided under
the [MIT License](LICENSE).