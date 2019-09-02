const profit = obj => {
  let { costPrice, sellPrice, inventory } = obj
  return Math.round((sellPrice - costPrice) * inventory)
}

console.log(
  profit({
    costPrice: 32.67,
    sellPrice: 45.00,
    inventory: 1200
  })
)

// profit({
//   costPrice: 32.67,
//   sellPrice: 45.00,
//   inventory: 1200
// }) ➞ 14796

// profit({
//   costPrice: 225.89,
//   sellPrice: 550.00,
//   inventory: 100
// }) ➞ 32411

// profit({
//   costPrice: 2.77,
//   sellPrice: 7.95,
//   inventory: 8500
// }) ➞ 44030
