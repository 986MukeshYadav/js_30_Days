function greetUser(name) {
    return function() {
      return `Hello, ${name}!`;
    };
  }
  
  const greetJohn = greetUser('John');
  console.log(greetJohn()); // Logs: Hello, John!
  const greetJane = greetUser('Jane');
  console.log(greetJane()); // Logs: Hello, Jane!
  