# PHP — chance and server-rendered forms

Requires PHP 8.2+. Standard PHP only; no Composer dependencies or database.
Run commands from the repository root.

## 1. Dice lab (15 minutes)

```sh
php php/dice.php
php php/dice.php 100
```

The default is 20 rolls. The second command prints `Rolls: 100`, then six rows
containing counts, percentages, and bars. Counts always sum to the roll count;
the distribution changes on each run. Each `#` represents about two percentage
points. Rounding means displayed percentages may not sum to exactly 100.0.

Read the argument check, `array_fill()`, loop, and `foreach` output. `random_int()`
chooses each face. Inputs outside 1–10000 or non-integers exit with code 1.

**Challenge:** compare 20 rolls with 10000 rolls. Do larger samples usually look
more even? Then support an eight-sided die by updating the array and random range.

## 2. Temperature postcard (20 minutes)

```sh
php -S 127.0.0.1:8000 -t php/web
```

Open <http://127.0.0.1:8000>, enter `0`, and select **Convert**.
Expected result: `0.00 °C = 32.00 °F`. Try `100` for `212.00 °F`.
Stop the server with Ctrl+C. Use port 8001 if port 8000 is already occupied.

The browser submits a GET query; PHP reads it from `$_GET`, validates it,
calculates the result, and sends back HTML. The example accepts Celsius values
from -273.15 to 10000. It keeps the entered value but escapes it with
`htmlspecialchars()` before inserting it into the page. Browser constraints alone
are not enough: the server also rejects invalid and array-shaped query values.

No information is saved. GET values appear in the URL, so this pattern is suitable
for a public temperature value, not a password. The local development server is
not a production web server.

**Challenge:** display Kelvin as well: Celsius + 273.15. Keep validation and output
escaping. Opening `index.php` directly, or serving it as a static file, will not run PHP.
