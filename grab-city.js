const grabCity = str => str.slice(str.lastIndexOf('[') + 1, str.lastIndexOf(']'))

// function grabCity(str) {
//   return str.slice(str.lastIndexOf('[') + 1, str.lastIndexOf(']'))
// }

console.log(grabCity('[Last Day!] Beer Festival [Munich]'))
console.log(grabCity('Cheese Factory Tour [Portland]'))
console.log(grabCity('[Duration: 7 hours] Tour of the Maritimes [Prince Edward Island]'))
console.log(grabCity('[5 Stars] Traditional Gondola Experience [Venice]'))
console.log(grabCity('[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]'))
console.log(grabCity('[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]'))
