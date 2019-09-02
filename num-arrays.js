// const numOfSubbarrays = (arr) => {
//   for (let subArr of arr) {
//     return !Array.isArray(subArr) ? 0 : arr.length
//   }
// }

const numOfSubbarrays = (arr) => arr.filter(a => a instanceof Array).length

console.log(numOfSubbarrays([[1, 2, 3]]))
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]))
console.log(numOfSubbarrays([1, 2, 3]))
// numOfSubbarrays([[1, 2, 3]]) ➞ 1
// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
// numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
// numOfSubbarrays([1, 2, 3])
