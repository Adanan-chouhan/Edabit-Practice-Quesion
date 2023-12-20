// 1 ==> addition 
// function addition(num1,num2){
//     return Number(num1) + Number(num2);
// }

// console.log(addition(3, 2)) ;
// console.log(addition(-3, -6)) ;
// console.log(addition(7, 3)) ;
// console.log(addition('7', '3')) ;
// console.log(addition('7', 3))  ;

// 2 ==> convert

// function convert(num1){
//     return Number(num1) * (60);
// }

// console.log(convert(5)) ;//➞ 300
// console.log(convert(3)); //➞ 180
// console.log(convert(2)); //➞ 120
// console.log(convert('2'));  //➞ 120

// 3 ==> addition
// function addition(num){
// return Number(num) + 1
// }
// console.log(addition(0));    //➞ 1
// console.log(addition('9'));  //➞ 10
// console.log(addition('-3'));  //➞ -2

// 4 ==> addChrecter
// function giveMeSomething(str) {
//     return `something ${str}`;
//   }

// console.log(giveMeSomething("is better than nothing")); // "something is better than nothing"
// console.log(giveMeSomething("Bob Jane")); // "something Bob Jane"
// console.log(giveMeSomething("something")); // "something something"

// 5 ==> triArea
//   function triArea(base, height) {
//     return 0.5 * base * height;
//   }

// console.log(triArea(3, 2)); // 3
// console.log(triArea(7, 4)); // 14
// console.log(triArea(10, 10)); // 50

// 6 ==> convert minut to second
//   function howManySeconds(num) {
//     return num * 3600;
//   }

// console.log(howManySeconds(2)); // 7200
// console.log(howManySeconds(10)); // 36000
// console.log(howManySeconds(24)); // 86400

// 7 ==> Array return first value
//   function getFirstValue(arr) {
//     return arr.shift();
//   }

// console.log(getFirstValue([1, 2, 3])); // 1
// console.log(getFirstValue([80, 5, 100])); // 80
// console.log(getFirstValue([-500, 0, 50])); // -500

// 8 ==> decrimant 1 
//   function nextEdge(num1, num2) {
//     return (num1 + num2) - 1;
//   }

// console.log(nextEdge(8, 10)); // 17
// console.log(nextEdge(5, 7)); // 11
// console.log(nextEdge(9, 2)); // 10

// 9 ==> findPerimeter
//   function findPerimeter(lenght,width){
//     return 2 * (lenght + width)
//   }

// console.log(findPerimeter(6, 7)) // 26
//   console.log(findPerimeter(20, 10)) // 60
//   console.log(findPerimeter(2, 9)) // 22

// 10 ==> return remainder
// `Return the Remainder from Two Numbers`
//   `There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.`

// function remainder(num1, num2) {
//     return num1 % num2
// }

// console.log(remainder(1, 3)) // 1
//   console.log(remainder(3, 4)) // 3
//   console.log(remainder(-9, 45)) // -9
//   console.log(remainder(5, 5)) // 0