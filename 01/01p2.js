const fs = require('fs');

// const filename = '/example.txt';
const filename = '/input.txt';

let input = fs.readFileSync(__dirname + filename, (err, data) => {
  if (err) throw err;

  return data;
});

input = input.toString().split('\n');

// console.log('input:', input);

let location = 50;

let result = 0;

for (let i = 0; i < input.length; i++) {
  let move = parseInt(input[i].slice(1));
  let direction = input[i][0];

  console.log('======= Processing move:', input[i]);

  while (move > 0) {
    console.log('direction:', direction, 'location:', location, 'move:', move);
    if (direction === 'L') {
      if (location === 0) {
        location = 100;
      }

      if (location - move < 0) {
        move = move - location;
        location = 100;
        result++;
      } else {
        location = location - move;
        move = 0;
        if (location === 0) {
          result++;
        }
      }
    } else {
      if (location === 100) {
        location = 0;
      }

      if (location + move >= 100) {
        move = move - (100 - location);
        location = 0;
        result++;
      } else {
        location = location + move;
        move = 0;
        if (location === 100) {
          result++;
        }
      }
    }
  }

  console.log('location after move:', location, 'result:', result);
}

// 5831
console.log('result:', result);
