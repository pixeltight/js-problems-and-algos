const percentDiff = (num1, num2) => (
  +(Math.abs(num1 - num2) / ((num1 + num2) / 2) * 100).toFixed(1)
)

console.log(percentDiff(60, 100))
console.log(percentDiff(10, 5))
// percentDiff(60, 100) ➞ 50.0
// percentDiff(10, 5) ➞ 66.7
