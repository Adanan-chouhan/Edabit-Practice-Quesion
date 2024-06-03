// 1 => Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr){
return [Math.min(...arr), Math.max(...arr)];

//    let min = arr[0];
//    let max = arr[0];
   
//    for(let i = 0; i < arr.length; i++){
//        if(arr[i] < min){
//         min = arr[i];
//        }
//        if(arr[i] > max){
//         max = arr[i]
//        }
//    }
//    return [min,max];
}
// console.log(minMax([1, 2, 3, 4, 5]));     //  [1, 5]
// console.log(minMax([2334454, 5]));     //  [5, 2334454]
// console.log(minMax([1]));     //  [1, 1]

// 2 => Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    const minArr1 = Math.min(...arr1);
    const maxArr1 = Math.max(...arr1);
    const minArr2 = Math.min(...arr2);
    const maxArr2 = Math.max(...arr2);

    return minArr1 > minArr2 && maxArr1 < maxArr2;
}

// console.log(canNest([1, 2, 3, 4], [0, 6]));        //  true
// console.log(canNest([3, 1], [4, 0]));        //  true
// console.log(canNest([9, 9, 8], [8, 9]));        //  false
// console.log(canNest([1, 2, 3, 4], [2, 3]));        //  false

// 3 => Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI )

function seriesResistance(arr){
    let sum = arr.reduce((acc, val) => acc + val, 0);
    return sum.toFixed(1) + " ohms"
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
// sum += arr[i];
// }
// return sum.toFixed(1) + " ohms";
}

console.log(seriesResistance([1, 5, 6, 3]));     //  "15 ohms"
console.log(seriesResistance([16, 3.5, 6]));     //  "25.5 ohms"
console.log(seriesResistance([0.5, 0.5]));     //  "1.0 ohm"