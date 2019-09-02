const sortByLength = arr => (
  arr.sort((a, b) => a.length - b.length)
)

console.log(sortByLength(['Google', 'Apple', 'Microsoft']))

// sortByLength(["Google", "Apple", "Microsoft"])
// ➞ ["Apple", "Google", "Microsoft"]
// sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
// ➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// sortByLength(["Turing", "Einstein", "Jung"])
// ➞ ["Jung", "Turing", "Einstein"]
