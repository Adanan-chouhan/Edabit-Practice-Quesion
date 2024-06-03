// 61 => Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

function trimmedAverages(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    sum -= (largest + smallest);
    let average = sum / (arr.length - 2);

    return average;
}



// console.log(trimmedAverages([4, 5, 7, 100]));      // 6
// // Average of 5 and 7
// console.log(trimmedAverages([10, 25, 5, 15, 20]));      // 15
// // Average of 10, 15 and 20
// console.log(trimmedAverages([1, 1, 1]));      // 1
// // 1

// 62 => Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

function sumMinimums(arr) {
    let min = 0;
    for (let i = 0; i < arr.length; i++) {
        min += arr[i][0]
    }
    return min;
}

// console.log(sumMinimums([[1, 2, 3, 4, 5],[5, 6, 7, 8, 9],[20, 21, 34, 56, 100]]));       // 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// 63 => Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:
// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

function arithmeticProgression(a, b, c) {
    let sequence = '';

    for (let i = 0; i < c; i++) {
        const term = a + (b * i);
        sequence += term;

        if (i < c - 1) {
            sequence += ', ';
        }
    }

    return sequence;
}

// console.log(arithmeticProgression(1, 2, 5));        //  "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5));        //  "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10));      //  "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"

// 64 => Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.

function arrayLessThan100(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum < 100;
}
// console.log(arrayLessThan100([5, 57]));        //  true
// console.log(arrayLessThan100([77, 30]));       //  false
// console.log(arrayLessThan100([0]));            //  true

// 65 => Return Last Item
// Create a function that returns the last value of the last item in an array or string.

function lastItem(arr) {
    let res = "";
    if (arr === 0) {
        return undefined;
    }
    if (typeof arr === "string") {
        return arr[arr.length - 1];
    }
    return arr[arr.length - 1];
}

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));                           // 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog"));     // "g"
// console.log(lastItem([]));                                                // undefined


// 66 => Buggy Uppercase Counting
// In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

function countUppercase(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // Check if the character is uppercase
            if (arr[i][j] === arr[i][j].toUpperCase() && arr[i][j] !== arr[i][j].toLowerCase()) {
                count++;
            }
        }
    }
    return count;
}

// console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"]));       //  6
// console.log(countUppercase(["little", "lower", "down"]));       //  0
// console.log(countUppercase(["EDAbit", "Educate", "Coding"]));       //  5

// 67 => Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

function outlierNumber(arr) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            num.push(arr[i] % 2 !== 0);
        }
        if (arr[i] % 2 !== 0) {
            num.push(arr[i] % 2 === 0)
        }
    }
    return num;
}
// console.log(outlierNumber([2, 3, 4]));        //  3
// // 2 and 4 are even numbers.
// // 3 is an outlier number.
// console.log(outlierNumber([1, 2, 3]));        //  2
// console.log(outlierNumber([4, 1, 3, 5, 9]));        //  4


// 68 => Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

function moveZeros(arr) {
    let noneZero = [];
    let zeroCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            noneZero.push(arr[i]);
        } else {
            zeroCount++;
        }
    }

    for (let j = 0; j < zeroCount; j++) {
        noneZero.push(0)
    }
    return noneZero;
}

// console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]));         //  [1, 1, 2, 1, 3, 0, 0]
// console.log(moveZeros([0, 1, null, 2, false, 1, 0]));         //  [1, null, 2, false, 1, 0, 0]
// console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9]));      //   ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

// 69 => Sum of Even Pairs in Array
// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 +< 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]

function oddSum(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       let sum = arr[i] + arr[i+1];
        result.push(sum % 2 === 0);
    }
    return result;
}

// console.log(oddSum([11, 15, 6, 8, 9, 10]));        //  [true, false, true, false, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32]));       //  [false, true, true, true, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6]));           //  [false, false, false]

// 70 => Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// [2, 4, 9] );      //  23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23

function arraySum(arr){
    let sum = 0
   for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        sum += arr[i] * arr[i];
    }
    else{
        sum += Math.sqrt(arr[i])
    }
       
}
   return Math.round(sum * 100) / 100
}

console.log(arraySum([1, 3, 3, 1, 10]));      //  105.46
console.log(arraySum([2, 3, 4, 5]));          //  23.97
console.log(arraySum([1, 31, 3, 11, 0]));     //  11.62
