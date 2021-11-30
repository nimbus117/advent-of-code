const toDigitArray = (password) =>
  password
    .toString()
    .split('')
    .map((x) => parseInt(x));

const hasNoDecreasing = (digitArray) =>
  !digitArray.some((digit, i, arr) => digit > arr[i + 1]);

const hasAtLeast2Adjacent = (digitArray) =>
  digitArray.some((digit, i, arr) => digit === arr[i + 1]);

const has2Adjacent = (digitArray) =>
  digitArray.some(
    (digit, i, arr) =>
      digit !== arr[i - 1] && digit === arr[i + 1] && digit !== arr[i + 2]
  );

const validCounter = (validators) => (passwordRange) => {
  const [start, end] = passwordRange.split('\n')[0].split('-');
  let count = 0;
  for (let password = start; password <= end; password++) {
    const validate = (validator) => validator(toDigitArray(password));
    if (validators.every(validate)) count++;
  }
  return count;
};

module.exports.part1 = validCounter([hasNoDecreasing, hasAtLeast2Adjacent]);
module.exports.part2 = validCounter([hasNoDecreasing, has2Adjacent]);
