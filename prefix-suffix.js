const isPrefix = (word, prefix) => (
  word.startsWith(prefix.slice(0, prefix.length - 1))
)

const isSuffix = (word, suffix) => (
  word.endsWith(suffix.slice(1))
)

console.log(isPrefix('automation', 'auto-'))
// console.log(isPrefix('oration', 'mega-'))
console.log(isSuffix('rhinoplasty', '-plasty'))
// isPrefix('automation', 'auto-') ➞ true
// isPrefix('superfluous', 'super-') ➞ true
// isPrefix('oration', 'mega-') ➞ false
// isPrefix('retrospect', 'sub-') ➞ false
// isSuffix('arachnophobia', '-phobia') ➞ true
// isSuffix('rhinoplasty', '-plasty') ➞ true
// isSuffix('movement', '-scope') ➞ false
// isSuffix('vocation', '-logy') ➞ false
