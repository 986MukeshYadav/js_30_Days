// •Task 1: Write a program to add two numbers and log the result to the console.
  function add(a,b){
    let result = a+b;
    console.log("Addition:", result);
  }
  add(5,8);

// • Task 2: Write a program to subtract two numbers and log the result to the console.
function sub(a,b){
    let result = a-b;
    console.log("Subtract:", result);
  }
  sub(15,8);

// • Task 3: Write a program to multiply two numbers and log the result to the console.
function mul(a,b){
    let result = a*b;
    console.log("Multiply:", result);
  }
  mul(5,8);

// • Task 4: Write a program to divide two numbers and log the result to the console.

    function div(a,b){
    let result = a/b;
    console.log("Division:", result);
  }
  div(15,3);

// • Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
  function mod(a,b){
    let result = a%b;
    console.log("Remainder:", result);
  }
  mod(15,2);

//   • Task 6: Use the += operator to add a number to a variable and log the result to the console.
    let num = 5;
    num += 8;
    console.log("Addition:", num);

//   • Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
    let num1=9;
    num1 -= 3;
    console.log("Subtraction:", num1);

// • Task 8: Write a program to compare two numbers using › and ‹ and log the result to the console.
   function compare(a,b){
    if(a<b){    
        console.log("First number is less than second number");
    }else if(a>b){
        console.log("First number is greater than second number");
    } else {
        console.log("First number is equal to second number");
    }
}
    compare(5,8);

// • Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
    let num2=10;
    let num3=10;
    if(num2>=num3){
        console.log("First number is greater than or equal to second number");
    } else {
        console.log("First number is less than second number");
    }

// • Task 10: Write a program to compare two numbers using == and === and log the result to the console.
    let num4=10;
    let num5=10;
    if(num4==num5){
        console.log("First number is equal to second number using == operator");
    } else {
        console.log("First number is not equal to second number using == operator");
    }


 // • Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
    let age = 18;
    let height = 170;
    if(age>=18 && height>=170){
        console.log("The person is of legal age and tall enough");
    } else {
        console.log("The person is not of legal age or not tall enough");
    }

// • Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
    let age1 = 15;
    let height1 = 160;
    if(age1>=18 || height1>=170){
        console.log("The person is either of legal age or tall enough");
    } else {
        console.log("The person is not of legal age or not tall enough");
    }
// • Task 13: Write a program that uses the ! operator to negate a condition and log the result to the console.
    let isStudent = true;
    if(!isStudent){
        console.log("The person is not a student");
    } else {
        console.log("The person is a student");
    }

// • Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
    let num6 = -5;
    let result = num6>0 ? "The number is positive" : "The number is negative";
    console.log(result);