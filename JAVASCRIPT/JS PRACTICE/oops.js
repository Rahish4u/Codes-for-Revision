// class product {
//     name;
//     price;
//     categery;
//     description;
//     rating;

//     constructor(productName, productPrice, productCategery, productDescription, productRating) {
//       this.name = productName;
//       this.price = productPrice;
//       this.categery = productCategery;
//       this.description = productDescription;
//       this.rating = productRating 
//     }

//     addToCart(){
//         console.log("Product added to the cart");
//     }
//     removeFromCarrt(){
//         console.log("Product remove from the cart");
//     }
//     displayProduct(){
//         console.log("Product displayed");
//     }
//     buyProduct(){
//         console.log("Product baught");
//     }
// }

// let iphone = new product("iphone 12", 120000, "Smartphone", "Apple iphone 12", 4.5 );
// console.log(iphone);

// Object constructor for creating an person object

// function Person(name, age){
//    this.name = name;
//    this.age = age;

//    this.sayHello = function() {
//     console.log(`Hello, my name is ${this.name} and i am ${this.age} years old`);
//    }
   
// }

// // creating instance using the constructor
// const person1 = new Person("Amit", 25);
// const person2 = new Person("Rahish", 24);
// console.log(person1);
// console.log(person2);

// person1.sayHello();
// person2.sayHello();

// Understanding on this keyword

// let obj = {
//     x: 10,
//     y : 20,
//     fun: function(){
//         console.log(this.x, this.y);
//     }  
// } 
// obj.fun();

// let obj = {
//     x: 10,
//     y : 20,
//     fun: function(){
//         const arrow = () =>{
//             console.log(this.x, this.y);
//         }
//         arrow();
//     }  
// } 
// obj.fun();


// Object Deconstructer

// const product = {name:"Vivo Y23", price:12500, Category:"Smartphone" }
// const {name, price, Category} = product;

// const purchasedProduct = {orderId:"Tnc2323521", orderDate:"15-07-2024", ...product}
// console.log(purchasedProduct);

// const purchasedProduct1 = {price:3200,orderId:"Tnc2323521", orderDate:"15-07-2024", ...product}
// console.log(purchasedProduct1);

// const purchasedProduct2 = {orderId:"Tnc2323521", orderDate:"15-07-2024", ...product, price:3200}
// console.log(purchasedProduct2);

// with(product){
//    console.log(price, Category);
// }


// const product = {name:"Vivo Y23", price:12500, category:{name:"Oppo", categoryId:120} }
// const {category} = product;
// console.log(category);

// const {categoryId} = category;
// console.log(categoryId);

const product = {name:"Vivo Y23", price:12500, category:{name:"Oppo", categoryId:120, type:{typeNme:"Electronic", typeId:2}}  }
const {category:{type:{typeNme,typeId}}} = product;
console.log(typeNme);