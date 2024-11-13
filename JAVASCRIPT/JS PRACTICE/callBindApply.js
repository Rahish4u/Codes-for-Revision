//Call

// const obj = {
//     name: "Gaurav",
//     greet: function(welcomMassage, prompt)  {
//         console.log("Hello Learner, my name is", this.name , welcomMassage, prompt);
//     }
// }

// obj.greet("How are you?", "What are you doing?");

// const newObj = {name:"Rahish"}
// obj.greet.call(newObj, "How are you?", "What are u doing?");

// Apply

// const obj = {
//     name: "Gaurav",
//     greet: function(welcomMassage, prompt)  {
//         console.log("Hello Learner, my name is", this.name , welcomMassage, prompt);
//     }
// }

// obj.greet("How are you?", "What are you doing?");

// const newObj = {name:"Rahish"}
// obj.greet.apply(newObj, ["How are you?", "What are u doing?"]);


// var name = "Abcde"
// let obj = {
//     name:"Farukh",
//     greet: function(){
//         console.log("hello", this.name);
//     }
// }
// obj.greet.call()

// Bind

var name = "Abcde"
let obj = {
    name:"Farukh",
    greet: function(){
        console.log("hello", this.name);
    }
}
obj.greet.call()