// 21 => Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(arr) {
    arr.sort((a, b) => b - a);
    let sum = 0
    for (let i = 0; i < 5; i++) {
        if (arr[i] > 5) {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));    //  43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]));    //  100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));    //  40

// 22 => Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].includes(num)) {
            return false;
        }
    }
    return true;
}

// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));      //  true
// console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6));      //  false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5));      //  true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6));      //  false

// 23 => Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num) {
    // Convert the number to a string, split it into characters, and then convert each character back to a number
    return num.toString().split('').map(Number);
}

function toNumber(arr) {
    // Join the array elements into a string and then convert it back to a number
    return Number(arr.join(''));
}

// console.log(toArray(235));  // [2, 3, 5]
// console.log(toArray(0));    // [0]
// console.log(toNumber([2, 3, 5]));  // 235
// console.log(toNumber([0]));  // 0

// 24 => Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// Worked Example
// sliceSum([9, 8, 7, 6], 3));     //  24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.

function sliceSum(arr, num) {
    let sum = 0
    for (let i = 0; i < num && i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// console.log(sliceSum([1, 3, 2], 2));     //  4
// console.log(sliceSum([4, 2, 5, 7], 4));     //  18
// console.log(sliceSum([3, 6, 2], 0));     //  0 

// 25 => Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

function countOnes(arr) {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                count++
            }
        }
    }
    return count;
}

// console.log(countOnes([[1, 0], [0, 0]]));       //  1
// console.log(countOnes([[1, 1, 1], [0, 0, 1], [1, 1, 1]]));       //  7
// console.log(countOnes([[1, 2, 3], [0, 2, 1], [5, 7, 33]]));       //  2

// 26 => Learn Lodash (4): _.dropRight, Drop the Last Elements of an Array
// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.
// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

function dropRight(arr, drop = 1) {
    return arr.slice(0, arr.length - drop);
}

// console.log(dropRight([1, 2, 3]));     //  [1, 2]
// console.log(dropRight([1, 2, 3], 2));     //  [1]
// console.log(dropRight([1, 2, 3], 5));     //  []
// console.log(dropRight([1, 2, 3], 0));     //  [1, 2, 3]

// 27 => Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

function isSubset(arr1, arr2) {
    return arr1.every(element => arr2.includes(element));
}

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));         //  true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]));         //  true
// console.log(isSubset([1, 2], [3, 5, 9, 1]));         //  false

// 28 => Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

// "user1, user2 and 3 more online"

function chatroomStatus(users) {
    if (users.length === 0) {
        return "no one online";
    } else if (users.length === 1) {
        return `${users[0]} online`;
    } else if (users.length === 2) {
        return `${users[0]} and ${users[1]} online`;
    } else {
        return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
    }
}

// console.log(chatroomStatus([]));       //  "no one online"
// console.log(chatroomStatus(["paRIE_to"]));       //  "paRIE_to online"
// console.log(chatroomStatus(["s234f", "mailbox2"]));       //  "s234f and mailbox2 online"
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));       //  "pap_ier44, townieBOY and 4 more online"

// 29 => Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

function battingAvg(arr) {
    let totalHits = 0;
    let totalBats = 0;

    for (let i = 0; i < arr.length; i++) {
        totalHits += arr[i][0];
        totalBats += arr[i][1];
    }

    let avg = totalHits / totalBats;

    let roundedAvg = avg.toFixed(3);
    return roundedAvg[0] === "0" ? roundedAvg.slice(1) : roundedAvg;
}

// console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]]));         //  ".286"
// console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]]));         //  ".350"
// console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]]));         //  ".273"

// 30 => Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

function spelling(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.slice(0, i + 1));
    }
    return result;
}


// console.log(spelling("bee"));       //  ["b", "be", "bee"]
// console.log(spelling("happy"));       //  ["h", "ha", "hap", "happ", "happy"]
// console.log(spelling("eagerly"));       //  ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

// 31 => First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

function charIndex(words, char) {
    let firstIndex = words.indexOf(char);
    let lastIndex = words.lastIndexOf(char);

    if (firstIndex === -1) {
        return undefined
    }

    return [firstIndex, lastIndex];
}

// console.log(charIndex("hello", "l"));      //  [2, 3]
// The first "l" has index 2, the last "l" has index 3.

// console.log(charIndex("circumlocution", "c"));      //  [0, 8]
// The first "c" has index 0, the last "c" has index 8.

// console.log(charIndex("happy", "h"));      //  [0, 0]
// Only one "h" exists, so the first and last index is 0.

// console.log(charIndex("happy", "e"));      //  undefined
// "e" does not exist in "happy", so we return undefined.


// 32 => Snail Race
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// The function inputs:

// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.

function mauriceWins(maurice, steve) {
    let round1 = maurice[0] > steve[2];
    let round2 = maurice[1] > steve[0];
    let round3 = maurice[2] > steve[1];
    return (round1 + round2 + round3) >= 2;
}

// function mauriceWins(arr1, arr2) {
//     let Maurice = 0;
//     let Steve = 0;

//     if (arr1[0] > arr2[2]) {
//         Maurice++;
//     }
//     else {
//         Steve++
//     }
//     if (arr1[1] > arr2[0]){
//         Maurice++;
//     }
//     else{
//         Steve++
//     }
//     if (arr1[2] > arr2[1]) {
//         Maurice++;
//     }
//     else {
//         Steve++
//     }

//     if(Maurice >= 2 && Maurice > Steve){
//         return true;
//     }
//     return false;
// }

console.log(mauriceWins([3, 5, 10], [4, 7, 11]));           //  true
// Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

console.log(mauriceWins([6, 8, 9], [7, 12, 14]));           //  false
// Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

console.log(mauriceWins([1, 8, 20], [2, 9, 100]));           //  true

