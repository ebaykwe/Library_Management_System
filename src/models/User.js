class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        if (this.borrowedBooks.length >= 3) {
            return false;
        } else {
            this.borrowedBooks.push(book);
            book.isBorrowed = true;
            return true;
        }
    }

    returnBook(ISBN) {
        const index = this.borrowedBooks.findIndex(book => book.ISBN === ISBN);
        if (index !== -1) {
            const book = this.borrowedBooks.splice(index, 1)[0];
            book.isBorrowed = false;
            return true;
        }
        return false;
    }

    peekBook(ISBN) {
        return this.borrowedBooks.find(book => book.ISBN === ISBN);
    }
}

module.exports = User;
