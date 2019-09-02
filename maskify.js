// const maskify = str => {
//   if (str.length < 4) {
//     return str
//   }
//   let arr1 = str
//     .split('')
//     .slice(0, str.length - 4)
//     .map(char => '#')
//   let arr2 = str
//     .split('')
//     .slice(str.length - 4, str.length)

//   return arr1.concat(arr2).join('')
// }

function maskify(str) {
  var mask = "";
  for (var i = 0; i < str.length-4; i++){
    mask += "#";
  }
  return mask += str.substring(str.length-4, str.length);
}

function maskify(str) {
  var arr = str.split("");
  if (str.length > 4) {
    for(var i=0; i<str.length-4; i++)
      arr[i] = '#';
  }
  return arr.join("");
}

// function maskify (str) {
//   var len = str.length

//   if (len < 5) {
//     return str
//   }

//   return str.split('').map(function (val, idx) {
//     return (len - idx < 5) ? val : '#'
//   }).join('')
// }

// console.log(maskify('4556364607935616'))
console.log(maskify('1'))
console.log(maskify(''))

// maskify("4556364607935616") ➞ "############5616"
// maskify("64607935616") ➞ "#######5616"
// maskify("1") ➞ "1"
// maskify("")
