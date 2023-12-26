/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} array names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return false
  }
  return array
    .filter(el => typeof el === 'string')
    .map(el => el.replace(/\s/g, '').toUpperCase())
    .sort((a, b) => a.localeCompare(b) - b.localeCompare(a))
    .map(el => el.split('')[0])
    .join('')
}
module.exports = {
  createDreamTeam
}
