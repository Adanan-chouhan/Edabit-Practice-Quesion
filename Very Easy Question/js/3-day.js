// 21 ==> Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

function greeting(str) {
    return `Hello, ${str}!`
}
// console.log(greeting("Matt"));      //  "Hello, Matt!"
// console.log(greeting("Helen"));      //  "Hello, Helen!"
// console.log(greeting("my Love"));      //  "Hello, my Love!"

// 22 ==> Two Makes Ten
// Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

function makesTen(a, b) {
    if (a + b == 10) {
        return true;
    }
    else if (a == 10 || b == 10) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(makesTen(9, 10));     //  true
// console.log(makesTen(9, 9));     //  false
// console.log(makesTen(1, 9));     //  true


// 23 ==> Let's Fuel Up!
// A vehicle needs 10 times the amount of fuel than the distance it travels. However, it must always carry a minimum of 100 fuel before setting off.
// Create a function which calculates the amount of fuel it needs, given the distance.

function calculateFuel(num) {
    if (num > 10) {
        return num * 10
    } else {
        return num = 100
    }
}
// console.log(calculateFuel(15));        // 150
// console.log(calculateFuel(23.5));      // 235
// console.log(calculateFuel(3));         // 100

// 24 ==> Buggy Code (Part 2)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
function maxNum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}
// console.log(maxNum(3, 7));          // 7
// console.log(maxNum(-1, 0));          // 0
// console.log(maxNum(1000, 400));          // 1000

// 25 => List of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns a list of multiples of num until the list length reaches length.

function list_of_multiples(num, length) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(num * (i + 1));
    }
    return res;
}

// console.log(list_of_multiples(7, 5));         //[7, 14, 21, 28, 35]
// console.log(list_of_multiples(12, 10));         //[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(list_of_multiples(17, 6));         //[17, 34, 51, 68, 85, 102]

// 26 => Pair Management
// Given two arguments, return an array which contains these two arguments.

function makePair(num1,num2){
    // return [num1,num2];

    let result = [];
    for(let i = 0; i < arguments.length; i++){
        result.push(arguments[i]);
    }
    return result;

    // let result = [];
    // let firstArrgu = num1;
    // let secArrgu =  num2;
    // result.push(firstArrgu,secArrgu);
    // return result;
}


// console.log(makePair(1, 2));        //  [1, 2]
// console.log(makePair(51, 21));        //  [51, 21]
// console.log(makePair(512124, 215));        //  [512124, 215]

// 27 => Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1,str2){
    // if(str1.length === str2.length){
    //   return true;
    // }
    // return false;

    return str1.length === str2.length ? true : false;
}

// console.log(comp("AB", "CD"));       //  true
// console.log(comp("ABC", "DE"));       //  false
// console.log(comp("hello", "edabit"));       //  false

// 28 => Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(str){
     if(str.length === 0){
      return true;
    }
    return false;

    // return str.length === 0 ? true : false;
}

// console.log(isEmpty(""))   //  true
// console.log(isEmpty(" "))   //  false
// console.log(isEmpty("a"))   //  false

// 29 => Check if an Integer is Divisible By Five
// Create a function that returns true if an integer is evenly divisible by 5, and false otherwise.

function divisibleByFive(num){
    // if(num %  5 === 0){
    //     return true;
    // }
    // return false;

 return num % 5 === 0 ? true : false;
}

// console.log(divisibleByFive(5));   //  true
// console.log(divisibleByFive(-55));   //  true
// console.log(divisibleByFive(37));   //  false

// 30 => Multiple of 100
// Create a function that takes an integer and returns true if it's divisible by 100, otherwise return false.

function divisible(num){
    // if(num % 100 === 0){
    //     return true;
    // }
    // return false;

    return num % 100 === 0 ? true : false;
}

// console.log(divisible(1));   // false
// console.log(divisible(1000));   // true
// console.log(divisible(100));   // true