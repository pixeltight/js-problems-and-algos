const formatNum = num => {
  return num.toLocaleString('en-US', 'currency')
}

console.log(formatNum(1000))
// formatNum(1000) ➞ "1,000"
// formatNum(100000) ➞ "100,000"
// formatNum(20) ➞ "20"
