/*
Problem-4
Define a base class Shape with a method draw. Create two subclasses Circle and Rectangle that override 
the draw method. Demonstrate polymorphism using instances of these classes.
*/

//Solution Code:

// Define the base class Shape with a method draw
class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

// Define the Circle subclass that overrides the draw method
class Circle extends Shape {
    draw() {
        console.log("Drawing a circle");
    }
}

// Define the Rectangle subclass that overrides the draw method
class Rectangle extends Shape {
    draw() {
        console.log("Drawing a rectangle");
    }
}

// Create instances of the classes
let circle = new Circle();
let rectangle = new Rectangle();

// Demonstrate polymorphism using instances of these classes
let shapes = [circle, rectangle];

for (let shape of shapes) {
    shape.draw();
}