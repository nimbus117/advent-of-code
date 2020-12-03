const slopeHits = ([right, down]) => (values) =>
  values
    .filter((_, index) => !(index % down))
    .slice(1)
    .reduce((a, c, i) => (c[((i + 1) * right) % c.length] === '#') + a, 0);

const multiSlopeHits = (slopes) => (values) =>
  slopes.map((slope) => slopeHits(slope)(values)).reduce((x, y) => x * y);

module.exports.part1 = slopeHits([3, 1]);
module.exports.part2 = multiSlopeHits([
  [1, 1],
  [3, 1],
  [5, 1],
  [7, 1],
  [1, 2]
]);
