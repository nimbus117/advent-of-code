const toTree = (input, rootNode = 'COM', depth = 1) =>
  input
    .filter(([parent]) => parent === rootNode)
    .map(([, child]) => ({
      value: child,
      parent: rootNode,
      descendents: toTree(input, child, depth + 1),
      depth: depth
    }));

const findNode = (tree) => (nodeValue) => {
  for (const n of tree) {
    const node = n.value === nodeValue ? n : findNode(n.descendents)(nodeValue);
    if (node) return node;
  }
};

const distanceBetween = (tree, node1, node2) => {
  let count = 0;
  const find = findNode(tree);
  const nodes = [find(node1), find(node2)];

  while (nodes[0].parent !== nodes[1].parent) {
    nodes.sort((x, y) => y.depth - x.depth);
    nodes[0] = find(nodes[0].parent);
    count++;
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
