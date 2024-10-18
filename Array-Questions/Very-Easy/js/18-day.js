// 181 => Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.
// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

function totalVolume(...boxes) {
    sum = 0;
    for (let i = 0; i < boxes.length; i++) {
        volume = boxes[i][0] * boxes[i][1] * boxes[i][2]
        sum += volume;
    }
    return sum
}

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));         //  63 
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));         //  10
// console.log(totalVolume([1, 1, 1]));         //  1

// 182 => Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

function indexMultiplier(arr) {
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * [i];
    }
    return sum;
}

// console.log(indexMultiplier([1, 2, 3, 4, 5]));   //  40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// console.log(indexMultiplier([-3, 0, 8, -6]));   //  -2
// (-3*0 + 0*1 + 8*2 + -6*3)

// 183 => Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenCount++;

        }
        else if (arr[i] % 2 !== 0) {
            oddCount++
        }
    }
    return evenCount === oddCount;
}

// console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));   //  true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));   //  false
// Index 2 has an odd number 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));   //  false
// Index 3 has an even number 8.

// 184 => Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(7)) {
            result.push(arr[i]);
        } else {
            result.push(arr[i] + 7);
        }
    }
    return result;
}

// console.log(jazzify(["G", "F", "C"]));    //  ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"]));    //  ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));    //  ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([]));    //  []

// 185 => Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

function ascDesNone(arr, str) {
    if (str === "Asc") {
        return arr.sort((a, b) => a - b);
    }
    else if (str === "Des") {
        return arr.sort((a, b) => b - a);
    }
    else {
        return arr;
    }
}

// console.log(ascDesNone([4, 3, 2, 1], "Asc" ));     //  [1, 2, 3, 4]
// console.log(ascDesNone([7, 8, 11, 66], "Des"));     //  [66, 11, 8, 7]
// console.log(ascDesNone([1, 2, 3, 4], "None"));     //  [1, 2, 3, 4]

// 186 => Currying Functions
// Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiply(arr) {
    return function (num) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(arr[i] * num);
        }
        return result;
    }
}

// console.log(multiply([1, 2, 3])(2));   //  [2, 4, 6]
// console.log(multiply([4, 6, 5])(10));   //  [40, 60, 50]
// console.log(multiply([1, 2, 3])(0));   //  [0, 0, 0]

// 187 => Sum of Number Elements in an Array
// Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

function numbersSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}

// console.log(numbersSum([1, 2, "13", "4", "645"]));         // 3
// console.log(numbersSum([true, false, "123", "75"]));         // 0
// console.log(numbersSum([1, 2, 3, 4, 5, true]));         // 15

// 188 => Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

function getBudgets(arr){
     let sumOfBudget = 0;
     for(let i = 0; i < arr.length; i++){
        sumOfBudget += arr[i].budget;
     }
     return sumOfBudget;
}

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ]));      //  65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ]));      //  62600

// 189 => Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

function matchLastItem(arr){
  let combined = arr.slice(0,-1).join("");
  return combined === arr[arr.length-1];
}

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));    //  true
// The last item is the rest joined.

// console.log(matchLastItem([1, 1, 1, "11"]));    //  false
// The last item should be "111".

// 190 => Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

function CalculateTotalLosses(stolenItems){
    if(Object.keys(stolenItems).length === 0){
        return "Luky you!"
    }

    let total = 0;
    for(let item in stolenItems){
        total += stolenItems[item];
    }
    return total;
}
// console.log(CalculateTotalLosses({tv: 30,skate: 20,stereo: 50,}));      //  100
// console.log(CalculateTotalLosses({painting: 20000,}));                 //  20000
// console.log(CalculateTotalLosses({}));                                //  "Lucky you!"