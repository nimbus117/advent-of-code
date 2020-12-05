const toSeatId = (i) =>
  parseInt(i.replace(/(F|L)/g, '0').replace(/(B|R)/g, '1'), 2);

module.exports.part1 = (input) =>
  input
    .split('\n')
    .map(toSeatId)
    .reduce((a, c) => (c > a ? c : a), 0);

module.exports.part2 = (input) =>
  input
    .split('\n')
    .map(toSeatId)
    .filter((x, _, a) => x & 8 && !(a.includes(x - 1) && a.includes(x + 1)))
    .reduce((a, b) => (a + b) / 2);
