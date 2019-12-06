const runProgram = (userInput, programInput) => {
  const program = programInput[0].split(',').map((x) => parseInt(x));

  const execute = () => {
    const [m2, m1, ...opCode] = program[p]
      .toString()
      .padStart(4, 0)
      .split('')
      .map((x) => parseInt(x));

    const value = (index) =>
      (index === 1 && m1) || (index === 2 && m2)
        ? program[p + index]
        : program[program[p + index]];

    switch (opCode.join('')) {
      case '01':
        program[program[p + 3]] = value(2) + value(1);
        return p + 4;
      case '02':
        program[program[p + 3]] = value(2) * value(1);
        return p + 4;
      case '03':
        program[program[p + 1]] = userInput;
        return p + 2;
      case '04':
        output.push(value(1));
        return p + 2;
      case '05':
        return value(1) !== 0 ? value(2) : p + 3;
      case '06':
        return value(1) === 0 ? value(2) : p + 3;
      case '07':
        program[program[p + 3]] = value(1) < value(2) ? 1 : 0;
        return p + 4;
      case '08':
        program[program[p + 3]] = value(1) === value(2) ? 1 : 0;
        return p + 4;
      case '99':
        return -1;
    }
  };

  let p = 0;
  let output = [];
  while (p >= 0) {
    p = execute(p);
  }
  return output;
};

module.exports.part1 = runProgram.bind(null, 1);
module.exports.part2 = runProgram.bind(null, 5);
