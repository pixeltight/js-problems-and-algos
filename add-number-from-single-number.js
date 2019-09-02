// const addUp = num => {
//   let sum = 0
//   for (let i = 0; i <= num; i++) {
//     sum += i
//   }
//   return sum
// }

const addUp = num => {
  return (num * (num + 1) / 2)
}

// const addUp = num => {
//   let sum = num
//   while (num > 0) {
//     num--
//     sum += num
//   }
//   return sum
// }

// const addUp = num =>
//   num === 1 ? 1 : num + addUp(num - 1)

console.log(addUp(4))
console.log(addUp(13))
