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

   this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length || typeof position !== 'number') {
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join('~~');
    this.chain = [];
    return str;
  }
};

module.exports = {
  chainMaker
};
