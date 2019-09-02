const howManyTimes = msg => {
  return msg
    .split('')
    .map(char => char.charCodeAt() - 96)
    .reduce((acc, curr) => {
      return acc + curr
    }, 0)
}

console.log(howManyTimes('azy'))
// howManyTimes("abde") ➞ 12
// howManyTimes("azy") ➞ 52
// howManyTimes("qudusayo") ➞ 123
