const year = process.argv[2];
const day = process.argv[3];
const parts = process.argv[4] ? [process.argv[4]] : ['part1', 'part2'];

if (process.argv.length < 4)
  throw 'Expected year and day arguments (npm start 2019 01)\n';

const solution = require(`./${year}/${day}/main`);
const input = require('fs')
  .readFileSync(`./${year}/${day}/input`, 'utf8')
  .split('\n')
  .filter((x) => x.length);

const start = new Date();
parts.forEach((part) => {
  if (solution[part]) console.log(`${part}:`, solution[part](input));
});
const end = new Date();
console.log(`${end - start}ms`);
