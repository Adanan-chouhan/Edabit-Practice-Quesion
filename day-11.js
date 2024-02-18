// 101 ==>  Video Streaming Plans
//  Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:
//      BasicPlan   StandardPlan    PremiumPlan
//      ✓           ✓               ✓               canStream
//      ✓           ✓               ✓               canDownload
//      ✓           ✓               ✓               hasSD
//                  ✓               ✓               hasHD
//                                  ✓               hasUHD
//      1           2               4               numOfDevices
//      $8.99       $12.99          $15.99          price

// class BasicPlan {
//      constructor() {
//          this.canStream = true;
//          this.canDownload = true;
//          this.hasSD = true;
//          this.hasHD = false;
//          this.hasUHD = false;
//          this.numOfDevices = 1;
//          this.price = '$8.99';
//      }
//  }

//  class StandardPlan extends BasicPlan {
//      constructor() {
//          super();
//          this.hasHD = true;
//          this.numOfDevices = 2;
//          this.price = '$12.99';
//      }
//  }

//  class PremiumPlan extends StandardPlan {
//      constructor() {
//          super();
//          this.hasUHD = true;
//          this.numOfDevices = 4;
//          this.price = '$15.99';
//      }
//  }
//      console.log(BasicPlan.hasSD);            // true 
//      console.log(PremiumPlan.hasSD);          // true
//      console.log(BasicPlan.hasUHD);           // false
//      console.log(BasicPlan.price);            // '$8.99'
//      console.log(PremiumPlan.numOfDevices);   // 4

// 102 ==>  Missing Third Angle
//  You are given 2 out of 3 angles in a triangle, in degrees.
//  Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.
//      An acute angle is less than 90 degrees.
//      A right angle is exactly 90 degrees.
//      An obtuse angle is greater than 90 degrees (but less than 180 degrees).
//  For example: missingAngle(11, 20) should return "obtuse", since the missing angle would be 149 degrees, which makes it obtuse.
function missingAngle(angle1, angle2) {
     const missing = 180 - angle1 - angle2;

     if (missing < 90) {
          return "acute";
     } else if (missing === 90) {
          return "right";
     } else {
          return "obtuse";
     }
}
// console.log(missingAngle(27, 59));    // "obtuse"
// console.log(missingAngle(135, 11));    // "acute"
// console.log(missingAngle(45, 45));    // "right"

// 103 ==>  Semantic Versioning
//  In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.
//      The first number is the major version.
//      The second number is the minor version.
//      The third number is the patch (bug fixes).
//  Write three separate functions, one to retrieve each element in the semantic versioning specification.
function retrieveMajor(version) {
     const res = version.split(".")[0];
     return res;
}

function retrieveMinor(version) {
     const res = version.split(".")[1];
     return res;

}

function retrievePatch(version) {
     const res = version.split(".")[2];
     return res;

}
// 6.1.9
// console.log(retrieveMajor("6.1.9"));        // "6"
// console.log(retrieveMinor("6.1.9"));        // "1"
// console.log(retrievePatch("6.1.9"));        // "9"
// 2.1.0
// console.log(retrieveMajor("2.1.0"));        // "2"
// console.log(retrieveMinor("2.1.0"));        // "1"
// console.log(retrievePatch("2.1.0"));        // "0"

// 104 ==>  Alphabet Soup
//  Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
// return str.split("").sort().join("");
     let res = [];
     let words = str.split("");
     for (let i = 0; i < words.length; i++) {
          res.push(words[i]);
          res.sort();
     }
     return res.join("");
}
// console.log(AlphabetSoup("hello"));       // "ehllo"
// console.log(AlphabetSoup("edabit"));      // "abdeit"
// console.log(AlphabetSoup("hacker"));      // "acehkr"
// console.log(AlphabetSoup("geek"));        // "eegk"
// console.log(AlphabetSoup("javascript"));  // "aacijprstv"