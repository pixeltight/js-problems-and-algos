const checkEquals = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false
  }
  return arr1.every((value, index) => value === arr2[index])
}

console.log(checkEquals([1, 2], [1, 3]))
console.log(checkEquals([1, 2], [1, 2]))
console.log(checkEquals([1, 2], [2, 1]))
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
console.log(checkEquals([4, 7, 6], [4, 5, 6]))

// checkEquals([1, 2], [1, 3]) ➞ false
// checkEquals([1, 2], [1, 2]) ➞ true
// checkEquals([4, 5, 6], [4, 5, 6]) ➞ true
// checkEquals([4, 7, 6], [4, 5, 6]) ➞ false
