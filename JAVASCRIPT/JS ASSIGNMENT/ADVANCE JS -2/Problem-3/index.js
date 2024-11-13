/*
Problem-3
Create an object Calculator with methods add, subtract, multiply, and divide. Demonstrate the usage of this
within these methods such that method chaining of add, subtract, multiply and divide is possible.
*/

// Solution Code:

function Calculator(value){
    this.value = value;
}

Calculator.prototype.add = function(num){
    this.value += num;
    return this;
};

Calculator.prototype.subtract = function(num){
    this.value -= num;
    return this;
};

Calculator.prototype.multiply = function(num){
    this.value *= num;
    return this;
};

Calculator.prototype.divide = function(num){
    if(num ===0){
        throw new Error("Cannot divided by zero!")
    }
    this.value /= num;
    return this;
};

Calculator.prototype.getResult = function(){
    return this.value;
}



const calc = new Calculator(10);
console.log(calc.add(2) .multiply(3) .subtract(4) .divide(2) .getResult());

// Another Example

const calc2 = new Calculator(5);
console.log(calc2.subtract(2) .multiply(3) .add(10) .divide(2) .getResult());

