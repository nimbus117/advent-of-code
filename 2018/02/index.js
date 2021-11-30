const characterCount = (string) =>
  string.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

const countWithValueOf = (value) => (arr) =>
  arr.filter((char) => Object.values(char).includes(value)).length;

module.exports.part1 = (ids) => {
  const characterCounts = ids.split('\n').map(characterCount);
  return (
    countWithValueOf(2)(characterCounts) * countWithValueOf(3)(characterCounts)
  );
};

const removeCharAtIndex = (index) => (string) =>
  string.slice(0, index) + string.slice(index + 1);

module.exports.part2 = (ids) => {
  ids = ids.split('\n');
  for (let i = 0; i < ids[0].length; i++) {
    const result = ids
      .map(removeCharAtIndex(i))
      .filter((id, index, arr) => arr.indexOf(id) != index);

    if (result.length) return result;
  }
};
