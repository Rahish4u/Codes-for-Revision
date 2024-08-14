/*
Problem-5
Create two objects person1 and person2 with properties name and age. Create a function "introduce" that prints "Hello, I'm [name], and I'm [age] years old." Use the call method to make person2 introduce itself using the introduce function.
*/

// Solution Code:

function introduce() {
    console.log("Hello, I'm " + this.name + ", and I'm " + this.age + ", years old.");
}

const person1 = {
  name: "Ram",
  age: "28",
};

const person2 = {
  name: "Ranjan",
  age: "30",
};

introduce.call(person2);
