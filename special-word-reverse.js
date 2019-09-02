const specialReverse = (s, c) => (
  s
    .split(' ')
    .map(word =>
      [...word].includes(c)
        ? [...word].reverse().join('')
        : word
    )
    .join(' ')
)

console.log(specialReverse('word searches are super fun', 's'))
console.log(specialReverse('first man to walk on the moon', 'm'))

// specialReverse("word searches are super fun", "s")
// ➞ "word sehcraes are repus fun"
// specialReverse("first man to walk on the moon", "m")
// ➞ "first nam to walk on the noom"
// specialReverse("peter piper picked pickled peppers", "p")
// ➞ "retep repip dekcip delkcip sreppep"
