// 51 => Minimal IV: if-else if-else Inferno
// Check the principles of minimalist code in the intro to the first challenge.

// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

// Tips
// Executing a return will effectively end your function.

// For example, the code:

function compare_to_100 (x) {
  if (x > 100) {
      return "greater"
  } else if (x < 100) {
        return "smaller"
    } else {
      return "equal"
    }
}
 
// console.log(compare_to_100(110));  // greater
// console.log(compare_to_100(88));   // smaller
// console.log(compare_to_100(100));   // equal


// Can be simplified to:

function compare_to_100 (x) {
    if (x > 100) return "greater"
    if (x < 100) return "smaller"
    return "equal"
}

// console.log(compare_to_100(110));  // greater
// console.log(compare_to_100(88));   // smaller
// console.log(compare_to_100(100));   // equal

// 52 => Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str){
    if(str.length % 2 === 0){
        return true;
    }
    return false;
}

// console.log(oddOrEven("apples"));    //  true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

// console.log(oddOrEven("pears"));    //  false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

// console.log(oddOrEven("cherry"));    //  true

// 53 => ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

const [a,b] = [1,2,,3,4,5];

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

// 54 => Inches to Feet
// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

function inchesToFeet(num){
return num / 12;   
}

// console.log(inchesToFeet(324));  //  27
// console.log(inchesToFeet(12));  //  1
// console.log(inchesToFeet(36));  //  3

// 55 => I'd Like a New Shade of Blue, Please
// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

function howManyWalls(n,w,h){
 let walArea = w * h;
 return Math.floor(n/walArea);
}

// console.log(howManyWalls(100, 4, 5));     //  5
// console.log(howManyWalls(10, 15, 12));     //  0
// console.log(howManyWalls(41, 3, 6));     //  2

// 56 => To the Power of _____
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(base,exponent){
//    let calculation = Math.pow(base,exponent);
//    return calculation;

let calculation = 1
for(let i = 0; i < exponent; i++){
    calculation *= base;
}
return calculation;
}

// console.log(calculateExponent(5, 5));      //  3125
// console.log(calculateExponent(10, 10));      //  10000000000
// console.log(calculateExponent(3, 3));      //  27

// 57 => Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr){
    // return arr.pop();
    // return arr[arr.length-1];
    // return arr.slice(-1)[0];

    for(let i = 0; i < arr.length; i++){
        if(i === arr.length-1){
            return arr[i];
        }
    }
}

// console.log(getLastItem([1, 2, 3]));    //  3
// console.log(getLastItem(["cat", "dog", "duck"]));    //  "duck"
// console.log(getLastItem([true, false, true]));    //  true

// 58 => String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(value){
    return `${value}`;
    // return value + "";
}

function stringToInt(value){
    // return +value;
    // return Number(value);
    return parseInt(value);
}

// console.log(intToString(4));     // "4"
// console.log(stringToInt("4"));     // 4
// console.log(intToString(29348));     // "29348"

// 59 => On/Off Switches
// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

function posCom(n){
//  return 2 ** n; 

if(n === 0){
    return 1;
}

return 2 * posCom(n-1);
}

// console.log(posCom(1));   // 2  
// console.log(posCom(3));   // 8
// console.log(posCom(10));   // 1024

// 60 => Among Us Imposter Formula
// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

function imposterFormula(i,p){
let result = Math.round(100 * (i/p));
return `${result}%`;
}

// console.log(imposterFormula(1, 10));     //  "10%"
// console.log(imposterFormula(2, 5));     //  "40%"
// console.log(imposterFormula(1, 8));     //  "13%" 
