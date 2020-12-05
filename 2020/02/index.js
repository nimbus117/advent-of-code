const parseLine = (input) => {
  const [policy, password] = input.split(': ');
  const [numbers, char] = policy.split(' ');
  const [num1, num2] = numbers.split('-').map((m) => parseInt(m));
  return { password, char, num1, num2 };
};

const validateSledPassword = ({ password, char, num1, num2 }) => {
  const count = password.split('').filter((c) => c === char).length;
  return count >= num1 && count <= num2;
};

const validateTobogganPassword = ({ password, char, num1, num2 }) => {
  const chars = password.split('');
  return (chars[num1 - 1] === char) ^ (chars[num2 - 1] === char);
};

const countValidPasswords = (validator) => (values) =>
  values
    .split('\n')
    .filter((x) => x.length)
    .map(parseLine)
    .map(validator)
    .filter(Boolean).length;

module.exports.part1 = countValidPasswords(validateSledPassword);
module.exports.part2 = countValidPasswords(validateTobogganPassword);
