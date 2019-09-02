// const isPrime = num => {
//   let prime = 0
//   let s = Math.sqrt(num)
//   if (num === 1) {
//     return false
//   }
//   for (let i = 2; i < s; i++) {
//     if (num % i === 0) {
//       prime += 1
//     }
//   }
//   return prime === 0
// }

function isPrime(num) {
	if (num == 1 || num % 2 == 0) return false;
	for (let i = 3; i < num; i += 2){
		if (num % i == 0) return false;  
	}
	return true;
}

console.log(isPrime(31))
console.log(isPrime(18))
console.log(isPrime(21))

// isPrime(31) ➞ true
// isPrime(18) ➞ false
// isPrime(11) ➞ true
