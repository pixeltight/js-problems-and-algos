const removeVowels = str =>
  str.replace(/[aeiou]/gi, '')

// function removeVowels(str) {
//   return str.split("").filter(char => 'aeiouAEIOU'.indexOf(char) < 0).join("")
// }

console.log(removeVowels('I have never seen a thin person drinking Diet Coke.'))
