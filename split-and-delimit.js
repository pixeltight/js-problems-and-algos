// const splitAndDelimit = (str, num, del) => (
//   [...str]
//     .map((char, i) =>
//       (i + 1) % num === 0 && i + 1 < str.length
//         ? char + del
//         : char
//     )
//     .join('')
// )

const chunk = (str, size) => {
  const result = []

  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size))
    console.log(i, i + size)
  }

  return result
}

console.log(chunk('test string', 3))

const splitAndDelimit = (str, size, separator) =>
  chunk(str, size).join(separator)

// console.log(splitAndDelimit('bellow', 2, '&'))
// console.log(splitAndDelimit('magnify', 3, ':'))
// console.log(splitAndDelimit('poisonous', 2, '~'))

// splitAndDelimit("bellow", 2, "&") ➞ "be&ll&ow"
// splitAndDelimit("magnify", 3, ":") ➞ "mag:nif:y"
// splitAndDelimit("poisonous", 2, "~") ➞ "po~is~on~ou~s"
