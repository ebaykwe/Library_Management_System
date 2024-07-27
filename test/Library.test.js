const Library = require('../src/models/Library');
const User = require('../src/models/User');
const Book = require('../src/models/Book');

test('Library can add books and register users', () => {
    const library = new Library();
    const book = new Book("Test Title", "Test Author", "12345");
    const user = new User("Alice", "1");

    library.addNewBook(book);
    library.registerMember(user);

    expect(library.books.length).toBe(1);
    expect(library.members.length).toBe(1);
});

test('Library can lend books to users', () => {
    const library = new Library();
    const book = new Book("Test Title", "Test Author", "12345");
    const user = new User("Alice", "1");

    library.addNewBook(book);
    library.registerMember(user);

    expect(library.borrowBook(user.id, book.ISBN)).toBe(true);
    expect(user.borrowedBooks.length).toBe(1);
    expect(book.isBorrowed).toBe(true);
});
