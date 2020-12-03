const slopeHits = ([right, down]) => (values) =>
  values
    .filter((_, index) => index !== 0 && index % down === 0)
    .reduce(
      (acc, cur) => ({
        right: acc.right + right,
        count: acc.count + Number(cur[acc.right % cur.length] === '#')
      }),
      { right, count: 0 }
    ).count;

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
