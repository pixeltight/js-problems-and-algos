const toHex = str =>
  [...str]
    .map(char =>
      char
        .charCodeAt(0)
        .toString(16)
    )
    .join(' ')

console.log(toHex('hello world'))
console.log(toHex('Big Boi'))
console.log(toHex('Marty Poppinson'))

// toHex("hello world") ➞ "68 65 6c 6c 6f 20 77 6f 72 6c 64"
// toHex("Big Boi") ➞ "42 69 67 20 42 6f 69"
// toHex("Marty Poppinson") ➞ "4d 61 72 74 79 20 50 6f 70 70 69 6e 73 6f 6e"
