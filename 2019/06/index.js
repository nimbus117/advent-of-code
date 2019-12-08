const toTree = (input, rootNode = 'COM', depth = 1) =>
  input
    .filter(([parent]) => parent === rootNode)
    .map(([parent, child]) => ({
      value: child,
      parent: parent,
      descendents: toTree(input, child, depth + 1),
      depth: depth
    }));

const findNode = (tree) => (nodeValue) => {
  let result;
  for (const n of tree) {
    result = n.value === nodeValue ? n : findNode(n.descendents)(nodeValue);
    if (result) return result;
  }
};

const distanceBetween = (tree, node1, node2) => {
  let count = 0;
  const find = findNode(tree);
  const nodes = [find(node1), find(node2)].sort((x, y) => y.depth - x.depth);

  while (nodes[0].depth > nodes[1].depth) {
    nodes[0] = find(nodes[0].parent);
    count++;
  }

  while (nodes[0].parent !== nodes[1].parent) {
    nodes.forEach((n, i) => (nodes[i] = find(n.parent)));
    count += 2;
  }

  return count;
};

const orbits = (orbit) => toTree(orbit.map((i) => i.split(')')));

const totalOrbits = (orbits, count = 0) =>
  orbits.reduce((acc, cur) => {
    return acc + totalOrbits(cur.descendents, count + 1);
  }, count);

module.exports.part1 = (input) => totalOrbits(orbits(input));
module.exports.part2 = (input) => distanceBetween(orbits(input), 'SAN', 'YOU');
