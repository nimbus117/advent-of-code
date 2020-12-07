const clean = (s) =>
  s
    .trim()
    .replace(/bags?\.?/, '')
    .replace(/[\s\d]/g, '');

const parse = (input) =>
  input
    .split('\n')
    .slice(0, -1)
    .map((a) => a.split('contain'))
    .map((b) => [
      clean(b[0]),
      Object.fromEntries(
        b[1]
          .split(',')
          .filter((c) => !c.match(/no\sother/))
          .map((d) => [clean(d), parseInt(d)])
      )
    ]);

module.exports.part1 = (input) => {
  const parsedInput = parse(input);
  const findAncestors = (node) =>
    parsedInput
      .filter(([, holds]) => Object.keys(holds).includes(node))
      .flatMap(([bag]) => {
        const parents = findAncestors(bag);
        return [bag, ...parents];
      });

  return new Set(findAncestors('shinygold')).size;
};
