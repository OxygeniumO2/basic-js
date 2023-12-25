const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {

  if (!Array.isArray(arr)) {
    throw Error(`'arr' parameter must be an instance of the Array!`);
  }

  if (arr.every(item => item !== '--discard-next' && item !== '--discard-prev' && item !== '--double-prev' && item !== '--double-next')) {
    return arr;
  }

  const res = arr.reduce((acc, item, index, arr) => {

    if (item === '--double-prev' && arr[index - 1]) {
      if (arr[index - 2] === '--discard-next') {
        return acc;
      }
      acc.push(arr[index - 1]);
      return acc;
    }

    if (item === '--double-next' && arr[index + 1]) {
      acc.push(arr[index + 1])
      return acc;
    }
    if (item === '--discard-prev' && arr[index - 1]) {
      if (arr[index - 2] === '--discard-next') {
        return acc;
      }
      acc.pop();
      return acc;
    }

    if (arr[index - 1] === '--discard-next' && arr[index + 1]) {
      acc.pop();
      return acc;
    }

    acc.push(item);
    return acc;
  }, []);

  return res.filter(item => !isNaN(item));

}

module.exports = {
  transform
};
