const Library = []

function Book(name, author, pages, yearPublished) {
    this.name = name
    this.author = author
    this.pages = pages;
    this.yearPublished = yearPublished
}

function addBookToLibrary(event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    for (let book of Library) {
        if (book.name == name) {
            alert("Already exists");
            return;
        }
    }
    const author = document.querySelector("#authorName").value;
    const pages = document.querySelector("#pages").value;
    const year = document.querySelector("#year").value;

    Library.push(new Book(name, author, pages, year))
    console.log(Library)
    
}

function removeBook(event) {
    event.preventDefault()
    /* implement functionality */
}

/* handle form */
const addBookForm = document.querySelector("#AddBookForm");
const removeBookForm = document.querySelector("#RemoveBookForm");


addBookForm.addEventListener("submit", addBookToLibrary);
removeBookForm.addEventListener("submit", removeBook)

/* handle nav clicks */
document.querySelector("#nav1").addEventListener("click", (event) => {
    event.preventDefault();
    
})

document.querySelector("#nav2").addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector("#BooksCatalogue").style.display = "none";
    document.querySelector("#AddBook").style.display = "block";
})