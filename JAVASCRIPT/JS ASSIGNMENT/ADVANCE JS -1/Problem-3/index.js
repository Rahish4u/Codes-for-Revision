/*
Problem-3
You are given an array of numbers named myArray. Create a function that takes any number of arguments and adds them to the existing array. Use the spread and rest operator.
*/

// Solution Code:

function addNumbersToArray(...numbers){
    myArray.push(...numbers)
}

const myArray = [1,2,3];
addNumbersToArray (4,5,6)
console.log(myArray);
