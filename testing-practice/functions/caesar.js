function caesar(str, shift) {
  let cipher = '';
  let a = 'a'.charCodeAt(0);
  let z = 'z'.charCodeAt(0);
  let A = 'A'.charCodeAt(0);
  let Z = 'Z'.charCodeAt(0);
  let n = str.length;
  for (let i = 0; i < n; ++i) {
    let curr = str.charCodeAt(i);
    if (curr >= a && curr <= z) {
      curr = a + ((curr - a + shift) % 26);
    } else if (curr >= A && curr <= Z) {
      curr = A + ((curr - A + shift) % 26);
    }
    cipher += String.fromCharCode(curr);
  }
  return cipher;
}

module.exports = caesar;
