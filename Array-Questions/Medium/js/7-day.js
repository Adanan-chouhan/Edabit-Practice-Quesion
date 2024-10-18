// 71 => No Hidden Fees
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

function hasHiddenFee(arr, totalNum) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Number(arr[i].replace("$", ""));
    }
    totalNum = Number(totalNum.replace("$", ""))
    return totalNum > sum;
}

// console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"));  false
// console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"));  false
// console.log(hasHiddenFee(["$1"], "$4"));  true

// 72 => Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

function letterCounter(words, letter) {
    let countLetter = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j].includes(letter)) {
                countLetter++
            }
        }
    }
    return countLetter;
}

// console.log(letterCounter([
//     ["D", "E", "Y", "H", "A", "D"],
//     ["C", "B", "Z", "Y", "J", "K"],
//     ["D", "B", "C", "A", "M", "N"],
//     ["F", "G", "G", "R", "S", "R"],
//     ["V", "X", "H", "A", "S", "S"]
// ], "D"));      //  3

// "D" shows up 3 times: twice in the first row, once in the third row.

// console.log(letterCounter([
//     ["D", "E", "Y", "H", "A", "D"],
//     ["C", "B", "Z", "Y", "J", "K"],
//     ["D", "B", "C", "A", "M", "N"],
//     ["F", "G", "G", "R", "S", "R"],
//     ["V", "X", "H", "A", "S", "S"]
// ], "H"));       // 2

// 73 => Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

function diceGame(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][0] === arr[i][1]) {
                return 0;
            }
            else {
                sum += arr[i][j];
            }
        }
    }
    return sum;
}

// console.log(diceGame([[1, 2], [3, 4], [5, 6]]));      //  21
// console.log(diceGame([[1, 1], [5, 6], [6, 4]]));      //  0
// console.log(diceGame([[4, 5], [4, 5], [4, 5]]));      //  27

//  74 => Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

function sumOddAndEven(arr) {
    let sumEven = 0;
    let sumOdd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumEven += arr[i];
        }
        else {
            sumOdd += arr[i];
        }
    }

    return [sumEven, sumOdd];
}

// console.log(sumOddAndEven([1, 2, 3, 4, 5, 6]))        //  [12, 9]
// 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

// console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6]))        //  [-12, -9])
// console.log(sumOddAndEven([0, 0]))        //  [0, 0])

// 75 => Increment to Top
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

function incrementToTop(arr) {
    let steps = 0;
    let maxElement = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        steps += maxElement - arr[i];
    }
    return steps;
}

// console.log(incrementToTop([3, 4, 5]));  //  3
// Maximal element in the array is 5.
// To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// To transform 4 to 5 requires 1 step: 4 -> 5.
// Total steps required is 3.

// console.log(incrementToTop([4, 3, 4]));  //  1
// Maximal element in the array is 4.
// To transform 3 to 4 requires 1 steps: 3 -> 4.
// Total steps required is 1.

// console.log(incrementToTop([3, 3, 3]));  //  0

// console.log(incrementToTop([3, 10, 3]));  //  14

// 76 => Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

function isScalable(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Math.abs(arr[i] - arr[i + 1]) > 5) {
            return false;
        }
    }
    return true;
}

// console.log(isScalable([1, 2, 4, 6, 7, 8]));           //  true
// console.log(isScalable([40, 45, 50, 45, 47, 52]));     //  true
// console.log(isScalable([2, 9, 11, 10, 18, 21]));       //  false

// 77 => Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

function nextInLine(arr, num) {
    if (arr.length === 0) {
        return "No array has been selected"
    }

    let result = [...arr];
    result.shift()
    result.push(num);
    return result;
}

// console.log(nextInLine([5, 6, 7, 8, 9], 1));       //  [6, 7, 8, 9, 1]
// console.log(nextInLine([7, 6, 3, 23, 17], 10));       //  [6, 3, 23, 17, 10]
// console.log(nextInLine([1, 10, 20, 42], 6));       //  [10, 20, 42, 6]
// console.log(nextInLine([], 6));       //  "No array has been selected"

// 78 =>Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

function simonSays(arr1, arr2) {
    for (let i = 1; i < arr1.length; i++) {
        if (arr1[i - 1] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

// console.log(simonSays([1, 2], [5, 1]));                    //  true
// console.log(simonSays([1, 2], [5, 5]));                    //  false
// console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]));  //  true
// console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3]));  //  false

// 79 => Peeling off the Outer Layers
// Given an array of arrays, return a new array of arrays containing every element, except for the outer elements.

function peelLayerOff(arr) {
    if (arr.length <= 2 || arr[0].length <= 2) {
        return [];
    }

    let result = [];
    for (let i = 1; i < arr.length - 1; i++) {
        result.push(arr[i].slice(1, -1));
    }
    return result;
}

// console.log(peelLayerOff([
//     ["a", "b", "c", "d"],
//     ["e", "f", "g", "h"],
//     ["i", "j", "k", "l"],
//     ["m", "n", "o", "p"]
// ])); //  [["f", "g"],["j", "k"]]

// console.log(peelLayerOff([
//     [1, 2, 3, 4, 5],
//     [6, 7, 8, 9, 10],
//     [11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20],
//     [21, 22, 23, 24, 25],
//     [26, 27, 28, 29, 30],
//     [31, 32, 33, 34, 35]
// ])); //  [[7, 8, 9],[12, 13, 14],[17, 18, 19],[22, 23, 24],[27, 28, 29]]

// console.log(peelLayerOff([
//     [true, false, true],
//     [false, false, true],
//     [true, true, true]
// ])); //  [[false]]

// console.log(peelLayerOff([
//     ["hello", "world"],
//     ["hello", "world"]
// ])); //  []

// 80 => Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

function flickSwitch(arr) {
    let result = [];
    let switchState = true; // Initial state is true

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "flick") {
            switchState = !switchState; // Toggle the switchState
        }
        result.push(switchState); // Push the current state to the result array
    }

    return result;
}

console.log(flickSwitch(["edabit", "flick", "eda", "bit"])); /// [true, false, false, false]
console.log(flickSwitch(["flick", 11037, 3.14, 53])); /// [false, false, false, false]
console.log(flickSwitch([false, false, "flick", "sheep", "flick"])); /// [true, true, false, false, true]

