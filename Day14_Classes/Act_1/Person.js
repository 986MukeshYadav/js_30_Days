class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greeting(){
        return `Heloo,my name is ${this.name} and I am ${this.age} years old.`;
    }

    updateAge(newAge){
        this.age=newAge;
        console.log(`Updated age: ${this.age}`);
    }
}
const person1 = new Person('Mukesh',22);
console.log(person1.greeting());

const person2 = new Person('Kumar',23);
console.log(person2.greeting());
person2.updateAge(26);