const lastDig = (a, b, c) => a % 10 * b % 10 === c % 10

console.log(lastDig(25, 21, 125))

// lastDig(25, 21, 125) ➞ true
// lastDig(55, 226, 5190) ➞ true
// lastDigit(12, 215, 2142) ➞ false
