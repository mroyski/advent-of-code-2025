const fs = require('fs');

// const filename = '/example.txt';
const filename = '/input.txt';

let input = fs.readFileSync(__dirname + filename, (err, data) => {
  if (err) throw err;

  return data;
});

input = input.toString().split('\n');

console.log('input:', input);

// Part 1: Select 2 digits to form largest number
let result1 = 0;

input.forEach((line) => {
  const arr = line.split('').map((ln) => parseInt(ln));
  let max = -Infinity;
  let maxFromRight = -Infinity;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i < arr.length - 1) {
      const num = arr[i] * 10 + maxFromRight;
      max = Math.max(max, num);
    }
    maxFromRight = Math.max(maxFromRight, arr[i]);
  }

  console.log('max for line:', max);
  result1 += max;
});

console.log('result:', result1);
