// const reverse = str => {
//   let strArr = str.split(' ')
//   let revArr = []

//   for (let word of strArr) {
//     let wordArr = word.split('')
//     if (wordArr.length >= 5) {
//       revArr.push(wordArr.reverse().join(''))
//     } else {
//       revArr.push(wordArr.join(''))
//     }
//   }

//   return revArr.join(' ')
// }

// const reverse = str => {
//   let wordArr = str.split(' ')
//   for (let i = 0; i < wordArr.length; i++) {
//     if (wordArr[i].length >= 5) {
//       wordArr[i] = wordArr[i].split('').reverse().join('')
//     }
//   }

//   return wordArr.join(' ')
// }

const reverse = str => {
  return str
    .split(' ')
    .map(word => word.length >= 5
      ? word.split('').reverse().join('')
      : word
    ).join(' ')
}

// const reverse = str => {
//   let strArr = str.split(' ')
//   let revArr = []

//   for (let word of strArr) {
//     let wordArr = word.split('')
//     if (wordArr.length >= 5) {
//       revArr.push(wordArr.reverse().join(''))
//     } else {
//       revArr.push(wordArr.join(''))
//     }
//   }

//   return revArr.join(' ')
// }

console.log(reverse('This is a typical sentence.'))

// reverse("Reverse") ➞ "esreveR"
// reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
// reverse("The dog is big.") ➞ "The dog is big."
