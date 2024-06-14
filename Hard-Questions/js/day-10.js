// 91 ==>   Remove Null from an Array
//  Create a function to remove all null values from an array.

function removeNull(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            res.push(arr[i])
        }
    }
    return res;
}
//  console.log(removeNull(["a", null, "b", null]));                // ["a", "b"]
//  console.log(removeNull([null, null, null, null, null]));        // []
//  console.log(removeNull([7, 8, null, 9]));                       // [7, 8, 9]

// 92 ==>   True Ones, False Zeros
//  Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.
function integerBoolean(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(1)) {
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result
}
// console.log(integerBoolean("100101"));     // [true, false, false, true, false, true]
// console.log(integerBoolean("10"));         // [true, false]
// console.log(integerBoolean("001"));        // [false, false, true]

// 93 ==>   Modifying the Last Character
//  Create a function which makes the last character of a string repeat n number of times.
function modifyLast(str, num) {
    let result = str.slice(0);
    for (let i = 0; i <= num; i++) {
        result += str.slice(str.length - 1);
    }
    return result;
}
//  console.log(modifyLast("Hello", 3));             // "Hellooo"
//  console.log(modifyLast("hey", 6));               // "heyyyyyy"
//  console.log(modifyLast("excuse me what?", 5));   // "excuse me what?????"

// 94 ==>   Where is Bob!?!
//  Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.
function findBob(arr) {
    const result = arr.indexOf("Bob");
    return result;
}
//  console.log(findBob(["Jimmy", "Layla", "Bob"]));                 // 2
//  console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));    // 0
//  console.log(findBob(["Jimmy", "Layla", "James"]));                // -1

// 95 ==>   Negate the Array of Numbers
//  Given an array of numbers, negate all elements contained within.
//      Negating a positive value -+n will return -n, because all +'s are removed.
//      Negating a negative value --n will return n, because the first - turns the second minus into a +.
function negate(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (+arr[i]) {
            res.push(-arr[i]);
        } else {
            res.push(+arr[i]);
        }
    }
    return res;
}
//  console.log(negate([1, 2, 3, 4]));        //[-1, -2, -3, -4]
//  console.log(negate([-1, 2, -3, 4]));      //[1, -2, 3, -4]
//  console.log(negate([]));                  //[]

// 96 ==>   Convert Number to String of Dashes
//  Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.
function Go(num) {
    for (let i = 0; i <= num; i++) {
        let res = ""
        for (let j = 1; j <= num; j++) {
            res += "-";
        }
        return res;
    }
}
// console.log(Go(1));   // "-"
// console.log(Go(5));   // "-----"
// console.log(Go(3));   // "---"

// 97 ==>   Word Endings
//  Create a function that adds a string ending to each member in an array.
function addEnding(arr, str) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] + str);
    }
    return res;
}
//  console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));       // ["cleverly", "meekly", "hurriedly", "nicely"]
//  console.log(addEnding(["new", "pander", "scoop"], "er"));                   // ["newer", "panderer", "scooper"]
//  console.log(addEnding(["bend", "sharpen", "mean"], "ing"));                // ["bending", "sharpening", "meaning"]

// 98 ==>   Flip the Boolean
//  Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
function reverse(boolean) {
    if (boolean === true) {
        return false;
    } else if (boolean === false) {
        return true;
    } else {
        return "boolean expected";
    }
}
// console.log(reverse(true));       // false
// console.log(reverse(false));      // true
// console.log(reverse(0));         // "boolean expected"
// console.log(reverse(null));      // "boolean expected"

// 99 ==>   Return the Four Letter Strings
//  Create a function that takes an array of strings and returns the words that are exactly four letters.
function isFourLetters(arr){
  let res = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length === 4){
     res.push(arr[i]);
    }
  }
  return res;
}
//  console.log(isFourLetters(["Tomato", "Potato", "Pair"]));           // ["Pair"]
//  console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));            // ["Bear"]
//  console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));    // ["Ryan", "Matt"]

// 100 ==>  Shuffle the Name
//  Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.
function nameShuffle(str){
    let words = str.split(" ");
        let res =  words.reverse();
        return res.join(" ")
    }

     console.log(nameShuffle("Donald Trump"));       // "Trump Donald"
     console.log(nameShuffle("Rosie O'Donnell"));    // "O'Donnell Rosie"
     console.log(nameShuffle("Seymour Butts"));      // "Butts Seymour"