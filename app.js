const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");
const inputForm = document.querySelector('.form');
const readSwitch = document.querySelector('#switch-toggle');
const readLabel = document.querySelector('.read-label');

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

const theHobbit = new Book("The Hobbit", "Tolkien", 282, true);
const potter = new Book("Harry Potter", "Rowling", 145, true);
const lolita = new Book("Lolita", "Nabokov", 110, false);

function addBookToLibrary(book) {
  library.push(book);
  return "Book added"
}

const addCard = () => {

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
addButton.addEventListener('click', addCard);