// 91 => Semantic Versioning
// In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(str) {
    let result = "";
    let words = str.split(".");
    return result += words.slice(0, 1);
}

function retrieveMinor(str) {
    let result = "";
    let words = str.split(".");
    return result += words.slice(1, 2);
}

function retrievePatch(str) {
    let result = "";
    let words = str.split(".");
    return result += words.slice(2, 3);
}
// 6.1.9
// console.log(retrieveMajor("6.1.9"));    //  "6"
// console.log(retrieveMinor("6.1.9"));    //  "1"
// console.log(retrievePatch("6.1.9"));    //  "9"

// 2.1.0
// console.log(retrieveMajor("2.1.0"));    //  "2"
// console.log(retrieveMinor("2.1.0"));    //  "1"
// console.log(retrievePatch("2.1.0"));    //  "0"

// 92 => Alphabet Soup
// Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
    let result = str.split("");
    return result.sort().join("");
}

function AlphabetSoup(str) {
    let result = "";
    let words = str.split("");

    for (let i = 0; i < words.length - 1; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (words[i] > words[j]) {
                let temp = words[i];
                words[i] = words[j];
                words[j] = temp;
            }
        }
    }

    // Array ko string mein convert karte hain aur return karte hain
    result = words.join("");
    return result;
}

// console.log(AlphabetSoup("hello"));     //  "ehllo"
// console.log(AlphabetSoup("edabit"));     //  "abdeit"
// console.log(AlphabetSoup("hacker"));     //  "acehkr"
// console.log(AlphabetSoup("geek"));     //  "eegk"
// console.log(AlphabetSoup("javascript"));     //  "aacijprstv"

// 93 => Reverse the Order of a String
// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
    let result = [];
    let words = str.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        let revs = words[i].split("").reverse().join("");
        result.push(revs);
    }
    return result.join(" ");
}

// console.log(reverse("Hello World"));     //  "dlroW olleH"
// console.log(reverse("The quick brown fox."));     //  ".xof nworb kciuq ehT"
// console.log(reverse("Edabit is really helpful!"));     //  "!lufpleh yllaer si tibadE"

// 94 => Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

function removeVowels(str) {
    let result = "";
    let vowels = "aeiou";
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i]
        }
    }
    return result;
}

// function removeVowels(str){
//     let result = str.replace(/[aeiouAEIOU]/g, "");
//     return result;
// }
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

// console.log(removeVowels("candy"));  //  "cndy"
// console.log(removeVowels("hello"));  //  "hll"
// The "e" is removed, but the "o" is still there!
// console.log(removeVowels("apple"));  //  "ppl"

// 95 =>
// function defaultfn(arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i-1] !== arr[i]){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

function defaultfn(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

// console.log(defaultfn([1,2,2,2,2,4,5,6,8])); // [1,2,4,5,6,8]
// console.log(defaultfn([1,2,4,5,6,6,8])); // [1,2,4,5,6,8]
// console.log(defaultfn([1,1,4,5,6,8])); // [1,2,4,5,6,8]

// 96 => Smaller String Number
// Create a function that returns the smaller number.

function smallerNum(str1, str2) {
    // if(str1 < str2){
    //    return str1;        
    // }
    // return str2;

    let result = str1 < str2 ? str1 : str2;
    return result;
}

// console.log(smallerNum("21", "44"));      //  "21"
// console.log(smallerNum("1500", "1"));      //  "1"
// console.log(smallerNum("5", "5"));      //  "5"

// 97 => Convert Number to String of Dashes
// Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num) {
    let result = "";
    for (let i = 1; i <= num; i++) {
        result += "-";
    }
    return result;
}

// console.log(Go(1));    //  "-"
// console.log(Go(5));    //  "-----"
// console.log(Go(3));    //  "---"

// 98 => Reverse and Capitalize
// Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

function reverseCapitalize(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i].toUpperCase();
    }
    return result;
}

// console.log(reverseCapitalize("abc"));       //  "CBA"
// console.log(reverseCapitalize("hellothere"));       //  "EREHTOLLEH"
// console.log(reverseCapitalize("input"));       //  "TUPNI"

// 99 => Little Dictionary
// Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

function dictionary(initial, words) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(initial)) {
            result.push(words[i]);
        }
    }
    return result;
}

// console.log(dictionary("bu", ["button", "breakfast", "border"]));  //  ["button"]
// console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"]));  //  ["triplet", "tries", trip"]
// console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"]));  //  []

// 100 => Check if String Ending Matches Second String
// Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str1, str2) {
    // let result = str1.endsWith(str2);
    // return result; 

    for (let i = 0; i < str2.length; i++) {
            if (str1[str1.length - str2.length + i] !== str2[i]) {
                return false;
        }
    }
    return true;
}

// console.log(checkEnding("abc", "bc"));           //  true
// console.log(checkEnding("abc", "d"));           //  false
// console.log(checkEnding("samurai", "zi"));           //  false
// console.log(checkEnding("feminine", "nine"));           //  true
// console.log(checkEnding("convention", "tio"));           //  false