// 61 => Find Out the Leap Year
// A leap year happens every four years, so it's a year that is perfectly divisible by four. However, if the year is a multiple of 100 (1800, 1900, etc), the year must be divisible by 400.

// Write a function that determines if the year is a leap year or not.

function leapYear(year) {
    // if(year % 4 === 0 && year * 100){
    //     return true;
    // }
    // return false;

    return year % 4 === 0 && year * 100 ? true : false;
}

// console.log(leapYear(2020));  //  true
// console.log(leapYear(2021));  //  false
// console.log(leapYear(1968));  //  true

// 62 => Moving House
// I'd like to calculate how long on average I've lived in a single house.
// Given a person's age and the number of times they've moved house as moves, return the average number of years that they've spent living in the same house.

function yearsInOneHouse(age, move) {
    return age / (move + 1);
}

// console.log(yearsInOneHouse(30, 1));  //  15
// console.log(yearsInOneHouse(15, 2));  //  5
// console.log(yearsInOneHouse(80, 0));  //  80

// 63 => Leap Year Function ⌚
// Write a function that returns true if a year is a leap, otherwise return false.

// A year is a "leap year" if it lasts 366 days, instead of 365 in a typical year. That extra day is added to the end of the shortest month, creating February 29.

// A leap year occurs every four years, and will take place if the year is a multiple of four. The exception to this is a year at the beginning of a century (for example, 1900 or 2000), where the year must be divisible by 400 to be a leap year.

// Look at the examples, and if you need help, look at the resources panel.

function leapYear(Year) {
    return Year % 4 === 0 && Year * 100 ? true : false;
}

// console.log(leapYear(1990)); //  false
// console.log(leapYear(1924)); //  true
// console.log(leapYear(2021)); //  false

// 64 => Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

function newWord(word) {
    let result = word.slice(1);
    // let result = word.substring(1);
    // let result = word.replace(word[0],"");
    return result;
}

// console.log(newWord("apple"));     //  "pple"
// console.log(newWord("cherry"));     //  "herry"
// console.log(newWord("plum"));     //  "lum"

// 65 => Flip the Boolean
// Due to a programming concept known as truthiness, certain values can be evaluated to (i.e. take the place of) booleans. For example, 1 (or any number other than 0) is often equivalent to true, and 0 is often equivalent to false.

// Create a function that returns the opposite of the given boolean, as a number.

function flipBool(num) {
    if (num === 1 || num === true) {
        return 0;
    }
    return 1

    // return num === 1 || num === true ? 0 : 1;
}

// console.log(flipBool(true));      //  0
// console.log(flipBool(false));      //  1
// console.log(flipBool(1));      //  0
// console.log(flipBool(0));      //  1

// 66 => Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

function helloName(name) {
    let result = `Hello ${name}!`
    return result;
}

// console.log(helloName("Gerald"));      //  "Hello Gerald!"
// console.log(helloName("Tiffany"));      //  "Hello Tiffany!"
// console.log(helloName("Ed"));      //  "Hello Ed!"

// 67 => Is the Number Even or Odd?
// Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        return "even";
    }
    return "odd";

    // return num % 2 === 0 ? "even" : "odd";
}

// console.log(isEvenOrOdd(3));     //  "odd"
// console.log(isEvenOrOdd(146));     //  "even"
// console.log(isEvenOrOdd(19));     //  "odd"

// 68 => Fix the Error: Check Whether a Given Number Is Odd
// Éowyn has written the function isOdd() to check if a given number is odd or not. Unfortunately, the function does not return the correct result for all the inputs. Help her fix the error.

function isOdd(num) {
    return num > 0 || num < 0 ? true : false;
}
// console.log(isOdd(-5));    // true
// console.log(isOdd(25));    // true
// console.log(isOdd(0));    // false

// 64 => Stack the Boxes
// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...

// Stack the Boxes

// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

function stackBoxes(cube) {
    let result = cube * cube;
    return result;
}

// console.log(stackBoxes(1));   //  1
// console.log(stackBoxes(2));   //  4
// console.log(stackBoxes(0));   //  0


// 65 => Triangle and Parallelogram Area Finder
// Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.

function areaShape(base, height, shape) {
    if (shape === "triangle") {
        return 1 / 2 * base * height;
    }
    else {
        return base * height;
    }

    //    return shape === "triangle" ? 1/2 * base * height : base * height;
}

// console.log(areaShape(2, 3, "triangle"));       //  3
// console.log(areaShape(8, 6, "parallelogram"));       //  48
// console.log(areaShape(2.9, 1.3, "parallelogram"));       //  3.77

// 66 => Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
    // let result = arr.join("");
    // return result

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));      //  "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));      //  "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));      //  "123asdAAAA"

// 67 => Concatenating Two Integer Arrays
// Create a function to concatenate two integer arrays.

function concat(arr1,arr2){
    // let result = arr1.concat(arr2);
    // return result;

    let result = arr1;
    for(let i = 0; i < arr2.length; i++){
        result.push(arr2[i]);
    }
    return result;
}

// console.log(concat([1, 3, 5], [2, 6, 8]));       //  [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2]));       //  [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3]));       //  [4, 5, 1, 3, 3, 3, 3, 3]

// 68 => Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr,str){
    // let result = arr.indexOf(str);
    // return result;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === str){
            return i;
        }
    }
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));      //  2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));      //  1
// console.log(findIndex(["a", "g", "y", "d"], "d"));      //  3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));      //  0

// 69 => Array Indexing
// Given an index and an array, return the value of the array with the given index.

function valueAt(arr,index){
// let result = arr[Math.floor(index)];
// return result;

index = Math.floor(index);

for(let i = 0; i < arr.length; i++){
        if(i === index){
            return arr[i];
        }
    }   
}

// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2));      //  6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2));      //  5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2));      //  4

// 70 => Find the Index (Part 1)
// Create a function that finds the index of a given item.

function search(arr,index){
//    let result = arr.indexOf(index);
//    return result;

for(let i = 0; i < arr.length; i++){
    if(arr[i] === index){
        return i;
    }
}
return -1;
}

// console.log(search([1, 5, 3], 5));      //  1
// console.log(search([9, 8, 3], 3));      //  2
// console.log(search([1, 2, 3], 4));      //  -1


