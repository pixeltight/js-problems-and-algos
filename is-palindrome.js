const cleanString = string => string.replace(/[^\w]/g, '').toLowerCase()

const isPalindrome = str => cleanString(str) === cleanString(str).split('').reverse().join('')

console.log(isPalindrome('A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!'))

// isPalindrome("Neuquen") ➞ true
// isPalindrome("Not a palindrome") ➞ false
// isPalindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!") ➞ true
