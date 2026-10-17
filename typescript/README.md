# TypeScript — describe the shape of your data

## Run without installing packages

With Node.js 24+, run from the repository root:

```sh
node typescript/inventory.ts
node typescript/scoreboard.ts
```

These samples deliberately use erasable TypeScript syntax. Node removes type
annotations and executes the code; it **does not type-check**, and this direct
execution path does not use `tsconfig.json`. No `@types/node` package is needed.

## Optional: check types and compile

If `tsc` is already installed, use it directly. Otherwise a maintainer can install
the development compiler once with `npm install --global typescript@5.9.3`.
That step requires internet access and is optional for running the samples.

```sh
tsc --project typescript/tsconfig.json --noEmit
tsc --project typescript/tsconfig.json
node typescript/dist/inventory.js
node typescript/dist/scoreboard.js
```

The compiled programs work on Node.js 22+. Generated `dist/` files are ignored by
Git. `strict` enables type checks; `noEmitOnError` prevents output when checks fail.
The DOM type library supplies `console` declarations without extra type packages;
the samples do not call browser-only APIs.

## 1. Inventory (15 minutes)

Expected final lines:

```text
Inventory value: $25.00
Seed types: 2
```

`Item` describes an object, `Category` restricts a value to two string literals,
and `totalValue()` accepts an array and returns a number. Money is represented
as whole cents. `reduce()` totals values; `filter()` selects seed records.

**Challenge:** add a third seed. Predict the new total. With the compiler, try
`category: 'snack'` or `quantity: 'four'` and read the errors, then fix them.
Type annotations do not validate untrusted data at runtime.

## 2. Scoreboard (20 minutes)

Expected output:

```text
1. Sam: 20
2. Jo: 16
```

`Scoreboard<T>` works with any item that has numeric `points`. The generic keeps
other fields such as a player's name. `private` limits direct access at type-check
time; `top()` sorts a copy so calling it does not reorder the stored entries.
Runtime checks reject negative/non-finite points and invalid result limits.

**Challenge:** add `team: string` to `Player`, update each player, and print their
team. Try `top(0)` and `top(10)` to explore empty and shorter-than-requested results.
