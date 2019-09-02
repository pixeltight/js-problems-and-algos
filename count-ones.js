const countOnes = matrix =>
  matrix.reduce((acc, curr) => acc + curr.filter(num => num === 1).length, 0)

console.log(countOnes([
  [1, 0],
  [0, 0]
]))

// countOnes([
//   [1, 0],
//   [0, 0]
// ]) ➞ 1

// countOnes([
//   [1, 1, 1],
//   [0, 0, 1],
//   [1, 1, 1]
// ]) ➞ 7

// countOnes([
//   [1, 2, 3],
//   [0, 2, 1],
//   [5, 7, 33]
// ]) ➞ 2