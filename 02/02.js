const fs = require('fs');

// const filename = '/example.txt';
const filename = '/input.txt';

let input = fs.readFileSync(__dirname + filename, (err, data) => {
  if (err) throw err;

  return data;
});

input = input.toString().split(',');

console.log('input:', input);

let result = 0;

input.forEach((product) => {
  const ids = product.split('-');
  const start = parseInt(ids[0]);
  const end = parseInt(ids[1]);

  for (let num = start; num <= end; num++) {
    let numString = num.toString();

    let mid = Math.floor(numString.length / 2);
    let left = numString.slice(0, mid);
    let right = numString.slice(mid);
    if (left === right) {
      console.log('found match:', numString, 'left:', left, 'right:', right);
      result += parseInt(left.concat(right));
    }
  }
});

// 31839939622
console.log('result:', result);
