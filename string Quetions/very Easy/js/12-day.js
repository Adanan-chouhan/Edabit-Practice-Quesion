// 111 => Check if a String Contains only Identical Characters
// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i + 1]) {
            return false;
        }
    }
    return true;
}

// console.log(isIdentical("aaaaaa"));    //  true
// console.log(isIdentical("aabaaa"));    //  false
// console.log(isIdentical("ccccca"));    //  false
// console.log(isIdentical("kk"));    //  true

// 112 => Letters Only
// Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        // if (str[i] >= "a"  && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z") {
        if (str[i] !== str[i].toUpperCase() || str[i] !== str[i].toLowerCase()) {
            result += str[i];
        }
    }
    return result;
}

// console.log(lettersOnly("R!=:~0o0./c&}9k`60=y"));    //  "Rocky"
// console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4"));    //  "Bambi"
// console.log(lettersOnly("^U)6$22>8p)."));    //  "Up"

// 113 => Recursion: Reverse a String
// Write a function that reverses a string. Make your function recursive.

// function reverse(str){
//     let result = "";
//     for(let i = str.length-1; i >= 0; i--){
//         result += str[i];
//     }
//     return result;
// }

function reverse(str) {
    if (str.length <= 0) {
        return str;
    }
    return str[str.length - 1] + reverse(str.slice(0, str.length - 1))
}

// console.log(reverse("hello"));       //  "olleh"
// console.log(reverse("world"));       //  "dlrow"
// console.log(reverse("a"));       //  "a"
// console.log(reverse(""));       //  ""

// 114 => Fullname and Email
// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.

class Employee {
    constructor(firstname, lastName) {
        this.firstname = firstname;
        this.lastName = lastName;
        this.fullname = `${firstname} ${this.lastName}`;
        this.email = `${this.firstname}.${this.lastName}@comapany.com`;
    }
}

let emp1 = new Employee("John", "Smith")
// console.log(emp1.fullname)  // "John Smith"

let emp2 = new Employee("Mary", "Sue")
// console.log(emp2.email) // "mary.sue@company.com"

let emp3 = new Employee("Antony", "Walker")
// console.log(emp3.firstname)   //  "Antony" 

// 115 => Total Number of Unique Characters
// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(str1,str2){
    let combined = str1 + str2;
    let uniqueChars = [];
    for(let i = 0; i < combined.length; i++){
       if(!uniqueChars.includes(combined[i])){
        uniqueChars.push(combined[i]);
       }
    }
    return uniqueChars.length;
}

// function countUnique(str1,str2){
//     let  combined = str1 + str2;
//     let uniqueChars = new Set(combined);
//     return uniqueChars.size;
// }

// console.log(countUnique("apple", "play"));   //  5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"

// console.log(countUnique("sore", "zebra"));   //  7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"

// console.log(countUnique("a", "soup"));   //  5

// 116 => Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// function greetPeople(arr){
// let greetings = arr.map(name => `Hello ${name}`);
// return greetings.join(", ");
// }

// function greetPeople(arr){
//     let greetings = [];
//     for(let name of arr){
//       greetings.push(`Hello ${name}`);        
//     }
//     return greetings.join(", ");
// }


function greetPeople(arr){
    return arr.reduce((result,name) => {
        return result ? `${result} Hello ${name}` : `Hello ${name}`
    },"")
}

// console.log(greetPeople(["Joe"]));    //  "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"]));    //  "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"]));    //  "Hello Frank, Hello Angela, Hello Joe"

// 117 => Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string);   //  [first, last]

function firstAndLast(str){
let words = str.split("");    
let result = [];
let sort  = [];
let reverse = [];
for(let i = 0; i < words.length; i++){
  sort.push(words[i].sort().join(""));

for(let j = words.length-1; j>= 0; j--){
    reverse.push(words[i]);
}
}
result.push(sort,reverse)

return result;
}

console.log(firstAndLast("marmite"));   //  ["aeimmrt", "trmmiea"]
console.log(firstAndLast("bench"));   //  ["bcehn", "nhecb"]
console.log(firstAndLast("scoop"));   //  ["coops", "spooc"]