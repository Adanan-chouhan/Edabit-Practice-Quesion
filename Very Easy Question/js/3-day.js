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

// 7. List of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns a list of multiples of num until the list length reaches length.

function list_of_multiples(num, length) {
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(num * (i + 1));
    }
    return res;
}

copnsole.log(list_of_multiples(7, 5));         //[7, 14, 21, 28, 35]
copnsole.log(list_of_multiples(12, 10));         //[12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
copnsole.log(list_of_multiples(17, 6));         //[17, 34, 51, 68, 85, 102]

// Notes
// Notice that num is also included in the returned list.