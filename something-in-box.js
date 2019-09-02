// const inBox = arr => {
//   // let hasAsterisk = false
//   arr.forEach(str => {
//     return !!str.indexOf('*') > -1
//   })
//   // return hasAsterisk
// }

const inBox = arr => arr.some(str => str.includes('*'))

console.log(inBox([
  'r*',
  'r',
  'r'
]))

// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) ➞ true

// inBox([
//   "####",
//   "#  #",
//   "#  #",
//   "####"
// ]) ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) ➞ false
