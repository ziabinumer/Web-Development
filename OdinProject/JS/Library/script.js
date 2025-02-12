const list = document.querySelector("#bookList");

const Library = []

function Book(id, name, author, pages, yearPublished, isAvailable) {
    this.id = id
    this.name = name
    this.author = author
    this.pages = pages;
    this.yearPublished = yearPublished
    this.available = isAvailable;
}

function addBookToLibrary(event) {
    event.preventDefault();
    const name = document.querySelector("#name");
    for (let book of Library) {
        if (book.name == name.value) {
            alert("Already exists");
            return;
        }
    }
    const author = document.querySelector("#authorName");
    const pages = document.querySelector("#pages");
    const year = document.querySelector("#year");

    const newBook = new Book(Library.length, name.value, author.value, pages.value, year.value, true);

    Library.push(newBook);

    updateCatalogue(newBook);
    
    // clear input fields
    name.value = "";
    author.value = "";
    pages.value = null;
    year.value = null;
    
}

function updateCatalogue(newBook) {
    let li = document.createElement("li");
    li.id = "b" + newBook.id

    let p = document.createElement("p");
    p.innerHTML = `
        <b>Name</b>: ${newBook.name}<br>
        <b>Author</b>: ${newBook.author}<br>
        <b>Page Count</b>: ${newBook.pages}<br>
        <b>Year Published</b>: ${newBook.yearPublished}
    `;

    
    let btn = document.createElement("button");
    btn.innerText = "Delete Book"
    btn.addEventListener("click", () => {
        let id = li.id;
 
        list.removeChild(document.querySelector(`#${id}`))
        
        id = id.match(/(\d+)/)[0];
        
        for (let book of Library) {
            if (book.id == id) {
                book.available = false;
                
            }
        }
    })
    
    li.appendChild(p);
    li.appendChild(btn);

    list.appendChild(li);
    return
}

function removeBook(event) {
    event.preventDefault()
    /* implement functionality */
}

/* handle form */
const addBookForm = document.querySelector("#AddBookForm");

addBookForm.addEventListener("submit", addBookToLibrary);

