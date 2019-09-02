const flash = ([num1, op, num2]) => {
  switch (op) {
    case 'x':
      return num1 * num2
    case '+':
      return num1 + num2
    case '/':
      return num2 === 0 ? undefined : num1 / num2
    case '-':
      return num1 - num2
    default:
      return null
  }
}

// Math.round(num1/num2*100)/100;

// function flash([num1, op, num2]) {
// 	const calc = {
// 		'+': (n1,n2) => n1 + n2,
// 		'-': (n1,n2) => n1 - n2,
// 		'x': (n1,n2) => n1 * n2,
// 		'/': (n1,n2) => Number.isFinite(n1 / n2) ? 
// 										Number((n1 / n2).toFixed(2)) : 
// 										undefined
// 	}
// 	return calc[op](num1, num2)
// }

console.log(flash([3, 'x', 7]))
console.log(flash([5, '+', 7]))
console.log(flash([0, '/', 0]))
console.log(10 / 0)
// flash([3, "x", 7]) ➞ 21
// flash([5, "+", 7]) ➞ 12
// flash([10, "-", 9]) ➞ 1
// flash([10, "/", 0]) ➞ undefined
// flash([10, "/", 3]) ➞ 3.33
