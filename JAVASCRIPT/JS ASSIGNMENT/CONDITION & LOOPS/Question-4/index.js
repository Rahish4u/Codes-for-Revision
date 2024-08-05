/*
Q4. Generate numbers between any 2 given numbers.
Ex:
- const num1 = 10;
- const num2 = 25;
Output: 11, 12, 13, …., 25
*/

// Code

const num1 = 10;
const num2 = 25;
let numbers = '';

for (let i = num1 + 1; i <= num2; i++) {
  numbers += i + ', ';
}

console.log(numbers); // Output: 11, 12, 13, ..., 25

