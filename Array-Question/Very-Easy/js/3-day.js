// 21 => Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.
function arrayValuesTypes(arr) {
    // let result = [];
    // for(let i = 0; i < arr.length; i++){
    //     result.push(typeof arr[i]);
    // }
    // return result;

    return arr.map(item => typeof (item));
}

// console.log(arrayValuesTypes([1, 2, "null", []]));  // ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]));  // ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]));  // ["number", "string", "string", "object", "object", "boolean", "number"]

// 22 => Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

function toNumberArray(arr) {
    // let result = []
    // for(let i = 0; i < arr.length; i++){
    //   result.push(Number(arr[i]));
    // }
    // return result;

    return arr.map(item => Number(item));
}
// console.log(toNumberArray(["9.4", "4.2"]));     //  [9.4, 4.2]
// console.log(toNumberArray(["91", "44"]));     //  [91, 44]
// console.log(toNumberArray(["9.5", "8.8"]));     //  [9.5, 8.8]


// 23 => ES6: Destructuring Arrays IV
// There is an easy way to assign to array values to the nth index by using rest parameter syntax.

var [head, tail] = [1, 2, 3, 4]
// console.log(head) // outputs  1
// console.log(tail) // outputs 2
//  But how could I make tail = [2, 3, 4] instead of tail = 2?

var [head, ...tail] = [1, 2, 3, 4];
// console.log(tail); // outputs [2,3,4] 

// 24 => Burglary Series (14): Adjectives Total
// You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

function totalAmountAdjectives(obj) {
    let count = 0;
    let keyValue = Object.keys(obj);
    for (let i = 0; i < keyValue.length; i++) {
        count++;
    }
    return count
}

// console.log(totalAmountAdjectives({ a: "moron" }));          //  1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }));          //  3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }));          //  4

// 25 => ES6: Destructuring Arrays III
// You can assign variables from arrays with destructuring like this:

const arr = ["eyes", "nose", "lips", "ears"]
let [eyes, nose, lips, ears] = arr;

// console.log(arr);

// 26 => Recreating the String.length Property
//Create a function which returns the length of a string, WITHOUT using String.length property.

function length(str) {
    // return str.length;
    let count = 0
    for (let i = 0; i < str.length; i++) {
        count = str.length;

    }
    return count;
}
// console.log(length("Hello World"));                // 11
// console.log(length("Edabit"));                // 6
// console.log(length("wash your hands!"));                // 16

// 27 => Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(num) {
    return [num / 2, num / 4, num / 8];
}
// console.log(halfQuarterEighth(6));     // [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22));     // [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25));     // [12.5, 6.25, 3.125]

// 28 =>Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"

function nSidedShape(num) {
    switch (num) {
        case 1:
            return "circle";
        case 2:
            return "semi-circle";
        case 3:
            return "triangle";
        case 4:
            return "square";
        case 5:
            return "pentagon";
        case 6:
            return "hexagon";
        case 7:
            return "heptagon";
        case 8:
            return "octagon";
        case 9:
            return "nonagon";
        case 10:
            return "decagon";
        default:
            return "shape not supported";
    }
}

// console.log(nSidedShape(3));    // "triangle"
// console.log(nSidedShape(1));    // "circle"
// console.log(nSidedShape(9));    // "nonagon"
// console.log(nSidedShape(6));    // "hexagon" 

// 29 => Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr) {
    //    return  arr.map(item => item * 2);
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2)
    }
    return result;
}
// console.log(getMultipliedArr([2, 5, 3]));       //  [4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5]));       //  [2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0]));       //  [10, 764, 0]

// 30 => Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(arr) {
    const lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}

console.log(wordLengths(["hello", "world"]));          //  [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]));          //  [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]));          //  [3, 5, 9, 4, 2, 3, 8]