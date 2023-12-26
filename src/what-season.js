/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!')
  }
  if (Object.prototype.toString.call(date) !== '[object Date]') {
    throw new Error('Invalid date!')
  }
  try {
    date.toLocaleString()
  } catch (error) {
    if (error) {
      throw new Error('Invalid date!')
    }
  }

  const month = date.getMonth() + 1
  const day = date.getDay()
  if (month < 3 || month === 12) {
    return 'winter'
  }
  if (month >= 3 && month < 6) {
    return 'spring'
  }
  if (month >= 6 && month < 9) {
    return 'summer'
  }
  if (month >= 9 && month < 12) {
    return 'autumn'
  }
}
module.exports = {
  getSeason
}
