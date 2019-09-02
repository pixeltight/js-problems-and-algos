// const removeSmallest = arr => {
//   let min = Math.min(...arr)
//   let index = arr.findIndex(num => num === min)
//   arr.splice(index, 1)
//   return arr
// }

const removeSmallest = arr => {
  arr.splice(arr.indexOf(Math.min(...arr)), 1)
  return arr
}

console.log(removeSmallest([1, 2, 3, 4, 5]))
console.log()
// removeSmallest([1, 2, 3, 4, 5] ) ➞ [2, 3, 4, 5]
// removeSmallest([5, 3, 2, 1, 4]) ➞ [5, 3, 2, 4]
// removeSmallest([2, 2, 1, 2, 1]) ➞ [2, 2, 2, 1]
