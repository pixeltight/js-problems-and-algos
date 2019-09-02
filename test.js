const edaBit = (start, end) => {
  let opArr = []
  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      opArr.push('EdaBit')
    } else if (i % 3 === 0) {
      opArr.push('Eda')
    } else if (i % 5 === 0) {
      opArr.push('Bit')
    } else if (i === 0) {
      opArr.push(0)
    } else {
      opArr.push(i)
    }
  }
  return opArr
}

console.log(edaBit(0, 10))
console.log(edaBit(14, 20))
console.log(edaBit(-10, 5))
