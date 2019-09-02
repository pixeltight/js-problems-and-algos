const obj = {
  a: 1,
  b: 2,
  c: 3
}

const copy = obj

copy.a = 0

console.log(obj.a)

// let total = 0
// let count = 1

// while (count <= 10) {
//   total += count
//   count += 1
//   console.log(total)
//   console.log(count)
// }
// console.log(total)

// for (let i = 0; i < 10; i++) {
//   console.log(i)
// }

// // recursion
// function printNumber (n, dec = 1) {
//   if (n === 0) {
//     return
//   }

//   console.log(n)
//   printNumber (n - dec)
// }

// printNumber(10)


