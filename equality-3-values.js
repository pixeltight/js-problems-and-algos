// const equal = (a, b, c) => {
//   let arrMap = {}
//   let arr = [a, b, c]
//   let max = 0

//   for (let elem of arr) {
//     arrMap[elem] = arrMap[elem] + 1 || 1
//   }

//   for (let char in arrMap) {
//     if (arrMap[char] > max) {
//       max = arrMap[char]
//     }
//   }

//   return max === 1 ? 0 : max
// }

function equal (a, b, c) {
  const size = (new Set([a, b, c])).size
  return size === 3 ? 0 : 4 - size
}

console.log(equal(3, 4, 3))
console.log(equal(1, 1, 1))
console.log(equal(3, 4, 1))

// equal(3, 4, 3) ➞ 2
// equal(1, 1, 1) ➞ 3
// equal(3, 4, 1) ➞ 0
