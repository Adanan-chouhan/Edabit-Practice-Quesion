// 1 => Bitwise Operations
// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23));     //  00000110
// bitwiseOR(6, 23));     //  00010111
// bitwiseXOR(6, 23));     //  00010001

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

function bitwiseAND(num1,num2){
    return num1 & num2;
}

function bitwiseOR(num1,num2){
return num1 | num2;
}

function bitwiseXOR(num1,num2){
    return num1  ^ num2
}
// console.log(bitwiseAND(7, 12));     //  4
// console.log(bitwiseOR(7, 12));     //  15
// console.log(bitwiseXOR(7, 12));     //  11

// 2 => Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num){
let sum = 0;
  for(let i = 0; i <= num;  i++){
    sum += i;
  }
  return sum
}
// console.log(addUp(4));    //  10
// console.log(addUp(13));    //  91
// console.log(addUp(600));    //  180300

// 3 => Left Shift by Powers of Two
// The left shift operation is similar to multiplication by powers of two.
// Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

function shiftToLeft(num1,num2){
  return num1 << num2
}
// console.log(shiftToLeft(5, 2));     //  20
// console.log(shiftToLeft(10, 3));     //  80
// console.log(shiftToLeft(-32, 2));     //  -128
// console.log(shiftToLeft(-6, 5));     //  -192
// console.log(shiftToLeft(12, 4));     //  192
// console.log(shiftToLeft(46, 6));     //  2944

// 4 => Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

 function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
  }

// console.log(minMax([1, 2, 3, 4, 5]));          //  [1, 5]
// console.log(minMax([2334454, 5]));          //  [5, 2334454]
// console.log(minMax([1]));          //  [1, 1]

// 5 => Is it Time for Milk and Cookies?
// Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa! Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date){
   const month =  date.getMonth();
   const day = date.getDate();
   return month === 11 && day === 24;
}
// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));   //  true
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));   //  false
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));   //  true

// 6 => Which Function Returns the Larger Number?
// Your function will be passed two functions, f and g, that don't take any parameters. Your function has to call them, and return a string which indicates which function returned the larger number.

// If f returns the larger number, return the string f.
// If g returns the larger number, return the string g.
// If the functions return the same number, return the string neither.

function whichIsLarger(f,g){
const fReslt = f();
const gResult = g();
if(fReslt > gResult){
  return "f"
}
else if(gResult > fReslt){
return "g"
}
else{
  return "neither";
}
}
// console.log(whichIsLarger(() => 5, () => 10));       //  "g"
// console.log(whichIsLarger(() => 25,  () => 25));       //  "neither"
// console.log(whichIsLarger(() => 505050, () => 5050));       //  "f"

// 7 => Convert a Number to Base-2
// Create a function that returns a base-2 (binary) representation of a base-10 (decimal) string number. To convert is simple: ((2) means base-2 and (10) means base-10) 010101001(2) = 1 + 8 + 32 + 128.

// Going from right to left, the value of the most right bit is 1, now from that every bit to the left will be x2 the value, value of an 8 bit binary numbers are (256, 128, 64, 32, 16, 8, 4, 2, 1).

function binary(num){
return  num.toString(2);
}
console.log(binary(1));    // "1"
// 1*1 = 1

console.log(binary(5));  // "101"
// 1*1 + 1*4 = 5

console.log(binary(10))  // "1010"
// 1*2 + 1*8 = 10 