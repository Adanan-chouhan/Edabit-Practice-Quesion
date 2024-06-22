//  151 => Array Operation
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

function arrayOperation(x, y, n) {
    let result = [];
    for (let i = x; i <= y; i++) {
        if (i % n === 0) {
            result.push(i);
        }
    }
    return result;
}

// console.log(arrayOperation(1, 10, 3));      //  [3, 6, 9]
// console.log(arrayOperation(7, 9, 2));       //  [8]
// console.log(arrayOperation(15, 20, 7));     //  []

// 152 => Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(arr) {
    // sort the array in descending order
    arr.sort((a, b) => b - a);

    // Sum the first 5 numbers from the sorted array
    let sum = 0;
    for (let i = 0; i < 5; i++) {
        sum += arr[i];
    }

    return sum;
}

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));            //  43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));            //  100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));            //  40

// 153 => Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr, present) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(present)) {
            return true;
        }
        return false;
    }
}

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));          // true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));          // false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5));                   // true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));                   // false

// 154 => Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

function battingAvg(arr) {
    let totalHits = 0;
    let totalAtBats = 0;

    for (let i = 0; i < arr.length; i++) {
        totalHits += arr[i][0];
        totalAtBats += arr[i][1];
    }

    let battingAvg = totalHits / totalAtBats;
    let res = battingAvg.toFixed(3);
    return res.toString();
}

// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]));   //  ".286"
// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]));   //  ".350"
// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]));   //  ".273"

// 158 => Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num) {
    // let result = num.toString().split("");
    // return result.map(Number);

    let numStr = num.toString().split("");
    let result = [];
    for (let i = 0; i < numStr.length; i++) {
        result.push(Number(numStr[i]))
    }
    return result;
}

function toNumber(arr) {
    // let res = parseInt(arr.join(""));
    // return res;

    let res = "";
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return Number(res);

}

// console.log(toArray(235));              //  [2, 3, 5]
// console.log(toArray(0));                //  [0]
// console.log(toNumber([2, 3, 5]));       //  235
// console.log(toNumber([0]));             //  0

// 159 => Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

function dropRight(arr, n = 1) {
    if (n >= arr.length) {
        return [];
    } else {
        return arr.slice(0, arr.length - n);
    }
}

// console.log(dropRight([1, 2, 3]));       //  [1, 2]
// console.log(dropRight([1, 2, 3], 2));       //  [1]
// console.log(dropRight([1, 2, 3], 5));       //  []
// console.log(dropRight([1, 2, 3], 0));       //  [1, 2, 3]

// 160 => Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// sliceSum([9, 8, 7, 6], 3));  24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.

function sliceSum(arr,n){
 let result = 0;
 for(let i = 0; i < n; i++){
result += arr[i] 
 }   
 return result; 
}

console.log(sliceSum([1, 3, 2], 2));  4
console.log(sliceSum([4, 2, 5, 7], 4));  18
console.log(sliceSum([3, 6, 2], 0));  0
