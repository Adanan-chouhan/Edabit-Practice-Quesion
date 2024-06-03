// == == == Array forEach function == == ==//

//  let book = new Array("math","compuer since","history","since","hindi","english");
// let book = ["math","compuer since","history","since","hindi","english"]
// console.log(book[0]);

// let bookLenght = book.length;
// for(i = 0 ; i < bookLenght ; i++ ){
//     console.log(`Element ${i} is ${book[i]}`);
// }

// book.forEach(myfun);

// function myfun(values){
// console.log(`Subject is ${values}`);
// }

// ==== array questions ==== //


// 11 => Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// Examples

function findIndex(arr,item){
// return arr.indexOf(item);
for(let i = 0; i < arr.length; i++ ){
    if(arr[i] === item){
        return i;
    }
}
}

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));         //  2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));         //  1
// console.log(findIndex(["a", "g", "y", "d"], "d") );         //  3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"));         //  0

// 12 => Array Indexing
// Given an index and an array, return the value of the array with the given index.

function valueAt(arr,item){
  return arr = Math.floor(item) + 1;
}

// Examples
// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) //);         //  6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) //);         //  5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) //);         //  4

// 13 => Find the Index (Part 1)
//Create a function that finds the index of a given item.

function search(arr,index){
    // return arr.indexOf(index); 
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === index){
            return i;
        }
    }
    return -1;
}

// console.log(search([1, 5, 3], 5));    // 1
// console.log(search([9, 8, 3], 3));    // 2
// console.log(search([1, 2, 3], 4));    // 0

// 14 => Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function sumArray(arr){
    // return arr.reduce((sum,current)=> sum + current, 0);
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
    return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5]));         //  15
// console.log(sumArray([-1, 0, 1]));         //  0
// console.log(sumArray([0, 4, 8, 12]));         //  24

// 15 => Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr,index){
// return arr.indexOf(index);
   for(let i = 0; i < arr.length; i++){
     if(arr[i] === index){
        return i;
     }
}
return - 1
}
// console.log(search([1, 2, 3, 4], 3));      //  2
// console.log(search([2, 4, 6, 8, 10], 8));      //  3
// console.log(search([1, 3, 5, 7, 9], 11));      //  -1

// 16 => Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function check(arr,index){ 
   for(let i = 0; i < arr.length; i++){
    if(arr[i] === index){
        return true;
    }
   }  
   return false;
}

// console.log(check([1, 2, 3, 4, 5], 3));           // true
// console.log(check([1, 1, 2, 1, 1], 3));           // false
// console.log(check([5, 5, 5, 6], 5));           // true
// console.log(check([], 5));           // false


// 17 => Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

function arrBetween(num1,num2,arr){
    let result = [];
    for(let i = 0; i < arr.length; i ++){
        if(arr[i] > num1 && arr[i] < num2){
        result.push(arr[i]);
        }
    }
    return result;
}

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7]));             //  [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));             //  [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78]));             //  []

// 18 => 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(ati){
    needs = 0.5 * ati
    wants = 0.3 * ati
    savings = 0.2 * ati

    return {
        "needs": needs,
        "wants": wants,
        "savings": savings
    }
}

// console.log(fiftyThirtyTwenty(10000));      // { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000));      // { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450));      // { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

// 19 => Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

function hasSameBread(sandwiches1,sandwiches2){
 return  sandwiches1[0] == sandwiches2[0]  &&  sandwiches1[2] == sandwiches2[2] ? true : false;
// if(sandwiches1[0] == sandwiches2[0] && sandwiches1[2] == sandwiches2[2]){
//    return true
// }
// return false;
}

// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ));  // true

// console.log(hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// )); // false

// console.log(hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// )); // false

// 20 => Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

function parseArray(arr,item){
//   return arr.map(item => item.toString());
   let result = [];
   for(let i = 0; i < arr.length; i++){
    result.push(arr[i].toString());
   } 
   return result;
}

// console.log(parseArray([1, 2, "a", "b"]));                       // ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456]));               // ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]));      // ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([]));                                     // []