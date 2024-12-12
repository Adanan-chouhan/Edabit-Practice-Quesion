// 11 => Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str) {
    let result = "";
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            result += str[i];
        }
    }
    return result;
}

// function removeVowels(str) {
//     return str.replace(/[aeiouAEIOU]/g, '');
// }

// console.log(removeVowels("I have never seen a thin person drinking Diet Coke.")); 
//  " hv nvr sn  thn prsn drnkng Dt Ck."

// console.log(removeVowels("We're gonna build a wall!")); 
//  "W'r gnn bld  wll!"

// console.log(removeVowels("Happy Thanksgiving to all--even the haters and losers!")); 
//  "Hppy Thnksgvng t ll--vn th htrs nd lsrs!"

// 12 => Return the Index of the First Vowel
// Create a function that returns the index of the first vowel in a string.

function firstVowel(str) {
    let vowels = "aeiouAEIOU";
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            return i;
        }
    }
    return -1
}

// function firstVowel(str) {
//     let index = str.search(/[aeiou]/i);
//     return index;
// }

// console.log(firstVowel("apple"));      //  0
// console.log(firstVowel("hello"));      //  1
// console.log(firstVowel("STRAWBERRY"));      //  3
// console.log(firstVowel("pInEaPPLe"));      //  1

// 13 => Is it True?
// In this challenge you will be given a relation between two numbers, written as a string. Write a function that determines if the relation is true or false.

function isTrue(str) {
    let formattedStr = str.replace(/=/g, "==");
    let result = eval(formattedStr);
    return result;
}

// console.log(isTrue("2=2"));    //  true
// console.log(isTrue("8<7"));    //  false
// console.log(isTrue("5=13"));    //  false
// console.log(isTrue("15>4"));    //  true

// 14 => Regex Series: Even Number?
// Write a regular expression that matches only an even number. Numbers will be presented as strings.

function checkEven(str) {
    let regex = /^[0-9]*[0,2,4,6,8]$/
    return regex.test(str);
}

// console.log(checkEven("2341"));   //  false
// console.log(checkEven("132"));   //  true
// console.log(checkEven("29"));   //  false
// console.log(checkEven("5578"));   //  true

// 15 => Say "Hello" Say "Bye"
// Write a function that takes a string name and a number num (either 0 or 1) and return "Hello" + name if num is 1, otherwise return "Bye" + name.

// function sayHelloBye(str, num) {
// let result = str[0].toUpperCase() + str.slice(1);
// return num === 1 ? `Hello ${result}` : `Bye ${result}` 
// }

function sayHelloBye(str, num) {
    let result = str[0].toUpperCase() + str.slice(1);
    if (num === 1) {
        return `Hello ${result}`
    }
    return `Bye ${result}`
}

// console.log(sayHelloBye("alon", 1));      // "Hello Alon"
// console.log(sayHelloBye("Tomi", 0));      // "Bye Tomi"
// console.log(sayHelloBye("jose", 0));      // "Bye Jose"

// 16 => Capitalize by ASCII
// Create a function that takes a string as input and capitalizes a letter if its ASCII code is even and returns its lower case version if its ASCII code is odd.

function asciiCapitalize(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt(0) % 2 === 0) {
            result += str[i].toUpperCase();
        } else {
            result += str[i].toLowerCase();
        }
    }
    return result;
}

// console.log(asciiCapitalize("to be or not to be!"));    //  "To Be oR NoT To Be!"
// console.log(asciiCapitalize("THE LITTLE MERMAID"));    //  "THe LiTTLe meRmaiD"
// console.log(asciiCapitalize("Oh what a beautiful morning."));    //  "oH wHaT a BeauTiFuL moRNiNg."

// 17 => Hashes and Pluses
// Create a function that returns the number of hashes and pluses in a string.

function hashPlusCount(str) {
    let countHas = 0
    let countPlus = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "#") {
            countHas++
        } else {
            countPlus++
        }
    }
    return [countHas, countPlus];
}

// console.log(hashPlusCount("###+"));     // [3, 1]
// console.log(hashPlusCount("##+++#"));     // [3, 3]
// console.log(hashPlusCount("#+++#+#++#"));     // [4, 6]
// console.log(hashPlusCount(""));     // [0, 0]

// 18 => Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i][0]);
    }
    return result.sort().join("");
}

// console.log(societyName(["Adam", "Sarah", "Malcolm"]));        //  "AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));        //  "CHLN"
// console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));        //  "CJMPRR"

// 19 => Reverse the Case
// Given a string, create a function to reverse the case. All lower-cased letters should be upper-cased, and vice versa.

function reverseCase(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            result += str[i].toLowerCase();
        } else {
            result += str[i].toUpperCase()
        }
    }
    return result;
}

// console.log(reverseCase("Happy Birthday"));     //  "hAPPY bIRTHDAY"
// console.log(reverseCase("MANY THANKS"));     //  "many thanks"
// console.log(reverseCase("sPoNtAnEoUs"));     //  "SpOnTaNeOuS"

// 20 => Valid Zip Code
// Zip codes consist of 5 consecutive digits. Given a string, write a function to determine whether the input is a valid zip code. A valid zip code is as follows:

// Must only contain numbers (no non-digits allowed).
// Must not contain any spaces.
// Must not be greater than 5 digits in length.

function isValid(str) {
    if(str.length !== 5){
        return false
    }

    for(let i = 0; i < str.length; i++){
        if(str[i] < "0" || str[i] > "9")
            return false
    }

    return true
}

// console.log(isValid("59001"));     //  true
// console.log(isValid("853a7"));     //  false
// console.log(isValid("732 32"));     //  false
// console.log(isValid("393939"));     //  false
