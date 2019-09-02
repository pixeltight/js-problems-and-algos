const countOnes = i => i.toString(2).split('').filter(x => x === '1').length

// const toBinary = num => num.toString(2)

console.log(countOnes(100))
