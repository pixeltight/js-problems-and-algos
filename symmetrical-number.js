const isSymmetrical = num =>
  num === parseInt(num.toString().split('').reverse().join(''))

console.log(isSymmetrical(7227))

// isSymmetrical(7227) ➞ true
// isSymmetrical(12567) ➞ false
// isSymmetrical(44444444) ➞ true
// isSymmetrical(9939) ➞ false
// isSymmetrical(1112111) ➞ true
