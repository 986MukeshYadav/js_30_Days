// Day 6: Arrays
// Tasks/Activities:
// Activity 1: Array Creation and Access
// • Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
  let arr=[1,2,3,4,5];
  console.log(arr);


// • Task 2: Access the first and last elements of the array and log them to the console.
 let arr1=[1,2,3,4,5];
    console.log(arr[0]); 
    console.log(arr[arr.length-1]); 

// Activity 2: Array Methods (Basic)
// • Task 3: Use the push method to add a new number to the end of the array and log the updated array.
    let arr2=[1,2,3,4,5];
    arr2.push(6);
    console.log(arr2);

// • Task 4: Use the pop method to remove the last element from the array and log the updated array.
    let arr3=[1,2,3,4,5];
    arr3.pop(arr.length-1);
    console.log(arr3);


// • Task 5: Use the shift method to remove the first element from the array and log the updated array.
    let arr4=[1,2,3,4,5];
    arr4.shift();
   console.log(arr4);


// • Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
    let arr5=[1,2,3,4,5];
    arr5.unshift(8);
   console.log(arr5);

// Activity 3: Array Methods (Intermediate)
// • Task 7: Use the map method to create a new array where each number is doubled and log the new array.
    let num=[2,4,8,10]
    let double=num.map(num=>num * 2)
    console.log(double);

// • Task 8: Use the filter method to create a new array with only even numbers and log the new array.
    let num1=[2,4,7,3,9,8,10]
    let even=num1.filter(num=>num % 2 === 0)
    console.log(even);

// • Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
    let num2=[1,2,3,4,5]
    let sum=num2.reduce((accumulator,currentvalue)=>accumulator+currentvalue,0)
    console.log(sum);


// Activity 4: Array Iteration
// • Task 10: Use a for loop to iterate over the array and log each element to the console.
   
let mynum = [1,2,3,4,5]
 for (let i = 0 ; i <  mynum.length; i++)
{
 console.log(mynum[i]);
}


// • Task 11: Use the forEach method to iterate over the array and log each element to the console.
    let mynum1 = [5,4,3,2,1]
    mynum1.forEach((num) => console.log(num));

// Activity 5: Multi-dimensional Arrays
// • Task 12: Create a two-dimensional array (matrix) and log the entire array to the console.
    let matrix = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(matrix);


// • Task 13: Access and log a specific element from the two-dimensional array. 
    let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(matrix[1][2]);
