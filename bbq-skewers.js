const bbqSkewers = grill => {
  let xArr = grill.filter(str => str.includes('x')).length
  let oArr = grill.length - xArr
  return [oArr, xArr]
}

console.log(bbqSkewers([
  '--oooo-ooo--',
  '--xx--x--xx--',
  '--o---o--oo--',
  '--xx--x--ox--',
  '--xx--x--ox--'
]))

// bbqSkewers( [
//   "--oooo-ooo--",
//   "--xx--x--xx--",
//   "--o---o--oo--",
//   "--xx--x--ox--",
//   "--xx--x--ox--"
// ]) ➞ [2, 3]

// bbqSkewers([
//   "--oooo-ooo--",
//   "--xxxxxxxx--",
//   "--o---",
//   "-o-----o---x--",
//   "--o---o-----"
// ]) ➞ [3, 2]
