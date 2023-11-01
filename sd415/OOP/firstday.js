import PromptSync from "prompt-sync";
const prompt = PromptSync();
// const tempInCelsius = prompt("Enter value in celsius: ")
// const tempInFahrenheit = 9/5 * Number(tempInCelsius) + 32;
// console.log(tempInFahrenheit);


//  Write a program that computes volume of a cylinder based on user inputs for
// radius and height of a cylinder, using formula v = πr2h

// const radius=prompt("radius: ");
// const height=prompt("height: ");
// const vol = Math.PI*radius*2*height;
// console.log("volume is: " ,vol)
// "use strict";
// let x = 1;
// let y = 2;
// let z = 3;

// console.log(x && y && z); // 3

// x = false;
// console.log(x && y && z); // false

// x = 0;
// console.log(x && y && z); // 0

// x = 1;
// console.log(x || y || z); // 1

// x = false;
// y = 0;
// z = null;
// console.log(x || y || z); // null

// console.log(x ?? y ?? z); // false
for(let i = 1; i<=6; i++){
    let row = "";
    for(let j=1; j<=6;j++){
        row = row + i;
    }
    console.log(row);
    }