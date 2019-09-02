const flip = (str, spec) => {
  if (spec === 'sentence') {
    return str
      .split(' ')
      .reverse()
      .join(' ')
  }

  if (spec === 'word') {
    return str
      .split(' ')
      .map(word => word.split('').reverse().join(''))
      .join(' ')
  }
}

// const flip = (str, spec) =>
//   spec === 'word'
//     ? str
//         .split(' ')
//         .map(word => word.split('').reverse().join(''))
//         .join(' ')
//     : str
//         .split(' ')
//         .reverse()
//         .join(' ');

let str1 = 'Hello'
let str2 = 'There\'s never enough time to do all the nothing you want'

console.log(flip(str1, 'word'))
console.log(flip(str1, 'sentence'))
console.log(flip(str2, 'word'))
console.log(flip(str2, 'sentence'))
