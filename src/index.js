const Book = require('./models/Book');
const User = require('./models/User');
const Library = require('./models/Library');

// Create a library instance
const library = new Library();

// Create book instances
const book1 = new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748");
const book2 = new Book("Eloquent JavaScript", "Marijn Haverbeke", "978-1593279509");
const book3 = new Book("Finding The Master", "Peter Kobel", "978-2843567573");


// Add books to the library
library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);


// Create user instances
const user1 = new User("Alice", "1");
const user2 = new User("Bob", "2");

// Register users in the library
library.registerMember(user1);
library.registerMember(user2);

// User borrows a book
library.borrowBook("1", "978-0596517748"); // Alice borrows book1
library.borrowBook("1", "978-1593279509"); // Alice borrows book2
library.borrowBook("2", "978-2843567573"); // Alice borrows book3


// User returns a book
library.returnBook("1", "978-0596517748"); // Alice returns book1

// Peek at a borrowed book's details
console.log(user1.peekBook("978-1593279509")); // Eloquent JavaScript
console.log(user2.peekBook("978-2843567573")); // Finding The Master