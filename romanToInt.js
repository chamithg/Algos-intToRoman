/**
 * @param {string} s
 * @return {number}
 */

function roman2int(s) {
  let output = 0;
  let sym = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  let j = 0;

  for (let i = Object.keys(sym).length - 1; i >= 0; i--) {
    while (s[j] === Object.values(sym)[i]) {
      output += parseInt(Object.keys(sym)[i]);
      j++;
    }
    while (s.substring(j, j + 2) === Object.values(sym)[i]) {
      output += parseInt(Object.keys(sym)[i]);
      j += 2;
    }
  }
  return output;
}

console.log(roman2int("MCMXCIV"));
