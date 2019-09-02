// const moveToEnd = (arr, el) => {
//   let subArr = arr.filter(x => x !== el)
//   let elemArr = arr.filter(x => x === el)
//   return subArr.concat(elemArr)
// }

function moveToEnd (arr, el) {
  return arr.sort((a) => a === el ? 1 : -1)
}

console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1))
console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9))
console.log(moveToEnd(['a', 'a', 'a', 'b'], 'a'))
// moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.
// moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]
// moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]
