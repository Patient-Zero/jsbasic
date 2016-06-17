// Part 1: 

// Variables

var x = 12; 
console.log(x)
var y = 20; 
console.log(y)


// Debugging (alerts, comments, the console)

alert("This is an alert (pop-up)")

// This is a one-line comment. 
/* Comments written like this 
can span multiple lines. */ 

console.log("This will show up in the console.")
console.log(x*y)
debugger; alert('I think I found the bug!')

// Different data types

// String - "Hello World"
// Number - 5, 5.5, 1000 (all numbers in JS are ﬂoats)
// Boolean - true, false
// Undefined (no value)
// Arrays - Store information in big brackets

// Arrays

cheese = ["provolone", "brie", "cheddar"]; 
var t = [1, 3, 5, 6, 7, 8, 12]; 

// Testing

"Pratik" === "Buddhiraju"; 
5 < 10; 

// Logic

// What's my grade on my math test, given my score?
score = 85; 
if(score > 90){
	console.log("You got an A!");
}else if(score > 80){
	console.log("You got a B!"); 
}else if(score > 70){ 
	console.log("You got a C!"); 
}else if(score > 60){ 
	console.log("You got a D!");
}else{
	console.log("Wow, you suck at this class");
}


// Functions
/* A function is a way to encapsulate code for later use 
 - It can take arguments, which are used as variables inside the function 
 - It usually returns a value, which can be used later on or
displayed immediately */

/* Write 3 different functions that take input and return something
 via the console or an alert.*/

function addten(number){
	return number + 10; 
}
console.log(addten(15));

function isEven(value) {
	return (value%2 == 0);
}
console.log(isEven(25));

function dividebyfive(thing){
	return (thing/5);
}
console.log(dividebyfive(25))

/* 1. Create a script with two variables assigned to 
two numbers. Add them together and output the result 
to the console. Now do the same with two strings. */

var a = 5; 
var b = 8; 
console.log(a + b);

var c = "Pratik "; 
var d = "Buddhiraju";
console.log(c + d);


/* Create a multidimensional array related to a 
subject that interests you. Output two of the items 
in sub-arrays to the console. */

var cheeses = [["provolone", "brie"], ["mozzarella", "gouda"], "goat"]; 
console.log(cheeses[0][1]);
console.log(cheeses[1][0]);

//or 

/* Write a script that checks if a variable is less 
than 10. If it is, alert the user that their variable
is less than 10. If it is not, using the console, let
the user know that what the variable was and that it
was greater than 10. */

function lessthan10(num){
	if(num<10){
		return alert("Your variable was less than 10.")
	}else{
		return console.log("Your number was " +  num  + " and was greater than 10.")
	}
}
lessthan10(12)

/* Try running the script and then changing the 
variable's value to see how this affects the program's 
output. */
lessthan10(7)










