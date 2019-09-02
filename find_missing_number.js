const missingNum = arr => {
  let orderedArr = arr.sort((a, b) => a - b)
  for (let i = 1; i < orderedArr.length; i++) {
    if (orderedArr[i] - orderedArr[i - 1] !== 1) {
      return orderedArr[i] - 1
    }
  }
}

// const missingNum = arr => {
//   let orderedArr = arr.sort((a, b) => a - b)
//   for (let i = 1; i < orderedArr.length; i++) {
//     if (orderedArr[i] - orderedArr[i - 1] !== 1) {
//       return orderedArr[i] - 1
//     } else if (orderedArr[orderedArr.length - 1] === 9) {
//       return 10
//     } else if (orderedArr[0] > 1) {
//       return 1
//     }
//   }
// }

// function missingNum (arr) {
//   var sum = arr.reduce((a, b) => a + b, 0)
//   return 55 - sum
// }

// function missingNum (arr) {
//   for (var i = 1; i <= arr.length + 1; i++) {
//     if (arr.indexOf(i) === -1) {
//       return i
//     }
//   }
// }

console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]))
console.log(missingNum([7, 2, 3, 9, 4, 5, 6, 8, 10]))
console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]))
console.log(missingNum([1, 7, 2, 4, 8, 10, 5, 6, 9]))

// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5
// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10
// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
