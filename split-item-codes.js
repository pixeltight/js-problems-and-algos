// https://edabit.com/challenge/Trog78Qz4bGNLFh6M

// const splitCode = item => {
//   let str = item.match(/[A-Z]/g).join('')
//   let num = item.match(/[0-9]/g).join('')
//   return [str, +num]
// }

const splitCode = item => {
  let arr = item.match(/([A-Z]+)(\d+)/)
  arr
  return [arr[1], +arr[2]]
}

console.log(splitCode('TEWA8392'))
// console.log(splitCode('MMU778'))
// console.log(splitCode('SRPE5532'))
// console.log(splitCode('SKU8977'))
// console.log(splitCode('MCI5589'))
// console.log(splitCode('WIEB3921'))

// splitCode("TEWA8392") ➞ ["TEWA", 8392]
// splitCode("MMU778") ➞ ["MMU", 778]
// splitCode("SRPE5532") ➞ ["SSRPE", 5532]
// splitCode("SKU8977") ["SKU", 8977]
// splitCode("MCI5589") ["MCI", 5589]
// splitCode("WIEB3921") ["WIEB", 3921]
