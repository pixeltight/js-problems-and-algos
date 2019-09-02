const redundant = str => () => str

const f1 = redundant('apple')
console.log(f1())
// f1() ➞ "apple"

// const f2 = redundant("pear")
// f2() ➞ "pear"

// const f3 = redundant("")
// f2() ➞ ""
