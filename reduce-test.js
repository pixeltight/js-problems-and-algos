const addAreas = arr => arr.reduce((acc, curr) => acc + curr[0] * curr[1], 0)

console.log(addAreas([[1, 5], [6, 3], [1, 1]]))
