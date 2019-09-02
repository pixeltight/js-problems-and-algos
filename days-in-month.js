const days = (month, year) => new Date(year, month, 0).getDate()

console.log(days(2, 12))

// days(2, 2018) ➞ 28
// days(3, 2011) ➞ 31
// days(4, 654) ➞ 30
// days(2, 2020) ➞ 29
// days(2, 200) ➞ 28
// days(2, 1000) ➞ 29
