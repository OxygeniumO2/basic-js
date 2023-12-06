const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let outerCount = 0;
  let splitedS1 = s1.split('');
  let splitedS2 = s2.split('');
  if (splitedS1.length > splitedS2.length) {
    [splitedS1, splitedS2] = [splitedS2, splitedS1];
  }
  splitedS1.forEach(item => {
    if (splitedS2.includes(item)) {
      outerCount++;
      splitedS2.splice(splitedS2.indexOf(item), 1);
    }
  })
  return outerCount;
}

module.exports = {
  getCommonCharacterCount
};
