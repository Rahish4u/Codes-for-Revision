/*
Problem-1
Create a Map in JavaScript and perform the following operations:

Add key-value pairs to the Map.
Check if a specific key exists.
Retrieve the value associated with a given key.
Iterate through all key-value pairs.
*/

// Solution Code:

// Create a Map
const myMap = new Map();

// Add key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Check if a specific key exists
console.log(myMap.has('name')); // Output: true
console.log(myMap.has('country')); // Output: false

// Retrieve the value associated with a given key
console.log(myMap.get('age')); // Output: 30

// Iterate through all key-value pairs
for (const [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}