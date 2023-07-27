// const prompt = require("prompt-sync")();

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

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages}, ${read}`;
  };
}

function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);
  console.log(myLibrary);
}

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

// console.log(myLibrary);
