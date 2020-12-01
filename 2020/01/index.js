const part1 = (values) => {
  for (let x = 0; x < values.length; x++) {
    for (let y = 0; y < values.length; y++) {
      const val1 = parseInt(values[x]);
      const val2 = parseInt(values[y]);
      if (val1 + val2 === 2020) return val1 * val2;
    }
  }
};

const part1_2 = (values) =>
  values
    .map((x) => parseInt(x))
    .filter((x, i, a) => a.includes(2020 - x))
    .reduce((x, y) => x * y);

const part1_3 = (values) =>
  values.reduce((acc, cur) =>
    values.includes((2020 - cur).toString()) ? cur * (2020 - cur) : acc
  );

const part2 = (values) => {
  for (let x = 0; x < values.length; x++) {
    for (let y = 0; y < values.length; y++) {
      for (let z = 0; z < values.length; z++) {
        const val1 = parseInt(values[x]);
        const val2 = parseInt(values[y]);
        const val3 = parseInt(values[z]);
        if (val1 + val2 + val3 === 2020) return val1 * val2 * val3;
      }
    }
  }
};

module.exports.part1 = part1;
module.exports.part1_2 = part1_2;
module.exports.part1_3 = part1_3;
module.exports.part2 = part2;
