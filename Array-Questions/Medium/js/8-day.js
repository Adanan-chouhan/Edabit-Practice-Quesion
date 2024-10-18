// 81 => Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

function puzzlePieces(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let sum = arr1[0] + arr2[0];

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] + arr2[i] !== sum) {
            return false;
        }
    }
    return true;
}

// console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]));  //  true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]));  //  true
// console.log(puzzlePieces([1, 2], [-1, -1]));  //  false
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10]));  //  false

// 82 => Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

function flattenCurve(arr) {
    if (arr.length === 0) {
        return [];
    }

    let mean = arr.reduce((sum, num) => sum + num, 0) / arr.length;
    return arr.map(() => mean);
}

// console.log(flattenCurve([1, 2, 3, 4, 5]));          //  [3, 3, 3, 3, 3]
// console.log(flattenCurve([0, 0, 0, 2, 7, 3]));          //  [2, 2, 2, 2, 2, 2]
// console.log(flattenCurve([4]));          //  [4]
// console.log(flattenCurve([]));          //  []

// 83 => Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

function lonelyInteger(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr.includes(-arr[i])) {
            return arr[i];
        }
    }
}

// console.log(lonelyInteger([1, -1, 2, -2, 3]));     //  3
// 3 has no matching negative appearance.

// console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2]));     //  -4
// -4 has no matching positive appearance.

// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105]));     //  -9 

// 84 => Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

function removeEnemies(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            result.push(arr1[i])
        }
    }
    return result;

}

// console.log(removeEnemies(["Fred"], []));        //  ["Fred"]
// console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"]));        //  ["Adam", "Tanya"]
// console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"]));        //  ["Emily", "Steve"]

// 85 => The Museum of Incredibly DULL Things
// A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

// Create a function that takes an array of integers and removes the smallest value.

function removeSmallest(arr) {
    let result = [...arr];

    let minIndex = arr.indexOf(Math.min(...arr));

    result.splice(minIndex, 1);
    return result;
}


// console.log(removeSmallest([1, 2, 3, 4, 5] ));   //  [2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4]));   //  [5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1]));   //  [2, 2, 2, 1]

// 86 => Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

function upwardTrend(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "string") {
            return "Strings not permitted!"
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
}

// console.log(upwardTrend([1, 2, 3, 4]));          //  true
// console.log(upwardTrend([1, 2, 6, 5, 7, 8]));          //  false
// console.log(upwardTrend([1, 2, 3, "4"]));          //  "Strings not permitted!"
// console.log(upwardTrend([1, 2, 3, 6, 7]));          //  true

// 87 => Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.

function probability(arr, num) {
    let count = arr.filter(x => x >= num).length;
    let probability = (count / arr.length) * 100;
    return probability.toFixed(1);

    // let count = 0;
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] >= num){
    //         count++;
    //     }
    // }
    // let probability = (count / arr.length) * 100
    // return probability.toFixed(1)
}

// console.log(probability([5, 1, 8, 9], 6));            //  50.0
// console.log(probability([7, 4, 17, 14, 12, 3], 16));            //  16.7
// console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6));            //  70.0

// 88 => An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

function magnitude(arr) {
    let squares = arr.map(x => x * x);
    let sumOfSqures = squares.reduce((acc, item) => acc + item, 0);
    return Math.sqrt(sumOfSqures);
}

// console.log(magnitude([3, 4]));      //  5
// console.log(magnitude([0, 0, -10]));      //  10
// console.log(magnitude([]));      //  0
// console.log(magnitude([2, 3, 6, 1, 8] ));      //  10.677078252031311

// 89 => Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

function winRound(arr1, arr2) {
    let max1 = arr1.sort((a, b) => b - a).slice(0, 2).join("");
    let max2 = arr2.sort((a, b) => b - a).slice(0, 2).join("");
    return parseInt(max1) > parseInt(max2);

}


// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));     // true
// Your cards can make the number 96
// Your opponent can make the number 73
// You win the round since 96 > 73

// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2]));     // true
// console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5]));     // false
// console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1]));     // false

// 90 => Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

function squarePatch(num){
    let res  =[];
    for(let i = 1; i<=num; i++){
      let values  = [];
    
        for(let j = 0; j<num; j++){
            values.push(num);
        }
        res.push(values);
    }
  
    return res;
}

console.log(squarePatch(3)); // [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

console.log(squarePatch(5)); // [
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5],
//   [5, 5, 5, 5, 5]
// ]

console.log(squarePatch(1)); // [
//   [1]
// ]

console.log(squarePatch(0)); // []
