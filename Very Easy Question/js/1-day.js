// 1 => Return the Remainder from Two Numbers
// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

function remainder(a,b){
    return a % b;
}

// console.log(remainder(1, 3));     // 1
// console.log(remainder(3, 4));     // 3
// console.log(remainder(-9, 45));     // -9
// console.log(remainder(5, 5));     // 0

// 2 => Find the Perimeter of a Rectangle
// Create a function that takes length and width and finds the perimeter of a rectangle.

function findPerimeter(length,width){
    let rectangle = (length  + width) + (length + width);
    return rectangle;
}
// console.log(findPerimeter(6, 7));        // 26
// console.log(findPerimeter(20, 10));      // 60
// console.log(findPerimeter(2, 9));        // 22

// 3 => Correct the Mistakes
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function squared(num){
    return num * num;
 }
// console.log(squared(5));      // 25
// console.log(squared(9));      // 81
// console.log(squared(100));    // 10000

// 4 => Is the Number Less than or Equal to Zero?
// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num){
   let checkValue = num <= 0 ? true : false;
   return checkValue;
}

// console.log(lessThanOrEqualToZero(5));      // false
// console.log(lessThanOrEqualToZero(0));      // true
// console.log(lessThanOrEqualToZero(-2));      // true 

// 5 => Sum of Polygon Angles
// Given an n-sided regular polygon n, return the total sum of internal angles (in degrees)

function sumPolygon(n){
    return (n-2) * 180;
}

// console.log(sumPolygon(3));   // 180
// console.log(sumPolygon(4));   // 360
// console.log(sumPolygon(6));   // 720

// 6 => Basketball Points
// You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

function points(num1,num2){
   return (num1 + num2) * (2) + (num2)
}
// console.log(points(1, 1));   // 5
// console.log(points(7, 5));   // 29
// console.log(points(38, 8));    // 100

// 7 => Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(str){
    let concatStr = str + "Edabit";
    // let concatStr = str.concat("Edabit");
    // let concatStr = `${str  + "Edabit"}` 
    return concatStr; 
}
// console.log(nameString("Mubashir"));         // "MubashirEdabit"
// console.log(nameString("Matt"));         // "MattEdabit"
// console.log(nameString("javaScript"));         // "javaScriptEdabit"

// 8 => Less Than 100?
// Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2){
    if(num1 + num2 < 100){
        return true;
    }
    return false;
}

// console.log(lessThan100(22, 15)); //true
// 22 + 15 = 37
// console.log(lessThan100(83, 34)); // false
// 83 + 34 = 117
// console.log(lessThan100(3, 77));  // true

// 9 => Buggy Code (Part 5)
// Mubashir created an infinite loop! Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

function printArray(num){
    let arr = []
    for(let i = 0; i <= num; i++){
     arr.push(i);
    }
    return arr;
}

// console.log(printArray(1));   // [1]
// console.log(printArray(3));   // [1, 2, 3]
// console.log(printArray(6));   // [1, 2, 3, 4, 5, 6]

// 10 => Buggy Code (Part 7)
// Mubashir wants to swap two given numbers!
// It is not returning the right values. Can you help him fix it?

// a = 100
// b = 200
// a, b = swap(a, b)
// print(a, b) // Should print out "200, 100", but the function prints out "100, 100"

function swap(a,b){
    let tem = a;
    a = b;
    b = tem;
    return [a,b];
}
console.log(swap(100, 200));    // [200, 100]
console.log(swap(44, 33));    // [33, 44]
console.log(swap(21, 12));    // [12, 21]