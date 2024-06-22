// 141 => Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));
// ["Apple", "Google", "Microsoft"]

// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
// ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

// console.log(sortByLength(["Turing", "Einstein", "Jung"]));
// ["Jung", "Turing", "Einstein"]

// 142 => Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj, difference) {
    let keys = Object.keys(obj)
    let sum = 0;
    for (let i = 0; i < keys.length; i++) {
        let correntKey = keys[i];
        let correntValue = obj[correntKey];
        sum += correntValue;
    }
    return sum - difference;
}

// function calculateDifference(obj, difference) {
//     let values = Object.values(obj)
//     let sum = 0;
//     for (let i = 0; i < values.length; i++) {
//         let correntValue = values[i];
//         sum += correntValue;
//     }
//     return sum - difference;
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5));                           //  15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19));                     //  11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));        //  1

// 143 =>  Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// function isAvgWhole(arr){
//     let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//     // Calculate the average
//     let average = sum / arr.length;

//     // Check if the average is a whole number
//     return Number.isInteger(average);
// }

function isAvgWhole(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] / arr.length;
    }
    return Number.isInteger(sum);

}

// console.log(isAvgWhole([1, 3]));          //  true
// console.log(isAvgWhole([1, 2, 3, 4]));    //  false
// console.log(isAvgWhole([1, 5, 6]));       //  true
// console.log(isAvgWhole([1, 1, 1]));       //  true
// console.log(isAvgWhole([9, 2, 2, 5]));    //  false

// 144 => Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    return sum;

    // let sum = arr.reduce((acc,value) => acc += Math.abs(value),0);
    // return sum;
}

// console.log(getAbsSum([2, -1, 4, 8, 10]));     //  25
// console.log(getAbsSum([-3, -4, -10, -2, -3])); //  22
// console.log(getAbsSum([2, 4, 6, 8, 10]));      //  30
// console.log(getAbsSum([-1]));                  //  1

// 145 => Sort Numbers in Ascending Order
// Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

function sortNumsAscending(arr) {
    if (!arr || arr.length === 0) {
        return [];
    }

    // Sort the array in ascending order and return it
    return arr.slice().sort((a, b) => a - b);
}

// console.log(sortNumsAscending([1, 2, 10, 50, 5]));               //  [1, 2, 5, 10, 50]
// console.log(sortNumsAscending([80, 29, 4, -95, -24, 85]));       //  [-95, -24, 4, 29, 80, 85]
// console.log(sortNumsAscending(null));                           //  []
// console.log(sortNumsAscending([]));                             //  []

// 146 => Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.max(...arr[i]));
    }
    return result;
}

// console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));                                   //  [7, 90, 2]
// console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));                              //  [-34, -2, 7]
// console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));        //  [0.7634, 9.32, 9]

// 147 => Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// original array

// [1, 3, 5]
// original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

function set(arr) {
    // Create a set from the array to remove duplicates
    let uniqueArray = [...new Set(arr)];
    // Sort the array in ascending order
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;

}
// console.log(set([1, 3, 3, 5, 5]));           //  [1, 3, 5]
// console.log(set([4, 4, 4, 4]));              //  [4]
// console.log(set([5, 7, 8, 9, 10, 15]));      //  [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1]));           //  [1, 2, 3]


// 148 => Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(arr) {
    const [a, b, c, d, e, f, g, h, i, j] = arr;
    return `(${a}${b}${c}) ${d}${e}${f}-${g}${h}${i}${j}`
}

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));    //  "(123) 456-7890"
// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8]));    //  "(519) 555-4468"
// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7]));    //  "(345) 501-2527"

//  149 => Amplify the Multiples of Four
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

function amplify(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 4 === 0) {
            result.push(i * 10);
        }
        else {
            result.push(i);
        }
    }
    return result;
}

// console.log(amplify(4));  //  [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

// console.log(amplify(3));  //  [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

// console.log(amplify(25));  //  [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

// 150 => Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0]);
    }
    result.sort();
    return result.join("")
}


// function societyName(arr) {
//     // Extract the first letter from each name
//     let initials = arr.map(name => name[0]);
    
//     // Sort the initials alphabetically
//     initials.sort();
    
//     // Join the sorted initials into a single string
//     return initials.join('');
// }

console.log(societyName(["Adam", "Sarah", "Malcolm"]));         //  "AMS"
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));         //  "CHLN"
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));         //  "CJMPRR"
