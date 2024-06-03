// 71 => Find the Index (Part 1)
// Create a function that finds the index of a given item.

function search(arr, find) {
    //  const result = arr.findIndex(element => element === find);
    // return arr.indexOf(item);    

    //  return result;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === find) {
            return i
        }
    } return -1
}
// console.log(search([1, 5, 3], 5))  // 1
// console.log(search([9, 8, 3], 3))  // 2
// console.log(search([1, 2, 3], 4))  // -1

// 72 => Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function sumArray(arr) {
    //    return arr.reduce((accumlater,currentValue) => accumlater + currentValue,0);

    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

// console.log(sumArray([1, 2, 3, 4, 5]));       //  15
// console.log(sumArray([-1, 0, 1]));       //  0
// console.log(sumArray([0, 4, 8, 12]));       //  24

// 73 => Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr, item) {
    // return arr.findIndex((e)=> e === item);
    // return arr.indexOf(item);    

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i
        }
    } return -1
}
// console.log(search([1, 2, 3, 4], 3));     //  2
// console.log(search([2, 4, 6, 8, 10], 8));     //  3
// console.log(search([1, 3, 5, 7, 9], 11));     //  -1

// 74 => Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

function word(str) {
    //    if(str === "one"){
    //     return 1
    //    }else if(str === "two"){
    //     return 2
    //    }else if(str === "three"){
    //     return 3
    //    }else if(str === "four"){
    //     return 4
    //    }else if(str === "five"){
    //     return 5
    //    }else if(str === "six"){
    //     return 6
    //    }else if(str === "seven"){
    //     return 7
    //    }else if(str === "eigth"){
    //     return 8
    //    }else if(str === "nine"){
    //     return 9
    //    }else{
    //     return 0

    switch (str) {
        case "one":
            return 1;
        case "two":
            return 2;
        case "three":
            return 3;
        case "four":
            return 4;
        case "five":
            return 5;
        case "six":
            return 6;
        case "seven":
            return 7;
        case "eight": // Corrected typo from "eigth" to "eight"
            return 8;
        case "nine":
            return 9;
        case "zero":
            return 0;
        default:
            return -1; // Return -1 for invalid inputs
    }
}

// console.log(word("one"));    //  1
// console.log(word("two"));    //  2
// console.log(word("nine"));    //  9

// 75 => Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function check(arr, value) {
    // return arr.includes(value);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true;
        }
    }
    return false;
}
// console.log(check([1, 2, 3, 4, 5], 3));     //  true
// console.log(check([1, 1, 2, 1, 1], 3));     //  false
// console.log(check([5, 5, 5, 6], 5));     //  true
// console.log(check([], 5));     //  false

// 76 => Number of Stickers
// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.

// Pictures of Rubik's Cubes

// The Rubik's cube of side length 1 has 6 stickers.
// The Rubik's cube of side length 2 has 24 stickers.
// The Rubik's cube of side length 3 has 54 stickers.

function howManyStickers(n) {
    return 6 * n * n;
}
// console.log(howManyStickers(1))   // 6
// console.log(howManyStickers(2))   // 24
// console.log(howManyStickers(3))   // 54

// 77 => Four Passengers and a Driver
// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.

function carsNeeded(passengers) {
    if (passengers === 0) return 0;
    return Math.ceil(passengers / 5);
}
// console.log(carsNeeded(5));    //  1
// console.log(carsNeeded(11));    //  3
// console.log(carsNeeded(0));    //  0
// console.log(carsNeeded(4));    // 1
// console.log(carsNeeded(10));   // 2

// 78 => Check String for Spaces
// Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
    // return str.includes(" ");
    for (let i = 0; i < str.length; i++) {
        if (str[i] === " ") {
          return true;
        }
      }
      return false;
}
// console.log(hasSpaces("hello"));              //  false
// console.log(hasSpaces("hello, world"));              //  true
// console.log(hasSpaces(" "));              //  true
// console.log(hasSpaces(""));             //  false   
// console.log(hasSpaces(",./!@#"));              //  false 

// 79 => Kinetic Energy
// Kinetic energy can be calculated with the following formula:

// KE = 1/2mv²

// m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J
// Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.

function kineticEnergy(num,pow){
    
}
console.log(kineticEnergy(60, 3));     //  270
console.log(kineticEnergy(45, 10));     //  2250
console.log(kineticEnergy(63.5, 7.35));     //  1715