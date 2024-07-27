const Book = require('../src/models/Book');

test('Book can be created', () => {
    const book = new Book("Test Title", "Test Author", "12345");
    expect(book.title).toBe("Test Title");
    expect(book.author).toBe("Test Author");
    expect(book.ISBN).toBe("12345");
    expect(book.isBorrowed).toBe(false);
});
