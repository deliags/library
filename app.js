const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");
const inputCard = document.querySelector('#input-card');
const inputForm = document.querySelector('.form');
const readSwitch = document.querySelector('#switch-toggle');
const readLabel = document.querySelector('.read-label');
const submitButton = document.querySelector('.submit');
const bookTitle = document.querySelector('#book-name').value;
const bookAuthor = document.querySelector('#book-author').value;
const bookPages = document.querySelector('#book-pages').value;

//Saves the "read" status of a book entry
const isRead = readSwitch.onchange = () => {
  let switchValue = readSwitch.checked;
  return switchValue;
};

let library = [];

//Constructor Book Object
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Adds new info function
Book.prototype.info = function () {
  !this.read ? read = "not read" : read = "read";
  return `Title: ${this.name}
          \nAuthor: ${this.author}
          \nPages: ${this.pages}
          \nStatus: ${read}`;
}

//Input Book
const newBook = new Book(bookTitle, bookAuthor, bookPages, isRead());

//Adds the input book to the library
function addBookToLibrary(book) {
  library.push(book);
  inputCard.classList.remove('card-active')
  inputCard.classList.add('card-inactive');
  showBookCard();
  return "Book added"
}

//Adds a input card for the user to write info
const createNewBook = () => {
  inputCard.classList.remove('card-inactive')
  inputCard.classList.add('card-active');
  resetInput();
  toggleSwitchLabel();
};


const toggleSwitchLabel = () => {

  if (readSwitch.checked === true) {
    readLabel.textContent = "READ";
    inputForm.appendChild(readLabel)

  } else if (!readSwitch.checked) {
    readLabel.textContent = "NOT READ"
    inputForm.appendChild(readLabel);
  }

  readSwitch.addEventListener('click', toggleSwitchLabel);
};

const resetInput = () => {
  inputForm.reset();
  //something for the switch
}

const resetBook = () => {
  newBook.name = '';
  newBook.author = '';
  newBook.pages = '';
  newBook.read = '';
}


const showBookCard = () => {
  library.forEach(book => {
    const card = document.createElement('div');
    card.classList.add("card");
    // card.textContent = book.info();
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')

    title.textContent = newBook.name
    author.textContent = newBook.author
    pages.textContent = `${newBook.pages} pages`
    !newBook.read ? read = "not read" : read = "read";
    read.textContent = read;

    card.append(title, author, pages, read)
    main.appendChild(card);
  });
}


//Event Listeners
addButton.addEventListener('click', createNewBook);
submitButton.addEventListener('click', () => addBookToLibrary(newBook));