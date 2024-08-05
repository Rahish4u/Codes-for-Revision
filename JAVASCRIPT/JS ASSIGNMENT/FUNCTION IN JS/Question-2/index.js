/*
Q2. Create a JavaScript function called generateGreeting that takes a name as an argument and returns a personalized greeting message. Use this function to greet three different people.
*/

//Code

function generateGreeting(name){
    return `Hello, ${name}! Welcome!`
}

const greet1 = generateGreeting("Harry");
const greet2 = generateGreeting("Sam");
const greet3 = generateGreeting("Mice");

console.log(greet1); 
console.log(greet2);
console.log(greet3);