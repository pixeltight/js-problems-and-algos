// const formatPhoneNumber = numbers => {
//   let str = numbers.join('')
//   let areaCode = '(' + str.slice(0, 3) + ') '
//   let exchange = str.slice(3, 6) + '-'
//   let id = str.slice(-4)
//   return areaCode + exchange + id
// }

// const formatPhoneNumber = numbers => {
//   numbers.splice(0, 0, '(')
//   numbers.splice(4, 0, ') ')
//   numbers.splice(8, 0, '-')
//   return numbers.join('')
// }

// function formatPhoneNumber (numbers) {
//   let masked = '(###) ###-####'
//   numbers.forEach(v => masked = masked.replace('#', v))
//   return masked
// }

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))

// formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"
// formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]) ➞ "(519) 555-4468"
// formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]) ➞ "(345) 501-2527"
