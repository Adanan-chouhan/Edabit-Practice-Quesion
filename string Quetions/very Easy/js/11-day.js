// 101 => Shuffle the Name
// Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.


// function nameShuffle(str){
//     let words = str.split(" ");
//     return words[1] + " " +  words[0];
// }

// function nameShuffle(str){
//     let result = "";
//     let words = str.split(" ");
//     result += words[1] + " " + words[0]
//     return result;
// }

function nameShuffle(str) {
    // let [firstName,lastName] = str.split(" ");
    // return `${lastName} ${firstName}`
}

function nameShuffle(str) {
    let result = str.split(" ").reverse().join(" ");
    return result;
}

// console.log(nameShuffle("Donald Trump"));   //  "Trump Donald"
// console.log(nameShuffle("Rosie O'Donnell"));   //  "O'Donnell Rosie"
// console.log(nameShuffle("Seymour Butts"));   //  "Butts Seymour"

// 102 => Check if the Same Case
// Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
    if (str === str.toUpperCase() || str === str.toLowerCase()) {
        return true;
    }
    return false;
}

// function sameCase(str){
//     let result = str === str.toUpperCase() || str === str.toLowerCase() ? true : false;
//     return result;  
// }

// console.log(sameCase("hello"));     //  true
// console.log(sameCase("HELLO"));     //  true
// console.log(sameCase("Hello"));     //  false
// console.log(sameCase("ketcHUp"));     //  false
// console.log(sameCase("Hey"));     //  false

// 103 =>  Is the String in Order?
// Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str) {
    let words = str.split("");
    let result = words.sort().join("");
    if (result === str) {
        return true;
    }
    return false;
}

// console.log(isInOrder("abc"));    //  true
// console.log(isInOrder("edabit"));    //  false
// console.log(isInOrder("123"));    //  true
// console.log(isInOrder("xyzz"));    //  true

// 104 => Strange Pair
// A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
        if (str1[0] === str2[str2.length - 1] && str1[str1.leght - 1] === str2[0]) {
            return true
        }
    }
    return false;
}

// console.log(isStrangePair("ratio", "orator"));   //  true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

// console.log(isStrangePair("sparkling", "groups"));   //  true
// console.log(isStrangePair("bush", "hubris"));   //  falses
// console.log(isStrangePair("", ""));   //  true

// 105 => Array from Comma-Delimited String
// Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
    // let words = str.split(",");;
    // return words;

    if (str === "") {
        return [];
    }

    let result = [];
    let words = str.split(",");
    for (let i = 0; i < words.length; i++) {
        result.push(words[i])
    }
    return result;
}

// console.log(toArray("watermelon, raspberry, orange"));
//  ["watermelon", "raspberry", "orange"]

// console.log(toArray("x1, x2, x3, x4, x5"));
//  ["x1", "x2", "x3", "x4", "x5"]

// console.log(toArray("a, b, c, d"));
//  ["a", "b", "c", "d"]

// console.log(toArray(""));
//  []

// 106 => Edaaaaabit
// Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(num) {
    let str = "Ed"
    for (let i = 1; i <= num; i++) {
        str += "a"
    }
    return str + "bit";
}
// console.log(howManyTimes(5));   //  "Edaaaaabit"
// console.log(howManyTimes(0));   //  "Edbit"
// console.log(howManyTimes(12));   //  "Edaaaaaaaaaaaabit"

// 107 => Repeating Letters N Times
// Create a function that repeats each character in a string n times.

function repeat(str, num) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i].repeat(num);
    }
    return result;
}

function repeat(str, num) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < num; j++) {
            result += str[i];
        }
    }
    return result;
}


// console.log(repeat("mice", 5));   //  "mmmmmiiiiiccccceeeee"
// console.log(repeat("hello", 3));   //  "hhheeellllllooo"
// console.log(repeat("stop", 1));   //  "stop"

// 108 => The Full Length of a Google
// Google's logo can be stretched depending on how many pages it lets you skip forward to.
// Image of Goooooooooogle

// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

function googlify(num){
    
}

console.log(googlify(10));   //  "Goooooooooogle"
console.log(googlify(23));   //  "Gooooooooooooooooooooooogle"
console.log(googlify(2));   //  "Google"
console.log(googlify(-2));   //  "invalid"
