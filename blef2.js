// Event delegate -
// event not only fires on single element but all descendants
// event bubbles up to all the parents
//

// target vs. currentTarget
// currentTarget is element with listener attached
// target is DOM element that triggered listener


// why doesn't following work as IIFE?
// function foo() {
  // i pity this code
// }()

// (function foo () {
  // i pity this code
// }())

// when to use IIFE?
// used to control variable scope
// variables from third party library


// why is it best to leave global scope of website as is and never
// touch it?
// Cannot predict future

// HOISTING
// all variables are declared at the top of function scope by js interpreter

// null is value - has to be assigned

// scope - where are we ablel to see/use the variable? --Execution Context--

// function b () {
//   console.log(myVar)
// }

// function a () {
//   var myVar = 2
//   console.log(myVar)
//   b()
// }

// var myVar = 1
// console.log(myVar)
// a()

// function wait3Seconds () {
//   var ms = 3000 + new Date().getTime
//   while (new Date() < ms) {}
//   console.log('finished function')
// }

// function clickHandler () {
//   console.log('click event')
// }

// document.addEventListener('click', clickHandler)
// wait3Seconds()
// console.log('finished execution')

// Primitive Type - data that holds single value
// boolean, number (floating point), undefined, string, null, bigint, symbol


// MDN operator precedence for js
// console.log((3 + 4) * 5)

// let a = 1,
//     b = 2,
//     c = 3

// console.log(a / b * c)

// console.log(a)
// console.log(b)
// console.log(c)

// coercion - converting a value from one type to another

// console.log(0 === '')
// console.log(Boolean(0))

var person = new Object()

person['firstName'] = 'Kima'
person['lastName'] = 'Kitty'

var firstNameProperty = 'firstName'

console.log(person)
console.log(person[firstNameProperty])

console.log(person.firstName)
