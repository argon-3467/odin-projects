class Book {
  constructor(name, author, pages, date, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.date = date;
    this.read = read;
  }
  // Adds given book to the library
  add() {
    myLibrary.push(this);
    updateEvents();
  }

  // Delete a given book from the library
  delete() {
    let index = myLibrary.findIndex((book) => book.name === this.name);
    myLibrary.splice(index, 1);
    updateEvents();
  }

  // Edit a given book in the library
  edit(book2) {
    let index = myLibrary.findIndex((book) => book.name === this.name);
    myLibrary.splice(index, 1, book2);
    updateEvents();
  }

  // create a book card and append it to the books on the page
  show(books) {
    let card = document.createElement("div");
    card.className = "card";
    let paraName = document.createElement("p");
    paraName.innerHTML = `${this.name}`;
    card.appendChild(paraName);
    let paraAuthor = document.createElement("p");
    paraAuthor.innerHTML = `${this.author}`;
    card.appendChild(paraAuthor);
    let paraPages = document.createElement("p");
    paraPages.innerHTML = `${this.pages} pages`;
    card.appendChild(paraPages);
    let paraDate = document.createElement("p");
    paraDate.innerHTML = `Added: ${this.date}`;
    card.appendChild(paraDate);
    let buttonRead = document.createElement("button");
    if (this.read) {
      buttonRead.className = `read`;
      buttonRead.innerHTML = `read`;
    } else {
      buttonRead.className = `unread`;
      buttonRead.innerHTML = `unread`;
    }
    let cardDiv = document.createElement("div");
    cardDiv.className = "edit-delete";
    cardDiv.innerHTML =
      '<button class="delete"><i class="fa fa-trash"></i></button>';
    cardDiv.appendChild(buttonRead);
    card.appendChild(cardDiv);
    books.appendChild(card);
  }
}

let menuBar = document.querySelector(".menu-bar");
let option = document.querySelector(".option");
let addButton = document.querySelector(".add");
let addBookButton = document.querySelector(".submit");
let form = document.querySelector("form");
let overlay = document.querySelector(".overlay");
let books = document.querySelector(".books");

let myLibrary = [];
let book1 = new Book(
  "A Game of Thrones",
  "George R. R. Martin",
  "694",
  "01-09-1996",
  true
);

book1.add();

menuBar.addEventListener("click", (e) => {
  menuBar.classList.toggle("change");
  option.toggleAttribute("hidden");
});

menuBar.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    menuBar.classList.toggle("change");
    option.toggleAttribute("hidden");
  }
});

addButton.addEventListener("click", (e) => {
  form.reset();
  form.toggleAttribute("hidden");
  overlay.toggleAttribute("hidden");
});

overlay.addEventListener("click", () => {
  form.toggleAttribute("hidden");
  overlay.toggleAttribute("hidden");
});

function updateEvents() {
  books.textContent = "";
  myLibrary.forEach((book) => {
    book.show(books);
  });
  let readUnread = document.querySelectorAll(".read, .unread");
  readUnread.forEach((button) => {
    button.addEventListener("click", () => {
      let name = button.parentElement.parentElement.firstChild.innerHTML;
      let index = myLibrary.findIndex((book) => book.name === name);
      if (button.className === "read") {
        button.className = "unread";
        button.textContent = "unread";
        myLibrary[index].read = false;
      } else {
        button.className = "read";
        button.textContent = "read";
        myLibrary[index].read = true;
      }
    });
  });

  let deleteBookButton = document.querySelectorAll(".delete");

  deleteBookButton.forEach((button) => {
    button.addEventListener("click", (event) => {
      let name = button.parentElement.parentElement.firstChild.innerHTML;
      let index = myLibrary.findIndex((book) => book.name === name);
      myLibrary[index].delete();
    });
  });
}

addBookButton.addEventListener("click", (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const date = document.getElementById("date").value;
  const readIt = document.getElementById("read-it").checked;

  // Check if any of the input fields are empty
  if (name === "" || author === "" || pages === "" || date === "") {
    alert("Any of the field can't be empty");
    return; // Stop execution if any field is empty
  }
  if (pages <= 0) {
    alert("No. of pages must be positve");
    return; // Stop execution if any field is empty
  }

  // Now you can use these values to add a new book or perform any other actions
  new Book(name, author, pages, date, readIt).add();
  // You can also clear the form fields after getting the values if needed
  form.reset();
});
