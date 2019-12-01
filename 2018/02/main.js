const ids = require('fs')
  .readFileSync('input', 'utf8')
  .split('\n')
  .filter(String);

// part 1
const characterCount = (string) =>
  string.split('').reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

const countWithValueOf = (value) => (arr) =>
  arr.filter((char) => Object.values(char).includes(value)).length;

const calculateChecksum = (ids) => {
  const characterCounts = ids.map(characterCount);
  return (
    countWithValueOf(2)(characterCounts) * countWithValueOf(3)(characterCounts)
  );
};
console.log(calculateChecksum(ids));

// part 2
const removeCharAtIndex = (index) => (string) =>
  string.slice(0, index) + string.slice(index + 1);

const differsByOne = (ids) => {
  for (let i = 0; i < ids[0].length; i++) {
    const result = ids
      .map(removeCharAtIndex(i))
      .filter((id, index, arr) => arr.indexOf(id) != index);

    if (result.length) return result;
  }
};
console.log(differsByOne(ids));
