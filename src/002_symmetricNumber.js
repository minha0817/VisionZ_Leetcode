/* eslint-disable func-style */
/**
 *
 * @param {number} num
 * @return {boolean}
 */

function symmetric(num) {
  const stringNum = num.toString();

  for (let i = 0; i < Math.floor(stringNum.length / 2); i++) {
    const left = stringNum[i];
    const right = stringNum[stringNum.length - 1 - i];

    if (left !== right) return false;
  }

  return true;
}

console.log(symmetric(575));
