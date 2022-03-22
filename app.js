const Library = (() => {
  const addButton = document.querySelector(".add-book");
  const submitButton = document.querySelector('.submit');
  const bookGrid = document.querySelector('#books-grid');

  let bookId = 0;
  let library = [];

  //Constructor Book Class
  class Book {
    constructor(name, author, pages, read, id) {
      this.name = name;
      this.author = author;
      this.pages = pages;
      this.read = read;
      this.id = id;
    }
  };

  //Adds the input book to the library
  const addBookToLibrary = () => {
    const newBook = getUserInput();
    library.push(newBook);
    bookId++;
    removeInputCard();
    showBookCard();
  };

  //Adds a input card for the user to write info
  const createInputCard = () => {
    const inputCard = document.querySelector('#input-card');
    inputCard.classList.remove('card-inactive')
    inputCard.classList.add('card-active');
    bookGrid.classList.add('grid-blurred');
    resetInput();
    toggleSwitchLabel();

    return {
      inputCard
    }
  };

  const resetInput = () => {
    const inputForm = document.querySelector('.form');
    inputForm.reset();
  };

  const toggleSwitchLabel = () => {

    const readSwitch = document.querySelector('#switch-toggle');
    const readLabel = document.querySelector('.read-label');
    const mainLabel = document.querySelector('.switch');
    const switchContainer = document.querySelector('.switch-container');

    if (readSwitch.checked === true) {
      readLabel.textContent = "READ";

    } else if (!readSwitch.checked) {
      readLabel.textContent = "NOT READ"
    }
    switchContainer.insertBefore(readLabel, mainLabel);
    readSwitch.addEventListener('click', toggleSwitchLabel);

    return {
      readSwitch
    }
  };

  const removeInputCard = () => {
    const {
      inputCard
    } = createInputCard();
    inputCard.classList.add('card-inactive');
    inputCard.classList.remove('card-active');
    bookGrid.classList.remove('grid-blurred');
  };

  const getUserInput = () => {
    const bookTitle = document.querySelector('#book-name').value;
    const bookAuthor = document.querySelector('#book-author').value;
    const bookPages = document.querySelector('#book-pages').value;

    const {
      readSwitch
    } = toggleSwitchLabel();
    //Saves the "read" status of a book entry
    const isRead = readSwitch.onchange = () => {
      let switchValue = readSwitch.checked;
      return switchValue;
    };

    return new Book(bookTitle, bookAuthor, bookPages, isRead(), bookId);
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
    const readStatus = document.createElement('p');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button');

    //Content 
    title.textContent = book.name;
    author.textContent = book.author;
    pages.textContent = `${book.pages} pages`;
    !book.read ? readStatus.textContent = "not read" : readStatus.textContent = "read";
    readBtn.textContent = "READ";
    removeBtn.textContent = "REMOVE";

    //Style
    title.style.color = "#298FFF";
    readBtn.classList.add("action-read");
    removeBtn.classList.add("action-remove");
    readStatus.classList.add("read-status")

    card.append(title, author, pages, readStatus, readBtn, removeBtn);
    bookGrid.appendChild(card);

    readBtn.addEventListener('click', () => {
      toggleRead(book.id)
    })
    removeBtn.addEventListener('click', () => {
      removeBookFromLibrary(book.id)
    });
  };

  const removeBookFromLibrary = (removeBookId) => {

    removeBookId = parseInt(removeBookId);

    let index = library.findIndex((book) => book.id == removeBookId);
    library.splice(index, 1);

    const clickedButton = document.querySelector('.action-remove');
    const cardRemove = clickedButton.parentNode;
    cardRemove.remove()
    showBookCard()
  };

  const toggleRead = (readBookId) => {
    readBookId = parseInt(readBookId);
    const readStatus = document.querySelector('.read-status')
    const readBtn = document.querySelector('.action-read')
    library.findIndex((book) => {
      if (book.id == readBookId) {
        
        book.read = !book.read

        if (book.read) {
          readStatus.textContent = "read"
          readBtn.textContent = "not read"
        } else {
          readStatus.textContent = "not read"
          readBtn.textContent = "read"
        }
      };
    });
  }

  const resetBookGrid = () => {
    bookGrid.innerHTML = '';
  }

  //Event Listeners
  addButton.addEventListener('click', createInputCard);
  submitButton.addEventListener('click', addBookToLibrary);

})();