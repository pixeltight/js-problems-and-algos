const isAutomorphic = n => Math.pow(n, 2).toString().endsWith(n)

console.log(isAutomorphic(76))

// isAutomorphic(5) ➞ true
// isAutomorphic(8) ➞ false
// isAutomorphic(76) ➞ true
