// 61=> Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it. 
// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(arr) {
    let result = [];
    let evenArr = [];
    let oddArr = [];

    for (let i = 0; i < arr.length; i++) {
        let num = parseInt(arr[i])
        if (num % 2 === 0) {
            evenArr.push(num);
        }
        else {
            oddArr.push(num);
        }

    }
    result.push(evenArr, oddArr);
    return result;
}

// console.log(cleanUpArray(["8"]));          //  [[8], []]
// console.log(cleanUpArray(["11"]));          //  [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"]));          //  [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"]));          //  [[4, 8], [9, 5]]

// 62 => Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// // A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function keyboardMistakes(character) {
    let result = ""
    for (let i = 0; i < character.length; i++) {
        if (character[i].includes("4")) {
            result += "A"
        } else if (character[i].includes("5")) {
            result += "S";
        } else if (character[i].includes("0")) {
            result += "o";
        } else if (character[i].includes("1")) {
            result += "I";
        } else {
            result += character[i];
        }
    }
    return result
}

// console.log(keyboardMistakes("MUB45H1R"));   //  "MUBASHIR"
// console.log(keyboardMistakes("DUBL1N"));   //  "DUBLIN"
// console.log(keyboardMistakes("51NG4P0RE"));   //  "SINGAPORE"

// 63 => Return Last Item
// Create a function that returns the last value of the last item in an array or string.

function lastItem(item) {
    if (Array.isArray(item)) {
        return item.length > 0 ? item[item.length - 1] : undefined;
    }

    if (typeof item === "string") {
        // String का आखिरी character लौटाएं
        return item.length > 0 ? item[item.length - 1] : undefined;
    }

    return undefined;

}

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]));          //  2
// console.log(lastItem("The quick brown fox jumped over the lazy dog"));          //  "g"
// console.log(lastItem([]));          //  undefined

// 64 => Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

function evenOddString(word) {
    let result = ""
    let evenWord = "";
    let oddWord = "";

    for (let i = 0; i < word.length; i++) {
        if ([i] % 2 === 0) {
            evenWord += word[i];
        }
        else {
            oddWord += word[i]
        }
    }
    return result += `${evenWord} ${oddWord}`;
}

// console.log(evenOddString("mubashir"));      //  "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space

// console.log(evenOddString("edabit"));      // );      //  "eai dbt"
// console.log(evenOddString("airforce"));      //  "aroc ifre"

// 65 => Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

function arithmeticProgression(first, difference, n) {
    let result = []

    for (let i = 0; i < n; i++) {
        result.push(first + i * difference)
    }
    return result.join(", ");
}

// console.log(arithmeticProgression(1, 2, 5));      //  "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5));      //  "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10));      //  "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"

// 66 => Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

function longestString(str1, str2) {
    let combinedStr = str1.concat(str2);
    let uniqChar = [...new Set(combinedStr)];
    let sortedStr = uniqChar.sort().join("");
    return sortedStr;

}
str1 = "mubashir"
str2 = str1.concat("edabit");
// console.log(longestString(str1, str2));    //  "abdehimrstu"
// Contains sorted and distinct letters of the given strings.

str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "abcdefghijklmnopqrstuvwxyz"

// console.log(longestString(str1, str2));    //  "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings. 

// 67 => Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// function countCharacters(arr){
//     let count = 0;
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         count++
//     }
// }    
// return count;
// }

function countCharacters(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].length;
    }
    return count;
}

// console.log(countCharacters([
//     "###",
//     "###",
//     "###"
// ]));    //  9

// console.log(countCharacters([
//     "22222222",
//     "22222222",
// ]));    //  16

// console.log(countCharacters([
//     "------------------"
// ]));    //  18

// console.log(countCharacters([]));   // 0
// console.log(countCharacters(["", ""])); // 0

// 68 => Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

function showdown(p1, p2) {
    // Remove leading and trailing spaces and check the index of "Bang!"
    let p1Draw = p1.indexOf('Bang!');
    let p2Draw = p2.indexOf('Bang!');

    if (p1Draw < p2Draw) {
        return "p1";  // p1 draws first
    } else if (p2Draw < p1Draw) {
        return "p2";  // p2 draws first
    } else {
        return "tie";  // Both draw at the same time
    }
}

// console.log(showdown(
//     "   Bang!        ",
//     "        Bang!   "
// ));   //  "p1"

// p1 draws his gun sooner than p2

// console.log(showdown(
//     "               Bang! ",
//     "             Bang!   "
// ));   //  "p2"

// console.log(showdown(
//     "     Bang!   ",
//     "     Bang!   "
// ));   //  "tie"

// 69 => Formatting Text on Edabit
// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough

function mdFormat(word,format){
if(format === "b"){
    return `**${word}**`;
}
else if(format === "i"){
    return `__${word}__`;
}
else if(format === "s"){
    return `~~${word}~~`;
}
else{
    return `'${word}'`
}
}

// console.log(mdFormat("Bold", "b"));       //  "**Bold**"
// console.log(mdFormat("leaning text", "i"));       //  "_leaning text_"
// console.log(mdFormat("Edabit", "c"));       //  "'Edabit'"
// console.log(mdFormat("That's a strike!", "s"));       //  "~~That's a strike!~~"

// 70 => Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

function stupidAddition(pera1,pera2){
    if(typeof pera1 === "number" && typeof pera2 === "number"){
        return `${pera1}${pera2}`;
    }
    else if(typeof pera1 === "string" && typeof pera2 === "string"){
          return parseInt(pera1) + parseInt(pera2);      
    }
    else{
        return null;
    }
}

// console.log(stupidAddition(1, 2));      //  "12"
// console.log(stupidAddition("1", "2"));      //  3
// console.log(stupidAddition("1", 2));      //  null

