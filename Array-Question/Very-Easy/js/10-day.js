// 101 =>  Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(arr) {
    let largest = Math.max(...arr);
    let smallest = Math.min(...arr);
    let difference = largest - smallest;
    return difference;
}

// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]));      //  82
// Smallest number is -50, biggest is 32.

// console.log(diffMaxMin([44, 32, 86, 19]))  // 67
// Smallest number is 19, biggest is 86.

// 102 => Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(num) {
    let down = [];
    for (let i = num; i >= 0; i--) {
        down.push(i);
    }
    return down;
}

// console.log(countdown(5));    //  [5, 4, 3, 2, 1, 0]
// console.log(countdown(1));    //  [1, 0]
// console.log(countdown(0));    //  [0]

// 103 => Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

function checkAllEven(arr) {
    // return arr.every(x => x % 2 === 0);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}

// console.log(checkAllEven([1, 2, 3, 4]));        //  false
// console.log(checkAllEven([2, 4, 6]));           //  true
// console.log(checkAllEven([5, 6, 8, 10]));       //  false
// console.log(checkAllEven([-2, 2, -2, 2]));      //  true

// 104 => X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

function convertCartesian(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        result.push([arr1[i], arr2[i]]);
    }
    return result;
}

// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
// [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// console.log(convertCartesian([9, 8, 3], [1, 1, 1]));
// [[9, 1], [8, 1], [3, 1]]

// 105 => Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr) {
    // return arr.map(e => -e);

    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(-arr[i]);
        }
    }
    return result;
}
// console.log(additiveInverse([5, -7, 8, 3]));      //  [-5, 7, -8, -3]
// console.log(additiveInverse([1, 1, 1, 1, 1]));      //  [-1, -1, -1, -1, -1]
// console.log(additiveInverse([-5, -25, 35]));      //  [5, 25, -35]

// 106 => Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

function nthSmallest(arr, n) {
    if (n > arr.length) {
        return null;
    }

    return arr[n - 1];
}

// console.log(nthSmallest([1, 3, 5, 7], 1))    //  1
// console.log(nthSmallest([1, 3, 5, 7], 3))    //  5
// console.log(nthSmallest([1, 3, 5, 7], 5))    //  null
// console.log(nthSmallest([7, 3, 5, 1], 2))    //  3

// 107 => Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

function transform(arr) {
    // return arr.map(num => num % 2 === 0 ? num - 1 : num + 1);

    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            res.push(arr[i] - 1)
        }
        else {
            res.push(arr[i] + 1)
        }
    }
    return res;
}

// console.log(transform([1, 2, 3, 4, 5]));          //  [2, 1, 4, 3, 6]
// console.log(transform([3, 3, 4, 3]));          //  [4, 4, 3, 4]
// console.log(transform([2, 2, 0, 8, 10]));          //  [1, 1, -1, 7, 9]

// 108 => Applying Discounts
// Create a function that applies a discount d to every number in the array.

function getDiscounts(arr, discount) {
    let discountDecimal = parseFloat(discount) / 100;
    // return arr.map(num => num * discountDecimal);

    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * discountDecimal);
    }
    return result;
}

// console.log(getDiscounts([2, 4, 6, 11], "50%"));              //  [1, 2, 3, 5.5]
// console.log(getDiscounts([10, 20, 40, 80], "75%"));           //  [7.5, 15, 30, 60]
// console.log(getDiscounts([100], "45%"));                     //  [45] 

// 109 => State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full

function filterStateNames(arr, filter) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (filter === "abb") {
            if (arr[i].length === 2) {
                result.push(arr[i])
            }
        } else if (filter === "full") {
            if (arr[i].length > 2) {
                result.push(arr[i])
            }

        }
    }
    return result;


//     if (filter === "abb") {
//         return arr.filter(state => state.length === 2);
//     } else if (filter === "full") {
//         return arr.filter(state => state.length > 2);
//     }
//     return [];
}

// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb"));        //  ["CA", "NY"]
// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full"));        //  ["Arizona", "Nevada"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb"));        //  ["MT", "NJ", "TX", "ID", "IL"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full"));        //  []

// 110 => Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

function formatDate(date){
let [month, day, year] = date.split("/");
return `${year}${day}${month}`;
}

// console.log(formatDate("11/12/2019"));    // "20191211"
// console.log(formatDate("12/31/2019"));    // "20193112"
// console.log(formatDate("01/15/2019"));    // "20191501"