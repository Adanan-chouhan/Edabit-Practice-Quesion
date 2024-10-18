// 71 => Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

function countCharacters(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].length;
    }
    return count;
}

// console.log(countCharacters([
//   "###",
//   "###",
//   "###"
// ]))   // 9

// console.log(countCharacters([
//   "22222222",
//   "22222222",
// ]))  // 16

// console.log(countCharacters([
//   "------------------"
// ]))  // 18

// console.log(countCharacters([]))  // 0

// console.log(countCharacters(["", ""])) // 0

// 72 => Extremely Over-Nested
// Create a function that returns the original value from a matrix with too many sub-arrays.

function deNest(arr) {
    while (Array.isArray(arr)) {
        arr = arr[0];
    }
    return arr;
}

// console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]));      // 3
// console.log(deNest([[[[[[[true]]]]]]]));      // true
// console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]));      // "edabit"

// 73 => String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
// See the below examples for a better understanding:

function stringPairs(item) {
    let res = [];
    let str = item.split("");
    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            res.push(str[i] + str[i + 1]);
        } else {
            res.push(str[i] + "*");
        }
    }
    return res;
}
// console.log(stringPairs("mubashir")); return      //  ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit"));      //  ["ed", "ab", "it"]
// console.log(stringPairs("airforces"));      //  ["ai", "rf", "or", "ce", "s*"]


// 74 => Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:
// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.

function makeRug(m, n, proc = "#") {
    const rug = [];
    const row = proc.repeat(n);
    for (let i = 0; i < m; i++) {
        rug.push(row);
    }
    return rug;
}

// console.log(makeRug(3, 5))        //  "#####","#####","#####"]
// console.log(makeRug(3, 5, '$'))   // ["$$$$$","$$$$$","$$$$$"]
// console.log(makeRug(2, 2, 'A'))   // ["AA","AA"]

// 75 => CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(arr, pattern) {
    let result = [];

    if (pattern === "") {
        return arr.sort();
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(pattern)) {
            result.push(arr[i]);
        }
    }

    return result.sort();
}

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "W"));        // ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));  // ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));   // ["Drupal", "Joomla", "Magento", "WordPress"]

//  76 => Cowbocinsoley Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

function rogerShots(arr) {
    let bottlesShort = 0
    let totalTime = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Bang!") {
            bottlesShort += 1;
            totalTime += 0.5
        }
        else if (arr[i] === "B returnangBang!") {
            bottlesShort += 2;
            totalTime += 0.5;
        }
    }
    return totalTime;
}

// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]));      //  3
// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]));      //  2.5
// console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"]));      //  2

// 77 => Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1  returnto 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.
// Number	Month Name 
// 1	 January
// 2	 February
// 3	 returnMarch return
// 4	 returnApril return
// 5	 returnMay return
// 6	 returnJune
// 7	 returnJuly
// 8	 returnAugust
// 9	September
// 10	October
// 11	November
// 12	December

function monthName(num) {
    let arr = [
        "",
        "January",
        "February",
        "March",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "Nuvember",
        "Decamber"
    ]
    return arr[num];

}

function monthName(num) {
    switch (num) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "Jun";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "Decamber";
        default:
            return "Invalid month name"
    }
}
// console.log(monthName(1));    // "March"
// console.log(monthName(12));   // "December"
// console.log(monthName(6));    // "June"

// 78 => Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5

// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

function averageIndex(arr) {
    // Function to get the numerical value of a letter
    const letterValue = letter => letter.charCodeAt(0) - 96; // 'a' has ASCII value 97

    // Calculate the sum of numerical values
    const sum = arr.reduce((total, letter) => total + letterValue(letter), 0);

    // Calculate the average
    const average = sum / arr.length;

    // Round the average to two decimal points
    return average.toFixed(2);
}
// console.log(averageIndex(["a", "b", "c", "i"]));     //  3.75
// console.log(averageIndex(["e", "d", "a", "b", "i", "t"]));     //  6.83
// console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]));     //  12.62

// 79 => RegEx: Boundary Assertions II
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.
function accepted(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].startsWith("C")) {
            result.push(arr[i]);
        }
    }
    return result;
    // return arr.filter(word => !/^C/.test(word));
}

// console.log(accepted(["Ducks", "Bears", "Cats"])); // ["Ducks", "Bears"]
// console.log(accepted(["cars", "trucks", "planes"])); // ["cars", "trucks", "planes"]
// console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"])); // ["Worms", "Bugs", "Beans"]

// 80 =>  Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky13(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i] % 13 !== 0 ? result.push(arr[i]) : i ; 
    }
    return result;
    }

console.log(unlucky13([53, 182, 435, 591, 637]));  // [53, 435, 591]
// 182 and 637 are divisible by 13.

console.log(unlucky13([24, 316, 393, 458, 1279]))  // [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

console.log(unlucky13([104, 351, 455, 806, 871]));   // []
// All numbers in the array are divisible by 13. 
