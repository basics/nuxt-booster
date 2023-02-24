function getCrossorigin (crossorigin, defaultCrossOrigin) {
  crossorigin = crossorigin === true ? 'anonymous' : crossorigin;
  crossorigin = crossorigin === undefined ? defaultCrossOrigin || 'anonymous' : crossorigin;
  return crossorigin;
};

module.exports = { getCrossorigin };
