// 51 => City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.
// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

function createID(str1, str2) {
    //   let s1 = str1.slice(0,1).toLowerCase();
    //   let s2 =  str2.slice(0,1).toUpperCase() + str2.slice(1,3).toLowerCase();
    //   let result = s1 + s2;
    //   return result;

    let s1 = "";
    let s2 = "";

    for (let i = 0; i < 1; i++) {
        s1 += str1[i].toLowerCase();
    }

    for (let i = 0; i < 3; i++) {
        if (i === 0) {
            s2 += str2[i].toUpperCase();
        }
        else {
            s2 += str2[i].toLowerCase();
        }
    }
    let result = s1 + s2;
    return result;
}

// console.log(createID("mary", "lamb"));  //  "mLam"
// console.log(createID("John", "SMITH"));  //  "jSmi"
// console.log(createID("mary", "smith"));  //  "mSmi"

// 52 => Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i]);
        }
    }
    return result;

    // let result = arr.filter((e) => typeof e === "number");
    // return result;
}

// console.log(filterArray([1, 2, 3, "a", "b", 4]));       //  [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));       //  [0, 1729]
// console.log(filterArray(["Nothing", "here"]));       //  []

// 53 => Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

function isBoiling(str) {
    if (str.includes("F")) {
        let temp = parseInt(str);;
        return temp >= 212;
    }

    if (str.includes("C")) {
        let temp = parseInt(str);
        return temp >= 100;
    }

    return false;
}
// console.log(isBoiling("212F"));     //  true
// console.log(isBoiling("100C"));     //  true
// console.log(isBoiling("0F"));     //  false

// 54 => Height of an Equilateral Triangle
// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

function height(side) {
    const heightInCm = (Math.sqrt(3) / 2) * side;
    const heightInMm = heightInCm * 10;
    return `${heightInMm.toFixed(1)} mm`;
}

// console.log(height(2));      //  17.3 mm
// console.log(height(5));      //  43.3 mm
// console.log(height(6.2));      //  53.7 mm  

// 55 => True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes("1")) {
            result.push(true);
        }
        else {
            result.push(false);
        }
    }
    return result;
}

// console.log(integerBoolean("100101"));     //  [true, false, false, true, false, true]
// console.log(integerBoolean("10"));     //  [true, false]
// console.log(integerBoolean("001"));     //  [false, false, true]

// 56 => Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function sayWhat(obj) {
    let values = Object.values(obj);
    let result = values.join(" ");
    result += " " + obj[2];
    return result;
}

// console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" }));       //  "Mommy please help please"
// console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" }));       //  "Me innocent is innocent"
// console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" }));       //  "Must lawyer call lawyer"

// 57 => Secret Function 2.0
// Create a function based on the input and output. Look at the examples, there is a pattern.


function secret(tag) {
    let res = [];

    const [tagName, count] = tag.split('*');
    for (let i = 1; i <= count; i++) {
        res.push((`<${tagName}></${tagName}>`))
    }

    return res.join("")
}

// console.log(secret("div*2"));   //  "<div></div><div></div>" 
// console.log(secret("p*1"));   //  "<p></p>"
// console.log(secret("li*3"));   //  "<li></li><li></li><li></li>"

// 58 => YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

// function uploadCount(arr,month){
// let count = 0;

// for(let date of arr){
//     if(date.startsWith(month)){
//         count++
//     };
// }
// return count;
// }

// function uploadCount(arr, month) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].includes(month)){
//             count++;
//         }
//     }
//     return count;
// }

function uploadCount(arr, month) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let date = arr[i].split(" ");
        if (date[0] === month) {
            count++;
        }
    }
    return count;
}

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept"));    //  2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct"));    //  1

// 59 => The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(letter, words) {
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(letter)) {
            return false;
        }
    }
    return true;
}

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));     //  false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));     //  true
// console.log(forbiddenLetter("m", []));     //  true

// 60 => Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.

// function calculate(num1,num2,operator){
// let result = eval(num1 + operator + num2);
// return result;
// }

function calculate(num1, num2, operator) {
    let result;

    switch (operator) {
        case "+": result = num1 + num2;
            break;
        case "-": result = num1 - num2;
            break;
        case "*": result = num1 * num2;
            break;
        case "/": result = num1 / num2;
            break;
        case "%": result = num1 % num2;
            break;
        default:
            throw new Error("Invalid operator");
    }
    return result;
}

// console.log(calculate(4, 9, "+"));      //  13
// console.log(calculate(12, 5, "-"));      //  7
// console.log(calculate(6, 3, "*"));      //  18
// console.log(calculate(25, 5, "/"));      //  5
// console.log(calculate(14, 3, "%"));      //  2

