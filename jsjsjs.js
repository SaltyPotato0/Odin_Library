
const form = document.querySelector("#form");
const bookContainer = document.querySelector(".bookContainer");


const myLibrary = [
  new Book("Lord of The Rings", "J.R.R Tolkin", "2444", "Not read"),
  new Book("Harry Potter", "J.K. Rowling", "4652", "Not read"),
  new Book("Game of thrones", "G.R.R Marthin", "6544", "Not read")

];



form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titleInput  = document.querySelector("#title");
    const authorInput = document.querySelector("#author");
    const pagesInput = document.querySelector("#pages");
    const radioInput = document.querySelector("fieldset input[type='radio']:checked");
    const bookDivs = document.querySelectorAll(".bookCard");
    
   //bookDivs.forEach((e)=>{
   //  bookContainer.removeChild(e);
   // })

    myLibrary.push(new Book(titleInput.value, authorInput.value, pagesInput.value, radioInput.value));
    newBook(myLibrary.length -1);
    //displayAllBooks();
    form.reset();

   
  }
 
);


function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
  

}

function addAllBooks() {
  for (let i = 0; i<myLibrary.length; i++){
    newBook(i);
    
  }

}


Book.prototype.chageReadStatus = function(){

  
    if(this.readStatus === "Not read"){
        this.readStatus = "Read"
        this.readStatusCreate.textContent = "Read status: " + this.readStatus
    } else {
        this.readStatus = "Not read"
        this.readStatusCreate.textContent = "Read status: " + this.readStatus
    }
  console.log(myLibrary);
};
//console.log(myLibrary);

function newBook(i){
  
    let book = myLibrary[i];
    //ceate div for book and add bookCard class to it
    book.bookCardcreate = document.createElement("div");
    book.bookCardcreate.classList.add("bookCard");
    //this.bookCardcreate.dataset.indexNumber = index;
    book.bookCardcreate.dataset.index = i;
    bookContainer.appendChild(book.bookCardcreate);
    //create h3 title and append it to book card

   
    book.titleCreate = document.createElement("h3")
    book.titleCreate.classList.add("title");
    book.bookCardcreate.appendChild(book.titleCreate);
    book.titleCreate.textContent = book.title;
    //create author p 
    book.authorCreate = document.createElement("p");
    book.authorCreate.classList.add("author");
    book.bookCardcreate.appendChild(book.authorCreate);
    book.authorCreate.textContent = "Author: " + book.author;
    //create pages p 
    book.pagesCreate = document.createElement("p");
    book.pagesCreate.classList.add("pages");
    book.bookCardcreate.appendChild(book.pagesCreate);
    book.pagesCreate.textContent = "Pages: " + book.pages;
    //create read status p 
    book.readStatusCreate = document.createElement("p");
    book.readStatusCreate.classList.add("readStatus");
    book.bookCardcreate.appendChild(book.readStatusCreate);
    book.readStatusCreate.textContent = "Read status: " + book.readStatus;

    book.indexCreate = document.createElement("p");
    book.indexCreate.classList.add("index");
    book.bookCardcreate.appendChild(book.indexCreate);
    book.indexCreate.textContent = "Index: " + book.bookCardcreate.dataset.index;


    
  /*
  this.libIndex = document.createElement("p");
  this.libIndex.classList.add("libIndex");
  this.bookCardcreate.appendChild(this.libIndex);
  this.libIndex.textContent = "Librery index: ";

  */
  book.imgContaner = document.createElement("div");
  book.imgContaner.classList.add("imgBtn");


  book.readStatusBtn = document.createElement("img");
  book.imgContaner.appendChild(book.readStatusBtn);
  book.readStatusBtn.src = "icons/book.svg";


  book.imgButton = document.createElement("img");
  book.imgContaner.appendChild(book.imgButton);
  book.imgButton.src = "icons/delete.svg";

  book.bookCardcreate.appendChild(book.imgContaner);
  
  book.imgButton.addEventListener("click", ()=>{
    bookContainer.removeChild(book.bookCardcreate);
    //myLibrary.splice(, 1);
    let index = myLibrary.findIndex(e => e.bookCardcreate === book.bookCardcreate);
    myLibrary.splice(index, 1);
    updateDataIndex();
   
    
  })  

  book.readStatusBtn.addEventListener("click", ()=>{
    book.chageReadStatus();

  })
  console.log(myLibrary);
  
  
};

function updateDataIndex(){
  for(let i = 0; i < myLibrary.length; i++){
    myLibrary[i].bookCardcreate.dataset.index = i;
    myLibrary[i].indexCreate.textContent = "Index: " +  myLibrary[i].bookCardcreate.dataset.index;
    console.log( myLibrary[i]);
  }
}


Book.prototype.newBook = function(){

};
const newBookbtn = document.querySelector(".newBookbtn");
const dialog = document.querySelector("dialog");
const canclebtn =  document.querySelector(".cancle");

newBookbtn.addEventListener("click", () => {
    dialog.showModal();
})

canclebtn.addEventListener("click", ()=>{
  form.reset();
  dialog.close();
})


addAllBooks();