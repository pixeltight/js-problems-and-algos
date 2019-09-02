// const alternatingCaps = str => {
//   let strArr = str.split('')
//   for (let i = 0; i < strArr.length; i++) {
//     if (i % 2 === 0) {
//       strArr[i] = strArr[i].toUpperCase()
//     } else {
//       strArr[i] = strArr[i].toLowerCase()
//     }
//   }
//   return strArr.join('')
// }

const alternatingCaps = str => str.split('').map((elem, index) => index % 2 === 0 ? elem.toUpperCase() : elem.toLowerCase()).join('')

console.log(alternatingCaps('Hello'))
console.log(alternatingCaps('Hey, how are you?'))
// console.log(alternatingCaps('OmG!!! tHiS WeBsItE Is aWeSoMe'))
// alternatingCaps("Hello") ➞ "HeLlO"
// alternatingCaps("Hey, how are you?") ➞ "HeY, hOw aRe yOu?"
// alternatingCaps("OMG!!! This website is awesome!!") ➞ "OmG!!! tHiS WeBsItE Is aWeSoMe!!"
