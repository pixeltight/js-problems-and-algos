// const spelling = str => {
//   let arr = []
//   for (let i = 1; i <= str.length; i++) {
//     arr.push(str.slice(0, i))
//   }
//   return arr
// }

const spelling = str =>
  [...str].map((_, i) => str.slice(0, i + 1))

console.log(spelling('happy'))

// let str = 'happy'
// console.log(str.slice(0, 5))

// spelling("bee") ➞ ["b", "be", "bee"]
// spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
// spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]
