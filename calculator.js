const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi, I'm ${name}.`);

const num1 = parseInt(prompt("please enter the first number:"));
const num2 = parseInt(prompt("please enter the second number:"));
const operation = prompt("Please choose the operation  (+, -, *, /):");

if( Number.isInteger(num1) && Number.isInteger(num2)){
 if (operation === "+") console.log(num1 + num2);
 if (operation === "-") console.log(num1 - num2);
 if (operation === "*") console.log(num1 * num2);
 if (operation === "/") console.log(num1 / num2);
 else console.log("operation not valid");
}else console.log("invalid numbers");
