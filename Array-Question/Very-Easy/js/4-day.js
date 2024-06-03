// 41 => Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.


function findDifference(a,b){
     const volumeA = a.reduce((sum,item) => sum * item);
    // // Calculate volume of cuboid b 
      const volumeB = b.reduce((sum,item)=> sum * item);

    // // Return the absolute difference of volumes
     return  Math.abs(volumeA - volumeB);
}

// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]));        // 12040
// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]));        // 276
// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]));        // 405
// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]));        // 5412

// 42 => Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
    let spacedString = "";
    for (let i = 0; i < str.length; i++) {
        spacedString += str[i];
        if (i !== str.length - 1) { // Add space after every character except the last one
            spacedString += " ";
        }
    }
    return spacedString;
}
    // console.log(spaceMeOut("space"));        //  "s p a c e"
    // console.log(spaceMeOut("far out"));        //  "f a r   o u t"
    // console.log(spaceMeOut("elongated musk"));        //  "e l o n g a t e d   m u s k"

// 43 => ES6: Destructuring Arrays II
// You can assign variables from nested arrays like this:

const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// Destructuring assignment
const [trans1,trans2,[trans3,[trans4]]] = arr;

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

// console.log(trans1) // outputs "cars"
// console.log(trans2) // outputs "planes"
// console.log(trans3) // outputs "trains"
// console.log(trans4) // outputs "motorcycles"

// 44 => Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr){
    // return arr.reduce((sum,item) => sum + item);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
     sum += arr[i]
    }
    return sum;
}

// console.log(getSumOfItems([2, 7, 4]));        // 13
// console.log(getSumOfItems([45, 3, 0]));        // 48
// console.log(getSumOfItems([-2, 84, 23]));        // 105

// 45 => Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).
function evenOrOdd(arr){
    let sum = 0;
    // Check if the sum is even or odd
    for(let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }

    // Check if the sum is even or odd
    if(sum % 2 === 0){
        return "even";
    }
    else{
        return "odd"
    }
}

// console.log(evenOrOdd([0]));              //  "even"
// console.log(evenOrOdd([1]));              //  "odd"
// console.log(evenOrOdd([]));               //  "even"
// console.log(evenOrOdd([0, 1, 5]));        //  "even"

// 46 => Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// Check the examples for a better understanding.

function rotateByOne(arr){
    let lastNo = arr[arr.length-1];
    for(let i = arr.length -1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = lastNo;
    return arr;
   
}
// console.log(rotateByOne([1, 2, 3, 4, 5]));      //  [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7]));      //  [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4]));      //  [4, 20, 15, 26, 8]

// 47 => Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

function invertArray(arr){
    let convert = []
    for(let i = 0; i < arr.length; i++){
            convert.push(-arr[i])
    }   
    return convert;
}

// console.log(invertArray([1, 2, 3, 4, 5]));     // [-1, -2, -3, -4, -5]
// console.log(invertArray([1, -2, 3, -4, 5]));   // [-1, 2, -3, 4, -5]
// console.log(invertArray([]));                  // []

// 48 => Get the File Name
// Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(str){
    // Split the string by directory separator
    let parts = str.split(/[\\/]/);
    // Return the last element of the resulting array
    return parts[parts.length - 1];
}
// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));   // "edabit.txt"
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));   // "Beethoven_5.mp3"
// console.log(getFilename("ffprobe.exe"));   // "ffprobe.exe"

// 49 => Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
// cola
// fanta

function skipTooMuchSugarDrinks(arr) {
    let noSugar = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== "fanta" && arr[i] !== "cola") {
            noSugar.push(arr[i]);
        }
    }
    return noSugar;
}

// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));    // ["water"]
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));             // []
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])); // ["lemonade", "beer", "water"]

// 50 => Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

function addIndexes(arr){
  
    for(let i = 0; i < arr.length; i++){
        arr[i] += i
    }
    return arr;
}
// console.log(addIndexes([0, 0, 0, 0, 0]))   // [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5]))   // [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1]))   // [5, 5, 5, 5, 5]

