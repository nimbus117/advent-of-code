const hasNoDecreasing = (digitArray) =>
  !digitArray.some((digit, i, arr) => digit > arr[i + 1]);

const hasAtLeast2Adjacent = (digitArray) =>
  digitArray.some((digit, i, arr) => digit === arr[i + 1]);

const has2Adjacent = (digitArray) =>
  digitArray.some(
    (digit, i, arr) =>
      digit !== arr[i - 1] && digit === arr[i + 1] && digit !== arr[i + 2]
  );

const validPasswordCount = (input, validators) => {
  const [start, end] = input[0].split('-');
  let count = 0;

  for (let i = start; i < end; i++) {
    const digitArray = i
      .toString()
      .split('')
      .map((x) => parseInt(x));
    if (validators.every((valid) => valid(digitArray))) count++;
  }
  return count;
};

module.exports.part1 = (input) =>
  validPasswordCount(input, [hasNoDecreasing, hasAtLeast2Adjacent]);

module.exports.part2 = (input) =>
  validPasswordCount(input, [hasNoDecreasing, has2Adjacent]);
