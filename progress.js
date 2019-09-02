// function converter () {
//   var i
//   var cats = new Array()
//   cats[0] = 'jaguar'
//   cats[1] = 'cougar'
//   cats[2] = 'puma'
//   cats[3] = 'panther'

//   console.log(cats)
//   for (i of cats) {
//     if (i === 'puma') {
//       cats[i] = 'lynx'
//     } else if (i === 'lynx') {
//       i = 'pinto'
//     } else {
//       i = 'stingray'
//     }
//   }

// for (let i in cats) {
//   switch (i) {
//     case 'puma':
//       cats[i] = 'lynx'
//       break
//     case 'lynx':
//       i = 'pinto'
//       break
//     default:
//       i = 'stingray'
//   }
// }

// for (let [i, el] of cats.entries()) {
//   console.log(i, el)
//   if (i === 'panther') {
//     console.log(cats[i])
//   }
// }

// return cats.entries
//   return cats
// }

// console.log(converter())

const progressDays = (runs) => {
  let count = 0
  for (let i = 1; i < runs.length; i++) {
    if (runs[i] > runs[i - 1]) {
      count += 1
    }
  }

  return count
}

console.log(progressDays([3, 4, 1, 2]))
console.log(progressDays([10, 11, 12, 9, 10]))
console.log(progressDays([6, 5, 4, 3, 2, 9]))
console.log(progressDays([9, 9, 9]))
// progressDays([3, 4, 1, 2]) ➞ 2
// There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]) ➞ 3

// progressDays([6, 5, 4, 3, 2, 9]) ➞ 1

// progressDays([6, 5, 4, 3, 2, 9])  ➞ 0
