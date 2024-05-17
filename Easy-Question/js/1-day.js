// 1 => Bitwise Operations
// A decimal number can be represented as a sequence of bits. To illustrate:

// 6 = 00000110
// 23 = 00010111
// From the bitwise representation of numbers, we can calculate the bitwise AND, bitwise OR and bitwise XOR. Using the example above:

// bitwiseAND(6, 23));     //  00000110
// bitwiseOR(6, 23));     //  00010111
// bitwiseXOR(6, 23));     //  00010001

// Write three functions to calculate the bitwise AND, bitwise OR and bitwise XOR of two numbers.

function bitwiseAND(num1,num2){
    return num1 & num2;
}

function bitwiseOR(num1,num2){
return num1 | num2;
}

function bitwiseXOR(num1,num2){
    return num1  ^ num2
}
// console.log(bitwiseAND(7, 12));     //  4
// console.log(bitwiseOR(7, 12));     //  15
// console.log(bitwiseXOR(7, 12));     //  11

// 2 => Add up the Numbers from a Single Number
// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num){
let sum = 0;
  for(let i = 0; i <= num;  i++){
    sum += i;
  }
  return sum
}
// console.log(addUp(4));    //  10
// console.log(addUp(13));    //  91
// console.log(addUp(600));    //  180300