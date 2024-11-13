// 1. Global Scope
// Global scope variable can be accesible from anywhere in the program.

/*
let x = 20;

function fun(){
    console.log(x);
}

function glob(){
    for(let i =0; i<x; i++){}
       
}

fun();
glob();
console.log("Value of x is", x);
*/

// 2. Function Scope
// Function scope means, visibility of a variable is only inside the function where variable hasbeen defined, we cannot access it outside of funtion.


/*
function ins(){
    let a = 10;
    console.log(a);
}
ins();
*/

// 3. Block Scope
/* wherever we define a pair of curly braces, may be with if-else, while-loop, for-loop etc.
or may be without anything, it creates something called  block.
what is block? 
Block is a collection of a valid Javascript instructions enclosed in a pair of curly braces. 
*/

/*
{
    let x = 20;
    console.log(x);
}

console.log(x);
*/

// Deep dive in the way to define variable 

// Any variable used only in two ways:
/* RHS-> i.e. when we consume the variable
    LHS-> i.e. when we assign value or declare the variable

    For Example:
    var x = 99; // LHS - we are assigning it a value
    console.log(x); // RHS - we are consuming the vlaue of a variable
*/

// Var
/*
var helps us to define global and function scoped variables. 
we can not make a block scopped variable with var.
*/

/*
var teacher = "Gaurav Thadani";
function fun(){
    var teacher = "Alakh Pandey";
    console.log("Hello", teacher);
}

function gun(){
    var student = "Rahish";
    console.log(student, teacher);
}

fun();
gun();
*/

/*
"use strict" // it will stopped to make auto glabal mode
var teacher = "Gaurav Thadani";
function fun(){
    teacher = "Alakh Pandey";
    content = "JavaScript"
    console.log("wow", content, teacher);
}
console.log(teacher);
// console.log(content);
fun();
console.log(content);
*/

// var x = 10;
// console.log(x,y);
// if (true){
//     var x = 20;
//     var y = 30;
//     console.log(x, y);
// }
// console.log(x,y);

// let

// let and const work in similiar way when we talk about the scope perspective.
/* 
In a Block scoped variable we cannot access the variable before the initialization.
This makes block scoped variable special. and region before the declaration 
of the block scoped variable is called Temporal Dead Zone(TDZ).
*/

// function run(){
//     console.log(x); 
//     const x =10 ;
//     console.log(x);
// }
// run();
// when we give value in let and const variable it  shows error because x is not initialize .
// In the block scoped variable we cannot access the the varibale before initialization.

// function run(){
//     console.log(x);
//     var x =10 ;
//     console.log(x);
// }
// run(); 

// Function Expression
// There are multiple way to define fuction expression

/*
1.
const myFun = function fun(x){ // named function expression
    console.log("calling", x);
}
myFun(20);
*/


/*
2.
const myFun = function(x){ // anonymous funtion expression
    console.log("calling", x)
}
    myFun(20)

*/

/*
3. 
const myFun = ()=>{ // arrow function expression
    console.log("calling")
}
myFun()
*/


(function fun(x){ // IIFE 
    console.log("calling", x)
})(10)
