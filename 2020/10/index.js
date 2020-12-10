const parse = (input) => input.split('\n').sort((a, b) => a - b);

module.exports.part1 = (input) =>
  Object.values(
    parse(input)
      .map((x, i, a) => x - a[i - 1])
      .reduce(
        (a, c) => {
          if (c) a[c]++;
          return a;
        },
        { 1: 0, 3: 1 }
      )
  ).reduce((a, b) => a * b);

module.exports.part2 = (input) =>
  Math.max(
    ...parse(input)
      .reduce(
        (a, c) => {
          a[c] = (a[c - 1] || 0) + (a[c - 2] || 0) + (a[c - 3] || 0);
          return a;
        },
        [1]
      )
      .filter(Number)
  );
