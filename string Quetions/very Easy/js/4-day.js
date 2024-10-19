// 31 => Count the Syllables
// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(syllables) {
    let countSyllables = 0;
    syllables = syllables.toLowerCase(); 
    let result = syllables.slice(0, 2);  // Pehle do characters ko store karte hain

    for (let i = 0; i < syllables.length; i += 2) {  // 2-2 blocks me check karenge
        if (syllables.slice(i, i + 2) === result) {  // Har 2 character ko compare karenge
            countSyllables++;
        }
    }
    
    return countSyllables;
}

// console.log(countSyllables("Hehehehehehe"));           //  6
// console.log(countSyllables("bobobobobobobobo"));           //  8
// console.log(countSyllables("NANANA"));           //  3

