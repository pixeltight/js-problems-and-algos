const hashPlusCount = str => {
  let hash = [...str].filter(char => char === '#').length
  let plus = [...str].filter(char => char === '+').length
  return str.split('#').join('')
}

// const hashPlusCount = str =>
//   [str.split('#').join('').length, str.split('+').join('').length]

console.log(hashPlusCount('###+'))
console.log(hashPlusCount('#+++#+#++#'))

// hashPlusCount("###+") ➞ [3, 1]
// hashPlusCount("##+++#") ➞ [3, 3]
// hashPlusCount("#+++#+#++#") ➞ [4, 6]
// hashPlusCount("") ➞ [0, 0]
