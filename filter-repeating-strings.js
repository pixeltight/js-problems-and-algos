// const identicalFilter = arr =>
//   arr.filter(str => [...str].every(char => char === str[0]))

const identicalFilter = arr =>
  arr.filter(str => new Set(str).size === 1)

console.log(identicalFilter(['aaaaaa', 'bc', 'd', 'eeee', 'xyz']))

// identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"])
// ➞ ["aaaaaa", "d", "eeee"]
// identicalFilter(["88", "999", "22", "545", "133"])
// ➞ ["88", "999", "22"]
// identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"])
// ➞ []
