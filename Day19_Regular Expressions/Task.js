// Day 19: Regular Expressions
// Tasks/Activities:
// Activity 1: Basic Regular Expressions
// • Task 1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches.
const text="I love JavaScript! is verrsatile";
const regex=/JavaScript/g;
const matches = text.match(regex);
console.log(matches);

// • Task 2: Write a regular expression to match all digits in a string. Log the matches.

const str="My mobile number is 9800-2244-6688";
const demo=/\d+/g;
const matches1 = str.match(demo);
console.log(matches1);

// Activity 2: Character Classes and Quantifiers
// • Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const text2="Hello, World! Javascript is fun.";
const regex1=/\b[A-Z][a-z]*\b/g;
const matches2=text2.match(regex1);
console.log(matches2);

// • Task 4: Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const str2="I have 15 apples and 20 oranges.";
const regex2=/\d+/g;
const matches3 = str2.match(regex2);
console.log(matches3);

// Activity 3: Grouping and Capturing
// • Task 5: Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890). Log the captures.

const text4 ="My number is (123) 456-7890.";
const regex4=/\((\d{3})\)\s(\d{3})-(\d{4})/;
const match4=text4.match(regex4);
console.log(match4);

// • Task 6: Write a regular expression to capture the username and domain from an email address. Loe the captures
const text5="Contact me at john.doe@example.com.";;
const  regex5=/(\w+(\.\w+)*)@(\w+\.\w+)/;
const match5 = text5.match(regex5);
console.log(match5);

// Activity 4: Assertions and Boundaries
// • Task 7: Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.

const text6 = "Hello world! Hello everyone.";
const regex6 = /^\w+/;
const matches6 = text6.match(regex6);
console.log(matches6); 

// • Task 8: Write a regular expression to match a word only if it is at the end of a string. Log the matches.

const text7 = "Hello world! Goodbye world.";
const regex7 = /\w+$/;
const matches7 = text7.match(regex7);
console.log(matches7);

// Activity 5: Practical Applications
// • Task 9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.

const password = "Passw0rd!";
const regex8 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
const isValid = regex8.test(password);
console.log(isValid); 


// • Task 10: Write a regular expression to validate a URL. Log whether the URL is valid.

const url = "https://www.example.com";
const regex9 = /^(https?:\/\/)?([\w\d\-]+\.)+[\w\d\-]+(\/[\w\d\-\.]*)*$/;
const isValid1 = regex9.test(url);
console.log(isValid1); 