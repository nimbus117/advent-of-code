const input = require('fs')
  .readFileSync('input', 'utf8')
  .split('\n');

const sum = (x, y) => x + y;

const fuelRequired = (mass) => Math.max(0, Math.floor(mass / 3) - 2);

const part1 = (masses) => masses.map(fuelRequired).reduce(sum);

const recursiveFuelRequired = (mass) => {
  const required = fuelRequired(mass);
  return required > 0 ? required + recursiveFuelRequired(required) : required;
};

const part2 = (masses) => masses.map(recursiveFuelRequired).reduce(sum);

console.log('part 1:', part1(input));
console.log('part 2:', part2(input));
