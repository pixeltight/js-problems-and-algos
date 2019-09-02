const flipEndChars = str => {
  if (str.length < 2 || typeof (str) !== 'string') {
    return 'Incompatible.'
  } else if (str.charAt(0) === str.charAt(str.length - 1)) {
    return 'Two\'s a pair.'
  } else {
    return (
      str.charAt(str.length - 1) +
      str.slice(1, str.length - 1) +
      str.charAt(0)
    )
  }
}

console.log(flipEndChars('Cat, dog, and mouse.'))
console.log(flipEndChars('aDa'))
// flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"
