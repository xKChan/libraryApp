// const prompt = require("prompt-sync")();

// Array to store book information
let myLibrary = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 295,
    read: "Not Read",
  },
  {
    title: "Harry Potter",
    author: "J. K. Rowling",
    pages: 320,
    read: "Read",
  },
  {
    title: "The Witcher",
    author: "Andrzej Sapkowski",
    pages: 400,
    read: "Not Read",
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
  let readCheck = true;
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  if (read == true) {
    readCheck = "Read";
  } else {
    readCheck = "Not Read";
  }

  let addBook = new Book(title, author, pages, readCheck);
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
  let showBooks = document.querySelector(".books-container");
  while (showBooks.firstChild) {
    showBooks.removeChild(showBooks.firstChild);
  }
  //   Iterate through the library araay to print each book
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "cards");
    bookEl.innerHTML = "";
    bookEl.innerHTML = `<h3 class "bookTitle">${book.title}</h3> Written By: ${book.author} <p>${book.pages} Pages / ${book.read}</p>`;
    const cancelImg = document.createElement("img");
    cancelImg.setAttribute("id", "trash");
    cancelImg.setAttribute("data-book", i);
    cancelImg.src = "/trash-can-outline.svg";
    bookEl.appendChild(cancelImg);
    showBooks.appendChild(bookEl);
  }
  removeBook();
}

// Hide form when cancel is clicked
function cancel() {
  document.querySelector("#cancel").addEventListener("click", () => {
    document.querySelector("#new-book-form").style.display = "none";
  });
}

// Form pops up
function addBookForm() {
  document.querySelector("#new-book-btn").addEventListener("click", () => {
    document.querySelector("#new-book-form").removeAttribute("style");
  });
}

// Remove book
function removeBook(index) {
  let deleteBook = document.querySelectorAll("[data-book]");
  deleteBook.forEach((trash) => {
    trash.addEventListener("click", () => {
      let bookNum = data - book;
      console.log(bookNum);
    });
  });
}

addBookForm();
cancel();
