const clean = (s) => s.replace(/(bags?\.?|[\s\d])/g, '');

const parse = (input) =>
  input
    .split('\n')
    .slice(0, -1)
    .map((x) => x.split('contain'))
    .map(([name, children]) => [
      clean(name),
      Object.fromEntries(
        children
          .split(',')
          .filter((x) => !x.match(/no\sother/))
          .map((x) => [clean(x), parseInt(x)])
      )
    ]);

const findAncestors = (input, node) =>
  input
    .filter(([, children]) => Object.keys(children).includes(node))
    .flatMap(([bag]) => {
      const parents = findAncestors(input, bag);
      return [bag, ...parents];
    });

const countDescendents = (input, node) => {
  const [, children] = input.find(([bag]) => bag === node);
  return [
    ...Object.values(children),
    ...Object.entries(children).map(
      ([name, count]) => countDescendents(input, name) * count
    )
  ].reduce((a, b) => a + b, 0);
};

module.exports.part1 = (input) =>
  new Set(findAncestors(parse(input), 'shinygold')).size;
module.exports.part2 = (input) => countDescendents(parse(input), 'shinygold');
