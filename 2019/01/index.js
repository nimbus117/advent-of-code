const fuelRequired = (mass) => Math.max(0, Math.floor(mass / 3) - 2);

const recursiveFuelRequired = (mass) => {
  const required = fuelRequired(mass);
  return required ? required + recursiveFuelRequired(required) : required;
};

const total = (method) => (masses) =>
  masses
    .split('\n')
    .map(method)
    .reduce((x, y) => x + y);

module.exports.part1 = total(fuelRequired);
module.exports.part2 = total(recursiveFuelRequired);
