// 1 => Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];

    //    let min = arr[0];
    //    let max = arr[0];

    //    for(let i = 0; i < arr.length; i++){
    //        if(arr[i] < min){
    //         min = arr[i];
    //        }
    //        if(arr[i] > max){
    //         max = arr[i]
    //        }
    //    }
    //    return [min,max];
}
// console.log(minMax([1, 2, 3, 4, 5]));     //  [1, 5]
// console.log(minMax([2334454, 5]));     //  [5, 2334454]
// console.log(minMax([1]));     //  [1, 1]

// 2 => Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    const minArr1 = Math.min(...arr1);
    const maxArr1 = Math.max(...arr1);
    const minArr2 = Math.min(...arr2);
    const maxArr2 = Math.max(...arr2);

    return minArr1 > minArr2 && maxArr1 < maxArr2;
}

// console.log(canNest([1, 2, 3, 4], [0, 6]));        //  true
// console.log(canNest([3, 1], [4, 0]));        //  true
// console.log(canNest([9, 9, 8], [8, 9]));        //  false
// console.log(canNest([1, 2, 3, 4], [2, 3]));        //  false

// 3 => Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI )

function seriesResistance(arr) {
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum.toFixed(1) + " ohms"
    // let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    // sum += arr[i];
    // }
    // return sum.toFixed(1) + " ohms";
}

// console.log(seriesResistance([1, 5, 6, 3]));     //  "15 ohms"
// console.log(seriesResistance([16, 3.5, 6]));     //  "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5]));     //  "1.0 ohm"

// 4 => Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1, arr2) {
    let result = [arr1[0]];
    for (let i = 0; i < arr2.length; i++) {
        result.push(arr2[i]);
    }
    result.push(arr1[1])
    return result;
}

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]));             //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15,150], [45, 75, 35]));             //  [15, 45, 75, 35, 150]
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]));             //  [[1, 2], [3, 4], [5, 6]]

// 5 => Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(num) {
    let left = Math.floor(num / 2);
    let right = Math.ceil(num / 2);
    return [left, right];

}

// console.log(numberSplit(4));          //  [2, 2]
// console.log(numberSplit(10));          //  [5, 5]
// console.log(numberSplit(11));          //  [5, 6]
// console.log(numberSplit(-9));          //  [-5, -4]

// 6 => Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(filterArray([1, 2, "a", "b"]));                     //  [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15]));                     //  [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123]));                     //  [1, 2, 123]

// 7 => Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr) {
    let result = arr.sort((a, b) => a.length - b.length);
    return result;
}

// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));                // ["a", "bb", "ccc", "dddd"]
// console.logconsole.log((sortByLength(["apple", "pie", "shortcake"]));             // ["pie", "apple", "shortcake"]
// console.logconsole.log((sortByLength(["may", "april", "september", "august"]));   // ["may", "april", "august", "september"]
// console.logconsole.log((sortByLength([]));                                         // []

// 8 => Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return sum;
}

// console.log(sumOfCubes([1, 5, 9]));       //  855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
// console.log(sumOfCubes([3, 4, 5]));       //  216
// console.log(sumOfCubes([2]));       //  8
// console.log(sumOfCubes([]));       //  0

// 9 => Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.
function getOnlyEvens(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));     //  [2, 4]
// console.log(getOnlyEvens([0, 1, 2, 3, 4]));     //  [0, 2, 4]
// console.log(getOnlyEvens([1, 2, 3, 4, 5]));     //  []

// 10 => Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

function sortByLength(arr) {
    let result = arr.sort((a, b) => a.length - b.length);
    return result;
}

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));    // ["Apple", "Google", "Microsoft"]
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));    // ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// console.log(sortByLength(["Turing", "Einstein", "Jung"]));    // ["Jung", "Turing", "Einstein"]


