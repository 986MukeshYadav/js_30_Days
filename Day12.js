// Day 12: Error Handling
// Tasks/Activities:
// Activity 1: Basic Error Handling with Try-Catch
// • Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwError() {
  throw new Error("An error occurred");
}
try {
  throwError();
} catch (e) {
  console.log("Caught an error", e.message);
}

// • Task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by Zero is not allowed");
  }
  return a / b;
}
try {
  console.log(divide(10, 0));
} catch (e) {
  console.log("Caught an error:", e.message);
}

// Activity 2: Finally Block
// • Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.
function demo() {
  try {
    console.log("Its a try block");
    throw new Error("An error occurred in try block");
  } catch (e) {
    console.log("It is catch block:", e.message);
  } finally {
    console.log("It is finally block");
  }
}
demo();

// Activity 3: Custom Error Objects
// • Task 4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}
function throwCustomError() {
  throw new CustomError("This is a custom error");
}

try {
  throwCustomError();
} catch (error) {
  console.log(`Caught a ${error.name}:${error.message}`);
}

// • Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block.
function validateInput(input) {
  if (!input) {
    throw new CustomError("Input cannot be empty");
  }
}

try {
  validateInput("");
} catch (error) {
  console.log(`Caught a ${error.name}: ${error.message}`);
}

// Activity 4: Error Handling in Promises
// • Task 6: Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
const randomPromise = new Promise((resolve, reject) => {
  Math.random() > 0.5 ? resolve("Resolved") : reject("Rejected");
});
randomPromise
  .then((result) => console.log(result))
  .catch((error) => console.log("Caught an error:", error));

// • Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function asyncDemo() {
  try {
    const result = await randomPromise;
    console.log(result);
  } catch (e) {
    console.log("Caught an error:", e);
  }
}
asyncDemo();

// Activity 5: Graceful Error Handling in Fetch
// • Task 8: Use the fetch API to request data from an invalid URL and handle the error using •catch() . Log an appropriate error message to the console.

fetch("https://invalid.url")
  .then((Response) => Response.json())
  .catch((error) => console.log("Error:", error));

// • Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchDemo() {
  try {
    const Response = await fetch("https://invalid.url");
    const data = await Response.json();
    console.log(data);
  } catch (e) {
    console.log("Fetch Error:", e);
  }
}
fetchDemo();
