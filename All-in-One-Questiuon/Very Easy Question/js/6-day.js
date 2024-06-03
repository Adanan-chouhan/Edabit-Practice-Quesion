// 51 => Inches to Feet
// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.

function inchesToFeet(inches){
   const feet =  inches / 12;
   return feet;
}
// console.log(inchesToFeet(324));   //  27
// console.log(inchesToFeet(12));   //  1
// console.log(inchesToFeet(36));   //  3

// 52 => I'd Like a New Shade of Blue, Please
// I have a bucket containing an amount of navy blue paint and I'd like to paint as many walls as possible. Create a function that returns the number of complete walls that I can paint, before I need to head to the shops to buy more.

// n is the number of square meters I can paint.
// w and h are the widths and heights of a single wall in meters.

function howManyWalls(n,w,h){
    const wallArea = w * h;
    const completeWalls = Math.floor(n / wallArea);
    return completeWalls;
}

// console.log(howManyWalls(100, 4, 5));   //  5
// console.log(howManyWalls(10, 15, 12));   //  0
// console.log(howManyWalls(41, 3, 6));   //  2

// 53 => To the Power of _____
// Create a function that takes a base number and an exponent number and returns the calculation.

function calculateExponent(baseNum,exponentNum){
    return Math.pow(baseNum,exponentNum);
}
// console.log(calculateExponent(5, 5));       //  3125
// console.log(calculateExponent(10, 10));    //  10000000000
// console.log(calculateExponent(3, 3));      //  27

// 54 => Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr){
// const leastElm = arr.pop();
// return leastElm;

// solve loop
let lastElement;   
for (let i = 0; i < arr.length; i++) {
    lastElement = arr[i];
}
return lastElement;
}
// console.log(getLastItem([1, 2, 3]));               // 3
// console.log(getLastItem(["cat", "dog", "duck"]));  // "duck"
// console.log(getLastItem([true, false, true]));     // true

// 56 => String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function  intToString(num){
    return num + ""
}

function stringToInt(num){
        return +num
}

// console.log(intToString(4));  //  "4"
// console.log(stringToInt("4"));  //  4
// console.log(intToString(29348));  //  "29348"

// 57 => On/Off Switches
// Create a function that returns how many possible arrangements can come from a certain number of switches (on / off). In other words, for a given number of switches, how many different patterns of on and off can we have?

function posCom(num){
    // return 2 ** num;
    return Math.pow(2,num)
}
// console.log(posCom(1));     //  2
// console.log(posCom(3));     //  8
// console.log(posCom(10));     //  1024

// 58 => Among Us Imposter Formula
// Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.

function imposterFormula(i,p){
return `"${100 * (i/p)}%"`;
}
// console.log(imposterFormula(1, 10));   // "10%"
// console.log(imposterFormula(2, 5));   // "40%"
// console.log(imposterFormula(1, 8));   // "13%"

// 59 => Find Out the Leap Year
// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

function leapYear(year){
if(year % 4 === 0){
    if(year % 100 === 0){
        if(year % 400 === 0){
            return true;
        }else{
            return false;
        }
    }else{
        return true;
    }
}
else{
    return false
}
}
// console.log(leapYear(2020));   //  true
// console.log(leapYear(2021));   //  false
// console.log(leapYear(1968));   //  true

// 60 => Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

function newWord(str){
// const newWord = str.slice(1);
// const newWord = str.substring(1);    
// return newWord;

let  newWord = "";
for(let i = 1; i < str.length; i++){
     newWord += str[i] 
}
return newWord
}
// console.log(newWord("apple"));  //  "pple"
// console.log(newWord("cherry"));  //  "herry"
// console.log(newWord("plum"));  //  "lum"