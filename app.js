let library = [];

//Constructor Book Object
function Book (name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = function () {
  !this.read ? read = "not read" : read = "read";
  return `${this.name}, by ${this.author}, ${this.pages} pages, ${read}`
}



const theHobbit = new Book("Hobbit", "Tolkien", 282, false)

console.log(theHobbit.info());