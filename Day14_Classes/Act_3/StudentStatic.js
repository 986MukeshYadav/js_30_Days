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
  
  class Student extends Person {
    static numberOfStudents = 0;
  
    constructor(name, age, studentId) {
      super(name, age);
      this.studentId = studentId;
      Student.numberOfStudents += 1;
    }
  
    greeting() {
      return `Hello, my name is ${this.name}, I am ${this.age} years old, and my student ID is ${this.studentId}.`;
    }
  
    getStudentId() {
      return `Student ID: ${this.studentId}`;
    }
  }
  
  const student3 = new Student('Charlie', 23, 'S11111');
  const student4 = new Student('David', 24, 'S22222');
  console.log(Student.numberOfStudents); // Output: 2
  