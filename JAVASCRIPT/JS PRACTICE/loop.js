// for(let i=0; i<10; i++){
//     console.log(i);
// }

/*
const str1 = '42';
const str2 = 'hello';

const numFromString1 = Number(str1);
const numFromString2 = String(str2);

console.log(numFromString1);
console.log(numFromString2);
*/

// These are the some question to Prcatice loop.

// 1. Write a loop tha prints numbers from 1 to 10.

/*
for(let i = 1; i <= 10; i++){
    console.log(i);
}
*/

// 2. Write a program to find the sum of the first `n` natural numbers, where `n` is provuded by user.
/*
let n = prompt("Enter a number:");
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log(`Sum of first ${n} natural numbers is ${sum}`);
*/

// 3. Write a loop to calculate the factorial of a given number `n`.

/*
let n = prompt("enter a number:")
let factorial = 1;
for(let i = 1; i<=n; i++){
    factorial *= i;
}
console.log(`Factorial of ${n} is ${factorial}`);
*/

// 4. write a program that prints the multiplication table for a given number `n`. 
/*
let n = prompt("enter a number")
for(let i = 1; i <= 10; i++){
    console.log(`${n} x ${i} = ${n*i}`);
}
*/

// 5. Write a loop to print all even number from 1 to 20.
/*
for (let i = 1; i <= 20; i++ ){
    if(i % 2 ===0){
        console.log(i);
    }
}

*/

// 6. Write a program that reverses a given string using a loop.
/*
let str = prompt("Enter a string:");
let reversedStr = '';
for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}
console.log(`Reversed string: ${reversedStr}`);
*/

// 6. Write a program that counts the number of vowels in a given string.

let str = prompt("enter a string")
let count = 0;
let vowels = 'aeiouAEIOU';
for (let i = 0; i <= str.length; i++){
    if(vowels.includes(str[i])){
        count++;
    }
}
console.log(`Number of vowels: ${count}`);