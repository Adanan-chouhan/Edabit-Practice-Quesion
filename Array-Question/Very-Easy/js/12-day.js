// 121 =>  Get the File Extension
// Write a function that maps files to their extension names.

function getExtension(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let part = arr[i].split(".")
        if (part.length > 1) {
            result.push(part.pop());
        }
    }
    return result;
}

// console.log(getExtension(["code.html", "code.css"]));   // ["html", "css"]
// console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"]));   // ["jpg", "pdf", "mp3"]
// console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"]));   // ["rb", "cpp", "py", "js"]if

// 122 => Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

function mean(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] / arr.length
    }
    return sum.toFixed(1);
}

// console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10]));    //  7.2
// console.log(mean([1, 3, 8, 9, 9, 10]));    //  6.7
// console.log(mean([2, 3, 3, 6, 6, 8, 9, 10]));    //  5.9

// 123 => Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

function oddProduct(arr) {
    let oddSum = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddSum *= arr[i];
        }
    }
    return oddSum;
}
// console.log(oddProduct([3, 4, 1, 1, 5]));     //  15
// console.log(oddProduct([5, 5, 8, 2, 4, 32]));     //  25
// console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]));     //  1

// 124 => Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

function minimumRemovals(arr) {
    // Calculate the sum of the array
    let sum = arr.reduce((acc, num) => acc + num, 0);

    // Check if the sum is even
    if (sum % 2 === 0) {
        return 0;
    }

    else {
        return 1;
    }

}

// console.log(minimumRemovals([1, 2, 3, 4, 5]));     //  1
// console.log(minimumRemovals([5, 7, 9, 11]));     //  0
// console.log(minimumRemovals([5, 7, 9, 12]));     //  1

// 125 => Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "Sam") {
            if (i + 1 < arr.length && arr[i + 1] === "Frodo") {
                return true;
            }

            if (i - 1 >= 0 && arr[i - 1] === "Frodo") {
                return true;
            }
        }
    }
    return false;

}

// console.log(middleEarth(["Frodo", "Sam", "Gandalf"]));    //  true
// console.log(middleEarth(["Frodo", "Saruman", "Sam"]));    //  false
// console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"]));    //  true

// 126 => Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            result.push(i)
        }
    }
    return result;
}

// console.log(findEvenNums(8)) //  [2, 4, 6, 8]
// console.log(findEvenNums(4)) //  [2, 4]
// console.log(findEvenNums(2)) //  [2]

// 127 => Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.

function last(arr,n){
    if (n > arr.length) {
        return "invalid";
    }
    return arr.slice(-n);
}

// console.log(last([1, 2, 3, 4, 5], 1));      //  [5]
// console.log(last([4, 3, 9, 9, 7, 6], 3));      //  [9, 7, 6]
// console.log(last([1, 2, 3, 4, 5], 7));      //  "invalid"
// console.log(last([1, 2, 3, 4, 5], 0));      //  []>

// 128 => Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

function greetPeople(arr){
 let greetings = arr.map(name => `Hello ${name}`);
return greetings.join(", ");
}

// console.log(greetPeople(["Joe"]));     //  "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"]));     //  "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"]));     //  "Hello Frank, Hello Angela, Hello Joe"

// 129 => Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string)      [first, last]

function firstAndLast(str){
    let chars = str.split('');
    let first = chars.slice().sort().join('');
    let last = chars.slice().sort().reverse().join('');
    return [first, last]; 
}

// console.log(firstAndLast("marmite"));   //  ["aeimmrt", "trmmiea"]
// console.log(firstAndLast("bench"));   //  ["bcehn", "nhecb"]
// console.log(firstAndLast("scoop"));   //  ["coops", "spooc"]

// 130 => Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

function same(arr1,arr2){
    let unique1 = new Set(arr1);
    let unique2 = new Set(arr2);
    
    // Compare the sizes of the sets
    return unique1.size === unique2.size;
}
console.log(same([1, 3, 4, 4, 4], [2, 5, 7]));       //  true
console.log(same([9, 8, 7, 6], [4, 4, 3, 1]));       //  false
console.log(same([2], [3, 3, 3, 3, 3]));       //  true

