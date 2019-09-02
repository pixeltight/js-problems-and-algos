const doubleChar = str =>
  [...str].map(char => char + char).join('')

console.log(doubleChar('String'))
