const highLow = (str) => {
  let arr = str.split(' ')
  let hi = Math.max(...arr)
  let low = Math.min(...arr)
  return hi + ' ' + low
}

console.log(highLow('1 2 3 4 5'))
console.log( highLow("13"))
// highLow("1 2 3 4 5") ➞ "5 1"
// highLow("1 2 -3 4 5") ➞ "5 -3"
// highLow("1 9 3 4 -5") ➞ "9 -5"
// highLow("13") ➞ "13 13"
