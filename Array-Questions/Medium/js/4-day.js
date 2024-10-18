// 31 => Mirror Array
// Given an integer array, transform that array into a mirror.

function mirror(arr) {
    let result = [...arr];
    for (let i = arr.length - 2; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

// console.log(mirror([0, 2, 4, 6]));     //  [0, 2, 4, 6, 4, 2, 0]
// console.log(mirror([1, 2, 3, 4, 5]));     //  [1, 2, 3, 4, 5, 4, 3, 2, 1]
// console.log(mirror([3, 5, 6, 7, 8]));     //  [3, 5, 6, 7, 8, 7, 6, 5, 3]

// 32 => Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...arguments) {
    for (let i = 0; i < arguments.length; i++) {
        if (!arguments[i]) {
            return false;
        }
    }
    return true;
}

// console.log(allTruthy(true, true, true));   //  true
// console.log(allTruthy(true, false, true));   //  false
// console.log(allTruthy(5, 4, 3, 2, 1, 0));   //  false

// 33 => Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

function reverseArr(num) {
    return num.toString().split("").reverse("").map(Number);
}

// console.log(reverseArr(1485979));    //  [9, 7, 9, 5, 8, 4, 1]
// console.log(reverseArr(623478));    //  [8, 7, 4, 3, 2, 6]
// console.log(reverseArr(12345));    //  [5, 4, 3, 2, 1]

// 34 => H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

function hackerSpeak(str) {
    let replacments = {
        "a": "4",
        "e": "3",
        "i": "1",
        "o": "0",
        "s": "5"
    };

    return str.split("").map(char => replacments[char] || char).join("");

}

// console.log(hackerSpeak("javascript is cool"));    //  "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun"));    //  "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder"));    //  "b3c0m3 4 c0d3r"

// 35 => Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

function capMe(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let firstLetter = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1).toLowerCase();
        result.push(firstLetter);
    }
    return result;
}

// console.log(capMe(["mavis", "senaida", "letty"]));      //  ["Mavis", "Senaida", "Letty"]
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]));      //  ["Samuel", "Mabelle", "Letitia", "Meridith"]
// console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"]));      //  ["Slyvia", "Kristal", "Sharilyn", "Calista"]

// 36 => Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
    let positiveArr = arr.filter(num => num > 0);
    positiveArr.sort((a, b) => a - b);
    return positiveArr[0] = positiveArr[1];
}

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]));       //  7
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]));       //  3453455
// console.log(sumTwoSmallestNums([2, 9, 6, -1]));       //  8
// console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]));       //  563
// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]));       //  4519

// 37 => War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.
// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

function warOfNumbers(arr) {
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenSum += arr[i]
        }
        else {
            oddSum += arr[i]
        }
    }
    return Math.abs(evenSum - oddSum);
}

// console.log(warOfNumbers([2, 8, 7, 5]));    //  2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

// console.log(warOfNumbers([12, 90, 75]));    //  27

// 38 => Number of Arrays in an Array
// Return the total number of arrays inside a given array.

function numOfSubbarrays(arr) {
    let numberOfArr = 0
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            numberOfArr++
        }
    }
    return numberOfArr;
}

// console.log(numOfSubbarrays([[1, 2, 3]]));      // 1
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]));      // 3
// console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]));      // 4
// console.log(numOfSubbarrays([1, 2, 3]));      // 0


// 39 => Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            return i
        }
    }
    return -1;
}

// console.log(findNaN([1, 2, NaN]));      //  2
// console.log(findNaN([NaN, 1, 2, 3, 4]));      //  0
// console.log(findNaN([0, 1, 2, 3, 4]));      //  -1

// 40 => Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

function zipIt(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.length === arr2.length) {
            result.push([arr1[i], arr2[i]]);
        }
        else {
            return "sizes don't match";
        }
    }
    return result
}


console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));       //  [["Elise", "John"], ["Mary", "Rick"]]
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));       //  "sizes don't match"
console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));       //  [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]