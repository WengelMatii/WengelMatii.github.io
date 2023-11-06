/**
 *@returns {number} double the input
 */
export function double(num) {
    return num * 2;
}
/**
 * @returns {number} 100 times the input
 */
export function times100(num) {
    return num * 100;
}
/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr, func) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}
// Test myMap function with double function
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = myMap(numbers, double);
console.log("Numbers:", numbers);
console.log("Numbers doubled:", doubledNumbers);
// Test myMap function with times100 function
let multipliedNumbers = myMap(numbers, times100);
console.log("Numbers multiplied by 100:", multipliedNumbers);
