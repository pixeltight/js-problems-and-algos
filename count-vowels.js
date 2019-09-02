const countVowels = str => {
  let matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

// function countVowels(str) {
// 	return (str.match(/[aeiou]/ig) || []).length
// }

// const countVowels = str => {

// }

console.log(countVowels('cheesecake'))

// countVowels("apple") ➞ 2
// countVowels("cheesecake") ➞ 5
// countVowels("bbb") ➞ 0
// countVowels("") ➞ 0
