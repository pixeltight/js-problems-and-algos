const isValidIP = str => (
  str === str.trim() &&
  /0-9/g.test(str) &&
  str.split('.').length === 4 &&
  str.split('.').filter(char => char.includes(' ')).length === 0 &&
  str.split('.').filter(char => char.length > 1 && char.slice(0, 1) === '0').length === 0 &&
  str.split('.').filter(char => +char >= 0 && +char <= 255).length === 4
)

console.log(isValidIP("12.0.56.1"))
console.log(isValidIP("1e0.1e0.1e0.1e0"))
// isValidIP("1.2.3.4") ➞ true
// isValidIP("1.2.3") ➞ false
// isValidIP("1.2.3.4.5") ➞ false
// isValidIP("123.45.67.89") ➞ true
// isValidIP("123.456.78.90") ➞ false
// isValidIP("123.045.067.089") ➞ false

//

console.log(Number.isNaN(1e0))
