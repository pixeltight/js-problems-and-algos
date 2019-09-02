const countPosSumNeg = arr => {
  if (!Array.isArray(arr)) {
    return []
  }
  if (arr.length === 0) {
    return []
  }
  let posArr = []
  let negArr = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negArr.push(arr[i])
    }
    if (arr[i] > 0) {
      posArr.push(arr[i])
    }
  }
  let negSumArr = negArr.reduce((acc, curr) => acc + curr, 0)
  return [posArr.length, negSumArr]
}

console.log(countPosSumNeg([91, -4, 80, -73, -28]))

// countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]) ➞ [10, -65]
// countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]) ➞ [7, -252]
// countPosSumNeg([91, -4, 80, -73, -28]) ➞ [2, -105]
// countPosSumNeg(null) ➞ []
// countPosSumNeg([]) ➞ []
