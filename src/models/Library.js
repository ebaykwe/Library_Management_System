const Book = require('./Book');
const User = require('./User');

class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }

    registerMember(user) {
        this.members.push(user);
    }

    addNewBook(book) {
        this.books.push(book);
    }

    borrowBook(userId, ISBN) {
        const user = this.members.find(member => member.id === userId);
        const book = this.books.find(book => book.ISBN === ISBN && !book.isBorrowed);
        if (user && book) {
            return user.borrowBook(book);
        }
        return false;
    }

    returnBook(userId, ISBN) {
        const user = this.members.find(member => member.id === userId);
        if (user) {
            return user.returnBook(ISBN);
        }
        return false;
    }
}

module.exports = Library;
