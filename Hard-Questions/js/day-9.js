//   81 ==> Check if Number is within a Given Range
//  Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).
//  Numbers can be positive or negative, and they may not be integers.
//  You can assume min <= max is always true.

function isInRange(number, range) {
    return number >= range.min && number <= range.max;
}
// console.log(isInRange(4, { min: 0, max: 5 }));      // true
// console.log(isInRange(4, { min: 4, max: 5 }));      // true
// console.log(isInRange(4, { min: 6, max: 10 }));     //false
// console.log(isInRange(5, { min: 5, max: 5 }));      // true

// 82 ==> Coding Website Score Calculator
//  Imagine you run a website that presents users with different coding challenges in levels Easy, Medium, and Hard, where users get points for completing challenges. An Easy challenge is worth 5 points, a Medium challenge is worth 10 points, and a Hard challenge is worth 20 points. Create a function that takes in the number of each challenge level a user has played and calculates the user's total number of points. Keep in mind that a user cannot complete negative challenges, so the function should return the string "invalid" if any of the passed parameters are negative.

function scoreCalculator(easy, medium, hard) {
    if (easy < 0 || medium < 0 || hard < 0) {
        return "invalid";
    }

    // calculate total points
    const totalPoints = easy * 5 + medium * 10 + hard * 20;
    return totalPoints;
}
//    console.log(scoreCalculator(1, 2, 3));    //85
//    console.log(scoreCalculator(1, 0, 10));    // 205
//    console.log(scoreCalculator(5, 2, -6));    // "invalid"

// 83 ==>   Sum of the Odd Numbers
//  Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.
// example ==> 1 + 3 + 5 = 9

function addOddToN(num) {
    let sum = 0;
    for (let i = 1; i <= num; i += 2) {
        sum += i;
    }
    return sum;
}
// console.log(addOddToN(5));     //9
// console.log(addOddToN(13));     // 49
// console.log(addOddToN(47));     // 576

// 84 ==>   Halloween Day
//  Create a function that takes date in the format yyyy/mm/dd as an input and returns "Bonfire toffee" if the date is October 31, else return "toffee".
function halloween(date) {
    const [year, month, day] = date.split("/");

    if (month === "10" && day === "31") {
        return "Bonfire toffee"
    } else {
        return "toffee"
    }
}
//    console.log(halloween("2013/10/31"));    // "Bonfire toffee"
//    console.log(halloween("2012/07/31"));    // "toffee"
//    console.log(halloween("2011/10/12"));    // "toffee"

// 85 ==>   Simple OOP Calculator
//  Create functions for the Calculator class that can do the following:
//      Add two numbers.
//      Subtract two numbers.
//      Multiply two numbers.
//      Divide two numbers.
//      var calculator = new Calculator()
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
// usage;
// const calculator = new Calculator();
// console.log(calculator.add(10, 5));        // 15
// console.log(calculator.subtract(10, 5));   // 5
// console.log(calculator.multiply(10, 5));   // 50
// console.log(calculator.divide(10, 5));     //  2

// 86 ==>   Limit a Number's Value
//  Create a function that takes three number arguments — one number as an input and two additional numbers representing the endpoints of a closed range — and return the number limited to this range.
//      If the number falls within the range, the number should be returned.
//      If the number is less than the lower limit of the range, the lower limit should be returned.
//      If the number is greater than the upper limit of the range, the upper limit should be returned.

function limitNumber(number, min, max) {
    if (number < min) {
        return min;
    } else if (number > max) {
        return max;
    } else {
        return number;
    }
}
//  console.log(limitNumber(5, 1, 10));    // 5
//  console.log(limitNumber(-3, 1, 10));    // 1
//  console.log(limitNumber(14, 1, 10));    // 10
//  console.log(limitNumber(4.6, 1, 10));    // 4.6

// 87 ==>   Skip the Drinks with Too Much Sugar
//  The function skipTooMuchSugarDrinks() takes in an array of drinks. Make sure the function only returns an array of drinks with no sugar in it or a little bit of sugar.
//  Drinks that contain too much sugar (in this challenge) are:
//      Cola
//      Fanta

function skipTooMuchSugarDrinks(drinks) {
    let res = [];
    for (let i = 0; i < drinks.length; i++) {
        if (drinks[i] === "fanta" && drinks[i] === "cola") {
            delete (drinks[i])
        }
    }
    return res;
}

// Test cases
// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]));      // Output: ["water"]
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]));               // Output: []
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]));   // Output: ["lemonade", "beer", "water"]

// 88 ==>   Add a Consecutive List of Numbers
//  Write a function that takes the last number of a consecutive list of numbers and returns the total of all numbers up to and including it.
//      // 1 + 2 + 3 = 6
//      // 1 + 2 + 3 + ... + 10 = 55
//      // 1 + 2 + 3 + ... + 7 = 28
function addUpTo(n) {
    return (n * (n + 1) / 2);
}
//   console.log(addUpTo(3));   // 6
//   console.log(addUpTo(10));  // 55
//   console.log(addUpTo(7));   // 28

// 89 ==>   Check if String Ending Matches Second String
//  Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.
function checkEnding(str1, str2) {
    const result = str1.endsWith(str2);
    return result;
}

//  console.log(checkEnding("abc", "bc"));           // true
//  console.log(checkEnding("abc", "d"));           // false
//  console.log(checkEnding("samurai", "zi"));      // false
//  console.log(checkEnding("feminine", "nine"));    // true
//  console.log(checkEnding("convention", "tio"));   // false

// 90 ==> Find the Bug: Checking Even Numbers
//  Create a function that takes in an array and returns true if all its values are even, and false otherwise.
//  Not a big deal, your friend says. He writes the following code:
//      function checkAllEven(arr) {
//          return arr.every(x % 2 === 0)
//      }
//  The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

function checkAllEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }
}
//  console.log(checkAllEven([1, 2, 3, 4]));      // false
//  console.log(checkAllEven([2, 4, 6]));         // true
//  console.log(checkAllEven([5, 6, 8, 10]));     // false
//  console.log(checkAllEven([-2, 2, -2, 2]));    // true