const fs = require('fs');
const buffer = fs.readFileSync('input.txt');
const input = buffer.toString().split('\n\n');

let [stack, moves] = input;
const stacks = {};

stack = stack.split('\n');
const stackLength = stack.length;

const numbers = stack[stackLength - 1].split('  ');

numbers.forEach((number) => {
  stacks[number.trim()] = [];
});

for (let i = stackLength - 2; i >= 0; i--) {
  const series = stack[i].split(' ');
  for (let j = 0; j < series.length; j++) {
    if (series[j] == '') {
      series.splice(j, 3);
    } else {
      stacks[j + 1].push(series[j][1]);
    }
  }
}
console.log(stacks);

moves.split('\n').forEach((move) => {
  move = move.split(' ');
  const [count, src, destination] = [move[1], move[3], move[5]];
  const srcLength = stacks[src].length;
  console.log(count, src, destination);
  const newArr = stacks[src].slice(count * -1);
  console.log('src', stacks[src], stacks[destination]);
  stacks[src] = stacks[src].slice(0, srcLength - count);

  const finalDest = stacks[destination].concat(newArr);
  stacks[destination] = finalDest;
  console.log('dst', stacks[src], stacks[destination]);
});

console.log(stacks);

let ans = '';
numbers.forEach((number) => {
  const len = stacks[Number(number)].length;
  ans += stacks[Number(number)][len - 1];
});

console.log(ans);
