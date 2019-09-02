// const doubleLetters = (word) => {
//   let strArr = Array.from(word)
//   let repeatChars = []
//   for (let i = 0; i < strArr.length; i++) {
//     if (strArr[i] === strArr[i - 1]) {
//       repeatChars.push(strArr[i])
//     }
//   }
//   return repeatChars.length > 0
// }

// function doubleLetters(word) {
// return /(\w)\1/.test(word)
// }

// function doubleLetters(word) {
// return /(\w)\1/.test(word)
// }

const doubleLetters = (word) => {
  let repeatChars = false
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i - 1]) {
      repeatChars = true
    }
  }
  return repeatChars
}

console.log(doubleLetters('loop'))
console.log(doubleLetters('orange'))

// doubleLetters("loop") ➞ true
// doubleLetters("yummy") ➞ true
// doubleLetters("orange") ➞ false
// doubleLetters("munchkin") ➞ false
