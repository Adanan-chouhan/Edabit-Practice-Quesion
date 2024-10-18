// 71 =>Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

function sumArray(arr){
    // return arr.reduce((acc,value) => acc + value,0);

    let sum = 0;
     for(let  i = 0; i < arr.length; i++){
        sum += arr[i];
     }
     return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5]));       //  15
// console.log(sumArray([-1, 0, 1]));       //  0
// console.log(sumArray([0, 4, 8, 12]));       //  24


// 72 => Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr,index){
    // let result = arr.indexOf(index);
    // return result;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === index){
            return i;
        }
    }
    return -1;
}

// console.log(search([1, 2, 3, 4], 3));         //  2
// console.log(search([2, 4, 6, 8, 10], 8));         //  3
// console.log(search([1, 3, 5, 7, 9], 11));         //  -1

// 73 => Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0

function word(str){
    switch(str){
        case "one" : return 1;
        break;     
        case "two" : return 2;
        break;
        case "three" : return 3;
        break;   
        case "four" : return 4;
        break;   
        case "five" : return 5;
        break;   
        case "six" : return 6;
        break;   
        case "seven" : return 7;
        break;   
        case "eight" : return 8;
        break;      
        case "nine" : return 9;
        break;   
        case "zero" : return 0;
        break;   
    }
}

// console.log(word("one"));     //  1
// console.log(word("two"));     //  2
// console.log(word("nine"));     //  9

// 74 => Check if an Array Contains a Given Number
// Write a function to check if an array contains a particular number.

function check(arr,num){
for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
        return true;
    }
}
return false;
}

// console.log(check([1, 2, 3, 4, 5], 3));     //  true
// console.log(check([1, 1, 2, 1, 1], 3));     //  false
// console.log(check([5, 5, 5, 6], 5));     //  true
// console.log(check([], 5));     //  false

// 75 => 

