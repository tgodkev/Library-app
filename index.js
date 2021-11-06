// variables and buttons.
let myLibrary = [];



// constructor function for book

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.book = function() {
        return `${this.title} by ${this.author}`;
    }
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const lotr = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, true);
theHobbit.book();
lotr.book();