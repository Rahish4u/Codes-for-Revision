let arr1 = [];
let arr2 = [10, "Rahish", true, null, undefined]

console.log(arr1, arr2);
console.log(arr2[2]); // get index value

arr2[3] = 100;
console.log(arr2); //  change the index value

arr2[5] = "js";
console.log(arr2);

let arr = [10, 20, "Apple", "Orange", null, 100, 'Js']
console.log(arr);
arr.push("mango"); // add element at the end
console.log(arr);

arr.pop(); // remove element at the end
console.log(arr);

arr.shift(); // remove element from the start
console.log(arr);

arr.unshift('Harry') // add element add the start
console.log(arr);

// arr.reverse(); // reverse all element
// console.log(arr);

// let sliced = arr.slice(1, 3)
// console.log(sliced);

// arr.splice(1, 2, 22 , 225)
// console.log(arr);

let arr3 = arr2.concat(arr);
console.log(arr3);

let arr4 = arr3.join("@")
console.log(arr4);

let arr5 = arr4.indexOf(3);
console.log(arr5);

let input_array=[0,1,1,2,3,4,5,2,3,4,5,0,0,0,1,2,3]
console.log(input_array.filter((item)=> item !==0));