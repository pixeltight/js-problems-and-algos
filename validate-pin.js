const validatePIN = str => {
  return (str.length === 4 || str.length === 6) && /^\d+$/.test(str)
}

console.log(validatePIN(''))

// validatePIN("1234") ➞ true
// validatePIN("12345") ➞ false
// validatePIN("a234") ➞ false
// validatePIN("") ➞ false
