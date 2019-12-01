// read/parse file
const input = require('fs')
  .readFileSync('input', 'utf8')
  .split('\n')
  .filter(String)
  .map((freq) => parseInt(freq));

// part 1
const finalFrequency = input.reduce((acc, cur) => acc + cur, 0);
console.log('Final frequency:', finalFrequency);

// part 2
const calibrate = (input) => {
  const frequencies = new Set();
  let currentFreq = 0;

  while (true) {
    for (let frequency of input) {
      currentFreq = currentFreq + frequency;
      if (frequencies.has(currentFreq)) {
        return currentFreq;
      }
      frequencies.add(currentFreq);
    }
  }
};
console.log('Calibrated frequency:', calibrate(input));
