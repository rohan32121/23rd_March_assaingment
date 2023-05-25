// 2. Building Robust Functions in JavaScript


// Create a function called getPerson that takes an object as a parameter representing a person's name and age.
// The function should return the person's name and age as a string in the format "Name: <name>, Age: <age>".
// However, if the parameter is not a valid object with the properties "name" and "age", the function should throw
// an error with the message "Invalid parameter type". Use try-catch to handle this error and return the error
// message if it occurs.



function getPerson(personObj){
  
}

// function getPerson(personObj) {
//     try {
//       if (typeof personObj !== 'object' || personObj === null || !('name' in personObj) || !('age' in personObj)) {
//         throw new Error("Invalid parameter type");
//       }
  
//       const { name, age } = personObj;
//       return `Name: ${name}, Age: ${age}`;
//     } catch (error) {
//       return error.message;
//     }
//   }
  
//   const person1 = { name: "John Doe", age: 25 };
//   console.log(getPerson(person1))