/*
Problem-5
Create a simple polyfill for the Array.includes method by the name of customIncludes.
*/

// Solution Code:

// Define the customIncludes function if it doesn't already exist
if (!Array.prototype.customIncludes) {
  Array.prototype.customIncludes = function (element) {
    // Loop through the array
    for (let i = 0; i < this.length; i++) {
      // If the current element matches the one we are looking for, return true
      if (this[i] === element) {
        return true;
      }
    }
    // If the element is not found, return false
    return false;
  };
}

let numbers = [1, 2, 3, 4, 5];

console.log(numbers.customIncludes(3)); // true
console.log(numbers.customIncludes(6)); // false

