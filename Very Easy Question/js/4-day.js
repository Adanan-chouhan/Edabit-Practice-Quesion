// Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

function length(str){
// return str.length;
if(str === ""){
    return 0;
}
else{
    return 1 + length(str.slice(1));
}
}

// console.log(length("apple"));   //  5
// console.log(length("make"));   //  4
// console.log(length("a"));   //  1
// console.log(length(""));   //  0

