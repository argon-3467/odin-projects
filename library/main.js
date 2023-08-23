let menuBar = document.querySelector(".menu-bar");
let option = document.querySelector(".option");
menuBar.addEventListener("click", (e) => {
  menuBar.classList.toggle("change");
  option.toggleAttribute("hidden");
});

menuBar.addEventListener("keydown", (e) => {
  menuBar.classList.toggle("change");
  option.toggleAttribute("hidden");
});

const myLibrary = [];

function Book(name, author, pages, date, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.date = date;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  showBook(book);
}

function showBook(book) {
  let books = document.querySelector(".books");
  let card = document.createElement("div");
  card.className = "card";
  let paraName = document.createElement("p");
  paraName.innerHTML = `${book.name}`;
  card.appendChild(paraName);
  let paraAuthor = document.createElement("p");
  paraAuthor.innerHTML = `${book.author}`;
  card.appendChild(paraAuthor);
  let paraPages = document.createElement("p");
  paraPages.innerHTML = `${book.pages} pages`;
  card.appendChild(paraPages);
  let paraDate = document.createElement("p");
  paraDate.innerHTML = `${book.date}`;
  card.appendChild(paraDate);
  let buttonRead = document.createElement("button");
  if (book.read) {
    buttonRead.className = `read`;
    buttonRead.innerHTML = `read`;
  } else {
    buttonRead.className = `unread`;
    buttonRead.innerHTML = `unread`;
  }
  let cardDiv = document.createElement("div");
  cardDiv.className = "edit-delete";
  cardDiv.innerHTML =
    '<button><i class="fa-solid fa-pen-to-square"></i></button> <button><i class="fa fa-trash"></i></button>';
  cardDiv.appendChild(buttonRead);
  card.appendChild(cardDiv);
  books.appendChild(card);
}

let book1 = new Book("name", "author", "250", "01-01-2004", true);
let book2 = new Book("name", "author", "250", "01-01-2004", true);
let book3 = new Book("name", "author", "250", "01-01-2004", false);
let book4 = new Book("name", "author", "250", "01-01-2004", true);
let book5 = new Book("name", "author", "250", "01-01-2004", false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
