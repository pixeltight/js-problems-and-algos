const charCount = (myChar, str) =>
  [...str].filter(char => char === myChar).length

console.log(charCount('b', 'big fat bubble'))

// charCount("a", "edabit") ➞ 1
// charCount("c", "Chamber of secrets") ➞ 1
// charCount("b", "big fat bubble") ➞ 4
