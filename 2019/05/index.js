const runProgram = (userInput, programInput) => {
  const program = programInput
    .split('\n')[0]
    .split(',')
    .map((x) => parseInt(x));

  const execute = () => {
    const [m2, m1, ...opCode] = program[pointer]
      .toString()
      .padStart(4, 0)
      .split('')
      .map((x) => parseInt(x));

    const value = (index) =>
      (index === 1 && m1) || (index === 2 && m2)
        ? program[pointer + index]
        : program[program[pointer + index]];

    switch (opCode.join('')) {
      case '01':
        program[program[pointer + 3]] = value(2) + value(1);
        return pointer + 4;
      case '02':
        program[program[pointer + 3]] = value(2) * value(1);
        return pointer + 4;
      case '03':
        program[program[pointer + 1]] = userInput;
        return pointer + 2;
      case '04':
        output.push(value(1));
        return pointer + 2;
      case '05':
        return value(1) !== 0 ? value(2) : pointer + 3;
      case '06':
        return value(1) === 0 ? value(2) : pointer + 3;
      case '07':
        program[program[pointer + 3]] = value(1) < value(2) ? 1 : 0;
        return pointer + 4;
      case '08':
        program[program[pointer + 3]] = value(1) === value(2) ? 1 : 0;
        return pointer + 4;
      case '99':
        return -1;
    }
  };

  let pointer = 0;
  let output = [];
  while (pointer >= 0) {
    pointer = execute(pointer);
  }
  return output;
};

module.exports.part1 = runProgram.bind(null, 1);
module.exports.part2 = runProgram.bind(null, 5);
