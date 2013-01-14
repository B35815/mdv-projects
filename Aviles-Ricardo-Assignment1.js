//alert("JavaScript works!");

// Ricardo Aviles
// SDI 1301
// Project 1
// First week into JavaScript

// My variables
var myName = "Ricardo Aviles";
var teach = true;
var numOfStyles = 5;
var martialArtName = "\"create my own\" style ";

// My output
console.log("My name is " + myName + ".");
console.log("It is " + teach + " that I teach martial arts.");
console.log("I teach " + numOfStyles + " different martial art styles.");
console.log("Because I have so many instructor belts, I can " + martialArtName + ".");

// My conditionals
if (teach === true) {
	if (numOfStyles >= 5) {
	numOfStyles = numOfStyles;
	console.log("Earning " + numOfStyles + " different martial art black belts was a difficult task.");
	} else {
		console.log("I can't create my own style yet.");
	}
} else {
	if (myName === "Ricardo Aviles") {
		console.log(myName + " could become as famous as Chuck Norris or Bruce Lee.");
	} else {
		myName = myName + " would need to keep practicing.";
		console.log(myName);
		}
}