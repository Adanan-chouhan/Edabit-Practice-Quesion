// 81 => String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.
// See the below examples for a better understanding:

function stringPairs(str) {
    let result = []
    for (let i = 0; i < str.length; i += 2) {
        if (str[i + 1]) {
            result.push(str[i] + str[i + 1]);
        } else {
            result.push(str[i] + "*")
        }
    }
    return result;
}

// console.log(stringPairs("mubashir"));     //  ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit"));     //  ["ed", "ab", "it"]
// console.log(stringPairs("airforces"));     //  ["ai", "rf", "or", "ce", "s*"]

// 82 => Hamming Distance
// Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

function hammingDistance(str1, str2) {
    let difference = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) {
            difference++;
        }
    }
    return difference;
}

// console.log(hammingDistance("abcde", "bcdef"));    //  5
// console.log(hammingDistance("abcde", "abcde"));    //  0
// console.log(hammingDistance("strong", "strung"));    //  1

// 83 => Remove the First and Last Characters
// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
    if (str.length === 1) {
        return str;
    }
    return str.slice(1, -1);
}

// console.log(removeFirstLast("hello"));     //  "ell"
// console.log(removeFirstLast("maybe"));     //  "ayb"
// console.log(removeFirstLast("benefit"));     //  "enefi"
// console.log(removeFirstLast("a"));     //  "a"

// 84 => Retrieve the Subreddit
// Create a function to extract the name of the subreddit from its URL.

// function subReddit(str){
//     let result = ""
//     let words = str.split("/");
//     result += words.slice(-2,-1);
//     return result;
// }

function subReddit(str) {
    const parts = str.split("/");
    return parts[parts.length - 2]; // Access second last element
}

// console.log(subReddit("https://www.reddit.com/r/funny/"));     //  "funny"
// console.log(subReddit("https://www.reddit.com/r/relationships/"));     //  "relationships"
// console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/"));     //  "mildlyinteresting"

// 85 => Broken Bridge
// Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

function isSafeBridge(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i].includes(" ")) {
            return false
        }
    }
    return true
}

// console.log(isSafeBridge("####"));   //  true
// console.log(isSafeBridge("## ####"));   //  false
// console.log(isSafeBridge("#"));   //  true

// 86 => Between Words
// Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

function isBetween(first, last, word) {
    if (first < word && word < last) {
        return true;
    }
    return false;
}

// console.log(isBetween("apple", "banana", "azure"));      //  true
// console.log(isBetween("monk", "monument", "monkey"));      //  true
// console.log(isBetween("bookend", "boolean", "boost"));      //  false

// 87 => Regex Series: String Contains at Least One Digit
// Write a regular expression that matches a string if it contains at least one digit.

function rgx(str) {
    let regex = /\d/.test(str);
    return regex;
}

// console.log(rgx("c8"));    // true
// console.log(rgx("23cc4"));    // true
// console.log(rgx("abwekz"));    // false
// console.log(rgx("sdfkxi"));    // false

// 88 => Vowel Replacer
// Create a function that replaces all the vowels in a string with a specified character.

function replaceVowels(str, char) {
    let result = str.replace(/[aeiouAEIOU]/g,char);
    return result;    
}

console.log(replaceVowels("the aardvark", "#"));   //  "th# ##rdv#rk"
console.log(replaceVowels("minnie mouse", "?"));   //  "m?nn?? m??s?"
console.log(replaceVowels("shakespeare", "*"));   //  "sh*k*sp**r*"
