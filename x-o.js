// const XO = (str) => {
//   const Xchecker = ['x']
//   const Ochecker = ['o']
//   let Xcount = 0
//   let Ocount = 0

//   for (let char of str.toLowerCase()) {
//     if (Xchecker.includes(char)) {
//       Xcount++
//     }
//     if (Ochecker.includes(char)) {
//       Ocount++
//     }
//   }
//   return Xcount === Ocount
// }

function XO (str) {
  let x = str.toLowerCase().split('').filter(x => x === 'x').length
  let o = str.toLowerCase().split('').filter(x => x === 'o').length
  return x === o
}

console.log(XO('ooxx'))
console.log(XO('xooxx'))
console.log(XO('zpzpzpp'))
console.log(XO('oozz'))

// XO("ooxx") ➞ true

// XO("xooxx") ➞ false

// XO("ooxXm") ➞ true (case insensitive)

// XO("zpzpzpp") ➞ true (returns true if no x and o)

// XO("zzoo") ➞ false
