const toTree = (input, rootNode, depth = 1) =>
  input
    .filter((i) => i[0] === rootNode)
    .map((i) => ({
      value: i[1],
      parent: rootNode,
      descendents: toTree(input, i[1], depth + 1),
      depth: depth
    }));

const node = (tree, nodeValue) => {
  let result;
  for (const n of tree) {
    result = n.value === nodeValue ? n : node(n.descendents, nodeValue);
    if (result) break;
  }
  return result;
};

const distanceBetween = (tree, node1, node2) => {
  let count = 0;
  const nodes = [node(tree, node1), node(tree, node2)].sort(
    (x, y) => y.depth - x.depth
  );

  while (nodes[0].depth > nodes[1].depth) {
    nodes[0] = node(tree, nodes[0].parent);
    count++;
  }

  while (nodes[0].parent !== nodes[1].parent) {
    nodes.forEach((n, i) => (nodes[i] = node(tree, n.parent)));
    count += 2;
  }

  return count;
};

const orbitTree = (orbits) =>
  toTree(
    orbits.map((i) => i.split(')')),
    'COM'
  );

const totalOrbits = (orbits, count = 0) =>
  orbits.reduce((acc, cur) => {
    return acc + totalOrbits(cur.descendents, count + 1);
  }, count);

module.exports.part1 = (localOrbits) => totalOrbits(orbitTree(localOrbits));
module.exports.part2 = (localOrbits) =>
  distanceBetween(orbitTree(localOrbits), 'SAN', 'YOU');
