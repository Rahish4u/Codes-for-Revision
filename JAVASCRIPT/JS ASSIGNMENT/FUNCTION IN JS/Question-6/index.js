/*
Q6. Write a JavaScript function called curry that takes a function as an argument and returns a curried version of that function. The curried function should accept arguments one at a time and return a new function until all arguments are provided. Then, it should execute the original function with all arguments. Test the curry function with a function that adds two numbers.
*/

// Code

// Curry function implementation
function curry(fn) {
  // Helper function to handle arguments and recursion
  function curried(...args) {
    if (args.length >= fn.length) {
      // If enough arguments are provided, call the original function
      return fn(...args);
    } else {
      // Otherwise, return a new function that collects more arguments
      return (...moreArgs) => curried(...args, ...moreArgs);
    }
  }
  return curried;
}

// Test the curry function with an addition function
function add(a, b) {
  return a + b;
}

// Create a curried version of the add function
const curriedAdd = curry(add);

// Test the curried function
console.log(curriedAdd(2)(3)); // Output: 5
console.log(curriedAdd(10)(20)); // Output: 30
