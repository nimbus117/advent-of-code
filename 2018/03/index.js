const parseClaim = (claim) => {
  const values = claim.match(/\d+/g).map((c) => parseInt(c));
  return {
    id: values[0],
    topleft: { x: values[1], y: values[2] },
    dimensions: { w: values[3], h: values[4] }
  };
};

const fabricMarker = (fabric) => (claim) => {
  for (let w = 0; w < claim.dimensions.w; w++) {
    for (let h = 0; h < claim.dimensions.h; h++) {
      const key = `${claim.topleft.x + w},${claim.topleft.y + h}`;
      fabric[key] ? fabric[key].push(claim.id) : (fabric[key] = [claim.id]);
    }
  }
};

module.exports.part1 = (claims) => {
  const fabric = {};
  const mark = fabricMarker(fabric);
  claims
    .filter((x) => x.length)
    .map(parseClaim)
    .forEach(mark);

  return Object.values(fabric).reduce(
    (acc, ids) => (ids.length > 1 ? acc + 1 : acc),
    0
  );
};

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

module.exports.part2 = (claims) => {
  const fabric = {};
  claims
    .filter((x) => x.length)
    .map(parseClaim)
    .forEach(fabricMarker(fabric));
  return findNonOverlappingClaim(fabric);
};
