// const totalVolume = (...boxes) => (
//   boxes
//     .reduce((acc, curr) =>
//       acc + curr.reduce((acc, curr) =>
//         acc * curr), 0
//     )
// )

const totalVolume = (...boxes) => (
  boxes
    .reduce((acc, [l, w, h]) =>
      acc + l * w * h, 0
    )
)

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]))

// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) ➞ 63
// totalVolume([2, 2, 2], [2, 1, 1]) ➞ 10
// totalVolume([1, 1, 1]) ➞ 1
