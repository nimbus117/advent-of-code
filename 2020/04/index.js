const isBetween = (min, max) => (v) => parseInt(v) >= min && parseInt(v) <= max;

const fields = {
  byr: isBetween(1920, 2002),
  iyr: isBetween(2010, 2020),
  eyr: isBetween(2020, 2030),
  hgt: (v) =>
    v.match(/cm/)
      ? isBetween(150, 193)(v)
      : v.match(/in/)
      ? isBetween(59, 76)(v)
      : false,
  hcl: (v) => v.match(/^#[0-9a-f]{6}/),
  ecl: (v) => ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(v),
  pid: (v) => parseInt(v) > 0 && v.length === 9,
};

const parse = (values) =>
  values
    .flatMap((v) => v.split(' '))
    .reduce(
      (a, c) =>
        c ? { ...a, pp: [c, ...a.pp] } : { pp: [], pps: [a.pp, ...a.pps] },
      { pp: [], pps: [] }
    )
    .pps.map((pp) => new Map(pp.map((field) => field.split(':'))));

const validateFields = (pp) => Object.keys(fields).every((f) => pp.has(f));

const validateValues = (pp) =>
  Object.keys(fields).every((f) => fields[f](pp.get(f)));

module.exports.part1 = (values) => parse(values).filter(validateFields).length;

module.exports.part2 = (values) =>
  parse(values).filter(validateFields).filter(validateValues).length;
