import PromptSync from "prompt-sync";
const prompt = PromptSync();
// Write a program to compute sales commission based on following rules:
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales from $300 and up to but less than $500
// • 2% for sales $500 or above
// • If the salesman is not salaried then
// • 2% for sales from $300 and up to but less than $500
// • 3% for sales $500 or above
const salaried = prompt("Is the person salaried: ");
const sales = prompt("please enter the sales amount: ");
if ((salaried === "yes") & (sales < 300)) {
  console.log("NO Commission");
} else if (salaried === "yes" && sales >= 300 && sales < 500) {
  console.log(sales * 0.01);
} else if (salaried === "yes" && sales > 500) {
  console.log(sales * 0.02);
} else if (salaried === "no" && sales >= 300 && sales < 500) {
  console.log(sales * 0.02);
} else if (salaried === "no" && sales > 500) {
  console.log(sales * 0.03);
}

// function commission(sales,issalaried){
//     if(issalaried){
//         return "this is salarid";

//     }
//     else{
//         return "this is not salarid";
//     }
// }
// console.log(commission(50,false));
// Write a loop that continually prompts for age until you enter age older than 18
// • Write both while and do while versions.

// let userInput;
// do {
//   userInput = prompt("Please enter your page: ");
//   console.log("You age is: " + userInput);
// } while (userInput !== "18");
// console.log("dd")

// let userInput = prompt("Please enter your age: ");

// while (userInput !== "18") {
//   console.log("You age is: " + userInput);
//   userInput = prompt("Please enter your age: ");
// }
// console.log("GOT IT!");

// 3. Make a defining table and program to print out the balance of a savings account that
// compounds interest monthly. Prompt the user for the
// • initial amount
// • annual interest rate
// • number of years to compound
// Do not use the mathematical formula for compound interest. Use a loop that calculates the
// interest for each month and compounds that over the iteration—i.e., add it to the current
// balance. Ask the professor or TA if this is not clear.
// const initital_Amount = prompt("please enter the initial amount: ");
// const annual_Interest = prompt("please enter the annual interest: ");
// const number_Years=prompt("please enter the years: ")

// let age = prompt("age ") + 1;
// //age=age+1
// console.log(age + 3);
