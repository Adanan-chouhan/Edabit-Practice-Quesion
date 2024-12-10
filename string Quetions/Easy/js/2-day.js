// 11 => Remove Every Vowel from a String
// Create a function that takes a string and returns a new string with all vowels removed.

function removeVowels(str){
    let result = "";
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(!vowels.includes(str[i])){
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

function firstVowel(str){
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
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

function isTrue(str){
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

function checkEven(str){
   let regex = /^[0-9]*[0,2,4,6,8]$/
   return regex.test(str);
}

checkEven("2341");   //  false
checkEven("132");   //  true
checkEven("29");   //  false
checkEven("5578");   //  true

