/*
Q6. Write a Javascript program to calculate the Body Mass Index (BMI) using the formula BMI = weight (kg)/
height * height.
*/

// Code

function calculateBMI (weight, height){
    return weight / (height * height);
}

const weight = 70; // weight in kgs
const height = 1.75; // height in meters

const bmi = calculateBMI (weight, height);
console.log(`The BMI is : ${bmi.toFixed(2)}`);