// const flatArr = arr => {
//   var sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][0] * arr[i][1]
//   }
//   return sum
// }

const f = (c) => c.reduce((acc, cur) => acc + cur[0] * cur[1], 0)

const flatArr = arr => arr.reduce((acc, curr) => acc + curr[0] * curr[1], 0)
console.log(flatArr([[1, 2], [2, 1]]))

const testFairness = (mine, yours) => {
  return flatArr(mine) === flatArr(yours)
}

console.log(testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]))

// testFairness([[1, 2], [2, 1]], [[2, 2]]) ➞ true
// testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ➞ false
// testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ➞ true
// testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) ➞ false
