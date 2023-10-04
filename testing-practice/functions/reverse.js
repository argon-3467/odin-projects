function reverse(str) {
  let n = str.length;
  let newStr = '';
  for (let i = n - 1; i >= 0; --i) {
    newStr += str[i];
  }
  return newStr;
}

module.exports = reverse;
