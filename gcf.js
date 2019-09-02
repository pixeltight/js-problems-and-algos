// const gcd = (num1, num2) => {
//   let comp

//   if (num1 === num2) {
//     comp = num1
//   } else if (num1 > num2) {
//     comp = gcd((num1 - num2), num2)
//   } else if (num1 < num2) {
//     comp = gcd(num1, (num2 - num1))
//   }
//   return comp
// }

// str.lastIndexOf(str.match(/\[([^)]+)\]/gi), str.length)

const gcd = (num1, num2) => {
  let comp
  comp = (num1 === num2)
    ? comp = num1
    : (num1 > num2)
      ? comp = gcd((num1 - num2), num2)
      : (num1 < num2)
        ? comp = gcd(num1, (num2 - num1))
        : null
  return comp
}

console.log(gcd(2, 6))
console.log(gcd(48, 18))

// gcd(10, 20) ➞ 10
// gcd(1, 3) ➞ 1
// gcd(5, 7) ➞ 1
// gcd(2, 6) ➞ 2
