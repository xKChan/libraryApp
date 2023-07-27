// const prompt = require("prompt-sync")();

// Array to store book information
let myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: false,
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pages: 320,
    read: true,
  },
  {
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    pages: 400,
    read: false,
  },
];

// book constructor for book properties
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

// Grab information from form --> stores in a new book --> book gets stored in library array
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);
  console.log(myLibrary);
}

// button to submit user infomration and calls addBookToLibrary to store the book information
document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });
