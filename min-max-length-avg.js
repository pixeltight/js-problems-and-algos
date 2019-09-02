// const minMaxLengthAverage = arr => {
//   let avg = arr.reduce((acc, curr) => acc + curr) / arr.length
//   let sort = arr.sort((a, b) => a - b)
//   return [sort[0], sort[arr.length - 1], arr.length, avg]
// }

const minMaxLengthAverage = arr =>
  [
    Math.min(...arr),
    Math.max(...arr),
    arr.length,
    arr.reduce((acc, curr) => acc + curr) / arr.length
  ]

// const minMaxLengthAverage = arr => {
  
//   let avg = arr.reduce((acc, curr) => acc + curr) / arr.length
//   return [avg]
// }

console.log(minMaxLengthAverage([6, 9, 15, -2, 92, 11]))
console.log(minMaxLengthAverage([4.54, 8.32, 5.20]))

// minMaxLengthAverage([6, 9, 15, -2, 92, 11]) ➞ [-2, 92, 6, 21.833333333333332]
// minMaxLengthAverage([30, 43, 20, 92, 3, 74]) ➞ [3, 92, 6, 43.666666666666664]
// minMaxLengthAverage([4.54, 8.32, 5.20]) ➞ [4.54, 8.32, 3, 6.02]
