const prompt = require('prompt-sync')();

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`;
    }
}

function addBookToLibrary() {
    let title = prompt('Book Name: ');
    let author = prompt('Author: ');
    let pages = prompt('Pages: ')
    let read = prompt('Read: ')

    const addBook = new Book(title, author, pages, read);
    myLibrary.push(addBook);
  }





const book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read');
const book2 = new Book('Harry Potter', 'J. K. Rowling', 212, 'not read');
const book3 = new Book('The Witcher', 'Andrzej Sapkowski', 320, 'not read')

myLibrary.push(book1, book2, book3);

addBookToLibrary();

console.log(myLibrary);