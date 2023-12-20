// 1 ==> Correct the Mistakes

// function squared(num){
//     return num * num;
// }

//   console.log(squared(5))    //  ➞ 25
//   console.log(squared(9))    //  ➞ 81
//   console.log(squared(100))  //  ➞ 10000


// 2 ==> Is the Number Less than or Equal to Zero?
//     Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

// function lessThanOrEqualToZero(number){
//     return number <= 0;
// }
// console.log(lessThanOrEqualToZero(5));
// console.log(lessThanOrEqualToZero(0));
// console.log(lessThanOrEqualToZero(-2));

// 3 ==> Less Than 100?
//     Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

// function lessThan100(num1,num2){
//    return num1 + num2 < 100;
// }
// console.log(lessThan100(22,15));
// console.log(lessThan100(83,34));

// 4 ==> Football Points
// Create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far. A win receives 3 points, a draw 1 point and a loss 0 points.    

// function footballPoints(wins,draws,losses){

//     return 3 * wins; 
//     return 1 * draws;
//     return 0 * losses;

// }
// console.log(footballPoints(3,4,2));
// console.log(footballPoints(5,0,2));
// console.log(footballPoints(0,0,1));

//  5 ==> Are the Numbers Equal?
//     Create a function that returns true when num1 is equal to num2; otherwise return false.

// function isSameNum(num1,num2){
//     return num1== num2;
// }
// console.log(isSameNum(4,8));
// console.log(isSameNum(2,2));
// console.log(isSameNum(2,"2"));
// console.log(isSameNum(0,-0));

// 6 ==> return true if number is true

// function isEven(number){
//     return number % 2 == 0;
// }

// console.log(isEven(2));
// console.log(isEven(3));


// 7 ==> The Farm Problem
//     In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:
//         chickens = 2 legs
//         cows = 4 legs
//         pigs = 4 legs
//     The farmer has counted his animals and he gives you a subtotal for each species. You have to implement a function that returns the total number of legs of all the animals.
//     animals(2, 3, 5) ➞ 36
//     animals(1, 2, 3) ➞ 22
//     animals(5, 2, 8) ➞ 50
//     Remember that the farmer wants to know the total number of legs and not the total number of animals.

// function animals(chickens, cows, pigs) {
// return  (chickens * 2) + (cows * 4) + (pigs * 4);
// }
// console.log(animals(2, 3, 5));
// console.log(animals(1, 2, 3));
// console.log(animals(5, 2, 8));


// 8 ==> Convert Hours and Minutes into Seconds
//     Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// function convert(hours, minutes) {
//     return hours * 3600;
//     return minutes * 60;

// }
// console.log(convert(1, 3));
// console.log(convert(2, 0));
// console.log(convert(0, 0));


 // 9 ==> Equality Check
//     In this challenge, you must verify the equality of two different given parameters: a and b.
//     Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:
//         Numbers
//         Strings
//         Booleans (false or true)
//         Special values: undefined, null and NaN

// function checkEquality(value1, value2) {
//     // const result = value1 === value2;
//     const result = Object.is(value1, value2);
  
//     return result;
//   }
  
  // console.log(checkEquality(1, true));
  // console.log(checkEquality(0, "0"));
  // console.log(checkEquality(1, 1));
  // console.log(checkEquality(undefined, undefined));
  // console.log(checkEquality(NaN, NaN));

// 10 ==> Using the "&&" Operator
//     JavaScript has a logical operator &&. The && operator takes two boolean values, and returns true if both values are true.
//     Consider a && b:
//         a is checked if it is true or false.
//         If a is false, false is returned.
//         b is checked if it is true or false.
//         If b is false, false is returned.
//         Otherwise, true is returned (as both a and b are therefore true ).
//     The && operator will only return true for true && true.
//     Make a function using the && operator.

// function and(a, b) {
//     const result = a && b;
//     return result;
//   }
  
  // console.log(and(true, false));
  // console.log(and(true, true));
  // console.log(and(false, true));
  // console.log(and(false, false));
