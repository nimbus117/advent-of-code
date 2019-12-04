const hasGroupOfSame = (digitArray) =>
  digitArray.some((digit, i, digitArray) => digit === digitArray[i + 1]);

const hasNoDecreasing = (digitArray) =>
  !digitArray.some((digit, i, digitArray) => digit > digitArray[i + 1]);

const validPasswordCount = (input, validators) => {
  const [start, end] = input[0].split('-');
  const validPasswords = [];

  for (let i = start; i <= end; i++) {
    const digitArray = i
      .toString()
      .split('')
      .map((x) => parseInt(x));

    if (validators.every((valid) => valid(digitArray))) validPasswords.push(i);
  }
  return validPasswords.length;
};

module.exports.part1 = (input) =>
  validPasswordCount(input, [hasGroupOfSame, hasNoDecreasing]);
