// const indexOfCaps = str => {
//   let capsArr = []
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].match(/[A-Z]/g)) {
//       capsArr.push(i)
//     }
//   }
//   return capsArr
// }

let indexOfCaps = str => (
  str
    .split('')
    .reduce((acc, curr, index) => /[A-Z]/g.test(curr) ? [...acc, index] : acc, [])
)

console.log(indexOfCaps('eDaBiT'))
// indexOfCaps(str) {
//   return str.split('').reduce((a, b, i) => /[A-Z]/.test(b) ? [...a, i] : a, []);
// }

// let newArr = [5, 10, 2, 7]
//   .reduce((acc, curr, index) => {
//     if (curr < 10) {
//       acc.push(index)
//     }
//     return acc
//   }, [])

// console.log(newArr)

// indexOfCaps("eDaBiT") ➞ [1, 3, 5]
// indexOfCaps("eQuINoX") ➞ [1, 3, 4, 6]
// indexOfCaps("determine") ➞ []
// indexOfCaps("STRIKE") ➞ [0, 1, 2, 3, 4, 5]
// indexOfCaps("sUn") ➞ [1]
