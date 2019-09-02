// const isPalindrome = str => {
//   let strLen = str.length
//   if (strLen === 0 || strLen === 1) {
//     return true
//   }

//   if (str[0] === str[strLen - 1]) {
//     return isPalindrome(str.slice(1, strLen - 1))
//   }

//   return false
// }

// console.log(isPalindrome('abcba'))

// let str = 'kima'
// let strLen = str.length
// console.log(str.slice(1, strLen - 1))

// isPalindrome("abcba") ➞ true
// isPalindrome("b") ➞ true
// isPalindrome("") ➞ true
// isPalindrome("ad") ➞ false

const isPalindrome = str => {
  if (str.length === 0 || str.length === 1) {
    return true
  }
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  }
  return false
}
