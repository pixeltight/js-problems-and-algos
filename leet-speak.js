// const hackerSpeak = (str) => {
//   let chars = str.split('')
//   for (let i = 0; i < chars.length; i++) {
//     switch (chars[i]) {
//       case 'a':
//         chars[i] = '4'
//         break
//       case 'e':
//         chars[i] = '3'
//         break
//       case 'i':
//         chars[i] = '1'
//         break
//       case 'o':
//         chars[i] = '0'
//         break
//       case 's':
//         chars[i] = '5'
//         break
//       default:
//         break
//     }
//   }
//   return chars.join('')
// }

// const hackerSpeak = (str) => {
//   return (
//     str.replace(/a/gi, '4')
//       .replace(/e/gi, '3')
//       .replace(/i/gi, '1')
//       .replace(/o/gi, '0')
//       .replace(/s/gi, '5')
//   )
// }

function hackerSpeak (str) {
  const charMap = {
    'a': 4,
    'e': 3,
    'i': 1,
    'o': 0,
    's': 5
  }

  return str.split('')
    .map(letter => {
      return Object.keys(charMap)
        .some(key => key === letter)
        ? charMap[letter]
        : letter
    }).join('')
}

console.log(hackerSpeak('javascript is cool'))
console.log(hackerSpeak('pr0gr4mm1ng 15 fun'))
console.log(hackerSpeak('become a coder'))
// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
// hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
// hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r"
