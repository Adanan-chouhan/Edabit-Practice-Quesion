// 41 => Return Negative
// Create a function that takes a number as an argument and returns negative of that number. Return negative numbers without any change.

function returnNegative(num) {
    // return num > 0 ? -num : num;
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}
// console.log(returnNegative(4));   // -4
// console.log(returnNegative(15));   // -15
// console.log(returnNegative(-4));   // -4
// console.log(returnNegative(0));   // 0

// 42 => Reverse an Array
// Write a function to reverse an array.

function reverse(arr) {
    // return arr.reverse();
    const result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}
// console.log(reverse([1, 2, 3, 4]));    //  [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4]));    //  [4, 3, 2, 9, 9]
// console.log(reverse([]));    //  []

// 43 => Movie Theatre Admittance
// Write a function that checks whether a person can watch an MA15+ rated movie. One of the following two conditions is required for admittance:

// The person is at least 15 years old.
// They have parental supervision.
// The function accepts two parameters, age and isSupervised. Return a boolean.

function acceptIntoMovie(age, isSupervised) {
    if (age >= 15 || isSupervised) {
        return true;
    }
    return false;
}
// console.log(acceptIntoMovie(14, true));     // true
// console.log(acceptIntoMovie(14, false));     // false
// console.log(acceptIntoMovie(16, false));     // true

// 44 => Radians to Degrees
// Create a function that takes an angle in radians and returns the corresponding angle in degrees.

function radiansToDegrees(radians) {
    const degrees = radians * (180 / Math.PI);   // PI = 3.14
    return degrees;
}
// console.log(radiansToDegrees(1));    //  57.29577951308232
// console.log(radiansToDegrees(20));    //  1145.9155902616465
// console.log(radiansToDegrees(50));    //  2864.7889756541163

// 45 => Fix the Bug: Simple Array Manipulation
// Help fix all the bugs in the function incrementItems! It is intended to add 1 to every element in the array!

function incrementItems(arr) {
    //   return arr.map((e)=>{
    //     return e + 1 
    //    });

    let incrementArr = []
    for (let i = 0; i < arr.length; i++) {
        incrementArr.push(arr[i] + 1);
    }
    return incrementArr;

}

// console.log(incrementItems([0, 1, 2, 3]));    //  [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8]));    //  [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4]));    //  [0, -1, -2, -3]

// 46 => Drinks Allowed?
// A bartender is writing a simple program to determine whether he should serve drinks to someone. He only serves drinks to people 18 and older and when he's not on break.
// Given the person's age, and whether break time is in session, create a function which returns whether he should serve drinks.

function shouldServeDrinks(age, onbreak) {
    if (age >= 18 && !onbreak) {
        return true;
    }
    return false
}
// console.log(shouldServeDrinks(17, true));   //  false
// console.log(shouldServeDrinks(19, false));   //  true
// console.log(shouldServeDrinks(30, true));   //  false

// 47 => Century Crisis
// Scientists have discovered that in four decades, the world will EXPLODE! It will also take three decades to make a spaceship to travel to a new planet that can hold the entire world population.

// You must calculate the number of people there will be in three decades from now.

// The variable population is the world population now.
// Assume that every month, someone gives birth to more people n.
// Return the number of people there will be when the spaceship is complete.

function futurePeople(population, monthlyBirths) {
    const months = 3 * 10 * 12;  // Number of months in three decades
    const futurePopulation = population + (monthlyBirths * months);
    return futurePopulation;
}

// console.log(futurePeople(256, 2));    //  976
// console.log(futurePeople(3248, 6));    //  5408

// 48 => Minimal IV: if-else if-else Inferno
// Check the principles of minimalist code in the intro to the first challenge.
// In the Code tab you will find a code that is missing a single character in order to pass the tests. However, your goal is to submit a function as minimalist as possible. Use the tips in the tips section below.
// Write a function that returns the boolean true if the given number is zero, the string "positive" if the number is greater than zero or the string "negative" if it's smaller than zero.

function CompareTo0(num) {
    if (num === 0) {
        return true;
    }
    else if (num > 0) {
        return "postitive";
    }
    else {
        return "nagative";
    }
}

// console.log(CompareTo0(10));   // "piostive"
// console.log(CompareTo0(0));    // true
// console.log(CompareTo0(-1));   // "nagative"
// console.log(CompareTo0(110));   // "postive"

// 49 => Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str) {
    // return str.length % 2 === 0 ? true : false;
    if(str.length % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// console.log(oddOrEven("apples"));  // true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

// console.log(oddOrEven("pears"));  // false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

// console.log(oddOrEven("cherry"));   // true

// 50 => ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]
 
let [a,b] = arr;
// console.log(a) // outputs 1
// console.log(b) // outputs 2

