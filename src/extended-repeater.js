const { NotImplementedError } = require('../extensions/index.js')

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {}) {
  const {
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|',
    repeatTimes = 1
  } = options
  str = '' + str
  const additionStr = '' + addition

  const additions = Array(additionRepeatTimes)
    .fill(additionStr)
    .join(additionSeparator)

  const returnStr = Array(repeatTimes)
    .fill(str + additions)
    .join(separator)

  return returnStr
}

module.exports = {
  repeater
}
