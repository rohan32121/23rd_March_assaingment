// 1. Type Conversion.


// Write a function called convertToNumber that takes a string as an argument and returns the equivalent
// number. If the string cannot be converted to a number, the function should return the string "Invalid number".
// Use error handling in javascript to achieve this output.

//Answer->

function convertToNumber(str) {
    try {
    const number = Number(str);
    
    if (isNaN(number)) {
    throw new Error("Invalid number");
    }
    
    return number;
    } catch (error) {
    return "Invalid number";
    }
    }

