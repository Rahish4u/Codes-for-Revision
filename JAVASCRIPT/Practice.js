// // Writing First code Hello world

// let greet = "Hello World"

// console.log(greet);

// // OutPut
// //Hello World

// // Variables

// let productName = "Macbook";

// var productPrice = "135000";

// const productCompany = "Apple"

// // console.log("Product Name :",  productName, "Product Price :",productPrice,"Product Company : ",productCompany);

// console.log(" Name :" , productName);
// console.log(" Price :",productPrice);
// console.log(" Company : ",productCompany);

// // Datatypes
// // 1. Number
// // 2. String
// // 3. Boolean
// // 4. Null
// // 5. Undefined
// // 6. Object
// // 7. Symbols

// // Number

// let number = 123;
// console.log(number);

// // String

// let doubleQuoteString = "Hi I am Rahish, ";
// let singleQuotestring = 'I am start Learning Javascript';
// let bacTickString = `This
// will be
// benificial for me.`; // we can write multilinecode using backtick String.

// console.log(doubleQuoteString, singleQuotestring, bacTickString);

// // Arithmetic Operator

// // Additional
// let x = 30;
// let y = 20;
// console.log(x+y); //50

// // Substraction

// console.log(x-y); //10

// // Multiplication

// console.log(x*y); //600

// // Division

// console.log(x/y); //1.5

// // Modulus

// console.log(x%y);

// // Exponentiation

// var num1 = 4;
// var num2 = 6;

// console.log(num1**num2);

// // Pre Increment
// let num = 10;
// console.log(++num);

// // Post Increment

// console.log(num++);

// // Pre Decrement
// let num3 = 12
// console.log(--num3);

// // Post Decrement
// let num4 = 15;
// console.log(num4--);

// // Assignment Operator
// var name = "Rahish" // Here i assign a name in the variable.
// console.log(name);

// // Additional Assignment operator
// let z = 12;
// z += 5;
// console.log(z);

// // Subtraction Assignment operator
// z -= 5;
// console.log(z);

// // Multiplication Assignment operator
// z *= 5;
// console.log(z);

// // Divisional Assignment operator
// z /= 5;
// console.log(z);

// // Modulos Assignment operator
// z %= 5;
// console.log(z);

// // Exponentiomnal Assignment operator
// z **= 5;
// console.log(z);

// let name = 2;
// console.log(name);

// let a = { name: { firstName: { surname: "Thadani" } } }; //falsy
// let b = "PW Skills"; // truthy
// let d = "Hello";

// // (falsy || truthy)
// // let c = d && true;
// // left to right
// console.log(a && a.name && a.name.firstName && a.name.firstName.surname);

// 0,false , '',null, NaN, undefined
//[],

// num1 = 15;
// num2 = 20;
// result = num1 + num2;
// result_type = console.log( result);

// console.log(typeof result);

// var students = 100;
// students -=50;
// console.log(students);

// Condition
/*let num = 9;
if(num==0){
    console.log("Zero is not odd or even number");
}

else if(num%2 ==0){
    console.log("Number is even");
}else{
    console.log("Not a even number this id odd number");
}*/

// Loops

/*for(i = 0; i<10; i++){
    let name = "Rahish"
    console.log(name);
}

for(let i = 3; i<=30; i+=3){
    console.log(i);
}*/

/*let i = 1, n = 10;
while(i<=10){
    console.log(i);
    i+=1;
}*/

/*let i = 1, n = 10;
while(n>=i){
    console.log(n);
    n-=i;
}*/

/*let row = 1;
while (row<=6){
    let pattern = '';
    let col = 1;
    while(col<=row){
        pattern+='$'
        col++;
    }

    console.log(pattern);
    row++;
}*/

// do while loop

/*let result = '';
let i=0;
do{
    i = i+1;    
    result = result+i;

}while(i<10);
console.log(result);*/

// break and continue

// break
/*for (let i = 0; i< 8; i++){
    console.log(i);
    if(i==6)
        break
}*/

// continue
/*for (let i = 0; i< 20; i++){
    if(i%2!=0){
        continue;
    }
        console.log(i);
}*/

// switch statement

/*var day = 7;

switch (day) {
  case 1:
    console.log("Sunday");
    break;

  case 2:
    console.log("Monday");
    break;

  case 3:
    console.log("Tuesday");
    break;

  case 4:
    console.log("Wednesday");
    break;

  case 5:
    console.log("Thursday");
    break;

  case 6:
    console.log("Friday");
    break;
    
  case 7:
    console.log("Saturday");
    break;

  default:
    console.log("day is not exist");
} */

/*let color = "green";

switch (color) {
  case "red":
    console.log("This is the red color");
    break;  

  case "blue":
    console.log("This is the blue color");
    break;

  case "green":
    console.log("This is the green color");
    break;

  case "black":
    console.log("This is the black color");
    break;
  default:
    console.log("The color is not define");
}*/

/*
let grade = "D"

function getValue(grade){
  switch(grade){
    case "A":
      return "Excellent";

      case "B":
      return "Average";

      case "C":
      return "Below than average";

      default:
      return "No grade"
  }
}

console.log(getValue(grade));
*/

// Function
/*
function greetUser(){
  console.log("Hi Rahish");
}
greetUser();
*/

