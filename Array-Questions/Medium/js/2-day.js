// 11 => Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

function clone(arr) {
    let cloneArr = [...arr];
    arr.push(cloneArr);
    return arr;
}

// console.log(clone([1, 1]));            //  [1, 1, [1, 1]]
// console.log(clone([1, 2, 3]));            //  [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"]));            //  ["x", "y", ["x", "y"]]

// 12 => 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

function marathonDistance(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }

    return sum === 25
}

// console.log(marathonDistance([1, 2, 3, 4]));      //  false
// console.log(marathonDistance([1, 9, 5, 8, 2]));      //  true
// console.log(marathonDistance([-6, 15, 4]));      //  true

// 13 => Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
            return false;
        }
    }
    return true;
}

// console.log(testJackpot(["@", "@", "@", "@"]));      //  true
// console.log(testJackpot(["abc", "abc", "abc", "abc"]));      //  true
// console.log(testJackpot(["SS", "SS", "SS", "SS"]));      //  true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]));      //  false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"]));      //  false

// 14 => Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(str) {
    let words = str.split(" ");
    let i = words.iOf("Nemo");

    if (i !== -1) {
        return `I found Nemo at ${i + 1}`
    }
}

// console.log(findNemo("I am finding Nemo !"));          //  "I found Nemo at 4!"
// console.log(findNemo("Nemo is me"));          //  "I found Nemo at 1!"
// console.log(findNemo("I Nemo am"));          //  "I found Nemo at 2!"

// 15 => Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

function totalVolume(...boxes) {
    let sum = 0;
    for (let i = 0; i < boxes.length; i++) {
        volume = boxes[i][0] * boxes[i][1] * boxes[i][2];
        sum += volume;
    }
    return sum;
}

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));          //  63
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));          //  10
// console.log(totalVolume([1, 1, 1]));          //  1

// 16 => i Multiplier
// Return the sum of all items in an array, where each item is multiplied by its i (zero-based). For empty arrays, return 0.

function iMultiplier(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * [i]
    }
    return sum;
}

// console.log(iMultiplier([1, 2, 3, 4, 5]));    //  40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// console.log(iMultiplier([-3, 0, 8, -6]));    //  -2
// (-3*0 + 0*1 + 8*2 + -6*3)

// 17 => Special Arrays
// An array is special if every even i contains an even number and every odd i contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++
        }
        else if (arr[i] % 2 !== 0) {
            oddCount++
        }
    }
    return evenCount === oddCount;
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));     //  true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));     //  false
// i 2 has an odd number 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));     //  false
// i 3 has an even number 8.

// 18 => Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(7)) {
            result.push(arr[i])
        }
        else {
            result.push(arr[i] + 7)
        }
    }
    return result;
}

// console.log(jazzify(["G", "F", "C"]));   //  ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"]));   //  ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));   //  ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([]));   //  []

// 19 => Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i]
        }
    }
    return sum;
}

// console.log(numbersSum([1, 2, "13", "4", "645"]));      //  3
// console.log(numbersSum([true, false, "123", "75"]));      //  0
// console.log(numbersSum([1, 2, 3, 4, 5, true]));      //  15

// 20 => Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

function ascDesNone(arr, str) {
    if (str === "Asc") {
        return arr.sort((a, b) => a - b);
    }
    else if (str === "Des") {
        return arr.sort((a, b) => b - a);
    }
    else {
        return arr;
    }
}

console.log(ascDesNone([4, 3, 2, 1], "Asc" ));      //  [1, 2, 3, 4]
console.log(ascDesNone([7, 8, 11, 66], "Des"));      //  [66, 11, 8, 7]
console.log(ascDesNone([1, 2, 3, 4], "None"));      //  [1, 2, 3, 4]
