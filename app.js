const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");
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
  return `${this.name} 
          ${this.author}
          ${this.pages} 
          ${read}`;
}

//Input Book
const newBook = new Book(bookTitle, bookAuthor, bookPages, isRead());

//Adds the input book to the library
function addBookToLibrary(book) {
  library.push(book);
  return "Book added"
}

//Adds a input card for the user to write info
const createNewBook = () => {

  const inputCard = document.querySelector('#input-card');
  inputCard.classList.remove('card-inactive')
  inputCard.classList.add('card-active');
  
  toggleSwitchLabel(); 
};


const toggleSwitchLabel = () => {
  
  if (readSwitch.checked === true) {
    readLabel.textContent = "READ";
    inputForm.appendChild(readLabel)
    
  } else if(!readSwitch.checked) {
    readLabel.textContent = "NOT READ"
    inputForm.appendChild(readLabel);
  }

  readSwitch.addEventListener('click', toggleSwitchLabel);
};



// library.forEach(book => {
//   // const card = document.createElement('div');
//   // card.classList.add("card");
//   // card.textContent = book.info();
//   // main.appendChild(card);

// })


//Event Listeners
addButton.addEventListener('click', createNewBook);
submitButton.addEventListener('click', () => addBookToLibrary(newBook));
