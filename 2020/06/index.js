module.exports.part1 = (input) =>
  input
    .split('\n\n')
    .map((a) => new Set(a.split('\n').flatMap((b) => b.split(''))).size)
    .reduce((a, b) => a + b);

module.exports.part2 = (input) =>
  input
    .split('\n\n')
    .map((a) => {
      const passengers = a.split('\n').filter(Boolean);
      const allAnswers = passengers.flatMap((b) => b.split(''));
      return Array.from(new Set(allAnswers))
        .map(
          (c) => allAnswers.filter((d) => d === c).length === passengers.length
        )
        .filter(Boolean).length;
    })
    .reduce((a, b) => a + b);
