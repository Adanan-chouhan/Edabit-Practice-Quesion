// 71 => Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

function owofied(str) {
    let result = str.replace(/i/g, "wi").replace(/e/g, "we");
    return result + " owo";
}

// console.log(owofied("I'm gonna ride 'til I can't no more")); 
// //  "I'm gonna rwidwe 'twil I can't no morwe owo"

// console.log(owofied("Do you ever feel like a plastic bag")); 
// //  "Do you wevwer fwewel lwikwe a plastwic bag owo"

// console.log(owofied("Cause baby you're a firework")); 
// //  "Causwe baby you'rwe a fwirwework owo"

// 72 => Profit Margin
// Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

function profitMargin(costPrice, salesPrice) {
    let profit = salesPrice - costPrice;
    let margin = (profit / salesPrice) * 100;
    return margin.toFixed(1) + "%";
}

// console.log(profitMargin(50, 50));   //  "0.0%"
// console.log(profitMargin(28, 39));   //  "28.2%"
// console.log(profitMargin(33, 84));   //  "60.7%"

// 73 => Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str) {
    let count = 0
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        count++
    }
    return count;
}

// console.log(countWords("Just an example here move along"));    //  6
// console.log(countWords("This is a test"));    //  4
// console.log(countWords("What an easy task, right"));    //  5

// 74 => CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(arr, pattern) {
    if (pattern === "") {
        return arr.sort((a, b) => a.localeCompare(b));
    }

    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLowerCase().includes(pattern.toLowerCase())) {
            result.push(arr[i]);
        }
    }
    return result.sort((a, b) => a.localeCompare(b));
}

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w"));     //  ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru"));     //  ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], ""));     //  ["Drupal", "Joomla", "Magento", "WordPress"]

// 75 => Filter a String
// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.
// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

function filterString(str) {
    let result = [];
    let upperCount = 0;
    let lowerCount = 0;
    let countNum = 0;
    let countSpecialChar = 0;
    let specialChars = "!@#$%^&*()_+={}[]|\\:;\"'<>,.?/~`-";

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            upperCount++;
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            lowerCount++;
        } else if (!isNaN(str[i]) && str[i] !== ' ') {
            countNum++;
        } else if (specialChars.includes(str[i])) {
            countSpecialChar++;
        }
    }

    result.push(upperCount, lowerCount, countNum, countSpecialChar);
    return result;
}

// console.log(filterString("*$(#Mu12bas43hiR%@*!"));  //  [2, 6, 4, 8]
// // 2 uppercase letters
// // 6 lowercase letters
// // 4 numbers
// // 8 special characters

// console.log(filterString("^^Edabit^^%$#12379"));  //  [1, 5, 5, 7]

// console.log(filterString("**Airforce1**"));  //  [1, 7, 1, 4]

// 76 =>
function birthdayCakeCandles(arr) {
    let maxHeight = Math.max(...arr); 
    let countMaxCandles = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === maxHeight) {
            countMaxCandles++
        }
    }
    return countMaxCandles;
}

// console.log(birthdayCakeCandles([4, 4, 1, 3])); // 2
// // The maximum height candles are four units high.
// // There are two of them, so you return 2.
// console.log(birthdayCakeCandles([3, 2, 1, 3])); // 2
// console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25])); // 4