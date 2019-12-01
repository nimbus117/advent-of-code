const parseClaim = (claim) => {
  const values = claim.match(/\d+/g).map((c) => parseInt(c));
  return {
    id: values[0],
    topleft: { x: values[1], y: values[2] },
    dimensions: { w: values[3], h: values[4] }
  };
};

const claims = require('fs')
  .readFileSync('input', 'utf8')
  .split('\n')
  .filter(String)
  .map(parseClaim);

const fabricMarker = (fabric) => (claim) => {
  for (let w = 0; w < claim.dimensions.w; w++) {
    for (let h = 0; h < claim.dimensions.h; h++) {
      const key = `${claim.topleft.x + w},${claim.topleft.y + h}`;
      fabric[key] ? fabric[key].push(claim.id) : (fabric[key] = [claim.id]);
    }
  }
};

const fabric = {};
claims.forEach(fabricMarker(fabric));

// part 1
const overlapCount = Object.values(fabric).reduce(
  (acc, ids) => (ids.length > 1 ? acc + 1 : acc),
  0
);
console.log(overlapCount);

// part 2
const findNonOverlappingClaim = (fabric) => {
  const singleIds = new Set(
    Object.values(fabric)
      .filter((ids) => ids.length === 1)
      .flat()
  );
  const multiIds = new Set(
    Object.values(fabric)
      .filter((ids) => ids.length > 1)
      .flat()
  );

  return [...singleIds].filter((id) => !multiIds.has(id));
};
console.log(findNonOverlappingClaim(fabric));
