// const keysAndValues = obj => {
//   let sortedArr = []
//   let keysArr = Object.keys(obj)
//   let objArr = []
//   for (let val in obj) {
//     objArr.push(obj[val])
//   }

//   sortedArr.push(keysArr, objArr)
//   return sortedArr
// }

function keysAndValues(obj) {
  var keys = Object.keys(obj);
  return [keys, keys.map( key => obj[key] )];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }))

// keysAndValues({ a: 1, b: 2, c: 3 })
// ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined })
// ➞ [["key1", "key2", "key3"], [true, false, undefined]]
