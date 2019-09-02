const findNemo = sentence => {
  let index = sentence.split(' ').findIndex(word => word === 'Nemo')
  return index > -1
    ? `I found Nemo at ${index + 1}!`
    : `I can't find Nemo :(`
}

console.log(findNemo('I am finding Nemo !'))
console.log(findNemo('Oh, hello !'))
console.log(findNemo('Is it Nemos, Nemona, Nemoor or Garfield?'))
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"
// findNemo("Nemo is me") ➞ "I found Nemo at 1!"
// findNemo("I Nemo am") ➞ "I found Nemo at 2!"
