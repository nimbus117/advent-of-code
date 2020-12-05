const slopeHits = ([x, y]) => (input) =>
  input
    .split('\n')
    .filter((_, index) => !(index % y))
    .slice(1)
    .filter((v, i) => v[((i + 1) * x) % v.length] === '#').length;

const multiSlopeHits = (slopes) => (input) =>
  slopes.map((slope) => slopeHits(slope)(input)).reduce((a, b) => a * b);

module.exports.part1 = slopeHits([3, 1]);
module.exports.part2 = multiSlopeHits([
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
]);
