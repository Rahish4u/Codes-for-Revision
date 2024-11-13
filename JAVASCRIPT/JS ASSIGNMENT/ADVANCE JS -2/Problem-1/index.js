/*
Problem-1
Create an object constructor Person that takes name and age as parameters and initializes them. Also, add
a method sayHello to greet the person.*/

// Solution Code:

function Person(name, age){
  this.name = name;
  this.age= age;

  this.sayHello = function(){
    console.log(`Hello my neme is ${this.name} and I am ${this.age} years old.`);
  };
}

let person = new Person("John", 25);
person.sayHello();//Hello my neme is John and I am 25 years old.