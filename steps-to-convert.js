// const stepsToConvert = str => {
//   let upper = 0
//   let lower = 0

//   for (let i of str) {
//     if (i.match(/[a-z]/g)) {
//       lower += 1
//     } else {
//       upper += 1
//     }
//   }

//   return str.length - Math.max(lower, upper)
// }

const stepsToConvert = str => {
  let upper = 0
  let lower = 0

  for (let i of str) {
    i.match(/[a-z]/g) ? lower += 1 : upper += 1
  }

  return Math.min(lower, upper)
}

console.log(stepsToConvert('abC'))
console.log(stepsToConvert("abCBA"))
console.log(stepsToConvert("abaCCC"))
console.log(stepsToConvert('aba'))
// stepsToConvert("abC") ➞ 1
// "abC" converted to "abc" in 1 step
// stepsToConvert("abCBA") ➞ 2
// "abCBA" converted to "ABCBA" in 2 steps
// stepsToConvert("aba") ➞ 0
// stepsToConvert("abaCCC") ➞ 3
