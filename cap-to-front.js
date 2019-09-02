// const capToFront = str => {
//   const capArr = []
//   const lowerArr = []

//   for (let i of str) {
//     if (i === i.toUpperCase()) {
//       capArr.push(i)
//     } else {
//       lowerArr.push(i)
//     }
//   }
//   return capArr.concat(lowerArr).join('')
// }

const capToFront = str => {
  let capStr = ''
  let lowerStr = ''

  for (let i of str) {
    if (i === i.toUpperCase()) {
      capStr += i
    } else {
      lowerStr += i
    }
  }
  return capStr + lowerStr
}

// const capToFront = s =>
//   [...s].filter(char => char === char.toUpperCase()).join('') +
//     [...s].filter(char => char === char.toLowerCase()).join('')
console.log(capToFront('moveMENT'))

// capToFront("hApPy") ➞ "APhpy"
// capToFront("moveMENT") ➞ "MENTmove"
// capToFront("shOrtCAKE") ➞ "OCAKEshrt"
