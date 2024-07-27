const User = require('../src/models/User');
const Book = require('../src/models/Book');

test('User can borrow a book', () => {
    const user = new User("Alice", "1");
    const book = new Book("Test Title", "Test Author", "12345");
    expect(user.borrowBook(book)).toBe(true);
    expect(user.borrowedBooks.length).toBe(1);
    expect(book.isBorrowed).toBe(true);
});

test('User cannot borrow more than 3 books', () => {
    const user = new User("Alice", "1");
    user.borrowBook(new Book("Book 1", "Author 1", "ISBN1"));
    user.borrowBook(new Book("Book 2", "Author 2", "ISBN2"));
    user.borrowBook(new Book("Book 3", "Author 3", "ISBN3"));
    expect(user.borrowBook(new Book("Book 4", "Author 4", "ISBN4"))).toBe(false);
});
