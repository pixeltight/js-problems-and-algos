const sumTwoSmallestNums = arr => {
  return arr
    .filter(elem => elem >= 0)
    .sort((a, b) => a - b)
    .slice(0, 2)
    .reduce((acc, val) => acc + val)
}

// console.log(sumTwoSmallestNums([1, 1, 1, 1]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))

// sumTwoSmallestNums([19, 5, 42, 2, 77]) ➞ 7
// sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455
// sumTwoSmallestNums([2, 9, 6, -1]) ➞ 8
// sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563
// sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519

  // let min1 = Math.min(...arr)
  // let tempArr = arr.filter(x => x !== min1)
  // let min2 = Math.min(...tempArr)
  // return min2 + min1