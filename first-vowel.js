// const firstVowel = str => str.indexOf(str.match(/[aeiou]/i))

// const firstVowel = str => str.search(/[aeiou]/i)

const firstVowel = str => str.match(/[aeiou]/i).index

console.log(firstVowel('apple'))
console.log(firstVowel('hello'))
console.log(firstVowel('STRAWBERRY'))
console.log(firstVowel('pInEaPPLe'))

// firstVowel("apple") ➞ 0
// firstVowel("hello") ➞ 1
// firstVowel("STRAWBERRY") ➞ 3
// firstVowel("pInEaPPLe") ➞ 1
