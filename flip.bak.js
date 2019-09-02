// const flip = str => (
//   str
//     .split(' ')
//     .reverse()
//     .join(' ')
// )

const flip = ((str, spec) => {
  // if (spec === 'word') {
  //   return str
  //     .split(' ')
  //     .reduce((acc, curr) => curr + ' ' + acc, '')
  // }

  // if (spec === 'sentence') {
  //   return str
  //     .split(' ')
  //     .map(word => word.split('').reverse().join(''))
  //     .join(' ')
  // }
}

let str1 = 'Hello';
let str2 = 'There\'s never enough time to do all the nothing you want';
console.log(flip(str2, 'word'))
// flip(str1, "word") ➞ "olleH"
// flip(str1, "sentence") ➞ "Hello"
// flip(str2, "word") ➞ "s'erehT reven hguone emit ot od lla eht gnihton uoy tnaw"
// flip(str2, "sentence") ➞ "want you nothing the all do to time enough never There's"
