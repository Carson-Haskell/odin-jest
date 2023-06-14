const analyzeArray = array => {
  if (!isValidArray(array)) return "Error: array must consist of only numbers";

  const average = getAverage(array);
  const { min, max } = getMinMax(array);
  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
};

const isValidArray = array => array.every(item => typeof item === "number");

const getAverage = array => array.reduce((a, b) => a + b) / array.length;

const getMinMax = array => ({
  min: Math.min(...array),
  max: Math.max(...array),
});

module.exports = analyzeArray;
