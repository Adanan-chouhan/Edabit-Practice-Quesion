// 61 ==> ES6: Destructuring Objects III
//         const obj =  { two : 2 }
//         var { one, two } = obj
//         console.log(one) // outputs undefined
//     Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).

const obj = { two: 2 };
var { one = 1, two } = obj;
// console.log(two);
// console.log(one);

// 62 ==> Default Mood
//     Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(mood = "neutral") {
    const result = `Today, I am feeling ${mood}`;
    return result;
}
// console.log(moodToday("happy"));     // "Today, I am feeling happy"
// console.log(moodToday("sad"));     // "Today, I am feeling sad"
// console.log(moodToday());     // "Today, I am feeling neutral"

// 63) ==> Similar Bread
//     Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//     The lists will always be three elements long. The first piece of bread on one sandwich must be the same as the first piece of bread on the other sandwich. The same goes for the last piece of bread.

function hasSameBread(sandwiches1, sandwiches2) {
    // const result = sandwiches1[0] === sandwiches2[0] && sandwiches1[2] === sandwiches2[2];
    // const result = sandwiches1[0] === sandwiches2[0] && sandwiches1[2] === sandwiches2[2] ? true : false;
    if (sandwiches1[0] === sandwiches2[0] && sandwiches1[2] === sandwiches2[2]) {
        return true;
    } else {
        return false;
    }

    // return result;
}

// console.log(hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ));  // true

// console.log(hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// )); // false

// console.log(hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
// ));  // false

// 64 ==> Shapes With N Sides
//     Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.
//         Inputs   Outputs
//         1        "circle"
//         2        "semi-circle"
//         3        "triangle"
//         4        "square"
//         5        "pentagon"
//         6        "hexagon"
//         7        "heptagon"
//         8        "octagon"
//         9        "nonagon"
//         10       "decagon"

//     There won't be any tests with a number below 1 or greater than 10.
//     Return the output in lowercase.
//     The challenge is intended to be completed without conditionals (it would take too long)!

function nSidedShape(number) {
    const result = ["circle", "semi-circle", "triangle", "square", "pentagon",
        "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    return result[number - 1];

    // switch (number) {
    //     case 1: return "circle";
    //         break;
    //     case 2: return "semi-circle";
    //         break;
    //     case 3: return "triangle";
    //         break;
    //     case 4: return "square";
    //         break;
    //     case 5: return "pentagon";
    //         break;
    //     case 6: return "hexagon";
    //         break;
    //     case 7: return "heptagon";
    //         break;
    //     case 8: return "octagon";
    //         break;
    //     case 9: return "nonagon";
    //         break;
    //     case 10: return "decagon";
    //         break;
    //     default:
    //         return console.log("This is not a Number");
    // }
}
// console.log(nSidedShape(3));   // "triangle"
// console.log(nSidedShape(1));   // "circle"
// console.log(nSidedShape(9));   // "nonagon"

// 65 ==> Multiply Every Array Item by Two
//     Create a function that takes an array with numbers and return an array with the elements multiplied by two.
function getMultipliedArr(arr) {
    const result = arr.map(element => element * 2);
    return result;
    // let res = [];
    // for (let i = 0; i < arr.length; i++) {
        // res.push(arr[i] * 2);
    // }
    // return res
}
// console.log(getMultipliedArr([2, 5, 3]));     //[4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5]));   //[2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0]));   //[10, 764, 0]

// 66 ==> Burrrrrrrp
//     Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

function longBurp(numOfRs) {
    // const burp = "Bu" + "r".repeat(numOfRs) + "p";

    let burp = "Bu";
    for (let i = 0; i < numOfRs; i++) {
        burp += 'r';
    }
    burp += "p";
    return burp;
}
// console.log(longBurp(3));   // "Burrrp"
// console.log(longBurp(5));   // "Burrrrrp"
// console.log(longBurp(9));   // "Burrrrrrrrrp"

// 67 ==> ES6: Destructuring Objects
//     Using basic object destructuring you can assign variables name and email:
//         let { name, email } = { name: "John", email: "john@example.com" }
//         console.log(name)  // "John"
//         console.log(email)  // "john@example.com"
//     What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:
//         let { name, email, rest} = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA"}
//         rest ===  { city: "Phoenix", state: "AZ", country: "USA"} // true

let { name, email, ...rest } = { name: "John", email: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" };
// console.log(name); // Output: "John"
// console.log(email); // Output: "john@example.com"
// Creating an object called 'rest' containing the remaining properties
let restObject = rest;
// console.log(restObject); // Output: { city: "Phoenix", state: "AZ", country: "USA" }
// console.log(rest === restObject); // Output: true

// 68 ==> Char-to-ASCII
//     Create a function that returns the ASCII value of the passed in character.
function ctoa(character) {
    const result = character.charCodeAt();
    return result;
}
// console.log(ctoa("A")); 
// console.log(ctoa("m")); 
// console.log(ctoa("["));  
// console.log(ctoa("/"));

// 69 ==> Free Coffee Cups
//     For each of the 6 coffee cups I buy, I get a 7th cup free. In total, I get 7 cups. Create a function that takes n cups bought and return as an integer the total number of cups I would get.

function totalCups(n) {
    const additionalCups = Math.floor(n / 6);
    return n + additionalCups;
}
// console.log(totalCups(6));      //7
// console.log(totalCups(12));     //14
// console.log(totalCups(213));    //248

// 70 ==> Array of Word Lengths
//     Create a function that takes an array of words and transforms it into an array of each word's length.
function wordLengths(arr) {
    // let res = []
    // for (let i = 0; i < arr.length; i++) {
    //     res.push(arr[i].length);
    // }
    // return res;
    return arr.map(element => element.length);
}
// console.log(wordLengths(["hello", "world"]));   //[5, 5]
// console.log(wordLengths(["Halloween", "Thanksgiving","Christmas"]));  //[9, 12, 9]
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));  // [3, 5, 9, 4, 2, 3, 8]