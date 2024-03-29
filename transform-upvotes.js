const transformUpvotes = str => (
  str
    .replace('k', '')
    .split(' ')
    .map(str =>
      parseFloat(str) % 1 === 0
        ? parseFloat(str)
        : parseFloat(str) * 1000
    )
)

console.log(transformUpvotes('6.8k 13.5k'))
// transformUpvotes("6.8k 13.5k") ➞ [6800, 13500]
// transformUpvotes("5.5k 8.9k 32") ➞ [5500, 8900, 32]
// transformUpvotes("20.3k 3.8k 7.7k 992") ➞ [20300, 3800, 7700, 992]
