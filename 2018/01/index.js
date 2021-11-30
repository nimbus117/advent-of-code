const mapToInts = (input) =>
  input
    .split('\n')
    .filter((x) => x.length)
    .map((x) => parseInt(x));

module.exports.part1 = (input) =>
  mapToInts(input).reduce((acc, cur) => acc + cur, 0);

module.exports.part2 = (input) => {
  const frequencies = new Set();
  let currentFreq = 0;

  while (true) {
    for (let frequency of mapToInts(input)) {
      currentFreq = currentFreq + frequency;
      if (frequencies.has(currentFreq)) {
        return currentFreq;
      }
      frequencies.add(currentFreq);
    }
  }
};
