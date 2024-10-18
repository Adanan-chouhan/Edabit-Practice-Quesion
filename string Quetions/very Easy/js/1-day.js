// 1 =>  How Edabit Works
// This is an introduction to how challenges on Edabit work. In the Code tab above you'll see a starter function that looks like this:

function hello() {
    return "hello edabit.com"
}

// console.log(hello());

// All you have to do is type return "hello edabit.com" between the curly braces { } and then click the Check button. If you did this correctly, the button will turn red and say SUBMIT FINAL. Click it and see what happens.

// 2 => Return Something to Me!
// Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(str) {
    return `something ${str}`;
}

// console.log(giveMeSomething("is better than nothing"));       //  "something is better than nothing"
// console.log(giveMeSomething("Bob Jane"));       //  "something Bob Jane"
// console.log(giveMeSomething("something"));       //  "something something"

// 3 => Basic Variable Assignment
// A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.

function nameString(str) {
    return `${str}Edabit`

    // for(let i = 0; i < str.length; i++){
    //     return str + "Edabit";
    // }
}

// console.log(nameString("Mubashir"));          //  "MubashirEdabit"
// console.log(nameString("Matt"));          //  "MattEdabit"
// console.log(nameString("javaScript"));          //  "javaScriptEdabit"

// 4 => Boolean to String Conversion
// Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag) {
    //    let convert = String(flag);
    let convert = flag.toString();
    return convert;
}

// console.log(boolToString(true));      //  "true"
// console.log(boolToString(false));      //  "false"

// 5 => Miserable Parody of a Calculator
// Create a function that will handle simple math expressions. The input is an expression in the form of a string.

function calculator(str) {
    let result = eval(str);
    return result;
}

// console.log(calculator("23+4"));     //  27
// console.log(calculator("45-15"));     //  30
// console.log(calculator("13+2-5*2"));     //  5
// console.log(calculator("49/7*2-3"));     //  11

// 6 => Buggy Code (Part 4)
// Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.

// Can you help her?

function greeting(str) {
    if (str === "Mubashir") {
        return "Hello, my Love!"
    }
    return `Hello, ${str}!`;

    // return str === "Mubashir" ? "Hello, my Love" : `Hello, ${str}!`;
}

// console.log(greeting("Matt"));      //  "Hello, Matt!"
// console.log(greeting("Helen"));      //  "Hello, Helen!"
// console.log(greeting("Mubashir"));      //  "Hello, my Love!"

// 7 => Compare Strings by Count of Characters
// Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1,str2){
// return str1.length === str2.length;

    if(str1.length === str2.length){
        return true;
    }
    return false;

    // return str1.length === str2.length ? true : false;
}

// console.log(comp("AB", "CD"));       //  true
// console.log(comp("ABC", "DE"));       //  false
// console.log(comp("hello", "edabit"));       //  false

// 8 => Is the String Empty?
// Create a function that returns true if a string is empty and false otherwise.

function isEmpty(str){
//   return str.length === 0;
// return str.length === 0 ? true : false;

if(str.length === 0){
    return true;
}
return false;

}

// console.log(isEmpty(""));    //  true
// console.log(isEmpty(" "));    //  false
// console.log(isEmpty("a"));    //  false 

// 9 => Recursion: Length of a String
// Write a function that returns the length of a string. Make your function recursive.

function length(str){
    // let countChar =  str.length;
    // return countChar;

    let count = 0;
    for(let i = 0;  i < str.length; i++){
     count++
    }

    return count;
}

// console.log(length("apple"));        //  5
// console.log(length("make"));        //  4
// console.log(length("a"));        //  1
// console.log(length(""));        //  0

// 10 => Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

function stringInt(str){
    // let convertNum = Number(str);
    // let convertNum = parseInt(str)
    let convertNum = +str;
    return convertNum; 
}

// console.log(stringInt("6"));     //  6
// console.log(stringInt("1000"));     //  1000
// console.log(stringInt("12"));     //  12


