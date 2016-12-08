/*=========================================================
    Part 1: Variables
*/
var givenName;
// Q: What does `givenName` equal right now?
// A: givenName is not given a value so it is undefined.


givenName = "Tim";
// Q: What is `givenName` set to right now?
// A: Tim


givenName = "JD";
// Q: What is `givenName` set to right now?
// A: JD


var greeting = "Hello, how are you?";
// Q: What is `greeting` set to?
// A: greeting is equal to: Hello, hwo are you?


/*=========================================================
     Part 2: Simple Math
*/

var high = 50;
var low  = 10;


var math = high - low;
// Q: What is `math` set to?
// A: math is set to: high - low

math = high - "5";
// Q: What is `math` set to?
// A: There is no variable defined in the decleration so it is not valid.


/* =========================================================
     Part 3: Expressions
*/

// Create a variable to calculate Tim's age
// The answer should read "Tim is 32 years old"
// The answer shoud not be written in a comment.
var born = 1983;
var today = 2015;



// Answers Below:
var ageCalculator = today - born;
console.log("Tim is" + ageCalculator + "years old");


// Store some information following in variables.
var yourName = "Nick";
var instructorName = "Jason";

// Update the variables above so the expression reads correctly.
// Answers Below:


// Final Statement
var statement = yourName + " is taking a class at The Iron Yard, my instructor's name is " + instructorName;
