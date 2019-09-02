const isValidPhoneNumber = str => {
  return /^\(\d{3}\) \d{3}-\d{4}$/.test(str)
}

// const isValidPhoneNumber = str => {

// }

console.log(isValidPhoneNumber('(123) 456-7890'))
console.log(isValidPhoneNumber('1111)555 2345'))
console.log(isValidPhoneNumber('098) 123 4567'))
// isValidPhoneNumber("(123) 456-7890") ➞ true
// isValidPhoneNumber("1111)555 2345") ➞ false
// isValidPhoneNumber("098) 123 4567") ➞ false
