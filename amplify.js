// const amplify = num =>
//   new Array(num)
//     .fill()
//     .map((_, i) =>
//       (i + 1) % 4 === 0
//         ? (i + 1) * 10
//         : i + 1
//     )

// const amplify = num =>
//   Array.from({ length: num }, (_, i) => {
//     const num = i + 1
//     return num % 4 === 0 ? num * 10 : num
//   })

function amplify(num) {
  return Array.isArray(new Array(num).keys())
}

console.log(amplify(3))
console.log(amplify(4))

// amplify(4) ➞ [1, 2, 3, 40]
// amplify(3) ➞ [1, 2, 3]
// amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]