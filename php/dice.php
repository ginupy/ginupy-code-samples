<?php
declare(strict_types=1);

// Change the roll count: php php/dice.php 100
$raw = $argv[1] ?? '20';
$rolls = filter_var($raw, FILTER_VALIDATE_INT);
if ($rolls === false || $rolls < 1 || $rolls > 10000) {
    fwrite(STDERR, "Choose a whole number of rolls from 1 to 10000.\n");
    exit(1);
}
$counts = array_fill(1, 6, 0);
for ($i = 0; $i < $rolls; $i++) {
    $face = random_int(1, 6);
    $counts[$face]++;
}
echo "Rolls: $rolls\n";
foreach ($counts as $face => $count) {
    $percent = 100 * $count / $rolls;
    printf("%d: %5d (%5.1f%%) %s\n", $face, $count, $percent, str_repeat('#', (int) round($percent / 2)));
}
