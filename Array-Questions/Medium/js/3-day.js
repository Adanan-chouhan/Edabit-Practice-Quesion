// 21 => Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiply(arr) {
    return function (num) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * num);
        }
        return result;
    }
}

// console.log(multiply([1, 2, 3])(2));    //  [2, 4, 6]
// console.log(multiply([4, 6, 5])(10));    //  [40, 60, 50]
// console.log(multiply([1, 2, 3])(0));    //  [0, 0, 0]

// 22 => Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr) {
    let sumOfBudget = 0;
    for (let i = 0; i < arr.length; i++) {
        sumOfBudget += arr[i].budget;
    }
    return sumOfBudget;
}

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]));     //  65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]));     //  62600

// 23 => Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.


function matchLastItem(arr) {
    let combined = arr.slice(0, -1).join("");
    return combined === arr[arr.length - 1];
}

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));         //  true
// The last item is the rest joined.

// console.log(matchLastItem([1, 1, 1, "11"]));         //  false
// The last item should be "111".

// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));         //  true

// 24 => Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function calculateLosses(obj) {
    let sum = 0;
    let objKeys = Object.keys(obj);
    for (let i = 0; i < objKeys.length; i++) {
        let currentKey = objKeys[i];
        let value = obj[currentKey];
        sum += value;

    }
    if (sum == 0) {
        return "Lucky you";
    }

    return sum;

}

// console.log(calculateLosses({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }));        //100

// console.log(calculateLosses({
//   painting: 20000,
// }));    //  20000

// console.log(calculateLosses({}));     //  "Lucky you!"

// 25 => Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

function removeDups(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(removeDups([1, 0, 1, 0]));       //  [1, 0]
// console.log(removeDups(["The", "big", "cat"]));       //  ["The", "big", "cat"]
// console.log(removeDups(["John", "Taylor", "John"]));       //  ["John", "Taylor"]

// 26 => Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

function lineLength(arr1, arr2) {
    let x1 = arr1[0];
    let y1 = arr1[1];
    let x2 = arr2[0];
    let y2 = arr2[1];

    const distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return parseFloat(distance.toFixed(2));

}

// console.log(lineLength([15, 7], [22, 11]));    //  8.06
// console.log(lineLength([0, 0], [0, 0]));    //  0
// console.log(lineLength([0, 0], [1, 1]));    //  1.41

// 27 => Factor Chain
// A factor chain is an array where each previous element is a factor of the next consecutive element. The following is a factor chain:

// [3, 6, 12, 36]

// 3 is a factor of 6
// 6 is a factor of 12
// 12 is a factor of 36
// Create a function that determines whether or not an array is a factor chain.

function factorChain(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] % arr[i] !== 0) {
            return false
        }
    }
    return true;
}

// console.log(factorChain([1, 2, 4, 8, 16, 32]));     //  true
// console.log(factorChain([1, 1, 1, 1, 1, 1]));     //  true
// console.log(factorChain([2, 4, 6, 7, 12]));     //  false
// console.log(factorChain([10, 1]));     //  false

// 28 => Is Johnny Making Progress?
// To train for an upcoming marathon, Johnny goes on one long-distance run each Saturday. He wants to track how often the number of miles he runs this Saturday exceeds the number of miles run the previous Saturday. This is called a progress day.
// Create a function that takes in an array of miles run every Saturday and returns Johnny's total number of progress days.

function progressDays(arr) {
    let progressCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            progressCount++;
        }
    }
    return progressCount;
}

// console.log(progressDays([3, 4, 1, 2]));         //  2
// // There are two progress days, (3->4) and (1->2)

// console.log(progressDays([10, 11, 12, 9, 10]));         //  3
// console.log(progressDays([6, 5, 4, 3, 2, 9]));         //  1
// console.log(progressDays([9, 9]));         //  0

// 29 => Purge and Organize
// Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i])
        }
    }
    return result.sort();
}

// console.log(uniqueSort([1, 2, 4, 3]));       //  [1, 2, 3, 4]
// console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]));       //  [1, 2, 3, 4]
// console.log(uniqueSort([6, 7, 3, 2, 1]));       //  [1, 2, 3, 6, 7]

// 30 => Trace That Matrix
// Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

function trace(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i];
    }
    return sum;
}

console.log(trace([
    [1, 4],
    [4, 1]
]));          //  2

// 1 + 1 = 2

console.log(trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]));          //  15

// 1 + 5 + 9 = 15

console.log(trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4]
]));          //  10

// 1 + 2 + 3 + 4 = 10 