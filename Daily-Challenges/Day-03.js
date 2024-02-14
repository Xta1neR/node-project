const prompt = require("prompt-sync")();

// Check if the user is clicking the correct button and return "Invalid" till user does not click the right button. 
let cn = 43;
let a;

while (a !== cn){
	a = parseInt(prompt("Enter a number: "));
	console.log("Invalid Try Again")
}
console.log("You have Entered the correct number.");

// Define Variable in JS // Can be defined in 3 ways 
var a1 = 23;
let a2 = 33;
const a3 = 53;

// Multi-line javascript expression
function sum(a1,a3){
	return a1 + a3;
}