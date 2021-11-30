if (process.argv.length < 4) {
  console.log('\nExpected year and day arguments (npm start 2019 01)\n');
  return;
}

const year = process.argv[2];
const day = process.argv[3];
const parts = process.argv[4] ? [process.argv[4]] : ['part1', 'part2'];

const solution = require(`./${year}/${day}`);
const input = require('fs').readFileSync(`./${year}/${day}/input`, 'utf8');

parts.forEach((part) => {
  const start = new Date();
  solution[part] && console.log(`${part}:`, solution[part](input));
  const end = new Date();
  console.log(`${end - start}ms\n`);
});
