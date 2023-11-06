
/**
 *@returns {number} double the input
 */
 export function double(num: number): number {
  return num * 2; 
}


/**
 * @returns {number} 100 times the input
 */
export function times100(num:number):number{
  return num * 100;
 }



/**
 * @returns {Array} creates a new array with function mapped to each element
 */
export function myMap(arr: number[], func: (num: number) => number): number[] {
  let newArr: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}

// Test myMap function with double function
let numbers: number[] = [1, 2, 3, 4, 5];
let doubledNumbers: number[] = myMap(numbers, double);
console.log("Numbers:", numbers);
console.log("Numbers doubled:", doubledNumbers);

// Test myMap function with times100 function
let multipliedNumbers: number[] = myMap(numbers, times100);
console.log("Numbers multiplied by 100:", multipliedNumbers);






