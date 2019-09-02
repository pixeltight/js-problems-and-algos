const puzzlePieces = (a1, a2) => {
  if (a1.length !== a2.length) {
    return false
  }
  let comparisonArr = a1.map((_, index) => a1[index] + a2[index])
  return new Set(comparisonArr).size === 1
}

console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]))
console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]))

// puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// Both arrays sum to [5, 5, 5, 5]
// puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true
// puzzlePieces([1, 2], [-1, -1]) ➞ false
// puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false
