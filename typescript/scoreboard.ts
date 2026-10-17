interface Player {
    name: string;
    points: number;
}

// T keeps the extra fields of each item while requiring a numeric points field.
class Scoreboard<T extends { points: number }> {
    private entries: T[] = [];

    add(entry: T): void {
        if (!Number.isFinite(entry.points) || entry.points < 0) {
            throw new Error('Points must be a finite, non-negative number.');
        }
        this.entries.push(entry);
    }

    top(limit: number): T[] {
        if (!Number.isInteger(limit) || limit < 0) {
            throw new Error('Limit must be a non-negative integer.');
        }
        // Copy before sorting so the original insertion order remains unchanged.
        return [...this.entries].sort((a, b) => b.points - a.points).slice(0, limit);
    }
}

const board = new Scoreboard<Player>();
board.add({ name: 'Alex', points: 12 });
board.add({ name: 'Sam', points: 20 });
board.add({ name: 'Jo', points: 16 });
board.top(2).forEach((player, index) => {
    console.log(`${index + 1}. ${player.name}: ${player.points}`);
});
