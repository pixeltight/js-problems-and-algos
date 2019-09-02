const mean = arr => {
  let avg = arr.reduce((acc, curr) => acc + curr, 0) / arr.length
  return avg.toFixed(2)
}

console.log(mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]))

// mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]) ➞ 2.54
// mean([2, 3, 2, 3]) ➞ 2.50
// mean([3, 3, 3, 3, 3]) ➞ 3.00
