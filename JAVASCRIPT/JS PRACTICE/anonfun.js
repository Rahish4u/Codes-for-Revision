let x = function (){
    console.log("Hello");
}
x();

(function exec(){
    console.log("named");
})(); // Imidiately invoked function

(function (x){
    console.log(x*x);
})(5);