const isPrime = num => {
  if (num === 1 || (num > 2 && num % 2 === 0)) {
    return false
  }
  for (let i = 3; i < num; i += 2) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

console.log(isPrime(7))
