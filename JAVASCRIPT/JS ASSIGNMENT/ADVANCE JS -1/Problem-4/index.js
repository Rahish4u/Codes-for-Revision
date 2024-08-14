/*
Problem-4
Create an object car with properties brand, model, and a method displayDetails that prints "Brand: [brand], Model: [model]". Test the method using this keyword.
*/

//Solution Code:
const car = {
    brand : "Tata",
    model : "Harrier",
    displayDetails : function(){
        console.log("Brand : " + this.brand + ", Model : " + this.model);
    }

}
car.displayDetails();