// 131 => Recursion: Array Sum
// Write a function that finds the sum of an array. Make your function recursive.

function sum(arr) {
    if (arr.length === 0) {
        return 0;
    }
    // Recursive case: sum the first element and the result of sum called on the rest of the array
    return arr[0] + sum(arr.slice(1));
}

// console.log(sum([1, 2, 3, 4]));        // 10
// console.log(sum([1, 2]));        // 3
// console.log(sum([1]));        // 1
// console.log(sum([]));        // 0

// 132 => Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return [min, max];
}

// console.log(minMax([1, 2, 3, 4, 5]));    //  [1, 5]
// console.log(minMax([2334454, 5]));    //  [5, 2334454]
// console.log(minMax([1]));    //  [1, 1]

// 133 => Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    const min1 = Math.min(...arr1);
    const max1 = Math.max(...arr1);
    const min2 = Math.min(...arr2);
    const max2 = Math.max(...arr2);

    return min1 > min2 && max1 < max2;
}


// console.log(canNest([1, 2, 3, 4], [0, 6]));       //  true
// console.log(canNest([3, 1], [4, 0]));       //  true
// console.log(canNest([9, 9, 8], [8, 9]));       //  false
// console.log(canNest([1, 2, 3, 4], [2, 3]));       //  false

// 134 => Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr) {
    const totalResistance = arr.reduce((acc, resistance) => acc + resistance, 0);
    const unit = totalResistance === 1 ? "ohm" : "ohms";
    return `${totalResistance} ${unit}`;
}

// console.log(seriesResistance([1, 5, 6, 3]));      //  "15 ohms"
// console.log(seriesResistance([16, 3.5, 6]));      //  "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5]));      //  "1.0 ohm"

// 135 => Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
    let middleIndex = Math.floor(arr1.length / 2);

    let firstHalf = arr1.slice(0, middleIndex);
    let secondHalf = arr1.slice(middleIndex);

    return firstHalf.concat(arr2).concat(secondHalf);
}

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));      //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15,150], [45, 75, 35]));      //  [15, 45, 75, 35, 150]
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));      //  [[1, 2], [3, 4], [5, 6]]

// 136 => Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(num) {
    let leftPart = Math.floor(num / 2);
    let rightPart = Math.ceil(num / 2);
    return [leftPart, rightPart];
}

// console.log(numberSplit(4));      //  [2, 2]
// console.log(numberSplit(10));      //  [5, 5]
// console.log(numberSplit(11));      //  [5, 6]
// console.log(numberSplit(-9));      //  [-5, -4]

// 137 => Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            result.push(arr[i]);
        }
    }
    return result;

    // return arr.filter(element => typeof element === "number");
}

// console.log(filterArray([1, 2, "a", "b"]));       //  [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15]));       //  [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));       //  [1, 2, 123]

// 138 => Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr) {
    // let result =  arr.length;
    // return result.sort();

    return arr.sort((a, b) => a.length - b.length);
}

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));       //  ["a", "bb", "ccc", "dddd"]
// console.log(sortByLength(["apple", "pie", "shortcake"]));       //  ["pie", "apple", "shortcake"]
// console.log(sortByLength(["may", "april", "september", "august"]));       //  ["may", "april", "august", "september"]
// console.log(sortByLength([]));       //  []

// 139 => Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
    // return arr.reduce((sum, num) => sum + Math.pow(num, 3), 0);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return sum;
}

// console.log(sumOfCubes([1, 5, 9]));  //  855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// console.log(sumOfCubes([3, 4, 5]));  //  216
// console.log(sumOfCubes([2]));  //  8
// console.log(sumOfCubes([]));  //  0

// 140 => Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

function getOnlyEvens(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0 && arr[i] % 2 === 0){
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));     //  [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4]));     //  [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5]));     //  []

