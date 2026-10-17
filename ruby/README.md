# Ruby — stories and simulations

Requires Ruby 3.1+. No gems or Bundler required. Run from the repository root.

## 1. Moonlit garden (15 minutes)

```sh
ruby ruby/adventure.rb
```

Try `look`, `east`, `open`, `take`, `open`. You should find glowing seeds and win.
`open` before `take` explains that the chest is locked. `quit` exits at any time;
end-of-input also exits. Unknown commands print a hint without moving you.

The `rooms` hash describes locations and exits. The `location` and `has_key`
variables store state. `case` selects a response to each command.

**Challenge:** add a pond and connect it to the garden. Add a `north` exit and
update the command hints. Let a room description change after taking its item.

## 2. Garden simulation (15 minutes)

```sh
ruby ruby/garden.rb
ruby ruby/garden.rb 7
```

The default seed is 42. The output has seven weather reports and three plant bars.
Running with the same seed on the same Ruby runtime repeats the experiment.
Different seeds can produce different weather. Invalid integer seeds exit with 1.

Each day brings 1 cm of growth plus a shared rain bonus of 0–2 cm.
All plants therefore finish at the same height, between 7 and 21 cm. That is a
deliberate simple model, not a biological prediction. `times` repeats a block,
`transform_values!` updates heights, and `each` prints the final hash.

**Challenge:** give each plant its own growth rate. Predict whether the tallest
plant changes when you change the random seed.
