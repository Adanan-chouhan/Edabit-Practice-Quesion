// 51 ==> Check String for Spaces
//     Create a function that returns true if a string contains any spaces.

function hasSpaces(str){
    const spaces = str.includes(" ");
    return spaces;
}
// console.log(hasSpaces("hello"));   
// console.log(hasSpaces("hello, world"));
// console.log(hasSpaces(" "));
// console.log(hasSpaces(""));
// console.log(hasSpaces(",./!@#"));

// 52 ==> Find the Bug: Returning the Container
//     The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag. The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

function getContainer(product) {
    const containers = {
        "Bread": "bag",
        "Candy": "plastic",
        "Beer": "bottle"
        // Add more mappings as needed
    };
    return containers[product] || null;
}
// console.log(getContainer("Bread"));     // "bag"
// console.log(getContainer("Beer") );    // "bottle"
// console.log(getContainer("Candy"));     // "plastic"
// console.log(getContainer("Cheese"));     // null

// 53 ==> Return the Total Number of Parameters
//     Create a function that returns the total number of parameters passed in.
function numberArgs() {
    const result = arguments.length;
    return result;
}
// console.log(numberArgs("a", "b", "c"));         // 3
// console.log(numberArgs(10, 20, 30, 40, 50));    // 5
// console.log(numberArgs("x","y"));               // 2
// console.log(numberArgs());                      // 0