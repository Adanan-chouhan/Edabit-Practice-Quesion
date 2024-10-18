// 51 => Inclusive Array Ranges
// Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.
function inclusiveArray(startNum, endNum) {
    let result = [];
    for (let i = startNum; i <= endNum; i++) {
        if (startNum > endNum) {
            result;
        }
        else {
            result.push(startNum++)
        }
    }
    return result;
}

// console.log(inclusiveArray(1, 5));      //  [1, 2, 3, 4, 5]
// console.log(inclusiveArray(2, 8));      //  [2, 3, 4, 5, 6, 7, 8]
// console.log(inclusiveArray(10, 20));      //  [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(inclusiveArray(17, 5));      //  [17]

// 52 => Find Unique Character Strings
// Create a function that returns only strings with unique characters.

function filterUnique(arr) {
    return arr.filter(str => new Set(str).size === str.length);
}

// console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"]));     //  ["abc"]
// "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.

// console.log(filterUnique(["88", "999", "989", "9988", "9898"]));     //  []
// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"]));     //  ["ABCDE", "BED",  "BAC"]

// 53 => Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// To illustrate:

// testFairness([[4, 3], [2, 4], [1, 2]],
// [[6, 2], [4, 2], [1, 1], [1, 1]])
//  true

// Agatha's pieces: [4, 3], [2, 4], [1, 2]
// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// Total area of Agatha's chocolate
// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// Total area of Bertha's chocolate is:
// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22

function testFairness(sis1, sis2) {
    let Agatha = 0;
    let Bertha = 0;
    for (let i = 0; i < sis1.length; i++) {
        Agatha += sis1[i][0] * sis1[i][1]
    }

    for (let i = 0; i < sis2.length; i++) {
        Bertha += sis2[i][0] * sis2[i][1]
    }

    return Agatha === Bertha;
}

// console.log(testFairness([[1, 2], [2, 1]], [[2, 2]]));         //  true
// console.log(testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]));         //  false
// console.log(testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]));         //  true
// console.log(testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]));         //  false

// 54 => Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function countPosSumNeg(arr) {
    let posNum = 0;
    let negNum = 0;

    if (arr == 0) {
        return [];
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            posNum++;
        }
        else {
            negNum += arr[i];
        }
    }
    return [posNum, negNum];
}

// console.log(countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));    //  [10, -65]
// // There are a total of 10 positive numbers.
// // The sum of all negative numbers equals -65.

// console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]));    //  [7, -252]
// console.log(countPosSumNeg([91, -4, 80, -73, -28]));    //  [2, -105]
// console.log(countPosSumNeg([]));    //  []

// 55 =>    Measure the Depth of Emptiness
// In this challenge you will receive an input of the form:

// [[[[[[[[[[[]]]]]]]]]]]
// In other words, an array containing an array containing an array containing... an array containing nothing.

// Your goal is to measure the depth of this array, where [] has a depth 1, [[]] has depth of 2, [[[]]] has depth 3, etc.

function measureDepth(arr) {
    if (Array.isArray(arr)) {
        return 1 + measureDepth(arr[0]);
    }
    else {
        return 0;
    }

}

// console.log(measureDepth([]));    //  1
// console.log(measureDepth([[]]));    //  2
// console.log(measureDepth([[[]]]));    //  3
// console.log(measureDepth([[[[[[[[[[[]]]]]]]]]]]));    //  11

// 56 => Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

function subset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            return false;
        }
    }
    return true;
}

// console.log(subset([1, 3], [1, 3, 3, 5]));        //  true
// console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8]));        //  true
// console.log(subset([1, 3], [1, 33]));        //  false
// console.log(subset([1, 3, 10], [10, 8, 8, 8]));        //  false

// 57 => Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

function evenOrOdd(str) {
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < str.length; i++) {
        let digits = Number(str[i])
        if (digits % 2 === 0) {
            evenSum += digits
        }
        else {
            oddSum += digits
        }
    }
    if (evenSum > oddSum) {
        return "Even is greater than Odd"
    }
    else if (evenSum === oddSum) {
        return "Even and Odd are the same"
    }
    else {
        return "Odd is greater than Even"
    }

}

// console.log(evenOrOdd("22471"));      //  "Even and Odd are the same"
// console.log(evenOrOdd("213613"));      //  "Even and Odd are the same"
// console.log(evenOrOdd("23456"));      //  "Even is greater than Odd"
// console.log(evenOrOdd("66771"));      //  "Odd is greater than Even"

// 58 => Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

function miniPeaks(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            result.push(arr[i])
        }
    }
    return result;
}

// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]));       //  [5, 9]
// // 5 has neighbours 4 and 2, both are less than 5.

// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]));       //  [2, 3, 5]
// console.log(miniPeaks([1, 2, 3, 4, 5, 6]));       //  []

// 59 => Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5]    //  30
// (2 + 4) * 5)    //  30

// [1, 4, 5, 6, 7, 2, 3]      //  48
// (1 + 5 + 7 + 3) * 3]      //  48


function evenLast(arr) {

    if (arr.length === 0) {
        return 0;
    }

    let sumOfEvenIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            sumOfEvenIndex += arr[i];
        }
    }
    return sumOfEvenIndex * arr[arr.length - 1];
}

// console.log(evenLast([]));                           //  0
// console.log(evenLast([1, 3, 3, 1, 10]));              //  140
// console.log(evenLast([-11, 3, 3, 1, 10]));              //  20

// 60 => Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

function backToHome(str) {
    let x = 0;
    let y = 0;

    for (let direction of str) {
        switch (direction) {
            case "N": y += 1;
            break;
            case "S": y -= 1;
            break;
            case "E": x += 1;
            break;
            case "W": x -= 1 ;
            break;
        }
    }

    return x === 0 && y === 0;
}

console.log(backToHome("EEWE"));       //  false
console.log(backToHome("NENESSWW"));       //  true
console.log(backToHome("NEESSW"));       //  false