// variables and buttons.
let myLibrary = [];
const addBook = document.getElementById('addBook');
addBook.addEventListener('click', userBook);


// constructor function for book.

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.book = function() {
        return `${this.title} by ${this.author} ${this.read}`;
    }
};


//calling the constructor function.
const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, true);
const lotr = new Book('The Lord of the Rings', 'J.R.R. Tolkien', 400, true);

console.log(theHobbit.book());
console.log(lotr.book());

// function to add books to library.
function userBook() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(myLibrary);
    createNewCard();
};


//trying to create a new card that dsiplays the book info.
function createNewCard() {
    let card = document.createElement('div');
    card.className = 'card';
    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';
    let cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    let cardAuthor = document.createElement('p');
    cardAuthor.className = 'card-author';
    let cardPages = document.createElement('p');
    cardPages.className = 'card-pages';
    let cardRead = document.createElement('p');
    cardRead.className = 'card-read';
    
};
