// 31 => Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(syllables) {
    let countSyllables = 0;
    syllables = syllables.toLowerCase();
    let result = syllables.slice(0, 2);  // Pehle do characters ko store karte hain

    for (let i = 0; i < syllables.length; i += 2) {  // 2-2 blocks me check karenge
        if (syllables.slice(i, i + 2) === result) {  // Har 2 character ko compare karenge
            countSyllables++;
        }
    }

    return countSyllables;
}

// console.log(countSyllables("Hehehehehehe"));           //  6
// console.log(countSyllables("bobobobobobobobo"));           //  8
// console.log(countSyllables("NANANA"));           //  3

// 32 => Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Examples
// ["1", "3", "3.6"]);        //  [1, 3, 3.6]


function toNumberArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(Number(arr[i]));
    }
    return result;
}
// console.log(toNumberArray(["9.4", "4.2"]));        //  [9.4, 4.2]
// console.log(toNumberArray(["91", "44"]));        //  [91, 44]
// console.log(toNumberArray(["9.5", "8.8"]));        //  [9.5, 8.8]

// 33 => Reverse Psychology
// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

function reversePsychology(str) {
    let resut = "Do not ";
    return resut.concat(str);

    // return `Do not ${str}.`;
}

// console.log(reversePsychology("wash the dishes"));      //  "Do not wash the dishes."
// console.log(reversePsychology("eat your lunch"));      //  "Do not eat your lunch."
// console.log(reversePsychology("go to school"));      //  "Do not go to school."

// 34 => Char-to-ASCII
// Create a function that returns the ASCII value of the passed in character.

function ctoa(str) {
    return str.charCodeAt(0);
}

// console.log(ctoa("A"));     //  65
// console.log(ctoa("m"));     //  109
// console.log(ctoa("["));     //  91
// console.log(ctoa("/"));     // 47

// 35 => Case Insensitive Comparison
// Write a function that validates whether two strings are identical. Make it case insensitive.

function match(str1, str2) {
    let string1 = str1.toLowerCase();
    let string2 = str2.toLowerCase();
    return string1 === string2;

    return str1.toLowerCase() === str2.toLowerCase() ? true : false;

    // if(str1.toLowerCase() === str2.toLowerCase()){
    //     return true;
    // }
    // return false;
}

// console.log(match("hello", "hELLo"));       //  true
// console.log(match("motive", "emotive"));       //  false
// console.log(match("venom", "VENOM"));       //  true
// console.log(match("mask", "mAskinG"));       //  false

// 36 => Repeat String
// Create a function that takes a string txt and a number n and returns the repeated string n number of times.
// If given argument txt is not a string, return Not A String !!

function repeatString(str, repeated) {

    if (typeof str !== "string") {
        return "Not A String";
    }

    let result = "";
    for (let i = 0; i < repeated; i++) {
        result += str;
    }
    return result;
}

// console.log(repeatString("Mubashir", 2));       //  "MubashirMubashir"
// console.log(repeatString("Matt", 3));       //  "MattMattMatt"
// console.log(repeatString(1990, 7));       //  "Not A String !!"

// 37 => String or Integer?
// Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

function intOrString(args) {
    if (typeof args === "number") {
        return "int";
    }
    return "str";

    // return typeof args === "number" ? "int" : "str";
}

// console.log(intOrString(8));           //  "int"
// console.log(intOrString("Hello"));           //  "str"
// console.log(intOrString(9843532));           //  "int"

// 38 => Hello; Hello World; World
// Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

function helloWorld(num) {
    if (num  === 3) {
        return "Hello";
    } else if (num === 5) {
        return "world"
    }
    return "Hello world"
 
}

// console.log(helloWorld(3));      //  "Hello"
// console.log(helloWorld(5));      //  "World"
// console.log(helloWorld(15));      //  "Hello World"

// 39 => String to Integer and Vice Versa
// Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

function toInt(str){
// let result = Number(str);
// let result = parseInt(str)
let result = +str;
return result;;
}

function toStr(num){
    // let result = String(num);
    let result = num.toString();
    return result;
}

// console.log(toInt("77"));      //  77
// console.log(toInt("532"));      //  532
// console.log(toStr(77));      //  "77"
// console.log(toStr(532));      //  "532" 

// 40 => Modifying the Last Character
// Create a function which makes the last character of a string repeat n number of times.

function modifyLast(str,n){
 let lastChar = str.charAt(str.length-1);
 let repeatLastChar = lastChar.repeat(n)
 return str.slice(0,-1) + repeatLastChar;
}

// console.log(modifyLast("Hello", 3));              //  "Hellooo"
// console.log(modifyLast("hey", 6));              //  "heyyyyyy"
// console.log(modifyLast("excuse me what?", 5));              //  "excuse me what?????"

