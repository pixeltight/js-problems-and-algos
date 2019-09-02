// const isCircleCollision = (c1, c2) => {
//   let dx = c1[1] - c2[1]
//   let dy = c1[2] - c2[2]
//   let rad = c1[0] + c2[0]
//   let distance = Math.hypot(dx, dy)
//   return distance < rad
// }

const isCircleCollision = (c1, c2) =>
  Math.hypot(
    c1[1] - c2[1],
    c1[2] - c2[2]
  ) < c1[0] + c2[0]

console.log(isCircleCollision([10, 0, 0], [10, 10, 10])) // true
console.log(isCircleCollision([10, 0, 0], [5, 0, 0])) // true
console.log(isCircleCollision([1, 0, 0], [1, 0, 0])) // true
console.log(isCircleCollision([5, 0, 0], [5, 10, 10])) // false
console.log(isCircleCollision([1, 0, 0], [1, 10, 10])) // false
