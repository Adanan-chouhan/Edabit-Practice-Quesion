// 21 => Convert to Decimal Notation
// Create a function to convert an array of percentages to their decimal equivalents.

function convertToDecimal(arr){
   let result = [];
   for(let i = 0; i < arr.length; i++){
let decimalValue = parseFloat(arr[i].replace("%","")) / 100;
result.push(decimalValue);
} 
   return result;
}

// console.log(convertToDecimal(["1%", "2%", "3%"]));    //  [0.01, 0.02, 0.03]
// console.log(convertToDecimal(["45%", "32%", "97%", "33%"]));    //  [0.45, 0.32, 0.97, 0.33]
// console.log(convertToDecimal(["33%", "98.1%", "56.44%", "100%"]));    //  [0.33, 0.981, 0.5644, 1]

// 22 => Check If It's a Title String
// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

function checkTitle(str){
    let words = str.split(" ");
    for(let i = 0; i < words.length; i++){
        if(words[i][0] !== words[i][0].toUpperCase()){
            return false
        }
    }
    return true;
}

// console.log(checkTitle("A Mind Boggling Achievement"));       //  true
// console.log(checkTitle("A Simple Java Script Program!"));       //  true
// console.log(checkTitle("water is transparent"));       //  false

// 23 => Transforming Words into Binary Strings
// Write a function that transforms all letters from [a, m] to 0 and letters from [n, z] to 1 in a string.

function convertBinary(str){
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] >= "a" || str[i] >= "A" && str[i] <= "m" || str[i] <= "M"){
            result += "0"
        }
        else if(str[i] >= "n" || str[i] >= "N" && str[i] <= "z" || str[i] <= "Z"){
            result += "1"
        }
    } 
    return result;
} 

console.log(convertBinary("house"));     //  "01110"
console.log(convertBinary("excLAIM"));     //  "0100000"
console.log(convertBinary("moon"));     //  "0111"