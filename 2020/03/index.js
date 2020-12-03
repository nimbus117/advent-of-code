const slopeHits = ([right, down]) => (values) =>
  values
    .filter((_, idx) => !(idx % down))
    .slice(1)
    .map((row, idx) => row[((idx + 1) * right) % row.length] === '#')
    .reduce((x, y) => x + y);

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
