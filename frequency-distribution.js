// const getFrequencies = arr => {
//   const charMap = {}

//   for (let i of arr) {
//     charMap[i] = charMap[i] + 1 || 1
//   }
//   return charMap
// }

const getFrequencies = arr =>
  arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1
    return map
  }, {})

console.log(getFrequencies(["A", "B", "A", "A", "A"]))

// getFrequencies(["A", "B", "A", "A", "A"]) ➞ { A: 4, B: 1 }
// getFrequencies([1, 2, 3, 3, 2]) ➞ { "1": 1, "2": 2, "3": 2 }
// getFrequencies([true, false, true, false, false]) ➞ { true: 2, false: 3 }
// getFrequencies([]) ➞ {}
