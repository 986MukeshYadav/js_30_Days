// Day 7: Objects
// Tasks/Activities:
// Activity 1: Object Creation and Access
// • Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
    const book={
        title: "The Catcher boy",
        author: "mukesh",
        year: 1951,
    }
   console.log(book);




// • Task 2: Access and log the title and author properties of the book object.
    console.log(book.title);
    console.log(book.author);

// Activity 2: Object Methods
// • Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
    book.getDetails=function(){
        return `${this.title} by ${this.author}`;
    }
   console.log(book.getDetails());



// • Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.

let book1 = {
    title: "Know  him",
    author: "Mukesh",
    year: 1960,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
    }
};
book1.updateYear(2024);
console.log(book1);

// Activity 3: Nested Objects
// • Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the

let book2 = {
    title: "To Kill a hero",
    author: "Yadav",
    year: 1960
};

let book3 = {
    title: "1984",
    author: "kumar",
    year: 1949
};
let library = {
    name: "City Library",
    books: [book2, book3]
};
console.log(library);





// • Task 6: Access and log the name of the library and the titles of all the books in the library.

   console.log(library.name);
    library.books.forEach(book => console.log(book.title));

// Activity 4: The this Keyword method.
// • Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this
   
book.getDetailsWithYear = function() {
        return `${this.title} by ${this.author} - ${this.year}`;
    }
    console.log(book.getDetailsWithYear());

// Activity 5: Object Iteration
// • Task 8: Use a for... in loop to iterate over the properties of the book object and log each property and its value.
  
const Book1 = {
    Title: "hero",
    Author: "Mukesh",
    Year: 2023,
}

for (const loop in Book1)
    if (Book1.hasOwnProperty(loop)) {
        console.log(`${loop}:${Book1[loop]}`);

    }

// • Task 9: Use Object. keys and Object. values methods to log all the keys and values of the book object.
  
const Book = {
    Title: "comic",
    Author: "Mukesh",
    Year: 2023,
}

console.log(` Keys :${Object.keys(Book).join(", ")}. , Values : ${Object.values(Book).join(" ,")}`)