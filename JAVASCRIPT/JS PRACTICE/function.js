/*
What is function? why do we need it?
A JavaScript function is a block of code designed to perform a particular task.
With the help of function we can reuse logic in multiple time.

Note: if we are not return anything manually from the function then JS will automatically return undefined.

*/



/*
function getFunction(x){
if (x %2==0){
    console.log("This is even number");
}else{
    console.log("This is a odd number");
}
}
getFunction(21);
*/
/*
function multiply(a, b){
    console.log(a*b);
}
multiply(10,2);
*/
/*
function evenOrOdd(x){
    if (x %2==0){
        return "even"
    }else{
        return "odd"
    }
    }
    var ans = evenOrOdd(22);
    console.log(ans);
    */

    /*
    function add(x, y=2, z){
        return x+y+z;
    }

    console.log(add(10, 20));
    */
// Math functions
   /*
    console.log(Math.abs(5));
    console.log(Math.abs(-5));
    console.log(Math.floor(8.7));
    console.log(Math.ceil(8.7));
    console.log(Math.round(9.1));
    console.log(Math.min(10, 50, -20, -100, 60));
    console.log(Math.max(10, 50, -20, -100, 60));
    console.log(Math.sqrt(225));
    console.log(Math.random());
    */

    /*
   const d = new Date();
    console.log(d);
   
    console.log(d.getDay());
    console.log(d.getMonth());
    console.log(d.getFullYear());
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    */

    // function someFunction(){
    //     return function x(){
    //         return 10;
    //     }
    // }
    
    // function anotherFuntion(f1){
    //     f1();
    //     console.log("Called f1");
    // }

    // function hello(){
    //     console.log("hello");
    // }

    // anotherFuntion(hello);