/*
Q5. Write a JavaScript function called factorial that calculates the factorial of a non-negative integer using recursion. Test the function with different inputs.
*/

//Code
// Recursive function to calculate factorial
function factorial(n) {
    // Base case: factorial of 0 or 1 is 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Recursive case: n * factorial of (n-1)
    return n * factorial(n - 1);
  }
  
  // Test the function with different inputs
  console.log(`The factorial of 0 is ${factorial(0)}`); 
  console.log(`The factorial of 1 is ${factorial(1)}`); 
  console.log(`The factorial of 3 is ${factorial(3)}`); 
  console.log(`The factorial of 9 is ${factorial(9)}`);   