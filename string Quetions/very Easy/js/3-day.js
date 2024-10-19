// 21 => Check String for Spaces
// Create a function that returns true if a string contains any spaces.

function hasSpaces(str) {
  // let result = str.includes(" ");
  // return result;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      return true;
    }
  }
  return false;
}

// console.log(hasSpaces("hello"));        //  false
// console.log(hasSpaces("hello, world"));        //  true
// console.log(hasSpaces(" "));        //  true
// console.log(hasSpaces(""));        //  false
// console.log(hasSpaces(",./!@#"));        //  

// 22 => Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(str) {
  let result = str.slice(-1)
  if (result === "n") {
    return true
  }
  return false;

  // return str.slice(-1) === "n" ?  true : false;
}

// console.log(isLastCharacterN("Aiden"));      //  true
// console.log(isLastCharacterN("Piet"));      //  false
// console.log(isLastCharacterN("Bert"));      //  false
// console.log(isLastCharacterN("Dean"));      //  true

// 23 => Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// // Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

function relationToLuke(str) {
  if (str === "Darth Vader") {
    return "Luke, I am your father."
  }
  else if (str === "Leia") {
    return "Luke, I am your sister."
  }
  else {
    return "Luke, I am your brother in law."
  }
}

// console.log(relationToLuke("Darth Vader"));       //  "Luke, I am your father."
// console.log(relationToLuke("Leia"));       //  "Luke, I am your sister."
// console.log(relationToLuke("Han"));       //  "Luke, I am your brother in law."

// 24 => Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

function frontThree(str) {
  let result = str.slice(0, 3);
  // return result + result + result; 
  // return result.repeat(3);

  let finalStr = "";
  for (let i = 0; i < 3; i++) {
    finalStr += result;
  }
  return finalStr;
}

// console.log(frontThree("Python"));       //  "PytPytPyt"
// console.log(frontThree("Cucumber"));       //  "CucCucCuc"
// console.log(frontThree("bioshock"));       //  "biobiobio"

// 25 => Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(obj) {
  // let objKeys = Object.keys(obj);
  return `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
}

// console.log(cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }));     //  "Paris has a population of 2,140,526 and is situated in Europe"


// console.log(cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }));     //  "Tokyo has a population of 13,929,286 and is situated in Asia"

// 26 => Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(word) {
  // return word.endsWith("s");

  return word[word.length - 1] === "s";

  // let result = word[word.length - 1]
  // if (result === "s") {
  //   return true;
  // } else {
  //   return false;
  // }
}

// console.log(isPlural("changes"));      //  true
// console.log(isPlural("change"));      //  false
// console.log(isPlural("dudes"));      //  true
// console.log(isPlural("magic"));      //  false

// 27 => Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

function firstLast(str) {
  // let result = str[0];
  // return result += str[str.length-1]

  // return str[0] + str[str.length-1]

  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i === 0 || i === str.length - 1) {
      result += str[i]
    }
  }
  return result;
}

// console.log(firstLast("ganesh"));      //  "gh"
// console.log(firstLast("kali"));      //  "ki"
// console.log(firstLast("shiva"));      //  "sa"
// console.log(firstLast("vishnu"));      //  "vu"
// console.log(firstLast("durga"));      //  "da"

// 28 => Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str) {
  let firstTwoLatter = str.slice(0, 2)
  return `${firstTwoLatter}... ${firstTwoLatter}... ${str}? `;
}

// console.log(stutter("incredible"));       //  "in... in... incredible?"
// console.log(stutter("enthusiastic"));       //  "en... en... enthusiastic?"
// console.log(stutter("outstanding"));       //  "ou... ou... outstanding?"

// 29 => Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

function greaterThanOne(str) {
  let result = eval(str);
  if (result > 1) {
    return true
  }
  return false;

  // return eval(str) > 1 ? true : false;
}

// console.log(greaterThanOne("1/2"));       // false
// console.log(greaterThanOne("7/4"));        // true
// console.log(greaterThanOne("10/10"));       // false

// 30 => Default Mood
// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(str){
  if(arguments.length === 0){
    return `Today, I am feeling neutral`
  }
  return `Today, I am feeling ${str}`

  // return arguments.length === 0 ? "Today, I am feeling netural" : `Today, I am feeling ${str}`;

}

// console.log(moodToday("happy"));            //   "Today, I am feeling happy"
// console.log(moodToday("sad"));            //   "Today, I am feeling sad"
// console.log(moodToday());            //   "Today, I am feeling neutral"