const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str) {
    const arr = str.match(/(.)\1*/g);
    let result = '';
    arr.forEach(item => {
    result += `${item.length}${item[0]}`
  })
    return result.replaceAll('1', '');
  }
  return '';
}

module.exports = {
  encodeLine
};
