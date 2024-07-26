class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greeting() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  
    updateAge(newAge) {
      this.age = newAge;
      console.log(`Updated age: ${this.age}`);
    }
  }

  class Student extends Person{
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
    greeting(){
        return `Hello, my name is ${this.name} and I am ${this.age} years old. I am in grade ${this.grade}.`;
    }

    getGrade(){
        return `Student ID: ${this.grade}`
    }
  }
  const student1 = new Student('Mukesh',22,'A+');
  console.log(student1.getGrade());

  const student2 = new Student('Kumar',24,'A');
  console.log(student2.greeting());