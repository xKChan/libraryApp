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
}

// Grab information from form --> stores in a new book --> book gets stored in library array
function addBookToLibrary() {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let addBook = new Book(title, author, pages, read);
  myLibrary.push(addBook);
  displayBooks();
}

// button to submit user infomration and calls addBookToLibrary to store the book information
document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
  });

function displayBooks() {
  // Removes all books from html so does not duplicate
  let showBooks = document.querySelector(".books");
  while (showBooks.firstChild) {
    showBooks.removeChild(showBooks.firstChild);
  }
  //   Iterate through the library araay to print each book
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.textContent = "";
    bookEl.textContent = `${book.title}`;
    showBooks.appendChild(bookEl);
  }
}
