const parse = (input) =>
  input
    .split('\n')
    .slice(0, -1)
    .map((x) => parseInt(x));

const sumOf2Match = (numbers, match) =>
  !numbers.some((x) => numbers.map((y) => x + y).includes(match));

const findStart = (input) =>
  input.find((x, i) => i >= 25 && sumOf2Match(input.slice(i - 25, i), x));

const findEncryptionWeakness = (input) => {
  const start = findStart(input);

  for (let x = 0; x < input.length; x++) {
    let sum = 0;
    for (let y = x; y < input.length; y++) {
      sum += input[y];
      if (sum > start) break;
      if (sum === start) {
        const range = input.slice(x, y);
        return Math.min(...range) + Math.max(...range);
      }
    }
  }
};

module.exports.part1 = (input) => findStart(parse(input));
module.exports.part2 = (input) => findEncryptionWeakness(parse(input));
