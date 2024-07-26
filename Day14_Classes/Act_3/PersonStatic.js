class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    static genericGreeting() {
      return 'Hello, this is a generic greeting message.';
    }
  }
  
  console.log(Person.genericGreeting()); // Output: Hello, this is a generic greeting message.
  