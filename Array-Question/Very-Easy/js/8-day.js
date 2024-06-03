// 81 => Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:


function removeEmptyArrays(arr) {
    // return arr.filter(item => !(Array.isArray(item) && item.length === 0));
    let emptyArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(Array.isArray(arr[i]) && arr[i].length === 0)) {
            emptyArr.push(arr[i]);
        }
    }
    return emptyArr;
}

// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.


// What I want:
// console.log(removeEmptyArrays(["a", "b", []]));        // ["a", "b"]
// console.log(removeEmptyArrays([1, 2, [], 4]));        // [1, 2, 4]

// What I am getting:
// console.log(removeEmptyArrays(["a", "b", []]));        // ["a", "b", []]
// console.log(removeEmptyArrays([1, 2, [], 4]));        // [1, 2, [], 4]

// 82 => Product Divisible by Sum?
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

function divisible(arr) {
    let mul = 1;
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
        sum += arr[i];

        let res = mul / sum;
        if (res % 2 === 0) {
            return true
        }
    }
    return false;
}

// console.log(divisible([3, 2, 4, 2])); false
// console.log(divisible([4, 2, 6])); true
// // 4 * 2 * 6 / (4 + 2 + 6)
// console.log(divisible([3, 5, 1])); false

// 83 => Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

function findBob(arr) {
    // return arr.indexOf("Bob");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Bob") {
            return i
        }
        return -1
    }
}
// console.log(findBob(["Jimmy", "Layla", "Bob"]));    // 2
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]));    // 0
// console.log(findBob(["Jimmy", "Layla", "James"]));    // -1

// 84 => Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr) {
    // return Math.max(...arr);
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
// console.log(findLargestNum([4, 5, 1, 3]));         //  5
// console.log(findLargestNum([300, 200, 600, 150]));         //  600
// console.log(findLargestNum([1000, 1001, 857, 1]));         //  1001

// 85 => Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]

function correctStream(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] === arr2[i]) {
            result.push(1);
        } else {
            result.push(-1);
        }
    }
    return result;
}

// console.log(correctStream(
//   ["it", "is", "find"],
//   ["it", "is", "fine"]
// ));     // [1, 1, -1]

// console.log(correctStream(
//   ["april", "showrs", "bring", "may", "flowers"],
//   ["april", "showers", "bring", "may", "flowers"]
// ));    // [1, -1, 1, 1, 1]

// 86 => Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr) {
    let difference = arr[1] - arr[0];
    let lastElement = arr[arr.length - 1];
    return lastElement + difference;
}

// console.log(nextElement([3, 5, 7, 9]));     //  11
// console.log(nextElement([-5, -6, -7]));     //  -8
// console.log(nextElement([2, 2, 2, 2, 2]));     //  2

// 87 => Capture the Rook
// Write a function that returns true if two rooks can attack each other, and false otherwise.

function canCapture(arr) {
    let rooks1 = arr[0];
    let rooks2 = arr[1];

    if (rooks1[0] === rooks2[0] || rooks1[1] === rooks2[1]) {
        return true;
    } else {
        return false;
    }

}

// console.log(canCapture(["A8", "E8"]));      //  true
// console.log(canCapture(["A1", "B2"]));      //  false
// console.log(canCapture(["H4", "H3"]));      //  true
// console.log(canCapture(["F5", "C8"]));      //  false

// 88 => Fix the Error / Comparing Arrays (Part #2)
// Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.

// To solve this question, your friend initially wrote the following code (see this challenge):

// function checkEquals(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
// }
// If you're unsure why the above code doesn't work, I recommend doing that challenge first.

// Your friend did some more research and he fixed the code into the following:

// function checkEquals(arr1, arr2) {
//   if (arr1.join("") === arr2.join("")) {
//     return true
//    } else {
//     return false
//    }
// }
// It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?

function checkEquals(arr1, arr2) {

    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true;
}

// console.log(checkEquals([1, 2], [1, 3]));         //  false
// console.log(checkEquals([1, 2], [1, 2]));         //  true
// console.log(checkEquals([4, 5, 6], [4, 5, 6]));         //  true
// console.log(checkEquals([4, 7, 6], [4, 5, 6]));         //  false
// console.log(checkEquals([1, 12], [11, 2]));         //  false

// 89 => Word Endings
// Create a function that adds a string ending to each member in an array.

function addEnding(arr, str) {
    return arr.map(e => e + str);

    // let addStr = []
    // for(let i = 0; i < arr.length; i++){
    // addStr.push(arr[i] + str);
    // }
    // return addStr;

}

// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));        //  ["cleverly", "meekly", "hurriedly", "nicely"]
// console.log(addEnding(["new", "pander", "scoop"], "er"));        //  ["newer", "panderer", "scooper"]
// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));        //  ["bending", "sharpening", "meaning"]

// 90 => Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

function getSequence(num1,num2){
let result = [];
for(let i = num1; i <= num2; i++){
    result.push(i);
}
return result;
}

// console.log(getSequence(1, 5));      //  [1, 2, 3, 4, 5]
// console.log(getSequence(98, 100));      //  [98, 99, 100]
// console.log(getSequence(1000, 1000));      //  [1000]