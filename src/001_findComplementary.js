/* eslint-disable func-style */
/**
 *
 * @param {*} nums
 * @param {*} targetNumber
 * @return {number[]}
 */
function findComp(nums, targetNumber) {

  //O(n)
  const numberMap = new Map();
  numberMap.set(nums[0], 0);

  for (let i = 1; i < nums.length; i++) {
    const numToFind = targetNumber - nums[i];
    if (numberMap.has(numToFind)) {
      return [numberMap.get(numToFind), i];
    } else {
      numberMap.set(nums[i], i);
    }
  }

  //O(n2)
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = i + 1; j < nums.length; j++) {
  //     if (nums[i] + nums[j] === targetNumber) {
  //       return [i, j];
  //     }
  //   }
  // }
}

console.log(findComp([2, 11, 15, 7], 9));
