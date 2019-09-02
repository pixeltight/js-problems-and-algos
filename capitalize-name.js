// const capMe = arr => {
//   let capArr = []
//   arr.forEach(name => {
//     capArr.push(name[0].toUpperCase() + name.slice(1).toLowerCase())
//   })

//   return capArr
// }

const capMe = arr => {
  arr.forEach((name, index) => {
    arr[index] = name[0].toUpperCase() + name.slice(1).toLowerCase()
  })
  return arr
}

// const capMe = arr => arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())

// const capMe = (arr) => {
//   return arr.map(name => {
//     return name[0].toUpperCase() + name.slice(1).toLowerCase()
//   })
// }

// console.log(capMe(['mavis', 'senaida', 'letty']))
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))


// capMe(["mavis", "senaida", "letty"]) ➞ ["Mavis", "Senaida", "Letty"]
// capMe(["samuel", "MABELLE", "letitia", "meridith"]) ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
// capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]) ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]
