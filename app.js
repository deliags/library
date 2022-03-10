const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");
const inputCard = document.querySelector('#input-card');
const inputForm = document.querySelector('.form');
const readSwitch = document.querySelector('#switch-toggle');
const readLabel = document.querySelector('.read-label');
const submitButton = document.querySelector('.submit');
const bookGrid = document.querySelector('#books-grid');
const mainLabel = document.querySelector('.switch');
const switchContainer = document.querySelector('.switch-container');


let bookId = 0;
let library = [];

//Constructor Book Object
function Book(name, author, pages, read, id) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
};

//Adds a input card for the user to write info
const createInputCard = () => {
  inputCard.classList.remove('card-inactive')
  inputCard.classList.add('card-active');
  bookGrid.classList.add('grid-blurred');
  resetInput();
  toggleSwitchLabel();
};

const resetInput = () => {
  inputForm.reset();
};

const toggleSwitchLabel = () => {

  if (readSwitch.checked === true) {
    readLabel.textContent = "READ";

  } else if (!readSwitch.checked) {
    readLabel.textContent = "NOT READ"
  }
  switchContainer.insertBefore(readLabel, mainLabel);
  readSwitch.addEventListener('click', toggleSwitchLabel);
};

const removeInputCard = () => {
  inputCard.classList.add('card-inactive');
  inputCard.classList.remove('card-active');
  bookGrid.classList.remove('grid-blurred');
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

  return new Book(bookTitle, bookAuthor, bookPages, isRead(), bookId);
};

//Adds the input book to the library
const addBookToLibrary = () => {
  const newBook = getUserInput();
  library.push(newBook);
  bookId++;
  removeInputCard();
  showBookCard();
};

const showBookCard = () => {
  resetBookGrid();
  library.forEach(book => {
    createBookCard(book);
  });
};

const createBookCard = (book) => {
  const card = document.createElement('div');
  card.classList.add("card");
  card.setAttribute("data-id", bookId);

  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  //Content 
  title.textContent = book.name;
  author.textContent = book.author;
  pages.textContent = `${book.pages} pages`;
  !book.read ? read = "not read" : read = "read";
  read.textContent = read;
  readBtn.textContent = "READ";
  removeBtn.textContent = "REMOVE";

  //Style
  title.style.color = "#298FFF";
  readBtn.classList.add("action-read");
  removeBtn.classList.add("action-remove");

  card.append(title, author, pages, read, readBtn, removeBtn);
  bookGrid.appendChild(card);

  removeBtn.addEventListener('click', removeBookToLibrary);
};

const removeBookToLibrary = () => {



  library.forEach(book => {
    //not working when deleting last element
    let index = library.findIndex((b) => b.id === book.id);
    library.splice(index, 1);

    const clickedButton = document.querySelector('.action-remove');
    // const bookSelected = book;
    // library.filter(function (book) {
    //   return book === bookSelected
    // });
    const cardRemove = clickedButton.parentNode;
    cardRemove.remove();
    showBookCard();
  });
};

const validateinput = () => {

  var inputbox = document.getElementById("book-pages");

  if (isNaN(parseFloat(inputbox.value))) {
    inputbox.style.border = "3px solid #ff204c";
  } else {
    inputbox.style.border = "3px solid #1db75a";
  }
}

const resetBookGrid = () => {
  bookGrid.innerHTML = '';
}

//Event Listeners
addButton.addEventListener('click', createInputCard);
submitButton.addEventListener('click', addBookToLibrary);