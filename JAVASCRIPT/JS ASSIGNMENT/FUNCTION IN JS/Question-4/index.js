/*
Q4. Write a JavaScript function called calculateTax that takes an income as an argument and returns the amount of tax to be paid. Use a closure to handle different tax rates based on income ranges. Test the function with various incomes.
*/

// Code

function calculateTax(income) {
  const taxBrackets = [
    { limit: 10000, rate: 0.1 },
    { limit: 30000, rate: 0.2 },
    { limit: Infinity, rate: 0.3 },
  ];

  return function() {
    let tax = 0;
    let previousLimit = 0;

    for (const bracket of taxBrackets) {
      if (income > bracket.limit) {
        tax += (bracket.limit - previousLimit) * bracket.rate;
        previousLimit = bracket.limit;
      } else {
        tax += (income - previousLimit) * bracket.rate;
        break;
      }
    }
    return tax;
  };
}

// Various incomes
const income1 = 8000;
const income2 = 25000;
const income3 = 50000;

const taxForIncome1 = calculateTax(income1)();
const taxForIncome2 = calculateTax(income2)();
const taxForIncome3 = calculateTax(income3)();

console.log(`The tax for an income of $${income1} is $${taxForIncome1}`);
console.log(`The tax for an income of $${income2} is $${taxForIncome2}`);
console.log(`The tax for an income of $${income3} is $${taxForIncome3}`);
