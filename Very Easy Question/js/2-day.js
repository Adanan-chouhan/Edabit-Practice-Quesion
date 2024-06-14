// 11 ==> The Farm Problem
// In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

// chickens = 2 legs
// cows = 4 legs
// pigs = 4 legs
// The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.

function animals(chickens, cows, pigs) {
    let result = (chickens * 2) + (cows * 4) + (pigs * 4);
    return result;
}

// console.log(animals(2, 3, 5));     // 36
// console.log(animals(1, 2, 3));     // 22
// console.log(animals(5, 2, 8));     // 50

// 12 ==> Using the "&&" Operator
// JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
// Consider a && b:
// a is checked if it is true or false.
// If a is false, false is returned.
// b is checked if it is true or false.
// If b is false, false is returned.
// Otherwise, true is returned (as both a and b are therefore true ).
// The && operator will only return true for true && true.
// Make a function using the && operator.

function and(a, b) {
    if (a == true && b == true) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(and(true, false));      // false
// console.log(and(true, true));     //  true
// console.log(and(false, true));      // false

// 13 ==> Are the Numbers Equal?
// Create a function that returns true when num1 is equal to num2; otherwise return false.
function isSameNum(num1, num2) {
    return num1 === num2;
}

// console.log(isSameNum(4, 8));    //  false
// console.log(isSameNum(2, 2));    //   true
// console.log(isSameNum(2, "2"));    //  false

// 14 ==> Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far.

// wins get 3 points
// draws get 1 point
// losses get 0 points

function footballPoints(win, draws, losses) {
    return (win * 3) + (draws * 1) + (losses * 0);
}
// console.log(footballPoints(3, 4, 2));    // 13
// console.log(footballPoints(5, 0, 2));    // 15
// console.log(footballPoints(0, 0, 1));    // 0

// 15 ==> Convert Hours and Minutes into Seconds
// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convert(hours, minutes) {
    return (hours * 3600) + (minutes * 60)
}

// console.log(convert(1, 3));    // 3780
// console.log(convert(2, 0));    // 7200
// console.log(convert(0, 0));    // 0

// 15 ==> Fix the Expression
// Fix the code in the Code tab so the function returns true if and only if x is equal to 7

function isSeven(x) {
    //   return  x == 7 ? true : false;
    if (x == 7) {
        return true;
    } else {
        return false;
    }
}
// console.log(isSeven(4));  // false
// console.log(isSeven(9));  // false
// console.log(isSeven(7));  // true

// 16 ==> Equality Check
// In this challenge, you must verify the equality of two different values given the parameters a and b.
// Both the value and type of the parameters need to be equal. The possible types of the given parameters are:
// Numbers
// Strings
// Booleans (false or true)
// Special values: undefined, null and NaN
// What have you learned so far that will permit you to do two different checks (value and type) with a single statement?
// Implement a function that returns true if the parameters are equal, and false if they are not.


function heckEquality(a,b){
   return  a === b ? true : false; 
}
// console.log(heckEquality(1, true));  // false
// A number and a boolean: the value and type are different.

// console.log(heckEquality(0, "0"));  // false
// A number and a string: the type is different.

// console.log(heckEquality(1,  1));  // true
// A number and a number: the type and value are equal.

// 17 ==> Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag){
return flag ? "true" : "false";
}

// console.log(boolToString(true));// "true"
// console.log(boolToString(false));// "false"

//  18 ==> Using Arrow Functions
// Create a function that returns the given argument, but by using an arrow function.
// An arrow function is constructed like so:
// arrowFunc=(/*parameters*/)=>//code here

// const arrowFunc = (arg) => arg;
// console.log(arrowFunc(3));       //  3
// console.log(arrowFunc("3"));       //  "3"
// console.log(arrowFunc(true));       //  true

// 19 ==> Frames Per Second
// Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.

function frames(num1,num2){
    let a = num1 * 60;
    return a * num2
}
// console.log(frames(1, 1));     //  60
// console.log(frames(10, 1));     //  600
// console.log(frames(10, 25));     //  15000

// 20 ==> Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

function calculator(num){
  return  eval(num); 
}

// console.log(calculator("23+4"));     // 27
// console.log(calculator("45-15"));     // 30
// console.log(calculator("13+2-5*2"));     // 5
// console.log(calculator("49/7*2-3"));     // 11
