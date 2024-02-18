// 71 ==> Get the File Name
//     Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(path) {
    const parts = path.split("/");
    return parts[parts.length - 1];
}
// console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"));  // "edabit.txt"
// console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"));   // "Beethoven_5.mp3"
// console.log(getFilename("ffprobe.exe"));   // "ffprobe.exe"

// 72 ==> Nth Star Number
//  Create a function that takes a positive integer and returns the nth "star number".
//  A star number is a centered figurate number a centered hexagram (six-pointed star), such as the one that Chinese checkers is played on.
function starNumber(n) {
    if (n <= 0) {
        return "please enter a positive integer";
    }
    return 6 * n * (n - 1) + 1;
}
//    console.log(starNumber(2));    // 13
//    console.log(starNumber(3));    // 37
//    console.log(starNumber(5));    // 121

// 73 ==> Lowercase, Uppercase or Mixed?
//  Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
function getCase(word) {
    if (word === word.toLowerCase()) {
        return "lower";
    } else if (word === word.toUpperCase()) {
        return "upper";
    } else {
        return "mixed";
    }
}
// console.log(getCase("whisper..."));   // "lower"
// console.log(getCase("SHOUT!"));       // "upper"
// console.log(getCase("Indoor Voice")); // "mixed"

// 74 ==> ES6: Destructuring Arrays
//  You can assign variables from nested arrays like this:
//    const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
//    let trans1 = arr[0]
//    let trans2 = arr[1]
//    let trans3 = arr[2][0]
//    let trans4 = arr[2][1][0]

const arr = ["cars", "planes", ["trains", ["motorcycles"]]];
const [trans1, trans2, [trans3, [trans4]]] = arr;

// console.log(trans1);    // outputs "cars"
// console.log(trans2);    // outputs "planes"
// console.log(trans3);    // outputs "trains"
// console.log(trans4);    // outputs "motorcycles"
//  With ES6, you can assign variables from arrays in a much more succint way. Use Array Destructuring to assign variables

// 75 ==> The 3 Programmers Problem
//  You hired three programmers and you (hopefully) pay them. Create a function that takes three numbers (the hourly wages of each programmer) and returns the difference between the highest-paid programmer and the lowest-paid.

function programmers(wage1, wage2, wage3) {
    const wages = [wage1, wage2, wage3];
    const maxWage = Math.max(...wages);
    const minWage = Math.min(...wages);
    return maxWage - minWage;
}

// console.log(programmers(147, 33, 526));    // 493
// console.log(programmers(33, 72, 74));      // 41
// console.log(programmers(1, 5, 9));         // 8

// 76 ==> Get the Sum of All Array Elements
//  Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
    let res = 0
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}
// console.log(getSumOfItems([2, 7, 4]));     // 13
// console.log(getSumOfItems([45, 3, 0]));     // 48
// console.log(getSumOfItems([-2, 84, 23]));     // 105

// 77 ==> Spaces Between Each Character
//  Create a function that takes a string and returns a string with spaces in between all of the characters.
function spaceMeOut(str) {
    // const result = str.split("").join(" ");
    // return result;
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res = res + " " + str[i];
    }
    return res
}
// console.log(spaceMeOut("space"));             // "s p a c e"
// console.log(spaceMeOut("far out"));           // "f a r  o u t"
// console.log(spaceMeOut("elongated musk"));    // "e l o n g a t e d   m u s k"

//   78 ==> Raucous Applause
//  After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound. An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps). Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(str) {
    let count = 0;
    const target = "Clap";

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === target) {
            count += str.length;
        }
    }
    return count;
}

function countClaps(str) {
    const matches = str.match(/Clap/gi);
    return matches ? matches.length : 0;
}
//    console.log(countClaps("ClaClaClaClap!"));                // 4
//    console.log(countClaps("ClClClaClaClaClap!"));            // 6
//    console.log(countClaps("CCClaClClap!Clap!ClClClap!"));    // 9

// 79 ==> Filter Strings from Array
//  Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let currentEle = parseInt(arr[i]);
        if (Number.isNaN(currentEle) === false) {
            res.push(currentEle);
        }
    }
    return res;
}
//    console.log(filterArray([1, 2, 3, "a", "b", 4]));                             // [1, 2, 3, 4]
//    console.log(filterArray(["A", 0, "MOIEN", 1729, "Khan 123", "1729"]));        // [0, 1729]
//    console.log(filterArray(["Nothing", "here"]));                                // []

//   80 ==> Summing the Squares
//   Create a function where given the number n, return the sum of all square numbers up to and including n.
//       squaresSum(3) ➞ 14
//       // 1² + 2² + 3² =
//       // 1 + 4 + 9 =
//       // 14 
function squaresSum(n) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        res += i * i;
    }
    return res;
}
console.log(squaresSum(3));      //14
console.log(squaresSum(12));      // 650
console.log(squaresSum(13));      // 819