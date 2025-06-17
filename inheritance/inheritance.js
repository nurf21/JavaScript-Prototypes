// Searching algorithm
// ==================================================

let head = { glasses: 1 };
let table = { pen: 3 };
let bed = { sheet: 1, pillow: 2 };
let pockets = { money: 2000 };

// Link the chain: pockets → bed → table → head
table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

// Tests
console.log(pockets.pen);      // 3   (found in table)
console.log(bed.glasses);      // 1   (found in head)
console.log(pockets.glasses);  // 1   (walks up the chain)

const COUNT = 1e7;
let x;

// Benchmark: direct vs. prototype lookup

// Warm-up
x = head.glasses;
x = pockets.glasses;

console.time('head.glasses');
for (let i = 0; i < COUNT; i++) {
  x = head.glasses;
}
console.timeEnd('head.glasses');

console.time('pockets.glasses');
for (let i = 0; i < COUNT; i++) {
  x = pockets.glasses;
}
console.timeEnd('pockets.glasses');