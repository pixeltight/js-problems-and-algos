const shortestDistance = str => {
  let arr = str.split(',')
  let distance = Math.hypot((arr[0] - arr[2]), (arr[1] - arr[3]))
  return Math.round(distance * 100) / 100
}

console.log(shortestDistance('1,1,2,1'))
// console.log(shortestDistance('1,1,3,1'))
// console.log(shortestDistance('-5,1,3,1'))
// console.log(shortestDistance('-5,2,3,1'))

// shortestDistance("1,1,2,1") ➞ 1
// shortestDistance("1,1,3,1") ➞ 2
// shortestDistance("-5,1,3,1") ➞ 8
// shortestDistance("-5,2,3,1") ➞ 8.06
