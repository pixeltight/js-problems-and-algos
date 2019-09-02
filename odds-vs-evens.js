// const oddsVsEvens = num => {
//   let oddArr = 0
//   let evenArr = 0

//   let newArr = num.toString().split('')
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] % 2 === 0) {
//       evenArr += Number(newArr[i])
//     } else {
//       oddArr += Number(newArr[i])
//     }
//   }

//   if (evenArr > oddArr) {
//     return 'even'
//   } else if (evenArr < oddArr) {
//     return 'odd'
//   } else {
//     return 'equal'
//   }
// }

const oddsVsEvens = num => {
  let arr = num
    .toString()
    .split('')
    .map(char => parseInt(char))

  let odds = arr
    .filter(digit => digit % 2 !== 0)
    .reduce((acc, curr) => acc + curr, 0)

  let evens = arr
    .filter(digit => digit % 2 === 0)
    .reduce((acc, curr) => acc + curr, 0)

  return odds > evens
    ? 'odd'
    : odds < evens
      ? 'even'
      : 'equal'
}

// console.log(oddsVsEvens(97428))
// console.log(oddsVsEvens(81961))
console.log(oddsVsEvens(54870))
