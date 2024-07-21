// Day 8: ES6+ Features
// Tasks/Activities:
// Activity 1: Template Literals
// • Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
let name = "Mukesh";
let age = 22;
let message = `Hello, my name is ${name} and I am ${age} years old.`;
//console.log(message);

// • Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineMessage = `
    This is a multi-line.
    I am from Nepal.
    I am learning JavaScript.
    I am learning ES6+.
`;
//console.log(multiLineMessage);

// Activity 2: Destructuring
// • Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.
let numbers = [1,2,3,4,5];
let [first, second] = numbers;
// console.log(`First element: ${first}`);
// console.log(`Second element: ${second}`);

// • Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
let book = {
    title: "Life of Hero",
    author: "Mukesh",
    year: 2022
};
let { title, author } = book;
// console.log(`Title: ${title}`);
// console.log(`Author: ${author}`);

// Activity 3: Spread and Rest Operators
// • Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];
//console.log(newArray); 

// • Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
function sum(...numbers) {
    return numbers.reduce((total, current) => total + current);
}
//console.log(sum(4, 5, 6, 7, 8)); 
            

// Activity 4: Default Parameters
// • Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5, 2)); 
console.log(multiply(5)); 


// Activity 5: Enhanced Object Literals
// • Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.
let name1 = "Mukesh";
let age1 = 22;

let person = {
    name1,
    age1,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person);
person.greet();

// • Task 9: Create an object with computed property names based on variables and log the object to the console.
let propName = "dynamicProperty";
let value = "This is a dynamic property value";

let dynamicObject = {
    [propName]: value
};
console.log(dynamicObject);
