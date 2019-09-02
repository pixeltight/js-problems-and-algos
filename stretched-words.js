const unstretch = word => {
  let charArr = []
  for (let char = 0; char < word.length; char++) {
    if (word[char] !== word[char - 1]) {
      charArr.push(word[char])
    }
  }
  return charArr.join('')
}

console.log(unstretch('ppoeemm'))

// unstretch("ppoeemm") ➞ "poem"
// unstretch("wiiiinnnnd") ➞ "wind"
// unstretch("ttiiitllleeee") ➞ "title"
// unstretch("cccccaaarrrbbonnnnn") ➞ "carbon"
