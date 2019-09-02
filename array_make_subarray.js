// const matrix = (x, y, z) =>
//   Array.from({length: x}, () =>
//     Array.from({length: y}, () => z)
//   );

const matrix = (x, y, z) => Array(x).fill(Array(y).fill(z))

// const matrix = (x, y, z) => {
//   let outerArr = []
//   let innerArr = []

//   for (let j = 0; j < y; j++) {
//     innerArr.push(z)
//   }

//   for (let i = 0; i < x; i++) {
//     outerArr.push(innerArr)
//   }
//   return outerArr
// }

console.log(matrix(3, 2, 0))

// matrix(3, 2, 3) ➞ [[3, 3], [3, 3], [3, 3]]
// matrix(2, 1, "edabit") ➞ [["edabit"], ["edabit"]]
// matrix(3, 2, 0) ➞ [[0, 0], [0, 0], [0, 0]]
