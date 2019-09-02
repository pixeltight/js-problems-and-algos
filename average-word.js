const averageWordLength = str => {
  let avg = str
    .replace(/[^\w\s]/g, '')
    .split(' ')
    .reduce((acc, curr) => acc + curr.length, 0) / str.split(' ').length

  return +avg.toFixed(2)
}

console.log(averageWordLength('Working on my tan right now.'))

// averageWordLength("A B C.") ➞ 1.00
// averageWordLength("What a gorgeous day.") ➞ 4.00
// averageWordLength("Dude, this is so awesome!") ➞ 3.80
