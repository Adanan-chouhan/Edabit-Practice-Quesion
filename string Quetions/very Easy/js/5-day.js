// 41 => Burrrrrrrp
// Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

function longBurp(num) {
    // let result = "Bu" + "r".repeat(num) + "p";
    // return result;

    let result = "Bu";
    for (let i = 0; i < num; i++) {
        result += "r";
    }
    result += "p";
    return result;

    // let rArray = new Array(num).fill("r");  // Array banate hain aur "r" ko fill karte hain
    // return "Bu" + rArray.join("") + "p"; 
}

// console.log(longBurp(3));        //  "Burrrp"
// console.log(longBurp(5));        //  "Burrrrrp"
// console.log(longBurp(9));        //  "Burrrrrrrrrp"

// 42 => Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
    // let result = str.split("").join(" ");
    // return result;

    let result = ""
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        if (i < str.length - 1) {
            result += " "
        }
    }

    return result;

}

// console.log(spaceMeOut("space"));        //  "s p a c e"
// console.log(spaceMeOut("far out"));        //  "f a r   o u t"
// console.log(spaceMeOut("elongated musk"));        //  "e l o n g a t e d   m u s k"

// 43 => Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str) {

    if (!str.includes("edabit")) {
        return str.replace(/amazing/g, "not amazing");
    }
    return str;
}

// console.log(amazingEdabit("edabit is amazing."));        // "edabit is amazing."
// console.log(amazingEdabit("Mubashir is amazing."));        // "Mubashir is not amazing."
// console.log(amazingEdabit("Infinity is amazing."));        // "Infinity is not amazing."

// 44 => How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

function countDs(str) {
    // let countD = 0;
    // for (let i = 0; i < str.length; i++){
    //     if(str[i].includes("d")  || str[i].includes("D") ){
    //         countD++;
    //     }
    // }
    // return countD;

    let countD = 0;
    let result = str.toLowerCase();
    for (let i = 0; i < result.length; i++) {
        if (result[i] === "d") {
            countD++;
        }
    }
    return countD;
}

// console.log(countDs("My friend Dylan got distracted in school."));     //  4
// console.log(countDs("Debris was scattered all over the yard."));     //  3
// console.log(countDs("The rodents hibernated in their den."));     //  3

// 45 => Classes For Fetching Information on a Sports Player
// Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"

class Player {
    constructor(name, age, height, weight) {
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge() {
        console.log(`${this.name} is age ${this.age}`);
    }

    getHeight() {
        console.log(`${this.name} is ${this.height}cm`);
    }

    getWeight() {
        console.log(`${this.name} weighs ${this.weight}kg`);
    }

}

p1 = new Player("David Jones", 25, 175, 75)
// p1.getAge()          //  "David Jones is age 25"
// p1.getHeight()       //  "David Jones is 175cm"
// p1.getWeight()       //  "David Jones weighs 75kg"

// 46 => Raucous Applause
// After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        // if(str[i] === "C"){
        if (str[i].includes("C")) {
            count++
        }
    }
    return count;
}

// console.log(countClaps("ClaClaClaClap!"));        //  4
// console.log(countClaps("ClClClaClaClaClap!"));        //  6
// console.log(countClaps("CCClaClClap!Clap!ClClClap!"));        //  9

// 47 => Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(str) {
    if (str === str.toLowerCase()) {
        return "lower";
    } else if (str === str.toUpperCase()) {
        return "upper";
    } else {
        return "mixed"
    }
}

// console.log(getCase("whisper..."));        //  "lower"
// console.log(getCase("SHOUT!"));        //  "upper"
// console.log(getCase("Indoor Voice"));        //  "mixed"

// 48 => WordCharWord
// Create a function that will put the first argument, a character, between every word in the second argument, a string.

function add(str1, str2) {
    let putValue = str1;
    let word = str2.trim().split(" ");  // leading or trailing spaces ko handle karega
    
    // Agar string mein sirf spaces hoon
    if (word[0] === "") {
      return putValue;
    }
  
    // Agar sirf ek word ho
    if (word.length === 1) {
      return `${word[0]}${putValue}`;
    }
  
    // Agar do ya zyada words ho
    return `${word[0]}${putValue}${word[1]}${putValue}${word[word.length - 1]}`;
  }

console.log(add("R", "javascript is fun"));          //  "javascriptRisRfun"
console.log(add("#", "hello world!"));          //  "hello#world!"
console.log(add("#", " "));          //  "#"



