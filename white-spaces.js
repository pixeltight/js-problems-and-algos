// const insertWhitespace = str => {
//   return str.replace(/([A-Z])/g, ' $1').trim()
// }

const insertWhitespace = s => (
  [...s]
    .map(char => char === char.toUpperCase() ? ' ' + char : char)
    .join('')
    .trim()
)

console.log(insertWhitespace('SheWalksToTheBeach'))

// insertWhitespace("SheWalksToTheBeach") ➞ "She Walks To The Beach"
// insertWhitespace("MarvinTalksTooMuch") ➞ "Marvin Talks Too Much"
// insertWhitespace("TheGreatestUpsetInHistory") ➞ "The Greatest Upset In History"
