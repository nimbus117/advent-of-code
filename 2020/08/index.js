const parse = (input) =>
  input
    .split('\n')
    .slice(0, -1)
    .map((x) => x.split(' '));

const runOnce = (input) => {
  let index = 0;
  let accumulator = 0;
  const pastIndexes = new Set();

  while (!pastIndexes.has(index) && index < input.length) {
    pastIndexes.add(index);
    const [op, arg] = input[index];
    if (op === 'acc') {
      accumulator += parseInt(arg);
      index++;
    } else if (op === 'jmp') index += parseInt(arg);
    else index++;
  }
  return { accumulator, index };
};

const findFix = (input) => {
  for (const [index, [op, arg]] of input.entries()) {
    if (op === 'acc') continue;
    const fix = [...input];
    fix[index] = [op === 'jmp' ? 'nop' : 'jmp', arg];
    const result = runOnce(fix);
    if (result.index === input.length) return result.accumulator;
  }
};

module.exports.part1 = (input) => runOnce(parse(input));
module.exports.part2 = (input) => findFix(parse(input));
