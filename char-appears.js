const charAppears = (sentence, char) => (
  sentence
    .toLowerCase()
    .split(' ')
    .map(word => word
      .split('')
      .filter(letter => letter === char)
      .length
    )
)

console.log(charAppears('She sells sea shells by the seashore.', 's'))

// charAppears("She sells sea shells by the seashore.", "s")
// ➞ [1, 2, 1, 2, 0, 0, 2]
// "s" shows up once in "She", twice in "sells", once in "sea", twice in "shells", etc.

// charAppears("Peter Piper picked a peck of pickled peppers.", "P")
// ➞ [1, 2, 1, 0, 1, 0, 1, 3]
// "p" shows up once in "Peter", ... 3 times in "peppers".

// charAppears("She hiked in the morning, then swam in the river.", "t")
// ➞ [0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
