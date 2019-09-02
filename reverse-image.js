const reverseImage = (arr) => (
  arr.map(subArray => subArray.map(elem => (
    elem === 0 ? elem + 1 : elem - 1
  )))
)

console.log(reverseImage([[1, 0, 0], [0, 1, 0], [0, 0, 1]]))

// reverseImage([
//   [1, 0, 0],
//   [0, 1, 0],
//   [0, 0, 1]
// ]) ➞ [
//   [0, 1, 1],
//   [1, 0, 1],
//   [1, 1, 0]
// ]

// reverseImage([
//   [1, 1, 1],
//   [0, 0, 0]
// ]) ➞ [
//   [0, 0, 0],
//   [1, 1, 1]
// ]

// reverseImage([
//   [1, 0, 0],
//   [1, 0, 0]
// ]) ➞ [
//   [0, 1, 1],
//   [0, 1, 1]
// ]