module.exports.part1 = (input) =>
  input
    .split('\n\n')
    .map((a) => new Set(a.match(/\w/g)).size)
    .reduce((a, b) => a + b);

module.exports.part2 = (input) =>
  input
    .split('\n\n')
    .map((a) => {
      const count = a.split('\n').filter(Boolean).length;
      const answers = a.match(/\w/g);
      return Array.from(new Set(answers))
        .map((c) => answers.filter((d) => d === c).length === count)
        .filter(Boolean).length;
    })
    .reduce((a, b) => a + b);
