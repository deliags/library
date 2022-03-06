const main = document.querySelector("#main");
const addButton = document.querySelector(".add-book");

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

const inputCard = document.createElement('div');
inputCard.classList.add('input-card');


const inputForm = document.createElement('form');
inputForm.setAttribute("method", "post");
inputForm.setAttribute("action", "submit");


const inputName = document.createElement('input');
inputName.setAttribute('type', 'text');
inputName.setAttribute('name', 'book-name');
inputName.setAttribute('placeholder', 'Name');

const inputAuthor = document.createElement('input');
inputAuthor.setAttribute('type', 'text');
inputAuthor.setAttribute('name', 'book-author');
inputAuthor.setAttribute('placeholder', 'Author');

const inputPages = document.createElement('input');
inputPages.setAttribute('type', 'text');
inputPages.setAttribute('name', 'book-pages');
inputPages.setAttribute('placeholder', 'Pages');

const mainLabel = document.createElement('label');
mainLabel.setAttribute('class', 'switch');

const switchToggle = document.createElement('input');
switchToggle.setAttribute('type', 'checkbox');
switchToggle.setAttribute('id', 'switch-toggle');

const sliderRound = document.createElement('span');
sliderRound.classList.add('slider', 'round');

//Toggle Switch: Read or Not Read
const readSwitch = document.querySelector("#switch-toggle");

// Display read status
const labelRead = document.createElement("label");
labelRead.setAttribute('class', 'label-read');
labelRead.setAttribute('for', 'slider');

const addCard = () => {
  main.appendChild(inputCard);
  inputCard.appendChild(inputForm);
  inputForm.appendChild(inputName);
  inputForm.appendChild(inputAuthor);
  inputForm.appendChild(inputPages);

  //Switch toggle read
  inputForm.appendChild(mainLabel);
  mainLabel.appendChild(switchToggle);
  mainLabel.appendChild(sliderRound);

  // Changes the label of checkbox
  const toggleSwitchLabel = () => {
    let isRead = false;

    if (readSwitch.checked) {
      labelRead.textContent = "READ";
      inputForm.appendChild(labelRead)
      isRead = true;
    } else {
      labelRead.textContent = "NOT READ"
      inputForm.appendChild(labelRead);
    }
  };

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