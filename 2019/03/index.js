const lineCoords = (start, line) => {
  const direction = line[0];
  const count = parseInt(line.slice(1));
  const coords = [];

  switch (direction) {
    case 'R':
      for (let i = start[0] + 1; i <= start[0] + count; i++) {
        coords.push([i, start[1]]);
      }
      break;
    case 'L':
      for (let i = start[0] - 1; i >= start[0] - count; i--) {
        coords.push([i, start[1]]);
      }
      break;
    case 'U':
      for (let i = start[1] + 1; i <= start[1] + count; i++) {
        coords.push([start[0], i]);
      }
      break;
    case 'D':
      for (let i = start[1] - 1; i >= start[1] - count; i--) {
        coords.push([start[0], i]);
      }
      break;
  }
  return coords;
};

const pathCoords = (wireLines) =>
  wireLines
    .split(',')
    .reduce((x, y) => x.concat(lineCoords(x[x.length - 1], y)), [[0, 0]])
    .map((coord) => coord.join(','));

module.exports.part1 = (input) => {
  input = input.split('\n');
  const wire1 = pathCoords(input[0]);
  const wire2 = new Set(pathCoords(input[1]));

  return wire1
    .filter((coord) => wire2.has(coord))
    .map((c) => c.split(',').reduce((x, y) => Math.abs(x) + Math.abs(y)))
    .sort()[1];
};

module.exports.part2 = (input) => {
  input = input.split('\n');
  const wire1 = pathCoords(input[0]);
  const wire2 = pathCoords(input[1]);
  const wire2Set = new Set(wire2);

  return wire1
    .filter((coord) => wire2Set.has(coord))
    .map((coord) => wire1.indexOf(coord) + wire2.indexOf(coord))
    .sort()[1];
};
