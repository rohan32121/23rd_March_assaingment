// 5. Implementing a Person Class with Default Values


// Create a class called Person with two properties: name and age. The class should have a method called
// getDetails that returns a string in the format "Name: <name>, Age: <age>". Use default parameters in the
// constructor to set the values of name and age to "Unknown" and 0 if they are not provided.

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}`;
    }
  }
  
  const person = new Person("Rohan", 30);
  
  
  console.log(person.getDetails());

  const person2 = new Person("Ram", 22);

console.log(person2.getDetails());