// const makeTitle = (str) => {
//   let words = []

//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1))
//   }

//   return words.join(' ')
// }

const makeTitle = (str) => (
  str
    .split(' ')
    .map(word => (
      word[0].toUpperCase() + word.substr(1)
    ))
    .join(' ')
)

// console.log(makeTitle('I Like Pizza'))
console.log(makeTitle('capitalize every word'))

// makeTitle("This is a title") ➞ "This Is A Title"
// makeTitle("capitalize every word") ➞ "Capitalize Every Word"
// makeTitle("I Like Pizza") ➞ "I Like Pizza"
// makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
