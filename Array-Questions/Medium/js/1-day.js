// 1 => How Much is True?
// Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}

// console.log(countTrue([true, false, false, true, false]));           //  2
// console.log(countTrue([false, false, false, false]));           //  0
// console.log(countTrue([]));           //  0

// 2 => Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

function compact(arr) {
    // return arr.filter(Boolean);

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(compact([0, 1, false, 2, "", 3]));   // => [1, 2, 3]


// 3 =>  Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
    return Object.entries(obj);
    // return Object.keys(obj).map(key => [key, obj[key]]);
}

// console.log(toArray({ a: 1, b: 2 }));           //  [["a", 1], ["b", 2]]
// console.log(toArray({ shrimp: 15, tots: 12 }));           //  [["shrimp", 15], ["tots", 12]]
// console.log(toArray({}));           //  []

// 4 => Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

function concat(...arr) {
    return arr.reduce((acc, arr) => acc.concat(arr));
}

// console.log(concat([1, 2, 3], [4, 5], [6, 7]));             //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7]));             //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4]));             //  [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4]));             //  [4, 4, 4, 4, 4]

// 5 => Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(arr, num) {
    let totalChange = arr[0] * 0.25 + arr[1] * 0.10 + arr[2] * 0.05 + arr[3] * 0.01;
    return totalChange >= num;
}

// console.log(changeEnough([2, 100, 0, 0], 14.11));     //  false
// console.log(changeEnough([0, 0, 20, 5], 0.75));     //  true
// console.log(changeEnough([30, 40, 20, 5], 12.55));     //  true
// console.log(changeEnough([10, 0, 0, 50], 3.85));     //  false
// console.log(changeEnough([1, 0, 5, 219], 19.99));     //  false

// 6 => Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num, length) {
    let result = [];
    for (let i = 1; i <= length; i++) {
        result.push(num * i);
    }
    return result;
}

// console.log(arrayOfMultiples(7, 5));       //  [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10));       //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6));       //  [17, 34, 51, 68, 85, 102]

// 7 => Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

function objectToArray(obj) {
    let result = [];
    for (let key in obj) {
        result.push([key, obj[key]]);
    }
    return result
}

// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }));       //  [["D", 1], ["B", 2], ["C", 3]]

// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }));       //  [["likes", 2], ["dislikes", 3], ["followers", 10]]

// 8 => Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

function sortIt(arr) {
    let sort = arr.sort();
    return sort;
}

// console.log(sortIt([4, 1, 3]));              //  [1, 3, 4]
// console.log(sortIt([[4], [1], [3]]));              //  [[1], [3], [4]]
// console.log(sortIt([4, [1], 3]));              //  [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]]));              //  [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));              //  [1, [2], [3], 4, [5], 6]

// 9 => Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result = result.concat(arr[i])
    }
    return result;
}
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// console.log(flatten([[1, 2], [3, 4]]));      //  []
// Expected: [1, 2, 3, 4]

// console.log(flatten([["a", "b"], ["c", "d"]]));      //  []
// Expected: ["a", "b", "c", "d"]

// console.log(flatten([[true, false], [false, false]]));      //  []
// Expected: [true, false, false, false]

// 10 => Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
    let max = Math.max(...arr);
    let filterArr = arr.filter(num => num != max);
    return Math.max(...filterArr);

    // arr.sort((a,b) => b-a);
    // return arr[1];
}

console.log(secondLargest([10, 40, 30, 20, 50]));     //  40
console.log(secondLargest([25, 143, 89, 13, 105]));     //  105
console.log(secondLargest([54, 23, 11, 17, 10]));     //  23
