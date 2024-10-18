// 41 => Odd Up, Even Down — N Times
// Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.

function evenOddTransform(arr, n) {
    let result = [...arr];
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < arr.length; i++) {
            if (result[i] % 2 === 0) {
                result[i] -= 2;
            } else {
                result[i] += 2;
            }
        }
    }
    return result;
}

// console.log(evenOddTransform([3, 4, 9], 3));        // [9, -2, 15]
// // Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

// console.log(evenOddTransform([0, 0, 0], 10));        // [-20, -20, -20]
// console.log(evenOddTransform([1, 2, 3], 1));        // [3, 0, 5]

// 42 => Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

function mapping(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i].toUpperCase();
    }
    return obj;

}
// console.log(mapping(["p", "s"]));              //  { "p": "P", "s": "S" }
// console.log(mapping(["a", "b", "c"]));              //  { "a": "A", "b": "B", "c": "C" }
// console.log(mapping(["a", "v", "y", "z"]));              //  { "a": "A", "v": "V", "y": "Y", "z": "Z" }

// 43 => Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
    return str.split(" ").map(vote => {
        if (vote.includes("k")) {
            return parseFloat(vote) * 1000
        }
        else {
            return parseInt(vote);
        }
    });

}

// console.log(transformUpvotes("6.8k 13.5k"));       //  [6800, 13500]
// console.log(transformUpvotes("5.5k 8.9k 32"));       //  [5500, 8900, 32]
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992"));       //  [20300, 3800, 7700, 992]

// 44 => Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

function removeSpecialCharacters(str) {
    return str.replace(/[^a-zA-Z0-9 -]/g, '');
}

// console.log(removeSpecialCharacters("The quick brown fox!"));          //  "The quick brown fox"
// console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO."));          //  "fd76fd-6GvKlO"
// console.log(removeSpecialCharacters("D0n$c sed 0di0 du1"));          //  "D0nc sed 0di0 du1"


// 45 => Find Unique Positive Numbers from Array
// Write a fuifnction that takes an array and returns a new array with unique positive (more than 0) numbers.

function uniqueArr(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            if (arr[i] > 0) {
                result.push((arr[i]));
            }
        }
    }
    return result;
}

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1]));      //  [1, 3]
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3]));      //  [3, 5]
// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5]));      //  [10, 6, 13, 5]

// 46 => Filter Repeating Character Strings
// Create a function that keeps only strings with repeating identical characters (in other words, it has a set size of 1).

function identicalFilter(arr) {
    return arr.filter(str => new Set(str).size === 1);
}


// console.log(identicalFilter(["aaaaaa", "bc", "d", "eeee", "xyz"]));        //  ["aaaaaa", "d", "eeee"]
// console.log(identicalFilter(["88", "999", "22", "545", "133"]));        //  ["88", "999", "22"]
// console.log(identicalFilter(["xxxxo", "oxo", "xox", "ooxxoo", "oxo"]));        //  []

// 47 => Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

function reverseImage(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let row = []
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                row.push(1)
            }
            else {
                row.push(0)
            }

        }
        result.push(row);
    }
    return result;
}

// console.log(reverseImage([[1, 0, 0], [0, 1, 0], [0, 0, 1]]));        //  [[0, 1, 1],[1, 0, 1],[1, 1, 0]]
// console.log(reverseImage([[1, 1, 1], [0, 0, 0]]));        //  [ [0, 0, 0],[1, 1, 1] ]
// console.log(reverseImage([[1, 0, 0], [1, 0, 0]]));        //  [ [0, 1, 1],[0, 1, 1] ] 

// 48 => Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

function sumFoundIndexes(arr, number) {
    let sumIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            sumIndex += i;
        }

    }
    return sumIndex
}

// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3));    //  8
// The number 3 was found at indexes 1, 2 and 5.
// 8 = 1 + 2 + 5

// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3));    //  2
// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100));    //  10
// console.log(sumFoundIndexes([5, 10, 15, 20], 2));    //  0

// 49 => Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

function sumArray(arr) {
    let flatArr = arr.flat(Infinity)
    let sum = 0;
    for (let i = 0; i < flatArr.length; i++) {
        sum += flatArr[i];
    }
    return sum;
}

// console.log(sumArray([1, 2, 3]));     //  6
// 1 + 2 + 3 = 6

// console.log(sumArray([1, [2, [1]], 3]));     //  7
// 1 + 2 + 1 + 3 = 7

// 50 => Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

function sumOfEvens(arr) {
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] % 2 === 0) {
                sumEven += arr[i][j]
            }
        }
    }
    return sumEven;
}

console.log(sumOfEvens([
  [1, 0, 2],
  [5, 5, 7],
  [9, 4, 3]
]));       // 6

// 2 + 4 = 6

console.log(sumOfEvens([
  [1, 1],
  [1, 1]
]));       // 0

console.log(sumOfEvens([
  [42, 9],
  [16, 8]
]));       // 66

console.log(sumOfEvens([
  [],
  [],
  []
]));       // 0

