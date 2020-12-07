const parse = (input) =>
  input
    .split('\n\n')
    .map((x) => new Map(x.split(/[\s\n]/).map((y) => y.split(':'))));

const isBetween = (min, max) => (x) => parseInt(x) >= min && parseInt(x) <= max;

const fields = {
  byr: isBetween(1920, 2002),
  iyr: isBetween(2010, 2020),
  eyr: isBetween(2020, 2030),
  hgt: (x) =>
    x.match(/cm/)
      ? isBetween(150, 193)(x)
      : x.match(/in/)
      ? isBetween(59, 76)(x)
      : false,
  hcl: (x) => x.match(/^#[0-9a-f]{6}/),
  ecl: (x) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(x),
  pid: (x) => parseInt(x) > 0 && x.length === 9
};

const validFields = (pp) => Object.keys(fields).every((field) => pp.has(field));

const validValues = (pp) =>
  Object.entries(fields).every(([field, isValid]) => isValid(pp.get(field)));

module.exports.part1 = (input) => parse(input).filter(validFields).length;

module.exports.part2 = (input) =>
  parse(input)
    .filter(validFields)
    .filter(validValues).length;
