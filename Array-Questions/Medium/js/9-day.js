// 91 =>  Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.

function changeTypes(arr) {
    return arr.map(item => {
        if (typeof item === 'number') {
            return item % 2 === 0 ? item + 1 : item;
        } else if (typeof item === 'string') {
            return item.charAt(0).toUpperCase() + item.slice(1) + '!';
        } else if (typeof item === 'boolean') {
            return !item;
        }
        return item;
    });
}


// console.log(changeTypes(["a", 12, true]));           //  ["A!", 13, false]
// console.log(changeTypes([13, "13", "12", "twelve"]));           //  [13, "13!", "12!", "Twelve!"]
// console.log(changeTypes([false, "false", "true"]));           //  [true, "False!", "True!"]

// 92 => Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

function findSingleNumber(arr) {
    if (arr.length === 0) return null;  // Agar array empty hai toh null return karo
    if (arr.length === 1) return arr[0];  // Agar array mein ek element hai toh wahi unique hai

    // Array ke har element ka comparison
    for (let i = 0; i < arr.length; i++) {
        // Check karte hain agar current element previous aur next dono se different ho
        if (
            (i === 0 && arr[i] !== arr[i + 1]) ||  // First element ka next se compare karo
            (i === arr.length - 1 && arr[i] !== arr[i - 1]) ||  // Last element ka previous se compare karo
            (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1])  // Middle elements ka previous aur next se compare karo
        ) {
            return arr[i];  // Agar current element unique ho toh return kar do
        }
    }

    return null;  // Agar koi unique element na ho toh null return karo
}


// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4]));      //  3
// console.log(findSingleNumber([2]));      //  2
// console.log(findSingleNumber([]));      //  null
// console.log(findSingleNumber([7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6, 8, 4, 3, 7, 5, 6, 13]));      //  8
// console.log(findSingleNumber([1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101, 4, 3, 1, 5, 6, 2]));      //  101

// 93 => Numbers to Objects
// Mubashir needs your help in a simple task.

// Given an array of numbers arr:

// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.


function numObj(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let obj = {}
        obj[arr[i]] = String.fromCharCode(arr[i]);
        result.push(obj);
    }
    return result;
}


// console.log(numObj([118, 117, 120]));      //  [{'118':'v'}, {'117':'u'}, {'120':'x'}]
// console.log(numObj([101, 121, 110, 113, 103]));      //  [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
// console.log(numObj([118, 103, 110]));      //  [{"118":"v"}, {"103":"g"}, {"110":"n"}]

//  94 => Ping Pong!
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.

function pingPong(arr, win) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i]);  // First, push "Ping!"
        result.push("Pong!"); // Then, always push "Pong!" after "Ping!"
    }
    // Check for the winning condition
    if (!win) {
        result.pop(); // If not a win, remove the last "Pong!" and replace with "Ping!"
        result.push("Ping!");
    }
    return result;
}

// console.log(pingPong(["Ping!"], true));     // ["Ping!", "Pong!"]
// console.log(pingPong(["Ping!", "Ping!"], false));     // ["Ping!", "Pong!", "Ping!"]
// console.log(pingPong(["Ping!", "Ping!", "Ping!"], true));     // ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]

// 95 => Pyramid Arrays
// Given a number n, return an array containing several arrays. Each array increments in size, from range 1 to n inclusive, contaning its length as the elements.

function pyramidArrays(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        let row = [];
        for (let j = 0; j < i; j++) {
            row.push(i);
        }
        result.push(row);
    }
    return result;
}

// console.log(pyramidArrays(1));    //  [[1]]
// console.log(pyramidArrays(3));    //  [[1], [2, 2], [3, 3, 3]]
// console.log(pyramidArrays(5));    //  [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5]]

// 96 => String Match by Two Letters
// Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

function strMatchBy2char(a, b) {
    let countSameStr = 0
    for (let i = 0; i < a.length - 1 && i < b.length - 1; i++) {
        if (a[i] === b[i] && a[i + 1] === b[i + 1]) {
            countSameStr++
        }
    }
    return countSameStr;
}

// console.log(strMatchBy2char("yytaazz", "yyjaaz"));        //  3
// console.log(strMatchBy2char("edabit", "ed"));        //  1
// console.log(strMatchBy2char("", ""));        //  0
// console.log(strMatchBy2char("abcde","abcde")); // 4


// 97 => Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

function longestWord(str) {
    let longest = " ";
let sentence = str.split(" ");
for(let i = 0; i < sentence.length; i++){
    if(sentence[i].length > longest.length){
     longest = sentence[i];
    }
}
return longest;
}

// console.log(longestWord("Hello darkness my old friend"));      //  "darkness"    
// console.log(longestWord("Hello there mate"));      //  "Hello"
// console.log(longestWord("Kayla's toy is plastic"));      //  "Kayla's"

// 98 => Sum of Array Elements Except Itself
// An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.

// Clarification
// [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
// [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
// [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
// [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]

function arrEleSum(arr){
    let result = [];
    let totalSum = arr.reduce((acc,value) => acc + value,0);

    for(let i = 0; i < arr.length; i++){
      result.push(totalSum - arr[i]);
    }

    return result;
}

// console.log(arrEleSum([1, 2, 3, 2, 1]));           //  [8, 7, 6, 7, 8]
// console.log(arrEleSum([1, 2]));           //  [2, 1]
// console.log(arrEleSum([1, 2, 3]));           //  [5, 4, 3]
// console.log(arrEleSum([1, 2, 3, 4, 5]));           //  [14, 13, 12, 11, 10]
// console.log(arrEleSum([10, 20, 30, 40, 50, 60]));           //  [200, 190, 180, 170, 160, 150]

// 99 => Count the Towers
// Create a function that counts the number of towers.

function count_towers(arr){
let count = 0;
for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < i; j++){
        
    }
}

return count;
}

console.log(count_towers([
  ["     ##         "],
  ["##   ##        ##"],
  ["##   ##   ##   ##"],
  ["##   ##   ##   ##"]
]));   //  4

console.log(count_towers([
  ["                         ##"],
  ["##             ##   ##   ##"],
  ["##        ##   ##   ##   ##"],
  ["##   ##   ##   ##   ##   ##"]
]));   //  6

console.log(count_towers([
  ["##"],
  ["##"]
]));   //  1