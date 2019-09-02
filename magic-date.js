// const magicDate = str => {
//   let arr = str.split(' ')
//   return +arr[0] * +arr[1] >= 10
//     ? (+arr[0] * +arr[1] === +(arr[2].slice(arr[2].length - 2))).toString() + 'is not a magic date'
//     : (+arr[0] * +arr[1] === +(arr[2].slice(arr[2].length - 1))).toString() + 'magic date'
// }

// function Magic(str) {
// 	const [d, m, y] = str.split(' ')
// 	return y.endsWith(d * m)
// }

let [fuck,, asshole] = '1 2 4009'.split(' ')
console.log(asshole)

// const Magic = str => {
//   const [day, month, year] = str.split(' ').map(Number);

//   return String(year).endsWith(day * month);
// };

// const Magic = str => {
//   let [month, day, year] = str.split(' ').map(elem => Number(elem))
//   return year.toString().endsWith(month * day)
// }

// console.log(magicDate('1 1 2011'))

// Test.assertEquals(Magic('1 1 2011'),true,'magic date')
// Test.assertEquals(Magic('4 1 2001'),false,'is not a magic date')
// Test.assertEquals(Magic('2 4 2008'),true, 'magic date')
// Test.assertEquals(Magic('3 3 2009'),true, 'magic date')
// Test.assertEquals(Magic('5 2 2010'),true, 'magic date')
// Test.assertEquals(Magic('1 2 2011'),false, 'is not a magic date')
// Test.assertEquals(Magic('9 2 2011'),false, 'is not a magic date')
// Test.assertEquals(Magic('1 4 2011'),false, 'is not a magic date')
