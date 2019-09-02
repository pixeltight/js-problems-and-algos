const sumOfCubes = arr =>
  arr.reduce((prev, curr) => prev + Math.pow(curr, 3), 0)

console.log(sumOfCubes([1, 5, 9]))

// sumOfCubes([1, 5, 9]) ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// sumOfCubes([3, 4, 5]) ➞ 216
// sumOfCubes([2]) ➞ 8
// sumOfCubes([]) ➞ 0
