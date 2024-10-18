// 51 => Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

function sumFive(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 5) {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18]));       //  77
// console.log(sumFive([1, 2, 3, 4]));                   //  0
// console.log(sumFive([10, 12, 28, 47, 55, 100]));      //  252


// 52 => Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    let filter = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            filter.push(arr[i]);
        }
    }
    return filter;
}

// console.log(filterArray([1, 2, 3, "a", "b", 4]));                          //  [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]));      //  [0, 1729]
// console.log(filterArray(["Nothing", "here"]));                             //  []

// 53 => Binary Array to Decimal
// In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

function binaryToDecimal(arr) {
    let decimal = 0;
    for (let i = 0; i < arr.length; i++) {
        // Multiply the bit by 2 raised to the power of its position
        decimal += arr[i] * Math.pow(2, arr.length - 1 - i);
    }
    return decimal;
}

// console.log(binaryToDecimal([0, 0, 0, 1]));                      //  1
// console.log(binaryToDecimal([0, 0, 1, 0]));                      //  2
// console.log(binaryToDecimal([1, 1, 1, 1, 1, 0, 1, 1, 0, 1]));    //  1005

// 54 => Burglary Series (11): Say What
// The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function saywhat(obj) {
    const values = Object.values(obj);
    const key2Value = obj[2];
    return values.join(" ") + " " + key2Value;
}
// console.log(saywhat({ 1: "Mommy", 2: "please", 3: "help" }));    //  "Mommy please help please"
// console.log(saywhat({ 1: "Me", 2: "innocent", 3: "is" })) ;     //  "Me innocent is innocent"
// console.log(saywhat({ 1: "Must", 2: "lawyer", 3: "call" }));    //  "Must lawyer call lawyer"

// 55 => True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(str) {
    let booleans = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 1) {
            booleans.push(true);
        } else {
            booleans.push(false)
        }
    }
    return booleans;

}

// console.log(integerBoolean("100101"));   //  [true, false, false, true, false, true]
// console.log(integerBoolean("10"));       //  [true, false]
// console.log(integerBoolean("001"));      //  [false, false, true]


// 56 => Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.

function makeRug(m, n, proc = '#') {
    const rug = [];
    const row = proc.repeat(n);
    for (let i = 0; i < m; i++) {
        rug.push(row);
    }
    return rug;
}
// console.log(makeRug(3, 5));             // [  "#####","#####", "#####"]
// console.log(makeRug(3, 5, '$') );       // [ "$$$$$","$$$$$", "$$$$$"]
// console.log(makeRug(2, 2, 'A') );       // [  "AA", "AA"]

// 57 => The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(letter, words) {
    let checkStr = true;
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(letter)) {
            checkStr = false;
        }
    }
    return checkStr;
}

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]));       //  false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]));       //  true
// console.log(forbiddenLetter("m", []));       //  true


// 58 => Chinese Zodiac
// Create a function that takes a year as an argument and returns the corresponding Chinese zodiac.

function chineseZodiac(year) {
    const zodiacAnimals = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat"];
    const startYear = 1900; // The start year of the Chinese zodiac cycle
    const index = (year - startYear) % 12; // Calculate the index of the zodiac animal array
    return zodiacAnimals[index < 0 ? index + 12 : index]; // Adjust for negative indices
}

// console.log(chineseZodiac(2021));    // "Ox"
// console.log(chineseZodiac(2020));    // "Rat"
// console.log(chineseZodiac(1933));    // "Rooster"

// 59 => Tallest Birthday Cake Candles
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.


function birthdayCakeCandles(arr) {
    let max = arr[0];
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max) {
            count++;
        }
    }

    return count;
}

// console.log(birthdayCakeCandles([4, 4, 1, 3]));     // 2
// // The maximum height candles are four units high.
// // There are two of them, so you return 2.
// console.log(birthdayCakeCandles([3, 2, 1, 3]));     // 2
// console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]));     //  4

// 60 => Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(arr) {
    let evan = [];
    let odd = [];

    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i]);
        // if(!isNaN(num)){
        if (num % 2 === 0) {
            evan.push(num)
        } else {
            odd.push(num);
        }
    // }
}
    return [evan, odd];
}

// console.log(cleanUpArray(["8"]));    // [[8], []]
// console.log(cleanUpArray(["11"]));    // [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"]));    // [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"]));    // [[4, 8], [9, 5]]