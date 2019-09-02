// const isOmniPresent = (arr, val) =>
//   arr.filter(subArr => subArr.includes(val)).length === arr.length
  
const isOmniPresent = (arr, val) =>
  arr.every(subArr => subArr.includes(val))

console.log(isOmniPresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(isOmniPresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1) ➞ true
// isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6) ➞ false
// isOmnipresent([[5], [5], [5], [6, 5]], 5) ➞ true
// isOmnipresent([[5], [5], [5], [6, 5]], 6) ➞ false
