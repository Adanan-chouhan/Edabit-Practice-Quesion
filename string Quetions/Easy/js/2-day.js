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
    let firstVowel = 0
    let vowels = "aeiouAEIOU";
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i]).firstINdexOf()){
          firstVowel++
        }
    }
    return firstVowel;
}

console.log(firstVowel("apple"));      //  0
console.log(firstVowel("hello"));      //  1
console.log(firstVowel("STRAWBERRY"));      //  3
console.log(firstVowel("pInEaPPLe"));      //  1