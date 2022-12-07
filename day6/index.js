const { match } = require('assert');
const fs = require('fs');
const buffer = fs.readFileSync('data.txt');
const input = buffer.toString();

console.log(input);

let code = '';

for (let i = 0; i < input.length; i++) {
  var matchedIndex = -1;
  var matched = false;
  for (let j = 0; j < code.length; j++) {
    if (input[i] === code[j]) {
      matchedIndex = j;
      matched = true;
      console.log(input[i], 'matched', j);
      break;
    }
  }

  if (!matched) {
    code += input[i];
  } else {
    console.log('len');
    const len = code.length;
    console.log('slicing', matchedIndex, code.slice(matchedIndex + 1));
    code = code.slice(matchedIndex + 1);
    code += input[i];
  }

  if (code.length == 14) {
    console.log('final', input[i], i + 1, code);
    break;
  }

  console.log(input[i], matchedIndex, code);
}
