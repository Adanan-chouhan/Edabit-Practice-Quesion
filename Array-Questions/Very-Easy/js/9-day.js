// 91 => Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(arr) {

    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(-arr[i]);
    }
    return result;
}
// console.log(negate([1, 2, 3, 4]));     //  [-1, -2, -3, -4]
// console.log(negate([-1, 2, -3, 4]));   //  [1, -2, 3, -4]
// console.log(negate([]));               //  []

// 92 => Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr) {
    // return arr.filter(word => word.length == 4)

    let forLetterStr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 4) {
            forLetterStr.push(arr[i])
        }
    }
    return forLetterStr;
}
// console.log(isFourLetters(["Tomato", "Potato", "Pair"]));         //  ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]));         //  ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));         //  ["Ryan", "Matt"]

// 93 => Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(arr) {
    // let largest = Math.max(...arr);
    // let smallest = Math.min(...arr);
    // return largest - smallest

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return largest - smallest;
}

// console.log(difference([10, 15, 20, 2, 10, 6]));   // 18
// 20 - 2 = 18
// console.log(difference([-3, 4, -9, -1, -2, 15]));    // 24
// 15 - (-9) = 24
// console.log(difference([4, 17, 12, 2, 10, 2]))  // 15

// 94 => Eliminate Odd Numbers within an Array
// Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr) {
    let evanvalue = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evanvalue.push(arr[i]);
        }
    }
    return evanvalue;

    // return arr.filter(num => num % 2 === 0);
}

// console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]));   // [2, 4, 6, 8]
// console.log(noOdds([43, 65, 23, 89, 53, 9, 6]));   // [6]
// console.log(noOdds([718, 991, 449, 644, 380, 440]));   // [718, 644, 380, 440]

// 95 => Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
    // return arr.map(e => e * arr.length);


    let multiplyValue = []
    for (let i = 0; i < arr.length; i++) {
        multiplyValue.push(arr[i] * arr.length)
    }
    return multiplyValue;


}
// console.log(multiplyByLength([2, 3, 1, 0]));      //  [8, 12, 4, 0]
// console.log(multiplyByLength([4, 1, 1]));      //  ([12, 3, 3])
// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]));      //   [7, 0, 21, 21, 49, 14, 7]
// console.log(multiplyByLength([0]));      //  ([0])

// 96 => Remove Null from an Array
// Create a function to remove all null values from an array.

function removeNull(arr) {
// return arr.filter(e => e !== null);

    let removeNullValue = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            removeNullValue.push(arr[i]);
        }
    }
    return removeNullValue;
}

// console.log(removeNull(["a", null, "b", null]));    //  ["a", "b"]
// console.log(removeNull([null, null, null, null, null]));    //  []
// console.log(removeNull([7, 8, null, 9]));    //  [7, 8, 9]

// 97 => Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

function hurdleJump(arr,height){
for(let i = 0;  i < arr.length; i++){

   if(arr[i] > height ){
        return false;
   }
}
return true;

}
// console.log(hurdleJump([1, 2, 3, 4, 5], 5));     //  true
// console.log(hurdleJump([5, 5, 3, 4, 5], 3));     //  false
// console.log(hurdleJump([5, 4, 5, 6], 10));     //  true
// console.log(hurdleJump([1, 2, 1], 1));     //  false

// 98 => Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(arr){
    // return Math.min(...arr)

    let smallest = arr[0]; // Initialize with the first element
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}


// console.log(findSmallestNum([34, 15, 88, 2]));    // 2
// console.log(findSmallestNum([34, -345, -1, 100]));    // -345
// console.log(findSmallestNum([-76, 1.345, 1, 0]));    // -76
// console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));    // -0.9999
// console.log(findSmallestNum([7, 7, 7]));    // 7

// 99 => Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

function firstLast(arr){
//  let first = arr[0];
//  let last = arr[4];
//  return [first,last];

let first, last;
for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
        first = arr[i];  // First element
    }
    if (i === arr.length - 1) {
        last = arr[i];  // Last element
    }
}
return [first, last];
}

// console.log(firstLast([5, 10, 15, 20, 25]));                      // [5, 25]
// console.log(firstLast(["edabit", 13, null, false, true]));        // ["edabit", true]
// console.log(firstLast([undefined, 4, "6", "hello", null]));       // [undefined, null]

// 100 => Sandwich Fillings
// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

function getFillings(arr){
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0 && i !== arr.length-1) {
            result.push(arr[i])
        }
    }
  return result;
}
// console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]));          //  ["ham", "cheese", "ham"]
// console.log(getFillings(["bread", "sausage", "tomato", "bread"]));          //  ["sausage", "tomato"]
// console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]));          //  ["lettuce", "bacon", "tomato"]