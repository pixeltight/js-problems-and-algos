const reverseCase = str =>
  [...str]
    .map(char =>
      char === char.toUpperCase()
        ? char.toLowerCase()
        : char.toUpperCase()
    )
    .join('')

console.log(reverseCase('Happy Birthday'))
console.log(reverseCase('MANY THANKS'))
console.log(reverseCase('sPoNtAnEoUs'))

// reverseCase("Happy Birthday") ➞ "hAPPY bIRTHDAY"
// reverseCase("MANY THANKS") ➞ "many thanks"
// reverseCase("sPoNtAnEoUs") ➞ "SpOnTaNeOuS"
