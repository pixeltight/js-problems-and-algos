const isIsogram = str => str.length === [...new Set(str.toLowerCase())].length

console.log(isIsogram('PasSword'))

// isIsogram("Algorism") ➞ true
// isIsogram("PasSword") ➞ false (not case sensitive)
// isIsogram("Consecutive") ➞ false
