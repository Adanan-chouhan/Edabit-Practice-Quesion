// 1 => What's Hiding Amongst the Crowd?
// A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

// The wanted word is in lowercase.
// The crowd of letters is all in uppercase.
// Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

function detectWord(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[i].toUpperCase()) {
            result += str[i];
        }
    }
    return result;
}

// console.log(detectWord("UcUNFYGaFYFYGtNUH"));    // "cat"
// console.log(detectWord("bEEFGBuFBRrHgUHlNFYaYr"));    // "burglar"
// console.log(detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));    // "embezzlement"

// 2 => Find the Amount of Potatoes
// Create a function to return the amount of potatoes there are in a string.

function protatoes(str) {
    let count = 0;
    const regexp = /potato/g;
    const matches = str.match(regexp);
    for (let i = 0; i < matches.length; i++) {
        count++;
    }
    return count;
}

// console.log(protatoes("potato"));     //  1
// console.log(protatoes("potatopotato"));     //  2
// console.log(protatoes("potatoapple"));     //  1

// 3 => Count Instances of a Character in a String
// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

function charCount(str1, str2) {
    let count = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str2[i].includes(str1)) {
            count++;
        }
    }
    return count;
}

// console.log(charCount("a", "edabit"));     //  1
// console.log(charCount("c", "Chamber of secrets"));     //  1
// console.log(charCount("b", "big fat bubble"));     //  4

// 4 => Incorrect Import Statement
// When importing objects from a module in Python, the syntax usually is as follows:

// from module_name import object
// Given a string of an incorrect import statement, return the fixed string. All import statements will be the wrong way round.

function fixImport(str) {
    let words = str.split(" ")
    return `${words.slice(2, 3)} ${words.slice(-1)} ${words.slice(0, 1)} ${words.slice(1, 2)}`;
}

// console.log(fixImport("import object from module_name"));     //  "from module_name import object"
// console.log(fixImport("import randint from random"));     //  "from random import randint"
// console.log(fixImport("import pi from math"));     //  "from math import pi"

// 5 => Error Messages
// Create a function that takes a number as an argument and returns the appropriate error message. You should do this without using the switch or if statements.

// The input error will be 1 to 5:

// 1 >> "Check the fan: e1"
// 2 >> "Emergency stop: e2"
// 3 >> "Pump Error: e3"
// 4 >> "c: e4"
// 5 >> "Temperature Sensor Error: e5"
// For any other value, return 101 (you can use an if statement here).

function error(num) {
    switch (num) {
        case 1:
            return "Check the fan: e1"
            break;
        case 2:
            return "Emergency stop: e2"
            break;
        case 3:
            return "Pump Error: e3"
            break;
        case 4:
            return "c: e4"
            break;
        case 5:
            return "Temperature Sensor Error: e5"
            break;
        default:
            return 101;
            break;
    }
}

// function error(num) {
//     if (num === 1) {
//         return "Check the fan: e1"
//     } else if (num === 2) {
//         return "Emergency stop: e2"
//     } else if (num === 3) {
//         return "Pump Error: e3"
//     } else if (num === 4) {
//         return "c: e4"
//     } else if (num === 5) {
//         return "Temperature Sensor Error: e5"
//     }
//     return 101;
// }

function error(n) {
    let obj = {
        name: {
            1: "Check the fan: e1",
            2: "Emergency stop: e2",
            3: "Pump Error: e3",
            4: "c: e4",
            5: "Temperature Sensor Error: e5"
        },
    };
    return obj.name?.[n] ?? "101";
}

// console.log(error(1));     //  "Check the fan: e1" 
// console.log(error(2));     //  "Emergency stop: e2"  
// console.log(error(10));     //  "Emergency stop: e2"  

// 6 => Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

function doubleChar(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[i] + str[i];
    }
    return result;
}

// function doubleChar(str){
//     return str.split("").map(item => item + item).join("");
// }

// console.log(doubleChar("String"));  //  "SSttrriinngg"
// console.log(doubleChar("Hello World!"));  //  "HHeelllloo  WWoorrlldd!!"
// console.log(doubleChar("1234!_ "));  //  "11223344!!__  "

// 7 => Emotify the Sentence
// Create a function that changes specific words into emoticons. Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.

// word	emoticon
// smile	:D
// grin	:)
// sad	:(
// mad	:P

function emotify(str) {
    let result = "";
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes("smile")) {
            result += "Make me :D";
        } else if (words[i].includes("grin")) {
            result += "Make me :)"
        } else if (words[i].includes("sad")) {
            return result += "Make me :("
        } else if (words[i].includes("mad")) {
            return "Make me :P";
        }
    }
    return result;
}

// let emotify = s => `Make me ` + ({smile : ":D", grin : ":)", sad : ":(", mad : ":p"})[s.split(" ").pop()];

// console.log(emotify("Make me smile"));    //  "Make me :D"
// console.log(emotify("Make me grin"));    //  "Make me :)"
// console.log(emotify("Make me sad"));    //  "Make me :("
// console.log(emotify("Make me mad"));    //  "Make me :P"

// 8 => How Many Vowels?
// Create a function that takes a string and returns the number (count) of vowels contained within it.

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU"
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++
        }
    }
    return count;
}

// console.log(countVowels("Celebration"));    //  5
// console.log(countVowels("Palm"));    //  1
// console.log(countVowels("Prediction"));    //  4

// 9 => Recursion to Repeat a String n Number of Times
// Create a recursive function that takes two parameters and repeats the string n number of times. The first parameter txt is the string to be repeated and the second parameter is the number of times the string is to be repeated.

// String.prototype.repeat() is not allowed

function repetition(str, n) {
    if (n === 0) {
        return ""
    }
    return str + repetition(str, n - 1);
}

// function repetition(str,n){
//     return str.repeat(n);
// }

// function repetition(str,n){
//     let  result = "";
//     for(let i = 0; i < n; i++){
//         result += str;
//     }
//     return result
// }

// console.log(repetition("ab", 3));       //  "ababab"
// console.log(repetition("kiwi", 1));       //  "kiwi"
// console.log(repetition("cherry", 2));       //  "cherrycherry"

// 10 => Find the Bomb
// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

function bomb(str) {

    for (let i = 0; i < str.length; i++) {
      if(str[i].includes("bomb")){
        return "Duck!!!";
      }
    }
    return "There is no bomb, relax."
}

console.log(bomb("There is a bomb."));    //  "Duck!!!"
console.log(bomb("Hey, did you think there is a bomb?"));    //  "Duck!!!"
console.log(bomb("This goes boom!!!"));    //  "There is no bomb, relax."
