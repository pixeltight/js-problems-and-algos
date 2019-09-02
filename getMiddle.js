// const getMiddle = (str) => {
//   let char1 = str.charAt(str.length / 2)
//   let char2 = str.charAt(str.length / 2 - 1)
//   return str.length % 2 !== 0 ? char1 : char2 + char1
// }

function getMiddle (str) {
  var start = Math.ceil(str.length / 2) - 1
  console.log(str.length / 2)
  start
  var end = Math.floor(str.length / 2) + 1
  end
  return str.slice(start, end)
}

console.log(getMiddle('testing'))
// getMiddle("test") ➞ "es"
// getMiddle("testing") ➞ "t"
// getMiddle("middle") ➞ "dd"
// getMiddle("A")
