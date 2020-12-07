const parseIds = (input) =>
  input
    .split('\n')
    .slice(0, -1)
    .map((i) => parseInt(i.replace(/[FL]/g, '0').replace(/[BR]/g, '1'), 2));

module.exports.part1 = (input) => Math.max(...parseIds(input));

module.exports.part2 = (input) =>
  parseIds(input)
    .sort((a, b) => a - b)
    .find((x, i, a) => x + 1 !== a[i + 1]) + 1;
