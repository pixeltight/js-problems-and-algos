// const isPandigital = num => {
//   let arr = num.toString().split('')
//   let set = [...new Set(arr)]
//   return set.size === 10
// }

const isPandigital = num => (
  [...new Set(num.toString())].length === 10
)

console.log(isPandigital(90864523148909))

// isPandigital(98140723568910) ➞ true
// isPandigital(90864523148909) ➞ false
// // 7 is missing.
// isPandigital(112233445566778899) ➞ false
