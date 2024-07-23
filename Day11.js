// Day 11: Promises and Async/Await
// Tasks/Activities:
// Activity 1: Understanding Promises
// • Task 1: Create a promise that resolves with a message after a 2-second timeout and log the message to the console.
// const promise1 = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Promise Resolved after 2 seconds");
//     },2000)
// });

// promise1.then((message) => {
//     console.log(message);
// });



// • Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
// const promise2 = new Promise((_,reject)=>{
//     setTimeout(()=>{
//     reject("Promise rejected after 2 seconds");
// },2000);
// });

// promise2.catch((error)=>{
//     console.error(error);
// });

// Activity 2: Chaining Promises
// • Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.
// const fetchData=(data)=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(data);
//         },1000);
//     });
// };

// fetchData("fetching data step 1")
//    .then((message)=>{
//     console.log(message);
//     return fetchData("fetching data step2");
//    })
//    .then((message)=>{
//     console.log(message);
//     return fetchData("fetching data step 3");
//    })
//    .then((message)=>{
//     console.log(message);
//    });

// Activity 3: Using Async/Await
// • Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
//  const promisetoresolve=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve("Async function resolved promise");
//         },2000)
//     });
//  };

//  const asyncFunction1 = async()=>{
//     const result = await promisetoresolve();
//     console.log(result);
// };
// asyncFunction1();

// • Task 5: Write an async function that handles a rejected promise using try-catch and logs the error message.

// const promiseToReject = () => {
//     return new Promise((_, reject) => {
//       setTimeout(() => {
//         reject("Async function rejected promise");
//       }, 2000);
//     });
//   };
  
//   const asyncFunction2 = async () => {
//     try {
//       const result = await promiseToReject();
//       console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   asyncFunction2();
  


// Activity 4: Fetching Data from an API
// • Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => response.json())
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.error('Error fetching data:',error);
// });

// • Task 7: Use the fetch APl to get data from a public API and log the response data to the console using async/await.

// const fetchDataAsync = async ()=>{
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         const data = await response.json();
//         console.log(data);
//     }catch(error){
//         console.error('Error fetching data:',error);
//     }
// };
// fetchDataAsync();


// Activity 5: Concurrent Promises
// • Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
// const promiseA = new Promise((resolve) => setTimeout(() => resolve('A resolved'), 1000));
// const promiseB = new Promise((resolve) => setTimeout(() => resolve('B resolved'), 2000));
// const promiseC = new Promise((resolve) => setTimeout(() => resolve('C resolved'), 3000));

// Promise.all([promiseA, promiseB, promiseC])
//   .then(values => {
//     console.log(values); 
//   })
//   .catch(error => {
//     console.error(error);
//   });


// • Task 9: Use Promise. race to log the value of the first promise that resolves among multiple promises.

const promiseX = new Promise((resolve) => setTimeout(() => resolve('X resolved first'), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve('Y resolved'), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve('Z resolved'), 3000));

Promise.race([promiseX, promiseY, promiseZ])
  .then(value => {
    console.log(value); 
  })
  .catch(error => {
    console.error(error);
  });
