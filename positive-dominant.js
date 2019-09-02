const isPositiveDominant = a => (
  [...new Set(a)].filter(num => num > 0).length >
  [...new Set(a)].filter(num => num < 0).length
)

console.log(isPositiveDominant([1, 1, 1, 1, -3, -4]))

// [1, 1, 1, 1, -3, -4] ➞ false
// there is only 1 unique positive value (1)
// there are 2 unique negative values (-3, -4)

// [5, 99, 832, -3, -4] ➞ true
// [5, 0] ➞ true
// [0, -4, -1]
