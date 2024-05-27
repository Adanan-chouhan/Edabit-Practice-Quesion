// 61 => Flip the Boolean
// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

// Create a function that returns the opposite of the given boolean, as a number.

function flipBool(value) {
    return Number(!value);

    // if (value === 1) {
    //     return 0
    // }
    //  else if (value === 1) {
    //     return 1
    // } 
    // else if (value === true) {
    //     return 0;
    // }
    // else {
    //     return 1
    // }
}

// console.log(flipBool(true));    //  0
// console.log(flipBool(false));    //  1
// console.log(flipBool(1));    //  0
// console.log(flipBool(0));    //  1

// 62 => Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

function helloName(str){
    return `Hello ${str}!`;
}
// console.log(helloName("Gerald"));      //  "Hello Gerald!"
// console.log(helloName("Tiffany"));      //  "Hello Tiffany!"
// console.log(helloName("Ed"));      //  "Hello Ed!"

// 63 => Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num){
if(num % 2 === 0){
    return "even";
}
else{
    return "odd"
}
}
// console.log(isEvenOrOdd(3));      // "odd"
// console.log(isEvenOrOdd(146));      // "even"
// console.log(isEvenOrOdd(19));      // "odd"

// 64 => Fix the Error: Check Whether a Given Number Is Odd
// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

function isOdd(num){
  return num % 2 !== 0;
}

// console.log(isOdd(-5));  //  true
// console.log(isOdd(25));  //  true
// console.log(isOdd(0));  //  false

// 65 => Stack the Boxes
// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

// Stack the Boxes

// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

function stackBoxes(num){
  return num * num;
}
// console.log(stackBoxes(1))         // 1
// console.log(stackBoxes(2))         // 4
// console.log(stackBoxes(0))         // 0

// 66 => Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

function areaShape(base,height,shape){
if(shape === "triangle"){
    return  0.5 * base * height;
}else{
    return base * height;
}
}
// console.log(areaShape(2, 3, "triangle"));           //  3
// console.log(areaShape(8, 6, "parallelogram"));      //  48
// console.log(areaShape(2.9, 1.3, "parallelogram"));  //  3.77

// 67 => Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr){
    // return arr.join("");
    let convert =  ""
    for(let i = 0; i < arr.length; i++){
        convert += arr[i];
    }
    return convert;
}
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));                   // "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));       // "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));         // "123asdAAAA" 

// 68 => Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

function concat(arr1,arr2){
    // return arr1.concat(arr2for
    let concatenated = [];
    
    for (let i = 0; i < arr1.length; i++) {
        concatenated.push(arr1[i]);
    }
    
    for (let j = 0; j < arr2.length; j++) {
        concatenated.push(arr2[j]);
    }

    return concatenated;
} 
// console.log(concat([1, 3, 5], [2, 6, 8]));    //  [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));    //  [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));    //  [4, 5, 1, 3, 3, 3, 3, 3]

// 69 => Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr,index){
    // const find = arr.indexOf(index);
    // return find;

    for(let i = 0; i < arr.length; i++){
         if(arr[i] === index){
                return i
         }
    }
    return -1;
}
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));         // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));      // 1
// console.log(findIndex(["a", "g", "y", "d"], "d"));                      // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));      // 0

// 70 => Array Indexing
// Given an index and an array, return the value of the array with the given index.

function valueAt(arr,index){
// return arr[index];
for(let i = 0; i < arr.length; i++){
    if(i === index){
        return arr[i];
    }
}
}
console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));   //  6
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));   //  5
console.log(valueAt([1, 2, 3, 4], 6 / 2));   //  4