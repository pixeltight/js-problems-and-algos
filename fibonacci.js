// const fib = n => {
//   let arr = [0, 1]
//   for (let i = 2; i < n + 1; i++) {
//     arr.push(arr[i - 1] + arr[i - 2])
//   }
//   return arr[n]
// }

const fib = n => {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

console.log(fib(8))

// fib(0) ➞ 0
// fib(1) ➞ 1
// fib(2) ➞ 1
// fib(8) ➞ 21
