/*Q-5. Write a JavaScript program that calculates the simple interest using the formula Simple interest =
(principal * rate * time) / 100.
*/

// Code

function calculateSimpleInterest(principal, rate, time){
    return (principal * rate * time) / 100;
}

const principal = 2000;
const rate = 5; 
const time = 2; 

const simpleInterest = calculateSimpleInterest(principal, rate, time);
console.log(`The simple interest is : ${simpleInterest}`);