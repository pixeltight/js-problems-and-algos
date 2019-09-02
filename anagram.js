// const makeCharMap = str => {
//   let charMap = {}

//   for (let char of str.toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }

//   return charMap
// }

// const isAnagram = (str1, str2) => {
//   let stringA = makeCharMap(str1)
//   let stringB = makeCharMap(str2)

//   if (Object.keys(stringA).length !== Object.keys(stringB).length) {
//     return false
//   }

//   for (let char in stringA) {
//     if (stringA[char] !== stringB[char]) {
//       return false
//     }
//   }

//   return true
// }

const cleanString = str => {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

const isAnagram = (str1, str2) => cleanString(str1) === cleanString(str2)

// const isAnagram = (str1, str2) => {
//   let arr1 = str1.toLowerCase().split('').sort()
//   let arr2 = str2.toLowerCase().split('').sort()
//   let anagram = false
//   if (arr1.length !== arr2.length) {
//     return false
//   }

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] === arr2[i]) {
//       anagram = true
//     } else {
//       anagram = false
//     }
//   }
//   return anagram
// }

console.log(isAnagram('cristian', 'Cristina'))
console.log(isAnagram('Dave Barry', 'Ray Adverb'))
console.log(isAnagram('Nope', 'Note'))
console.log(isAnagram('Apple', 'Appeal'))

// isAnagram("cristian", "Cristina") ➞ true
// isAnagram("Dave Barry", "Ray Adverb") ➞ true
// isAnagram("Nope", "Note") ➞ false
// isAnagram('Apple', 'Appeal') ➞ false
