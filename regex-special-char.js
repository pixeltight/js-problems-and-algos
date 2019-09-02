// const removeSpecialCharacters = str => {
//   return str.replace(/[^a-z0-9- _]/gi, '')
// }

const removeSpecialCharacters = str => str.replace(/[^\w\s-]/g, '')

console.log(removeSpecialCharacters('The quick brown fox!'))
console.log(removeSpecialCharacters('%fd76$fd(-)6GvKlO.'))

// removeSpecialCharacters("The quick brown fox!") ➞ "The quick brown fox"
// removeSpecialCharacters("%fd76$fd(-)6GvKlO.") ➞ "fd76fd-6GvKlO"
// removeSpecialCharacters("D0n$c sed 0di0 du1") ➞ "D0nc sed 0di0 du1"
