# Python — games and useful data

Requires Python 3.10+. No pip dependencies. Run from the repository root.
On Windows, substitute `py` or `python` if `python3` is unavailable.

## 1. Hidden number (15 minutes)

```sh
python3 python/guess.py
```

Guess an integer from 1 to 20 in five distinct attempts. The response is `Too low.`,
`Too high.`, or a success message. A set remembers earlier guesses. Invalid,
out-of-range, and repeated guesses do not use attempts. Enter `q` to quit.
End-of-input and Ctrl+C exit cleanly too.

Read `main()` from top to bottom. Notice how `continue` retries the loop and
`return` ends the game. `try` / `except` handles conversion failures.

**Challenge:** change the maximum to 50 in the random call, validation, and messages.
Then print the remaining attempts after each incorrect guess.

## 2. Reading report (20 minutes)

```sh
python3 python/reading_report.py
python3 python/reading_report.py python/data/reading.csv
```

Expected opening lines:

```text
Total pages: 80
Average per logged day: 16.0
```

The CSV contains `day,pages`. `DictReader` names each column, `Counter` adds pages
for repeated day labels, and each `#` represents five pages (rounded down).
Bars are capped at 40 characters. The average includes logged zero-page days,
but not days absent from the file. Duplicate days are combined before averaging.

The default file is resolved beside the script. Custom paths are relative to the
terminal. A header-only file reports zero totals and a 0.0 average. Negative or
non-integer pages, missing fields, and extra columns produce an error with exit 1.

**Challenge:** add `Sat,20` to the data, predict the total and average, and rerun.
Then add another `Mon` entry to understand aggregation.
