const countVowels = str => {
  let match = str.match(/[aeiou]/gi)
  return match ? match.length : 0
}
console.log(countVowels('zzygxldmmd'))

// countVowels("Celebration") ➞ 5
// countVowels("Palm") ➞ 1
// countVowels("Prediction") ➞ 4
