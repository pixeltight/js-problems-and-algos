const getAbsSum = arr =>
  arr.reduce((acc, curr) => acc + Math.abs(curr), 0)

console.log(getAbsSum([2, -1, 4, 8, 10]))

// getAbsSum([2, -1, 4, 8, 10]) ➞ 25
// getAbsSum([-3, -4, -10, -2, -3]) ➞ 22
// getAbsSum([2, 4, 6, 8, 10]) ➞ 30
// getAbsSum([-1]) ➞ 1
