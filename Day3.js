// Activity 1: If-Else Statements
// • Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

    let num=-1;
    if(num>0){
        console.log("The number is positive");
    }
    else if(num<0){
        console.log("The number is negative");
    }
    else{
        console.log("The number is zero");
    }

// • Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
     
    let age=20;
    if(age>=18){
        console.log("The person is eligible to vote");
    }
    else{
        console.log("The person is not eligible to vote");
    }

// Activity 2: Nested If-Else Statements
// • Task 3: Write a program to find the largest of three numbers using nested if-else statements.
    
    let a=5, b=8, c=10;
    if(a>b){
        if(a>c){
            console.log("The largest number is",a);
        }
        else{
            console.log("The largest number is",c);
        }
    }
    else if(b>c){
        console.log("The largest number is",b);
    }
    else{
        console.log("The largest number is",c);
    }

// Activity 3: Switch Case
// • Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
    
    let day=4;
    switch(day){
        case 1:
            console.log("The day is Monday");
            break;
        case 2:
            console.log("The day is Tuesday");
            break;
        case 3:
            console.log("The day is Wednesday");
            break;
        case 4:
            console.log("The day is Thursday");
            break;
        case 5:
            console.log("The day is Friday");
            break;
        case 6:
            console.log("The day is Saturday");
            break;
        case 7:
            console.log("The day is Sunday");
            break;
        default:
            console.log("Invalid day number");
    }



// • Task 5: Write a program that uses a switch case to assign a grade (A', 'B', 'C', 'D', 'F) based on a score and log the grade to the console.

    let Score = 85;
    switch(true){
        case Score >=80:
            console.log("Grade: A");
            break;
        case Score >=70:
            console.log("Grade: B");
            break;
        case Score >=60:
            console.log("Grade: C");
            break;
        case Score >=50:
            console.log("Grade: D");
            break;
        default:
            console.log("Grade: F");
    }

// Activity 4: Conditional (Ternary) Operator
// • Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.

let number=8;
let result = (number % 2==0) ? "even": "odd"; 
console.log(result);



// Activity 5: Combining Conditions
// • Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
let year=2024;
let isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

if(isLeapYear){
    console.log("The year",year,"is a leap year");
}

else{
    console.log("The year",year,"is not a leap year");
}