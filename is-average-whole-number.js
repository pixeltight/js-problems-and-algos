const isAvgWhole = arr => {
  let avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length
  return Number.isInteger(avg)
}
console.log(isAvgWhole([1, 2, 3, 4]))

// isAvgWhole([1, 3]) ➞ true
// isAvgWhole([1, 2, 3, 4]) ➞ false
// isAvgWhole([1, 5, 6]) ➞ true
// isAvgWhole([1, 1, 1]) ➞ true
// isAvgWhole([9, 2, 2, 5]) ➞ false
