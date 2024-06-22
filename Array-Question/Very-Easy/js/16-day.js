//  161 => Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

function countOnes(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 1) {
                result++;
            }
        }
    }
    return result;
}

// console.log(countOnes([
//     [1, 0],
//     [0, 0]
// ]));    // 1

// console.log(countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1]
// ]));    // 7

// console.log(countOnes([
//     [1, 2, 3],
//     [0, 2, 1],
//     [5, 7, 33]
// ]));    // 2

// 162 => Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.
function isSubset(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false;
        }
    }
    return true;
}

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));          // true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6]));       // true
// console.log(isSubset([1, 2], [3, 5, 9, 1]));                // false 

// 163 => Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

// "user1, user2 and 3 more online"

function chatroomStatus(users) {
    if (users.length === 0) {
        return "no one online";
    } else if (users.length === 1) {
        return `${users[0]} online`;
    } else if (users.length === 2) {
        return `${users[0]} and ${users[1]} online`;
    } else {
        return `${users[0]}, ${users[1]} and ${users.length - 2} more online`;
    }
}
// console.log(chatroomStatus([]));           //  "no one online"
// console.log(chatroomStatus(["paRIE_to"]));           //  "paRIE_to online"
// console.log(chatroomStatus(["s234f", "mailbox2"]));           //  "s234f and mailbox2 online"
// console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]));           //  "pap_ier44, townieBOY and 4 more online"

// 164 => Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed
function spelling(str){

    let result = [];
    for(let i = 1; i <= str.length; i++){
        result.push(str.slice(0,i));
    }
    return result;
}

// console.log(spelling("bee"));     //  ["b", "be", "bee"]
// console.log(spelling("happy"));     //  ["h", "ha", "hap", "happ", "happy"]
// console.log(spelling("eagerly"));     //  ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"] 

// 165 => First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

function charIndex(){
    
}

console.log(charIndex("hello", "l"));         //  [2, 3]
// The first "l" has index 2, the last "l" has index 3.

console.log(charIndex("circumlocution", "c"));         //  [0, 8]
// The first "c" has index 0, the last "c" has index 8.

console.log(charIndex("happy", "h"));         //  [0, 0]
// Only one "h" exists, so the first and last index is 0.

console.log(charIndex("happy", "e"));         //  undefined
// "e" does not exist in "happy", so we return undefined.
