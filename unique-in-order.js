// const uniqueInOrder = seq => {
//   let newArr = []
//   for (let i = 0; i < seq.length; i++) {
//     if (seq[i] !== seq[i - 1]) {
//       newArr.push(seq[i])
//     }
//   }
//   return newArr
// }

const uniqueInOrder = seq => (
  [...seq]
    .filter((elem, i) => elem !== seq[i - 1])
)

// function uniqueInOrder(sequence) {
//   return [...sequence].filter((a, i) => a !== sequence[i+1])
// }

// const uniqueInOrder = seq => {
//   return seq
//     .split('')
//     .reduce((acc, curr, index) => {
//       acc
//       curr
//       if (acc !== curr) {
//         acc.push(curr)
//       }
//       return acc
//     }, [])
// }

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
console.log(uniqueInOrder('ABBCcAD'))

// uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]
// uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]
// uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]
