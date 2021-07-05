/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Function declaration: classic declaration
function doSomeMath(a, b) {
  let c = a + b;
  return c;
}

// Function expression: this is a preferred way of declaring a function because they are block scoped and can't be overwritten
// because of the use of const
const doMoreMath = function (a = 3, b = 2) {
  let c = a * b;
  return c;
};

console.log("Do some math:", doSomeMath(5, 6));
console.log("Do more math:", doMoreMath(5, 6));

// Immediately Invoked Function Expression (IIFE): these type of functions run as soon as the browser encounters them.
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();
