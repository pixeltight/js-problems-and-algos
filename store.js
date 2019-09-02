const prepArr = arr => {
  let preppedArr = []
  preppedArr.push(arr[0] * 25)
  preppedArr.push(arr[1] * 10)
  preppedArr.push(arr[2] * 5)
  preppedArr.push(arr[3] * 1)

  return preppedArr
}

const changeEnough = (arr, amount) => {
  let changeAmount = prepArr(arr)
  changeAmount = changeAmount.reduce((prev, current) => parseInt((prev + current)), 0)
  return changeAmount / 100 >= amount ? true : false
}

// console.log(changeEnough([30, 40, 20, 5], 12.55))
