const validateEmail = str => {
  return /\S+@\S+\.S+/.test(str)
}

console.log(validateEmail('@gmail.com'))
console.log(validateEmail('hello.gmail@com'))
console.log(validateEmail('gmail'))
console.log(validateEmail('hello@gmail'))
console.log(validateEmail('hello@edabit.com'))

// validateEmail("@gmail.com") ➞ false
// validateEmail("hello.gmail@com") ➞ false
// validateEmail("gmail") ➞ false
// validateEmail("hello@gmail") ➞ false
// validateEmail("hello@edabit.com") ➞ true
