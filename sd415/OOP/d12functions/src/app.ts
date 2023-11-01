//  CLASS EXAMPLE

// function add(a: number, b: number): number {
//     return a + b;
//    }
//    const sum1: number = add(10,15);
//    const sum2: number = add(10, 5 ) ;
//    console.log("sum1 is: ", sum1, " sum2 is: ", sum2);

//  HOME WORK
// QUESTION NUMBER 1

// function computeSalesCommission(salaried: boolean, salesAmount: number) {
//   if (salaried) {
//     if (salesAmount < 300) {
//       return 0;
//     } else if (salesAmount <= 500) {
//       return salesAmount * 0.01;
//     } else {
//       return 500 * 0.01 + ((salesAmount - 500) * 0.02);
//     }
//   } else {
//     if (salesAmount < 300) {
//       return 0;
//     } else if (salesAmount <= 500) {
//       return salesAmount * 0.02;
//     } else {
//       return 500 * 0.02 + (salesAmount - 500) * 0.03;
//     }
//   }
// }

// // Function calls to test the function with provided test cases
// console.log("expect 0: ", computeSalesCommission(true, 200));
// console.log("expect 0: ", computeSalesCommission(false, 200));
// console.log("expect 3: ", computeSalesCommission(true, 300));
// console.log("expect 6: ", computeSalesCommission(false, 300));
// console.log("expect 65: ", computeSalesCommission(true, 3500));
// console.log("expect 100: ", computeSalesCommission(false, 3500));



// QUESTION NUMBER 2
// function compoundInterest(initialAmount:number, annualInterestRate:number, years:number) {
//     // Convert annual interest rate to a decimal and determine the monthly interest rate
//     const monthlyInterestRate = (annualInterestRate / 100) / 12;
//     const months = years * 12; // Calculate total months

//     let balance = initialAmount;

//     for (let i = 0; i < months; i++) {
//         balance += balance * monthlyInterestRate; // Add interest to the balance each month
//     }

//     return balance.toFixed(2); // Return the balance after 'years' years, rounded to 2 decimal places
// }


// console.log("expect 110.47", compoundInterest(100, 10, 1));
// console.log("expect 16470.09", compoundInterest(10000, 5, 10));


// QUESTION 3

// function calcDownpayment(cost:number) {
//     if (cost < 50000) {
//         return cost * 0.05; // 5% of the cost
//     } else if (cost >= 50000 && cost < 100000) {
//         return 2500 + 0.10 * (cost - 50000); // $2500 + 10% of (cost - $50K)
//     } else if (cost >= 100000 && cost < 200000) {
//         return 7500 + 0.15 * (cost - 100000); // $7500 + 15% of (cost - $100K)
//     } else {
//         return 20000 + 0.10 * (cost - 200000); // $20000 + 10% of (cost - $200K)
//     }
// }


// console.log("expect 2000: ", calcDownpayment(40000));
// console.log("expect 2500: ", calcDownpayment(50000));
// console.log("expect 7500: ", calcDownpayment(100000));
// console.log("expect 25000: ", calcDownpayment(250000));


// QUESTION 4

// function sumDigits(number:number) {
//     let sum = 0;
//     while (number) {
//         sum= sum+ number % 10;
//         number = Math.floor(number / 10);
//     }
//     return sum;
// }

// function multDigits(number:number) {
//     let product = 1;
//     while (number) {
//         product =product* (number % 10);
//         number = Math.floor(number / 10);
//     }
//     return product;
// }

// console.log("sumDigits Output:", sumDigits(1234));
// console.log("multDigits Output:", multDigits(1234));
// console.log("sumDigits Output:", sumDigits(102));
// console.log("multDigits Output:", multDigits(102));
// console.log("sumDigits Output:", sumDigits(8));
// console.log("multDigits Output:", multDigits(8));


// Question 5
function convertFahrenheit(fahrenheit:number) {
    const celsius = (fahrenheit - 32) * (5/9);
    return celsius;
}

console.log("expect 0:", convertFahrenheit(32));
console.log("expect -17.7778:", convertFahrenheit(0));
console.log("expect 100:", convertFahrenheit(212));

// QUESTION 6
