const largestSwap = num => {
  let swap = +(num.toString().split('').reverse().map(Number).join(''))
  return num > swap || num === swap
}

console.log(largestSwap(27))
console.log(largestSwap(43))
console.log(largestSwap(99))

// largestSwap(27) ➞ false
// largestSwap(43) ➞ true
