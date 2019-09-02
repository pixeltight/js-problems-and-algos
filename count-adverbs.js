// const countAdverbs = sentence => {
//   return sentence
//     .replace(/[^a-zA-z\s]/g, '')
//     .split(' ')
//     .filter(word =>
//       word.charAt(word.length - 1) === 'y' &&
//       word.charAt(word.length - 2) === 'l'
//     ).length
// }

const countAdverbs = sentence =>
  sentence
    .replace(/[^a-zA-z\s]/g, '')
    .split(' ')
    .filter(word =>
      word.substr(word.length - 2) === 'ly'
    )
    .length

console.log(countAdverbs('He was happily, crazily, foolishly over the moon.'))

// countAdverbs("She ran hurriedly towards the stadium.") ➞ 1
// countAdverbs("She ate the lasagna heartily and noisily.") ➞ 2
// countAdverbs("He hates potatoes.") ➞ 0
// countAdverbs("He was happily, crazily, foolishly over the moon.") ➞ 3
