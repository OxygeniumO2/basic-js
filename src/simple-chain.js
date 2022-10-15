const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {

  chain: [],

  getLength() {
    let chainLength = this.chain.length;
    return chainLength;
  },
  addLink(value) {

   this.chain.push(value);
    return this;
  },
  removeLink(position) {
    this.chain.remove(position, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~')
    return str;
  }
};

module.exports = {
  chainMaker
};
