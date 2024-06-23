// console.log(x); //undefined
// var x = 10;


// console.log(y); //ReferenceError: Cannot access 'y' before initialization
// let y = 10;

// console.log(z); //ReferenceError: Cannot access 'z' before initialization
// const z = 20;

let variable = 50; // initially a number
console.log(variable); // 50

variable = 'hello'; // now a string
console.log(variable); // hello

variable = true;  // now a boolean
console.log(variable); // true


let a = 42; 
console.log(typeof a); // number

let b = "hello";
console.log(typeof b); // string

let c = true;
console.log(typeof c); // boolean

let d = {name: "Rahish"};
console.log(typeof d); // object

let e = undefined;
console.log(typeof e); // undefined

let f = null;
console.log(typeof e); // "object" (this is a known quirk in JavaScript)

let g = function(){};
console.log(typeof g); //fuction

let i = Symbol('symbol');
console.log(typeof i);


