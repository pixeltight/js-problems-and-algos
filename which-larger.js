const whichIsLarger = (f, g) => (
  g() < f()
    ? 'f'
    : g() > f()
      ? 'g'
      : 'neither'
)

console.log(whichIsLarger(() => 5, () => 10))

// whichIsLarger(() => 5, () => 10) ➞ "g"
// whichIsLarger(() => 25,  () => 25) ➞ "neither"
// whichIsLarger(() => 505050, () => 5050) ➞ "f"
