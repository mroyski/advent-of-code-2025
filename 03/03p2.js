const fs = require('fs');

// const filename = '/example.txt';
const filename = '/input.txt';

let input = fs.readFileSync(__dirname + filename, (err, data) => {
  if (err) throw err;

  return data;
});

input = input.toString().split('\n');

console.log('input:', input);

function largestKDigits(digits, k) {
  const n = digits.length;
  const toRemove = n - k;
  const stack = [];
  let removed = 0;

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      stack[stack.length - 1] < digits[i] &&
      removed < toRemove
    ) {
      stack.pop();
      removed++;
    }
    stack.push(digits[i]);
  }

  return stack.slice(0, k).join('');
}

let result2 = 0;

input.forEach((line) => {
  const arr = line.split('').map((ln) => parseInt(ln));
  const maxNum = largestKDigits(arr, 12);
  result2 += parseInt(maxNum);
});

// 170147128753455
console.log('result:', result2);