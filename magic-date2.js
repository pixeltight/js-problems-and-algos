const Magic = str => {
  let [month, day, year] = str.split(' ').map(elem => Number(elem))
  return year.toString().endsWith(month * day)
}

console.log(Magic('1 1 1001'))
