// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse (str) {
//   let reversed = ''

//   for (let character of str) {
//     reversed = character + reversed
//   }

//   return reversed
// }

// const reverse = (str) => str.split('').reduce((rev, char) => (char + rev), '')

function reverse (str) {
//   debugger
  str.split('').reduce((rev, char) => {
    return rev + char
  }, '')
}
// function reverse(str) {
//   let reversed = ''
//   for (let character of str) {
//     reversed = character + reversed
//     debugger
//   }

//   return reversed
// }

console.log(reverse('asdf'))

// module.exports = reverse

// function reverse(str) {
//   return str.split('')
//     .reverse()
//     .join('');
// }

// reverse('kima')
