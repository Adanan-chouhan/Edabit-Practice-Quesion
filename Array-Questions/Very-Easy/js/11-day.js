// 111 => Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item, times) {
    // return new Array(times).fill(item);

    let result = [];
    for (let i = 0; i < times; i++) {
        result.push(item);
    }
    return result;
}

// console.log(repeat("edabit", 3));  //  ["edabit", "edabit", "edabit"]
// console.log(repeat(13, 5));        //  [13, 13, 13, 13, 13]
// console.log(repeat("7", 2));       //  ["7", "7"]
// console.log(repeat(0, 0));         //  []

// 112 => Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

function returnOnlyInteger(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16]));    //  [9, 2, 16]
// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"]));    //  [81, 123]
// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"]));    //  [10, 56, 20, 3]
// console.log(returnOnlyInteger(["String",  true,  3.3,  1]));    //  [1]

// 113 => Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]

function calcDeterminant(matrix) {
    const [[a, b], [c, d]] = matrix;
    return a * d - b * c
}

// console.log(calcDeterminant([
//   [1, 2],
//   [3, 4]
// ]));     //  -2

// console.log(calcDeterminant([
//   [5, 3],
//   [3, 1]
// ]));     //  -4

// console.log(calcDeterminant([
//   [1, 1],
//   [1, 1]
// ]));     //  0

// 114 => Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

function existsHigher(arr, n) {
    // return arr.some(num => num >= n);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= n) {
            return true
        }
    }
    return false;
}

// console.log(existsHigher([5, 3, 15, 22, 4], 10));         //  true
// console.log(existsHigher([1, 2, 3, 4, 5], 8));         //  false
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4));         //  true
// console.log(existsHigher([], 5));         //  false

// 115 => Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

function reverseCodingChallenge(arr, num) {
    //   return arr.map(e => e % num);

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] % num);
    }
    return result;
}
// console.log(reverseCodingChallenge([5, 7, 8, 2, 1], 2));                   // [1, 1, 0, 0, 1]
// console.log(reverseCodingChallenge([9, 8, 16, 47], 4));                    // [1, 0, 0, 3]
// console.log(reverseCodingChallenge([17, 11, 99, 55, 23, 1], 5));            // [2, 1, 4, 0, 3, 1]
// console.log(reverseCodingChallenge([6, 1], 7));                             // [6, 1]
// console.log(reverseCodingChallenge([3, 2, 9], 3));                           // [0, 2, 0]
// console.log(reverseCodingChallenge([48, 22, 0, 19, 33, 100], 10));           // [8, 2, 0, 9, 3, 0]

// 116 => Filter by Digit Length
// Create a function that filters out an array to include numbers that only have a certain number of digits.

function filterDigitLength(arr, num) {
    // return arr.filter(element => String(element).length === num);
    
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(String(arr[i]).length === num){
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3));      // [232, 555]
// Include only numbers with 3 digits.

// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1));      // [2, 7, 8, 9]
// Include only numbers with 1 digit.

// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1));      // []
// No numbers with only 1 digit exist => return empty array.

// console.log(filterDigitLength([5, 6, 8, 9], 1));      // [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.

// 117 => Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]

function evenOddPartition(arr) {
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evens.push(arr[i]);
        } else {
            odds.push(arr[i]);
        }
    }
    return [evens, odds];
}

// console.log(evenOddPartition([5, 8, 9, 2, 0]));       //  [[8, 2, 0], [5, 9]]
// console.log(evenOddPartition([1, 0, 1, 0, 1, 0]));    //  [[0, 0, 0], [1, 1, 1]]
// console.log(evenOddPartition([1, 3, 5, 7, 9]));       //  [[], [1, 3, 5, 7, 9]]
// console.log(evenOddPartition([]));                   //  [[], []]

// 118 => Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

function minusOne(arr) {
   let arrCopy = arr.slice();
  arrCopy.pop()
  return arrCopy;
}
// Examples
x = [1, 2, 3, 4, 5]
// minusOne(x));       //  [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x));       //  [1, 2, 3]  // 2nd time function is called.
// minusOne(x));       //  [1, 2]  // 3rd time function is called.
// minusOne(x));       //  [1]  // 4th time function is called.

// // What I want instead:
// console.log(minusOne(x)); // [1, 2, 3, 4]  // 1st time function is called.
// console.log(minusOne(x)); // [1, 2, 3, 4]  // 2nd time function is called.
// console.log(minusOne(x)); // [1, 2, 3, 4]  // 3rd time function is called.
// console.log(minusOne(x)); // [1, 2, 3, 4]  // 4th time function is called.

// 119 => Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(arr,factor){
    for(let i = 0; i < arr.length; i++){
        if (factor % arr[i] !== 0) {
            return false;
        }
    }
    return true;
    }


// console.log(checkFactors([2, 3, 4], 12));       //  true
// Since 2, 3, and 4 are all factors of 12.

// console.log(checkFactors([1, 2, 3, 8], 12));       //  false
// 8 is not a factor of 12.

// console.log(checkFactors([1, 2, 50], 100));       //  true

// console.log(checkFactors([3, 6], 9));       //  false

// 120 => Get the File Extension
// Write a function that maps files to their extension names.

function getExtension(arr){
    let result = [];
    for(let  i = 0; i < arr.length; i++){
        let parts = arr[i].split('.');
        if(parts.length > 1){
            result.push(parts.pop());
        }
    }
    return result;
}

console.log(getExtension(["code.html", "code.css"]));  // ["html", "css"]
console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));  // ["jpg", "pdf", "mp3"]
console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));  // ["rb", "cpp", "py", "js"]



































































































