
// const canAlternate = s => {
//   const charMap = {}

//   for (let num of s) {
//     charMap[num] = charMap[num] + 1 || 1
//   }

//   let charDiff = Math.abs(charMap[0] - charMap[1])
//   return charDiff < 2
// }

const canAlternate = s => {
  let diff = [...s].filter(num => num === '0').length -
    [...s].filter(num => num === '1').length

  return Math.abs(diff) < 2
}

console.log(canAlternate('0001111'))
console.log(canAlternate('1111'))
// console.log(canAlternate("010001"))
// canAlternate("0001111") ➞ true
// Can make: "1010101"
// canAlternate("01001") ➞ true
// Can make: "01010"
// canAlternate("010001") ➞ false
// canAlternate("1111") ➞ false
