const uniqueSort = arr => [...new Set(arr)].sort((a, b) => a - b)


console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]))

// uniqueSort([1, 2, 4, 3]) ➞ [1, 2, 3, 4]
// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) ➞ [1, 2, 3, 4]
// uniqueSort([6, 7, 3, 2, 1]) ➞ [1, 2, 3, 6, 7]
