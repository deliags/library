const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");
const inputCard = document.querySelector('#input-card');
const inputForm = document.querySelector('.form');
const readSwitch = document.querySelector('#switch-toggle');
const readLabel = document.querySelector('.read-label');
const submitButton = document.querySelector('.submit');


let library = [];

//Constructor Book Object
function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
};

//Adds a input card for the user to write info
const createInputCard = () => {
  inputCard.classList.remove('card-inactive')
  inputCard.classList.add('card-active');
  resetInput();
  toggleSwitchLabel();
};

const resetInput = () => {
  inputForm.reset();
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

const removeInputCard = () => {
  inputCard.classList.remove('card-active');
  inputCard.classList.add('card-inactive');
};

const getUserInput = () => {
  const bookTitle = document.querySelector('#book-name').value;
  const bookAuthor = document.querySelector('#book-author').value;
  const bookPages = document.querySelector('#book-pages').value;

  //Saves the "read" status of a book entry
  const isRead = readSwitch.onchange = () => {
    let switchValue = readSwitch.checked;
    return switchValue;
  };

  return new Book(bookTitle, bookAuthor, bookPages, isRead());
};

//Adds the input book to the library
function addBookToLibrary () {
  const newBook = getUserInput();
  library.push(newBook);
  removeInputCard();
  showBookCard();
};

const showBookCard = () => {
  library.forEach(book => {
    const card = document.createElement('div');
    card.classList.add("card");
    
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');

    title.textContent = book.name;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    !book.read ? read = "not read" : read = "read";
    read.textContent = read;

    card.append(title, author, pages, read);
    main.appendChild(card);
  });
};



//Event Listeners
addButton.addEventListener('click', createInputCard);
submitButton.addEventListener('click', addBookToLibrary);