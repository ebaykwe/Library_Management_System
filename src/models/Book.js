class Book {
    constructor(title, author, ISBN) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isBorrowed = false;
    }

    isBorrowed() {
        return this.isBorrowed;
    }
}

module.exports = Book;
