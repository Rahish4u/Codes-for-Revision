
/*
function h( x, fn){
    // h is high order function
    // fn is callback
    console.log(x*x);
    fn(x*x)
}

h(10, exec);

function exec(n){
    console.log("squared value is", n);
}

*/
/*
console.log("start");
setTimeout(function f(){
    console.log("timer done 1");
},3000)

setTimeout(function f(){
    console.log("timer done 2");
},0)
console.log("end");
for(let i = 0; i<1000000; i++){}

*/


// Array.prototype.myMap = function (fnc) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//       temp.push(this[i]);
//     }
//     return fnc(temp);
//   };
//   console.log(array.myMap((item) => item * 3));

  


//   function handleItem(item) {
//     return item * 3;
//   }
//   Array.prototype.myMap = function (fnc) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
//       temp.push(fnc(temp[i]));
//     }
//     return temp;
//   };
//   console.log(array.myMap(handleItem));

// Array.prototype.myFind = function(callback, thisArg) {
//   for (let i = 0; i < this.length; i++) {
//       if (callback.call(thisArg, this[i], i, this)) {
//           return this[i];
//       }
//   }
//   return undefined;
// };


// const array = [5, 12, 8, 130, 44];
// const found = array.myFind(el => el > 10);
// console.log(found); // Output: 12

// let array_input = [1, 4, 5, 6, 7];

// function itemCheck(item){
//   return item%2==0;
// }

// Array.prototype.myFindIndex = functon(callback){
//   for(let i = 0; i < this.length; i++){
//     if(callback(this[i])){
//       return i;
//     }
//   }
//   return-1;
// };
// console.log(array_input.myFindIndex(itemCheck));


// Callback better understanding in Async Lecture

const arr = [1,2,3,4]

function myMap(arr, fn){
  let result = []; // this is the new array to restore the value
  for(let i = 0; i <arr.length; i++){
    result.push(fn(arr[i], i));
  }
    return result;
    
}
console.log(myMap(arr, function g(element){
  return element**3
}));

// Disadvantage of Callback 
/*
1. Callback hell(minor disadvantahe, readability problem)
2. Inversion of control

*/
