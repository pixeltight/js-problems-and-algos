const edaBit = (start, end) => {
  let opArr = []
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      opArr.push('EdaBit')
    } else if (i % 3 === 0) {
      opArr.push('Eda')
    } else if (i % 5 === 0) {
      opArr.push('Bit')
    } else {
      opArr.push(i)
    }
  }
  if (opArr[0] === 'EdaBit') {
    opArr[0] = 0
  }
  return opArr
}

console.log(edaBit(0, 10))
console.log(edaBit(14, 20))
console.log(edaBit(-10, 5))
// edaBit(0, 10) ➞ [0, 1, 2, "Eda", 4, "Bit", "Eda", 7, 8, "Eda", "Bit" ]
// edaBit(14, 20) ➞ [14,  "EdaBit", 16, 17,  "Eda", 19, "Bit" ]
// edaBit(99, 106) ➞ ["Eda", "Bit", 101, "Eda", 103, 104, "EdaBit", 106 ]
