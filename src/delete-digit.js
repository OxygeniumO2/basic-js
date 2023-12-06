const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [];
 let nToStr = n.toString();
 for (let i = 0; i < nToStr.length; i += 1) {
   let numberWithoutOneDigit = +(nToStr.slice(0, i) + nToStr.slice(i + 1));
   arr.push(numberWithoutOneDigit);
 }
 return arr.sort((a, b) => a - b)[arr.length - 1];
}

module.exports = {
  deleteDigit
};
