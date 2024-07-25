export const person = {
    name: 'Mukesh',
    age: 22,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
};