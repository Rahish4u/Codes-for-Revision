/*
Q7. Write a program in JavaScript to calculate the area of a circle given its radius value of 10. Use appropriate
arithmetic operators.
*/

// Code

function calculateAreaofCircle(radius){
    const pi = Math.PI;
    return pi * radius * radius; 
}

const radius = 20;
const area = calculateAreaofCircle(radius);
console.log(`The area of the circle with radius ${radius} is: ${area.toFixed(2)}`);