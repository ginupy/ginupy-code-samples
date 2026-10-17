type Category = 'seed' | 'tool';

interface Item {
    name: string;
    category: Category;
    quantity: number;
    priceCents: number;
}

function totalValue(items: Item[]): number {
    return items.reduce((total, item) => total + item.quantity * item.priceCents, 0);
}

const inventory: Item[] = [
    { name: 'Sunflower seeds', category: 'seed', quantity: 4, priceCents: 250 },
    { name: 'Watering can', category: 'tool', quantity: 1, priceCents: 1200 },
    { name: 'Basil seeds', category: 'seed', quantity: 2, priceCents: 150 },
];

for (const item of inventory) {
    console.log(`${item.name}: ${item.quantity} (${item.category})`);
}
// Integer cents avoid accumulating fractional currency rounding errors.
console.log(`Inventory value: $${(totalValue(inventory) / 100).toFixed(2)}`);
console.log(`Seed types: ${inventory.filter((item) => item.category === 'seed').length}`);
