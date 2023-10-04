function analyzeArray(arr) {
  let length = arr.length;
  if (length == 0) throw new Error('Array is empty');
  let average = arr.reduce((sum, curr) => (sum += curr), 0) / length;
  let min = arr.reduce((min, val) => (val < min ? val : min), Infinity);
  let max = arr.reduce((max, val) => (val > max ? val : max), -Infinity);
  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = analyzeArray;
