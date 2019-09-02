// const factorialize = num => {
//   let factors = []
//   for (let i = 0; i <= num; i++) {
//     if (num % i === 0) {
//       factors.push(i)
//     }
//   }
//   return factors
// }

function factorialize (num) {
  return new Array(num).fill().map((_, i) => i + 1).filter(n => num % n === 0)
}

console.log(factorialize(12))
console.log(factorialize(4))
console.log(factorialize(17))

// factorize(12) ➞ [1, 2, 3, 4, 6, 12]

// factorize(4) ➞ [1, 2, 4]

// factorize(17) ➞ [1, 17]
