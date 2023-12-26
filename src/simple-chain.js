const { NotImplementedError } = require('../extensions/index.js')
/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  getLength() {
    return this.value.length
  },
  addLink(value) {
    if (!this.value) {
      this.value = []
    }
    value = String(value)
    this.value.push(value)

    return this
  },
  removeLink(position) {
    if (!this.value || typeof position !== 'number' || position < 1 || position > this.value.length) {
      this.value = []
      throw new Error("You can't remove incorrect link!")
    }
    this.value.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    if (!this.value) {
      return
    }
    this.value.reverse()
    return this
  },
  finishChain() {
    if (!this.value) {
      return ''
    }
    let chainStr = ''
    for (let i = 0; i < this.value.length; i++) {
      chainStr += `( ${this.value[i]} )~~`
    }
    this.value = []
    return chainStr.slice(0, -2)
  }
}

module.exports = {
  chainMaker
}
