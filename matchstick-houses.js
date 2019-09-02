// const matchHouses = step =>
//   step === 0
//     ? step * 6
//     : 6 * step - (step - 1)

const matchHouses = step =>
  step === 0
    ? 0
    : 5 * step + 1

console.log(matchHouses(1))
console.log(matchHouses(2))
console.log(matchHouses(4))

// matchHouses(1) ➞ 6
// matchHouses(4) ➞ 21 
// matchHouses(87) ➞ 436
