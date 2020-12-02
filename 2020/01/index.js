const part1 = (values) => {
  const ints = values.map((v) => parseInt(v));
  for (let x = 0; x < values.length; x++) {
    for (let y = 0; y < values.length; y++) {
      if (ints[x] + ints[y] === 2020) return ints[x] * ints[y];
    }
  }
};

const part1_2 = (values) =>
  values
    .map((x) => parseInt(x))
    .filter((x, i, a) => a.includes(2020 - x))
    .reduce((x, y) => x * y);

const part1_3 = (values) =>
  values.reduce(
    (acc, cur) =>
      values.includes((2020 - cur).toString()) ? cur * (2020 - cur) : acc,
    null
  );

const part2 = (values) => {
  const ints = values.map((v) => parseInt(v));
  for (let x = 0; x < values.length; x++) {
    for (let y = 0; y < values.length; y++) {
      for (let z = 0; z < values.length; z++) {
        if (ints[x] + ints[y] + ints[z] === 2020)
          return ints[x] * ints[y] * ints[z];
      }
    }
  }
};

module.exports.part1 = part1;
module.exports.part1_2 = part1_2;
module.exports.part1_3 = part1_3;
module.exports.part2 = part2;
