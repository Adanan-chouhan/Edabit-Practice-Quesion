// 31 =>  Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

function length(str) {
    //  return str.length; 

    let count = 0;
    for (let i = 0; i <= str.length; i++) {
        count = i;
    }
    return count;
}

// console.log(length("apple"));         //  5
// console.log(length("make"));         //  4
// console.log(length("a"));         //  1
// console.log(length(""));         //  0

// 32 => Divides Evenly
// Given two integers, a and b, return true if a can be divided evenly by b. Return false otherwise.

function dividesEvenly(a, b) {
    let result = a / b;
    return result % b === 0 ? true : false;
}

// console.log(dividesEvenly(98, 7));   //  true
// 98/7 = 14

// console.log(dividesEvenly(85, 4));   //  false
// 85/4 = 21.25

// 33 => Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

function stringInt(str) {
    // let convertNum = +str;
    // return convertNum;

    // let convertNum = Number(str);
    // return convertNum;

    let convertNum = parseInt(str);
    return convertNum;
}

// console.log(stringInt("6"));      //  6
// console.log(stringInt("1000"));      //  1000
// console.log(stringInt("12"));      //  12

// 34 => Area of a Rectangle
// Create a function that calculates the area of a rectangle. If the arguments are invalid, your function must return -1.

function area(length, width) {
    let rectangl = length * width;
    if (rectangl <= 0) {
        return -1
    }
    return rectangl;
}

// console.log(area(3, 4));      //  12
// console.log(area(10, 11));      //  110
// console.log(area(-1, 5));      //  -1
// console.log(area(0, 2));      //  -1

// 35 => Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(str1, str2) {
    return `${str2}, ${str1}`;
}

// console.log(concatName("First", "Last"));   //  "Last, First"
// console.log(concatName("John", "Doe"));   //  "Doe, John"
// console.log(concatName("Mary", "Jane"));   //  "Jane, Mary"

// 36 => Buggy Code
// The challenge is to try and fix this buggy code, given the inputs true and false. See the examples below for the expected output.

function has_bugs(input) {
    //    return input === true ? "sad days" :  "it's a good day"

    if (input === true) {
        return "sad days"
    } else {
        return "it's a good day"
    }
}

// console.log(has_bugs(true));    //  "sad days"
// console.log(has_bugs(false));    //  "it's a good day"

//  37 => Evaluate an Equation
// Create a function that evaluates an equation.

function eq(str){
let convertNum = eval(str)
return convertNum;
}

// console.log(eq("1+2"));      //  3
// console.log(eq("6/(9-7)"));      //  3
// console.log(eq("3+2-4"));      //  1

// 38 => Solve the Equation
// Create a function that takes an equation (e.g. "1+1"), and returns the answer.

function equation(str){
    let result  = eval(str);
    return result;
}

// console.log(equation("1+1"));     //  2
// console.log(equation("7*4-2"));     //  26
// console.log(equation("1+1+1+1+1"));     //  5

// 39 => Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.
// Your challenge is to write your own version using vanilla JavaScript.

function drop(arr,element){
    let result = arr.slice(element);
    return result;
}

// console.log(drop([1, 2, 3], 1));    //  [2, 3]
// console.log(drop([1, 2, 3], 2));    //  [3]
// console.log(drop([1, 2, 3], 5));    //  []
// console.log(drop([1, 2, 3], 0));    //  [1, 2, 3]

// 40 => Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(obj){
    return obj.upvotes - obj.downvotes;
}

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));   //  13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));   //  -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }));   //  0
