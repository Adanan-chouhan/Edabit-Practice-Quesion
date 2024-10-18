// 41 => Return Negative
// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(num){
    // if(num){
    //     return -num
    // }
    // return num;

return num ? -num : num;
}

// console.log(returnNegative(4));     //  -4
// console.log(returnNegative(15));     //  -15
// console.log(returnNegative(-4));     //  -4
// console.log(returnNegative(0));     //  0

// 42 => Reverse an Array
// Write a function to reverse an array.

function reverse(arr){
    // let result = arr.reverse();
    // return result;

    let result = [];
    for(let i = arr.length-1; i >= 0; i--){
        result.push(arr[i]);
    }
    return result;
}

// console.log(reverse([1, 2, 3, 4]));      //  [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4]));      //  [4, 3, 2, 9, 9]
// console.log(reverse([]));      //  []

// 43 => Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age,isSupervised){
    //    if(age >= 15 || isSupervised === true){
    //     return true;
    //    }
    //    return false;

return age >= 15 || isSupervised === true ? true : false;
}

// console.log(acceptIntoMovie(14, true)); //  true
// console.log(acceptIntoMovie(14, false)); //  false
// console.log(acceptIntoMovie(16, false)); //  true

// 44 => Radians to Degrees
// Create a function that takes an angle in radians and returns the corresponding angle in degrees.

function radiansToDegrees(radians){
    return radians * (180 / Math.PI);
}

// console.log(radiansToDegrees(1));   //  57.29577951308232
// console.log(radiansToDegrees(20));   //  1145.9155902616465
// console.log(radiansToDegrees(50));   //  2864.7889756541163

// 45 => Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

function incrementItems(arr){
    // let result = [];
    // for(let i = 0; i < arr.length; i++){
    //     result.push(arr[i] + 1);
    // }
    // return result;

    return arr.map(item => item + 1);
}

// console.log(incrementItems([0, 1, 2, 3]));     //  [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8]));     //  [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4]));     //  [0, -1, -2, -3]

// 46 => Drinks Allowed?
// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.

// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age,serve){
    if(age >= 18 && serve === false){
        return true;
    }
    return false;

    // return age >= 18 && serve === false ? true : false;
}

// console.log(shouldServeDrinks(17, true));    //  false
// console.log(shouldServeDrinks(19, false));    //  true
// console.log(shouldServeDrinks(30, true));    //  false

// 47 => Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

function futurePeople(population){
    return population + (n * 360);  
}

// console.log(futurePeople(256, 2));   //  976
// console.log(futurePeople(3248, 6));   //  5408
// console.log(futurePeople(5240, 3));   //  6320

// 48 => Format I: Template String
// Write a template string according to the following example:

// Example
const a = "John";
const b = "Joe";
const c = "Jack";
const template = `Their names were: ${a}, ${b} and ${c}`;  // "Their names were:  John,  Joe  and  Jack."
// console.log(template)
// Tips
// A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:

const name = "John";
// console.log(`hello, my name is ${name}.`);  // "hello, my name is John."
// You can put an expression inside the curly braces :

const age = 12;
// console.log(`Hello, you are ${age < 18 ? 'young' : 'old'}.`);     //   "Hello, you are young."

// 49 => Arrow Functions
// In the Code tab you will find code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.

// // Write five adder functions:

const add2 = x => x + 2;
const add3 = x => x + 3;
const add5 = x => x + 5;
const add7 = x => x + 7;
const add11 = x => x + 11;

// console.log(add2(5));   // should return 2 + x.
// console.log(add3(5));   // should return 3 + x.
// console.log(add5(5));   // should return 5 + x.
// console.log(add7(5));   // should return 7 + x.
// console.log(add11(5));   // should return 11 + x.
// Tips
// Functions that consist only of a return can be written as a one-liner with an arrow function.

// For example, the code:

// function areSame(a, b) {
//     return a == b;
// }
// Can be simplified to:

// areSame = (a, b) => a == b;

// 50 => Using Ternary Operators
// The ternary operator (sometimes called Conditional Expressions) in JavaScript is an alternative to the if... else... statement.

// It is written in the format:

// condition ? result_if_true : result_if_false
// Ternary operators are often more compact than multi-line if statements, and are useful for simple conditional tests.

// For example:

// is_nice = true

// Using ternary operator.
// state = is_nice ? "nice" : "not nice"

// Equivalent code using multi-line if statements.
// if (is_nice)
//   state = "nice"
// else
//   state = "not nice"
// Write a function that uses the ternary operator to return "yeah" if bool is true, and "nope" otherwise.

function yeah_nope(valu){
 if(valu === true){
    return "yeah";
 }
 return "nope";
}

// console.log(yeah_nope(true));   //  "yeah"
// console.log(yeah_nope(false));   //  "nope"
