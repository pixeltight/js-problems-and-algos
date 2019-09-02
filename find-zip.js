const findZip = str => {
  let searchTerm = 'zip'
  let indexOfFirst = str.indexOf(searchTerm)
  return str.indexOf(searchTerm, indexOfFirst + 1)
}

console.log(findZip('all zip files are compressed'))

// findZip("all zip files are zipped") ➞ 18
// findZip("all zip files are compressed") ➞ -1
