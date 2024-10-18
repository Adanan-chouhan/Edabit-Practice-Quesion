//  11 => Concatenate First and Last Name into One String
// Given two strings, firstName and lastName, return a single string in the format "last, first".

function concatName(str1, str2) {
    // let concatStr = str2 + ","  + " "+ str1;
    // return concatStr;

    // return `${str2}, ${str1}`;
}

// console.log(concatName("First", "Last"));     //  "Last, First"
// console.log(concatName("John", "Doe"));     //  "Doe, John"
// console.log(concatName("Mary", "Jane"));     //  "Jane, Mary"

// 12 => Evaluate an Equation
// Create a function that evaluates an equation.

function eq(str) {
    let result = eval(str);
    return result;
}

// console.log(eq("1+2"));    //  3
// console.log(eq("6/(9-7)"));    //  3
// console.log(eq("3+2-4"));    //  1

// 13 =>  Format I: Template String
// Write a template string according to the following example:

const a = "John";
const b = "Joe";
const c = "Jack";
const template = "your template string"  //  "Their names were:  John,  Joe  and  Jack."
// Tips
// A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:

const name = a;
// console.log(`hello, my name is ${name}.`) //  "hello, my name is John."
// You can put an expression inside the curly braces :

const age = 12;
// console.log(`Hello, you are ${age < 18 ? 'young' : 'old'}.`);    //  "Hello, you are young."

// 14 => Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str) {
    if (str.length % 2 === 0) {
        return true;
    }
    return false;

    // return str.length % 2 === 0;

    // return str.length % 2 === 0 ? true : false;
}

// console.log(oddOrEven("apples"));     //  true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

// console.log(oddOrEven("pears"));     //  false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

// console.log(oddOrEven("cherry"));     //  true

// 15 => String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num) {
    // let result = `${num}`;
    // let result = String(num);
    let result = num.toString();
    return result;
}

function stringToInt(str) {
    // let result = Number(str);
    // let result = +str;
    let result = parseInt(str);
    return result;
}

// console.log(intToString(4));      //  "4"
// console.log(stringToInt("4"));      //  4
// console.log(intToString(29348));      //  "29348"

// 16 => Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

function newWord(str) {
    let word = str.slice(1);
    return word;
}
// console.log(newWord("apple"));    //  "pple"
// console.log(newWord("cherry"));    //  "herry"
// console.log(newWord("plum"));    //  "lum"

// 17 => Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

function helloName(str) {
    let result = `Hello ${str}!`;
    return result;
}

// console.log(helloName("Gerald"));        //  "Hello Gerald!"
// console.log(helloName("Tiffany"));        //  "Hello Tiffany!"
// console.log(helloName("Ed"));        //  "Hello Ed!"

// 18 => Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr) {
    // let result = arr.join("");
    // return result;

    // let result = arr.reduce((acc,curr) => acc + curr,"");
    // return result;

    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}

// console.log(arrayToString([1, 2, 3, 4, 5, 6]));        //  "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"]));        //  "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"]));        //  "123asdAAAA"

// 19 => Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr, index) {
    // let result = arr.indexOf(index);
    // return result;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === index) {
            return i;
        }
    }
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));          //  2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));          //  1
// console.log(findIndex(["a", "g", "y", "d"], "d"));          //  3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));          //  0

// 20 => Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0

function word(num) {
    switch (num) {
        case "one": return 1;
            break;
        case "two": return 2;
            break;
        case "three": return 3;
            break;
        case "four": return 4;
            break;
        case "five": return 5;
            break;
        case "six": return 6;
            break;
        case "seven": return 7;
            break;
        case "eight": return 8;
            break;
        case "nine": return 9;
            break;
        case "zero": return 10;
            break;

    }
}

// console.log(word("one"));     //  1
// console.log(word("two"));     //  2
// console.log(word("nine"));     //  9