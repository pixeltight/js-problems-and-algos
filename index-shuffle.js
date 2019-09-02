const indexShuffle = str => (
  [...str].filter((char, i) => i % 2 === 0).join('') +
    [...str].filter((char, i) => i % 2 !== 0).join('')
)

console.log(indexShuffle('abcdefg'))
console.log(indexShuffle('holiday'))
console.log(indexShuffle('maybe'))

// indexShuffle("abcdefg") ➞ "acegbdf"
// indexShuffle("holiday") ➞ "hldyoia"
// indexShuffle("maybe") ➞ "myeab"
