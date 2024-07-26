class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    set fullName(name) {
      const [firstName, lastName] = name.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    greeting() {
      return `Hello, my name is ${this.fullName} and I am ${this.age} years old.`;
    }
  }
  
  const person3 = new Person('Emily', 'Clark', 28);
  console.log(person3.fullName); // Output: Emily Clark
  
  const person4 = new Person('Eve', 'Smith', 29);
  console.log(person4.fullName); // Output: Eve Smith
  person4.fullName = 'Eve Johnson';
  console.log(person4.fullName); // Output: Eve Johnson
  