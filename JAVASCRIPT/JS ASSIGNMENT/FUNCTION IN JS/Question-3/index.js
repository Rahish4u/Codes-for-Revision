/*
Q3. Create an IIFE (Immediately Invoked Function Expression) that calculates the square of a number and immediately displays the result.
*/

//Code

(function (number){
    const result = number * number;
    console.log(`The square of ${number} is ${result}`);
})(20);