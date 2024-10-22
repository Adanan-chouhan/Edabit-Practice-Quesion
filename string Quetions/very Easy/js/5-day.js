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

console.log(amazingEdabit("edabit is amazing."));        // "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing."));        // "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing."));        // "Infinity is not amazing."

