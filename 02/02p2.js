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
    let isInvalid = false;

    for (let chunkSize = 1; chunkSize <= numString.length / 2; chunkSize++) {
      if (numString.length % chunkSize === 0) {
        let pattern = numString.substring(0, chunkSize);

        let numRepeats = numString.length / chunkSize;

        if (pattern.repeat(numRepeats) === numString) {
          isInvalid = true;
          console.log(`Found invalid ID: ${num} (${pattern} repeated ${numRepeats} times)`);
          break;
        }
      }
    }

    if (isInvalid) {
      result += num;
    }
  }
});

// 41662374059
console.log('result:', result);
