'use strict';
const fs = require('node:fs');
const path = require('node:path');

// The bundled file is resolved relative to this script, not the terminal directory.
const filename = process.argv[2] || path.join(__dirname, 'data', 'story.txt');
try {
    const text = fs.readFileSync(filename, 'utf8');
    const words = text.toLowerCase().match(/\p{L}+(?:['’]\p{L}+)*/gu) || [];
    const counts = new Map();
    for (const word of words) {
        counts.set(word, (counts.get(word) || 0) + 1);
    }
    const top = [...counts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'en'))
        .slice(0, 5);
    console.log(`Words: ${words.length}`);
    console.log(`Unique words: ${counts.size}`);
    console.log('Top words:');
    for (const [word, count] of top) {
        console.log(`${word}: ${count}`);
    }
} catch (error) {
    console.error(`Cannot read file: ${error.message}`);
    process.exitCode = 1;
}
