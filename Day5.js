// Activity 1: Function Declaration
// • Task 1: Write a function to check if a number is even or odd and log the result to the console.

function sum(a){
    if(a % 2==0){
        console.log(a,"is even");
    }
    else{
        console.log(a,"is odd");
    }
    return a;
}
sum(5);

// • Task 2: Write a function to calculate the square of a number and return the result.

    function square(a){
        return a*a;
    }
    console.log(square(5));


// Activity 2: Function Expression
// • Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.

const max= function(a,b){
    return a>b ? a:b
}
console.log(max(8,24));


// • Task 4: Write a function expression to concatenate two strings and return the result.
const str=function(a,b){
    return a+b;
}

console.log(str("Hello"," World!"));

// Activity 3: Arrow Functions
// • Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
   let myfunction = (a,b)=> {
    return a+b;
   }
   console.log(myfunction(5,8));
   


// • Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

 let specificCharacter=(str,cha)=>{
    return str.includes(cha);
 }
 console.log(specificCharacter("Mukesh@155","@"));

// Activity 4: Function Parameters and Default Values
// • Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
   let product=(a,b=5)=>{
    return a*b;
   }
   console.log(product(5)) // output is 25
   console.log(product(5,3)) // output is 15

// • Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
 
 const greeting=function(name,age=23){
    return `"Hello, ${name}! You are ${age} years old.`;
 }
 console.log(greeting(" Mukesh"));
 console.log(greeting("Mukesh",22));

// Activity 5: Higher-Order Functions
// • Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function highOderFunction(str,n){
    for (let i = 0; i < n ;i++){
    str();
    }
}
function sayHello(){
    console.log("Hello");
}
highOderFunction(sayHello,5);


// • Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second functionto the result.
function applyFunction(first,second,value){
    let one=first(value);
    let two=second(one);
    return two;
}

function add5(num){
    return num+5;
}

function multiplyBy2(num){
    return num*2;
}
let value=4;
let result=applyFunction(add5,multiplyBy2,value)
console.log(result); 