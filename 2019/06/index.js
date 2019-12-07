const toTree = (input, rootNode = 'COM') =>
  input
    .filter((i) => i[0] === rootNode)
    .map((i) => ({ node: i[1], descendents: toTree(input, i[1]) }));

const orbitTree = (orbits) => toTree(orbits.map((i) => i.split(')')));

const countOrbits = (orbits, count = 0) =>
  orbits.reduce((acc, cur) => {
    return acc + countOrbits(cur.descendents, count + 1);
  }, count);

module.exports.part1 = (localOrbits) => countOrbits(orbitTree(localOrbits));
