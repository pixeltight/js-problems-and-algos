// const counterpartCharCode = char => {
//   if (/[\u0000-\u007F]/.test(char)) {
//     return char.toLowerCase().charCodeAt()
//   } else if (/[\p{Ll}]/.test(char)) {
//     return char.toUpperCase().charCodeAt()
//   } else {
//     return char
//   }
// }

const counterpartCharCode = char =>
  char === char.toUpperCase()
    ? char.toLowerCase().charCodeAt()
    : char.toUpperCase().charCodeAt()

console.log(('5').toLowerCase())

console.log(counterpartCharCode('A'))
console.log(counterpartCharCode('a'))
console.log(counterpartCharCode('È'))
console.log(counterpartCharCode('è'))
console.log(counterpartCharCode('Œ'))
console.log(counterpartCharCode('œ'))
console.log(counterpartCharCode('Ⱥ'))
console.log(counterpartCharCode('ⱥ'))
// counterpartCharCode("A") ➞ 97
// counterpartCharCode("a") ➞ 65
// counterpartCharCode('è') ➞ 200
// counterpartCharCode('È') ➞ 232
// counterpartCharCode('Œ') ➞ 339
// counterpartCharCode('œ') ➞ 338
// counterpartCharCode('Ⱥ') ➞ 11365
// counterpartCharCode('ⱥ') ➞ 570
