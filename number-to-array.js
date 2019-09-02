const toArray = num => {
  return num.toString().split('').map(Number)
}

const toNumber = arr => arr.join('')

console.log(toArray(235))
console.log(toArray(0))

console.log(toNumber([2, 3, 5]))
console.log(toNumber([0]))

// toArray(235) ➞ [2, 3, 5]
// toArray(0) ➞ [0]
// toNumber([2, 3, 5]) ➞ 235
// toNumber([0]) ➞ 0
