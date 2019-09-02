const sumOfEvens = arr => {
  let sum = 0
  arr.forEach(subArr => {
    sum += subArr
      .filter(elem => elem % 2 === 0)
      .reduce((prev, curr) => prev + curr, 0)
  })
  return sum
}

console.log(sumOfEvens([[1, 0, 2],
  [5, 5, 7],
  [9, 4, 3]
]))
