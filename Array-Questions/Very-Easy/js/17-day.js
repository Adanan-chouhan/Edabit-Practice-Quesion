// 171 => Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

function changeEnough(change, amount) {
  const [quarters, dimes, nickels, pennies] = change;
  const totalAmount = (quarters * 0.25) + (dimes * 0.10) + (nickels * 0.05) + (pennies * 0.01);
  return totalAmount >= amount;
}

// console.log(changeEnough([2, 100, 0, 0], 14.11));      //  false
// console.log(changeEnough([0, 0, 20, 5], 0.75));      //  true
// console.log(changeEnough([30, 40, 20, 5], 12.55));      //  true
// console.log(changeEnough([10, 0, 0, 50], 3.85));      //  false
// console.log(changeEnough([1, 0, 5, 219], 19.99));      //  false

// 172 => Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num1, num2) {
  let result = [];
  for (let i = 1; i <= num2; i++) {
    result.push(num1 * [i]);
  }
  return result;
}

// console.log(arrayOfMultiples(7, 5));         //  [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10));         //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6));         //  [17, 34, 51, 68, 85, 102] 

// 173 => Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

function objectToArray(obj) {
  let result = [];
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let curentKey = keys[i];
    result.push([curentKey, obj[curentKey]]);
  }
  return result;
}

// console.log(objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }));     //  [["D", 1], ["B", 2], ["C", 3]]

// console.log(objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }));     //  [["likes", 2], ["dislikes", 3], ["followers", 10]]

// 174 => Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

function sortIt(arr) {
  return arr.sort((a, b) => {
    let aValue = Array.isArray(a) ? a[0] : a;
    let bValue = Array.isArray(b) ? b[0] : b;
    return aValue - bValue;
  });
}

// console.log(sortIt([4, 1, 3]));      //  [1, 3, 4]
// console.log(sortIt([[4], [1], [3]]));      //  [[1], [3], [4]]
// console.log(sortIt([4, [1], 3]));      //  [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]]));      //  [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6]));      //  [1, [2], [3], 4, [5], 6]

// 175 => Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result = result.concat(arr[i]);
    //  result.push(...arr[i]);
  }
  return result;

  // return  arr.flat();

}
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.


// console.log(flatten([[1, 2], [3, 4]]));   //  []
// Expected: [1, 2, 3, 4]

// console.log(flatten([["a", "b"], ["c", "d"]]));  // []
// Expected: ["a", "b", "c", "d"]

// console.log(flatten([[true, false], [false, false]]));  // []
// Expected: [true, false, false, false]

// 176 => Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
  let max = -Infinity; // 0
  let secondMax = -Infinity; // 0

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondMax && arr[i] < max) {
      secondMax = arr[i];
    }
  }
  return secondMax;
}

// console.log(secondLargest([10, 40, 30, 20, 50]));   //  40
// console.log(secondLargest([25, 143, 89, 13, 105]));   //  105
// console.log(secondLargest([54, 23, 11, 17, 10]));   //  23

// 177 => Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

function clone(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  arr.push(result)

  return arr;
}

// console.log(clone([1, 1]));   // [1, 1, [1, 1]]
// console.log(clone([1, 2, 3]));   // [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"]));   // ["x", "y", ["x", "y"]]

// 178 => 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// Return true if the marathon is 25 miles long, otherwise, return false.

function marathonDistance(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }
  return sum === 25;
}

// console.log(marathonDistance([1, 2, 3, 4]));      //  false
// console.log(marathonDistance([1, 9, 5, 8, 2]));      //  true
// console.log(marathonDistance([-6, 15, 4]));      //  true

// 179 => Hitting the Jackpot
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

// 180 => Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".
// If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(str) {
  let words = str.split(" ");
  let index = words.indexOf("Nemo");

  if (index !== -1) {
    return `I found Nemo at ${index + 1}!`
  }
}

console.log(findNemo("I am finding Nemo !"));           //  "I found Nemo at 4!"
console.log(findNemo("Nemo is me"));           //  "I found Nemo at 1!"
console.log(findNemo("I Nemo am"));           //  "I found Nemo at 2!"