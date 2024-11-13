/*
Problem-2
Create a constructor Employee that inherits from the Person constructor of problem 1. Add an additional
property designation and a method getDetails to display the employee details.
*/

// Solution Code:

//Problem 1 code
function Person(name, age){
    this.name = name;
    this.age= age;
  
    this.sayHello = function(){
      console.log(`Hello my neme is ${this.name} and I am ${this.age} years old.`);
    };
  }


function Employee (name, age, designation){
    Person.call(this, name , age);

    this.designation = designation;

    this.getDetails = function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, Designation: ${this.designation}`);
    }

}

// Establish inheritance from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

const employee = new Employee("Ranjit", 30, "Web Developer");
employee.getDetails();

employee.sayHello();

