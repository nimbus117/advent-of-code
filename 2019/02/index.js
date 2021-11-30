const runProgram = (noun, verb, input) => {
  const program = input.split(',').map((x) => parseInt(x));
  const value = (index) => program[program[index]];
  let op;
  program[1] = noun;
  program[2] = verb;

  for (let i = 0; i < program.length; i += 4) {
    switch (program[i]) {
      case 1:
        op = (x, y) => x + y;
        break;
      case 2:
        op = (x, y) => x * y;
        break;
      case 99:
        return program[0];
    }
    program[program[i + 3]] = op(value(i + 1), value(i + 2));
  }
};

module.exports.part1 = runProgram.bind(null, 12, 2);

module.exports.part2 = (input) => {
  for (let n = 0; n <= 99; n++) {
    for (let v = 0; v <= 99; v++) {
      if (runProgram(n, v, input) === 19690720) return 100 * n + v;
    }
  }
};
